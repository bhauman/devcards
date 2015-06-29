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

(defn get-ns [env]
  (-> env :ns :name name munge))

(defn name->path [env vname]
  [(keyword (get-ns env)) (keyword vname)])

(defmacro defcard*
  ([vname expr options]
   (when (utils/devcards-active?)
     `(devcards.core/register-card  ~{:path (name->path &env vname)
                                      :func  `(fn [] ~expr)})))
  ([vname expr]
   `(defcard* ~vname ~expr {})))

(defn card
  ([vname docu main-obj initial-data options]
   `(devcards.core/defcard* ~(symbol (name vname))
      (devcards.core/card-base
       (assoc ~options
              :name          ~(name vname)
              :documentation ~docu
              :react-or-fn   ~main-obj
              :initial-data  ~initial-data))))
  ([vname docu main-obj initial-data]
   (card vname docu main-obj initial-data {}))
  ([vname docu main-obj]
   (card vname docu main-obj {} {}))
  ([vname docu]
   (card vname docu nil {} {})))

(defn optional-name [exprs default-name]
  (if (instance? clojure.lang.Named (first exprs)) [(first exprs) (rest exprs)]
      [default-name exprs]))

(defn optional-doc [xs]
  (if (string? (first xs)) [(first xs) (rest xs)] [nil xs]))

(defn parse-args [xs default-name]
  (let [[vname xs] (optional-name xs default-name)
        [docu xs]  (optional-doc xs)]
    (concat [vname docu] xs)))

(defn parse-card-args [xs default-name]
  (let [[vname docu main-obj initial-data options :as res]
        (parse-args xs default-name)]
    (if (= vname default-name)
      [vname docu main-obj initial-data `(merge {:heading false} ~options)]
      res)))

(defmacro defcard [& expr]
  (when (utils/devcards-active?)
    (apply devcards.core/card (parse-card-args expr 'card))))

(defmacro doc [& body]
  (when (utils/devcards-active?)
    `(devcards.core/markdown->react ~@body)))

(defmacro edn [body]
  (when (utils/devcards-active?)
    `(devcards.util.edn-renderer/html-edn ~body)))

(defmacro defcard-doc [& exprs]
  (when (utils/devcards-active?)
    `(devcards.core/defcard 
       (devcards.core/doc ~@exprs))))

;; name is required
(defmacro defcard-edn [& exprs]
  (when (utils/devcards-active?)
    (let [[vname docu edn-body options] (parse-args exprs 'edn-card)]
      (devcards.core/card
       vname
       docu 
       `(fn [something# data-atom#]
          (devcards.util.edn-renderer/html-edn @data-atom#))
       edn-body
       `(merge {:history true} ~options)))))

(defmacro deftest [vname & parts]
  (if (utils/devcards-active?)
    `(do
       (devcards.core/defcard* ~vname
         (devcards.core/test-card* ~@(map (fn [p] (if (string? p)
                                                   `(fn [] (devcards.core/test-doc ~p))
                                                   `(fn [] ~p))) parts)))
       (cljs.test/deftest ~vname
         ~@parts))))

(defmacro dom-node [body]
  (when (utils/devcards-active?)
    `(devcards.core/dom-node* ~body)))

(defmacro hist-recorder [body]
  (when (utils/devcards-active?)
    `(devcards.core/hist-recorder* ~body)))

(defmacro om-root
  ([om-comp-fn om-options]
   (when (utils/devcards-active?)
     `(dom-node
       (fn [node# data-atom#]
         (om.core/root ~om-comp-fn data-atom# (merge ~om-options {:target node#}))))))
  ([om-comp-fn]
   (when (utils/devcards-active?)
     `(om-root ~om-comp-fn {}))))

(defmacro defcard-om [& exprs]
  (when (utils/devcards-active?)
    (let [[vname docu om-comp-fn initial-data om-options options] (parse-args exprs 'om-root-card)]
      (card vname docu `(om-root ~om-comp-fn ~om-options) initial-data
            `(merge {:watch-atom false} ~options)))))

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
