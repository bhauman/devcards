(ns devdemos.om
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
     [devcards.core :as dc :refer [defcard defcard-doc defcard-om noframe-doc deftest dom-node]]))

(defcard-doc
   "## Rendering Om components with `om-root` and `defcard-om`

    The `om-root` will render Om components, much the way `om/root` does.")

(defn widget [data owner]
  (om/component
   (sab/html [:h2 "This is an om card, " (:text data)])))

(defonce test-om-data test-om-data)

(defcard omcard-ex
  (dc/om-root widget)
  {:text "yep"})

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

(defn unmount-sample [_ _]
  (reify
    om/IDidMount
    (did-mount [_]
      (println "mounting"))
    om/IWillUnmount
    (will-unmount [_]
      (println "unmounting this"))
    om/IRender
    (render [_]
      (dom/div nil "unmount"))))

(defcard-om sample-cardd
  unmount-sample
  {})

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
