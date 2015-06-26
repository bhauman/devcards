(ns devcards.util.utils
  (:require
   [cljs.pprint :as pprint])
  (:import [goog.string StringBuffer]))


(defn pprint-str [obj]
   (let [sb (StringBuffer.)]
     (pprint/pprint obj (StringBufferWriter. sb))
     (str sb)))
 
 (defn pprint-code [code]
   (pprint/with-pprint-dispatch pprint/code-dispatch (pprint-str code)))
