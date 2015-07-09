(ns ^:figwheel-always devdemos.defcard-api
    (:require
     [devcards.core]
     [om.core :as om :include-macros true]
     [om.dom :as dom :include-macros true]
     [reagent.core :as reagent]
     [clojure.string :as string]
     [sablono.core :as sab :include-macros true]
     [cljs.test :as t :include-macros true :refer-macros [testing is]])
    (:require-macros
     ;; Notice that I am not including the 'devcards.core namespace
     ;; but only the macros. This helps ensure that devcards will only
     ;; be created when the :devcards is set to true in the build config.
     [devcards.core :as dc :refer [defcard defcard-doc noframe-doc deftest dom-node]]))

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
   '(defcard (fn [data-atom owner]
               (sab/html [:div [:h2 "Example: fn that returns React"]
                          (prn-str data-atom)]))))
  "In this example the `owner` is the enclosing cards ReactElement and
  the `data-atom` is a ClojureScript Atom.")

(defcard
  (fn [data-atom owner]
    (sab/html [:div [:h3 "Example: fn that returns React"]
               (prn-str data-atom)])))

(defcard-doc
  "If `data-atom` in the above example changes then the card will be re-rendered.
  
   Let's make a quick example counter:"
    (dc/mkdn-pprint-code
     '(defcard
        (fn [data-atom owner]
          (sab/html [:div [:h3 "Example Counter: " (:count @data-atom)]
                     [:button {:onClick (fn [] (swap! data-atom update-in [:count] inc))} "inc"]])))))

(defcard
  (fn [data-atom owner]
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
      (fn [data-atom owner]
        (sab/html [:div [:h3 "Example Counter w/Initial Data: " (:count @data-atom)]
                   [:button {:onClick (fn [] (swap! data-atom update-in [:count] inc))} "inc"]]))
      {:count 50})))

(defcard
  (fn [data-atom owner]
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
      (fn [data-atom owner]
        (sab/html [:h3 "Example Counter w/Shared Initial Atom: " (:count @data-atom)]))
      first-example-state))
  
  (dc/mkdn-pprint-code
   '(defcard example-incrementer
      (fn [data-atom owner]
        (sab/html [:button {:onClick (fn [] (swap! data-atom update-in [:count] inc))} "increment"]))
      first-example-state))

  (dc/mkdn-pprint-code
   '(defcard example-decrementer
      (fn [data-atom owner]
        (sab/html [:button {:onClick (fn [] (swap! data-atom update-in [:count] dec))} "decrement"]))
      first-example-state))
  "As you can see, we created three cards that all share the same state.

   If you try these example cards below you will see that they are all wired together:")

(defonce first-example-state (atom {:count 55}))

(defcard example-counter
  (fn [data-atom owner]
    (sab/html [:h3 "Example Counter w/Shared Initial Atom: " (:count @data-atom)]))
  first-example-state)

(defcard example-incrementer
  (fn [data-atom owner]
    (sab/html [:button {:onClick (fn [] (swap! data-atom update-in [:count] inc)) } "increment"]))
  first-example-state)

(defcard example-decrementer
  (fn [data-atom owner]
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
      (dom-node (fn [data-atom node]
                  (set! (.-innerHTML node) "<h2>Example Dom Node</h2>"))))))

(defcard example-dom-node
  (dom-node
   (fn [data-atom node]
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
  (fn [data-atom _]
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
  (fn [data-atom _]
    (sab/html
     [:div
      [:h3 "This counter is sharing state"]
      [:p "The next card is sharing the same atom as this card."]
      (counter-app-rct data-atom)]))  
  react-shared-atom)

(defcard react-runner-card-shared-2
  (fn [data-atom _]
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
