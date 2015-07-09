(ns devcards.system
  (:require
   [clojure.java.io :as io]))

(defmacro inline-resouce-file [file-url]
  (when-let [f (io/resource file-url)]
    (slurp f)))

