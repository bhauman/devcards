(ns devcards.iframe
  (:require
   [sablono.core :as sab :include-macros true]
   [devcards.core :refer [ref->node get-props get-state]]
   [devcards.util.utils :as utils :refer [html-env?]
    :refer-macros [define-react-class define-react-class-once]]))

(define-react-class-once AutoResizeIFrame
  (constructor
    [props]
    (this-as this
      (set! (.-state this) #js {:unique_id (gensym 'auto-resize-iframe-)})))
  (componentDidMount
    [this]
    (let [node (ref->node this (get-state this :unique_id))]
      (.setState
        this
        #js {:resize_interval
             (js/setInterval
               (fn []
                 (when-let [content-window (.-contentWindow node)]
                   (let [height (min 700 (-> content-window
                                             .-document
                                             .-body
                                             .-scrollHeight))]
                     (set! (.-height node) height))))
               1000)})))
  (componentWillUnmount
    [this]
    (let [interval (get-state this :resize_interval)]
      (js/clearInterval interval)))
  (render
    [this]
    (sab/html
      [:iframe (-> (js->clj (.-props this))
                   (assoc :ref (get-state this :unique_id)))])))


(define-react-class-once DevcardIFrame
  (render
    [this]
    (let [card (get-props this :card)
          path (:path card)
          standalone-path (devcards.system/path->token path {:standalone true})
          card-name (name (last path))]
      (sab/html
        [:div.com-rigsomelight-devcards-base.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border
         {:key (prn-str path)}
         (js/React.createElement AutoResizeIFrame
                                 #js {:src (str "#" standalone-path)
                                      :name card-name
                                      :height 50
                                      :style {:border "none"
                                              :width "100%"}})]))))

(defn devcard-iframe [card]
  (js/React.createElement DevcardIFrame #js {:card card}))
