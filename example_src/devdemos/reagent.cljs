(ns devdemos.reagent
  (:require
   [devcards.core :as dc :include-macros true]
   [devcards.system :refer [IMount IUnMount IConfig]]
   [reagent.core :as reagent]
   )
  (:require-macros
   [devcards.core :refer [defcard format-code format-data]]))

(defcard reagent-card-template-example
  (dc/reagent-card
   [:div
    [:h2 "This is a reagent card using a hiccup-style template."]]))

(defn render-fn
  []
  [:div
   [:h2 "This is a reagent card using a render function."]])

(defcard reagent-card-function-example
  (dc/reagent-card render-fn))

(defn render-fn-with-state
  []
  (let [s (reagent/atom 0)]
    (fn []
      [:div
       [:h2 "This is a reagent card using a render function with local state."]
       [:div [:span (str "Count: " @s)]]
       [:div [:a {:on-click #(swap! s inc)} "Inc"]]])))

(defcard reagent-card-function-with-state-example
  (dc/reagent-card [render-fn-with-state]))

(defcard reagent-card-using-react-spec
  (dc/reagent-card (reagent/create-class {:render (render-fn-with-state)})))
