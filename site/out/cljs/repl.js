// Compiled by ClojureScript 0.0-3269 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38651_38663 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38652_38664 = null;
var count__38653_38665 = (0);
var i__38654_38666 = (0);
while(true){
if((i__38654_38666 < count__38653_38665)){
var f_38667 = cljs.core._nth.call(null,chunk__38652_38664,i__38654_38666);
cljs.core.println.call(null,"  ",f_38667);

var G__38668 = seq__38651_38663;
var G__38669 = chunk__38652_38664;
var G__38670 = count__38653_38665;
var G__38671 = (i__38654_38666 + (1));
seq__38651_38663 = G__38668;
chunk__38652_38664 = G__38669;
count__38653_38665 = G__38670;
i__38654_38666 = G__38671;
continue;
} else {
var temp__4425__auto___38672 = cljs.core.seq.call(null,seq__38651_38663);
if(temp__4425__auto___38672){
var seq__38651_38673__$1 = temp__4425__auto___38672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38651_38673__$1)){
var c__16847__auto___38674 = cljs.core.chunk_first.call(null,seq__38651_38673__$1);
var G__38675 = cljs.core.chunk_rest.call(null,seq__38651_38673__$1);
var G__38676 = c__16847__auto___38674;
var G__38677 = cljs.core.count.call(null,c__16847__auto___38674);
var G__38678 = (0);
seq__38651_38663 = G__38675;
chunk__38652_38664 = G__38676;
count__38653_38665 = G__38677;
i__38654_38666 = G__38678;
continue;
} else {
var f_38679 = cljs.core.first.call(null,seq__38651_38673__$1);
cljs.core.println.call(null,"  ",f_38679);

var G__38680 = cljs.core.next.call(null,seq__38651_38673__$1);
var G__38681 = null;
var G__38682 = (0);
var G__38683 = (0);
seq__38651_38663 = G__38680;
chunk__38652_38664 = G__38681;
count__38653_38665 = G__38682;
i__38654_38666 = G__38683;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38684 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16062__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38684);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38684)))?cljs.core.second.call(null,arglists_38684):arglists_38684));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38655 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38656 = null;
var count__38657 = (0);
var i__38658 = (0);
while(true){
if((i__38658 < count__38657)){
var vec__38659 = cljs.core._nth.call(null,chunk__38656,i__38658);
var name = cljs.core.nth.call(null,vec__38659,(0),null);
var map__38660 = cljs.core.nth.call(null,vec__38659,(1),null);
var map__38660__$1 = ((cljs.core.seq_QMARK_.call(null,map__38660))?cljs.core.apply.call(null,cljs.core.hash_map,map__38660):map__38660);
var doc = cljs.core.get.call(null,map__38660__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38660__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38685 = seq__38655;
var G__38686 = chunk__38656;
var G__38687 = count__38657;
var G__38688 = (i__38658 + (1));
seq__38655 = G__38685;
chunk__38656 = G__38686;
count__38657 = G__38687;
i__38658 = G__38688;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38655);
if(temp__4425__auto__){
var seq__38655__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38655__$1)){
var c__16847__auto__ = cljs.core.chunk_first.call(null,seq__38655__$1);
var G__38689 = cljs.core.chunk_rest.call(null,seq__38655__$1);
var G__38690 = c__16847__auto__;
var G__38691 = cljs.core.count.call(null,c__16847__auto__);
var G__38692 = (0);
seq__38655 = G__38689;
chunk__38656 = G__38690;
count__38657 = G__38691;
i__38658 = G__38692;
continue;
} else {
var vec__38661 = cljs.core.first.call(null,seq__38655__$1);
var name = cljs.core.nth.call(null,vec__38661,(0),null);
var map__38662 = cljs.core.nth.call(null,vec__38661,(1),null);
var map__38662__$1 = ((cljs.core.seq_QMARK_.call(null,map__38662))?cljs.core.apply.call(null,cljs.core.hash_map,map__38662):map__38662);
var doc = cljs.core.get.call(null,map__38662__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38662__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38693 = cljs.core.next.call(null,seq__38655__$1);
var G__38694 = null;
var G__38695 = (0);
var G__38696 = (0);
seq__38655 = G__38693;
chunk__38656 = G__38694;
count__38657 = G__38695;
i__38658 = G__38696;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1436385366065