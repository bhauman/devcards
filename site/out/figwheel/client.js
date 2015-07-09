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
var G__74862__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__74862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74863__i = 0, G__74863__a = new Array(arguments.length -  0);
while (G__74863__i < G__74863__a.length) {G__74863__a[G__74863__i] = arguments[G__74863__i + 0]; ++G__74863__i;}
  args = new cljs.core.IndexedSeq(G__74863__a,0);
} 
return G__74862__delegate.call(this,args);};
G__74862.cljs$lang$maxFixedArity = 0;
G__74862.cljs$lang$applyTo = (function (arglist__74864){
var args = cljs.core.seq(arglist__74864);
return G__74862__delegate(args);
});
G__74862.cljs$core$IFn$_invoke$arity$variadic = G__74862__delegate;
return G__74862;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__74865){
var map__74867 = p__74865;
var map__74867__$1 = ((cljs.core.seq_QMARK_.call(null,map__74867))?cljs.core.apply.call(null,cljs.core.hash_map,map__74867):map__74867);
var message = cljs.core.get.call(null,map__74867__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__74867__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19818__auto___74996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___74996,ch){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___74996,ch){
return (function (state_74970){
var state_val_74971 = (state_74970[(1)]);
if((state_val_74971 === (7))){
var inst_74966 = (state_74970[(2)]);
var state_74970__$1 = state_74970;
var statearr_74972_74997 = state_74970__$1;
(statearr_74972_74997[(2)] = inst_74966);

(statearr_74972_74997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74971 === (1))){
var state_74970__$1 = state_74970;
var statearr_74973_74998 = state_74970__$1;
(statearr_74973_74998[(2)] = null);

(statearr_74973_74998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74971 === (4))){
var inst_74934 = (state_74970[(7)]);
var inst_74934__$1 = (state_74970[(2)]);
var state_74970__$1 = (function (){var statearr_74974 = state_74970;
(statearr_74974[(7)] = inst_74934__$1);

return statearr_74974;
})();
if(cljs.core.truth_(inst_74934__$1)){
var statearr_74975_74999 = state_74970__$1;
(statearr_74975_74999[(1)] = (5));

} else {
var statearr_74976_75000 = state_74970__$1;
(statearr_74976_75000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74971 === (13))){
var state_74970__$1 = state_74970;
var statearr_74977_75001 = state_74970__$1;
(statearr_74977_75001[(2)] = null);

(statearr_74977_75001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74971 === (6))){
var state_74970__$1 = state_74970;
var statearr_74978_75002 = state_74970__$1;
(statearr_74978_75002[(2)] = null);

(statearr_74978_75002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74971 === (3))){
var inst_74968 = (state_74970[(2)]);
var state_74970__$1 = state_74970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74970__$1,inst_74968);
} else {
if((state_val_74971 === (12))){
var inst_74941 = (state_74970[(8)]);
var inst_74954 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_74941);
var inst_74955 = cljs.core.first.call(null,inst_74954);
var inst_74956 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_74955);
var inst_74957 = console.warn("Figwheel: Not loading code with warnings - ",inst_74956);
var state_74970__$1 = state_74970;
var statearr_74979_75003 = state_74970__$1;
(statearr_74979_75003[(2)] = inst_74957);

(statearr_74979_75003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74971 === (2))){
var state_74970__$1 = state_74970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74970__$1,(4),ch);
} else {
if((state_val_74971 === (11))){
var inst_74950 = (state_74970[(2)]);
var state_74970__$1 = state_74970;
var statearr_74980_75004 = state_74970__$1;
(statearr_74980_75004[(2)] = inst_74950);

(statearr_74980_75004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74971 === (9))){
var inst_74940 = (state_74970[(9)]);
var inst_74952 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_74940,opts);
var state_74970__$1 = state_74970;
if(cljs.core.truth_(inst_74952)){
var statearr_74981_75005 = state_74970__$1;
(statearr_74981_75005[(1)] = (12));

} else {
var statearr_74982_75006 = state_74970__$1;
(statearr_74982_75006[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74971 === (5))){
var inst_74940 = (state_74970[(9)]);
var inst_74934 = (state_74970[(7)]);
var inst_74936 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_74937 = (new cljs.core.PersistentArrayMap(null,2,inst_74936,null));
var inst_74938 = (new cljs.core.PersistentHashSet(null,inst_74937,null));
var inst_74939 = figwheel.client.focus_msgs.call(null,inst_74938,inst_74934);
var inst_74940__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_74939);
var inst_74941 = cljs.core.first.call(null,inst_74939);
var inst_74942 = figwheel.client.reload_file_state_QMARK_.call(null,inst_74940__$1,opts);
var state_74970__$1 = (function (){var statearr_74983 = state_74970;
(statearr_74983[(9)] = inst_74940__$1);

(statearr_74983[(8)] = inst_74941);

return statearr_74983;
})();
if(cljs.core.truth_(inst_74942)){
var statearr_74984_75007 = state_74970__$1;
(statearr_74984_75007[(1)] = (8));

} else {
var statearr_74985_75008 = state_74970__$1;
(statearr_74985_75008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74971 === (14))){
var inst_74960 = (state_74970[(2)]);
var state_74970__$1 = state_74970;
var statearr_74986_75009 = state_74970__$1;
(statearr_74986_75009[(2)] = inst_74960);

(statearr_74986_75009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74971 === (10))){
var inst_74962 = (state_74970[(2)]);
var state_74970__$1 = (function (){var statearr_74987 = state_74970;
(statearr_74987[(10)] = inst_74962);

return statearr_74987;
})();
var statearr_74988_75010 = state_74970__$1;
(statearr_74988_75010[(2)] = null);

(statearr_74988_75010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74971 === (8))){
var inst_74941 = (state_74970[(8)]);
var inst_74944 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74945 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_74941);
var inst_74946 = cljs.core.async.timeout.call(null,(1000));
var inst_74947 = [inst_74945,inst_74946];
var inst_74948 = (new cljs.core.PersistentVector(null,2,(5),inst_74944,inst_74947,null));
var state_74970__$1 = state_74970;
return cljs.core.async.ioc_alts_BANG_.call(null,state_74970__$1,(11),inst_74948);
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
});})(c__19818__auto___74996,ch))
;
return ((function (switch__19756__auto__,c__19818__auto___74996,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____0 = (function (){
var statearr_74992 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74992[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__);

(statearr_74992[(1)] = (1));

return statearr_74992;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____1 = (function (state_74970){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_74970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e74993){if((e74993 instanceof Object)){
var ex__19760__auto__ = e74993;
var statearr_74994_75011 = state_74970;
(statearr_74994_75011[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75012 = state_74970;
state_74970 = G__75012;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__ = function(state_74970){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____1.call(this,state_74970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___74996,ch))
})();
var state__19820__auto__ = (function (){var statearr_74995 = f__19819__auto__.call(null);
(statearr_74995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___74996);

return statearr_74995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___74996,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__75013_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__75013_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_75020 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_75020){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_75018 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_75019 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_75018,_STAR_print_newline_STAR_75019,base_path_75020){
return (function() { 
var G__75021__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__75021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75022__i = 0, G__75022__a = new Array(arguments.length -  0);
while (G__75022__i < G__75022__a.length) {G__75022__a[G__75022__i] = arguments[G__75022__i + 0]; ++G__75022__i;}
  args = new cljs.core.IndexedSeq(G__75022__a,0);
} 
return G__75021__delegate.call(this,args);};
G__75021.cljs$lang$maxFixedArity = 0;
G__75021.cljs$lang$applyTo = (function (arglist__75023){
var args = cljs.core.seq(arglist__75023);
return G__75021__delegate(args);
});
G__75021.cljs$core$IFn$_invoke$arity$variadic = G__75021__delegate;
return G__75021;
})()
;})(_STAR_print_fn_STAR_75018,_STAR_print_newline_STAR_75019,base_path_75020))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_75019;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_75018;
}}catch (e75017){if((e75017 instanceof Error)){
var e = e75017;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_75020], null));
} else {
var e = e75017;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_75020))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__75024){
var map__75029 = p__75024;
var map__75029__$1 = ((cljs.core.seq_QMARK_.call(null,map__75029))?cljs.core.apply.call(null,cljs.core.hash_map,map__75029):map__75029);
var opts = map__75029__$1;
var build_id = cljs.core.get.call(null,map__75029__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__75029,map__75029__$1,opts,build_id){
return (function (p__75030){
var vec__75031 = p__75030;
var map__75032 = cljs.core.nth.call(null,vec__75031,(0),null);
var map__75032__$1 = ((cljs.core.seq_QMARK_.call(null,map__75032))?cljs.core.apply.call(null,cljs.core.hash_map,map__75032):map__75032);
var msg = map__75032__$1;
var msg_name = cljs.core.get.call(null,map__75032__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__75031,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__75031,map__75032,map__75032__$1,msg,msg_name,_,map__75029,map__75029__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__75031,map__75032,map__75032__$1,msg,msg_name,_,map__75029,map__75029__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__75029,map__75029__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__75036){
var vec__75037 = p__75036;
var map__75038 = cljs.core.nth.call(null,vec__75037,(0),null);
var map__75038__$1 = ((cljs.core.seq_QMARK_.call(null,map__75038))?cljs.core.apply.call(null,cljs.core.hash_map,map__75038):map__75038);
var msg = map__75038__$1;
var msg_name = cljs.core.get.call(null,map__75038__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__75037,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__75039){
var map__75047 = p__75039;
var map__75047__$1 = ((cljs.core.seq_QMARK_.call(null,map__75047))?cljs.core.apply.call(null,cljs.core.hash_map,map__75047):map__75047);
var on_compile_warning = cljs.core.get.call(null,map__75047__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__75047__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__75047,map__75047__$1,on_compile_warning,on_compile_fail){
return (function (p__75048){
var vec__75049 = p__75048;
var map__75050 = cljs.core.nth.call(null,vec__75049,(0),null);
var map__75050__$1 = ((cljs.core.seq_QMARK_.call(null,map__75050))?cljs.core.apply.call(null,cljs.core.hash_map,map__75050):map__75050);
var msg = map__75050__$1;
var msg_name = cljs.core.get.call(null,map__75050__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__75049,(1));
var pred__75051 = cljs.core._EQ_;
var expr__75052 = msg_name;
if(cljs.core.truth_(pred__75051.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__75052))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__75051.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__75052))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__75047,map__75047__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,msg_hist,msg_names,msg){
return (function (state_75253){
var state_val_75254 = (state_75253[(1)]);
if((state_val_75254 === (7))){
var inst_75187 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75255_75296 = state_75253__$1;
(statearr_75255_75296[(2)] = inst_75187);

(statearr_75255_75296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (20))){
var inst_75215 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_75253__$1 = state_75253;
if(cljs.core.truth_(inst_75215)){
var statearr_75256_75297 = state_75253__$1;
(statearr_75256_75297[(1)] = (22));

} else {
var statearr_75257_75298 = state_75253__$1;
(statearr_75257_75298[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (27))){
var inst_75227 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75228 = figwheel.client.heads_up.display_warning.call(null,inst_75227);
var state_75253__$1 = state_75253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75253__$1,(30),inst_75228);
} else {
if((state_val_75254 === (1))){
var inst_75175 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_75253__$1 = state_75253;
if(cljs.core.truth_(inst_75175)){
var statearr_75258_75299 = state_75253__$1;
(statearr_75258_75299[(1)] = (2));

} else {
var statearr_75259_75300 = state_75253__$1;
(statearr_75259_75300[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (24))){
var inst_75243 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75260_75301 = state_75253__$1;
(statearr_75260_75301[(2)] = inst_75243);

(statearr_75260_75301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (4))){
var inst_75251 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75253__$1,inst_75251);
} else {
if((state_val_75254 === (15))){
var inst_75203 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75204 = figwheel.client.format_messages.call(null,inst_75203);
var inst_75205 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75206 = figwheel.client.heads_up.display_error.call(null,inst_75204,inst_75205);
var state_75253__$1 = state_75253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75253__$1,(18),inst_75206);
} else {
if((state_val_75254 === (21))){
var inst_75245 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75261_75302 = state_75253__$1;
(statearr_75261_75302[(2)] = inst_75245);

(statearr_75261_75302[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (31))){
var inst_75234 = figwheel.client.heads_up.flash_loaded.call(null);
var state_75253__$1 = state_75253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75253__$1,(34),inst_75234);
} else {
if((state_val_75254 === (32))){
var state_75253__$1 = state_75253;
var statearr_75262_75303 = state_75253__$1;
(statearr_75262_75303[(2)] = null);

(statearr_75262_75303[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (33))){
var inst_75239 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75263_75304 = state_75253__$1;
(statearr_75263_75304[(2)] = inst_75239);

(statearr_75263_75304[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (13))){
var inst_75193 = (state_75253[(2)]);
var inst_75194 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75195 = figwheel.client.format_messages.call(null,inst_75194);
var inst_75196 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75197 = figwheel.client.heads_up.display_error.call(null,inst_75195,inst_75196);
var state_75253__$1 = (function (){var statearr_75264 = state_75253;
(statearr_75264[(7)] = inst_75193);

return statearr_75264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75253__$1,(14),inst_75197);
} else {
if((state_val_75254 === (22))){
var inst_75217 = figwheel.client.heads_up.clear.call(null);
var state_75253__$1 = state_75253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75253__$1,(25),inst_75217);
} else {
if((state_val_75254 === (29))){
var inst_75241 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75265_75305 = state_75253__$1;
(statearr_75265_75305[(2)] = inst_75241);

(statearr_75265_75305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (6))){
var inst_75183 = figwheel.client.heads_up.clear.call(null);
var state_75253__$1 = state_75253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75253__$1,(9),inst_75183);
} else {
if((state_val_75254 === (28))){
var inst_75232 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_75253__$1 = state_75253;
if(cljs.core.truth_(inst_75232)){
var statearr_75266_75306 = state_75253__$1;
(statearr_75266_75306[(1)] = (31));

} else {
var statearr_75267_75307 = state_75253__$1;
(statearr_75267_75307[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (25))){
var inst_75219 = (state_75253[(2)]);
var inst_75220 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75221 = figwheel.client.heads_up.display_warning.call(null,inst_75220);
var state_75253__$1 = (function (){var statearr_75268 = state_75253;
(statearr_75268[(8)] = inst_75219);

return statearr_75268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75253__$1,(26),inst_75221);
} else {
if((state_val_75254 === (34))){
var inst_75236 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75269_75308 = state_75253__$1;
(statearr_75269_75308[(2)] = inst_75236);

(statearr_75269_75308[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (17))){
var inst_75247 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75270_75309 = state_75253__$1;
(statearr_75270_75309[(2)] = inst_75247);

(statearr_75270_75309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (3))){
var inst_75189 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_75253__$1 = state_75253;
if(cljs.core.truth_(inst_75189)){
var statearr_75271_75310 = state_75253__$1;
(statearr_75271_75310[(1)] = (10));

} else {
var statearr_75272_75311 = state_75253__$1;
(statearr_75272_75311[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (12))){
var inst_75249 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75273_75312 = state_75253__$1;
(statearr_75273_75312[(2)] = inst_75249);

(statearr_75273_75312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (2))){
var inst_75177 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_75253__$1 = state_75253;
if(cljs.core.truth_(inst_75177)){
var statearr_75274_75313 = state_75253__$1;
(statearr_75274_75313[(1)] = (5));

} else {
var statearr_75275_75314 = state_75253__$1;
(statearr_75275_75314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (23))){
var inst_75225 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_75253__$1 = state_75253;
if(cljs.core.truth_(inst_75225)){
var statearr_75276_75315 = state_75253__$1;
(statearr_75276_75315[(1)] = (27));

} else {
var statearr_75277_75316 = state_75253__$1;
(statearr_75277_75316[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (19))){
var inst_75212 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75213 = figwheel.client.heads_up.append_message.call(null,inst_75212);
var state_75253__$1 = state_75253;
var statearr_75278_75317 = state_75253__$1;
(statearr_75278_75317[(2)] = inst_75213);

(statearr_75278_75317[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (11))){
var inst_75201 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_75253__$1 = state_75253;
if(cljs.core.truth_(inst_75201)){
var statearr_75279_75318 = state_75253__$1;
(statearr_75279_75318[(1)] = (15));

} else {
var statearr_75280_75319 = state_75253__$1;
(statearr_75280_75319[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (9))){
var inst_75185 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75281_75320 = state_75253__$1;
(statearr_75281_75320[(2)] = inst_75185);

(statearr_75281_75320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (5))){
var inst_75179 = figwheel.client.heads_up.flash_loaded.call(null);
var state_75253__$1 = state_75253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75253__$1,(8),inst_75179);
} else {
if((state_val_75254 === (14))){
var inst_75199 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75282_75321 = state_75253__$1;
(statearr_75282_75321[(2)] = inst_75199);

(statearr_75282_75321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (26))){
var inst_75223 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75283_75322 = state_75253__$1;
(statearr_75283_75322[(2)] = inst_75223);

(statearr_75283_75322[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (16))){
var inst_75210 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_75253__$1 = state_75253;
if(cljs.core.truth_(inst_75210)){
var statearr_75284_75323 = state_75253__$1;
(statearr_75284_75323[(1)] = (19));

} else {
var statearr_75285_75324 = state_75253__$1;
(statearr_75285_75324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (30))){
var inst_75230 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75286_75325 = state_75253__$1;
(statearr_75286_75325[(2)] = inst_75230);

(statearr_75286_75325[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (10))){
var inst_75191 = figwheel.client.heads_up.clear.call(null);
var state_75253__$1 = state_75253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75253__$1,(13),inst_75191);
} else {
if((state_val_75254 === (18))){
var inst_75208 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75287_75326 = state_75253__$1;
(statearr_75287_75326[(2)] = inst_75208);

(statearr_75287_75326[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75254 === (8))){
var inst_75181 = (state_75253[(2)]);
var state_75253__$1 = state_75253;
var statearr_75288_75327 = state_75253__$1;
(statearr_75288_75327[(2)] = inst_75181);

(statearr_75288_75327[(1)] = (7));


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
var statearr_75292 = [null,null,null,null,null,null,null,null,null];
(statearr_75292[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__);

(statearr_75292[(1)] = (1));

return statearr_75292;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____1 = (function (state_75253){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_75253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e75293){if((e75293 instanceof Object)){
var ex__19760__auto__ = e75293;
var statearr_75294_75328 = state_75253;
(statearr_75294_75328[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75329 = state_75253;
state_75253 = G__75329;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__ = function(state_75253){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____1.call(this,state_75253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,msg_hist,msg_names,msg))
})();
var state__19820__auto__ = (function (){var statearr_75295 = f__19819__auto__.call(null);
(statearr_75295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_75295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__,msg_hist,msg_names,msg))
);

return c__19818__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19818__auto___75392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___75392,ch){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___75392,ch){
return (function (state_75375){
var state_val_75376 = (state_75375[(1)]);
if((state_val_75376 === (1))){
var state_75375__$1 = state_75375;
var statearr_75377_75393 = state_75375__$1;
(statearr_75377_75393[(2)] = null);

(statearr_75377_75393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75376 === (2))){
var state_75375__$1 = state_75375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75375__$1,(4),ch);
} else {
if((state_val_75376 === (3))){
var inst_75373 = (state_75375[(2)]);
var state_75375__$1 = state_75375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75375__$1,inst_75373);
} else {
if((state_val_75376 === (4))){
var inst_75363 = (state_75375[(7)]);
var inst_75363__$1 = (state_75375[(2)]);
var state_75375__$1 = (function (){var statearr_75378 = state_75375;
(statearr_75378[(7)] = inst_75363__$1);

return statearr_75378;
})();
if(cljs.core.truth_(inst_75363__$1)){
var statearr_75379_75394 = state_75375__$1;
(statearr_75379_75394[(1)] = (5));

} else {
var statearr_75380_75395 = state_75375__$1;
(statearr_75380_75395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75376 === (5))){
var inst_75363 = (state_75375[(7)]);
var inst_75365 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_75363);
var state_75375__$1 = state_75375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75375__$1,(8),inst_75365);
} else {
if((state_val_75376 === (6))){
var state_75375__$1 = state_75375;
var statearr_75381_75396 = state_75375__$1;
(statearr_75381_75396[(2)] = null);

(statearr_75381_75396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75376 === (7))){
var inst_75371 = (state_75375[(2)]);
var state_75375__$1 = state_75375;
var statearr_75382_75397 = state_75375__$1;
(statearr_75382_75397[(2)] = inst_75371);

(statearr_75382_75397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75376 === (8))){
var inst_75367 = (state_75375[(2)]);
var state_75375__$1 = (function (){var statearr_75383 = state_75375;
(statearr_75383[(8)] = inst_75367);

return statearr_75383;
})();
var statearr_75384_75398 = state_75375__$1;
(statearr_75384_75398[(2)] = null);

(statearr_75384_75398[(1)] = (2));


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
});})(c__19818__auto___75392,ch))
;
return ((function (switch__19756__auto__,c__19818__auto___75392,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19757__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19757__auto____0 = (function (){
var statearr_75388 = [null,null,null,null,null,null,null,null,null];
(statearr_75388[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19757__auto__);

(statearr_75388[(1)] = (1));

return statearr_75388;
});
var figwheel$client$heads_up_plugin_$_state_machine__19757__auto____1 = (function (state_75375){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_75375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e75389){if((e75389 instanceof Object)){
var ex__19760__auto__ = e75389;
var statearr_75390_75399 = state_75375;
(statearr_75390_75399[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75400 = state_75375;
state_75375 = G__75400;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19757__auto__ = function(state_75375){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19757__auto____1.call(this,state_75375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19757__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19757__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___75392,ch))
})();
var state__19820__auto__ = (function (){var statearr_75391 = f__19819__auto__.call(null);
(statearr_75391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___75392);

return statearr_75391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___75392,ch))
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
return (function (state_75421){
var state_val_75422 = (state_75421[(1)]);
if((state_val_75422 === (1))){
var inst_75416 = cljs.core.async.timeout.call(null,(3000));
var state_75421__$1 = state_75421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75421__$1,(2),inst_75416);
} else {
if((state_val_75422 === (2))){
var inst_75418 = (state_75421[(2)]);
var inst_75419 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_75421__$1 = (function (){var statearr_75423 = state_75421;
(statearr_75423[(7)] = inst_75418);

return statearr_75423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75421__$1,inst_75419);
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
var statearr_75427 = [null,null,null,null,null,null,null,null];
(statearr_75427[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__);

(statearr_75427[(1)] = (1));

return statearr_75427;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____1 = (function (state_75421){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_75421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e75428){if((e75428 instanceof Object)){
var ex__19760__auto__ = e75428;
var statearr_75429_75431 = state_75421;
(statearr_75429_75431[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75432 = state_75421;
state_75421 = G__75432;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__ = function(state_75421){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____1.call(this,state_75421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_75430 = f__19819__auto__.call(null);
(statearr_75430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_75430;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__75433){
var map__75439 = p__75433;
var map__75439__$1 = ((cljs.core.seq_QMARK_.call(null,map__75439))?cljs.core.apply.call(null,cljs.core.hash_map,map__75439):map__75439);
var ed = map__75439__$1;
var formatted_exception = cljs.core.get.call(null,map__75439__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__75439__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__75439__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__75440_75444 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__75441_75445 = null;
var count__75442_75446 = (0);
var i__75443_75447 = (0);
while(true){
if((i__75443_75447 < count__75442_75446)){
var msg_75448 = cljs.core._nth.call(null,chunk__75441_75445,i__75443_75447);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_75448);

var G__75449 = seq__75440_75444;
var G__75450 = chunk__75441_75445;
var G__75451 = count__75442_75446;
var G__75452 = (i__75443_75447 + (1));
seq__75440_75444 = G__75449;
chunk__75441_75445 = G__75450;
count__75442_75446 = G__75451;
i__75443_75447 = G__75452;
continue;
} else {
var temp__4425__auto___75453 = cljs.core.seq.call(null,seq__75440_75444);
if(temp__4425__auto___75453){
var seq__75440_75454__$1 = temp__4425__auto___75453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75440_75454__$1)){
var c__16847__auto___75455 = cljs.core.chunk_first.call(null,seq__75440_75454__$1);
var G__75456 = cljs.core.chunk_rest.call(null,seq__75440_75454__$1);
var G__75457 = c__16847__auto___75455;
var G__75458 = cljs.core.count.call(null,c__16847__auto___75455);
var G__75459 = (0);
seq__75440_75444 = G__75456;
chunk__75441_75445 = G__75457;
count__75442_75446 = G__75458;
i__75443_75447 = G__75459;
continue;
} else {
var msg_75460 = cljs.core.first.call(null,seq__75440_75454__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_75460);

var G__75461 = cljs.core.next.call(null,seq__75440_75454__$1);
var G__75462 = null;
var G__75463 = (0);
var G__75464 = (0);
seq__75440_75444 = G__75461;
chunk__75441_75445 = G__75462;
count__75442_75446 = G__75463;
i__75443_75447 = G__75464;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__75465){
var map__75467 = p__75465;
var map__75467__$1 = ((cljs.core.seq_QMARK_.call(null,map__75467))?cljs.core.apply.call(null,cljs.core.hash_map,map__75467):map__75467);
var w = map__75467__$1;
var message = cljs.core.get.call(null,map__75467__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__75474 = cljs.core.seq.call(null,plugins);
var chunk__75475 = null;
var count__75476 = (0);
var i__75477 = (0);
while(true){
if((i__75477 < count__75476)){
var vec__75478 = cljs.core._nth.call(null,chunk__75475,i__75477);
var k = cljs.core.nth.call(null,vec__75478,(0),null);
var plugin = cljs.core.nth.call(null,vec__75478,(1),null);
if(cljs.core.truth_(plugin)){
var pl_75480 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__75474,chunk__75475,count__75476,i__75477,pl_75480,vec__75478,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_75480.call(null,msg_hist);
});})(seq__75474,chunk__75475,count__75476,i__75477,pl_75480,vec__75478,k,plugin))
);
} else {
}

var G__75481 = seq__75474;
var G__75482 = chunk__75475;
var G__75483 = count__75476;
var G__75484 = (i__75477 + (1));
seq__75474 = G__75481;
chunk__75475 = G__75482;
count__75476 = G__75483;
i__75477 = G__75484;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__75474);
if(temp__4425__auto__){
var seq__75474__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75474__$1)){
var c__16847__auto__ = cljs.core.chunk_first.call(null,seq__75474__$1);
var G__75485 = cljs.core.chunk_rest.call(null,seq__75474__$1);
var G__75486 = c__16847__auto__;
var G__75487 = cljs.core.count.call(null,c__16847__auto__);
var G__75488 = (0);
seq__75474 = G__75485;
chunk__75475 = G__75486;
count__75476 = G__75487;
i__75477 = G__75488;
continue;
} else {
var vec__75479 = cljs.core.first.call(null,seq__75474__$1);
var k = cljs.core.nth.call(null,vec__75479,(0),null);
var plugin = cljs.core.nth.call(null,vec__75479,(1),null);
if(cljs.core.truth_(plugin)){
var pl_75489 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__75474,chunk__75475,count__75476,i__75477,pl_75489,vec__75479,k,plugin,seq__75474__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_75489.call(null,msg_hist);
});})(seq__75474,chunk__75475,count__75476,i__75477,pl_75489,vec__75479,k,plugin,seq__75474__$1,temp__4425__auto__))
);
} else {
}

var G__75490 = cljs.core.next.call(null,seq__75474__$1);
var G__75491 = null;
var G__75492 = (0);
var G__75493 = (0);
seq__75474 = G__75490;
chunk__75475 = G__75491;
count__75476 = G__75492;
i__75477 = G__75493;
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
var G__75495 = arguments.length;
switch (G__75495) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__75498){
var map__75499 = p__75498;
var map__75499__$1 = ((cljs.core.seq_QMARK_.call(null,map__75499))?cljs.core.apply.call(null,cljs.core.hash_map,map__75499):map__75499);
var opts = map__75499__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq75497){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq75497));
});

//# sourceMappingURL=client.js.map