# Devcards

Devcards aims to provide ClojureScript developers with an interactive
visual REPL. Devcards makes it simple to interactively surface code
examples that have a visual aspect into a browser interface. 

Devcards is **not** a REPL, as it is driven by code that exists in
your source files, but it attempts to provide a REPL-like experience
by allowing developers to quickly try different code examples and
see how they behave in an actual DOM.

Devcards is centered around a notion of a *card*. Every card
represents some code to be displayed. Devcards provides an interface
which allows the developer navigate to different namespaces and view
the *cards* that have been defined in that namespace. 

When used in conjunction with [lein figwheel][leinfigwheel] the cards can be
created and edited **"live"** in the one's ClojureScript source
files.

[See the introduction video.](https://vimeo.com/97078905)

<img src="https://s3.amazonaws.com/bhauman-blog-images/devcards-action-shot.png"/>

For example, the following code will create a *card* for a Sablono
template that you might be working on:

```clojure
(defcard two-zero-48-view 
  (sab-card [:div.board 
              [:div.cells
                 [:div {:class "cell xpos-1 ypos-1"} 4]
                 [:div {:class "cell xpos-1 ypos-2"} 2]
                 [:div {:class "cell xpos-1 ypos-3"} 8]]]))
```

When used with [lein-figwheel][leinfigwheel], saving the file that
contains this definition will cause this Sablono template to be
rendered into the Devcards interface.

## Examples

Regardless of which path you take to get started with Devcards please
see the following examples:

[Examples of all the cards](https://github.com/bhauman/devcards/blob/master/example_src/devdemos/core.cljs)

[An example implementation of 2048](https://github.com/bhauman/devcards/blob/master/example_src/devdemos/two_zero.cljs)

## Super Quick Start

There is a Devcards Leinigen template to get you up an running quickly.

Make sure you have the [latest version of leinigen installed](https://github.com/technomancy/leiningen#installation).

Type the following to create a fresh project with devcards setup for you:

```
lein new devcards hello-world
```

Then

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

The code for the cards you are viewing in the devcards interface is
located in the `example_src` directory.

Go ahead and edit the code in the examples and see how the devcards
interface responds.

## Usage

First make sure you include the following `:dependencies` in your `project.clj` file.

```clojure
[org.clojure/clojurescript "0.0-2197"] ;; has to be at least 2197 or greater
[devcards "0.1.1-SNAPSHOT"]
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

The key things here are to pull in the Devcards requirements, provide
an element with a `devcards-main` **id** and require your compiled
ClojureScript. If you are using `figwheel` make sure you are using an
`:optimizations :none` build.

Next you will need to include the Devcards library in your
ClojureScript source file. 

```clojure
(ns example.core
  (:require
   [devcards.core :as dc :include-macros true])
  (:require-macros
   [devcards.core :refer [defcard]])))

(dc/start-devcard-ui!)

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

```clojure
(defcard markdown-example
  (dc/markdown-card 
    "### This is markdown yo
    
    This markdown is filtered so that it can be arbitrarily indented
    
    code blocks have to be delimited like so:
    ```
    (defn myfunc [] :some-code-here)
    ```
    "))
```

### devcards.core/om-root-card

The `om-root-card` has the same function signature as `om/root`. You
can use it to quickly display [Om](https://github.com/swannodette/om) components.

```clojure
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

```clojure
(defcard react-card-ex
   (dc/react-card (sablono/html [:h1 "I'm a react card."])))
```

### devcards.core/sab-card

The `sab-card` simply renders Sablono.

```clojure
(defcard react-card-ex
   (dc/sab-card [:h1 "I'm a react card."]))
```

### devcards.core/react-runner-card

The `react-runner-card` takes a function that takes an atom and
returns a React component. When the atom is changed it will trigger a
rerender.

This lets you quickly define React systems that have interactive behavior.

```clojure
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

```clojure
(defcard my-tests-ex
  (dc/test-card 
    "You can have Markdown in test cards"
    (dc/is   "'is' is an assertion")
    (dc/are= "'are=' is an equality test" "are= is an equlity test")
    (dc/are-not= "'are-not=' is an disequality test" "yep")))
```

### devcards.core/edn-card

The `edn-card` will display formatted EDN for inspection.

```clojure
(defn my-opaque-func []
   {:this "is"
    :EDN  "yeppers"})

(defcard inspect-opaque
  (dc/edn-card (my-opaque-func)))
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

```clojure
(defcard threed-fun
  (dc/slider-card
   identity
   {:rx (range 360)
    :ry (range 360)
    :rz (range 360)}
   :value-render-func cube-template))
```

## Creating your own cards

Creating your own cards for devcards is not difficult. There are two
main interfaces. There is a simple interface where you can just
define a function and have it be a card. Then there is a more advanced
version where you implement a few protocols.

Creating your own cards gives you a quick peak into how Devcards
works. Devcards keeps track of two major things for each card: a HTML
node and an atom to hold the data that the card will use.

### Function card API

You can create a card quickly by defining a function that takes a map.

For example this is a card:

```clojure
(defn silly-card []
  (fn [{:keys [node data-atom]}]
    (set! (.-innerHTML node) "<div>I'm a silly card</div>")))
```

And you can use it like this:

```clojure
(defcard silly-card-ex (silly-card))
```

### Protocols API

The protocols API allows you to hook into the devcards lifecycle so
that you can tear down and rebuild anything that needs to be rebuilt
when code is reloaded.

```clojure
(defn super-card [initial-state]
   (reify     
     devcards.system/IMount
     (mount [_ {:keys [node data-atom]}]
       (render-to (sab/html [:h1 "Super!"]) node))
     devcards.system/IUnMount
     (unmount [_ {:keys [node]}]
       (unmount-react node))
     devcards.system/IConfig
     (-options [_]
       { :unmount-on-reload false
         :initial-state initial-state })))
```

In the above example we are using the `IMount` protocol to define the
cards rendering code. The `IMount` Protocol is the only required protocol. 

We are using the `IUnMount` to define any clean up actions that are
needed before potentially destroying the node.

And the `IConfig` protocol is used to pass options for this card type.

The current `IConfig` options are:

* `:unmount-on-reload` default `true`; unmount is called on cards after
  a code reload and before they are rendered again with new code
* `:initial-state` default `{}`;  the initial state of the data atom for the card
* `:heading`  default `true`; whether to deisplay the heading for this card
* `:padding`  default `true`; whether or not to have css padding around the body of this card

## FAQ

#### Does Devcards only work with React or Om?

No it doesn't. At its core Devcards manages a raw HTML node and a
data atom for each card. Devcards works with anything you can put in a
node.

#### Does Devcards require Figwheel?

No, you can manually reload the browser after changing your code.
Devcards requires the figwheel client as a dependancy because if you do
decide to use figwheel it hooks into various events fired by the
figwheel client.

You could also integrate Devcards into a Browser REPL workflow
instead of using figwheel.

#### What do I do for deployment?

What pattern to use when working with Devcards is still an open question.

You can move all the cards into a different build similar to the
pattern used for testing in Clojure right now. Or you could start your
coding in this seperate build and then move completed code into your
main build as it matures.

I have been considering a **no-op** release of devcards so that you
can leave Devcards in your source code. I don't know if this is a good
idea but it might be worth a try. Does having the devcards make your
code easier to understand or is it more noisy with them in there?


[leinfigwheel]: https://github.com/bhauman/lein-figwheel

