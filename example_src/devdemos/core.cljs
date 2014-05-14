(ns devdemos.core
  (:require
   [devcards.core :as dc]
   [om.core :as om :include-macros true]   
   [clojure.string :as string]
   [sablono.core :as sab :include-macros true]
   [devdemos.two-zero])
  (:require-macros
   [devcards.core :refer [defcard is are= are-not= format-code]]))

(enable-console-print!)
(devcards.core/start-devcard-ui!)
(devcards.core/start-figwheel-reloader!)

(defcard intro
  (dc/markdown-card
   "## Devcards \n"
   "ClojureScript Devcards are a tool to help you **quickly** surface what you are working on."
   "This page holds an quick introduction to devcards.\n"
   "#### This is a devcard"
   "You can create a card like this on the page like so:\n"
   "```"
   (format-code (defcard
                  (markdown-card
                   "# This is a test")))
   "```"))

(defcard intro-2
  (dc/markdown-card
   "## Devcards are intended to be interactive"
   "The cars on this page can be found in the file `example_src/devdemos/core.cljs`. "
   "Please follow along in this file to see how these examples are created."
   "\n"
   "If you ran `lein figwheel` to get this demo started, if you edit "
   "and save the file that this code is in you will see the changes "
   "show up on this page as you save your file. \n"
   "Go ahead and change this text to see the changes reflected here."))

(defcard sablono-card-example
  (dc/sab-card
   [:div.devcard-padding ;; if you want padding
    [:h2 "This is a Sablono card"]
    [:p "It can help you interactively work on sablono templates like this one:"]
    [:pre [:code
           (format-code [:div.devcard-padding ;; if you want padding
                         [:h2 "This is a Sablono card"]
                         [:p "It can help you interactively work on Sablono templates:"]
                         [:pre [:code (format-code ...)]]])
           ]]
    [:h2 "Working on cards individually"]
    [:p "You will notice that unlike the markdown cards, this card has a heading at the top: "
     [:code "sablono-card-example"]]
    [:p "You can click the heading on this card to get it on a page all to itself."
     " This can reduce the noise of having all the cards on one page."]]))







(defcard base-api
  (dc/markdown-card
   "## Base API"
   "Devcards are basically functions that take a `DOM node and a data atom."
   "\n"
   "For example this is a devcard."
   "```"
   (format-code (fn [{:keys [node data]}] (.innerHTML node "<h2>Awesome?</h2>")))
   "```"
   "and you can use it like so:"
   "```"
   (format-code (defcard my-first-card (fn [{:keys [node data]}]
                                         (set! (.-innerHTML node) "<h2>Awesome?</h2>"))))
   "```"
   "You can see it rendered below."))


(defcard my-first-card (fn [{:keys [node data]}]
                         (set! (.-innerHTML node) "<h2>Awesome?</h2>")))

(defcard advanced-api
  (dc/markdown-card
   "## Mountable API"
   "")
  )


(defcard test-card-ex
  (dc/test-card
   (is (= 23 (+ 21 2)))
   (are= (+ 3 4 5) 12)
   (are-not= (+ 3 4 5) 7)))

(defn rand-strs [c]
  (repeatedly c #(apply str (map (fn [x] (char (rand-int 255)))
                                 (range (rand-int 12))))))

(defcard slider-card-dev
  (dc/slider-card (fn [& args] (apply + args))
                  [(rand-strs 255)
                   (rand-strs 255)
                   (rand-strs 255)]))

(defn to-heckle-f [a b]
  (if (zero? (mod b 10))
    (throw (js/Error. "Crappers Error Thrown"))
    (+ a b)))

(defcard hekler-card-ex
  (dc/heckler-card
   to-heckle-f
   ;; generator
   (fn [] (map vector
              (repeatedly 30 #(rand-int 300))
              (repeatedly 30 #(rand-int 300))))
   :test-func (fn [x] (< x 200))))


(defcard reduce-slider-trans
  (dc/reduce-fr-card
   (dc/SliderCard. 1 1)
   {}
   [:set-index-for-key {:k 0 :index 5}] {:keyed-vals {0 5}}
   [:set-index-for-key {:k 0 :index 3}] {:keyed-vals {0 3}}
   [:set-index-for-key {:k 1 :index 3}] {:keyed-vals {0 3 1 3}}))

(defcard reduce-card-ex
  (dc/reduce-card + 1 [(+ 1 0) 2
                         1 3
                         1 4
                         1 5]))

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

(defcard threed-fun
  (dc/slider-card
   (fn [x y z]
     {:rx x :ry y :rz z})
   [(range 360)
    (range 360)
    (range 360)]
   :value-render-func cube-template))

(defn widget [data owner]
  (reify
    om/IRender
    (render [this]
      (sab/html [:h1 "thi heh? " (:text data)]))))

(defcard omcard-ex
    (dc/om-card widget {}))

