(ns devdemos.custom-cards
  (:require
   [devcards.core :as dc]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [cljs-react-reload.core :refer [defonce-react-class]]
   [devcards.core :refer [defcard defcard-doc]]))

(defcard
  "# Extending Devcards

There are several ways to get custom behavior out of devcards.

* create a React Component
* create an instance of `devcards.core/IDevcardOptions`
* create an instance of `devcards.core/IDevcard`

Implementing a React Component is the most straightforward way to
create some tooling on top of Devcards.

Here is a sketch of such usage:

```clojure
(defn graph-state-overtime [state-atom state-filter] 
  ...
  code that does some cool graphing
  ...)

(defcard state-over-time-view
  (fn [state _]
    (sab/html 
      [:div 
         (your-component state)
         (graph-state-overtime state :x)]))
  ;; initial state
  {:x 0})
```

You can create a macro to make the above composition much more
convenient to use.

```clojure
;; in a clj namespace
(defmacro def-state-plot-card [vname component init-state filter-fn]
   `(defcard ~vname
        (fn [state# _]
           (sab/html 
             [:div 
               (~component state)
               (graph-state-overtime state# ~filter-fn)]])
        ~init-state))

;; use this in a cljs namespace
(def-state-plot-card cool-state-plot 
  my-component
  {:x 0} 
  :x)
```

## Reaching into Devcards arguments with IDevcardOptions

If you want to intercept the arguments that the `defcard` macro is
receiving and alter them. You can do this with
`devcards.core/IDevcardOptions`.

Let's use this feature to discover the options that are passed to `-devcard-options`.

```clojure
(defcard devcard-options-example-name
  \"Devcard options documentation.\"
  (reify dc/IDevcardOptions
    (-devcard-options [_ opts]
      (assoc opts :main-obj opts))) ;; <-- alter :main-obj to be the opts
  {:devcards-options-init-state true})
```

This is a bit subtle but implementing `IDevcardOptions` allows us to
intercept the arguments that have been passed to the original
`defcard`. You can see resulting card rendered below:
")

(defcard devcard-options-example-name
  "Devcard options documentation."
  (reify dc/IDevcardOptions
    (-devcard-options [_ opts]
      (assoc opts :main-obj opts)))
  {:devcards-options-init-state true})

(defcard
  "As you can see above, we are intercepting the options being sent to the
  underlying devcards system.
  
  These args are:

  * `:name` - the name of the card
  * `:documentation` - the docs associated with the card
  * `:main-obj` - the main object that is subject of display
  * `:initial-data` - the initial data for the card state atom
  * `:options`      - the options for the devcard system (like `:inspect-data true`)
  * `:path` - the path to the card in the devcards interface (normally [ns var])

  You can alter any of these args before returning the `opts`.

  Here is an example where we change the path name of a card.

```clojure
(defcard example-2
  (reify dc/IDevcardOptions
    (-devcard-options [_ opts]
      (assoc opts :path
             [:devdemos.custom_cards
              :this-is-a-changed-path-name]))))
```

")


(defcard example-2
  (reify dc/IDevcardOptions
    (-devcard-options [_ opts]
      (assoc opts
             :path
             [:devdemos.custom_cards
              :this-is-a-changed-path-name]))))

(defcard
  "So the above card's heading has been altered from `example-2` to
  `this-is-a-changed-path-name`. We could have changed the `ns` part
  of the path name but then the card would no longer be on this page!

You may have noticed that we are getting a JavaScript Object of some sort
rendered in the body of the card. This is because the `:main-obj` is
the reified IDevcardOptions. This is where the magic comes in. You can
specify any `:main-obj` you like.

Here's an example where we create a `state-reset` control that we can
use in our cards.

```clojure
(defn state-reset [component]
  (reify dc/IDevcardOptions
    (-devcard-options [_ opts]
      (assoc opts
             :main-obj
             (fn [state owner]
               (sab/html
                [:div
                 [:button
                  {:onClick
                   (fn []
                     (reset! state (:initial-data opts)))}
                  \"reset state\"]
                 (if (fn? component)
                   (component state owner)
                   component)]))))))

(defn counter [state]
  (sab/html
   [:div
    [:h3 \"Counter : \" (:count @state)]
    [:button {:onClick #(swap! state (fn [s] (update-in s [:count] inc)))}
      \"inc\"]]))

(defcard counter-example
  (state-reset (fn [state _] (counter state)))
  {:count 0}
  {:inspect-data true})
```

You can see the resulting card below. You can increment the example
counter and then easily reset the state of the counter to the initial
value.
")

(defn state-reset [component]
  (reify dc/IDevcardOptions
    (-devcard-options [_ opts]
      (assoc opts
             :main-obj
             (fn [state owner]
               (sab/html
                [:div
                 [:button
                  {:onClick
                   (fn []
                     (reset! state (:initial-data opts)))}
                  "reset state"]
                 (if (fn? component)
                   (component state owner)
                   component)]))))))

(defn counter [state]
  (sab/html
   [:div
    [:h3 "Counter : " (:count @state)]
    [:button {:onClick #(swap! state (fn [s] (update-in s [:count] inc)))}
      "inc"]]))

(defcard counter-example
  (state-reset (fn [state _] (counter state)))
  {:count 0}
  {:inspect-data true})

(defcard
  "There are other ways to accomplish this same goal. I just wanted to
  demonstrate that `IDevcardOptions` can offer a bit of flexibility
  when creating tools for devcards.

  Don't forget you can wrap all of this in a macro to make a great
  number of different tools.")

(defcard
  "## The `IDevcard` protocol

If you want to escape the base functionality of Devcards and render
your own card with it's own functionality. The `devcards.core/IDevcard`
protocol can help.

The protocal is simple you just need to implement a function called
`devcards.core/-devcard` and return a `ReactElement`.

```clojure
(defcard
  (reify dc/IDevcard
    (-devcard [_ opts]
      (sab/html [:h3 \"This is a card without any base Devcard functionality\"]))))
```
")

(defcard idevcard-example
  (reify dc/IDevcard
    (-devcard [_ opts]
      (sab/html [:h3 "This is a card without any base Devcard functionality"]))))

(defcard
  "## Low level api `devcards.core/register-card`

You can create a card with the low level api
`devcards.core/register-card`. This function takes a map with two keys:

* `:path` - the path to the card in the devcards interface (normally [ns var])
* `:func` - a thunk (function of no args) that returns a ReactElement

Here is an example of using `register-card`:

```clojure 
(dc/register-card
 {:path [:devdemos.custom_cards
         :registered-card]
  :func (fn [] (sab/html [:h1 \"** Registered card **\"]))})
```

You can see this in action below

")

(dc/register-card
 {:path [:devdemos.custom_cards
         :registered-card]
  :func (fn [] (sab/html [:h1 "** Registered card **"]))})

