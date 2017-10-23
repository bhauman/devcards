(ns devcards.iframe
  (:require
   [devcards.core :as devcards]
   [devcards.util.utils :as utils]))

(defmacro defcard-rg-iframe [& exprs]
  (when (utils/devcards-active?)
    (let [[vname docu main initial-data options] (devcards/parse-card-args exprs 'reagent-card)
          options (assoc options
                         :watch-atom false)]
      (devcards/card vname docu `(if (:standalone devcards.system/*devcard-data*)
                                   (devcards.core/reagent ~main {:heading false
                                                                 :no-top-margin true
                                                                 :hide-border true
                                                                 :hide-documentation true
                                                                 :history false
                                                                 :inspect-data false})
                                   (devcards.core/create-idevcard
                                     (let [opts# {:name ~(name vname)
                                                  :path (:path devcards.system/*devcard-data*)
                                                  :options ~options}]
                                       (devcards.iframe/devcard-iframe opts#))
                                     {:show-standalone-link true}))
                     initial-data options))))
