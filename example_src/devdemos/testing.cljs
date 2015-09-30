(ns devdemos.testing
  (:require
   [devcards.core :as devcards]
   [cljs.test :as t :refer [report] :include-macros true]
   [sablono.core :as sab]
   [cljs.core.async :refer [<! timeout]])
  (:require-macros
   [cljs.core.async.macros :refer [go]]
   [devcards.core :as dc :refer [defcard]]
   [cljs.test :refer [is testing async]]))

(enable-console-print!)

#_(defcard doing-tests
  (sab/html "yeah"))

#_(defcard some-tests
  (dc/tests
   "## this should show up"
   (is (= 1 1))
   (is (= 1 2))))

(dc/deftest async-tester
  "## This is an async test
   You should see some tests here"
  (t/testing "yepo"
      (is (= (+ 3 4 55555) 4) "Testing the adding")
      (is (= (+ 1 0 0 0) 1) "This shouldn't work")
      (is (= 1 3))              
      (is true)
      (async done
             (go
               (<! (timeout 100))
               (is (= (+ 3 4 55555) 4) "Testing the adding")
               (is (= (+ 1 0 0 0) 1) "This shouldn't work now")
               #_(is (throw "heck"))
               (is (= 1 3))              
               (is true)

               (done))))
  "## And here is more documentation"
  (t/testing "bad stuff"
    (is (= (+ 1 0 0 0) 1))        
    (t/is (= (+ 3 4 55555) 4))
    (t/is false)
    (t/testing "mad stuff"
      (is (= (+ 1 0 0 0) 1))        
      (t/is (= (+ 3 4 55555) 4))
      (t/is false))))

(dc/deftest first-testers
  "## This is documentation
   It should work well"
  (testing "good stuff"
    (is (= (+ 3 4 55555) 4) "Testing the adding")
    (is (= (+ 1 0 0 0) 1) "This should work")
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








