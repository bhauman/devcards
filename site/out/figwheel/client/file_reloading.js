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
return cljs.core.reduce.call(null,(function (p1__75917_SHARP_,p2__75918_SHARP_){
var and__16050__auto__ = p1__75917_SHARP_;
if(cljs.core.truth_(and__16050__auto__)){
return p2__75918_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__75919){
var map__75920 = p__75919;
var map__75920__$1 = ((cljs.core.seq_QMARK_.call(null,map__75920))?cljs.core.apply.call(null,cljs.core.hash_map,map__75920):map__75920);
var file = cljs.core.get.call(null,map__75920__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__75921){
var map__75922 = p__75921;
var map__75922__$1 = ((cljs.core.seq_QMARK_.call(null,map__75922))?cljs.core.apply.call(null,cljs.core.hash_map,map__75922):map__75922);
var namespace = cljs.core.get.call(null,map__75922__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e75923){if((e75923 instanceof Error)){
var e = e75923;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e75923;

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
var G__75925 = arguments.length;
switch (G__75925) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__75927,callback){
var map__75929 = p__75927;
var map__75929__$1 = ((cljs.core.seq_QMARK_.call(null,map__75929))?cljs.core.apply.call(null,cljs.core.hash_map,map__75929):map__75929);
var file_msg = map__75929__$1;
var request_url = cljs.core.get.call(null,map__75929__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__75929,map__75929__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__75929,map__75929__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__75930){
var map__75932 = p__75930;
var map__75932__$1 = ((cljs.core.seq_QMARK_.call(null,map__75932))?cljs.core.apply.call(null,cljs.core.hash_map,map__75932):map__75932);
var file_msg = map__75932__$1;
var namespace = cljs.core.get.call(null,map__75932__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__75932__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__75933,callback){
var map__75935 = p__75933;
var map__75935__$1 = ((cljs.core.seq_QMARK_.call(null,map__75935))?cljs.core.apply.call(null,cljs.core.hash_map,map__75935):map__75935);
var file_msg = map__75935__$1;
var request_url = cljs.core.get.call(null,map__75935__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__75935__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19818__auto___76022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___76022,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___76022,out){
return (function (state_76004){
var state_val_76005 = (state_76004[(1)]);
if((state_val_76005 === (1))){
var inst_75982 = cljs.core.nth.call(null,files,(0),null);
var inst_75983 = cljs.core.nthnext.call(null,files,(1));
var inst_75984 = files;
var state_76004__$1 = (function (){var statearr_76006 = state_76004;
(statearr_76006[(7)] = inst_75982);

(statearr_76006[(8)] = inst_75984);

(statearr_76006[(9)] = inst_75983);

return statearr_76006;
})();
var statearr_76007_76023 = state_76004__$1;
(statearr_76007_76023[(2)] = null);

(statearr_76007_76023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76005 === (2))){
var inst_75987 = (state_76004[(10)]);
var inst_75984 = (state_76004[(8)]);
var inst_75987__$1 = cljs.core.nth.call(null,inst_75984,(0),null);
var inst_75988 = cljs.core.nthnext.call(null,inst_75984,(1));
var inst_75989 = (inst_75987__$1 == null);
var inst_75990 = cljs.core.not.call(null,inst_75989);
var state_76004__$1 = (function (){var statearr_76008 = state_76004;
(statearr_76008[(10)] = inst_75987__$1);

(statearr_76008[(11)] = inst_75988);

return statearr_76008;
})();
if(inst_75990){
var statearr_76009_76024 = state_76004__$1;
(statearr_76009_76024[(1)] = (4));

} else {
var statearr_76010_76025 = state_76004__$1;
(statearr_76010_76025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76005 === (3))){
var inst_76002 = (state_76004[(2)]);
var state_76004__$1 = state_76004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76004__$1,inst_76002);
} else {
if((state_val_76005 === (4))){
var inst_75987 = (state_76004[(10)]);
var inst_75992 = figwheel.client.file_reloading.reload_js_file.call(null,inst_75987);
var state_76004__$1 = state_76004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76004__$1,(7),inst_75992);
} else {
if((state_val_76005 === (5))){
var inst_75998 = cljs.core.async.close_BANG_.call(null,out);
var state_76004__$1 = state_76004;
var statearr_76011_76026 = state_76004__$1;
(statearr_76011_76026[(2)] = inst_75998);

(statearr_76011_76026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76005 === (6))){
var inst_76000 = (state_76004[(2)]);
var state_76004__$1 = state_76004;
var statearr_76012_76027 = state_76004__$1;
(statearr_76012_76027[(2)] = inst_76000);

(statearr_76012_76027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76005 === (7))){
var inst_75988 = (state_76004[(11)]);
var inst_75994 = (state_76004[(2)]);
var inst_75995 = cljs.core.async.put_BANG_.call(null,out,inst_75994);
var inst_75984 = inst_75988;
var state_76004__$1 = (function (){var statearr_76013 = state_76004;
(statearr_76013[(8)] = inst_75984);

(statearr_76013[(12)] = inst_75995);

return statearr_76013;
})();
var statearr_76014_76028 = state_76004__$1;
(statearr_76014_76028[(2)] = null);

(statearr_76014_76028[(1)] = (2));


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
});})(c__19818__auto___76022,out))
;
return ((function (switch__19756__auto__,c__19818__auto___76022,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____0 = (function (){
var statearr_76018 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76018[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__);

(statearr_76018[(1)] = (1));

return statearr_76018;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____1 = (function (state_76004){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_76004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e76019){if((e76019 instanceof Object)){
var ex__19760__auto__ = e76019;
var statearr_76020_76029 = state_76004;
(statearr_76020_76029[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76030 = state_76004;
state_76004 = G__76030;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__ = function(state_76004){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____1.call(this,state_76004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___76022,out))
})();
var state__19820__auto__ = (function (){var statearr_76021 = f__19819__auto__.call(null);
(statearr_76021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___76022);

return statearr_76021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___76022,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__76031,p__76032){
var map__76035 = p__76031;
var map__76035__$1 = ((cljs.core.seq_QMARK_.call(null,map__76035))?cljs.core.apply.call(null,cljs.core.hash_map,map__76035):map__76035);
var opts = map__76035__$1;
var url_rewriter = cljs.core.get.call(null,map__76035__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__76036 = p__76032;
var map__76036__$1 = ((cljs.core.seq_QMARK_.call(null,map__76036))?cljs.core.apply.call(null,cljs.core.hash_map,map__76036):map__76036);
var file_msg = map__76036__$1;
var file = cljs.core.get.call(null,map__76036__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__76037,opts){
var map__76040 = p__76037;
var map__76040__$1 = ((cljs.core.seq_QMARK_.call(null,map__76040))?cljs.core.apply.call(null,cljs.core.hash_map,map__76040):map__76040);
var eval_body__$1 = cljs.core.get.call(null,map__76040__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__76040__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e76041){var e = e76041;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__76046,p__76047){
var map__76249 = p__76046;
var map__76249__$1 = ((cljs.core.seq_QMARK_.call(null,map__76249))?cljs.core.apply.call(null,cljs.core.hash_map,map__76249):map__76249);
var opts = map__76249__$1;
var before_jsload = cljs.core.get.call(null,map__76249__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__76249__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__76249__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__76250 = p__76047;
var map__76250__$1 = ((cljs.core.seq_QMARK_.call(null,map__76250))?cljs.core.apply.call(null,cljs.core.hash_map,map__76250):map__76250);
var msg = map__76250__$1;
var files = cljs.core.get.call(null,map__76250__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files){
return (function (state_76375){
var state_val_76376 = (state_76375[(1)]);
if((state_val_76376 === (7))){
var inst_76263 = (state_76375[(7)]);
var inst_76262 = (state_76375[(8)]);
var inst_76265 = (state_76375[(9)]);
var inst_76264 = (state_76375[(10)]);
var inst_76270 = cljs.core._nth.call(null,inst_76263,inst_76265);
var inst_76271 = figwheel.client.file_reloading.eval_body.call(null,inst_76270,opts);
var inst_76272 = (inst_76265 + (1));
var tmp76377 = inst_76263;
var tmp76378 = inst_76262;
var tmp76379 = inst_76264;
var inst_76262__$1 = tmp76378;
var inst_76263__$1 = tmp76377;
var inst_76264__$1 = tmp76379;
var inst_76265__$1 = inst_76272;
var state_76375__$1 = (function (){var statearr_76380 = state_76375;
(statearr_76380[(7)] = inst_76263__$1);

(statearr_76380[(8)] = inst_76262__$1);

(statearr_76380[(9)] = inst_76265__$1);

(statearr_76380[(11)] = inst_76271);

(statearr_76380[(10)] = inst_76264__$1);

return statearr_76380;
})();
var statearr_76381_76450 = state_76375__$1;
(statearr_76381_76450[(2)] = null);

(statearr_76381_76450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (20))){
var inst_76308 = (state_76375[(12)]);
var inst_76307 = (state_76375[(13)]);
var inst_76312 = (state_76375[(14)]);
var inst_76314 = (state_76375[(15)]);
var inst_76311 = (state_76375[(16)]);
var inst_76317 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_76319 = (function (){var all_files = inst_76307;
var files_SINGLEQUOTE_ = inst_76308;
var res_SINGLEQUOTE_ = inst_76311;
var res = inst_76312;
var files_not_loaded = inst_76314;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_76308,inst_76307,inst_76312,inst_76314,inst_76311,inst_76317,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files){
return (function (p__76318){
var map__76382 = p__76318;
var map__76382__$1 = ((cljs.core.seq_QMARK_.call(null,map__76382))?cljs.core.apply.call(null,cljs.core.hash_map,map__76382):map__76382);
var namespace = cljs.core.get.call(null,map__76382__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__76382__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_76308,inst_76307,inst_76312,inst_76314,inst_76311,inst_76317,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files))
})();
var inst_76320 = cljs.core.map.call(null,inst_76319,inst_76312);
var inst_76321 = cljs.core.pr_str.call(null,inst_76320);
var inst_76322 = figwheel.client.utils.log.call(null,inst_76321);
var inst_76323 = (function (){var all_files = inst_76307;
var files_SINGLEQUOTE_ = inst_76308;
var res_SINGLEQUOTE_ = inst_76311;
var res = inst_76312;
var files_not_loaded = inst_76314;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_76308,inst_76307,inst_76312,inst_76314,inst_76311,inst_76317,inst_76319,inst_76320,inst_76321,inst_76322,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_76308,inst_76307,inst_76312,inst_76314,inst_76311,inst_76317,inst_76319,inst_76320,inst_76321,inst_76322,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files))
})();
var inst_76324 = setTimeout(inst_76323,(10));
var state_76375__$1 = (function (){var statearr_76383 = state_76375;
(statearr_76383[(17)] = inst_76317);

(statearr_76383[(18)] = inst_76322);

return statearr_76383;
})();
var statearr_76384_76451 = state_76375__$1;
(statearr_76384_76451[(2)] = inst_76324);

(statearr_76384_76451[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (27))){
var inst_76334 = (state_76375[(19)]);
var state_76375__$1 = state_76375;
var statearr_76385_76452 = state_76375__$1;
(statearr_76385_76452[(2)] = inst_76334);

(statearr_76385_76452[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (1))){
var inst_76254 = (state_76375[(20)]);
var inst_76251 = before_jsload.call(null,files);
var inst_76252 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_76253 = (function (){return ((function (inst_76254,inst_76251,inst_76252,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files){
return (function (p1__76042_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__76042_SHARP_);
});
;})(inst_76254,inst_76251,inst_76252,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files))
})();
var inst_76254__$1 = cljs.core.filter.call(null,inst_76253,files);
var inst_76255 = cljs.core.not_empty.call(null,inst_76254__$1);
var state_76375__$1 = (function (){var statearr_76386 = state_76375;
(statearr_76386[(20)] = inst_76254__$1);

(statearr_76386[(21)] = inst_76251);

(statearr_76386[(22)] = inst_76252);

return statearr_76386;
})();
if(cljs.core.truth_(inst_76255)){
var statearr_76387_76453 = state_76375__$1;
(statearr_76387_76453[(1)] = (2));

} else {
var statearr_76388_76454 = state_76375__$1;
(statearr_76388_76454[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (24))){
var state_76375__$1 = state_76375;
var statearr_76389_76455 = state_76375__$1;
(statearr_76389_76455[(2)] = null);

(statearr_76389_76455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (4))){
var inst_76299 = (state_76375[(2)]);
var inst_76300 = (function (){return ((function (inst_76299,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files){
return (function (p1__76043_SHARP_){
var and__16050__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__76043_SHARP_);
if(cljs.core.truth_(and__16050__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__76043_SHARP_));
} else {
return and__16050__auto__;
}
});
;})(inst_76299,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files))
})();
var inst_76301 = cljs.core.filter.call(null,inst_76300,files);
var state_76375__$1 = (function (){var statearr_76390 = state_76375;
(statearr_76390[(23)] = inst_76299);

(statearr_76390[(24)] = inst_76301);

return statearr_76390;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_76391_76456 = state_76375__$1;
(statearr_76391_76456[(1)] = (16));

} else {
var statearr_76392_76457 = state_76375__$1;
(statearr_76392_76457[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (15))){
var inst_76289 = (state_76375[(2)]);
var state_76375__$1 = state_76375;
var statearr_76393_76458 = state_76375__$1;
(statearr_76393_76458[(2)] = inst_76289);

(statearr_76393_76458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (21))){
var state_76375__$1 = state_76375;
var statearr_76394_76459 = state_76375__$1;
(statearr_76394_76459[(2)] = null);

(statearr_76394_76459[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (31))){
var inst_76342 = (state_76375[(25)]);
var inst_76352 = (state_76375[(2)]);
var inst_76353 = cljs.core.not_empty.call(null,inst_76342);
var state_76375__$1 = (function (){var statearr_76395 = state_76375;
(statearr_76395[(26)] = inst_76352);

return statearr_76395;
})();
if(cljs.core.truth_(inst_76353)){
var statearr_76396_76460 = state_76375__$1;
(statearr_76396_76460[(1)] = (32));

} else {
var statearr_76397_76461 = state_76375__$1;
(statearr_76397_76461[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (32))){
var inst_76342 = (state_76375[(25)]);
var inst_76355 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_76342);
var inst_76356 = cljs.core.pr_str.call(null,inst_76355);
var inst_76357 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_76356)].join('');
var inst_76358 = figwheel.client.utils.log.call(null,inst_76357);
var state_76375__$1 = state_76375;
var statearr_76398_76462 = state_76375__$1;
(statearr_76398_76462[(2)] = inst_76358);

(statearr_76398_76462[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (33))){
var state_76375__$1 = state_76375;
var statearr_76399_76463 = state_76375__$1;
(statearr_76399_76463[(2)] = null);

(statearr_76399_76463[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (13))){
var inst_76275 = (state_76375[(27)]);
var inst_76279 = cljs.core.chunk_first.call(null,inst_76275);
var inst_76280 = cljs.core.chunk_rest.call(null,inst_76275);
var inst_76281 = cljs.core.count.call(null,inst_76279);
var inst_76262 = inst_76280;
var inst_76263 = inst_76279;
var inst_76264 = inst_76281;
var inst_76265 = (0);
var state_76375__$1 = (function (){var statearr_76400 = state_76375;
(statearr_76400[(7)] = inst_76263);

(statearr_76400[(8)] = inst_76262);

(statearr_76400[(9)] = inst_76265);

(statearr_76400[(10)] = inst_76264);

return statearr_76400;
})();
var statearr_76401_76464 = state_76375__$1;
(statearr_76401_76464[(2)] = null);

(statearr_76401_76464[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (22))){
var inst_76314 = (state_76375[(15)]);
var inst_76327 = (state_76375[(2)]);
var inst_76328 = cljs.core.not_empty.call(null,inst_76314);
var state_76375__$1 = (function (){var statearr_76402 = state_76375;
(statearr_76402[(28)] = inst_76327);

return statearr_76402;
})();
if(cljs.core.truth_(inst_76328)){
var statearr_76403_76465 = state_76375__$1;
(statearr_76403_76465[(1)] = (23));

} else {
var statearr_76404_76466 = state_76375__$1;
(statearr_76404_76466[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (36))){
var state_76375__$1 = state_76375;
var statearr_76405_76467 = state_76375__$1;
(statearr_76405_76467[(2)] = null);

(statearr_76405_76467[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (29))){
var inst_76341 = (state_76375[(29)]);
var inst_76346 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_76341);
var inst_76347 = cljs.core.pr_str.call(null,inst_76346);
var inst_76348 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_76347)].join('');
var inst_76349 = figwheel.client.utils.log.call(null,inst_76348);
var state_76375__$1 = state_76375;
var statearr_76406_76468 = state_76375__$1;
(statearr_76406_76468[(2)] = inst_76349);

(statearr_76406_76468[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (6))){
var inst_76296 = (state_76375[(2)]);
var state_76375__$1 = state_76375;
var statearr_76407_76469 = state_76375__$1;
(statearr_76407_76469[(2)] = inst_76296);

(statearr_76407_76469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (28))){
var inst_76341 = (state_76375[(29)]);
var inst_76340 = (state_76375[(2)]);
var inst_76341__$1 = cljs.core.get.call(null,inst_76340,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_76342 = cljs.core.get.call(null,inst_76340,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_76343 = cljs.core.get.call(null,inst_76340,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_76344 = cljs.core.not_empty.call(null,inst_76341__$1);
var state_76375__$1 = (function (){var statearr_76408 = state_76375;
(statearr_76408[(25)] = inst_76342);

(statearr_76408[(29)] = inst_76341__$1);

(statearr_76408[(30)] = inst_76343);

return statearr_76408;
})();
if(cljs.core.truth_(inst_76344)){
var statearr_76409_76470 = state_76375__$1;
(statearr_76409_76470[(1)] = (29));

} else {
var statearr_76410_76471 = state_76375__$1;
(statearr_76410_76471[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (25))){
var inst_76373 = (state_76375[(2)]);
var state_76375__$1 = state_76375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76375__$1,inst_76373);
} else {
if((state_val_76376 === (34))){
var inst_76343 = (state_76375[(30)]);
var inst_76361 = (state_76375[(2)]);
var inst_76362 = cljs.core.not_empty.call(null,inst_76343);
var state_76375__$1 = (function (){var statearr_76411 = state_76375;
(statearr_76411[(31)] = inst_76361);

return statearr_76411;
})();
if(cljs.core.truth_(inst_76362)){
var statearr_76412_76472 = state_76375__$1;
(statearr_76412_76472[(1)] = (35));

} else {
var statearr_76413_76473 = state_76375__$1;
(statearr_76413_76473[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (17))){
var inst_76301 = (state_76375[(24)]);
var state_76375__$1 = state_76375;
var statearr_76414_76474 = state_76375__$1;
(statearr_76414_76474[(2)] = inst_76301);

(statearr_76414_76474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (3))){
var state_76375__$1 = state_76375;
var statearr_76415_76475 = state_76375__$1;
(statearr_76415_76475[(2)] = null);

(statearr_76415_76475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (12))){
var inst_76292 = (state_76375[(2)]);
var state_76375__$1 = state_76375;
var statearr_76416_76476 = state_76375__$1;
(statearr_76416_76476[(2)] = inst_76292);

(statearr_76416_76476[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (2))){
var inst_76254 = (state_76375[(20)]);
var inst_76261 = cljs.core.seq.call(null,inst_76254);
var inst_76262 = inst_76261;
var inst_76263 = null;
var inst_76264 = (0);
var inst_76265 = (0);
var state_76375__$1 = (function (){var statearr_76417 = state_76375;
(statearr_76417[(7)] = inst_76263);

(statearr_76417[(8)] = inst_76262);

(statearr_76417[(9)] = inst_76265);

(statearr_76417[(10)] = inst_76264);

return statearr_76417;
})();
var statearr_76418_76477 = state_76375__$1;
(statearr_76418_76477[(2)] = null);

(statearr_76418_76477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (23))){
var inst_76308 = (state_76375[(12)]);
var inst_76307 = (state_76375[(13)]);
var inst_76312 = (state_76375[(14)]);
var inst_76334 = (state_76375[(19)]);
var inst_76314 = (state_76375[(15)]);
var inst_76311 = (state_76375[(16)]);
var inst_76330 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_76333 = (function (){var all_files = inst_76307;
var files_SINGLEQUOTE_ = inst_76308;
var res_SINGLEQUOTE_ = inst_76311;
var res = inst_76312;
var files_not_loaded = inst_76314;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_76308,inst_76307,inst_76312,inst_76334,inst_76314,inst_76311,inst_76330,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files){
return (function (p__76332){
var map__76419 = p__76332;
var map__76419__$1 = ((cljs.core.seq_QMARK_.call(null,map__76419))?cljs.core.apply.call(null,cljs.core.hash_map,map__76419):map__76419);
var meta_data = cljs.core.get.call(null,map__76419__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_76308,inst_76307,inst_76312,inst_76334,inst_76314,inst_76311,inst_76330,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files))
})();
var inst_76334__$1 = cljs.core.group_by.call(null,inst_76333,inst_76314);
var inst_76335 = cljs.core.seq_QMARK_.call(null,inst_76334__$1);
var state_76375__$1 = (function (){var statearr_76420 = state_76375;
(statearr_76420[(19)] = inst_76334__$1);

(statearr_76420[(32)] = inst_76330);

return statearr_76420;
})();
if(inst_76335){
var statearr_76421_76478 = state_76375__$1;
(statearr_76421_76478[(1)] = (26));

} else {
var statearr_76422_76479 = state_76375__$1;
(statearr_76422_76479[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (35))){
var inst_76343 = (state_76375[(30)]);
var inst_76364 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_76343);
var inst_76365 = cljs.core.pr_str.call(null,inst_76364);
var inst_76366 = [cljs.core.str("not required: "),cljs.core.str(inst_76365)].join('');
var inst_76367 = figwheel.client.utils.log.call(null,inst_76366);
var state_76375__$1 = state_76375;
var statearr_76423_76480 = state_76375__$1;
(statearr_76423_76480[(2)] = inst_76367);

(statearr_76423_76480[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (19))){
var inst_76308 = (state_76375[(12)]);
var inst_76307 = (state_76375[(13)]);
var inst_76312 = (state_76375[(14)]);
var inst_76311 = (state_76375[(16)]);
var inst_76311__$1 = (state_76375[(2)]);
var inst_76312__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_76311__$1);
var inst_76313 = (function (){var all_files = inst_76307;
var files_SINGLEQUOTE_ = inst_76308;
var res_SINGLEQUOTE_ = inst_76311__$1;
var res = inst_76312__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_76308,inst_76307,inst_76312,inst_76311,inst_76311__$1,inst_76312__$1,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files){
return (function (p1__76045_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__76045_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_76308,inst_76307,inst_76312,inst_76311,inst_76311__$1,inst_76312__$1,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files))
})();
var inst_76314 = cljs.core.filter.call(null,inst_76313,inst_76311__$1);
var inst_76315 = cljs.core.not_empty.call(null,inst_76312__$1);
var state_76375__$1 = (function (){var statearr_76424 = state_76375;
(statearr_76424[(14)] = inst_76312__$1);

(statearr_76424[(15)] = inst_76314);

(statearr_76424[(16)] = inst_76311__$1);

return statearr_76424;
})();
if(cljs.core.truth_(inst_76315)){
var statearr_76425_76481 = state_76375__$1;
(statearr_76425_76481[(1)] = (20));

} else {
var statearr_76426_76482 = state_76375__$1;
(statearr_76426_76482[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (11))){
var state_76375__$1 = state_76375;
var statearr_76427_76483 = state_76375__$1;
(statearr_76427_76483[(2)] = null);

(statearr_76427_76483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (9))){
var inst_76294 = (state_76375[(2)]);
var state_76375__$1 = state_76375;
var statearr_76428_76484 = state_76375__$1;
(statearr_76428_76484[(2)] = inst_76294);

(statearr_76428_76484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (5))){
var inst_76265 = (state_76375[(9)]);
var inst_76264 = (state_76375[(10)]);
var inst_76267 = (inst_76265 < inst_76264);
var inst_76268 = inst_76267;
var state_76375__$1 = state_76375;
if(cljs.core.truth_(inst_76268)){
var statearr_76429_76485 = state_76375__$1;
(statearr_76429_76485[(1)] = (7));

} else {
var statearr_76430_76486 = state_76375__$1;
(statearr_76430_76486[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (14))){
var inst_76275 = (state_76375[(27)]);
var inst_76284 = cljs.core.first.call(null,inst_76275);
var inst_76285 = figwheel.client.file_reloading.eval_body.call(null,inst_76284,opts);
var inst_76286 = cljs.core.next.call(null,inst_76275);
var inst_76262 = inst_76286;
var inst_76263 = null;
var inst_76264 = (0);
var inst_76265 = (0);
var state_76375__$1 = (function (){var statearr_76431 = state_76375;
(statearr_76431[(7)] = inst_76263);

(statearr_76431[(8)] = inst_76262);

(statearr_76431[(9)] = inst_76265);

(statearr_76431[(33)] = inst_76285);

(statearr_76431[(10)] = inst_76264);

return statearr_76431;
})();
var statearr_76432_76487 = state_76375__$1;
(statearr_76432_76487[(2)] = null);

(statearr_76432_76487[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (26))){
var inst_76334 = (state_76375[(19)]);
var inst_76337 = cljs.core.apply.call(null,cljs.core.hash_map,inst_76334);
var state_76375__$1 = state_76375;
var statearr_76433_76488 = state_76375__$1;
(statearr_76433_76488[(2)] = inst_76337);

(statearr_76433_76488[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (16))){
var inst_76301 = (state_76375[(24)]);
var inst_76303 = (function (){var all_files = inst_76301;
return ((function (all_files,inst_76301,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files){
return (function (p1__76044_SHARP_){
return cljs.core.update_in.call(null,p1__76044_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_76301,state_val_76376,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files))
})();
var inst_76304 = cljs.core.map.call(null,inst_76303,inst_76301);
var state_76375__$1 = state_76375;
var statearr_76434_76489 = state_76375__$1;
(statearr_76434_76489[(2)] = inst_76304);

(statearr_76434_76489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (30))){
var state_76375__$1 = state_76375;
var statearr_76435_76490 = state_76375__$1;
(statearr_76435_76490[(2)] = null);

(statearr_76435_76490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (10))){
var inst_76275 = (state_76375[(27)]);
var inst_76277 = cljs.core.chunked_seq_QMARK_.call(null,inst_76275);
var state_76375__$1 = state_76375;
if(inst_76277){
var statearr_76436_76491 = state_76375__$1;
(statearr_76436_76491[(1)] = (13));

} else {
var statearr_76437_76492 = state_76375__$1;
(statearr_76437_76492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (18))){
var inst_76308 = (state_76375[(12)]);
var inst_76307 = (state_76375[(13)]);
var inst_76307__$1 = (state_76375[(2)]);
var inst_76308__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_76307__$1);
var inst_76309 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_76308__$1);
var state_76375__$1 = (function (){var statearr_76438 = state_76375;
(statearr_76438[(12)] = inst_76308__$1);

(statearr_76438[(13)] = inst_76307__$1);

return statearr_76438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76375__$1,(19),inst_76309);
} else {
if((state_val_76376 === (37))){
var inst_76370 = (state_76375[(2)]);
var state_76375__$1 = state_76375;
var statearr_76439_76493 = state_76375__$1;
(statearr_76439_76493[(2)] = inst_76370);

(statearr_76439_76493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76376 === (8))){
var inst_76262 = (state_76375[(8)]);
var inst_76275 = (state_76375[(27)]);
var inst_76275__$1 = cljs.core.seq.call(null,inst_76262);
var state_76375__$1 = (function (){var statearr_76440 = state_76375;
(statearr_76440[(27)] = inst_76275__$1);

return statearr_76440;
})();
if(inst_76275__$1){
var statearr_76441_76494 = state_76375__$1;
(statearr_76441_76494[(1)] = (10));

} else {
var statearr_76442_76495 = state_76375__$1;
(statearr_76442_76495[(1)] = (11));

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
});})(c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files))
;
return ((function (switch__19756__auto__,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____0 = (function (){
var statearr_76446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76446[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__);

(statearr_76446[(1)] = (1));

return statearr_76446;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____1 = (function (state_76375){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_76375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e76447){if((e76447 instanceof Object)){
var ex__19760__auto__ = e76447;
var statearr_76448_76496 = state_76375;
(statearr_76448_76496[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76497 = state_76375;
state_76375 = G__76497;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__ = function(state_76375){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____1.call(this,state_76375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files))
})();
var state__19820__auto__ = (function (){var statearr_76449 = f__19819__auto__.call(null);
(statearr_76449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_76449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__,map__76249,map__76249__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__76250,map__76250__$1,msg,files))
);

return c__19818__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__76500,link){
var map__76502 = p__76500;
var map__76502__$1 = ((cljs.core.seq_QMARK_.call(null,map__76502))?cljs.core.apply.call(null,cljs.core.hash_map,map__76502):map__76502);
var file = cljs.core.get.call(null,map__76502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__76502,map__76502__$1,file){
return (function (p1__76498_SHARP_,p2__76499_SHARP_){
if(cljs.core._EQ_.call(null,p1__76498_SHARP_,p2__76499_SHARP_)){
return p1__76498_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__76502,map__76502__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__76506){
var map__76507 = p__76506;
var map__76507__$1 = ((cljs.core.seq_QMARK_.call(null,map__76507))?cljs.core.apply.call(null,cljs.core.hash_map,map__76507):map__76507);
var match_length = cljs.core.get.call(null,map__76507__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__76507__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__76503_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__76503_SHARP_);
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
var G__76509 = arguments.length;
switch (G__76509) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__76511){
var map__76513 = p__76511;
var map__76513__$1 = ((cljs.core.seq_QMARK_.call(null,map__76513))?cljs.core.apply.call(null,cljs.core.hash_map,map__76513):map__76513);
var f_data = map__76513__$1;
var file = cljs.core.get.call(null,map__76513__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__76513__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__76514,files_msg){
var map__76536 = p__76514;
var map__76536__$1 = ((cljs.core.seq_QMARK_.call(null,map__76536))?cljs.core.apply.call(null,cljs.core.hash_map,map__76536):map__76536);
var opts = map__76536__$1;
var on_cssload = cljs.core.get.call(null,map__76536__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__76537_76557 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__76538_76558 = null;
var count__76539_76559 = (0);
var i__76540_76560 = (0);
while(true){
if((i__76540_76560 < count__76539_76559)){
var f_76561 = cljs.core._nth.call(null,chunk__76538_76558,i__76540_76560);
figwheel.client.file_reloading.reload_css_file.call(null,f_76561);

var G__76562 = seq__76537_76557;
var G__76563 = chunk__76538_76558;
var G__76564 = count__76539_76559;
var G__76565 = (i__76540_76560 + (1));
seq__76537_76557 = G__76562;
chunk__76538_76558 = G__76563;
count__76539_76559 = G__76564;
i__76540_76560 = G__76565;
continue;
} else {
var temp__4425__auto___76566 = cljs.core.seq.call(null,seq__76537_76557);
if(temp__4425__auto___76566){
var seq__76537_76567__$1 = temp__4425__auto___76566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76537_76567__$1)){
var c__16847__auto___76568 = cljs.core.chunk_first.call(null,seq__76537_76567__$1);
var G__76569 = cljs.core.chunk_rest.call(null,seq__76537_76567__$1);
var G__76570 = c__16847__auto___76568;
var G__76571 = cljs.core.count.call(null,c__16847__auto___76568);
var G__76572 = (0);
seq__76537_76557 = G__76569;
chunk__76538_76558 = G__76570;
count__76539_76559 = G__76571;
i__76540_76560 = G__76572;
continue;
} else {
var f_76573 = cljs.core.first.call(null,seq__76537_76567__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_76573);

var G__76574 = cljs.core.next.call(null,seq__76537_76567__$1);
var G__76575 = null;
var G__76576 = (0);
var G__76577 = (0);
seq__76537_76557 = G__76574;
chunk__76538_76558 = G__76575;
count__76539_76559 = G__76576;
i__76540_76560 = G__76577;
continue;
}
} else {
}
}
break;
}

var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,map__76536,map__76536__$1,opts,on_cssload){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,map__76536,map__76536__$1,opts,on_cssload){
return (function (state_76547){
var state_val_76548 = (state_76547[(1)]);
if((state_val_76548 === (1))){
var inst_76541 = cljs.core.async.timeout.call(null,(100));
var state_76547__$1 = state_76547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76547__$1,(2),inst_76541);
} else {
if((state_val_76548 === (2))){
var inst_76543 = (state_76547[(2)]);
var inst_76544 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_76545 = on_cssload.call(null,inst_76544);
var state_76547__$1 = (function (){var statearr_76549 = state_76547;
(statearr_76549[(7)] = inst_76543);

return statearr_76549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76547__$1,inst_76545);
} else {
return null;
}
}
});})(c__19818__auto__,map__76536,map__76536__$1,opts,on_cssload))
;
return ((function (switch__19756__auto__,c__19818__auto__,map__76536,map__76536__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____0 = (function (){
var statearr_76553 = [null,null,null,null,null,null,null,null];
(statearr_76553[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__);

(statearr_76553[(1)] = (1));

return statearr_76553;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____1 = (function (state_76547){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_76547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e76554){if((e76554 instanceof Object)){
var ex__19760__auto__ = e76554;
var statearr_76555_76578 = state_76547;
(statearr_76555_76578[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76579 = state_76547;
state_76547 = G__76579;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__ = function(state_76547){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____1.call(this,state_76547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,map__76536,map__76536__$1,opts,on_cssload))
})();
var state__19820__auto__ = (function (){var statearr_76556 = f__19819__auto__.call(null);
(statearr_76556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_76556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__,map__76536,map__76536__$1,opts,on_cssload))
);

return c__19818__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map