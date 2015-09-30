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

In many cases you can just replace the call to the `cljs.test/deftest`
macro with the `devcards.core/deftest` macro and everything will work fine.

The `devcards.core/deftest` macro also emits standard `cljs.test`
tests so that you can run your tests with `cljs.test/run-tests` etc.

When you are not in the context of a `devcards` build
`devcards.core/deftest` will only emit the standard
`cljs.test/deftest` tests.

### Important

> You do not want to interleave testing runs.

`defcards.core/deftests` have an async aspect to their execution and
thus rely on a scheduler. This means that if you make a call to
`cljs.test/run-tests` at the top level of a file there is a real
possibility that your test runs will trample all over eachother.

If you want to schedule a standard `cljs.test` run in the same process
as your devcards tests you will need to have them run on after a safe
time interval has passed. I might include a way to schedule the
running of some standard tests on the scheduler in the future ...

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

Because during async tests excpetions and errors are a lot more
difficult to catch in the testing system each `devcards.core/deftest`
has an execution timeout. This allows us to render the tests that did
execute.

You can set this timeout in milliseconds as so:

```clojure
(set! devcards.core/test-timeout 800)
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

So this style of testing is available as well. This can be helpful if
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





