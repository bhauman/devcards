(ns devcards.core
  (:require
   [devcards.system :as dev :refer [prevent->]]

   [devcards.util.markdown :refer [less-sensitive-markdown]]

   [sablono.core :as sab :include-macros true]
   [devcards.util.edn-renderer :as edn-rend]
   [clojure.string :as string]

   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]

   [cljsjs.react]

   [cljs.test :as t :refer [report]]   
   [cljs.pprint :as pprint]
   [cljs.core.async :refer [put! chan] :as async])
  (:import [goog.string StringBuffer]))

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

(def edn->html edn-rend/html-edn)



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
                   :history_atom (atom {:history (list) :pointer 0})})
        :componentDidUpdate
        (fn [prevP, prevS]
          (this-as this
                   (when (and (.. this -props -node_fn)
                              (not= (.. this -props -node_fn)
                                    (.. prevP -node_fn)))
                     #_(prn (str (.. this -props -node_fn)))
                     #_(prn (str (.. prevP -node_fn)))
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
                                                  :history (cons n (drop pointer history))
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
          (prn "BACK")
          (this-as this
                   (let [history-atom   (.. this -state -history_atom)
                         {:keys [history pointer]} @history-atom]
                     (when (.. this canGoBack)
                       (prn "BACK BACK" pointer)
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
        :render
         (fn []
           (this-as this
                    (sab/html
                     [:div
                      [:h2 (str "history " (count (:history @(.. this -state -history_atom))))]
                      (when (.canGoBack this)
                        (sab/html
                         [:a {:onClick (fn [e]
                                         (.preventDefault e)
                                         (.. this backInHistory))} "back"])) " "
                      (when (.canGoForward this)
                        (sab/html
                         [:a {:onClick (fn [e]
                                         (.preventDefault e)
                                         (.. this forwardInHistory)
                                         )} "forward"]))
                      
                      [:div ((.. this -props -react_fn)
                             this
                             (.. this -props -data_atom))]
                      (edn->html @(.. this -state -history_atom))])))}))

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
           [:span
            { :onClick
             (devcards.system/prevent->
             #(devcards.system/set-current-path!
               devcards.system/app-state
               path))}
            (when path (name (last path)) ) " "]]
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

(declare om-root-card)

(defn edn-card [initial-data]
  "A card that renders EDN."
  (if (satisfies? IAtom initial-data)
    (runner-base* (fn [_ data-atom]
                    (edn->html @data-atom))
                  initial-data)
    (edn->html initial-data)))

;; formatters to help with markdown-card

(def mkdn-code #(str "```\n" % "```\n"))

(defn pprint-str [obj]
  (let [sb (StringBuffer.)]
    (pprint/pprint obj (StringBufferWriter. sb))
    (str sb)))

(defn pprint-code [code]
  (pprint/with-pprint-dispatch pprint/code-dispatch (pprint-str code)))

(def mkdn-pprint-code (comp mkdn-code pprint-code))

(def mkdn-pprint-str (comp mkdn-code pprint-str))

;; end formatting

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


;; testing

(comment
  mapping to source-maps
  make event open test in editor

  )

(defn collect-test [m]
  (cljs.test/update-current-env!
   [:_devcards_collect_tests] conj
   (merge (select-keys (cljs.test/get-current-env) [:testing-contexts]) m)))

(defmethod report [:_devcards_test_card_reporter :pass] [m]
  (cljs.test/inc-report-counter! :pass)
  (collect-test m)
  m)

(defmethod report [:_devcards_test_card_reporter :fail] [m]
  (cljs.test/inc-report-counter! :fail)  
  (collect-test m)
  m)

(defmethod report [:_devcards_test_card_reporter :error] [m]
  (cljs.test/inc-report-counter! :error)
  (collect-test m)
  m)

(defmethod report [:_devcards_test_card_reporter :test-doc] [m]
  (collect-test m)
  m)

(defn run-test-block [f]
  (cljs.core/binding [cljs.test/*current-env* (assoc (cljs.test/empty-env)
                                                     :reporter :_devcards_test_card_reporter)]
    (f)
    (cljs.test/get-current-env)))

(defn react-raw [raw-html-str]
  "A React component that renders raw html."
  (.div (.-DOM js/React)
        (clj->js { :dangerouslySetInnerHTML
                   { :__html
                     raw-html-str }})))

(defmulti test-render :type)

(defmethod test-render :default [m]
  (sab/html [:div (prn-str m)]))

(defn display-message [{:keys [message]} body]
  (if message
      (sab/html [:div [:span.com-rigsomelight-devcards-test-message message]
                 body])
      body))

(defn render-pass-fail [{:keys [expected] :as m}]
  (display-message m (sab/html [:pre [:code (pprint-code expected)]])))

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

(defn test-doc [s]
  (report {:type :test-doc :documentation (less-sensitive-markdown [s])}))

(defn test-renderer [t]
  [:div
   {:className (str "com-rigsomelight-devcards-test-line com-rigsomelight-devcards-" (name (:type t)))}
   (test-render t)])



(defn layout-tests [tests]
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
                       (cons (test-renderer (merge {:type :context} (select-keys t [:testing-contexts])))
                             res)
                       res))]
           (concat html-list res ))})
      {}
      (reverse tests)))]))

(defn test-frame [test-summary]
  (let [path (:path devcards.system/*devcard-data*)
        tests (:_devcards_collect_tests test-summary)
        some-tests (filter (fn [{:keys [type]}] (not= type :test-doc))
                      (:_devcards_collect_tests test-summary))
        total-tests (count some-tests)
        {:keys [fail pass error]} (:report-counters test-summary)]
    (runner-base*
     (fn [owner data-atom]
       (sab/html
        [:div.com-rigsomelight-devcards-base.com-rigsomelight-devcards-card-base-no-pad
         [:div.com-rigsomelight-devcards-panel-heading
          [:span
           { :onClick
            (prevent->
             #(devcards.system/set-current-path!
               devcards.system/app-state
               path))}
           (when path (str (name (last path))) )]
          [:span.com-rigsomelight-devcards-badge
           {:style {:float "right"
                    :margin "3px 3px"}
            :onClick (prevent->
                       #(swap! data-atom assoc :filter identity))}
           total-tests]
          (when-not (zero? (+ fail error))
            (sab/html
             [:span.com-rigsomelight-devcards-badge
              {:style {:float "right"
                       :backgroundColor "#d9534f"
                       :color "#fff"
                       :margin "3px 3px"}
               :onClick (prevent->
                         #(swap! data-atom assoc :filter (fn [{:keys [type]}]
                                                           (#{:fail :error} type))))}
              (+ fail error)]))          
          (when-not (zero? pass)
            (sab/html
             [:span.com-rigsomelight-devcards-badge
              {:style {:float "right"
                       :backgroundColor "#5cb85c"
                       :color "#fff"
                       :margin "3px 3px"}
               :onClick (prevent->
                         #(swap! data-atom assoc :filter (fn [{:keys [type]}] (= type :pass)))) }
              pass]))]
         [:div {:className devcards.system/devcards-rendered-card-class}
          (layout-tests (filter (:filter @data-atom) tests))]]))
     {:filter identity})))

(defn test-card* [& parts]
  (let [tests (run-test-block (fn [] (doseq [f parts] (f))))]
    (test-frame tests)))
