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
  `(devcards.core/start-devcard-ui!*))

#_(defmacro start-single-card-ui! []
  (enable-devcards!)
  `(devcards.core/start-single-card-ui!*))

(defmacro do [& exprs]
  (when (utils/devcards-active?)
        `(do ~@exprs)))

(defmacro defcard*
  ([vname expr options]
   (when (utils/devcards-active?)
     (let [ns (-> &env :ns :name name munge)]
       `(devcards.core/register-card  [~(keyword ns) ~(keyword vname)] (fn [] ~expr) ~options))))
  ([vname expr]
   `(defcard* ~vname ~expr {})))

(defn card
  ([vname docu main-obj initial-data options]
   `(devcards.core/defcard* ~(symbol (name vname))
      (devcards.core/card-base ~main-obj)
      (assoc ~options
             :initial-data ~initial-data
             :documentation ~docu)))
  ([vname docu main-obj initial-data]
   (card vname docu main-obj initial-data {}))
  ([vname docu main-obj]
   (card vname docu main-obj {} {}))
  ([vname docu]
   (card vname docu `(fn [_ _] (sablono.core/html [:div])) {} {})))

(defn optional-name [exprs default-name]
  (if (instance? clojure.lang.Named (first exprs)) [(first exprs) (rest exprs)]
      [default-name exprs]))

(defn optional-doc [xs]
  (if (string? (first xs)) [(first xs) (rest xs)] [nil xs]))

(defmacro defcard [& expr]
  (when (utils/devcards-active?)
    (let [[vname xs] (optional-name expr 'card)
          [docu xs] (optional-doc xs)]
      (apply devcards.core/card (concat [vname docu] xs)))))

(defmacro doc [& body]
  (when (utils/devcards-active?)
    `(devcards.core/markdown->react ~@body)))

(defmacro edn [body]
  (when (utils/devcards-active?)
    `(devcards.util.edn-renderer/html-edn ~body)))

(defmacro doc-card [& exprs]
  (when (utils/devcards-active?)
    `(devcards.core/defcard doc-card
       (devcards.core/doc ~@exprs)
       {}
       {:heading false})))

(defmacro edn-card [& exprs]
  (let [[docu [body options]] (optional-doc exprs)]
    (devcards.core/card
     'edn-card
     docu 
     `(fn [something# data-atom#]
        (devcards.util.edn-renderer/html-edn @data-atom#))
     body
     `(merge {:heading false
              :history true}
             ~options))))

(defmacro deftest [vname & parts]
  (if (utils/devcards-active?)
    `(devcards.core/defcard* ~vname
       (devcards.core/test-card* ~@(map (fn [p] (if (string? p)
                                                 `(fn [] (devcards.core/test-doc ~p))
                                                 `(fn [] ~p))) parts))
       { :initial-data {:filter identity } })
    `(cljs.test/deftest ~vname
       ~@parts)))

(defmacro dom-node [body]
  (when (utils/devcards-active?)
    `(devcards.core/dom-node* ~body)))

(defmacro hist-recorder [body]
  (when (utils/devcards-active?)
    `(devcards.core/hist-recorder* ~body)))

(defmacro om-root
  ([om-comp-fn initial-data om-options]
   (when (utils/devcards-active?)
     `(dom-node
       (fn [node# _#]
         (om.core/root ~om-comp-fn ~initial-data (merge ~om-options {:target node#}))))))
  ([om-comp-fn initial-data]
   (when (utils/devcards-active?)
     `(om-root ~om-comp-fn ~initial-data {}))))

;; formatting for markdown cards

(defmacro pprint-str [obj]
  (when (utils/devcards-active?)
    `(devcards.util.utils/pprint-str ~obj)))

(defmacro pprint-code [obj]
  (when (utils/devcards-active?)
    `(devcards.util.utils/pprint-code ~obj)))

(defn mkdn-code [body] `(str "```\n" ~body "```\n"))

(defmacro mkdn-pprint-code [obj]
  (when (utils/devcards-active?)
    (mkdn-code
     `(devcards.util.utils/pprint-code ~obj))))

(defmacro mkdn-pprint-str [obj]
  (when (utils/devcards-active?)
    (mkdn-code
     `(devcards.util.utils/pprint-str ~obj))))
