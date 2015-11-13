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

