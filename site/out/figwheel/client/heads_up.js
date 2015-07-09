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
var seq__75626_75634 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__75627_75635 = null;
var count__75628_75636 = (0);
var i__75629_75637 = (0);
while(true){
if((i__75629_75637 < count__75628_75636)){
var k_75638 = cljs.core._nth.call(null,chunk__75627_75635,i__75629_75637);
e.setAttribute(cljs.core.name.call(null,k_75638),cljs.core.get.call(null,attrs,k_75638));

var G__75639 = seq__75626_75634;
var G__75640 = chunk__75627_75635;
var G__75641 = count__75628_75636;
var G__75642 = (i__75629_75637 + (1));
seq__75626_75634 = G__75639;
chunk__75627_75635 = G__75640;
count__75628_75636 = G__75641;
i__75629_75637 = G__75642;
continue;
} else {
var temp__4425__auto___75643 = cljs.core.seq.call(null,seq__75626_75634);
if(temp__4425__auto___75643){
var seq__75626_75644__$1 = temp__4425__auto___75643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75626_75644__$1)){
var c__16847__auto___75645 = cljs.core.chunk_first.call(null,seq__75626_75644__$1);
var G__75646 = cljs.core.chunk_rest.call(null,seq__75626_75644__$1);
var G__75647 = c__16847__auto___75645;
var G__75648 = cljs.core.count.call(null,c__16847__auto___75645);
var G__75649 = (0);
seq__75626_75634 = G__75646;
chunk__75627_75635 = G__75647;
count__75628_75636 = G__75648;
i__75629_75637 = G__75649;
continue;
} else {
var k_75650 = cljs.core.first.call(null,seq__75626_75644__$1);
e.setAttribute(cljs.core.name.call(null,k_75650),cljs.core.get.call(null,attrs,k_75650));

var G__75651 = cljs.core.next.call(null,seq__75626_75644__$1);
var G__75652 = null;
var G__75653 = (0);
var G__75654 = (0);
seq__75626_75634 = G__75651;
chunk__75627_75635 = G__75652;
count__75628_75636 = G__75653;
i__75629_75637 = G__75654;
continue;
}
} else {
}
}
break;
}

var seq__75630_75655 = cljs.core.seq.call(null,children);
var chunk__75631_75656 = null;
var count__75632_75657 = (0);
var i__75633_75658 = (0);
while(true){
if((i__75633_75658 < count__75632_75657)){
var ch_75659 = cljs.core._nth.call(null,chunk__75631_75656,i__75633_75658);
e.appendChild(ch_75659);

var G__75660 = seq__75630_75655;
var G__75661 = chunk__75631_75656;
var G__75662 = count__75632_75657;
var G__75663 = (i__75633_75658 + (1));
seq__75630_75655 = G__75660;
chunk__75631_75656 = G__75661;
count__75632_75657 = G__75662;
i__75633_75658 = G__75663;
continue;
} else {
var temp__4425__auto___75664 = cljs.core.seq.call(null,seq__75630_75655);
if(temp__4425__auto___75664){
var seq__75630_75665__$1 = temp__4425__auto___75664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75630_75665__$1)){
var c__16847__auto___75666 = cljs.core.chunk_first.call(null,seq__75630_75665__$1);
var G__75667 = cljs.core.chunk_rest.call(null,seq__75630_75665__$1);
var G__75668 = c__16847__auto___75666;
var G__75669 = cljs.core.count.call(null,c__16847__auto___75666);
var G__75670 = (0);
seq__75630_75655 = G__75667;
chunk__75631_75656 = G__75668;
count__75632_75657 = G__75669;
i__75633_75658 = G__75670;
continue;
} else {
var ch_75671 = cljs.core.first.call(null,seq__75630_75665__$1);
e.appendChild(ch_75671);

var G__75672 = cljs.core.next.call(null,seq__75630_75665__$1);
var G__75673 = null;
var G__75674 = (0);
var G__75675 = (0);
seq__75630_75655 = G__75672;
chunk__75631_75656 = G__75673;
count__75632_75657 = G__75674;
i__75633_75658 = G__75675;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq75623){
var G__75624 = cljs.core.first.call(null,seq75623);
var seq75623__$1 = cljs.core.next.call(null,seq75623);
var G__75625 = cljs.core.first.call(null,seq75623__$1);
var seq75623__$2 = cljs.core.next.call(null,seq75623__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__75624,G__75625,seq75623__$2);
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
var el_75676 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_75676.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_75676.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_75676.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_75676);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__75677,st_map){
var map__75681 = p__75677;
var map__75681__$1 = ((cljs.core.seq_QMARK_.call(null,map__75681))?cljs.core.apply.call(null,cljs.core.hash_map,map__75681):map__75681);
var container_el = cljs.core.get.call(null,map__75681__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__75681,map__75681__$1,container_el){
return (function (p__75682){
var vec__75683 = p__75682;
var k = cljs.core.nth.call(null,vec__75683,(0),null);
var v = cljs.core.nth.call(null,vec__75683,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__75681,map__75681__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__75684,dom_str){
var map__75686 = p__75684;
var map__75686__$1 = ((cljs.core.seq_QMARK_.call(null,map__75686))?cljs.core.apply.call(null,cljs.core.hash_map,map__75686):map__75686);
var c = map__75686__$1;
var content_area_el = cljs.core.get.call(null,map__75686__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__75687){
var map__75689 = p__75687;
var map__75689__$1 = ((cljs.core.seq_QMARK_.call(null,map__75689))?cljs.core.apply.call(null,cljs.core.hash_map,map__75689):map__75689);
var content_area_el = cljs.core.get.call(null,map__75689__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_75731){
var state_val_75732 = (state_75731[(1)]);
if((state_val_75732 === (1))){
var inst_75716 = (state_75731[(7)]);
var inst_75716__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_75717 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_75718 = ["10px","10px","100%","68px","1.0"];
var inst_75719 = cljs.core.PersistentHashMap.fromArrays(inst_75717,inst_75718);
var inst_75720 = cljs.core.merge.call(null,inst_75719,style);
var inst_75721 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_75716__$1,inst_75720);
var inst_75722 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_75716__$1,msg);
var inst_75723 = cljs.core.async.timeout.call(null,(300));
var state_75731__$1 = (function (){var statearr_75733 = state_75731;
(statearr_75733[(8)] = inst_75721);

(statearr_75733[(7)] = inst_75716__$1);

(statearr_75733[(9)] = inst_75722);

return statearr_75733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75731__$1,(2),inst_75723);
} else {
if((state_val_75732 === (2))){
var inst_75716 = (state_75731[(7)]);
var inst_75725 = (state_75731[(2)]);
var inst_75726 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_75727 = ["auto"];
var inst_75728 = cljs.core.PersistentHashMap.fromArrays(inst_75726,inst_75727);
var inst_75729 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_75716,inst_75728);
var state_75731__$1 = (function (){var statearr_75734 = state_75731;
(statearr_75734[(10)] = inst_75725);

return statearr_75734;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75731__$1,inst_75729);
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
var statearr_75738 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75738[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__);

(statearr_75738[(1)] = (1));

return statearr_75738;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____1 = (function (state_75731){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_75731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e75739){if((e75739 instanceof Object)){
var ex__19760__auto__ = e75739;
var statearr_75740_75742 = state_75731;
(statearr_75740_75742[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75743 = state_75731;
state_75731 = G__75743;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__ = function(state_75731){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____1.call(this,state_75731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_75741 = f__19819__auto__.call(null);
(statearr_75741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_75741;
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
var vec__75745 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__75745,(0),null);
var ln = cljs.core.nth.call(null,vec__75745,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__75748 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__75748,(0),null);
var file_line = cljs.core.nth.call(null,vec__75748,(1),null);
var file_column = cljs.core.nth.call(null,vec__75748,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__75748,file_name,file_line,file_column){
return (function (p1__75746_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__75746_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__75748,file_name,file_line,file_column))
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
var map__75750 = figwheel.client.heads_up.ensure_container.call(null);
var map__75750__$1 = ((cljs.core.seq_QMARK_.call(null,map__75750))?cljs.core.apply.call(null,cljs.core.hash_map,map__75750):map__75750);
var content_area_el = cljs.core.get.call(null,map__75750__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__){
return (function (state_75797){
var state_val_75798 = (state_75797[(1)]);
if((state_val_75798 === (1))){
var inst_75780 = (state_75797[(7)]);
var inst_75780__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_75781 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_75782 = ["0.0"];
var inst_75783 = cljs.core.PersistentHashMap.fromArrays(inst_75781,inst_75782);
var inst_75784 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_75780__$1,inst_75783);
var inst_75785 = cljs.core.async.timeout.call(null,(300));
var state_75797__$1 = (function (){var statearr_75799 = state_75797;
(statearr_75799[(8)] = inst_75784);

(statearr_75799[(7)] = inst_75780__$1);

return statearr_75799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75797__$1,(2),inst_75785);
} else {
if((state_val_75798 === (2))){
var inst_75780 = (state_75797[(7)]);
var inst_75787 = (state_75797[(2)]);
var inst_75788 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_75789 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_75790 = cljs.core.PersistentHashMap.fromArrays(inst_75788,inst_75789);
var inst_75791 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_75780,inst_75790);
var inst_75792 = cljs.core.async.timeout.call(null,(200));
var state_75797__$1 = (function (){var statearr_75800 = state_75797;
(statearr_75800[(9)] = inst_75787);

(statearr_75800[(10)] = inst_75791);

return statearr_75800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75797__$1,(3),inst_75792);
} else {
if((state_val_75798 === (3))){
var inst_75780 = (state_75797[(7)]);
var inst_75794 = (state_75797[(2)]);
var inst_75795 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_75780,"");
var state_75797__$1 = (function (){var statearr_75801 = state_75797;
(statearr_75801[(11)] = inst_75794);

return statearr_75801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75797__$1,inst_75795);
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
var statearr_75805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75805[(0)] = figwheel$client$heads_up$clear_$_state_machine__19757__auto__);

(statearr_75805[(1)] = (1));

return statearr_75805;
});
var figwheel$client$heads_up$clear_$_state_machine__19757__auto____1 = (function (state_75797){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_75797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e75806){if((e75806 instanceof Object)){
var ex__19760__auto__ = e75806;
var statearr_75807_75809 = state_75797;
(statearr_75807_75809[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75810 = state_75797;
state_75797 = G__75810;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19757__auto__ = function(state_75797){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19757__auto____1.call(this,state_75797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19757__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19757__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_75808 = f__19819__auto__.call(null);
(statearr_75808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_75808;
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
return (function (state_75842){
var state_val_75843 = (state_75842[(1)]);
if((state_val_75843 === (1))){
var inst_75832 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_75842__$1 = state_75842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75842__$1,(2),inst_75832);
} else {
if((state_val_75843 === (2))){
var inst_75834 = (state_75842[(2)]);
var inst_75835 = cljs.core.async.timeout.call(null,(400));
var state_75842__$1 = (function (){var statearr_75844 = state_75842;
(statearr_75844[(7)] = inst_75834);

return statearr_75844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75842__$1,(3),inst_75835);
} else {
if((state_val_75843 === (3))){
var inst_75837 = (state_75842[(2)]);
var inst_75838 = figwheel.client.heads_up.clear.call(null);
var state_75842__$1 = (function (){var statearr_75845 = state_75842;
(statearr_75845[(8)] = inst_75837);

return statearr_75845;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75842__$1,(4),inst_75838);
} else {
if((state_val_75843 === (4))){
var inst_75840 = (state_75842[(2)]);
var state_75842__$1 = state_75842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75842__$1,inst_75840);
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
var statearr_75849 = [null,null,null,null,null,null,null,null,null];
(statearr_75849[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__);

(statearr_75849[(1)] = (1));

return statearr_75849;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____1 = (function (state_75842){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_75842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e75850){if((e75850 instanceof Object)){
var ex__19760__auto__ = e75850;
var statearr_75851_75853 = state_75842;
(statearr_75851_75853[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75854 = state_75842;
state_75842 = G__75854;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__ = function(state_75842){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____1.call(this,state_75842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_75852 = f__19819__auto__.call(null);
(statearr_75852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_75852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__))
);

return c__19818__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map