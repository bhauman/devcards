(ns devcards.util.edn-renderer
  (:require
   [sablono.core :as sab]
   [devcards.util.utils :as utils]))


(declare html)

(defn literal? [x]
  (and (not (seq? x))
       (not (coll? x))))

(defn separator* [s]
  (sab/html [:span.seperator s]))

(defn clearfix-separator* [s]
  (sab/html [:span (separator* s) [:span.clearfix]]))

(defn separate-fn [coll]
  (if (not (every? literal? coll)) clearfix-separator* separator*))

(defn interpose-separator [rct-coll s sep-fn]
  (->> (rest rct-coll)
       (interleave (repeatedly #(sep-fn s))) 
       (cons (first rct-coll))
       to-array))

(defn literal [class x]
  (sab/html [:span { :className class } (utils/pprint-str x)]))

(defn join-html [separator coll]
  (interpose-separator (mapv html coll)
                       separator
                       (separate-fn coll)))

(defn html-keyval [[k v]]
  (sab/html
   [:span.keyval { :key (prn-str k)} (html k) (html v)]))

(defn html-keyvals [coll]
  (interpose-separator (mapv html-keyval coll)
                       " "
                       (separate-fn (vals coll))))

(defn open-close [class-str opener closer rct-coll]
  (sab/html
   [:span {:className class-str}
    [:span.opener opener]
    [:span.contents  rct-coll]
    [:span.closer closer]]))

(defn html-collection [class opener closer coll]
  (open-close (str "collection " class ) opener closer (join-html " " coll))
    ;; this speeds things up but fails in om
  #_(rct/pure coll ...)
  )

(defn html-map [coll]
  (open-close "collection map" "{" "}" (html-keyvals coll))
  ;; this speeds things up but fails in om
  #_(rct/pure coll ...))

(defn html-string [s]
  (open-close "string" "\"" "\"" s))

(defn html [x]
  (cond
   (number? x)  (literal "number" x)
   (keyword? x) (literal "keyword" x)
   (symbol? x)  (literal "symbol" x)
   (string? x)  (html-string x)
   (map? x)     (html-map x)
   (set? x)     (html-collection "set"    "#{" "}" x)
   (vector? x)  (html-collection "vector" "[" "]" x)
   (seq? x)     (html-collection "seq"    "(" ")" x)
   :else        (literal "literal" x)))

(defn html-edn [e]
  (sab/html [:div.com-rigsomelight-rendered-edn.com-rigsomelight-devcards-typog (html e)]))
