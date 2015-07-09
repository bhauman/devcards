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
var seq__48887_48895 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__48888_48896 = null;
var count__48889_48897 = (0);
var i__48890_48898 = (0);
while(true){
if((i__48890_48898 < count__48889_48897)){
var k_48899 = cljs.core._nth.call(null,chunk__48888_48896,i__48890_48898);
e.setAttribute(cljs.core.name.call(null,k_48899),cljs.core.get.call(null,attrs,k_48899));

var G__48900 = seq__48887_48895;
var G__48901 = chunk__48888_48896;
var G__48902 = count__48889_48897;
var G__48903 = (i__48890_48898 + (1));
seq__48887_48895 = G__48900;
chunk__48888_48896 = G__48901;
count__48889_48897 = G__48902;
i__48890_48898 = G__48903;
continue;
} else {
var temp__4425__auto___48904 = cljs.core.seq.call(null,seq__48887_48895);
if(temp__4425__auto___48904){
var seq__48887_48905__$1 = temp__4425__auto___48904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48887_48905__$1)){
var c__16847__auto___48906 = cljs.core.chunk_first.call(null,seq__48887_48905__$1);
var G__48907 = cljs.core.chunk_rest.call(null,seq__48887_48905__$1);
var G__48908 = c__16847__auto___48906;
var G__48909 = cljs.core.count.call(null,c__16847__auto___48906);
var G__48910 = (0);
seq__48887_48895 = G__48907;
chunk__48888_48896 = G__48908;
count__48889_48897 = G__48909;
i__48890_48898 = G__48910;
continue;
} else {
var k_48911 = cljs.core.first.call(null,seq__48887_48905__$1);
e.setAttribute(cljs.core.name.call(null,k_48911),cljs.core.get.call(null,attrs,k_48911));

var G__48912 = cljs.core.next.call(null,seq__48887_48905__$1);
var G__48913 = null;
var G__48914 = (0);
var G__48915 = (0);
seq__48887_48895 = G__48912;
chunk__48888_48896 = G__48913;
count__48889_48897 = G__48914;
i__48890_48898 = G__48915;
continue;
}
} else {
}
}
break;
}

var seq__48891_48916 = cljs.core.seq.call(null,children);
var chunk__48892_48917 = null;
var count__48893_48918 = (0);
var i__48894_48919 = (0);
while(true){
if((i__48894_48919 < count__48893_48918)){
var ch_48920 = cljs.core._nth.call(null,chunk__48892_48917,i__48894_48919);
e.appendChild(ch_48920);

var G__48921 = seq__48891_48916;
var G__48922 = chunk__48892_48917;
var G__48923 = count__48893_48918;
var G__48924 = (i__48894_48919 + (1));
seq__48891_48916 = G__48921;
chunk__48892_48917 = G__48922;
count__48893_48918 = G__48923;
i__48894_48919 = G__48924;
continue;
} else {
var temp__4425__auto___48925 = cljs.core.seq.call(null,seq__48891_48916);
if(temp__4425__auto___48925){
var seq__48891_48926__$1 = temp__4425__auto___48925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48891_48926__$1)){
var c__16847__auto___48927 = cljs.core.chunk_first.call(null,seq__48891_48926__$1);
var G__48928 = cljs.core.chunk_rest.call(null,seq__48891_48926__$1);
var G__48929 = c__16847__auto___48927;
var G__48930 = cljs.core.count.call(null,c__16847__auto___48927);
var G__48931 = (0);
seq__48891_48916 = G__48928;
chunk__48892_48917 = G__48929;
count__48893_48918 = G__48930;
i__48894_48919 = G__48931;
continue;
} else {
var ch_48932 = cljs.core.first.call(null,seq__48891_48926__$1);
e.appendChild(ch_48932);

var G__48933 = cljs.core.next.call(null,seq__48891_48926__$1);
var G__48934 = null;
var G__48935 = (0);
var G__48936 = (0);
seq__48891_48916 = G__48933;
chunk__48892_48917 = G__48934;
count__48893_48918 = G__48935;
i__48894_48919 = G__48936;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq48884){
var G__48885 = cljs.core.first.call(null,seq48884);
var seq48884__$1 = cljs.core.next.call(null,seq48884);
var G__48886 = cljs.core.first.call(null,seq48884__$1);
var seq48884__$2 = cljs.core.next.call(null,seq48884__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__48885,G__48886,seq48884__$2);
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
var el_48937 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_48937.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_48937.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_48937.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_48937);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__48938,st_map){
var map__48942 = p__48938;
var map__48942__$1 = ((cljs.core.seq_QMARK_.call(null,map__48942))?cljs.core.apply.call(null,cljs.core.hash_map,map__48942):map__48942);
var container_el = cljs.core.get.call(null,map__48942__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__48942,map__48942__$1,container_el){
return (function (p__48943){
var vec__48944 = p__48943;
var k = cljs.core.nth.call(null,vec__48944,(0),null);
var v = cljs.core.nth.call(null,vec__48944,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__48942,map__48942__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__48945,dom_str){
var map__48947 = p__48945;
var map__48947__$1 = ((cljs.core.seq_QMARK_.call(null,map__48947))?cljs.core.apply.call(null,cljs.core.hash_map,map__48947):map__48947);
var c = map__48947__$1;
var content_area_el = cljs.core.get.call(null,map__48947__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__48948){
var map__48950 = p__48948;
var map__48950__$1 = ((cljs.core.seq_QMARK_.call(null,map__48950))?cljs.core.apply.call(null,cljs.core.hash_map,map__48950):map__48950);
var content_area_el = cljs.core.get.call(null,map__48950__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_48992){
var state_val_48993 = (state_48992[(1)]);
if((state_val_48993 === (1))){
var inst_48977 = (state_48992[(7)]);
var inst_48977__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_48978 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_48979 = ["10px","10px","100%","68px","1.0"];
var inst_48980 = cljs.core.PersistentHashMap.fromArrays(inst_48978,inst_48979);
var inst_48981 = cljs.core.merge.call(null,inst_48980,style);
var inst_48982 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48977__$1,inst_48981);
var inst_48983 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_48977__$1,msg);
var inst_48984 = cljs.core.async.timeout.call(null,(300));
var state_48992__$1 = (function (){var statearr_48994 = state_48992;
(statearr_48994[(7)] = inst_48977__$1);

(statearr_48994[(8)] = inst_48983);

(statearr_48994[(9)] = inst_48982);

return statearr_48994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48992__$1,(2),inst_48984);
} else {
if((state_val_48993 === (2))){
var inst_48977 = (state_48992[(7)]);
var inst_48986 = (state_48992[(2)]);
var inst_48987 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_48988 = ["auto"];
var inst_48989 = cljs.core.PersistentHashMap.fromArrays(inst_48987,inst_48988);
var inst_48990 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48977,inst_48989);
var state_48992__$1 = (function (){var statearr_48995 = state_48992;
(statearr_48995[(10)] = inst_48986);

return statearr_48995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48992__$1,inst_48990);
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
var statearr_48999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48999[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__);

(statearr_48999[(1)] = (1));

return statearr_48999;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____1 = (function (state_48992){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_48992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e49000){if((e49000 instanceof Object)){
var ex__19760__auto__ = e49000;
var statearr_49001_49003 = state_48992;
(statearr_49001_49003[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49004 = state_48992;
state_48992 = G__49004;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__ = function(state_48992){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____1.call(this,state_48992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_49002 = f__19819__auto__.call(null);
(statearr_49002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_49002;
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
var vec__49006 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__49006,(0),null);
var ln = cljs.core.nth.call(null,vec__49006,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__49009 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__49009,(0),null);
var file_line = cljs.core.nth.call(null,vec__49009,(1),null);
var file_column = cljs.core.nth.call(null,vec__49009,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__49009,file_name,file_line,file_column){
return (function (p1__49007_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__49007_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__49009,file_name,file_line,file_column))
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
var map__49011 = figwheel.client.heads_up.ensure_container.call(null);
var map__49011__$1 = ((cljs.core.seq_QMARK_.call(null,map__49011))?cljs.core.apply.call(null,cljs.core.hash_map,map__49011):map__49011);
var content_area_el = cljs.core.get.call(null,map__49011__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__){
return (function (state_49058){
var state_val_49059 = (state_49058[(1)]);
if((state_val_49059 === (1))){
var inst_49041 = (state_49058[(7)]);
var inst_49041__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_49042 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_49043 = ["0.0"];
var inst_49044 = cljs.core.PersistentHashMap.fromArrays(inst_49042,inst_49043);
var inst_49045 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49041__$1,inst_49044);
var inst_49046 = cljs.core.async.timeout.call(null,(300));
var state_49058__$1 = (function (){var statearr_49060 = state_49058;
(statearr_49060[(8)] = inst_49045);

(statearr_49060[(7)] = inst_49041__$1);

return statearr_49060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49058__$1,(2),inst_49046);
} else {
if((state_val_49059 === (2))){
var inst_49041 = (state_49058[(7)]);
var inst_49048 = (state_49058[(2)]);
var inst_49049 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_49050 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_49051 = cljs.core.PersistentHashMap.fromArrays(inst_49049,inst_49050);
var inst_49052 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49041,inst_49051);
var inst_49053 = cljs.core.async.timeout.call(null,(200));
var state_49058__$1 = (function (){var statearr_49061 = state_49058;
(statearr_49061[(9)] = inst_49052);

(statearr_49061[(10)] = inst_49048);

return statearr_49061;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49058__$1,(3),inst_49053);
} else {
if((state_val_49059 === (3))){
var inst_49041 = (state_49058[(7)]);
var inst_49055 = (state_49058[(2)]);
var inst_49056 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_49041,"");
var state_49058__$1 = (function (){var statearr_49062 = state_49058;
(statearr_49062[(11)] = inst_49055);

return statearr_49062;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49058__$1,inst_49056);
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
var statearr_49066 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49066[(0)] = figwheel$client$heads_up$clear_$_state_machine__19757__auto__);

(statearr_49066[(1)] = (1));

return statearr_49066;
});
var figwheel$client$heads_up$clear_$_state_machine__19757__auto____1 = (function (state_49058){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_49058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e49067){if((e49067 instanceof Object)){
var ex__19760__auto__ = e49067;
var statearr_49068_49070 = state_49058;
(statearr_49068_49070[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49071 = state_49058;
state_49058 = G__49071;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19757__auto__ = function(state_49058){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19757__auto____1.call(this,state_49058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19757__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19757__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_49069 = f__19819__auto__.call(null);
(statearr_49069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_49069;
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
return (function (state_49103){
var state_val_49104 = (state_49103[(1)]);
if((state_val_49104 === (1))){
var inst_49093 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_49103__$1 = state_49103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49103__$1,(2),inst_49093);
} else {
if((state_val_49104 === (2))){
var inst_49095 = (state_49103[(2)]);
var inst_49096 = cljs.core.async.timeout.call(null,(400));
var state_49103__$1 = (function (){var statearr_49105 = state_49103;
(statearr_49105[(7)] = inst_49095);

return statearr_49105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49103__$1,(3),inst_49096);
} else {
if((state_val_49104 === (3))){
var inst_49098 = (state_49103[(2)]);
var inst_49099 = figwheel.client.heads_up.clear.call(null);
var state_49103__$1 = (function (){var statearr_49106 = state_49103;
(statearr_49106[(8)] = inst_49098);

return statearr_49106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49103__$1,(4),inst_49099);
} else {
if((state_val_49104 === (4))){
var inst_49101 = (state_49103[(2)]);
var state_49103__$1 = state_49103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49103__$1,inst_49101);
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
var statearr_49110 = [null,null,null,null,null,null,null,null,null];
(statearr_49110[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__);

(statearr_49110[(1)] = (1));

return statearr_49110;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____1 = (function (state_49103){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_49103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e49111){if((e49111 instanceof Object)){
var ex__19760__auto__ = e49111;
var statearr_49112_49114 = state_49103;
(statearr_49112_49114[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49115 = state_49103;
state_49103 = G__49115;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__ = function(state_49103){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____1.call(this,state_49103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_49113 = f__19819__auto__.call(null);
(statearr_49113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_49113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__))
);

return c__19818__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map