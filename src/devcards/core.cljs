(ns devcards.core
  (:require
   [devcards.system :refer [devcard-system-start
                            render-base-if-necessary!
                            devcard-renderer
                            register-listeners
                            unmount-card-nodes
                            mount-card-nodes
                            path->unique-card-id
                            throttle-function
                            IMount
                            IUnMount
                            IConfig]]

   [devcards.system-new :as dev]
   
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

#_(defn start-devcard-ui!*
  "This function starts the full devcard UI."
  []
  (defonce devcard-system
    (do
      (render-base-if-necessary!)
      (let [ds (devcard-system-start devcard-event-chan
                                     (throttle-function devcard-renderer 50))]
        (register-listeners devcard-event-chan)
        ds)
      (register-figwheel-listeners!)
      true)))


(defn start-devcard-ui!* []
  (dev/start-ui devcard-event-chan)
  (defonce register-listeners-fig (do   (register-figwheel-listeners!)
                                        true)))


#_(defn start-single-card-ui!*
  "Start a devcard UI that allows you to cherry pick which cards to display.
   You will need to call render-single-card to put cards into the dom."
  []
  (defonce devcard-single-card-system
    (do
      (register-figwheel-listeners!)
      (devcard-system-start devcard-event-chan
                            (throttle-function
                             (fn [{:keys [state event-chan]}]
                               (unmount-card-nodes state)
                               (mount-card-nodes state))
                             50)))))

;; Register a new card
;; this is normally called from the defcard macro
;;
;; path - a seq of keywords that describe where this card belongs in
;;        the UI. The first key in the list is typically the namespace.
;; options - a map of card rendering options
;;           :heading - (default true) rendering a heading on the card
;;           :padding - (default true) render padding around the card body
;;           :unmount-on-reload - (default true) call unmount on the
;;                                cards functionality on relaod
;;           :hidden - (default false) Don't render this card
;; func - is a thunk which contains the functionality of the card.
;;        The thunk has to be executed to get the functionality of
;;        the card.
;;        The functionality can be either a function that takes a map
;;        {:node HTMLElement :data-atom Atom } or an object that implements
;;        the IMount protocol, It can also have the IUnMount and
;;        IConfig protocols.

(defn register-card [path options func]
  "Register a new card."
  (put! devcard-event-chan
        [:register-card {:path path :options options :func func}]))

#_(defn render-single-card [card-path node]
  "Declare that a card with a certain path will be rendered to a
   certain node. This is helpful for blog post examples."
  (let [id (path->unique-card-id card-path)]
    (when-not (.getElementById js/document id)
      (.html (js/$ node) (str "<div class='devcard-rendered-card' id='" id "'></div>")))))

;;; utils

;; returns a react component of rendered edn
(def edn->html edn-rend/html-edn)

(defn react-raw [raw-html-str]
  "A React component that renders raw html."
  (.div (.-DOM js/React)
        (clj->js { :dangerouslySetInnerHTML
                   { :__html
                     raw-html-str }})))

(defn react-card
  "Simple react card. It only renders the react component passed in."
  ([react-component options]
   react-component)
  ([react-component]
   react-component))

(defn sab-card
  "Card that renders sablono."
  ([sab-template options]
     (react-card (sab/html sab-template) options))
  ([sab-template]
     (react-card (sab/html sab-template) {})))

(declare om-root-card)

(defn edn-card [clj-data]
  "A card that renders EDN."
  (if (satisfies? IAtom clj-data)
    (om-root-card #(om/component (edn->html %)) clj-data)
    (react-card (edn->html clj-data))))

(def react-runner-component-class
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
                     this (.-data_atom (.-state this)))))}))

;; TODO: much work to do here
(def history-component-class
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

(def node-runner-component-class
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

(defn react-runner-component [react-runner-component-fn options]
  (js/React.createElement react-runner-component-class
                          #js {:react_fn react-runner-component-fn
                               :data_atom (:initial-state options)}))

(defn react-history-runner-component [react-runner-component-fn options]
  (react-runner-component
   (fn [owner data-atom]
     (js/React.createElement history-component-class
                             #js { :react_fn react-runner-component-fn
                                   :data_atom data-atom }))
   options))

(defn node-runner-component [node-component-fn options]
  (react-runner-component
   (fn [owner data-atom]
     (js/React.createElement node-runner-component-class
                             #js {:node_fn   node-component-fn
                                  :data_atom data-atom}))
   options))

(defn react-runner-card [f options]
  (react-runner-component f options))

(defn markdown-card [& mkdn-strs]
  (node-runner-component
    (fn [node _]
      (set! (.. node -innerHTML)
            (less-sensitive-markdown mkdn-strs)))
    {}))

(defn om-root-card
  ([om-comp-fn initial-state om-options devcard-options]
   (node-runner-component
    (fn [node _]
      (om/root om-comp-fn initial-state (merge om-options {:target node})))
    devcard-options))
  ([om-comp-fn initial-state om-options]
     (om-root-card om-comp-fn initial-state om-options {}))
  ([om-comp-fn initial-state]
     (om-root-card om-comp-fn initial-state {} {}))
  ([om-comp-fn]
     (om-root-card om-comp-fn {} {} {})))



;; testing to be addressed later

(defmulti render-test (fn [x] (cond
                              (map? x) (:type x)
                              (string? x) :string)))

(defn test-wrapper [test body]
  (dom/li #js { :className (str "list-group-item list-group-item-"
                                (if (:passed test) "success" "danger")) }
          (dom/span #js { :className (str "devcards-test-icon glyphicon glyphicon-"
                                          (if (:passed test) "ok" "remove")) })
          body))

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
  (react-card
   (dom/ul #js {:className "list-group devcards-test-group"}
           (to-array (mapv (fn [t] (render-test t))
                           assertions)))
   {:padding false}))
