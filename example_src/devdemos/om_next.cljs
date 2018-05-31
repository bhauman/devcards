(ns devdemos.om-next
    (:require
     [devcards.core]
     [om.next :as om :refer-macros [defui ui]]
     [om.next.protocols :as p]
     [om.dom :as dom :include-macros true]
     [clojure.string :as string]
     [sablono.core :as sab :include-macros true]
     [cljs.test :as t :include-macros true :refer-macros [testing is]])
    (:require-macros
     ;; Notice that I am not including the 'devcards.core namespace
     ;; but only the macros. This helps ensure that devcards will only
     ;; be created when the :devcards is set to true in the build config.
     [devcards.core :as dc :refer [defcard defcard-doc defcard-om-next noframe-doc deftest dom-node]]))

(defcard-doc
   "## Rendering Om Next components with `om-next-root` and `defcard-om-next`

    The `om-next-root` will render Om Next components, much the way `om.core/add-root!` does.
    It takes one or two arguments. The first argument is the Om Next component. The second (optional)
    argument is either a map with the state to pass to the component, or an Om Next reconciler.

    The `defcard-om-next` is a shortcut to `(defcard (om-next-root ...))`.
    Its arguments are the same of a normal `defcard`, with the following exception:
    after the optional name and documentation, there must be an Om Next component. The argument after that
    is optional, and may either the initial state map, or an Om Next reconciler.

    Please refer to code of this file to see how these Om Next examples are
    built.
<<<<<<< HEAD
")

(defui Widget
=======

    ### One more thing
    - If you want to experience the best of a live-programming environment, don't forget to write reloadable code:
      - `defui ^:once` your components
      - `defonce` your reconcilers!
")

(defui ^:once Widget
>>>>>>> master
  Object
  (render [this]
    (sab/html [:h2 "This is an Om Next card, " (:text (om/props this))])))

(defonce om-next-root-data {:text "yep"})

(defcard om-next-card-ex
  "This card calls `om-next-root` with one argument, the component"
  (dc/om-next-root Widget)
  {:text "yep"})

(defcard om-next-card-reconciler-ex
  "This card calls `om-next-root` with 2 args, the component and the Om Next reconciler"
  (dc/om-next-root Widget
    (om/reconciler {:state om-next-root-data
                    :parser (om/parser {:read (fn [] {:value om-next-root-data})})})))

(defcard-om-next om-next-no-reconciler
  "This `defcard-om-next` card takes the initial state map as its last arg"
  Widget
  om-next-root-data)

(defcard om-next-share-atoms
  (dc/doc
<<<<<<< HEAD
   "#### You can share an Atom between `om-next-root` cards.
=======
   "#### You can share an Atom between `om-next-root`/`defcard-om-next` cards.
>>>>>>> master

    Interact with the counters below."))

(defonce om-test-atom (atom {:count 20}))

(defn counter-mutate
  [{:keys [state]} _ {:keys [f]}]
  {:value {:keys [:count]}
   :action #(swap! state update :count f)})

(defn counter-read
  [{:keys [state]} _ _]
  {:value (:count @state)})

(defn counter [f s]
  (ui
    static om/IQuery
    (query [this]
      [:count])
    Object
    (render [this]
      (let [{:keys [count] :as props} (om/props this)]
        (sab/html
         [:div
          [:h1 (om/shared this :title) count]
          [:div [:a {:onClick #(om/transact! this `[(counter-mutate! {:f ~f})])} s]]
          (dc/edn props)])))))

(def om-next-counter-inc (counter inc "inc"))

<<<<<<< HEAD
(defcard-om-next om-next-card-shared-ex-1
  om-next-counter-inc
=======
(defonce rec1
>>>>>>> master
  (om/reconciler {:state om-test-atom
                  :parser (om/parser {:read counter-read
                                      :mutate counter-mutate})
                  :shared {:title "First counter "}}))

<<<<<<< HEAD
(def om-next-counter-dec (counter dec "dec"))

(defcard-om-next om-next-card-shared-ex-2
  om-next-counter-dec
=======
(defcard-om-next om-next-card-shared-ex-1
  om-next-counter-inc
  rec1)

(def om-next-counter-dec (counter dec "dec"))

(defonce rec2
>>>>>>> master
  (om/reconciler {:state om-test-atom
                  :parser (om/parser {:read counter-read
                                      :mutate counter-mutate})
                  :shared {:title "Second counter "}}))

<<<<<<< HEAD
(dc/defcard om-test-atom-data
  "### You can share an Atom with an `edn-card` too:"
  om-test-atom)

(defui UnmountSample
=======
(defcard-om-next om-next-card-shared-ex-2
  om-next-counter-dec
  rec2)

(defcard om-test-atom-data
  "### You can share an Atom with an `edn-card` too:"
  om-test-atom)

(defui ^:once UnmountSample
>>>>>>> master
  Object
  (componentDidMount [_]
    (println "mounting"))
  (componentWillUnmount [_]
    (println "unmounting this"))
  (render [_]
<<<<<<< HEAD
    (dom/div nil "unmount")))

(defcard-om-next sample-om-next-card
  UnmountSample)

(defn display-state [c [k v]]
  (dom/li nil
    (str k ": " v)
    (dom/button #js {:key (str k)
                     :onClick #(om/update-state! c update k inc)} "inc!")))

(defui ^:once ComponentWithLocalState
  Object
  (initLocalState [this]
    {:a 1
     :b 2})
  (render [this]
    (dom/div nil
      (map #(display-state this %) (om/get-state this)))))

(defcard-om-next local-state-om-next-card
  "we can define components with `:once` metadata"
  ComponentWithLocalState)

(defcard local-state-mock-root
  "Unfortunately, components will lose their local state upon reload
   This is also true with a root mocking approach, as demoed in this card"
  (p/add-root!
    (om.next/reconciler {:state {}
                         :parser (om.next/parser {:read (fn [] {:value {}})})})
    ComponentWithLocalState
    nil nil))
=======
    (dom/div nil "unmount sample")))

(defcard-om-next sample-om-next-card
  UnmountSample)
>>>>>>> master
