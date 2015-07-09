// Compiled by ClojureScript 0.0-3269 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__49178_SHARP_,p2__49179_SHARP_){
var and__16050__auto__ = p1__49178_SHARP_;
if(cljs.core.truth_(and__16050__auto__)){
return p2__49179_SHARP_;
} else {
return and__16050__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16062__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16062__auto__){
return or__16062__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16062__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16062__auto__){
return or__16062__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16062__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__16957__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16958__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16959__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16960__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16961__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16961__auto__,method_table__16957__auto__,prefer_table__16958__auto__,method_cache__16959__auto__,cached_hierarchy__16960__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__49180){
var map__49181 = p__49180;
var map__49181__$1 = ((cljs.core.seq_QMARK_.call(null,map__49181))?cljs.core.apply.call(null,cljs.core.hash_map,map__49181):map__49181);
var file = cljs.core.get.call(null,map__49181__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__49182){
var map__49183 = p__49182;
var map__49183__$1 = ((cljs.core.seq_QMARK_.call(null,map__49183))?cljs.core.apply.call(null,cljs.core.hash_map,map__49183):map__49183);
var namespace = cljs.core.get.call(null,map__49183__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__16957__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16958__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16959__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16960__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16961__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16961__auto__,method_table__16957__auto__,prefer_table__16958__auto__,method_cache__16959__auto__,cached_hierarchy__16960__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e49184){if((e49184 instanceof Error)){
var e = e49184;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49184;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__49186 = arguments.length;
switch (G__49186) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49188,callback){
var map__49190 = p__49188;
var map__49190__$1 = ((cljs.core.seq_QMARK_.call(null,map__49190))?cljs.core.apply.call(null,cljs.core.hash_map,map__49190):map__49190);
var file_msg = map__49190__$1;
var request_url = cljs.core.get.call(null,map__49190__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49190,map__49190__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49190,map__49190__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49191){
var map__49193 = p__49191;
var map__49193__$1 = ((cljs.core.seq_QMARK_.call(null,map__49193))?cljs.core.apply.call(null,cljs.core.hash_map,map__49193):map__49193);
var file_msg = map__49193__$1;
var namespace = cljs.core.get.call(null,map__49193__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__49193__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16062__auto__ = meta_data;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16050__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16050__auto__){
var or__16062__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16062__auto____$1)){
return or__16062__auto____$1;
} else {
var and__16050__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16050__auto____$1){
var or__16062__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16062__auto____$2){
return or__16062__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16050__auto____$1;
}
}
}
} else {
return and__16050__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49194,callback){
var map__49196 = p__49194;
var map__49196__$1 = ((cljs.core.seq_QMARK_.call(null,map__49196))?cljs.core.apply.call(null,cljs.core.hash_map,map__49196):map__49196);
var file_msg = map__49196__$1;
var request_url = cljs.core.get.call(null,map__49196__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49196__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19818__auto___49283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___49283,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___49283,out){
return (function (state_49265){
var state_val_49266 = (state_49265[(1)]);
if((state_val_49266 === (1))){
var inst_49243 = cljs.core.nth.call(null,files,(0),null);
var inst_49244 = cljs.core.nthnext.call(null,files,(1));
var inst_49245 = files;
var state_49265__$1 = (function (){var statearr_49267 = state_49265;
(statearr_49267[(7)] = inst_49243);

(statearr_49267[(8)] = inst_49245);

(statearr_49267[(9)] = inst_49244);

return statearr_49267;
})();
var statearr_49268_49284 = state_49265__$1;
(statearr_49268_49284[(2)] = null);

(statearr_49268_49284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49266 === (2))){
var inst_49245 = (state_49265[(8)]);
var inst_49248 = (state_49265[(10)]);
var inst_49248__$1 = cljs.core.nth.call(null,inst_49245,(0),null);
var inst_49249 = cljs.core.nthnext.call(null,inst_49245,(1));
var inst_49250 = (inst_49248__$1 == null);
var inst_49251 = cljs.core.not.call(null,inst_49250);
var state_49265__$1 = (function (){var statearr_49269 = state_49265;
(statearr_49269[(10)] = inst_49248__$1);

(statearr_49269[(11)] = inst_49249);

return statearr_49269;
})();
if(inst_49251){
var statearr_49270_49285 = state_49265__$1;
(statearr_49270_49285[(1)] = (4));

} else {
var statearr_49271_49286 = state_49265__$1;
(statearr_49271_49286[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49266 === (3))){
var inst_49263 = (state_49265[(2)]);
var state_49265__$1 = state_49265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49265__$1,inst_49263);
} else {
if((state_val_49266 === (4))){
var inst_49248 = (state_49265[(10)]);
var inst_49253 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49248);
var state_49265__$1 = state_49265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49265__$1,(7),inst_49253);
} else {
if((state_val_49266 === (5))){
var inst_49259 = cljs.core.async.close_BANG_.call(null,out);
var state_49265__$1 = state_49265;
var statearr_49272_49287 = state_49265__$1;
(statearr_49272_49287[(2)] = inst_49259);

(statearr_49272_49287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49266 === (6))){
var inst_49261 = (state_49265[(2)]);
var state_49265__$1 = state_49265;
var statearr_49273_49288 = state_49265__$1;
(statearr_49273_49288[(2)] = inst_49261);

(statearr_49273_49288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49266 === (7))){
var inst_49249 = (state_49265[(11)]);
var inst_49255 = (state_49265[(2)]);
var inst_49256 = cljs.core.async.put_BANG_.call(null,out,inst_49255);
var inst_49245 = inst_49249;
var state_49265__$1 = (function (){var statearr_49274 = state_49265;
(statearr_49274[(8)] = inst_49245);

(statearr_49274[(12)] = inst_49256);

return statearr_49274;
})();
var statearr_49275_49289 = state_49265__$1;
(statearr_49275_49289[(2)] = null);

(statearr_49275_49289[(1)] = (2));


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
});})(c__19818__auto___49283,out))
;
return ((function (switch__19756__auto__,c__19818__auto___49283,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____0 = (function (){
var statearr_49279 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49279[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__);

(statearr_49279[(1)] = (1));

return statearr_49279;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____1 = (function (state_49265){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_49265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e49280){if((e49280 instanceof Object)){
var ex__19760__auto__ = e49280;
var statearr_49281_49290 = state_49265;
(statearr_49281_49290[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49291 = state_49265;
state_49265 = G__49291;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__ = function(state_49265){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____1.call(this,state_49265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___49283,out))
})();
var state__19820__auto__ = (function (){var statearr_49282 = f__19819__auto__.call(null);
(statearr_49282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___49283);

return statearr_49282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___49283,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__49292,p__49293){
var map__49296 = p__49292;
var map__49296__$1 = ((cljs.core.seq_QMARK_.call(null,map__49296))?cljs.core.apply.call(null,cljs.core.hash_map,map__49296):map__49296);
var opts = map__49296__$1;
var url_rewriter = cljs.core.get.call(null,map__49296__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__49297 = p__49293;
var map__49297__$1 = ((cljs.core.seq_QMARK_.call(null,map__49297))?cljs.core.apply.call(null,cljs.core.hash_map,map__49297):map__49297);
var file_msg = map__49297__$1;
var file = cljs.core.get.call(null,map__49297__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49298,opts){
var map__49301 = p__49298;
var map__49301__$1 = ((cljs.core.seq_QMARK_.call(null,map__49301))?cljs.core.apply.call(null,cljs.core.hash_map,map__49301):map__49301);
var eval_body__$1 = cljs.core.get.call(null,map__49301__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49301__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16050__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16050__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16050__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49302){var e = e49302;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49307,p__49308){
var map__49510 = p__49307;
var map__49510__$1 = ((cljs.core.seq_QMARK_.call(null,map__49510))?cljs.core.apply.call(null,cljs.core.hash_map,map__49510):map__49510);
var opts = map__49510__$1;
var before_jsload = cljs.core.get.call(null,map__49510__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49510__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__49510__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__49511 = p__49308;
var map__49511__$1 = ((cljs.core.seq_QMARK_.call(null,map__49511))?cljs.core.apply.call(null,cljs.core.hash_map,map__49511):map__49511);
var msg = map__49511__$1;
var files = cljs.core.get.call(null,map__49511__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files){
return (function (state_49636){
var state_val_49637 = (state_49636[(1)]);
if((state_val_49637 === (7))){
var inst_49523 = (state_49636[(7)]);
var inst_49526 = (state_49636[(8)]);
var inst_49524 = (state_49636[(9)]);
var inst_49525 = (state_49636[(10)]);
var inst_49531 = cljs.core._nth.call(null,inst_49524,inst_49526);
var inst_49532 = figwheel.client.file_reloading.eval_body.call(null,inst_49531,opts);
var inst_49533 = (inst_49526 + (1));
var tmp49638 = inst_49523;
var tmp49639 = inst_49524;
var tmp49640 = inst_49525;
var inst_49523__$1 = tmp49638;
var inst_49524__$1 = tmp49639;
var inst_49525__$1 = tmp49640;
var inst_49526__$1 = inst_49533;
var state_49636__$1 = (function (){var statearr_49641 = state_49636;
(statearr_49641[(7)] = inst_49523__$1);

(statearr_49641[(8)] = inst_49526__$1);

(statearr_49641[(9)] = inst_49524__$1);

(statearr_49641[(11)] = inst_49532);

(statearr_49641[(10)] = inst_49525__$1);

return statearr_49641;
})();
var statearr_49642_49711 = state_49636__$1;
(statearr_49642_49711[(2)] = null);

(statearr_49642_49711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (20))){
var inst_49575 = (state_49636[(12)]);
var inst_49569 = (state_49636[(13)]);
var inst_49573 = (state_49636[(14)]);
var inst_49572 = (state_49636[(15)]);
var inst_49568 = (state_49636[(16)]);
var inst_49578 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49580 = (function (){var all_files = inst_49568;
var files_SINGLEQUOTE_ = inst_49569;
var res_SINGLEQUOTE_ = inst_49572;
var res = inst_49573;
var files_not_loaded = inst_49575;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_49575,inst_49569,inst_49573,inst_49572,inst_49568,inst_49578,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files){
return (function (p__49579){
var map__49643 = p__49579;
var map__49643__$1 = ((cljs.core.seq_QMARK_.call(null,map__49643))?cljs.core.apply.call(null,cljs.core.hash_map,map__49643):map__49643);
var namespace = cljs.core.get.call(null,map__49643__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49643__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_49575,inst_49569,inst_49573,inst_49572,inst_49568,inst_49578,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files))
})();
var inst_49581 = cljs.core.map.call(null,inst_49580,inst_49573);
var inst_49582 = cljs.core.pr_str.call(null,inst_49581);
var inst_49583 = figwheel.client.utils.log.call(null,inst_49582);
var inst_49584 = (function (){var all_files = inst_49568;
var files_SINGLEQUOTE_ = inst_49569;
var res_SINGLEQUOTE_ = inst_49572;
var res = inst_49573;
var files_not_loaded = inst_49575;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_49575,inst_49569,inst_49573,inst_49572,inst_49568,inst_49578,inst_49580,inst_49581,inst_49582,inst_49583,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_49575,inst_49569,inst_49573,inst_49572,inst_49568,inst_49578,inst_49580,inst_49581,inst_49582,inst_49583,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files))
})();
var inst_49585 = setTimeout(inst_49584,(10));
var state_49636__$1 = (function (){var statearr_49644 = state_49636;
(statearr_49644[(17)] = inst_49583);

(statearr_49644[(18)] = inst_49578);

return statearr_49644;
})();
var statearr_49645_49712 = state_49636__$1;
(statearr_49645_49712[(2)] = inst_49585);

(statearr_49645_49712[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (27))){
var inst_49595 = (state_49636[(19)]);
var state_49636__$1 = state_49636;
var statearr_49646_49713 = state_49636__$1;
(statearr_49646_49713[(2)] = inst_49595);

(statearr_49646_49713[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (1))){
var inst_49515 = (state_49636[(20)]);
var inst_49512 = before_jsload.call(null,files);
var inst_49513 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49514 = (function (){return ((function (inst_49515,inst_49512,inst_49513,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files){
return (function (p1__49303_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49303_SHARP_);
});
;})(inst_49515,inst_49512,inst_49513,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files))
})();
var inst_49515__$1 = cljs.core.filter.call(null,inst_49514,files);
var inst_49516 = cljs.core.not_empty.call(null,inst_49515__$1);
var state_49636__$1 = (function (){var statearr_49647 = state_49636;
(statearr_49647[(21)] = inst_49512);

(statearr_49647[(22)] = inst_49513);

(statearr_49647[(20)] = inst_49515__$1);

return statearr_49647;
})();
if(cljs.core.truth_(inst_49516)){
var statearr_49648_49714 = state_49636__$1;
(statearr_49648_49714[(1)] = (2));

} else {
var statearr_49649_49715 = state_49636__$1;
(statearr_49649_49715[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (24))){
var state_49636__$1 = state_49636;
var statearr_49650_49716 = state_49636__$1;
(statearr_49650_49716[(2)] = null);

(statearr_49650_49716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (4))){
var inst_49560 = (state_49636[(2)]);
var inst_49561 = (function (){return ((function (inst_49560,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files){
return (function (p1__49304_SHARP_){
var and__16050__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49304_SHARP_);
if(cljs.core.truth_(and__16050__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49304_SHARP_));
} else {
return and__16050__auto__;
}
});
;})(inst_49560,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files))
})();
var inst_49562 = cljs.core.filter.call(null,inst_49561,files);
var state_49636__$1 = (function (){var statearr_49651 = state_49636;
(statearr_49651[(23)] = inst_49560);

(statearr_49651[(24)] = inst_49562);

return statearr_49651;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_49652_49717 = state_49636__$1;
(statearr_49652_49717[(1)] = (16));

} else {
var statearr_49653_49718 = state_49636__$1;
(statearr_49653_49718[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (15))){
var inst_49550 = (state_49636[(2)]);
var state_49636__$1 = state_49636;
var statearr_49654_49719 = state_49636__$1;
(statearr_49654_49719[(2)] = inst_49550);

(statearr_49654_49719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (21))){
var state_49636__$1 = state_49636;
var statearr_49655_49720 = state_49636__$1;
(statearr_49655_49720[(2)] = null);

(statearr_49655_49720[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (31))){
var inst_49603 = (state_49636[(25)]);
var inst_49613 = (state_49636[(2)]);
var inst_49614 = cljs.core.not_empty.call(null,inst_49603);
var state_49636__$1 = (function (){var statearr_49656 = state_49636;
(statearr_49656[(26)] = inst_49613);

return statearr_49656;
})();
if(cljs.core.truth_(inst_49614)){
var statearr_49657_49721 = state_49636__$1;
(statearr_49657_49721[(1)] = (32));

} else {
var statearr_49658_49722 = state_49636__$1;
(statearr_49658_49722[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (32))){
var inst_49603 = (state_49636[(25)]);
var inst_49616 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49603);
var inst_49617 = cljs.core.pr_str.call(null,inst_49616);
var inst_49618 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_49617)].join('');
var inst_49619 = figwheel.client.utils.log.call(null,inst_49618);
var state_49636__$1 = state_49636;
var statearr_49659_49723 = state_49636__$1;
(statearr_49659_49723[(2)] = inst_49619);

(statearr_49659_49723[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (33))){
var state_49636__$1 = state_49636;
var statearr_49660_49724 = state_49636__$1;
(statearr_49660_49724[(2)] = null);

(statearr_49660_49724[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (13))){
var inst_49536 = (state_49636[(27)]);
var inst_49540 = cljs.core.chunk_first.call(null,inst_49536);
var inst_49541 = cljs.core.chunk_rest.call(null,inst_49536);
var inst_49542 = cljs.core.count.call(null,inst_49540);
var inst_49523 = inst_49541;
var inst_49524 = inst_49540;
var inst_49525 = inst_49542;
var inst_49526 = (0);
var state_49636__$1 = (function (){var statearr_49661 = state_49636;
(statearr_49661[(7)] = inst_49523);

(statearr_49661[(8)] = inst_49526);

(statearr_49661[(9)] = inst_49524);

(statearr_49661[(10)] = inst_49525);

return statearr_49661;
})();
var statearr_49662_49725 = state_49636__$1;
(statearr_49662_49725[(2)] = null);

(statearr_49662_49725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (22))){
var inst_49575 = (state_49636[(12)]);
var inst_49588 = (state_49636[(2)]);
var inst_49589 = cljs.core.not_empty.call(null,inst_49575);
var state_49636__$1 = (function (){var statearr_49663 = state_49636;
(statearr_49663[(28)] = inst_49588);

return statearr_49663;
})();
if(cljs.core.truth_(inst_49589)){
var statearr_49664_49726 = state_49636__$1;
(statearr_49664_49726[(1)] = (23));

} else {
var statearr_49665_49727 = state_49636__$1;
(statearr_49665_49727[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (36))){
var state_49636__$1 = state_49636;
var statearr_49666_49728 = state_49636__$1;
(statearr_49666_49728[(2)] = null);

(statearr_49666_49728[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (29))){
var inst_49602 = (state_49636[(29)]);
var inst_49607 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49602);
var inst_49608 = cljs.core.pr_str.call(null,inst_49607);
var inst_49609 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_49608)].join('');
var inst_49610 = figwheel.client.utils.log.call(null,inst_49609);
var state_49636__$1 = state_49636;
var statearr_49667_49729 = state_49636__$1;
(statearr_49667_49729[(2)] = inst_49610);

(statearr_49667_49729[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (6))){
var inst_49557 = (state_49636[(2)]);
var state_49636__$1 = state_49636;
var statearr_49668_49730 = state_49636__$1;
(statearr_49668_49730[(2)] = inst_49557);

(statearr_49668_49730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (28))){
var inst_49602 = (state_49636[(29)]);
var inst_49601 = (state_49636[(2)]);
var inst_49602__$1 = cljs.core.get.call(null,inst_49601,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49603 = cljs.core.get.call(null,inst_49601,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_49604 = cljs.core.get.call(null,inst_49601,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49605 = cljs.core.not_empty.call(null,inst_49602__$1);
var state_49636__$1 = (function (){var statearr_49669 = state_49636;
(statearr_49669[(29)] = inst_49602__$1);

(statearr_49669[(30)] = inst_49604);

(statearr_49669[(25)] = inst_49603);

return statearr_49669;
})();
if(cljs.core.truth_(inst_49605)){
var statearr_49670_49731 = state_49636__$1;
(statearr_49670_49731[(1)] = (29));

} else {
var statearr_49671_49732 = state_49636__$1;
(statearr_49671_49732[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (25))){
var inst_49634 = (state_49636[(2)]);
var state_49636__$1 = state_49636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49636__$1,inst_49634);
} else {
if((state_val_49637 === (34))){
var inst_49604 = (state_49636[(30)]);
var inst_49622 = (state_49636[(2)]);
var inst_49623 = cljs.core.not_empty.call(null,inst_49604);
var state_49636__$1 = (function (){var statearr_49672 = state_49636;
(statearr_49672[(31)] = inst_49622);

return statearr_49672;
})();
if(cljs.core.truth_(inst_49623)){
var statearr_49673_49733 = state_49636__$1;
(statearr_49673_49733[(1)] = (35));

} else {
var statearr_49674_49734 = state_49636__$1;
(statearr_49674_49734[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (17))){
var inst_49562 = (state_49636[(24)]);
var state_49636__$1 = state_49636;
var statearr_49675_49735 = state_49636__$1;
(statearr_49675_49735[(2)] = inst_49562);

(statearr_49675_49735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (3))){
var state_49636__$1 = state_49636;
var statearr_49676_49736 = state_49636__$1;
(statearr_49676_49736[(2)] = null);

(statearr_49676_49736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (12))){
var inst_49553 = (state_49636[(2)]);
var state_49636__$1 = state_49636;
var statearr_49677_49737 = state_49636__$1;
(statearr_49677_49737[(2)] = inst_49553);

(statearr_49677_49737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (2))){
var inst_49515 = (state_49636[(20)]);
var inst_49522 = cljs.core.seq.call(null,inst_49515);
var inst_49523 = inst_49522;
var inst_49524 = null;
var inst_49525 = (0);
var inst_49526 = (0);
var state_49636__$1 = (function (){var statearr_49678 = state_49636;
(statearr_49678[(7)] = inst_49523);

(statearr_49678[(8)] = inst_49526);

(statearr_49678[(9)] = inst_49524);

(statearr_49678[(10)] = inst_49525);

return statearr_49678;
})();
var statearr_49679_49738 = state_49636__$1;
(statearr_49679_49738[(2)] = null);

(statearr_49679_49738[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (23))){
var inst_49575 = (state_49636[(12)]);
var inst_49569 = (state_49636[(13)]);
var inst_49573 = (state_49636[(14)]);
var inst_49595 = (state_49636[(19)]);
var inst_49572 = (state_49636[(15)]);
var inst_49568 = (state_49636[(16)]);
var inst_49591 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49594 = (function (){var all_files = inst_49568;
var files_SINGLEQUOTE_ = inst_49569;
var res_SINGLEQUOTE_ = inst_49572;
var res = inst_49573;
var files_not_loaded = inst_49575;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_49575,inst_49569,inst_49573,inst_49595,inst_49572,inst_49568,inst_49591,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files){
return (function (p__49593){
var map__49680 = p__49593;
var map__49680__$1 = ((cljs.core.seq_QMARK_.call(null,map__49680))?cljs.core.apply.call(null,cljs.core.hash_map,map__49680):map__49680);
var meta_data = cljs.core.get.call(null,map__49680__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_49575,inst_49569,inst_49573,inst_49595,inst_49572,inst_49568,inst_49591,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files))
})();
var inst_49595__$1 = cljs.core.group_by.call(null,inst_49594,inst_49575);
var inst_49596 = cljs.core.seq_QMARK_.call(null,inst_49595__$1);
var state_49636__$1 = (function (){var statearr_49681 = state_49636;
(statearr_49681[(32)] = inst_49591);

(statearr_49681[(19)] = inst_49595__$1);

return statearr_49681;
})();
if(inst_49596){
var statearr_49682_49739 = state_49636__$1;
(statearr_49682_49739[(1)] = (26));

} else {
var statearr_49683_49740 = state_49636__$1;
(statearr_49683_49740[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (35))){
var inst_49604 = (state_49636[(30)]);
var inst_49625 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49604);
var inst_49626 = cljs.core.pr_str.call(null,inst_49625);
var inst_49627 = [cljs.core.str("not required: "),cljs.core.str(inst_49626)].join('');
var inst_49628 = figwheel.client.utils.log.call(null,inst_49627);
var state_49636__$1 = state_49636;
var statearr_49684_49741 = state_49636__$1;
(statearr_49684_49741[(2)] = inst_49628);

(statearr_49684_49741[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (19))){
var inst_49569 = (state_49636[(13)]);
var inst_49573 = (state_49636[(14)]);
var inst_49572 = (state_49636[(15)]);
var inst_49568 = (state_49636[(16)]);
var inst_49572__$1 = (state_49636[(2)]);
var inst_49573__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49572__$1);
var inst_49574 = (function (){var all_files = inst_49568;
var files_SINGLEQUOTE_ = inst_49569;
var res_SINGLEQUOTE_ = inst_49572__$1;
var res = inst_49573__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_49569,inst_49573,inst_49572,inst_49568,inst_49572__$1,inst_49573__$1,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files){
return (function (p1__49306_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49306_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_49569,inst_49573,inst_49572,inst_49568,inst_49572__$1,inst_49573__$1,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files))
})();
var inst_49575 = cljs.core.filter.call(null,inst_49574,inst_49572__$1);
var inst_49576 = cljs.core.not_empty.call(null,inst_49573__$1);
var state_49636__$1 = (function (){var statearr_49685 = state_49636;
(statearr_49685[(12)] = inst_49575);

(statearr_49685[(14)] = inst_49573__$1);

(statearr_49685[(15)] = inst_49572__$1);

return statearr_49685;
})();
if(cljs.core.truth_(inst_49576)){
var statearr_49686_49742 = state_49636__$1;
(statearr_49686_49742[(1)] = (20));

} else {
var statearr_49687_49743 = state_49636__$1;
(statearr_49687_49743[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (11))){
var state_49636__$1 = state_49636;
var statearr_49688_49744 = state_49636__$1;
(statearr_49688_49744[(2)] = null);

(statearr_49688_49744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (9))){
var inst_49555 = (state_49636[(2)]);
var state_49636__$1 = state_49636;
var statearr_49689_49745 = state_49636__$1;
(statearr_49689_49745[(2)] = inst_49555);

(statearr_49689_49745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (5))){
var inst_49526 = (state_49636[(8)]);
var inst_49525 = (state_49636[(10)]);
var inst_49528 = (inst_49526 < inst_49525);
var inst_49529 = inst_49528;
var state_49636__$1 = state_49636;
if(cljs.core.truth_(inst_49529)){
var statearr_49690_49746 = state_49636__$1;
(statearr_49690_49746[(1)] = (7));

} else {
var statearr_49691_49747 = state_49636__$1;
(statearr_49691_49747[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (14))){
var inst_49536 = (state_49636[(27)]);
var inst_49545 = cljs.core.first.call(null,inst_49536);
var inst_49546 = figwheel.client.file_reloading.eval_body.call(null,inst_49545,opts);
var inst_49547 = cljs.core.next.call(null,inst_49536);
var inst_49523 = inst_49547;
var inst_49524 = null;
var inst_49525 = (0);
var inst_49526 = (0);
var state_49636__$1 = (function (){var statearr_49692 = state_49636;
(statearr_49692[(7)] = inst_49523);

(statearr_49692[(8)] = inst_49526);

(statearr_49692[(9)] = inst_49524);

(statearr_49692[(10)] = inst_49525);

(statearr_49692[(33)] = inst_49546);

return statearr_49692;
})();
var statearr_49693_49748 = state_49636__$1;
(statearr_49693_49748[(2)] = null);

(statearr_49693_49748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (26))){
var inst_49595 = (state_49636[(19)]);
var inst_49598 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49595);
var state_49636__$1 = state_49636;
var statearr_49694_49749 = state_49636__$1;
(statearr_49694_49749[(2)] = inst_49598);

(statearr_49694_49749[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (16))){
var inst_49562 = (state_49636[(24)]);
var inst_49564 = (function (){var all_files = inst_49562;
return ((function (all_files,inst_49562,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files){
return (function (p1__49305_SHARP_){
return cljs.core.update_in.call(null,p1__49305_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_49562,state_val_49637,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files))
})();
var inst_49565 = cljs.core.map.call(null,inst_49564,inst_49562);
var state_49636__$1 = state_49636;
var statearr_49695_49750 = state_49636__$1;
(statearr_49695_49750[(2)] = inst_49565);

(statearr_49695_49750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (30))){
var state_49636__$1 = state_49636;
var statearr_49696_49751 = state_49636__$1;
(statearr_49696_49751[(2)] = null);

(statearr_49696_49751[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (10))){
var inst_49536 = (state_49636[(27)]);
var inst_49538 = cljs.core.chunked_seq_QMARK_.call(null,inst_49536);
var state_49636__$1 = state_49636;
if(inst_49538){
var statearr_49697_49752 = state_49636__$1;
(statearr_49697_49752[(1)] = (13));

} else {
var statearr_49698_49753 = state_49636__$1;
(statearr_49698_49753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (18))){
var inst_49569 = (state_49636[(13)]);
var inst_49568 = (state_49636[(16)]);
var inst_49568__$1 = (state_49636[(2)]);
var inst_49569__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_49568__$1);
var inst_49570 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49569__$1);
var state_49636__$1 = (function (){var statearr_49699 = state_49636;
(statearr_49699[(13)] = inst_49569__$1);

(statearr_49699[(16)] = inst_49568__$1);

return statearr_49699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49636__$1,(19),inst_49570);
} else {
if((state_val_49637 === (37))){
var inst_49631 = (state_49636[(2)]);
var state_49636__$1 = state_49636;
var statearr_49700_49754 = state_49636__$1;
(statearr_49700_49754[(2)] = inst_49631);

(statearr_49700_49754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49637 === (8))){
var inst_49523 = (state_49636[(7)]);
var inst_49536 = (state_49636[(27)]);
var inst_49536__$1 = cljs.core.seq.call(null,inst_49523);
var state_49636__$1 = (function (){var statearr_49701 = state_49636;
(statearr_49701[(27)] = inst_49536__$1);

return statearr_49701;
})();
if(inst_49536__$1){
var statearr_49702_49755 = state_49636__$1;
(statearr_49702_49755[(1)] = (10));

} else {
var statearr_49703_49756 = state_49636__$1;
(statearr_49703_49756[(1)] = (11));

}

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
}
}
}
});})(c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files))
;
return ((function (switch__19756__auto__,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____0 = (function (){
var statearr_49707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49707[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__);

(statearr_49707[(1)] = (1));

return statearr_49707;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____1 = (function (state_49636){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_49636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e49708){if((e49708 instanceof Object)){
var ex__19760__auto__ = e49708;
var statearr_49709_49757 = state_49636;
(statearr_49709_49757[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49758 = state_49636;
state_49636 = G__49758;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__ = function(state_49636){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____1.call(this,state_49636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files))
})();
var state__19820__auto__ = (function (){var statearr_49710 = f__19819__auto__.call(null);
(statearr_49710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_49710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__,map__49510,map__49510__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__49511,map__49511__$1,msg,files))
);

return c__19818__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49761,link){
var map__49763 = p__49761;
var map__49763__$1 = ((cljs.core.seq_QMARK_.call(null,map__49763))?cljs.core.apply.call(null,cljs.core.hash_map,map__49763):map__49763);
var file = cljs.core.get.call(null,map__49763__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__49763,map__49763__$1,file){
return (function (p1__49759_SHARP_,p2__49760_SHARP_){
if(cljs.core._EQ_.call(null,p1__49759_SHARP_,p2__49760_SHARP_)){
return p1__49759_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__49763,map__49763__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49767){
var map__49768 = p__49767;
var map__49768__$1 = ((cljs.core.seq_QMARK_.call(null,map__49768))?cljs.core.apply.call(null,cljs.core.hash_map,map__49768):map__49768);
var match_length = cljs.core.get.call(null,map__49768__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49768__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49764_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49764_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__49770 = arguments.length;
switch (G__49770) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__49772){
var map__49774 = p__49772;
var map__49774__$1 = ((cljs.core.seq_QMARK_.call(null,map__49774))?cljs.core.apply.call(null,cljs.core.hash_map,map__49774):map__49774);
var f_data = map__49774__$1;
var file = cljs.core.get.call(null,map__49774__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__49774__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16062__auto__ = request_url;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49775,files_msg){
var map__49797 = p__49775;
var map__49797__$1 = ((cljs.core.seq_QMARK_.call(null,map__49797))?cljs.core.apply.call(null,cljs.core.hash_map,map__49797):map__49797);
var opts = map__49797__$1;
var on_cssload = cljs.core.get.call(null,map__49797__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__49798_49818 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__49799_49819 = null;
var count__49800_49820 = (0);
var i__49801_49821 = (0);
while(true){
if((i__49801_49821 < count__49800_49820)){
var f_49822 = cljs.core._nth.call(null,chunk__49799_49819,i__49801_49821);
figwheel.client.file_reloading.reload_css_file.call(null,f_49822);

var G__49823 = seq__49798_49818;
var G__49824 = chunk__49799_49819;
var G__49825 = count__49800_49820;
var G__49826 = (i__49801_49821 + (1));
seq__49798_49818 = G__49823;
chunk__49799_49819 = G__49824;
count__49800_49820 = G__49825;
i__49801_49821 = G__49826;
continue;
} else {
var temp__4425__auto___49827 = cljs.core.seq.call(null,seq__49798_49818);
if(temp__4425__auto___49827){
var seq__49798_49828__$1 = temp__4425__auto___49827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49798_49828__$1)){
var c__16847__auto___49829 = cljs.core.chunk_first.call(null,seq__49798_49828__$1);
var G__49830 = cljs.core.chunk_rest.call(null,seq__49798_49828__$1);
var G__49831 = c__16847__auto___49829;
var G__49832 = cljs.core.count.call(null,c__16847__auto___49829);
var G__49833 = (0);
seq__49798_49818 = G__49830;
chunk__49799_49819 = G__49831;
count__49800_49820 = G__49832;
i__49801_49821 = G__49833;
continue;
} else {
var f_49834 = cljs.core.first.call(null,seq__49798_49828__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_49834);

var G__49835 = cljs.core.next.call(null,seq__49798_49828__$1);
var G__49836 = null;
var G__49837 = (0);
var G__49838 = (0);
seq__49798_49818 = G__49835;
chunk__49799_49819 = G__49836;
count__49800_49820 = G__49837;
i__49801_49821 = G__49838;
continue;
}
} else {
}
}
break;
}

var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,map__49797,map__49797__$1,opts,on_cssload){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,map__49797,map__49797__$1,opts,on_cssload){
return (function (state_49808){
var state_val_49809 = (state_49808[(1)]);
if((state_val_49809 === (1))){
var inst_49802 = cljs.core.async.timeout.call(null,(100));
var state_49808__$1 = state_49808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49808__$1,(2),inst_49802);
} else {
if((state_val_49809 === (2))){
var inst_49804 = (state_49808[(2)]);
var inst_49805 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_49806 = on_cssload.call(null,inst_49805);
var state_49808__$1 = (function (){var statearr_49810 = state_49808;
(statearr_49810[(7)] = inst_49804);

return statearr_49810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49808__$1,inst_49806);
} else {
return null;
}
}
});})(c__19818__auto__,map__49797,map__49797__$1,opts,on_cssload))
;
return ((function (switch__19756__auto__,c__19818__auto__,map__49797,map__49797__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____0 = (function (){
var statearr_49814 = [null,null,null,null,null,null,null,null];
(statearr_49814[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__);

(statearr_49814[(1)] = (1));

return statearr_49814;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____1 = (function (state_49808){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_49808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e49815){if((e49815 instanceof Object)){
var ex__19760__auto__ = e49815;
var statearr_49816_49839 = state_49808;
(statearr_49816_49839[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49840 = state_49808;
state_49808 = G__49840;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__ = function(state_49808){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____1.call(this,state_49808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,map__49797,map__49797__$1,opts,on_cssload))
})();
var state__19820__auto__ = (function (){var statearr_49817 = f__19819__auto__.call(null);
(statearr_49817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_49817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__,map__49797,map__49797__$1,opts,on_cssload))
);

return c__19818__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map