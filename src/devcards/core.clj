(ns devcards.core
  (:require
   [cljs.compiler :refer (munge)]
   [clojure.pprint :refer [with-pprint-dispatch code-dispatch pprint]]
   [clojure.java.io :as io])
  (:refer-clojure :exclude (munge defonce)))

(defmacro defcard
  [vname expr]
  (let [ns (-> &env :ns :name name munge)]
    `(do
       (def ~vname (fn [] ~expr))
       (devcards.core/register-card  [~(keyword ns) ~(keyword vname)] (or (:tags (meta ~expr)) []) ~vname))))

(defmacro hidecard
  [vname expr]
  (let [ns (-> &env :ns :name name munge)]
    `(do
       (def ~vname (fn [] (fn [{:keys [node data]}] (if node (set! (.-innerHTML node) "")))))
       (devcards.core/register-card  [~(keyword ns) ~(keyword vname)] [:hidden] ~vname))))

(defmacro is [body]
  `{ :type :is  :body (quote ~body) :passed ~body })

(defmacro are= [exp1 exp2]
  `{ :type :are= :exp1 (quote ~exp1) :exp2 (quote ~exp2) :passed (= ~exp1 ~exp2)
    :val1 ~exp1 :val2 ~exp2 })

(defmacro are-not= [exp1 exp2]
  `{ :type :are-not=  :exp1 (quote ~exp1) :exp2 (quote ~exp2) :passed (not= ~exp1 ~exp2)
    :val1 ~exp1 :val2 ~exp2 })

;; formatting macros
(defn format-code* [code]
  (.toString (let [out (java.io.ByteArrayOutputStream.)]
               (with-pprint-dispatch code-dispatch
                 (pprint code (io/writer out)))
               out)))

(defn format-data* [code]
  (.toString (let [out (java.io.ByteArrayOutputStream.)]
               (pprint code (io/writer out))
               out)))

(defmacro format-code [body]
  `(str ~(apply str (butlast (format-code* body)))))

(defmacro format-data [body]
  `(str ~(apply str (butlast (format-data* body)))))
