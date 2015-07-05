# Devcards

# Devcards is currently under heavy development

> Expect a new release with many breaking changes within the week :)
> 6/28/15

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
created and edited **"live"** in one's ClojureScript source
files.

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

[Examples of all the cards](https://github.com/bhauman/devcards/blob/master/example_src/devdemos/core.cljs)

[An example implementation of 2048](https://github.com/bhauman/devcards/blob/master/example_src/devdemos/two_zero.cljs)

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
experience interactive coding with Devcards you will need to have
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
  (:require-macros
   [devcards.core :refer [defcard]])))

;; required ;)
(defcard my-first-card
  (dc/sab-card [:h1 "Devcards is freaking awesome!"]))
```



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

