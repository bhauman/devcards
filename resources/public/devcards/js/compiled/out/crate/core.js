// Compiled by ClojureScript 0.0-2202
goog.provide('crate.core');
goog.require('cljs.core');
goog.require('crate.util');
goog.require('crate.util');
goog.require('crate.compiler');
goog.require('crate.compiler');
goog.require('goog.dom');
goog.require('goog.dom');
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.raw = (function raw(html_str){return goog.dom.htmlToDocumentFragment(html_str);
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){var res = cljs.core.map.call(null,crate.compiler.elem_factory,tags);if(cljs.core.truth_(cljs.core.second.call(null,res)))
{return res;
} else
{return cljs.core.first.call(null,res);
}
};
var html = function (var_args){
var tags = null;if (arguments.length > 0) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,tags);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__16782){
var tags = cljs.core.seq(arglist__16782);
return html__delegate(tags);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* Alias for crate.util/escape-html
*/
crate.core.h = crate.util.escape_html;

//# sourceMappingURL=core.js.map