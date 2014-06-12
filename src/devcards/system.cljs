(ns devcards.system
  (:require
   [frontier.core :refer [IInit
                          ITransform
                          IDerive
                          IInputFilter
                          IEffect
                          run
                          make-runnable
                          runner-start
                          compose
                          add-effects]]
   [jayq.core :refer [$]]
   [crate.core :as c]
   [clojure.string :as string]
   [clojure.set :refer [intersection difference]]
   [cljs.core.async :refer [put! chan sliding-buffer timeout]]
   [cljs.reader :refer [read-string]]
   [goog.events :as events])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:import
   [goog History]
   [goog.history EventType]))

(def devcards-app-element-id "devcards-main")
(def devcards-controls-element-id "devcards-controls")
(def devcards-cards-element-id "devcards-cards")

(defn get-element-by-id [id] (.getElementById js/document id))

(defn devcards-app-node [] (get-element-by-id devcards-app-element-id))
(defn devcards-controls-node [] (get-element-by-id devcards-controls-element-id))
(defn devcards-cards-node [] (get-element-by-id devcards-cards-element-id))

(defn path->unique-card-id [path]
  (string/join "." (map (fn [x] (str "[" x "]"))
                        (map name (cons :cardpath path)))))

(defn unique-card-id->path [card-id]
  (mapv keyword
       (-> (subs card-id 1
                 (dec (count card-id)))
           (string/split #"\].\[")
           rest)))

(defn current-page [data]
  (and (:current-path data)
       (:cards data)
       (get-in (:cards data) (:current-path data))))

(defn valid-path? [state path]
  (or (= [] path)
      (get-in (:cards state) path)))

(defn enforce-valid-path [state path]
  (vec (if (valid-path? state path) path [])))

(defprotocol IMount
  (mount [o data]))

(defprotocol IUnMount
  (unmount [o data]))

(defprotocol IConfig
    (-options [o]))

(def default-card-options
  {:heading           true
   :padding           true
   :unmount-on-reload true
   :hidden            false})

(defn get-options [card]
  (merge default-card-options
         (or
          (and (satisfies? IConfig card)
               (-options card))
          {})))

(defrecord DevCard [path options func position data-atom])

(defn devcard? [d]
  (and (map? d)
       (:data-atom d)
       (:func d)
       (:path d)
       (:position d)
       d))

;; input filters
(defmulti ifilter first)

(defmethod ifilter :default [msg state] msg)

(defmethod ifilter :set-current-path [[_ {:keys [path]}] state]
  [:current-path {:path (unique-card-id->path path)}])

;; transforms
(defmulti dev-trans first)

(defmethod dev-trans :default [msg state] state)

;; mark and sweep to support card removal
;; this was much more complex than I expected
;; it would be sooo much easier if I could write the
;; whole thing in React, but alas I want to host anything

(defn map-vals [f h-map]
  (into {} (map (fn [[k v]] [k (f v)]) h-map)))

(defn map-all-cards-in-ns [f state ns]
  (update-in state [:cards ns] #(map-vals f %)))

(defn mark-card [card]
  (assoc card :sweep-marker true))

(defn remove-mark-from-card [card]
  (dissoc card :sweep-marker))

(defn set-card-to-be-deleted [card]
  (if (:sweep-marker card)
    (assoc card :delete-card true)
    card))

(defn set-deleted-and-remove-marks-in-ns [state ns]
  (map-all-cards-in-ns (comp
                        remove-mark-from-card
                        set-card-to-be-deleted)
                       state ns))

(defn card-namespaces-being-reloaded [state files]
  (intersection (set (map (comp keyword :namespace) files))
                (set (keys (:cards state)))))

(defn mark-all-cards [state files]
  (reduce (partial map-all-cards-in-ns mark-card)
          state
          (card-namespaces-being-reloaded state files)))

(defn remove-deleted-cards [card-map]
  (into {} (filter (fn [[k v]] (not (:delete-card v))) card-map)))

(defn remove-deleted-cards-in-ns [state ns]
  (update-in state [:cards ns] remove-deleted-cards))

(defn sweep-ns [state ns]
  (-> state
      (remove-deleted-cards-in-ns ns)
      (set-deleted-and-remove-marks-in-ns ns)))

(defn sweep [state files]
  (reduce sweep-ns state (set (keys (:cards state)))))

(defmethod dev-trans :before-jsload [[_ files] state]
  (mark-all-cards state files))

(defmethod dev-trans :jsreload [[_ files] state]
  (-> state
      (sweep files)
      (assoc :code-loaded :js)
      (dissoc :compile-failed)))

(defmethod dev-trans :cssload [msg state]
   (assoc state :code-loaded :css))

(defmethod dev-trans :remove-code-loaded-effect [msg state]
  (dissoc state :code-loaded))

(defmethod dev-trans :compile-fail [msg state]
  (assoc state :compile-failed (last msg)))

(defmethod dev-trans :register-card [[_ {:keys [path options func]}] state]
  (let [position (:position state)]
    (-> state
        (update-in [:position] inc)
        (update-in (cons :cards path)
                   (fn [dc]
                     (if dc
                       (-> dc
                           (assoc
                               :options  (merge default-card-options options)
                               :position position
                               :func func)
                           (dissoc :sweep-marker)
                           (dissoc :delete-card))
                       (DevCard. path
                                 (merge default-card-options options)
                                 func
                                 position
                                 (atom (or (:initial-state options) {})))))))))

(defn add-navigate-effect [{:keys [current-path] :as state}]
  (add-effects state [:navigate current-path]))

(defmethod dev-trans :add-to-current-path [[_ {:keys [path]}] {:keys [current-path] :as state}]
  (-> state
      (assoc :current-path
        (enforce-valid-path state (conj current-path (keyword path))))
      add-navigate-effect))

(defmethod dev-trans :current-path [[_ {:keys [path]}] {:keys [current-path] :as state}]
  (let [path (vec path)]
    (if (not= current-path path)
      (-> state
          (assoc :current-path (enforce-valid-path state path))
          add-navigate-effect)
      state)))

;; derivatives

(declare visible-card-nodes)
(declare visible-card-paths)

(defn visible-cards [state]
  (assoc state
    :visible-card-nodes (visible-card-nodes state)))

(defn display-current-cards [state]
  (let [cur (current-page state)]
    (if (devcard? cur)
      (assoc state :display-single-card cur)
      (-> state
          (assoc :display-dir-paths
            (filter (complement (comp devcard? second)) cur))
          (assoc :display-cards
            (filter (comp #(and (not (:delete-card %))
                                (devcard? %)) second) cur))))))

(defn render-cards? [state]
  ;; impure as we are relying on the dom state to calculate this but since
  ;; we aren't using react this is a good way to diff the nodes on
  ;; on the page
  (let [visible-cards  (set (map (comp :path first) (:visible-card-nodes state)))
        intended-cards (set (keep :path
                                  (concat [(:display-single-card state)]
                                          (vals (:display-cards state)))))]
    (assoc state
      :render-cards (not= visible-cards
                          intended-cards))))

(defn breadcrumbs [{:keys [current-path] :as state}]
  (let [cpath (map name (cons :home current-path))
        crumbs
        (map (juxt last rest)
             (rest (map-indexed
                    (fn [i v] (subvec v 0 i))
                    (take (inc (count cpath))
                          (repeat (vec cpath))))))]
    (assoc state :breadcrumbs crumbs)))


(defrecord DevCards []
  IInputFilter
  (-filter-input [o msg state]
    (ifilter msg state))
  ITransform
  (-transform [o msg state]
    (dev-trans msg state))
  IDerive
  (-derive [o state]
    (-> state
        visible-cards
        display-current-cards
        render-cards?
        breadcrumbs)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Hashbang routing

(defonce history
  (let [h (History.)]
    (.setEnabled h true)
    h))

(defn path->token [path]
  (str "!/" (string/join "/" (map name path))))

(defn token->path [token]
  (vec (map keyword
            (-> token
                (string/replace #"!/" "")
                (string/split #"/")))))

(defrecord HashBangRouting []
  IInit
  (-initialize [_ state event-chan]
    (events/listen history EventType/NAVIGATE
                   #(put! event-chan [:current-path {:path (token->path (.-token %))}]))
    (when-let [token (.getToken history)]
      (go
       (<! (timeout 20)) ;; we need to wait a bit for it to be a valid path :)
       (put! event-chan [:current-path {:path (token->path token)}]))))
  IEffect
  (-effect [o [nm path] system event-chan effect-chan]
    (when (= nm :navigate)
      (.setToken history (path->token path)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn naked-card [{:keys [path options]}]
  [:div
   {:id (path->unique-card-id path)
    :class (str "devcard-rendered-card" (if (:padding options) " devcard-padding" "")) }])

(defn card-template [{:keys [path options] :as card}]
  (if-not (:hidden options)
    (if (:heading options)
      [:div.panel.panel-default.devcard-panel
       [:div.panel-heading.devcards-set-current-path
        {:data-path (path->unique-card-id path)}
        [:span.panel-title (name (last path)) " "]]
       (naked-card card)]
      [:div.panel.panel-default.devcard-panel
       (naked-card card)
       #_[:div.panel-heading ]])
    [:span]))

(defn display-cards [cards]
  (map (comp card-template second)
       (sort-by (comp :position second) cards)))

(defn dir-links [dirs]
  [:div.list-group
   (map (fn [[key child-tree]]
          [:a.list-group-item.devcards-add-to-current-path
           {:data-path (name key)}
           [:span.glyphicon.glyphicon-folder-close]
           [:span.badge (count child-tree)]
           [:span " " (name key)]])
        (reverse dirs))])

(defn breadcrumbs-templ [crumbs]
  [:ol.breadcrumb.devcards-breadcrumb
   (map (fn [[n path]]
          [:li
           [:a.devcards-set-current-path {:href "#"
                                          :data-path (path->unique-card-id path)}
            n]])
        crumbs)])

(defn main-template [data]
  [:div
   [:div.navbar.navbar-default.navbar-static-top.devards-main-navbar
    [:div.container
     [:div.navbar-header
      [:a.navbar-brand "(:devcards ClojureScript)"]]]]
   [:div.container
    [:div.row
     [:div.col-md-9
      (when-let [crumbs (:breadcrumbs data)]
        (breadcrumbs-templ crumbs))
      (when-let [dir-paths (:display-dir-paths data)]
        (dir-links dir-paths))]
     [:div.col-md-3
      ]
     ]
    ]
   ])

(defn cards-templates [data]
  [:div.container
   [:div.row
    [:div.col-md-9
     (when-let [cards (:display-cards data)]
       (display-cards cards))
     (when-let [card (:display-single-card data)]
       (naked-card card))]]])

(defn to-node [jq]
  (aget (.get jq) 0))

(defn sel-nodes [sel]
  (mapv to-node ($ sel)))

(defn visible-card-paths []
  (let [card-nodes (sel-nodes ".devcard-rendered-card")]
    (filter first
            (map
             #(unique-card-id->path (.-id %))
             card-nodes))))

(defn visible-card-nodes [data]
  (let [card-nodes (sel-nodes ".devcard-rendered-card")]
    (filter first
            (map
             (juxt
              #(get-in data (cons :cards (unique-card-id->path (.-id %))))
              identity)
             card-nodes))))

(defn toggle-background-to-white [data]
  (if (:display-single-card data)
    (.addClass (js/$ "body") "devcards-white-background")
    (.removeClass (js/$ "body") "devcards-white-background")))

(defn compile-failure [state]
  (if (:compile-failed state)
    (.addClass (js/$ (devcards-app-node)) "devcards-compile-failed")
    (.removeClass (js/$ (devcards-app-node)) "devcards-compile-failed")))

(def code-loaded-class {:js "devcards-load-highlight"
                        :css "devcards-cssload-highlight"})

(defn code-loaded [state event-chan]
  (when-let [class (code-loaded-class (:code-loaded state))]
    (.addClass (js/$ (devcards-app-node)) class)
    (go
     (<! (timeout 1400))
     (.removeClass (js/$ (devcards-app-node)) class)
     (put! event-chan [:remove-code-loaded-effect]))))

(defn create-needed-card-nodes [data]
  (when (:render-cards data)
    (.html ($ (devcards-cards-node))
           (c/html (cards-templates data)))
    ))

(defn unmount-card-nodes [data]
  (doseq [[card node] (:visible-card-nodes data)]
    (when-let [card  (get-in data (cons :cards (unique-card-id->path (.-id node))))]
      (let [functionality ((:func card))]
        (when (and (satisfies? IUnMount functionality)
                   (or (:render-cards data)
                       (:unmount-on-reload (:options card))
                       (:delete-card card)))
            (unmount functionality { :node node
                                     :data-atom (:data-atom card)}))))))

(defn mount-card-nodes [data]
  (doseq [[card node] (visible-card-nodes data)]
    (let [functionality ((:func card))
          arg { :node node
                :data-atom (:data-atom card)}]
      (when-not (:delete-card card)
        (if (satisfies? IMount functionality)
          (mount functionality arg)
          (apply functionality [arg]))))))

(defn remove-node [node]
  (when node (.removeChild (.-parentNode node) node)))

(defn remove-card [card]
  (when-let [node (.getElementById
                   js/document
                   (path->unique-card-id (:path card)))]
    (remove-node (.-parentNode node))))

(defn delete-deleted-card-nodes [data]
  (doseq [[card node] (:visible-card-nodes data)]
    (when (:delete-card card) (remove-card card))))

(defn render-base-if-necessary! []
  (if-let [devcards-node (devcards-app-node)]
    (do
      (when-not (devcards-controls-node)
        (.appendChild devcards-node (c/html [:div {:id devcards-controls-element-id}])))
      (when-not (devcards-cards-node)
        (.appendChild devcards-node (c/html [:div {:id devcards-cards-element-id}]))))
    (throw (js/Error. (str "The devcards interface needs an element with an id of \""
                           devcards-app-element-id "\"")))))

(defn devcard-renderer [{:keys [state event-chan]}]
  (unmount-card-nodes state)
  (delete-deleted-card-nodes state)
  (.html ($ (devcards-controls-node)) (c/html (main-template state)))
  (create-needed-card-nodes state)
  (toggle-background-to-white state)
  (compile-failure state)
  (code-loaded state event-chan)
  (mount-card-nodes state))

(def devcard-initial-data { :current-path []
                            :position 0
                            :cards {} })

(def devcard-comp (compose
                   (DevCards.)
                   (HashBangRouting.)))

(defn data-to-message [msg-name event-chan]
  (fn [e]
    (.preventDefault e)
    (let [t (.-currentTarget e)]
      (when-let [data (.data ($ t))]
        (put! event-chan
              [msg-name
               (js->clj data
                        :keywordize-keys true)])))))

(defn register-listeners [event-chan]
  (.on ($ (devcards-app-node)) "click" "a.devcards-add-to-current-path"
       (data-to-message :add-to-current-path event-chan))
  (.on ($ (devcards-app-node)) "click" ".devcards-set-current-path"
       (data-to-message :set-current-path event-chan)))

(defn devcard-system-start [event-chan render-callback]
  (-> (make-runnable devcard-comp devcard-initial-data)
      (assoc :state-callback render-callback)
      (assoc :event-chan event-chan)
      runner-start))

(defn throttle-chan [in ms]
  (let [out (chan)]
    (go-loop []
             (let [d (<! in)
                   timer (timeout ms)]
               (put! out
                     (loop [d' d]
                       (let [[val tc] (alts! [in timer])]
                         (if (= tc timer)
                           d'
                           (recur val)))))
               (recur)))
    out))

(defn throttle-function [f ms]
  (let [q (chan (sliding-buffer 1))
        tq (throttle-chan q ms)]
    (go-loop []
      (when-let [v (<! tq)]
        (f v) (recur)))
    (fn [x] (put! q x))))
