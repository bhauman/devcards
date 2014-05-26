# Devcards

Devcards helps ClojureScript developers surface graphical artifacts
quickly so that they can experience a graphical interactive workflow.
Devcards are somewhat like iPython Notebook or Gorilla REPL in that
they provide version of a visual REPL. In contrast to these browser
based editing environments Devcards are interactively produced from
code that you are editing in your source files using your favorite editor.

For example this code will surface an html template that you might be
mocking up:

```clojure
(defcard two-zero-48-view 
  (sab-card [:div.board 
              [:div.cells
                 [:div {:class "cell xpos-1 ypos-1"} 4]
                 [:div {:class "cell xpos-1 ypos-2"} 2]
                 [:div {:class "cell xpos-1 ypos-3"} 8]]]))
```

When used with lein figwheel, saving the file that contains this
definition will cause this sablono template rendered in the devcards
interface.

## Super Quick Start

There is a Devcards Leinigen template to get you up an running quickly.

Make sure you have the [latest version of leinigen installed](https://github.com/technomancy/leiningen#installation).

Type the following to create a fresh project with devcards setup for you:

```
lein new devcards hello-world
```

Then run

```
cd hello-world

lein figwheel
```

to start the figwheel interactive devserver.

Then visit `http://localhost:3449/devcards/index.html`

## Quick Trial

If you want to quickly interact with a bunch of devcards demos:

```
git clone https://github.com/bhauman/devcards.git

cd devcards

lein figwheel
```

Then visit `http://localhost:3449/devcards/index.html`

The code for cards you see in the devcards interface is located in the
`example_src` directory.

Go ahead and edit the code in the examples and see how the devcards
interface responds.

## Usage

First make sure you include the following `:dependencies` in your `project.clj` file.

```clojure
[org.clojure/clojurescript "0.0-2197"] ;; has to be at least 2197 or greater
[devcards "0.1.0-SNAPSHOT"]
```

lein figwheel is not required to use Devcards but ... if you want to
experience interactive coding with Devcards you will need to have
[lein-figwheel](https://github.com/bhauman/lein-figwheel) configured.
See the [lein-figwheel repo](https://github.com/bhauman/lein-figwheel)
for instructions on how to do that.

Devcards is extremely new so the patterns for using it are completely
up in the air. I am going to show you the very least you need to setup to
get devcards running.

You will need an HTML file to host the devcards interface. It makes
sense to have a separate file to host devcards. I would create the
following `resources/public/devcards/index.html` file.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="//fb.me/react-0.9.0.js"></script>
    <script src="//code.jquery.com/jquery-1.11.0.js"></script>
    <!-- This showdown has been modified a tiny bit -->
    <script src="//rigsomelight.com/devcards/devcards-assets/showdown.js"></script>

    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" 
          rel="stylesheet" type="text/css">
    <link href="//rigsomelight.com/devcards/devcards-assets/devcards.css" 
          rel="stylesheet" type="text/css">
    <link href="//rigsomelight.com/devcards/devcards-assets/rendered_edn.css"
          rel="stylesheet" type="text/css">
  </head>
  <body>
    <div id="devcards-main">
    </div>
    <script src="js/compiled/out/goog/base.js" type="text/javascript"></script>
    <script src="js/compiled/example.js" type="text/javascript"></script>
    <script type="text/javascript">goog.require("example.core");</script>
  </body>
</html>
```

The key things here are to pull in the devcards requirements, provide
an element with a `devcards-main` and require your compiled
ClojureScript. If you are using `figwheel` make sure you are requiring
an `:optimizations :none` build.

Next you will need to include the Devcards library in your
ClojureScript source file. 

```
(ns example.core
  (:require
   [devcards.core :as dc :include-macros true])
  (:require-macros
   [devcards.core :refer [defcard])))

(dc/start-devcards-ui!)

;; optional
(dc/start-figwheel-reloader!)

;; required ;)
(defcard my-first-card
  (dc/sab-card [:h1 "Devcards is freaking awesome!"]))
```

## The predefined cards

Devcards has several predefined cards. Cards are just functions so you
can compose new cards from these base cards.

### devcards.core/markdown-card

The `markdown-card` is just there to surface documentation into devcards interface.

```
(defcard markdown-example
  (dc/markdown-card 
    "### This is markdown yo
    
    This markdown is filtered so that it can be arbitrarily indented
    
    code blocks have to be delimited like so:
    ```
    (defn myfunc [] "this is code")
    ```
    "))
```

### devcards.core/om-root-card

The `om-root-card` has the same function signature as `om/root`. You
can use it to quickly display om components.

```
(defn widget [data owner]
  (reify
    om/IRender
    (render [this]
      (sablono/html [:h2 "This is an om card, " (:text data)]))))

(defcard omcard-ex
    (dc/om-root-card widget {:text "yozers"}))
```

### devcards.core/react-card

The `react-card` simply renders a React component. This is the base
for many cards since React components compose so well.

```
(defcard react-card-ex
   (dc/react-card (sablono/html [:h1 "I'm a react card."])))
```

### devcards.core/react-runner-card

The `react-runner-card` takes a function that takes an atom and
returns a React component. When the atom is changed it will trigger a
rerender.

This lets you quickly define React systems that have interactive behavior.

```
(defn my-react-app [data-atom]
      (sablono/html
       [:div
         [:h1 "Count " (:count @data-atom)]
         [:a {:onClick (fn [e] (swap! data-atom update-in [:count] inc)) } "Inc"]]))

(defcard my-react-runner-ex
   (dc/react-runner-card my-react-app {:initial-state {:count 50}}))
```

### devcards.core/test-card

The `test-card` lets you define a group of tests.

```
(defcard my-tests-ex
  (dc/test-card 
    "You can have Markdown in test cards"
    (dc/is   "'is' is an assertion")
    (dc/are= "'are=' is an equality test" "are= is an equlity test")
    (dc/are-not= "'are-not=' is an disequality test" "yep")))
```

### devcards.core/edn-card

The `edn-card` will display formatted EDN for inspection.

```
(defn my-opaque-func []
   {:this "is"
    :EDN  "yeppers"})

(defcard inspect-opaque
  (edn-card (my-opaque-func)))
```

### decards.core/slider-card

The `slider-card` allows you to define a series of sliders over ranges
of inputs.  

The first argument to the `slider-card` is a function that will
receive a map of the current value of the sliders. The return value of
this function will be rendered with the `dc/edn->html` renderer. 

The second argument is a map where the labels are the value keys and
the values are sequences of values to be chosen by the slider.

There is an optional keyword argument `:value-render-func` that can be
associate with a function that will be passed result of first function
arg and should return a react component.

```
(defcard threed-fun
  (dc/slider-card
   identity
   {:rx (range 360)
    :ry (range 360)
    :rz (range 360)}
   :value-render-func cube-template))
```

## Creating your own cards



   

         








