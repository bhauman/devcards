(ns devdemos.testing
  (:require
   [devcards.core :as devcards]
   [cljs.test :as t :refer [report] :include-macros true]
   [sablono.core :as sab]
   [cljs.core.async :refer [<! timeout]])
  (:require-macros
   [cljs.core.async.macros :refer [go]]
   [devcards.core :as dc :refer [defcard defcard-doc]]
   [cljs.test :refer [is testing async]]))

(enable-console-print!)


(defcard-doc
  "## Devcards and testing with `cljs.test`
You can use the `devcards.core/deftest` macro to define `cljs.test` compatible tests.

You can port your tests to Devcards by just replacing the calls to
`cljs.test/deftest` with calls to the `devcards.core/deftest` macro
and everything should work fine.

In addition to creating a Devcards test card the
`devcards.core/deftest` macro also emits standard `cljs.test` tests so
that you can interact with your test suite in the same manner that you
currently do.

When you are not in the context of a `devcards` build
`devcards.core/deftest` will only emit the standard
`cljs.test/deftest` tests.

### Important

> You do not want to interleave testing runs!

Tests defined with `defcards.core/deftest`run asynchronously and rely
on a scheduler. If you make a call to `cljs.test/run-tests` while the
tests in the cards are running there is a real possibility that your
test runs will trample all over eachother.

If you want to schedule a standard `cljs.test` test run in the same
process as the Devcards tests are running in, you will need to have
them run on after a safe time interval has passed to prevent
interleaving test executions. (I might include a way to schedule the
running of some standard tests on the scheduler in the future ...)

The following is an example of using `devcards.core/deftest` 
"
  (dc/mkdn-pprint-code
   '(deftest first-testers
  "## This is documentation
   It should work well"
  (testing "good stuff"
    (is (= (+ 3 4 55555) 5) "Testing the adding")
    (is (= (+ 1 0 0 0) 1) "This should work")
    (is (= 1 3))              
    (is false)
    (is (throw "heck"))
    (is (js/asdf)))
  "## And here is more documentation"
  (testing "bad stuff"
    (is (= (+ 1 0 0 0) 1))        
    (is (= (+ 3 4 55555) 4))
    (is false)
    (testing "mad stuff"
      (is (= (+ 1 0 0 0) 1))        
      (is (= (+ 3 4 55555) 4))
      (is false)))))

  "And you can see this rendered below:")

(dc/deftest first-testers
  "## This is documentation
   It should work well"
  (testing "good stuff"
    (is (= (+ 3 4 55555) 5) "Testing the adding")
    (is (= (+ 1 0 0 0) 1) "This should work")
    (is (= 1 3))              
    (is false)
    (is (throw "heck"))
    (is (js/asdf)))
  "## And here is more documentation"
  (testing "bad stuff"
    (is (= (+ 1 0 0 0) 1))        
    (is (= (+ 3 4 55555) 4))
    (is false)
    (testing "mad stuff"
      (is (= (+ 1 0 0 0) 1))        
      (is (= (+ 3 4 55555) 4))
      (is false))))

(defcard "## Checking the case where there are no tests

Just creating an exmple to display the empty case where no tests are
supplied to `devcards.core/deftest`.

```clojure
(devcards.core/deftest no-tests)
```

When you pass 0 tests to `devcards.core/deftest`
it should just render a heading with a counter of zero.
")

(dc/deftest no-tests)

(defcard
  "# Async testing

Devcards supports standard `cljs.test` async testing. 

If you look at the source for the examples below you will see async
testing in use.

During async tests exceptions and errors are much more difficult to
catch in the testing system each. For this reason
`devcards.core/deftest` has an execution timeout, that will add an
error indicating that the execution of the tests did not complete in
time. This allows us to continue on with the rest of the tests even
when an exception interupts the process. There is a chance that the
timeout is too small for your tests, this can cause test run
interleaving which can corrupt your test results.

In this case you will want to increase the timeout.

You can set the timeout in milliseconds as so:

```clojure
(set! devcards.core/test-timeout 800) ;; 800 is the default value
```

You can see an example of this below.

Notice that the last test says `Error: Tests timed out.` This normally
indicates that your async tests threw an exception.

All the tests after that exception will not be run.
")

(set! devcards.core/test-timeout 800)

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
               (is (= (+ 1 0 0 0) 1) "This shouldn't work")
               (is (throw "heck")) ;; all the tests from here down
               ;; will not be rendered
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



(defcard
  "## Using the `devcards.core/tests` macro

The `devcards.core/deftest` macro emits the following form 

```clojure
(defcard my-test-card
  (devcards.core/tests ... standard cljs tests ...))
```

You can use the `devcards.core/tests` macro directly.  This can be helpful if
you are not wanting to emit the standard `cljs.test/deftest` tests as
well as the devcard tests.

The following example shows this usage:

```clojure
(defcard some-tests
  (dc/tests
   \"## this should show up\"
   (is (= 1 1))
   (is (= 1 2))))
```
")


(defcard some-tests
  (dc/tests
   "## this should show up"
   (is (= 1 1))
   (is (= 1 2))))





