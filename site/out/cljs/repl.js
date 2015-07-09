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
var seq__49130_49142 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49131_49143 = null;
var count__49132_49144 = (0);
var i__49133_49145 = (0);
while(true){
if((i__49133_49145 < count__49132_49144)){
var f_49146 = cljs.core._nth.call(null,chunk__49131_49143,i__49133_49145);
cljs.core.println.call(null,"  ",f_49146);

var G__49147 = seq__49130_49142;
var G__49148 = chunk__49131_49143;
var G__49149 = count__49132_49144;
var G__49150 = (i__49133_49145 + (1));
seq__49130_49142 = G__49147;
chunk__49131_49143 = G__49148;
count__49132_49144 = G__49149;
i__49133_49145 = G__49150;
continue;
} else {
var temp__4425__auto___49151 = cljs.core.seq.call(null,seq__49130_49142);
if(temp__4425__auto___49151){
var seq__49130_49152__$1 = temp__4425__auto___49151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49130_49152__$1)){
var c__16847__auto___49153 = cljs.core.chunk_first.call(null,seq__49130_49152__$1);
var G__49154 = cljs.core.chunk_rest.call(null,seq__49130_49152__$1);
var G__49155 = c__16847__auto___49153;
var G__49156 = cljs.core.count.call(null,c__16847__auto___49153);
var G__49157 = (0);
seq__49130_49142 = G__49154;
chunk__49131_49143 = G__49155;
count__49132_49144 = G__49156;
i__49133_49145 = G__49157;
continue;
} else {
var f_49158 = cljs.core.first.call(null,seq__49130_49152__$1);
cljs.core.println.call(null,"  ",f_49158);

var G__49159 = cljs.core.next.call(null,seq__49130_49152__$1);
var G__49160 = null;
var G__49161 = (0);
var G__49162 = (0);
seq__49130_49142 = G__49159;
chunk__49131_49143 = G__49160;
count__49132_49144 = G__49161;
i__49133_49145 = G__49162;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49163 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16062__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49163);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49163)))?cljs.core.second.call(null,arglists_49163):arglists_49163));
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
var seq__49134 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49135 = null;
var count__49136 = (0);
var i__49137 = (0);
while(true){
if((i__49137 < count__49136)){
var vec__49138 = cljs.core._nth.call(null,chunk__49135,i__49137);
var name = cljs.core.nth.call(null,vec__49138,(0),null);
var map__49139 = cljs.core.nth.call(null,vec__49138,(1),null);
var map__49139__$1 = ((cljs.core.seq_QMARK_.call(null,map__49139))?cljs.core.apply.call(null,cljs.core.hash_map,map__49139):map__49139);
var doc = cljs.core.get.call(null,map__49139__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__49139__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__49164 = seq__49134;
var G__49165 = chunk__49135;
var G__49166 = count__49136;
var G__49167 = (i__49137 + (1));
seq__49134 = G__49164;
chunk__49135 = G__49165;
count__49136 = G__49166;
i__49137 = G__49167;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__49134);
if(temp__4425__auto__){
var seq__49134__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49134__$1)){
var c__16847__auto__ = cljs.core.chunk_first.call(null,seq__49134__$1);
var G__49168 = cljs.core.chunk_rest.call(null,seq__49134__$1);
var G__49169 = c__16847__auto__;
var G__49170 = cljs.core.count.call(null,c__16847__auto__);
var G__49171 = (0);
seq__49134 = G__49168;
chunk__49135 = G__49169;
count__49136 = G__49170;
i__49137 = G__49171;
continue;
} else {
var vec__49140 = cljs.core.first.call(null,seq__49134__$1);
var name = cljs.core.nth.call(null,vec__49140,(0),null);
var map__49141 = cljs.core.nth.call(null,vec__49140,(1),null);
var map__49141__$1 = ((cljs.core.seq_QMARK_.call(null,map__49141))?cljs.core.apply.call(null,cljs.core.hash_map,map__49141):map__49141);
var doc = cljs.core.get.call(null,map__49141__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__49141__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__49172 = cljs.core.next.call(null,seq__49134__$1);
var G__49173 = null;
var G__49174 = (0);
var G__49175 = (0);
seq__49134 = G__49172;
chunk__49135 = G__49173;
count__49136 = G__49174;
i__49137 = G__49175;
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