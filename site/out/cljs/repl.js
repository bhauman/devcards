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
var seq__75869_75881 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75870_75882 = null;
var count__75871_75883 = (0);
var i__75872_75884 = (0);
while(true){
if((i__75872_75884 < count__75871_75883)){
var f_75885 = cljs.core._nth.call(null,chunk__75870_75882,i__75872_75884);
cljs.core.println.call(null,"  ",f_75885);

var G__75886 = seq__75869_75881;
var G__75887 = chunk__75870_75882;
var G__75888 = count__75871_75883;
var G__75889 = (i__75872_75884 + (1));
seq__75869_75881 = G__75886;
chunk__75870_75882 = G__75887;
count__75871_75883 = G__75888;
i__75872_75884 = G__75889;
continue;
} else {
var temp__4425__auto___75890 = cljs.core.seq.call(null,seq__75869_75881);
if(temp__4425__auto___75890){
var seq__75869_75891__$1 = temp__4425__auto___75890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75869_75891__$1)){
var c__16847__auto___75892 = cljs.core.chunk_first.call(null,seq__75869_75891__$1);
var G__75893 = cljs.core.chunk_rest.call(null,seq__75869_75891__$1);
var G__75894 = c__16847__auto___75892;
var G__75895 = cljs.core.count.call(null,c__16847__auto___75892);
var G__75896 = (0);
seq__75869_75881 = G__75893;
chunk__75870_75882 = G__75894;
count__75871_75883 = G__75895;
i__75872_75884 = G__75896;
continue;
} else {
var f_75897 = cljs.core.first.call(null,seq__75869_75891__$1);
cljs.core.println.call(null,"  ",f_75897);

var G__75898 = cljs.core.next.call(null,seq__75869_75891__$1);
var G__75899 = null;
var G__75900 = (0);
var G__75901 = (0);
seq__75869_75881 = G__75898;
chunk__75870_75882 = G__75899;
count__75871_75883 = G__75900;
i__75872_75884 = G__75901;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_75902 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16062__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_75902);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_75902)))?cljs.core.second.call(null,arglists_75902):arglists_75902));
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
var seq__75873 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75874 = null;
var count__75875 = (0);
var i__75876 = (0);
while(true){
if((i__75876 < count__75875)){
var vec__75877 = cljs.core._nth.call(null,chunk__75874,i__75876);
var name = cljs.core.nth.call(null,vec__75877,(0),null);
var map__75878 = cljs.core.nth.call(null,vec__75877,(1),null);
var map__75878__$1 = ((cljs.core.seq_QMARK_.call(null,map__75878))?cljs.core.apply.call(null,cljs.core.hash_map,map__75878):map__75878);
var doc = cljs.core.get.call(null,map__75878__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__75878__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__75903 = seq__75873;
var G__75904 = chunk__75874;
var G__75905 = count__75875;
var G__75906 = (i__75876 + (1));
seq__75873 = G__75903;
chunk__75874 = G__75904;
count__75875 = G__75905;
i__75876 = G__75906;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__75873);
if(temp__4425__auto__){
var seq__75873__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75873__$1)){
var c__16847__auto__ = cljs.core.chunk_first.call(null,seq__75873__$1);
var G__75907 = cljs.core.chunk_rest.call(null,seq__75873__$1);
var G__75908 = c__16847__auto__;
var G__75909 = cljs.core.count.call(null,c__16847__auto__);
var G__75910 = (0);
seq__75873 = G__75907;
chunk__75874 = G__75908;
count__75875 = G__75909;
i__75876 = G__75910;
continue;
} else {
var vec__75879 = cljs.core.first.call(null,seq__75873__$1);
var name = cljs.core.nth.call(null,vec__75879,(0),null);
var map__75880 = cljs.core.nth.call(null,vec__75879,(1),null);
var map__75880__$1 = ((cljs.core.seq_QMARK_.call(null,map__75880))?cljs.core.apply.call(null,cljs.core.hash_map,map__75880):map__75880);
var doc = cljs.core.get.call(null,map__75880__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__75880__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__75911 = cljs.core.next.call(null,seq__75873__$1);
var G__75912 = null;
var G__75913 = (0);
var G__75914 = (0);
seq__75873 = G__75911;
chunk__75874 = G__75912;
count__75875 = G__75913;
i__75876 = G__75914;
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

//# sourceMappingURL=repl.js.map