(ns ^:figwheel-always devdemos.core
    (:require
     [devcards.core :as devcards]
     [om.core :as om :include-macros true]
     [om.dom :as dom :include-macros true]   
     [clojure.string :as string]
     [sablono.core :as sab :include-macros true]
     [devdemos.two-zero]
     [devdemos.testing]
     [cljs.test :as t :include-macros true])
    (:require-macros
     [devcards.core :as dc :refer [defcard defcard-doc deftest]]))

(enable-console-print!)

(devcards.core/start-devcard-ui!)

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
   that don't have the `:devcards true` build option set.")


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
  "Since the name is optional you can write docs just by like this:"
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
   
  You can also 
"
  (dc/mkdn-pprint-code '(defcard (sab/html [:h3 "This is a valid card."])))
  "Above we simply passed a React Element created by `sablono` to `defcard` 
  and it gets rendered as the following card:")

(defcard "# Devcard examples")

(dc/defcard-edn edn-card-example
  
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

(dc/defcard-edn om-test-atom-data
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
