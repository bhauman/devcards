goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__39225_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__39225_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(){
devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__16050__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__16050__auto__){
var map__39229 = c;
var map__39229__$1 = ((cljs.core.seq_QMARK_.call(null,map__39229))?cljs.core.apply.call(null,cljs.core.hash_map,map__39229):map__39229);
var path = cljs.core.get.call(null,map__39229__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__39229__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__16050__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"card?","card?",2082377665,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(){
var argseq__17102__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__17102__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
return devcards.core.react_raw.call(null,devcards.util.markdown.less_sensitive_markdown.call(null,strs));
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq39230){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39230));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
return React.createElement("div",{"className": [cljs.core.str(devcards.system.devcards_rendered_card_class),cljs.core.str((cljs.core.truth_(cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null)))?" com-rigsomelight-devcards-devcard-padding":""))].join('')},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(){
var G__39232 = arguments.length;
switch (G__39232) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__39233 = card;
var map__39233__$1 = ((cljs.core.seq_QMARK_.call(null,map__39233))?cljs.core.apply.call(null,cljs.core.hash_map,map__39233):map__39233);
var path = cljs.core.get.call(null,map__39233__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__39233__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
var attrs39234 = devcards.core.naked_card.call(null,children,card);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39234))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-card-base-no-pad"], null)], null),attrs39234)):{"className": "com-rigsomelight-devcards-card-base-no-pad"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39234))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39234)], null))));
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs39235 = (cljs.core.truth_(path)?React.createElement("span",{"onClick": devcards.system.prevent__GT_.call(null,((function (map__39233,map__39233__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__39233,map__39233__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," "):(function (){var attrs39236 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39236))?sablono.interpreter.attributes.call(null,attrs39236):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39236))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39236)], null))));
})());
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39235))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading"], null)], null),attrs39235)):{"className": "com-rigsomelight-devcards-panel-heading"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39235))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39235)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

devcards.core.IDevcardOptions = (function (){var obj39241 = {};
return obj39241;
})();

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((function (){var and__16050__auto__ = this$;
if(and__16050__auto__){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2;
} else {
return and__16050__auto__;
}
})()){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__16698__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16062__auto__ = (devcards.core._devcard_options[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (devcards.core._devcard_options["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
})().call(null,this$,devcard_opts);
}
});


devcards.core.IDevcard = (function (){var obj39243 = {};
return obj39243;
})();

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((function (){var and__16050__auto__ = this$;
if(and__16050__auto__){
return this$.devcards$core$IDevcard$_devcard$arity$2;
} else {
return and__16050__auto__;
}
})()){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__16698__auto__ = (((this$ == null))?null:this$);
return (function (){var or__16062__auto__ = (devcards.core._devcard[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (devcards.core._devcard["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
})().call(null,this$,devcard_opts);
}
});

if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass({"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null))};
}), "componentWillMount": (function (){
var this$ = this;
return this$.setState((function (){var or__16062__auto__ = (function (){var and__16050__auto__ = this$.state.data_atom;
if(cljs.core.truth_(and__16050__auto__)){
return this$.state;
} else {
return and__16050__auto__;
}
})();
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return {"data_atom": (function (){var data = (function (){var or__16062__auto____$1 = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(this$.props.card);
if(cljs.core.truth_(or__16062__auto____$1)){
return or__16062__auto____$1;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if((function (){var G__39244 = data;
if(G__39244){
var bit__16736__auto__ = (G__39244.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__16736__auto__) || (G__39244.cljs$core$IAtom$)){
return true;
} else {
if((!G__39244.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__39244);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__39244);
}
})()){
return data;
} else {
return cljs.core.atom.call(null,data);
}
})()};
}
})());
}), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = this$.state.data_atom;
var id = this$.state.unique_id;
if(cljs.core.truth_((function (){var and__16050__auto__ = data_atom;
if(cljs.core.truth_(and__16050__auto__)){
return id;
} else {
return and__16050__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(this$.props.card);
var data_atom = this$.state.data_atom;
var id = this$.state.unique_id;
if(cljs.core.truth_((function (){var and__16050__auto__ = data_atom;
if(cljs.core.truth_(and__16050__auto__)){
return id;
} else {
return and__16050__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,options,this$){
return (function (_,___$1,___$2,___$3){
var map__39245 = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(this$.props.card);
var map__39245__$1 = ((cljs.core.seq_QMARK_.call(null,map__39245))?cljs.core.apply.call(null,cljs.core.hash_map,map__39245):map__39245);
var watch_atom = cljs.core.get.call(null,map__39245__$1,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308));
var inspect_data = cljs.core.get.call(null,map__39245__$1,new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006));
var history = cljs.core.get.call(null,map__39245__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(((watch_atom === false)?(function (){var or__16062__auto__ = inspect_data;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return history;
}
})():true))){
return this$.forceUpdate();
} else {
return null;
}
});})(data_atom,id,options,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var card = this$.props.card;
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,this$.state.data_atom,this$);
} else {
return m;
}
})();
var document = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4425__auto__)){
var docu = temp__4425__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,this$.state.data_atom):null);
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs39246 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,this$.state.data_atom));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39246))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs39246)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39246))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39246)], null))));
})():null);
var children = (function (){var attrs39247 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,edn),main),hist_ctl),document);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39247))?sablono.interpreter.attributes.call(null,attrs39247):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39247))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39247)], null))));
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card);
} else {
var attrs39248 = children;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39248))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-frameless"], null)], null),attrs39248)):{"className": "com-rigsomelight-devcards-frameless"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39248))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39248)], null))));
}
})});
}
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "renderIntoDOM": (function (){
var this$ = this;
var temp__4425__auto__ = this$.props.node_fn;
if(cljs.core.truth_(temp__4425__auto__)){
var node_fn = temp__4425__auto__;
var temp__4425__auto____$1 = (this$.refs[this$.state.unique_id]);
if(cljs.core.truth_(temp__4425__auto____$1)){
var comp = temp__4425__auto____$1;
var temp__4425__auto____$2 = React.findDOMNode(comp);
if(cljs.core.truth_(temp__4425__auto____$2)){
var node = temp__4425__auto____$2;
return node_fn.call(null,this$.props.data_atom,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__16050__auto__ = this$.props.node_fn;
if(cljs.core.truth_(and__16050__auto__)){
return cljs.core.not_EQ_.call(null,this$.props.node_fn,prevP.node_fn);
} else {
return and__16050__auto__;
}
})())){
return this$.renderIntoDOM();
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return this$.renderIntoDOM();
}), "render": (function (){
var this$ = this;
return React.DOM.div({"ref": this$.state.unique_id},"Card has not mounted DOM node.");
})});
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__16062__auto__ = x === true;
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = x === false;
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
var or__16062__auto____$2 = (x == null);
if(or__16062__auto____$2){
return or__16062__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__16062__auto__ = typeof x === 'string';
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (x == null);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
return (main_obj["_isReactElement"]);
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__39249_SHARP_){
return !(p1__39249_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__39256 = opts;
var map__39256__$1 = ((cljs.core.seq_QMARK_.call(null,map__39256))?cljs.core.apply.call(null,cljs.core.hash_map,map__39256):map__39256);
var name = cljs.core.get.call(null,map__39256__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__39256__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__39256__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__39256__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__16062__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (options == null);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__16062__auto__ = (main_obj == null);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = cljs.core.fn_QMARK_.call(null,main_obj);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
var or__16062__auto____$2 = devcards.core.react_element_QMARK_.call(null,main_obj);
if(cljs.core.truth_(or__16062__auto____$2)){
return or__16062__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),new cljs.core.Keyword(null,"message","message",-406056002),"should be a function or a ReactElement or nil.",new cljs.core.Keyword(null,"value","value",305978217),main_obj], null);
}
}
}
})(),(function (){var or__16062__auto__ = (initial_data == null);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
var or__16062__auto____$2 = (function (){var G__39260 = initial_data;
if(G__39260){
var bit__16736__auto__ = (G__39260.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__16736__auto__) || (G__39260.cljs$core$IAtom$)){
return true;
} else {
if((!G__39260.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__39260);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__39260);
}
})();
if(or__16062__auto____$2){
return or__16062__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__39256,map__39256__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__39250_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__39250_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__39256,map__39256__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))):null))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Recieved: ",(function (){var attrs39262 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs39262))?sablono.interpreter.attributes.call(null,attrs39262):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39262))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39262)], null))));
})()));
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs39266 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39266))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs39266)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39266))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39266)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs39267 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39267))?sablono.interpreter.attributes.call(null,attrs39267):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39267))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39267)], null))));
})(),((cljs.core.map_QMARK_.call(null,opts))?sablono.interpreter.interpret.call(null,(function (){var attrs39268 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39268))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs39268)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39268))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39268)], null))));
})()):null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__39269_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__39269_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
* @param {*} obj
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16657__auto__,k__16658__auto__){
var self__ = this;
var this__16657__auto____$1 = this;
return cljs.core._lookup.call(null,this__16657__auto____$1,k__16658__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16659__auto__,k39271,else__16660__auto__){
var self__ = this;
var this__16659__auto____$1 = this;
var G__39273 = (((k39271 instanceof cljs.core.Keyword))?k39271.fqn:null);
switch (G__39273) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39271,else__16660__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16671__auto__,writer__16672__auto__,opts__16673__auto__){
var self__ = this;
var this__16671__auto____$1 = this;
var pr_pair__16674__auto__ = ((function (this__16671__auto____$1){
return (function (keyval__16675__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16672__auto__,cljs.core.pr_writer,""," ","",opts__16673__auto__,keyval__16675__auto__);
});})(this__16671__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16672__auto__,pr_pair__16674__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__16673__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16655__auto__){
var self__ = this;
var this__16655__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16651__auto__){
var self__ = this;
var this__16651__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16661__auto__){
var self__ = this;
var this__16661__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16652__auto__){
var self__ = this;
var this__16652__auto____$1 = this;
var h__16478__auto__ = self__.__hash;
if(!((h__16478__auto__ == null))){
return h__16478__auto__;
} else {
var h__16478__auto____$1 = cljs.core.hash_imap.call(null,this__16652__auto____$1);
self__.__hash = h__16478__auto____$1;

return h__16478__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16653__auto__,other__16654__auto__){
var self__ = this;
var this__16653__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16050__auto__ = other__16654__auto__;
if(cljs.core.truth_(and__16050__auto__)){
var and__16050__auto____$1 = (this__16653__auto____$1.constructor === other__16654__auto__.constructor);
if(and__16050__auto____$1){
return cljs.core.equiv_map.call(null,this__16653__auto____$1,other__16654__auto__);
} else {
return and__16050__auto____$1;
}
} else {
return and__16050__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16666__auto__,k__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__16667__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16666__auto____$1),self__.__meta),k__16667__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16667__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16664__auto__,k__16665__auto__,G__39270){
var self__ = this;
var this__16664__auto____$1 = this;
var pred__39274 = cljs.core.keyword_identical_QMARK_;
var expr__39275 = k__16665__auto__;
if(cljs.core.truth_(pred__39274.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__39275))){
return (new devcards.core.IdentiyOptions(G__39270,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16665__auto__,G__39270),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16669__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16656__auto__,G__39270){
var self__ = this;
var this__16656__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__39270,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16662__auto__,entry__16663__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16663__auto__)){
return cljs.core._assoc.call(null,this__16662__auto____$1,cljs.core._nth.call(null,entry__16663__auto__,(0)),cljs.core._nth.call(null,entry__16663__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16662__auto____$1,entry__16663__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__16691__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__16691__auto__,writer__16692__auto__){
return cljs.core._write.call(null,writer__16692__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__39272){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__39272),null,cljs.core.dissoc.call(null,G__39272,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__39278){
var map__39280 = p__39278;
var map__39280__$1 = ((cljs.core.seq_QMARK_.call(null,map__39280))?cljs.core.apply.call(null,cljs.core.hash_map,map__39280):map__39280);
var devcard_opts = map__39280__$1;
var options = cljs.core.get.call(null,map__39280__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__39280,map__39280__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__39280,map__39280__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
* @param {*} obj
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16657__auto__,k__16658__auto__){
var self__ = this;
var this__16657__auto____$1 = this;
return cljs.core._lookup.call(null,this__16657__auto____$1,k__16658__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16659__auto__,k39282,else__16660__auto__){
var self__ = this;
var this__16659__auto____$1 = this;
var G__39284 = (((k39282 instanceof cljs.core.Keyword))?k39282.fqn:null);
switch (G__39284) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39282,else__16660__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16671__auto__,writer__16672__auto__,opts__16673__auto__){
var self__ = this;
var this__16671__auto____$1 = this;
var pr_pair__16674__auto__ = ((function (this__16671__auto____$1){
return (function (keyval__16675__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16672__auto__,cljs.core.pr_writer,""," ","",opts__16673__auto__,keyval__16675__auto__);
});})(this__16671__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16672__auto__,pr_pair__16674__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__16673__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16655__auto__){
var self__ = this;
var this__16655__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16651__auto__){
var self__ = this;
var this__16651__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16661__auto__){
var self__ = this;
var this__16661__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16652__auto__){
var self__ = this;
var this__16652__auto____$1 = this;
var h__16478__auto__ = self__.__hash;
if(!((h__16478__auto__ == null))){
return h__16478__auto__;
} else {
var h__16478__auto____$1 = cljs.core.hash_imap.call(null,this__16652__auto____$1);
self__.__hash = h__16478__auto____$1;

return h__16478__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16653__auto__,other__16654__auto__){
var self__ = this;
var this__16653__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16050__auto__ = other__16654__auto__;
if(cljs.core.truth_(and__16050__auto__)){
var and__16050__auto____$1 = (this__16653__auto____$1.constructor === other__16654__auto__.constructor);
if(and__16050__auto____$1){
return cljs.core.equiv_map.call(null,this__16653__auto____$1,other__16654__auto__);
} else {
return and__16050__auto____$1;
}
} else {
return and__16050__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16666__auto__,k__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__16667__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16666__auto____$1),self__.__meta),k__16667__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16667__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16664__auto__,k__16665__auto__,G__39281){
var self__ = this;
var this__16664__auto____$1 = this;
var pred__39285 = cljs.core.keyword_identical_QMARK_;
var expr__39286 = k__16665__auto__;
if(cljs.core.truth_(pred__39285.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__39286))){
return (new devcards.core.AtomLikeOptions(G__39281,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16665__auto__,G__39281),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16669__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16656__auto__,G__39281){
var self__ = this;
var this__16656__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__39281,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16662__auto__,entry__16663__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16663__auto__)){
return cljs.core._assoc.call(null,this__16662__auto____$1,cljs.core._nth.call(null,entry__16663__auto__,(0)),cljs.core._nth.call(null,entry__16663__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16662__auto____$1,entry__16663__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__16691__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__16691__auto__,writer__16692__auto__){
return cljs.core._write.call(null,writer__16692__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__39283){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__39283),null,cljs.core.dissoc.call(null,G__39283,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,(((function (){var G__39290 = main_obj;
if(G__39290){
var bit__16736__auto__ = (G__39290.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__16736__auto__) || (G__39290.cljs$core$IDeref$)){
return true;
} else {
if((!G__39290.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__39290);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__39290);
}
})())?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
* @param {*} obj
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16657__auto__,k__16658__auto__){
var self__ = this;
var this__16657__auto____$1 = this;
return cljs.core._lookup.call(null,this__16657__auto____$1,k__16658__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16659__auto__,k39292,else__16660__auto__){
var self__ = this;
var this__16659__auto____$1 = this;
var G__39294 = (((k39292 instanceof cljs.core.Keyword))?k39292.fqn:null);
switch (G__39294) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39292,else__16660__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16671__auto__,writer__16672__auto__,opts__16673__auto__){
var self__ = this;
var this__16671__auto____$1 = this;
var pr_pair__16674__auto__ = ((function (this__16671__auto____$1){
return (function (keyval__16675__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16672__auto__,cljs.core.pr_writer,""," ","",opts__16673__auto__,keyval__16675__auto__);
});})(this__16671__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16672__auto__,pr_pair__16674__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__16673__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16655__auto__){
var self__ = this;
var this__16655__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16651__auto__){
var self__ = this;
var this__16651__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16661__auto__){
var self__ = this;
var this__16661__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16652__auto__){
var self__ = this;
var this__16652__auto____$1 = this;
var h__16478__auto__ = self__.__hash;
if(!((h__16478__auto__ == null))){
return h__16478__auto__;
} else {
var h__16478__auto____$1 = cljs.core.hash_imap.call(null,this__16652__auto____$1);
self__.__hash = h__16478__auto____$1;

return h__16478__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16653__auto__,other__16654__auto__){
var self__ = this;
var this__16653__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16050__auto__ = other__16654__auto__;
if(cljs.core.truth_(and__16050__auto__)){
var and__16050__auto____$1 = (this__16653__auto____$1.constructor === other__16654__auto__.constructor);
if(and__16050__auto____$1){
return cljs.core.equiv_map.call(null,this__16653__auto____$1,other__16654__auto__);
} else {
return and__16050__auto____$1;
}
} else {
return and__16050__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16666__auto__,k__16667__auto__){
var self__ = this;
var this__16666__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__16667__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16666__auto____$1),self__.__meta),k__16667__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16667__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16664__auto__,k__16665__auto__,G__39291){
var self__ = this;
var this__16664__auto____$1 = this;
var pred__39295 = cljs.core.keyword_identical_QMARK_;
var expr__39296 = k__16665__auto__;
if(cljs.core.truth_(pred__39295.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__39296))){
return (new devcards.core.EdnLikeOptions(G__39291,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16665__auto__,G__39291),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16669__auto__){
var self__ = this;
var this__16669__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16656__auto__,G__39291){
var self__ = this;
var this__16656__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__39291,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16662__auto__,entry__16663__auto__){
var self__ = this;
var this__16662__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16663__auto__)){
return cljs.core._assoc.call(null,this__16662__auto____$1,cljs.core._nth.call(null,entry__16663__auto__,(0)),cljs.core._nth.call(null,entry__16663__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16662__auto____$1,entry__16663__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__16691__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__16691__auto__,writer__16692__auto__){
return cljs.core._write.call(null,writer__16692__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__39293){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__39293),null,cljs.core.dissoc.call(null,G__39293,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__16050__auto__ = (function (){var G__39303 = x;
if(G__39303){
var bit__16736__auto__ = (G__39303.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__16736__auto__) || (G__39303.cljs$core$IWatchable$)){
return true;
} else {
if((!G__39303.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__39303);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__39303);
}
})();
if(and__16050__auto__){
var G__39304 = x;
if(G__39304){
var bit__16736__auto__ = (G__39304.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__16736__auto__) || (G__39304.cljs$core$IDeref$)){
return true;
} else {
if((!G__39304.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__39304);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__39304);
}
} else {
return and__16050__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
var G__39306 = x;
if(G__39306){
var bit__16736__auto__ = (G__39306.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__16736__auto__) || (G__39306.cljs$core$IDeref$)){
return true;
} else {
if((!G__39306.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__39306);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__39306);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if((function (){var G__39308 = main_obj;
if(G__39308){
var bit__16736__auto__ = null;
if(cljs.core.truth_((function (){var or__16062__auto__ = bit__16736__auto__;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return G__39308.devcards$core$IDevcardOptions$;
}
})())){
return true;
} else {
if((!G__39308.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,G__39308);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,G__39308);
}
})()){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__39310 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(G__39310){
var bit__16736__auto__ = null;
if(cljs.core.truth_((function (){var or__16062__auto__ = bit__16736__auto__;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return G__39310.devcards$core$IDevcard$;
}
})())){
return true;
} else {
if((!G__39310.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__39310);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__39310);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
if(typeof devcards.core.HistoryComponent !== 'undefined'){
} else {
devcards.core.HistoryComponent = React.createClass({"componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__16050__auto__ = this$.props.node_fn;
if(cljs.core.truth_(and__16050__auto__)){
return cljs.core.not_EQ_.call(null,this$.props.node_fn,prevP.node_fn);
} else {
return and__16050__auto__;
}
})())){
return this$.renderIntoDOM();
} else {
return null;
}
}), "forwardInHistory": (function (){
var this$ = this;
var history_atom = this$.state.history_atom;
var map__39311 = cljs.core.deref.call(null,history_atom);
var map__39311__$1 = ((cljs.core.seq_QMARK_.call(null,map__39311))?cljs.core.apply.call(null,cljs.core.hash_map,map__39311):map__39311);
var history = cljs.core.get.call(null,map__39311__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__39311__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(this$.canGoForward())){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,this$.props.data_atom,cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
}), "backInHistory": (function (){
var this$ = this;
var history_atom = this$.state.history_atom;
var map__39312 = cljs.core.deref.call(null,history_atom);
var map__39312__$1 = ((cljs.core.seq_QMARK_.call(null,map__39312))?cljs.core.apply.call(null,cljs.core.hash_map,map__39312):map__39312);
var history = cljs.core.get.call(null,map__39312__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__39312__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(this$.canGoBack())){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,this$.props.data_atom,cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
}), "render": (function (){
var this$ = this;
return React.createElement("div",{"style": {"visibility": (cljs.core.truth_((function (){var or__16062__auto__ = this$.canGoBack();
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return this$.canGoForward();
}
})())?"visible":"hidden")}, "className": "com-rigsomelight-devcards-history-control-bar"},React.createElement("a",{"style": {"visibility": (cljs.core.truth_(this$.canGoBack())?"visible":"hidden")}, "onClick": ((function (this$){
return (function (e){
e.preventDefault();

return this$.backInHistory();
});})(this$))
, "className": "com-rigsomelight-devcards-history-control-left"},""),React.createElement("a",{"style": {"visibility": (cljs.core.truth_(this$.canGoForward())?"visible":"hidden")}, "onClick": ((function (this$){
return (function (e){
e.preventDefault();

return cljs.core.reset_BANG_.call(null,this$.props.data_atom,cljs.core.deref.call(null,this$.props.data_atom));
});})(this$))
, "className": "com-rigsomelight-devcards-history-stop"},""),React.createElement("a",{"style": {"visibility": (cljs.core.truth_(this$.canGoForward())?"visible":"hidden")}, "onClick": ((function (this$){
return (function (e){
e.preventDefault();

return this$.forwardInHistory();
});})(this$))
, "className": "com-rigsomelight-devcards-history-control-right"},""),React.createElement("span",{"style": {"visibility": (cljs.core.truth_(this$.canGoForward())?"visible":"hidden")}, "onClick": ((function (this$){
return (function (e){
e.preventDefault();

return this$.continueOn();
});})(this$))
, "className": "com-rigsomelight-devcards-history-control-fast-forward"},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"})));
}), "inTimeMachine": (function (){
var this$ = this;
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$.state.history_atom)) === (0)));
}), "getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "canGoForward": (function (){
var this$ = this;
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$.state.history_atom)) > (0));
}), "canGoBack": (function (){
var this$ = this;
var map__39319 = cljs.core.deref.call(null,this$.state.history_atom);
var map__39319__$1 = ((cljs.core.seq_QMARK_.call(null,map__39319))?cljs.core.apply.call(null,cljs.core.hash_map,map__39319):map__39319);
var history = cljs.core.get.call(null,map__39319__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__39319__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = this$.props.data_atom;
var id = this$.state.unique_id;
var history_atom = this$.state.history_atom;
if(cljs.core.truth_((function (){var and__16050__auto__ = data_atom;
if(cljs.core.truth_(and__16050__auto__)){
return id;
} else {
return and__16050__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(this$.inTimeMachine())){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__39320){
var map__39321 = p__39320;
var map__39321__$1 = ((cljs.core.seq_QMARK_.call(null,map__39321))?cljs.core.apply.call(null,cljs.core.hash_map,map__39321):map__39321);
var ha = map__39321__$1;
var pointer = cljs.core.get.call(null,map__39321__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__39321__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__39321__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "continueOn": (function (){
var this$ = this;
var history_atom = this$.state.history_atom;
var map__39322 = cljs.core.deref.call(null,history_atom);
var map__39322__$1 = ((cljs.core.seq_QMARK_.call(null,map__39322))?cljs.core.apply.call(null,cljs.core.hash_map,map__39322):map__39322);
var history = cljs.core.get.call(null,map__39322__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(this$.canGoForward())){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,this$.props.data_atom,cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,this$.state.history_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,this$.props.data_atom)));
})});
}
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_39324 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_39324;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__16957__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16958__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16959__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16960__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16961__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16961__auto__,method_table__16957__auto__,prefer_table__16958__auto__,method_cache__16959__auto__,cached_hierarchy__16960__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs39325 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39325))?sablono.interpreter.attributes.call(null,attrs39325):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39325))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39325)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__39326,body){
var map__39329 = p__39326;
var map__39329__$1 = ((cljs.core.seq_QMARK_.call(null,map__39329))?cljs.core.apply.call(null,cljs.core.hash_map,map__39329):map__39329);
var message = cljs.core.get.call(null,map__39329__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs39330 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39330))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs39330)):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39330))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39330)], null))));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__39331){
var map__39334 = p__39331;
var map__39334__$1 = ((cljs.core.seq_QMARK_.call(null,map__39334))?cljs.core.apply.call(null,cljs.core.hash_map,map__39334):map__39334);
var m = map__39334__$1;
var expected = cljs.core.get.call(null,map__39334__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
return devcards.core.display_message.call(null,m,React.createElement("pre",null,(function (){var attrs39335 = devcards.util.utils.pprint_code.call(null,expected);
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs39335))?sablono.interpreter.attributes.call(null,attrs39335):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39335))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39335)], null))));
})()));
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs39338 = new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m);
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs39338))?sablono.interpreter.attributes.call(null,attrs39338):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39338))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39338)], null))));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs39339 = devcards.core.react_raw.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39339))?sablono.interpreter.attributes.call(null,attrs39339):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39339))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39339)], null))));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__39340){
var map__39341 = p__39340;
var map__39341__$1 = ((cljs.core.seq_QMARK_.call(null,map__39341))?cljs.core.apply.call(null,cljs.core.hash_map,map__39341):map__39341);
var testing_contexts = cljs.core.get.call(null,map__39341__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs39342 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map.call(null,((function (map__39341,map__39341__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__39341,map__39341__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.first.call(null,testing_contexts)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39342))?sablono.interpreter.attributes.call(null,attrs39342):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39342))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39342)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),devcards.util.markdown.less_sensitive_markdown.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null))], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs39346 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__39347,t){
var map__39348 = p__39347;
var map__39348__$1 = ((cljs.core.seq_QMARK_.call(null,map__39348))?cljs.core.apply.call(null,cljs.core.hash_map,map__39348):map__39348);
var last_context = cljs.core.get.call(null,map__39348__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__39348__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = cljs.core._conj.call(null,cljs.core.List.EMPTY,devcards.core.test_renderer.call(null,t));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)))),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,tests)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39346))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs39346)):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs39346))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39346)], null))));
});
devcards.core.render_test_frame = (function devcards$core$render_test_frame(test_summary){
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (path,tests){
return (function (p__39357){
var map__39358 = p__39357;
var map__39358__$1 = ((cljs.core.seq_QMARK_.call(null,map__39358))?cljs.core.apply.call(null,cljs.core.hash_map,map__39358):map__39358);
var type = cljs.core.get.call(null,map__39358__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(path,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__39356 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__39356__$1 = ((cljs.core.seq_QMARK_.call(null,map__39356))?cljs.core.apply.call(null,cljs.core.hash_map,map__39356):map__39356);
var fail = cljs.core.get.call(null,map__39356__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__39356__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__39356__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return ((function (path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error){
return (function (data_atom,owner){
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("span",{"onClick": devcards.system.prevent__GT_.call(null,((function (path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error))
)},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join('')):null)),React.createElement("span",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error){
return (function (){
return cljs.core.swap_BANG_.call(null,data_atom,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),cljs.core.identity);
});})(path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),((((fail + error) === (0)))?null:sablono.interpreter.interpret.call(null,React.createElement("span",{"style": {"float": "right", "backgroundColor": "#d9534f", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error){
return (function (){
return cljs.core.swap_BANG_.call(null,data_atom,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),((function (path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error){
return (function (p__39359){
var map__39360 = p__39359;
var map__39360__$1 = ((cljs.core.seq_QMARK_.call(null,map__39360))?cljs.core.apply.call(null,cljs.core.hash_map,map__39360):map__39360);
var type = cljs.core.get.call(null,map__39360__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error))
);
});})(path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,(fail + error))))),(((pass === (0)))?null:sablono.interpreter.interpret.call(null,React.createElement("span",{"style": {"float": "right", "backgroundColor": "#5cb85c", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error){
return (function (){
return cljs.core.swap_BANG_.call(null,data_atom,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),((function (path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error){
return (function (p__39361){
var map__39362 = p__39361;
var map__39362__$1 = ((cljs.core.seq_QMARK_.call(null,map__39362))?cljs.core.apply.call(null,cljs.core.hash_map,map__39362):map__39362);
var type = cljs.core.get.call(null,map__39362__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error))
);
});})(path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__16062__auto__ = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom));
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
;})(path,tests,some_tests,total_tests,map__39356,map__39356__$1,fail,pass,error))
});
devcards.core.test_card_help = (function devcards$core$test_card_help(){
var argseq__17102__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return devcards.core.test_card_help.cljs$core$IFn$_invoke$arity$variadic(argseq__17102__auto__);
});

devcards.core.test_card_help.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
var tests = devcards.core.run_test_block.call(null,(function (){
var seq__39364 = cljs.core.seq.call(null,test_thunks);
var chunk__39365 = null;
var count__39366 = (0);
var i__39367 = (0);
while(true){
if((i__39367 < count__39366)){
var f = cljs.core._nth.call(null,chunk__39365,i__39367);
f.call(null);

var G__39368 = seq__39364;
var G__39369 = chunk__39365;
var G__39370 = count__39366;
var G__39371 = (i__39367 + (1));
seq__39364 = G__39368;
chunk__39365 = G__39369;
count__39366 = G__39370;
i__39367 = G__39371;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39364);
if(temp__4425__auto__){
var seq__39364__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39364__$1)){
var c__16847__auto__ = cljs.core.chunk_first.call(null,seq__39364__$1);
var G__39372 = cljs.core.chunk_rest.call(null,seq__39364__$1);
var G__39373 = c__16847__auto__;
var G__39374 = cljs.core.count.call(null,c__16847__auto__);
var G__39375 = (0);
seq__39364 = G__39372;
chunk__39365 = G__39373;
count__39366 = G__39374;
i__39367 = G__39375;
continue;
} else {
var f = cljs.core.first.call(null,seq__39364__$1);
f.call(null);

var G__39376 = cljs.core.next.call(null,seq__39364__$1);
var G__39377 = null;
var G__39378 = (0);
var G__39379 = (0);
seq__39364 = G__39376;
chunk__39365 = G__39377;
count__39366 = G__39378;
i__39367 = G__39379;
continue;
}
} else {
return null;
}
}
break;
}
}));
return devcards.core.render_test_frame.call(null,tests);
});

devcards.core.test_card_help.cljs$lang$maxFixedArity = (0);

devcards.core.test_card_help.cljs$lang$applyTo = (function (seq39363){
return devcards.core.test_card_help.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39363));
});
