// Compiled by ClojureScript 0.0-3269 {}
goog.provide('devdemos.defcard_api');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('om.core');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"#It all starts with `defcard`\n   `defcard` is a multipurpose macro.\n   \n   The first optional argument is a symbol to *name* the card. This\n   symbol will show up as the heading of a card.",[cljs.core.str("\n```\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defcard","defcard",694489851,null),new cljs.core.Symbol(null,"first-example","first-example",596986044,null)))),cljs.core.str("```\n")].join(''),"This creates the following card:"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"first-example","first-example",-1043545483)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"first-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"### Optional markdown doc\n\n  You can also add an optional markdown documentation to your card.",[cljs.core.str("\n```\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defcard","defcard",694489851,null),new cljs.core.Symbol(null,"example-2","example-2",-778721963,null),"## Example: This is optional markdown"))),cljs.core.str("```\n")].join(''),"Which creates the following card:"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"example-2","example-2",1875713806)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"example-2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"## Example: This is optional markdown",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"Since the name is optional you can write docs just like this:",[cljs.core.str("\n```\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defcard","defcard",694489851,null),"## Example: This is quick documentation."))),cljs.core.str("```\n")].join(''),"Which creates the following card:"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"## Example: This is quick documentation.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## The object of our attention \n   \n   The main object that we are displaying comes after the optional\n   **name** and **documentation**.\n\n   This main object can be either a ReactElement of a function that\n   returns a ReactElement.\n\n   For example this is valid:",[cljs.core.str("\n```\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defcard","defcard",694489851,null),new cljs.core.Symbol(null,"react-example","react-example",-97995475,null),cljs.core.list(new cljs.core.Symbol("sab","html","sab/html",642665234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Example: Rendering a ReactElement"], null))))),cljs.core.str("```\n")].join(''),"Above we simply passed a React Element created by `sablono` to `defcard` \n  and it gets rendered as the following card:"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"react-example","react-example",-1738527002)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"react-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("h3",null,"Example: Rendering a ReactElement"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"### The function parameter:\n   \n  Instead of a ReactElement you can provide a function the takes two\n  parameters and returns a ReactElement like so:",[cljs.core.str("\n```\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defcard","defcard",694489851,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null),cljs.core.list(new cljs.core.Symbol("sab","html","sab/html",642665234,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Example: fn that returns React"], null),cljs.core.list(new cljs.core.Symbol(null,"prn-str","prn-str",-145225943,null),new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null))], null)))))),cljs.core.str("```\n")].join(''),"In this example the `owner` is the enclosing cards ReactElement and\n  the `data-atom` is a ClojureScript Atom."),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,owner){
return React.createElement("div",null,React.createElement("h3",null,"Example: fn that returns React"),sablono.interpreter.interpret.call(null,cljs.core.prn_str.call(null,data_atom)));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"If `data-atom` in the above example changes then the card will be re-rendered.\n  \n   Let's make a quick example counter:",[cljs.core.str("\n```\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defcard","defcard",694489851,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null),cljs.core.list(new cljs.core.Symbol("sab","html","sab/html",642665234,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Example Counter: ",cljs.core.list(new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null),new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Symbol(null,"inc","inc",324505433,null)))], null),"inc"], null)], null)))))),cljs.core.str("```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,owner){
return React.createElement("div",null,React.createElement("h3",null,"Example Counter: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom)))),React.createElement("button",{"onClick": (function (){
return cljs.core.swap_BANG_.call(null,data_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
})},"inc"));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Initial state\n\n  The counter example above was very interesting but what if you want\n  to introduce some initial state?\n\n  Well the next option after the main object is the **initial-data**\n  parameter. You can use it like so:",[cljs.core.str("\n```\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defcard","defcard",694489851,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null),cljs.core.list(new cljs.core.Symbol("sab","html","sab/html",642665234,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Example Counter w/Initial Data: ",cljs.core.list(new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null),new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Symbol(null,"inc","inc",324505433,null)))], null),"inc"], null)], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(50)], null)))),cljs.core.str("```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,owner){
return React.createElement("div",null,React.createElement("h3",null,"Example Counter w/Initial Data: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom)))),React.createElement("button",{"onClick": (function (){
return cljs.core.swap_BANG_.call(null,data_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
})},"inc"));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(50)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Initial state can be an Atom\n\n  You can also pass an Atom as the initial state. This is a very\n  important feature of devcards as it allows you to share state\n  between cards.\n\n  The following examples share state:",[cljs.core.str("\n```\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"first-example-state","first-example-state",-1092418570,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(55)], null))))),cljs.core.str("```\n")].join(''),[cljs.core.str("\n```\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defcard","defcard",694489851,null),new cljs.core.Symbol(null,"example-counter","example-counter",-1561321101,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null),cljs.core.list(new cljs.core.Symbol("sab","html","sab/html",642665234,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Example Counter w/Shared Initial Atom: ",cljs.core.list(new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null)))], null))),new cljs.core.Symbol(null,"first-example-state","first-example-state",-1092418570,null)))),cljs.core.str("```\n")].join(''),[cljs.core.str("\n```\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defcard","defcard",694489851,null),new cljs.core.Symbol(null,"example-incrementer","example-incrementer",-698031787,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null),cljs.core.list(new cljs.core.Symbol("sab","html","sab/html",642665234,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null),new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Symbol(null,"inc","inc",324505433,null)))], null),"increment"], null))),new cljs.core.Symbol(null,"first-example-state","first-example-state",-1092418570,null)))),cljs.core.str("```\n")].join(''),[cljs.core.str("\n```\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defcard","defcard",694489851,null),new cljs.core.Symbol(null,"example-decrementer","example-decrementer",-798035977,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null),cljs.core.list(new cljs.core.Symbol("sab","html","sab/html",642665234,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null),new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)))], null),"decrement"], null))),new cljs.core.Symbol(null,"first-example-state","first-example-state",-1092418570,null)))),cljs.core.str("```\n")].join(''),"As you can see, we created three cards that all share the same state.\n\n   If you try these example cards below you will see that they are all wired together:"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
if(typeof devdemos.defcard_api.first_example_state !== 'undefined'){
} else {
devdemos.defcard_api.first_example_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(55)], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"example-counter","example-counter",1093114668)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"example-counter",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,owner){
return React.createElement("h3",null,"Example Counter w/Shared Initial Atom: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom))));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),devdemos.defcard_api.first_example_state,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"example-incrementer","example-incrementer",1956403982)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"example-incrementer",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,owner){
return React.createElement("button",{"onClick": (function (){
return cljs.core.swap_BANG_.call(null,data_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
})},"increment");
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),devdemos.defcard_api.first_example_state,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"example-decrementer","example-decrementer",1856399792)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"example-decrementer",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,owner){
return React.createElement("button",{"onClick": (function (){
return cljs.core.swap_BANG_.call(null,data_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.dec);
})},"decrement");
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),devdemos.defcard_api.first_example_state,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Accessing the DOM with `dom-node`\n\n   While Devcards was written in and are very easy to use in\n   conjunction with React. You may want to write something that writes\n   directly to the DOM.\n\n   The helper macro `dom-node` takes a function that accepts a DOM\n   node and ClojureScript Atom and returns a ReactElement.",[cljs.core.str("\n```\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defcard","defcard",694489851,null),new cljs.core.Symbol(null,"example-dom-node","example-dom-node",869463190,null),cljs.core.list(new cljs.core.Symbol(null,"dom-node","dom-node",2092815254,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-atom","data-atom",-1618867355,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),cljs.core.list(new cljs.core.Symbol(null,".-innerHTML",".-innerHTML",-2010735062,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)),"<h2>Example Dom Node</h2>")))))),cljs.core.str("```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"example-dom-node","example-dom-node",-771068337)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"example-dom-node",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (data_atom,node){
return node.innerHTML = "<h2>Example Dom Node</h2>";
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Devcard examples",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"edn-card-example","edn-card-example",-2051368946)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"edn-card-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn-card","edn-card",1689594071),"This is an edn card",new cljs.core.Keyword(null,"helpful?","helpful?",-1153571250),"It lets you quickly view EDN"], null),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"sablono-card-example","sablono-card-example",449487352)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"sablono-card-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,React.createElement("h2",null,"This is a Sablono card"),React.createElement("p",null,"It can help you interactively work on sablono templates like this one:"),React.createElement("pre",null,(function (){var attrs43594 = devcards.util.utils.pprint_str.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.devcard-padding","div.devcard-padding",-1468803870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"This is a Sablono card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It can help you interactively work on Sablono templates:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol(null,"format-code","format-code",952320057,null),new cljs.core.Symbol(null,"...","...",-1926939749,null))], null)], null)], null));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs43594))?sablono.interpreter.attributes.call(null,attrs43594):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43594))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43594)], null))));
})()),React.createElement("p",null,"You can create a sablono card like so:"),React.createElement("pre",null,(function (){var attrs43597 = devcards.util.utils.pprint_code.call(null,cljs.core.list(new cljs.core.Symbol(null,"defcard","defcard",694489851,null),new cljs.core.Symbol(null,"sablono-card-example","sablono-card-example",2090018879,null),cljs.core.list(new cljs.core.Symbol("sab","html","sab/html",642665234,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.devcard-padding","div.devcard-padding",-1468803870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"This is a Sablono card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It can help you interactively work on Sablono templates:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol(null,"format-code","format-code",952320057,null),new cljs.core.Symbol(null,"...","...",-1926939749,null))], null)], null)], null))));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs43597))?sablono.interpreter.attributes.call(null,attrs43597):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43597))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43597)], null))));
})()),React.createElement("h2",null,"Working on cards individually"),React.createElement("p",null,"You will notice that unlike the markdown cards, this card has a heading at the top: ",React.createElement("code",null,"sablono-card-example")),React.createElement("p",null,"You can click the heading on this card to get it on a page all to itself."," This can reduce the noise of having all the cards on one page.")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devdemos.defcard_api.counter_app_rct = (function devdemos$defcard_api$counter_app_rct(data_atom){
return React.createElement("div",null,React.createElement("div",null,"Count: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom)))),React.createElement("ul",null,React.createElement("li",null,React.createElement("a",{"onClick": (function (){
return cljs.core.swap_BANG_.call(null,data_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
})},"inc")),React.createElement("li",null,React.createElement("a",{"onClick": (function (){
return cljs.core.swap_BANG_.call(null,data_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.dec);
})},"dec"))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"react-runner-card-example","react-runner-card-example",-687082034)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"react-runner-card-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return React.createElement("div",null,React.createElement("h3",null,"This is a ","react-runner-card"),React.createElement("p",null,"This card triggers a re-render when it the atom is modified"),sablono.interpreter.interpret.call(null,devdemos.defcard_api.counter_app_rct.call(null,data_atom)));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(30)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"### Sharing an Atom\n\n If you pass an Atom as the `:initial-state` option to the\n `react-runner-card` that Atom will be directly used as the state\n atom instead of the Atom that is provided by the Devcards system.\n This allows you to share an Atom with several cards.\n\n If you interact with the counter below you will see the card\n after it respond to the counter changes."),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
if(typeof devdemos.defcard_api.react_shared_atom !== 'undefined'){
} else {
devdemos.defcard_api.react_shared_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(3)], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"react-runner-card-shared-1","react-runner-card-shared-1",-798579943)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"react-runner-card-shared-1",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return React.createElement("div",null,React.createElement("h3",null,"This counter is sharing state"),React.createElement("p",null,"The next card is sharing the same atom as this card."),sablono.interpreter.interpret.call(null,devdemos.defcard_api.counter_app_rct.call(null,data_atom)));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),devdemos.defcard_api.react_shared_atom,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"react-runner-card-shared-2","react-runner-card-shared-2",-1786774631)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"react-runner-card-shared-2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return React.createElement("h1",null,"Count: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom))));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),devdemos.defcard_api.react_shared_atom,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Om \n\n    The `om-root-card` will render Om components, much the way `om/root` does."),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devdemos.defcard_api.widget = (function devdemos$defcard_api$widget(data,owner){
if(typeof devdemos.defcard_api.t43615 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.defcard_api.t43615 = (function (widget,data,owner,meta43616){
this.widget = widget;
this.data = data;
this.owner = owner;
this.meta43616 = meta43616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.defcard_api.t43615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43617,meta43616__$1){
var self__ = this;
var _43617__$1 = this;
return (new devdemos.defcard_api.t43615(self__.widget,self__.data,self__.owner,meta43616__$1));
});

devdemos.defcard_api.t43615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43617){
var self__ = this;
var _43617__$1 = this;
return self__.meta43616;
});

devdemos.defcard_api.t43615.prototype.om$core$IRender$ = true;

devdemos.defcard_api.t43615.prototype.om$core$IRender$render$arity$1 = (function (this__24310__auto__){
var self__ = this;
var this__24310__auto____$1 = this;
return React.createElement("h2",null,"This is an om card, ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

devdemos.defcard_api.t43615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43616","meta43616",-664384267,null)], null);
});

devdemos.defcard_api.t43615.cljs$lang$type = true;

devdemos.defcard_api.t43615.cljs$lang$ctorStr = "devdemos.defcard-api/t43615";

devdemos.defcard_api.t43615.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.defcard-api/t43615");
});

devdemos.defcard_api.__GT_t43615 = (function devdemos$defcard_api$widget_$___GT_t43615(widget__$1,data__$1,owner__$1,meta43616){
return (new devdemos.defcard_api.t43615(widget__$1,data__$1,owner__$1,meta43616));
});

}

return (new devdemos.defcard_api.t43615(devdemos$defcard_api$widget,data,owner,null));
});
if(typeof devdemos.defcard_api.test_om_data !== 'undefined'){
} else {
devdemos.defcard_api.test_om_data = devdemos.defcard_api.test_om_data;
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"omcard-ex","omcard-ex",1187696134)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"omcard-ex",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof devdemos.defcard_api.t43618 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.defcard_api.t43618 = (function (meta43619){
this.meta43619 = meta43619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.defcard_api.t43618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43620,meta43619__$1){
var self__ = this;
var _43620__$1 = this;
return (new devdemos.defcard_api.t43618(meta43619__$1));
});

devdemos.defcard_api.t43618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43620){
var self__ = this;
var _43620__$1 = this;
return self__.meta43619;
});

devdemos.defcard_api.t43618.prototype.devcards$core$IDevcardOptions$ = true;

devdemos.defcard_api.t43618.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24399__auto__,devcard_opts__24400__auto__){
var self__ = this;
var this__24399__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24400__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,((function (this__24399__auto____$1){
return (function (data_atom__24432__auto__,node__24433__auto__){
return om.core.root.call(null,devdemos.defcard_api.widget,data_atom__24432__auto__,cljs.core.merge.call(null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),node__24433__auto__], null)));
});})(this__24399__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24400__auto__))));
});

devdemos.defcard_api.t43618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43619","meta43619",-1748664547,null)], null);
});

devdemos.defcard_api.t43618.cljs$lang$type = true;

devdemos.defcard_api.t43618.cljs$lang$ctorStr = "devdemos.defcard-api/t43618";

devdemos.defcard_api.t43618.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.defcard-api/t43618");
});

devdemos.defcard_api.__GT_t43618 = (function devdemos$defcard_api$__GT_t43618(meta43619){
return (new devdemos.defcard_api.t43618(meta43619));
});

}

return (new devdemos.defcard_api.t43618(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"yep it is here"], null),new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"om-share-atoms","om-share-atoms",960246102)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"om-share-atoms",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"#### You can share an Atom between `om-root-card`s.\n\n    Interact with the counters below."),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
if(typeof devdemos.defcard_api.om_test_atom !== 'undefined'){
} else {
devdemos.defcard_api.om_test_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(20)], null));
}
devdemos.defcard_api.counter = (function devdemos$defcard_api$counter(owner,data,f,s){
if(typeof devdemos.defcard_api.t43625 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.defcard_api.t43625 = (function (counter,owner,data,f,s,meta43626){
this.counter = counter;
this.owner = owner;
this.data = data;
this.f = f;
this.s = s;
this.meta43626 = meta43626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.defcard_api.t43625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43627,meta43626__$1){
var self__ = this;
var _43627__$1 = this;
return (new devdemos.defcard_api.t43625(self__.counter,self__.owner,self__.data,self__.f,self__.s,meta43626__$1));
});

devdemos.defcard_api.t43625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43627){
var self__ = this;
var _43627__$1 = this;
return self__.meta43626;
});

devdemos.defcard_api.t43625.prototype.om$core$IRender$ = true;

devdemos.defcard_api.t43625.prototype.om$core$IRender$render$arity$1 = (function (this__24310__auto__){
var self__ = this;
var this__24310__auto____$1 = this;
return React.createElement("div",null,(function (){var attrs43628 = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs43628))?sablono.interpreter.attributes.call(null,attrs43628):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43628))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(self__.data))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43628),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(self__.data))], null))));
})(),React.createElement("div",null,React.createElement("a",{"onClick": ((function (this__24310__auto____$1){
return (function (){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"count","count",2139924085),self__.f);
});})(this__24310__auto____$1))
},sablono.interpreter.interpret.call(null,self__.s))),sablono.interpreter.interpret.call(null,devcards.util.edn_renderer.html_edn.call(null,self__.data)));
});

devdemos.defcard_api.t43625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"counter","counter",-1850427592,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"meta43626","meta43626",-416699897,null)], null);
});

devdemos.defcard_api.t43625.cljs$lang$type = true;

devdemos.defcard_api.t43625.cljs$lang$ctorStr = "devdemos.defcard-api/t43625";

devdemos.defcard_api.t43625.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.defcard-api/t43625");
});

devdemos.defcard_api.__GT_t43625 = (function devdemos$defcard_api$counter_$___GT_t43625(counter__$1,owner__$1,data__$1,f__$1,s__$1,meta43626){
return (new devdemos.defcard_api.t43625(counter__$1,owner__$1,data__$1,f__$1,s__$1,meta43626));
});

}

return (new devdemos.defcard_api.t43625(devdemos$defcard_api$counter,owner,data,f,s,null));
});
devdemos.defcard_api.om_counter_inc = (function devdemos$defcard_api$om_counter_inc(data,owner){
return devdemos.defcard_api.counter.call(null,owner,data,cljs.core.inc,"inc");
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"omcard-shared-ex-1","omcard-shared-ex-1",2122568073)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"omcard-shared-ex-1",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof devdemos.defcard_api.t43629 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.defcard_api.t43629 = (function (meta43630){
this.meta43630 = meta43630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.defcard_api.t43629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43631,meta43630__$1){
var self__ = this;
var _43631__$1 = this;
return (new devdemos.defcard_api.t43629(meta43630__$1));
});

devdemos.defcard_api.t43629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43631){
var self__ = this;
var _43631__$1 = this;
return self__.meta43630;
});

devdemos.defcard_api.t43629.prototype.devcards$core$IDevcardOptions$ = true;

devdemos.defcard_api.t43629.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24399__auto__,devcard_opts__24400__auto__){
var self__ = this;
var this__24399__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24400__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,((function (this__24399__auto____$1){
return (function (data_atom__24432__auto__,node__24433__auto__){
return om.core.root.call(null,devdemos.defcard_api.om_counter_inc,data_atom__24432__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"First counter "], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),node__24433__auto__], null)));
});})(this__24399__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24400__auto__))));
});

devdemos.defcard_api.t43629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43630","meta43630",-2050561344,null)], null);
});

devdemos.defcard_api.t43629.cljs$lang$type = true;

devdemos.defcard_api.t43629.cljs$lang$ctorStr = "devdemos.defcard-api/t43629";

devdemos.defcard_api.t43629.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.defcard-api/t43629");
});

devdemos.defcard_api.__GT_t43629 = (function devdemos$defcard_api$__GT_t43629(meta43630){
return (new devdemos.defcard_api.t43629(meta43630));
});

}

return (new devdemos.defcard_api.t43629(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),devdemos.defcard_api.om_test_atom,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devdemos.defcard_api.om_counter_dec = (function devdemos$defcard_api$om_counter_dec(data,owner){
return devdemos.defcard_api.counter.call(null,owner,data,cljs.core.dec,"dec");
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"omcard-shared-ex-2","omcard-shared-ex-2",536635740)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"omcard-shared-ex-2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof devdemos.defcard_api.t43632 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.defcard_api.t43632 = (function (meta43633){
this.meta43633 = meta43633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.defcard_api.t43632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43634,meta43633__$1){
var self__ = this;
var _43634__$1 = this;
return (new devdemos.defcard_api.t43632(meta43633__$1));
});

devdemos.defcard_api.t43632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43634){
var self__ = this;
var _43634__$1 = this;
return self__.meta43633;
});

devdemos.defcard_api.t43632.prototype.devcards$core$IDevcardOptions$ = true;

devdemos.defcard_api.t43632.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24399__auto__,devcard_opts__24400__auto__){
var self__ = this;
var this__24399__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24400__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,((function (this__24399__auto____$1){
return (function (data_atom__24432__auto__,node__24433__auto__){
return om.core.root.call(null,devdemos.defcard_api.om_counter_dec,data_atom__24432__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Second counter "], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),node__24433__auto__], null)));
});})(this__24399__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24400__auto__))));
});

devdemos.defcard_api.t43632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43633","meta43633",1369516219,null)], null);
});

devdemos.defcard_api.t43632.cljs$lang$type = true;

devdemos.defcard_api.t43632.cljs$lang$ctorStr = "devdemos.defcard-api/t43632";

devdemos.defcard_api.t43632.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.defcard-api/t43632");
});

devdemos.defcard_api.__GT_t43632 = (function devdemos$defcard_api$__GT_t43632(meta43633){
return (new devdemos.defcard_api.t43632(meta43633));
});

}

return (new devdemos.defcard_api.t43632(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),devdemos.defcard_api.om_test_atom,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"om-test-atom-data","om-test-atom-data",-182048995)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"om-test-atom-data",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### You can share an Atom with an `edn-card` too:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devdemos.defcard_api.om_test_atom,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"test-card-ex","test-card-ex",1740706608)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"test-card-ex",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof devdemos.defcard_api.t43635 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.defcard_api.t43635 = (function (meta43636){
this.meta43636 = meta43636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.defcard_api.t43635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43637,meta43636__$1){
var self__ = this;
var _43637__$1 = this;
return (new devdemos.defcard_api.t43635(meta43636__$1));
});

devdemos.defcard_api.t43635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43637){
var self__ = this;
var _43637__$1 = this;
return self__.meta43636;
});

devdemos.defcard_api.t43635.prototype.devcards$core$IDevcardOptions$ = true;

devdemos.defcard_api.t43635.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24399__auto__,devcard_opts__24400__auto__){
var self__ = this;
var this__24399__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24400__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card_help.call(null,((function (this__24399__auto____$1){
return (function (){
return devcards.core.test_doc.call(null,"## Test card\n    Test cards provide interactive testing inline with your code.\n    Test cards allow arbitrary markdown in them, this can allow for a\n    literate coding style");
});})(this__24399__auto____$1))
,((function (this__24399__auto____$1){
return (function (){
try{var values__23126__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,((21) + (2))),(23));
var result__23127__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23126__auto__);
if(cljs.core.truth_(result__23127__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(23),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(21),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23126__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(23),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(21),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23126__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23127__auto__;
}catch (e43638){var t__23164__auto__ = e43638;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(23),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(21),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23164__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});})(this__24399__auto____$1))
,((function (this__24399__auto____$1){
return (function (){
try{var values__23126__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(12)),(((3) + (4)) + (5)));
var result__23127__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23126__auto__);
if(cljs.core.truth_(result__23127__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(5)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23126__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(5)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23126__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23127__auto__;
}catch (e43639){var t__23164__auto__ = e43639;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(5)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23164__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});})(this__24399__auto____$1))
,((function (this__24399__auto____$1){
return (function (){
return devcards.core.test_doc.call(null,"`(+ 3 4 5)` is definitely equal to `12`");
});})(this__24399__auto____$1))
,((function (this__24399__auto____$1){
return (function (){
try{var values__23126__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(12)),(((3) + (4)) + (5)));
var result__23127__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23126__auto__);
if(cljs.core.truth_(result__23127__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(5)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23126__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(5)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23126__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23127__auto__;
}catch (e43640){var t__23164__auto__ = e43640;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(5)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23164__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});})(this__24399__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24400__auto__))));
});

devdemos.defcard_api.t43635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43636","meta43636",1377582953,null)], null);
});

devdemos.defcard_api.t43635.cljs$lang$type = true;

devdemos.defcard_api.t43635.cljs$lang$ctorStr = "devdemos.defcard-api/t43635";

devdemos.defcard_api.t43635.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.defcard-api/t43635");
});

devdemos.defcard_api.__GT_t43635 = (function devdemos$defcard_api$__GT_t43635(meta43636){
return (new devdemos.defcard_api.t43635(meta43636));
});

}

return (new devdemos.defcard_api.t43635(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

devdemos.defcard_api.test_card_ex = (function devdemos$defcard_api$test_card_ex(){
return cljs.test.test_var.call(null,devdemos$defcard_api$test_card_ex.cljs$lang$var);
});
devdemos.defcard_api.test_card_ex.cljs$lang$test = (function (){

try{var values__23126__auto___43644 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,((21) + (2))),(23));
var result__23127__auto___43645 = cljs.core.apply.call(null,cljs.core._EQ_,values__23126__auto___43644);
if(cljs.core.truth_(result__23127__auto___43645)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(23),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(21),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23126__auto___43644),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(23),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(21),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23126__auto___43644)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43641){var t__23164__auto___43646 = e43641;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(23),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(21),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23164__auto___43646,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23126__auto___43647 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(12)),(((3) + (4)) + (5)));
var result__23127__auto___43648 = cljs.core.apply.call(null,cljs.core._EQ_,values__23126__auto___43647);
if(cljs.core.truth_(result__23127__auto___43648)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(5)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23126__auto___43647),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(5)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23126__auto___43647)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43642){var t__23164__auto___43649 = e43642;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(5)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23164__auto___43649,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

try{var values__23126__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(12)),(((3) + (4)) + (5)));
var result__23127__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23126__auto__);
if(cljs.core.truth_(result__23127__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(5)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23126__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(5)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23126__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23127__auto__;
}catch (e43643){var t__23164__auto__ = e43643;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(5)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23164__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

devdemos.defcard_api.test_card_ex.cljs$lang$var = new cljs.core.Var(function(){return devdemos.defcard_api.test_card_ex;},new cljs.core.Symbol("devdemos.defcard-api","test-card-ex","devdemos.defcard-api/test-card-ex",-661765496,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"devdemos.defcard-api","devdemos.defcard-api",854194714,null),new cljs.core.Symbol(null,"test-card-ex","test-card-ex",-913729161,null),"example_src/devdemos/defcard_api.cljs",22,1,308,308,cljs.core.List.EMPTY,null,(cljs.core.truth_(devdemos.defcard_api.test_card_ex)?devdemos.defcard_api.test_card_ex.cljs$lang$test:null)]));
devdemos.defcard_api.rand_strs = (function devdemos$defcard_api$rand_strs(c){
return cljs.core.repeatedly.call(null,c,(function (){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (x){
return cljs.core.char$.call(null,cljs.core.rand_int.call(null,(255)));
}),cljs.core.range.call(null,cljs.core.rand_int.call(null,(12)))));
}));
});
devdemos.defcard_api.css_transform = (function devdemos$defcard_api$css_transform(p__43650){
var map__43652 = p__43650;
var map__43652__$1 = ((cljs.core.seq_QMARK_.call(null,map__43652))?cljs.core.apply.call(null,cljs.core.hash_map,map__43652):map__43652);
var rx = cljs.core.get.call(null,map__43652__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var ry = cljs.core.get.call(null,map__43652__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rz = cljs.core.get.call(null,map__43652__$1,new cljs.core.Keyword(null,"rz","rz",386461181));
var tx = cljs.core.get.call(null,map__43652__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__43652__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var tz = cljs.core.get.call(null,map__43652__$1,new cljs.core.Keyword(null,"tz","tz",278339241));
var trns = [cljs.core.str("rotateX("),cljs.core.str((function (){var or__16062__auto__ = rx;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return (0);
}
})()),cljs.core.str("deg) "),cljs.core.str("rotateY("),cljs.core.str((function (){var or__16062__auto__ = ry;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return (0);
}
})()),cljs.core.str("deg) "),cljs.core.str("rotateZ("),cljs.core.str((function (){var or__16062__auto__ = rz;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return (0);
}
})()),cljs.core.str("deg) "),cljs.core.str("translateX("),cljs.core.str((function (){var or__16062__auto__ = tx;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return (0);
}
})()),cljs.core.str("px) "),cljs.core.str("translateY("),cljs.core.str((function (){var or__16062__auto__ = ty;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return (0);
}
})()),cljs.core.str("px) "),cljs.core.str("translateZ("),cljs.core.str((function (){var or__16062__auto__ = tz;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return (0);
}
})()),cljs.core.str("px) ")].join('');
return new cljs.core.PersistentArrayMap(null, 2, ["-webkit-transform",trns,"transform",trns], null);
});
devdemos.defcard_api.side = (function devdemos$defcard_api$side(trans,side_css){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.side","div.side",-389871862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,side_css,devdemos.defcard_api.css_transform.call(null,trans)))], null)], null);
});
devdemos.defcard_api.cube = (function devdemos$defcard_api$cube(p__43653){
var map__43655 = p__43653;
var map__43655__$1 = ((cljs.core.seq_QMARK_.call(null,map__43655))?cljs.core.apply.call(null,cljs.core.hash_map,map__43655):map__43655);
var size = cljs.core.get.call(null,map__43655__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var cube_css = cljs.core.get.call(null,map__43655__$1,new cljs.core.Keyword(null,"cube-css","cube-css",451609576));
var side_css = cljs.core.get.call(null,map__43655__$1,new cljs.core.Keyword(null,"side-css","side-css",1753915669));
var translate = (size / (2));
var base_side_css = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"green",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(size),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(size),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"0px"], null);
var base_cube_css = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"-webkit-transform-style","-webkit-transform-style",1063670232),"preserve-3d"], null);
var cube_css__$1 = cljs.core.merge.call(null,base_cube_css,cube_css);
var side_css__$1 = cljs.core.merge.call(null,base_side_css,side_css);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cube","div.cube",846130695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cube_css__$1)], null),devdemos.defcard_api.side.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ry","ry",-334598563),(0),new cljs.core.Keyword(null,"tz","tz",278339241),translate], null),cljs.core.assoc.call(null,side_css__$1,new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"blue")),devdemos.defcard_api.side.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ry","ry",-334598563),(180),new cljs.core.Keyword(null,"tz","tz",278339241),translate], null),cljs.core.assoc.call(null,side_css__$1,new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"blue")),devdemos.defcard_api.side.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ry","ry",-334598563),(90),new cljs.core.Keyword(null,"tz","tz",278339241),translate], null),cljs.core.assoc.call(null,side_css__$1,new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"green")),devdemos.defcard_api.side.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ry","ry",-334598563),(270),new cljs.core.Keyword(null,"tz","tz",278339241),translate], null),cljs.core.assoc.call(null,side_css__$1,new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"green")),devdemos.defcard_api.side.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),(90),new cljs.core.Keyword(null,"tz","tz",278339241),translate], null),cljs.core.assoc.call(null,side_css__$1,new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"red")),devdemos.defcard_api.side.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),(270),new cljs.core.Keyword(null,"tz","tz",278339241),translate], null),cljs.core.assoc.call(null,side_css__$1,new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"yellow"))], null);
});
devdemos.defcard_api.cube_template = (function devdemos$defcard_api$cube_template(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var obj43659 = {"position":"relative","width":"200px","height":"200px"};
return obj43659;
})()], null),devdemos.defcard_api.cube.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(200),new cljs.core.Keyword(null,"cube-css","cube-css",451609576),devdemos.defcard_api.css_transform.call(null,state),new cljs.core.Keyword(null,"side-css","side-css",1753915669),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5",new cljs.core.Keyword(null,"border","border",1444987323),"10px solid #333"], null)], null))], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.defcard_api","devdemos.defcard_api",-20654402),new cljs.core.Keyword(null,"creating-your-own-cards","creating-your-own-cards",-1955443143)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"creating-your-own-cards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Creating your own cards","You can easily create your own cards. There are two ways to create\n   devcards; you can simply define a callback function, or you can\n   reify an instance that implements the devcard protocols.\n\n   The Devcard System maintains two things for each devcard, an Atom\n   and a DOM node. The card has to take it from there, but the idea is\n   for all the state to be maintained in the Atom and for all the\n   rendering to be renderd into the node."),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
