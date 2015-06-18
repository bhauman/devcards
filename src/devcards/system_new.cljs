(ns devcards.system-new
  (:require
   [clojure.string :as string]
   [clojure.set :refer [intersection difference]]
   [cljs.core.async :refer [put! chan sliding-buffer timeout]]
   [cljs.reader :refer [read-string]]
   [sablono.core :as sab]
   [goog.events :as events]
   [devcards.util.edn-renderer :as edn-rend]
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

(defn get-element-by-id [id] (.getElementById js/document id))

(defn devcards-app-node [] (get-element-by-id devcards-app-element-id))

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

(defmulti dev-trans first)

(defmethod dev-trans :default [msg state] state)

(defmethod dev-trans :register-card [[_ {:keys [path options func]}] state]
  (let [position (:position state)]
    (-> state
        (update-in [:position] inc)
        (update-in (cons :cards path)
                   (fn [dc]
                     (if dc
                       (-> dc
                         (assoc
                          :position position
                          :func func)
                         (dissoc :sweep-marker)
                         (dissoc :delete-card))
                       { :path path
                         :func func
                         :position position }))))))

(def devcard-initial-data { :current-path []
                            :position 0
                            :cards {} })

(defonce app-state (atom devcard-initial-data))

(defn off-the-books [channel start-data]
  (let [timer (timeout 3000)]
    (go-loop [data start-data]
      (prn "here")
      (when-let [[[msg-name payload] ch] (alts! [channel timer])]
        (cond
          (= ch timer) data
          (= msg-name :js-reload) data
          :else
          (do
            (recur (dev-trans [msg-name payload] data)  )))))))

;; this throttleing helps prevent tons of renders on load
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

(defn renderer []
  (prn "Rendering")
  (js/React.render
   (sab/html [:div
              [:h1 "Devcards now"]
              (edn-rend/html-edn @app-state)])
   (devcards-app-node)))

(add-watch app-state :devcards-render (fn [_ _ _ _] (renderer)))

(defn start-ui [channel]
  (defonce channel-setup
    (do
      (go-loop []
        (when-let [v (<! channel)]
          (prn "hey" v)
          (if (= (first v) :before-jsload)
            (let [new-state (<! (off-the-books channel @app-state))]
              (reset! app-state new-state))
            (swap! app-state (fn [s] (dev-trans v s)))
            (renderer))
          (recur)))
      true)
    )
  (render-base-if-necessary!)
  (renderer))
