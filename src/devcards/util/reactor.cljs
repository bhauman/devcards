(ns devcards.util.reactor
  (:require
   [cljsjs.react]))

(def Pure
  (.createClass js/React
    (js-obj
      "shouldComponentUpdate"
      (fn [next-props next-state]
        (this-as this
                 (not (= (.. this -props -value)
                         (.-value next-props)))))
      "render"
      (fn []
        (this-as this
                 ((.. this -props -children)))))))
