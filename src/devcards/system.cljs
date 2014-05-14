(ns devcards.system
  (:require
   [frontier.core :refer [IInit
                          ITransform
                          IDerive
                          IInputFilter
                          run
                          make-runnable
                          runner-start
                          compose]]
   [jayq.core :refer [$]]
   [crate.core :as c]
   [clojure.string :as string]
   [cljs.core.async :refer [put! chan sliding-buffer timeout]]
   [cljs.reader :refer [read-string]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))

(defn unique-card-id [path]
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

(defprotocol IMountable
  (mount [o data])
  (unmount [o data]))

(defrecord DevCard [path tags func position data-atom])

(defn devcard? [d]
  (and (map? d)
       (:data-atom d)
       (:func d)
       (:path d)
       (:position d)))

;; input filters
(defmulti ifilter first)

(defmethod ifilter :default [msg state] msg)

(defmethod ifilter :set-current-path [[_ {:keys [path]}] state]
  [:current-path {:path (vec (map keyword (string/split path ":::")))}])

;; transforms
(defmulti dev-trans first)

(defmethod dev-trans :default [msg state] state)

(defmethod dev-trans :register-card [[_ {:keys [path tags func]}] state]
  (let [position (:position state)]
    (-> state
        (update-in [:position] inc)
        (update-in (cons :cards path)
                   (fn [dc]
                     (if dc
                       (assoc dc
                         :tags tags
                         :position position
                         :func func)
                       (DevCard. path tags func position (atom {}))))))))

(defmethod dev-trans :add-to-current-path [[_ {:keys [path]}] state]
  (-> state
      (update-in [:current-path] 
                 (fn [x] (conj x (keyword path))))))

(defmethod dev-trans :current-path [[_ {:keys [path]}] state]
  (assoc state :current-path (vec path)))

;; derivatives

(declare visible-card-nodes)

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
            (filter (comp devcard? second) cur))))))

(defn render-cards? [state]
  ;; impure as we are relying on the dom state to calculate this but since
  ;; we aren't using react this is a good way to diff the nodes on
  ;; on the page
  (let [visible-cards  (map (comp :path first) (:visible-card-nodes state))
        intended-cards (keep :path
                             (concat [(:display-single-card state)]
                                     (vals (:display-cards state))))]
    (assoc state
      :render-cards (not= (set visible-cards)
                          (set intended-cards)))))

(defn unmount-cards? [state]
  
  )

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

(defrecord CurrentPathSessionStorage []
  IInit
  (-initialize [_ state event-chan]
    (when-let [current-path (.getItem js/sessionStorage "__devcards__current-path")]
      (when-let [path (try (read-string current-path) (catch js/Error e nil))]
        (put! event-chan [:current-path {:path path}]))))
  IDerive
  (-derive [o state]
    (.setItem js/sessionStorage "__devcards__current-path" (prn-str (:current-path state)))
    state))

(defn naked-card [{:keys [path]}]
  [:div.devcard-rendered-card {:id (unique-card-id path)}])

(defn card-template [{:keys [path] :as card}]
  (if-not (some #(= % :hidden) (:tags card))
    (if (some #(= % :no-heading) (:tags card))
      [:div.panel.panel-default.devcard-panel
       [:div.panel-heading (naked-card card)]]
      [:div.panel.panel-default.devcard-panel
       [:div.panel-heading.devcards-set-current-path
        {:data-path (string/join ":::" (map name path))}
        [:span.panel-title (name (last path)) " "]]
       (naked-card card)])
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
        dirs)])

(defn breadcrumbs-templ [crumbs]
  [:ol.breadcrumb
   (map (fn [[n path]]
          [:li
           [:a.devcards-set-current-path {:href "#"
                                          :data-path (string/join ":::" path)}
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
    (.addClass (js/$ "body") "white-background")
    (.removeClass (js/$ "body") "white-background")))

(defn create-needed-card-nodes [data]
  (when (:render-cards data)
    (.html ($ "#devcards-cards") (c/html (cards-templates data)))
    ;; otherwise leave the nodes as they are
    ))

(defn unmount-card-nodes [data]
  (when (:render-cards data)
    (doseq [[card node] (:visible-card-nodes data)]
      (when-let [card  (get-in data (cons :cards (unique-card-id->path (.-id node))))]
        (let [functionality ((:func card))]
          (when (satisfies? IMountable functionality)
            (unmount functionality { :node node
                                     :data (:data-atom card)})))))))

(defn mount-card-nodes [data]
  (doseq [[card node] (visible-card-nodes data)]
    (let [functionality ((:func card))
          arg { :node node
                :data (:data-atom card)}]
      (if (satisfies? IMountable functionality)
        (mount functionality arg)
        (apply functionality [arg])))))

(defn render-base-if-necessary! []
  (if-let [devcards-node (.getElementById js/document "devcards")]
    (do
      (when-not (.getElementById js/document "devcards-controls")
        (.appendChild devcards-node (c/html [:div#devcards-controls])))
      (when-not (.getElementById js/document "devcards-cards")
        (.appendChild devcards-node (c/html [:div#devcards-cards]))))
    (throw (js/Error. "The devcards interface needs an element with an id of \"devcards\" to be on the page."))))

(defn devcard-renderer [{:keys [state event-chan]}]
  (unmount-card-nodes state)
  (.html ($ "#devcards-controls") (c/html (main-template state)))
  (create-needed-card-nodes state)
  (toggle-background-to-white state)
  (mount-card-nodes state))

(def devcard-initial-data { :current-path []
                            :position 0
                            :cards {} })

(def devcard-comp (compose
                   (DevCards.)
                   (CurrentPathSessionStorage.)))

(defn data-to-message [msg-name event-chan]
  (fn [e]
    (let [t (.-currentTarget e)]
      (when-let [data (.data ($ t))]
        (put! event-chan
              [msg-name
               (js->clj data
                        :keywordize-keys true)])))))

(defn register-listeners [sel event-chan]
    (.on ($ sel) "click" "a.devcards-add-to-current-path"
         (data-to-message :add-to-current-path event-chan))
    (.on ($ sel) "click" ".devcards-set-current-path"
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

