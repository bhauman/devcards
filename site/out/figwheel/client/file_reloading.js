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
return cljs.core.reduce.call(null,(function (p1__38699_SHARP_,p2__38700_SHARP_){
var and__16050__auto__ = p1__38699_SHARP_;
if(cljs.core.truth_(and__16050__auto__)){
return p2__38700_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__38701){
var map__38702 = p__38701;
var map__38702__$1 = ((cljs.core.seq_QMARK_.call(null,map__38702))?cljs.core.apply.call(null,cljs.core.hash_map,map__38702):map__38702);
var file = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__38703){
var map__38704 = p__38703;
var map__38704__$1 = ((cljs.core.seq_QMARK_.call(null,map__38704))?cljs.core.apply.call(null,cljs.core.hash_map,map__38704):map__38704);
var namespace = cljs.core.get.call(null,map__38704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e38705){if((e38705 instanceof Error)){
var e = e38705;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38705;

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
var G__38707 = arguments.length;
switch (G__38707) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38709,callback){
var map__38711 = p__38709;
var map__38711__$1 = ((cljs.core.seq_QMARK_.call(null,map__38711))?cljs.core.apply.call(null,cljs.core.hash_map,map__38711):map__38711);
var file_msg = map__38711__$1;
var request_url = cljs.core.get.call(null,map__38711__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38711,map__38711__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38711,map__38711__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38712){
var map__38714 = p__38712;
var map__38714__$1 = ((cljs.core.seq_QMARK_.call(null,map__38714))?cljs.core.apply.call(null,cljs.core.hash_map,map__38714):map__38714);
var file_msg = map__38714__$1;
var namespace = cljs.core.get.call(null,map__38714__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__38714__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38715,callback){
var map__38717 = p__38715;
var map__38717__$1 = ((cljs.core.seq_QMARK_.call(null,map__38717))?cljs.core.apply.call(null,cljs.core.hash_map,map__38717):map__38717);
var file_msg = map__38717__$1;
var request_url = cljs.core.get.call(null,map__38717__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38717__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19818__auto___38804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___38804,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___38804,out){
return (function (state_38786){
var state_val_38787 = (state_38786[(1)]);
if((state_val_38787 === (1))){
var inst_38764 = cljs.core.nth.call(null,files,(0),null);
var inst_38765 = cljs.core.nthnext.call(null,files,(1));
var inst_38766 = files;
var state_38786__$1 = (function (){var statearr_38788 = state_38786;
(statearr_38788[(7)] = inst_38764);

(statearr_38788[(8)] = inst_38766);

(statearr_38788[(9)] = inst_38765);

return statearr_38788;
})();
var statearr_38789_38805 = state_38786__$1;
(statearr_38789_38805[(2)] = null);

(statearr_38789_38805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38787 === (2))){
var inst_38769 = (state_38786[(10)]);
var inst_38766 = (state_38786[(8)]);
var inst_38769__$1 = cljs.core.nth.call(null,inst_38766,(0),null);
var inst_38770 = cljs.core.nthnext.call(null,inst_38766,(1));
var inst_38771 = (inst_38769__$1 == null);
var inst_38772 = cljs.core.not.call(null,inst_38771);
var state_38786__$1 = (function (){var statearr_38790 = state_38786;
(statearr_38790[(10)] = inst_38769__$1);

(statearr_38790[(11)] = inst_38770);

return statearr_38790;
})();
if(inst_38772){
var statearr_38791_38806 = state_38786__$1;
(statearr_38791_38806[(1)] = (4));

} else {
var statearr_38792_38807 = state_38786__$1;
(statearr_38792_38807[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38787 === (3))){
var inst_38784 = (state_38786[(2)]);
var state_38786__$1 = state_38786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38786__$1,inst_38784);
} else {
if((state_val_38787 === (4))){
var inst_38769 = (state_38786[(10)]);
var inst_38774 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38769);
var state_38786__$1 = state_38786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38786__$1,(7),inst_38774);
} else {
if((state_val_38787 === (5))){
var inst_38780 = cljs.core.async.close_BANG_.call(null,out);
var state_38786__$1 = state_38786;
var statearr_38793_38808 = state_38786__$1;
(statearr_38793_38808[(2)] = inst_38780);

(statearr_38793_38808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38787 === (6))){
var inst_38782 = (state_38786[(2)]);
var state_38786__$1 = state_38786;
var statearr_38794_38809 = state_38786__$1;
(statearr_38794_38809[(2)] = inst_38782);

(statearr_38794_38809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38787 === (7))){
var inst_38770 = (state_38786[(11)]);
var inst_38776 = (state_38786[(2)]);
var inst_38777 = cljs.core.async.put_BANG_.call(null,out,inst_38776);
var inst_38766 = inst_38770;
var state_38786__$1 = (function (){var statearr_38795 = state_38786;
(statearr_38795[(12)] = inst_38777);

(statearr_38795[(8)] = inst_38766);

return statearr_38795;
})();
var statearr_38796_38810 = state_38786__$1;
(statearr_38796_38810[(2)] = null);

(statearr_38796_38810[(1)] = (2));


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
});})(c__19818__auto___38804,out))
;
return ((function (switch__19756__auto__,c__19818__auto___38804,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____0 = (function (){
var statearr_38800 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38800[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__);

(statearr_38800[(1)] = (1));

return statearr_38800;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____1 = (function (state_38786){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_38786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e38801){if((e38801 instanceof Object)){
var ex__19760__auto__ = e38801;
var statearr_38802_38811 = state_38786;
(statearr_38802_38811[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38812 = state_38786;
state_38786 = G__38812;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__ = function(state_38786){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____1.call(this,state_38786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___38804,out))
})();
var state__19820__auto__ = (function (){var statearr_38803 = f__19819__auto__.call(null);
(statearr_38803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___38804);

return statearr_38803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___38804,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__38813,p__38814){
var map__38817 = p__38813;
var map__38817__$1 = ((cljs.core.seq_QMARK_.call(null,map__38817))?cljs.core.apply.call(null,cljs.core.hash_map,map__38817):map__38817);
var opts = map__38817__$1;
var url_rewriter = cljs.core.get.call(null,map__38817__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__38818 = p__38814;
var map__38818__$1 = ((cljs.core.seq_QMARK_.call(null,map__38818))?cljs.core.apply.call(null,cljs.core.hash_map,map__38818):map__38818);
var file_msg = map__38818__$1;
var file = cljs.core.get.call(null,map__38818__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38819,opts){
var map__38822 = p__38819;
var map__38822__$1 = ((cljs.core.seq_QMARK_.call(null,map__38822))?cljs.core.apply.call(null,cljs.core.hash_map,map__38822):map__38822);
var eval_body__$1 = cljs.core.get.call(null,map__38822__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38822__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e38823){var e = e38823;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38828,p__38829){
var map__39031 = p__38828;
var map__39031__$1 = ((cljs.core.seq_QMARK_.call(null,map__39031))?cljs.core.apply.call(null,cljs.core.hash_map,map__39031):map__39031);
var opts = map__39031__$1;
var before_jsload = cljs.core.get.call(null,map__39031__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39031__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__39031__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__39032 = p__38829;
var map__39032__$1 = ((cljs.core.seq_QMARK_.call(null,map__39032))?cljs.core.apply.call(null,cljs.core.hash_map,map__39032):map__39032);
var msg = map__39032__$1;
var files = cljs.core.get.call(null,map__39032__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files){
return (function (state_39157){
var state_val_39158 = (state_39157[(1)]);
if((state_val_39158 === (7))){
var inst_39045 = (state_39157[(7)]);
var inst_39046 = (state_39157[(8)]);
var inst_39044 = (state_39157[(9)]);
var inst_39047 = (state_39157[(10)]);
var inst_39052 = cljs.core._nth.call(null,inst_39045,inst_39047);
var inst_39053 = figwheel.client.file_reloading.eval_body.call(null,inst_39052,opts);
var inst_39054 = (inst_39047 + (1));
var tmp39159 = inst_39045;
var tmp39160 = inst_39046;
var tmp39161 = inst_39044;
var inst_39044__$1 = tmp39161;
var inst_39045__$1 = tmp39159;
var inst_39046__$1 = tmp39160;
var inst_39047__$1 = inst_39054;
var state_39157__$1 = (function (){var statearr_39162 = state_39157;
(statearr_39162[(11)] = inst_39053);

(statearr_39162[(7)] = inst_39045__$1);

(statearr_39162[(8)] = inst_39046__$1);

(statearr_39162[(9)] = inst_39044__$1);

(statearr_39162[(10)] = inst_39047__$1);

return statearr_39162;
})();
var statearr_39163_39232 = state_39157__$1;
(statearr_39163_39232[(2)] = null);

(statearr_39163_39232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (20))){
var inst_39094 = (state_39157[(12)]);
var inst_39090 = (state_39157[(13)]);
var inst_39089 = (state_39157[(14)]);
var inst_39096 = (state_39157[(15)]);
var inst_39093 = (state_39157[(16)]);
var inst_39099 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39101 = (function (){var all_files = inst_39089;
var files_SINGLEQUOTE_ = inst_39090;
var res_SINGLEQUOTE_ = inst_39093;
var res = inst_39094;
var files_not_loaded = inst_39096;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_39094,inst_39090,inst_39089,inst_39096,inst_39093,inst_39099,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files){
return (function (p__39100){
var map__39164 = p__39100;
var map__39164__$1 = ((cljs.core.seq_QMARK_.call(null,map__39164))?cljs.core.apply.call(null,cljs.core.hash_map,map__39164):map__39164);
var namespace = cljs.core.get.call(null,map__39164__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39164__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_39094,inst_39090,inst_39089,inst_39096,inst_39093,inst_39099,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files))
})();
var inst_39102 = cljs.core.map.call(null,inst_39101,inst_39094);
var inst_39103 = cljs.core.pr_str.call(null,inst_39102);
var inst_39104 = figwheel.client.utils.log.call(null,inst_39103);
var inst_39105 = (function (){var all_files = inst_39089;
var files_SINGLEQUOTE_ = inst_39090;
var res_SINGLEQUOTE_ = inst_39093;
var res = inst_39094;
var files_not_loaded = inst_39096;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_39094,inst_39090,inst_39089,inst_39096,inst_39093,inst_39099,inst_39101,inst_39102,inst_39103,inst_39104,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_39094,inst_39090,inst_39089,inst_39096,inst_39093,inst_39099,inst_39101,inst_39102,inst_39103,inst_39104,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files))
})();
var inst_39106 = setTimeout(inst_39105,(10));
var state_39157__$1 = (function (){var statearr_39165 = state_39157;
(statearr_39165[(17)] = inst_39104);

(statearr_39165[(18)] = inst_39099);

return statearr_39165;
})();
var statearr_39166_39233 = state_39157__$1;
(statearr_39166_39233[(2)] = inst_39106);

(statearr_39166_39233[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (27))){
var inst_39116 = (state_39157[(19)]);
var state_39157__$1 = state_39157;
var statearr_39167_39234 = state_39157__$1;
(statearr_39167_39234[(2)] = inst_39116);

(statearr_39167_39234[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (1))){
var inst_39036 = (state_39157[(20)]);
var inst_39033 = before_jsload.call(null,files);
var inst_39034 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39035 = (function (){return ((function (inst_39036,inst_39033,inst_39034,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files){
return (function (p1__38824_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38824_SHARP_);
});
;})(inst_39036,inst_39033,inst_39034,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files))
})();
var inst_39036__$1 = cljs.core.filter.call(null,inst_39035,files);
var inst_39037 = cljs.core.not_empty.call(null,inst_39036__$1);
var state_39157__$1 = (function (){var statearr_39168 = state_39157;
(statearr_39168[(21)] = inst_39033);

(statearr_39168[(22)] = inst_39034);

(statearr_39168[(20)] = inst_39036__$1);

return statearr_39168;
})();
if(cljs.core.truth_(inst_39037)){
var statearr_39169_39235 = state_39157__$1;
(statearr_39169_39235[(1)] = (2));

} else {
var statearr_39170_39236 = state_39157__$1;
(statearr_39170_39236[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (24))){
var state_39157__$1 = state_39157;
var statearr_39171_39237 = state_39157__$1;
(statearr_39171_39237[(2)] = null);

(statearr_39171_39237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (4))){
var inst_39081 = (state_39157[(2)]);
var inst_39082 = (function (){return ((function (inst_39081,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files){
return (function (p1__38825_SHARP_){
var and__16050__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38825_SHARP_);
if(cljs.core.truth_(and__16050__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38825_SHARP_));
} else {
return and__16050__auto__;
}
});
;})(inst_39081,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files))
})();
var inst_39083 = cljs.core.filter.call(null,inst_39082,files);
var state_39157__$1 = (function (){var statearr_39172 = state_39157;
(statearr_39172[(23)] = inst_39081);

(statearr_39172[(24)] = inst_39083);

return statearr_39172;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_39173_39238 = state_39157__$1;
(statearr_39173_39238[(1)] = (16));

} else {
var statearr_39174_39239 = state_39157__$1;
(statearr_39174_39239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (15))){
var inst_39071 = (state_39157[(2)]);
var state_39157__$1 = state_39157;
var statearr_39175_39240 = state_39157__$1;
(statearr_39175_39240[(2)] = inst_39071);

(statearr_39175_39240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (21))){
var state_39157__$1 = state_39157;
var statearr_39176_39241 = state_39157__$1;
(statearr_39176_39241[(2)] = null);

(statearr_39176_39241[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (31))){
var inst_39124 = (state_39157[(25)]);
var inst_39134 = (state_39157[(2)]);
var inst_39135 = cljs.core.not_empty.call(null,inst_39124);
var state_39157__$1 = (function (){var statearr_39177 = state_39157;
(statearr_39177[(26)] = inst_39134);

return statearr_39177;
})();
if(cljs.core.truth_(inst_39135)){
var statearr_39178_39242 = state_39157__$1;
(statearr_39178_39242[(1)] = (32));

} else {
var statearr_39179_39243 = state_39157__$1;
(statearr_39179_39243[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (32))){
var inst_39124 = (state_39157[(25)]);
var inst_39137 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39124);
var inst_39138 = cljs.core.pr_str.call(null,inst_39137);
var inst_39139 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_39138)].join('');
var inst_39140 = figwheel.client.utils.log.call(null,inst_39139);
var state_39157__$1 = state_39157;
var statearr_39180_39244 = state_39157__$1;
(statearr_39180_39244[(2)] = inst_39140);

(statearr_39180_39244[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (33))){
var state_39157__$1 = state_39157;
var statearr_39181_39245 = state_39157__$1;
(statearr_39181_39245[(2)] = null);

(statearr_39181_39245[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (13))){
var inst_39057 = (state_39157[(27)]);
var inst_39061 = cljs.core.chunk_first.call(null,inst_39057);
var inst_39062 = cljs.core.chunk_rest.call(null,inst_39057);
var inst_39063 = cljs.core.count.call(null,inst_39061);
var inst_39044 = inst_39062;
var inst_39045 = inst_39061;
var inst_39046 = inst_39063;
var inst_39047 = (0);
var state_39157__$1 = (function (){var statearr_39182 = state_39157;
(statearr_39182[(7)] = inst_39045);

(statearr_39182[(8)] = inst_39046);

(statearr_39182[(9)] = inst_39044);

(statearr_39182[(10)] = inst_39047);

return statearr_39182;
})();
var statearr_39183_39246 = state_39157__$1;
(statearr_39183_39246[(2)] = null);

(statearr_39183_39246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (22))){
var inst_39096 = (state_39157[(15)]);
var inst_39109 = (state_39157[(2)]);
var inst_39110 = cljs.core.not_empty.call(null,inst_39096);
var state_39157__$1 = (function (){var statearr_39184 = state_39157;
(statearr_39184[(28)] = inst_39109);

return statearr_39184;
})();
if(cljs.core.truth_(inst_39110)){
var statearr_39185_39247 = state_39157__$1;
(statearr_39185_39247[(1)] = (23));

} else {
var statearr_39186_39248 = state_39157__$1;
(statearr_39186_39248[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (36))){
var state_39157__$1 = state_39157;
var statearr_39187_39249 = state_39157__$1;
(statearr_39187_39249[(2)] = null);

(statearr_39187_39249[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (29))){
var inst_39123 = (state_39157[(29)]);
var inst_39128 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39123);
var inst_39129 = cljs.core.pr_str.call(null,inst_39128);
var inst_39130 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39129)].join('');
var inst_39131 = figwheel.client.utils.log.call(null,inst_39130);
var state_39157__$1 = state_39157;
var statearr_39188_39250 = state_39157__$1;
(statearr_39188_39250[(2)] = inst_39131);

(statearr_39188_39250[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (6))){
var inst_39078 = (state_39157[(2)]);
var state_39157__$1 = state_39157;
var statearr_39189_39251 = state_39157__$1;
(statearr_39189_39251[(2)] = inst_39078);

(statearr_39189_39251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (28))){
var inst_39123 = (state_39157[(29)]);
var inst_39122 = (state_39157[(2)]);
var inst_39123__$1 = cljs.core.get.call(null,inst_39122,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39124 = cljs.core.get.call(null,inst_39122,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_39125 = cljs.core.get.call(null,inst_39122,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39126 = cljs.core.not_empty.call(null,inst_39123__$1);
var state_39157__$1 = (function (){var statearr_39190 = state_39157;
(statearr_39190[(29)] = inst_39123__$1);

(statearr_39190[(30)] = inst_39125);

(statearr_39190[(25)] = inst_39124);

return statearr_39190;
})();
if(cljs.core.truth_(inst_39126)){
var statearr_39191_39252 = state_39157__$1;
(statearr_39191_39252[(1)] = (29));

} else {
var statearr_39192_39253 = state_39157__$1;
(statearr_39192_39253[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (25))){
var inst_39155 = (state_39157[(2)]);
var state_39157__$1 = state_39157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39157__$1,inst_39155);
} else {
if((state_val_39158 === (34))){
var inst_39125 = (state_39157[(30)]);
var inst_39143 = (state_39157[(2)]);
var inst_39144 = cljs.core.not_empty.call(null,inst_39125);
var state_39157__$1 = (function (){var statearr_39193 = state_39157;
(statearr_39193[(31)] = inst_39143);

return statearr_39193;
})();
if(cljs.core.truth_(inst_39144)){
var statearr_39194_39254 = state_39157__$1;
(statearr_39194_39254[(1)] = (35));

} else {
var statearr_39195_39255 = state_39157__$1;
(statearr_39195_39255[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (17))){
var inst_39083 = (state_39157[(24)]);
var state_39157__$1 = state_39157;
var statearr_39196_39256 = state_39157__$1;
(statearr_39196_39256[(2)] = inst_39083);

(statearr_39196_39256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (3))){
var state_39157__$1 = state_39157;
var statearr_39197_39257 = state_39157__$1;
(statearr_39197_39257[(2)] = null);

(statearr_39197_39257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (12))){
var inst_39074 = (state_39157[(2)]);
var state_39157__$1 = state_39157;
var statearr_39198_39258 = state_39157__$1;
(statearr_39198_39258[(2)] = inst_39074);

(statearr_39198_39258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (2))){
var inst_39036 = (state_39157[(20)]);
var inst_39043 = cljs.core.seq.call(null,inst_39036);
var inst_39044 = inst_39043;
var inst_39045 = null;
var inst_39046 = (0);
var inst_39047 = (0);
var state_39157__$1 = (function (){var statearr_39199 = state_39157;
(statearr_39199[(7)] = inst_39045);

(statearr_39199[(8)] = inst_39046);

(statearr_39199[(9)] = inst_39044);

(statearr_39199[(10)] = inst_39047);

return statearr_39199;
})();
var statearr_39200_39259 = state_39157__$1;
(statearr_39200_39259[(2)] = null);

(statearr_39200_39259[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (23))){
var inst_39094 = (state_39157[(12)]);
var inst_39090 = (state_39157[(13)]);
var inst_39089 = (state_39157[(14)]);
var inst_39116 = (state_39157[(19)]);
var inst_39096 = (state_39157[(15)]);
var inst_39093 = (state_39157[(16)]);
var inst_39112 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39115 = (function (){var all_files = inst_39089;
var files_SINGLEQUOTE_ = inst_39090;
var res_SINGLEQUOTE_ = inst_39093;
var res = inst_39094;
var files_not_loaded = inst_39096;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_39094,inst_39090,inst_39089,inst_39116,inst_39096,inst_39093,inst_39112,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files){
return (function (p__39114){
var map__39201 = p__39114;
var map__39201__$1 = ((cljs.core.seq_QMARK_.call(null,map__39201))?cljs.core.apply.call(null,cljs.core.hash_map,map__39201):map__39201);
var meta_data = cljs.core.get.call(null,map__39201__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_39094,inst_39090,inst_39089,inst_39116,inst_39096,inst_39093,inst_39112,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files))
})();
var inst_39116__$1 = cljs.core.group_by.call(null,inst_39115,inst_39096);
var inst_39117 = cljs.core.seq_QMARK_.call(null,inst_39116__$1);
var state_39157__$1 = (function (){var statearr_39202 = state_39157;
(statearr_39202[(32)] = inst_39112);

(statearr_39202[(19)] = inst_39116__$1);

return statearr_39202;
})();
if(inst_39117){
var statearr_39203_39260 = state_39157__$1;
(statearr_39203_39260[(1)] = (26));

} else {
var statearr_39204_39261 = state_39157__$1;
(statearr_39204_39261[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (35))){
var inst_39125 = (state_39157[(30)]);
var inst_39146 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39125);
var inst_39147 = cljs.core.pr_str.call(null,inst_39146);
var inst_39148 = [cljs.core.str("not required: "),cljs.core.str(inst_39147)].join('');
var inst_39149 = figwheel.client.utils.log.call(null,inst_39148);
var state_39157__$1 = state_39157;
var statearr_39205_39262 = state_39157__$1;
(statearr_39205_39262[(2)] = inst_39149);

(statearr_39205_39262[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (19))){
var inst_39094 = (state_39157[(12)]);
var inst_39090 = (state_39157[(13)]);
var inst_39089 = (state_39157[(14)]);
var inst_39093 = (state_39157[(16)]);
var inst_39093__$1 = (state_39157[(2)]);
var inst_39094__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39093__$1);
var inst_39095 = (function (){var all_files = inst_39089;
var files_SINGLEQUOTE_ = inst_39090;
var res_SINGLEQUOTE_ = inst_39093__$1;
var res = inst_39094__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_39094,inst_39090,inst_39089,inst_39093,inst_39093__$1,inst_39094__$1,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files){
return (function (p1__38827_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38827_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_39094,inst_39090,inst_39089,inst_39093,inst_39093__$1,inst_39094__$1,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files))
})();
var inst_39096 = cljs.core.filter.call(null,inst_39095,inst_39093__$1);
var inst_39097 = cljs.core.not_empty.call(null,inst_39094__$1);
var state_39157__$1 = (function (){var statearr_39206 = state_39157;
(statearr_39206[(12)] = inst_39094__$1);

(statearr_39206[(15)] = inst_39096);

(statearr_39206[(16)] = inst_39093__$1);

return statearr_39206;
})();
if(cljs.core.truth_(inst_39097)){
var statearr_39207_39263 = state_39157__$1;
(statearr_39207_39263[(1)] = (20));

} else {
var statearr_39208_39264 = state_39157__$1;
(statearr_39208_39264[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (11))){
var state_39157__$1 = state_39157;
var statearr_39209_39265 = state_39157__$1;
(statearr_39209_39265[(2)] = null);

(statearr_39209_39265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (9))){
var inst_39076 = (state_39157[(2)]);
var state_39157__$1 = state_39157;
var statearr_39210_39266 = state_39157__$1;
(statearr_39210_39266[(2)] = inst_39076);

(statearr_39210_39266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (5))){
var inst_39046 = (state_39157[(8)]);
var inst_39047 = (state_39157[(10)]);
var inst_39049 = (inst_39047 < inst_39046);
var inst_39050 = inst_39049;
var state_39157__$1 = state_39157;
if(cljs.core.truth_(inst_39050)){
var statearr_39211_39267 = state_39157__$1;
(statearr_39211_39267[(1)] = (7));

} else {
var statearr_39212_39268 = state_39157__$1;
(statearr_39212_39268[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (14))){
var inst_39057 = (state_39157[(27)]);
var inst_39066 = cljs.core.first.call(null,inst_39057);
var inst_39067 = figwheel.client.file_reloading.eval_body.call(null,inst_39066,opts);
var inst_39068 = cljs.core.next.call(null,inst_39057);
var inst_39044 = inst_39068;
var inst_39045 = null;
var inst_39046 = (0);
var inst_39047 = (0);
var state_39157__$1 = (function (){var statearr_39213 = state_39157;
(statearr_39213[(33)] = inst_39067);

(statearr_39213[(7)] = inst_39045);

(statearr_39213[(8)] = inst_39046);

(statearr_39213[(9)] = inst_39044);

(statearr_39213[(10)] = inst_39047);

return statearr_39213;
})();
var statearr_39214_39269 = state_39157__$1;
(statearr_39214_39269[(2)] = null);

(statearr_39214_39269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (26))){
var inst_39116 = (state_39157[(19)]);
var inst_39119 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39116);
var state_39157__$1 = state_39157;
var statearr_39215_39270 = state_39157__$1;
(statearr_39215_39270[(2)] = inst_39119);

(statearr_39215_39270[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (16))){
var inst_39083 = (state_39157[(24)]);
var inst_39085 = (function (){var all_files = inst_39083;
return ((function (all_files,inst_39083,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files){
return (function (p1__38826_SHARP_){
return cljs.core.update_in.call(null,p1__38826_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_39083,state_val_39158,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files))
})();
var inst_39086 = cljs.core.map.call(null,inst_39085,inst_39083);
var state_39157__$1 = state_39157;
var statearr_39216_39271 = state_39157__$1;
(statearr_39216_39271[(2)] = inst_39086);

(statearr_39216_39271[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (30))){
var state_39157__$1 = state_39157;
var statearr_39217_39272 = state_39157__$1;
(statearr_39217_39272[(2)] = null);

(statearr_39217_39272[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (10))){
var inst_39057 = (state_39157[(27)]);
var inst_39059 = cljs.core.chunked_seq_QMARK_.call(null,inst_39057);
var state_39157__$1 = state_39157;
if(inst_39059){
var statearr_39218_39273 = state_39157__$1;
(statearr_39218_39273[(1)] = (13));

} else {
var statearr_39219_39274 = state_39157__$1;
(statearr_39219_39274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (18))){
var inst_39090 = (state_39157[(13)]);
var inst_39089 = (state_39157[(14)]);
var inst_39089__$1 = (state_39157[(2)]);
var inst_39090__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_39089__$1);
var inst_39091 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39090__$1);
var state_39157__$1 = (function (){var statearr_39220 = state_39157;
(statearr_39220[(13)] = inst_39090__$1);

(statearr_39220[(14)] = inst_39089__$1);

return statearr_39220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39157__$1,(19),inst_39091);
} else {
if((state_val_39158 === (37))){
var inst_39152 = (state_39157[(2)]);
var state_39157__$1 = state_39157;
var statearr_39221_39275 = state_39157__$1;
(statearr_39221_39275[(2)] = inst_39152);

(statearr_39221_39275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39158 === (8))){
var inst_39057 = (state_39157[(27)]);
var inst_39044 = (state_39157[(9)]);
var inst_39057__$1 = cljs.core.seq.call(null,inst_39044);
var state_39157__$1 = (function (){var statearr_39222 = state_39157;
(statearr_39222[(27)] = inst_39057__$1);

return statearr_39222;
})();
if(inst_39057__$1){
var statearr_39223_39276 = state_39157__$1;
(statearr_39223_39276[(1)] = (10));

} else {
var statearr_39224_39277 = state_39157__$1;
(statearr_39224_39277[(1)] = (11));

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
});})(c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files))
;
return ((function (switch__19756__auto__,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____0 = (function (){
var statearr_39228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39228[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__);

(statearr_39228[(1)] = (1));

return statearr_39228;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____1 = (function (state_39157){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_39157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e39229){if((e39229 instanceof Object)){
var ex__19760__auto__ = e39229;
var statearr_39230_39278 = state_39157;
(statearr_39230_39278[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39279 = state_39157;
state_39157 = G__39279;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__ = function(state_39157){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____1.call(this,state_39157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files))
})();
var state__19820__auto__ = (function (){var statearr_39231 = f__19819__auto__.call(null);
(statearr_39231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_39231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__,map__39031,map__39031__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39032,map__39032__$1,msg,files))
);

return c__19818__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39282,link){
var map__39284 = p__39282;
var map__39284__$1 = ((cljs.core.seq_QMARK_.call(null,map__39284))?cljs.core.apply.call(null,cljs.core.hash_map,map__39284):map__39284);
var file = cljs.core.get.call(null,map__39284__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__39284,map__39284__$1,file){
return (function (p1__39280_SHARP_,p2__39281_SHARP_){
if(cljs.core._EQ_.call(null,p1__39280_SHARP_,p2__39281_SHARP_)){
return p1__39280_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__39284,map__39284__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39288){
var map__39289 = p__39288;
var map__39289__$1 = ((cljs.core.seq_QMARK_.call(null,map__39289))?cljs.core.apply.call(null,cljs.core.hash_map,map__39289):map__39289);
var match_length = cljs.core.get.call(null,map__39289__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39289__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39285_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39285_SHARP_);
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
var G__39291 = arguments.length;
switch (G__39291) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39293){
var map__39295 = p__39293;
var map__39295__$1 = ((cljs.core.seq_QMARK_.call(null,map__39295))?cljs.core.apply.call(null,cljs.core.hash_map,map__39295):map__39295);
var f_data = map__39295__$1;
var file = cljs.core.get.call(null,map__39295__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__39295__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39296,files_msg){
var map__39318 = p__39296;
var map__39318__$1 = ((cljs.core.seq_QMARK_.call(null,map__39318))?cljs.core.apply.call(null,cljs.core.hash_map,map__39318):map__39318);
var opts = map__39318__$1;
var on_cssload = cljs.core.get.call(null,map__39318__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39319_39339 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39320_39340 = null;
var count__39321_39341 = (0);
var i__39322_39342 = (0);
while(true){
if((i__39322_39342 < count__39321_39341)){
var f_39343 = cljs.core._nth.call(null,chunk__39320_39340,i__39322_39342);
figwheel.client.file_reloading.reload_css_file.call(null,f_39343);

var G__39344 = seq__39319_39339;
var G__39345 = chunk__39320_39340;
var G__39346 = count__39321_39341;
var G__39347 = (i__39322_39342 + (1));
seq__39319_39339 = G__39344;
chunk__39320_39340 = G__39345;
count__39321_39341 = G__39346;
i__39322_39342 = G__39347;
continue;
} else {
var temp__4425__auto___39348 = cljs.core.seq.call(null,seq__39319_39339);
if(temp__4425__auto___39348){
var seq__39319_39349__$1 = temp__4425__auto___39348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39319_39349__$1)){
var c__16847__auto___39350 = cljs.core.chunk_first.call(null,seq__39319_39349__$1);
var G__39351 = cljs.core.chunk_rest.call(null,seq__39319_39349__$1);
var G__39352 = c__16847__auto___39350;
var G__39353 = cljs.core.count.call(null,c__16847__auto___39350);
var G__39354 = (0);
seq__39319_39339 = G__39351;
chunk__39320_39340 = G__39352;
count__39321_39341 = G__39353;
i__39322_39342 = G__39354;
continue;
} else {
var f_39355 = cljs.core.first.call(null,seq__39319_39349__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39355);

var G__39356 = cljs.core.next.call(null,seq__39319_39349__$1);
var G__39357 = null;
var G__39358 = (0);
var G__39359 = (0);
seq__39319_39339 = G__39356;
chunk__39320_39340 = G__39357;
count__39321_39341 = G__39358;
i__39322_39342 = G__39359;
continue;
}
} else {
}
}
break;
}

var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,map__39318,map__39318__$1,opts,on_cssload){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,map__39318,map__39318__$1,opts,on_cssload){
return (function (state_39329){
var state_val_39330 = (state_39329[(1)]);
if((state_val_39330 === (1))){
var inst_39323 = cljs.core.async.timeout.call(null,(100));
var state_39329__$1 = state_39329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39329__$1,(2),inst_39323);
} else {
if((state_val_39330 === (2))){
var inst_39325 = (state_39329[(2)]);
var inst_39326 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_39327 = on_cssload.call(null,inst_39326);
var state_39329__$1 = (function (){var statearr_39331 = state_39329;
(statearr_39331[(7)] = inst_39325);

return statearr_39331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39329__$1,inst_39327);
} else {
return null;
}
}
});})(c__19818__auto__,map__39318,map__39318__$1,opts,on_cssload))
;
return ((function (switch__19756__auto__,c__19818__auto__,map__39318,map__39318__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____0 = (function (){
var statearr_39335 = [null,null,null,null,null,null,null,null];
(statearr_39335[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__);

(statearr_39335[(1)] = (1));

return statearr_39335;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____1 = (function (state_39329){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_39329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e39336){if((e39336 instanceof Object)){
var ex__19760__auto__ = e39336;
var statearr_39337_39360 = state_39329;
(statearr_39337_39360[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39361 = state_39329;
state_39329 = G__39361;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__ = function(state_39329){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____1.call(this,state_39329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,map__39318,map__39318__$1,opts,on_cssload))
})();
var state__19820__auto__ = (function (){var statearr_39338 = f__19819__auto__.call(null);
(statearr_39338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_39338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__,map__39318,map__39318__$1,opts,on_cssload))
);

return c__19818__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1436385366926