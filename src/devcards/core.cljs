(ns devcards.core
  (:require
   [devcards.system :as dev]

   [devcards.util.markdown :as mark]
   [devcards.util.utils :as utils]
   
   [sablono.core :as sab :include-macros true]
   [devcards.util.edn-renderer :as edn-rend]
   
   [clojure.string :as string]

   [cljs.test]   
   [cljs.core.async :refer [put! chan] :as async])
  (:require-macros
   [cljs-react-reload.core :refer [defonce-react-class def-react-class]]))

(enable-console-print!)

;; this channel is only used for card registration notifications
(defonce devcard-event-chan (chan))

;; its possible to record the meta-data for the loaded ns's being
;; shipped by figwheel, by ataching a before load listener and storing
;; the meta data, might be better to have figwheel do that.

(defn register-figwheel-listeners!
  "This event doesn't need to be fired for the system to run. It will just render
   a little faster on reload if it is fired. Figwheel isn't required to run devcards."
  []
  (defonce register-listeners-fig
    (do
      (.addEventListener (.-body js/document)
                         "figwheel.js-reload"
                         #(put! devcard-event-chan [:jsreload (.-detail %)]))
      true)))

;; this needs to be private because devcards needs to be turned on
(defn- start-devcard-ui!* []
  (dev/start-ui devcard-event-chan)
  (register-figwheel-listeners!))

;; Register a new card
;; this is normally called from the defcard macro
;;
;; path - a seq of keywords that describe where this card belongs in
;;        the UI. The first key in the list is typically the namespace.
;; func - is a thunk which contains the functionality of the card.
;;        The thunk has to be executed to get the functionality of
;;        the card.

(defn card? [c]
  (and (map? c)
       (let [{:keys [path func]} c]
         (vector? path)
         (not-empty path)
         (every? keyword? path)
         (fn? func))))

;; could move into macros
(defn register-card [c]
  {:pre [(card? c)]}
  "Register a new card."
  (put! devcard-event-chan [:register-card c]))

(defn- react-raw [raw-html-str]
  "A React component that renders raw html."
  (.div (.-DOM js/React)
        (clj->js { :key (str (hash raw-html-str))
                   :dangerouslySetInnerHTML
                   { :__html
                     raw-html-str }})))

(defn markdown->react [& strs]
  (react-raw (mark/less-sensitive-markdown strs)) )

;; returns a react component of rendered edn

(defn- naked-card [children card]
  (sab/html
   [:div
    {:class
     (str devcards.system/devcards-rendered-card-class
          (if (get-in card [:options :padding]) " com-rigsomelight-devcards-devcard-padding" "")) }
    children]))

(defn- frame
  ([children]
   (frame children {}))
  ([children card]
   (let [{:keys [path options]} card]
    (if-not (:hidden options)
      (if (false? (:heading options))
        (sab/html
         [:div.com-rigsomelight-devcards-card-base-no-pad
          (naked-card children card)])
        (sab/html
         [:div.com-rigsomelight-devcards-base.com-rigsomelight-devcards-card-base-no-pad
          [:div.com-rigsomelight-devcards-panel-heading
           (if path
             (sab/html
              [:span
               { :onClick
                (devcards.system/prevent->
                 #(devcards.system/set-current-path!
                   devcards.system/app-state
                   path))}
               (name (last path))  " "])
             (sab/html [:span (:name card)]))]
          (naked-card children card)]))
      (sab/html [:span])))))

(defprotocol IDevcardOptions
  (-devcard-options [this devcard-opts]))

(defprotocol IDevcard
  (-devcard [this devcard-opts]))

(declare hist-recorder*)

(defonce-react-class DevcardBase
  #js {:getInitialState
        (fn [] #js {:unique_id (gensym 'devcards-base-)})
        :componentWillMount
        (fn []
          (this-as this
                   (.setState this
                              (or (and (.. this -state -data_atom) (.. this -state))
                                  #js {:data_atom
                                       (let [data (or (:initial-data (.. this -props -card)) {})]
                                         (if (satisfies? IAtom data)
                                           data
                                           (atom data)))}))))
        :componentWillUnmount
        (fn []
          (this-as
           this
           (let [data_atom (.. this -state -data_atom)
                 id        (.. this -state -unique_id)]
             (when (and data_atom id)
               (remove-watch data_atom id)))))
        :componentDidMount
        (fn []
          (this-as
           this
           (let [options (:options (.. this -props -card))]
             (let [data_atom (.. this -state -data_atom)
                   id        (.. this -state -unique_id)]
               (when (and data_atom id)
                 (add-watch
                  data_atom id
                  (fn [_ _ _ _]
                    (let [{:keys [watch-atom inspect-data history]} (:options (.. this -props -card))]
                      (when (if (false? watch-atom) (or inspect-data history) true) 
                        (.forceUpdate this))))))))))
        :render
        (fn []
          (this-as
           this
           (let [card      (.. this -props -card)
                 options   (:options card)
                 main      (let [m (:main-obj card)]
                             (if (fn? m)
                               (m (.-data_atom (.-state this)) this)
                               m))
                 hist-ctl  (when (:history options)
                             (hist-recorder* (.-data_atom (.-state this))))
                 document  (when-let [docu (:documentation card)]
                             (markdown->react docu))
                 edn       (when (:inspect-data options)
                             (sab/html
                              [:div.com-rigsomelight-devcards-padding-top-border
                               (edn-rend/html-edn @(.-data_atom (.-state this)))]))
                 children  (sab/html [:div (list hist-ctl document main edn)])]
             (if (:frame options)
               (frame children card) ;; make component and forward options
               (sab/html [:div.com-rigsomelight-devcards-frameless children])))))})

(defonce-react-class DomComponent
  #js {:getInitialState
        (fn [] #js {:unique_id (str (gensym 'devcards-dom-component-))})
        :renderIntoDOM
        (fn []
          (this-as this
                   (when-let [node-fn (.. this -props -node_fn)]
                     (when-let [comp (aget (.. this -refs) (.. this -state -unique_id))]
                       (when-let [node (js/React.findDOMNode comp)]
                         (node-fn (.. this -props -data_atom) node))))))
        :componentDidUpdate
        (fn [prevP, prevS]
          (this-as this
                   (when (and (.. this -props -node_fn)
                              (not= (.. this -props -node_fn)
                                    (.. prevP -node_fn)))
                     (.renderIntoDOM this))))
        :componentDidMount
        (fn [] (this-as this (.renderIntoDOM this)))
        :render
         (fn []
           (this-as this
                    (js/React.DOM.div
                     #js { :ref (.. this -state -unique_id) }
                     "Card has not mounted DOM node.")))})

(defn booler? [key opts]
  (let [x (get opts key)]
    (or (true? x) (false? x) (nil? x)
     {:label key 
      :message "should be boolean or nil"
      :value x})))

(defn stringer? [key opts]
  (let [x (get opts key)]
    (or (string? x) (nil? x)
        {:label   key
         :message "should be string or nil"
         :value x})))

(defn react-element? [main-obj]
  (aget main-obj "_isReactElement"))

(defn validate-card-options [opts]
  (if (map? opts)
    (let [propagated-errors (get-in opts [:options :propagated-errors])]
      (filter #(not (true? %))
              (let [{:keys [name
                            main-obj
                            initial-data
                            options]} opts]
                (concat
                 propagated-errors
                 [(or (map? options) (nil? options)
                      {:label   :options 
                       :message "should be a Map or nil"
                       :value options})
                  (stringer? :name opts)                
                  (stringer? :documentation opts)
                  (or (nil? main-obj) (fn? main-obj) (react-element? main-obj)
                      {:label   :main-obj
                       :message "should be a function or a ReactElement or nil."
                       :value main-obj})
                  (or (nil? initial-data) (map? initial-data) (satisfies? IAtom initial-data)
                      {:label :initial-data
                       :message "should be an Atom or a Map or nil."
                       :value initial-data})]
                 (mapv #(booler? % (:options opts)) [:frame :heading :padding :inspect-data :watch-atom :history])))))
    [{:message "Card should be a Map."
      :value   opts}]))

(comment
  (prn (validate-card-options {:name "hi"
                             :documentation "hey"
                             :react-or-fn (fn [] 1)
                             :initial-data {}
                             :frame true
                             :heading false
                             :padding false
                             :inspect-data true
                             :watch-atom nil
                             :history nil})))

(defn error-line [e]
  (sab/html [:div {:style {:color "#a94442" :display "flex" :margin "0.5em 0px"}}
             (sab/html
              [:code {:style { :flex "1 100px" :margin-right "10px"}}
               (when (:label e) (pr-str (:label e)))])
             [:span
              {:style { :flex "3 100px" :margin-right "10px"}}
              (:message e)]
             [:span
              {:style { :flex "1 100px" }}
              " Recieved: " [:code (pr-str (:value e))]]]))

(defn assert-options-map [m]
  (if-not (or (nil? m) (map? m))
    {:propagated-errors [{:label :options 
                          :message "should be a Map or nil."
                          :value m}]}
    m))

(defn render-errors [opts errors]
  (sab/html
   [:div.com-rigsomelight-devcards-card-base-no-pad
    [:div.com-rigsomelight-devcards-panel-heading.com-rigsomelight-devcards-fail
     (str (when (and (map? opts) (string? (:name opts)))
            (str (:name opts) ": ")) "Devcard received bad options")]
    (naked-card
     (sab/html
      [:div 
       [:div
        (map error-line errors)]
       (when (map? opts)
         (sab/html
          [:div.com-rigsomelight-devcards-padding-top-border
           (edn-rend/html-edn (update-in opts [:options] dissoc :propagated-errors))]))])
     {:options {:padding true}})]))

(defn add-environment-defaults [card-options]
  (update-in card-options [:options]
             #(merge (:base-card-options @devcards.system/app-state) %)))

(defn card-with-errors [card-options]
  (let [errors (validate-card-options card-options)]
    (if (not-empty errors)
      (render-errors card-options errors)
      (js/React.createElement DevcardBase #js { :card (add-environment-defaults card-options) }))))

(defrecord IdentiyOptions [obj]
  IDevcardOptions
  (-devcard-options [this opts] opts))

(defn atom-like-options [main-obj {:keys [options] :as devcard-opts}]
  (assoc devcard-opts
         :main-obj (fn [data-atom _] (edn-rend/html-edn @data-atom))
         :initial-data main-obj
         :options (merge { :history true }
                         (assert-options-map options))))

(defrecord AtomLikeOptions [obj]
  IDevcardOptions
  (-devcard-options [this opts] (atom-like-options obj opts)))

(defn edn-like-options [main-obj devcard-opts]
  (assoc devcard-opts :main-obj
         (edn-rend/html-edn (if (satisfies? IDeref main-obj)
                              (deref main-obj)
                              main-obj))))

(defrecord EdnLikeOptions [obj]
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options obj devcard-opts)))

(defn atom-like? [x] (and (satisfies? IWatchable x) (satisfies? IDeref x)))

(defn edn-like? [x] (satisfies? IDeref x))

(defn coerce-to-devcards-options [main-obj]
  (if (satisfies? IDevcardOptions main-obj)
    main-obj
    (cond
      (atom-like? main-obj) (AtomLikeOptions. main-obj)
      (edn-like?  main-obj) (EdnLikeOptions.  main-obj)
      :else (IdentiyOptions. main-obj))))

(defn card-base [opts]
  (let [opts (assoc opts :path (:path devcards.system/*devcard-data*))]
    (if (satisfies? IDevcard (:main-obj opts))
      (-devcard (:main-obj opts) opts)
      (card-with-errors
       (-devcard-options (coerce-to-devcards-options (:main-obj opts))
                           opts)))))

;; keep
(defn- dom-node* [node-fn]
  (fn [data-atom owner]
     (js/React.createElement DomComponent
                             #js {:node_fn   node-fn
                                  :data_atom data-atom})))

;; devcard protocol that takes a devcard and returns a devcard

(extend-type string
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (update-in devcard-opts [:main-obj] markdown->react)))

(extend-type PersistentArrayMap
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type PersistentVector
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type PersistentHashSet
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type List
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type LazySeq
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type Cons
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type EmptyList
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type Atom
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (atom-like-options this devcard-opts)
    #_(assoc devcard-opts
             :main-obj (fn [data-atom _] (edn-rend/html-edn @data-atom))
             :initial-data main-obj
             :options (merge { :history true }
                             (assert-options-map options)))))

;; history recorder

(comment
  would be nice to have a drop down of history diffs)

;; keep
(defonce-react-class HistoryComponent
     #js {:getInitialState
        (fn [] #js {:unique_id    (str (gensym 'devcards-history-runner-))
                   :history_atom (atom {:history (list) :pointer 0})})
        :componentDidUpdate
        (fn [prevP, prevS]
          (this-as this
                   (when (and (.. this -props -node_fn)
                              (not= (.. this -props -node_fn)
                                    (.. prevP -node_fn)))
                     (.renderIntoDOM this))))
        :componentWillMount
        (fn []
          (this-as this
                   (swap! (.. this -state -history_atom)
                          assoc-in [:history] (list @(.. this -props -data_atom)))))        
        :componentDidMount
        (fn []
          (this-as
           this
           (let [data_atom (.. this -props -data_atom)
                 id        (.. this -state -unique_id)
                 history-atom   (.. this -state -history_atom)]
             (when (and data_atom id)
               (add-watch data_atom id
                          (fn [_ _ _ n]
                            (if (.inTimeMachine this)
                              (do
                                (swap! history-atom
                                       (fn [{:keys [pointer history ignore-click] :as ha}]
                                         (if ignore-click
                                           (assoc ha :ignore-click false)
                                           (assoc ha
                                                  :history
                                                  (let [abridged-hist (drop pointer history)]
                                                    (if (not= n (first abridged-hist))
                                                      (cons n abridged-hist)
                                                      abridged-hist))
                                                  :pointer 0)))))
                              (swap! history-atom assoc
                                     :history (let [hist (:history @history-atom)]
                                                (if (not= n (first hist))
                                                (cons n hist)
                                                hist))
                                     :ignore-click false))))))))

        :canGoBack
        (fn []
          (this-as this
                   (let [{:keys [history pointer]} @(.. this -state -history_atom)]
                     (< (inc pointer)
                        (count history)))))

        :canGoForward
        (fn []
          (this-as this
                   (> (:pointer @(.. this -state -history_atom)) 0)))

        :inTimeMachine
        (fn []
          (this-as this
                   (not (zero? (:pointer @(.. this -state -history_atom))))))
       
        :backInHistory
        (fn []
          (this-as this
                   (let [history-atom   (.. this -state -history_atom)
                         {:keys [history pointer]} @history-atom]
                     (when (.. this canGoBack)
                       (swap! history-atom assoc
                              :pointer (inc pointer)
                              :ignore-click true)
                       (reset! (.. this -props -data_atom) (nth history (inc pointer)))
                       (.forceUpdate this)))))

        :forwardInHistory
        (fn []
          (this-as this
                   (let [history-atom   (.. this -state -history_atom)
                         {:keys [history pointer]} @history-atom]
                     (when (.. this canGoForward)
                       (swap! history-atom assoc
                              :pointer (dec pointer)
                              :ignore-click true)
                       (reset! (.. this -props -data_atom) (nth history (dec pointer)))
                       (.forceUpdate this)))))
        :continueOn
        (fn []
          (this-as
           this
           (let [history-atom (.. this -state -history_atom)
                 {:keys [history]} @history-atom]
             (when (.. this canGoForward)
               (swap! history-atom assoc :pointer 0 :ignore-click true)
               (reset! (.. this -props -data_atom) (first history))
               (.forceUpdate this)))))
          :render
         (fn []
           (this-as
            this
            (sab/html
             [:div.com-rigsomelight-devcards-history-control-bar
              {:style { :visibility (if (or (.canGoBack this)
                                            (.canGoForward this))
                                      "visible" "hidden")}}
              [:a.com-rigsomelight-devcards-history-control-left
               {:style { :visibility (if (.canGoBack this) "visible" "hidden")}
                :href "#"
                :onClick (fn [e]
                           (.preventDefault e)
                           (.. this backInHistory))} ""]
              [:a.com-rigsomelight-devcards-history-stop
               {:style { :visibility (if (.canGoForward this) "visible" "hidden")}
                :href "#"                        
                :onClick (fn [e]
                           (.preventDefault e)
                           ;; touch the data atom
                           (reset! (.. this -props -data_atom)
                                   @(.. this -props -data_atom)))} ""]
              [:a.com-rigsomelight-devcards-history-control-right
               {:style { :visibility (if (.canGoForward this) "visible" "hidden")}
                :href "#"                        
                :onClick (fn [e]
                           (.preventDefault e)
                           (.. this forwardInHistory))} ""]
              [:span.com-rigsomelight-devcards-history-control-fast-forward
               {:style { :visibility (if (.canGoForward this) "visible" "hidden")}
                :href "#"
                :onClick (fn [e]
                           (.preventDefault e)
                           (.. this continueOn))}
               [:span.com-rigsomelight-devcards-history-control-small-arrow]
               [:span.com-rigsomelight-devcards-history-control-small-arrow]
               [:span.com-rigsomelight-devcards-history-control-block]
               ]
              #_(edn->html @(.. this -state -history_atom))])))})

;; keep
(defn- hist-recorder* [data-atom]
  (js/React.createElement HistoryComponent
                         #js { :data_atom data-atom }))

;; Testing via cljs.test
(comment
  mapping to source-maps
  make event open test in editor)

(defn- collect-test [m]
  (cljs.test/update-current-env!
   [:_devcards_collect_tests] conj
   (merge (select-keys (cljs.test/get-current-env) [:testing-contexts]) m)))

(defmethod cljs.test/report [:_devcards_test_card_reporter :pass] [m]
  (cljs.test/inc-report-counter! :pass)
  (collect-test m)
  m)

(defmethod cljs.test/report [:_devcards_test_card_reporter :fail] [m]
  (cljs.test/inc-report-counter! :fail)  
  (collect-test m)
  m)

(defmethod cljs.test/report [:_devcards_test_card_reporter :error] [m]
  (cljs.test/inc-report-counter! :error)
  (collect-test m)
  m)

(defmethod cljs.test/report [:_devcards_test_card_reporter :test-doc] [m]
  (collect-test m)
  m)

(defn- run-test-block [f]
  (cljs.core/binding [cljs.test/*current-env* (assoc (cljs.test/empty-env)
                                                     :reporter :_devcards_test_card_reporter)]
    (f)
    (cljs.test/get-current-env)))

(defmulti test-render :type)

(defmethod test-render :default [m]
  (sab/html [:div (prn-str m)]))

(defn- display-message [{:keys [message]} body]
  (if message
      (sab/html [:div [:span.com-rigsomelight-devcards-test-message message]
                 body])
      body))

(defn render-pass-fail [{:keys [expected] :as m}]
  (display-message m (sab/html [:pre [:code (utils/pprint-code expected)]])))

(defmethod test-render :pass [m]
  (render-pass-fail m))

(defmethod test-render :fail [m]
  (render-pass-fail m))

(defmethod test-render :error [m]
  (display-message m (sab/html  [:div [:strong "Error: "] [:code (:actual m)]])))

(defmethod test-render :test-doc [m]
  (sab/html [:div (react-raw (:documentation m))]))

(defmethod test-render :context [{:keys [testing-contexts]}]
  (sab/html [:div
             (interpose " / "
                        (concat (map (fn [t] [:span {:style {:color "#bbb"}} t " "])
                                     (reverse (rest testing-contexts)))
                                (list [:span (first testing-contexts)])))]))

(defn- test-doc [s]
  (cljs.test/report {:type :test-doc :documentation (mark/less-sensitive-markdown [s])}))

(defn- test-renderer [t]
  [:div
   {:className (str "com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"
                    (name (:type t)))}
   (test-render t)])

(defn- layout-tests [tests]
  (sab/html
   [:div.com-rigsomelight-devcards-test-card
    (:html-list
     (reduce 
      (fn [{:keys [last-context html-list]} t]
        { :last-context (:testing-contexts t)
         :html-list 
         (let [res (list (test-renderer t))
               res (if (= last-context
                          (:testing-contexts t))
                     res
                     (if (not-empty (:testing-contexts t))
                       (cons (test-renderer (merge {:type :context}
                                                   (select-keys t [:testing-contexts])))
                             res)
                       res))]
           (concat html-list res ))})
      {}
      (reverse tests)))]))

;; RE-VISIT

(defn render-test-frame [test-summary]
  (let [path (:path devcards.system/*devcard-data*)
        tests (:_devcards_collect_tests test-summary)
        some-tests (filter (fn [{:keys [type]}] (not= type :test-doc))
                      (:_devcards_collect_tests test-summary))
        total-tests (count some-tests)
        {:keys [fail pass error]} (:report-counters test-summary)]
    (fn [data-atom owner]
      (sab/html
       [:div.com-rigsomelight-devcards-base.com-rigsomelight-devcards-card-base-no-pad
        [:div.com-rigsomelight-devcards-panel-heading
         [:span
          { :href "#"
            :onClick
           (dev/prevent->
            #(devcards.system/set-current-path!
              devcards.system/app-state
              path))}
          (when path (str (name (last path))) )]
         [:span.com-rigsomelight-devcards-badge
          {:href "#"
           :style {:float "right"
                   :margin "3px 3px"}
           :onClick (dev/prevent->
                     #(swap! data-atom assoc :filter identity))}
          total-tests]
         (when-not (zero? (+ fail error))
           (sab/html
            [:span.com-rigsomelight-devcards-badge
             {:href "#"
              :style {:float "right"
                      :backgroundColor "#d9534f"
                      :color "#fff"
                      :margin "3px 3px"}
              :onClick (dev/prevent->
                        #(swap! data-atom assoc :filter (fn [{:keys [type]}]
                                                          (#{:fail :error} type))))}
             (+ fail error)]))          
         (when-not (zero? pass)
           (sab/html
            [:span.com-rigsomelight-devcards-badge
             {:href "#"
              :style {:float "right"
                      :backgroundColor "#5cb85c"
                      :color "#fff"
                      :margin "3px 3px"}
              :onClick (dev/prevent->
                        #(swap! data-atom assoc :filter (fn [{:keys [type]}] (= type :pass)))) }
             pass]))]
        [:div {:className devcards.system/devcards-rendered-card-class}
         (layout-tests (filter (or (:filter @data-atom)
                                   identity)
                               tests))]]))))

(defn- test-card-help [& test-thunks]
  ;; its helpful to be in this namespace to pick up the extended report function.
  (let [tests (run-test-block (fn [] (doseq [f test-thunks] (f))))]
    (render-test-frame tests)))
