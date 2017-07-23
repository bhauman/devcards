(ns devdemos.fulcro
  (:require
    [devcards.core]
    [fulcro.client.core :as fc]
    [fulcro.client.mutations :as m :refer [defmutation]]
    [fulcro.client.network]
    [fulcro.events :as events]
    [fulcro.ui.html-entities :as ent]
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    [fulcro.client.util :as util]
    [clojure.string :as str])
  (:require-macros
    ;; Notice that I am not including the 'devcards.core namespace
    ;; but only the macros. This helps ensure that devcards will only
    ;; be created when the :devcards is set to true in the build config.
    [devcards.core :as dc :refer [defcard defcard-doc defcard-fulcro]]))

(declare TodoItem)

(defn item-ident [id-or-props]
  (if (map? id-or-props)
    [:items/by-id (:db/id id-or-props)]
    [:items/by-id id-or-props]))

(defmutation toggle-item
  "Fulcro mutation: Toggle the complete flag on an item."
  [{:keys [item-id]}]
  (action [{:keys [state]}]
    (swap! state update-in [:items/by-id item-id :item/complete?] not)))

(defn clear-input-field [state-map] (assoc-in state-map [:lists/by-id :main-list :ui/new-item-text] ""))

(defmutation add-item
  "Fulcro mutation: Add a new item to the end of the list."
  [{:keys [id text]}]
  (action [{:keys [state]}]
    (let [new-item   {:db/id id :item/complete? false :item/text text}
          item-ident (item-ident new-item)]
      (swap! state (fn [s]
                     (-> s
                       (assoc-in item-ident new-item)
                       (fc/integrate-ident item-ident :append [:lists/by-id :main-list :list/items])
                       (clear-input-field)))))))

(defn remove-item-from-list [state-map id]
  (let [target-ident (item-ident id)]
    (update-in state-map [:lists/by-id :main-list :list/items]
      (fn [old-list] (into [] (remove #(= target-ident %) old-list))))))

(defmutation delete-item
  "Fulcro mutation: Delete an item by its ID."
  [{:keys [id]}]
  (action [{:keys [state]}]
    (swap! state (fn [s]
                   (-> s
                     (remove-item-from-list id)
                     (update :items/by-id dissoc id))))))

(defui ^:once TodoItem
  static om/IQuery
  (query [this] [:db/id :item/text :item/complete?])
  static om/Ident
  (ident [this props] (item-ident props))
  Object
  (render [this]
    (let [{:keys [db/id item/text item/complete?]} (om/props this)
          onDelete (or (om/get-computed this :onDelete) identity)]
      (dom/li nil
        (dom/input #js {:type    "checkbox" :checked complete?
                        :onClick #(om/transact! this `[(toggle-item {:item-id ~id})])})
        (dom/span #js {:style #js {:paddingLeft "5px" :paddingRight "5px"}} text)
        (dom/button #js {:onClick #(onDelete id)} ent/times)))))

(def ui-todo-item (om/factory TodoItem {:keyfn :db/id}))

(defui ^:once TodoList
  static fc/InitialAppState
  (initial-state [c p] {:ui/new-item-text "" :list/items [] :db/id :main-list})
  static om/IQuery
  (query [this] [:db/id :ui/new-item-text {:list/items (om/get-query TodoItem)}])
  static om/Ident
  (ident [this props] [:lists/by-id (:db/id props)])
  Object
  (render [this]
    (let [{:keys [ui/new-item-text list/items]} (om/props this)
          delete-item (fn [id] (om/transact! this `[(delete-item {:id ~id})]))]
      (dom/div nil
        (dom/input #js {:value     new-item-text
                        :onKeyDown #(when (and (events/enter-key? %)
                                            (pos? (.-length (str/trim new-item-text))))
                                      (om/transact! this `[(add-item {:id ~(om/tempid) :text ~new-item-text})]))
                        :onChange  (fn [evt] (m/set-string! this :ui/new-item-text :event evt))})
        (dom/ul nil
          (map (fn [i] (ui-todo-item (om/computed i {:onDelete delete-item}))) items))))))

(def ui-todo-list (om/factory TodoList {:keyfn :db/id}))

(defui ^:once TodoListMain
  static fc/InitialAppState
  (initial-state [c p] {:root/list (fc/get-initial-state TodoList nil)})
  static om/IQuery
  (query [this] [:ui/react-key {:root/list (om/get-query TodoList)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key root/list]} (om/props this)]
      (dom/div #js {:key react-key}
        (dom/h2 nil "Todo List")
        (ui-todo-list list)))))

(defcard-doc
  "## Using Fulcro in Devcards

  Fulcro uses Om Next `defui` to generate stock React components. Therefore you may use the standard devcards
  when working with isolated components.

  However, since Fulcro gives you a complete full-stack application it can be useful to embed some portion of your
  application in a devcard to work on it in isolation. If your components have `Ident`s, then most of your application
  code is completely relocatable without any changes at all to your production code. Simply write a placeholder `Root`
  component for the card that composes in the sub-portion of your application, and you're ready to go.

  `defcard-fulcro` - Acts much like `defcard`, and bases the application name on the card symbol. It is shorthand
  for `(defcard my-card (fulcro-application my-card-app Root))`.

  NOTES:
     - Remember to use `(defui ^:once` ...)` for your components.
     - Remember to query for `:ui/react-key` on your root, and use it as your root DOM React :key

  ### Example

  Given the following support functions, mutations, and UI components:
  "
  (dc/mkdn-pprint-source item-ident)
  (dc/mkdn-pprint-source clear-input-field)
  (dc/mkdn-pprint-source remove-item-from-list)
  "

  ```
  (defmutation toggle-item
    \"Fulcro mutation: Toggle the complete flag on an item.\"
    [{:keys [item-id]}]
    (action [{:keys [state]}]
      (swap! state update-in [:items/by-id item-id :item/complete?] not)))

  (defmutation add-item
    \"Fulcro mutation: Add a new item to the end of the list.\"
    [{:keys [id text]}]
    (action [{:keys [state]}]
      (let [new-item   {:db/id id :item/complete? false :item/text text}
            item-ident (item-ident new-item)]
        (swap! state (fn [s]
                       (-> s
                         (assoc-in item-ident new-item)
                         (fc/integrate-ident item-ident :append [:lists/by-id :main-list :list/items])
                         (clear-input-field)))))))

  (defmutation delete-item
    \"Fulcro mutation: Delete an item by its ID.\"
    [{:keys [id]}]
    (action [{:keys [state]}]
      (swap! state (fn [s]
                     (-> s
                       (remove-item-from-list id)
                       (update :items/by-id dissoc id))))))

  ```

  "
  (dc/mkdn-pprint-source TodoItem)
  (dc/mkdn-pprint-source ui-todo-item)
  (dc/mkdn-pprint-source TodoList)
  (dc/mkdn-pprint-source ui-todo-list)
  (dc/mkdn-pprint-source TodoListMain)
  "
  the card to make a fully running application is as simple as:

  ```
  (defcard-fulcro todo-list
    TodoListMain
    {}
    {:inspect-data true})
  ```

  Any fulcro-specific options you'd like to use for the application can go under the `:fulcro` key in the card's
  options:

  ```
  (defcard-fulcro todo-list
    TodoListMain
    {}
    {:inspect-data true
     :fulcro { :started-callback (fn [app] (js/console.log \"STARTED!\")) }})
  ```
  ")


(defcard-fulcro todo-list
  TodoListMain
  {}
  {:inspect-data true
   :fulcro       {:started-callback (fn [app] (js/console.log "STARTED!"))}})

