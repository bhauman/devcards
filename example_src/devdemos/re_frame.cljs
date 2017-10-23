(ns devdemos.re-frame
  (:require
   [devcards.core]
   [devcards.iframe :refer-macros [defcard-rg-iframe]]
   [reagent.core :as reagent]
   [re-frame.core :as re-frame])
  (:require-macros
    [reagent.ratom :refer [reaction]]
    [devcards.core :as dc :refer [defcard defcard-rg defcard-doc]]))

(defcard-doc
  "
## Rendering Re-frame components

Note: The following examples assume a namespace that looks like this:

```clojure
(ns xxx
    (:require [devcards.core]
              [reagent.core :as reagent]
              [re-frame.core :as re-frame])
    (:require-macros [devcards.core :as dc
                                    :refer [defcard defcard-rg]]))
```
")

(defcard
    "## Devcard Re-frame basics

As re-frame uses a single global db, if we render multiple re-frame devcards
on the same page, we can't make each of them to be based on a different app state.
All of them would share the same app state, which is pretty boring... Unless we
make each of them to be loaded inside of an iframe! And that's what we are going
to show in the following examples.

We'll use defcard-rg instead of plain defcard, because you know, re-frame components
are usually reagent components")

(defn re-frame-component-example []
  (let [guest-name (re-frame/subscribe [:guest-name])]
    [:div "Hi " @guest-name "!"]))

(defn setup-example-1 []
  (re-frame/reg-event-db
    :initialize-db
    (fn [db [_ data]]
      data))

  (re-frame/reg-event-db
    :update-guest-name
    (fn [db [_ guest-name]]
      (assoc db :guest-name guest-name)))

  (re-frame/reg-sub
    :guest-name
    (fn [db _]
      (:guest-name db))))

(defcard-rg-iframe re-frame-component
  "This is a re-frame devcard not using data-atom, rendered in an iframe. It just says Hi! to our guest:"
  (fn [data-atom _]
    (setup-example-1)
    (re-frame/dispatch [:update-guest-name "Peter"])
    [re-frame-component-example]))

(defcard-rg-iframe re-frame-component-initialize-db
  "This is the same re-frame component, but now using data-atom to initialize the db, rendered in an iframe:"
  (fn [data-atom _]
    (setup-example-1)
    (re-frame/dispatch [:initialize-db @data-atom])
    [re-frame-component-example])
  {:guest-name "John"})

(defcard-rg re-frame-component-no-iframe
  "Once again, the same simple re-frame component, but now rendered without using an iframe.
  This example is only to show that we can't have more than one re-frame devcard
  not using iframe, if we want them to be initialized with different state. Uncomment the following
  devcard and you'll see how the app state is shared"
  (fn [data-atom _]
    (setup-example-1)
    (re-frame/dispatch [:update-guest-name "Mary"])
    [re-frame-component-example]))

#_(defcard-rg re-frame-component-no-iframe-2
  "When uncommented, this devcard shows that you can't have two re-frame devcards using separate
  app state without using iframe. See how both guests are called the same!"
  (fn [data-atom _]
    (setup-example-1)
    (re-frame/dispatch [:update-guest-name "Alice"])
    [re-frame-component-example]))

#_(defcard
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

Since typing `(defcard reagent-macro-1 (dc/reagent ...))` is a tad
verbose Devcards provides the `devcards.core/defcard-rg` macro.

With `defcard-rg` you can create all the above examples without
explicitly calling `dc/reagent`.

The following two examples work and are a bit cleaner:


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

;; counter 1

(defn setup-counter1 []
  (re-frame/reg-event-db :initialize-db
    (fn [db [_ data]] data))

  (re-frame/reg-event-db :increment-counter
    (fn [db _] (update db :counter inc)))

  (re-frame/reg-sub
    :counter
    (fn [db _]
      (:counter db))))

(defn counter1 []
  (let [counter (re-frame/subscribe [:counter])]
    [:div "Current count: " @counter
     [:div
      [:button {:on-click #(re-frame/dispatch [:increment-counter])}
       "Increment"]]]))

(defcard-rg-iframe counter1-card
  "
## Counter1 (Basic)

The simplest way to create a re-frame devcard is to pass the `defcard-rg-iframe` macro a function
that takes the data atom, initializes the re-frame app and whatever state is interesting for this
card and then returns a reagent component:

```clojure
(defn setup-counter1 []
  (re-frame/reg-event-db :initialize-db
    (fn [db [_ data]] data))

  (re-frame/reg-event-db :increment-counter
    (fn [db _] (update db :counter inc)))

  (re-frame/reg-sub
    :counter
    (fn [db _]
      (:counter @db))))

(defn counter1 []
  (let [counter (re-frame/subscribe [:counter])]
    [:div \"Current count: \" @counter
     [:div
      [:button {:on-click #(dispatch [:increment-counter])}
       \"Increment\"]]]))
```
"
  (fn [data-atom _]
    (setup-counter1)
    (re-frame/dispatch [:initialize-db @data-atom])
    [counter1])
  {:counter 0})

;; counter 2

#_(defonce counter2-state (reagent/atom {:count 0}))

#_(defn counter2 []
  [:div "Current count: " (@counter2-state :count)
   [:div
    [:button {:on-click #(on-click counter2-state)}
     "Increment"]]])

#_(defcard-rg counter2
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


#_(defonce counter3-state (reagent/atom {:count 0}))

#_(defn counter3 [ratom]
  [:div "Current count: " (@ratom :count)
   [:div
    [:button {:on-click #(on-click ratom)}
     "Increment"]]])

#_(defcard-rg counter3
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

#_(defonce counter4-state (reagent/atom {:count 0}))

#_(defn counter4 [ratom
                {:keys [title button-text]}]
  [:div [:h3 title]
   [:div "Current count: " (@ratom :count)]
   [:div [:button {:on-click #(on-click ratom)}
          button-text]]])

#_(defcard-rg counter4
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

#_(defcard-rg isolating-state
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








