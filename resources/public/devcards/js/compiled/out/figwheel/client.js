// Compiled by ClojureScript 0.0-2202
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__12003,args){var map__12005 = p__12003;var map__12005__$1 = ((cljs.core.seq_QMARK_.call(null,map__12005))?cljs.core.apply.call(null,cljs.core.hash_map,map__12005):map__12005);var debug = cljs.core.get.call(null,map__12005__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__12003,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__12003,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__12006){
var p__12003 = cljs.core.first(arglist__12006);
var args = cljs.core.rest(arglist__12006);
return log__delegate(p__12003,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__12007){var map__12009 = p__12007;var map__12009__$1 = ((cljs.core.seq_QMARK_.call(null,map__12009))?cljs.core.apply.call(null,cljs.core.hash_map,map__12009):map__12009);var websocket_url = cljs.core.get.call(null,map__12009__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__12010,callback){var map__12012 = p__12010;var map__12012__$1 = ((cljs.core.seq_QMARK_.call(null,map__12012))?cljs.core.apply.call(null,cljs.core.hash_map,map__12012):map__12012);var msg = map__12012__$1;var dependency_file = cljs.core.get.call(null,map__12012__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__12012__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__12012__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__3606__auto__ = dependency_file;if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__12012,map__12012__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__12012,map__12012__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__12013,p__12014){var map__12017 = p__12013;var map__12017__$1 = ((cljs.core.seq_QMARK_.call(null,map__12017))?cljs.core.apply.call(null,cljs.core.hash_map,map__12017):map__12017);var opts = map__12017__$1;var url_rewriter = cljs.core.get.call(null,map__12017__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__12018 = p__12014;var map__12018__$1 = ((cljs.core.seq_QMARK_.call(null,map__12018))?cljs.core.apply.call(null,cljs.core.hash_map,map__12018):map__12018);var d = map__12018__$1;var file = cljs.core.get.call(null,map__12018__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__12019,p__12020){var map__12061 = p__12019;var map__12061__$1 = ((cljs.core.seq_QMARK_.call(null,map__12061))?cljs.core.apply.call(null,cljs.core.hash_map,map__12061):map__12061);var opts = map__12061__$1;var on_jsload = cljs.core.get.call(null,map__12061__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__12061__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__12062 = p__12020;var map__12062__$1 = ((cljs.core.seq_QMARK_.call(null,map__12062))?cljs.core.apply.call(null,cljs.core.hash_map,map__12062):map__12062);var files = cljs.core.get.call(null,map__12062__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__7703__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto__,map__12061,map__12061__$1,opts,on_jsload,before_jsload,map__12062,map__12062__$1,files){
return (function (){var f__7704__auto__ = (function (){var switch__7639__auto__ = ((function (c__7703__auto__,map__12061,map__12061__$1,opts,on_jsload,before_jsload,map__12062,map__12062__$1,files){
return (function (state_12084){var state_val_12085 = (state_12084[1]);if((state_val_12085 === 6))
{var inst_12067 = (state_12084[7]);var inst_12076 = (state_12084[2]);var inst_12077 = [inst_12067];var inst_12078 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12077,null));var inst_12079 = cljs.core.apply.call(null,on_jsload,inst_12078);var state_12084__$1 = (function (){var statearr_12086 = state_12084;(statearr_12086[8] = inst_12076);
return statearr_12086;
})();var statearr_12087_12101 = state_12084__$1;(statearr_12087_12101[2] = inst_12079);
(statearr_12087_12101[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12085 === 5))
{var inst_12082 = (state_12084[2]);var state_12084__$1 = state_12084;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12084__$1,inst_12082);
} else
{if((state_val_12085 === 4))
{var state_12084__$1 = state_12084;var statearr_12088_12102 = state_12084__$1;(statearr_12088_12102[2] = null);
(statearr_12088_12102[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12085 === 3))
{var inst_12067 = (state_12084[7]);var inst_12070 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_12071 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_12067);var inst_12072 = cljs.core.prn_str.call(null,inst_12071);var inst_12073 = console.log(inst_12072);var inst_12074 = cljs.core.async.timeout.call(null,10);var state_12084__$1 = (function (){var statearr_12089 = state_12084;(statearr_12089[9] = inst_12073);
(statearr_12089[10] = inst_12070);
return statearr_12089;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12084__$1,6,inst_12074);
} else
{if((state_val_12085 === 2))
{var inst_12067 = (state_12084[7]);var inst_12067__$1 = (state_12084[2]);var inst_12068 = cljs.core.not_empty.call(null,inst_12067__$1);var state_12084__$1 = (function (){var statearr_12090 = state_12084;(statearr_12090[7] = inst_12067__$1);
return statearr_12090;
})();if(cljs.core.truth_(inst_12068))
{var statearr_12091_12103 = state_12084__$1;(statearr_12091_12103[1] = 3);
} else
{var statearr_12092_12104 = state_12084__$1;(statearr_12092_12104[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12085 === 1))
{var inst_12063 = before_jsload.call(null,files);var inst_12064 = figwheel.client.add_request_urls.call(null,opts,files);var inst_12065 = figwheel.client.load_all_js_files.call(null,inst_12064);var state_12084__$1 = (function (){var statearr_12093 = state_12084;(statearr_12093[11] = inst_12063);
return statearr_12093;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12084__$1,2,inst_12065);
} else
{return null;
}
}
}
}
}
}
});})(c__7703__auto__,map__12061,map__12061__$1,opts,on_jsload,before_jsload,map__12062,map__12062__$1,files))
;return ((function (switch__7639__auto__,c__7703__auto__,map__12061,map__12061__$1,opts,on_jsload,before_jsload,map__12062,map__12062__$1,files){
return (function() {
var state_machine__7640__auto__ = null;
var state_machine__7640__auto____0 = (function (){var statearr_12097 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12097[0] = state_machine__7640__auto__);
(statearr_12097[1] = 1);
return statearr_12097;
});
var state_machine__7640__auto____1 = (function (state_12084){while(true){
var ret_value__7641__auto__ = (function (){try{while(true){
var result__7642__auto__ = switch__7639__auto__.call(null,state_12084);if(cljs.core.keyword_identical_QMARK_.call(null,result__7642__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7642__auto__;
}
break;
}
}catch (e12098){if((e12098 instanceof Object))
{var ex__7643__auto__ = e12098;var statearr_12099_12105 = state_12084;(statearr_12099_12105[5] = ex__7643__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12084);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7641__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12106 = state_12084;
state_12084 = G__12106;
continue;
}
} else
{return ret_value__7641__auto__;
}
break;
}
});
state_machine__7640__auto__ = function(state_12084){
switch(arguments.length){
case 0:
return state_machine__7640__auto____0.call(this);
case 1:
return state_machine__7640__auto____1.call(this,state_12084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7640__auto____0;
state_machine__7640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7640__auto____1;
return state_machine__7640__auto__;
})()
;})(switch__7639__auto__,c__7703__auto__,map__12061,map__12061__$1,opts,on_jsload,before_jsload,map__12062,map__12062__$1,files))
})();var state__7705__auto__ = (function (){var statearr_12100 = f__7704__auto__.call(null);(statearr_12100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto__);
return statearr_12100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto__,map__12061,map__12061__$1,opts,on_jsload,before_jsload,map__12062,map__12062__$1,files))
);
return c__7703__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__12107,link_href){var map__12109 = p__12107;var map__12109__$1 = ((cljs.core.seq_QMARK_.call(null,map__12109))?cljs.core.apply.call(null,cljs.core.hash_map,map__12109):map__12109);var request_url = cljs.core.get.call(null,map__12109__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__12109__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__7703__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto__,parent){
return (function (){var f__7704__auto__ = (function (){var switch__7639__auto__ = ((function (c__7703__auto__,parent){
return (function (state_12130){var state_val_12131 = (state_12130[1]);if((state_val_12131 === 2))
{var inst_12127 = (state_12130[2]);var inst_12128 = parent.removeChild(orig_link);var state_12130__$1 = (function (){var statearr_12132 = state_12130;(statearr_12132[7] = inst_12127);
return statearr_12132;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12130__$1,inst_12128);
} else
{if((state_val_12131 === 1))
{var inst_12125 = cljs.core.async.timeout.call(null,200);var state_12130__$1 = state_12130;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12130__$1,2,inst_12125);
} else
{return null;
}
}
});})(c__7703__auto__,parent))
;return ((function (switch__7639__auto__,c__7703__auto__,parent){
return (function() {
var state_machine__7640__auto__ = null;
var state_machine__7640__auto____0 = (function (){var statearr_12136 = [null,null,null,null,null,null,null,null];(statearr_12136[0] = state_machine__7640__auto__);
(statearr_12136[1] = 1);
return statearr_12136;
});
var state_machine__7640__auto____1 = (function (state_12130){while(true){
var ret_value__7641__auto__ = (function (){try{while(true){
var result__7642__auto__ = switch__7639__auto__.call(null,state_12130);if(cljs.core.keyword_identical_QMARK_.call(null,result__7642__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7642__auto__;
}
break;
}
}catch (e12137){if((e12137 instanceof Object))
{var ex__7643__auto__ = e12137;var statearr_12138_12140 = state_12130;(statearr_12138_12140[5] = ex__7643__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12130);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7641__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12141 = state_12130;
state_12130 = G__12141;
continue;
}
} else
{return ret_value__7641__auto__;
}
break;
}
});
state_machine__7640__auto__ = function(state_12130){
switch(arguments.length){
case 0:
return state_machine__7640__auto____0.call(this);
case 1:
return state_machine__7640__auto____1.call(this,state_12130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7640__auto____0;
state_machine__7640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7640__auto____1;
return state_machine__7640__auto__;
})()
;})(switch__7639__auto__,c__7703__auto__,parent))
})();var state__7705__auto__ = (function (){var statearr_12139 = f__7704__auto__.call(null);(statearr_12139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto__);
return statearr_12139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto__,parent))
);
return c__7703__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__12142){var map__12144 = p__12142;var map__12144__$1 = ((cljs.core.seq_QMARK_.call(null,map__12144))?cljs.core.apply.call(null,cljs.core.hash_map,map__12144):map__12144);var f_data = map__12144__$1;var request_url = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__12145,files_msg){var map__12167 = p__12145;var map__12167__$1 = ((cljs.core.seq_QMARK_.call(null,map__12167))?cljs.core.apply.call(null,cljs.core.hash_map,map__12167):map__12167);var opts = map__12167__$1;var on_cssload = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__12168_12188 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__12169_12189 = null;var count__12170_12190 = 0;var i__12171_12191 = 0;while(true){
if((i__12171_12191 < count__12170_12190))
{var f_12192 = cljs.core._nth.call(null,chunk__12169_12189,i__12171_12191);figwheel.client.reload_css_file.call(null,f_12192);
{
var G__12193 = seq__12168_12188;
var G__12194 = chunk__12169_12189;
var G__12195 = count__12170_12190;
var G__12196 = (i__12171_12191 + 1);
seq__12168_12188 = G__12193;
chunk__12169_12189 = G__12194;
count__12170_12190 = G__12195;
i__12171_12191 = G__12196;
continue;
}
} else
{var temp__4126__auto___12197 = cljs.core.seq.call(null,seq__12168_12188);if(temp__4126__auto___12197)
{var seq__12168_12198__$1 = temp__4126__auto___12197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12168_12198__$1))
{var c__4354__auto___12199 = cljs.core.chunk_first.call(null,seq__12168_12198__$1);{
var G__12200 = cljs.core.chunk_rest.call(null,seq__12168_12198__$1);
var G__12201 = c__4354__auto___12199;
var G__12202 = cljs.core.count.call(null,c__4354__auto___12199);
var G__12203 = 0;
seq__12168_12188 = G__12200;
chunk__12169_12189 = G__12201;
count__12170_12190 = G__12202;
i__12171_12191 = G__12203;
continue;
}
} else
{var f_12204 = cljs.core.first.call(null,seq__12168_12198__$1);figwheel.client.reload_css_file.call(null,f_12204);
{
var G__12205 = cljs.core.next.call(null,seq__12168_12198__$1);
var G__12206 = null;
var G__12207 = 0;
var G__12208 = 0;
seq__12168_12188 = G__12205;
chunk__12169_12189 = G__12206;
count__12170_12190 = G__12207;
i__12171_12191 = G__12208;
continue;
}
}
} else
{}
}
break;
}
var c__7703__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto__,map__12167,map__12167__$1,opts,on_cssload){
return (function (){var f__7704__auto__ = (function (){var switch__7639__auto__ = ((function (c__7703__auto__,map__12167,map__12167__$1,opts,on_cssload){
return (function (state_12178){var state_val_12179 = (state_12178[1]);if((state_val_12179 === 2))
{var inst_12174 = (state_12178[2]);var inst_12175 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_12176 = on_cssload.call(null,inst_12175);var state_12178__$1 = (function (){var statearr_12180 = state_12178;(statearr_12180[7] = inst_12174);
return statearr_12180;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12178__$1,inst_12176);
} else
{if((state_val_12179 === 1))
{var inst_12172 = cljs.core.async.timeout.call(null,100);var state_12178__$1 = state_12178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12178__$1,2,inst_12172);
} else
{return null;
}
}
});})(c__7703__auto__,map__12167,map__12167__$1,opts,on_cssload))
;return ((function (switch__7639__auto__,c__7703__auto__,map__12167,map__12167__$1,opts,on_cssload){
return (function() {
var state_machine__7640__auto__ = null;
var state_machine__7640__auto____0 = (function (){var statearr_12184 = [null,null,null,null,null,null,null,null];(statearr_12184[0] = state_machine__7640__auto__);
(statearr_12184[1] = 1);
return statearr_12184;
});
var state_machine__7640__auto____1 = (function (state_12178){while(true){
var ret_value__7641__auto__ = (function (){try{while(true){
var result__7642__auto__ = switch__7639__auto__.call(null,state_12178);if(cljs.core.keyword_identical_QMARK_.call(null,result__7642__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7642__auto__;
}
break;
}
}catch (e12185){if((e12185 instanceof Object))
{var ex__7643__auto__ = e12185;var statearr_12186_12209 = state_12178;(statearr_12186_12209[5] = ex__7643__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12178);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7641__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12210 = state_12178;
state_12178 = G__12210;
continue;
}
} else
{return ret_value__7641__auto__;
}
break;
}
});
state_machine__7640__auto__ = function(state_12178){
switch(arguments.length){
case 0:
return state_machine__7640__auto____0.call(this);
case 1:
return state_machine__7640__auto____1.call(this,state_12178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7640__auto____0;
state_machine__7640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7640__auto____1;
return state_machine__7640__auto__;
})()
;})(switch__7639__auto__,c__7703__auto__,map__12167,map__12167__$1,opts,on_cssload))
})();var state__7705__auto__ = (function (){var statearr_12187 = f__7704__auto__.call(null);(statearr_12187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto__);
return statearr_12187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto__,map__12167,map__12167__$1,opts,on_cssload))
);
return c__7703__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__12211){var map__12216 = p__12211;var map__12216__$1 = ((cljs.core.seq_QMARK_.call(null,map__12216))?cljs.core.apply.call(null,cljs.core.hash_map,map__12216):map__12216);var opts = map__12216__$1;var on_compile_fail = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__12216,map__12216__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__12217 = cljs.core._EQ_;var expr__12218 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__12217.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__12218)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__12217.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__12218)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__12217.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__12218)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__12216,map__12216__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__12216,map__12216__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__12216,map__12216__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__12216,map__12216__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__12216,map__12216__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__12216,map__12216__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__12216,map__12216__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__12216,map__12216__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__12216,map__12216__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj12223 = {"detail":url};return obj12223;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__12224){var map__12226 = p__12224;var map__12226__$1 = ((cljs.core.seq_QMARK_.call(null,map__12226))?cljs.core.apply.call(null,cljs.core.hash_map,map__12226):map__12226);var class$ = cljs.core.get.call(null,map__12226__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__12226__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__12227){var map__12233 = p__12227;var map__12233__$1 = ((cljs.core.seq_QMARK_.call(null,map__12233))?cljs.core.apply.call(null,cljs.core.hash_map,map__12233):map__12233);var ed = map__12233__$1;var exception_data = cljs.core.get.call(null,map__12233__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__12233__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__12234_12238 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__12235_12239 = null;var count__12236_12240 = 0;var i__12237_12241 = 0;while(true){
if((i__12237_12241 < count__12236_12240))
{var msg_12242 = cljs.core._nth.call(null,chunk__12235_12239,i__12237_12241);console.log(msg_12242);
{
var G__12243 = seq__12234_12238;
var G__12244 = chunk__12235_12239;
var G__12245 = count__12236_12240;
var G__12246 = (i__12237_12241 + 1);
seq__12234_12238 = G__12243;
chunk__12235_12239 = G__12244;
count__12236_12240 = G__12245;
i__12237_12241 = G__12246;
continue;
}
} else
{var temp__4126__auto___12247 = cljs.core.seq.call(null,seq__12234_12238);if(temp__4126__auto___12247)
{var seq__12234_12248__$1 = temp__4126__auto___12247;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12234_12248__$1))
{var c__4354__auto___12249 = cljs.core.chunk_first.call(null,seq__12234_12248__$1);{
var G__12250 = cljs.core.chunk_rest.call(null,seq__12234_12248__$1);
var G__12251 = c__4354__auto___12249;
var G__12252 = cljs.core.count.call(null,c__4354__auto___12249);
var G__12253 = 0;
seq__12234_12238 = G__12250;
chunk__12235_12239 = G__12251;
count__12236_12240 = G__12252;
i__12237_12241 = G__12253;
continue;
}
} else
{var msg_12254 = cljs.core.first.call(null,seq__12234_12248__$1);console.log(msg_12254);
{
var G__12255 = cljs.core.next.call(null,seq__12234_12248__$1);
var G__12256 = null;
var G__12257 = 0;
var G__12258 = 0;
seq__12234_12238 = G__12255;
chunk__12235_12239 = G__12256;
count__12236_12240 = G__12257;
i__12237_12241 = G__12258;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__3606__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__12259){var map__12261 = p__12259;var map__12261__$1 = ((cljs.core.seq_QMARK_.call(null,map__12261))?cljs.core.apply.call(null,cljs.core.hash_map,map__12261):map__12261);var opts = map__12261__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__12259 = null;if (arguments.length > 0) {
  p__12259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__12259);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__12262){
var p__12259 = cljs.core.seq(arglist__12262);
return watch_and_reload__delegate(p__12259);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map