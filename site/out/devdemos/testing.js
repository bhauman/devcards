// Compiled by ClojureScript 0.0-3269 {}
goog.provide('devdemos.testing');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('cljs.test');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.testing","devdemos.testing",815097491),new cljs.core.Keyword(null,"some-tests","some-tests",2125020202)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"some-tests",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof devdemos.testing.t67358 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.testing.t67358 = (function (meta67359){
this.meta67359 = meta67359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.testing.t67358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67360,meta67359__$1){
var self__ = this;
var _67360__$1 = this;
return (new devdemos.testing.t67358(meta67359__$1));
});

devdemos.testing.t67358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67360){
var self__ = this;
var _67360__$1 = this;
return self__.meta67359;
});

devdemos.testing.t67358.prototype.devcards$core$IDevcardOptions$ = true;

devdemos.testing.t67358.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__65860__auto__,devcard_opts__65861__auto__){
var self__ = this;
var this__65860__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__65861__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card_help.call(null,((function (this__65860__auto____$1){
return (function (){
return devcards.core.test_doc.call(null,"## this should show up");
});})(this__65860__auto____$1))
,((function (this__65860__auto____$1){
return (function (){
try{var values__23124__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(1));
var result__23125__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto__);
if(cljs.core.truth_(result__23125__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23125__auto__;
}catch (e67361){var t__23162__auto__ = e67361;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});})(this__65860__auto____$1))
,((function (this__65860__auto____$1){
return (function (){
try{var values__23124__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),(1));
var result__23125__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto__);
if(cljs.core.truth_(result__23125__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23125__auto__;
}catch (e67362){var t__23162__auto__ = e67362;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});})(this__65860__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__65861__auto__))));
});

devdemos.testing.t67358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67359","meta67359",996900530,null)], null);
});

devdemos.testing.t67358.cljs$lang$type = true;

devdemos.testing.t67358.cljs$lang$ctorStr = "devdemos.testing/t67358";

devdemos.testing.t67358.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.testing/t67358");
});

devdemos.testing.__GT_t67358 = (function devdemos$testing$__GT_t67358(meta67359){
return (new devdemos.testing.t67358(meta67359));
});

}

return (new devdemos.testing.t67358(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.testing","devdemos.testing",815097491),new cljs.core.Keyword(null,"first-testers","first-testers",-869633278)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"first-testers",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof devdemos.testing.t67363 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.testing.t67363 = (function (meta67364){
this.meta67364 = meta67364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.testing.t67363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67365,meta67364__$1){
var self__ = this;
var _67365__$1 = this;
return (new devdemos.testing.t67363(meta67364__$1));
});

devdemos.testing.t67363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67365){
var self__ = this;
var _67365__$1 = this;
return self__.meta67364;
});

devdemos.testing.t67363.prototype.devcards$core$IDevcardOptions$ = true;

devdemos.testing.t67363.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__65860__auto__,devcard_opts__65861__auto__){
var self__ = this;
var this__65860__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__65861__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card_help.call(null,((function (this__65860__auto____$1){
return (function (){
return devcards.core.test_doc.call(null,"## This is documentation\n   It should work well");
});})(this__65860__auto____$1))
,((function (this__65860__auto____$1){
return (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"good stuff");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___67388 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___67389 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67388);
if(cljs.core.truth_(result__23125__auto___67389)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67388),new cljs.core.Keyword(null,"message","message",-406056002),"Testing the adding"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67388)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Testing the adding"], null));
}

}catch (e67366){var t__23162__auto___67390 = e67366;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67390,new cljs.core.Keyword(null,"message","message",-406056002),"Testing the adding"], null));
}
try{var values__23124__auto___67391 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___67392 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67391);
if(cljs.core.truth_(result__23125__auto___67392)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67391),new cljs.core.Keyword(null,"message","message",-406056002),"This shouldn't work"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67391)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This shouldn't work"], null));
}

}catch (e67367){var t__23162__auto___67393 = e67367;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67393,new cljs.core.Keyword(null,"message","message",-406056002),"This shouldn't work"], null));
}
try{var values__23124__auto___67394 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),(1));
var result__23125__auto___67395 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67394);
if(cljs.core.truth_(result__23125__auto___67395)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67394),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67394)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67368){var t__23162__auto___67396 = e67368;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67396,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto___67397 = false;
if(value__23127__auto___67397){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___67397,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___67397,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67369){var t__23162__auto___67398 = e67369;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67398,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto__ = (function(){throw "heck"})();
if(cljs.core.truth_(value__23127__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"heck"),new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"heck"),new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__23127__auto__;
}catch (e67370){var t__23162__auto__ = e67370;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"heck"),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__23182__auto__;
});})(this__65860__auto____$1))
,((function (this__65860__auto____$1){
return (function (){
return devcards.core.test_doc.call(null,"## And here is more documentation");
});})(this__65860__auto____$1))
,((function (this__65860__auto____$1){
return (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"bad stuff");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___67399 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___67400 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67399);
if(cljs.core.truth_(result__23125__auto___67400)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67399),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67399)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67371){var t__23162__auto___67401 = e67371;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67401,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23124__auto___67402 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___67403 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67402);
if(cljs.core.truth_(result__23125__auto___67403)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67402),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67402)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67372){var t__23162__auto___67404 = e67372;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67404,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto___67405 = false;
if(value__23127__auto___67405){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___67405,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___67405,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67373){var t__23162__auto___67406 = e67373;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67406,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"mad stuff");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___67407 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___67408 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67407);
if(cljs.core.truth_(result__23125__auto___67408)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67407),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67407)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67374){var t__23162__auto___67409 = e67374;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67409,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23124__auto___67410 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___67411 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67410);
if(cljs.core.truth_(result__23125__auto___67411)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67410),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67410)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67375){var t__23162__auto___67412 = e67375;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67412,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto__ = false;
if(value__23127__auto__){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__23127__auto__;
}catch (e67376){var t__23162__auto__ = e67376;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__23182__auto__;
})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__23182__auto__;
});})(this__65860__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__65861__auto__))));
});

devdemos.testing.t67363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67364","meta67364",-46957661,null)], null);
});

devdemos.testing.t67363.cljs$lang$type = true;

devdemos.testing.t67363.cljs$lang$ctorStr = "devdemos.testing/t67363";

devdemos.testing.t67363.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.testing/t67363");
});

devdemos.testing.__GT_t67363 = (function devdemos$testing$__GT_t67363(meta67364){
return (new devdemos.testing.t67363(meta67364));
});

}

return (new devdemos.testing.t67363(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

devdemos.testing.first_testers = (function devdemos$testing$first_testers(){
return cljs.test.test_var.call(null,devdemos$testing$first_testers.cljs$lang$var);
});
devdemos.testing.first_testers.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"good stuff");

var ret__23182__auto___67413 = (function (){
try{var values__23124__auto___67414 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___67415 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67414);
if(cljs.core.truth_(result__23125__auto___67415)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67414),new cljs.core.Keyword(null,"message","message",-406056002),"Testing the adding"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67414)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Testing the adding"], null));
}

}catch (e67377){var t__23162__auto___67416 = e67377;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67416,new cljs.core.Keyword(null,"message","message",-406056002),"Testing the adding"], null));
}
try{var values__23124__auto___67417 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___67418 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67417);
if(cljs.core.truth_(result__23125__auto___67418)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67417),new cljs.core.Keyword(null,"message","message",-406056002),"This shouldn't work"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67417)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This shouldn't work"], null));
}

}catch (e67378){var t__23162__auto___67419 = e67378;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67419,new cljs.core.Keyword(null,"message","message",-406056002),"This shouldn't work"], null));
}
try{var values__23124__auto___67420 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),(1));
var result__23125__auto___67421 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67420);
if(cljs.core.truth_(result__23125__auto___67421)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67420),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67420)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67379){var t__23162__auto___67422 = e67379;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67422,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto___67423 = false;
if(value__23127__auto___67423){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___67423,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___67423,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67380){var t__23162__auto___67424 = e67380;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67424,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto__ = (function(){throw "heck"})();
if(cljs.core.truth_(value__23127__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"heck"),new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"heck"),new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__23127__auto__;
}catch (e67381){var t__23162__auto__ = e67381;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"heck"),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);



cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"bad stuff");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___67425 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___67426 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67425);
if(cljs.core.truth_(result__23125__auto___67426)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67425),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67425)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67382){var t__23162__auto___67427 = e67382;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67427,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23124__auto___67428 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___67429 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67428);
if(cljs.core.truth_(result__23125__auto___67429)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67428),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67428)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67383){var t__23162__auto___67430 = e67383;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67430,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto___67431 = false;
if(value__23127__auto___67431){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___67431,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___67431,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67384){var t__23162__auto___67432 = e67384;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67432,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"mad stuff");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___67433 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___67434 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67433);
if(cljs.core.truth_(result__23125__auto___67434)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67433),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67433)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67385){var t__23162__auto___67435 = e67385;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67435,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23124__auto___67436 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___67437 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___67436);
if(cljs.core.truth_(result__23125__auto___67437)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___67436),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___67436)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e67386){var t__23162__auto___67438 = e67386;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___67438,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto__ = false;
if(value__23127__auto__){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__23127__auto__;
}catch (e67387){var t__23162__auto__ = e67387;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__23182__auto__;
})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__23182__auto__;
});

devdemos.testing.first_testers.cljs$lang$var = new cljs.core.Var(function(){return devdemos.testing.first_testers;},new cljs.core.Symbol("devdemos.testing","first-testers","devdemos.testing/first-testers",252465580,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"devdemos.testing","devdemos.testing",-1839338278,null),new cljs.core.Symbol(null,"first-testers","first-testers",770898249,null),"example_src/devdemos/testing.cljs",26,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(devdemos.testing.first_testers)?devdemos.testing.first_testers.cljs$lang$test:null)]));

//# sourceMappingURL=testing.js.map