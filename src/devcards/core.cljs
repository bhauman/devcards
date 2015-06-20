(ns devcards.core
  (:require
   [devcards.system :as dev]
   
   [devcards.util.markdown :refer [less-sensitive-markdown]]

   [sablono.core :as sab :include-macros true]
   [devcards.util.edn-renderer :as edn-rend]
   [clojure.string :as string]

   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]

   [cljsjs.react]
   [cljs.core.async :refer [put! chan] :as async]))

(enable-console-print!)

;; oh well
(defonce devcard-event-chan (chan))

(defn devcard-before-jsload [x]
  (put! devcard-event-chan [:before-jsload x]) x)

(defn devcard-on-jsload [x]
  (put! devcard-event-chan [:jsreload x]) x)

(defn register-figwheel-listeners! []
  (.addEventListener (.-body js/document) "figwheel.js-reload"
                     (fn [x]
                       (devcard-on-jsload (.-detail x))))
  (.addEventListener (.-body js/document) "figwheel.before-js-reload"
                     (fn [x]
                       (devcard-before-jsload (.-detail x)))))

(defn start-devcard-ui!* []
  (dev/start-ui devcard-event-chan)
  (defonce register-listeners-fig (do   (register-figwheel-listeners!)
                                        true)))

;; Register a new card
;; this is normally called from the defcard macro
;;
;; path - a seq of keywords that describe where this card belongs in
;;        the UI. The first key in the list is typically the namespace.
;; options - a map of card rendering options
;;           :heading - (default true) rendering a heading on the card
;;           :padding - (default true) render padding around the card body
;;           :hidden - (default false) Don't render this card
;; func - is a thunk which contains the functionality of the card.
;;        The thunk has to be executed to get the functionality of
;;        the card.

(defn register-card [path options func]
  "Register a new card."
  (put! devcard-event-chan
        [:register-card {:path path :options options :func func}]))

;;; utils

;; returns a react component of rendered edn

(def runner-class
  (js/React.createClass
   #js {:getInitialState
        (fn [] #js {:unique_id (gensym 'react-runner)})
        :componentWillMount
        (fn []
          (this-as this
                   (.setState this
                              (or (and (.. this -state -data_atom) (.. this -state))
                                  #js {:data_atom
                                       (let [data (.. this -props -data_atom)]
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
           (let [data_atom (.. this -state -data_atom)
                 id        (.. this -state -unique_id)]
             (when (and data_atom id)
               (add-watch data_atom id (fn [_ _ _ _] (.forceUpdate this)))))))
        :render
         (fn []
           (this-as this
                    ((.-react_fn (.-props this))
                     this
                     (.-data_atom (.-state this)))))}))

;; TODO: much work to do here
(def history-class
  (js/React.createClass
   #js {:getInitialState
        (fn [] #js {:unique_id    (str (gensym 'devcards-history-runner-))
                   :history_atom (atom {:history (list) :pointer 0})
                   :recording    true})
        :componentDidUpdate
        (fn [prevP, prevS]
          (this-as this
                   (when (and (.. this -props -node_fn)
                              (not= (.. this -props -node_fn)
                                    (.. prevP -node_fn)))
                     #_(prn (str (.. this -props -node_fn)))
                     #_(prn (str (.. prevP -node_fn)))
                     (.renderIntoDOM this))))
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
                            (when (.. this -state -recording)
                              (swap! history-atom update-in [:history] 
                                     (fn [hist] (cons n hist))))))))))
        :canGoBack
        (fn []
          (this-as this
                   (let [{:keys [history pointer]} @(.. this -state -history_atom)]
                     (< (inc pointer) (count history)))))

        :canGoForward
        (fn []
          (this-as this
                   (> (:pointer @(.. this -state -history_atom)) 0)))
        
        :backInHistory
        (fn []
          (this-as this
                   (let [history-atom   (.. this -state -history_atom)
                         {:keys [history pointer]} @history-atom]
                     (when (.. this canGoBack)
                       (swap! history-atom update-in [:pointer] (fn [p] (inc p)))
                       (.setState this #js {:recording false} )
                       (reset! (.. this -props -data_atom) (nth history (inc pointer)))
                       (.forceUpdate this)))))
        :forwardInHistory
        (fn []
          (this-as this
                   (let [history-atom   (.. this -state -history_atom)
                         {:keys [history pointer]} @history-atom]
                     (when (.. this canGoForward)
                       (swap! history-atom update-in [:pointer] (fn [p] (dec p)))
                       (.setState this #js {:recording false} )
                       (reset! (.. this -props -data_atom) (nth history (dec pointer)))
                       (.forceUpdate this)))))
        :render
         (fn []
           (this-as this
                    (sab/html
                     [:div
                      [:h2 (str "history " (count (:history @(.. this -state -history_atom))))]
                      [:a {:onClick (fn [e]
                                      (.preventDefault e)
                                      (.. this backInHistory)
                                      )} "back"] " "
                      [:a {:onClick (fn [e]
                                      (.preventDefault e)
                                      (.. this forwardInHistory)
                                      )} "forward"]
                      
                      [:div ((.. this -props -react_fn)
                             this
                             (.. this -props -data_atom))]])))}))

(def dom-node-class
  (js/React.createClass
   #js {:getInitialState
        (fn [] #js {:unique_id (str (gensym 'devcards-card-runner-))})
        :renderIntoDOM
        (fn []
          (this-as this
                   (when-let [node-fn (.. this -props -node_fn)]
                     (when-let [comp (aget (.. this -refs) (.. this -state -unique_id))]
                       (when-let [node (js/React.findDOMNode comp)]
                         (node-fn node (.. this -props -data_atom)))))))
        :componentDidUpdate
        (fn [prevP, prevS]
          (this-as this
                   (when (and (.. this -props -node_fn)
                              (not= (.. this -props -node_fn)
                                    (.. prevP -node_fn)))
                     #_(prn (str (.. this -props -node_fn)))
                     #_(prn (str (.. prevP -node_fn)))
                     (.renderIntoDOM this))))
        :componentDidMount
        (fn [] (this-as this (.renderIntoDOM this)))
        :render
         (fn []
           (this-as this
                    (js/React.DOM.div
                     #js { :ref (.. this -state -unique_id) }
                     "Card has not mounted DOM node.")))}))

(defn naked-card [children options]
  (sab/html
   [:div
    {:class
     (str devcards.system/devcards-rendered-card-class
          (if-not (false? (:padding options))
            " com-rigsomelight-devcards-devcard-padding" "")) }
    children]))

(defn frame
  ([children]
   (frame children {}))
  ([children options]
  (let [path (:path devcards.system/*devcard-data*)]
    (if-not (:hidden options)
      (if (false? (:heading options))
        (sab/html
         [:div.com-rigsomelight-devcards-card-base-no-pad
          (naked-card children options)])
        (sab/html
         [:div.com-rigsomelight-devcards-base.com-rigsomelight-devcards-card-base-no-pad
          [:div.com-rigsomelight-devcards-panel-heading
           { :onClick
            (devcards.system/prevent->
             #(devcards.system/set-current-path!
               devcards.system/app-state
               path))}
           (when path (name (last path)) ) " "]
          (naked-card children options)]))
      (sab/html [:span])))))

(defn runner-base* [react-runner-component-fn initial-data]
  (js/React.createElement runner-class
                          #js {:react_fn react-runner-component-fn
                               :data_atom initial-data}))

(defn hist [react-fn]
  (fn [owner data-atom]
    (js/React.createElement history-class
                            #js { :react_fn react-fn
                                  :data_atom data-atom })))

(defn dom-node [node-fn]
  (fn [owner data-atom]
     (js/React.createElement dom-node-class
                             #js {:node_fn   node-fn
                                  :data_atom data-atom})))

(defn runner*
  ([react-fn initial-data]
   (runner* react-fn initial-data {}))
  ([react-fn initial-data options]
   (frame (runner-base* react-fn initial-data) options)))

(defn hist*
  ([react-fn initial-data] (hist* react-fn initial-data {}))
  ([react-fn initial-data options]
   (runner* (hist react-fn) initial-data options)))

(defn dom-node*
  ([node-fn]
   (dom-node* node-fn {} {}))
  ([node-fn initial-data]
   (dom-node* node-fn initial-data {}))
  ([node-fn initial-data options]
   (runner* (dom-node node-fn) initial-data options)))

(defn default-option-card*
  ([defaults fn-or-react initial-data options]
   (if (fn? fn-or-react)
     (runner* fn-or-react initial-data (merge defaults options))
     (frame fn-or-react (merge defaults options))))
  ([defaults fn-or-react initial-data]
   (default-option-card* defaults fn-or-react initial-data {}))
  ([defaults fn-or-react]
   (default-option-card* defaults fn-or-react {} {})))

(def card* (partial default-option-card* {}))

(def edn->html edn-rend/html-edn)

(declare om-root-card)

(defn edn-card [initial-data]
  "A card that renders EDN."
  (runner-base* (fn [_ data-atom]
                  (edn->html @data-atom))
                initial-data))

(defn markdown-card [& mkdn-strs]
  (dom-node
    (fn [node _]
      (set! (.. node -innerHTML)
            (less-sensitive-markdown mkdn-strs)))))

(defn om-root-card
  ([om-comp-fn initial-state om-options]
   (dom-node
    (fn [node _]
      (om/root om-comp-fn initial-state (merge om-options {:target node})))))
  ([om-comp-fn initial-state]
     (om-root-card om-comp-fn initial-state {}))
  ([om-comp-fn]
     (om-root-card om-comp-fn {} {})))



;; TODO: testing to be addressed later

(defmulti render-test (fn [x] (cond
                              (map? x) (:type x)
                              (string? x) :string)))

(defn test-wrapper [test body]
  (dom/li #js { :className (str "list-group-item list-group-item-"
                                (if (:passed test) "success" "danger")) }
          (dom/span #js { :className (str "devcards-test-icon glyphicon glyphicon-"
                                          (if (:passed test) "ok" "remove")) })
          body))

(defn react-raw [raw-html-str]
  "A React component that renders raw html."
  (.div (.-DOM js/React)
        (clj->js { :dangerouslySetInnerHTML
                   { :__html
                     raw-html-str }})))

(defmethod render-test :string [s]
  (dom/li #js {:className "list-group-item"}
          (react-raw (less-sensitive-markdown [s]))))

(defn error-message [test val1 val-join-msg val2]
  (if-not (:passed test)
    (dom/span #js {:className "explain"}
              "Expected "
              (dom/span #js {:className "code"} val1)
              val-join-msg
              (dom/span #js {:className "code"} val2))
    (dom/span #js {} "")))

(defmethod render-test :is [test]
  (test-wrapper test
                (dom/span #js {:className "devcards-test-body"}
                          (dom/span #js {:className "operator"} "is")
                          (dom/span #js {:className "result-area"}
                                    (dom/span #js {:className "exp"}
                                              (prn-str (:body test)))
                                    (error-message test
                                                   (prn-str (:passed test))
                                                   " to be "
                                                   "true")))))

(defn operator-relation-test [test op relation-phrase]
  (test-wrapper test
                (dom/span #js {:className "devcards-test-body"}
                          (dom/span #js {:className "operator"} op)
                          (dom/span #js {:className "result-area"}
                                    (dom/span #js {:className "exp"} (prn-str (:exp1 test)))
                                    (dom/span #js {:className "exp"} (prn-str (:exp2 test)))
                                    (error-message test
                                                   (prn-str (:val1 test))
                                                   relation-phrase
                                                   (prn-str (:val2 test)))))))

(defmethod render-test :are= [test]
  (operator-relation-test test "=" " to equal "))

(defmethod render-test :are-not= [test]
  (operator-relation-test test "!=" " not to equal "))

(defn test-card [& assertions]
  (frame
   (dom/ul #js {:className "list-group devcards-test-group"}
           (to-array (mapv (fn [t] (render-test t))
                           assertions)))
   {:padding false}))
