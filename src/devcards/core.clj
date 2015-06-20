(ns devcards.core
  (:require
   [cljs.compiler :refer (munge)]
   [clojure.pprint :refer [with-pprint-dispatch code-dispatch pprint]]
   [clojure.java.io :as io])
  (:refer-clojure :exclude (munge defonce)))

(def devcards-active? (atom false))

(defmacro enable-devcards! []
  (reset! devcards-active? true)
  nil)

(defmacro start-devcard-ui! []
  (enable-devcards!)
  `(devcards.core/start-devcard-ui!*))

#_(defmacro start-single-card-ui! []
  (enable-devcards!)
  `(devcards.core/start-single-card-ui!*))

(defmacro do [& exprs]
  (when @devcards-active? `(do ~@exprs)))

(defmacro defcard*
  [vname expr]
  `(devcards.core/do
     ~(let [ns (-> &env :ns :name name munge)]
        `(devcards.core/register-card  [~(keyword ns) ~(keyword vname)]
                                       ;; getting options doesn't work anymore
                                       nil
                                       (fn [] ~expr)))))

(defmacro defcard [& expr]
  (if (instance? clojure.lang.Named (first expr))
    `(devcards.core/defcard* ~(symbol (name (first expr)))
       (devcards.core/card* ~@(rest expr)))
    `(devcards.core/defcard* card
       (devcards.core/default-option-card* { :heading false } ~@expr))))

(defmacro doc [& exprs]
  `(devcards.core/defcard* doccard
     (devcards.core/default-option-card* { :heading false }
       (devcards.core/markdown-card ~@exprs))))

(defmacro edn [body]
  `(devcards.core/defcard* edncard
     (devcards.core/default-option-card* { :heading false }
       (devcards.core/edn-card ~body))))


(defmacro is [body]
  `{ :type :is  :body (quote ~body) :passed ~body })

(defmacro are= [exp1 exp2]
  `{ :type :are= :exp1 (quote ~exp1) :exp2 (quote ~exp2) :passed (= ~exp1 ~exp2)
    :val1 ~exp1 :val2 ~exp2 })

(defmacro are-not= [exp1 exp2]
  `{ :type :are-not=  :exp1 (quote ~exp1) :exp2 (quote ~exp2) :passed (not= ~exp1 ~exp2)
    :val1 ~exp1 :val2 ~exp2 })


;; formatting macros

(defn wrap-markdown-code [x]
  (str "```\n" x "```\n"))

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
  (apply str (butlast (format-code* body))))

(defmacro format-data [body]
  (apply str (butlast (format-data* body))))

(defmacro mkdn-code [body]
  (wrap-markdown-code (format-code* body)))

(defmacro mkdn-data [body]
  (wrap-markdown-code (format-data* body)))



(defmacro om-root
  ([name om-comp-fn initial-state om-options devcard-options]
     `(devcards.core/defcard ~name
        (devcards.core/om-root-card ~om-comp-fn ~initial-state ~om-options)
        ~devcard-options))
  ([name om-comp-fn initial-state om-options]
     `(devcards.core/defcard ~name
        (devcards.core/om-root-card ~om-comp-fn ~initial-state ~om-options)))
  ([name om-comp-fn initial-state]
     `(devcards.core/defcard ~name
        (devcards.core/om-root-card ~om-comp-fn ~initial-state)))
  ([name om-comp-fn]
     `(devcards.core/defcard ~name
        (devcards.core/om-root-card ~om-comp-fn))))

(defmacro tests [name & body]
  `(devcards.core/defcard ~name
     (devcards.core/test-card ~@body)))

(defmacro slider [name f arg-seqs & rest]
    `(devcards.core/defcard ~name
       (devcards.core/slider-card ~f ~arg-seqs ~@rest)))
