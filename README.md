# Devcards

### Current release:

[![Clojars Project](https://clojars.org/devcards/latest-version.svg)](https://clojars.org/devcards)

Devcards aims to provide ClojureScript developers with an interactive
visual REPL. Devcards makes it simple to interactively surface code
examples that have a visual aspect into a browser interface. 

Devcards is **not** a REPL, as it is driven by code that exists in
your source files, but it attempts to provide a REPL-like experience
by allowing developers to quickly try different code examples and
see how they behave in an actual DOM.

Devcards is centered around a notion of a *card*. Every card
represents some code to be displayed. Devcards provides an interface
which allows the developer to navigate to different namespaces and view
the *cards* that have been defined in that namespace. 

When used in conjunction with [lein figwheel][leinfigwheel] the cards
can be created and edited **"live"** in one's ClojureScript source
files. Essentially lifting the code example out of the file into the
browser for you to try out immediately.

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

Read: [The Hard Sell](http://rigsomelight.com/devcards/#!/devdemos.core) 

[See the introduction video.](https://vimeo.com/97078905)

[See the Strange Loop talk.](https://www.youtube.com/watch?v=G7Z_g2fnEDg)

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
multiplier. You are **increasing the bandwidth of the feedback** you are
getting while working on your code.

Another problem is that we often manually place our components into
different **important** states to run them through their paces as we
develop them. But ... these test states are **ephemeral**. Wouldn't
it be better to **keep** a development "page" as a permanent asset
where these components are displayed in these various states as a

* a lab space for future development
* a code reference for new developers, and your future self
* a tool for QA and application testers

Developing your components in a different context than your main
application **starkly reveals environmental coupling**, in the same
way that unit tests often do. This can lead to developing components
that are more independent than the ones that are developed inside the
main app.

One more thing: developing your components in a SPA that isn't your
main application provides you a space to create and use visual
components that are intended to help you understand the code you are
working on. We are UI programmers after all, why wait for IDEs to
create the tools we need? Most problems are unique and can benefit
tremendously from the creation of a very thin layer of custom tooling.

Developing inside the main application is constraining and it isn't
until you develop inside a **meta application** that you can see this
more clearly. With a meta application, you now have a space to try
things out that **do not have to interface or fit into the main
application**. This is extremely important as it gives you space to
try new things without the cost that is currently associated with
experiments (branching, new html host file, etc).

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

Then visit `http://localhost:3449/cards.html`

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
[org.clojure/clojurescript "1.10.238"]
[devcards "0.2.5"]
```

You will need an HTML file to host the devcards interface. It makes
sense to have a separate file to host devcards. I would 
create the following `resources/public/cards.html` file (this is the same
file as in the leiningen template).


```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta charset="UTF-8">
    <link href="/css/example.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <script src="/js/compiled/example.js" type="text/javascript"></script>
  </body>
</html>
```

## Usage With Figwheel

[lein-figwheel](https://github.com/bhauman/lein-figwheel) 
is not required to use Devcards but it is definitely recommended
if you want to experience interactive coding with Devcards.
See the [lein-figwheel repo](https://github.com/bhauman/lein-figwheel)
for instructions on how to do that.

Configure your devcards build:

```clojure
:cljsbuild {
 :builds [
   {:id "devcards"
    :source-paths ["src"]   
    :figwheel { :devcards true } ;; <- note this
    :compiler { :main    "{{your lib name}}.core"
                :asset-path "js/compiled/devcards_out"
                :output-to  "resources/public/js/{{your lib name}}_devcards.js"
                :output-dir "resources/public/js/devcards_out"
                :source-map-timestamp true }}]
}                
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

## Usage without Figwheel

Figwheel does some magic so that Devcards can be included or excluded
from your code easily. You can certainly use Devcards without Figwheel,
but there are three things that you will need to do.

#### You need to specify `:devcards true` **in the build-options** of your ClojureScript build

```clojure
{ :main    "{{name}}.core"
  :devcards true ; <- note this
  :asset-path "js/compiled/devcards_out"
  :output-to  "resources/public/js/{{sanitized}}_devcards.js"
  :output-dir "resources/public/js/devcards_out"
  :source-map-timestamp true }
```

This is important as it is a signal to the `defcard` macro to render
the cards. This is equivalent to adding `:figwheel { :devcards true }` 
in our figwheel based build above, but since we aren't using figwheel
in this build adding the figwheel options doesn't help.

#### You will need to require `devcards.core` in the files that use devcards as such:

```clojure
(ns example.core
  (:require
   [devcards.core :as dc] ; <-- here
   [sablono.core :as sab]) ; just for this example
  (:require-macros
   [devcards.core :refer [defcard]])) ; <-- and here

(defcard my-first-card
  (sab/html [:h1 "Devcards is freaking awesome!"]))
```

This isn't required with Figwheel because it puts `devcards.core` into the
build automatically.

#### You will need to start the Devcards UI

```
(devcards.core/start-devcard-ui!)
```

Make sure this is included in the file you have specified as `:main` 
in your build options. As mentioned above, you don't want the Devcards UI to compete with
your application's UI so you will want to make sure it isn't getting
launched. 


## Devcards as a Standalone Website

Devcards can easily be hosted as a standalone website by following
steps similar to those needed to use it locally without figwheel.
In this example, we will be adding a `hostedcards` profile to build
our site.

#### Add `:devcards true` **to the build-options** of our ClojureScript build profile

```clojure
{:id "hostedcards"
 :source-paths ["src"]
 :compiler {:main "{{your lib name}}.core"
            :devcards true ; <- note this
            :asset-path "js/compiled/out"
            :output-to  "resources/public/js/compiled/{{your lib name}}.js"
            :optimizations :advanced}}
```

#### Require `devcards.core`in the files that use devcards

```clojure
(ns {{your lib name}}.core
  (:require
   [devcards.core :as dc]) 
  (:require-macros
   [devcards.core :refer [defcard]])) 
```

### Start the Devcards UI in {{your lib name}}.core
```clojure
(devcards.core/start-devcard-ui!)   
```

### Include the compiled JS in our HTML 

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/css/{{your lib name}}.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <div id="main-app-area"></div>
    <script src="/js/compiled/{{your lib name}}.js" type="text/javascript"></script>
  </body>
</html>
``` 


### Run our Build

`lein cljsbuild once hostedcards`

Once the build is complete, simply copy the contents of `resources\public` 
to your webserver and serve it up as you would any other page.

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

When working with devcards I often have three builds "devcards",
"dev", "prod".




[leinfigwheel]: https://github.com/bhauman/lein-figwheel

