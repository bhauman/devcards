(ns devcards.util.utils
  (:require [cljs.env]))

(defn devcards-active? []
  (and cljs.env/*compiler*
       (when-let [{:keys [options]} @cljs.env/*compiler*]
         (or (:devcards options)
             (when-let [closure-defines (get options :closure-defines)]
               (or (get closure-defines "devcards.core.active")
                   (get closure-defines "devcards.core/active")))))))

(defn specify-react-class! [body]
  (let [constructor-fn (when-let [cf
                                  (->> body
                                       (filter #(= 'constructor (first %)))
                                       first)]
                         (->> cf rest (cons 'fn)))
        constructor-fn (if constructor-fn
                         `(fn [props#]
                            (cljs.core/this-as this#
                              (.call devcards.util.utils/react-holder.Component this# props#)
                              (.call ~constructor-fn this# props#)
                              this#))
                         `(fn [props#]
                            (cljs.core/this-as this#
                              (.call devcards.util.utils/react-holder.Component this# props#)
                              this#)))
        body (->> body
                  (remove #(= 'constructor (first %))))]
    `(let [ctor# ~constructor-fn]
       (goog.inherits ctor# devcards.util.utils/react-holder.Component)
       (cljs.core/specify! (.-prototype ctor#)
         ~'Object
         ~@body)
       ctor#)))

(defmacro define-react-class-once [vname & body]
  `(do
     (defonce ~vname ~(specify-react-class! body))
     (set! (.-displayName ~vname) (name '~vname))
     (cljs.core/specify! (.-prototype ~vname)
       ~'Object
       ~@(filter #('#{shouldComponentUpdate
                      componentWillReceiveProps
                      componentWillMount
                      componentDidMount
                      componentWillUpdate
                      componentDidUpdate
                      componentWillUnmount
                      render} (first %)) body))))

(defmacro define-react-class [vname & body]
  `(do
     (def ~vname ~(specify-react-class! body))
     (set! (.-displayName ~vname) (name '~vname))))
