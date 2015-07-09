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
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__67643_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,p1__67643_SHARP_.token));
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
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__67644,state){
var vec__67645 = p__67644;
var _ = cljs.core.nth.call(null,vec__67645,(0),null);
var map__67646 = cljs.core.nth.call(null,vec__67645,(1),null);
var map__67646__$1 = ((cljs.core.seq_QMARK_.call(null,map__67646))?cljs.core.apply.call(null,cljs.core.hash_map,map__67646):map__67646);
var path = cljs.core.get.call(null,map__67646__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__67646__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__67646__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision.call(null,state,path);
return devcards.system.register_collision.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",169174038),new_path),((function (position,new_path,vec__67645,_,map__67646,map__67646__$1,path,options,func){
return (function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new_path,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
});})(position,new_path,vec__67645,_,map__67646,map__67646__$1,path,options,func))
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
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__67647,path){
var map__67649 = p__67647;
var map__67649__$1 = ((cljs.core.seq_QMARK_.call(null,map__67649))?cljs.core.apply.call(null,cljs.core.hash_map,map__67649):map__67649);
var state = map__67649__$1;
var current_path = cljs.core.get.call(null,map__67649__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,cljs.core.conj.call(null,current_path,cljs.core.keyword.call(null,path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__67650,path){
var map__67652 = p__67650;
var map__67652__$1 = ((cljs.core.seq_QMARK_.call(null,map__67652))?cljs.core.apply.call(null,cljs.core.hash_map,map__67652):map__67652);
var state = map__67652__$1;
var current_path = cljs.core.get.call(null,map__67652__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
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
return (function (p1__67653_SHARP_){
var and__16050__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__67653_SHARP_));
if(and__16050__auto__){
return devcards.system.devcard_QMARK_.call(null,p1__67653_SHARP_);
} else {
return and__16050__auto__;
}
});})(cur))
,cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__67654){
var map__67657 = p__67654;
var map__67657__$1 = ((cljs.core.seq_QMARK_.call(null,map__67657))?cljs.core.apply.call(null,cljs.core.hash_map,map__67657):map__67657);
var card = map__67657__$1;
var path = cljs.core.get.call(null,map__67657__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__67657__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__67657__$1,new cljs.core.Keyword(null,"func","func",-238706040));
return React.createElement("div",{"key": devcards.system.path__GT_unique_card_id.call(null,path)},(function (){var _STAR_devcard_data_STAR_67658 = devcards.system._STAR_devcard_data_STAR_;
devcards.system._STAR_devcard_data_STAR_ = card;

return sablono.interpreter.interpret.call(null,(function (){try{return func.call(null);
}finally {devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR_67658;
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
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__67659){
var map__67661 = p__67659;
var map__67661__$1 = ((cljs.core.seq_QMARK_.call(null,map__67661))?cljs.core.apply.call(null,cljs.core.hash_map,map__67661):map__67661);
var state = map__67661__$1;
var current_path = cljs.core.get.call(null,map__67661__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"home","home",-74557309),current_path));
var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,((function (cpath,map__67661,map__67661__$1,state,current_path){
return (function (i,v){
return cljs.core.subvec.call(null,v,(0),i);
});})(cpath,map__67661,map__67661__$1,state,current_path))
,cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + (1)),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var attrs67667 = cljs.core.interpose.call(null,React.createElement("span",{"className": "com-rigsomelight-devcards-breadcrumb-sep"},"/"),cljs.core.map.call(null,(function (p__67670){
var vec__67671 = p__67670;
var n = cljs.core.nth.call(null,vec__67671,(0),null);
var path = cljs.core.nth.call(null,vec__67671,(1),null);
return React.createElement("span",{"style": {"display": "inline-block"}},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (vec__67671,n,path){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,state_atom,path);
});})(vec__67671,n,path))
), "onTouchStart": devcards.system.prevent__GT_.call(null,((function (vec__67671,n,path){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,state_atom,path);
});})(vec__67671,n,path))
), "className": "com-rigsomelight-devcards_set-current-path"},sablono.interpreter.interpret.call(null,n)));
}),crumbs));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs67667))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-card-base","com-rigsomelight-devcards-breadcrumbs"], null)], null),attrs67667)):{"className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs67667))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs67667)], null))));
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.call(null,state_atom,(function (s){
var new_s = devcards.system.add_to_current_path.call(null,s,key);
devcards.system.hash_navigate.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_.call(null,dirs)){
return null;
} else {
var attrs67677 = cljs.core.map.call(null,(function (p__67678){
var vec__67679 = p__67678;
var key = cljs.core.nth.call(null,vec__67679,(0),null);
var child_tree = cljs.core.nth.call(null,vec__67679,(1),null);
return React.createElement("a",{"onClick": devcards.system.prevent__GT_.call(null,((function (vec__67679,key,child_tree){
return (function (e){
return devcards.system.navigate_to_path.call(null,key,state_atom);
});})(vec__67679,key,child_tree))
), "onTouchStart": devcards.system.prevent__GT_.call(null,((function (vec__67679,key,child_tree){
return (function (e){
return devcards.system.navigate_to_path.call(null,key,state_atom);
});})(vec__67679,key,child_tree))
), "className": "com-rigsomelight-devcards-list-group-item"},React.createElement("span",{"style": {"float": "right"}, "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,cljs.core.count.call(null,child_tree))),React.createElement("span",null," ",sablono.interpreter.interpret.call(null,cljs.core.name.call(null,key))));
}),cljs.core.sort_by.call(null,(function (p__67680){
var vec__67681 = p__67680;
var _ = cljs.core.nth.call(null,vec__67681,(0),null);
var child_tree = cljs.core.nth.call(null,vec__67681,(1),null);
return (- new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,child_tree))));
}),dirs));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs67677))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-card-base-no-pad"], null)], null),attrs67677)):{"className": "com-rigsomelight-devcards-card-base-no-pad"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs67677))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs67677)], null))));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base"},React.createElement("div",{"className": "com-rigsomelight-devcards-navbar"},React.createElement("div",{"className": "com-rigsomelight-devcards-container"},React.createElement("span",{"className": "com-rigsomelight-devcards-brand"},"(:devcards ClojureScript)"))),(function (){var attrs67689 = (function (){var temp__4425__auto__ = devcards.system.breadcrumbs.call(null,data);
if(cljs.core.truth_(temp__4425__auto__)){
var crumbs = temp__4425__auto__;
return devcards.system.breadcrumbs_templ.call(null,crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs67689))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs67689)):{"className": "com-rigsomelight-devcards-container"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs67689))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs67690 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs67690))?sablono.interpreter.attributes.call(null,attrs67690):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs67690))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs67690)], null))));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs67689),(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs67691 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs67691))?sablono.interpreter.attributes.call(null,attrs67691):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs67691))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs67691)], null))));
})()], null))));
})());
});
devcards.system.renderer = (function devcards$system$renderer(state_atom){
return React.render((function (){var attrs67693 = devcards.system.main_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs67693))?sablono.interpreter.attributes.call(null,attrs67693):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs67693))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs67693)], null))));
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
return (function (state_67812){
var state_val_67813 = (state_67812[(1)]);
if((state_val_67813 === (7))){
var inst_67808 = (state_67812[(2)]);
var state_67812__$1 = state_67812;
var statearr_67814_67844 = state_67812__$1;
(statearr_67814_67844[(2)] = inst_67808);

(statearr_67814_67844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (1))){
var inst_67769 = devcards.system.dev_trans.call(null,first_message,initial_data);
var inst_67770 = inst_67769;
var state_67812__$1 = (function (){var statearr_67815 = state_67812;
(statearr_67815[(7)] = inst_67770);

return statearr_67815;
})();
var statearr_67816_67845 = state_67812__$1;
(statearr_67816_67845[(2)] = null);

(statearr_67816_67845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (4))){
var inst_67777 = (state_67812[(8)]);
var inst_67777__$1 = (state_67812[(2)]);
var state_67812__$1 = (function (){var statearr_67817 = state_67812;
(statearr_67817[(8)] = inst_67777__$1);

return statearr_67817;
})();
if(cljs.core.truth_(inst_67777__$1)){
var statearr_67818_67846 = state_67812__$1;
(statearr_67818_67846[(1)] = (5));

} else {
var statearr_67819_67847 = state_67812__$1;
(statearr_67819_67847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (15))){
var state_67812__$1 = state_67812;
var statearr_67820_67848 = state_67812__$1;
(statearr_67820_67848[(2)] = null);

(statearr_67820_67848[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (13))){
var inst_67803 = (state_67812[(2)]);
var state_67812__$1 = state_67812;
var statearr_67821_67849 = state_67812__$1;
(statearr_67821_67849[(2)] = inst_67803);

(statearr_67821_67849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (6))){
var state_67812__$1 = state_67812;
var statearr_67822_67850 = state_67812__$1;
(statearr_67822_67850[(2)] = null);

(statearr_67822_67850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (3))){
var inst_67810 = (state_67812[(2)]);
var state_67812__$1 = state_67812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67812__$1,inst_67810);
} else {
if((state_val_67813 === (12))){
var state_67812__$1 = state_67812;
var statearr_67823_67851 = state_67812__$1;
(statearr_67823_67851[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (2))){
var inst_67772 = (state_67812[(9)]);
var inst_67772__$1 = cljs.core.async.timeout.call(null,(500));
var inst_67773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67774 = [channel,inst_67772__$1];
var inst_67775 = (new cljs.core.PersistentVector(null,2,(5),inst_67773,inst_67774,null));
var state_67812__$1 = (function (){var statearr_67825 = state_67812;
(statearr_67825[(9)] = inst_67772__$1);

return statearr_67825;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_67812__$1,(4),inst_67775);
} else {
if((state_val_67813 === (11))){
var inst_67770 = (state_67812[(7)]);
var inst_67791 = devcards.system.merge_in_new_data.call(null,start_data,inst_67770);
var state_67812__$1 = state_67812;
var statearr_67826_67852 = state_67812__$1;
(statearr_67826_67852[(2)] = inst_67791);

(statearr_67826_67852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (9))){
var inst_67782 = (state_67812[(10)]);
var inst_67789 = cljs.core._EQ_.call(null,inst_67782,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_67812__$1 = state_67812;
if(inst_67789){
var statearr_67827_67853 = state_67812__$1;
(statearr_67827_67853[(1)] = (11));

} else {
var statearr_67828_67854 = state_67812__$1;
(statearr_67828_67854[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (5))){
var inst_67772 = (state_67812[(9)]);
var inst_67777 = (state_67812[(8)]);
var inst_67781 = cljs.core.nth.call(null,inst_67777,(0),null);
var inst_67782 = cljs.core.nth.call(null,inst_67781,(0),null);
var inst_67783 = cljs.core.nth.call(null,inst_67781,(1),null);
var inst_67784 = cljs.core.nth.call(null,inst_67777,(1),null);
var inst_67785 = cljs.core._EQ_.call(null,inst_67784,inst_67772);
var state_67812__$1 = (function (){var statearr_67829 = state_67812;
(statearr_67829[(10)] = inst_67782);

(statearr_67829[(11)] = inst_67783);

return statearr_67829;
})();
if(inst_67785){
var statearr_67830_67855 = state_67812__$1;
(statearr_67830_67855[(1)] = (8));

} else {
var statearr_67831_67856 = state_67812__$1;
(statearr_67831_67856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (14))){
var inst_67782 = (state_67812[(10)]);
var inst_67770 = (state_67812[(7)]);
var inst_67783 = (state_67812[(11)]);
var inst_67794 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67795 = [inst_67782,inst_67783];
var inst_67796 = (new cljs.core.PersistentVector(null,2,(5),inst_67794,inst_67795,null));
var inst_67797 = devcards.system.dev_trans.call(null,inst_67796,inst_67770);
var inst_67770__$1 = inst_67797;
var state_67812__$1 = (function (){var statearr_67832 = state_67812;
(statearr_67832[(7)] = inst_67770__$1);

return statearr_67832;
})();
var statearr_67833_67857 = state_67812__$1;
(statearr_67833_67857[(2)] = null);

(statearr_67833_67857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (16))){
var inst_67801 = (state_67812[(2)]);
var state_67812__$1 = state_67812;
var statearr_67834_67858 = state_67812__$1;
(statearr_67834_67858[(2)] = inst_67801);

(statearr_67834_67858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (10))){
var inst_67805 = (state_67812[(2)]);
var state_67812__$1 = state_67812;
var statearr_67835_67859 = state_67812__$1;
(statearr_67835_67859[(2)] = inst_67805);

(statearr_67835_67859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67813 === (8))){
var inst_67770 = (state_67812[(7)]);
var inst_67787 = devcards.system.merge_in_new_data.call(null,start_data,inst_67770);
var state_67812__$1 = state_67812;
var statearr_67836_67860 = state_67812__$1;
(statearr_67836_67860[(2)] = inst_67787);

(statearr_67836_67860[(1)] = (10));


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
var statearr_67840 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67840[(0)] = devcards$system$off_the_books_$_state_machine__19757__auto__);

(statearr_67840[(1)] = (1));

return statearr_67840;
});
var devcards$system$off_the_books_$_state_machine__19757__auto____1 = (function (state_67812){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_67812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e67841){if((e67841 instanceof Object)){
var ex__19760__auto__ = e67841;
var statearr_67842_67861 = state_67812;
(statearr_67842_67861[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67862 = state_67812;
state_67812 = G__67862;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__19757__auto__ = function(state_67812){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__19757__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__19757__auto____1.call(this,state_67812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__19757__auto____0;
devcards$system$off_the_books_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__19757__auto____1;
return devcards$system$off_the_books_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,initial_data))
})();
var state__19820__auto__ = (function (){var statearr_67843 = f__19819__auto__.call(null);
(statearr_67843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_67843;
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
React.initializeTouchEvents(true);

devcards.system.render_base_if_necessary_BANG_.call(null);

var c__19818__auto___67955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___67955){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___67955){
return (function (state_67937){
var state_val_67938 = (state_67937[(1)]);
if((state_val_67938 === (1))){
var inst_67909 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_67910 = cljs.core.PersistentVector.EMPTY;
var inst_67911 = devcards.system.off_the_books.call(null,channel,inst_67909,inst_67910);
var state_67937__$1 = state_67937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67937__$1,(2),inst_67911);
} else {
if((state_val_67938 === (2))){
var inst_67913 = (state_67937[(2)]);
var inst_67914 = cljs.core.reset_BANG_.call(null,devcards.system.app_state,inst_67913);
var inst_67915 = devcards.system.hash_routing_init.call(null,devcards.system.app_state);
var inst_67916 = (function (){return ((function (inst_67913,inst_67914,inst_67915,state_val_67938,c__19818__auto___67955){
return (function (){
return devcards.system.renderer.call(null,devcards.system.app_state);
});
;})(inst_67913,inst_67914,inst_67915,state_val_67938,c__19818__auto___67955))
})();
var inst_67917 = setTimeout(inst_67916,(0));
var inst_67918 = (function (){return ((function (inst_67913,inst_67914,inst_67915,inst_67916,inst_67917,state_val_67938,c__19818__auto___67955){
return (function (){
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),((function (inst_67913,inst_67914,inst_67915,inst_67916,inst_67917,state_val_67938,c__19818__auto___67955){
return (function (_,___$1,___$2,___$3){
return devcards.system.renderer.call(null,devcards.system.app_state);
});})(inst_67913,inst_67914,inst_67915,inst_67916,inst_67917,state_val_67938,c__19818__auto___67955))
);
});
;})(inst_67913,inst_67914,inst_67915,inst_67916,inst_67917,state_val_67938,c__19818__auto___67955))
})();
var inst_67919 = setTimeout(inst_67918,(0));
var state_67937__$1 = (function (){var statearr_67939 = state_67937;
(statearr_67939[(7)] = inst_67915);

(statearr_67939[(8)] = inst_67917);

(statearr_67939[(9)] = inst_67914);

(statearr_67939[(10)] = inst_67919);

return statearr_67939;
})();
var statearr_67940_67956 = state_67937__$1;
(statearr_67940_67956[(2)] = null);

(statearr_67940_67956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67938 === (3))){
var state_67937__$1 = state_67937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67937__$1,(5),channel);
} else {
if((state_val_67938 === (4))){
var inst_67935 = (state_67937[(2)]);
var state_67937__$1 = state_67937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67937__$1,inst_67935);
} else {
if((state_val_67938 === (5))){
var inst_67922 = (state_67937[(11)]);
var inst_67922__$1 = (state_67937[(2)]);
var state_67937__$1 = (function (){var statearr_67941 = state_67937;
(statearr_67941[(11)] = inst_67922__$1);

return statearr_67941;
})();
if(cljs.core.truth_(inst_67922__$1)){
var statearr_67942_67957 = state_67937__$1;
(statearr_67942_67957[(1)] = (6));

} else {
var statearr_67943_67958 = state_67937__$1;
(statearr_67943_67958[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67938 === (6))){
var inst_67922 = (state_67937[(11)]);
var inst_67924 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_67925 = devcards.system.off_the_books.call(null,channel,inst_67924,inst_67922);
var state_67937__$1 = state_67937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67937__$1,(9),inst_67925);
} else {
if((state_val_67938 === (7))){
var state_67937__$1 = state_67937;
var statearr_67944_67959 = state_67937__$1;
(statearr_67944_67959[(2)] = null);

(statearr_67944_67959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67938 === (8))){
var inst_67933 = (state_67937[(2)]);
var state_67937__$1 = state_67937;
var statearr_67945_67960 = state_67937__$1;
(statearr_67945_67960[(2)] = inst_67933);

(statearr_67945_67960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67938 === (9))){
var inst_67922 = (state_67937[(11)]);
var inst_67927 = (state_67937[(2)]);
var inst_67928 = (function (){var temp__4425__auto__ = inst_67922;
var v = inst_67922;
var new_state = inst_67927;
return ((function (temp__4425__auto__,v,new_state,inst_67922,inst_67927,state_val_67938,c__19818__auto___67955){
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
;})(temp__4425__auto__,v,new_state,inst_67922,inst_67927,state_val_67938,c__19818__auto___67955))
})();
var inst_67929 = setTimeout(inst_67928,(0));
var state_67937__$1 = (function (){var statearr_67946 = state_67937;
(statearr_67946[(12)] = inst_67929);

return statearr_67946;
})();
var statearr_67947_67961 = state_67937__$1;
(statearr_67947_67961[(2)] = null);

(statearr_67947_67961[(1)] = (3));


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
});})(c__19818__auto___67955))
;
return ((function (switch__19756__auto__,c__19818__auto___67955){
return (function() {
var devcards$system$start_ui_$_state_machine__19757__auto__ = null;
var devcards$system$start_ui_$_state_machine__19757__auto____0 = (function (){
var statearr_67951 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67951[(0)] = devcards$system$start_ui_$_state_machine__19757__auto__);

(statearr_67951[(1)] = (1));

return statearr_67951;
});
var devcards$system$start_ui_$_state_machine__19757__auto____1 = (function (state_67937){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_67937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e67952){if((e67952 instanceof Object)){
var ex__19760__auto__ = e67952;
var statearr_67953_67962 = state_67937;
(statearr_67953_67962[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67963 = state_67937;
state_67937 = G__67963;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__19757__auto__ = function(state_67937){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__19757__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__19757__auto____1.call(this,state_67937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__19757__auto____0;
devcards$system$start_ui_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__19757__auto____1;
return devcards$system$start_ui_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___67955))
})();
var state__19820__auto__ = (function (){var statearr_67954 = f__19819__auto__.call(null);
(statearr_67954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___67955);

return statearr_67954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___67955))
);


return true;
})()
;
}
});

//# sourceMappingURL=system.js.map