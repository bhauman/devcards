(ns devcards.core
  (:require
   [cljs.compiler :refer (munge)]
   [clojure.pprint :refer [with-pprint-dispatch code-dispatch pprint]]
   [clojure.java.io :as io])
  (:refer-clojure :exclude (munge defonce)))

(defmacro defcard
  [vname expr]
  (let [ns (-> &env :ns :name name munge)]
    `(devcards.core/register-card  [~(keyword ns) ~(keyword vname)]
                                   (devcards.system/get-options ~expr)
                                   (fn [] ~expr))))

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

(defmacro markdown [name & body]
  `(devcards.core/defcard ~name
     (devcards.core/markdown-card ~@body)))

(defmacro sablono
  ([name body]
     `(devcards.core/defcard ~name
        (devcards.core/sab-card ~body)))
  ([name body options]
     `(devcards.core/defcard ~name
        (devcards.core/sab-card ~body ~options))))

(defmacro edn [name body]
  `(devcards.core/defcard ~name
     (devcards.core/edn-card ~body)))

(defmacro react
  ([name body]
     `(devcards.core/defcard ~name
        (devcards.core/react-card ~body)))
  ([name body options]
     `(devcards.core/defcard ~name
        (devcards.core/react-card ~body ~options))))

(defmacro react-runner
  ([name body]
     `(devcards.core/defcard ~name
        (devcards.core/react-runner-card ~body)))
  ([name body options]
     `(devcards.core/defcard ~name
        (devcards.core/react-runner-card ~body ~options))))

(defmacro om-root
  ([name om-comp-fn initial-state om-options devcard-options]
     `(devcards.core/defcard ~name
        (devcards.core/om-root-card ~om-comp-fn ~initial-state ~om-options ~devcard-options)))
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
