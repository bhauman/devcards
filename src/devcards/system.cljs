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
   [crate.core :as c]
   [clojure.string :as string]
   [clojure.set :refer [intersection difference]]
   [cljs.core.async :refer [put! chan sliding-buffer timeout]]
   [cljs.reader :refer [read-string]]
   [goog.events :as events]
   [goog.history.EventType :as EventType])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [devcards.system :refer [inline-resouce-file]])
  (:import
   [goog History]))

(def devcards-app-element-id "com-rigsomelight-devcards-main")
(def devcards-controls-element-id "com-rigsomelight-devcards-controls")
(def devcards-cards-element-id "com-rigsomelight-devcards-cards")

(def devcards-rendered-card-class "com-rigsomelight-devcards_rendered-card")

(defn get-element-by-id [id] (.getElementById js/document id))

(defn prepend-child [node node2]
  (if-let [first-child (.-firstChild node)]
    (.insertBefore node node2 first-child)
    (.appendChild node node2)))

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
  (sweep state files))

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
    :class (str devcards-rendered-card-class
                (if (:padding options)
                  " com-rigsomelight-devcards-devcard-padding" "")) }])

(defn card-template [{:keys [path options] :as card}]
  (if-not (:hidden options)
    (if (:heading options)
      [:div.com-rigsomelight-devcards-base.com-rigsomelight-devcards-card-base-no-pad
       [:div.com-rigsomelight-devcards_set-current-path.com-rigsomelight-devcards-panel-heading
        {:data-path (path->unique-card-id path)}
        (name (last path)) " "]
       (naked-card card)]
      [:div.com-rigsomelight-devcards-card-base-no-pad
       (naked-card card)])
    [:span]))

(defn display-cards [cards]
  (map (comp card-template second)
       (sort-by (comp :position second) cards)))

(defn dir-links [dirs]
  [:div.com-rigsomelight-devcards-card-base-no-pad
   (map (fn [[key child-tree]]
          [:a.com-rigsomelight-devcards_add-to-current-path.com-rigsomelight-devcards-list-group-item
           {:data-path (name key)}
           [:span.com-rigsomelight-devcards-badge {:style {:float "right"}}  (count child-tree)]
           [:span " " (name key)]])
        (reverse dirs))])

(defn breadcrumbs-templ [crumbs]
  [:div.com-rigsomelight-devcards-card-base
   (interpose
    [:span.com-rigsomelight-devcards-breadcrumb-sep "/"]
    (map (fn [[n path]]
          [:span {:style {:display "inline-block" }}
           [:a.com-rigsomelight-devcards_set-current-path
            {:href "#"
             :data-path (path->unique-card-id path)}
            n]])
        crumbs))])

(defn main-template [data]
  [:div.com-rigsomelight-devcards-base
   [:div.com-rigsomelight-devcards-navbar
    [:div.com-rigsomelight-devcards-container
     [:span.com-rigsomelight-devcards-brand  "(:devcards ClojureScript)"]]]
   [:div.com-rigsomelight-devcards-container
    (when-let [crumbs (:breadcrumbs data)]
      (breadcrumbs-templ crumbs))
    (when-not (empty? (:display-dir-paths data))
      (dir-links (:display-dir-paths data)))]])

(defn cards-templates [data]
  [:div.com-rigsomelight-devcards-container
   (when-let [cards (:display-cards data)]
     (display-cards cards))
   (when-let [card (:display-single-card data)]
     (naked-card card))])

(defn to-node [jq]
  (aget (.get jq) 0))

(defn node-list->array [nl]
  (js/Array.prototype.slice.call nl))

;; remove jquery
(defn sel-nodes [sel]
  (js->clj
      (node-list->array
       (.querySelectorAll js/document
                          sel))))

(defn visible-card-paths []
  (let [card-nodes (sel-nodes (str "." devcards-rendered-card-class))]
    (filter first
            (map
             #(unique-card-id->path (.-id %))
             card-nodes))))

(defn visible-card-nodes [data]
  (let [card-nodes (sel-nodes (str "." devcards-rendered-card-class))]
    (filter first
            (map
             (juxt
              #(get-in data (cons :cards (unique-card-id->path (.-id %))))
              identity)
             card-nodes))))

;; remove jquery
(defn remove-child-nodes [node]
  (loop [child (.-firstChild node)]
    (when child
      (.removeChild node child)
      (recur (.-firstChild node))))
  node)

;; remove jquery
(defn replace-content [node new-content-node]
  (set! (.-innerHTML node) "")
  (.appendChild node new-content-node))

(defn create-needed-card-nodes [data]
  (when (:render-cards data)
    (replace-content (devcards-cards-node)
                     (c/html (cards-templates data)))))

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

(declare add-css-if-necessary!)

(defn render-base-if-necessary! []
  (add-css-if-necessary!)
  (when-not (devcards-app-node)
    (prepend-child (.-body js/document) (c/html [:div {:id devcards-app-element-id}])))
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
  (replace-content (devcards-controls-node) (c/html (main-template state)))
  (create-needed-card-nodes state)
  (mount-card-nodes state))

(def devcard-initial-data { :current-path []
                            :position 0
                            :cards {} })

(def devcard-comp (compose
                   (DevCards.)
                   (HashBangRouting.)))

(defn data->message [msg-name event-chan]
  (fn [e target]
    (.preventDefault e)
    (let [t target]
      (when-let [path (.getAttribute t "data-path")]
        (let [data {:path path}]
          (put! event-chan [msg-name data]))))))

;; event delegation

(defn get-classes [node]
  (set (string/split (.-className node) #"\s+")))

(defn has-class? [node class-str]
  ((get-classes node) class-str))

(defn get-parent-with-data-path [node]
  (loop [n node]
    (when n
      (if (.getAttribute n "data-path")
        n
        (recur (.-parentNode n))))))

(defn event-delegate [node event-name class-sel f]
  (.addEventListener node event-name
                     (fn [e]
                       (let [target (get-parent-with-data-path (.-target e))]
                         (when (has-class? target class-sel)
                           (f e target))))))

(defn register-listeners [event-chan]
  (event-delegate (devcards-app-node) "click" "com-rigsomelight-devcards_add-to-current-path"
                  (data->message :add-to-current-path event-chan))
  (event-delegate (devcards-app-node) "click" "com-rigsomelight-devcards_set-current-path"
                  (data->message :set-current-path event-chan)))

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

(defn add-css-if-necessary! []
  (if-let [heads (.getElementsByTagName js/document "head")]
    (let [head (aget heads 0)]
      #_(when-not (get-element-by-id "com-rigsomelight-devcards-css")
        (.appendChild head (c/html [:style#com-rigsomelight-devcards-css (inline-resouce-file "public/devcards/css/com_rigsomelight_devcards.css")])))
      (when-not (get-element-by-id "com-rigsomelight-edn-css")
        (.appendChild head (c/html [:style#com-rigsomelight-edn-css (inline-resouce-file "public/devcards/css/com_rigsomelight_edn.css")]))))))
