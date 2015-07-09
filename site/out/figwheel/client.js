// Compiled by ClojureScript 0.0-3269 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48123__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__48123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48124__i = 0, G__48124__a = new Array(arguments.length -  0);
while (G__48124__i < G__48124__a.length) {G__48124__a[G__48124__i] = arguments[G__48124__i + 0]; ++G__48124__i;}
  args = new cljs.core.IndexedSeq(G__48124__a,0);
} 
return G__48123__delegate.call(this,args);};
G__48123.cljs$lang$maxFixedArity = 0;
G__48123.cljs$lang$applyTo = (function (arglist__48125){
var args = cljs.core.seq(arglist__48125);
return G__48123__delegate(args);
});
G__48123.cljs$core$IFn$_invoke$arity$variadic = G__48123__delegate;
return G__48123;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48126){
var map__48128 = p__48126;
var map__48128__$1 = ((cljs.core.seq_QMARK_.call(null,map__48128))?cljs.core.apply.call(null,cljs.core.hash_map,map__48128):map__48128);
var message = cljs.core.get.call(null,map__48128__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48128__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16062__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16050__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16050__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16050__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19818__auto___48257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___48257,ch){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___48257,ch){
return (function (state_48231){
var state_val_48232 = (state_48231[(1)]);
if((state_val_48232 === (7))){
var inst_48227 = (state_48231[(2)]);
var state_48231__$1 = state_48231;
var statearr_48233_48258 = state_48231__$1;
(statearr_48233_48258[(2)] = inst_48227);

(statearr_48233_48258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48232 === (1))){
var state_48231__$1 = state_48231;
var statearr_48234_48259 = state_48231__$1;
(statearr_48234_48259[(2)] = null);

(statearr_48234_48259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48232 === (4))){
var inst_48195 = (state_48231[(7)]);
var inst_48195__$1 = (state_48231[(2)]);
var state_48231__$1 = (function (){var statearr_48235 = state_48231;
(statearr_48235[(7)] = inst_48195__$1);

return statearr_48235;
})();
if(cljs.core.truth_(inst_48195__$1)){
var statearr_48236_48260 = state_48231__$1;
(statearr_48236_48260[(1)] = (5));

} else {
var statearr_48237_48261 = state_48231__$1;
(statearr_48237_48261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48232 === (13))){
var state_48231__$1 = state_48231;
var statearr_48238_48262 = state_48231__$1;
(statearr_48238_48262[(2)] = null);

(statearr_48238_48262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48232 === (6))){
var state_48231__$1 = state_48231;
var statearr_48239_48263 = state_48231__$1;
(statearr_48239_48263[(2)] = null);

(statearr_48239_48263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48232 === (3))){
var inst_48229 = (state_48231[(2)]);
var state_48231__$1 = state_48231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48231__$1,inst_48229);
} else {
if((state_val_48232 === (12))){
var inst_48202 = (state_48231[(8)]);
var inst_48215 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48202);
var inst_48216 = cljs.core.first.call(null,inst_48215);
var inst_48217 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48216);
var inst_48218 = console.warn("Figwheel: Not loading code with warnings - ",inst_48217);
var state_48231__$1 = state_48231;
var statearr_48240_48264 = state_48231__$1;
(statearr_48240_48264[(2)] = inst_48218);

(statearr_48240_48264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48232 === (2))){
var state_48231__$1 = state_48231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48231__$1,(4),ch);
} else {
if((state_val_48232 === (11))){
var inst_48211 = (state_48231[(2)]);
var state_48231__$1 = state_48231;
var statearr_48241_48265 = state_48231__$1;
(statearr_48241_48265[(2)] = inst_48211);

(statearr_48241_48265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48232 === (9))){
var inst_48201 = (state_48231[(9)]);
var inst_48213 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48201,opts);
var state_48231__$1 = state_48231;
if(cljs.core.truth_(inst_48213)){
var statearr_48242_48266 = state_48231__$1;
(statearr_48242_48266[(1)] = (12));

} else {
var statearr_48243_48267 = state_48231__$1;
(statearr_48243_48267[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48232 === (5))){
var inst_48201 = (state_48231[(9)]);
var inst_48195 = (state_48231[(7)]);
var inst_48197 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48198 = (new cljs.core.PersistentArrayMap(null,2,inst_48197,null));
var inst_48199 = (new cljs.core.PersistentHashSet(null,inst_48198,null));
var inst_48200 = figwheel.client.focus_msgs.call(null,inst_48199,inst_48195);
var inst_48201__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48200);
var inst_48202 = cljs.core.first.call(null,inst_48200);
var inst_48203 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48201__$1,opts);
var state_48231__$1 = (function (){var statearr_48244 = state_48231;
(statearr_48244[(9)] = inst_48201__$1);

(statearr_48244[(8)] = inst_48202);

return statearr_48244;
})();
if(cljs.core.truth_(inst_48203)){
var statearr_48245_48268 = state_48231__$1;
(statearr_48245_48268[(1)] = (8));

} else {
var statearr_48246_48269 = state_48231__$1;
(statearr_48246_48269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48232 === (14))){
var inst_48221 = (state_48231[(2)]);
var state_48231__$1 = state_48231;
var statearr_48247_48270 = state_48231__$1;
(statearr_48247_48270[(2)] = inst_48221);

(statearr_48247_48270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48232 === (10))){
var inst_48223 = (state_48231[(2)]);
var state_48231__$1 = (function (){var statearr_48248 = state_48231;
(statearr_48248[(10)] = inst_48223);

return statearr_48248;
})();
var statearr_48249_48271 = state_48231__$1;
(statearr_48249_48271[(2)] = null);

(statearr_48249_48271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48232 === (8))){
var inst_48202 = (state_48231[(8)]);
var inst_48205 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48206 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48202);
var inst_48207 = cljs.core.async.timeout.call(null,(1000));
var inst_48208 = [inst_48206,inst_48207];
var inst_48209 = (new cljs.core.PersistentVector(null,2,(5),inst_48205,inst_48208,null));
var state_48231__$1 = state_48231;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48231__$1,(11),inst_48209);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19818__auto___48257,ch))
;
return ((function (switch__19756__auto__,c__19818__auto___48257,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____0 = (function (){
var statearr_48253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48253[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__);

(statearr_48253[(1)] = (1));

return statearr_48253;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____1 = (function (state_48231){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_48231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e48254){if((e48254 instanceof Object)){
var ex__19760__auto__ = e48254;
var statearr_48255_48272 = state_48231;
(statearr_48255_48272[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48273 = state_48231;
state_48231 = G__48273;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__ = function(state_48231){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____1.call(this,state_48231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___48257,ch))
})();
var state__19820__auto__ = (function (){var statearr_48256 = f__19819__auto__.call(null);
(statearr_48256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___48257);

return statearr_48256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___48257,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48274_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48274_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_48281 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48281){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_48279 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_48280 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_48279,_STAR_print_newline_STAR_48280,base_path_48281){
return (function() { 
var G__48282__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__48282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48283__i = 0, G__48283__a = new Array(arguments.length -  0);
while (G__48283__i < G__48283__a.length) {G__48283__a[G__48283__i] = arguments[G__48283__i + 0]; ++G__48283__i;}
  args = new cljs.core.IndexedSeq(G__48283__a,0);
} 
return G__48282__delegate.call(this,args);};
G__48282.cljs$lang$maxFixedArity = 0;
G__48282.cljs$lang$applyTo = (function (arglist__48284){
var args = cljs.core.seq(arglist__48284);
return G__48282__delegate(args);
});
G__48282.cljs$core$IFn$_invoke$arity$variadic = G__48282__delegate;
return G__48282;
})()
;})(_STAR_print_fn_STAR_48279,_STAR_print_newline_STAR_48280,base_path_48281))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_48280;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_48279;
}}catch (e48278){if((e48278 instanceof Error)){
var e = e48278;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48281], null));
} else {
var e = e48278;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_48281))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48285){
var map__48290 = p__48285;
var map__48290__$1 = ((cljs.core.seq_QMARK_.call(null,map__48290))?cljs.core.apply.call(null,cljs.core.hash_map,map__48290):map__48290);
var opts = map__48290__$1;
var build_id = cljs.core.get.call(null,map__48290__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48290,map__48290__$1,opts,build_id){
return (function (p__48291){
var vec__48292 = p__48291;
var map__48293 = cljs.core.nth.call(null,vec__48292,(0),null);
var map__48293__$1 = ((cljs.core.seq_QMARK_.call(null,map__48293))?cljs.core.apply.call(null,cljs.core.hash_map,map__48293):map__48293);
var msg = map__48293__$1;
var msg_name = cljs.core.get.call(null,map__48293__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__48292,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48292,map__48293,map__48293__$1,msg,msg_name,_,map__48290,map__48290__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48292,map__48293,map__48293__$1,msg,msg_name,_,map__48290,map__48290__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48290,map__48290__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48297){
var vec__48298 = p__48297;
var map__48299 = cljs.core.nth.call(null,vec__48298,(0),null);
var map__48299__$1 = ((cljs.core.seq_QMARK_.call(null,map__48299))?cljs.core.apply.call(null,cljs.core.hash_map,map__48299):map__48299);
var msg = map__48299__$1;
var msg_name = cljs.core.get.call(null,map__48299__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__48298,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48300){
var map__48308 = p__48300;
var map__48308__$1 = ((cljs.core.seq_QMARK_.call(null,map__48308))?cljs.core.apply.call(null,cljs.core.hash_map,map__48308):map__48308);
var on_compile_warning = cljs.core.get.call(null,map__48308__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48308__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48308,map__48308__$1,on_compile_warning,on_compile_fail){
return (function (p__48309){
var vec__48310 = p__48309;
var map__48311 = cljs.core.nth.call(null,vec__48310,(0),null);
var map__48311__$1 = ((cljs.core.seq_QMARK_.call(null,map__48311))?cljs.core.apply.call(null,cljs.core.hash_map,map__48311):map__48311);
var msg = map__48311__$1;
var msg_name = cljs.core.get.call(null,map__48311__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__48310,(1));
var pred__48312 = cljs.core._EQ_;
var expr__48313 = msg_name;
if(cljs.core.truth_(pred__48312.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48313))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48312.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48313))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48308,map__48308__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,msg_hist,msg_names,msg){
return (function (state_48514){
var state_val_48515 = (state_48514[(1)]);
if((state_val_48515 === (7))){
var inst_48448 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48516_48557 = state_48514__$1;
(statearr_48516_48557[(2)] = inst_48448);

(statearr_48516_48557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (20))){
var inst_48476 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48514__$1 = state_48514;
if(cljs.core.truth_(inst_48476)){
var statearr_48517_48558 = state_48514__$1;
(statearr_48517_48558[(1)] = (22));

} else {
var statearr_48518_48559 = state_48514__$1;
(statearr_48518_48559[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (27))){
var inst_48488 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48489 = figwheel.client.heads_up.display_warning.call(null,inst_48488);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48514__$1,(30),inst_48489);
} else {
if((state_val_48515 === (1))){
var inst_48436 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48514__$1 = state_48514;
if(cljs.core.truth_(inst_48436)){
var statearr_48519_48560 = state_48514__$1;
(statearr_48519_48560[(1)] = (2));

} else {
var statearr_48520_48561 = state_48514__$1;
(statearr_48520_48561[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (24))){
var inst_48504 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48521_48562 = state_48514__$1;
(statearr_48521_48562[(2)] = inst_48504);

(statearr_48521_48562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (4))){
var inst_48512 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48514__$1,inst_48512);
} else {
if((state_val_48515 === (15))){
var inst_48464 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48465 = figwheel.client.format_messages.call(null,inst_48464);
var inst_48466 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48467 = figwheel.client.heads_up.display_error.call(null,inst_48465,inst_48466);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48514__$1,(18),inst_48467);
} else {
if((state_val_48515 === (21))){
var inst_48506 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48522_48563 = state_48514__$1;
(statearr_48522_48563[(2)] = inst_48506);

(statearr_48522_48563[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (31))){
var inst_48495 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48514__$1,(34),inst_48495);
} else {
if((state_val_48515 === (32))){
var state_48514__$1 = state_48514;
var statearr_48523_48564 = state_48514__$1;
(statearr_48523_48564[(2)] = null);

(statearr_48523_48564[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (33))){
var inst_48500 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48524_48565 = state_48514__$1;
(statearr_48524_48565[(2)] = inst_48500);

(statearr_48524_48565[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (13))){
var inst_48454 = (state_48514[(2)]);
var inst_48455 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48456 = figwheel.client.format_messages.call(null,inst_48455);
var inst_48457 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48458 = figwheel.client.heads_up.display_error.call(null,inst_48456,inst_48457);
var state_48514__$1 = (function (){var statearr_48525 = state_48514;
(statearr_48525[(7)] = inst_48454);

return statearr_48525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48514__$1,(14),inst_48458);
} else {
if((state_val_48515 === (22))){
var inst_48478 = figwheel.client.heads_up.clear.call(null);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48514__$1,(25),inst_48478);
} else {
if((state_val_48515 === (29))){
var inst_48502 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48526_48566 = state_48514__$1;
(statearr_48526_48566[(2)] = inst_48502);

(statearr_48526_48566[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (6))){
var inst_48444 = figwheel.client.heads_up.clear.call(null);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48514__$1,(9),inst_48444);
} else {
if((state_val_48515 === (28))){
var inst_48493 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48514__$1 = state_48514;
if(cljs.core.truth_(inst_48493)){
var statearr_48527_48567 = state_48514__$1;
(statearr_48527_48567[(1)] = (31));

} else {
var statearr_48528_48568 = state_48514__$1;
(statearr_48528_48568[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (25))){
var inst_48480 = (state_48514[(2)]);
var inst_48481 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48482 = figwheel.client.heads_up.display_warning.call(null,inst_48481);
var state_48514__$1 = (function (){var statearr_48529 = state_48514;
(statearr_48529[(8)] = inst_48480);

return statearr_48529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48514__$1,(26),inst_48482);
} else {
if((state_val_48515 === (34))){
var inst_48497 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48530_48569 = state_48514__$1;
(statearr_48530_48569[(2)] = inst_48497);

(statearr_48530_48569[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (17))){
var inst_48508 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48531_48570 = state_48514__$1;
(statearr_48531_48570[(2)] = inst_48508);

(statearr_48531_48570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (3))){
var inst_48450 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48514__$1 = state_48514;
if(cljs.core.truth_(inst_48450)){
var statearr_48532_48571 = state_48514__$1;
(statearr_48532_48571[(1)] = (10));

} else {
var statearr_48533_48572 = state_48514__$1;
(statearr_48533_48572[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (12))){
var inst_48510 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48534_48573 = state_48514__$1;
(statearr_48534_48573[(2)] = inst_48510);

(statearr_48534_48573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (2))){
var inst_48438 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48514__$1 = state_48514;
if(cljs.core.truth_(inst_48438)){
var statearr_48535_48574 = state_48514__$1;
(statearr_48535_48574[(1)] = (5));

} else {
var statearr_48536_48575 = state_48514__$1;
(statearr_48536_48575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (23))){
var inst_48486 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48514__$1 = state_48514;
if(cljs.core.truth_(inst_48486)){
var statearr_48537_48576 = state_48514__$1;
(statearr_48537_48576[(1)] = (27));

} else {
var statearr_48538_48577 = state_48514__$1;
(statearr_48538_48577[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (19))){
var inst_48473 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48474 = figwheel.client.heads_up.append_message.call(null,inst_48473);
var state_48514__$1 = state_48514;
var statearr_48539_48578 = state_48514__$1;
(statearr_48539_48578[(2)] = inst_48474);

(statearr_48539_48578[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (11))){
var inst_48462 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48514__$1 = state_48514;
if(cljs.core.truth_(inst_48462)){
var statearr_48540_48579 = state_48514__$1;
(statearr_48540_48579[(1)] = (15));

} else {
var statearr_48541_48580 = state_48514__$1;
(statearr_48541_48580[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (9))){
var inst_48446 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48542_48581 = state_48514__$1;
(statearr_48542_48581[(2)] = inst_48446);

(statearr_48542_48581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (5))){
var inst_48440 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48514__$1,(8),inst_48440);
} else {
if((state_val_48515 === (14))){
var inst_48460 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48543_48582 = state_48514__$1;
(statearr_48543_48582[(2)] = inst_48460);

(statearr_48543_48582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (26))){
var inst_48484 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48544_48583 = state_48514__$1;
(statearr_48544_48583[(2)] = inst_48484);

(statearr_48544_48583[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (16))){
var inst_48471 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48514__$1 = state_48514;
if(cljs.core.truth_(inst_48471)){
var statearr_48545_48584 = state_48514__$1;
(statearr_48545_48584[(1)] = (19));

} else {
var statearr_48546_48585 = state_48514__$1;
(statearr_48546_48585[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (30))){
var inst_48491 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48547_48586 = state_48514__$1;
(statearr_48547_48586[(2)] = inst_48491);

(statearr_48547_48586[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (10))){
var inst_48452 = figwheel.client.heads_up.clear.call(null);
var state_48514__$1 = state_48514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48514__$1,(13),inst_48452);
} else {
if((state_val_48515 === (18))){
var inst_48469 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48548_48587 = state_48514__$1;
(statearr_48548_48587[(2)] = inst_48469);

(statearr_48548_48587[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48515 === (8))){
var inst_48442 = (state_48514[(2)]);
var state_48514__$1 = state_48514;
var statearr_48549_48588 = state_48514__$1;
(statearr_48549_48588[(2)] = inst_48442);

(statearr_48549_48588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19818__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19756__auto__,c__19818__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____0 = (function (){
var statearr_48553 = [null,null,null,null,null,null,null,null,null];
(statearr_48553[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__);

(statearr_48553[(1)] = (1));

return statearr_48553;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____1 = (function (state_48514){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_48514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e48554){if((e48554 instanceof Object)){
var ex__19760__auto__ = e48554;
var statearr_48555_48589 = state_48514;
(statearr_48555_48589[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48590 = state_48514;
state_48514 = G__48590;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__ = function(state_48514){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____1.call(this,state_48514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,msg_hist,msg_names,msg))
})();
var state__19820__auto__ = (function (){var statearr_48556 = f__19819__auto__.call(null);
(statearr_48556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_48556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__,msg_hist,msg_names,msg))
);

return c__19818__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19818__auto___48653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___48653,ch){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___48653,ch){
return (function (state_48636){
var state_val_48637 = (state_48636[(1)]);
if((state_val_48637 === (1))){
var state_48636__$1 = state_48636;
var statearr_48638_48654 = state_48636__$1;
(statearr_48638_48654[(2)] = null);

(statearr_48638_48654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48637 === (2))){
var state_48636__$1 = state_48636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48636__$1,(4),ch);
} else {
if((state_val_48637 === (3))){
var inst_48634 = (state_48636[(2)]);
var state_48636__$1 = state_48636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48636__$1,inst_48634);
} else {
if((state_val_48637 === (4))){
var inst_48624 = (state_48636[(7)]);
var inst_48624__$1 = (state_48636[(2)]);
var state_48636__$1 = (function (){var statearr_48639 = state_48636;
(statearr_48639[(7)] = inst_48624__$1);

return statearr_48639;
})();
if(cljs.core.truth_(inst_48624__$1)){
var statearr_48640_48655 = state_48636__$1;
(statearr_48640_48655[(1)] = (5));

} else {
var statearr_48641_48656 = state_48636__$1;
(statearr_48641_48656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48637 === (5))){
var inst_48624 = (state_48636[(7)]);
var inst_48626 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48624);
var state_48636__$1 = state_48636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48636__$1,(8),inst_48626);
} else {
if((state_val_48637 === (6))){
var state_48636__$1 = state_48636;
var statearr_48642_48657 = state_48636__$1;
(statearr_48642_48657[(2)] = null);

(statearr_48642_48657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48637 === (7))){
var inst_48632 = (state_48636[(2)]);
var state_48636__$1 = state_48636;
var statearr_48643_48658 = state_48636__$1;
(statearr_48643_48658[(2)] = inst_48632);

(statearr_48643_48658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48637 === (8))){
var inst_48628 = (state_48636[(2)]);
var state_48636__$1 = (function (){var statearr_48644 = state_48636;
(statearr_48644[(8)] = inst_48628);

return statearr_48644;
})();
var statearr_48645_48659 = state_48636__$1;
(statearr_48645_48659[(2)] = null);

(statearr_48645_48659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19818__auto___48653,ch))
;
return ((function (switch__19756__auto__,c__19818__auto___48653,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19757__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19757__auto____0 = (function (){
var statearr_48649 = [null,null,null,null,null,null,null,null,null];
(statearr_48649[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19757__auto__);

(statearr_48649[(1)] = (1));

return statearr_48649;
});
var figwheel$client$heads_up_plugin_$_state_machine__19757__auto____1 = (function (state_48636){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_48636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e48650){if((e48650 instanceof Object)){
var ex__19760__auto__ = e48650;
var statearr_48651_48660 = state_48636;
(statearr_48651_48660[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48661 = state_48636;
state_48636 = G__48661;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19757__auto__ = function(state_48636){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19757__auto____1.call(this,state_48636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19757__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19757__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___48653,ch))
})();
var state__19820__auto__ = (function (){var statearr_48652 = f__19819__auto__.call(null);
(statearr_48652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___48653);

return statearr_48652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___48653,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__){
return (function (state_48682){
var state_val_48683 = (state_48682[(1)]);
if((state_val_48683 === (1))){
var inst_48677 = cljs.core.async.timeout.call(null,(3000));
var state_48682__$1 = state_48682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48682__$1,(2),inst_48677);
} else {
if((state_val_48683 === (2))){
var inst_48679 = (state_48682[(2)]);
var inst_48680 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_48682__$1 = (function (){var statearr_48684 = state_48682;
(statearr_48684[(7)] = inst_48679);

return statearr_48684;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48682__$1,inst_48680);
} else {
return null;
}
}
});})(c__19818__auto__))
;
return ((function (switch__19756__auto__,c__19818__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____0 = (function (){
var statearr_48688 = [null,null,null,null,null,null,null,null];
(statearr_48688[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__);

(statearr_48688[(1)] = (1));

return statearr_48688;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____1 = (function (state_48682){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_48682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e48689){if((e48689 instanceof Object)){
var ex__19760__auto__ = e48689;
var statearr_48690_48692 = state_48682;
(statearr_48690_48692[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48693 = state_48682;
state_48682 = G__48693;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__ = function(state_48682){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____1.call(this,state_48682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_48691 = f__19819__auto__.call(null);
(statearr_48691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_48691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__))
);

return c__19818__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48694){
var map__48700 = p__48694;
var map__48700__$1 = ((cljs.core.seq_QMARK_.call(null,map__48700))?cljs.core.apply.call(null,cljs.core.hash_map,map__48700):map__48700);
var ed = map__48700__$1;
var formatted_exception = cljs.core.get.call(null,map__48700__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__48700__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48700__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__48701_48705 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__48702_48706 = null;
var count__48703_48707 = (0);
var i__48704_48708 = (0);
while(true){
if((i__48704_48708 < count__48703_48707)){
var msg_48709 = cljs.core._nth.call(null,chunk__48702_48706,i__48704_48708);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48709);

var G__48710 = seq__48701_48705;
var G__48711 = chunk__48702_48706;
var G__48712 = count__48703_48707;
var G__48713 = (i__48704_48708 + (1));
seq__48701_48705 = G__48710;
chunk__48702_48706 = G__48711;
count__48703_48707 = G__48712;
i__48704_48708 = G__48713;
continue;
} else {
var temp__4425__auto___48714 = cljs.core.seq.call(null,seq__48701_48705);
if(temp__4425__auto___48714){
var seq__48701_48715__$1 = temp__4425__auto___48714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48701_48715__$1)){
var c__16847__auto___48716 = cljs.core.chunk_first.call(null,seq__48701_48715__$1);
var G__48717 = cljs.core.chunk_rest.call(null,seq__48701_48715__$1);
var G__48718 = c__16847__auto___48716;
var G__48719 = cljs.core.count.call(null,c__16847__auto___48716);
var G__48720 = (0);
seq__48701_48705 = G__48717;
chunk__48702_48706 = G__48718;
count__48703_48707 = G__48719;
i__48704_48708 = G__48720;
continue;
} else {
var msg_48721 = cljs.core.first.call(null,seq__48701_48715__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48721);

var G__48722 = cljs.core.next.call(null,seq__48701_48715__$1);
var G__48723 = null;
var G__48724 = (0);
var G__48725 = (0);
seq__48701_48705 = G__48722;
chunk__48702_48706 = G__48723;
count__48703_48707 = G__48724;
i__48704_48708 = G__48725;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48726){
var map__48728 = p__48726;
var map__48728__$1 = ((cljs.core.seq_QMARK_.call(null,map__48728))?cljs.core.apply.call(null,cljs.core.hash_map,map__48728):map__48728);
var w = map__48728__$1;
var message = cljs.core.get.call(null,map__48728__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16050__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16050__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16050__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__48735 = cljs.core.seq.call(null,plugins);
var chunk__48736 = null;
var count__48737 = (0);
var i__48738 = (0);
while(true){
if((i__48738 < count__48737)){
var vec__48739 = cljs.core._nth.call(null,chunk__48736,i__48738);
var k = cljs.core.nth.call(null,vec__48739,(0),null);
var plugin = cljs.core.nth.call(null,vec__48739,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48741 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48735,chunk__48736,count__48737,i__48738,pl_48741,vec__48739,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48741.call(null,msg_hist);
});})(seq__48735,chunk__48736,count__48737,i__48738,pl_48741,vec__48739,k,plugin))
);
} else {
}

var G__48742 = seq__48735;
var G__48743 = chunk__48736;
var G__48744 = count__48737;
var G__48745 = (i__48738 + (1));
seq__48735 = G__48742;
chunk__48736 = G__48743;
count__48737 = G__48744;
i__48738 = G__48745;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__48735);
if(temp__4425__auto__){
var seq__48735__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48735__$1)){
var c__16847__auto__ = cljs.core.chunk_first.call(null,seq__48735__$1);
var G__48746 = cljs.core.chunk_rest.call(null,seq__48735__$1);
var G__48747 = c__16847__auto__;
var G__48748 = cljs.core.count.call(null,c__16847__auto__);
var G__48749 = (0);
seq__48735 = G__48746;
chunk__48736 = G__48747;
count__48737 = G__48748;
i__48738 = G__48749;
continue;
} else {
var vec__48740 = cljs.core.first.call(null,seq__48735__$1);
var k = cljs.core.nth.call(null,vec__48740,(0),null);
var plugin = cljs.core.nth.call(null,vec__48740,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48750 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48735,chunk__48736,count__48737,i__48738,pl_48750,vec__48740,k,plugin,seq__48735__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48750.call(null,msg_hist);
});})(seq__48735,chunk__48736,count__48737,i__48738,pl_48750,vec__48740,k,plugin,seq__48735__$1,temp__4425__auto__))
);
} else {
}

var G__48751 = cljs.core.next.call(null,seq__48735__$1);
var G__48752 = null;
var G__48753 = (0);
var G__48754 = (0);
seq__48735 = G__48751;
chunk__48736 = G__48752;
count__48737 = G__48753;
i__48738 = G__48754;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__48756 = arguments.length;
switch (G__48756) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17102__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17102__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__48759){
var map__48760 = p__48759;
var map__48760__$1 = ((cljs.core.seq_QMARK_.call(null,map__48760))?cljs.core.apply.call(null,cljs.core.hash_map,map__48760):map__48760);
var opts = map__48760__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq48758){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48758));
});

//# sourceMappingURL=client.js.map