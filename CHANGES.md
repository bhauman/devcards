## 0.2.0-6

* fixed some basic reagent issues
* **reagent breaking change** you can't supply bare reagent compoents to
  `devcards.core/reagent` You always need to pass a reagent element of
  the form [component ... args]
* **addeded `devcards.core/devcard-rg` as a shortcut to defining
  `(defcard title (dc/reagent [:div "hey"]))` which can now be
  expressed as `(defcard-rg title [:div "hey"])`
* improved reagent documentation - I could really use some more
  help with reagent docs

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

