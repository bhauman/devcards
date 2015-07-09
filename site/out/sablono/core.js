// Compiled by ClojureScript 0.0-3269 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__53545__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__53544 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__53544,(0),null);
var body = cljs.core.nthnext.call(null,vec__53544,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__53545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53546__i = 0, G__53546__a = new Array(arguments.length -  0);
while (G__53546__i < G__53546__a.length) {G__53546__a[G__53546__i] = arguments[G__53546__i + 0]; ++G__53546__i;}
  args = new cljs.core.IndexedSeq(G__53546__a,0);
} 
return G__53545__delegate.call(this,args);};
G__53545.cljs$lang$maxFixedArity = 0;
G__53545.cljs$lang$applyTo = (function (arglist__53547){
var args = cljs.core.seq(arglist__53547);
return G__53545__delegate(args);
});
G__53545.cljs$core$IFn$_invoke$arity$variadic = G__53545__delegate;
return G__53545;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__16816__auto__ = (function sablono$core$update_arglists_$_iter__53552(s__53553){
return (new cljs.core.LazySeq(null,(function (){
var s__53553__$1 = s__53553;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__53553__$1);
if(temp__4425__auto__){
var s__53553__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53553__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__53553__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__53555 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__53554 = (0);
while(true){
if((i__53554 < size__16815__auto__)){
var args = cljs.core._nth.call(null,c__16814__auto__,i__53554);
cljs.core.chunk_append.call(null,b__53555,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__53556 = (i__53554 + (1));
i__53554 = G__53556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53555),sablono$core$update_arglists_$_iter__53552.call(null,cljs.core.chunk_rest.call(null,s__53553__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53555),null);
}
} else {
var args = cljs.core.first.call(null,s__53553__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__53552.call(null,cljs.core.rest.call(null,s__53553__$2)));
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
var iter__16816__auto__ = (function sablono$core$iter__53558(s__53559){
return (new cljs.core.LazySeq(null,(function (){
var s__53559__$1 = s__53559;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__53559__$1);
if(temp__4425__auto__){
var s__53559__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53559__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__53559__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__53561 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__53560 = (0);
while(true){
if((i__53560 < size__16815__auto__)){
var style = cljs.core._nth.call(null,c__16814__auto__,i__53560);
cljs.core.chunk_append.call(null,b__53561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__53562 = (i__53560 + (1));
i__53560 = G__53562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53561),sablono$core$iter__53558.call(null,cljs.core.chunk_rest.call(null,s__53559__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53561),null);
}
} else {
var style = cljs.core.first.call(null,s__53559__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__53558.call(null,cljs.core.rest.call(null,s__53559__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq53557){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53557));
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
sablono.core.link_to53563 = (function sablono$core$link_to53563(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to53563.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

sablono.core.link_to53563.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to53563.cljs$lang$maxFixedArity = (1);

sablono.core.link_to53563.cljs$lang$applyTo = (function (seq53564){
var G__53565 = cljs.core.first.call(null,seq53564);
var seq53564__$1 = cljs.core.next.call(null,seq53564);
return sablono.core.link_to53563.cljs$core$IFn$_invoke$arity$variadic(G__53565,seq53564__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to53563);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to53566 = (function sablono$core$mail_to53566(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to53566.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

sablono.core.mail_to53566.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__53569){
var vec__53570 = p__53569;
var content = cljs.core.nth.call(null,vec__53570,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16062__auto__ = content;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to53566.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to53566.cljs$lang$applyTo = (function (seq53567){
var G__53568 = cljs.core.first.call(null,seq53567);
var seq53567__$1 = cljs.core.next.call(null,seq53567);
return sablono.core.mail_to53566.cljs$core$IFn$_invoke$arity$variadic(G__53568,seq53567__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to53566);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list53571 = (function sablono$core$unordered_list53571(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__16816__auto__ = (function sablono$core$unordered_list53571_$_iter__53576(s__53577){
return (new cljs.core.LazySeq(null,(function (){
var s__53577__$1 = s__53577;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__53577__$1);
if(temp__4425__auto__){
var s__53577__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53577__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__53577__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__53579 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__53578 = (0);
while(true){
if((i__53578 < size__16815__auto__)){
var x = cljs.core._nth.call(null,c__16814__auto__,i__53578);
cljs.core.chunk_append.call(null,b__53579,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__53580 = (i__53578 + (1));
i__53578 = G__53580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53579),sablono$core$unordered_list53571_$_iter__53576.call(null,cljs.core.chunk_rest.call(null,s__53577__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53579),null);
}
} else {
var x = cljs.core.first.call(null,s__53577__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list53571_$_iter__53576.call(null,cljs.core.rest.call(null,s__53577__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list53571);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list53581 = (function sablono$core$ordered_list53581(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__16816__auto__ = (function sablono$core$ordered_list53581_$_iter__53586(s__53587){
return (new cljs.core.LazySeq(null,(function (){
var s__53587__$1 = s__53587;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__53587__$1);
if(temp__4425__auto__){
var s__53587__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53587__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__53587__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__53589 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__53588 = (0);
while(true){
if((i__53588 < size__16815__auto__)){
var x = cljs.core._nth.call(null,c__16814__auto__,i__53588);
cljs.core.chunk_append.call(null,b__53589,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__53590 = (i__53588 + (1));
i__53588 = G__53590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53589),sablono$core$ordered_list53581_$_iter__53586.call(null,cljs.core.chunk_rest.call(null,s__53587__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53589),null);
}
} else {
var x = cljs.core.first.call(null,s__53587__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list53581_$_iter__53586.call(null,cljs.core.rest.call(null,s__53587__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list53581);
/**
 * Create an image element.
 */
sablono.core.image53591 = (function sablono$core$image53591(){
var G__53593 = arguments.length;
switch (G__53593) {
case 1:
return sablono.core.image53591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image53591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image53591.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image53591.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image53591.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image53591);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__53595_SHARP_,p2__53596_SHARP_){
return [cljs.core.str(p1__53595_SHARP_),cljs.core.str("["),cljs.core.str(p2__53596_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__53597_SHARP_,p2__53598_SHARP_){
return [cljs.core.str(p1__53597_SHARP_),cljs.core.str("-"),cljs.core.str(p2__53598_SHARP_)].join('');
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
sablono.core.color_field53599 = (function sablono$core$color_field53599(){
var G__53601 = arguments.length;
switch (G__53601) {
case 1:
return sablono.core.color_field53599.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field53599.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field53599.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.color_field53599.call(null,name__22572__auto__,null);
});

sablono.core.color_field53599.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.color_field53599.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field53599);

/**
 * Creates a date input field.
 */
sablono.core.date_field53602 = (function sablono$core$date_field53602(){
var G__53604 = arguments.length;
switch (G__53604) {
case 1:
return sablono.core.date_field53602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field53602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field53602.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.date_field53602.call(null,name__22572__auto__,null);
});

sablono.core.date_field53602.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.date_field53602.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field53602);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field53605 = (function sablono$core$datetime_field53605(){
var G__53607 = arguments.length;
switch (G__53607) {
case 1:
return sablono.core.datetime_field53605.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field53605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field53605.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.datetime_field53605.call(null,name__22572__auto__,null);
});

sablono.core.datetime_field53605.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.datetime_field53605.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field53605);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field53608 = (function sablono$core$datetime_local_field53608(){
var G__53610 = arguments.length;
switch (G__53610) {
case 1:
return sablono.core.datetime_local_field53608.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field53608.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field53608.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.datetime_local_field53608.call(null,name__22572__auto__,null);
});

sablono.core.datetime_local_field53608.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.datetime_local_field53608.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field53608);

/**
 * Creates a email input field.
 */
sablono.core.email_field53611 = (function sablono$core$email_field53611(){
var G__53613 = arguments.length;
switch (G__53613) {
case 1:
return sablono.core.email_field53611.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field53611.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field53611.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.email_field53611.call(null,name__22572__auto__,null);
});

sablono.core.email_field53611.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.email_field53611.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field53611);

/**
 * Creates a file input field.
 */
sablono.core.file_field53614 = (function sablono$core$file_field53614(){
var G__53616 = arguments.length;
switch (G__53616) {
case 1:
return sablono.core.file_field53614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field53614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field53614.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.file_field53614.call(null,name__22572__auto__,null);
});

sablono.core.file_field53614.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.file_field53614.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field53614);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field53617 = (function sablono$core$hidden_field53617(){
var G__53619 = arguments.length;
switch (G__53619) {
case 1:
return sablono.core.hidden_field53617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field53617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field53617.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.hidden_field53617.call(null,name__22572__auto__,null);
});

sablono.core.hidden_field53617.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.hidden_field53617.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field53617);

/**
 * Creates a month input field.
 */
sablono.core.month_field53620 = (function sablono$core$month_field53620(){
var G__53622 = arguments.length;
switch (G__53622) {
case 1:
return sablono.core.month_field53620.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field53620.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field53620.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.month_field53620.call(null,name__22572__auto__,null);
});

sablono.core.month_field53620.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.month_field53620.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field53620);

/**
 * Creates a number input field.
 */
sablono.core.number_field53623 = (function sablono$core$number_field53623(){
var G__53625 = arguments.length;
switch (G__53625) {
case 1:
return sablono.core.number_field53623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field53623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field53623.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.number_field53623.call(null,name__22572__auto__,null);
});

sablono.core.number_field53623.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.number_field53623.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field53623);

/**
 * Creates a password input field.
 */
sablono.core.password_field53626 = (function sablono$core$password_field53626(){
var G__53628 = arguments.length;
switch (G__53628) {
case 1:
return sablono.core.password_field53626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field53626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field53626.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.password_field53626.call(null,name__22572__auto__,null);
});

sablono.core.password_field53626.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.password_field53626.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field53626);

/**
 * Creates a range input field.
 */
sablono.core.range_field53629 = (function sablono$core$range_field53629(){
var G__53631 = arguments.length;
switch (G__53631) {
case 1:
return sablono.core.range_field53629.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field53629.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field53629.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.range_field53629.call(null,name__22572__auto__,null);
});

sablono.core.range_field53629.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.range_field53629.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field53629);

/**
 * Creates a search input field.
 */
sablono.core.search_field53632 = (function sablono$core$search_field53632(){
var G__53634 = arguments.length;
switch (G__53634) {
case 1:
return sablono.core.search_field53632.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field53632.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field53632.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.search_field53632.call(null,name__22572__auto__,null);
});

sablono.core.search_field53632.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.search_field53632.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field53632);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field53635 = (function sablono$core$tel_field53635(){
var G__53637 = arguments.length;
switch (G__53637) {
case 1:
return sablono.core.tel_field53635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field53635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field53635.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.tel_field53635.call(null,name__22572__auto__,null);
});

sablono.core.tel_field53635.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.tel_field53635.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field53635);

/**
 * Creates a text input field.
 */
sablono.core.text_field53638 = (function sablono$core$text_field53638(){
var G__53640 = arguments.length;
switch (G__53640) {
case 1:
return sablono.core.text_field53638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field53638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field53638.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.text_field53638.call(null,name__22572__auto__,null);
});

sablono.core.text_field53638.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.text_field53638.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field53638);

/**
 * Creates a time input field.
 */
sablono.core.time_field53641 = (function sablono$core$time_field53641(){
var G__53643 = arguments.length;
switch (G__53643) {
case 1:
return sablono.core.time_field53641.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field53641.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field53641.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.time_field53641.call(null,name__22572__auto__,null);
});

sablono.core.time_field53641.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.time_field53641.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field53641);

/**
 * Creates a url input field.
 */
sablono.core.url_field53644 = (function sablono$core$url_field53644(){
var G__53646 = arguments.length;
switch (G__53646) {
case 1:
return sablono.core.url_field53644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field53644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field53644.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.url_field53644.call(null,name__22572__auto__,null);
});

sablono.core.url_field53644.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.url_field53644.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field53644);

/**
 * Creates a week input field.
 */
sablono.core.week_field53647 = (function sablono$core$week_field53647(){
var G__53649 = arguments.length;
switch (G__53649) {
case 1:
return sablono.core.week_field53647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field53647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field53647.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.week_field53647.call(null,name__22572__auto__,null);
});

sablono.core.week_field53647.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.week_field53647.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field53647);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box53667 = (function sablono$core$check_box53667(){
var G__53669 = arguments.length;
switch (G__53669) {
case 1:
return sablono.core.check_box53667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box53667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box53667.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box53667.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box53667.call(null,name,null);
});

sablono.core.check_box53667.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box53667.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box53667.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box53667.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box53667);
/**
 * Creates a radio button.
 */
sablono.core.radio_button53671 = (function sablono$core$radio_button53671(){
var G__53673 = arguments.length;
switch (G__53673) {
case 1:
return sablono.core.radio_button53671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button53671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button53671.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button53671.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button53671.call(null,group,null);
});

sablono.core.radio_button53671.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button53671.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button53671.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button53671.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button53671);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options53675 = (function sablono$core$select_options53675(){
var G__53677 = arguments.length;
switch (G__53677) {
case 1:
return sablono.core.select_options53675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options53675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options53675.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options53675.call(null,coll,null);
});

sablono.core.select_options53675.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__16816__auto__ = (function sablono$core$iter__53678(s__53679){
return (new cljs.core.LazySeq(null,(function (){
var s__53679__$1 = s__53679;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__53679__$1);
if(temp__4425__auto__){
var s__53679__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53679__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__53679__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__53681 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__53680 = (0);
while(true){
if((i__53680 < size__16815__auto__)){
var x = cljs.core._nth.call(null,c__16814__auto__,i__53680);
cljs.core.chunk_append.call(null,b__53681,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__53684 = x;
var text = cljs.core.nth.call(null,vec__53684,(0),null);
var val = cljs.core.nth.call(null,vec__53684,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__53684,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options53675.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__53687 = (i__53680 + (1));
i__53680 = G__53687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53681),sablono$core$iter__53678.call(null,cljs.core.chunk_rest.call(null,s__53679__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53681),null);
}
} else {
var x = cljs.core.first.call(null,s__53679__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__53685 = x;
var text = cljs.core.nth.call(null,vec__53685,(0),null);
var val = cljs.core.nth.call(null,vec__53685,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__53685,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options53675.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__53678.call(null,cljs.core.rest.call(null,s__53679__$2)));
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

sablono.core.select_options53675.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options53675);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down53688 = (function sablono$core$drop_down53688(){
var G__53690 = arguments.length;
switch (G__53690) {
case 2:
return sablono.core.drop_down53688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down53688.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down53688.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down53688.call(null,name,options,null);
});

sablono.core.drop_down53688.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down53688.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down53688);
/**
 * Creates a text area element.
 */
sablono.core.text_area53692 = (function sablono$core$text_area53692(){
var G__53694 = arguments.length;
switch (G__53694) {
case 1:
return sablono.core.text_area53692.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area53692.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area53692.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area53692.call(null,name,null);
});

sablono.core.text_area53692.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area53692.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area53692);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label53696 = (function sablono$core$label53696(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label53696);
/**
 * Creates a submit button.
 */
sablono.core.submit_button53697 = (function sablono$core$submit_button53697(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button53697);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button53698 = (function sablono$core$reset_button53698(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button53698);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to53699 = (function sablono$core$form_to53699(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to53699.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

sablono.core.form_to53699.cljs$core$IFn$_invoke$arity$variadic = (function (p__53702,body){
var vec__53703 = p__53702;
var method = cljs.core.nth.call(null,vec__53703,(0),null);
var action = cljs.core.nth.call(null,vec__53703,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to53699.cljs$lang$maxFixedArity = (1);

sablono.core.form_to53699.cljs$lang$applyTo = (function (seq53700){
var G__53701 = cljs.core.first.call(null,seq53700);
var seq53700__$1 = cljs.core.next.call(null,seq53700);
return sablono.core.form_to53699.cljs$core$IFn$_invoke$arity$variadic(G__53701,seq53700__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to53699);
