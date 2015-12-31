(ns devdemos.errors
    (:require
     [devcards.core :as devcards]
     [sablono.core :as sab :include-macros true]
     [cljs.test :as t :include-macros true])
    (:require-macros
     [devcards.core :as dc :refer [defcard defcard-doc deftest dom-node]]))

(defcard
  "#Errors
   
   Below are examples of various failure scenarios for devcards.
   
   I use this to put various cards in bad states to see how the system
   responds.

   This is a good example of how to use devcards to great benefit.
   Make an **errors** page of devcards and put your components
   through the races.")

(defcard-doc (dc/doc "#this isn't is an error"))

(defcard hello)

(defcard "This should fall back to **pprint**"
  #js {:beetle "juice"})

(defcard
  "This should fall back to **pprint**"
  (to-array ["asdf" "asd"]))

(defcard #js {} #js {})

(defcard #js {} #js {} #js {})

(defcard (sab/html [:div "hello"]) {}
  { :frame 5
    :heading 5
    :padding 5
    :inspect-data 5
    :watch-atom 5
    :history 5 })
