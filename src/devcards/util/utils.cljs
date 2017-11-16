(ns devcards.util.utils
  (:require
   [goog.object :as gobj]
   [cljs.pprint :as pprint]))

(defn html-env? []
  (if-let [doc js/goog.global.document]
    (gobj/get doc "write")))

(defn node-env? [] (not (nil? goog/nodeGlobalRequire)))

(defn pprint-str [obj]
  ;; this is currently only to handle the
  ;; problem of printing JavaScript Symbols
  (try
    (with-out-str (pprint/pprint obj))
    (catch js/Error e1
      (try
        (.toString obj)
        (catch js/Error e2
          (str "<<Un-printable Type>>"))))))
 
 (defn pprint-code [code]
   (pprint/with-pprint-dispatch pprint/code-dispatch (pprint-str code)))

(defn ds->seq
  "Renders a DataScript database in a way that Devcards can handle.
   
   Use this as the :render-fn parameter to `defcard-rg` when the devcards
   data atom is a DataScript database.

   Usage:
   (defcard-rg my-card
     \"Doesn't do much.\"
     [:div]
     datascript-conn
     {:inspect-data true
      :history      true
      :render-fn    ds->seq})"
  [db]
  (->> db
       (map (fn [d] {:e     (:e     d)
                     :a     (:a     d)
                     :v     (:v     d)
                     :tx    (:tx    d)
                     :added (:added d)}))))