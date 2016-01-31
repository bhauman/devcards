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

    ### One more thing
    - If you want to experience the best of a live-programming environment, don't forget to write reloadable code:
      - `defui ^:once` your components
      - `defonce` your reconcilers!
")

(defui ^:once Widget
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
   "#### You can share an Atom between `om-next-root`/`defcard-om-next` cards.

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

(defonce rec1
  (om/reconciler {:state om-test-atom
                  :parser (om/parser {:read counter-read
                                      :mutate counter-mutate})
                  :shared {:title "First counter "}}))

(defcard-om-next om-next-card-shared-ex-1
  om-next-counter-inc
  rec1)

(def om-next-counter-dec (counter dec "dec"))

(defonce rec2
  (om/reconciler {:state om-test-atom
                  :parser (om/parser {:read counter-read
                                      :mutate counter-mutate})
                  :shared {:title "Second counter "}}))

(defcard-om-next om-next-card-shared-ex-2
  om-next-counter-dec
  rec2)

(defcard om-test-atom-data
  "### You can share an Atom with an `edn-card` too:"
  om-test-atom)

(defui ^:once UnmountSample
  Object
  (componentDidMount [_]
    (println "mounting"))
  (componentWillUnmount [_]
    (println "unmounting this"))
  (render [_]
    (dom/div nil "unmount sample")))

(defcard-om-next sample-om-next-card
  UnmountSample)
