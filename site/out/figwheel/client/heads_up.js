// Compiled by ClojureScript 0.0-3269 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__17102__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17102__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__38408_38416 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__38409_38417 = null;
var count__38410_38418 = (0);
var i__38411_38419 = (0);
while(true){
if((i__38411_38419 < count__38410_38418)){
var k_38420 = cljs.core._nth.call(null,chunk__38409_38417,i__38411_38419);
e.setAttribute(cljs.core.name.call(null,k_38420),cljs.core.get.call(null,attrs,k_38420));

var G__38421 = seq__38408_38416;
var G__38422 = chunk__38409_38417;
var G__38423 = count__38410_38418;
var G__38424 = (i__38411_38419 + (1));
seq__38408_38416 = G__38421;
chunk__38409_38417 = G__38422;
count__38410_38418 = G__38423;
i__38411_38419 = G__38424;
continue;
} else {
var temp__4425__auto___38425 = cljs.core.seq.call(null,seq__38408_38416);
if(temp__4425__auto___38425){
var seq__38408_38426__$1 = temp__4425__auto___38425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38408_38426__$1)){
var c__16847__auto___38427 = cljs.core.chunk_first.call(null,seq__38408_38426__$1);
var G__38428 = cljs.core.chunk_rest.call(null,seq__38408_38426__$1);
var G__38429 = c__16847__auto___38427;
var G__38430 = cljs.core.count.call(null,c__16847__auto___38427);
var G__38431 = (0);
seq__38408_38416 = G__38428;
chunk__38409_38417 = G__38429;
count__38410_38418 = G__38430;
i__38411_38419 = G__38431;
continue;
} else {
var k_38432 = cljs.core.first.call(null,seq__38408_38426__$1);
e.setAttribute(cljs.core.name.call(null,k_38432),cljs.core.get.call(null,attrs,k_38432));

var G__38433 = cljs.core.next.call(null,seq__38408_38426__$1);
var G__38434 = null;
var G__38435 = (0);
var G__38436 = (0);
seq__38408_38416 = G__38433;
chunk__38409_38417 = G__38434;
count__38410_38418 = G__38435;
i__38411_38419 = G__38436;
continue;
}
} else {
}
}
break;
}

var seq__38412_38437 = cljs.core.seq.call(null,children);
var chunk__38413_38438 = null;
var count__38414_38439 = (0);
var i__38415_38440 = (0);
while(true){
if((i__38415_38440 < count__38414_38439)){
var ch_38441 = cljs.core._nth.call(null,chunk__38413_38438,i__38415_38440);
e.appendChild(ch_38441);

var G__38442 = seq__38412_38437;
var G__38443 = chunk__38413_38438;
var G__38444 = count__38414_38439;
var G__38445 = (i__38415_38440 + (1));
seq__38412_38437 = G__38442;
chunk__38413_38438 = G__38443;
count__38414_38439 = G__38444;
i__38415_38440 = G__38445;
continue;
} else {
var temp__4425__auto___38446 = cljs.core.seq.call(null,seq__38412_38437);
if(temp__4425__auto___38446){
var seq__38412_38447__$1 = temp__4425__auto___38446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38412_38447__$1)){
var c__16847__auto___38448 = cljs.core.chunk_first.call(null,seq__38412_38447__$1);
var G__38449 = cljs.core.chunk_rest.call(null,seq__38412_38447__$1);
var G__38450 = c__16847__auto___38448;
var G__38451 = cljs.core.count.call(null,c__16847__auto___38448);
var G__38452 = (0);
seq__38412_38437 = G__38449;
chunk__38413_38438 = G__38450;
count__38414_38439 = G__38451;
i__38415_38440 = G__38452;
continue;
} else {
var ch_38453 = cljs.core.first.call(null,seq__38412_38447__$1);
e.appendChild(ch_38453);

var G__38454 = cljs.core.next.call(null,seq__38412_38447__$1);
var G__38455 = null;
var G__38456 = (0);
var G__38457 = (0);
seq__38412_38437 = G__38454;
chunk__38413_38438 = G__38455;
count__38414_38439 = G__38456;
i__38415_38440 = G__38457;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq38405){
var G__38406 = cljs.core.first.call(null,seq38405);
var seq38405__$1 = cljs.core.next.call(null,seq38405);
var G__38407 = cljs.core.first.call(null,seq38405__$1);
var seq38405__$2 = cljs.core.next.call(null,seq38405__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__38406,G__38407,seq38405__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__16957__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16958__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16959__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16960__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16961__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__16957__auto__,prefer_table__16958__auto__,method_cache__16959__auto__,cached_hierarchy__16960__auto__,hierarchy__16961__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__16957__auto__,prefer_table__16958__auto__,method_cache__16959__auto__,cached_hierarchy__16960__auto__,hierarchy__16961__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16961__auto__,method_table__16957__auto__,prefer_table__16958__auto__,method_cache__16959__auto__,cached_hierarchy__16960__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_38458 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_38458.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_38458.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_38458.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_38458);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__38459,st_map){
var map__38463 = p__38459;
var map__38463__$1 = ((cljs.core.seq_QMARK_.call(null,map__38463))?cljs.core.apply.call(null,cljs.core.hash_map,map__38463):map__38463);
var container_el = cljs.core.get.call(null,map__38463__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__38463,map__38463__$1,container_el){
return (function (p__38464){
var vec__38465 = p__38464;
var k = cljs.core.nth.call(null,vec__38465,(0),null);
var v = cljs.core.nth.call(null,vec__38465,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__38463,map__38463__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__38466,dom_str){
var map__38468 = p__38466;
var map__38468__$1 = ((cljs.core.seq_QMARK_.call(null,map__38468))?cljs.core.apply.call(null,cljs.core.hash_map,map__38468):map__38468);
var c = map__38468__$1;
var content_area_el = cljs.core.get.call(null,map__38468__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__38469){
var map__38471 = p__38469;
var map__38471__$1 = ((cljs.core.seq_QMARK_.call(null,map__38471))?cljs.core.apply.call(null,cljs.core.hash_map,map__38471):map__38471);
var content_area_el = cljs.core.get.call(null,map__38471__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__){
return (function (state_38513){
var state_val_38514 = (state_38513[(1)]);
if((state_val_38514 === (1))){
var inst_38498 = (state_38513[(7)]);
var inst_38498__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38499 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38500 = ["10px","10px","100%","68px","1.0"];
var inst_38501 = cljs.core.PersistentHashMap.fromArrays(inst_38499,inst_38500);
var inst_38502 = cljs.core.merge.call(null,inst_38501,style);
var inst_38503 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38498__$1,inst_38502);
var inst_38504 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38498__$1,msg);
var inst_38505 = cljs.core.async.timeout.call(null,(300));
var state_38513__$1 = (function (){var statearr_38515 = state_38513;
(statearr_38515[(8)] = inst_38503);

(statearr_38515[(9)] = inst_38504);

(statearr_38515[(7)] = inst_38498__$1);

return statearr_38515;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38513__$1,(2),inst_38505);
} else {
if((state_val_38514 === (2))){
var inst_38498 = (state_38513[(7)]);
var inst_38507 = (state_38513[(2)]);
var inst_38508 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_38509 = ["auto"];
var inst_38510 = cljs.core.PersistentHashMap.fromArrays(inst_38508,inst_38509);
var inst_38511 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38498,inst_38510);
var state_38513__$1 = (function (){var statearr_38516 = state_38513;
(statearr_38516[(10)] = inst_38507);

return statearr_38516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38513__$1,inst_38511);
} else {
return null;
}
}
});})(c__19818__auto__))
;
return ((function (switch__19756__auto__,c__19818__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____0 = (function (){
var statearr_38520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38520[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__);

(statearr_38520[(1)] = (1));

return statearr_38520;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____1 = (function (state_38513){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_38513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e38521){if((e38521 instanceof Object)){
var ex__19760__auto__ = e38521;
var statearr_38522_38524 = state_38513;
(statearr_38522_38524[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38525 = state_38513;
state_38513 = G__38525;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__ = function(state_38513){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____1.call(this,state_38513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_38523 = f__19819__auto__.call(null);
(statearr_38523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_38523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__))
);

return c__19818__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__38527 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__38527,(0),null);
var ln = cljs.core.nth.call(null,vec__38527,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__38530 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__38530,(0),null);
var file_line = cljs.core.nth.call(null,vec__38530,(1),null);
var file_column = cljs.core.nth.call(null,vec__38530,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__38530,file_name,file_line,file_column){
return (function (p1__38528_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__38528_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__38530,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16062__auto__ = file_line;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
var and__16050__auto__ = cause;
if(cljs.core.truth_(and__16050__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16050__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__38532 = figwheel.client.heads_up.ensure_container.call(null);
var map__38532__$1 = ((cljs.core.seq_QMARK_.call(null,map__38532))?cljs.core.apply.call(null,cljs.core.hash_map,map__38532):map__38532);
var content_area_el = cljs.core.get.call(null,map__38532__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__){
return (function (state_38579){
var state_val_38580 = (state_38579[(1)]);
if((state_val_38580 === (1))){
var inst_38562 = (state_38579[(7)]);
var inst_38562__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38563 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38564 = ["0.0"];
var inst_38565 = cljs.core.PersistentHashMap.fromArrays(inst_38563,inst_38564);
var inst_38566 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38562__$1,inst_38565);
var inst_38567 = cljs.core.async.timeout.call(null,(300));
var state_38579__$1 = (function (){var statearr_38581 = state_38579;
(statearr_38581[(7)] = inst_38562__$1);

(statearr_38581[(8)] = inst_38566);

return statearr_38581;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38579__$1,(2),inst_38567);
} else {
if((state_val_38580 === (2))){
var inst_38562 = (state_38579[(7)]);
var inst_38569 = (state_38579[(2)]);
var inst_38570 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_38571 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_38572 = cljs.core.PersistentHashMap.fromArrays(inst_38570,inst_38571);
var inst_38573 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38562,inst_38572);
var inst_38574 = cljs.core.async.timeout.call(null,(200));
var state_38579__$1 = (function (){var statearr_38582 = state_38579;
(statearr_38582[(9)] = inst_38569);

(statearr_38582[(10)] = inst_38573);

return statearr_38582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38579__$1,(3),inst_38574);
} else {
if((state_val_38580 === (3))){
var inst_38562 = (state_38579[(7)]);
var inst_38576 = (state_38579[(2)]);
var inst_38577 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38562,"");
var state_38579__$1 = (function (){var statearr_38583 = state_38579;
(statearr_38583[(11)] = inst_38576);

return statearr_38583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38579__$1,inst_38577);
} else {
return null;
}
}
}
});})(c__19818__auto__))
;
return ((function (switch__19756__auto__,c__19818__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19757__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19757__auto____0 = (function (){
var statearr_38587 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38587[(0)] = figwheel$client$heads_up$clear_$_state_machine__19757__auto__);

(statearr_38587[(1)] = (1));

return statearr_38587;
});
var figwheel$client$heads_up$clear_$_state_machine__19757__auto____1 = (function (state_38579){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_38579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e38588){if((e38588 instanceof Object)){
var ex__19760__auto__ = e38588;
var statearr_38589_38591 = state_38579;
(statearr_38589_38591[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38592 = state_38579;
state_38579 = G__38592;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19757__auto__ = function(state_38579){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19757__auto____1.call(this,state_38579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19757__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19757__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_38590 = f__19819__auto__.call(null);
(statearr_38590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_38590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__))
);

return c__19818__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__){
return (function (state_38624){
var state_val_38625 = (state_38624[(1)]);
if((state_val_38625 === (1))){
var inst_38614 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_38624__$1 = state_38624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38624__$1,(2),inst_38614);
} else {
if((state_val_38625 === (2))){
var inst_38616 = (state_38624[(2)]);
var inst_38617 = cljs.core.async.timeout.call(null,(400));
var state_38624__$1 = (function (){var statearr_38626 = state_38624;
(statearr_38626[(7)] = inst_38616);

return statearr_38626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38624__$1,(3),inst_38617);
} else {
if((state_val_38625 === (3))){
var inst_38619 = (state_38624[(2)]);
var inst_38620 = figwheel.client.heads_up.clear.call(null);
var state_38624__$1 = (function (){var statearr_38627 = state_38624;
(statearr_38627[(8)] = inst_38619);

return statearr_38627;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38624__$1,(4),inst_38620);
} else {
if((state_val_38625 === (4))){
var inst_38622 = (state_38624[(2)]);
var state_38624__$1 = state_38624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38624__$1,inst_38622);
} else {
return null;
}
}
}
}
});})(c__19818__auto__))
;
return ((function (switch__19756__auto__,c__19818__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____0 = (function (){
var statearr_38631 = [null,null,null,null,null,null,null,null,null];
(statearr_38631[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__);

(statearr_38631[(1)] = (1));

return statearr_38631;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____1 = (function (state_38624){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_38624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e38632){if((e38632 instanceof Object)){
var ex__19760__auto__ = e38632;
var statearr_38633_38635 = state_38624;
(statearr_38633_38635[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38636 = state_38624;
state_38624 = G__38636;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__ = function(state_38624){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____1.call(this,state_38624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_38634 = f__19819__auto__.call(null);
(statearr_38634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_38634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__))
);

return c__19818__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1436385365951