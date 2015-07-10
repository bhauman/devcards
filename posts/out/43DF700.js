goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38445__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38446__i = 0, G__38446__a = new Array(arguments.length -  0);
while (G__38446__i < G__38446__a.length) {G__38446__a[G__38446__i] = arguments[G__38446__i + 0]; ++G__38446__i;}
  args = new cljs.core.IndexedSeq(G__38446__a,0);
} 
return G__38445__delegate.call(this,args);};
G__38445.cljs$lang$maxFixedArity = 0;
G__38445.cljs$lang$applyTo = (function (arglist__38447){
var args = cljs.core.seq(arglist__38447);
return G__38445__delegate(args);
});
G__38445.cljs$core$IFn$_invoke$arity$variadic = G__38445__delegate;
return G__38445;
})()
;
});
