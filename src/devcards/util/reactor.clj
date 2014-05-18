(ns devcards.util.reactor)

(defmacro pure [value children]
  `(devcards.util.reactor/Pure. (cljs.core/js-obj "value" ~value) (fn [] ~children)))
