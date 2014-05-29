// Compiled by ClojureScript 0.0-2202
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__,opt__4175__auto__){return cljs.core._write.call(null,writer__4174__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__16933 = cljs.core.seq.call(null,self__.watches);var chunk__16934 = null;var count__16935 = 0;var i__16936 = 0;while(true){
if((i__16936 < count__16935))
{var vec__16937 = cljs.core._nth.call(null,chunk__16934,i__16936);var key__$1 = cljs.core.nth.call(null,vec__16937,0,null);var f = cljs.core.nth.call(null,vec__16937,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__16939 = seq__16933;
var G__16940 = chunk__16934;
var G__16941 = count__16935;
var G__16942 = (i__16936 + 1);
seq__16933 = G__16939;
chunk__16934 = G__16940;
count__16935 = G__16941;
i__16936 = G__16942;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16933);if(temp__4126__auto__)
{var seq__16933__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16933__$1))
{var c__4354__auto__ = cljs.core.chunk_first.call(null,seq__16933__$1);{
var G__16943 = cljs.core.chunk_rest.call(null,seq__16933__$1);
var G__16944 = c__4354__auto__;
var G__16945 = cljs.core.count.call(null,c__4354__auto__);
var G__16946 = 0;
seq__16933 = G__16943;
chunk__16934 = G__16944;
count__16935 = G__16945;
i__16936 = G__16946;
continue;
}
} else
{var vec__16938 = cljs.core.first.call(null,seq__16933__$1);var key__$1 = cljs.core.nth.call(null,vec__16938,0,null);var f = cljs.core.nth.call(null,vec__16938,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__16947 = cljs.core.next.call(null,seq__16933__$1);
var G__16948 = null;
var G__16949 = 0;
var G__16950 = 0;
seq__16933 = G__16947;
chunk__16934 = G__16948;
count__16935 = G__16949;
i__16936 = G__16950;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__16952 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__16952,0,null);var path__$2 = cljs.core.nth.call(null,vec__16952,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__16952,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__16952,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__16953__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__16953 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__16953__delegate.call(this,sa,f,x,y,z,more);};
G__16953.cljs$lang$maxFixedArity = 5;
G__16953.cljs$lang$applyTo = (function (arglist__16954){
var sa = cljs.core.first(arglist__16954);
arglist__16954 = cljs.core.next(arglist__16954);
var f = cljs.core.first(arglist__16954);
arglist__16954 = cljs.core.next(arglist__16954);
var x = cljs.core.first(arglist__16954);
arglist__16954 = cljs.core.next(arglist__16954);
var y = cljs.core.first(arglist__16954);
arglist__16954 = cljs.core.next(arglist__16954);
var z = cljs.core.first(arglist__16954);
var more = cljs.core.rest(arglist__16954);
return G__16953__delegate(sa,f,x,y,z,more);
});
G__16953.cljs$core$IFn$_invoke$arity$variadic = G__16953__delegate;
return G__16953;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj16956 = {};return obj16956;
})();
crate.binding._compute = (function _compute(this$){if((function (){var and__3594__auto__ = this$;if(and__3594__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__3594__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__4233__auto__ = (((this$ == null))?null:this$);return (function (){var or__3606__auto__ = (crate.binding._compute[goog.typeOf(x__4233__auto__)]);if(or__3606__auto__)
{return or__3606__auto__;
} else
{var or__3606__auto____$1 = (crate.binding._compute["_"]);if(or__3606__auto____$1)
{return or__3606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__,opt__4175__auto__){return cljs.core._write.call(null,writer__4174__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;this$__$1.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));
return cljs.core._notify_watches.call(null,this$__$1,old,this$__$1.value);
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__16957 = cljs.core.seq.call(null,self__.watches);var chunk__16958 = null;var count__16959 = 0;var i__16960 = 0;while(true){
if((i__16960 < count__16959))
{var vec__16961 = cljs.core._nth.call(null,chunk__16958,i__16960);var key__$1 = cljs.core.nth.call(null,vec__16961,0,null);var f = cljs.core.nth.call(null,vec__16961,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__16963 = seq__16957;
var G__16964 = chunk__16958;
var G__16965 = count__16959;
var G__16966 = (i__16960 + 1);
seq__16957 = G__16963;
chunk__16958 = G__16964;
count__16959 = G__16965;
i__16960 = G__16966;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16957);if(temp__4126__auto__)
{var seq__16957__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16957__$1))
{var c__4354__auto__ = cljs.core.chunk_first.call(null,seq__16957__$1);{
var G__16967 = cljs.core.chunk_rest.call(null,seq__16957__$1);
var G__16968 = c__4354__auto__;
var G__16969 = cljs.core.count.call(null,c__4354__auto__);
var G__16970 = 0;
seq__16957 = G__16967;
chunk__16958 = G__16968;
count__16959 = G__16969;
i__16960 = G__16970;
continue;
}
} else
{var vec__16962 = cljs.core.first.call(null,seq__16957__$1);var key__$1 = cljs.core.nth.call(null,vec__16962,0,null);var f = cljs.core.nth.call(null,vec__16962,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__16971 = cljs.core.next.call(null,seq__16957__$1);
var G__16972 = null;
var G__16973 = 0;
var G__16974 = 0;
seq__16957 = G__16971;
chunk__16958 = G__16972;
count__16959 = G__16973;
i__16960 = G__16974;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key){return (new crate.binding.Computed(atms,value,func,watches,key));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(atms,null,func,null,k));crate.binding._compute.call(null,neue);
var seq__16979_16983 = cljs.core.seq.call(null,atms);var chunk__16980_16984 = null;var count__16981_16985 = 0;var i__16982_16986 = 0;while(true){
if((i__16982_16986 < count__16981_16985))
{var atm_16987 = cljs.core._nth.call(null,chunk__16980_16984,i__16982_16986);cljs.core.add_watch.call(null,atm_16987,k,((function (seq__16979_16983,chunk__16980_16984,count__16981_16985,i__16982_16986,atm_16987,k,neue){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__16979_16983,chunk__16980_16984,count__16981_16985,i__16982_16986,atm_16987,k,neue))
);
{
var G__16988 = seq__16979_16983;
var G__16989 = chunk__16980_16984;
var G__16990 = count__16981_16985;
var G__16991 = (i__16982_16986 + 1);
seq__16979_16983 = G__16988;
chunk__16980_16984 = G__16989;
count__16981_16985 = G__16990;
i__16982_16986 = G__16991;
continue;
}
} else
{var temp__4126__auto___16992 = cljs.core.seq.call(null,seq__16979_16983);if(temp__4126__auto___16992)
{var seq__16979_16993__$1 = temp__4126__auto___16992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16979_16993__$1))
{var c__4354__auto___16994 = cljs.core.chunk_first.call(null,seq__16979_16993__$1);{
var G__16995 = cljs.core.chunk_rest.call(null,seq__16979_16993__$1);
var G__16996 = c__4354__auto___16994;
var G__16997 = cljs.core.count.call(null,c__4354__auto___16994);
var G__16998 = 0;
seq__16979_16983 = G__16995;
chunk__16980_16984 = G__16996;
count__16981_16985 = G__16997;
i__16982_16986 = G__16998;
continue;
}
} else
{var atm_16999 = cljs.core.first.call(null,seq__16979_16993__$1);cljs.core.add_watch.call(null,atm_16999,k,((function (seq__16979_16983,chunk__16980_16984,count__16981_16985,i__16982_16986,atm_16999,seq__16979_16993__$1,temp__4126__auto___16992,k,neue){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__16979_16983,chunk__16980_16984,count__16981_16985,i__16982_16986,atm_16999,seq__16979_16993__$1,temp__4126__auto___16992,k,neue))
);
{
var G__17000 = cljs.core.next.call(null,seq__16979_16993__$1);
var G__17001 = null;
var G__17002 = 0;
var G__17003 = 0;
seq__16979_16983 = G__17000;
chunk__16980_16984 = G__17001;
count__16981_16985 = G__17002;
i__16982_16986 = G__17003;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.z], null),(function (z){return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){return cljs.core.filter.call(null,(function (p1__17004_SHARP_){return (p1__17004_SHARP_ > 100);
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,1340);
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj17006 = {};return obj17006;
})();
crate.binding.bindable = (function (){var obj17008 = {};return obj17008;
})();
crate.binding._value = (function _value(this$){if((function (){var and__3594__auto__ = this$;if(and__3594__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__3594__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__4233__auto__ = (((this$ == null))?null:this$);return (function (){var or__3606__auto__ = (crate.binding._value[goog.typeOf(x__4233__auto__)]);if(or__3606__auto__)
{return or__3606__auto__;
} else
{var or__3606__auto____$1 = (crate.binding._value["_"]);if(or__3606__auto____$1)
{return or__3606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__3594__auto__ = this$;if(and__3594__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__3594__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__4233__auto__ = (((this$ == null))?null:this$);return (function (){var or__3606__auto__ = (crate.binding._on_change[goog.typeOf(x__4233__auto__)]);if(or__3606__auto__)
{return or__3606__auto__;
} else
{var or__3606__auto____$1 = (crate.binding._on_change["_"]);if(or__3606__auto____$1)
{return or__3606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__,opt__4175__auto__){return cljs.core._write.call(null,writer__4174__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__,opt__4175__auto__){return cljs.core._write.call(null,writer__4174__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__17009 = cljs.core.seq.call(null,self__.watches);var chunk__17010 = null;var count__17011 = 0;var i__17012 = 0;while(true){
if((i__17012 < count__17011))
{var vec__17013 = cljs.core._nth.call(null,chunk__17010,i__17012);var key = cljs.core.nth.call(null,vec__17013,0,null);var f = cljs.core.nth.call(null,vec__17013,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__17015 = seq__17009;
var G__17016 = chunk__17010;
var G__17017 = count__17011;
var G__17018 = (i__17012 + 1);
seq__17009 = G__17015;
chunk__17010 = G__17016;
count__17011 = G__17017;
i__17012 = G__17018;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17009);if(temp__4126__auto__)
{var seq__17009__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17009__$1))
{var c__4354__auto__ = cljs.core.chunk_first.call(null,seq__17009__$1);{
var G__17019 = cljs.core.chunk_rest.call(null,seq__17009__$1);
var G__17020 = c__4354__auto__;
var G__17021 = cljs.core.count.call(null,c__4354__auto__);
var G__17022 = 0;
seq__17009 = G__17019;
chunk__17010 = G__17020;
count__17011 = G__17021;
i__17012 = G__17022;
continue;
}
} else
{var vec__17014 = cljs.core.first.call(null,seq__17009__$1);var key = cljs.core.nth.call(null,vec__17014,0,null);var f = cljs.core.nth.call(null,vec__17014,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__17023 = cljs.core.next.call(null,seq__17009__$1);
var G__17024 = null;
var G__17025 = 0;
var G__17026 = 0;
seq__17009 = G__17023;
chunk__17010 = G__17024;
count__17011 = G__17025;
i__17012 = G__17026;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__,opt__4175__auto__){return cljs.core._write.call(null,writer__4174__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__17027){var vec__17028 = p__17027;var event = cljs.core.nth.call(null,vec__17028,0,null);var el = cljs.core.nth.call(null,vec__17028,1,null);var v = cljs.core.nth.call(null,vec__17028,2,null);return func.call(null,event,el,v);
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__3606__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__17029){
var bc = cljs.core.first(arglist__17029);
var segs = cljs.core.rest(arglist__17029);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__17038_17046 = cljs.core.seq.call(null,added);var chunk__17039_17047 = null;var count__17040_17048 = 0;var i__17041_17049 = 0;while(true){
if((i__17041_17049 < count__17040_17048))
{var a_17050 = cljs.core._nth.call(null,chunk__17039_17047,i__17041_17049);crate.binding.bc_add.call(null,bc,a_17050,a_17050);
{
var G__17051 = seq__17038_17046;
var G__17052 = chunk__17039_17047;
var G__17053 = count__17040_17048;
var G__17054 = (i__17041_17049 + 1);
seq__17038_17046 = G__17051;
chunk__17039_17047 = G__17052;
count__17040_17048 = G__17053;
i__17041_17049 = G__17054;
continue;
}
} else
{var temp__4126__auto___17055 = cljs.core.seq.call(null,seq__17038_17046);if(temp__4126__auto___17055)
{var seq__17038_17056__$1 = temp__4126__auto___17055;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17038_17056__$1))
{var c__4354__auto___17057 = cljs.core.chunk_first.call(null,seq__17038_17056__$1);{
var G__17058 = cljs.core.chunk_rest.call(null,seq__17038_17056__$1);
var G__17059 = c__4354__auto___17057;
var G__17060 = cljs.core.count.call(null,c__4354__auto___17057);
var G__17061 = 0;
seq__17038_17046 = G__17058;
chunk__17039_17047 = G__17059;
count__17040_17048 = G__17060;
i__17041_17049 = G__17061;
continue;
}
} else
{var a_17062 = cljs.core.first.call(null,seq__17038_17056__$1);crate.binding.bc_add.call(null,bc,a_17062,a_17062);
{
var G__17063 = cljs.core.next.call(null,seq__17038_17056__$1);
var G__17064 = null;
var G__17065 = 0;
var G__17066 = 0;
seq__17038_17046 = G__17063;
chunk__17039_17047 = G__17064;
count__17040_17048 = G__17065;
i__17041_17049 = G__17066;
continue;
}
}
} else
{}
}
break;
}
var seq__17042 = cljs.core.seq.call(null,removed);var chunk__17043 = null;var count__17044 = 0;var i__17045 = 0;while(true){
if((i__17045 < count__17044))
{var r = cljs.core._nth.call(null,chunk__17043,i__17045);crate.binding.bc_remove.call(null,bc,r);
{
var G__17067 = seq__17042;
var G__17068 = chunk__17043;
var G__17069 = count__17044;
var G__17070 = (i__17045 + 1);
seq__17042 = G__17067;
chunk__17043 = G__17068;
count__17044 = G__17069;
i__17045 = G__17070;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17042);if(temp__4126__auto__)
{var seq__17042__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17042__$1))
{var c__4354__auto__ = cljs.core.chunk_first.call(null,seq__17042__$1);{
var G__17071 = cljs.core.chunk_rest.call(null,seq__17042__$1);
var G__17072 = c__4354__auto__;
var G__17073 = cljs.core.count.call(null,c__4354__auto__);
var G__17074 = 0;
seq__17042 = G__17071;
chunk__17043 = G__17072;
count__17044 = G__17073;
i__17045 = G__17074;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__17042__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__17075 = cljs.core.next.call(null,seq__17042__$1);
var G__17076 = null;
var G__17077 = 0;
var G__17078 = 0;
seq__17042 = G__17075;
chunk__17043 = G__17076;
count__17044 = G__17077;
i__17045 = G__17078;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__17079){var vec__17082 = p__17079;var path = cljs.core.nth.call(null,vec__17082,0,null);var opts = cljs.core.nth.call(null,vec__17082,1,null);var vec__17083 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__17083,0,null);var opts__$1 = cljs.core.nth.call(null,vec__17083,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__17083,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__17082,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__17083,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__17082,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__17079 = null;if (arguments.length > 1) {
  p__17079 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__17079);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__17084){
var atm = cljs.core.first(arglist__17084);
var p__17079 = cljs.core.rest(arglist__17084);
return bound_coll__delegate(atm,p__17079);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__17085){var vec__17087 = p__17085;var opts = cljs.core.nth.call(null,vec__17087,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__17087,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__17087,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__17085 = null;if (arguments.length > 2) {
  p__17085 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__17085);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__17088){
var as = cljs.core.first(arglist__17088);
arglist__17088 = cljs.core.next(arglist__17088);
var atm = cljs.core.first(arglist__17088);
var p__17085 = cljs.core.rest(arglist__17088);
return map_bound__delegate(as,atm,p__17085);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__17090 = b;if(G__17090)
{var bit__4256__auto__ = null;if(cljs.core.truth_((function (){var or__3606__auto__ = bit__4256__auto__;if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return G__17090.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__17090.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__17090);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__17090);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__17092 = b;if(G__17092)
{var bit__4256__auto__ = null;if(cljs.core.truth_((function (){var or__3606__auto__ = bit__4256__auto__;if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return G__17092.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__17092.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__17092);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__17092);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__17094 = atm;if(G__17094)
{var bit__4256__auto__ = (G__17094.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__4256__auto__) || (G__17094.cljs$core$IDeref$))
{return true;
} else
{if((!G__17094.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__17094);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__17094);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__17095){var vec__17097 = p__17095;var func = cljs.core.nth.call(null,vec__17097,0,null);var func__$1 = (function (){var or__3606__auto__ = func;if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__17095 = null;if (arguments.length > 1) {
  p__17095 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__17095);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__17098){
var atm = cljs.core.first(arglist__17098);
var p__17095 = cljs.core.rest(arglist__17098);
return bound__delegate(atm,p__17095);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;

//# sourceMappingURL=binding.js.map