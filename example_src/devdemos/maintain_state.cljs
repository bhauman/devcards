(ns devdemos.maintain_state
    (:require
     [sablono.core :as sab :include-macros true]
     [devcards.core])
    (:require-macros
     ;; Notice that I am not including the 'devcards.core namespace
     ;; but only the macros. This helps ensure that devcards will only
     ;; be created when the :devcards is set to true in the build config.
     [devcards.core :as dc :refer [defcard defcard-doc deftest dom-node]]
     [cljs-react-reload.core :refer [defonce-react-class def-react-class]]))

(defcard
  "# Maintain local React state

This is just a document to hold examples of maintaining React local state.

This is mainly intended for verification of behavior.")

(defonce-react-class County
  #js {:getInitialState
       (fn []
         #js {:count 0})
       :render
       (fn []
         (this-as this
           (let [count (aget (.-state this) "count")]
             (sab/html
              [:div [:h1 "Counter: " count]
               [:button {:onClick (fn [e] (.setState this #js {:count (inc count)}) )} "inc"]])
             )))})

(defcard counter-with-local-state
  "
## Counter with local state.

The state of this counter is stored in the local state of the component.

To test: increment the counter then save this file and verify that the counter state hasn't changed."
  (js/React.createElement County))

