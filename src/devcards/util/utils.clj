(ns devcards.util.utils
  (:require [cljs.env]))

(defn devcards-active? []
  (and cljs.env/*compiler*
       (get-in @cljs.env/*compiler* [:options :devcards])))
