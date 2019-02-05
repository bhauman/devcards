## 0.2.6 Updated for latest React 16.4

* requires `cljsjs/create-react-class` - you may need to exclude this
  along with `cljsjs/react` and `cljsjs/react-dom` if you are using
  npm dependencies
* should effortlessly support the latest reagent
* fixed outstanding issue that made it difficult to work with npm dependencies
* moved to `cljsjs/marked` instead of using showdown - I'm considering
  injecting a wrapped version of this lib so that it doesn't conflict
  if you happen to be using it from npm.
* fixed an edn rendering error caused by MapEntry changes
* fixed the 1024 buffer limitation, can be configured via `:closure-defines {devcards.core/card-buffer-size 10000}`
* added tool friendly way to opt-in to devcards via `:closure-defines {devcards.core/active true}`
* discoverd that `(set! (.-createClass (.-React goog.global)) create-react-class)` is a sweet 
  hack to get `omcljs/om` to work with latest React

## 0.2.1-7 Some reagent fixes

* Improved Reagent reloading PR #100
* removed woarnings on duplicate "is" tests PR #101

## 0.2.1-6

* Fixed a regression where Component local state was lost during reload
* refactored to accommodate Om Next extension
* fixed some React missing key warnings

## 0.2.1-5 Fixing minor dependency conflicts

* getting rid of dep conflicts 

## 0.2.1-4 Om Next Helpers

* bumping sablono deps
* Om Next helpers added by @anmonteiro
* more react warnings killed by @tristanstraub 

## 0.2.1-3

* markdown bullet indentation fix
* got rid of a bunch of React warnings
* fix printing JavaScript Symbols
* various documentation updates

## 0.2.1 React 14

* now depends on React 14
* fixing the `:watch-atom false` option 
* added the `:actual` output for failing tests
* allowing the config of default card options 

## 0.2.0-8 Improved Reagent support

* **added `devcards.core/devcard-rg`** as a shortcut to defining
  `(defcard title (dc/reagent [:div "hey"]))` which can now be
  expressed as `(defcard-rg title [:div "hey"])`
* improved Reagent documentation
  see: http://rigsomelight.com/devcards/#!/devdemos.reagent
  - I could really use some more help with Reagent docs
* **Reagent breaking change** you can no longer supply bare reagent components to
  `devcards.core/reagent` or `devcards.core/defcard-rg` You always
  need to pass a Reagent element of the form `[component ... args]`
  This makes reagent support consistent with the `defcard` api where you have to
  supply a ReactElement and not a component

## 0.2.0-7 Reagent support with bad bug

## 0.2.0-5

* isolated more css into the addons css - thanks to magnars
* a new `:classname` option to the devcard options that will be added
to the card body - thanks to codebeige
* bumped React version to 0.13.3-1
* added base support for React 14 - thanks to minimal
* made `start-devcard-ui*` public
* a bunch of documentation has been added to rigsomelight.com/devcards

## 0.2.0-2 First documented release

* Support for `cljs.test` async testing

