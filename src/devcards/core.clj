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
        (fn [data-atom# owner#] (reagent.core/as-element [v# data-atom# owner#]))
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
  ([om-next-comp om-next-reconciler]
   (when (utils/devcards-active?)
     `(create-idevcard
       (devcards.core/dom-node*
        (fn [data-atom# node#]
          (let [state# (if (map? ~om-next-reconciler) (atom ~om-next-reconciler) data-atom#)
                reconciler# (if (om.next/reconciler? ~om-next-reconciler)
                              ~om-next-reconciler
                              (om.next/reconciler {:state state#
                                                   :parser (om.next/parser {:read (fn [] {:value data-atom#})})}))]
            (om.next/add-root! reconciler# ~om-next-comp node#))))
       {:watch-atom false})))
  ([om-next-comp]
   (when (utils/devcards-active?)
     `(om-next-root ~om-next-comp nil))))

(defmacro defcard-om-next [& exprs]
  (when (utils/devcards-active?)
    (let [[vname docu om-next-comp om-next-reconciler initial-data options] (parse-card-args exprs 'om-next-root-card)]
      (card vname docu `(om-next-root ~om-next-comp ~om-next-reconciler) initial-data options))))

;; Fulcro helpers

(defmacro fulcro-application
   "Embed an fulcro client application in a devcard. The `args` can be any args you'd
   normally pass to `new-fulcro-client` except for `:initial-state` (which is taken from
   InitialAppState or the card's data). The card's data (which must be a normalized db) will override InitialAppState if it is *not* empty.

   Your application will be placed in an atom at the symbol you specify.

   (defcard my-card
      (fulcro-application my-app-symbol UIRoot))
   "
            [app-sym root-ui & args]
   `(devcards.core/dom-node
      (fn [state-atom# node#]
        (cljs.core/defonce ~app-sym (atom (fulcro.client.core/new-fulcro-client :initial-state state-atom# ~@args)))
        (if (-> ~app-sym deref :mounted? not)
          (let [use-untangled-initial-state?# (-> state-atom# deref empty?)]
            (if (and use-untangled-initial-state?#
                  (fulcro.client.core/iinitial-app-state? ~root-ui))
              (reset! state-atom# (om.next/tree->db ~root-ui (fulcro.client.core/get-initial-state ~root-ui nil) true))
              state-atom#)
            (reset! ~app-sym (fulcro.client.core/mount (deref ~app-sym) ~root-ui node#)))
          (fulcro.client.core/mount (deref ~app-sym) ~root-ui node#))
        ; ensures shows app state immediately if you're using :inspect-data true...otherwise you don't see it until the first interaction.
        (js/setTimeout (fn [] (swap! state-atom# assoc :ui/react-key (fulcro.client.util/unique-key))) 100))))

(defmacro defcard-fulcro
   "Create a devcard with a full-blown Fulcro application. The arguments are identical to the devcard's
   defcard, and fulcro options can simply be added to that map under the :fulcro key as a map.

   NOTE: Normal Fulcro components are just React components and can be used with regular devcards. Use defcard-fulcro
   when you want a fully functional Fulcro (sub)application in a card.

   Initial state is handled as folows:

   1. The card's atom is always used to hold the state
   2. If you supply normal devcard state that is *not* empty, then it will be the state of the application,
   **even if** you use InitialAppState
   3. If the card's state atom starts empty, then InitialAppState will be used on card start

   Note that hot code reload works properly: that is to say that the application within the card will
   not reinitialize on hot code reload. If you want to update initial state or run the started-callback, then
   you must reload the page.

   NOTE: The fulcro application will be placed in an atom on a symbol that is named after the card: `cardname-fulcro-app`

   Examples:

   (defcard-fulcro my-card RootUI)

   ; with markdown doc
   (defcard-fulcro my-next-card ; app is in atom at my-next-card-fulcro-app
      \"# Markdown!\"
      RootUI)

   (defcard-fulcro my-other-card ; app is in atom at my-other-card-fulcro-app
      RootUI
      {} ; required, as initial atom, but empty, so InitialAppState used if present
      {:inspect-data true  ;devcard options
       :fulcro {:started-callback (fn [] (js/console.log \"Hello\"))}}) ; fulcro options

   (defcard-fulcro state-card ; app is in atom at state-card-fulcro-app
      RootUI
      {:a 1} ; FORCE initial state. Ignores InitialAppState
      {:inspect-data true})

   "
            [& exprs]
   (when (utils/devcards-active?)
     (let [[vname docu root-component initial-data options] (parse-card-args exprs 'fulcro-root-card)
           app-sym        (symbol (str (name vname) "-fulcro-app"))
           fulcro-kvpairs (seq (:fulcro options))
           fulcro-options (reduce concat fulcro-kvpairs)]
       (card vname docu `(fulcro-application ~app-sym ~root-component ~@fulcro-options) initial-data options))))

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
