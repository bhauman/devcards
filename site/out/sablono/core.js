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
var G__46901__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__46900 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__46900,(0),null);
var body = cljs.core.nthnext.call(null,vec__46900,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__46901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46902__i = 0, G__46902__a = new Array(arguments.length -  0);
while (G__46902__i < G__46902__a.length) {G__46902__a[G__46902__i] = arguments[G__46902__i + 0]; ++G__46902__i;}
  args = new cljs.core.IndexedSeq(G__46902__a,0);
} 
return G__46901__delegate.call(this,args);};
G__46901.cljs$lang$maxFixedArity = 0;
G__46901.cljs$lang$applyTo = (function (arglist__46903){
var args = cljs.core.seq(arglist__46903);
return G__46901__delegate(args);
});
G__46901.cljs$core$IFn$_invoke$arity$variadic = G__46901__delegate;
return G__46901;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__16816__auto__ = (function sablono$core$update_arglists_$_iter__46908(s__46909){
return (new cljs.core.LazySeq(null,(function (){
var s__46909__$1 = s__46909;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46909__$1);
if(temp__4425__auto__){
var s__46909__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46909__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__46909__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__46911 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__46910 = (0);
while(true){
if((i__46910 < size__16815__auto__)){
var args = cljs.core._nth.call(null,c__16814__auto__,i__46910);
cljs.core.chunk_append.call(null,b__46911,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__46912 = (i__46910 + (1));
i__46910 = G__46912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46911),sablono$core$update_arglists_$_iter__46908.call(null,cljs.core.chunk_rest.call(null,s__46909__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46911),null);
}
} else {
var args = cljs.core.first.call(null,s__46909__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__46908.call(null,cljs.core.rest.call(null,s__46909__$2)));
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
var iter__16816__auto__ = (function sablono$core$iter__46914(s__46915){
return (new cljs.core.LazySeq(null,(function (){
var s__46915__$1 = s__46915;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46915__$1);
if(temp__4425__auto__){
var s__46915__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46915__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__46915__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__46917 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__46916 = (0);
while(true){
if((i__46916 < size__16815__auto__)){
var style = cljs.core._nth.call(null,c__16814__auto__,i__46916);
cljs.core.chunk_append.call(null,b__46917,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__46918 = (i__46916 + (1));
i__46916 = G__46918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46917),sablono$core$iter__46914.call(null,cljs.core.chunk_rest.call(null,s__46915__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46917),null);
}
} else {
var style = cljs.core.first.call(null,s__46915__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__46914.call(null,cljs.core.rest.call(null,s__46915__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq46913){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46913));
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
sablono.core.link_to46919 = (function sablono$core$link_to46919(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to46919.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

sablono.core.link_to46919.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to46919.cljs$lang$maxFixedArity = (1);

sablono.core.link_to46919.cljs$lang$applyTo = (function (seq46920){
var G__46921 = cljs.core.first.call(null,seq46920);
var seq46920__$1 = cljs.core.next.call(null,seq46920);
return sablono.core.link_to46919.cljs$core$IFn$_invoke$arity$variadic(G__46921,seq46920__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to46919);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to46922 = (function sablono$core$mail_to46922(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to46922.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

sablono.core.mail_to46922.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__46925){
var vec__46926 = p__46925;
var content = cljs.core.nth.call(null,vec__46926,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16062__auto__ = content;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to46922.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to46922.cljs$lang$applyTo = (function (seq46923){
var G__46924 = cljs.core.first.call(null,seq46923);
var seq46923__$1 = cljs.core.next.call(null,seq46923);
return sablono.core.mail_to46922.cljs$core$IFn$_invoke$arity$variadic(G__46924,seq46923__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to46922);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list46927 = (function sablono$core$unordered_list46927(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__16816__auto__ = (function sablono$core$unordered_list46927_$_iter__46932(s__46933){
return (new cljs.core.LazySeq(null,(function (){
var s__46933__$1 = s__46933;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46933__$1);
if(temp__4425__auto__){
var s__46933__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46933__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__46933__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__46935 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__46934 = (0);
while(true){
if((i__46934 < size__16815__auto__)){
var x = cljs.core._nth.call(null,c__16814__auto__,i__46934);
cljs.core.chunk_append.call(null,b__46935,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__46936 = (i__46934 + (1));
i__46934 = G__46936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46935),sablono$core$unordered_list46927_$_iter__46932.call(null,cljs.core.chunk_rest.call(null,s__46933__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46935),null);
}
} else {
var x = cljs.core.first.call(null,s__46933__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list46927_$_iter__46932.call(null,cljs.core.rest.call(null,s__46933__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list46927);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list46937 = (function sablono$core$ordered_list46937(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__16816__auto__ = (function sablono$core$ordered_list46937_$_iter__46942(s__46943){
return (new cljs.core.LazySeq(null,(function (){
var s__46943__$1 = s__46943;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46943__$1);
if(temp__4425__auto__){
var s__46943__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46943__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__46943__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__46945 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__46944 = (0);
while(true){
if((i__46944 < size__16815__auto__)){
var x = cljs.core._nth.call(null,c__16814__auto__,i__46944);
cljs.core.chunk_append.call(null,b__46945,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__46946 = (i__46944 + (1));
i__46944 = G__46946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46945),sablono$core$ordered_list46937_$_iter__46942.call(null,cljs.core.chunk_rest.call(null,s__46943__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46945),null);
}
} else {
var x = cljs.core.first.call(null,s__46943__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list46937_$_iter__46942.call(null,cljs.core.rest.call(null,s__46943__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list46937);
/**
 * Create an image element.
 */
sablono.core.image46947 = (function sablono$core$image46947(){
var G__46949 = arguments.length;
switch (G__46949) {
case 1:
return sablono.core.image46947.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image46947.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image46947.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image46947.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image46947.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image46947);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__46951_SHARP_,p2__46952_SHARP_){
return [cljs.core.str(p1__46951_SHARP_),cljs.core.str("["),cljs.core.str(p2__46952_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__46953_SHARP_,p2__46954_SHARP_){
return [cljs.core.str(p1__46953_SHARP_),cljs.core.str("-"),cljs.core.str(p2__46954_SHARP_)].join('');
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
sablono.core.color_field46955 = (function sablono$core$color_field46955(){
var G__46957 = arguments.length;
switch (G__46957) {
case 1:
return sablono.core.color_field46955.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field46955.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field46955.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.color_field46955.call(null,name__22572__auto__,null);
});

sablono.core.color_field46955.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.color_field46955.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field46955);

/**
 * Creates a date input field.
 */
sablono.core.date_field46958 = (function sablono$core$date_field46958(){
var G__46960 = arguments.length;
switch (G__46960) {
case 1:
return sablono.core.date_field46958.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field46958.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field46958.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.date_field46958.call(null,name__22572__auto__,null);
});

sablono.core.date_field46958.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.date_field46958.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field46958);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field46961 = (function sablono$core$datetime_field46961(){
var G__46963 = arguments.length;
switch (G__46963) {
case 1:
return sablono.core.datetime_field46961.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field46961.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field46961.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.datetime_field46961.call(null,name__22572__auto__,null);
});

sablono.core.datetime_field46961.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.datetime_field46961.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field46961);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field46964 = (function sablono$core$datetime_local_field46964(){
var G__46966 = arguments.length;
switch (G__46966) {
case 1:
return sablono.core.datetime_local_field46964.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field46964.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field46964.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.datetime_local_field46964.call(null,name__22572__auto__,null);
});

sablono.core.datetime_local_field46964.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.datetime_local_field46964.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field46964);

/**
 * Creates a email input field.
 */
sablono.core.email_field46967 = (function sablono$core$email_field46967(){
var G__46969 = arguments.length;
switch (G__46969) {
case 1:
return sablono.core.email_field46967.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field46967.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field46967.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.email_field46967.call(null,name__22572__auto__,null);
});

sablono.core.email_field46967.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.email_field46967.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field46967);

/**
 * Creates a file input field.
 */
sablono.core.file_field46970 = (function sablono$core$file_field46970(){
var G__46972 = arguments.length;
switch (G__46972) {
case 1:
return sablono.core.file_field46970.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field46970.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field46970.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.file_field46970.call(null,name__22572__auto__,null);
});

sablono.core.file_field46970.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.file_field46970.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field46970);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field46973 = (function sablono$core$hidden_field46973(){
var G__46975 = arguments.length;
switch (G__46975) {
case 1:
return sablono.core.hidden_field46973.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field46973.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field46973.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.hidden_field46973.call(null,name__22572__auto__,null);
});

sablono.core.hidden_field46973.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.hidden_field46973.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field46973);

/**
 * Creates a month input field.
 */
sablono.core.month_field46976 = (function sablono$core$month_field46976(){
var G__46978 = arguments.length;
switch (G__46978) {
case 1:
return sablono.core.month_field46976.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field46976.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field46976.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.month_field46976.call(null,name__22572__auto__,null);
});

sablono.core.month_field46976.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.month_field46976.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field46976);

/**
 * Creates a number input field.
 */
sablono.core.number_field46979 = (function sablono$core$number_field46979(){
var G__46981 = arguments.length;
switch (G__46981) {
case 1:
return sablono.core.number_field46979.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field46979.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field46979.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.number_field46979.call(null,name__22572__auto__,null);
});

sablono.core.number_field46979.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.number_field46979.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field46979);

/**
 * Creates a password input field.
 */
sablono.core.password_field46982 = (function sablono$core$password_field46982(){
var G__46984 = arguments.length;
switch (G__46984) {
case 1:
return sablono.core.password_field46982.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field46982.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field46982.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.password_field46982.call(null,name__22572__auto__,null);
});

sablono.core.password_field46982.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.password_field46982.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field46982);

/**
 * Creates a range input field.
 */
sablono.core.range_field46985 = (function sablono$core$range_field46985(){
var G__46987 = arguments.length;
switch (G__46987) {
case 1:
return sablono.core.range_field46985.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field46985.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field46985.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.range_field46985.call(null,name__22572__auto__,null);
});

sablono.core.range_field46985.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.range_field46985.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field46985);

/**
 * Creates a search input field.
 */
sablono.core.search_field46988 = (function sablono$core$search_field46988(){
var G__46990 = arguments.length;
switch (G__46990) {
case 1:
return sablono.core.search_field46988.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field46988.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field46988.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.search_field46988.call(null,name__22572__auto__,null);
});

sablono.core.search_field46988.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.search_field46988.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field46988);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field46991 = (function sablono$core$tel_field46991(){
var G__46993 = arguments.length;
switch (G__46993) {
case 1:
return sablono.core.tel_field46991.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field46991.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field46991.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.tel_field46991.call(null,name__22572__auto__,null);
});

sablono.core.tel_field46991.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.tel_field46991.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field46991);

/**
 * Creates a text input field.
 */
sablono.core.text_field46994 = (function sablono$core$text_field46994(){
var G__46996 = arguments.length;
switch (G__46996) {
case 1:
return sablono.core.text_field46994.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field46994.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field46994.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.text_field46994.call(null,name__22572__auto__,null);
});

sablono.core.text_field46994.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.text_field46994.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field46994);

/**
 * Creates a time input field.
 */
sablono.core.time_field46997 = (function sablono$core$time_field46997(){
var G__46999 = arguments.length;
switch (G__46999) {
case 1:
return sablono.core.time_field46997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field46997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field46997.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.time_field46997.call(null,name__22572__auto__,null);
});

sablono.core.time_field46997.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.time_field46997.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field46997);

/**
 * Creates a url input field.
 */
sablono.core.url_field47000 = (function sablono$core$url_field47000(){
var G__47002 = arguments.length;
switch (G__47002) {
case 1:
return sablono.core.url_field47000.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field47000.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field47000.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.url_field47000.call(null,name__22572__auto__,null);
});

sablono.core.url_field47000.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.url_field47000.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field47000);

/**
 * Creates a week input field.
 */
sablono.core.week_field47003 = (function sablono$core$week_field47003(){
var G__47005 = arguments.length;
switch (G__47005) {
case 1:
return sablono.core.week_field47003.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field47003.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field47003.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.week_field47003.call(null,name__22572__auto__,null);
});

sablono.core.week_field47003.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.week_field47003.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field47003);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box47023 = (function sablono$core$check_box47023(){
var G__47025 = arguments.length;
switch (G__47025) {
case 1:
return sablono.core.check_box47023.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box47023.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box47023.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box47023.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box47023.call(null,name,null);
});

sablono.core.check_box47023.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box47023.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box47023.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box47023.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box47023);
/**
 * Creates a radio button.
 */
sablono.core.radio_button47027 = (function sablono$core$radio_button47027(){
var G__47029 = arguments.length;
switch (G__47029) {
case 1:
return sablono.core.radio_button47027.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button47027.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button47027.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button47027.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button47027.call(null,group,null);
});

sablono.core.radio_button47027.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button47027.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button47027.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button47027.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button47027);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options47031 = (function sablono$core$select_options47031(){
var G__47033 = arguments.length;
switch (G__47033) {
case 1:
return sablono.core.select_options47031.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options47031.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options47031.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options47031.call(null,coll,null);
});

sablono.core.select_options47031.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__16816__auto__ = (function sablono$core$iter__47034(s__47035){
return (new cljs.core.LazySeq(null,(function (){
var s__47035__$1 = s__47035;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__47035__$1);
if(temp__4425__auto__){
var s__47035__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47035__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__47035__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__47037 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__47036 = (0);
while(true){
if((i__47036 < size__16815__auto__)){
var x = cljs.core._nth.call(null,c__16814__auto__,i__47036);
cljs.core.chunk_append.call(null,b__47037,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__47040 = x;
var text = cljs.core.nth.call(null,vec__47040,(0),null);
var val = cljs.core.nth.call(null,vec__47040,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__47040,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options47031.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__47043 = (i__47036 + (1));
i__47036 = G__47043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47037),sablono$core$iter__47034.call(null,cljs.core.chunk_rest.call(null,s__47035__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47037),null);
}
} else {
var x = cljs.core.first.call(null,s__47035__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__47041 = x;
var text = cljs.core.nth.call(null,vec__47041,(0),null);
var val = cljs.core.nth.call(null,vec__47041,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__47041,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options47031.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__47034.call(null,cljs.core.rest.call(null,s__47035__$2)));
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

sablono.core.select_options47031.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options47031);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down47044 = (function sablono$core$drop_down47044(){
var G__47046 = arguments.length;
switch (G__47046) {
case 2:
return sablono.core.drop_down47044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down47044.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down47044.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down47044.call(null,name,options,null);
});

sablono.core.drop_down47044.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down47044.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down47044);
/**
 * Creates a text area element.
 */
sablono.core.text_area47048 = (function sablono$core$text_area47048(){
var G__47050 = arguments.length;
switch (G__47050) {
case 1:
return sablono.core.text_area47048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area47048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area47048.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area47048.call(null,name,null);
});

sablono.core.text_area47048.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area47048.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area47048);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label47052 = (function sablono$core$label47052(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label47052);
/**
 * Creates a submit button.
 */
sablono.core.submit_button47053 = (function sablono$core$submit_button47053(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button47053);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button47054 = (function sablono$core$reset_button47054(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button47054);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to47055 = (function sablono$core$form_to47055(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to47055.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

sablono.core.form_to47055.cljs$core$IFn$_invoke$arity$variadic = (function (p__47058,body){
var vec__47059 = p__47058;
var method = cljs.core.nth.call(null,vec__47059,(0),null);
var action = cljs.core.nth.call(null,vec__47059,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to47055.cljs$lang$maxFixedArity = (1);

sablono.core.form_to47055.cljs$lang$applyTo = (function (seq47056){
var G__47057 = cljs.core.first.call(null,seq47056);
var seq47056__$1 = cljs.core.next.call(null,seq47056);
return sablono.core.form_to47055.cljs$core$IFn$_invoke$arity$variadic(G__47057,seq47056__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to47055);

//# sourceMappingURL=core.js.map