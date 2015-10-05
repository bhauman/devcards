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

    The `om-root` will render Om components, much the way `om.core/root` does.

    Please refer to code of this file to see how these Om examples are
    built.
")

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
