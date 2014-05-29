(ns devdemos.intro
  (:require
   [devcards.core :as dc :include-macros true]
   [devdemos.two-zero :as tz]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :refer [defcard are=]]))

#_(defcard intro
  (dc/markdown-card
   "
# Devcards

Devcards is a ClojureScript library that helps developers
interactively lift code examples out of their source files into an
organized set of cards in the browser.

## Code examples and feedback

A REPL allows us to interactively try different code examples and
validate that we understand their behavior. For programmers who are
used to this workflow, this interactive validation of expectations
starts to become a cornerstone of how they strategize and corner the
solution to a particular problem. This works very well for
referentially transparent data transformations. However, when you are
coding UIs for the browser you often want to verify things that
are graphical in nature.

Surfacing code examples in the REPL is fairly effortless. The cost of
trying different code examples is very low and thus the feedback loop
is pretty fast allowing us to adjust our assumptions about the domain.
When it comes to trying different code examples that have a display
characteristic this is not currently the case. The current flow for
changing and verifying behavior in the browser is normally constrained
to reloading and manipulating the main application that we are working
on. For example: we are writing a game, and we just changed some
behavior of the game and need to verify that the change worked. We
will have to interact with the game and put it into the specific state
that will validate that what we did worked. We are normally
constrained to working with **ONE** instance of the game. It doesn't
have to be this way, but currently the **cost** of creating different
examples in different states is often higher than just manually
manipulating the main application instance into state we are wanting
to check.

Thus constrained we are less likely to freely experiement but rather
continually run a cost benefit analysis in our heads as to whether
trying to validate a certain peice code is practical in our current
application enviroment. We end up writing longer stretches of code
without the value of feedback. I would go as far to say that this
alters the code we write, as we will be prejudiced towards
conservative tried and true patterns that will reduce the likelyhood
of having to repeatedly manipulate the main application into a certain
state over and over again.

This is an extreme divergence from the REPL experience where we can
try out different code examples with relative ease and low cost.

I am proposing a straight forward solution to this. A library that
allows us to easily compose code examples in our source files which
will be immediately presented to us in the browser. This library is
intended to bring the interactive nature of REPL coding to problems
that are graphical in nature.

For example, this library would make it effortless to display
several 2048 boards in different starting states and verify that they
are behaving as we would like.

"))

(defcard introo
  (dc/markdown-card
   "## Developing 2048"))

(defn one-row-board [reset-state data]
  (sab/html
   [:div.one-row-board
    (tz/game-board (vals @data))
    #_[:div [:a {:onClick (fn [] (tz/one-row-move :left data))} "left"]]
    #_[:div [:a {:onClick (fn [] (tz/one-row-move :right data))} "right"]]
    #_[:div [:a {:onClick (fn [] (swap! data (fn [_] reset-state)))} "reset"]]]))

(defn one-row-board-card [start-state]
  (dc/react-runner-card
   (partial one-row-board start-state)
   {:initial-state start-state}))

(defcard board-state-1
  (one-row-board-card
   {:t1 { :v 2 :top 0 :left 0 :id :t1}
    :t2 { :v 8 :top 0 :left 1 :id :t2}
    :t3 { :v 16 :top 0 :left 2 :id :t3}
    :t4 { :v 32 :top 0 :left 3 :id :t4}}))

(defcard convert-to-visible-tiles-card
  (dc/test-card
   (are= (tz/convert-to-visible-tiles
          [[:_ :_ :_ {:v 2 :id "t1"}]
           [:_ :_ :_ {:v 4 :id "t2"}]
           [:_ :_ :_ {:v 8 :id "t3"}]
           [:_ :_ :_ {:v 16 :id "t4"}]])
         [{:v 2, :id "t1", :top 0, :left 3}
          {:v 4, :id "t2", :top 1, :left 3}
          {:v 8, :id "t3", :top 2, :left 3}
          {:v 16, :id "t4", :top 3, :left 3}])
   (are= (tz/convert-to-visible-tiles
          [[:_ :_ :_ :_]
           [:_ :_ :_ :_]
           [:_ :_ :_ :_]
           [:_ :_ :_ :_]])
         [":"])))


(defcard board-state-2
  (one-row-board-card
   {:t1 { :v 2 :top 0 :left 0 :id :t1}
    :t2 { :v 4 :top 0 :left 1 :id :t2}
    :t3 { :v 4 :top 0 :left 2 :id :t3}
    :t4 { :v 2 :top 0 :left 3 :id :t4}}))

(defcard board-state-3
  (one-row-board-card
   {:t1 { :v 2 :top 0 :left 0 :id :t1}
    :t2 { :v 2 :top 0 :left 1 :id :t2}
    :t3 { :v 4 :top 0 :left 2 :id :t3}
    :t4 { :v 4 :top 0 :left 3 :id :t4}}))


(defcard intro2
  (dc/markdown-card
   "
## Cool, but wwwat?

So I wrote this library Devcards and its allows you to lift these code
examples into the browser. I'm sure you are wondering about what this
means concretely.

Let's say that you have created a template like so:

```
(defn my-hello [nm]
  (sablono/html [:div [:h1 \"Why hello there, \" nm]]))
```

You have a desire to see how the template is working so you type
this, underneath the above definition in your source file.

```
(defcard my-hello-example
  (react-card (my-hello \"Johnny\")))
```

The above statement will register a card named `my-hello-example` in
the devcards environment. You would then navigate to
`http://localhost:3449/devcards/index.html` and see a devcards UI that
looks like this:

:: image

In the root page of the Devcards UI can see the different namespaces
that have cards defined in them (you can define cards in any namespace).

You can then navigate to the namespace that you are currently working
in to see the cards that you have defined there.  You will see your
`my-hello-example` card there on the page like this.

:: image

You can define as many cards as you like to get a better view into
what you are doing as you are doing it. As long as you are using `lein
figwheel` each card you define will show up in the interface as you
define it and more importantly will react to code changes interactely
as well. Devcards were designed to provide a high degree of
interactivity.

`lein figwheel` isn't required to use devcards. You can manually reload
the page to see changes take effect but the experience of using Devcards with `lein figwheel` is pretty amazing.

### What's the setup? It sounds complicated

Devcards is just a client side library. You can get going by requiring
`devcards.core` into your project

If you want to use it interactively you need to be running `lein figwheel`.

"
   
   
   )
  )


