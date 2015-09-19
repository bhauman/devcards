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

When used in conjunction with [lein figwheel][leinfigwheel] the cards
can be created and edited **"live"** in one's ClojureScript source
files. Essentially lifting the code example out of the file into the
browser for you to try out immediately.

# Why???

We primarily design and iterate on our front end applications *inside*
the main application itself. In other words, our execution environment
is constrained by the shape and demands of the application we are
working on. This is extremely limiting.

This doesn't seem like a problem, eh?

Well think of it this way: the main application and its many
subcomponents can potentially embody a tremendous number of states. But
working against a single instance of the application only lets you
look at one state at a time. What if you could work on the application
or component in several states at the same time? This is a powerful
multiplier. You are increasing the bandwidth of the feedback you are
getting while working on your code.

Another problem is that we often manually place our components into
different **important** states to run them through their paces as we
develope them. But ... these test states are **ephemeral**. Wouldn't
it be better to **keep** a development "page" as a permanent asset
where these components are displayed in these various states as a

* a lab space for future development
* a code reference for new developers, and your future self
* a tool for QA and application testers

Developing inside the main application is constraining and it isn't
until you develop inside a larger application that you can see this
more clearly. With a meta application, you now have a space
to try things out that **do not have to interface or fit into the main
application**. This is extremely important as it gives you space to try new
things.

This is experiential. Until you actually try this its going to just
seem novel. However, the experience is compelling.

Devcards is one way to approach this problem.

Read: [The Hard Sell](http://rigsomelight.com/devcards/#!/devdemos.core) 

[See the introduction video.](https://vimeo.com/97078905)

<img src="https://s3.amazonaws.com/bhauman-blog-images/devcards-action-shot.png"/>

For example, the following code will create a *card* for a Sablono
template that you might be working on:

```clojure
(defcard two-zero-48-view 
  (sab/html
    [:div.board 
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

[Introduction examples](http://rigsomelight.com/devcards/#!/devdemos.core) ([src](https://github.com/bhauman/devcards/blob/master/example_src/devdemos/core.cljs))

[An example implementation of 2048](http://rigsomelight.com/devcards/#!/devdemos.two_zero) ([src](https://github.com/bhauman/devcards/blob/master/example_src/devdemos/two_zero.cljs))

[An introduction to the `defcard` api](http://rigsomelight.com/devcards/#!/devdemos.defcard_api) ([src](https://github.com/bhauman/devcards/blob/master/example_src/devdemos/defcard_api.cljs))

## Super Quick Start

There is a Devcards Leiningen template to get you up an running quickly.

Make sure you have the [latest version of leiningen installed](https://github.com/technomancy/leiningen#installation).

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

Then visit `http://localhost:3449/devcards.html`

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
[org.clojure/clojurescript "0.0-3308"]
[devcards "0.2.0-SNAPSHOT"]
```

lein figwheel is not required to use Devcards but ... if you want to
experience interactive coding with Devcards you will want to try it initially with 
[lein-figwheel](https://github.com/bhauman/lein-figwheel) configured.
See the [lein-figwheel repo](https://github.com/bhauman/lein-figwheel)
for instructions on how to do that.

Configure your devcards build:

```clojure
:cljsbuild {
 :builds [
   {:id "devcards"
    :source-paths ["src"]   
    :figwheel { :devcards true } ;; <- note this
    :compiler { :main    "{{name}}.core"
                :asset-path "js/compiled/devcards_out"
                :output-to  "resources/public/js/{{sanitized}}_devcards.js"
                :output-dir "resources/public/js/devcards_out"
                :source-map-timestamp true }}]
}                
```

You will need an HTML file to host the devcards interface. It makes
sense to have a separate file to host devcards. I would create the
following `resources/public/devcards/index.html` file.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta charset="UTF-8">
  </head>
  <body>
    <script src="js/compiled/example.js" type="text/javascript"></script>
  </body>
</html>
```

Next you will need to include the Devcards macros into your file:

```clojure
(ns example.core
  (:require
   [sablono.core :as sab]) ; just for example
  (:require-macros
   [devcards.core :refer [defcard]]))

(defcard my-first-card
  (sab/html [:h1 "Devcards is freaking awesome!"]))
```

This will create a card in the devcards interface.


Take a look at [the `defcard` api](http://rigsomelight.com/devcards/#!/devdemos.defcard_api) ([src](https://github.com/bhauman/devcards/blob/master/example_src/devdemos/defcard_api.cljs))

## FAQ

#### Does Devcards only work with React or Om?

Nope, it can work with arbitrary CLJS code examples as well. Devcards
provides a `dom-node` helper that will give you a node in the DOM to
display stuff in.

#### Does Devcards require Figwheel?

Devcards will work automatically with REPL workflow or boot-reload.

You can also just reload the browser after making a change.

#### What do I do for deployment?

Devcards has been rewritten so that you can write Devcards alongside
your code with no impact on your production code.

That being said it is often helpful to move the bulk of your cards to
a different buildpath that is only built when working on the **devcards**
build.

When working with devcards I oftern have three builds "devcards",
"dev", "prod".




[leinfigwheel]: https://github.com/bhauman/lein-figwheel

