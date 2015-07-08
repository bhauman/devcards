(ns devdemos.extentions
    (:require
     [devcards.core :as devcards]
     [sablono.core :as sab :include-macros true]
     [cljs.test :as t :include-macros true]
     [om.core :as om]
     [reagent.core :as rg])
    (:require-macros
     [devcards.core :as dc :refer [defcard defcard-doc deftest dom-node]]))

(defcard string
  (str "## **string** type will render as markdown."))

(defcard persitent-array-map
  "**PersitentArrayMap** will be rendered as edn"
  {:hey "there"})

(defcard persistent-vector
  "**PersitentArrayMap** will be rendered as edn"
  [:hi])

(defcard persistent-hash-set
  "**PersitentHashSet** will be rendered as edn"
  #{ 1 2 3 })

(defcard list
  "**List** will be rendered as edn"  
  '(1 2 3))

(defcard empty-list
  "**EmptyList** will be rendered as edn"  
  '())

(defonce sample-atom (atom 25))

(defcard atom-card
  "Atom will be rendered as edn and will watch and rerender the atom when it changes.

  It will also set `:history true`"
  sample-atom)

(swap! sample-atom inc)

(defcard checking-meta
  ^{:type :ommer} (fn [a b] (sab/html [:div "ommer"]))
  {}
  {:heading 5})

(defcard om-root
  (dc/om-root
   (fn [data owner]
     (reify om/IRender
       (render [_]
         (sab/html [:h1 "This is om now!!!"]))))))


(defn simple-component []
  [:div
   [:p "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red "] "text."]])

(defcard reagent
  (rg/as-element simple-component))


(defonce click-count (rg/atom 0))

(defn counting-component []
  [:div
   "The atom " [:code "click-count"] " has valuer: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])

(defcard reagent-counter
  (dc/reagent (counting-component)))

;; experimenting with reloadable local state
(defn elapsed-template [seconds-elapsed props]
  [:div
   [:h1 (:name props)]
   "Seconds Elapsed yeppers now: " @seconds-elapsed])

(defn timer-component [props]
  (let [seconds-elapsed (rg/atom 0)]
    (js/setInterval #(swap! seconds-elapsed inc) 1000)
    (fn [props1]
      (prn props1)
      (elapsed-template seconds-elapsed props))))

;; trick to capture local state through reloads
(defonce timer (rg/reactify-component timer-component))

(defn timer-app [_]
  [:div [:h1 "I'm a timer app"]
   (rg/create-element timer #js {:name "George" })])

(defonce timer-apper (rg/reactify-component timer-app))

(defcard reagent-counter-3
  (rg/create-element timer-apper))

(defcard reagent-locals-try
  "A quick way to create some stable local atoms"
  (dc/reagent->
   (fn [data-atom _]
     (let [{:keys [name age]} @data-atom]
       [:div [:h3 "Hi there " @name]
        [:p "You are " @age " years old!"]])))
  ;; store the needed locals in the data atom
  {:age  (rg/atom 55)
   :name (rg/atom "George")})

(defn counting-component-passing-ratom [ratom]
  [:div
   "The atom " [:code "click-count"] " has valuer: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])

(defonce temp-atom (rg/atom {:count 12}))

(defcard reagent-atom-support
  "## We should support anything with the IAtom interface

   This will allow folks to use Reagent's rAtom."
  (dc/reagent->
   (fn [counter-atom _]
     [:div "counting away "
      [:button {:on-click #(swap! counter-atom update-in [:count] inc)} "inc"] " " (:count @counter-atom)]))
  temp-atom
  {:inspect-data true
   :history true})

(defcard direct-ratom-support
  temp-atom)

;; tried to support reagent cursor but updates are firing during render

;; hmmm need to be smarter about watching things for cursors sake

#_(defonce c (rg/cursor temp-atom []))

#_(defcard reagent-cursor c {} {:heading 5})
