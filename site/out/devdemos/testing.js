// Compiled by ClojureScript 0.0-3269 {}
goog.provide('devdemos.testing');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('cljs.test');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.testing","devdemos.testing",815097491),new cljs.core.Keyword(null,"some-tests","some-tests",2125020202)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"some-tests",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof devdemos.testing.t68956 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.testing.t68956 = (function (meta68957){
this.meta68957 = meta68957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.testing.t68956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68958,meta68957__$1){
var self__ = this;
var _68958__$1 = this;
return (new devdemos.testing.t68956(meta68957__$1));
});

devdemos.testing.t68956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68958){
var self__ = this;
var _68958__$1 = this;
return self__.meta68957;
});

devdemos.testing.t68956.prototype.devcards$core$IDevcardOptions$ = true;

devdemos.testing.t68956.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__65860__auto__,devcard_opts__65861__auto__){
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
}catch (e68959){var t__23162__auto__ = e68959;
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
}catch (e68960){var t__23162__auto__ = e68960;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});})(this__65860__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__65861__auto__))));
});

devdemos.testing.t68956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68957","meta68957",263263898,null)], null);
});

devdemos.testing.t68956.cljs$lang$type = true;

devdemos.testing.t68956.cljs$lang$ctorStr = "devdemos.testing/t68956";

devdemos.testing.t68956.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.testing/t68956");
});

devdemos.testing.__GT_t68956 = (function devdemos$testing$__GT_t68956(meta68957){
return (new devdemos.testing.t68956(meta68957));
});

}

return (new devdemos.testing.t68956(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.testing","devdemos.testing",815097491),new cljs.core.Keyword(null,"first-testers","first-testers",-869633278)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"first-testers",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof devdemos.testing.t68961 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.testing.t68961 = (function (meta68962){
this.meta68962 = meta68962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.testing.t68961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68963,meta68962__$1){
var self__ = this;
var _68963__$1 = this;
return (new devdemos.testing.t68961(meta68962__$1));
});

devdemos.testing.t68961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68963){
var self__ = this;
var _68963__$1 = this;
return self__.meta68962;
});

devdemos.testing.t68961.prototype.devcards$core$IDevcardOptions$ = true;

devdemos.testing.t68961.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__65860__auto__,devcard_opts__65861__auto__){
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
try{var values__23124__auto___68986 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___68987 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___68986);
if(cljs.core.truth_(result__23125__auto___68987)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___68986),new cljs.core.Keyword(null,"message","message",-406056002),"Testing the adding"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___68986)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Testing the adding"], null));
}

}catch (e68964){var t__23162__auto___68988 = e68964;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___68988,new cljs.core.Keyword(null,"message","message",-406056002),"Testing the adding"], null));
}
try{var values__23124__auto___68989 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___68990 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___68989);
if(cljs.core.truth_(result__23125__auto___68990)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___68989),new cljs.core.Keyword(null,"message","message",-406056002),"This shouldn't work"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___68989)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This shouldn't work"], null));
}

}catch (e68965){var t__23162__auto___68991 = e68965;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___68991,new cljs.core.Keyword(null,"message","message",-406056002),"This shouldn't work"], null));
}
try{var values__23124__auto___68992 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),(1));
var result__23125__auto___68993 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___68992);
if(cljs.core.truth_(result__23125__auto___68993)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___68992),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___68992)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68966){var t__23162__auto___68994 = e68966;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___68994,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto___68995 = false;
if(value__23127__auto___68995){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___68995,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___68995,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68967){var t__23162__auto___68996 = e68967;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___68996,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto__ = (function(){throw "heck"})();
if(cljs.core.truth_(value__23127__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"heck"),new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"heck"),new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__23127__auto__;
}catch (e68968){var t__23162__auto__ = e68968;
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
try{var values__23124__auto___68997 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___68998 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___68997);
if(cljs.core.truth_(result__23125__auto___68998)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___68997),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___68997)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68969){var t__23162__auto___68999 = e68969;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___68999,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23124__auto___69000 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___69001 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___69000);
if(cljs.core.truth_(result__23125__auto___69001)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___69000),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___69000)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68970){var t__23162__auto___69002 = e68970;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69002,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto___69003 = false;
if(value__23127__auto___69003){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___69003,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___69003,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68971){var t__23162__auto___69004 = e68971;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69004,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"mad stuff");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___69005 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___69006 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___69005);
if(cljs.core.truth_(result__23125__auto___69006)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___69005),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___69005)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68972){var t__23162__auto___69007 = e68972;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69007,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23124__auto___69008 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___69009 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___69008);
if(cljs.core.truth_(result__23125__auto___69009)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___69008),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___69008)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68973){var t__23162__auto___69010 = e68973;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69010,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto__ = false;
if(value__23127__auto__){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__23127__auto__;
}catch (e68974){var t__23162__auto__ = e68974;
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

devdemos.testing.t68961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68962","meta68962",394813030,null)], null);
});

devdemos.testing.t68961.cljs$lang$type = true;

devdemos.testing.t68961.cljs$lang$ctorStr = "devdemos.testing/t68961";

devdemos.testing.t68961.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.testing/t68961");
});

devdemos.testing.__GT_t68961 = (function devdemos$testing$__GT_t68961(meta68962){
return (new devdemos.testing.t68961(meta68962));
});

}

return (new devdemos.testing.t68961(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

devdemos.testing.first_testers = (function devdemos$testing$first_testers(){
return cljs.test.test_var.call(null,devdemos$testing$first_testers.cljs$lang$var);
});
devdemos.testing.first_testers.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"good stuff");

var ret__23182__auto___69011 = (function (){
try{var values__23124__auto___69012 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___69013 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___69012);
if(cljs.core.truth_(result__23125__auto___69013)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___69012),new cljs.core.Keyword(null,"message","message",-406056002),"Testing the adding"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___69012)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Testing the adding"], null));
}

}catch (e68975){var t__23162__auto___69014 = e68975;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69014,new cljs.core.Keyword(null,"message","message",-406056002),"Testing the adding"], null));
}
try{var values__23124__auto___69015 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___69016 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___69015);
if(cljs.core.truth_(result__23125__auto___69016)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___69015),new cljs.core.Keyword(null,"message","message",-406056002),"This shouldn't work"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___69015)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This shouldn't work"], null));
}

}catch (e68976){var t__23162__auto___69017 = e68976;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69017,new cljs.core.Keyword(null,"message","message",-406056002),"This shouldn't work"], null));
}
try{var values__23124__auto___69018 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),(1));
var result__23125__auto___69019 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___69018);
if(cljs.core.truth_(result__23125__auto___69019)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___69018),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___69018)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68977){var t__23162__auto___69020 = e68977;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69020,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto___69021 = false;
if(value__23127__auto___69021){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___69021,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___69021,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68978){var t__23162__auto___69022 = e68978;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69022,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto__ = (function(){throw "heck"})();
if(cljs.core.truth_(value__23127__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"heck"),new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"heck"),new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__23127__auto__;
}catch (e68979){var t__23162__auto__ = e68979;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"heck"),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);



cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"bad stuff");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___69023 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___69024 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___69023);
if(cljs.core.truth_(result__23125__auto___69024)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___69023),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___69023)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68980){var t__23162__auto___69025 = e68980;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69025,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23124__auto___69026 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___69027 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___69026);
if(cljs.core.truth_(result__23125__auto___69027)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___69026),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___69026)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68981){var t__23162__auto___69028 = e68981;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69028,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto___69029 = false;
if(value__23127__auto___69029){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___69029,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___69029,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68982){var t__23162__auto___69030 = e68982;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69030,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"mad stuff");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___69031 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___69032 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___69031);
if(cljs.core.truth_(result__23125__auto___69032)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___69031),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___69031)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68983){var t__23162__auto___69033 = e68983;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69033,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23124__auto___69034 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___69035 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___69034);
if(cljs.core.truth_(result__23125__auto___69035)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___69034),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___69034)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e68984){var t__23162__auto___69036 = e68984;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___69036,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto__ = false;
if(value__23127__auto__){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__23127__auto__;
}catch (e68985){var t__23162__auto__ = e68985;
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