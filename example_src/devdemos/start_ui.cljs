(ns devdemos.start-ui
  (:require
   [devcards.core]
   [devdemos.defcard-api]
   [devdemos.om]
   [devdemos.two-zero]
   [devdemos.testing]
   [devdemos.errors]
   [devdemos.extentions]
   [devdemos.edn-render]
   [devdemos.core]))


(defn ^:export main []
  (devcards.core/start-devcard-ui!))
