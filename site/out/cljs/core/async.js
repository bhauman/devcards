// Compiled by ClojureScript 0.0-3269 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t44270 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t44270 = (function (fn_handler,f,meta44271){
this.fn_handler = fn_handler;
this.f = f;
this.meta44271 = meta44271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t44270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44272,meta44271__$1){
var self__ = this;
var _44272__$1 = this;
return (new cljs.core.async.t44270(self__.fn_handler,self__.f,meta44271__$1));
});

cljs.core.async.t44270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44272){
var self__ = this;
var _44272__$1 = this;
return self__.meta44271;
});

cljs.core.async.t44270.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t44270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t44270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t44270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta44271","meta44271",-1483087516,null)], null);
});

cljs.core.async.t44270.cljs$lang$type = true;

cljs.core.async.t44270.cljs$lang$ctorStr = "cljs.core.async/t44270";

cljs.core.async.t44270.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t44270");
});

cljs.core.async.__GT_t44270 = (function cljs$core$async$fn_handler_$___GT_t44270(fn_handler__$1,f__$1,meta44271){
return (new cljs.core.async.t44270(fn_handler__$1,f__$1,meta44271));
});

}

return (new cljs.core.async.t44270(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__44274 = buff;
if(G__44274){
var bit__16736__auto__ = null;
if(cljs.core.truth_((function (){var or__16062__auto__ = bit__16736__auto__;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return G__44274.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__44274.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__44274);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__44274);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__44276 = arguments.length;
switch (G__44276) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__44279 = arguments.length;
switch (G__44279) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44281 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44281);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44281,ret){
return (function (){
return fn1.call(null,val_44281);
});})(val_44281,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__44283 = arguments.length;
switch (G__44283) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__16947__auto___44285 = n;
var x_44286 = (0);
while(true){
if((x_44286 < n__16947__auto___44285)){
(a[x_44286] = (0));

var G__44287 = (x_44286 + (1));
x_44286 = G__44287;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__44288 = (i + (1));
i = G__44288;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t44292 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t44292 = (function (alt_flag,flag,meta44293){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta44293 = meta44293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t44292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44294,meta44293__$1){
var self__ = this;
var _44294__$1 = this;
return (new cljs.core.async.t44292(self__.alt_flag,self__.flag,meta44293__$1));
});})(flag))
;

cljs.core.async.t44292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44294){
var self__ = this;
var _44294__$1 = this;
return self__.meta44293;
});})(flag))
;

cljs.core.async.t44292.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t44292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t44292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t44292.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44293","meta44293",-128493440,null)], null);
});})(flag))
;

cljs.core.async.t44292.cljs$lang$type = true;

cljs.core.async.t44292.cljs$lang$ctorStr = "cljs.core.async/t44292";

cljs.core.async.t44292.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t44292");
});})(flag))
;

cljs.core.async.__GT_t44292 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t44292(alt_flag__$1,flag__$1,meta44293){
return (new cljs.core.async.t44292(alt_flag__$1,flag__$1,meta44293));
});})(flag))
;

}

return (new cljs.core.async.t44292(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t44298 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t44298 = (function (alt_handler,flag,cb,meta44299){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta44299 = meta44299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t44298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44300,meta44299__$1){
var self__ = this;
var _44300__$1 = this;
return (new cljs.core.async.t44298(self__.alt_handler,self__.flag,self__.cb,meta44299__$1));
});

cljs.core.async.t44298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44300){
var self__ = this;
var _44300__$1 = this;
return self__.meta44299;
});

cljs.core.async.t44298.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t44298.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t44298.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t44298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44299","meta44299",1862008998,null)], null);
});

cljs.core.async.t44298.cljs$lang$type = true;

cljs.core.async.t44298.cljs$lang$ctorStr = "cljs.core.async/t44298";

cljs.core.async.t44298.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t44298");
});

cljs.core.async.__GT_t44298 = (function cljs$core$async$alt_handler_$___GT_t44298(alt_handler__$1,flag__$1,cb__$1,meta44299){
return (new cljs.core.async.t44298(alt_handler__$1,flag__$1,cb__$1,meta44299));
});

}

return (new cljs.core.async.t44298(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44301_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44301_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44302_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44302_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16062__auto__ = wport;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44303 = (i + (1));
i = G__44303;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16062__auto__ = ret;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16050__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16050__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16050__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__17102__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17102__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44306){
var map__44307 = p__44306;
var map__44307__$1 = ((cljs.core.seq_QMARK_.call(null,map__44307))?cljs.core.apply.call(null,cljs.core.hash_map,map__44307):map__44307);
var opts = map__44307__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44304){
var G__44305 = cljs.core.first.call(null,seq44304);
var seq44304__$1 = cljs.core.next.call(null,seq44304);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44305,seq44304__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__44309 = arguments.length;
switch (G__44309) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19818__auto___44358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___44358){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___44358){
return (function (state_44333){
var state_val_44334 = (state_44333[(1)]);
if((state_val_44334 === (7))){
var inst_44329 = (state_44333[(2)]);
var state_44333__$1 = state_44333;
var statearr_44335_44359 = state_44333__$1;
(statearr_44335_44359[(2)] = inst_44329);

(statearr_44335_44359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (1))){
var state_44333__$1 = state_44333;
var statearr_44336_44360 = state_44333__$1;
(statearr_44336_44360[(2)] = null);

(statearr_44336_44360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (4))){
var inst_44312 = (state_44333[(7)]);
var inst_44312__$1 = (state_44333[(2)]);
var inst_44313 = (inst_44312__$1 == null);
var state_44333__$1 = (function (){var statearr_44337 = state_44333;
(statearr_44337[(7)] = inst_44312__$1);

return statearr_44337;
})();
if(cljs.core.truth_(inst_44313)){
var statearr_44338_44361 = state_44333__$1;
(statearr_44338_44361[(1)] = (5));

} else {
var statearr_44339_44362 = state_44333__$1;
(statearr_44339_44362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (13))){
var state_44333__$1 = state_44333;
var statearr_44340_44363 = state_44333__$1;
(statearr_44340_44363[(2)] = null);

(statearr_44340_44363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (6))){
var inst_44312 = (state_44333[(7)]);
var state_44333__$1 = state_44333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44333__$1,(11),to,inst_44312);
} else {
if((state_val_44334 === (3))){
var inst_44331 = (state_44333[(2)]);
var state_44333__$1 = state_44333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44333__$1,inst_44331);
} else {
if((state_val_44334 === (12))){
var state_44333__$1 = state_44333;
var statearr_44341_44364 = state_44333__$1;
(statearr_44341_44364[(2)] = null);

(statearr_44341_44364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (2))){
var state_44333__$1 = state_44333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44333__$1,(4),from);
} else {
if((state_val_44334 === (11))){
var inst_44322 = (state_44333[(2)]);
var state_44333__$1 = state_44333;
if(cljs.core.truth_(inst_44322)){
var statearr_44342_44365 = state_44333__$1;
(statearr_44342_44365[(1)] = (12));

} else {
var statearr_44343_44366 = state_44333__$1;
(statearr_44343_44366[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (9))){
var state_44333__$1 = state_44333;
var statearr_44344_44367 = state_44333__$1;
(statearr_44344_44367[(2)] = null);

(statearr_44344_44367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (5))){
var state_44333__$1 = state_44333;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44345_44368 = state_44333__$1;
(statearr_44345_44368[(1)] = (8));

} else {
var statearr_44346_44369 = state_44333__$1;
(statearr_44346_44369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (14))){
var inst_44327 = (state_44333[(2)]);
var state_44333__$1 = state_44333;
var statearr_44347_44370 = state_44333__$1;
(statearr_44347_44370[(2)] = inst_44327);

(statearr_44347_44370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (10))){
var inst_44319 = (state_44333[(2)]);
var state_44333__$1 = state_44333;
var statearr_44348_44371 = state_44333__$1;
(statearr_44348_44371[(2)] = inst_44319);

(statearr_44348_44371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44334 === (8))){
var inst_44316 = cljs.core.async.close_BANG_.call(null,to);
var state_44333__$1 = state_44333;
var statearr_44349_44372 = state_44333__$1;
(statearr_44349_44372[(2)] = inst_44316);

(statearr_44349_44372[(1)] = (10));


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
});})(c__19818__auto___44358))
;
return ((function (switch__19756__auto__,c__19818__auto___44358){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_44353 = [null,null,null,null,null,null,null,null];
(statearr_44353[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_44353[(1)] = (1));

return statearr_44353;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_44333){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_44333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e44354){if((e44354 instanceof Object)){
var ex__19760__auto__ = e44354;
var statearr_44355_44373 = state_44333;
(statearr_44355_44373[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44374 = state_44333;
state_44333 = G__44374;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_44333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_44333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___44358))
})();
var state__19820__auto__ = (function (){var statearr_44356 = f__19819__auto__.call(null);
(statearr_44356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___44358);

return statearr_44356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___44358))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__44558){
var vec__44559 = p__44558;
var v = cljs.core.nth.call(null,vec__44559,(0),null);
var p = cljs.core.nth.call(null,vec__44559,(1),null);
var job = vec__44559;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19818__auto___44741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___44741,res,vec__44559,v,p,job,jobs,results){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___44741,res,vec__44559,v,p,job,jobs,results){
return (function (state_44564){
var state_val_44565 = (state_44564[(1)]);
if((state_val_44565 === (1))){
var state_44564__$1 = state_44564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44564__$1,(2),res,v);
} else {
if((state_val_44565 === (2))){
var inst_44561 = (state_44564[(2)]);
var inst_44562 = cljs.core.async.close_BANG_.call(null,res);
var state_44564__$1 = (function (){var statearr_44566 = state_44564;
(statearr_44566[(7)] = inst_44561);

return statearr_44566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44564__$1,inst_44562);
} else {
return null;
}
}
});})(c__19818__auto___44741,res,vec__44559,v,p,job,jobs,results))
;
return ((function (switch__19756__auto__,c__19818__auto___44741,res,vec__44559,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_44570 = [null,null,null,null,null,null,null,null];
(statearr_44570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_44570[(1)] = (1));

return statearr_44570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_44564){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_44564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e44571){if((e44571 instanceof Object)){
var ex__19760__auto__ = e44571;
var statearr_44572_44742 = state_44564;
(statearr_44572_44742[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44743 = state_44564;
state_44564 = G__44743;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_44564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_44564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___44741,res,vec__44559,v,p,job,jobs,results))
})();
var state__19820__auto__ = (function (){var statearr_44573 = f__19819__auto__.call(null);
(statearr_44573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___44741);

return statearr_44573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___44741,res,vec__44559,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44574){
var vec__44575 = p__44574;
var v = cljs.core.nth.call(null,vec__44575,(0),null);
var p = cljs.core.nth.call(null,vec__44575,(1),null);
var job = vec__44575;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__16947__auto___44744 = n;
var __44745 = (0);
while(true){
if((__44745 < n__16947__auto___44744)){
var G__44576_44746 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44576_44746) {
case "compute":
var c__19818__auto___44748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44745,c__19818__auto___44748,G__44576_44746,n__16947__auto___44744,jobs,results,process,async){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (__44745,c__19818__auto___44748,G__44576_44746,n__16947__auto___44744,jobs,results,process,async){
return (function (state_44589){
var state_val_44590 = (state_44589[(1)]);
if((state_val_44590 === (1))){
var state_44589__$1 = state_44589;
var statearr_44591_44749 = state_44589__$1;
(statearr_44591_44749[(2)] = null);

(statearr_44591_44749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (2))){
var state_44589__$1 = state_44589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44589__$1,(4),jobs);
} else {
if((state_val_44590 === (3))){
var inst_44587 = (state_44589[(2)]);
var state_44589__$1 = state_44589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44589__$1,inst_44587);
} else {
if((state_val_44590 === (4))){
var inst_44579 = (state_44589[(2)]);
var inst_44580 = process.call(null,inst_44579);
var state_44589__$1 = state_44589;
if(cljs.core.truth_(inst_44580)){
var statearr_44592_44750 = state_44589__$1;
(statearr_44592_44750[(1)] = (5));

} else {
var statearr_44593_44751 = state_44589__$1;
(statearr_44593_44751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (5))){
var state_44589__$1 = state_44589;
var statearr_44594_44752 = state_44589__$1;
(statearr_44594_44752[(2)] = null);

(statearr_44594_44752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (6))){
var state_44589__$1 = state_44589;
var statearr_44595_44753 = state_44589__$1;
(statearr_44595_44753[(2)] = null);

(statearr_44595_44753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (7))){
var inst_44585 = (state_44589[(2)]);
var state_44589__$1 = state_44589;
var statearr_44596_44754 = state_44589__$1;
(statearr_44596_44754[(2)] = inst_44585);

(statearr_44596_44754[(1)] = (3));


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
});})(__44745,c__19818__auto___44748,G__44576_44746,n__16947__auto___44744,jobs,results,process,async))
;
return ((function (__44745,switch__19756__auto__,c__19818__auto___44748,G__44576_44746,n__16947__auto___44744,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_44600 = [null,null,null,null,null,null,null];
(statearr_44600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_44600[(1)] = (1));

return statearr_44600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_44589){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_44589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e44601){if((e44601 instanceof Object)){
var ex__19760__auto__ = e44601;
var statearr_44602_44755 = state_44589;
(statearr_44602_44755[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44756 = state_44589;
state_44589 = G__44756;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_44589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_44589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(__44745,switch__19756__auto__,c__19818__auto___44748,G__44576_44746,n__16947__auto___44744,jobs,results,process,async))
})();
var state__19820__auto__ = (function (){var statearr_44603 = f__19819__auto__.call(null);
(statearr_44603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___44748);

return statearr_44603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(__44745,c__19818__auto___44748,G__44576_44746,n__16947__auto___44744,jobs,results,process,async))
);


break;
case "async":
var c__19818__auto___44757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44745,c__19818__auto___44757,G__44576_44746,n__16947__auto___44744,jobs,results,process,async){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (__44745,c__19818__auto___44757,G__44576_44746,n__16947__auto___44744,jobs,results,process,async){
return (function (state_44616){
var state_val_44617 = (state_44616[(1)]);
if((state_val_44617 === (1))){
var state_44616__$1 = state_44616;
var statearr_44618_44758 = state_44616__$1;
(statearr_44618_44758[(2)] = null);

(statearr_44618_44758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44617 === (2))){
var state_44616__$1 = state_44616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44616__$1,(4),jobs);
} else {
if((state_val_44617 === (3))){
var inst_44614 = (state_44616[(2)]);
var state_44616__$1 = state_44616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44616__$1,inst_44614);
} else {
if((state_val_44617 === (4))){
var inst_44606 = (state_44616[(2)]);
var inst_44607 = async.call(null,inst_44606);
var state_44616__$1 = state_44616;
if(cljs.core.truth_(inst_44607)){
var statearr_44619_44759 = state_44616__$1;
(statearr_44619_44759[(1)] = (5));

} else {
var statearr_44620_44760 = state_44616__$1;
(statearr_44620_44760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44617 === (5))){
var state_44616__$1 = state_44616;
var statearr_44621_44761 = state_44616__$1;
(statearr_44621_44761[(2)] = null);

(statearr_44621_44761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44617 === (6))){
var state_44616__$1 = state_44616;
var statearr_44622_44762 = state_44616__$1;
(statearr_44622_44762[(2)] = null);

(statearr_44622_44762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44617 === (7))){
var inst_44612 = (state_44616[(2)]);
var state_44616__$1 = state_44616;
var statearr_44623_44763 = state_44616__$1;
(statearr_44623_44763[(2)] = inst_44612);

(statearr_44623_44763[(1)] = (3));


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
});})(__44745,c__19818__auto___44757,G__44576_44746,n__16947__auto___44744,jobs,results,process,async))
;
return ((function (__44745,switch__19756__auto__,c__19818__auto___44757,G__44576_44746,n__16947__auto___44744,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_44627 = [null,null,null,null,null,null,null];
(statearr_44627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_44627[(1)] = (1));

return statearr_44627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_44616){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_44616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e44628){if((e44628 instanceof Object)){
var ex__19760__auto__ = e44628;
var statearr_44629_44764 = state_44616;
(statearr_44629_44764[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44765 = state_44616;
state_44616 = G__44765;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_44616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_44616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(__44745,switch__19756__auto__,c__19818__auto___44757,G__44576_44746,n__16947__auto___44744,jobs,results,process,async))
})();
var state__19820__auto__ = (function (){var statearr_44630 = f__19819__auto__.call(null);
(statearr_44630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___44757);

return statearr_44630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(__44745,c__19818__auto___44757,G__44576_44746,n__16947__auto___44744,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__44766 = (__44745 + (1));
__44745 = G__44766;
continue;
} else {
}
break;
}

var c__19818__auto___44767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___44767,jobs,results,process,async){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___44767,jobs,results,process,async){
return (function (state_44652){
var state_val_44653 = (state_44652[(1)]);
if((state_val_44653 === (1))){
var state_44652__$1 = state_44652;
var statearr_44654_44768 = state_44652__$1;
(statearr_44654_44768[(2)] = null);

(statearr_44654_44768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (2))){
var state_44652__$1 = state_44652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44652__$1,(4),from);
} else {
if((state_val_44653 === (3))){
var inst_44650 = (state_44652[(2)]);
var state_44652__$1 = state_44652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44652__$1,inst_44650);
} else {
if((state_val_44653 === (4))){
var inst_44633 = (state_44652[(7)]);
var inst_44633__$1 = (state_44652[(2)]);
var inst_44634 = (inst_44633__$1 == null);
var state_44652__$1 = (function (){var statearr_44655 = state_44652;
(statearr_44655[(7)] = inst_44633__$1);

return statearr_44655;
})();
if(cljs.core.truth_(inst_44634)){
var statearr_44656_44769 = state_44652__$1;
(statearr_44656_44769[(1)] = (5));

} else {
var statearr_44657_44770 = state_44652__$1;
(statearr_44657_44770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (5))){
var inst_44636 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44652__$1 = state_44652;
var statearr_44658_44771 = state_44652__$1;
(statearr_44658_44771[(2)] = inst_44636);

(statearr_44658_44771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (6))){
var inst_44633 = (state_44652[(7)]);
var inst_44638 = (state_44652[(8)]);
var inst_44638__$1 = cljs.core.async.chan.call(null,(1));
var inst_44639 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44640 = [inst_44633,inst_44638__$1];
var inst_44641 = (new cljs.core.PersistentVector(null,2,(5),inst_44639,inst_44640,null));
var state_44652__$1 = (function (){var statearr_44659 = state_44652;
(statearr_44659[(8)] = inst_44638__$1);

return statearr_44659;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44652__$1,(8),jobs,inst_44641);
} else {
if((state_val_44653 === (7))){
var inst_44648 = (state_44652[(2)]);
var state_44652__$1 = state_44652;
var statearr_44660_44772 = state_44652__$1;
(statearr_44660_44772[(2)] = inst_44648);

(statearr_44660_44772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (8))){
var inst_44638 = (state_44652[(8)]);
var inst_44643 = (state_44652[(2)]);
var state_44652__$1 = (function (){var statearr_44661 = state_44652;
(statearr_44661[(9)] = inst_44643);

return statearr_44661;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44652__$1,(9),results,inst_44638);
} else {
if((state_val_44653 === (9))){
var inst_44645 = (state_44652[(2)]);
var state_44652__$1 = (function (){var statearr_44662 = state_44652;
(statearr_44662[(10)] = inst_44645);

return statearr_44662;
})();
var statearr_44663_44773 = state_44652__$1;
(statearr_44663_44773[(2)] = null);

(statearr_44663_44773[(1)] = (2));


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
});})(c__19818__auto___44767,jobs,results,process,async))
;
return ((function (switch__19756__auto__,c__19818__auto___44767,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_44667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_44667[(1)] = (1));

return statearr_44667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_44652){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_44652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e44668){if((e44668 instanceof Object)){
var ex__19760__auto__ = e44668;
var statearr_44669_44774 = state_44652;
(statearr_44669_44774[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44775 = state_44652;
state_44652 = G__44775;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_44652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_44652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___44767,jobs,results,process,async))
})();
var state__19820__auto__ = (function (){var statearr_44670 = f__19819__auto__.call(null);
(statearr_44670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___44767);

return statearr_44670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___44767,jobs,results,process,async))
);


var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,jobs,results,process,async){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,jobs,results,process,async){
return (function (state_44708){
var state_val_44709 = (state_44708[(1)]);
if((state_val_44709 === (7))){
var inst_44704 = (state_44708[(2)]);
var state_44708__$1 = state_44708;
var statearr_44710_44776 = state_44708__$1;
(statearr_44710_44776[(2)] = inst_44704);

(statearr_44710_44776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (20))){
var state_44708__$1 = state_44708;
var statearr_44711_44777 = state_44708__$1;
(statearr_44711_44777[(2)] = null);

(statearr_44711_44777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (1))){
var state_44708__$1 = state_44708;
var statearr_44712_44778 = state_44708__$1;
(statearr_44712_44778[(2)] = null);

(statearr_44712_44778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (4))){
var inst_44673 = (state_44708[(7)]);
var inst_44673__$1 = (state_44708[(2)]);
var inst_44674 = (inst_44673__$1 == null);
var state_44708__$1 = (function (){var statearr_44713 = state_44708;
(statearr_44713[(7)] = inst_44673__$1);

return statearr_44713;
})();
if(cljs.core.truth_(inst_44674)){
var statearr_44714_44779 = state_44708__$1;
(statearr_44714_44779[(1)] = (5));

} else {
var statearr_44715_44780 = state_44708__$1;
(statearr_44715_44780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (15))){
var inst_44686 = (state_44708[(8)]);
var state_44708__$1 = state_44708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44708__$1,(18),to,inst_44686);
} else {
if((state_val_44709 === (21))){
var inst_44699 = (state_44708[(2)]);
var state_44708__$1 = state_44708;
var statearr_44716_44781 = state_44708__$1;
(statearr_44716_44781[(2)] = inst_44699);

(statearr_44716_44781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (13))){
var inst_44701 = (state_44708[(2)]);
var state_44708__$1 = (function (){var statearr_44717 = state_44708;
(statearr_44717[(9)] = inst_44701);

return statearr_44717;
})();
var statearr_44718_44782 = state_44708__$1;
(statearr_44718_44782[(2)] = null);

(statearr_44718_44782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (6))){
var inst_44673 = (state_44708[(7)]);
var state_44708__$1 = state_44708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44708__$1,(11),inst_44673);
} else {
if((state_val_44709 === (17))){
var inst_44694 = (state_44708[(2)]);
var state_44708__$1 = state_44708;
if(cljs.core.truth_(inst_44694)){
var statearr_44719_44783 = state_44708__$1;
(statearr_44719_44783[(1)] = (19));

} else {
var statearr_44720_44784 = state_44708__$1;
(statearr_44720_44784[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (3))){
var inst_44706 = (state_44708[(2)]);
var state_44708__$1 = state_44708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44708__$1,inst_44706);
} else {
if((state_val_44709 === (12))){
var inst_44683 = (state_44708[(10)]);
var state_44708__$1 = state_44708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44708__$1,(14),inst_44683);
} else {
if((state_val_44709 === (2))){
var state_44708__$1 = state_44708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44708__$1,(4),results);
} else {
if((state_val_44709 === (19))){
var state_44708__$1 = state_44708;
var statearr_44721_44785 = state_44708__$1;
(statearr_44721_44785[(2)] = null);

(statearr_44721_44785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (11))){
var inst_44683 = (state_44708[(2)]);
var state_44708__$1 = (function (){var statearr_44722 = state_44708;
(statearr_44722[(10)] = inst_44683);

return statearr_44722;
})();
var statearr_44723_44786 = state_44708__$1;
(statearr_44723_44786[(2)] = null);

(statearr_44723_44786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (9))){
var state_44708__$1 = state_44708;
var statearr_44724_44787 = state_44708__$1;
(statearr_44724_44787[(2)] = null);

(statearr_44724_44787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (5))){
var state_44708__$1 = state_44708;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44725_44788 = state_44708__$1;
(statearr_44725_44788[(1)] = (8));

} else {
var statearr_44726_44789 = state_44708__$1;
(statearr_44726_44789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (14))){
var inst_44686 = (state_44708[(8)]);
var inst_44688 = (state_44708[(11)]);
var inst_44686__$1 = (state_44708[(2)]);
var inst_44687 = (inst_44686__$1 == null);
var inst_44688__$1 = cljs.core.not.call(null,inst_44687);
var state_44708__$1 = (function (){var statearr_44727 = state_44708;
(statearr_44727[(8)] = inst_44686__$1);

(statearr_44727[(11)] = inst_44688__$1);

return statearr_44727;
})();
if(inst_44688__$1){
var statearr_44728_44790 = state_44708__$1;
(statearr_44728_44790[(1)] = (15));

} else {
var statearr_44729_44791 = state_44708__$1;
(statearr_44729_44791[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (16))){
var inst_44688 = (state_44708[(11)]);
var state_44708__$1 = state_44708;
var statearr_44730_44792 = state_44708__$1;
(statearr_44730_44792[(2)] = inst_44688);

(statearr_44730_44792[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (10))){
var inst_44680 = (state_44708[(2)]);
var state_44708__$1 = state_44708;
var statearr_44731_44793 = state_44708__$1;
(statearr_44731_44793[(2)] = inst_44680);

(statearr_44731_44793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (18))){
var inst_44691 = (state_44708[(2)]);
var state_44708__$1 = state_44708;
var statearr_44732_44794 = state_44708__$1;
(statearr_44732_44794[(2)] = inst_44691);

(statearr_44732_44794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44709 === (8))){
var inst_44677 = cljs.core.async.close_BANG_.call(null,to);
var state_44708__$1 = state_44708;
var statearr_44733_44795 = state_44708__$1;
(statearr_44733_44795[(2)] = inst_44677);

(statearr_44733_44795[(1)] = (10));


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
});})(c__19818__auto__,jobs,results,process,async))
;
return ((function (switch__19756__auto__,c__19818__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_44737 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_44737[(1)] = (1));

return statearr_44737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_44708){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_44708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e44738){if((e44738 instanceof Object)){
var ex__19760__auto__ = e44738;
var statearr_44739_44796 = state_44708;
(statearr_44739_44796[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44797 = state_44708;
state_44708 = G__44797;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_44708){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_44708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,jobs,results,process,async))
})();
var state__19820__auto__ = (function (){var statearr_44740 = f__19819__auto__.call(null);
(statearr_44740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_44740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__,jobs,results,process,async))
);

return c__19818__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__44799 = arguments.length;
switch (G__44799) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__44802 = arguments.length;
switch (G__44802) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__44805 = arguments.length;
switch (G__44805) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19818__auto___44857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___44857,tc,fc){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___44857,tc,fc){
return (function (state_44831){
var state_val_44832 = (state_44831[(1)]);
if((state_val_44832 === (7))){
var inst_44827 = (state_44831[(2)]);
var state_44831__$1 = state_44831;
var statearr_44833_44858 = state_44831__$1;
(statearr_44833_44858[(2)] = inst_44827);

(statearr_44833_44858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (1))){
var state_44831__$1 = state_44831;
var statearr_44834_44859 = state_44831__$1;
(statearr_44834_44859[(2)] = null);

(statearr_44834_44859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (4))){
var inst_44808 = (state_44831[(7)]);
var inst_44808__$1 = (state_44831[(2)]);
var inst_44809 = (inst_44808__$1 == null);
var state_44831__$1 = (function (){var statearr_44835 = state_44831;
(statearr_44835[(7)] = inst_44808__$1);

return statearr_44835;
})();
if(cljs.core.truth_(inst_44809)){
var statearr_44836_44860 = state_44831__$1;
(statearr_44836_44860[(1)] = (5));

} else {
var statearr_44837_44861 = state_44831__$1;
(statearr_44837_44861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (13))){
var state_44831__$1 = state_44831;
var statearr_44838_44862 = state_44831__$1;
(statearr_44838_44862[(2)] = null);

(statearr_44838_44862[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (6))){
var inst_44808 = (state_44831[(7)]);
var inst_44814 = p.call(null,inst_44808);
var state_44831__$1 = state_44831;
if(cljs.core.truth_(inst_44814)){
var statearr_44839_44863 = state_44831__$1;
(statearr_44839_44863[(1)] = (9));

} else {
var statearr_44840_44864 = state_44831__$1;
(statearr_44840_44864[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (3))){
var inst_44829 = (state_44831[(2)]);
var state_44831__$1 = state_44831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44831__$1,inst_44829);
} else {
if((state_val_44832 === (12))){
var state_44831__$1 = state_44831;
var statearr_44841_44865 = state_44831__$1;
(statearr_44841_44865[(2)] = null);

(statearr_44841_44865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (2))){
var state_44831__$1 = state_44831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44831__$1,(4),ch);
} else {
if((state_val_44832 === (11))){
var inst_44808 = (state_44831[(7)]);
var inst_44818 = (state_44831[(2)]);
var state_44831__$1 = state_44831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44831__$1,(8),inst_44818,inst_44808);
} else {
if((state_val_44832 === (9))){
var state_44831__$1 = state_44831;
var statearr_44842_44866 = state_44831__$1;
(statearr_44842_44866[(2)] = tc);

(statearr_44842_44866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (5))){
var inst_44811 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44812 = cljs.core.async.close_BANG_.call(null,fc);
var state_44831__$1 = (function (){var statearr_44843 = state_44831;
(statearr_44843[(8)] = inst_44811);

return statearr_44843;
})();
var statearr_44844_44867 = state_44831__$1;
(statearr_44844_44867[(2)] = inst_44812);

(statearr_44844_44867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (14))){
var inst_44825 = (state_44831[(2)]);
var state_44831__$1 = state_44831;
var statearr_44845_44868 = state_44831__$1;
(statearr_44845_44868[(2)] = inst_44825);

(statearr_44845_44868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (10))){
var state_44831__$1 = state_44831;
var statearr_44846_44869 = state_44831__$1;
(statearr_44846_44869[(2)] = fc);

(statearr_44846_44869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (8))){
var inst_44820 = (state_44831[(2)]);
var state_44831__$1 = state_44831;
if(cljs.core.truth_(inst_44820)){
var statearr_44847_44870 = state_44831__$1;
(statearr_44847_44870[(1)] = (12));

} else {
var statearr_44848_44871 = state_44831__$1;
(statearr_44848_44871[(1)] = (13));

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
});})(c__19818__auto___44857,tc,fc))
;
return ((function (switch__19756__auto__,c__19818__auto___44857,tc,fc){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_44852 = [null,null,null,null,null,null,null,null,null];
(statearr_44852[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_44852[(1)] = (1));

return statearr_44852;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_44831){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_44831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e44853){if((e44853 instanceof Object)){
var ex__19760__auto__ = e44853;
var statearr_44854_44872 = state_44831;
(statearr_44854_44872[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44873 = state_44831;
state_44831 = G__44873;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_44831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_44831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___44857,tc,fc))
})();
var state__19820__auto__ = (function (){var statearr_44855 = f__19819__auto__.call(null);
(statearr_44855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___44857);

return statearr_44855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___44857,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__){
return (function (state_44920){
var state_val_44921 = (state_44920[(1)]);
if((state_val_44921 === (1))){
var inst_44906 = init;
var state_44920__$1 = (function (){var statearr_44922 = state_44920;
(statearr_44922[(7)] = inst_44906);

return statearr_44922;
})();
var statearr_44923_44938 = state_44920__$1;
(statearr_44923_44938[(2)] = null);

(statearr_44923_44938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (2))){
var state_44920__$1 = state_44920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44920__$1,(4),ch);
} else {
if((state_val_44921 === (3))){
var inst_44918 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44920__$1,inst_44918);
} else {
if((state_val_44921 === (4))){
var inst_44909 = (state_44920[(8)]);
var inst_44909__$1 = (state_44920[(2)]);
var inst_44910 = (inst_44909__$1 == null);
var state_44920__$1 = (function (){var statearr_44924 = state_44920;
(statearr_44924[(8)] = inst_44909__$1);

return statearr_44924;
})();
if(cljs.core.truth_(inst_44910)){
var statearr_44925_44939 = state_44920__$1;
(statearr_44925_44939[(1)] = (5));

} else {
var statearr_44926_44940 = state_44920__$1;
(statearr_44926_44940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (5))){
var inst_44906 = (state_44920[(7)]);
var state_44920__$1 = state_44920;
var statearr_44927_44941 = state_44920__$1;
(statearr_44927_44941[(2)] = inst_44906);

(statearr_44927_44941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (6))){
var inst_44906 = (state_44920[(7)]);
var inst_44909 = (state_44920[(8)]);
var inst_44913 = f.call(null,inst_44906,inst_44909);
var inst_44906__$1 = inst_44913;
var state_44920__$1 = (function (){var statearr_44928 = state_44920;
(statearr_44928[(7)] = inst_44906__$1);

return statearr_44928;
})();
var statearr_44929_44942 = state_44920__$1;
(statearr_44929_44942[(2)] = null);

(statearr_44929_44942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (7))){
var inst_44916 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
var statearr_44930_44943 = state_44920__$1;
(statearr_44930_44943[(2)] = inst_44916);

(statearr_44930_44943[(1)] = (3));


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
});})(c__19818__auto__))
;
return ((function (switch__19756__auto__,c__19818__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19757__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19757__auto____0 = (function (){
var statearr_44934 = [null,null,null,null,null,null,null,null,null];
(statearr_44934[(0)] = cljs$core$async$reduce_$_state_machine__19757__auto__);

(statearr_44934[(1)] = (1));

return statearr_44934;
});
var cljs$core$async$reduce_$_state_machine__19757__auto____1 = (function (state_44920){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_44920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e44935){if((e44935 instanceof Object)){
var ex__19760__auto__ = e44935;
var statearr_44936_44944 = state_44920;
(statearr_44936_44944[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44945 = state_44920;
state_44920 = G__44945;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19757__auto__ = function(state_44920){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19757__auto____1.call(this,state_44920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19757__auto____0;
cljs$core$async$reduce_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19757__auto____1;
return cljs$core$async$reduce_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_44937 = f__19819__auto__.call(null);
(statearr_44937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_44937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__))
);

return c__19818__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__44947 = arguments.length;
switch (G__44947) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__){
return (function (state_44972){
var state_val_44973 = (state_44972[(1)]);
if((state_val_44973 === (7))){
var inst_44954 = (state_44972[(2)]);
var state_44972__$1 = state_44972;
var statearr_44974_44998 = state_44972__$1;
(statearr_44974_44998[(2)] = inst_44954);

(statearr_44974_44998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (1))){
var inst_44948 = cljs.core.seq.call(null,coll);
var inst_44949 = inst_44948;
var state_44972__$1 = (function (){var statearr_44975 = state_44972;
(statearr_44975[(7)] = inst_44949);

return statearr_44975;
})();
var statearr_44976_44999 = state_44972__$1;
(statearr_44976_44999[(2)] = null);

(statearr_44976_44999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (4))){
var inst_44949 = (state_44972[(7)]);
var inst_44952 = cljs.core.first.call(null,inst_44949);
var state_44972__$1 = state_44972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44972__$1,(7),ch,inst_44952);
} else {
if((state_val_44973 === (13))){
var inst_44966 = (state_44972[(2)]);
var state_44972__$1 = state_44972;
var statearr_44977_45000 = state_44972__$1;
(statearr_44977_45000[(2)] = inst_44966);

(statearr_44977_45000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (6))){
var inst_44957 = (state_44972[(2)]);
var state_44972__$1 = state_44972;
if(cljs.core.truth_(inst_44957)){
var statearr_44978_45001 = state_44972__$1;
(statearr_44978_45001[(1)] = (8));

} else {
var statearr_44979_45002 = state_44972__$1;
(statearr_44979_45002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (3))){
var inst_44970 = (state_44972[(2)]);
var state_44972__$1 = state_44972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44972__$1,inst_44970);
} else {
if((state_val_44973 === (12))){
var state_44972__$1 = state_44972;
var statearr_44980_45003 = state_44972__$1;
(statearr_44980_45003[(2)] = null);

(statearr_44980_45003[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (2))){
var inst_44949 = (state_44972[(7)]);
var state_44972__$1 = state_44972;
if(cljs.core.truth_(inst_44949)){
var statearr_44981_45004 = state_44972__$1;
(statearr_44981_45004[(1)] = (4));

} else {
var statearr_44982_45005 = state_44972__$1;
(statearr_44982_45005[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (11))){
var inst_44963 = cljs.core.async.close_BANG_.call(null,ch);
var state_44972__$1 = state_44972;
var statearr_44983_45006 = state_44972__$1;
(statearr_44983_45006[(2)] = inst_44963);

(statearr_44983_45006[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (9))){
var state_44972__$1 = state_44972;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44984_45007 = state_44972__$1;
(statearr_44984_45007[(1)] = (11));

} else {
var statearr_44985_45008 = state_44972__$1;
(statearr_44985_45008[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (5))){
var inst_44949 = (state_44972[(7)]);
var state_44972__$1 = state_44972;
var statearr_44986_45009 = state_44972__$1;
(statearr_44986_45009[(2)] = inst_44949);

(statearr_44986_45009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (10))){
var inst_44968 = (state_44972[(2)]);
var state_44972__$1 = state_44972;
var statearr_44987_45010 = state_44972__$1;
(statearr_44987_45010[(2)] = inst_44968);

(statearr_44987_45010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44973 === (8))){
var inst_44949 = (state_44972[(7)]);
var inst_44959 = cljs.core.next.call(null,inst_44949);
var inst_44949__$1 = inst_44959;
var state_44972__$1 = (function (){var statearr_44988 = state_44972;
(statearr_44988[(7)] = inst_44949__$1);

return statearr_44988;
})();
var statearr_44989_45011 = state_44972__$1;
(statearr_44989_45011[(2)] = null);

(statearr_44989_45011[(1)] = (2));


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
});})(c__19818__auto__))
;
return ((function (switch__19756__auto__,c__19818__auto__){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_44993 = [null,null,null,null,null,null,null,null];
(statearr_44993[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_44993[(1)] = (1));

return statearr_44993;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_44972){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_44972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e44994){if((e44994 instanceof Object)){
var ex__19760__auto__ = e44994;
var statearr_44995_45012 = state_44972;
(statearr_44995_45012[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45013 = state_44972;
state_44972 = G__45013;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_44972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_44972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_44996 = f__19819__auto__.call(null);
(statearr_44996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_44996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__))
);

return c__19818__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj45015 = {};
return obj45015;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16050__auto__ = _;
if(and__16050__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16050__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16698__auto__ = (((_ == null))?null:_);
return (function (){var or__16062__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj45017 = {};
return obj45017;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16050__auto__ = m;
if(and__16050__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16050__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16698__auto__ = (((m == null))?null:m);
return (function (){var or__16062__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16050__auto__ = m;
if(and__16050__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16050__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16698__auto__ = (((m == null))?null:m);
return (function (){var or__16062__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16050__auto__ = m;
if(and__16050__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16050__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16698__auto__ = (((m == null))?null:m);
return (function (){var or__16062__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t45239 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45239 = (function (mult,ch,cs,meta45240){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta45240 = meta45240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t45239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45241,meta45240__$1){
var self__ = this;
var _45241__$1 = this;
return (new cljs.core.async.t45239(self__.mult,self__.ch,self__.cs,meta45240__$1));
});})(cs))
;

cljs.core.async.t45239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45241){
var self__ = this;
var _45241__$1 = this;
return self__.meta45240;
});})(cs))
;

cljs.core.async.t45239.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t45239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t45239.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t45239.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t45239.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t45239.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t45239.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45240","meta45240",-1441039795,null)], null);
});})(cs))
;

cljs.core.async.t45239.cljs$lang$type = true;

cljs.core.async.t45239.cljs$lang$ctorStr = "cljs.core.async/t45239";

cljs.core.async.t45239.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t45239");
});})(cs))
;

cljs.core.async.__GT_t45239 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t45239(mult__$1,ch__$1,cs__$1,meta45240){
return (new cljs.core.async.t45239(mult__$1,ch__$1,cs__$1,meta45240));
});})(cs))
;

}

return (new cljs.core.async.t45239(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19818__auto___45460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___45460,cs,m,dchan,dctr,done){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___45460,cs,m,dchan,dctr,done){
return (function (state_45372){
var state_val_45373 = (state_45372[(1)]);
if((state_val_45373 === (7))){
var inst_45368 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45374_45461 = state_45372__$1;
(statearr_45374_45461[(2)] = inst_45368);

(statearr_45374_45461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (20))){
var inst_45273 = (state_45372[(7)]);
var inst_45283 = cljs.core.first.call(null,inst_45273);
var inst_45284 = cljs.core.nth.call(null,inst_45283,(0),null);
var inst_45285 = cljs.core.nth.call(null,inst_45283,(1),null);
var state_45372__$1 = (function (){var statearr_45375 = state_45372;
(statearr_45375[(8)] = inst_45284);

return statearr_45375;
})();
if(cljs.core.truth_(inst_45285)){
var statearr_45376_45462 = state_45372__$1;
(statearr_45376_45462[(1)] = (22));

} else {
var statearr_45377_45463 = state_45372__$1;
(statearr_45377_45463[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (27))){
var inst_45320 = (state_45372[(9)]);
var inst_45244 = (state_45372[(10)]);
var inst_45315 = (state_45372[(11)]);
var inst_45313 = (state_45372[(12)]);
var inst_45320__$1 = cljs.core._nth.call(null,inst_45313,inst_45315);
var inst_45321 = cljs.core.async.put_BANG_.call(null,inst_45320__$1,inst_45244,done);
var state_45372__$1 = (function (){var statearr_45378 = state_45372;
(statearr_45378[(9)] = inst_45320__$1);

return statearr_45378;
})();
if(cljs.core.truth_(inst_45321)){
var statearr_45379_45464 = state_45372__$1;
(statearr_45379_45464[(1)] = (30));

} else {
var statearr_45380_45465 = state_45372__$1;
(statearr_45380_45465[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (1))){
var state_45372__$1 = state_45372;
var statearr_45381_45466 = state_45372__$1;
(statearr_45381_45466[(2)] = null);

(statearr_45381_45466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (24))){
var inst_45273 = (state_45372[(7)]);
var inst_45290 = (state_45372[(2)]);
var inst_45291 = cljs.core.next.call(null,inst_45273);
var inst_45253 = inst_45291;
var inst_45254 = null;
var inst_45255 = (0);
var inst_45256 = (0);
var state_45372__$1 = (function (){var statearr_45382 = state_45372;
(statearr_45382[(13)] = inst_45253);

(statearr_45382[(14)] = inst_45255);

(statearr_45382[(15)] = inst_45254);

(statearr_45382[(16)] = inst_45256);

(statearr_45382[(17)] = inst_45290);

return statearr_45382;
})();
var statearr_45383_45467 = state_45372__$1;
(statearr_45383_45467[(2)] = null);

(statearr_45383_45467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (39))){
var state_45372__$1 = state_45372;
var statearr_45387_45468 = state_45372__$1;
(statearr_45387_45468[(2)] = null);

(statearr_45387_45468[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (4))){
var inst_45244 = (state_45372[(10)]);
var inst_45244__$1 = (state_45372[(2)]);
var inst_45245 = (inst_45244__$1 == null);
var state_45372__$1 = (function (){var statearr_45388 = state_45372;
(statearr_45388[(10)] = inst_45244__$1);

return statearr_45388;
})();
if(cljs.core.truth_(inst_45245)){
var statearr_45389_45469 = state_45372__$1;
(statearr_45389_45469[(1)] = (5));

} else {
var statearr_45390_45470 = state_45372__$1;
(statearr_45390_45470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (15))){
var inst_45253 = (state_45372[(13)]);
var inst_45255 = (state_45372[(14)]);
var inst_45254 = (state_45372[(15)]);
var inst_45256 = (state_45372[(16)]);
var inst_45269 = (state_45372[(2)]);
var inst_45270 = (inst_45256 + (1));
var tmp45384 = inst_45253;
var tmp45385 = inst_45255;
var tmp45386 = inst_45254;
var inst_45253__$1 = tmp45384;
var inst_45254__$1 = tmp45386;
var inst_45255__$1 = tmp45385;
var inst_45256__$1 = inst_45270;
var state_45372__$1 = (function (){var statearr_45391 = state_45372;
(statearr_45391[(13)] = inst_45253__$1);

(statearr_45391[(14)] = inst_45255__$1);

(statearr_45391[(15)] = inst_45254__$1);

(statearr_45391[(18)] = inst_45269);

(statearr_45391[(16)] = inst_45256__$1);

return statearr_45391;
})();
var statearr_45392_45471 = state_45372__$1;
(statearr_45392_45471[(2)] = null);

(statearr_45392_45471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (21))){
var inst_45294 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45396_45472 = state_45372__$1;
(statearr_45396_45472[(2)] = inst_45294);

(statearr_45396_45472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (31))){
var inst_45320 = (state_45372[(9)]);
var inst_45324 = done.call(null,null);
var inst_45325 = cljs.core.async.untap_STAR_.call(null,m,inst_45320);
var state_45372__$1 = (function (){var statearr_45397 = state_45372;
(statearr_45397[(19)] = inst_45324);

return statearr_45397;
})();
var statearr_45398_45473 = state_45372__$1;
(statearr_45398_45473[(2)] = inst_45325);

(statearr_45398_45473[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (32))){
var inst_45315 = (state_45372[(11)]);
var inst_45313 = (state_45372[(12)]);
var inst_45312 = (state_45372[(20)]);
var inst_45314 = (state_45372[(21)]);
var inst_45327 = (state_45372[(2)]);
var inst_45328 = (inst_45315 + (1));
var tmp45393 = inst_45313;
var tmp45394 = inst_45312;
var tmp45395 = inst_45314;
var inst_45312__$1 = tmp45394;
var inst_45313__$1 = tmp45393;
var inst_45314__$1 = tmp45395;
var inst_45315__$1 = inst_45328;
var state_45372__$1 = (function (){var statearr_45399 = state_45372;
(statearr_45399[(11)] = inst_45315__$1);

(statearr_45399[(12)] = inst_45313__$1);

(statearr_45399[(22)] = inst_45327);

(statearr_45399[(20)] = inst_45312__$1);

(statearr_45399[(21)] = inst_45314__$1);

return statearr_45399;
})();
var statearr_45400_45474 = state_45372__$1;
(statearr_45400_45474[(2)] = null);

(statearr_45400_45474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (40))){
var inst_45340 = (state_45372[(23)]);
var inst_45344 = done.call(null,null);
var inst_45345 = cljs.core.async.untap_STAR_.call(null,m,inst_45340);
var state_45372__$1 = (function (){var statearr_45401 = state_45372;
(statearr_45401[(24)] = inst_45344);

return statearr_45401;
})();
var statearr_45402_45475 = state_45372__$1;
(statearr_45402_45475[(2)] = inst_45345);

(statearr_45402_45475[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (33))){
var inst_45331 = (state_45372[(25)]);
var inst_45333 = cljs.core.chunked_seq_QMARK_.call(null,inst_45331);
var state_45372__$1 = state_45372;
if(inst_45333){
var statearr_45403_45476 = state_45372__$1;
(statearr_45403_45476[(1)] = (36));

} else {
var statearr_45404_45477 = state_45372__$1;
(statearr_45404_45477[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (13))){
var inst_45263 = (state_45372[(26)]);
var inst_45266 = cljs.core.async.close_BANG_.call(null,inst_45263);
var state_45372__$1 = state_45372;
var statearr_45405_45478 = state_45372__$1;
(statearr_45405_45478[(2)] = inst_45266);

(statearr_45405_45478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (22))){
var inst_45284 = (state_45372[(8)]);
var inst_45287 = cljs.core.async.close_BANG_.call(null,inst_45284);
var state_45372__$1 = state_45372;
var statearr_45406_45479 = state_45372__$1;
(statearr_45406_45479[(2)] = inst_45287);

(statearr_45406_45479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (36))){
var inst_45331 = (state_45372[(25)]);
var inst_45335 = cljs.core.chunk_first.call(null,inst_45331);
var inst_45336 = cljs.core.chunk_rest.call(null,inst_45331);
var inst_45337 = cljs.core.count.call(null,inst_45335);
var inst_45312 = inst_45336;
var inst_45313 = inst_45335;
var inst_45314 = inst_45337;
var inst_45315 = (0);
var state_45372__$1 = (function (){var statearr_45407 = state_45372;
(statearr_45407[(11)] = inst_45315);

(statearr_45407[(12)] = inst_45313);

(statearr_45407[(20)] = inst_45312);

(statearr_45407[(21)] = inst_45314);

return statearr_45407;
})();
var statearr_45408_45480 = state_45372__$1;
(statearr_45408_45480[(2)] = null);

(statearr_45408_45480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (41))){
var inst_45331 = (state_45372[(25)]);
var inst_45347 = (state_45372[(2)]);
var inst_45348 = cljs.core.next.call(null,inst_45331);
var inst_45312 = inst_45348;
var inst_45313 = null;
var inst_45314 = (0);
var inst_45315 = (0);
var state_45372__$1 = (function (){var statearr_45409 = state_45372;
(statearr_45409[(11)] = inst_45315);

(statearr_45409[(12)] = inst_45313);

(statearr_45409[(27)] = inst_45347);

(statearr_45409[(20)] = inst_45312);

(statearr_45409[(21)] = inst_45314);

return statearr_45409;
})();
var statearr_45410_45481 = state_45372__$1;
(statearr_45410_45481[(2)] = null);

(statearr_45410_45481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (43))){
var state_45372__$1 = state_45372;
var statearr_45411_45482 = state_45372__$1;
(statearr_45411_45482[(2)] = null);

(statearr_45411_45482[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (29))){
var inst_45356 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45412_45483 = state_45372__$1;
(statearr_45412_45483[(2)] = inst_45356);

(statearr_45412_45483[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (44))){
var inst_45365 = (state_45372[(2)]);
var state_45372__$1 = (function (){var statearr_45413 = state_45372;
(statearr_45413[(28)] = inst_45365);

return statearr_45413;
})();
var statearr_45414_45484 = state_45372__$1;
(statearr_45414_45484[(2)] = null);

(statearr_45414_45484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (6))){
var inst_45304 = (state_45372[(29)]);
var inst_45303 = cljs.core.deref.call(null,cs);
var inst_45304__$1 = cljs.core.keys.call(null,inst_45303);
var inst_45305 = cljs.core.count.call(null,inst_45304__$1);
var inst_45306 = cljs.core.reset_BANG_.call(null,dctr,inst_45305);
var inst_45311 = cljs.core.seq.call(null,inst_45304__$1);
var inst_45312 = inst_45311;
var inst_45313 = null;
var inst_45314 = (0);
var inst_45315 = (0);
var state_45372__$1 = (function (){var statearr_45415 = state_45372;
(statearr_45415[(11)] = inst_45315);

(statearr_45415[(12)] = inst_45313);

(statearr_45415[(30)] = inst_45306);

(statearr_45415[(20)] = inst_45312);

(statearr_45415[(29)] = inst_45304__$1);

(statearr_45415[(21)] = inst_45314);

return statearr_45415;
})();
var statearr_45416_45485 = state_45372__$1;
(statearr_45416_45485[(2)] = null);

(statearr_45416_45485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (28))){
var inst_45312 = (state_45372[(20)]);
var inst_45331 = (state_45372[(25)]);
var inst_45331__$1 = cljs.core.seq.call(null,inst_45312);
var state_45372__$1 = (function (){var statearr_45417 = state_45372;
(statearr_45417[(25)] = inst_45331__$1);

return statearr_45417;
})();
if(inst_45331__$1){
var statearr_45418_45486 = state_45372__$1;
(statearr_45418_45486[(1)] = (33));

} else {
var statearr_45419_45487 = state_45372__$1;
(statearr_45419_45487[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (25))){
var inst_45315 = (state_45372[(11)]);
var inst_45314 = (state_45372[(21)]);
var inst_45317 = (inst_45315 < inst_45314);
var inst_45318 = inst_45317;
var state_45372__$1 = state_45372;
if(cljs.core.truth_(inst_45318)){
var statearr_45420_45488 = state_45372__$1;
(statearr_45420_45488[(1)] = (27));

} else {
var statearr_45421_45489 = state_45372__$1;
(statearr_45421_45489[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (34))){
var state_45372__$1 = state_45372;
var statearr_45422_45490 = state_45372__$1;
(statearr_45422_45490[(2)] = null);

(statearr_45422_45490[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (17))){
var state_45372__$1 = state_45372;
var statearr_45423_45491 = state_45372__$1;
(statearr_45423_45491[(2)] = null);

(statearr_45423_45491[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (3))){
var inst_45370 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45372__$1,inst_45370);
} else {
if((state_val_45373 === (12))){
var inst_45299 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45424_45492 = state_45372__$1;
(statearr_45424_45492[(2)] = inst_45299);

(statearr_45424_45492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (2))){
var state_45372__$1 = state_45372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45372__$1,(4),ch);
} else {
if((state_val_45373 === (23))){
var state_45372__$1 = state_45372;
var statearr_45425_45493 = state_45372__$1;
(statearr_45425_45493[(2)] = null);

(statearr_45425_45493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (35))){
var inst_45354 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45426_45494 = state_45372__$1;
(statearr_45426_45494[(2)] = inst_45354);

(statearr_45426_45494[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (19))){
var inst_45273 = (state_45372[(7)]);
var inst_45277 = cljs.core.chunk_first.call(null,inst_45273);
var inst_45278 = cljs.core.chunk_rest.call(null,inst_45273);
var inst_45279 = cljs.core.count.call(null,inst_45277);
var inst_45253 = inst_45278;
var inst_45254 = inst_45277;
var inst_45255 = inst_45279;
var inst_45256 = (0);
var state_45372__$1 = (function (){var statearr_45427 = state_45372;
(statearr_45427[(13)] = inst_45253);

(statearr_45427[(14)] = inst_45255);

(statearr_45427[(15)] = inst_45254);

(statearr_45427[(16)] = inst_45256);

return statearr_45427;
})();
var statearr_45428_45495 = state_45372__$1;
(statearr_45428_45495[(2)] = null);

(statearr_45428_45495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (11))){
var inst_45253 = (state_45372[(13)]);
var inst_45273 = (state_45372[(7)]);
var inst_45273__$1 = cljs.core.seq.call(null,inst_45253);
var state_45372__$1 = (function (){var statearr_45429 = state_45372;
(statearr_45429[(7)] = inst_45273__$1);

return statearr_45429;
})();
if(inst_45273__$1){
var statearr_45430_45496 = state_45372__$1;
(statearr_45430_45496[(1)] = (16));

} else {
var statearr_45431_45497 = state_45372__$1;
(statearr_45431_45497[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (9))){
var inst_45301 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45432_45498 = state_45372__$1;
(statearr_45432_45498[(2)] = inst_45301);

(statearr_45432_45498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (5))){
var inst_45251 = cljs.core.deref.call(null,cs);
var inst_45252 = cljs.core.seq.call(null,inst_45251);
var inst_45253 = inst_45252;
var inst_45254 = null;
var inst_45255 = (0);
var inst_45256 = (0);
var state_45372__$1 = (function (){var statearr_45433 = state_45372;
(statearr_45433[(13)] = inst_45253);

(statearr_45433[(14)] = inst_45255);

(statearr_45433[(15)] = inst_45254);

(statearr_45433[(16)] = inst_45256);

return statearr_45433;
})();
var statearr_45434_45499 = state_45372__$1;
(statearr_45434_45499[(2)] = null);

(statearr_45434_45499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (14))){
var state_45372__$1 = state_45372;
var statearr_45435_45500 = state_45372__$1;
(statearr_45435_45500[(2)] = null);

(statearr_45435_45500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (45))){
var inst_45362 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45436_45501 = state_45372__$1;
(statearr_45436_45501[(2)] = inst_45362);

(statearr_45436_45501[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (26))){
var inst_45304 = (state_45372[(29)]);
var inst_45358 = (state_45372[(2)]);
var inst_45359 = cljs.core.seq.call(null,inst_45304);
var state_45372__$1 = (function (){var statearr_45437 = state_45372;
(statearr_45437[(31)] = inst_45358);

return statearr_45437;
})();
if(inst_45359){
var statearr_45438_45502 = state_45372__$1;
(statearr_45438_45502[(1)] = (42));

} else {
var statearr_45439_45503 = state_45372__$1;
(statearr_45439_45503[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (16))){
var inst_45273 = (state_45372[(7)]);
var inst_45275 = cljs.core.chunked_seq_QMARK_.call(null,inst_45273);
var state_45372__$1 = state_45372;
if(inst_45275){
var statearr_45440_45504 = state_45372__$1;
(statearr_45440_45504[(1)] = (19));

} else {
var statearr_45441_45505 = state_45372__$1;
(statearr_45441_45505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (38))){
var inst_45351 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45442_45506 = state_45372__$1;
(statearr_45442_45506[(2)] = inst_45351);

(statearr_45442_45506[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (30))){
var state_45372__$1 = state_45372;
var statearr_45443_45507 = state_45372__$1;
(statearr_45443_45507[(2)] = null);

(statearr_45443_45507[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (10))){
var inst_45254 = (state_45372[(15)]);
var inst_45256 = (state_45372[(16)]);
var inst_45262 = cljs.core._nth.call(null,inst_45254,inst_45256);
var inst_45263 = cljs.core.nth.call(null,inst_45262,(0),null);
var inst_45264 = cljs.core.nth.call(null,inst_45262,(1),null);
var state_45372__$1 = (function (){var statearr_45444 = state_45372;
(statearr_45444[(26)] = inst_45263);

return statearr_45444;
})();
if(cljs.core.truth_(inst_45264)){
var statearr_45445_45508 = state_45372__$1;
(statearr_45445_45508[(1)] = (13));

} else {
var statearr_45446_45509 = state_45372__$1;
(statearr_45446_45509[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (18))){
var inst_45297 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45447_45510 = state_45372__$1;
(statearr_45447_45510[(2)] = inst_45297);

(statearr_45447_45510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (42))){
var state_45372__$1 = state_45372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45372__$1,(45),dchan);
} else {
if((state_val_45373 === (37))){
var inst_45244 = (state_45372[(10)]);
var inst_45340 = (state_45372[(23)]);
var inst_45331 = (state_45372[(25)]);
var inst_45340__$1 = cljs.core.first.call(null,inst_45331);
var inst_45341 = cljs.core.async.put_BANG_.call(null,inst_45340__$1,inst_45244,done);
var state_45372__$1 = (function (){var statearr_45448 = state_45372;
(statearr_45448[(23)] = inst_45340__$1);

return statearr_45448;
})();
if(cljs.core.truth_(inst_45341)){
var statearr_45449_45511 = state_45372__$1;
(statearr_45449_45511[(1)] = (39));

} else {
var statearr_45450_45512 = state_45372__$1;
(statearr_45450_45512[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (8))){
var inst_45255 = (state_45372[(14)]);
var inst_45256 = (state_45372[(16)]);
var inst_45258 = (inst_45256 < inst_45255);
var inst_45259 = inst_45258;
var state_45372__$1 = state_45372;
if(cljs.core.truth_(inst_45259)){
var statearr_45451_45513 = state_45372__$1;
(statearr_45451_45513[(1)] = (10));

} else {
var statearr_45452_45514 = state_45372__$1;
(statearr_45452_45514[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__19818__auto___45460,cs,m,dchan,dctr,done))
;
return ((function (switch__19756__auto__,c__19818__auto___45460,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19757__auto__ = null;
var cljs$core$async$mult_$_state_machine__19757__auto____0 = (function (){
var statearr_45456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45456[(0)] = cljs$core$async$mult_$_state_machine__19757__auto__);

(statearr_45456[(1)] = (1));

return statearr_45456;
});
var cljs$core$async$mult_$_state_machine__19757__auto____1 = (function (state_45372){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_45372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e45457){if((e45457 instanceof Object)){
var ex__19760__auto__ = e45457;
var statearr_45458_45515 = state_45372;
(statearr_45458_45515[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45516 = state_45372;
state_45372 = G__45516;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19757__auto__ = function(state_45372){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19757__auto____1.call(this,state_45372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19757__auto____0;
cljs$core$async$mult_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19757__auto____1;
return cljs$core$async$mult_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___45460,cs,m,dchan,dctr,done))
})();
var state__19820__auto__ = (function (){var statearr_45459 = f__19819__auto__.call(null);
(statearr_45459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___45460);

return statearr_45459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___45460,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__45518 = arguments.length;
switch (G__45518) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj45521 = {};
return obj45521;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16050__auto__ = m;
if(and__16050__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16050__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16698__auto__ = (((m == null))?null:m);
return (function (){var or__16062__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16050__auto__ = m;
if(and__16050__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16050__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16698__auto__ = (((m == null))?null:m);
return (function (){var or__16062__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16050__auto__ = m;
if(and__16050__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16050__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16698__auto__ = (((m == null))?null:m);
return (function (){var or__16062__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16050__auto__ = m;
if(and__16050__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16050__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16698__auto__ = (((m == null))?null:m);
return (function (){var or__16062__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16050__auto__ = m;
if(and__16050__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16050__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16698__auto__ = (((m == null))?null:m);
return (function (){var or__16062__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17102__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17102__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45526){
var map__45527 = p__45526;
var map__45527__$1 = ((cljs.core.seq_QMARK_.call(null,map__45527))?cljs.core.apply.call(null,cljs.core.hash_map,map__45527):map__45527);
var opts = map__45527__$1;
var statearr_45528_45531 = state;
(statearr_45528_45531[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__45527,map__45527__$1,opts){
return (function (val){
var statearr_45529_45532 = state;
(statearr_45529_45532[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45527,map__45527__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_45530_45533 = state;
(statearr_45530_45533[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45522){
var G__45523 = cljs.core.first.call(null,seq45522);
var seq45522__$1 = cljs.core.next.call(null,seq45522);
var G__45524 = cljs.core.first.call(null,seq45522__$1);
var seq45522__$2 = cljs.core.next.call(null,seq45522__$1);
var G__45525 = cljs.core.first.call(null,seq45522__$2);
var seq45522__$3 = cljs.core.next.call(null,seq45522__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45523,G__45524,G__45525,seq45522__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t45653 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45653 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45654){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45654 = meta45654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t45653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45655,meta45654__$1){
var self__ = this;
var _45655__$1 = this;
return (new cljs.core.async.t45653(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45654__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t45653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45655){
var self__ = this;
var _45655__$1 = this;
return self__.meta45654;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t45653.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t45653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t45653.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t45653.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t45653.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t45653.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t45653.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t45653.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t45653.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45654","meta45654",1831742904,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t45653.cljs$lang$type = true;

cljs.core.async.t45653.cljs$lang$ctorStr = "cljs.core.async/t45653";

cljs.core.async.t45653.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t45653");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t45653 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t45653(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45654){
return (new cljs.core.async.t45653(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45654));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t45653(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19818__auto___45772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___45772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___45772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45725){
var state_val_45726 = (state_45725[(1)]);
if((state_val_45726 === (7))){
var inst_45669 = (state_45725[(7)]);
var inst_45674 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45669);
var state_45725__$1 = state_45725;
var statearr_45727_45773 = state_45725__$1;
(statearr_45727_45773[(2)] = inst_45674);

(statearr_45727_45773[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (20))){
var inst_45684 = (state_45725[(8)]);
var state_45725__$1 = state_45725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45725__$1,(23),out,inst_45684);
} else {
if((state_val_45726 === (1))){
var inst_45659 = (state_45725[(9)]);
var inst_45659__$1 = calc_state.call(null);
var inst_45660 = cljs.core.seq_QMARK_.call(null,inst_45659__$1);
var state_45725__$1 = (function (){var statearr_45728 = state_45725;
(statearr_45728[(9)] = inst_45659__$1);

return statearr_45728;
})();
if(inst_45660){
var statearr_45729_45774 = state_45725__$1;
(statearr_45729_45774[(1)] = (2));

} else {
var statearr_45730_45775 = state_45725__$1;
(statearr_45730_45775[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (24))){
var inst_45677 = (state_45725[(10)]);
var inst_45669 = inst_45677;
var state_45725__$1 = (function (){var statearr_45731 = state_45725;
(statearr_45731[(7)] = inst_45669);

return statearr_45731;
})();
var statearr_45732_45776 = state_45725__$1;
(statearr_45732_45776[(2)] = null);

(statearr_45732_45776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (4))){
var inst_45659 = (state_45725[(9)]);
var inst_45665 = (state_45725[(2)]);
var inst_45666 = cljs.core.get.call(null,inst_45665,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45667 = cljs.core.get.call(null,inst_45665,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45668 = cljs.core.get.call(null,inst_45665,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45669 = inst_45659;
var state_45725__$1 = (function (){var statearr_45733 = state_45725;
(statearr_45733[(11)] = inst_45666);

(statearr_45733[(12)] = inst_45667);

(statearr_45733[(7)] = inst_45669);

(statearr_45733[(13)] = inst_45668);

return statearr_45733;
})();
var statearr_45734_45777 = state_45725__$1;
(statearr_45734_45777[(2)] = null);

(statearr_45734_45777[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (15))){
var state_45725__$1 = state_45725;
var statearr_45735_45778 = state_45725__$1;
(statearr_45735_45778[(2)] = null);

(statearr_45735_45778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (21))){
var inst_45677 = (state_45725[(10)]);
var inst_45669 = inst_45677;
var state_45725__$1 = (function (){var statearr_45736 = state_45725;
(statearr_45736[(7)] = inst_45669);

return statearr_45736;
})();
var statearr_45737_45779 = state_45725__$1;
(statearr_45737_45779[(2)] = null);

(statearr_45737_45779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (13))){
var inst_45721 = (state_45725[(2)]);
var state_45725__$1 = state_45725;
var statearr_45738_45780 = state_45725__$1;
(statearr_45738_45780[(2)] = inst_45721);

(statearr_45738_45780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (22))){
var inst_45719 = (state_45725[(2)]);
var state_45725__$1 = state_45725;
var statearr_45739_45781 = state_45725__$1;
(statearr_45739_45781[(2)] = inst_45719);

(statearr_45739_45781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (6))){
var inst_45723 = (state_45725[(2)]);
var state_45725__$1 = state_45725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45725__$1,inst_45723);
} else {
if((state_val_45726 === (25))){
var state_45725__$1 = state_45725;
var statearr_45740_45782 = state_45725__$1;
(statearr_45740_45782[(2)] = null);

(statearr_45740_45782[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (17))){
var inst_45699 = (state_45725[(14)]);
var state_45725__$1 = state_45725;
var statearr_45741_45783 = state_45725__$1;
(statearr_45741_45783[(2)] = inst_45699);

(statearr_45741_45783[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (3))){
var inst_45659 = (state_45725[(9)]);
var state_45725__$1 = state_45725;
var statearr_45742_45784 = state_45725__$1;
(statearr_45742_45784[(2)] = inst_45659);

(statearr_45742_45784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (12))){
var inst_45685 = (state_45725[(15)]);
var inst_45699 = (state_45725[(14)]);
var inst_45678 = (state_45725[(16)]);
var inst_45699__$1 = inst_45678.call(null,inst_45685);
var state_45725__$1 = (function (){var statearr_45743 = state_45725;
(statearr_45743[(14)] = inst_45699__$1);

return statearr_45743;
})();
if(cljs.core.truth_(inst_45699__$1)){
var statearr_45744_45785 = state_45725__$1;
(statearr_45744_45785[(1)] = (17));

} else {
var statearr_45745_45786 = state_45725__$1;
(statearr_45745_45786[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (2))){
var inst_45659 = (state_45725[(9)]);
var inst_45662 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45659);
var state_45725__$1 = state_45725;
var statearr_45746_45787 = state_45725__$1;
(statearr_45746_45787[(2)] = inst_45662);

(statearr_45746_45787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (23))){
var inst_45710 = (state_45725[(2)]);
var state_45725__$1 = state_45725;
if(cljs.core.truth_(inst_45710)){
var statearr_45747_45788 = state_45725__$1;
(statearr_45747_45788[(1)] = (24));

} else {
var statearr_45748_45789 = state_45725__$1;
(statearr_45748_45789[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (19))){
var inst_45707 = (state_45725[(2)]);
var state_45725__$1 = state_45725;
if(cljs.core.truth_(inst_45707)){
var statearr_45749_45790 = state_45725__$1;
(statearr_45749_45790[(1)] = (20));

} else {
var statearr_45750_45791 = state_45725__$1;
(statearr_45750_45791[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (11))){
var inst_45684 = (state_45725[(8)]);
var inst_45690 = (inst_45684 == null);
var state_45725__$1 = state_45725;
if(cljs.core.truth_(inst_45690)){
var statearr_45751_45792 = state_45725__$1;
(statearr_45751_45792[(1)] = (14));

} else {
var statearr_45752_45793 = state_45725__$1;
(statearr_45752_45793[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (9))){
var inst_45677 = (state_45725[(10)]);
var inst_45677__$1 = (state_45725[(2)]);
var inst_45678 = cljs.core.get.call(null,inst_45677__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45679 = cljs.core.get.call(null,inst_45677__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45680 = cljs.core.get.call(null,inst_45677__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45725__$1 = (function (){var statearr_45753 = state_45725;
(statearr_45753[(10)] = inst_45677__$1);

(statearr_45753[(17)] = inst_45679);

(statearr_45753[(16)] = inst_45678);

return statearr_45753;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45725__$1,(10),inst_45680);
} else {
if((state_val_45726 === (5))){
var inst_45669 = (state_45725[(7)]);
var inst_45672 = cljs.core.seq_QMARK_.call(null,inst_45669);
var state_45725__$1 = state_45725;
if(inst_45672){
var statearr_45754_45794 = state_45725__$1;
(statearr_45754_45794[(1)] = (7));

} else {
var statearr_45755_45795 = state_45725__$1;
(statearr_45755_45795[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (14))){
var inst_45685 = (state_45725[(15)]);
var inst_45692 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45685);
var state_45725__$1 = state_45725;
var statearr_45756_45796 = state_45725__$1;
(statearr_45756_45796[(2)] = inst_45692);

(statearr_45756_45796[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (26))){
var inst_45715 = (state_45725[(2)]);
var state_45725__$1 = state_45725;
var statearr_45757_45797 = state_45725__$1;
(statearr_45757_45797[(2)] = inst_45715);

(statearr_45757_45797[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (16))){
var inst_45695 = (state_45725[(2)]);
var inst_45696 = calc_state.call(null);
var inst_45669 = inst_45696;
var state_45725__$1 = (function (){var statearr_45758 = state_45725;
(statearr_45758[(18)] = inst_45695);

(statearr_45758[(7)] = inst_45669);

return statearr_45758;
})();
var statearr_45759_45798 = state_45725__$1;
(statearr_45759_45798[(2)] = null);

(statearr_45759_45798[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (10))){
var inst_45685 = (state_45725[(15)]);
var inst_45684 = (state_45725[(8)]);
var inst_45683 = (state_45725[(2)]);
var inst_45684__$1 = cljs.core.nth.call(null,inst_45683,(0),null);
var inst_45685__$1 = cljs.core.nth.call(null,inst_45683,(1),null);
var inst_45686 = (inst_45684__$1 == null);
var inst_45687 = cljs.core._EQ_.call(null,inst_45685__$1,change);
var inst_45688 = (inst_45686) || (inst_45687);
var state_45725__$1 = (function (){var statearr_45760 = state_45725;
(statearr_45760[(15)] = inst_45685__$1);

(statearr_45760[(8)] = inst_45684__$1);

return statearr_45760;
})();
if(cljs.core.truth_(inst_45688)){
var statearr_45761_45799 = state_45725__$1;
(statearr_45761_45799[(1)] = (11));

} else {
var statearr_45762_45800 = state_45725__$1;
(statearr_45762_45800[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (18))){
var inst_45685 = (state_45725[(15)]);
var inst_45679 = (state_45725[(17)]);
var inst_45678 = (state_45725[(16)]);
var inst_45702 = cljs.core.empty_QMARK_.call(null,inst_45678);
var inst_45703 = inst_45679.call(null,inst_45685);
var inst_45704 = cljs.core.not.call(null,inst_45703);
var inst_45705 = (inst_45702) && (inst_45704);
var state_45725__$1 = state_45725;
var statearr_45763_45801 = state_45725__$1;
(statearr_45763_45801[(2)] = inst_45705);

(statearr_45763_45801[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45726 === (8))){
var inst_45669 = (state_45725[(7)]);
var state_45725__$1 = state_45725;
var statearr_45764_45802 = state_45725__$1;
(statearr_45764_45802[(2)] = inst_45669);

(statearr_45764_45802[(1)] = (9));


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
});})(c__19818__auto___45772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19756__auto__,c__19818__auto___45772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19757__auto__ = null;
var cljs$core$async$mix_$_state_machine__19757__auto____0 = (function (){
var statearr_45768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45768[(0)] = cljs$core$async$mix_$_state_machine__19757__auto__);

(statearr_45768[(1)] = (1));

return statearr_45768;
});
var cljs$core$async$mix_$_state_machine__19757__auto____1 = (function (state_45725){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_45725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e45769){if((e45769 instanceof Object)){
var ex__19760__auto__ = e45769;
var statearr_45770_45803 = state_45725;
(statearr_45770_45803[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45804 = state_45725;
state_45725 = G__45804;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19757__auto__ = function(state_45725){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19757__auto____1.call(this,state_45725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19757__auto____0;
cljs$core$async$mix_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19757__auto____1;
return cljs$core$async$mix_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___45772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19820__auto__ = (function (){var statearr_45771 = f__19819__auto__.call(null);
(statearr_45771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___45772);

return statearr_45771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___45772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj45806 = {};
return obj45806;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16050__auto__ = p;
if(and__16050__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16050__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16698__auto__ = (((p == null))?null:p);
return (function (){var or__16062__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16050__auto__ = p;
if(and__16050__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16050__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16698__auto__ = (((p == null))?null:p);
return (function (){var or__16062__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__45808 = arguments.length;
switch (G__45808) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__16050__auto__ = p;
if(and__16050__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16050__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16698__auto__ = (((p == null))?null:p);
return (function (){var or__16062__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16050__auto__ = p;
if(and__16050__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16050__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16698__auto__ = (((p == null))?null:p);
return (function (){var or__16062__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16698__auto__)]);
if(or__16062__auto__){
return or__16062__auto__;
} else {
var or__16062__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16062__auto____$1){
return or__16062__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__45812 = arguments.length;
switch (G__45812) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16062__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16062__auto__,mults){
return (function (p1__45810_SHARP_){
if(cljs.core.truth_(p1__45810_SHARP_.call(null,topic))){
return p1__45810_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45810_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16062__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t45813 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45813 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45814){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45814 = meta45814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t45813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45815,meta45814__$1){
var self__ = this;
var _45815__$1 = this;
return (new cljs.core.async.t45813(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45814__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t45813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45815){
var self__ = this;
var _45815__$1 = this;
return self__.meta45814;
});})(mults,ensure_mult))
;

cljs.core.async.t45813.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t45813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t45813.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t45813.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t45813.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t45813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t45813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t45813.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45814","meta45814",180259641,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t45813.cljs$lang$type = true;

cljs.core.async.t45813.cljs$lang$ctorStr = "cljs.core.async/t45813";

cljs.core.async.t45813.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t45813");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t45813 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t45813(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45814){
return (new cljs.core.async.t45813(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45814));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t45813(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19818__auto___45936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___45936,mults,ensure_mult,p){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___45936,mults,ensure_mult,p){
return (function (state_45887){
var state_val_45888 = (state_45887[(1)]);
if((state_val_45888 === (7))){
var inst_45883 = (state_45887[(2)]);
var state_45887__$1 = state_45887;
var statearr_45889_45937 = state_45887__$1;
(statearr_45889_45937[(2)] = inst_45883);

(statearr_45889_45937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (20))){
var state_45887__$1 = state_45887;
var statearr_45890_45938 = state_45887__$1;
(statearr_45890_45938[(2)] = null);

(statearr_45890_45938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (1))){
var state_45887__$1 = state_45887;
var statearr_45891_45939 = state_45887__$1;
(statearr_45891_45939[(2)] = null);

(statearr_45891_45939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (24))){
var inst_45866 = (state_45887[(7)]);
var inst_45875 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45866);
var state_45887__$1 = state_45887;
var statearr_45892_45940 = state_45887__$1;
(statearr_45892_45940[(2)] = inst_45875);

(statearr_45892_45940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (4))){
var inst_45818 = (state_45887[(8)]);
var inst_45818__$1 = (state_45887[(2)]);
var inst_45819 = (inst_45818__$1 == null);
var state_45887__$1 = (function (){var statearr_45893 = state_45887;
(statearr_45893[(8)] = inst_45818__$1);

return statearr_45893;
})();
if(cljs.core.truth_(inst_45819)){
var statearr_45894_45941 = state_45887__$1;
(statearr_45894_45941[(1)] = (5));

} else {
var statearr_45895_45942 = state_45887__$1;
(statearr_45895_45942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (15))){
var inst_45860 = (state_45887[(2)]);
var state_45887__$1 = state_45887;
var statearr_45896_45943 = state_45887__$1;
(statearr_45896_45943[(2)] = inst_45860);

(statearr_45896_45943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (21))){
var inst_45880 = (state_45887[(2)]);
var state_45887__$1 = (function (){var statearr_45897 = state_45887;
(statearr_45897[(9)] = inst_45880);

return statearr_45897;
})();
var statearr_45898_45944 = state_45887__$1;
(statearr_45898_45944[(2)] = null);

(statearr_45898_45944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (13))){
var inst_45842 = (state_45887[(10)]);
var inst_45844 = cljs.core.chunked_seq_QMARK_.call(null,inst_45842);
var state_45887__$1 = state_45887;
if(inst_45844){
var statearr_45899_45945 = state_45887__$1;
(statearr_45899_45945[(1)] = (16));

} else {
var statearr_45900_45946 = state_45887__$1;
(statearr_45900_45946[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (22))){
var inst_45872 = (state_45887[(2)]);
var state_45887__$1 = state_45887;
if(cljs.core.truth_(inst_45872)){
var statearr_45901_45947 = state_45887__$1;
(statearr_45901_45947[(1)] = (23));

} else {
var statearr_45902_45948 = state_45887__$1;
(statearr_45902_45948[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (6))){
var inst_45818 = (state_45887[(8)]);
var inst_45868 = (state_45887[(11)]);
var inst_45866 = (state_45887[(7)]);
var inst_45866__$1 = topic_fn.call(null,inst_45818);
var inst_45867 = cljs.core.deref.call(null,mults);
var inst_45868__$1 = cljs.core.get.call(null,inst_45867,inst_45866__$1);
var state_45887__$1 = (function (){var statearr_45903 = state_45887;
(statearr_45903[(11)] = inst_45868__$1);

(statearr_45903[(7)] = inst_45866__$1);

return statearr_45903;
})();
if(cljs.core.truth_(inst_45868__$1)){
var statearr_45904_45949 = state_45887__$1;
(statearr_45904_45949[(1)] = (19));

} else {
var statearr_45905_45950 = state_45887__$1;
(statearr_45905_45950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (25))){
var inst_45877 = (state_45887[(2)]);
var state_45887__$1 = state_45887;
var statearr_45906_45951 = state_45887__$1;
(statearr_45906_45951[(2)] = inst_45877);

(statearr_45906_45951[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (17))){
var inst_45842 = (state_45887[(10)]);
var inst_45851 = cljs.core.first.call(null,inst_45842);
var inst_45852 = cljs.core.async.muxch_STAR_.call(null,inst_45851);
var inst_45853 = cljs.core.async.close_BANG_.call(null,inst_45852);
var inst_45854 = cljs.core.next.call(null,inst_45842);
var inst_45828 = inst_45854;
var inst_45829 = null;
var inst_45830 = (0);
var inst_45831 = (0);
var state_45887__$1 = (function (){var statearr_45907 = state_45887;
(statearr_45907[(12)] = inst_45830);

(statearr_45907[(13)] = inst_45831);

(statearr_45907[(14)] = inst_45853);

(statearr_45907[(15)] = inst_45829);

(statearr_45907[(16)] = inst_45828);

return statearr_45907;
})();
var statearr_45908_45952 = state_45887__$1;
(statearr_45908_45952[(2)] = null);

(statearr_45908_45952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (3))){
var inst_45885 = (state_45887[(2)]);
var state_45887__$1 = state_45887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45887__$1,inst_45885);
} else {
if((state_val_45888 === (12))){
var inst_45862 = (state_45887[(2)]);
var state_45887__$1 = state_45887;
var statearr_45909_45953 = state_45887__$1;
(statearr_45909_45953[(2)] = inst_45862);

(statearr_45909_45953[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (2))){
var state_45887__$1 = state_45887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45887__$1,(4),ch);
} else {
if((state_val_45888 === (23))){
var state_45887__$1 = state_45887;
var statearr_45910_45954 = state_45887__$1;
(statearr_45910_45954[(2)] = null);

(statearr_45910_45954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (19))){
var inst_45818 = (state_45887[(8)]);
var inst_45868 = (state_45887[(11)]);
var inst_45870 = cljs.core.async.muxch_STAR_.call(null,inst_45868);
var state_45887__$1 = state_45887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45887__$1,(22),inst_45870,inst_45818);
} else {
if((state_val_45888 === (11))){
var inst_45842 = (state_45887[(10)]);
var inst_45828 = (state_45887[(16)]);
var inst_45842__$1 = cljs.core.seq.call(null,inst_45828);
var state_45887__$1 = (function (){var statearr_45911 = state_45887;
(statearr_45911[(10)] = inst_45842__$1);

return statearr_45911;
})();
if(inst_45842__$1){
var statearr_45912_45955 = state_45887__$1;
(statearr_45912_45955[(1)] = (13));

} else {
var statearr_45913_45956 = state_45887__$1;
(statearr_45913_45956[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (9))){
var inst_45864 = (state_45887[(2)]);
var state_45887__$1 = state_45887;
var statearr_45914_45957 = state_45887__$1;
(statearr_45914_45957[(2)] = inst_45864);

(statearr_45914_45957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (5))){
var inst_45825 = cljs.core.deref.call(null,mults);
var inst_45826 = cljs.core.vals.call(null,inst_45825);
var inst_45827 = cljs.core.seq.call(null,inst_45826);
var inst_45828 = inst_45827;
var inst_45829 = null;
var inst_45830 = (0);
var inst_45831 = (0);
var state_45887__$1 = (function (){var statearr_45915 = state_45887;
(statearr_45915[(12)] = inst_45830);

(statearr_45915[(13)] = inst_45831);

(statearr_45915[(15)] = inst_45829);

(statearr_45915[(16)] = inst_45828);

return statearr_45915;
})();
var statearr_45916_45958 = state_45887__$1;
(statearr_45916_45958[(2)] = null);

(statearr_45916_45958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (14))){
var state_45887__$1 = state_45887;
var statearr_45920_45959 = state_45887__$1;
(statearr_45920_45959[(2)] = null);

(statearr_45920_45959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (16))){
var inst_45842 = (state_45887[(10)]);
var inst_45846 = cljs.core.chunk_first.call(null,inst_45842);
var inst_45847 = cljs.core.chunk_rest.call(null,inst_45842);
var inst_45848 = cljs.core.count.call(null,inst_45846);
var inst_45828 = inst_45847;
var inst_45829 = inst_45846;
var inst_45830 = inst_45848;
var inst_45831 = (0);
var state_45887__$1 = (function (){var statearr_45921 = state_45887;
(statearr_45921[(12)] = inst_45830);

(statearr_45921[(13)] = inst_45831);

(statearr_45921[(15)] = inst_45829);

(statearr_45921[(16)] = inst_45828);

return statearr_45921;
})();
var statearr_45922_45960 = state_45887__$1;
(statearr_45922_45960[(2)] = null);

(statearr_45922_45960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (10))){
var inst_45830 = (state_45887[(12)]);
var inst_45831 = (state_45887[(13)]);
var inst_45829 = (state_45887[(15)]);
var inst_45828 = (state_45887[(16)]);
var inst_45836 = cljs.core._nth.call(null,inst_45829,inst_45831);
var inst_45837 = cljs.core.async.muxch_STAR_.call(null,inst_45836);
var inst_45838 = cljs.core.async.close_BANG_.call(null,inst_45837);
var inst_45839 = (inst_45831 + (1));
var tmp45917 = inst_45830;
var tmp45918 = inst_45829;
var tmp45919 = inst_45828;
var inst_45828__$1 = tmp45919;
var inst_45829__$1 = tmp45918;
var inst_45830__$1 = tmp45917;
var inst_45831__$1 = inst_45839;
var state_45887__$1 = (function (){var statearr_45923 = state_45887;
(statearr_45923[(12)] = inst_45830__$1);

(statearr_45923[(17)] = inst_45838);

(statearr_45923[(13)] = inst_45831__$1);

(statearr_45923[(15)] = inst_45829__$1);

(statearr_45923[(16)] = inst_45828__$1);

return statearr_45923;
})();
var statearr_45924_45961 = state_45887__$1;
(statearr_45924_45961[(2)] = null);

(statearr_45924_45961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (18))){
var inst_45857 = (state_45887[(2)]);
var state_45887__$1 = state_45887;
var statearr_45925_45962 = state_45887__$1;
(statearr_45925_45962[(2)] = inst_45857);

(statearr_45925_45962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45888 === (8))){
var inst_45830 = (state_45887[(12)]);
var inst_45831 = (state_45887[(13)]);
var inst_45833 = (inst_45831 < inst_45830);
var inst_45834 = inst_45833;
var state_45887__$1 = state_45887;
if(cljs.core.truth_(inst_45834)){
var statearr_45926_45963 = state_45887__$1;
(statearr_45926_45963[(1)] = (10));

} else {
var statearr_45927_45964 = state_45887__$1;
(statearr_45927_45964[(1)] = (11));

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
});})(c__19818__auto___45936,mults,ensure_mult,p))
;
return ((function (switch__19756__auto__,c__19818__auto___45936,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_45931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45931[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_45931[(1)] = (1));

return statearr_45931;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_45887){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_45887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e45932){if((e45932 instanceof Object)){
var ex__19760__auto__ = e45932;
var statearr_45933_45965 = state_45887;
(statearr_45933_45965[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45966 = state_45887;
state_45887 = G__45966;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_45887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_45887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___45936,mults,ensure_mult,p))
})();
var state__19820__auto__ = (function (){var statearr_45934 = f__19819__auto__.call(null);
(statearr_45934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___45936);

return statearr_45934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___45936,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__45968 = arguments.length;
switch (G__45968) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__45971 = arguments.length;
switch (G__45971) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__45974 = arguments.length;
switch (G__45974) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19818__auto___46044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___46044,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___46044,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46013){
var state_val_46014 = (state_46013[(1)]);
if((state_val_46014 === (7))){
var state_46013__$1 = state_46013;
var statearr_46015_46045 = state_46013__$1;
(statearr_46015_46045[(2)] = null);

(statearr_46015_46045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (1))){
var state_46013__$1 = state_46013;
var statearr_46016_46046 = state_46013__$1;
(statearr_46016_46046[(2)] = null);

(statearr_46016_46046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (4))){
var inst_45977 = (state_46013[(7)]);
var inst_45979 = (inst_45977 < cnt);
var state_46013__$1 = state_46013;
if(cljs.core.truth_(inst_45979)){
var statearr_46017_46047 = state_46013__$1;
(statearr_46017_46047[(1)] = (6));

} else {
var statearr_46018_46048 = state_46013__$1;
(statearr_46018_46048[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (15))){
var inst_46009 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
var statearr_46019_46049 = state_46013__$1;
(statearr_46019_46049[(2)] = inst_46009);

(statearr_46019_46049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (13))){
var inst_46002 = cljs.core.async.close_BANG_.call(null,out);
var state_46013__$1 = state_46013;
var statearr_46020_46050 = state_46013__$1;
(statearr_46020_46050[(2)] = inst_46002);

(statearr_46020_46050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (6))){
var state_46013__$1 = state_46013;
var statearr_46021_46051 = state_46013__$1;
(statearr_46021_46051[(2)] = null);

(statearr_46021_46051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (3))){
var inst_46011 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46013__$1,inst_46011);
} else {
if((state_val_46014 === (12))){
var inst_45999 = (state_46013[(8)]);
var inst_45999__$1 = (state_46013[(2)]);
var inst_46000 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45999__$1);
var state_46013__$1 = (function (){var statearr_46022 = state_46013;
(statearr_46022[(8)] = inst_45999__$1);

return statearr_46022;
})();
if(cljs.core.truth_(inst_46000)){
var statearr_46023_46052 = state_46013__$1;
(statearr_46023_46052[(1)] = (13));

} else {
var statearr_46024_46053 = state_46013__$1;
(statearr_46024_46053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (2))){
var inst_45976 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45977 = (0);
var state_46013__$1 = (function (){var statearr_46025 = state_46013;
(statearr_46025[(7)] = inst_45977);

(statearr_46025[(9)] = inst_45976);

return statearr_46025;
})();
var statearr_46026_46054 = state_46013__$1;
(statearr_46026_46054[(2)] = null);

(statearr_46026_46054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (11))){
var inst_45977 = (state_46013[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46013,(10),Object,null,(9));
var inst_45986 = chs__$1.call(null,inst_45977);
var inst_45987 = done.call(null,inst_45977);
var inst_45988 = cljs.core.async.take_BANG_.call(null,inst_45986,inst_45987);
var state_46013__$1 = state_46013;
var statearr_46027_46055 = state_46013__$1;
(statearr_46027_46055[(2)] = inst_45988);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46013__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (9))){
var inst_45977 = (state_46013[(7)]);
var inst_45990 = (state_46013[(2)]);
var inst_45991 = (inst_45977 + (1));
var inst_45977__$1 = inst_45991;
var state_46013__$1 = (function (){var statearr_46028 = state_46013;
(statearr_46028[(10)] = inst_45990);

(statearr_46028[(7)] = inst_45977__$1);

return statearr_46028;
})();
var statearr_46029_46056 = state_46013__$1;
(statearr_46029_46056[(2)] = null);

(statearr_46029_46056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (5))){
var inst_45997 = (state_46013[(2)]);
var state_46013__$1 = (function (){var statearr_46030 = state_46013;
(statearr_46030[(11)] = inst_45997);

return statearr_46030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46013__$1,(12),dchan);
} else {
if((state_val_46014 === (14))){
var inst_45999 = (state_46013[(8)]);
var inst_46004 = cljs.core.apply.call(null,f,inst_45999);
var state_46013__$1 = state_46013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46013__$1,(16),out,inst_46004);
} else {
if((state_val_46014 === (16))){
var inst_46006 = (state_46013[(2)]);
var state_46013__$1 = (function (){var statearr_46031 = state_46013;
(statearr_46031[(12)] = inst_46006);

return statearr_46031;
})();
var statearr_46032_46057 = state_46013__$1;
(statearr_46032_46057[(2)] = null);

(statearr_46032_46057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (10))){
var inst_45981 = (state_46013[(2)]);
var inst_45982 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46013__$1 = (function (){var statearr_46033 = state_46013;
(statearr_46033[(13)] = inst_45981);

return statearr_46033;
})();
var statearr_46034_46058 = state_46013__$1;
(statearr_46034_46058[(2)] = inst_45982);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46013__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46014 === (8))){
var inst_45995 = (state_46013[(2)]);
var state_46013__$1 = state_46013;
var statearr_46035_46059 = state_46013__$1;
(statearr_46035_46059[(2)] = inst_45995);

(statearr_46035_46059[(1)] = (5));


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
});})(c__19818__auto___46044,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19756__auto__,c__19818__auto___46044,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_46039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46039[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_46039[(1)] = (1));

return statearr_46039;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_46013){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_46013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e46040){if((e46040 instanceof Object)){
var ex__19760__auto__ = e46040;
var statearr_46041_46060 = state_46013;
(statearr_46041_46060[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46061 = state_46013;
state_46013 = G__46061;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_46013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_46013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___46044,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19820__auto__ = (function (){var statearr_46042 = f__19819__auto__.call(null);
(statearr_46042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___46044);

return statearr_46042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___46044,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__46064 = arguments.length;
switch (G__46064) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19818__auto___46119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___46119,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___46119,out){
return (function (state_46094){
var state_val_46095 = (state_46094[(1)]);
if((state_val_46095 === (7))){
var inst_46074 = (state_46094[(7)]);
var inst_46073 = (state_46094[(8)]);
var inst_46073__$1 = (state_46094[(2)]);
var inst_46074__$1 = cljs.core.nth.call(null,inst_46073__$1,(0),null);
var inst_46075 = cljs.core.nth.call(null,inst_46073__$1,(1),null);
var inst_46076 = (inst_46074__$1 == null);
var state_46094__$1 = (function (){var statearr_46096 = state_46094;
(statearr_46096[(9)] = inst_46075);

(statearr_46096[(7)] = inst_46074__$1);

(statearr_46096[(8)] = inst_46073__$1);

return statearr_46096;
})();
if(cljs.core.truth_(inst_46076)){
var statearr_46097_46120 = state_46094__$1;
(statearr_46097_46120[(1)] = (8));

} else {
var statearr_46098_46121 = state_46094__$1;
(statearr_46098_46121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46095 === (1))){
var inst_46065 = cljs.core.vec.call(null,chs);
var inst_46066 = inst_46065;
var state_46094__$1 = (function (){var statearr_46099 = state_46094;
(statearr_46099[(10)] = inst_46066);

return statearr_46099;
})();
var statearr_46100_46122 = state_46094__$1;
(statearr_46100_46122[(2)] = null);

(statearr_46100_46122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46095 === (4))){
var inst_46066 = (state_46094[(10)]);
var state_46094__$1 = state_46094;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46094__$1,(7),inst_46066);
} else {
if((state_val_46095 === (6))){
var inst_46090 = (state_46094[(2)]);
var state_46094__$1 = state_46094;
var statearr_46101_46123 = state_46094__$1;
(statearr_46101_46123[(2)] = inst_46090);

(statearr_46101_46123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46095 === (3))){
var inst_46092 = (state_46094[(2)]);
var state_46094__$1 = state_46094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46094__$1,inst_46092);
} else {
if((state_val_46095 === (2))){
var inst_46066 = (state_46094[(10)]);
var inst_46068 = cljs.core.count.call(null,inst_46066);
var inst_46069 = (inst_46068 > (0));
var state_46094__$1 = state_46094;
if(cljs.core.truth_(inst_46069)){
var statearr_46103_46124 = state_46094__$1;
(statearr_46103_46124[(1)] = (4));

} else {
var statearr_46104_46125 = state_46094__$1;
(statearr_46104_46125[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46095 === (11))){
var inst_46066 = (state_46094[(10)]);
var inst_46083 = (state_46094[(2)]);
var tmp46102 = inst_46066;
var inst_46066__$1 = tmp46102;
var state_46094__$1 = (function (){var statearr_46105 = state_46094;
(statearr_46105[(10)] = inst_46066__$1);

(statearr_46105[(11)] = inst_46083);

return statearr_46105;
})();
var statearr_46106_46126 = state_46094__$1;
(statearr_46106_46126[(2)] = null);

(statearr_46106_46126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46095 === (9))){
var inst_46074 = (state_46094[(7)]);
var state_46094__$1 = state_46094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46094__$1,(11),out,inst_46074);
} else {
if((state_val_46095 === (5))){
var inst_46088 = cljs.core.async.close_BANG_.call(null,out);
var state_46094__$1 = state_46094;
var statearr_46107_46127 = state_46094__$1;
(statearr_46107_46127[(2)] = inst_46088);

(statearr_46107_46127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46095 === (10))){
var inst_46086 = (state_46094[(2)]);
var state_46094__$1 = state_46094;
var statearr_46108_46128 = state_46094__$1;
(statearr_46108_46128[(2)] = inst_46086);

(statearr_46108_46128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46095 === (8))){
var inst_46066 = (state_46094[(10)]);
var inst_46075 = (state_46094[(9)]);
var inst_46074 = (state_46094[(7)]);
var inst_46073 = (state_46094[(8)]);
var inst_46078 = (function (){var cs = inst_46066;
var vec__46071 = inst_46073;
var v = inst_46074;
var c = inst_46075;
return ((function (cs,vec__46071,v,c,inst_46066,inst_46075,inst_46074,inst_46073,state_val_46095,c__19818__auto___46119,out){
return (function (p1__46062_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46062_SHARP_);
});
;})(cs,vec__46071,v,c,inst_46066,inst_46075,inst_46074,inst_46073,state_val_46095,c__19818__auto___46119,out))
})();
var inst_46079 = cljs.core.filterv.call(null,inst_46078,inst_46066);
var inst_46066__$1 = inst_46079;
var state_46094__$1 = (function (){var statearr_46109 = state_46094;
(statearr_46109[(10)] = inst_46066__$1);

return statearr_46109;
})();
var statearr_46110_46129 = state_46094__$1;
(statearr_46110_46129[(2)] = null);

(statearr_46110_46129[(1)] = (2));


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
});})(c__19818__auto___46119,out))
;
return ((function (switch__19756__auto__,c__19818__auto___46119,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_46114 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46114[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_46114[(1)] = (1));

return statearr_46114;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_46094){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_46094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e46115){if((e46115 instanceof Object)){
var ex__19760__auto__ = e46115;
var statearr_46116_46130 = state_46094;
(statearr_46116_46130[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46131 = state_46094;
state_46094 = G__46131;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_46094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_46094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___46119,out))
})();
var state__19820__auto__ = (function (){var statearr_46117 = f__19819__auto__.call(null);
(statearr_46117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___46119);

return statearr_46117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___46119,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__46133 = arguments.length;
switch (G__46133) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19818__auto___46181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___46181,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___46181,out){
return (function (state_46157){
var state_val_46158 = (state_46157[(1)]);
if((state_val_46158 === (7))){
var inst_46139 = (state_46157[(7)]);
var inst_46139__$1 = (state_46157[(2)]);
var inst_46140 = (inst_46139__$1 == null);
var inst_46141 = cljs.core.not.call(null,inst_46140);
var state_46157__$1 = (function (){var statearr_46159 = state_46157;
(statearr_46159[(7)] = inst_46139__$1);

return statearr_46159;
})();
if(inst_46141){
var statearr_46160_46182 = state_46157__$1;
(statearr_46160_46182[(1)] = (8));

} else {
var statearr_46161_46183 = state_46157__$1;
(statearr_46161_46183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46158 === (1))){
var inst_46134 = (0);
var state_46157__$1 = (function (){var statearr_46162 = state_46157;
(statearr_46162[(8)] = inst_46134);

return statearr_46162;
})();
var statearr_46163_46184 = state_46157__$1;
(statearr_46163_46184[(2)] = null);

(statearr_46163_46184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46158 === (4))){
var state_46157__$1 = state_46157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46157__$1,(7),ch);
} else {
if((state_val_46158 === (6))){
var inst_46152 = (state_46157[(2)]);
var state_46157__$1 = state_46157;
var statearr_46164_46185 = state_46157__$1;
(statearr_46164_46185[(2)] = inst_46152);

(statearr_46164_46185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46158 === (3))){
var inst_46154 = (state_46157[(2)]);
var inst_46155 = cljs.core.async.close_BANG_.call(null,out);
var state_46157__$1 = (function (){var statearr_46165 = state_46157;
(statearr_46165[(9)] = inst_46154);

return statearr_46165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46157__$1,inst_46155);
} else {
if((state_val_46158 === (2))){
var inst_46134 = (state_46157[(8)]);
var inst_46136 = (inst_46134 < n);
var state_46157__$1 = state_46157;
if(cljs.core.truth_(inst_46136)){
var statearr_46166_46186 = state_46157__$1;
(statearr_46166_46186[(1)] = (4));

} else {
var statearr_46167_46187 = state_46157__$1;
(statearr_46167_46187[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46158 === (11))){
var inst_46134 = (state_46157[(8)]);
var inst_46144 = (state_46157[(2)]);
var inst_46145 = (inst_46134 + (1));
var inst_46134__$1 = inst_46145;
var state_46157__$1 = (function (){var statearr_46168 = state_46157;
(statearr_46168[(10)] = inst_46144);

(statearr_46168[(8)] = inst_46134__$1);

return statearr_46168;
})();
var statearr_46169_46188 = state_46157__$1;
(statearr_46169_46188[(2)] = null);

(statearr_46169_46188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46158 === (9))){
var state_46157__$1 = state_46157;
var statearr_46170_46189 = state_46157__$1;
(statearr_46170_46189[(2)] = null);

(statearr_46170_46189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46158 === (5))){
var state_46157__$1 = state_46157;
var statearr_46171_46190 = state_46157__$1;
(statearr_46171_46190[(2)] = null);

(statearr_46171_46190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46158 === (10))){
var inst_46149 = (state_46157[(2)]);
var state_46157__$1 = state_46157;
var statearr_46172_46191 = state_46157__$1;
(statearr_46172_46191[(2)] = inst_46149);

(statearr_46172_46191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46158 === (8))){
var inst_46139 = (state_46157[(7)]);
var state_46157__$1 = state_46157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46157__$1,(11),out,inst_46139);
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
});})(c__19818__auto___46181,out))
;
return ((function (switch__19756__auto__,c__19818__auto___46181,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_46176 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46176[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_46176[(1)] = (1));

return statearr_46176;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_46157){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_46157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e46177){if((e46177 instanceof Object)){
var ex__19760__auto__ = e46177;
var statearr_46178_46192 = state_46157;
(statearr_46178_46192[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46193 = state_46157;
state_46157 = G__46193;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_46157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_46157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___46181,out))
})();
var state__19820__auto__ = (function (){var statearr_46179 = f__19819__auto__.call(null);
(statearr_46179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___46181);

return statearr_46179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___46181,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t46201 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t46201 = (function (map_LT_,f,ch,meta46202){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46202 = meta46202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t46201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46203,meta46202__$1){
var self__ = this;
var _46203__$1 = this;
return (new cljs.core.async.t46201(self__.map_LT_,self__.f,self__.ch,meta46202__$1));
});

cljs.core.async.t46201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46203){
var self__ = this;
var _46203__$1 = this;
return self__.meta46202;
});

cljs.core.async.t46201.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t46201.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t46201.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t46201.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t46201.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t46204 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t46204 = (function (map_LT_,f,ch,meta46202,_,fn1,meta46205){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46202 = meta46202;
this._ = _;
this.fn1 = fn1;
this.meta46205 = meta46205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t46204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46206,meta46205__$1){
var self__ = this;
var _46206__$1 = this;
return (new cljs.core.async.t46204(self__.map_LT_,self__.f,self__.ch,self__.meta46202,self__._,self__.fn1,meta46205__$1));
});})(___$1))
;

cljs.core.async.t46204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46206){
var self__ = this;
var _46206__$1 = this;
return self__.meta46205;
});})(___$1))
;

cljs.core.async.t46204.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t46204.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t46204.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46194_SHARP_){
return f1.call(null,(((p1__46194_SHARP_ == null))?null:self__.f.call(null,p1__46194_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t46204.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46202","meta46202",-847276424,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46205","meta46205",-625869005,null)], null);
});})(___$1))
;

cljs.core.async.t46204.cljs$lang$type = true;

cljs.core.async.t46204.cljs$lang$ctorStr = "cljs.core.async/t46204";

cljs.core.async.t46204.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t46204");
});})(___$1))
;

cljs.core.async.__GT_t46204 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t46204(map_LT___$1,f__$1,ch__$1,meta46202__$1,___$2,fn1__$1,meta46205){
return (new cljs.core.async.t46204(map_LT___$1,f__$1,ch__$1,meta46202__$1,___$2,fn1__$1,meta46205));
});})(___$1))
;

}

return (new cljs.core.async.t46204(self__.map_LT_,self__.f,self__.ch,self__.meta46202,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16050__auto__ = ret;
if(cljs.core.truth_(and__16050__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16050__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t46201.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t46201.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t46201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46202","meta46202",-847276424,null)], null);
});

cljs.core.async.t46201.cljs$lang$type = true;

cljs.core.async.t46201.cljs$lang$ctorStr = "cljs.core.async/t46201";

cljs.core.async.t46201.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t46201");
});

cljs.core.async.__GT_t46201 = (function cljs$core$async$map_LT__$___GT_t46201(map_LT___$1,f__$1,ch__$1,meta46202){
return (new cljs.core.async.t46201(map_LT___$1,f__$1,ch__$1,meta46202));
});

}

return (new cljs.core.async.t46201(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t46210 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t46210 = (function (map_GT_,f,ch,meta46211){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta46211 = meta46211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t46210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46212,meta46211__$1){
var self__ = this;
var _46212__$1 = this;
return (new cljs.core.async.t46210(self__.map_GT_,self__.f,self__.ch,meta46211__$1));
});

cljs.core.async.t46210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46212){
var self__ = this;
var _46212__$1 = this;
return self__.meta46211;
});

cljs.core.async.t46210.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t46210.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t46210.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t46210.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t46210.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t46210.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t46210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46211","meta46211",1948189407,null)], null);
});

cljs.core.async.t46210.cljs$lang$type = true;

cljs.core.async.t46210.cljs$lang$ctorStr = "cljs.core.async/t46210";

cljs.core.async.t46210.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t46210");
});

cljs.core.async.__GT_t46210 = (function cljs$core$async$map_GT__$___GT_t46210(map_GT___$1,f__$1,ch__$1,meta46211){
return (new cljs.core.async.t46210(map_GT___$1,f__$1,ch__$1,meta46211));
});

}

return (new cljs.core.async.t46210(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t46216 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t46216 = (function (filter_GT_,p,ch,meta46217){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta46217 = meta46217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t46216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46218,meta46217__$1){
var self__ = this;
var _46218__$1 = this;
return (new cljs.core.async.t46216(self__.filter_GT_,self__.p,self__.ch,meta46217__$1));
});

cljs.core.async.t46216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46218){
var self__ = this;
var _46218__$1 = this;
return self__.meta46217;
});

cljs.core.async.t46216.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t46216.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t46216.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t46216.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t46216.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t46216.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t46216.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t46216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46217","meta46217",453431230,null)], null);
});

cljs.core.async.t46216.cljs$lang$type = true;

cljs.core.async.t46216.cljs$lang$ctorStr = "cljs.core.async/t46216";

cljs.core.async.t46216.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t46216");
});

cljs.core.async.__GT_t46216 = (function cljs$core$async$filter_GT__$___GT_t46216(filter_GT___$1,p__$1,ch__$1,meta46217){
return (new cljs.core.async.t46216(filter_GT___$1,p__$1,ch__$1,meta46217));
});

}

return (new cljs.core.async.t46216(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__46220 = arguments.length;
switch (G__46220) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19818__auto___46263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___46263,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___46263,out){
return (function (state_46241){
var state_val_46242 = (state_46241[(1)]);
if((state_val_46242 === (7))){
var inst_46237 = (state_46241[(2)]);
var state_46241__$1 = state_46241;
var statearr_46243_46264 = state_46241__$1;
(statearr_46243_46264[(2)] = inst_46237);

(statearr_46243_46264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46242 === (1))){
var state_46241__$1 = state_46241;
var statearr_46244_46265 = state_46241__$1;
(statearr_46244_46265[(2)] = null);

(statearr_46244_46265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46242 === (4))){
var inst_46223 = (state_46241[(7)]);
var inst_46223__$1 = (state_46241[(2)]);
var inst_46224 = (inst_46223__$1 == null);
var state_46241__$1 = (function (){var statearr_46245 = state_46241;
(statearr_46245[(7)] = inst_46223__$1);

return statearr_46245;
})();
if(cljs.core.truth_(inst_46224)){
var statearr_46246_46266 = state_46241__$1;
(statearr_46246_46266[(1)] = (5));

} else {
var statearr_46247_46267 = state_46241__$1;
(statearr_46247_46267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46242 === (6))){
var inst_46223 = (state_46241[(7)]);
var inst_46228 = p.call(null,inst_46223);
var state_46241__$1 = state_46241;
if(cljs.core.truth_(inst_46228)){
var statearr_46248_46268 = state_46241__$1;
(statearr_46248_46268[(1)] = (8));

} else {
var statearr_46249_46269 = state_46241__$1;
(statearr_46249_46269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46242 === (3))){
var inst_46239 = (state_46241[(2)]);
var state_46241__$1 = state_46241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46241__$1,inst_46239);
} else {
if((state_val_46242 === (2))){
var state_46241__$1 = state_46241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46241__$1,(4),ch);
} else {
if((state_val_46242 === (11))){
var inst_46231 = (state_46241[(2)]);
var state_46241__$1 = state_46241;
var statearr_46250_46270 = state_46241__$1;
(statearr_46250_46270[(2)] = inst_46231);

(statearr_46250_46270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46242 === (9))){
var state_46241__$1 = state_46241;
var statearr_46251_46271 = state_46241__$1;
(statearr_46251_46271[(2)] = null);

(statearr_46251_46271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46242 === (5))){
var inst_46226 = cljs.core.async.close_BANG_.call(null,out);
var state_46241__$1 = state_46241;
var statearr_46252_46272 = state_46241__$1;
(statearr_46252_46272[(2)] = inst_46226);

(statearr_46252_46272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46242 === (10))){
var inst_46234 = (state_46241[(2)]);
var state_46241__$1 = (function (){var statearr_46253 = state_46241;
(statearr_46253[(8)] = inst_46234);

return statearr_46253;
})();
var statearr_46254_46273 = state_46241__$1;
(statearr_46254_46273[(2)] = null);

(statearr_46254_46273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46242 === (8))){
var inst_46223 = (state_46241[(7)]);
var state_46241__$1 = state_46241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46241__$1,(11),out,inst_46223);
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
});})(c__19818__auto___46263,out))
;
return ((function (switch__19756__auto__,c__19818__auto___46263,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_46258 = [null,null,null,null,null,null,null,null,null];
(statearr_46258[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_46258[(1)] = (1));

return statearr_46258;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_46241){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_46241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e46259){if((e46259 instanceof Object)){
var ex__19760__auto__ = e46259;
var statearr_46260_46274 = state_46241;
(statearr_46260_46274[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46275 = state_46241;
state_46241 = G__46275;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_46241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_46241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___46263,out))
})();
var state__19820__auto__ = (function (){var statearr_46261 = f__19819__auto__.call(null);
(statearr_46261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___46263);

return statearr_46261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___46263,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__46277 = arguments.length;
switch (G__46277) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__){
return (function (state_46444){
var state_val_46445 = (state_46444[(1)]);
if((state_val_46445 === (7))){
var inst_46440 = (state_46444[(2)]);
var state_46444__$1 = state_46444;
var statearr_46446_46487 = state_46444__$1;
(statearr_46446_46487[(2)] = inst_46440);

(statearr_46446_46487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (20))){
var inst_46410 = (state_46444[(7)]);
var inst_46421 = (state_46444[(2)]);
var inst_46422 = cljs.core.next.call(null,inst_46410);
var inst_46396 = inst_46422;
var inst_46397 = null;
var inst_46398 = (0);
var inst_46399 = (0);
var state_46444__$1 = (function (){var statearr_46447 = state_46444;
(statearr_46447[(8)] = inst_46396);

(statearr_46447[(9)] = inst_46399);

(statearr_46447[(10)] = inst_46398);

(statearr_46447[(11)] = inst_46421);

(statearr_46447[(12)] = inst_46397);

return statearr_46447;
})();
var statearr_46448_46488 = state_46444__$1;
(statearr_46448_46488[(2)] = null);

(statearr_46448_46488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (1))){
var state_46444__$1 = state_46444;
var statearr_46449_46489 = state_46444__$1;
(statearr_46449_46489[(2)] = null);

(statearr_46449_46489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (4))){
var inst_46385 = (state_46444[(13)]);
var inst_46385__$1 = (state_46444[(2)]);
var inst_46386 = (inst_46385__$1 == null);
var state_46444__$1 = (function (){var statearr_46450 = state_46444;
(statearr_46450[(13)] = inst_46385__$1);

return statearr_46450;
})();
if(cljs.core.truth_(inst_46386)){
var statearr_46451_46490 = state_46444__$1;
(statearr_46451_46490[(1)] = (5));

} else {
var statearr_46452_46491 = state_46444__$1;
(statearr_46452_46491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (15))){
var state_46444__$1 = state_46444;
var statearr_46456_46492 = state_46444__$1;
(statearr_46456_46492[(2)] = null);

(statearr_46456_46492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (21))){
var state_46444__$1 = state_46444;
var statearr_46457_46493 = state_46444__$1;
(statearr_46457_46493[(2)] = null);

(statearr_46457_46493[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (13))){
var inst_46396 = (state_46444[(8)]);
var inst_46399 = (state_46444[(9)]);
var inst_46398 = (state_46444[(10)]);
var inst_46397 = (state_46444[(12)]);
var inst_46406 = (state_46444[(2)]);
var inst_46407 = (inst_46399 + (1));
var tmp46453 = inst_46396;
var tmp46454 = inst_46398;
var tmp46455 = inst_46397;
var inst_46396__$1 = tmp46453;
var inst_46397__$1 = tmp46455;
var inst_46398__$1 = tmp46454;
var inst_46399__$1 = inst_46407;
var state_46444__$1 = (function (){var statearr_46458 = state_46444;
(statearr_46458[(14)] = inst_46406);

(statearr_46458[(8)] = inst_46396__$1);

(statearr_46458[(9)] = inst_46399__$1);

(statearr_46458[(10)] = inst_46398__$1);

(statearr_46458[(12)] = inst_46397__$1);

return statearr_46458;
})();
var statearr_46459_46494 = state_46444__$1;
(statearr_46459_46494[(2)] = null);

(statearr_46459_46494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (22))){
var state_46444__$1 = state_46444;
var statearr_46460_46495 = state_46444__$1;
(statearr_46460_46495[(2)] = null);

(statearr_46460_46495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (6))){
var inst_46385 = (state_46444[(13)]);
var inst_46394 = f.call(null,inst_46385);
var inst_46395 = cljs.core.seq.call(null,inst_46394);
var inst_46396 = inst_46395;
var inst_46397 = null;
var inst_46398 = (0);
var inst_46399 = (0);
var state_46444__$1 = (function (){var statearr_46461 = state_46444;
(statearr_46461[(8)] = inst_46396);

(statearr_46461[(9)] = inst_46399);

(statearr_46461[(10)] = inst_46398);

(statearr_46461[(12)] = inst_46397);

return statearr_46461;
})();
var statearr_46462_46496 = state_46444__$1;
(statearr_46462_46496[(2)] = null);

(statearr_46462_46496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (17))){
var inst_46410 = (state_46444[(7)]);
var inst_46414 = cljs.core.chunk_first.call(null,inst_46410);
var inst_46415 = cljs.core.chunk_rest.call(null,inst_46410);
var inst_46416 = cljs.core.count.call(null,inst_46414);
var inst_46396 = inst_46415;
var inst_46397 = inst_46414;
var inst_46398 = inst_46416;
var inst_46399 = (0);
var state_46444__$1 = (function (){var statearr_46463 = state_46444;
(statearr_46463[(8)] = inst_46396);

(statearr_46463[(9)] = inst_46399);

(statearr_46463[(10)] = inst_46398);

(statearr_46463[(12)] = inst_46397);

return statearr_46463;
})();
var statearr_46464_46497 = state_46444__$1;
(statearr_46464_46497[(2)] = null);

(statearr_46464_46497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (3))){
var inst_46442 = (state_46444[(2)]);
var state_46444__$1 = state_46444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46444__$1,inst_46442);
} else {
if((state_val_46445 === (12))){
var inst_46430 = (state_46444[(2)]);
var state_46444__$1 = state_46444;
var statearr_46465_46498 = state_46444__$1;
(statearr_46465_46498[(2)] = inst_46430);

(statearr_46465_46498[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (2))){
var state_46444__$1 = state_46444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46444__$1,(4),in$);
} else {
if((state_val_46445 === (23))){
var inst_46438 = (state_46444[(2)]);
var state_46444__$1 = state_46444;
var statearr_46466_46499 = state_46444__$1;
(statearr_46466_46499[(2)] = inst_46438);

(statearr_46466_46499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (19))){
var inst_46425 = (state_46444[(2)]);
var state_46444__$1 = state_46444;
var statearr_46467_46500 = state_46444__$1;
(statearr_46467_46500[(2)] = inst_46425);

(statearr_46467_46500[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (11))){
var inst_46410 = (state_46444[(7)]);
var inst_46396 = (state_46444[(8)]);
var inst_46410__$1 = cljs.core.seq.call(null,inst_46396);
var state_46444__$1 = (function (){var statearr_46468 = state_46444;
(statearr_46468[(7)] = inst_46410__$1);

return statearr_46468;
})();
if(inst_46410__$1){
var statearr_46469_46501 = state_46444__$1;
(statearr_46469_46501[(1)] = (14));

} else {
var statearr_46470_46502 = state_46444__$1;
(statearr_46470_46502[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (9))){
var inst_46432 = (state_46444[(2)]);
var inst_46433 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46444__$1 = (function (){var statearr_46471 = state_46444;
(statearr_46471[(15)] = inst_46432);

return statearr_46471;
})();
if(cljs.core.truth_(inst_46433)){
var statearr_46472_46503 = state_46444__$1;
(statearr_46472_46503[(1)] = (21));

} else {
var statearr_46473_46504 = state_46444__$1;
(statearr_46473_46504[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (5))){
var inst_46388 = cljs.core.async.close_BANG_.call(null,out);
var state_46444__$1 = state_46444;
var statearr_46474_46505 = state_46444__$1;
(statearr_46474_46505[(2)] = inst_46388);

(statearr_46474_46505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (14))){
var inst_46410 = (state_46444[(7)]);
var inst_46412 = cljs.core.chunked_seq_QMARK_.call(null,inst_46410);
var state_46444__$1 = state_46444;
if(inst_46412){
var statearr_46475_46506 = state_46444__$1;
(statearr_46475_46506[(1)] = (17));

} else {
var statearr_46476_46507 = state_46444__$1;
(statearr_46476_46507[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (16))){
var inst_46428 = (state_46444[(2)]);
var state_46444__$1 = state_46444;
var statearr_46477_46508 = state_46444__$1;
(statearr_46477_46508[(2)] = inst_46428);

(statearr_46477_46508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (10))){
var inst_46399 = (state_46444[(9)]);
var inst_46397 = (state_46444[(12)]);
var inst_46404 = cljs.core._nth.call(null,inst_46397,inst_46399);
var state_46444__$1 = state_46444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46444__$1,(13),out,inst_46404);
} else {
if((state_val_46445 === (18))){
var inst_46410 = (state_46444[(7)]);
var inst_46419 = cljs.core.first.call(null,inst_46410);
var state_46444__$1 = state_46444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46444__$1,(20),out,inst_46419);
} else {
if((state_val_46445 === (8))){
var inst_46399 = (state_46444[(9)]);
var inst_46398 = (state_46444[(10)]);
var inst_46401 = (inst_46399 < inst_46398);
var inst_46402 = inst_46401;
var state_46444__$1 = state_46444;
if(cljs.core.truth_(inst_46402)){
var statearr_46478_46509 = state_46444__$1;
(statearr_46478_46509[(1)] = (10));

} else {
var statearr_46479_46510 = state_46444__$1;
(statearr_46479_46510[(1)] = (11));

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
});})(c__19818__auto__))
;
return ((function (switch__19756__auto__,c__19818__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_46483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46483[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__);

(statearr_46483[(1)] = (1));

return statearr_46483;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____1 = (function (state_46444){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_46444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e46484){if((e46484 instanceof Object)){
var ex__19760__auto__ = e46484;
var statearr_46485_46511 = state_46444;
(statearr_46485_46511[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46512 = state_46444;
state_46444 = G__46512;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__ = function(state_46444){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____1.call(this,state_46444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_46486 = f__19819__auto__.call(null);
(statearr_46486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_46486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto__))
);

return c__19818__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__46514 = arguments.length;
switch (G__46514) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__46517 = arguments.length;
switch (G__46517) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__46520 = arguments.length;
switch (G__46520) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19818__auto___46570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___46570,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___46570,out){
return (function (state_46544){
var state_val_46545 = (state_46544[(1)]);
if((state_val_46545 === (7))){
var inst_46539 = (state_46544[(2)]);
var state_46544__$1 = state_46544;
var statearr_46546_46571 = state_46544__$1;
(statearr_46546_46571[(2)] = inst_46539);

(statearr_46546_46571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46545 === (1))){
var inst_46521 = null;
var state_46544__$1 = (function (){var statearr_46547 = state_46544;
(statearr_46547[(7)] = inst_46521);

return statearr_46547;
})();
var statearr_46548_46572 = state_46544__$1;
(statearr_46548_46572[(2)] = null);

(statearr_46548_46572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46545 === (4))){
var inst_46524 = (state_46544[(8)]);
var inst_46524__$1 = (state_46544[(2)]);
var inst_46525 = (inst_46524__$1 == null);
var inst_46526 = cljs.core.not.call(null,inst_46525);
var state_46544__$1 = (function (){var statearr_46549 = state_46544;
(statearr_46549[(8)] = inst_46524__$1);

return statearr_46549;
})();
if(inst_46526){
var statearr_46550_46573 = state_46544__$1;
(statearr_46550_46573[(1)] = (5));

} else {
var statearr_46551_46574 = state_46544__$1;
(statearr_46551_46574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46545 === (6))){
var state_46544__$1 = state_46544;
var statearr_46552_46575 = state_46544__$1;
(statearr_46552_46575[(2)] = null);

(statearr_46552_46575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46545 === (3))){
var inst_46541 = (state_46544[(2)]);
var inst_46542 = cljs.core.async.close_BANG_.call(null,out);
var state_46544__$1 = (function (){var statearr_46553 = state_46544;
(statearr_46553[(9)] = inst_46541);

return statearr_46553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46544__$1,inst_46542);
} else {
if((state_val_46545 === (2))){
var state_46544__$1 = state_46544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46544__$1,(4),ch);
} else {
if((state_val_46545 === (11))){
var inst_46524 = (state_46544[(8)]);
var inst_46533 = (state_46544[(2)]);
var inst_46521 = inst_46524;
var state_46544__$1 = (function (){var statearr_46554 = state_46544;
(statearr_46554[(7)] = inst_46521);

(statearr_46554[(10)] = inst_46533);

return statearr_46554;
})();
var statearr_46555_46576 = state_46544__$1;
(statearr_46555_46576[(2)] = null);

(statearr_46555_46576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46545 === (9))){
var inst_46524 = (state_46544[(8)]);
var state_46544__$1 = state_46544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46544__$1,(11),out,inst_46524);
} else {
if((state_val_46545 === (5))){
var inst_46524 = (state_46544[(8)]);
var inst_46521 = (state_46544[(7)]);
var inst_46528 = cljs.core._EQ_.call(null,inst_46524,inst_46521);
var state_46544__$1 = state_46544;
if(inst_46528){
var statearr_46557_46577 = state_46544__$1;
(statearr_46557_46577[(1)] = (8));

} else {
var statearr_46558_46578 = state_46544__$1;
(statearr_46558_46578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46545 === (10))){
var inst_46536 = (state_46544[(2)]);
var state_46544__$1 = state_46544;
var statearr_46559_46579 = state_46544__$1;
(statearr_46559_46579[(2)] = inst_46536);

(statearr_46559_46579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46545 === (8))){
var inst_46521 = (state_46544[(7)]);
var tmp46556 = inst_46521;
var inst_46521__$1 = tmp46556;
var state_46544__$1 = (function (){var statearr_46560 = state_46544;
(statearr_46560[(7)] = inst_46521__$1);

return statearr_46560;
})();
var statearr_46561_46580 = state_46544__$1;
(statearr_46561_46580[(2)] = null);

(statearr_46561_46580[(1)] = (2));


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
});})(c__19818__auto___46570,out))
;
return ((function (switch__19756__auto__,c__19818__auto___46570,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_46565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46565[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_46565[(1)] = (1));

return statearr_46565;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_46544){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_46544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e46566){if((e46566 instanceof Object)){
var ex__19760__auto__ = e46566;
var statearr_46567_46581 = state_46544;
(statearr_46567_46581[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46582 = state_46544;
state_46544 = G__46582;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_46544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_46544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___46570,out))
})();
var state__19820__auto__ = (function (){var statearr_46568 = f__19819__auto__.call(null);
(statearr_46568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___46570);

return statearr_46568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___46570,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__46584 = arguments.length;
switch (G__46584) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19818__auto___46653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___46653,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___46653,out){
return (function (state_46622){
var state_val_46623 = (state_46622[(1)]);
if((state_val_46623 === (7))){
var inst_46618 = (state_46622[(2)]);
var state_46622__$1 = state_46622;
var statearr_46624_46654 = state_46622__$1;
(statearr_46624_46654[(2)] = inst_46618);

(statearr_46624_46654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46623 === (1))){
var inst_46585 = (new Array(n));
var inst_46586 = inst_46585;
var inst_46587 = (0);
var state_46622__$1 = (function (){var statearr_46625 = state_46622;
(statearr_46625[(7)] = inst_46586);

(statearr_46625[(8)] = inst_46587);

return statearr_46625;
})();
var statearr_46626_46655 = state_46622__$1;
(statearr_46626_46655[(2)] = null);

(statearr_46626_46655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46623 === (4))){
var inst_46590 = (state_46622[(9)]);
var inst_46590__$1 = (state_46622[(2)]);
var inst_46591 = (inst_46590__$1 == null);
var inst_46592 = cljs.core.not.call(null,inst_46591);
var state_46622__$1 = (function (){var statearr_46627 = state_46622;
(statearr_46627[(9)] = inst_46590__$1);

return statearr_46627;
})();
if(inst_46592){
var statearr_46628_46656 = state_46622__$1;
(statearr_46628_46656[(1)] = (5));

} else {
var statearr_46629_46657 = state_46622__$1;
(statearr_46629_46657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46623 === (15))){
var inst_46612 = (state_46622[(2)]);
var state_46622__$1 = state_46622;
var statearr_46630_46658 = state_46622__$1;
(statearr_46630_46658[(2)] = inst_46612);

(statearr_46630_46658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46623 === (13))){
var state_46622__$1 = state_46622;
var statearr_46631_46659 = state_46622__$1;
(statearr_46631_46659[(2)] = null);

(statearr_46631_46659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46623 === (6))){
var inst_46587 = (state_46622[(8)]);
var inst_46608 = (inst_46587 > (0));
var state_46622__$1 = state_46622;
if(cljs.core.truth_(inst_46608)){
var statearr_46632_46660 = state_46622__$1;
(statearr_46632_46660[(1)] = (12));

} else {
var statearr_46633_46661 = state_46622__$1;
(statearr_46633_46661[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46623 === (3))){
var inst_46620 = (state_46622[(2)]);
var state_46622__$1 = state_46622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46622__$1,inst_46620);
} else {
if((state_val_46623 === (12))){
var inst_46586 = (state_46622[(7)]);
var inst_46610 = cljs.core.vec.call(null,inst_46586);
var state_46622__$1 = state_46622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46622__$1,(15),out,inst_46610);
} else {
if((state_val_46623 === (2))){
var state_46622__$1 = state_46622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46622__$1,(4),ch);
} else {
if((state_val_46623 === (11))){
var inst_46602 = (state_46622[(2)]);
var inst_46603 = (new Array(n));
var inst_46586 = inst_46603;
var inst_46587 = (0);
var state_46622__$1 = (function (){var statearr_46634 = state_46622;
(statearr_46634[(7)] = inst_46586);

(statearr_46634[(10)] = inst_46602);

(statearr_46634[(8)] = inst_46587);

return statearr_46634;
})();
var statearr_46635_46662 = state_46622__$1;
(statearr_46635_46662[(2)] = null);

(statearr_46635_46662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46623 === (9))){
var inst_46586 = (state_46622[(7)]);
var inst_46600 = cljs.core.vec.call(null,inst_46586);
var state_46622__$1 = state_46622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46622__$1,(11),out,inst_46600);
} else {
if((state_val_46623 === (5))){
var inst_46586 = (state_46622[(7)]);
var inst_46590 = (state_46622[(9)]);
var inst_46595 = (state_46622[(11)]);
var inst_46587 = (state_46622[(8)]);
var inst_46594 = (inst_46586[inst_46587] = inst_46590);
var inst_46595__$1 = (inst_46587 + (1));
var inst_46596 = (inst_46595__$1 < n);
var state_46622__$1 = (function (){var statearr_46636 = state_46622;
(statearr_46636[(12)] = inst_46594);

(statearr_46636[(11)] = inst_46595__$1);

return statearr_46636;
})();
if(cljs.core.truth_(inst_46596)){
var statearr_46637_46663 = state_46622__$1;
(statearr_46637_46663[(1)] = (8));

} else {
var statearr_46638_46664 = state_46622__$1;
(statearr_46638_46664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46623 === (14))){
var inst_46615 = (state_46622[(2)]);
var inst_46616 = cljs.core.async.close_BANG_.call(null,out);
var state_46622__$1 = (function (){var statearr_46640 = state_46622;
(statearr_46640[(13)] = inst_46615);

return statearr_46640;
})();
var statearr_46641_46665 = state_46622__$1;
(statearr_46641_46665[(2)] = inst_46616);

(statearr_46641_46665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46623 === (10))){
var inst_46606 = (state_46622[(2)]);
var state_46622__$1 = state_46622;
var statearr_46642_46666 = state_46622__$1;
(statearr_46642_46666[(2)] = inst_46606);

(statearr_46642_46666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46623 === (8))){
var inst_46586 = (state_46622[(7)]);
var inst_46595 = (state_46622[(11)]);
var tmp46639 = inst_46586;
var inst_46586__$1 = tmp46639;
var inst_46587 = inst_46595;
var state_46622__$1 = (function (){var statearr_46643 = state_46622;
(statearr_46643[(7)] = inst_46586__$1);

(statearr_46643[(8)] = inst_46587);

return statearr_46643;
})();
var statearr_46644_46667 = state_46622__$1;
(statearr_46644_46667[(2)] = null);

(statearr_46644_46667[(1)] = (2));


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
});})(c__19818__auto___46653,out))
;
return ((function (switch__19756__auto__,c__19818__auto___46653,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_46648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46648[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_46648[(1)] = (1));

return statearr_46648;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_46622){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_46622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e46649){if((e46649 instanceof Object)){
var ex__19760__auto__ = e46649;
var statearr_46650_46668 = state_46622;
(statearr_46650_46668[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46669 = state_46622;
state_46622 = G__46669;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_46622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_46622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___46653,out))
})();
var state__19820__auto__ = (function (){var statearr_46651 = f__19819__auto__.call(null);
(statearr_46651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___46653);

return statearr_46651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___46653,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__46671 = arguments.length;
switch (G__46671) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19818__auto___46744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___46744,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___46744,out){
return (function (state_46713){
var state_val_46714 = (state_46713[(1)]);
if((state_val_46714 === (7))){
var inst_46709 = (state_46713[(2)]);
var state_46713__$1 = state_46713;
var statearr_46715_46745 = state_46713__$1;
(statearr_46715_46745[(2)] = inst_46709);

(statearr_46715_46745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (1))){
var inst_46672 = [];
var inst_46673 = inst_46672;
var inst_46674 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46713__$1 = (function (){var statearr_46716 = state_46713;
(statearr_46716[(7)] = inst_46674);

(statearr_46716[(8)] = inst_46673);

return statearr_46716;
})();
var statearr_46717_46746 = state_46713__$1;
(statearr_46717_46746[(2)] = null);

(statearr_46717_46746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (4))){
var inst_46677 = (state_46713[(9)]);
var inst_46677__$1 = (state_46713[(2)]);
var inst_46678 = (inst_46677__$1 == null);
var inst_46679 = cljs.core.not.call(null,inst_46678);
var state_46713__$1 = (function (){var statearr_46718 = state_46713;
(statearr_46718[(9)] = inst_46677__$1);

return statearr_46718;
})();
if(inst_46679){
var statearr_46719_46747 = state_46713__$1;
(statearr_46719_46747[(1)] = (5));

} else {
var statearr_46720_46748 = state_46713__$1;
(statearr_46720_46748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (15))){
var inst_46703 = (state_46713[(2)]);
var state_46713__$1 = state_46713;
var statearr_46721_46749 = state_46713__$1;
(statearr_46721_46749[(2)] = inst_46703);

(statearr_46721_46749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (13))){
var state_46713__$1 = state_46713;
var statearr_46722_46750 = state_46713__$1;
(statearr_46722_46750[(2)] = null);

(statearr_46722_46750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (6))){
var inst_46673 = (state_46713[(8)]);
var inst_46698 = inst_46673.length;
var inst_46699 = (inst_46698 > (0));
var state_46713__$1 = state_46713;
if(cljs.core.truth_(inst_46699)){
var statearr_46723_46751 = state_46713__$1;
(statearr_46723_46751[(1)] = (12));

} else {
var statearr_46724_46752 = state_46713__$1;
(statearr_46724_46752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (3))){
var inst_46711 = (state_46713[(2)]);
var state_46713__$1 = state_46713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46713__$1,inst_46711);
} else {
if((state_val_46714 === (12))){
var inst_46673 = (state_46713[(8)]);
var inst_46701 = cljs.core.vec.call(null,inst_46673);
var state_46713__$1 = state_46713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46713__$1,(15),out,inst_46701);
} else {
if((state_val_46714 === (2))){
var state_46713__$1 = state_46713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46713__$1,(4),ch);
} else {
if((state_val_46714 === (11))){
var inst_46677 = (state_46713[(9)]);
var inst_46681 = (state_46713[(10)]);
var inst_46691 = (state_46713[(2)]);
var inst_46692 = [];
var inst_46693 = inst_46692.push(inst_46677);
var inst_46673 = inst_46692;
var inst_46674 = inst_46681;
var state_46713__$1 = (function (){var statearr_46725 = state_46713;
(statearr_46725[(7)] = inst_46674);

(statearr_46725[(8)] = inst_46673);

(statearr_46725[(11)] = inst_46693);

(statearr_46725[(12)] = inst_46691);

return statearr_46725;
})();
var statearr_46726_46753 = state_46713__$1;
(statearr_46726_46753[(2)] = null);

(statearr_46726_46753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (9))){
var inst_46673 = (state_46713[(8)]);
var inst_46689 = cljs.core.vec.call(null,inst_46673);
var state_46713__$1 = state_46713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46713__$1,(11),out,inst_46689);
} else {
if((state_val_46714 === (5))){
var inst_46677 = (state_46713[(9)]);
var inst_46674 = (state_46713[(7)]);
var inst_46681 = (state_46713[(10)]);
var inst_46681__$1 = f.call(null,inst_46677);
var inst_46682 = cljs.core._EQ_.call(null,inst_46681__$1,inst_46674);
var inst_46683 = cljs.core.keyword_identical_QMARK_.call(null,inst_46674,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46684 = (inst_46682) || (inst_46683);
var state_46713__$1 = (function (){var statearr_46727 = state_46713;
(statearr_46727[(10)] = inst_46681__$1);

return statearr_46727;
})();
if(cljs.core.truth_(inst_46684)){
var statearr_46728_46754 = state_46713__$1;
(statearr_46728_46754[(1)] = (8));

} else {
var statearr_46729_46755 = state_46713__$1;
(statearr_46729_46755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (14))){
var inst_46706 = (state_46713[(2)]);
var inst_46707 = cljs.core.async.close_BANG_.call(null,out);
var state_46713__$1 = (function (){var statearr_46731 = state_46713;
(statearr_46731[(13)] = inst_46706);

return statearr_46731;
})();
var statearr_46732_46756 = state_46713__$1;
(statearr_46732_46756[(2)] = inst_46707);

(statearr_46732_46756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (10))){
var inst_46696 = (state_46713[(2)]);
var state_46713__$1 = state_46713;
var statearr_46733_46757 = state_46713__$1;
(statearr_46733_46757[(2)] = inst_46696);

(statearr_46733_46757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46714 === (8))){
var inst_46677 = (state_46713[(9)]);
var inst_46673 = (state_46713[(8)]);
var inst_46681 = (state_46713[(10)]);
var inst_46686 = inst_46673.push(inst_46677);
var tmp46730 = inst_46673;
var inst_46673__$1 = tmp46730;
var inst_46674 = inst_46681;
var state_46713__$1 = (function (){var statearr_46734 = state_46713;
(statearr_46734[(7)] = inst_46674);

(statearr_46734[(14)] = inst_46686);

(statearr_46734[(8)] = inst_46673__$1);

return statearr_46734;
})();
var statearr_46735_46758 = state_46713__$1;
(statearr_46735_46758[(2)] = null);

(statearr_46735_46758[(1)] = (2));


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
});})(c__19818__auto___46744,out))
;
return ((function (switch__19756__auto__,c__19818__auto___46744,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_46739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46739[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_46739[(1)] = (1));

return statearr_46739;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_46713){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_46713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e46740){if((e46740 instanceof Object)){
var ex__19760__auto__ = e46740;
var statearr_46741_46759 = state_46713;
(statearr_46741_46759[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46760 = state_46713;
state_46713 = G__46760;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_46713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_46713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___46744,out))
})();
var state__19820__auto__ = (function (){var statearr_46742 = f__19819__auto__.call(null);
(statearr_46742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___46744);

return statearr_46742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___46744,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map