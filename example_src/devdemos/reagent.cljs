(ns devdemos.reagent
  (:require
   [devcards.core]
   [reagent.core :as reagent])
  (:require-macros
   [devcards.core :as dc :refer [defcard defcard-doc]]))

;; util

(defn on-click [ratom]
  (swap! ratom update-in [:count] inc))

(defcard-doc
  "
## Rendering Reagent components

Note: The following examples assume a namespace that looks like this:

```clojure
(ns xxx
    (:require [devcards.core]
              [reagent.core :as reagent])
    (:require-macros [devcards.core :as dc
                                    :refer [defcard]]))
```
")

;; counter 1

(defonce counter1-state (reagent/atom {:count 0}))

(defn counter1 []
  [:div "Current count: " (@counter1-state :count)
   [:div
    [:button {:on-click #(on-click counter1-state)}
     "Increment"]]])

(defcard counter1
  "
## Counter1 (Basic)

The simplest way to create a reagent devcard is to pass the `defcard` macro a single argument:

1) a reagent component (i.e., `counter1`) wrapped by devcard.core's `reagent` *macro* (i.e., `dc/reagent`)

```clojure
(defn on-click [ratom]
  (swap! ratom update-in [:count] inc))

(defonce counter1-state (reagent/atom {:count 0}))

(defn counter1 []
  [:div \"Current count: \" (@counter1-state :count)
   [:div
    [:button {:on-click #(on-click counter1-state)}
    \"Increment\"]]])

(defcard counter1
  (dc/reagent counter1)) ;; <--1
```
"
  (dc/reagent counter1))

;; counter 2

(defonce counter2-state (reagent/atom {:count 0}))

(defn counter2 []
  [:div "Current count: " (@counter2-state :count)
   [:div
    [:button {:on-click #(on-click counter2-state)}
     "Increment"]]])

(defcard counter2
  "
## Counter 2 (Displaying the state of reagent atom/cursor)

However, wouldn't it be nice to see the state of our component? To
accomplish this, we can pass the following arguments to the defcard
macro:

1) a reagent component (i.e., `counter2`) wrapped by devcard.core's `reagent` *macro* (i.e., `dc/reagent`)

2) the reagent atom (or cursor) that holds the state of our component (i.e., `counter2-state`)

3) a hash-map of options, where we set inspect-data to true (i.e., `{:inspect-data :true}`}

```clojure
(defn on-click [ratom]
  (swap! ratom update-in [:count] inc))

(defonce counter2-state (reagent/atom {:count 0}))

(defn counter2 []
  [:div \"Current count: \" (@counter2-state :count)
   [:div
    [:button {:on-click #(on-click counter2-state)}
    \"Increment\"]]])

(defcard counter2
  (dc/reagent counter2) ;; <-- 1
  counter2-state ;; <-- 2
  {:inspect-data true} ;; <-- 3
  )
```
"
  (dc/reagent counter2) ;; <-- 1
  counter2-state ;; <-- 2
  {:inspect-data true} ;; <-- 3
  )

;; counter 3

(defonce counter3-state (reagent/atom {:count 0}))

(defn counter3 [ratom]
  [:div "Current count: " (@ratom :count)
   [:div
    [:button {:on-click #(on-click ratom)}
     "Increment"]]])

(defcard counter3
  "
## Counter 3 (Passing in an argument to the reagent component)

At this point, you may be wondering, *how do we pass in arguments to
the reagent component itself?* All you have to do is pass in your
reagent component to defcard.core's reagent macro in *square brackets*.

```clojure
(defn on-click [ratom]
  (swap! ratom update-in [:count] inc))

(defonce counter3-state (reagent/atom {:count 0}))

(defn counter3 [ratom] ;; <-- counter2 expects one argument
  [:div \"Current count: \" (@ratom :count)
   [:div
    [:button {:on-click #(on-click ratom)}
    \"Increment\"]]])

(defcard counter3
  (dc/reagent [counter3 counter3-state]) ;; <-- passing in a ratom (counter3-state) to our reagent component (counter3)
  counter3-state ;; <-- notice that we are *still* passing in a 2nd argument to defcard!
  {:inspect-data true}
  )
```
"
  (dc/reagent [counter3 counter3-state])
  counter3-state
  {:inspect-data true}
  )

;; counter 4

(defonce counter4-state (reagent/atom {:count 0}))

(defn counter4 [ratom
                {:keys [title button-text]}]
  [:div [:h3 title]
   [:div "Current count: " (@ratom :count)]
   [:div [:button {:on-click #(on-click ratom)}
          button-text]]])

(defcard counter4
  "
## Counter 4 (Passing in multiple arguments to the reagent component)

We can pass in an arbitray number of arguments to our reagent component if we wrap it in square brackets.

```clojure
(defn on-click [ratom]
  (swap! ratom update-in [:count] inc))

(defonce counter4-state (reagent/atom {:count 0}))

(defn counter4 [ratom
               {:keys [title button-text]}] ;; <-- counter4 expects two arguments: a ratom, and a hash-map
  [:div [:h3 title]
   [:div \"Current count: \" (@ratom :count)]
   [:div [:button {:on-click #(on-click ratom)}
          button-text]]])

(defcard counter4
  (dc/reagent [counter4 counter4-state
                       {:title \"Counter 4\"
                        :button-text \"INCREMENT\"}]) ;; <-- passing in two arguments to our reagent component
  counter4-state ;; <-- notice that we are *still* passing in a 2nd argument to defcard!
  {:inspect-data true}
  )
```
"
  (dc/reagent [counter4 counter4-state {:title "Counter 4"
                                        :button-text "INCREMENT"}])
  counter4-state
  {:inspect-data true}
  )
