(ns devcards.util.edn-renderer
  (:require
   [devcards.util.reactor :as rct :include-macros true]
   [sablono.core :as sab :include-macros true]
   [om.dom :as dom :include-macros true]))

(declare html)

(defn literal? [x]
  (and (not (seq? x))
       (not (coll? x))))

(defn separator* [s]
  (dom/span #js { :className "separator"} s))

(defn clearfix-separator* [s]
  (dom/span #js {}
            (separator* s)
            (dom/span #js { :className "clearfix" } "")))

(defn separate-fn [coll]
  (if (not (every? literal? coll))
    clearfix-separator*
    separator*))

(defn interpose-separator [rct-coll s sep-fn]
  (->> (rest rct-coll)
       (interleave (repeatedly #(sep-fn s))) 
       (cons (first rct-coll))
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
            #_(dom/span #js {:className "separator"} " ")
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
  (dom/div #js { :className "rendered-edn" }
                     (html e)))

(comment
  (enable-console-print!)

  (def test-data
    (mapcat identity
            (take 100 (repeat [{ :top 0 :left 0 :v 2 :id :t1}
                               { :top 0 :left 1 :v 4 :id :t2}
                               { :top 0 :left 2 :v 8 :id :t3}
                               { :top 0 :left 3 :v 16 :id :t4}
                               { :top 1 :left 0 :v 32 :id :t5}
                               { :top 1 :left 1 :v 64 :id :t6}
                               { :top 1 :left 2 :v 128 :id :t7}
                               { :top 1 :left 3 :v 256 :id :t8}
                               { :top 2 :left 0 :v 512 :id :t9}
                               { :top 2 :left 1 :v 1024 :id :t10}]))))

  (defn run-time-test [li-fn]
    (let [now (js/Date.)]
      (.renderComponent js/React (li-fn test-data)
                        (.getElementById js/document "test-area") identity)
      (/ (- (.getTime (js/Date.))
            (.getTime now)) 1000)))

  (println (run-time-test html-edn))
  #_(.unmountComponentAtNode js/React (.getElementById js/document "test-area")))
