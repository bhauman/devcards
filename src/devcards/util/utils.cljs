(ns devcards.util.utils
  (:require
   [cljs.pprint :as pprint])
  (:import
   [goog.string StringBuffer]))

(defn html-env? []
  (if-let [doc js/goog.global.document]
    (aget doc "write")))

(defn node-env? [] (not (nil? goog/nodeGlobalRequire)))

(defn pprint-str [obj]
   (let [sb (StringBuffer.)]
     (pprint/pprint obj (StringBufferWriter. sb))
     (str sb)))
 
 (defn pprint-code [code]
   (pprint/with-pprint-dispatch pprint/code-dispatch (pprint-str code)))

