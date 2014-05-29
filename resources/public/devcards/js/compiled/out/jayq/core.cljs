(ns jayq.core
  (:refer-clojure :exclude [val empty remove find next parents clone])
  (:require [clojure.string :as string]
            [cljs.reader :as reader]))

(defn crate-meta [func]
  (.-prototype._crateGroup func))

(defn ->selector [sel]
  (cond
   (string? sel) sel
   (fn? sel) (if-let [cm (crate-meta sel)]
               (str "[crateGroup=" cm "]")
               sel)
   (keyword? sel) (name sel)
   :else sel))

(defn $
  ([sel]
     (js/jQuery (->selector sel)))
  ([sel context]
     (js/jQuery (->selector sel) context)))

(extend-type js/jQuery

  ISeqable
  (-seq [this] (when (.get this 0)
                 this))
  ISeq
  (-first [this] (.get this 0))
  (-rest [this] (if (> (count this) 1)
                  (.slice this 1)
                  (list)))

  ICounted
  (-count [this] (.-length this))

  IIndexed
  (-nth
    ([this n]
       (when (< n (count this))
         (.slice this n (inc n))))
    ([this n not-found]
       (if (< n (count this))
         (.slice this n (inc n))
         (if (undefined? not-found)
           nil
           not-found))))

  ISequential

  ILookup
  (-lookup
    ([this k]
       (or (.slice this k (inc k)) nil))
    ([this k not-found]
       (-nth this k not-found)))

  IReduce
  (-reduce
    ([this f]
       (ci-reduce this f))
    ([this f start]
       (ci-reduce this f start)))

  IFn
  (-invoke
    ([this k]
       (-lookup this k))
    ([this k not-found]
       (-lookup this k not-found))))


(defn anim [$elem props dur]
  (.animate $elem (clj->js props) dur))

(defn text
  ([$elem]
     (.text $elem))
  ([$elem txt]
     (.text $elem txt)))

(defn css
  ([$elem opts]
     (.css $elem (clj->js opts)))
  ([$elem p v]
     (.css $elem (name p) v)))

(defn attr
  ([$elem n v]
     (.attr $elem (name n) v))
  ([$elem x]
     (.attr $elem (clj->js x))))

(defn prop
  ([$elem n v]
     (.prop $elem (name n) v))
  ([$elem x]
     (.prop $elem (clj->js x))))

(defn remove-attr [$elem a]
  (.removeAttr $elem (name a)))

(defn remove-prop [$elem a]
  (.removeProp $elem (name a)))

(defn data
  ([$elem]
     (.data $elem))
  ([$elem k] 
   (.data $elem (clj->js k)))
  ([$elem k v]
     (.data $elem (name k) (clj->js v))))

(defn add-class [$elem cl]
  (.addClass $elem (name cl)))

(defn remove-class [$elem cl]
  (.removeClass $elem (name cl)))

(defn toggle-class [$elem cl]
  (.toggleClass $elem (name cl)))

(defn has-class [$elem cl]
  (.hasClass $elem (name cl)))

(defn is [$elem selector]
  (.is $elem (->selector selector)))

(defn after [$elem content]
  (.after $elem content))

(defn before [$elem content]
  (.before $elem content))

(defn append [$elem content]
  (.append $elem content))

(defn prepend [$elem content]
  (.prepend $elem content))

(defn append-to [$elem target]
  (.appendTo $elem (->selector target)))

(defn prepend-to [$elem target]
  (.prependTo $elem (->selector target)))

(defn insert-before [$elem target]
  (.insertBefore $elem (->selector target)))

(defn insert-after [$elem target]
  (.insertAfter $elem (->selector target)))

(defn replace-with
  [$elem content]
  (.replaceWith $elem content))

(defn remove [$elem]
  (.remove $elem))

(defn hide [$elem & [speed on-finish]]
  (.hide $elem speed on-finish))

(defn show [$elem & [speed on-finish]]
  (.show $elem speed on-finish))

(defn toggle [$elem & [speed on-finish]]
  (.toggle $elem speed on-finish))

(defn fade-out [$elem & [speed on-finish]]
  (.fadeOut $elem speed on-finish))

(defn fade-in [$elem & [speed on-finish]]
  (.fadeIn $elem speed on-finish))

(defn slide-up [$elem & [speed on-finish]]
  (.slideUp $elem speed on-finish))

(defn slide-down [$elem & [speed on-finish]]
  (.slideDown $elem speed on-finish))

(defn siblings
  ([$elem]
     (.siblings $elem))
  ([$elem selector]
     (.siblings $elem (name selector))))

(defn parent [$elem]
  (.parent $elem))

(defn parents
  ([$elem]
     (.parents $elem))
  ([$elem selector]
     (.parents $elem (name selector))))

(defn parents-until
  ([$elem]
     (.parentsUntil $elem))
  ([$elem selector]
     (.parentsUntil $elem (->selector selector)))
  ([$elem selector filtr]
     (.parentsUntil $elem (->selector selector) (name filtr))))

(defn children
  ([$elem selector]
     (.children $elem (name selector)))
  ([$elem]
     (.children $elem)))

(defn next
  ([$elem]
     (.next $elem))
  ([$elem selector]
     (.next $elem (name selector))))

(defn prev
  ([$elem]
     (.prev $elem))
  ([$elem selector]
     (.prev $elem (name selector))))

(defn next-all
  ([$elem]
     (.nextAll $elem))
  ([$elem selector]
     (.nextAll $elem (name selector))))

(defn prev-all
  ([$elem]
     (.prevAll $elem))
  ([$elem selector]
     (.prevAll $elem (name selector))))

(defn next-until
  ([$elem]
     (.nextUntil $elem))
  ([$elem selector]
     (.nextUntil $elem (->selector selector)))
  ([$elem selector filtr]
     (.nextUntil $elem (->selector selector) (name filtr))))

(defn prev-until
  ([$elem]
     (.prevUntil $elem))
  ([$elem selector]
     (.prevUntil $elem (->selector selector)))
  ([$elem selector filtr]
     (.prevUntil $elem (->selector selector) (name filtr))))

(defn find [$elem selector]
  (.find $elem (name selector)))

(defn closest [$elem selector & [context]]
  (.closest $elem (->selector selector) context))

(defn clone [$elem]
  (.clone $elem))

(defn html
  ([$elem v]
     (.html $elem v))
  ([$elem]
     (.html $elem)))

(def ^{:deprecated "2.4.0"} inner html)

(defn empty [$elem]
  (.empty $elem))

(defn val
  ([$elem v]
     (.val $elem v))
  ([$elem]
     (.val $elem)))

(defn serialize [$elem]
  (.serialize $elem))

(defn queue
  ([$elem x y]
     (.queue $elem x y))
  ([$elem x]
     (.queue $elem x))
  ([$elem]
     (.queue $elem)))

(defn dequeue
  ([$elem queue-name]
     (.dequeue $elem queue-name))
  ([$elem]
     (.dequeue $elem)))

(defn document-ready [func]
  (.ready ($ js/document) func))

(defn ^:private mimetype-converter [s]
  (reader/read-string (str s)))

(.ajaxSetup js/jQuery
            (clj->js
             {:accepts {:edn "application/edn, text/edn"
                        :clojure "application/clojure, text/clojure"}
              :contents {"clojure" #"edn|clojure"}
              :converters
              {"text edn" mimetype-converter
               "text clojure" mimetype-converter}}))

(defn clj-content-type? [x]
  (re-find #"^(text|application)/(clojure|edn)" x))

(defn ->content-type
  [ct]
  (cond
    (string? ct) ct
    ;; we dont use name, just in case it comes with a ns ex:
    ;; :application/clojure
    (keyword? ct) (subs (str ct) 1)))

(defn preprocess-request
  [{:keys [data contentType]
    :as request}]
  (let [ct (->content-type contentType)]
    (-> request
        (#(if ct
            (assoc % :contentType ct)
            %))
        (#(if (clj-content-type? ct)
            (assoc % :data (pr-str data))
            %)))))

(defn ->ajax-settings
  [request]
  (-> request preprocess-request clj->js))

(defn ajax
  ([url settings]
     (.ajax js/jQuery url (->ajax-settings settings)))
  ([settings]
     (.ajax js/jQuery (->ajax-settings settings))))

(defn xhr [[method uri] content callback]
  (let [params (clj->js {:type (string/upper-case (name method))
                         :data (clj->js content)
                         :success callback})]
    (.ajax js/jQuery uri params)))

(defn read
  "Reads clojure data from element content (preferably a script tag with type=edn/clojure)"
  [$elem]
  (-> $elem html reader/read-string))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Events
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn bind [$elem ev func]
  (.bind $elem (name ev) func))

(defn unbind [$elem ev & [func]]
  (.unbind $elem (name ev) func))

(defn trigger [$elem ev]
  (.trigger $elem (name ev)))

(defn delegate [$elem sel ev func]
  (.delegate $elem (->selector sel) (name ev) func))

(defn ->event [e]
  (if (coll? e)
    (string/join " " (map name e))
    (clj->js e)))

(defn on [$elem events & [sel data handler]]
  (.on $elem
       (->event events)
       (->selector sel)
       data
       handler))

(defn one [$elem events & [sel data handler]]
  (.one $elem
        (->event events)
        (->selector sel)
        data
        handler))

(defn off [$elem events & [sel handler]]
  (.off $elem
        (->event events)
        (->selector sel)
        handler))

(defn prevent [e]
  (.preventDefault e))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Dimensions & Offset
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn height
  ([$elem x]
     (.height $elem x))
  ([$elem]
     (.height $elem)))

(defn width
  ([$elem x]
     (.width $elem x))
  ([$elem]
     (.width $elem)))

(defn inner-height
  [$elem]
  (.innerHeight $elem))

(defn inner-width
  [$elem]
  (.innerWidth $elem))

(defn outer-height
  [$elem]
  (.outerHeight $elem))

(defn outer-width
  [$elem]
  (.outerWidth $elem))

(defn offset
  ([$elem coords]
     (.offset (clj->js coords)))
  ([$elem]
     (js->clj (.offset $elem) :keywordize-keys true)))

(defn offset-parent
  [$elem]
  (.offsetParent $elem))

(defn position [$elem]
  (js->clj (.position $elem) :keywordize-keys true))

(defn scroll-left
  ([$elem]
     (.scrollLeft $elem))
  ([$elem x]
     (.scrollLeft $elem x)))

(defn scroll-top
  ([$elem]
     (.scrollTop $elem))
  ([$elem x]
     (.scrollTop $elem x)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Deferred
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(def $deferred js/jQuery.Deferred)
(def $when js/jQuery.when)

(defn then
  ([deferred done-fn fail-fn]
     (.then deferred
            (clj->js done-fn)
            (clj->js fail-fn)))
  ([deferred done-fn fail-fn progress-fn]
     (.then deferred
            (clj->js done-fn)
            (clj->js fail-fn)
            (clj->js progress-fn))))

(defn done
  [deferred & fns-args]
  (.apply (.-done deferred)
          deferred
          (clj->js fns-args)))

(defn fail
  [deferred & fns-args]
  (.apply (.-fail deferred)
          deferred
          (clj->js fns-args)))

(defn progress
  [deferred fns-args]
  (.progress deferred (clj->js fns-args)))

(defn promise
  ([deferred]
     (.promise deferred))
  ([deferred type]
     (.promise deferred type))
  ([deferred type target]
     (.promise deferred type target)))

(defn always
  [deferred & fns-args]
  (.apply (.-always deferred)
          deferred
          (clj->js fns-args)))

(defn reject
  [deferred args]
  (.reject deferred args))

(defn reject-with
  [deferred context args]
  (.rejectWith deferred context args))

(defn notify
  [deferred args]
  (.notify deferred args))

(defn notify-with
  [deferred context args]
  (.notifyWith deferred context args))

(defn resolve
  [deferred args]
  (.resolve deferred args))

(defn resolve-with
  [deferred context args]
  (.resolveWith deferred context args))

(defn pipe
  ([deferred done-filter]
     (.pipe deferred done-filter))
  ([deferred done-filter fail-filter]
     (.pipe deferred done-filter fail-filter))
  ([deferred done-filter fail-filter progress-filter]
     (.pipe deferred done-filter fail-filter progress-filter)))

(defn state
  [deferred]
  (keyword (.state deferred)))

(def deferred-m
  {:return $when
   :bind (fn [x f]
           (let [dfd ($deferred)]
             (done x (fn [v]
                       (done (f v) (partial resolve dfd))))
             (promise dfd)))
   :zero identity})

(def ajax-m
  {:return identity
   :bind (fn [x f]
           (done (ajax x) f))
   :zero identity})
