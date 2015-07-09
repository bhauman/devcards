// Compiled by ClojureScript 0.0-3269 {}
goog.provide('cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
cljs.test.empty_env = (function cljs$test$empty_env(){
var G__43017 = arguments.length;
switch (G__43017) {
case 0:
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.test.empty_env.call(null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322));
});

cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1 = (function (reporter){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0)], null),new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter], null);
});

cljs.test.empty_env.cljs$lang$maxFixedArity = 1;
cljs.test._STAR_current_env_STAR_ = null;
cljs.test.get_current_env = (function cljs$test$get_current_env(){
var or__16062__auto__ = cljs.test._STAR_current_env_STAR_;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return cljs.test.empty_env.call(null);
}
});
cljs.test.update_current_env_BANG_ = (function cljs$test$update_current_env_BANG_(){
var argseq__17102__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17102__auto__);
});

cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.test._STAR_current_env_STAR_ = cljs.core.apply.call(null,cljs.core.update_in,cljs.test.get_current_env.call(null),ks,f,args);
});

cljs.test.update_current_env_BANG_.cljs$lang$maxFixedArity = (2);

cljs.test.update_current_env_BANG_.cljs$lang$applyTo = (function (seq43019){
var G__43020 = cljs.core.first.call(null,seq43019);
var seq43019__$1 = cljs.core.next.call(null,seq43019);
var G__43021 = cljs.core.first.call(null,seq43019__$1);
var seq43019__$2 = cljs.core.next.call(null,seq43019__$1);
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43020,G__43021,seq43019__$2);
});
cljs.test.set_env_BANG_ = (function cljs$test$set_env_BANG_(new_env){
return cljs.test._STAR_current_env_STAR_ = new_env;
});
cljs.test.clear_env_BANG_ = (function cljs$test$clear_env_BANG_(){
return cljs.test._STAR_current_env_STAR_ = null;
});
cljs.test.get_and_clear_env_BANG_ = (function cljs$test$get_and_clear_env_BANG_(){

var env = cljs.test.get_current_env.call(null);
cljs.test.clear_env_BANG_.call(null);

return env;
});
/**
 * Returns a string representation of the current test.  Renders names
 * in *testing-vars* as a list, then the source file and line of
 * current assertion.
 */
cljs.test.testing_vars_str = (function cljs$test$testing_vars_str(m){
var map__43024 = m;
var map__43024__$1 = ((cljs.core.seq_QMARK_.call(null,map__43024))?cljs.core.apply.call(null,cljs.core.hash_map,map__43024):map__43024);
var file = cljs.core.get.call(null,map__43024__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43024__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43024__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return [cljs.core.str(cljs.core.reverse.call(null,cljs.core.map.call(null,((function (map__43024,map__43024__$1,file,line,column){
return (function (p1__43022_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__43022_SHARP_));
});})(map__43024,map__43024__$1,file,line,column))
,new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null))))),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str((cljs.core.truth_(column)?[cljs.core.str(":"),cljs.core.str(column)].join(''):null)),cljs.core.str(")")].join('');
});
/**
 * Returns a string representation of the current test context. Joins
 * strings in *testing-contexts* with spaces.
 */
cljs.test.testing_contexts_str = (function cljs$test$testing_contexts_str(){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.reverse.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))));
});
/**
 * Increments the named counter in *report-counters*, a ref to a map.
 * Does nothing if *report-counters* is nil.
 */
cljs.test.inc_report_counter_BANG_ = (function cljs$test$inc_report_counter_BANG_(name){
if(cljs.core.truth_(new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),name], null),cljs.core.fnil.call(null,cljs.core.inc,(0)));
} else {
return null;
}
});
if(typeof cljs.test.report !== 'undefined'){
} else {
/**
 * Generic reporting function, may be overridden to plug in
 * different report formats (e.g., TAP, JUnit).  Assertions such as
 * 'is' call 'report' to indicate results.  The argument given to
 * 'report' will be a map with a :type key.
 */
cljs.test.report = (function (){var method_table__16957__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16958__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16959__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16960__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16961__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.test","report"),((function (method_table__16957__auto__,prefer_table__16958__auto__,method_cache__16959__auto__,cached_hierarchy__16960__auto__,hierarchy__16961__auto__){
return (function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m)], null);
});})(method_table__16957__auto__,prefer_table__16958__auto__,method_cache__16959__auto__,cached_hierarchy__16960__auto__,hierarchy__16961__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16961__auto__,method_table__16957__auto__,prefer_table__16958__auto__,method_cache__16959__auto__,cached_hierarchy__16960__auto__));
})();
}
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
return cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

cljs.core.println.call(null,"\nFAIL in",cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
cljs.core.println.call(null,cljs.test.testing_contexts_str.call(null));
} else {
}

var temp__4425__auto___43025 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto___43025)){
var message_43026 = temp__4425__auto___43025;
cljs.core.println.call(null,message_43026);
} else {
}

cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));

return cljs.core.println.call(null,"  actual:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

cljs.core.println.call(null,"\nERROR in",cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
cljs.core.println.call(null,cljs.test.testing_contexts_str.call(null));
} else {
}

var temp__4425__auto___43027 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto___43027)){
var message_43028 = temp__4425__auto___43027;
cljs.core.println.call(null,message_43028);
} else {
}

cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));

cljs.core.print.call(null,"  actual: ");

return cljs.core.prn.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"summary","summary",380847952)], null),(function (m){
cljs.core.println.call(null,"\nRan",new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(m),"tests containing",((new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m)) + new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m)),"assertions.");

return cljs.core.println.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m),"failures,",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m),"errors.");
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null),(function (m){
return cljs.core.println.call(null,"\nTesting",cljs.core.name.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m)));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545)], null),(function (m){
return null;
}));
cljs.test.js_line_and_column = (function cljs$test$js_line_and_column(stack_element){
var parts = stack_element.split(":");
var cnt = cljs.core.count.call(null,parts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.nth.call(null,parts,(cnt - (2)))),parseInt(cljs.core.nth.call(null,parts,(cnt - (1))))], null);
});
cljs.test.js_filename = (function cljs$test$js_filename(stack_element){
return cljs.core.first.call(null,cljs.core.last.call(null,stack_element.split("/out/")).split(":"));
});
cljs.test.mapped_line_and_column = (function cljs$test$mapped_line_and_column(filename,line,column){
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,line,column], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null));
if(cljs.core.truth_(temp__4423__auto__)){
var source_map = temp__4423__auto__;
var temp__4423__auto____$1 = cljs.core.get_in.call(null,source_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,(line - (1))], null));
if(cljs.core.truth_(temp__4423__auto____$1)){
var columns = temp__4423__auto____$1;
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.first.call(null,(function (){var temp__4423__auto____$2 = cljs.core.get.call(null,columns,(column - (1)));
if(cljs.core.truth_(temp__4423__auto____$2)){
var mapping = temp__4423__auto____$2;
return mapping;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084)], null)));
} else {
return default$;
}
} else {
return default$;
}
});
cljs.test.file_and_line = (function cljs$test$file_and_line(exception,depth){
var temp__4423__auto__ = (function (){var and__16050__auto__ = typeof exception.stack === 'string';
if(and__16050__auto__){
var G__43034 = exception.stack;
var G__43034__$1 = (((G__43034 == null))?null:clojure.string.split_lines.call(null,G__43034));
var G__43034__$2 = (((G__43034__$1 == null))?null:cljs.core.get.call(null,G__43034__$1,depth));
var G__43034__$3 = (((G__43034__$2 == null))?null:clojure.string.trim.call(null,G__43034__$2));
return G__43034__$3;
} else {
return and__16050__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var stack_element = temp__4423__auto__;
var fname = cljs.test.js_filename.call(null,stack_element);
var vec__43035 = cljs.test.js_line_and_column.call(null,stack_element);
var line = cljs.core.nth.call(null,vec__43035,(0),null);
var column = cljs.core.nth.call(null,vec__43035,(1),null);
var vec__43036 = cljs.test.mapped_line_and_column.call(null,fname,line,column);
var fname__$1 = cljs.core.nth.call(null,vec__43036,(0),null);
var line__$1 = cljs.core.nth.call(null,vec__43036,(1),null);
var column__$1 = cljs.core.nth.call(null,vec__43036,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),fname__$1,new cljs.core.Keyword(null,"line","line",212345235),line__$1,new cljs.core.Keyword(null,"column","column",2078222095),column__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),exception.fileName,new cljs.core.Keyword(null,"line","line",212345235),exception.lineNumber], null);
}
});
cljs.test.do_report = (function cljs$test$do_report(m){
var m__$1 = (function (){var G__43038 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m).fqn:null);
switch (G__43038) {
case "fail":
return cljs.core.merge.call(null,cljs.test.file_and_line.call(null,(new Error()),(4)),m);

break;
case "error":
return cljs.core.merge.call(null,cljs.test.file_and_line.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m),(0)),m);

break;
default:
return m;

}
})();
return cljs.test.report.call(null,m__$1);
});

/**
 * Marker protocol denoting CPS function to begin asynchronous
 * testing.
 */
cljs.test.IAsyncTest = (function (){var obj43041 = {};
return obj43041;
})();

/**
 * Returns whether x implements IAsyncTest.
 */
cljs.test.async_QMARK_ = (function cljs$test$async_QMARK_(x){
var G__43043 = x;
if(G__43043){
var bit__16736__auto__ = null;
if(cljs.core.truth_((function (){var or__16062__auto__ = bit__16736__auto__;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return G__43043.cljs$test$IAsyncTest$;
}
})())){
return true;
} else {
if((!G__43043.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.test.IAsyncTest,G__43043);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.test.IAsyncTest,G__43043);
}
});
/**
 * Invoke all functions in fns with no arguments. A fn can optionally
 * return
 * 
 * an async test - is invoked with a continuation running left fns
 * 
 * a seq of fns tagged per block - are invoked immediately after fn
 */
cljs.test.run_block = (function cljs$test$run_block(fns){
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,fns);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var f = cljs.core.first.call(null,xs__4977__auto__);
var obj = f.call(null);
if(cljs.core.truth_(cljs.test.async_QMARK_.call(null,obj))){
return obj.call(null,(function (){var d = (new cljs.core.Delay(((function (fns,obj,f,xs__4977__auto__,temp__4425__auto__){
return (function (){
return cljs$test$run_block.call(null,cljs.core.rest.call(null,fns));
});})(fns,obj,f,xs__4977__auto__,temp__4425__auto__))
,null));
return ((function (fns,d,obj,f,xs__4977__auto__,temp__4425__auto__){
return (function (){
if(cljs.core.realized_QMARK_.call(null,d)){
return cljs.core.println.call(null,"WARNING: Async test called done more than one time.");
} else {
return cljs.core.deref.call(null,d);
}
});
;})(fns,d,obj,f,xs__4977__auto__,temp__4425__auto__))
})());
} else {
var G__43046 = (function (){var G__43045 = cljs.core.rest.call(null,fns);
var G__43045__$1 = (cljs.core.truth_(new cljs.core.Keyword("cljs.test","block?","cljs.test/block?",686379965).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj)))?cljs.core.concat.call(null,obj,G__43045):G__43045);
return G__43045__$1;
})();
fns = G__43046;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Tag a seq of fns to be picked up by run-block as injected
 * continuation.  See run-block.
 */
cljs.test.block = (function cljs$test$block(fns){
var G__43048 = fns;
var G__43048__$1 = (((G__43048 == null))?null:cljs.core.vary_meta.call(null,G__43048,cljs.core.assoc,new cljs.core.Keyword("cljs.test","block?","cljs.test/block?",686379965),true));
return G__43048__$1;
});
cljs.test.test_var_block_STAR_ = (function cljs$test$test_var_block_STAR_(v,t){
if((v instanceof cljs.core.Var)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"Var","Var",-1833791616,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150)], null),cljs.core.conj,v);

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),new cljs.core.Keyword(null,"test","test",577538877)], null),cljs.core.inc);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),v], null));

try{return t.call(null);
}catch (e43051){var e = e43051;
var G__43052 = (((e instanceof cljs.core.Keyword))?e.fqn:null);
switch (G__43052) {
case "cljs.test/async-disabled":
throw "Async tests require fixtures to be specified as maps.  Testing aborted.";

break;
default:
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),e], null));

}
}}),(function (){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),v], null));

return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150)], null),cljs.core.rest);
})], null);
});
/**
 * Like test-var, but returns a block for further composition and
 * later execution.
 */
cljs.test.test_var_block = (function cljs$test$test_var_block(v){
var temp__4423__auto__ = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
if(cljs.core.truth_(temp__4423__auto__)){
var t = temp__4423__auto__;
return cljs.test.test_var_block_STAR_.call(null,v,t);
} else {
return null;
}
});
/**
 * If v has a function in its :test metadata, calls that function,
 * add v to :testing-vars property of env.
 */
cljs.test.test_var = (function cljs$test$test_var(v){
return cljs.test.run_block.call(null,cljs.test.test_var_block.call(null,v));
});
/**
 * The default, empty, fixture function.  Just calls its argument.
 * 
 * NOTE: Incompatible with map fixtures.
 */
cljs.test.default_fixture = (function cljs$test$default_fixture(f){
return f.call(null);
});
/**
 * Composes two fixture functions, creating a new fixture function
 * that combines their behavior.
 * 
 * NOTE: Incompatible with map fixtures.
 */
cljs.test.compose_fixtures = (function cljs$test$compose_fixtures(f1,f2){
return (function (g){
return f1.call(null,(function (){
return f2.call(null,g);
}));
});
});
/**
 * Composes a collection of fixtures, in order.  Always returns a valid
 * fixture function, even if the collection is empty.
 * 
 * NOTE: Incompatible with map fixtures.
 */
cljs.test.join_fixtures = (function cljs$test$join_fixtures(fixtures){
return cljs.core.reduce.call(null,cljs.test.compose_fixtures,cljs.test.default_fixture,fixtures);
});
/**
 * Wraps block in map-fixtures.
 */
cljs.test.wrap_map_fixtures = (function cljs$test$wrap_map_fixtures(map_fixtures,block){
return cljs.core.concat.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"before","before",-1633692388),map_fixtures),block,cljs.core.reverse.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"after","after",594996914),map_fixtures)));
});
cljs.test.execution_strategy = (function cljs$test$execution_strategy(once,each){
var fixtures_type = (function cljs$test$execution_strategy_$_fixtures_type(coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return new cljs.core.Keyword(null,"none","none",1333468478);
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,coll)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.fn_QMARK_,coll)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
return null;
}
}
}
});
var fixtures_types = (function cljs$test$execution_strategy_$_fixtures_types(){
return cljs.core.distinct.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"none","none",1333468478),null], null), null),cljs.core.map.call(null,fixtures_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [once,each], null))));
});
var vec__43055 = fixtures_types.call(null);
var type = cljs.core.nth.call(null,vec__43055,(0),null);
var types = vec__43055;
if(cljs.core.not_any_QMARK_.call(null,cljs.core.nil_QMARK_,types)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Fixtures may not be of mixed types"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-any?","not-any?",-2114707554,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"types","types",-2064405130,null))))].join('')));
}

if(((2) > cljs.core.count.call(null,types))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("fixtures specified in :once and :each must be of the same type"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"types","types",-2064405130,null)))))].join('')));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"async","async",1050769601),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"sync","sync",-624148946)], null).call(null,type,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs.test.disable_async = (function cljs$test$disable_async(f){
return (function (){
var obj = f.call(null);
if(cljs.core.truth_(cljs.test.async_QMARK_.call(null,obj))){
throw new cljs.core.Keyword("cljs.test","async-disabled","cljs.test/async-disabled",-772095377);
} else {
}

return obj;
});
});
/**
 * Like test-vars, but returns a block for further composition and
 * later execution.
 */
cljs.test.test_vars_block = (function cljs$test$test_vars_block(vars){
return cljs.core.map.call(null,(function (p__43063){
var vec__43064 = p__43063;
var ns = cljs.core.nth.call(null,vec__43064,(0),null);
var vars__$1 = cljs.core.nth.call(null,vec__43064,(1),null);
return ((function (vec__43064,ns,vars__$1){
return (function (){
return cljs.test.block.call(null,(function (){var env = cljs.test.get_current_env.call(null);
var once_fixtures = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__43065 = (((cljs.test.execution_strategy.call(null,once_fixtures,each_fixtures) instanceof cljs.core.Keyword))?cljs.test.execution_strategy.call(null,once_fixtures,each_fixtures).fqn:null);
switch (G__43065) {
case "async":
return cljs.test.wrap_map_fixtures.call(null,once_fixtures,cljs.core.mapcat.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures.call(null,each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (each_fixture_fn,G__43065,env,once_fixtures,each_fixtures,vec__43064,ns,vars__$1){
return (function (){
return cljs.test.join_fixtures.call(null,once_fixtures).call(null,((function (each_fixture_fn,G__43065,env,once_fixtures,each_fixtures,vec__43064,ns,vars__$1){
return (function (){
var seq__43066 = cljs.core.seq.call(null,vars__$1);
var chunk__43067 = null;
var count__43068 = (0);
var i__43069 = (0);
while(true){
if((i__43069 < count__43068)){
var v = cljs.core._nth.call(null,chunk__43067,i__43069);
var temp__4425__auto___43071 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
if(cljs.core.truth_(temp__4425__auto___43071)){
var t_43072 = temp__4425__auto___43071;
each_fixture_fn.call(null,((function (seq__43066,chunk__43067,count__43068,i__43069,t_43072,temp__4425__auto___43071,v,each_fixture_fn,G__43065,env,once_fixtures,each_fixtures,vec__43064,ns,vars__$1){
return (function (){
return cljs.test.run_block.call(null,cljs.test.test_var_block_STAR_.call(null,v,cljs.test.disable_async.call(null,t_43072)));
});})(seq__43066,chunk__43067,count__43068,i__43069,t_43072,temp__4425__auto___43071,v,each_fixture_fn,G__43065,env,once_fixtures,each_fixtures,vec__43064,ns,vars__$1))
);
} else {
}

var G__43073 = seq__43066;
var G__43074 = chunk__43067;
var G__43075 = count__43068;
var G__43076 = (i__43069 + (1));
seq__43066 = G__43073;
chunk__43067 = G__43074;
count__43068 = G__43075;
i__43069 = G__43076;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__43066);
if(temp__4425__auto__){
var seq__43066__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43066__$1)){
var c__16847__auto__ = cljs.core.chunk_first.call(null,seq__43066__$1);
var G__43077 = cljs.core.chunk_rest.call(null,seq__43066__$1);
var G__43078 = c__16847__auto__;
var G__43079 = cljs.core.count.call(null,c__16847__auto__);
var G__43080 = (0);
seq__43066 = G__43077;
chunk__43067 = G__43078;
count__43068 = G__43079;
i__43069 = G__43080;
continue;
} else {
var v = cljs.core.first.call(null,seq__43066__$1);
var temp__4425__auto___43081__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
if(cljs.core.truth_(temp__4425__auto___43081__$1)){
var t_43082 = temp__4425__auto___43081__$1;
each_fixture_fn.call(null,((function (seq__43066,chunk__43067,count__43068,i__43069,t_43082,temp__4425__auto___43081__$1,v,seq__43066__$1,temp__4425__auto__,each_fixture_fn,G__43065,env,once_fixtures,each_fixtures,vec__43064,ns,vars__$1){
return (function (){
return cljs.test.run_block.call(null,cljs.test.test_var_block_STAR_.call(null,v,cljs.test.disable_async.call(null,t_43082)));
});})(seq__43066,chunk__43067,count__43068,i__43069,t_43082,temp__4425__auto___43081__$1,v,seq__43066__$1,temp__4425__auto__,each_fixture_fn,G__43065,env,once_fixtures,each_fixtures,vec__43064,ns,vars__$1))
);
} else {
}

var G__43083 = cljs.core.next.call(null,seq__43066__$1);
var G__43084 = null;
var G__43085 = (0);
var G__43086 = (0);
seq__43066 = G__43083;
chunk__43067 = G__43084;
count__43068 = G__43085;
i__43069 = G__43086;
continue;
}
} else {
return null;
}
}
break;
}
});})(each_fixture_fn,G__43065,env,once_fixtures,each_fixtures,vec__43064,ns,vars__$1))
);
});})(each_fixture_fn,G__43065,env,once_fixtures,each_fixtures,vec__43064,ns,vars__$1))
], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.test.execution_strategy.call(null,once_fixtures,each_fixtures))].join('')));

}
})());
});
;})(vec__43064,ns,vars__$1))
}),cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.meta),vars));
});
/**
 * Groups vars by their namespace and runs test-vars on them with
 * appropriate fixtures assuming they are present in the current
 * testing environment.
 */
cljs.test.test_vars = (function cljs$test$test_vars(vars){
return cljs.test.run_block.call(null,cljs.test.test_vars_block.call(null,vars));
});
/**
 * Returns true if the given test summary indicates all tests
 * were successful, false otherwise.
 */
cljs.test.successful_QMARK_ = (function cljs$test$successful_QMARK_(summary){
return ((new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0))) && ((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0)));
});

//# sourceMappingURL=test.js.map