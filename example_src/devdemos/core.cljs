(ns
  ^{:description "Devcards: A high level introduction."
    :rigsomelight-post true}
  devdemos.core
    (:require
     [om.core :as om :include-macros true]
     [om.dom :as dom :include-macros true]
     [om.next :as omnext :refer-macros [defui]]
     [create-react-class :as create-react-class]
     [reagent.core :as reagent]
     [clojure.string :as string]
     [sablono.core :as sab :include-macros true]
     [devcards.core]
     [cljs.test :as t :include-macros true :refer-macros [testing is]])
    (:require-macros
     ;; Notice that I am not including the 'devcards.core namespace
     ;; but only the macros. This helps ensure that devcards will only
     ;; be created when the :devcards is set to true in the build config.
     [devcards.core :as dc :refer [defcard defcard-doc deftest dom-node defcard-om-next]]))

;; this is to support om with the latest version of React
(set! (.-createClass (.-React goog.global)) create-react-class)

(def ^:export front-matter
  {:layout false
   :title "The Hard Sell"
   :slug "devcards-the-hard-sell"
   :date "2015-06-06"
   :draft true
   :published false
   :base-card-options {:frame false}})

(enable-console-print!)

(defcard
  "# [Devcards](https://github.com/bhauman/devcards): the hard sell
    
   The Devcards library is intended to make ClojureScript development
   a pure joy.
 
   Devcards are intended to facilitate **interactive live
   development**. Devcards can be used in conjunction with figwheel but
   will also work with any form of live code reloading (repl, boot-reload, ...)

   Devcards revolves around a multi-purpose macro called `defcard`.
   You can think of `defcard` as a powerful form of **pprint** that helps you
   interactively lift code examples out of your source files into the
   Devcards interface (you are currently looking at the Devcards
   interface).

   The Devcards that you create are intended to have no impact on the
   size of your production code. You can use Devcards just as you
   would use exectuable comments inline with your source code. You
   can also keep them separate like a test suite.

   With [figwheel](https://github.com/bhauman/lein-figwheel), Devcards
   configuration couldn't be simpler. Just add 

[![Clojars Project](https://clojars.org/devcards/latest-version.svg)](https://clojars.org/devcards)

   to your dependencies and create a new build config with `:figwheel
   {:devcards true}`. See the Quick Start instructions at the end of
   this document.

   Let's look at an advanced Devcard:
   
   ```
   (defcard bmi-calculator                        ;; optional symbol name
     \"*Code taken from Reagent readme.*\"          ;; optional markdown doc
     (fn [data-atom _] (bmi-component data-atom)) ;; object of focus
     {:height 180 :weight 80}                     ;; optional initial data
     {:inspect-data true :history true})          ;; optional devcard config options
   ```

   The [defcard api](#!/devdemos.defcard_api)
   is intended to be small and intuitive.

   You can see this devcard rendered below:")

;; code from the reagent page adapted to plain reagent
(defn calc-bmi [bmi-data]
  (let [{:keys [height weight bmi] :as data} bmi-data
        h (/ height 100)]
    (if (nil? bmi)
      (assoc data :bmi (/ weight (* h h)))
      (assoc data :weight (* bmi h h)))))

(defn slider [bmi-data param value min max]
  (sab/html
   [:input {:type "range" :value value :min min :max max
            :style {:width "100%"}
            :on-change (fn [e]
                         (swap! bmi-data assoc param (.-target.value e))
                         (when (not= param :bmi)
                           (swap! bmi-data assoc :bmi nil)))}]))

(defn bmi-component [bmi-data]
  (let [{:keys [weight height bmi]} (calc-bmi @bmi-data)
        [color diagnose] (cond
                          (< bmi 18.5) ["orange" "underweight"]
                          (< bmi 25) ["inherit" "normal"]
                          (< bmi 30) ["orange" "overweight"]
                          :else ["red" "obese"])]
    (sab/html
     [:div 
      [:h3 "BMI calculator"]
      [:div
       [:span (str "Height: " (int height) "cm")]
       (slider bmi-data :height height 100 220)]
      [:div
       [:span (str "Weight: " (int weight) "kg")]
       (slider bmi-data :weight weight 30 150)]
      [:div
       [:span (str "BMI: " (int bmi) " ")]
       [:span {:style {:color color}} diagnose]
       (slider bmi-data :bmi bmi 10 50)]])))

(defcard bmi-calculator
  "*Code taken from the Reagent readme.*"
  (fn [data-atom _] (bmi-component data-atom))
  {:height 180 :weight 80}
  {:inspect-data true
   :frame true
   :history true})

(defcard-doc
   "## Time travel

   Please interact with **the BMI calculator above**. As you change
   the sliders you will notice that a  
   &nbsp;<span class='com-rigsomelight-devcards-history-control-left'></span>&nbsp; shows up.

   This is the integrated history control widget which be enabled by
   adding `{:history true}` to the devcard options.
   
   Go ahead and move the sliders and play with the history control. 
   
   You can move forward with the <span class='com-rigsomelight-devcards-history-control-right'></span> control. 

   You can continue from where you left off with the fast forward control 
   <span class='com-rigsomelight-devcards-history-control-fast-forward'>
<span  style='margin-right: -14px' class='com-rigsomelight-devcards-history-control-small-arrow'></span>
<span style='margin-right: -14px' class='com-rigsomelight-devcards-history-control-small-arrow'></span>
<span class='com-rigsomelight-devcards-history-control-block'></span>
   </span>  

   You can reify the current point in history and start working with your app from this point with the 
   <span class='com-rigsomelight-devcards-history-stop'></span> control or by simply interacting with the app.

   ## Data display

   You will also notice that the data from the main data store is
   being displayed. This is enabled by adding `{:inspect-data true}`
   to the devcard options.
 
   If you interact with the calculator above you will see that the
   integers are being stored as strings in the data atom. This is a
   smell that you will see immediately when the data is displayed
   front and center like this.

   ## Markdown docs
   
   The documentation string \"*Code taken from the Reagent readme*\"
   in the example above is optional and allows for the easy display of
   contextual information.

   ## Auto-detection and dispatch
   
   The `defcard` macro does its best to display the given object.
   You can pass `defcard` a **string** (will be interpreted as
   markdown), a **function** that takes a data-atom and an React owner, a
   **ReactElement**, a **Map**, a **Vector**, a **List**, an **Atom**,
   an **RAtom**, an **IDeref**, anything that implements
   **IDevcardOptions** or **IDevcard**, and I'm hoping to get various
   cursor implementations working as well.

   Implementing your own cards is easy. You can simply create an
   arbitrary ReactElement and `defcard` will render it. If you want to
   create a completely custom card there are the [**IDevcardOptions**
   and **IDevcard** protocols](#!/devdemos.custom_cards).
   " )

(defcard
  "# cljs.test integration

   Devcards provides a `deftest` macro that behaves very similarly to
   the `cljs.test/deftest` macro. This makes it easy to define tests
   that both show up in the Devcards display and can be run
   using `(run-tests)` as well.
  
   The test card has controls in the upper right hand corner that not
   only summarize testing status but also allow you to focus on passing or
   failing tests.

   Go ahead and click on the numbers in the header of this card.
  
   The test card will display the testing context as well as the
   messages for the various tests that run.

   For example the following tests are defined like this:

   ```
   (deftest cljs-test-integration
     \"## Here are some example tests\"
     (testing \"testing context 1\"
       (is (= (+ 3 4 55555) 4) \"This is the message arg to an 'is' test\")
       (is (= (+ 1 0 0 0) 1) \"This should work\")
       (is (= 1 3))
       (is false)
       (is (throw \"errors get an extra red line on the side\")))
      \"Top level strings are interpreted as markdown for inline documentation.\"
     (testing \"testing context 2\"
       (is (= (+ 1 0 0 0) 1))        
       (is (= (+ 3 4 55555) 4))
       (is false)
     (testing \"nested context\"
       (is (= (+ 1 0 0 0) 1))        
       (is (= (+ 3 4 55555) 4))
       (is false))))
   ```

   The `testing` and `is` macros are the ones from `cljs.test`

   These tests are rendered below:")

(deftest cljs-test-integration
  "## Here are some example tests"
  (testing "testing context 1"
    (is (= (+ 3 4 55555) 4) "This is the message arg to an 'is' test")
    (is (= (+ 1 0 0 0) 1)
        "This should work")
    (is (= 1 3))              
    (is false)
    (is (throw "errors get an extra red line on the side")))
  "Top level strings are interpreted as markdown for inline documentation."
  (t/testing "testing context 2"
    (is (= (+ 1 0 0 0) 1))        
    (t/is (= (+ 3 4 55555) 4))
    (t/is false)
    (t/testing "nested context"
      (is (= (+ 1 0 0 0) 1))        
      (t/is (= (+ 3 4 55555) 4))
      (t/is false))))

(defcard
  "You can learn more about testing with devcards [here](#!/devdemos.testing)"
  )



(defn om-slider [bmi-data param value min max]
  (sab/html
   [:input {:type "range" :value value :min min :max max
            :style {:width "100%"}
            :on-change (fn [e]
                         (om/update! bmi-data param (.-target.value e))
                         (when (not= param :bmi)
                           (om/update! bmi-data :bmi nil)))}]))

(defn om-bmi-component [bmi-data owner]
  (let [{:keys [weight height bmi]} (calc-bmi bmi-data)
        [color diagnose] (cond
                          (< bmi 18.5) ["orange" "underweight"]
                          (< bmi 25) ["inherit" "normal"]
                          (< bmi 30) ["orange" "overweight"]
                          :else ["red" "obese"])]
    (om/component
     (sab/html
      [:div 
       [:h3 "BMI calculator"]
       [:div
        [:span (str "Height: " (int height) "cm")]
        (om-slider bmi-data :height height 100 220)]
       [:div
        [:span (str "Weight: " (int weight) "kg")]
        (om-slider bmi-data :weight weight 30 150)]
       [:div
        [:span (str "BMI: " (int bmi) " ")]
        [:span {:style {:color color}} diagnose]
        (om-slider bmi-data :bmi bmi 10 50)]]))))

(defcard
  "# Om support

   Here is the same calculator being rendered as an Om application.

   ```
   (defcard om-support
     (dc/om-root om-bmi-component)
     {:height 180 :weight 80} ;; initial data
     {:inspect-data true :history true })
   ``` 
   ")

(defcard om-support
  (dc/om-root om-bmi-component)
  {:height 180 :weight 80} ;; initial data
  {:inspect-data true
   :frame true
   :history true })

(defn bmi-mutate
  [{:keys [state]} _ params]
  (let [[k v] (first params)]
    {:action #(swap! state assoc k v)}))

(defn bmi-read
  [{:keys [state]} k {:keys [] :as params}]
  {:value (get @state k)})

(defn om-next-slider [c param value min max]
  (sab/html
   [:input {:type "range" :value value :min min :max max
            :style {:width "100%"}
            :on-change (fn [e]
                         (omnext/transact! c `[(change-bmi-key! {~param ~(.-target.value e)})])
                         (when (not= param :bmi)
                           (omnext/transact! c '[(change-bmi-key! {:bmi nil})])))}]))

(defui ^:once BmiComponent
  static omnext/IQuery
  (query [this]
    [:height :weight :bmi])
  Object
  (render [this]
    (let [props (omnext/props this)
          {:keys [weight height bmi]} (calc-bmi props)
          [color diagnose] (cond
                            (< bmi 18.5) ["orange" "underweight"]
                            (< bmi 25) ["inherit" "normal"]
                            (< bmi 30) ["orange" "overweight"]
                            :else ["red" "obese"])]
      (sab/html
       [:div
        [:h3 "BMI calculator"]
        [:div
         [:span (str "Height: " (int height) "cm")]
         (om-next-slider this :height height 100 220)]
        [:div
         [:span (str "Weight: " (int weight) "kg")]
         (om-next-slider this :weight weight 30 150)]
        [:div
         [:span (str "BMI: " (int bmi) " ")]
         [:span {:style {:color color}} diagnose]
         (om-next-slider this :bmi bmi 10 50)]]))))

(defonce bmi-reconciler
  (omnext/reconciler {:state {:height 180 :weight 80}
                      :parser (omnext/parser {:read bmi-read :mutate bmi-mutate})}))

(defcard
  "# Om Next support

   Here is the same calculator being rendered as an Om Next application.
   ```
   (defcard-om-next om-next-support
     BmiComponent
     bmi-reconciler
     {:inspect-data true :history true })
   ```
   ")

(defcard-om-next om-next-support
  BmiComponent
  bmi-reconciler
  {:inspect-data true
   :history true })

(defonce re-bmi-data (reagent/atom {:height 180 :weight 80}))

(defn re-slider [param value min max]
  [:input {:type "range" :value value :min min :max max
           :style {:width "100%"}
           :on-change (fn [e]
                        (swap! re-bmi-data assoc param (.-target.value e))
                        (when (not= param :bmi)
                          (swap! re-bmi-data assoc :bmi nil)))}])

(defn re-bmi-component []
  (let [{:keys [weight height bmi]} (calc-bmi @re-bmi-data)
        [color diagnose] (cond
                          (< bmi 18.5) ["orange" "underweight"]
                          (< bmi 25) ["inherit" "normal"]
                          (< bmi 30) ["orange" "overweight"]
                          :else ["red" "obese"])]
    [:div
     [:h3 "BMI calculator"]
     [:div
      "Height: " (int height) "cm"
      [re-slider :height height 100 220]]
     [:div
      "Weight: " (int weight) "kg"
      [re-slider :weight weight 30 150]]
     [:div
      "BMI: " (int bmi) " "
      [:span {:style {:color color}} diagnose]
      [re-slider :bmi bmi 10 50]]]))

(defcard
  "# There is also built-in support for Reagent 

  Below is the same BMI calculator in Reagent:
  ```
  (defcard reagent-support
    (dc/reagent re-bmi-component)
    re-bmi-data ;; reagent atom
    {:inspect-data true :history true })
  ```")

(defcard reagent-support

  (dc/reagent re-bmi-component)
  re-bmi-data
  {:inspect-data true
   :frame true
   :history true })

(defcard
  "# Not cool enough?
   
   Well there is a bunch more, but that's what the docs are for.

   For quick documentation please see the source for these devcards here.

   ## Quick Start

   These are brief instructions for the curious. These will not be
   helpful if you are not an experienced ClojureScript developer.
   
   You can generate a new devcards project with:
   
   ```bash
   $ lein new devcards hello-world
   ```

   ## Existing project

   Integrating devcards into an existing project is straightforward and
   requires a seperate build, similar to how you would create a test
   build.

   Add

[![Clojars Project](https://clojars.org/devcards/latest-version.svg)](https://clojars.org/devcards)

as a dependency.

   Require the devcards macros: 

   ```
   (ns example.core
    (:require-macros
     ;; Notice that I am not including the 'devcards.core namespace
     ;; but only the macros. This helps ensure that devcards will only
     ;; be created when the :devcards is set to true in the build config.
     [devcards.core :as dc :refer [defcard deftest]]))
   ```

   If you are using figwheel you can create a build from your current
   figwheel dev build and add `:devcards true` (figwheel >= 0.3.7) to
   your `:figwheel` build config like so:

   ```clojure
   :cljsbuild {
     :builds [{:id :devcards
               :source-paths [\"src\"]
               :figwheel { :devcards true }
               :compiler {
                 :main \"example.core\"
                 :asset-path \"js/out\"
                 :output-to \"resources/public/js/example.js\"
                 :output-dir \"resources/public/js/out\"
               }}]}
   ```
 
  It's important to make sure that your application isn't launching
  itself on load. We don't want your application to run. We want the
  Devcards application to run. So having a seperate HTML file for the
  devcards build is the best solution.

  ```
  <!DOCTYPE html>
  <html>
    <head>
      <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no\">
    </head>
    <body>
      <script src=\"js/example.js\" type=\"text/javascript\"></script>
    </body>
  </html>  
  ```

  A quick way to prevent your main application from running is to make
  it conditional on the presence of the DOM node it's expecting to
  mount and then just include that DOM node on HTML pages where your
  app is going to launch.

  ```
  (defn main []
    ;; conditionally start the app based on the presence of #main-app-area
    ;; node is on the page
    (if-let [node (.getElementById js/document \"main-app-area\")]
      (js/React.render (sab/html [:div \"This is main app is ruunning.\"]) node)))

  (main)  
  ```
  
  For now refer to the
  [devcards-template](https://github.com/bhauman/devcards-template)
  for a more complete picture of setting up decards.

## Devcards without Figwheel

Figwheel does some magic so that Devcards can be included or excluded
from your code easily. You can certainly use Devcards without Figwheel,
but there are three things that you will need to do.

#### You need to specify `:devcards true` **in the build-options** of your ClojureScript build

```clojure
{ :main    \"{{name}}.core\"
  :devcards true
  :asset-path \"js/compiled/devcards_out\"
  :output-to  \"resources/public/js/{{sanitized}}_devcards.js\"
  :output-dir \"resources/public/js/devcards_out\"
  :source-map-timestamp true }
```

This is important as it is a signal to the `defcard` macro to render
the cards.

#### You will need to require `devcards.core` in the files that use devcards as such:

```clojure
(ns example.core
  (:require
   [devcards.core :as dc] ; <-- here
   [sablono.core :as sab]) ; just for this example
  (:require-macros
   [devcards.core :refer [defcard]])) ; <-- and here

(defcard my-first-card
  (sab/html [:h1 \"Devcards is freaking awesome!\"]))
```

This isn't required with Figwheel because it puts `devcards.core` into the
build automatically.

#### You will need to start the Devcards UI

```
(devcards.core/start-devcard-ui!)
```

As mentioned above, you don't want the Devcards UI to compete with
your application's UI so you will want to make sure it isn't getting
launched.


  
  ")
