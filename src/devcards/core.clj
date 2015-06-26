(ns devcards.core
  (:require
   [devcards.util.utils :as utils]
   [cljs.compiler :refer (munge)]
   [cljs.analyzer :as ana]
   [cljs.test]
   [cljs.env]
   [clojure.pprint :refer [with-pprint-dispatch code-dispatch pprint]]
   [clojure.java.io :as io])
  (:refer-clojure :exclude (munge defonce)))


(defmacro start-devcard-ui! []
  (when (utils/devcards-active?)
    `(devcards.core/start-devcard-ui!*)))

#_(defmacro start-single-card-ui! []
  (enable-devcards!)
  `(devcards.core/start-single-card-ui!*))

(defmacro do [& exprs]
  (when (utils/devcards-active?)
        `(do ~@exprs)))

(defmacro defcard*
  [vname expr]
  (when (utils/devcards-active?)
     (let [ns (-> &env :ns :name name munge)]
       `(devcards.core/register-card  [~(keyword ns) ~(keyword vname)] (fn [] ~expr)))))

;; TODO: cleanup repetition
(defmacro defcard [& expr]
  (when (utils/devcards-active?)
    (if (instance? clojure.lang.Named (first expr))
      `(devcards.core/defcard* ~(symbol (name (first expr)))
         (devcards.core/card* ~@(rest expr)))
      `(devcards.core/defcard* card
         (devcards.core/default-option-card* { :heading false } ~@expr)))))

(defmacro doc-card [& exprs]
  (when (utils/devcards-active?)
    `(devcards.core/defcard* doc-card
       (devcards.core/default-option-card* { :heading false }
         (devcards.core/doc* ~@exprs)))))

(defmacro edn-card
  ([body]
   (when (utils/devcards-active?)
     `(devcards.core/defcard* edn-card
        (devcards.core/default-option-card* { :heading false }
          (devcards.core/edn* ~body)))))
  ([vname body]
   (when (utils/devcards-active?)
     `(devcards.core/defcard* ~vname
        (devcards.core/card*  (devcards.core/edn* ~body))))))

(defmacro edn-hist-card
  ([body]
   (when (utils/devcards-active?)
     `(devcards.core/defcard* edn-card
        (devcards.core/default-option-card* { :heading false }
          (devcards.core/edn-hist* ~body)))))
  ([vname body]
   (when (utils/devcards-active?)
     `(devcards.core/defcard* ~vname
        (devcards.core/card* {}
          (devcards.core/edn-hist* ~body))))))

(defmacro deftest [vname & parts]
  (if (utils/devcards-active?)
    `(devcards.core/defcard* ~vname
       (devcards.core/test-card* ~@(map (fn [p] (if (string? p)
                                                 `(fn [] (devcards.core/test-doc ~p))
                                                 `(fn [] ~p))) parts)))
    `(cljs.test/deftest ~vname
       ~@parts)))

(defmacro edn->html [body]
  (when (utils/devcards-active?)
    `(devcards.core/edn->html* ~body)))

(defmacro dom-node [body]
  (when (utils/devcards-active?)
    `(devcards.core/dom-node* ~body)))

(defmacro hist [body]
  (when (utils/devcards-active?)
    `(devcards.core/hist* ~body)))

(defmacro hist-recorder [body]
  (when (utils/devcards-active?)
    `(devcards.core/hist-recorder* ~body)))

(defmacro edn [body]
  (when (utils/devcards-active?)
    `(devcards.core/edn* ~body)))

(defmacro edn-hist [body]
  (when (utils/devcards-active?)
    `(devcards.core/edn-hist* ~body)))

(defmacro doc [& body]
  (when (utils/devcards-active?)
    `(devcards.core/doc* ~@body)))

(defmacro om-root
  ([om-comp-fn initial-state om-options]
   (when (utils/devcards-active?)
     `(dom-node
       (fn [node# _#]
         (om.core/root ~om-comp-fn ~initial-state (merge ~om-options {:target node#}))))))
  ([om-comp-fn initial-state]
   (when (utils/devcards-active?)
     `(om-root ~om-comp-fn ~initial-state {}))))

;; formatting for markdown cards

(defmacro pprint-str [obj]
  (when (utils/devcards-active?)
    `(devcards.util.utils/pprint-str ~obj)))

(defmacro pprint-code [obj]
  (when (utils/devcards-active?)
    `(devcards.util.utils/pprint-code ~obj)))

(defmacro mkdn-pprint-code [obj]
  (when (utils/devcards-active?)
    `(devcards.core/mkdn-code
      (devcards.util.utils/pprint-code ~obj))))

(defmacro mkdn-pprint-str [obj]
  (when (utils/devcards-active?)
    `(devcards.core/mkdn-code
      (devcards.util.utils/pprint-str ~obj))))
