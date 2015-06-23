(ns devcards.core
  (:require
   [cljs.compiler :refer (munge)]
   [cljs.test]
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
        `(devcards.core/register-card  [~(keyword ns) ~(keyword vname)] (fn [] ~expr)))))


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

(defmacro deftest [vname & parts]
  (if @devcards-active?
    `(devcards.core/defcard* ~vname
       (devcards.core/test-card* ~@(map (fn [p] (if (string? p)
                                                 `(fn [] (devcards.core/test-doc ~p))
                                                 `(fn [] ~p))) parts)))
    `(cljs.test/deftest ~vname
       ~@parts)))

;; below this line is gone

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
