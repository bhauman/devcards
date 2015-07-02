(ns ^:figwheel-always devdemos.core
    (:require
     [devcards.core :as devcards]
     [om.core :as om :include-macros true]
     [om.dom :as dom :include-macros true]   
     [clojure.string :as string]
     [sablono.core :as sab :include-macros true]
     [devdemos.two-zero]
     [devdemos.testing]
     [devdemos.errors]
     [devdemos.extentions]
     [cljs.test :as t :include-macros true :refer-macros [testing is]])
    (:require-macros
     [devcards.core :as dc :refer [defcard defcard-doc noframe-doc deftest dom-node]]))

(enable-console-print!)

(devcards.core/start-devcard-ui!)

(defcard-doc
  "# Devcards: the hard sell
    
   Devcards is intended to make ClojureScript development a pure joy.
 
   Devcards are intended to facilitate **interactive live
   development**. Devcards can be used in conjuntion with figwheel but
   will also work with any form of live file reloading.
 
   Devcards revolves around a multi-purpose macro called `defcard`.
   You can think of `defcard` a powerful form of pprint that helps you display
   code examples as an organized set of cards. 

   The Devcards you create are intended to have no impact on the size
   of your production code. You can use devcards just as you would use
   exectuable comments. You can also keep them seperate like a test
   suite.

   Devcards configuration couldn't be simpler. Just add `:figwheel
   {:devcards true}` to your build config.

   Let's look at an advanced Devcard:"

  (dc/mkdn-pprint-code
   '(defcard bmi-calculator
      "*Code taken from the Reagent readme.*"
      (fn [_ data-atom] (bmi-component data-atom))
      {:height 180 :weight 80}
      {:inspect-data true :history true}))

  "And you can see this devcard rendered below:")


;; code from the reagent page adapted to plain reagent
(defn calc-bmi [bmi-data]
  (let [{:keys [height weight bmi] :as data} bmi-data
        h (/ height 100)]
    (if (nil? bmi)
      (assoc data :bmi (/ weight (* h h)))
      (assoc data :weight (* bmi h h)))))

(defn slider [bmi-data param value min max]
  (sab/html
   [:input {:type "range" :value value :min min :max max
            :style {:width "100%"}
            :on-change (fn [e]
                         (swap! bmi-data assoc param (.-target.value e))
                         (when (not= param :bmi)
                           (swap! bmi-data assoc :bmi nil)))}]))

(defn bmi-component [bmi-data]
  (let [{:keys [weight height bmi]} (calc-bmi @bmi-data)
        [color diagnose] (cond
                          (< bmi 18.5) ["orange" "underweight"]
                          (< bmi 25) ["inherit" "normal"]
                          (< bmi 30) ["orange" "overweight"]
                          :else ["red" "obese"])]
    (sab/html
     [:div 
      [:h3 "BMI calculator"]
      [:div
       "Height: " (int height) "cm"
       (slider bmi-data :height height 100 220)]
      [:div
       "Weight: " (int weight) "kg"
       (slider bmi-data :weight weight 30 150)]
      [:div
       "BMI: " (int bmi) " "
       [:span {:style {:color color}} diagnose]
       (slider bmi-data :bmi bmi 10 50)]])))

(defcard bmi-calculator
  "*Code taken from the Reagent readme.*"
  (fn [_ data-atom] (bmi-component data-atom))
  {:height 180 :weight 80}
  {:inspect-data true :history true})

(defcard-doc
  "## Time travel

   Please interact with **the BMI calculator above**. As you change
   the sliders you will notice that a "
   (str "<span class='com-rigsomelight-devcards-history-control-left'></span>")
   "shows up in the upper right hand corner.

   That is a history control widget. This is part of the devcard and
   can be enabled by adding `{:history true}` to the devcard options.
   
   Go ahead and move the sliders and play with the history control
   widget. *add instructions for other controls here*

   ## Data display

   You will also notice that the data from the main data store is
   being displayed. This is enabled by adding `{:inspect-data true}`
   to the devcard options.

   ## Markdown docs
   
   The phrase \"*Code taken from the Reagent readme.*\" is optional in
   the example above. But allows for the easy display of contextual
   documentation.

   ## Auto-detection
   
   The `defcard` macro does its best to display the data given to it.
   You can pass `defcard` a **string**, a **ReactElement**, a **Map**, a **Vector**, a
   **List**, an **Atom**, an **RAtom**, an **IDeref** and expect
   various cursor implementations to work soon as well.
   " )

(deftest cljs-test-integration
  "# clsj.test integration

   Devcards provides a `deftest` macro that behaves very similarly to
   the `cljs.test/deftest` macro. This makes it easy to define tests
   that both show up in the Devcards display and can be run
   using `(run-tests)` as well.
  
   The test card has controls in the upper right hand corner that not
   only summerize testing status but also allow you to focus on passing or
   failing tests.

   Go ahead and click on the numbers in the header of this card.
  
   The test card will display the testing context as well as the
   messages for the various tests that run."
  (testing "testing context 1"
    (is (= (+ 3 4 55555) 4) "This is the message arg to an 'is' test")
    (is (= (+ 1 0 0 0) 1) "This should work")
    (is (= 1 3))              
    (is false)
    (is (throw "errors get an extra red line on the side")))
  "Top level strings are interpreted as markdown for inline documentation."
  (t/testing "testing context 2"
    (is (= (+ 1 0 0 0) 1))        
    (t/is (= (+ 3 4 55555) 4))
    (t/is false)
    (t/testing "nested context"
      (is (= (+ 1 0 0 0) 1))        
      (t/is (= (+ 3 4 55555) 4))
      (t/is false))))


(defn om-slider [bmi-data param value min max]
  (sab/html
   [:input {:type "range" :value value :min min :max max
            :style {:width "100%"}
            :on-change (fn [e]
                         (om/update! bmi-data param (.-target.value e))
                         (when (not= param :bmi)
                           (om/update! bmi-data :bmi nil)))}]))

(defn om-bmi-component [bmi-data owner]
  (let [{:keys [weight height bmi]} (calc-bmi bmi-data)
        [color diagnose] (cond
                          (< bmi 18.5) ["orange" "underweight"]
                          (< bmi 25) ["inherit" "normal"]
                          (< bmi 30) ["orange" "overweight"]
                          :else ["red" "obese"])]
    (om/component
     (sab/html
      [:div 
       [:h3 "BMI calculator"]
       [:div
        "Height: " (int height) "cm"
        (om-slider bmi-data :height height 100 220)]
       [:div
        "Weight: " (int weight) "kg"
        (om-slider bmi-data :weight weight 30 150)]
       [:div
        "BMI: " (int bmi) " "
        [:span {:style {:color color}} diagnose]
        (om-slider bmi-data :bmi bmi 10 50)]]))))

(defcard om-support
  "# Om support

   Here is the same calculator being rendered as an Om application.

   ```
   (defcard om-support
     (dc/om-root om-bmi-component)
     {:height 180 :weight 80} ;; initial data
     {:inspect-data true :history true })
   ``` 
   "
  (dc/om-root om-bmi-component)
  {:height 180 :weight 80} ;; initial data
  {:inspect-data true
   :history true })

(defcard-doc
  
  "# Devcards

   ClojureScript Devcards are a tool to help you **quickly** surface what
   you are working on. This page holds an quick introduction to
   devcards.

   #### This is a Devcard"
   
  (dc/mkdn-pprint-code
   '(defcard "# This is a heading"))

  "The Devcard above simply outputs a 'card' with the markdown in it."
 
  "Devcards are designed to be written inline with your code during
   development. They are like advanced stateful `println`s that can
   hold almost any arbitrary functionality that you want."

  "## Devcards are intended to be interactive

   The cards on this page can be found in the file
   **example_src/devdemos/core.cljs**.  Please follow along in this file
   to see how these examples are created.

   If you ran `lein figwheel` to get this demo started, you can edit
   **example_src/devdemos/core.cljs** and see this page update when you save
   the file.

   I highly encourage you to poke and prod at the code you find on
   this page so you can experience how Devcards works.

   Go ahead and change this text to see the changes reflected here."

  "## Devcards do not impact your production code.
   The defcard API consists of macros that will dissapear from builds
   that don't have the `:devcards true` build option set."

  "## Only interested in Om?  

   Devcards fully supports Om. You can skip down to the `defcard-om` section below.")

(defcard-doc
  "#It all starts with `defcard`
   `defcard` is a multipurpose macro.
   
   The first optional argument is a symbol to *name* the card. This
   symbol will show up as the heading of a card."
  (dc/mkdn-pprint-code '(defcard first-example))
  "This creates the following card:")

(defcard first-example)

(defcard-doc
  "### Optional markdown doc

  You can also add an optional markdown documentation to your card."
  (dc/mkdn-pprint-code '(defcard example-2 "## Example: This is optional markdown"))
  "Which creates the following card:")

(defcard example-2 "## Example: This is optional markdown")

(defcard-doc
  "Since the name is optional you can write docs just like this:"
  (dc/mkdn-pprint-code '(defcard "## Example: This is quick documentation."))
  "Which creates the following card:")

(defcard "## Example: This is quick documentation.")

(defcard-doc
  "## The object of our attention 
   
   The main object that we are displaying comes after the optional
   **name** and **documentation**.

   This main object can be either a ReactElement of a function that
   returns a ReactElement.

   For example this is valid:"
  (dc/mkdn-pprint-code '(defcard react-example (sab/html [:h3 "Example: Rendering a ReactElement"])))
  "Above we simply passed a React Element created by `sablono` to `defcard` 
  and it gets rendered as the following card:")

(defcard react-example (sab/html [:h3 "Example: Rendering a ReactElement"]))

(defcard-doc
  "### The function parameter:
   
  Instead of a ReactElement you can provide a function the takes two
  parameters and returns a ReactElement like so:"
  (dc/mkdn-pprint-code
   '(defcard (fn [owner data-atom]
               (sab/html [:div [:h2 "Example: fn that returns React"]
                          (prn-str data-atom)]))))
  "In this example the `owner` is the enclosing cards ReactElement and
  the `data-atom` is a ClojureScript Atom.")

(defcard
  (fn [owner data-atom]
    (sab/html [:div [:h3 "Example: fn that returns React"]
               (prn-str data-atom)])))

(defcard-doc
  "If `data-atom` in the above example changes then the card will be re-rendered.
  
   Let's make a quick example counter:"
    (dc/mkdn-pprint-code
     '(defcard
        (fn [owner data-atom]
          (sab/html [:div [:h3 "Example Counter: " (:count @data-atom)]
                     [:button {:onClick (fn [] (swap! data-atom update-in [:count] inc))} "inc"]])))))

(defcard
  (fn [owner data-atom]
    (sab/html [:div [:h3 "Example Counter: " (:count @data-atom)]
               [:button {:onClick (fn [] (swap! data-atom update-in [:count] inc))} "inc"]])))

(defcard-doc
  "## Initial state

  The counter example above was very interesting but what if you want
  to introduce some initial state?

  Well the next option after the main object is the **initial-data**
  parameter. You can use it like so:"
  (dc/mkdn-pprint-code
   '(defcard
      (fn [owner data-atom]
        (sab/html [:div [:h3 "Example Counter w/Initial Data: " (:count @data-atom)]
                   [:button {:onClick (fn [] (swap! data-atom update-in [:count] inc))} "inc"]]))
      {:count 50})))

(defcard
  (fn [owner data-atom]
    (sab/html [:div [:h3 "Example Counter w/Initial Data: " (:count @data-atom)]
               [:button {:onClick (fn [] (swap! data-atom update-in [:count] inc))} "inc"]]))
  {:count 50})

(defcard-doc
  "## Initial state can be an Atom

  You can also pass an Atom as the initial state. This is a very
  important feature of devcards as it allows you to share state
  between cards.

  The following examples share state:"

  (dc/mkdn-pprint-code
   '(defonce first-example-state (atom {:count 55})))

  (dc/mkdn-pprint-code
   '(defcard example-counter
      (fn [owner data-atom]
        (sab/html [:h3 "Example Counter w/Shared Initial Atom: " (:count @data-atom)]))
      first-example-state))
  
  (dc/mkdn-pprint-code
   '(defcard example-incrementer
      (fn [owner data-atom]
        (sab/html [:button {:onClick (fn [] (swap! data-atom update-in [:count] inc))} "increment"]))
      first-example-state))

  (dc/mkdn-pprint-code
   '(defcard example-decrementer
      (fn [owner data-atom]
        (sab/html [:button {:onClick (fn [] (swap! data-atom update-in [:count] dec))} "decrement"]))
      first-example-state))
  "As you can see, we created three cards that all share the same state.

   If you try these example cards below you will see that they are all wired together:")

(defonce first-example-state (atom {:count 55}))

(defcard example-counter
  (fn [owner data-atom]
    (sab/html [:h3 "Example Counter w/Shared Initial Atom: " (:count @data-atom)]))
  first-example-state)

(defcard example-incrementer
  (fn [owner data-atom]
    (sab/html [:button {:onClick (fn [] (swap! data-atom update-in [:count] inc)) } "increment"]))
  first-example-state)

(defcard example-decrementer
  (fn [owner data-atom]
    (sab/html [:button {:onClick (fn [] (swap! data-atom update-in [:count] dec)) } "decrement"]))
  first-example-state)


(defcard-doc
  "## Accessing the DOM with `dom-node`

   While Devcards was written in and are very easy to use in
   conjunction with React. You may want to write something that writes
   directly to the DOM.

   The helper macro `dom-node` takes a function that accepts a DOM
   node and ClojureScript Atom and returns a ReactElement."

  (dc/mkdn-pprint-code
   '(defcard example-dom-node
      (dom-node (fn [node data-atom]
                  (set! (.-innerHTML node) "<h2>Example Dom Node</h2>"))))))

(defcard example-dom-node
  (dom-node
   (fn [node data-atom]
     (set! (.-innerHTML node) "<h2>Example Dom Node</h2>"))))



(defcard "# Devcard examples")

(dc/defcard edn-card-example
  {:edn-card "This is an edn card"
   :helpful? "It lets you quickly view EDN"})

(defcard sablono-card-example
  (sab/html
   [:div ;; if you want padding
    [:h2 "This is a Sablono card"]
    [:p "It can help you interactively work on sablono templates like this one:"]
    [:pre [:code
           (dc/pprint-str '[:div.devcard-padding ;; if you want padding
                            [:h2 "This is a Sablono card"]
                            [:p "It can help you interactively work on Sablono templates:"]
                            [:pre [:code (format-code ...)]]])
           ]]
    [:p "You can create a sablono card like so:"]
    [:pre [:code
           (dc/pprint-code
            '(defcard sablono-card-example
              (sab/html [:div.devcard-padding ;; if you want padding
                         [:h2 "This is a Sablono card"]
                         [:p "It can help you interactively work on Sablono templates:"]
                         [:pre [:code (format-code ...)]]])))]]
    [:h2 "Working on cards individually"]
    [:p "You will notice that unlike the markdown cards, this card has a heading at the top: "
     [:code "sablono-card-example"]]
    [:p "You can click the heading on this card to get it on a page all to itself."
     " This can reduce the noise of having all the cards on one page."]]))

(defn counter-app-rct [data-atom]
  (sab/html
   [:div
    [:div "Count: " (:count @data-atom)]
    [:ul
     [:li [:a {:onClick (fn [] (swap! data-atom update-in [:count] inc))} "inc"]]
     [:li [:a {:onClick (fn [] (swap! data-atom update-in [:count] dec))} "dec"]]]]))

(defcard react-runner-card-example
  (fn [_ data-atom]
    (sab/html
     [:div
       [:h3 "This is a " "react-runner-card"]
      [:p "This card triggers a re-render when it the atom is modified"]
      (counter-app-rct data-atom)]))
  {:count 30 })

(defcard-doc
 "### Sharing an Atom

 If you pass an Atom as the `:initial-state` option to the
 `react-runner-card` that Atom will be directly used as the state
 atom instead of the Atom that is provided by the Devcards system.
 This allows you to share an Atom with several cards.

 If you interact with the counter below you will see the card
 after it respond to the counter changes.")

(defonce react-shared-atom (atom {:count 3}))

(defcard react-runner-card-shared-1
  (fn [_ data-atom]
    (sab/html
     [:div
      [:h3 "This counter is sharing state"]
      [:p "The next card is sharing the same atom as this card."]
      (counter-app-rct data-atom)]))  
  react-shared-atom)

(defcard react-runner-card-shared-2
  (fn [_ data-atom]
    (sab/html [:h1 "Count: " (:count @data-atom)]))
  react-shared-atom)

(defcard-doc
   "## Om 

    The `om-root-card` will render Om components, much the way `om/root` does.")

(defn widget [data owner]
  (om/component
   (sab/html [:h2 "This is an om card, " (:text data)])))

(defonce test-om-data test-om-data)

(dc/defcard-om omcard-ex
   widget {:text "yep it is here"})

(defcard om-share-atoms
  (dc/doc
   "#### You can share an Atom between `om-root-card`s.

    Interact with the counters below."))

(defonce om-test-atom (atom {:count 20}))

(defn counter [owner data f s]
  (om/component
   (sab/html
    [:div
     [:h1 (om/get-shared owner :title) (:count data)]
     [:div [:a {:onClick #(om/transact! data :count f)} s]]
     (dc/edn data)])))

(defn om-counter-inc [data owner] (counter owner data inc "inc"))

(dc/defcard-om omcard-shared-ex-1
  om-counter-inc 
  om-test-atom
  {:shared {:title "First counter "}})

(defn om-counter-dec [data owner] (counter owner data dec "dec"))

(dc/defcard-om omcard-shared-ex-2
  om-counter-dec
  om-test-atom
  {:shared {:title "Second counter "}})

(dc/defcard om-test-atom-data
  "### You can share an Atom with an `edn-card` too:"
  om-test-atom)

(deftest test-card-ex
  "## Test card
    Test cards provide interactive testing inline with your code.
    Test cards allow arbitrary markdown in them, this can allow for a
    literate coding style"
   (t/is (= 23 (+ 21 2)))
   (t/is (= (+ 3 4 5) 12))
   "`(+ 3 4 5)` is definitely equal to `12`"
   (t/is (= (+ 3 4 5) 12)))

(defn rand-strs [c]
  (repeatedly c #(apply str (map (fn [x] (char (rand-int 255)))
                                 (range (rand-int 12))))))

#_(defcard slider-intro
  (dc/markdown-card
   "## Slider card"
   "A slider card helps you apply ranges of data to a function and see
   the results. It will render the result with the edn-renderer by default.

   If you want to render the data arbitrarily you can provide a
   function that returns a React component to named argument `:value-render-func` "))

#_(defcard slider-card-dev
  (dc/slider-card (fn [{:keys [x y z] :as state}]
                    (assoc state :result (+ x y z)))
                  {:x (rand-strs 255)
                   :y (rand-strs 255)
                   :z (rand-strs 255)}))

#_(defcard reduce-slider-trans
    (dc/reduce-fr-card
     (dc/SliderCard. 1 1)
     {}
     [:set-index-for-key {:k 0 :index 5}] {:keyed-vals {0 5}}
     [:set-index-for-key {:k 0 :index 3}] {:keyed-vals {0 3}}
   [:set-index-for-key {:k 1 :index 3}] {:keyed-vals {0 3 1 3}}))

(defn css-transform [{:keys [rx ry rz tx ty tz]}]
  (let [trns (str "rotateX(" (or rx 0) "deg) "
                             "rotateY(" (or ry 0) "deg) "
                             "rotateZ(" (or rz 0) "deg) "
                             "translateX(" (or tx 0) "px) "
                             "translateY(" (or ty 0) "px) "
                             "translateZ(" (or tz 0) "px) "
                             )]
    { "-webkit-transform" trns
      "transform" trns }))

(defn side [trans side-css]
  [:div.side {:style (clj->js
                      (merge side-css
                                (css-transform trans)))}])

(defn cube [{:keys [size cube-css side-css]}]
  (let [translate (/ size 2)
        base-side-css { :backgroundColor "green"
                        :width  (str size "px")
                        :height (str size "px")
                        :position "absolute"
                        :top "0px"}
        base-cube-css { :width "100%"
                        :height "100%"
                        :-webkit-transform-style "preserve-3d"}
        cube-css (merge base-cube-css cube-css)
        side-css (merge base-side-css side-css)]
    [:div.cube {:style (clj->js cube-css)}
     (side { :ry 0 :tz translate} (assoc side-css :backgroundColor "blue"))
     (side { :ry 180 :tz translate} (assoc side-css :backgroundColor "blue"))
     (side { :ry 90 :tz translate} (assoc side-css :backgroundColor "green"))
     (side { :ry 270 :tz translate} (assoc side-css :backgroundColor "green"))
     (side { :rx 90 :tz translate} (assoc side-css :backgroundColor "red"))
     (side { :rx 270 :tz translate} (assoc side-css :backgroundColor "yellow"))     ]))

(defn cube-template [state]
  [:div
   {:style (js-obj "position" "relative"
                   "width" "200px"
                   "height" "200px")}
   (cube { :size 200
          :cube-css (css-transform state)
          :side-css {  :width   "200px"
                       :height  "200px"
                       :opacity "0.5"
                       :border "10px solid #333"}})])

#_(defcard threed-fun
  (dc/slider-card
   identity
   {:rx (range 360)
    :ry (range 360)
    :rz (range 360)}
   :value-render-func cube-template))

(defcard creating-your-own-cards
  (dc/doc
   "# Creating your own cards"
   "You can easily create your own cards. There are two ways to create
   devcards; you can simply define a callback function, or you can
   reify an instance that implements the devcard protocols.

   The Devcard System maintains two things for each devcard, an Atom
   and a DOM node. The card has to take it from there, but the idea is
   for all the state to be maintained in the Atom and for all the
   rendering to be renderd into the node." ))
