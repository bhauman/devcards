// Compiled by ClojureScript 0.0-3269 {}
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return f.call(null,e);
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id.call(null,devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.call(null,".",cljs.core.map.call(null,(function (x){
return [cljs.core.str("["),cljs.core.str(x),cljs.core.str("]")].join('');
}),cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cardpath","cardpath",-1078069311),path))));
});
devcards.system.unique_card_id__GT_path = (function devcards$system$unique_card_id__GT_path(card_id){
return cljs.core.mapv.call(null,cljs.core.keyword,cljs.core.rest.call(null,clojure.string.split.call(null,cljs.core.subs.call(null,card_id,(1),(cljs.core.count.call(null,card_id) - (1))),/\].\[/)));
});
devcards.system.create_style_element = (function devcards$system$create_style_element(id,style_text){
var el = document.createElement("style");
el.id = id;

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__4423__auto__ = node.firstChild;
if(cljs.core.truth_(temp__4423__auto__)){
var first_child = temp__4423__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__4423__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__4423__auto__)){
var heads = temp__4423__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-devcards-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-devcards-css","body {\n    margin: 0px;\n    background-color: rgb(233,234,237); \n}\n\n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-padding-top-border {\n    border-top: 1px solid #f5f5f5;\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n\n}\n\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5,\n.com-rigsomelight-devcards-base h1,\n.com-rigsomelight-devcards-base h2,\n.com-rigsomelight-devcards-base h3,\n.com-rigsomelight-devcards-base h4,\n.com-rigsomelight-devcards-base h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-base a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px; \n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n\n    padding: 8px 15px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border-top:  1px solid;\n    border-color: #e5e6e9 #dfe0e4 #d0d1d5;\n    border-color: #e5e6e9 #dfe0e4 #d0d1d5;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 15px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #ddd;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    color: #333;\n    background-color: #fcfcfc;\n    background-color: #f5f5f5;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  border: none;\n  border-top: solid 1px #fafafa;  \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n}\n\n.com-rigsomelight-devcards-pass {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n\n.com-rigsomelight-devcards-fail {\n  color: #a94442;\n  background-color: #f2dede;\n}\n\n.com-rigsomelight-devcards-error {\n  color: #a94442;\n  border-left: 2px solid #a94442;    \n  background-color: #f2dede;\n}\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: -5px;    \n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n    margin-right: 10px;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-right: 10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n    margin-right: 10px;    \n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: #f3f3f3;\n    padding-top: 5px;\n    height: 23px;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    margin-top: -14px;    \n}\n\n@media (min-width: 768px) {\n\n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n  }       \n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid;\n     border-color: #e5e6e9 #dfe0e4 #d0d1d5;      \n } \n}\n\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-edn-css"))){
return null;
} else {
return head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-edn-css",".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442;\n}\n\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n"));
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_.call(null);

if(cljs.core.truth_(devcards.system.devcards_app_node.call(null))){
return null;
} else {
var el = document.createElement("div");
el.id = devcards.system.devcards_app_element_id;

return devcards.system.prepend_child.call(null,document.body,el);
}
});
if(typeof devcards.system.history !== 'undefined'){
} else {
devcards.system.history = (function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})();
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return [cljs.core.str("!/"),cljs.core.str(clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,path)))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,clojure.string.replace.call(null,token,/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token.call(null,path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__32052_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,p1__32052_SHARP_.token));
}));

var temp__4425__auto__ = devcards.system.history.getToken();
if(cljs.core.truth_(temp__4425__auto__)){
var token = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
var and__16050__auto__ = cljs.core.map_QMARK_.call(null,d);
if(and__16050__auto__){
var and__16050__auto____$1 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__16050__auto____$1)){
var and__16050__auto____$2 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__16050__auto____$2)){
var and__16050__auto____$3 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__16050__auto____$3)){
return d;
} else {
return and__16050__auto____$3;
}
} else {
return and__16050__auto____$2;
}
} else {
return and__16050__auto____$1;
}
} else {
return and__16050__auto__;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__4423__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351).cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.butlast.call(null,cljs.core.vec.call(null,path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path))),cljs.core.str("-"),cljs.core.str(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),path], null),cljs.core.inc);
});
if(typeof devcards.system.dev_trans !== 'undefined'){
} else {
devcards.system.dev_trans = (function (){var method_table__16957__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16958__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16959__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16960__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16961__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16961__auto__,method_table__16957__auto__,prefer_table__16958__auto__,method_cache__16959__auto__,cached_hierarchy__16960__auto__));
})();
}
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__32053,state){
var vec__32054 = p__32053;
var _ = cljs.core.nth.call(null,vec__32054,(0),null);
var map__32055 = cljs.core.nth.call(null,vec__32054,(1),null);
var map__32055__$1 = ((cljs.core.seq_QMARK_.call(null,map__32055))?cljs.core.apply.call(null,cljs.core.hash_map,map__32055):map__32055);
var path = cljs.core.get.call(null,map__32055__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__32055__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__32055__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision.call(null,state,path);
return devcards.system.register_collision.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",169174038),new_path),((function (position,new_path,vec__32054,_,map__32055,map__32055__$1,path,options,func){
return (function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new_path,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
});})(position,new_path,vec__32054,_,map__32055,map__32055__$1,path,options,func))
),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true,new cljs.core.Keyword(null,"padding","padding",1660304693),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true,new cljs.core.Keyword(null,"history","history",-247395220),false], null)], null);
if(typeof devcards.system.app_state !== 'undefined'){
} else {
devcards.system.app_state = cljs.core.atom.call(null,devcards.system.devcard_initial_data);
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__16062__auto__ = cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,path);
if(or__16062__auto__){
return or__16062__auto__;
} else {
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec.call(null,(cljs.core.truth_(devcards.system.valid_path_QMARK_.call(null,state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__32056,path){
var map__32058 = p__32056;
var map__32058__$1 = ((cljs.core.seq_QMARK_.call(null,map__32058))?cljs.core.apply.call(null,cljs.core.hash_map,map__32058):map__32058);
var state = map__32058__$1;
var current_path = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,cljs.core.conj.call(null,current_path,cljs.core.keyword.call(null,path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__32059,path){
var map__32061 = p__32059;
var map__32061__$1 = ((cljs.core.seq_QMARK_.call(null,map__32061))?cljs.core.apply.call(null,cljs.core.hash_map,map__32061):map__32061);
var state = map__32061__$1;
var current_path = cljs.core.get.call(null,map__32061__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var path__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,path));
if(cljs.core.not_EQ_.call(null,current_path,path__$1)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate.call(null,path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__16050__auto__ = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__16050__auto__)){
var and__16050__auto____$1 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__16050__auto____$1)){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__16050__auto____$1;
}
} else {
return and__16050__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_.call(null,devcards.system.current_page.call(null,state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page.call(null,state);
return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(state){
var cur = devcards.system.current_page.call(null,state);
return cljs.core.filter.call(null,cljs.core.comp.call(null,((function (cur){
return (function (p1__32062_SHARP_){
var and__16050__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__32062_SHARP_));
if(and__16050__auto__){
return devcards.system.devcard_QMARK_.call(null,p1__32062_SHARP_);
} else {
return and__16050__auto__;
}
});})(cur))
,cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__32063){
var map__32066 = p__32063;
var map__32066__$1 = ((cljs.core.seq_QMARK_.call(null,map__32066))?cljs.core.apply.call(null,cljs.core.hash_map,map__32066):map__32066);
var card = map__32066__$1;
var path = cljs.core.get.call(null,map__32066__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__32066__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__32066__$1,new cljs.core.Keyword(null,"func","func",-238706040));
return React.createElement("div",{"key": devcards.system.path__GT_unique_card_id.call(null,path)},(function (){var _STAR_devcard_data_STAR_32067 = devcards.system._STAR_devcard_data_STAR_;
devcards.system._STAR_devcard_data_STAR_ = card;

return sablono.interpreter.interpret.call(null,(function (){try{return func.call(null);
}finally {devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR_32067;
}})());
})());
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))){
return devcards.system.card_template.call(null,state_atom,devcards.system.current_page.call(null,data));
} else {
return devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,data),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__32068){
var map__32070 = p__32068;
var map__32070__$1 = ((cljs.core.seq_QMARK_.call(null,map__32070))?cljs.core.apply.call(null,cljs.core.hash_map,map__32070):map__32070);
var state = map__32070__$1;
var current_path = cljs.core.get.call(null,map__32070__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"home","home",-74557309),current_path));
var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,((function (cpath,map__32070,map__32070__$1,state,current_path){
return (function (i,v){
return cljs.core.subvec.call(null,v,(0),i);
});})(cpath,map__32070,map__32070__$1,state,current_path))
,cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + (1)),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var attrs32076 = cljs.core.interpose.call(null,React.createElement("span",{"className": "com-rigsomelight-devcards-breadcrumb-sep"},"/"),cljs.core.map.call(null,(function (p__32079){
var vec__32080 = p__32079;
var n = cljs.core.nth.call(null,vec__32080,(0),null);
var path = cljs.core.nth.call(null,vec__32080,(1),null);
return React.createElement("span",{"style": {"display": "inline-block"}},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (vec__32080,n,path){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,state_atom,path);
});})(vec__32080,n,path))
), "className": "com-rigsomelight-devcards_set-current-path"},sablono.interpreter.interpret.call(null,n)));
}),crumbs));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs32076))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-card-base","com-rigsomelight-devcards-breadcrumbs"], null)], null),attrs32076)):{"className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32076))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32076)], null))));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_.call(null,dirs)){
return null;
} else {
var attrs32086 = cljs.core.map.call(null,(function (p__32087){
var vec__32088 = p__32087;
var key = cljs.core.nth.call(null,vec__32088,(0),null);
var child_tree = cljs.core.nth.call(null,vec__32088,(1),null);
return React.createElement("a",{"onClick": devcards.system.prevent__GT_.call(null,((function (vec__32088,key,child_tree){
return (function (e){
return cljs.core.swap_BANG_.call(null,state_atom,((function (vec__32088,key,child_tree){
return (function (s){
var new_s = devcards.system.add_to_current_path.call(null,s,key);
devcards.system.hash_navigate.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
});})(vec__32088,key,child_tree))
);
});})(vec__32088,key,child_tree))
), "className": "com-rigsomelight-devcards-list-group-item"},React.createElement("span",{"style": {"float": "right"}, "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,cljs.core.count.call(null,child_tree))),React.createElement("span",null," ",sablono.interpreter.interpret.call(null,cljs.core.name.call(null,key))));
}),cljs.core.sort_by.call(null,(function (p__32089){
var vec__32090 = p__32089;
var _ = cljs.core.nth.call(null,vec__32090,(0),null);
var child_tree = cljs.core.nth.call(null,vec__32090,(1),null);
return (- new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,child_tree))));
}),dirs));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs32086))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-card-base-no-pad"], null)], null),attrs32086)):{"className": "com-rigsomelight-devcards-card-base-no-pad"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32086))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32086)], null))));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base"},React.createElement("div",{"className": "com-rigsomelight-devcards-navbar"},React.createElement("div",{"className": "com-rigsomelight-devcards-container"},React.createElement("span",{"className": "com-rigsomelight-devcards-brand"},"(:devcards ClojureScript)"))),(function (){var attrs32098 = (function (){var temp__4425__auto__ = devcards.system.breadcrumbs.call(null,data);
if(cljs.core.truth_(temp__4425__auto__)){
var crumbs = temp__4425__auto__;
return devcards.system.breadcrumbs_templ.call(null,crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs32098))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs32098)):{"className": "com-rigsomelight-devcards-container"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32098))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs32099 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs32099))?sablono.interpreter.attributes.call(null,attrs32099):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32099))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32099)], null))));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32098),(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs32100 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs32100))?sablono.interpreter.attributes.call(null,attrs32100):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32100))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32100)], null))));
})()], null))));
})());
});
devcards.system.renderer = (function devcards$system$renderer(state_atom){
return React.render((function (){var attrs32102 = devcards.system.main_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs32102))?sablono.interpreter.attributes.call(null,attrs32102):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32102))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32102)], null))));
})(),devcards.system.devcards_app_node.call(null));
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.merge.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(new_state)));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,start_data,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"cards","cards",169174038));
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,initial_data){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,initial_data){
return (function (state_32221){
var state_val_32222 = (state_32221[(1)]);
if((state_val_32222 === (7))){
var inst_32217 = (state_32221[(2)]);
var state_32221__$1 = state_32221;
var statearr_32223_32253 = state_32221__$1;
(statearr_32223_32253[(2)] = inst_32217);

(statearr_32223_32253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (1))){
var inst_32178 = devcards.system.dev_trans.call(null,first_message,initial_data);
var inst_32179 = inst_32178;
var state_32221__$1 = (function (){var statearr_32224 = state_32221;
(statearr_32224[(7)] = inst_32179);

return statearr_32224;
})();
var statearr_32225_32254 = state_32221__$1;
(statearr_32225_32254[(2)] = null);

(statearr_32225_32254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (4))){
var inst_32186 = (state_32221[(8)]);
var inst_32186__$1 = (state_32221[(2)]);
var state_32221__$1 = (function (){var statearr_32226 = state_32221;
(statearr_32226[(8)] = inst_32186__$1);

return statearr_32226;
})();
if(cljs.core.truth_(inst_32186__$1)){
var statearr_32227_32255 = state_32221__$1;
(statearr_32227_32255[(1)] = (5));

} else {
var statearr_32228_32256 = state_32221__$1;
(statearr_32228_32256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (15))){
var state_32221__$1 = state_32221;
var statearr_32229_32257 = state_32221__$1;
(statearr_32229_32257[(2)] = null);

(statearr_32229_32257[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (13))){
var inst_32212 = (state_32221[(2)]);
var state_32221__$1 = state_32221;
var statearr_32230_32258 = state_32221__$1;
(statearr_32230_32258[(2)] = inst_32212);

(statearr_32230_32258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (6))){
var state_32221__$1 = state_32221;
var statearr_32231_32259 = state_32221__$1;
(statearr_32231_32259[(2)] = null);

(statearr_32231_32259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (3))){
var inst_32219 = (state_32221[(2)]);
var state_32221__$1 = state_32221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32221__$1,inst_32219);
} else {
if((state_val_32222 === (12))){
var state_32221__$1 = state_32221;
var statearr_32232_32260 = state_32221__$1;
(statearr_32232_32260[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (2))){
var inst_32181 = (state_32221[(9)]);
var inst_32181__$1 = cljs.core.async.timeout.call(null,(500));
var inst_32182 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32183 = [channel,inst_32181__$1];
var inst_32184 = (new cljs.core.PersistentVector(null,2,(5),inst_32182,inst_32183,null));
var state_32221__$1 = (function (){var statearr_32234 = state_32221;
(statearr_32234[(9)] = inst_32181__$1);

return statearr_32234;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32221__$1,(4),inst_32184);
} else {
if((state_val_32222 === (11))){
var inst_32179 = (state_32221[(7)]);
var inst_32200 = devcards.system.merge_in_new_data.call(null,start_data,inst_32179);
var state_32221__$1 = state_32221;
var statearr_32235_32261 = state_32221__$1;
(statearr_32235_32261[(2)] = inst_32200);

(statearr_32235_32261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (9))){
var inst_32191 = (state_32221[(10)]);
var inst_32198 = cljs.core._EQ_.call(null,inst_32191,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_32221__$1 = state_32221;
if(inst_32198){
var statearr_32236_32262 = state_32221__$1;
(statearr_32236_32262[(1)] = (11));

} else {
var statearr_32237_32263 = state_32221__$1;
(statearr_32237_32263[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (5))){
var inst_32181 = (state_32221[(9)]);
var inst_32186 = (state_32221[(8)]);
var inst_32190 = cljs.core.nth.call(null,inst_32186,(0),null);
var inst_32191 = cljs.core.nth.call(null,inst_32190,(0),null);
var inst_32192 = cljs.core.nth.call(null,inst_32190,(1),null);
var inst_32193 = cljs.core.nth.call(null,inst_32186,(1),null);
var inst_32194 = cljs.core._EQ_.call(null,inst_32193,inst_32181);
var state_32221__$1 = (function (){var statearr_32238 = state_32221;
(statearr_32238[(10)] = inst_32191);

(statearr_32238[(11)] = inst_32192);

return statearr_32238;
})();
if(inst_32194){
var statearr_32239_32264 = state_32221__$1;
(statearr_32239_32264[(1)] = (8));

} else {
var statearr_32240_32265 = state_32221__$1;
(statearr_32240_32265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (14))){
var inst_32191 = (state_32221[(10)]);
var inst_32192 = (state_32221[(11)]);
var inst_32179 = (state_32221[(7)]);
var inst_32203 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32204 = [inst_32191,inst_32192];
var inst_32205 = (new cljs.core.PersistentVector(null,2,(5),inst_32203,inst_32204,null));
var inst_32206 = devcards.system.dev_trans.call(null,inst_32205,inst_32179);
var inst_32179__$1 = inst_32206;
var state_32221__$1 = (function (){var statearr_32241 = state_32221;
(statearr_32241[(7)] = inst_32179__$1);

return statearr_32241;
})();
var statearr_32242_32266 = state_32221__$1;
(statearr_32242_32266[(2)] = null);

(statearr_32242_32266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (16))){
var inst_32210 = (state_32221[(2)]);
var state_32221__$1 = state_32221;
var statearr_32243_32267 = state_32221__$1;
(statearr_32243_32267[(2)] = inst_32210);

(statearr_32243_32267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (10))){
var inst_32214 = (state_32221[(2)]);
var state_32221__$1 = state_32221;
var statearr_32244_32268 = state_32221__$1;
(statearr_32244_32268[(2)] = inst_32214);

(statearr_32244_32268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32222 === (8))){
var inst_32179 = (state_32221[(7)]);
var inst_32196 = devcards.system.merge_in_new_data.call(null,start_data,inst_32179);
var state_32221__$1 = state_32221;
var statearr_32245_32269 = state_32221__$1;
(statearr_32245_32269[(2)] = inst_32196);

(statearr_32245_32269[(1)] = (10));


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
});})(c__19818__auto__,initial_data))
;
return ((function (switch__19756__auto__,c__19818__auto__,initial_data){
return (function() {
var devcards$system$off_the_books_$_state_machine__19757__auto__ = null;
var devcards$system$off_the_books_$_state_machine__19757__auto____0 = (function (){
var statearr_32249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32249[(0)] = devcards$system$off_the_books_$_state_machine__19757__auto__);

(statearr_32249[(1)] = (1));

return statearr_32249;
});
var devcards$system$off_the_books_$_state_machine__19757__auto____1 = (function (state_32221){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_32221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e32250){if((e32250 instanceof Object)){
var ex__19760__auto__ = e32250;
var statearr_32251_32270 = state_32221;
(statearr_32251_32270[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32271 = state_32221;
state_32221 = G__32271;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__19757__auto__ = function(state_32221){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__19757__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__19757__auto____1.call(this,state_32221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__19757__auto____0;
devcards$system$off_the_books_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__19757__auto____1;
return devcards$system$off_the_books_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,initial_data))
})();
var state__19820__auto__ = (function (){var statearr_32252 = f__19819__auto__.call(null);
(statearr_32252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_32252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__,initial_data))
);

return c__19818__auto__;
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if(typeof devcards.system.devcards_ui_setup !== 'undefined'){
return null;
} else {
devcards.system.devcards_ui_setup = (function (){
devcards.system.render_base_if_necessary_BANG_.call(null);

var c__19818__auto___32364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___32364){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___32364){
return (function (state_32346){
var state_val_32347 = (state_32346[(1)]);
if((state_val_32347 === (1))){
var inst_32318 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_32319 = cljs.core.PersistentVector.EMPTY;
var inst_32320 = devcards.system.off_the_books.call(null,channel,inst_32318,inst_32319);
var state_32346__$1 = state_32346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32346__$1,(2),inst_32320);
} else {
if((state_val_32347 === (2))){
var inst_32322 = (state_32346[(2)]);
var inst_32323 = cljs.core.reset_BANG_.call(null,devcards.system.app_state,inst_32322);
var inst_32324 = devcards.system.hash_routing_init.call(null,devcards.system.app_state);
var inst_32325 = (function (){return ((function (inst_32322,inst_32323,inst_32324,state_val_32347,c__19818__auto___32364){
return (function (){
return devcards.system.renderer.call(null,devcards.system.app_state);
});
;})(inst_32322,inst_32323,inst_32324,state_val_32347,c__19818__auto___32364))
})();
var inst_32326 = setTimeout(inst_32325,(0));
var inst_32327 = (function (){return ((function (inst_32322,inst_32323,inst_32324,inst_32325,inst_32326,state_val_32347,c__19818__auto___32364){
return (function (){
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),((function (inst_32322,inst_32323,inst_32324,inst_32325,inst_32326,state_val_32347,c__19818__auto___32364){
return (function (_,___$1,___$2,___$3){
return devcards.system.renderer.call(null,devcards.system.app_state);
});})(inst_32322,inst_32323,inst_32324,inst_32325,inst_32326,state_val_32347,c__19818__auto___32364))
);
});
;})(inst_32322,inst_32323,inst_32324,inst_32325,inst_32326,state_val_32347,c__19818__auto___32364))
})();
var inst_32328 = setTimeout(inst_32327,(0));
var state_32346__$1 = (function (){var statearr_32348 = state_32346;
(statearr_32348[(7)] = inst_32328);

(statearr_32348[(8)] = inst_32326);

(statearr_32348[(9)] = inst_32324);

(statearr_32348[(10)] = inst_32323);

return statearr_32348;
})();
var statearr_32349_32365 = state_32346__$1;
(statearr_32349_32365[(2)] = null);

(statearr_32349_32365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32347 === (3))){
var state_32346__$1 = state_32346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32346__$1,(5),channel);
} else {
if((state_val_32347 === (4))){
var inst_32344 = (state_32346[(2)]);
var state_32346__$1 = state_32346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32346__$1,inst_32344);
} else {
if((state_val_32347 === (5))){
var inst_32331 = (state_32346[(11)]);
var inst_32331__$1 = (state_32346[(2)]);
var state_32346__$1 = (function (){var statearr_32350 = state_32346;
(statearr_32350[(11)] = inst_32331__$1);

return statearr_32350;
})();
if(cljs.core.truth_(inst_32331__$1)){
var statearr_32351_32366 = state_32346__$1;
(statearr_32351_32366[(1)] = (6));

} else {
var statearr_32352_32367 = state_32346__$1;
(statearr_32352_32367[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32347 === (6))){
var inst_32331 = (state_32346[(11)]);
var inst_32333 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_32334 = devcards.system.off_the_books.call(null,channel,inst_32333,inst_32331);
var state_32346__$1 = state_32346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32346__$1,(9),inst_32334);
} else {
if((state_val_32347 === (7))){
var state_32346__$1 = state_32346;
var statearr_32353_32368 = state_32346__$1;
(statearr_32353_32368[(2)] = null);

(statearr_32353_32368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32347 === (8))){
var inst_32342 = (state_32346[(2)]);
var state_32346__$1 = state_32346;
var statearr_32354_32369 = state_32346__$1;
(statearr_32354_32369[(2)] = inst_32342);

(statearr_32354_32369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32347 === (9))){
var inst_32331 = (state_32346[(11)]);
var inst_32336 = (state_32346[(2)]);
var inst_32337 = (function (){var temp__4425__auto__ = inst_32331;
var v = inst_32331;
var new_state = inst_32336;
return ((function (temp__4425__auto__,v,new_state,inst_32331,inst_32336,state_val_32347,c__19818__auto___32364){
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
;})(temp__4425__auto__,v,new_state,inst_32331,inst_32336,state_val_32347,c__19818__auto___32364))
})();
var inst_32338 = setTimeout(inst_32337,(0));
var state_32346__$1 = (function (){var statearr_32355 = state_32346;
(statearr_32355[(12)] = inst_32338);

return statearr_32355;
})();
var statearr_32356_32370 = state_32346__$1;
(statearr_32356_32370[(2)] = null);

(statearr_32356_32370[(1)] = (3));


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
});})(c__19818__auto___32364))
;
return ((function (switch__19756__auto__,c__19818__auto___32364){
return (function() {
var devcards$system$start_ui_$_state_machine__19757__auto__ = null;
var devcards$system$start_ui_$_state_machine__19757__auto____0 = (function (){
var statearr_32360 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32360[(0)] = devcards$system$start_ui_$_state_machine__19757__auto__);

(statearr_32360[(1)] = (1));

return statearr_32360;
});
var devcards$system$start_ui_$_state_machine__19757__auto____1 = (function (state_32346){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_32346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e32361){if((e32361 instanceof Object)){
var ex__19760__auto__ = e32361;
var statearr_32362_32371 = state_32346;
(statearr_32362_32371[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32372 = state_32346;
state_32346 = G__32372;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__19757__auto__ = function(state_32346){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__19757__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__19757__auto____1.call(this,state_32346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__19757__auto____0;
devcards$system$start_ui_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__19757__auto____1;
return devcards$system$start_ui_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___32364))
})();
var state__19820__auto__ = (function (){var statearr_32363 = f__19819__auto__.call(null);
(statearr_32363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___32364);

return statearr_32363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___32364))
);


return true;
})()
;
}
});

//# sourceMappingURL=system.js.map?rel=1436385347423