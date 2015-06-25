(ns devcards.core
  (:require
   [cljs.compiler :refer (munge)]
   [cljs.test]
   [clojure.pprint :refer [with-pprint-dispatch code-dispatch pprint]]
   [clojure.java.io :as io])
  (:refer-clojure :exclude (munge defonce)))

(def ^:dynamic *devcards-active* false)

(defn enable-devcards! []
  (alter-var-root (var *devcards-active*) (fn [_] true)))

(defmacro do-when-active [& exprs]
  (when *devcards-active*
    `(do ~@exprs)))

(defmacro start-devcard-ui! []
  (enable-devcards!)
  `(devcards.core/start-devcard-ui!*))

#_(defmacro start-single-card-ui! []
  (enable-devcards!)
  `(devcards.core/start-single-card-ui!*))

(defmacro do [& exprs]
  (when *devcards-active*
        `(do ~@exprs)))

(defmacro defcard*
  [vname expr]
  (when *devcards-active*
     (let [ns (-> &env :ns :name name munge)]
       `(devcards.core/register-card  [~(keyword ns) ~(keyword vname)] (fn [] ~expr)))))

(defmacro defcard [& expr]
  (when *devcards-active*
    (if (instance? clojure.lang.Named (first expr))
      `(devcards.core/defcard* ~(symbol (name (first expr)))
         (devcards.core/card* ~@(rest expr)))
      `(devcards.core/defcard* card
         (devcards.core/default-option-card* { :heading false } ~@expr)))))

(defmacro doc-card [& exprs]
  (when *devcards-active*
    `(devcards.core/defcard* doc-card
       (devcards.core/default-option-card* { :heading false }
         (devcards.core/doc* ~@exprs)))))

(defmacro edn-card [body]
  (when *devcards-active*
    `(devcards.core/defcard* edn-card
       (devcards.core/default-option-card* { :heading false }
         (devcards.core/edn* ~body)))))

(defmacro deftest [vname & parts]
  (if *devcards-active*
    `(devcards.core/defcard* ~vname
       (devcards.core/test-card* ~@(map (fn [p] (if (string? p)
                                                 `(fn [] (devcards.core/test-doc ~p))
                                                 `(fn [] ~p))) parts)))
    `(cljs.test/deftest ~vname
       ~@parts)))

(defmacro edn->html [body]
  (when *devcards-active*
    `(devcards.core/edn->html* ~body)))

(defmacro dom-node [body]
  (when *devcards-active*
    `(devcards.core/dom-node* ~body)))

(defmacro hist [body]
  (when *devcards-active*
    `(devcards.core/hist* ~body)))

(defmacro hist-recorder [body]
  (when *devcards-active*
    `(devcards.core/hist-recorder* ~body)))

(defmacro edn [body]
  (when *devcards-active*
    `(devcards.core/edn* ~body)))

(defmacro edn-hist [body]
  (when *devcards-active*
    `(devcards.core/edn-hist* ~body)))

(defmacro doc [& body]
  (when *devcards-active*
    `(devcards.core/doc* ~@body)))

(defmacro om-root-card
  ([om-comp-fn initial-state om-options]
   (when *devcards-active*
     `(dom-node
       (fn [node# _#]
         (om.core/root ~om-comp-fn ~initial-state (merge ~om-options {:target node#}))))))
  ([om-comp-fn initial-state]
   (when *devcards-active*
     `(om-root-card ~om-comp-fn ~initial-state {}))))

;; formatting for markdown cards

(defmacro pprint-str [obj]
  (when *devcards-active*
    `(devcards.util.utils/pprint-str ~obj)))

(defmacro pprint-code [obj]
  (when *devcards-active*
    `(devcards.util.utils/pprint-code ~obj)))

(defmacro mkdn-pprint-code [obj]
  (when *devcards-active*
    `(devcards.core/mkdn-code
      (devcards.util.utils/pprint-code ~obj))))

(defmacro mkdn-pprint-str [obj]
  (when *devcards-active*
    `(devcards.core/mkdn-code
      (devcards.util.utils/pprint-str ~obj))))
