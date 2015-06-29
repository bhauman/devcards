(ns devcards.system
  (:require
   [clojure.string :as string]
   [cljs.core.async :refer [put! <! chan timeout]]
   [sablono.core :as sab]
   [devcards.util.edn-renderer :as edn-rend]
   [goog.events :as events]
   [goog.history.EventType :as EventType])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [devcards.system :refer [inline-resouce-file]])
  (:import
   [goog History]))

(defn l [x]
  (.log js/console x)
  x)

(def devcards-app-element-id "com-rigsomelight-devcards-main")

(def devcards-rendered-card-class "com-rigsomelight-devcards_rendered-card")

(defn prevent-> [f] (fn [e] (.preventDefault e) (f e)))

(defn get-element-by-id [id] (.getElementById js/document id))

(defn devcards-app-node [] (get-element-by-id devcards-app-element-id))

(defn path->unique-card-id [path]
  (string/join "." (map (fn [x] (str "[" x "]"))
                        (map name (cons :cardpath path)))))

(defn unique-card-id->path [card-id]
  (mapv keyword
       (-> (subs card-id 1
                 (dec (count card-id)))
           (string/split #"\].\[")
           rest)))

(defn create-style-element [id style-text]
  (let [el (js/document.createElement "style")]
    (set! (.-id el) id)
    (.appendChild el (js/document.createTextNode style-text))
    el))

(defn prepend-child [node node2]
  (if-let [first-child (.-firstChild node)]
    (.insertBefore node node2 first-child)
    (.appendChild node node2)))

(defn add-css-if-necessary! []
  (if-let [heads (.getElementsByTagName js/document "head")]
    (let [head (aget heads 0)]
      (when-not (get-element-by-id "com-rigsomelight-devcards-css")
        (.appendChild head (create-style-element "com-rigsomelight-devcards-css"
                                                 (inline-resouce-file "public/devcards/css/com_rigsomelight_devcards.css"))))
      (when-not (get-element-by-id "com-rigsomelight-edn-css")
        (.appendChild head
                      (create-style-element "com-rigsomelight-edn-css"
                                            (inline-resouce-file "public/devcards/css/com_rigsomelight_edn.css")))))))

(defn render-base-if-necessary! []
  (add-css-if-necessary!)
  (when-not (devcards-app-node)
    (let [el (js/document.createElement "div")]
      (set! (.-id el) devcards-app-element-id)
      (prepend-child (.-body js/document) el))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Hashbang routing

(declare set-current-path)

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

(defn hash-navigate [path]
  (.setToken history (path->token path)))

(defn hash-routing-init [state-atom]
  (events/listen history EventType/NAVIGATE
                 #(swap! state-atom set-current-path (token->path (.-token %))))
  (when-let [token (.getToken history)]
    (swap! state-atom set-current-path (token->path token))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn devcard? [d]
  (and (map? d)
       #_(:data-atom d)
       (:func d)
       (:path d)
       (:position d)
       d))

(defn path-collision [state path]
  (if-let [c (get (:path-collision-count state) path)]
    (vec (concat (butlast (vec path))
                 [(keyword (str (name (last path)) "-" c))]))
    path))

(defn register-collision [state path]
  (update-in state [:path-collision-count path] inc))

(defmulti dev-trans first)

(defmethod dev-trans :default [msg state] state)

(defmethod dev-trans :register-card [[_ {:keys [path options func]}] state]
  (let [position (:position state)
        new-path (path-collision state path)]
    (-> state
        (update-in [:position] inc)
        (update-in (cons :cards new-path)
                   (fn [dc]
                     { :path new-path
                       :func func
                       :position position }))
        (register-collision path))))

(def devcard-initial-data { :current-path []
                            :position 0
                            :cards {}
                            :path-collision-count {}
                            :base-card-options { :frame true
                                                 :heading true
                                                 :padding true
                                                 :hidden false
                                                 :inspect-data false
                                                 :watch-atom true
                                                 :history false } })

(defonce app-state (atom devcard-initial-data))

(defn valid-path? [state path]
  (or (= [] path)
      (get-in (:cards state) path)))

(defn enforce-valid-path [state path]
  (vec (if (valid-path? state path) path [])))

(defn add-to-current-path [{:keys [current-path] :as state} path]
  (assoc state
         :current-path
         (enforce-valid-path state (conj current-path (keyword path)))))

(defn set-current-path [{:keys [current-path] :as state} path]
  (let [path (vec (map keyword path))]
    (if (not= current-path path)
      (-> state
        (assoc :current-path (enforce-valid-path state path))
        #_add-navigate-effect)
      state)))

(defn set-current-path! [state-atom path]
  (swap! state-atom set-current-path path)
  (hash-navigate path))

(defn current-page [data]
  (and (:current-path data)
       (:cards data)
       (get-in (:cards data) (:current-path data))))

(defn display-single-card? [state]
  (devcard? (current-page state)))

(defn display-dir-paths [state]
  (let [cur (current-page state)]
    (filter (complement (comp devcard? second)) cur)))

(defn display-cards [state]
  (let [cur (current-page state)]
    (filter (comp #(and (not (:delete-card %))
                        (devcard? %)) second) cur)))

(def ^:dynamic *devcard-data* nil)

(defn card-template [state-atom {:keys [path options func] :as card}]
  (sab/html
   [:div {:key (path->unique-card-id path)}
    (cljs.core/binding [*devcard-data* card]
      (func))]))

(defn render-cards [cards state-atom]
  (map (comp (partial card-template state-atom) second)
       (sort-by (comp :position second) cards)))

(defn main-cards-template [state-atom]
  (let [data @state-atom]
    (if (display-single-card? data)
      (card-template state-atom (current-page data))
      (render-cards (display-cards data) state-atom))))

(defn breadcrumbs [{:keys [current-path] :as state}]
  (let [cpath (map name (cons :home current-path))
        crumbs
        (map (juxt last rest)
             (rest (map-indexed
                    (fn [i v] (subvec v 0 i))
                    (take (inc (count cpath))
                          (repeat (vec cpath))))))]
    crumbs))

(defn breadcrumbs-templ [crumbs state-atom]
  (sab/html
   [:div.com-rigsomelight-devcards-card-base.com-rigsomelight-devcards-breadcrumbs
    (interpose
     (sab/html [:span.com-rigsomelight-devcards-breadcrumb-sep "/"])
     (map (fn [[n path]]
            (sab/html
             [:span {:style {:display "inline-block" }}
              [:a.com-rigsomelight-devcards_set-current-path
               {:href "#"
                :onClick (prevent-> #(set-current-path! state-atom path))}
               n]]))
          crumbs))]))

(defn dir-links [dirs state-atom]
  (when-not (empty? dirs)
    (sab/html
     [:div.com-rigsomelight-devcards-card-base-no-pad
      (map (fn [[key child-tree]]
             (sab/html
              [:a.com-rigsomelight-devcards-list-group-item
               {:onClick
                (prevent->
                 (fn [e] (swap! state-atom
                               (fn [s]
                                 (let [new-s (add-to-current-path s key)]
                                   (hash-navigate (:current-path new-s))
                                   new-s)))))}
               [:span.com-rigsomelight-devcards-badge
                {:style {:float "right"}}
                (count child-tree)]
               [:span " " (name key)]]))
           (reverse dirs))])))

(defn main-template [state-atom]
  (let [data @state-atom]
    (sab/html
     [:div.com-rigsomelight-devcards-base
      [:div.com-rigsomelight-devcards-navbar
       [:div.com-rigsomelight-devcards-container
        [:span.com-rigsomelight-devcards-brand
         "(:devcards ClojureScript)"]]]
      [:div.com-rigsomelight-devcards-container
       (when-let [crumbs (breadcrumbs data)]
         (breadcrumbs-templ crumbs state-atom))
       (when-not (display-single-card? data)
         (let [dir-paths (display-dir-paths data)]
           (dir-links dir-paths state-atom)))
       [:div
        (main-cards-template state-atom)]]])))

;; enables the deletion of cards

(defn renderer [state-atom]
  #_(prn "Rendering")
  (js/React.render
   (sab/html [:div
              (main-template state-atom)
              #_(edn-rend/html-edn @state-atom)])
   (devcards-app-node)))

(comment

  the composition structure of the main api
    needs to copy normal react composition
    particularly the relationship of
    hist and dom-node and the passing
    of the data atom
  
  make sure that this works with reagent

  verify small compile size

  make slider component

  move om out of dependencies
  - need to get om root card examples out of devdemos.core
  
  consider configuring  global card options
  consider frame false option
  consider frame false binding overide

  consider web-components for hiding css styling!!!

  turn system into react component?

  fix edn rendering (use flex? harder that one might think)
  
  dog food devcards code
  
  )

(defn merge-in-new-data [state new-state]
  (assoc state
         :path-collision-count {}
         :position (:position new-state)
         :cards    (merge
                    (:cards state)
                    (:cards new-state))))

;; the only major potential problem here is that If we only register
;; some of the cards of a namespace then the other cards in the
;; namespace will dissapear. If one is doing calculations at the top
;; level that take more than the wait time this could be a problem
(defn off-the-books
  "Run sequential messages off the books outside of the atom and
   then difference the result so we can only display the new cards 
   that have arrived. This prevents multiple renders and allows us 
   to delete cards live."
  [channel start-data first-message]
  (let [;timer (timeout 3000)
        initial-data (-> start-data
                       (assoc :path-collision-count {})
                       (dissoc :cards))]
    #_(prn "off the books")
    (go-loop [data (dev-trans first-message initial-data)]
      #_(prn "here")
      (let [timer (timeout 500)]
        (when-let [[[msg-name payload] ch] (alts! [channel timer])]
          (cond
            (= ch timer)           (merge-in-new-data start-data data)
            ;; this will function without jsreload. but allows us to
            ;; render a tick faster
            (= msg-name :jsreload) (merge-in-new-data start-data data)
            :else
            (do
              (recur (dev-trans [msg-name payload] data)))))))))

(defn start-ui [channel]
  (defonce devcards-ui-setup
    (do
      (render-base-if-necessary!)
      (go
        ;; initial load
        #_(prn "INITIAL loading")
        ;; consume all register card messages
        ;; and then load the accumulated state into the
        ;; app-state
        (let [new-state (<! (off-the-books channel @app-state []))]
          (reset! app-state new-state))
        
        (hash-routing-init app-state)        
        (js/setTimeout #(renderer app-state) 0)
        (add-watch app-state :devcards-render
                   (fn [_ _ _ _] (renderer app-state)))

        (loop  []
          (when-let [v (<! channel)]
            #_(prn "hey" (first v))
            (let [new-state (<! (off-the-books channel @app-state v))]
              #_(prn "in the books")
              (reset! app-state new-state))
            (recur))))
      true)))
