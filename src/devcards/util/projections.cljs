(ns devcards.util.projections)

(defn ds->seq
  "Renders a DataScript database in a way that Devcards can handle.

   Use this as the :render-fn parameter to `defcard-rg` when the devcards
   data atom is a DataScript database.

   Usage:
  (:require
   [devcards.util.projections :as prj])
  ...
   (defcard-rg my-card
     \"Doesn't do much.\"
     [:div]
     datascript-conn
     {:inspect-data true
      :history      true
      :projection   prj/ds->seq})"
  [db]
  (->> db
       (map (fn [d] {:e     (:e     d)
                     :a     (:a     d)
                     :v     (:v     d)
                     :tx    (:tx    d)
                     :added (:added d)}))))
