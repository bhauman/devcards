(ns devdemos.start-ui
  (:require
   [devcards.core]
   [devdemos.defcard-api]
   [devdemos.om]
   [devdemos.source-code-display]
   [devdemos.two-zero]
   [devdemos.testing]
   [devdemos.errors]
   [devdemos.extentions]
   [devdemos.edn-render]
   [devdemos.css-opt-in]
   [devdemos.core]))


(defn ^:export main []
  (devcards.core/start-devcard-ui!))
