(ns devdemos.reagent
  (:require
   [devcards.core]
   [reagent.core :as reagent])
  (:require-macros
   [devcards.core :as dc :refer [defcard defcard-rg defcard-doc]]))

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
                                    :refer [defcard defcard-rg]]))
```
")

(defcard
    "## Devcard Reagent basics

First of all, you don't need to use any of Devcards helpers to use Reagent.

You can use the `reagent.core/as-element` function to turn your
reagent code into a ReactElement.

The following works great:

```clojure
(defcard reagent-no-help
  (reagent/as-element [:h1 \"Reagent example\"]))
```

You can see the example rendered below:
")

(defcard reagent-no-help
  
  (reagent/as-element [:h1 "Reagent example"]))

(defcard
  "This will also work with Reagent components

```clojure
(defn reagent-component-example []
  [:div \"hey there\"])

(defcard reagent-no-help
  (reagent/as-element [reagent-component-example]))
```
And you can see this rendered below:
")

(defn reagent-component-example []
  [:div "hey there"])

(defcard reagent-component
  (reagent/as-element [reagent-component-example]))

(defcard
  "# Devcards helpers

Devcards provides two macros to help you use reagent.

* `devcards.core/reagent`
* `devcards.core/defcard-rg`

The `devcards.core/reagent` macro just calls `as-element` so the
following works just like above.

```clojure
(defcard reagent-macro-1
  (dc/reagent [:div \"This works fine\"]))
```

If you pass a function of 2 arguments to the `devcards.core/reagent`
macro it will behave just like passing a function as the main object to `defcard`.

```clojure
(defcard reagent-macro-2
  (dc/reagent (fn [data-atom _] [:div \"this works as well\"])))
```

I'll explore uses for this in just a bit.

Since typeing `(defcard reagent-macro-1 (dc/reagent ...))` is a tad
verbose Devcards provides the `devcards.core/defcard-rg` macro.

With `defcard-rg` you can create all the above examples without
explicitely calling `dc/reagent`. 

The follwing two examples work and are a bit cleaner:


```clojure
(defcard-rg rg-example-2
  \"some docs\"
  [:div \"this works\"])

(defcard-rg rg-example
  \"some docs\"
  (fn [data-atom _] [:div \"this works as well\"])
  (reagent/atom {:counter 5}))
```

Alright let's look at some more examples:


")

(defcard-rg jamming
  "You can pass straight Reagent hiccup markup to `devcard-rg` like so:

   ```clojure
   (defcard-rg jamming 
     [:div {:style {:border \"10px solid blue\" :padding \"20px\"}}
       [:h1  \"Composing Reagent Hiccup on the fly\"]
       [:p \"adding arbitrary hiccup\"]])
   ```
"
  [:div {:style {:border "10px solid blue" :padding "20px"}}
    [:h1  "Composing Reagent Hiccup on the fly"]
    [:p "adding arbitrary hiccup"]])


;; counter 1

(defonce counter1-state (reagent/atom {:count 0}))

(defn counter1 []
  [:div "Current count: " (@counter1-state :count)
   [:div
    [:button {:on-click #(on-click counter1-state)}
     "Increment"]]])

(defcard-rg counter1
  "
## Counter1 (Basic)

The simplest way to create a reagent devcard is to pass the `defcard-rg` macro a single argument:

1) a reagent component (i.e., `counter1`) wrapped by square brackets:

```clojure
(defn on-click [ratom]
  (swap! ratom update-in [:count] inc))

(defonce counter1-state (reagent/atom {:count 0}))

(defn counter1 []
  [:div \"Current count: \" (@counter1-state :count)
   [:div
    [:button {:on-click #(on-click counter1-state)}
    \"Increment\"]]])

(defcard-rg counter1
   [counter1]) ;; <--1
```
"
  [counter1])

;; counter 2

(defonce counter2-state (reagent/atom {:count 0}))

(defn counter2 []
  [:div "Current count: " (@counter2-state :count)
   [:div
    [:button {:on-click #(on-click counter2-state)}
     "Increment"]]])

(defcard-rg counter2
  "
## Counter 2 (Displaying the state of reagent atom/cursor)

However, wouldn't it be nice to see the state of our component? To
accomplish this, we can pass the following arguments to the defcard
macro:

1) a reagent component (i.e., `counter2`) wrapped by square brackets

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

(defcard-rg counter2
  [counter2] ;; <-- 1
  counter2-state ;; <-- 2
  {:inspect-data true} ;; <-- 3
  )
```
"
  [counter2] ;; <-- 1
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

(defcard-rg counter3
  "
## Counter 3 (Passing in an argument to the reagent component)

At this point, you may be wondering, *how do we pass in arguments to
the reagent component itself?* All you have to do is pass in your
reagent component along with it's args. 

```clojure
(defn on-click [ratom]
  (swap! ratom update-in [:count] inc))

(defonce counter3-state (reagent/atom {:count 0}))

(defn counter3 [ratom] ;; <-- counter2 expects one argument
  [:div \"Current count: \" (@ratom :count)
   [:div
    [:button {:on-click #(on-click ratom)}
    \"Increment\"]]])

(defcard-rg counter3
  [counter3 counter3-state] ;; <-- passing in a ratom (counter3-state) to our reagent component (counter3)
  counter3-state ;; <-- notice that we are *still* passing in a 2nd argument to defcard!
  {:inspect-data true}
  )
```
"
  [counter3 counter3-state]
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

(defcard-rg counter4
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

(defcard-rg counter4
  [counter4 counter4-state
                       {:title \"Counter 4\"
                        :button-text \"INCREMENT\"}] ;; <-- passing in two arguments to our reagent component
  counter4-state ;; <-- notice that we are *still* passing in a 2nd argument to defcard!
  {:inspect-data true}
  )
```
"
  [counter4 counter4-state {:title "Counter 4"
                                        :button-text "INCREMENT"}]
  counter4-state
  {:inspect-data true}
  )

(defcard-rg isolating-state
  "## Isolating state

  You may only want to have state available to your example code. This is accomplished in the following example:

  ```clojure
  (defcard-rg isolating-state
    (fn [data-atom _]
      [counter4 data-atom {:title \"Counter 5\"
                           :button-text \"increment isolated state\"}])
    (reagent/atom {:count 0}) ; <-- intial ratom
    {:inspect-data true})
  ```

"
  (fn [data-atom _]
    [counter4 data-atom {:title "Counter 5"
                         :button-text "increment isolated state"}])
  (reagent/atom {:count 0}) ; <-- intial ratom
  {:inspect-data true})








