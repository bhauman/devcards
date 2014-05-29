(ns frontier.core
  (:require
   [sablono.core :as sab :include-macros true]
   [cljs.core.async :as async
    :refer [chan put! map< close! map>]]
   [devcards.util.edn-renderer :refer [html-edn]])
  (:require-macros
   [cljs.core.async.macros :as m :refer [go-loop go]]))

(enable-console-print!)

(defn- dev-null [in]
  (go-loop [] (if (nil? (<! in)) :closed (recur))))

(defprotocol IInit
  (-initialize [_ effect-chan event-chan]))

(defprotocol IStop
  (-stop [_]))

(defprotocol ITransform
  (-transform [_ msg state]))

(defprotocol IEffect
  (-effect [_ msg state event-chan effect-chan]))

(defprotocol IInputFilter
  (-filter-input [_ msg state]))

(defprotocol IDerive
  (-derive [_ state]))

(defprotocol IRender
  (-render [_ state]))

;; only using this for namespacing right now
(defprotocol IWillAccept
  (-will-accept? [o msg]))

(defn add-effects [state & args]
  (update-in state [:__effects]
             (fn [effects]
               (concat effects args))))

;; need to add will accept
(defn compose [& components]
  (let [initializers    (filter #(satisfies? IInit %) components)
        stoppers        (filter #(satisfies? IStop %) components)
        transforms      (filter #(satisfies? ITransform %) components)
        effects         (filter #(satisfies? IEffect %) components)
        input-filters   (filter #(satisfies? IInputFilter %) components)
        derivatives     (filter #(satisfies? IDerive %) components)
        ifilter (apply comp (mapv
                             (fn [pl]
                               (let [func (partial -filter-input pl)]
                                 (fn [[msg state]]
                                   [(func msg state) state])))
                             (reverse input-filters)))
        itrans (apply comp (mapv
                            (fn [pl]
                              (let [func (partial -transform pl)]
                                (fn [[msg state]]
                                  [msg (func msg state)])))
                            (reverse transforms)))
        ideriv (apply comp (mapv
                            (fn [pl]
                              (partial -derive pl))
                            (reverse derivatives)))        
        ieffects (fn [msg state event-chan effect-chan]
                   (doseq [pl (reverse effects)]
                     (-effect pl msg state event-chan effect-chan)))]
    (reify
      ICloneable
      (-clone [o] o)      
      IInit
      (-initialize [_ state event-chan]
        (doseq [pl initializers]
          (-initialize pl state event-chan)))
      IStop
      (-stop [_]
        (doseq [pl stoppers]
          (-stop pl)))      
      ITransform
      (-transform [_ msg state]
        (last (itrans [msg state])))
      IEffect
      (-effect [_ msg state event-chan effect-chan]
        (ieffects msg state event-chan effect-chan))
      IInputFilter
      (-filter-input [_ msg state]
        (first (ifilter [msg state])))
      IDerive
      (-derive [_ state]
        (ideriv state)))))

(defn make-renderable [component render-function]
  (specify component
    IRender
    (-render [_ state]
      (render-function state))))

(defn trans-helper* [comp* effect-handler state msg]
  (if-let [new-state (-transform comp* msg state)]
    (do
      (effect-handler (:__effects new-state))
      (-> new-state
          (dissoc :__effects)))
    state))

(defn state-from-msg-list [component
                           msg-list
                           initial-state]
  (reduce (partial trans-helper* component identity)
          initial-state
          msg-list))

(defn transform-with-effects [component effect-chan state msg]
  (trans-helper* component 
                 #(doseq [ef %]
                    (put! effect-chan ef))
                 state msg))

(defn move-to-top [path state]
  (if-let [d (get-in state path)]
    (let [k (last path)
          ns (update-in state
                        (butlast path)
                        (fn [s] (dissoc s k)))]
      (assoc ns k d))
    state))

(defn move-effects-to-top [path state]
  (move-to-top (conj (if (keyword? path) [path] path)
                     :__effects) state))

;; scoping 

(defn path->box [path]
  (if (keyword? path) [path] path))

(defn path->unbox [path]
  (if (= 1 (count path)) (first path) path))

(defn msg-prefix [path [msg-name data]]
  [(vec (concat (path->box path)
                (path->box msg-name))) data])

(defn msg-path->local-msg-name [path msg-name]
  (let [path     (path->box path)
        len      (count path)]
    (when (= (take len (path->box msg-name)) path)
      (let [new-path (vec (drop len (path->box msg-name)))]
        (path->unbox new-path)))))

(defn msg->local-msg [path [msg-name data]]
  (when-let [local-msg-name (msg-path->local-msg-name path msg-name)]
    [local-msg-name data])) 

(defn ns-input-filter [path [msg-name data] f]
  (if-let [local-msg (msg->local-msg path [(path->box msg-name)
                                           data])]
    (msg-prefix path (f local-msg))
    [msg-name data]))

(defn move-effects-to-top-fix-ns [path state]
  (let [path' (path->box path)
        state' (move-to-top (conj path' :__effects) state)]
    (if-let [effects (:__effects state')]
      (assoc state' :__effects
             (map
              (partial msg-prefix path') 
              effects))
      state')))

(defn ns-transform [path msg state system]
  (let [path (path->box path)]
    (if-let [local-msg (msg->local-msg path msg)]
      (move-effects-to-top-fix-ns
       path
       (update-in state path
                  (fn [scoped-state]
                    (-transform system local-msg scoped-state))))
      state)))

(defn ns-scoped-channel [path channel]
  (map> (partial msg-prefix path) channel))

;; this an interesting exploration but not conviced that
;; it's the best way to do this
;; cursors are very interesting
(defrecord Namespacer [path system]
  IWillAccept
  (-will-accept? [_ [msg-name _]]
    (msg-path->local-msg-name path msg-name))
  IInit
  (-initialize [o state event-chan]
    (-initialize system state event-chan))
  IStop
  (-stop [_]
    (-stop system))
  IInputFilter
  (-filter-input [_ msg state]
    (ns-input-filter path msg
                     (fn [msg]
                       (-filter-input system msg state))))  
  ITransform
  (-transform [o msg state]
    (ns-transform (path->box path) 
                  msg state system))
  IEffect
  (-effect [o msg state event-chan effect-chan]
    (when-let [local-msg (msg->local-msg path msg)]
      (let [local-event-chan (ns-scoped-channel (path->box path)
                                                event-chan)
            local-effect-chan (ns-scoped-channel (path->box path)
                                                 effect-chan)]
        (-effect system local-msg (get-in state
                                          (path->box path))
                 local-event-chan local-effect-chan))))
  IDerive
  (-derive [o state]
    (update-in state (path->box path)
               (fn [st]
                 (-derive system st))))
  IRender
  (-render [_ rstate]
    (-render system
             { :state (get-in (:state rstate) (path->box path))
               :event-chan (ns-scoped-channel path (:event-chan rstate))})))

(defn history-keeper-transform [{:keys [system initial-state]} msg state]
  (assoc
      (-transform system msg (state-from-msg-list system
                                                  (:history state)
                                                  initial-state))
    :history (conj (vec (:history state)) msg)
    :initial-state initial-state)) ;; not needed here

(defrecord HistoryKeeper [system initial-state]
  IInit
  (-initialize [o state event-chan]
    (-initialize system state event-chan))
  IStop
  (-stop [_]
    (-stop system))
  IInputFilter
  (-filter-input [_ msg state]
    (-filter-input system msg state))  
  ITransform
  (-transform [o msg state]
    (if (= :set-history (first msg))
      (assoc-in state :history (second msg))
      (if (satisfies? IWillAccept system)
        (if (-will-accept? system msg)
          (history-keeper-transform o msg state)
          state)
        (history-keeper-transform o msg state))))
  IEffect
  (-effect [o msg state event-chan effect-chan]
    (-effect system msg state event-chan effect-chan))
  IDerive
  (-derive [o state]
    (-derive system state))
  IRender
  (-render [_ rstate]
    (-render system rstate)))

;; default system runner

(defrecord RunnableSystem [component initial-state state-atom event-chan effect-chan
                           running state-callback])

(defn message-transform [runnable state msg]
  (transform-with-effects (:component runnable) (:effect-chan runnable)
                           state msg))

(defn make-runnable [component initial-state]
  (map->RunnableSystem {:component component
                        :initial-state initial-state}))

(defn initialize [{:keys [component effect-chan event-chan] :as r}]
  (-initialize component effect-chan event-chan)
  r)

(defn listen-for-effects [{:keys [component state-atom event-chan effect-chan] :as r}]
  (let [effect-chan (or effect-chan (chan))
        event-chan (or event-chan (chan))]
    (dev-null
     (map< (fn [msg]
             (-effect component msg
                      @state-atom
                      event-chan
                      effect-chan) true)
           effect-chan))
    (assoc r
      :effect-chan effect-chan
      :event-chan event-chan)))

(defn listen-for-messages [{:keys [component state-atom event-chan effect-chan] :as r}]
  (let [event-chan (or event-chan (chan))
        effect-chan (or effect-chan (chan))]
    (dev-null
     (map< (fn [msg]
             #_(print msg)
             (let [new-msg (-filter-input component msg @state-atom)]
               (swap! state-atom (partial message-transform r) new-msg)))
           event-chan))
    (assoc r
      :effect-chan effect-chan
      :event-chan event-chan)))

(defn install-initial-state [{:keys [initial-state state-atom] :as r}]
  (if (nil? state-atom)
    (assoc r :state-atom (atom initial-state))
    (if (nil? @state-atom)
      (do (reset! state-atom initial-state) r) 
      r)))

(defn hook-up-state-callback [{:keys [state-callback state-atom component event-chan] :as r}]
  (when state-callback
    (add-watch state-atom
               :state-callback (fn [_ _ o n]
                                 (state-callback
                                  { :state (-derive component n)
                                   :event-chan event-chan }))))
  r)

(defn runner-start [runnable]
  (-> runnable
      install-initial-state
      listen-for-effects
      listen-for-messages 
      hook-up-state-callback 
      initialize
      (assoc :running true)))

(defn runner-stop [runnable]
  (when (:state-atom runnable)
    (remove-watch (:state-atom runnable) :state-callback))
  (when (:event-chan runnable)
    (close! (:event-chan runnable)))
  (when (:effect-chan runnable)
    (close! (:effect-chan runnable)))
  (-> runnable
      (assoc :event-chan nil)
      (assoc :effect-chan nil)
      (assoc :running nil)))

(defn run [initial-state component state-callback]
  (-> (make-runnable component initial-state)
      (assoc :state-callback state-callback)
      runner-start))

(defn run-with-atom [state-atom initial-state component state-callback]
  (-> (make-runnable component initial-state)
      (assoc :state-atom state-atom)
      (assoc :state-callback state-callback)
      runner-start))
