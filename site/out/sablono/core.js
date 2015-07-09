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
var G__73640__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__73639 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__73639,(0),null);
var body = cljs.core.nthnext.call(null,vec__73639,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__73640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73641__i = 0, G__73641__a = new Array(arguments.length -  0);
while (G__73641__i < G__73641__a.length) {G__73641__a[G__73641__i] = arguments[G__73641__i + 0]; ++G__73641__i;}
  args = new cljs.core.IndexedSeq(G__73641__a,0);
} 
return G__73640__delegate.call(this,args);};
G__73640.cljs$lang$maxFixedArity = 0;
G__73640.cljs$lang$applyTo = (function (arglist__73642){
var args = cljs.core.seq(arglist__73642);
return G__73640__delegate(args);
});
G__73640.cljs$core$IFn$_invoke$arity$variadic = G__73640__delegate;
return G__73640;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__16816__auto__ = (function sablono$core$update_arglists_$_iter__73647(s__73648){
return (new cljs.core.LazySeq(null,(function (){
var s__73648__$1 = s__73648;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__73648__$1);
if(temp__4425__auto__){
var s__73648__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__73648__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__73648__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__73650 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__73649 = (0);
while(true){
if((i__73649 < size__16815__auto__)){
var args = cljs.core._nth.call(null,c__16814__auto__,i__73649);
cljs.core.chunk_append.call(null,b__73650,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__73651 = (i__73649 + (1));
i__73649 = G__73651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73650),sablono$core$update_arglists_$_iter__73647.call(null,cljs.core.chunk_rest.call(null,s__73648__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73650),null);
}
} else {
var args = cljs.core.first.call(null,s__73648__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__73647.call(null,cljs.core.rest.call(null,s__73648__$2)));
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
var iter__16816__auto__ = (function sablono$core$iter__73653(s__73654){
return (new cljs.core.LazySeq(null,(function (){
var s__73654__$1 = s__73654;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__73654__$1);
if(temp__4425__auto__){
var s__73654__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__73654__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__73654__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__73656 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__73655 = (0);
while(true){
if((i__73655 < size__16815__auto__)){
var style = cljs.core._nth.call(null,c__16814__auto__,i__73655);
cljs.core.chunk_append.call(null,b__73656,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__73657 = (i__73655 + (1));
i__73655 = G__73657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73656),sablono$core$iter__73653.call(null,cljs.core.chunk_rest.call(null,s__73654__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73656),null);
}
} else {
var style = cljs.core.first.call(null,s__73654__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__73653.call(null,cljs.core.rest.call(null,s__73654__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq73652){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73652));
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
sablono.core.link_to73658 = (function sablono$core$link_to73658(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to73658.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

sablono.core.link_to73658.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to73658.cljs$lang$maxFixedArity = (1);

sablono.core.link_to73658.cljs$lang$applyTo = (function (seq73659){
var G__73660 = cljs.core.first.call(null,seq73659);
var seq73659__$1 = cljs.core.next.call(null,seq73659);
return sablono.core.link_to73658.cljs$core$IFn$_invoke$arity$variadic(G__73660,seq73659__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to73658);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to73661 = (function sablono$core$mail_to73661(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to73661.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

sablono.core.mail_to73661.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__73664){
var vec__73665 = p__73664;
var content = cljs.core.nth.call(null,vec__73665,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16062__auto__ = content;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to73661.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to73661.cljs$lang$applyTo = (function (seq73662){
var G__73663 = cljs.core.first.call(null,seq73662);
var seq73662__$1 = cljs.core.next.call(null,seq73662);
return sablono.core.mail_to73661.cljs$core$IFn$_invoke$arity$variadic(G__73663,seq73662__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to73661);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list73666 = (function sablono$core$unordered_list73666(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__16816__auto__ = (function sablono$core$unordered_list73666_$_iter__73671(s__73672){
return (new cljs.core.LazySeq(null,(function (){
var s__73672__$1 = s__73672;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__73672__$1);
if(temp__4425__auto__){
var s__73672__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__73672__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__73672__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__73674 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__73673 = (0);
while(true){
if((i__73673 < size__16815__auto__)){
var x = cljs.core._nth.call(null,c__16814__auto__,i__73673);
cljs.core.chunk_append.call(null,b__73674,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__73675 = (i__73673 + (1));
i__73673 = G__73675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73674),sablono$core$unordered_list73666_$_iter__73671.call(null,cljs.core.chunk_rest.call(null,s__73672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73674),null);
}
} else {
var x = cljs.core.first.call(null,s__73672__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list73666_$_iter__73671.call(null,cljs.core.rest.call(null,s__73672__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list73666);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list73676 = (function sablono$core$ordered_list73676(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__16816__auto__ = (function sablono$core$ordered_list73676_$_iter__73681(s__73682){
return (new cljs.core.LazySeq(null,(function (){
var s__73682__$1 = s__73682;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__73682__$1);
if(temp__4425__auto__){
var s__73682__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__73682__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__73682__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__73684 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__73683 = (0);
while(true){
if((i__73683 < size__16815__auto__)){
var x = cljs.core._nth.call(null,c__16814__auto__,i__73683);
cljs.core.chunk_append.call(null,b__73684,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__73685 = (i__73683 + (1));
i__73683 = G__73685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73684),sablono$core$ordered_list73676_$_iter__73681.call(null,cljs.core.chunk_rest.call(null,s__73682__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73684),null);
}
} else {
var x = cljs.core.first.call(null,s__73682__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list73676_$_iter__73681.call(null,cljs.core.rest.call(null,s__73682__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list73676);
/**
 * Create an image element.
 */
sablono.core.image73686 = (function sablono$core$image73686(){
var G__73688 = arguments.length;
switch (G__73688) {
case 1:
return sablono.core.image73686.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image73686.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image73686.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image73686.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image73686.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image73686);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__73690_SHARP_,p2__73691_SHARP_){
return [cljs.core.str(p1__73690_SHARP_),cljs.core.str("["),cljs.core.str(p2__73691_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__73692_SHARP_,p2__73693_SHARP_){
return [cljs.core.str(p1__73692_SHARP_),cljs.core.str("-"),cljs.core.str(p2__73693_SHARP_)].join('');
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
sablono.core.color_field73694 = (function sablono$core$color_field73694(){
var G__73696 = arguments.length;
switch (G__73696) {
case 1:
return sablono.core.color_field73694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field73694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field73694.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.color_field73694.call(null,name__22572__auto__,null);
});

sablono.core.color_field73694.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.color_field73694.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field73694);

/**
 * Creates a date input field.
 */
sablono.core.date_field73697 = (function sablono$core$date_field73697(){
var G__73699 = arguments.length;
switch (G__73699) {
case 1:
return sablono.core.date_field73697.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field73697.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field73697.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.date_field73697.call(null,name__22572__auto__,null);
});

sablono.core.date_field73697.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.date_field73697.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field73697);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field73700 = (function sablono$core$datetime_field73700(){
var G__73702 = arguments.length;
switch (G__73702) {
case 1:
return sablono.core.datetime_field73700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field73700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field73700.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.datetime_field73700.call(null,name__22572__auto__,null);
});

sablono.core.datetime_field73700.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.datetime_field73700.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field73700);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field73703 = (function sablono$core$datetime_local_field73703(){
var G__73705 = arguments.length;
switch (G__73705) {
case 1:
return sablono.core.datetime_local_field73703.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field73703.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field73703.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.datetime_local_field73703.call(null,name__22572__auto__,null);
});

sablono.core.datetime_local_field73703.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.datetime_local_field73703.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field73703);

/**
 * Creates a email input field.
 */
sablono.core.email_field73706 = (function sablono$core$email_field73706(){
var G__73708 = arguments.length;
switch (G__73708) {
case 1:
return sablono.core.email_field73706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field73706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field73706.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.email_field73706.call(null,name__22572__auto__,null);
});

sablono.core.email_field73706.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.email_field73706.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field73706);

/**
 * Creates a file input field.
 */
sablono.core.file_field73709 = (function sablono$core$file_field73709(){
var G__73711 = arguments.length;
switch (G__73711) {
case 1:
return sablono.core.file_field73709.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field73709.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field73709.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.file_field73709.call(null,name__22572__auto__,null);
});

sablono.core.file_field73709.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.file_field73709.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field73709);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field73712 = (function sablono$core$hidden_field73712(){
var G__73714 = arguments.length;
switch (G__73714) {
case 1:
return sablono.core.hidden_field73712.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field73712.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field73712.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.hidden_field73712.call(null,name__22572__auto__,null);
});

sablono.core.hidden_field73712.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.hidden_field73712.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field73712);

/**
 * Creates a month input field.
 */
sablono.core.month_field73715 = (function sablono$core$month_field73715(){
var G__73717 = arguments.length;
switch (G__73717) {
case 1:
return sablono.core.month_field73715.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field73715.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field73715.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.month_field73715.call(null,name__22572__auto__,null);
});

sablono.core.month_field73715.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.month_field73715.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field73715);

/**
 * Creates a number input field.
 */
sablono.core.number_field73718 = (function sablono$core$number_field73718(){
var G__73720 = arguments.length;
switch (G__73720) {
case 1:
return sablono.core.number_field73718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field73718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field73718.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.number_field73718.call(null,name__22572__auto__,null);
});

sablono.core.number_field73718.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.number_field73718.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field73718);

/**
 * Creates a password input field.
 */
sablono.core.password_field73721 = (function sablono$core$password_field73721(){
var G__73723 = arguments.length;
switch (G__73723) {
case 1:
return sablono.core.password_field73721.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field73721.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field73721.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.password_field73721.call(null,name__22572__auto__,null);
});

sablono.core.password_field73721.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.password_field73721.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field73721);

/**
 * Creates a range input field.
 */
sablono.core.range_field73724 = (function sablono$core$range_field73724(){
var G__73726 = arguments.length;
switch (G__73726) {
case 1:
return sablono.core.range_field73724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field73724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field73724.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.range_field73724.call(null,name__22572__auto__,null);
});

sablono.core.range_field73724.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.range_field73724.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field73724);

/**
 * Creates a search input field.
 */
sablono.core.search_field73727 = (function sablono$core$search_field73727(){
var G__73729 = arguments.length;
switch (G__73729) {
case 1:
return sablono.core.search_field73727.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field73727.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field73727.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.search_field73727.call(null,name__22572__auto__,null);
});

sablono.core.search_field73727.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.search_field73727.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field73727);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field73730 = (function sablono$core$tel_field73730(){
var G__73732 = arguments.length;
switch (G__73732) {
case 1:
return sablono.core.tel_field73730.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field73730.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field73730.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.tel_field73730.call(null,name__22572__auto__,null);
});

sablono.core.tel_field73730.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.tel_field73730.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field73730);

/**
 * Creates a text input field.
 */
sablono.core.text_field73733 = (function sablono$core$text_field73733(){
var G__73735 = arguments.length;
switch (G__73735) {
case 1:
return sablono.core.text_field73733.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field73733.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field73733.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.text_field73733.call(null,name__22572__auto__,null);
});

sablono.core.text_field73733.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.text_field73733.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field73733);

/**
 * Creates a time input field.
 */
sablono.core.time_field73736 = (function sablono$core$time_field73736(){
var G__73738 = arguments.length;
switch (G__73738) {
case 1:
return sablono.core.time_field73736.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field73736.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field73736.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.time_field73736.call(null,name__22572__auto__,null);
});

sablono.core.time_field73736.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.time_field73736.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field73736);

/**
 * Creates a url input field.
 */
sablono.core.url_field73739 = (function sablono$core$url_field73739(){
var G__73741 = arguments.length;
switch (G__73741) {
case 1:
return sablono.core.url_field73739.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field73739.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field73739.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.url_field73739.call(null,name__22572__auto__,null);
});

sablono.core.url_field73739.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.url_field73739.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field73739);

/**
 * Creates a week input field.
 */
sablono.core.week_field73742 = (function sablono$core$week_field73742(){
var G__73744 = arguments.length;
switch (G__73744) {
case 1:
return sablono.core.week_field73742.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field73742.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field73742.cljs$core$IFn$_invoke$arity$1 = (function (name__22572__auto__){
return sablono.core.week_field73742.call(null,name__22572__auto__,null);
});

sablono.core.week_field73742.cljs$core$IFn$_invoke$arity$2 = (function (name__22572__auto__,value__22573__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22572__auto__,value__22573__auto__);
});

sablono.core.week_field73742.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field73742);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box73762 = (function sablono$core$check_box73762(){
var G__73764 = arguments.length;
switch (G__73764) {
case 1:
return sablono.core.check_box73762.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box73762.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box73762.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box73762.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box73762.call(null,name,null);
});

sablono.core.check_box73762.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box73762.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box73762.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box73762.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box73762);
/**
 * Creates a radio button.
 */
sablono.core.radio_button73766 = (function sablono$core$radio_button73766(){
var G__73768 = arguments.length;
switch (G__73768) {
case 1:
return sablono.core.radio_button73766.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button73766.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button73766.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button73766.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button73766.call(null,group,null);
});

sablono.core.radio_button73766.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button73766.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button73766.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button73766.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button73766);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options73770 = (function sablono$core$select_options73770(){
var G__73772 = arguments.length;
switch (G__73772) {
case 1:
return sablono.core.select_options73770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options73770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options73770.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options73770.call(null,coll,null);
});

sablono.core.select_options73770.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__16816__auto__ = (function sablono$core$iter__73773(s__73774){
return (new cljs.core.LazySeq(null,(function (){
var s__73774__$1 = s__73774;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__73774__$1);
if(temp__4425__auto__){
var s__73774__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__73774__$2)){
var c__16814__auto__ = cljs.core.chunk_first.call(null,s__73774__$2);
var size__16815__auto__ = cljs.core.count.call(null,c__16814__auto__);
var b__73776 = cljs.core.chunk_buffer.call(null,size__16815__auto__);
if((function (){var i__73775 = (0);
while(true){
if((i__73775 < size__16815__auto__)){
var x = cljs.core._nth.call(null,c__16814__auto__,i__73775);
cljs.core.chunk_append.call(null,b__73776,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__73779 = x;
var text = cljs.core.nth.call(null,vec__73779,(0),null);
var val = cljs.core.nth.call(null,vec__73779,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__73779,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options73770.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__73782 = (i__73775 + (1));
i__73775 = G__73782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73776),sablono$core$iter__73773.call(null,cljs.core.chunk_rest.call(null,s__73774__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73776),null);
}
} else {
var x = cljs.core.first.call(null,s__73774__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__73780 = x;
var text = cljs.core.nth.call(null,vec__73780,(0),null);
var val = cljs.core.nth.call(null,vec__73780,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__73780,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options73770.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__73773.call(null,cljs.core.rest.call(null,s__73774__$2)));
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

sablono.core.select_options73770.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options73770);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down73783 = (function sablono$core$drop_down73783(){
var G__73785 = arguments.length;
switch (G__73785) {
case 2:
return sablono.core.drop_down73783.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down73783.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down73783.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down73783.call(null,name,options,null);
});

sablono.core.drop_down73783.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down73783.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down73783);
/**
 * Creates a text area element.
 */
sablono.core.text_area73787 = (function sablono$core$text_area73787(){
var G__73789 = arguments.length;
switch (G__73789) {
case 1:
return sablono.core.text_area73787.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area73787.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area73787.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area73787.call(null,name,null);
});

sablono.core.text_area73787.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area73787.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area73787);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label73791 = (function sablono$core$label73791(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label73791);
/**
 * Creates a submit button.
 */
sablono.core.submit_button73792 = (function sablono$core$submit_button73792(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button73792);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button73793 = (function sablono$core$reset_button73793(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button73793);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to73794 = (function sablono$core$form_to73794(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to73794.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

sablono.core.form_to73794.cljs$core$IFn$_invoke$arity$variadic = (function (p__73797,body){
var vec__73798 = p__73797;
var method = cljs.core.nth.call(null,vec__73798,(0),null);
var action = cljs.core.nth.call(null,vec__73798,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to73794.cljs$lang$maxFixedArity = (1);

sablono.core.form_to73794.cljs$lang$applyTo = (function (seq73795){
var G__73796 = cljs.core.first.call(null,seq73795);
var seq73795__$1 = cljs.core.next.call(null,seq73795);
return sablono.core.form_to73794.cljs$core$IFn$_invoke$arity$variadic(G__73796,seq73795__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to73794);

//# sourceMappingURL=core.js.map