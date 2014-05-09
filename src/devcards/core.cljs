(ns devcards.core
  (:require
   [frontier.core :refer [run
                          make-runnable
                          runner-start] :as fr]
   [frontier.cards :as fc]
   [devcards.system :refer [devcard-system-start
                            devcard-renderer
                            register-listeners
                            unmount-card-nodes
                            mount-card-nodes
                            unique-card-id
                            throttle-function
                            IMountable]]
   [sablono.core :as sab :include-macros true]
   [devcards.util.edn-renderer :refer [html-edn]]
   [markdown.core :as md]
   [clojure.string :as string]
   [figwheel.client :refer [watch-and-reload]]
   [cljs.core.async :refer [put! chan] :as async]))

;; oh well
(defonce devcard-event-chan (chan))

(defn start-devcard-ui! []
  (defonce devcard-system
    (let [ds (devcard-system-start devcard-event-chan
                                   (throttle-function devcard-renderer 50))]
      (register-listeners "#devcards" devcard-event-chan)
      ds)))

(defn start-single-card-ui! []
  (defonce devcard-system
    (devcard-system-start devcard-event-chan
                          (throttle-function
                           (fn [{:keys [state event-chan]}]
                            (unmount-card-nodes state)
                            (mount-card-nodes state))
                           50))))

(defn start-figwheel-reloader!
  ([opts]
     (watch-and-reload (merge {:jsload-callback (fn [x] (put! devcard-event-chan [:jsreload]))}
                              opts)))
  ([] (start-figwheel-reloader! {})))

(defn register-card [path tags func]
  (put! devcard-event-chan
        [:register-card {:path path :tags tags :func func}]))

(defn render-single-card [card-path node]
  (let [id (unique-card-id card-path)]
    (when-not (.getElementById js/document id)
      (.html (js/$ node) (str "<div class='devcard-rendered-card' id='" id "'></div>")))))

;;; cards

(defn render-to
  ([react-dom html-node callback]
     (.renderComponent js/React react-dom html-node callback))
  ([react-dom html-node]
     (render-to react-dom html-node identity)))

(defn react-card [react-component]
  "Simple react card. It only renders the react component passed in."
  (reify IMountable
    (mount [_ {:keys [node]}]
      (render-to react-component
                 node identity))
    (unmount [_ {:keys [node]}]
      (.unmountComponentAtNode js/React node))))

(defn sab-card [sab-template]
  "Card that renders sablono."
  (react-card (sab/html sab-template)))

(defn edn-card [clj-data]
  "A card that renders end."
  (sab-card
   [:div.devcards-pad-card
    (html-edn clj-data)]))


;; another way to do this is to create a runner component and
;; pass it to the react card.
(defn react-runner-card [react-component-fn]
  "The card takes a function which takes a data atom and returns a
react component. Any changes to the atom cause the component to
rerender."
  (reify IMountable
    (mount [_ {:keys [node data]}]
      (add-watch data :react-runner
                 (fn [_ _ _ n]
                   (render-to (react-component-fn data)
                              node identity)
                   ))
      (render-to (react-component-fn data)
                 node identity))
    (unmount [_ {:keys [node data]}]
      (remove-watch data :react-runner)
      (.unmountComponentAtNode js/React node))))

(defmulti render-test :type)

(defn test-wrapper [test bd]
  [:li.list-group-item
   {:className (if (:passed test) "list-group-item-success" "list-group-item-danger")}
   (if (:passed test)
     [:span.glyphicon.glyphicon-ok]
     [:span.glyphicon.glyphicon-remove])
   [:span.test-body
    bd]])

(defmethod render-test :is [test]
  (test-wrapper test
                (list [:span.operator "is"]
                      [:span.exp (prn-str (:body test))])))

(defmethod render-test :are= [test]
  (test-wrapper test
                (list [:span.operator "="]
                      [:span.exp (prn-str (:exp1 test))]
                      [:span.exp (prn-str (:exp2 test))])))

(defmethod render-test :are-not= [test]
  (test-wrapper test
                (list [:span.operator "!="]
                      [:span.exp (prn-str (:exp1 test))]
                      [:span.exp (prn-str (:exp2 test))])))

(defn test-card [& assertions]
  (sab-card
   [:ul.list-group.test-group
    (map render-test assertions)]))

;; slider card

(defrecord SliderCard [f arg-seqs]
  fr/ITransform
  (-transform [o [msg-name data] state]
    (condp = msg-name
      :set-index-for-key (assoc-in state [:keyed-vals (:k data)] (:index data))
      state))
  fr/IDerive
  (-derive [o state]
    (let [sorted-keyed-values (sort-by first (into [] (:keyed-vals state)))
          slider-inputs (map (fn [[k i] seq*]
                              {:k k
                               :index i
                               :v (nth seq* i)
                               :max (dec (count seq*))})
                              sorted-keyed-values
                              arg-seqs)]
      (assoc state
        :slider-inputs slider-inputs
        :result
        (apply f (map :v slider-inputs))))))

(defn slider-input-control [{:keys [k v index seq*] :as ic} event-chan]
  [:div.slider-control
    [:input {:type "range"
             :onChange (fn [e]
                         (async/put! event-chan
                               [:set-index-for-key
                                {:k k,
                                 :index (.parseInt
                                         js/window
                                         (.-value (.-target e)))}]))
             :defaultValue index
             :min 0
             :max (:max ic)}]
   [:div (prn-str v)]])

(defn make-slider-renderer [value-render-func]
  (fn [{:keys [state event-chan] :as rstate}]
    [:div
     [:div.col-md-4
      [:h4 "args"]
      (map
       (fn [slider-in]
         (slider-input-control slider-in event-chan))
       (:slider-inputs state))]
     [:div.col-md-8
      [:h4 "result"]
      [:div (value-render-func (:result state))]]
     [:div.clearfix]]))


(defn slider-card [f arg-seqs & {:keys [value-render-func]}]
  (fc/system-card { :keyed-vals (into {}
                                   (mapv vector (range (count arg-seqs))
                                         (repeat 0)))}
               (fr/make-renderable
                (fr/compose (SliderCard. f arg-seqs))
                (make-slider-renderer (or value-render-func html-edn)))
               []))

;; heckler card

(defn heckle-values [generator]
  (mapv
   (fn [args]
     {:args args })
   (generator)))

(defn heckle-error? [res-val]
  (get (meta res-val) :heckle-error))

(defn heckle-derive [data f test-func]
  (map
   (fn [args]
     (let [res (try (apply f (:args args))
                    (catch :default e (with-meta {} {:heckle-error e})))
           passed (if (heckle-error? res) true
                      (test-func res))]
       { :args (:args args)
         :class (if (heckle-error? res)
                  "danger "
                  (if (not passed)
                    "warning "
                    (if (:only-errors data)
                      "hidden" "")))
         :res-val res
         :passed passed
         :error (when (heckle-error? res)
                 (:heckle-error (meta res))) }))
   (:gen-arg-list data)))

(defn heckle-renderer [f data generator value-render-func test-func]
  (let [derived-data (heckle-derive @data f test-func)]
    [:div.heckler-card
     [:div.devcards-pad-left
      [:a.btn.btn-danger.navbar-btn
       {:type "button"
        :onClick (fn [] (swap! data assoc-in [:gen-arg-list]
                              (heckle-values generator)))}
       "Re-heckle!"]
      [:a.btn.btn-default.navbar-btn.devcards-margin-left
       {
        :className (if (:only-errors @data) "active" "")
        :onClick (fn [] (swap! data update-in [:only-errors] (fn [x] (not x)))) }
       "Toggle Errors"]
      [:span.devcards-pad-left
       (if (pos? (count (filter :error derived-data)))
         [:span.label.label-danger
          (count (filter :error derived-data))
          " Errors"]
         [:span.label.label-success "No errors"])]
      [:span {:style (js-obj "paddingLeft" "14px")}
       (let [failed-tests (filter (fn [x] (= false (:passed x))) derived-data)]
         (if (pos? (count failed-tests))
           [:span.label.label-warning
            (count failed-tests)
            " Tests Failed"]
           [:span]))]]
     [:table.table.table-striped.table-hover 
      [:tr
       [:th "Called"]
       [:th "Result"]]
      (map
       (fn [{:keys [args error res-val] :as res}]
         (let []
           [:tr
            {:className (str (:class res))}
            [:td
             [:span.text-muted "(f "]
             (interpose [:span.text-muted ", "]
                        (map
                         (fn [a] [:span (prn-str a)])
                         args)) [:span.text-muted " )"]]
            [:td
             (if error
               (.-message error)
               (value-render-func res-val))
             ]]
           ))
       derived-data
       )]]
    ))

(defn heckler-card [f generator & {:keys [test-func
                                          value-render-func]}]
  (let [system-func (fn [data]
                      (when (or (nil? @data)
                                (zero? (count @data)))
                        (swap! data assoc-in [:gen-arg-list]
                               (heckle-values generator)))
                      (sab/html
                       (heckle-renderer f data generator
                                        (or value-render-func html-edn)
                                        (or test-func (fn [x] true)))))]
    (react-runner-card system-func)))

;; reduce-card

(defn reduce-card->tests [f curr value-expected-vec]
  (if (empty? value-expected-vec)
    []
    (let [val* (first value-expected-vec)
          res-val  (f curr (first val*))]
      (cons
       { :type :are=
         :exp1 (list 'f curr (first val*))
         :exp2 (second val*)
         :passed (= res-val (second val*))}
       (reduce-card->tests f res-val (rest value-expected-vec))))))

(defn reduce-card [f init value-expected-vec]
  (let [red-tests (reduce-card->tests f init (partition 2 value-expected-vec))]
    (apply test-card red-tests)))

(defn reduce-fr-card [fr-comp initial-state & msg-expects-vec]
  (reduce-card (fn [state msg]
                 (fr/-transform (SliderCard. 1 1) msg state))
               initial-state
               msg-expects-vec))

;; markdown card

(def markdown-card
  (fn [& mkdn-strs]
    (with-meta
      (fn [{:keys [node]}]
        (set! (.-innerHTML node)
              (md/mdToHtml (string/join "\n" mkdn-strs))))
      {:tags [:no-heading]})))
