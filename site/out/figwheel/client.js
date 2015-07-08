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
var G__37644__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__37644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37645__i = 0, G__37645__a = new Array(arguments.length -  0);
while (G__37645__i < G__37645__a.length) {G__37645__a[G__37645__i] = arguments[G__37645__i + 0]; ++G__37645__i;}
  args = new cljs.core.IndexedSeq(G__37645__a,0);
} 
return G__37644__delegate.call(this,args);};
G__37644.cljs$lang$maxFixedArity = 0;
G__37644.cljs$lang$applyTo = (function (arglist__37646){
var args = cljs.core.seq(arglist__37646);
return G__37644__delegate(args);
});
G__37644.cljs$core$IFn$_invoke$arity$variadic = G__37644__delegate;
return G__37644;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37647){
var map__37649 = p__37647;
var map__37649__$1 = ((cljs.core.seq_QMARK_.call(null,map__37649))?cljs.core.apply.call(null,cljs.core.hash_map,map__37649):map__37649);
var message = cljs.core.get.call(null,map__37649__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37649__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19818__auto___37778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___37778,ch){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___37778,ch){
return (function (state_37752){
var state_val_37753 = (state_37752[(1)]);
if((state_val_37753 === (7))){
var inst_37748 = (state_37752[(2)]);
var state_37752__$1 = state_37752;
var statearr_37754_37779 = state_37752__$1;
(statearr_37754_37779[(2)] = inst_37748);

(statearr_37754_37779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (1))){
var state_37752__$1 = state_37752;
var statearr_37755_37780 = state_37752__$1;
(statearr_37755_37780[(2)] = null);

(statearr_37755_37780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (4))){
var inst_37716 = (state_37752[(7)]);
var inst_37716__$1 = (state_37752[(2)]);
var state_37752__$1 = (function (){var statearr_37756 = state_37752;
(statearr_37756[(7)] = inst_37716__$1);

return statearr_37756;
})();
if(cljs.core.truth_(inst_37716__$1)){
var statearr_37757_37781 = state_37752__$1;
(statearr_37757_37781[(1)] = (5));

} else {
var statearr_37758_37782 = state_37752__$1;
(statearr_37758_37782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (13))){
var state_37752__$1 = state_37752;
var statearr_37759_37783 = state_37752__$1;
(statearr_37759_37783[(2)] = null);

(statearr_37759_37783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (6))){
var state_37752__$1 = state_37752;
var statearr_37760_37784 = state_37752__$1;
(statearr_37760_37784[(2)] = null);

(statearr_37760_37784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (3))){
var inst_37750 = (state_37752[(2)]);
var state_37752__$1 = state_37752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37752__$1,inst_37750);
} else {
if((state_val_37753 === (12))){
var inst_37723 = (state_37752[(8)]);
var inst_37736 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37723);
var inst_37737 = cljs.core.first.call(null,inst_37736);
var inst_37738 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37737);
var inst_37739 = console.warn("Figwheel: Not loading code with warnings - ",inst_37738);
var state_37752__$1 = state_37752;
var statearr_37761_37785 = state_37752__$1;
(statearr_37761_37785[(2)] = inst_37739);

(statearr_37761_37785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (2))){
var state_37752__$1 = state_37752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37752__$1,(4),ch);
} else {
if((state_val_37753 === (11))){
var inst_37732 = (state_37752[(2)]);
var state_37752__$1 = state_37752;
var statearr_37762_37786 = state_37752__$1;
(statearr_37762_37786[(2)] = inst_37732);

(statearr_37762_37786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (9))){
var inst_37722 = (state_37752[(9)]);
var inst_37734 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37722,opts);
var state_37752__$1 = state_37752;
if(cljs.core.truth_(inst_37734)){
var statearr_37763_37787 = state_37752__$1;
(statearr_37763_37787[(1)] = (12));

} else {
var statearr_37764_37788 = state_37752__$1;
(statearr_37764_37788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (5))){
var inst_37716 = (state_37752[(7)]);
var inst_37722 = (state_37752[(9)]);
var inst_37718 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37719 = (new cljs.core.PersistentArrayMap(null,2,inst_37718,null));
var inst_37720 = (new cljs.core.PersistentHashSet(null,inst_37719,null));
var inst_37721 = figwheel.client.focus_msgs.call(null,inst_37720,inst_37716);
var inst_37722__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37721);
var inst_37723 = cljs.core.first.call(null,inst_37721);
var inst_37724 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37722__$1,opts);
var state_37752__$1 = (function (){var statearr_37765 = state_37752;
(statearr_37765[(8)] = inst_37723);

(statearr_37765[(9)] = inst_37722__$1);

return statearr_37765;
})();
if(cljs.core.truth_(inst_37724)){
var statearr_37766_37789 = state_37752__$1;
(statearr_37766_37789[(1)] = (8));

} else {
var statearr_37767_37790 = state_37752__$1;
(statearr_37767_37790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (14))){
var inst_37742 = (state_37752[(2)]);
var state_37752__$1 = state_37752;
var statearr_37768_37791 = state_37752__$1;
(statearr_37768_37791[(2)] = inst_37742);

(statearr_37768_37791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (10))){
var inst_37744 = (state_37752[(2)]);
var state_37752__$1 = (function (){var statearr_37769 = state_37752;
(statearr_37769[(10)] = inst_37744);

return statearr_37769;
})();
var statearr_37770_37792 = state_37752__$1;
(statearr_37770_37792[(2)] = null);

(statearr_37770_37792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (8))){
var inst_37723 = (state_37752[(8)]);
var inst_37726 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37727 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37723);
var inst_37728 = cljs.core.async.timeout.call(null,(1000));
var inst_37729 = [inst_37727,inst_37728];
var inst_37730 = (new cljs.core.PersistentVector(null,2,(5),inst_37726,inst_37729,null));
var state_37752__$1 = state_37752;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37752__$1,(11),inst_37730);
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
});})(c__19818__auto___37778,ch))
;
return ((function (switch__19756__auto__,c__19818__auto___37778,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____0 = (function (){
var statearr_37774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37774[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__);

(statearr_37774[(1)] = (1));

return statearr_37774;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____1 = (function (state_37752){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_37752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e37775){if((e37775 instanceof Object)){
var ex__19760__auto__ = e37775;
var statearr_37776_37793 = state_37752;
(statearr_37776_37793[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37794 = state_37752;
state_37752 = G__37794;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__ = function(state_37752){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____1.call(this,state_37752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19757__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___37778,ch))
})();
var state__19820__auto__ = (function (){var statearr_37777 = f__19819__auto__.call(null);
(statearr_37777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___37778);

return statearr_37777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___37778,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37795_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37795_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_37802 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37802){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_37800 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_37801 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_37800,_STAR_print_newline_STAR_37801,base_path_37802){
return (function() { 
var G__37803__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__37803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37804__i = 0, G__37804__a = new Array(arguments.length -  0);
while (G__37804__i < G__37804__a.length) {G__37804__a[G__37804__i] = arguments[G__37804__i + 0]; ++G__37804__i;}
  args = new cljs.core.IndexedSeq(G__37804__a,0);
} 
return G__37803__delegate.call(this,args);};
G__37803.cljs$lang$maxFixedArity = 0;
G__37803.cljs$lang$applyTo = (function (arglist__37805){
var args = cljs.core.seq(arglist__37805);
return G__37803__delegate(args);
});
G__37803.cljs$core$IFn$_invoke$arity$variadic = G__37803__delegate;
return G__37803;
})()
;})(_STAR_print_fn_STAR_37800,_STAR_print_newline_STAR_37801,base_path_37802))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37801;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37800;
}}catch (e37799){if((e37799 instanceof Error)){
var e = e37799;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37802], null));
} else {
var e = e37799;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37802))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37806){
var map__37811 = p__37806;
var map__37811__$1 = ((cljs.core.seq_QMARK_.call(null,map__37811))?cljs.core.apply.call(null,cljs.core.hash_map,map__37811):map__37811);
var opts = map__37811__$1;
var build_id = cljs.core.get.call(null,map__37811__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37811,map__37811__$1,opts,build_id){
return (function (p__37812){
var vec__37813 = p__37812;
var map__37814 = cljs.core.nth.call(null,vec__37813,(0),null);
var map__37814__$1 = ((cljs.core.seq_QMARK_.call(null,map__37814))?cljs.core.apply.call(null,cljs.core.hash_map,map__37814):map__37814);
var msg = map__37814__$1;
var msg_name = cljs.core.get.call(null,map__37814__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37813,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37813,map__37814,map__37814__$1,msg,msg_name,_,map__37811,map__37811__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37813,map__37814,map__37814__$1,msg,msg_name,_,map__37811,map__37811__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37811,map__37811__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37818){
var vec__37819 = p__37818;
var map__37820 = cljs.core.nth.call(null,vec__37819,(0),null);
var map__37820__$1 = ((cljs.core.seq_QMARK_.call(null,map__37820))?cljs.core.apply.call(null,cljs.core.hash_map,map__37820):map__37820);
var msg = map__37820__$1;
var msg_name = cljs.core.get.call(null,map__37820__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37819,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37821){
var map__37829 = p__37821;
var map__37829__$1 = ((cljs.core.seq_QMARK_.call(null,map__37829))?cljs.core.apply.call(null,cljs.core.hash_map,map__37829):map__37829);
var on_compile_warning = cljs.core.get.call(null,map__37829__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37829__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37829,map__37829__$1,on_compile_warning,on_compile_fail){
return (function (p__37830){
var vec__37831 = p__37830;
var map__37832 = cljs.core.nth.call(null,vec__37831,(0),null);
var map__37832__$1 = ((cljs.core.seq_QMARK_.call(null,map__37832))?cljs.core.apply.call(null,cljs.core.hash_map,map__37832):map__37832);
var msg = map__37832__$1;
var msg_name = cljs.core.get.call(null,map__37832__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37831,(1));
var pred__37833 = cljs.core._EQ_;
var expr__37834 = msg_name;
if(cljs.core.truth_(pred__37833.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37834))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37833.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37834))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37829,map__37829__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,msg_hist,msg_names,msg){
return (function (state_38035){
var state_val_38036 = (state_38035[(1)]);
if((state_val_38036 === (7))){
var inst_37969 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38037_38078 = state_38035__$1;
(statearr_38037_38078[(2)] = inst_37969);

(statearr_38037_38078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (20))){
var inst_37997 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38035__$1 = state_38035;
if(cljs.core.truth_(inst_37997)){
var statearr_38038_38079 = state_38035__$1;
(statearr_38038_38079[(1)] = (22));

} else {
var statearr_38039_38080 = state_38035__$1;
(statearr_38039_38080[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (27))){
var inst_38009 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38010 = figwheel.client.heads_up.display_warning.call(null,inst_38009);
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38035__$1,(30),inst_38010);
} else {
if((state_val_38036 === (1))){
var inst_37957 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38035__$1 = state_38035;
if(cljs.core.truth_(inst_37957)){
var statearr_38040_38081 = state_38035__$1;
(statearr_38040_38081[(1)] = (2));

} else {
var statearr_38041_38082 = state_38035__$1;
(statearr_38041_38082[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (24))){
var inst_38025 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38042_38083 = state_38035__$1;
(statearr_38042_38083[(2)] = inst_38025);

(statearr_38042_38083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (4))){
var inst_38033 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38035__$1,inst_38033);
} else {
if((state_val_38036 === (15))){
var inst_37985 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37986 = figwheel.client.format_messages.call(null,inst_37985);
var inst_37987 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37988 = figwheel.client.heads_up.display_error.call(null,inst_37986,inst_37987);
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38035__$1,(18),inst_37988);
} else {
if((state_val_38036 === (21))){
var inst_38027 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38043_38084 = state_38035__$1;
(statearr_38043_38084[(2)] = inst_38027);

(statearr_38043_38084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (31))){
var inst_38016 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38035__$1,(34),inst_38016);
} else {
if((state_val_38036 === (32))){
var state_38035__$1 = state_38035;
var statearr_38044_38085 = state_38035__$1;
(statearr_38044_38085[(2)] = null);

(statearr_38044_38085[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (33))){
var inst_38021 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38045_38086 = state_38035__$1;
(statearr_38045_38086[(2)] = inst_38021);

(statearr_38045_38086[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (13))){
var inst_37975 = (state_38035[(2)]);
var inst_37976 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37977 = figwheel.client.format_messages.call(null,inst_37976);
var inst_37978 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37979 = figwheel.client.heads_up.display_error.call(null,inst_37977,inst_37978);
var state_38035__$1 = (function (){var statearr_38046 = state_38035;
(statearr_38046[(7)] = inst_37975);

return statearr_38046;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38035__$1,(14),inst_37979);
} else {
if((state_val_38036 === (22))){
var inst_37999 = figwheel.client.heads_up.clear.call(null);
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38035__$1,(25),inst_37999);
} else {
if((state_val_38036 === (29))){
var inst_38023 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38047_38087 = state_38035__$1;
(statearr_38047_38087[(2)] = inst_38023);

(statearr_38047_38087[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (6))){
var inst_37965 = figwheel.client.heads_up.clear.call(null);
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38035__$1,(9),inst_37965);
} else {
if((state_val_38036 === (28))){
var inst_38014 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38035__$1 = state_38035;
if(cljs.core.truth_(inst_38014)){
var statearr_38048_38088 = state_38035__$1;
(statearr_38048_38088[(1)] = (31));

} else {
var statearr_38049_38089 = state_38035__$1;
(statearr_38049_38089[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (25))){
var inst_38001 = (state_38035[(2)]);
var inst_38002 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38003 = figwheel.client.heads_up.display_warning.call(null,inst_38002);
var state_38035__$1 = (function (){var statearr_38050 = state_38035;
(statearr_38050[(8)] = inst_38001);

return statearr_38050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38035__$1,(26),inst_38003);
} else {
if((state_val_38036 === (34))){
var inst_38018 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38051_38090 = state_38035__$1;
(statearr_38051_38090[(2)] = inst_38018);

(statearr_38051_38090[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (17))){
var inst_38029 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38052_38091 = state_38035__$1;
(statearr_38052_38091[(2)] = inst_38029);

(statearr_38052_38091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (3))){
var inst_37971 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38035__$1 = state_38035;
if(cljs.core.truth_(inst_37971)){
var statearr_38053_38092 = state_38035__$1;
(statearr_38053_38092[(1)] = (10));

} else {
var statearr_38054_38093 = state_38035__$1;
(statearr_38054_38093[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (12))){
var inst_38031 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38055_38094 = state_38035__$1;
(statearr_38055_38094[(2)] = inst_38031);

(statearr_38055_38094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (2))){
var inst_37959 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38035__$1 = state_38035;
if(cljs.core.truth_(inst_37959)){
var statearr_38056_38095 = state_38035__$1;
(statearr_38056_38095[(1)] = (5));

} else {
var statearr_38057_38096 = state_38035__$1;
(statearr_38057_38096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (23))){
var inst_38007 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38035__$1 = state_38035;
if(cljs.core.truth_(inst_38007)){
var statearr_38058_38097 = state_38035__$1;
(statearr_38058_38097[(1)] = (27));

} else {
var statearr_38059_38098 = state_38035__$1;
(statearr_38059_38098[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (19))){
var inst_37994 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37995 = figwheel.client.heads_up.append_message.call(null,inst_37994);
var state_38035__$1 = state_38035;
var statearr_38060_38099 = state_38035__$1;
(statearr_38060_38099[(2)] = inst_37995);

(statearr_38060_38099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (11))){
var inst_37983 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38035__$1 = state_38035;
if(cljs.core.truth_(inst_37983)){
var statearr_38061_38100 = state_38035__$1;
(statearr_38061_38100[(1)] = (15));

} else {
var statearr_38062_38101 = state_38035__$1;
(statearr_38062_38101[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (9))){
var inst_37967 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38063_38102 = state_38035__$1;
(statearr_38063_38102[(2)] = inst_37967);

(statearr_38063_38102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (5))){
var inst_37961 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38035__$1,(8),inst_37961);
} else {
if((state_val_38036 === (14))){
var inst_37981 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38064_38103 = state_38035__$1;
(statearr_38064_38103[(2)] = inst_37981);

(statearr_38064_38103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (26))){
var inst_38005 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38065_38104 = state_38035__$1;
(statearr_38065_38104[(2)] = inst_38005);

(statearr_38065_38104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (16))){
var inst_37992 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38035__$1 = state_38035;
if(cljs.core.truth_(inst_37992)){
var statearr_38066_38105 = state_38035__$1;
(statearr_38066_38105[(1)] = (19));

} else {
var statearr_38067_38106 = state_38035__$1;
(statearr_38067_38106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (30))){
var inst_38012 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38068_38107 = state_38035__$1;
(statearr_38068_38107[(2)] = inst_38012);

(statearr_38068_38107[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (10))){
var inst_37973 = figwheel.client.heads_up.clear.call(null);
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38035__$1,(13),inst_37973);
} else {
if((state_val_38036 === (18))){
var inst_37990 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38069_38108 = state_38035__$1;
(statearr_38069_38108[(2)] = inst_37990);

(statearr_38069_38108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38036 === (8))){
var inst_37963 = (state_38035[(2)]);
var state_38035__$1 = state_38035;
var statearr_38070_38109 = state_38035__$1;
(statearr_38070_38109[(2)] = inst_37963);

(statearr_38070_38109[(1)] = (7));


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
var statearr_38074 = [null,null,null,null,null,null,null,null,null];
(statearr_38074[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__);

(statearr_38074[(1)] = (1));

return statearr_38074;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____1 = (function (state_38035){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_38035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e38075){if((e38075 instanceof Object)){
var ex__19760__auto__ = e38075;
var statearr_38076_38110 = state_38035;
(statearr_38076_38110[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38111 = state_38035;
state_38035 = G__38111;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__ = function(state_38035){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____1.call(this,state_38035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,msg_hist,msg_names,msg))
})();
var state__19820__auto__ = (function (){var statearr_38077 = f__19819__auto__.call(null);
(statearr_38077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_38077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__,msg_hist,msg_names,msg))
);

return c__19818__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19818__auto___38174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___38174,ch){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___38174,ch){
return (function (state_38157){
var state_val_38158 = (state_38157[(1)]);
if((state_val_38158 === (1))){
var state_38157__$1 = state_38157;
var statearr_38159_38175 = state_38157__$1;
(statearr_38159_38175[(2)] = null);

(statearr_38159_38175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (2))){
var state_38157__$1 = state_38157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38157__$1,(4),ch);
} else {
if((state_val_38158 === (3))){
var inst_38155 = (state_38157[(2)]);
var state_38157__$1 = state_38157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38157__$1,inst_38155);
} else {
if((state_val_38158 === (4))){
var inst_38145 = (state_38157[(7)]);
var inst_38145__$1 = (state_38157[(2)]);
var state_38157__$1 = (function (){var statearr_38160 = state_38157;
(statearr_38160[(7)] = inst_38145__$1);

return statearr_38160;
})();
if(cljs.core.truth_(inst_38145__$1)){
var statearr_38161_38176 = state_38157__$1;
(statearr_38161_38176[(1)] = (5));

} else {
var statearr_38162_38177 = state_38157__$1;
(statearr_38162_38177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (5))){
var inst_38145 = (state_38157[(7)]);
var inst_38147 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38145);
var state_38157__$1 = state_38157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38157__$1,(8),inst_38147);
} else {
if((state_val_38158 === (6))){
var state_38157__$1 = state_38157;
var statearr_38163_38178 = state_38157__$1;
(statearr_38163_38178[(2)] = null);

(statearr_38163_38178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (7))){
var inst_38153 = (state_38157[(2)]);
var state_38157__$1 = state_38157;
var statearr_38164_38179 = state_38157__$1;
(statearr_38164_38179[(2)] = inst_38153);

(statearr_38164_38179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (8))){
var inst_38149 = (state_38157[(2)]);
var state_38157__$1 = (function (){var statearr_38165 = state_38157;
(statearr_38165[(8)] = inst_38149);

return statearr_38165;
})();
var statearr_38166_38180 = state_38157__$1;
(statearr_38166_38180[(2)] = null);

(statearr_38166_38180[(1)] = (2));


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
});})(c__19818__auto___38174,ch))
;
return ((function (switch__19756__auto__,c__19818__auto___38174,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19757__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19757__auto____0 = (function (){
var statearr_38170 = [null,null,null,null,null,null,null,null,null];
(statearr_38170[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19757__auto__);

(statearr_38170[(1)] = (1));

return statearr_38170;
});
var figwheel$client$heads_up_plugin_$_state_machine__19757__auto____1 = (function (state_38157){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_38157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e38171){if((e38171 instanceof Object)){
var ex__19760__auto__ = e38171;
var statearr_38172_38181 = state_38157;
(statearr_38172_38181[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38182 = state_38157;
state_38157 = G__38182;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19757__auto__ = function(state_38157){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19757__auto____1.call(this,state_38157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19757__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19757__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___38174,ch))
})();
var state__19820__auto__ = (function (){var statearr_38173 = f__19819__auto__.call(null);
(statearr_38173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___38174);

return statearr_38173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___38174,ch))
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
return (function (state_38203){
var state_val_38204 = (state_38203[(1)]);
if((state_val_38204 === (1))){
var inst_38198 = cljs.core.async.timeout.call(null,(3000));
var state_38203__$1 = state_38203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38203__$1,(2),inst_38198);
} else {
if((state_val_38204 === (2))){
var inst_38200 = (state_38203[(2)]);
var inst_38201 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38203__$1 = (function (){var statearr_38205 = state_38203;
(statearr_38205[(7)] = inst_38200);

return statearr_38205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38203__$1,inst_38201);
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
var statearr_38209 = [null,null,null,null,null,null,null,null];
(statearr_38209[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__);

(statearr_38209[(1)] = (1));

return statearr_38209;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____1 = (function (state_38203){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_38203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e38210){if((e38210 instanceof Object)){
var ex__19760__auto__ = e38210;
var statearr_38211_38213 = state_38203;
(statearr_38211_38213[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38214 = state_38203;
state_38203 = G__38214;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__ = function(state_38203){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____1.call(this,state_38203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19757__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_38212 = f__19819__auto__.call(null);
(statearr_38212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_38212;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38215){
var map__38221 = p__38215;
var map__38221__$1 = ((cljs.core.seq_QMARK_.call(null,map__38221))?cljs.core.apply.call(null,cljs.core.hash_map,map__38221):map__38221);
var ed = map__38221__$1;
var formatted_exception = cljs.core.get.call(null,map__38221__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38221__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38221__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38222_38226 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38223_38227 = null;
var count__38224_38228 = (0);
var i__38225_38229 = (0);
while(true){
if((i__38225_38229 < count__38224_38228)){
var msg_38230 = cljs.core._nth.call(null,chunk__38223_38227,i__38225_38229);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38230);

var G__38231 = seq__38222_38226;
var G__38232 = chunk__38223_38227;
var G__38233 = count__38224_38228;
var G__38234 = (i__38225_38229 + (1));
seq__38222_38226 = G__38231;
chunk__38223_38227 = G__38232;
count__38224_38228 = G__38233;
i__38225_38229 = G__38234;
continue;
} else {
var temp__4425__auto___38235 = cljs.core.seq.call(null,seq__38222_38226);
if(temp__4425__auto___38235){
var seq__38222_38236__$1 = temp__4425__auto___38235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38222_38236__$1)){
var c__16847__auto___38237 = cljs.core.chunk_first.call(null,seq__38222_38236__$1);
var G__38238 = cljs.core.chunk_rest.call(null,seq__38222_38236__$1);
var G__38239 = c__16847__auto___38237;
var G__38240 = cljs.core.count.call(null,c__16847__auto___38237);
var G__38241 = (0);
seq__38222_38226 = G__38238;
chunk__38223_38227 = G__38239;
count__38224_38228 = G__38240;
i__38225_38229 = G__38241;
continue;
} else {
var msg_38242 = cljs.core.first.call(null,seq__38222_38236__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38242);

var G__38243 = cljs.core.next.call(null,seq__38222_38236__$1);
var G__38244 = null;
var G__38245 = (0);
var G__38246 = (0);
seq__38222_38226 = G__38243;
chunk__38223_38227 = G__38244;
count__38224_38228 = G__38245;
i__38225_38229 = G__38246;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38247){
var map__38249 = p__38247;
var map__38249__$1 = ((cljs.core.seq_QMARK_.call(null,map__38249))?cljs.core.apply.call(null,cljs.core.hash_map,map__38249):map__38249);
var w = map__38249__$1;
var message = cljs.core.get.call(null,map__38249__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38256 = cljs.core.seq.call(null,plugins);
var chunk__38257 = null;
var count__38258 = (0);
var i__38259 = (0);
while(true){
if((i__38259 < count__38258)){
var vec__38260 = cljs.core._nth.call(null,chunk__38257,i__38259);
var k = cljs.core.nth.call(null,vec__38260,(0),null);
var plugin = cljs.core.nth.call(null,vec__38260,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38262 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38256,chunk__38257,count__38258,i__38259,pl_38262,vec__38260,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38262.call(null,msg_hist);
});})(seq__38256,chunk__38257,count__38258,i__38259,pl_38262,vec__38260,k,plugin))
);
} else {
}

var G__38263 = seq__38256;
var G__38264 = chunk__38257;
var G__38265 = count__38258;
var G__38266 = (i__38259 + (1));
seq__38256 = G__38263;
chunk__38257 = G__38264;
count__38258 = G__38265;
i__38259 = G__38266;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38256);
if(temp__4425__auto__){
var seq__38256__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38256__$1)){
var c__16847__auto__ = cljs.core.chunk_first.call(null,seq__38256__$1);
var G__38267 = cljs.core.chunk_rest.call(null,seq__38256__$1);
var G__38268 = c__16847__auto__;
var G__38269 = cljs.core.count.call(null,c__16847__auto__);
var G__38270 = (0);
seq__38256 = G__38267;
chunk__38257 = G__38268;
count__38258 = G__38269;
i__38259 = G__38270;
continue;
} else {
var vec__38261 = cljs.core.first.call(null,seq__38256__$1);
var k = cljs.core.nth.call(null,vec__38261,(0),null);
var plugin = cljs.core.nth.call(null,vec__38261,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38271 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38256,chunk__38257,count__38258,i__38259,pl_38271,vec__38261,k,plugin,seq__38256__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38271.call(null,msg_hist);
});})(seq__38256,chunk__38257,count__38258,i__38259,pl_38271,vec__38261,k,plugin,seq__38256__$1,temp__4425__auto__))
);
} else {
}

var G__38272 = cljs.core.next.call(null,seq__38256__$1);
var G__38273 = null;
var G__38274 = (0);
var G__38275 = (0);
seq__38256 = G__38272;
chunk__38257 = G__38273;
count__38258 = G__38274;
i__38259 = G__38275;
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
var G__38277 = arguments.length;
switch (G__38277) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38280){
var map__38281 = p__38280;
var map__38281__$1 = ((cljs.core.seq_QMARK_.call(null,map__38281))?cljs.core.apply.call(null,cljs.core.hash_map,map__38281):map__38281);
var opts = map__38281__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38279){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38279));
});

//# sourceMappingURL=client.js.map?rel=1436385364928