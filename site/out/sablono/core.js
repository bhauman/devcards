// Compiled by ClojureScript 0.0-3269 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__36422__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__36421 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__36421,(0),null);
var body = cljs.core.nthnext.call(null,vec__36421,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__36422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36423__i = 0, G__36423__a = new Array(arguments.length -  0);
while (G__36423__i < G__36423__a.length) {G__36423__a[G__36423__i] = arguments[G__36423__i + 0]; ++G__36423__i;}
  args = new cljs.core.IndexedSeq(G__36423__a,0);
} 
return G__36422__delegate.call(this,args);};
G__36422.cljs$lang$maxFixedArity = 0;
G__36422.cljs$lang$applyTo = (function (arglist__36424){
var args = cljs.core.seq(arglist__36424);
return G__36422__delegate(args);
});
G__36422.cljs$core$IFn$_invoke$arity$variadic = G__36422__delegate;
return G__36422;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__16816__auto__ = (function sablono$core$update_arglists_$_iter__36429(s__36430){
return (new cljs.core.LazySeq(null,(function (){
var s__36430__$1 = s__36430;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36430__$1);
if(temp__4425__auto__){
var s__36430__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36430__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__36430__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__36432 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__36431 = (0);
while(true){
if((i__36431 < size__16815__auto__)){
var args = cljs.core._nth.call(null,c__16814__auto__,i__36431);
cljs.core.chunk_append.call(null,b__36432,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36433 = (i__36431 + (1));
i__36431 = G__36433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36432),sablono$core$update_arglists_$_iter__36429.call(null,cljs.core.chunk_rest.call(null,s__36430__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36432),null);
}
} else {
var args = cljs.core.first.call(null,s__36430__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__36429.call(null,cljs.core.rest.call(null,s__36430__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16816__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(){
var argseq__17102__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17102__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__16816__auto__ = (function sablono$core$iter__36435(s__36436){
return (new cljs.core.LazySeq(null,(function (){
var s__36436__$1 = s__36436;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36436__$1);
if(temp__4425__auto__){
var s__36436__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36436__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__36436__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__36438 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__36437 = (0);
while(true){
if((i__36437 < size__16815__auto__)){
var style = cljs.core._nth.call(null,c__16814__auto__,i__36437);
cljs.core.chunk_append.call(null,b__36438,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__36439 = (i__36437 + (1));
i__36437 = G__36439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36438),sablono$core$iter__36435.call(null,cljs.core.chunk_rest.call(null,s__36436__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36438),null);
}
} else {
var style = cljs.core.first.call(null,s__36436__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__36435.call(null,cljs.core.rest.call(null,s__36436__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16816__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq36434){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36434));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to36440 = (function sablono$core$link_to36440(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to36440.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

sablono.core.link_to36440.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to36440.cljs$lang$maxFixedArity = (1);

sablono.core.link_to36440.cljs$lang$applyTo = (function (seq36441){
var G__36442 = cljs.core.first.call(null,seq36441);
var seq36441__$1 = cljs.core.next.call(null,seq36441);
return sablono.core.link_to36440.cljs$core$IFn$_invoke$arity$variadic(G__36442,seq36441__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36440);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to36443 = (function sablono$core$mail_to36443(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to36443.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

sablono.core.mail_to36443.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__36446){
var vec__36447 = p__36446;
var content = cljs.core.nth.call(null,vec__36447,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16062__auto__ = content;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to36443.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to36443.cljs$lang$applyTo = (function (seq36444){
var G__36445 = cljs.core.first.call(null,seq36444);
var seq36444__$1 = cljs.core.next.call(null,seq36444);
return sablono.core.mail_to36443.cljs$core$IFn$_invoke$arity$variadic(G__36445,seq36444__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36443);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list36448 = (function sablono$core$unordered_list36448(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__16816__auto__ = (function sablono$core$unordered_list36448_$_iter__36453(s__36454){
return (new cljs.core.LazySeq(null,(function (){
var s__36454__$1 = s__36454;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36454__$1);
if(temp__4425__auto__){
var s__36454__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36454__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__36454__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__36456 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__36455 = (0);
while(true){
if((i__36455 < size__16815__auto__)){
var x = cljs.core._nth.call(null,c__16814__auto__,i__36455);
cljs.core.chunk_append.call(null,b__36456,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36457 = (i__36455 + (1));
i__36455 = G__36457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36456),sablono$core$unordered_list36448_$_iter__36453.call(null,cljs.core.chunk_rest.call(null,s__36454__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36456),null);
}
} else {
var x = cljs.core.first.call(null,s__36454__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list36448_$_iter__36453.call(null,cljs.core.rest.call(null,s__36454__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16816__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36448);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list36458 = (function sablono$core$ordered_list36458(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__16816__auto__ = (function sablono$core$ordered_list36458_$_iter__36463(s__36464){
return (new cljs.core.LazySeq(null,(function (){
var s__36464__$1 = s__36464;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36464__$1);
if(temp__4425__auto__){
var s__36464__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36464__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__36464__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__36466 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__36465 = (0);
while(true){
if((i__36465 < size__16815__auto__)){
var x = cljs.core._nth.call(null,c__16814__auto__,i__36465);
cljs.core.chunk_append.call(null,b__36466,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36467 = (i__36465 + (1));
i__36465 = G__36467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36466),sablono$core$ordered_list36458_$_iter__36463.call(null,cljs.core.chunk_rest.call(null,s__36464__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36466),null);
}
} else {
var x = cljs.core.first.call(null,s__36464__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list36458_$_iter__36463.call(null,cljs.core.rest.call(null,s__36464__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16816__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36458);
/**
 * Create an image element.
 */
sablono.core.image36468 = (function sablono$core$image36468(){
var G__36470 = arguments.length;
switch (G__36470) {
case 1:
return sablono.core.image36468.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image36468.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image36468.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image36468.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image36468.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36468);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__36472_SHARP_,p2__36473_SHARP_){
return [cljs.core.str(p1__36472_SHARP_),cljs.core.str("["),cljs.core.str(p2__36473_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__36474_SHARP_,p2__36475_SHARP_){
return [cljs.core.str(p1__36474_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36475_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field36476 = (function sablono$core$color_field36476(){
var G__36478 = arguments.length;
switch (G__36478) {
case 1:
return sablono.core.color_field36476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field36476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field36476.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.color_field36476.call(null,name__22571__auto__,null);
});

sablono.core.color_field36476.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.color_field36476.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36476);

/**
 * Creates a date input field.
 */
sablono.core.date_field36479 = (function sablono$core$date_field36479(){
var G__36481 = arguments.length;
switch (G__36481) {
case 1:
return sablono.core.date_field36479.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field36479.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field36479.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.date_field36479.call(null,name__22571__auto__,null);
});

sablono.core.date_field36479.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.date_field36479.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36479);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field36482 = (function sablono$core$datetime_field36482(){
var G__36484 = arguments.length;
switch (G__36484) {
case 1:
return sablono.core.datetime_field36482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field36482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field36482.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.datetime_field36482.call(null,name__22571__auto__,null);
});

sablono.core.datetime_field36482.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.datetime_field36482.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field36482);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field36485 = (function sablono$core$datetime_local_field36485(){
var G__36487 = arguments.length;
switch (G__36487) {
case 1:
return sablono.core.datetime_local_field36485.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field36485.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field36485.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.datetime_local_field36485.call(null,name__22571__auto__,null);
});

sablono.core.datetime_local_field36485.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.datetime_local_field36485.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field36485);

/**
 * Creates a email input field.
 */
sablono.core.email_field36488 = (function sablono$core$email_field36488(){
var G__36490 = arguments.length;
switch (G__36490) {
case 1:
return sablono.core.email_field36488.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field36488.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field36488.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.email_field36488.call(null,name__22571__auto__,null);
});

sablono.core.email_field36488.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.email_field36488.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36488);

/**
 * Creates a file input field.
 */
sablono.core.file_field36491 = (function sablono$core$file_field36491(){
var G__36493 = arguments.length;
switch (G__36493) {
case 1:
return sablono.core.file_field36491.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field36491.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field36491.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.file_field36491.call(null,name__22571__auto__,null);
});

sablono.core.file_field36491.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.file_field36491.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field36491);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field36494 = (function sablono$core$hidden_field36494(){
var G__36496 = arguments.length;
switch (G__36496) {
case 1:
return sablono.core.hidden_field36494.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field36494.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field36494.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.hidden_field36494.call(null,name__22571__auto__,null);
});

sablono.core.hidden_field36494.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.hidden_field36494.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36494);

/**
 * Creates a month input field.
 */
sablono.core.month_field36497 = (function sablono$core$month_field36497(){
var G__36499 = arguments.length;
switch (G__36499) {
case 1:
return sablono.core.month_field36497.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field36497.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field36497.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.month_field36497.call(null,name__22571__auto__,null);
});

sablono.core.month_field36497.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.month_field36497.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field36497);

/**
 * Creates a number input field.
 */
sablono.core.number_field36500 = (function sablono$core$number_field36500(){
var G__36502 = arguments.length;
switch (G__36502) {
case 1:
return sablono.core.number_field36500.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field36500.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field36500.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.number_field36500.call(null,name__22571__auto__,null);
});

sablono.core.number_field36500.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.number_field36500.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field36500);

/**
 * Creates a password input field.
 */
sablono.core.password_field36503 = (function sablono$core$password_field36503(){
var G__36505 = arguments.length;
switch (G__36505) {
case 1:
return sablono.core.password_field36503.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field36503.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field36503.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.password_field36503.call(null,name__22571__auto__,null);
});

sablono.core.password_field36503.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.password_field36503.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36503);

/**
 * Creates a range input field.
 */
sablono.core.range_field36506 = (function sablono$core$range_field36506(){
var G__36508 = arguments.length;
switch (G__36508) {
case 1:
return sablono.core.range_field36506.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field36506.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field36506.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.range_field36506.call(null,name__22571__auto__,null);
});

sablono.core.range_field36506.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.range_field36506.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field36506);

/**
 * Creates a search input field.
 */
sablono.core.search_field36509 = (function sablono$core$search_field36509(){
var G__36511 = arguments.length;
switch (G__36511) {
case 1:
return sablono.core.search_field36509.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field36509.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field36509.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.search_field36509.call(null,name__22571__auto__,null);
});

sablono.core.search_field36509.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.search_field36509.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field36509);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field36512 = (function sablono$core$tel_field36512(){
var G__36514 = arguments.length;
switch (G__36514) {
case 1:
return sablono.core.tel_field36512.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field36512.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field36512.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.tel_field36512.call(null,name__22571__auto__,null);
});

sablono.core.tel_field36512.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.tel_field36512.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field36512);

/**
 * Creates a text input field.
 */
sablono.core.text_field36515 = (function sablono$core$text_field36515(){
var G__36517 = arguments.length;
switch (G__36517) {
case 1:
return sablono.core.text_field36515.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field36515.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field36515.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.text_field36515.call(null,name__22571__auto__,null);
});

sablono.core.text_field36515.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.text_field36515.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36515);

/**
 * Creates a time input field.
 */
sablono.core.time_field36518 = (function sablono$core$time_field36518(){
var G__36520 = arguments.length;
switch (G__36520) {
case 1:
return sablono.core.time_field36518.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field36518.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field36518.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.time_field36518.call(null,name__22571__auto__,null);
});

sablono.core.time_field36518.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.time_field36518.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field36518);

/**
 * Creates a url input field.
 */
sablono.core.url_field36521 = (function sablono$core$url_field36521(){
var G__36523 = arguments.length;
switch (G__36523) {
case 1:
return sablono.core.url_field36521.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field36521.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field36521.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.url_field36521.call(null,name__22571__auto__,null);
});

sablono.core.url_field36521.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.url_field36521.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field36521);

/**
 * Creates a week input field.
 */
sablono.core.week_field36524 = (function sablono$core$week_field36524(){
var G__36526 = arguments.length;
switch (G__36526) {
case 1:
return sablono.core.week_field36524.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field36524.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field36524.cljs$core$IFn$_invoke$arity$1 = (function (name__22571__auto__){
return sablono.core.week_field36524.call(null,name__22571__auto__,null);
});

sablono.core.week_field36524.cljs$core$IFn$_invoke$arity$2 = (function (name__22571__auto__,value__22572__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22571__auto__,value__22572__auto__);
});

sablono.core.week_field36524.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field36524);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box36544 = (function sablono$core$check_box36544(){
var G__36546 = arguments.length;
switch (G__36546) {
case 1:
return sablono.core.check_box36544.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box36544.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box36544.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box36544.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box36544.call(null,name,null);
});

sablono.core.check_box36544.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box36544.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box36544.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36544.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36544);
/**
 * Creates a radio button.
 */
sablono.core.radio_button36548 = (function sablono$core$radio_button36548(){
var G__36550 = arguments.length;
switch (G__36550) {
case 1:
return sablono.core.radio_button36548.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button36548.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button36548.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button36548.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button36548.call(null,group,null);
});

sablono.core.radio_button36548.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button36548.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button36548.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36548.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36548);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options36552 = (function sablono$core$select_options36552(){
var G__36554 = arguments.length;
switch (G__36554) {
case 1:
return sablono.core.select_options36552.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options36552.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options36552.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options36552.call(null,coll,null);
});

sablono.core.select_options36552.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__16816__auto__ = (function sablono$core$iter__36555(s__36556){
return (new cljs.core.LazySeq(null,(function (){
var s__36556__$1 = s__36556;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36556__$1);
if(temp__4425__auto__){
var s__36556__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36556__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__36556__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__36558 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__36557 = (0);
while(true){
if((i__36557 < size__16815__auto__)){
var x = cljs.core._nth.call(null,c__16814__auto__,i__36557);
cljs.core.chunk_append.call(null,b__36558,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36561 = x;
var text = cljs.core.nth.call(null,vec__36561,(0),null);
var val = cljs.core.nth.call(null,vec__36561,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36561,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36552.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__36564 = (i__36557 + (1));
i__36557 = G__36564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36558),sablono$core$iter__36555.call(null,cljs.core.chunk_rest.call(null,s__36556__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36558),null);
}
} else {
var x = cljs.core.first.call(null,s__36556__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36562 = x;
var text = cljs.core.nth.call(null,vec__36562,(0),null);
var val = cljs.core.nth.call(null,vec__36562,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36562,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36552.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__36555.call(null,cljs.core.rest.call(null,s__36556__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16816__auto__.call(null,coll);
});

sablono.core.select_options36552.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36552);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down36565 = (function sablono$core$drop_down36565(){
var G__36567 = arguments.length;
switch (G__36567) {
case 2:
return sablono.core.drop_down36565.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down36565.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down36565.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down36565.call(null,name,options,null);
});

sablono.core.drop_down36565.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down36565.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36565);
/**
 * Creates a text area element.
 */
sablono.core.text_area36569 = (function sablono$core$text_area36569(){
var G__36571 = arguments.length;
switch (G__36571) {
case 1:
return sablono.core.text_area36569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area36569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area36569.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area36569.call(null,name,null);
});

sablono.core.text_area36569.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area36569.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36569);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label36573 = (function sablono$core$label36573(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36573);
/**
 * Creates a submit button.
 */
sablono.core.submit_button36574 = (function sablono$core$submit_button36574(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36574);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button36575 = (function sablono$core$reset_button36575(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36575);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to36576 = (function sablono$core$form_to36576(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to36576.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

sablono.core.form_to36576.cljs$core$IFn$_invoke$arity$variadic = (function (p__36579,body){
var vec__36580 = p__36579;
var method = cljs.core.nth.call(null,vec__36580,(0),null);
var action = cljs.core.nth.call(null,vec__36580,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to36576.cljs$lang$maxFixedArity = (1);

sablono.core.form_to36576.cljs$lang$applyTo = (function (seq36577){
var G__36578 = cljs.core.first.call(null,seq36577);
var seq36577__$1 = cljs.core.next.call(null,seq36577);
return sablono.core.form_to36576.cljs$core$IFn$_invoke$arity$variadic(G__36578,seq36577__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36576);

//# sourceMappingURL=core.js.map?rel=1436385358931