(ns ^:figwheel-load devdemos.testing
  (:require
   [devcards.core :as dc :include-macros true]
   [cljs.test :as t :refer [report] :include-macros true]
   [sablono.core :as sab])
  (:require-macros
   [devcards.core :refer [defcard]]
   [cljs.test :refer [is testing]]))

(enable-console-print!)

(dc/deftest first-tests
  "## This is documentation
   It should work well"
  (testing "good stuff"
    (is (= (+ 3 4 55555) 4) "Testing the adding")
    (is (= (+ 1 0 0 0) 1) "This shouldn't work")
    (is (= 1 3))              
    (is false)
    (is (throw "heck")))
  "## And here is more documentation"
  (t/testing "bad stuff"
    (is (= (+ 1 0 0 0) 1))        
    (t/is (= (+ 3 4 55555) 4))
    (t/is false)
    (t/testing "mad stuff"
      (is (= (+ 1 0 0 0) 1))        
      (t/is (= (+ 3 4 55555) 4))
      (t/is false))))

#_(defcard namename
  (dc/edn-card
   (dc/run-test-block
    (fn []
      (t/testing "good stuff"
        (is (= (+ 1 0 0 0) 1))        
        (t/is (= (+ 3 4 55555) 4))
        (t/is false))))))

