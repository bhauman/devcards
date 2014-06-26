(ns devcards.core
  (:require
   [frontier.core  :as fr]
   [frontier.cards  :as fc]
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
   [sablono.core :as sab :include-macros true]
   [devcards.util.edn-renderer :as edn-rend]
   [clojure.string :as string]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [figwheel.client :refer [watch-and-reload-with-opts
                            default-on-compile-fail
                            default-on-cssload
                            default-before-load]]
   [cljs.core.async :refer [put! chan] :as async]))

;; oh well
(defonce devcard-event-chan (chan))

(defn start-devcard-ui!
  "This function starts the full devcard UI."
  []
  (defonce devcard-system
    (do
      (render-base-if-necessary!)
      (let [ds (devcard-system-start devcard-event-chan
                                     (throttle-function devcard-renderer 50))]
        (register-listeners devcard-event-chan)
        ds))))

(defn start-single-card-ui!
  "Start a devcard UI that allows you to cherry pick which cards to display.
   You will need to call render-single-card to put cards into the dom."
  []
  (defonce devcard-single-card-system
    (devcard-system-start devcard-event-chan
                          (throttle-function
                           (fn [{:keys [state event-chan]}]
                            (unmount-card-nodes state)
                            (mount-card-nodes state))
                           50))))

(defn devcard-before-jsload [x] (put! devcard-event-chan [:before-jsload x]) x)

(defn devcard-on-jsload [x] (put! devcard-event-chan [:jsreload x]) x)

(defn devcard-on-cssload [x] (put! devcard-event-chan [:cssload]) x)

(defn devcard-on-compile-fail [exception-msg]
  (put! devcard-event-chan [:compile-fail exception-msg])
  exception-msg)

(defn start-figwheel-reloader!
  "Start the figwheel reloader and hook it into devcards so that cards
   are reloaded on code reloads."
  ([opts]
     (watch-and-reload-with-opts (assoc opts
                                   :before-jsload   (comp devcard-before-jsload
                                                          default-before-load)
                                   :on-jsload       devcard-on-jsload
                                   :on-compile-fail (comp devcard-on-compile-fail
                                                          default-on-compile-fail)
                                   :on-cssload (comp devcard-on-cssload
                                                     default-on-cssload))))
  ([] (start-figwheel-reloader! {})))

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

(defn render-single-card [card-path node]
  "Declare that a card with a certain path will be rendered to a
   certain node. This is helpful for blog post examples."
  (let [id (path->unique-card-id card-path)]
    (when-not (.getElementById js/document id)
      (.html (js/$ node) (str "<div class='devcard-rendered-card' id='" id "'></div>")))))

;;; utils

;; returns a react component of rendered edn
(def edn->html edn-rend/html-edn)

;; I am abridging regular markdown here so that we can
;; handle big long indented strings.

(defn leading-space-count [s]
  (when-let [ws (second (re-matches #"^([\s]*).*"  s))]
    (.-length ws)))

(defn code-delim? [s]
  (and (not (nil? s))
       (re-matches #"^\s*```.*" s)))

(defn group-and-trim-code-block [xs]
  (let [opener (first xs)
        leading-spaces (leading-space-count opener)
        code-block (take-while (complement code-delim?) (rest xs))
        after-code-block (rest (drop-while (complement code-delim?) (rest xs)))]
    (cons (string/join "\n"
                 (concat [(string/trim opener)]
                         (map #(subs % leading-spaces) code-block)
                         ["```"]))
          after-code-block)))

(defn group-and-trim-code-blocks [xs]
  (cond
   (nil? xs) []
   (empty? xs) []
   (code-delim? (first xs))
   (-> (group-and-trim-code-block xs)
       group-and-trim-code-blocks)
   :else (cons (first xs) (group-and-trim-code-blocks (rest xs)))))

(defn trim-markdown-string [s]
  (if (not-empty (re-matches #"^```[\s\S]*" s))
    s
    (->> (string/split s "\n")
         group-and-trim-code-blocks
         (map string/trim)
         (string/join "\n"))))

(defn preformat-markdown [mkdn-strs]
  (string/join "\n" (map trim-markdown-string mkdn-strs)))

(let [conv-class (.-converter js/Showdown)
      converter (conv-class.)]
  (defn markdown-to-html
    "render markdown"
    [markdown-txt]
    (.makeHtml converter markdown-txt)))

(def less-sensitive-markdown (comp markdown-to-html preformat-markdown))



(defn render-to
  "Render a react component to a node."
  ([react-dom html-node callback]
     (.renderComponent js/React react-dom html-node callback))
  ([react-dom html-node]
     (render-to react-dom html-node identity)))

(defn unmount-react [node]
  "Unmount a react component from a node."
  (.unmountComponentAtNode js/React node))

(defn react-raw [raw-html-str]
  "A React component that renders raw html."
  (.div (.-DOM js/React)
        (clj->js { :dangerouslySetInnerHTML
                   { :__html
                     raw-html-str }})))

(defrecord ReactCard [react-component options]
  IMount
  (mount [_ {:keys [node]}]
    #_(println "calling mount")
    (render-to react-component node))
  IUnMount
  (unmount [_ {:keys [node]}]
    #_(println "calling UNmount")
    (unmount-react node))
  IConfig
  (-options [_]
    (merge { :unmount-on-reload false } options)))

(defn react-card
  "Simple react card. It only renders the react component passed in."
  ([react-component options]
     (ReactCard. react-component options))
  ([react-component] (react-card react-component {})))

(defn sab-card
  "Card that renders sablono."
  ([sab-template options]
     (react-card (sab/html sab-template) options))
  ([sab-template]
     (react-card (sab/html sab-template) {})))

(declare om-root-card)

(defn box-data-atom [initial-state]
  (if (and initial-state (satisfies? IAtom initial-state))
    { :__devcards-atom-box initial-state }
    initial-state ))

(defn unbox-data-atom [data-atom]
  (or (and (map? @data-atom)
           (:__devcards-atom-box @data-atom))
      data-atom))

(defn edn-card [clj-data]
  "A card that renders EDN."
  (if (satisfies? IAtom clj-data)
    (om-root-card #(om/component (edn->html %)) clj-data)
    (react-card (edn->html clj-data))))

(defrecord ReactRunnerCard [react-component-fn uniq-key options]
  IMount
  (mount [_ {:keys [node data-atom]}]
    (let [da (unbox-data-atom data-atom)]
      (add-watch da uniq-key
                 (fn [_ _ _ _] (render-to (react-component-fn da) node)))
      (reset! da @da)))
  IUnMount
  (unmount [_ {:keys [node data-atom]}]
    (remove-watch (unbox-data-atom data-atom) uniq-key)
    (unmount-react node))
  IConfig
  (-options [_]
    (merge { :unmount-on-reload false }
           options
           {:initial-state (box-data-atom (:initial-state options))})))

;; another way to do this is to create a runner component and
;; pass it to the react card.
(defn react-runner-card
  "This card takes a function which takes a data atom and returns a
react component. Any changes to the atom cause the component to
rerender."
  ([react-component-fn options]
     (ReactRunnerCard. react-component-fn (keyword (gensym 'react-runner))
      options))
  ([react-component-fn]
     (react-runner-card react-component-fn {})))

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

;; slider card

(defrecord SliderCard [f arg-seqs]
  fr/ITransform
  (-transform [o [msg-name data] state]
    (condp = msg-name
      :set-index-for-key (assoc-in state [:keyed-vals (:k data)] (:index data))
      state))
  fr/IDerive
  (-derive [o state]
    (let [slider-inputs (map (fn [[k seq*]]
                               (let [i (k (:keyed-vals state))]
                                 {:k k
                                  :index i
                                  :v   (nth seq* i)
                                  :max (dec (count seq*))}))
                             arg-seqs)]
      (assoc state
        :slider-inputs slider-inputs
        :result
        (f (into {} (map (juxt :k :v) slider-inputs)))))))

(defn slider-input-control [{:keys [k v index seq*] :as ic} event-chan]
  (dom/div #js {:className "slider-control"}
   (dom/div #js {} (dom/strong #js {} (str k)) " " (prn-str v))
   (dom/input #js {:type "range"
                   :onChange (fn [e]
                               (async/put! event-chan
                                           [:set-index-for-key
                                            {:k k,
                                             :index (.parseInt
                                                     js/window
                                                     (.-value (.-target e)))}]))
                   :defaultValue index
                   :min 0
                   :max (:max ic)})))

(defn make-slider-renderer [value-render-func]
  (fn [{:keys [state event-chan] :as rstate}]
    (dom/div
     #js {:className "devcard-padding"}
     (dom/div
      #js {:className "col-md-4"}
      (dom/h4 #js{} "args")
      (to-array
       (mapv
        (fn [slider-in]
          (slider-input-control slider-in event-chan))
        (:slider-inputs state))))
     (dom/div
      #js {:className "col-md-8"}
      (dom/h4 #js{} "result")
      (dom/div #js {} (sab/html (value-render-func (:result state)))))
     (dom/div
      #js {:className "clearfix"}))))

(declare frontier-system-card)

(defn slider-card [f arg-seqs & {:keys [value-render-func]}]
  (frontier-system-card { :keyed-vals (into {}
                                      (mapv vector (keys arg-seqs) (repeat 0)))}
                  (fr/make-renderable
                   (fr/compose (SliderCard. f arg-seqs))
                   (make-slider-renderer (or value-render-func edn->html)))
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
                      (test-func args res))]
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
    (dom/div
     #js {:className "devcards-heckler-card"}
     (dom/div #js {:className "devcards-pad-left"}
              (dom/a #js {:type "button"
                          :className "btn btn-danger navbar-btn"
                          :onClick (fn [] (swap! data assoc-in [:gen-arg-list]
                                                (heckle-values generator)))}
                     "Re-heckle!")
              (dom/a #js { :className
                          (str
                           "btn btn-default navbar-btn devcards-margin-left"
                           (if (:only-errors @data) " active" ""))
                          :onClick (fn [] (swap! data update-in [:only-errors] (fn [x] (not x)))) }
                     "Filter Errors")
              (dom/span #js {:className  "devcards-pad-left" }
                        (let [error-count (count (filter :error derived-data))]
                          (if (pos? error-count)
                            (dom/span #js {:className "label label-danger"}
                                      error-count
                                      " Errors")
                            (dom/span #js {}))))
              (dom/span #js {:style #js {:paddingLeft "14px"}}
                        (let [failed-tests (filter (fn [x] (= false (:passed x))) derived-data)]
                          (if (pos? (count failed-tests))
                            (dom/span #js {:className "label label-warning"}
                                      (count failed-tests)
                                      " Tests Failed")
                            (dom/span #js {}))))
              )
          (dom/table #js { :className "table table-striped table-hover"}
                (dom/tr #js {}
                        (dom/th #js {} "Called")
                        (dom/th #js {} "Result"))
                (to-array
                 (mapv
                  (fn [{:keys [args error res-val] :as res}]
                    (let []
                      (dom/tr #js {:className (str (:class res))}
                              (let [args' (map #(dom/span #js {} (prn-str %)) args)]
                                (dom/td #js {}
                                        (to-array
                                         (concat
                                          [(dom/span #js {:className "text-muted"} "(f ")]
                                          (interleave (butlast args')
                                                      (repeatedly #(dom/span #js {:className "text-muted"} ",")))
                                          [(last args')
                                           (dom/span #js {:className "text-muted"} ")")]))))
                              (dom/td #js {}
                                      (if error
                                        (.-message error)
                                        (sab/html (value-render-func res-val)))))))
                  derived-data))))))

(defn heckler-card [f generator & {:keys [test-func
                                          value-render-func]}]
  (let [system-func (fn [data]
                      (when (or (nil? @data)
                                (zero? (count @data)))
                        (swap! data assoc-in [:gen-arg-list]
                               (heckle-values generator)))
                      (sab/html
                       (heckle-renderer f data generator
                                        (or value-render-func edn->html)
                                        (or test-func (fn [x] true)))))]
    (react-runner-card system-func {:padding false})))

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
    (reify
      IMount
      (mount [_ {:keys [node]}]
        (set! (.-innerHTML node)
              (less-sensitive-markdown mkdn-strs)))
      IConfig
      (-options [_] {:heading false}))))

;; om-card

(defrecord OmRootCard [om-comp initial-state om-options devcard-options]
  IMount
  (mount [_ {:keys [node data-atom]}]
    (om/root om-comp (unbox-data-atom data-atom) (merge om-options {:target node})))
  IUnMount
  (unmount [_ {:keys [node]}]
    (unmount-react node))
  IConfig
  (-options [_]
    (merge { :unmount-on-reload false
             :initial-state (box-data-atom initial-state)}
           devcard-options)))

(defn om-root-card
  ([om-comp-fn initial-state om-options devcard-options]
     (OmRootCard. om-comp-fn initial-state om-options devcard-options))
  ([om-comp-fn initial-state om-options]
     (om-root-card om-comp-fn initial-state om-options {}))
  ([om-comp-fn initial-state]
     (om-root-card om-comp-fn initial-state {} {}))
  ([om-comp-fn]
     (om-root-card om-comp-fn {} {} {})))



;; for frontier components don't look down here yet :)
;; super alpha

(defrecord FrontierSystemCard [initial-state component initial-inputs devcard-options]
  IMount
  (mount [_ {:keys [node data-atom]}]
    (let [sys (fr/run-with-atom
               (or (:state-atom @data-atom) (atom nil))
               initial-state
               component
               (fn [state]
                 (when-let [react-dom (fr/-render component state)]
                   (.renderComponent js/React (sab/html react-dom) node identity))))]
      (if (and (nil? (:state-atom @data-atom))
               (and initial-inputs (pos? (count initial-inputs))))
        (doseq [msg initial-inputs]
          (put! (:event-chan sys) msg))
        (put! (:event-chan sys) [:__system.noop]))
      (reset! data-atom sys)))
  IUnMount
  (unmount [_ {:keys [node data-atom]}]
    (when (:running @data-atom)
      (reset! data-atom (fr/runner-stop @data-atom)))
    (.unmountComponentAtNode js/React node))
  IConfig
  (-options [_]
    (merge { :unmount-on-reload false
             :padding false }
           devcard-options)))

(defn frontier-system-card
  ([initial-state component initial-inputs devcard-options]
     (FrontierSystemCard. initial-state component initial-inputs devcard-options))
  ([initial-state component initial-inputs]
     (frontier-system-card initial-state component initial-inputs {})))

(defn managed-history-card
  ([initial-state component initial-inputs devcard-options]
     (let [inputs (mapv (partial fr/msg-prefix [:__history-keeper :state]) initial-inputs)
           initial-state' (assoc-in {} [:__history-keeper :state] initial-state)]
       (frontier-system-card initial-state'
                    (fc/history-manager initial-state
                                     component)
                    inputs
                    devcard-options)))
  ([initial-state component initial-inputs]
     (managed-history-card initial-state component initial-inputs {})))
