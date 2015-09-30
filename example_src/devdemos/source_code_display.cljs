(ns devdemos.source-code-display
  (:require
    [cljs.repl]
    [sablono.core :as sab :include-macros true])
  (:require-macros
    [devcards.core :as dc :refer [defcard defcard-doc mkdn-pprint-source]]))

(enable-console-print!)

(defn foo [x y z]
  "Returns the product of x y and z."
  (* x y z))

(defcard
  "# Source Code Display

  There are some situations, such as tutorials like this one, where you want
  to display some source code. And while you can certainly cut-and-paste that
  code into the `defcard` docstring, there is a better approach.

  Assume that you have defined a function named `foo`, and you would now like
  to display the source code for that function. How do you get the code into
  your card?")

(defcard
  "## Cut-And-Paste

  Here is an example where we just pasted the code directly into the docstring
  as markdown text.

  ```
  (defn foo [x y z]
    \"Returns the product of x y and z.\"
    (* x y z))
  ```

  The problem with this approach is that it is extra work and, more
  importantly, the code that we have pasted into the docstring will not stay in
  sync with any changes we make to the actual function definition.")

(defcard-doc
  "## mkdn-pprint-source

  Here we have used a cool macro to get the source for us."

  (dc/mkdn-pprint-source foo)

  "To get this same result we simply passed the `foo` function to the
   `dc/mkdn-pprint-source` macro. This only works inside of a `defcard-doc`,
   not a regular `defcard`. But it does solve our problem in that it will
   dynamically retrieve the source code for the `foo` function for us. The card
   looks something like this:
   ```clojure
   (defcard-doc
     \"## mkdn-pprint-source

     Here we have used a cool macro to get the source for us.\"

     (dc/mkdn-pprint-source foo)

     \"To get this same result ...\"
   ```

   Now we can continue to develop and refine our `foo` function without having
   to worry about making corresponding changes in our devcards.")

(defcard-doc
  "## Error Handling for mkdn-pprint-source

  Here we have tried to get the source for a function that does not exist."

  (dc/mkdn-pprint-source bar)

  "Above we simply passed the `bar` function to `dc/mkdn-pprint-source`. But
   `bar` is not recognized in this namespace.")

(defcard-doc
  "## Any Available Source

  Because the `mkdn-pprint-source` makes use of the `cljs.repl` to get the
  source code for an object, we can use it to display the source code for any
  object accessible to our current namespace. For example:"

  (dc/mkdn-pprint-source mkdn-pprint-source)

  "How's that for introspection? Or this:"

  (dc/mkdn-pprint-source defcard)

  "And one final example:"

  (dc/mkdn-pprint-source defcard-doc))

(defcard-doc
  "## Almost..."

  "For some reason it can find this (`cljs.repl/source`):"

  (dc/mkdn-pprint-source cljs.repl/source)

  "But not this (`cljs.repl/source-fn`):"

  (dc/mkdn-pprint-source cljs.repl/source-fn))
