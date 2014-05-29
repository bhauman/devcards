(ns frontier.cards
  (:require
   [cljs.core.async :as async
    :refer [put!]]
   [clojure.string :as string]
   [sablono.core :as sab :include-macros true]
   [devcards.util.edn-renderer :refer [html-edn]]
   [frontier.core :refer [IInputFilter
                          IInit
                          ITransform
                          IEffect
                          IDerive
                          IRender
                          IStop
                          HistoryKeeper
                          Namespacer
                          -stop
                          -render
                          -derive
                          -effect
                          -transform
                          -initialize
                          -filter-input
                          runner-stop
                          run-with-atom
                          msg-prefix
                          msg->local-msg]]))

(defn can-go-forward? [{:keys [pointer __history-keeper]}]
  (< pointer (count (:history __history-keeper))))

(defn can-go-back? [{:keys [pointer]}]
  (pos? pointer))

(defn under-control? [{:keys [pointer __history-keeper]}]
  (not= pointer
        (count (:history __history-keeper))))

(defn msg-history [state]
  (get-in state [:__history-keeper :history]))

(defmulti hist-trans first)

(defmethod hist-trans :default [_ state _] state)

(defmethod hist-trans :history.goto [[_ pointer] state _]
  (assoc state :pointer pointer))

(defmethod hist-trans :history.back [_ state _]
  (if (can-go-back? state)
    (update-in state [:pointer] dec)
    state))

(defmethod hist-trans :history.forward [_ state _]
  (if (can-go-forward? state)
    (update-in state [:pointer] inc)
    state))

(defmethod hist-trans :history.keep [_ {:keys [pointer] :as state} _]
  (update-in state [:__history-keeper :history]
             (fn [history] (subvec history 0 pointer))))

(defmethod hist-trans :history.cancel [_ state _]
  (assoc state :pointer
         (count (msg-history state))))

;; derivatives

(defn under-control [system]
  (assoc system :under-control
         (under-control? system)))

(defn current-state**
  ([{:keys [history state] :as virt-state} pointer component]
     (let [initial-state (get-in component [:system :initial-state])]
       (-derive component
                (if (or (zero? pointer)
                        (zero? (count history)))
                {:__history-keeper {:state (:state initial-state)
                                    :initial-state initial-state
                                    :history [] }}
                (let [temp-history (subvec history
                                           0 pointer)]
                  (-transform component
                              (msg-prefix [:__history-keeper] (last temp-history))
                              {:__history-keeper {:state state
                                                  :initial-state initial-state
                                                  :history (butlast temp-history) }}))))))
  ([{:keys [history] :as virt-state} component]
     (current-state** virt-state (count history) component)))

(defn render-state [{:keys [__history-keeper] :as state} comp*]
    (assoc state :render-stater
           (if (under-control? state)
             (current-state** __history-keeper (:pointer state) comp*)
             (current-state** __history-keeper comp*))))

(defn can-go-forward [state]
  (assoc state :can-go-forward
         (can-go-forward? state)))

(defn can-go-back [state]
  (assoc state :can-go-back
         (can-go-back? state)))

(defn add-msg [state]
  (assoc state :msg
         (msg->local-msg [:state]
                         (get (msg-history state)
                              (dec (:pointer state))))))

(defn messages [state]
  (assoc state :messages
         (take 20 (reverse (map-indexed (fn [i x] [(inc i) x])
                                        (map
                                         (partial msg->local-msg [:state])
                                         (msg-history state)))))))

(declare render-history-controls)

(defn history-message? [msg]
  (and (keyword? (first msg))
       (-> (first msg)
           name
           (string/split #"\.")
           first
           (= "history"))))

(defrecord HistoryManager [virtual-system]
  IInit
  (-initialize [_ state event-chan]
    (-initialize virtual-system state event-chan))
  IStop
  (-stop [_]
    (-stop virtual-system))
  IInputFilter
  (-filter-input [_ msg state]
    (-filter-input virtual-system msg state))
  ITransform
  (-transform [o msg state]
    (if (history-message? msg)
      (hist-trans msg state (:__history-keeper state))
      (let [new-state (-transform virtual-system msg state)]
        (assoc new-state :pointer
         (count (get-in new-state [:__history-keeper :history]))))))
  IEffect
  (-effect [o msg state event-chan effect-chan]
    (-effect virtual-system msg state event-chan effect-chan))
  IDerive
  (-derive [o state]
    (-> state
        under-control
        can-go-forward
        can-go-back
        add-msg
        messages
        (render-state virtual-system)))
  IRender
  (-render [_ {:keys [state event-chan] :as hist-state}]
    (let [derived-state (:render-stater state)]
      [:div.history-manager
       (render-history-controls state event-chan)
       (-render virtual-system
                { :state derived-state
                  :event-chan event-chan })
       (html-edn (get-in derived-state [:__history-keeper :state]))
       #_(html-edn state)
       ])))

(defn render-history-controls [{:keys [under-control can-go-back can-go-forward msg messages] :as sys} hist-chan]
  (sab/html
   [:div.navbar.navbar-default.navbar-static-top
    {:style (js-obj "paddingLeft" "14px")}
    [:div.nav.navbar-nav.btn-group
     (if can-go-back
       [:a.btn.btn-default.navbar-btn
        {:className ""
         :href "#"
         :onClick (fn [x]
                    (.preventDefault x)
                    (put! hist-chan [:history.back]))}
        [:span.glyphicon.glyphicon-step-backward]]
       [:a.btn.btn-default.navbar-btn.disabled [:span.glyphicon.glyphicon-step-backward]])
     (if under-control
       [:a.btn.btn-default.navbar-btn
        {:className ""
         :onClick (fn [x]
                    (.preventDefault x)
                    (put! hist-chan [:history.cancel]))}
        [:span.glyphicon.glyphicon-stop]]
       [:a.btn.btn-default.navbar-btn.disabled [:span.glyphicon.glyphicon-stop]]) 
     (if under-control
       [:a.btn.btn-default.navbar-btn
        {:className ""
         :onClick (fn [x]
                     (.preventDefault x)
                     (put! hist-chan [:history.keep]))}
        [:span.glyphicon.glyphicon-download-alt]]
       [:a.btn.btn-default.navbar-btn.disabled
        [:span.glyphicon.glyphicon-download-alt]])
     (if (and under-control can-go-forward)
       [:a.btn.btn-default.navbar-btn
        {:className "right"
         :onClick (fn [x]
                    (.preventDefault x)
                    (put! hist-chan [:history.forward]))}
        [:span.glyphicon.glyphicon-step-forward]]
       [:a.btn.btn-default.navbar-btn.disabled
        [:span.glyphicon.glyphicon-step-forward]])]
    [:ul.nav.navbar-nav
     [:li.dropdown
      [:a.dropdown-toggle {:data-toggle "dropdown"} "Input history " [:b.caret]]
      [:ul.dropdown-menu
       (map
        (fn [[i m]]
          [:li
           [:a
            {:href "#"
             :onClick
             (fn [x]
               (.preventDefault x)
               (put! hist-chan [:history.goto i]))}
            (str i " " (prn-str m))]])
        messages)
       ]]]
    [:p.navbar-text (:pointer sys) " " (prn-str msg)]
    ]
   ))

(defn render-input-message-links [msgs event-chan & {:keys [disabled]}]
  [:ul
   (map (fn [x] [:li
                (if disabled
                  (prn-str x)
                  [:a
                   { :onClick (fn [] (put! event-chan x)) }
                   (prn-str x)])])
        msgs)])

(defn input-controls-renderer [input-messages]
  (fn [{:keys [event-chan]} & {:keys [disabled]}]
    (render-input-message-links
     input-messages
     event-chan)))

(defn history-manager [initial-state component]
  (let [initial-state' (assoc-in {} [:__history-keeper :state] initial-state)]
    (HistoryManager.
     (Namespacer.
      :__history-keeper
      (HistoryKeeper.
       (Namespacer. :state component)
       (:__history-keeper initial-state'))))))

;; the handling of initial state is super wonky
;; maybe components should have a IGetInitialState protocol?
;; I am going to end up with the whole react / om protocol by
;; derivation??
