(ns devcards.util.edn-renderer
  (:require
   [om.dom :as dom :include-macros true]))

(declare html)

(defn literal? [x]
  (and (not (seq? x))
       (not (coll? x))))

(defn separator* [s]
  (dom/span #js { :className "separator" } s))

(defn clearfix-separator* [s]
  (dom/span #js {}
            (separator* s)
            (dom/span #js { :className "clearfix" } "")))

(defn separate-fn [coll]
  (if (not (every? literal? coll))
    clearfix-separator*
    separator*))

(defn interpose-separator [rct-coll s sep-fn]
  (-> (butlast rct-coll)
      (interleave (repeatedly #(sep-fn s))) 
      vec
      (conj (last rct-coll))
      to-array))

(defn literal [class x]
  (dom/span #js { :className class } (prn-str x)))

(defn join-html [separator coll]
  (interpose-separator (mapv html coll) separator
                       (separate-fn coll)))

(defn html-keyval [[k v]]
  (dom/span #js {:className "keyval"
                 :key (prn-str k)}
            (html k)
            (dom/span #js {:className "separator"} " ")
            (html v)))

(defn html-keyvals [coll]
  (interpose-separator (mapv html-keyval coll) " "
                       (separate-fn (vals coll))))

(defn open-close [class-str opener closer rct-coll]
  (dom/span #js {:className class-str}
            (dom/span #js { :className "opener"} opener)
            (dom/span #js { :className "contents" } rct-coll)
            (dom/span #js { :className "closer"} closer)))

(defn html-collection [class opener closer coll]
  (open-close (str "collection " class ) opener closer (join-html " " coll)))

(defn html-map [coll]
  (open-close "collection map" "{" "}" (html-keyvals coll)))

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
  (dom/div #js { :className "rendered-edn" }
            (html e)))

