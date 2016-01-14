(ns devcards.core
  (:require
   [devcards.util.utils :as utils]
   [cljs.compiler :refer (munge)]
   [cljs.analyzer :as ana]
   [cljs.analyzer.api :as ana-api]
   [cljs.repl]
   [cljs.test]
   [cljs.env]
   [clojure.pprint :refer [with-pprint-dispatch code-dispatch pprint]]
   [clojure.java.io :as io])
  (:refer-clojure :exclude (munge defonce)))

(defmacro start-devcard-ui!
  ([]
   `(devcards.core/start-devcard-ui!*))
  ([options]
   `(devcards.core/start-devcard-ui!* ~options)))

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

;; it's nice to have this low level card i think
(defmacro defcard*
  ([vname expr]
   (when (utils/devcards-active?)
     `(devcards.core/register-card  ~{:path (name->path &env vname)
                                      :func  `(fn [] ~expr)}))))

(defn card
  ([vname docu main-obj initial-data options]
   `(devcards.core/defcard* ~(symbol (name vname))
      (devcards.core/card-base 
       { :name          ~(name vname)
         :documentation ~docu
         :main-obj      ~main-obj
         :initial-data  ~initial-data
         :options       ~options})))
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

(defn merge-options [lit-opt-map options]
  `(merge ~lit-opt-map (devcards.core/assert-options-map ~options)))

(defn parse-card-args [xs default-name]
  (let [[vname docu main-obj initial-data options :as res]
        (parse-args xs default-name)]
    (if (= vname default-name)
      [vname docu main-obj initial-data (merge-options {:heading false} options)]
      res)))

(defmacro defcard [& expr]
  (when (utils/devcards-active?)
    (apply devcards.core/card (parse-card-args expr 'card))))

(defmacro dom-node [body]
  (when (utils/devcards-active?)
    `(devcards.core/dom-node* ~body)))

(defmacro hist-recorder [body]
  (when (utils/devcards-active?)
    `(devcards.core/hist-recorder* ~body)))

;; should probably get rid of this
;; there is a prize for a leaner api
(defmacro doc [& body]
  (when (utils/devcards-active?)
    `(devcards.core/markdown->react ~@body)))

;; should probably get rid of this as well
(defmacro edn [body]
  (when (utils/devcards-active?)
    `(devcards.util.edn-renderer/html-edn ~body)))

;; is this really needed now?
(defmacro defcard-doc [& exprs]
  (when (utils/devcards-active?)
    `(devcards.core/defcard (doc ~@exprs) {} {:hide-border true})))

;; this really needs to go now
(defmacro noframe-doc [& exprs]
  (when (utils/devcards-active?)
    `(devcards.core/defcard (doc ~@exprs) {} {:frame false})))

;; currently reflects the most common pattern for creating idevcards
;; currently to meant to only be consumed internally
(defmacro create-idevcard [main-obj-body default-options-literal]
  (when (utils/devcards-active?)
    `(reify devcards.core/IDevcardOptions
       (~'-devcard-options [this# devcard-opts#]
         (assoc devcard-opts#
                :main-obj ~main-obj-body
                
                :options (merge ~default-options-literal
                                (devcards.core/assert-options-map (:options devcard-opts#))))))))

;; testing

(defmacro tests [& parts]
  (when (utils/devcards-active?)
    `(devcards.core/test-card
                 ~@(map (fn [p] (if (string? p)
                                `(fn [] (devcards.core/test-doc ~p))
                                `(fn [] ~p))) parts))))

(defmacro deftest [vname & parts]
  `(do
     ~(when (utils/devcards-active?)
        `(devcards.core/defcard ~vname
           (devcards.core/tests ~@parts)))
     (cljs.test/deftest ~vname
        ~@parts)))

;; reagent helpers

(defmacro reagent [body]
  `(create-idevcard
    (let [v# ~body]
      (if (fn? v#)
        (fn [data-atom# owner#] (reagent.core/as-element (v# data-atom# owner#)))
        (reagent.core/as-element v#)))
    {}))

(defmacro defcard-rg [& exprs]
  (when (utils/devcards-active?)
    (let [[vname docu main initial-data options] (parse-card-args exprs 'reagent-card)]
      (card vname docu `(devcards.core/reagent ~main) initial-data (assoc
                                                                    options
                                                                    :watch-atom false)))))

;; om helpers

(defmacro om-root
  ([om-comp-fn om-options]
   (when (utils/devcards-active?)
     `(create-idevcard
       (devcards.core/dom-node*
        (fn [data-atom# node#]
          (om.core/root ~om-comp-fn data-atom#
                        (merge ~om-options
                               {:target node#}))))
       {:watch-atom true})))
  ([om-comp-fn]
   (when (utils/devcards-active?)
     `(om-root ~om-comp-fn {}))))

(defmacro defcard-om [& exprs]
  (when (utils/devcards-active?)
    (let [[vname docu om-comp-fn initial-data om-options options] (parse-card-args exprs 'om-root-card)]
      (card vname docu `(om-root ~om-comp-fn ~om-options) initial-data options))))

;; om next helpers

(defmacro om-next-root
  ([om-next-comp]
   (when (utils/devcards-active?)
     `(om-next-root ~om-next-comp nil {})))
  ([om-next-comp om-next-reconciler]
   (when (utils/devcards-active?)
     `(om-next-root ~om-next-comp ~om-next-reconciler {})))
  ([om-next-comp om-next-reconciler options]
   (when (utils/devcards-active?)
       `(devcards.core/OmNextDevcard.
          (let [state# (when-not (om.next/reconciler? ~om-next-reconciler)
                         (if (map? ~om-next-reconciler)
                           (atom ~om-next-reconciler)
                           (atom {})))
                reconciler# (if (om.next/reconciler? ~om-next-reconciler)
                              ~om-next-reconciler
                              (om.next/reconciler {:state state#
                                                   :parser (om.next/parser {:read (fn [] {:value state#})})}))]
            {:mount-fn #(om.next/add-root! reconciler# ~om-next-comp %)
             :data_atom (om.next/app-state reconciler#)
             :reconciler reconciler#
             :component ~om-next-comp})
        ~options))))

(defmacro defcard-om-next [& exprs]
  (when (utils/devcards-active?)
    (let [[vname docu om-next-comp om-next-reconciler options] (parse-card-args exprs 'om-next-root-card)]
      (card vname docu `(om-next-root ~om-next-comp ~om-next-reconciler) nil options))))

;; formatting for markdown cards

(defmacro pprint-str [obj]
  (when (utils/devcards-active?)
    `(devcards.util.utils/pprint-str ~obj)))

(defmacro pprint-code [obj]
  (when (utils/devcards-active?)
    `(devcards.util.utils/pprint-code ~obj)))

(defmacro mkdn-code [body] `(str "\n```clojure\n" ~body "\n```\n"))

(defmacro mkdn-pprint-code [obj]
  (when (utils/devcards-active?)
    `(mkdn-code
      (devcards.util.utils/pprint-code ~obj))))

(defmacro mkdn-pprint-source [obj]
  (when (utils/devcards-active?)
    `(mkdn-code
       ~(or (cljs.repl/source-fn &env obj) (str "Source not found")))))

(defmacro mkdn-pprint-str [obj]
  (when (utils/devcards-active?)
    `(mkdn-code
       (devcards.util.utils/pprint-str ~obj))))

(defmacro all-front-matter-meta [filter-keyword]
   (vec
    (filter
     (or filter-keyword :front-matter)
     (map
      (fn [x] (assoc (meta x)
                    :namespace `(quote ~x)
                    :munged-namespace `(quote ~(munge x))))
      (ana-api/all-ns)))))
