(ns devdemos.edn-render
  (:require [devcards.core])
  (:require-macros
   [devcards.core :as dc :refer [defcard edn]]))


(defcard some-typical-nested-edn
  {:first (range 50)
   :sets (set (range 1000 1100))
   :vector (vec (range 1000 1100))
   :second (take 6 (repeat {:first-name "Bruce"
                            :last-name "Hauman"
                            :date (js/Date.)
                            :children (take 6 (repeat {:first-name "Bruce"
                                                       :last-name "Hauman"
                                                       :date (js/Date.)
                                                       :children (take 6 (repeat {:first-name "Bruce"
                                                                                  :last-name "Hauman"
                                                                                  :date (js/Date.)}))}))}))})
