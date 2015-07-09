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
if(typeof cljs.core.async.t71009 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t71009 = (function (fn_handler,f,meta71010){
this.fn_handler = fn_handler;
this.f = f;
this.meta71010 = meta71010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t71009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71011,meta71010__$1){
var self__ = this;
var _71011__$1 = this;
return (new cljs.core.async.t71009(self__.fn_handler,self__.f,meta71010__$1));
});

cljs.core.async.t71009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71011){
var self__ = this;
var _71011__$1 = this;
return self__.meta71010;
});

cljs.core.async.t71009.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t71009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t71009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t71009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta71010","meta71010",-169157753,null)], null);
});

cljs.core.async.t71009.cljs$lang$type = true;

cljs.core.async.t71009.cljs$lang$ctorStr = "cljs.core.async/t71009";

cljs.core.async.t71009.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t71009");
});

cljs.core.async.__GT_t71009 = (function cljs$core$async$fn_handler_$___GT_t71009(fn_handler__$1,f__$1,meta71010){
return (new cljs.core.async.t71009(fn_handler__$1,f__$1,meta71010));
});

}

return (new cljs.core.async.t71009(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__71013 = buff;
if(G__71013){
var bit__16736__auto__ = null;
if(cljs.core.truth_((function (){var or__16062__auto__ = bit__16736__auto__;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return G__71013.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__71013.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__71013);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__71013);
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
var G__71015 = arguments.length;
switch (G__71015) {
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
var G__71018 = arguments.length;
switch (G__71018) {
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
var val_71020 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_71020);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_71020,ret){
return (function (){
return fn1.call(null,val_71020);
});})(val_71020,ret))
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
var G__71022 = arguments.length;
switch (G__71022) {
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
var n__16947__auto___71024 = n;
var x_71025 = (0);
while(true){
if((x_71025 < n__16947__auto___71024)){
(a[x_71025] = (0));

var G__71026 = (x_71025 + (1));
x_71025 = G__71026;
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

var G__71027 = (i + (1));
i = G__71027;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t71031 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t71031 = (function (alt_flag,flag,meta71032){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta71032 = meta71032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t71031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_71033,meta71032__$1){
var self__ = this;
var _71033__$1 = this;
return (new cljs.core.async.t71031(self__.alt_flag,self__.flag,meta71032__$1));
});})(flag))
;

cljs.core.async.t71031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_71033){
var self__ = this;
var _71033__$1 = this;
return self__.meta71032;
});})(flag))
;

cljs.core.async.t71031.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t71031.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t71031.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t71031.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta71032","meta71032",-844168668,null)], null);
});})(flag))
;

cljs.core.async.t71031.cljs$lang$type = true;

cljs.core.async.t71031.cljs$lang$ctorStr = "cljs.core.async/t71031";

cljs.core.async.t71031.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t71031");
});})(flag))
;

cljs.core.async.__GT_t71031 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t71031(alt_flag__$1,flag__$1,meta71032){
return (new cljs.core.async.t71031(alt_flag__$1,flag__$1,meta71032));
});})(flag))
;

}

return (new cljs.core.async.t71031(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t71037 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t71037 = (function (alt_handler,flag,cb,meta71038){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta71038 = meta71038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t71037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71039,meta71038__$1){
var self__ = this;
var _71039__$1 = this;
return (new cljs.core.async.t71037(self__.alt_handler,self__.flag,self__.cb,meta71038__$1));
});

cljs.core.async.t71037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71039){
var self__ = this;
var _71039__$1 = this;
return self__.meta71038;
});

cljs.core.async.t71037.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t71037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t71037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t71037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta71038","meta71038",515999116,null)], null);
});

cljs.core.async.t71037.cljs$lang$type = true;

cljs.core.async.t71037.cljs$lang$ctorStr = "cljs.core.async/t71037";

cljs.core.async.t71037.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t71037");
});

cljs.core.async.__GT_t71037 = (function cljs$core$async$alt_handler_$___GT_t71037(alt_handler__$1,flag__$1,cb__$1,meta71038){
return (new cljs.core.async.t71037(alt_handler__$1,flag__$1,cb__$1,meta71038));
});

}

return (new cljs.core.async.t71037(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__71040_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__71040_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__71041_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__71041_SHARP_,port], null));
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
var G__71042 = (i + (1));
i = G__71042;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__71045){
var map__71046 = p__71045;
var map__71046__$1 = ((cljs.core.seq_QMARK_.call(null,map__71046))?cljs.core.apply.call(null,cljs.core.hash_map,map__71046):map__71046);
var opts = map__71046__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq71043){
var G__71044 = cljs.core.first.call(null,seq71043);
var seq71043__$1 = cljs.core.next.call(null,seq71043);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__71044,seq71043__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__71048 = arguments.length;
switch (G__71048) {
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
var c__19818__auto___71097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___71097){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___71097){
return (function (state_71072){
var state_val_71073 = (state_71072[(1)]);
if((state_val_71073 === (7))){
var inst_71068 = (state_71072[(2)]);
var state_71072__$1 = state_71072;
var statearr_71074_71098 = state_71072__$1;
(statearr_71074_71098[(2)] = inst_71068);

(statearr_71074_71098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71073 === (1))){
var state_71072__$1 = state_71072;
var statearr_71075_71099 = state_71072__$1;
(statearr_71075_71099[(2)] = null);

(statearr_71075_71099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71073 === (4))){
var inst_71051 = (state_71072[(7)]);
var inst_71051__$1 = (state_71072[(2)]);
var inst_71052 = (inst_71051__$1 == null);
var state_71072__$1 = (function (){var statearr_71076 = state_71072;
(statearr_71076[(7)] = inst_71051__$1);

return statearr_71076;
})();
if(cljs.core.truth_(inst_71052)){
var statearr_71077_71100 = state_71072__$1;
(statearr_71077_71100[(1)] = (5));

} else {
var statearr_71078_71101 = state_71072__$1;
(statearr_71078_71101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71073 === (13))){
var state_71072__$1 = state_71072;
var statearr_71079_71102 = state_71072__$1;
(statearr_71079_71102[(2)] = null);

(statearr_71079_71102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71073 === (6))){
var inst_71051 = (state_71072[(7)]);
var state_71072__$1 = state_71072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71072__$1,(11),to,inst_71051);
} else {
if((state_val_71073 === (3))){
var inst_71070 = (state_71072[(2)]);
var state_71072__$1 = state_71072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71072__$1,inst_71070);
} else {
if((state_val_71073 === (12))){
var state_71072__$1 = state_71072;
var statearr_71080_71103 = state_71072__$1;
(statearr_71080_71103[(2)] = null);

(statearr_71080_71103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71073 === (2))){
var state_71072__$1 = state_71072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71072__$1,(4),from);
} else {
if((state_val_71073 === (11))){
var inst_71061 = (state_71072[(2)]);
var state_71072__$1 = state_71072;
if(cljs.core.truth_(inst_71061)){
var statearr_71081_71104 = state_71072__$1;
(statearr_71081_71104[(1)] = (12));

} else {
var statearr_71082_71105 = state_71072__$1;
(statearr_71082_71105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71073 === (9))){
var state_71072__$1 = state_71072;
var statearr_71083_71106 = state_71072__$1;
(statearr_71083_71106[(2)] = null);

(statearr_71083_71106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71073 === (5))){
var state_71072__$1 = state_71072;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71084_71107 = state_71072__$1;
(statearr_71084_71107[(1)] = (8));

} else {
var statearr_71085_71108 = state_71072__$1;
(statearr_71085_71108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71073 === (14))){
var inst_71066 = (state_71072[(2)]);
var state_71072__$1 = state_71072;
var statearr_71086_71109 = state_71072__$1;
(statearr_71086_71109[(2)] = inst_71066);

(statearr_71086_71109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71073 === (10))){
var inst_71058 = (state_71072[(2)]);
var state_71072__$1 = state_71072;
var statearr_71087_71110 = state_71072__$1;
(statearr_71087_71110[(2)] = inst_71058);

(statearr_71087_71110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71073 === (8))){
var inst_71055 = cljs.core.async.close_BANG_.call(null,to);
var state_71072__$1 = state_71072;
var statearr_71088_71111 = state_71072__$1;
(statearr_71088_71111[(2)] = inst_71055);

(statearr_71088_71111[(1)] = (10));


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
});})(c__19818__auto___71097))
;
return ((function (switch__19756__auto__,c__19818__auto___71097){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_71092 = [null,null,null,null,null,null,null,null];
(statearr_71092[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_71092[(1)] = (1));

return statearr_71092;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_71072){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_71072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e71093){if((e71093 instanceof Object)){
var ex__19760__auto__ = e71093;
var statearr_71094_71112 = state_71072;
(statearr_71094_71112[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71113 = state_71072;
state_71072 = G__71113;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_71072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_71072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___71097))
})();
var state__19820__auto__ = (function (){var statearr_71095 = f__19819__auto__.call(null);
(statearr_71095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___71097);

return statearr_71095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___71097))
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
return (function (p__71297){
var vec__71298 = p__71297;
var v = cljs.core.nth.call(null,vec__71298,(0),null);
var p = cljs.core.nth.call(null,vec__71298,(1),null);
var job = vec__71298;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19818__auto___71480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___71480,res,vec__71298,v,p,job,jobs,results){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___71480,res,vec__71298,v,p,job,jobs,results){
return (function (state_71303){
var state_val_71304 = (state_71303[(1)]);
if((state_val_71304 === (1))){
var state_71303__$1 = state_71303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71303__$1,(2),res,v);
} else {
if((state_val_71304 === (2))){
var inst_71300 = (state_71303[(2)]);
var inst_71301 = cljs.core.async.close_BANG_.call(null,res);
var state_71303__$1 = (function (){var statearr_71305 = state_71303;
(statearr_71305[(7)] = inst_71300);

return statearr_71305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71303__$1,inst_71301);
} else {
return null;
}
}
});})(c__19818__auto___71480,res,vec__71298,v,p,job,jobs,results))
;
return ((function (switch__19756__auto__,c__19818__auto___71480,res,vec__71298,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_71309 = [null,null,null,null,null,null,null,null];
(statearr_71309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_71309[(1)] = (1));

return statearr_71309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_71303){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_71303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e71310){if((e71310 instanceof Object)){
var ex__19760__auto__ = e71310;
var statearr_71311_71481 = state_71303;
(statearr_71311_71481[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71482 = state_71303;
state_71303 = G__71482;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_71303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_71303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___71480,res,vec__71298,v,p,job,jobs,results))
})();
var state__19820__auto__ = (function (){var statearr_71312 = f__19819__auto__.call(null);
(statearr_71312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___71480);

return statearr_71312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___71480,res,vec__71298,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__71313){
var vec__71314 = p__71313;
var v = cljs.core.nth.call(null,vec__71314,(0),null);
var p = cljs.core.nth.call(null,vec__71314,(1),null);
var job = vec__71314;
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
var n__16947__auto___71483 = n;
var __71484 = (0);
while(true){
if((__71484 < n__16947__auto___71483)){
var G__71315_71485 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__71315_71485) {
case "compute":
var c__19818__auto___71487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__71484,c__19818__auto___71487,G__71315_71485,n__16947__auto___71483,jobs,results,process,async){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (__71484,c__19818__auto___71487,G__71315_71485,n__16947__auto___71483,jobs,results,process,async){
return (function (state_71328){
var state_val_71329 = (state_71328[(1)]);
if((state_val_71329 === (1))){
var state_71328__$1 = state_71328;
var statearr_71330_71488 = state_71328__$1;
(statearr_71330_71488[(2)] = null);

(statearr_71330_71488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71329 === (2))){
var state_71328__$1 = state_71328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71328__$1,(4),jobs);
} else {
if((state_val_71329 === (3))){
var inst_71326 = (state_71328[(2)]);
var state_71328__$1 = state_71328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71328__$1,inst_71326);
} else {
if((state_val_71329 === (4))){
var inst_71318 = (state_71328[(2)]);
var inst_71319 = process.call(null,inst_71318);
var state_71328__$1 = state_71328;
if(cljs.core.truth_(inst_71319)){
var statearr_71331_71489 = state_71328__$1;
(statearr_71331_71489[(1)] = (5));

} else {
var statearr_71332_71490 = state_71328__$1;
(statearr_71332_71490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71329 === (5))){
var state_71328__$1 = state_71328;
var statearr_71333_71491 = state_71328__$1;
(statearr_71333_71491[(2)] = null);

(statearr_71333_71491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71329 === (6))){
var state_71328__$1 = state_71328;
var statearr_71334_71492 = state_71328__$1;
(statearr_71334_71492[(2)] = null);

(statearr_71334_71492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71329 === (7))){
var inst_71324 = (state_71328[(2)]);
var state_71328__$1 = state_71328;
var statearr_71335_71493 = state_71328__$1;
(statearr_71335_71493[(2)] = inst_71324);

(statearr_71335_71493[(1)] = (3));


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
});})(__71484,c__19818__auto___71487,G__71315_71485,n__16947__auto___71483,jobs,results,process,async))
;
return ((function (__71484,switch__19756__auto__,c__19818__auto___71487,G__71315_71485,n__16947__auto___71483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_71339 = [null,null,null,null,null,null,null];
(statearr_71339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_71339[(1)] = (1));

return statearr_71339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_71328){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_71328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e71340){if((e71340 instanceof Object)){
var ex__19760__auto__ = e71340;
var statearr_71341_71494 = state_71328;
(statearr_71341_71494[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71495 = state_71328;
state_71328 = G__71495;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_71328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_71328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(__71484,switch__19756__auto__,c__19818__auto___71487,G__71315_71485,n__16947__auto___71483,jobs,results,process,async))
})();
var state__19820__auto__ = (function (){var statearr_71342 = f__19819__auto__.call(null);
(statearr_71342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___71487);

return statearr_71342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(__71484,c__19818__auto___71487,G__71315_71485,n__16947__auto___71483,jobs,results,process,async))
);


break;
case "async":
var c__19818__auto___71496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__71484,c__19818__auto___71496,G__71315_71485,n__16947__auto___71483,jobs,results,process,async){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (__71484,c__19818__auto___71496,G__71315_71485,n__16947__auto___71483,jobs,results,process,async){
return (function (state_71355){
var state_val_71356 = (state_71355[(1)]);
if((state_val_71356 === (1))){
var state_71355__$1 = state_71355;
var statearr_71357_71497 = state_71355__$1;
(statearr_71357_71497[(2)] = null);

(statearr_71357_71497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71356 === (2))){
var state_71355__$1 = state_71355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71355__$1,(4),jobs);
} else {
if((state_val_71356 === (3))){
var inst_71353 = (state_71355[(2)]);
var state_71355__$1 = state_71355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71355__$1,inst_71353);
} else {
if((state_val_71356 === (4))){
var inst_71345 = (state_71355[(2)]);
var inst_71346 = async.call(null,inst_71345);
var state_71355__$1 = state_71355;
if(cljs.core.truth_(inst_71346)){
var statearr_71358_71498 = state_71355__$1;
(statearr_71358_71498[(1)] = (5));

} else {
var statearr_71359_71499 = state_71355__$1;
(statearr_71359_71499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71356 === (5))){
var state_71355__$1 = state_71355;
var statearr_71360_71500 = state_71355__$1;
(statearr_71360_71500[(2)] = null);

(statearr_71360_71500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71356 === (6))){
var state_71355__$1 = state_71355;
var statearr_71361_71501 = state_71355__$1;
(statearr_71361_71501[(2)] = null);

(statearr_71361_71501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71356 === (7))){
var inst_71351 = (state_71355[(2)]);
var state_71355__$1 = state_71355;
var statearr_71362_71502 = state_71355__$1;
(statearr_71362_71502[(2)] = inst_71351);

(statearr_71362_71502[(1)] = (3));


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
});})(__71484,c__19818__auto___71496,G__71315_71485,n__16947__auto___71483,jobs,results,process,async))
;
return ((function (__71484,switch__19756__auto__,c__19818__auto___71496,G__71315_71485,n__16947__auto___71483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_71366 = [null,null,null,null,null,null,null];
(statearr_71366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_71366[(1)] = (1));

return statearr_71366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_71355){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_71355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e71367){if((e71367 instanceof Object)){
var ex__19760__auto__ = e71367;
var statearr_71368_71503 = state_71355;
(statearr_71368_71503[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71504 = state_71355;
state_71355 = G__71504;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_71355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_71355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(__71484,switch__19756__auto__,c__19818__auto___71496,G__71315_71485,n__16947__auto___71483,jobs,results,process,async))
})();
var state__19820__auto__ = (function (){var statearr_71369 = f__19819__auto__.call(null);
(statearr_71369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___71496);

return statearr_71369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(__71484,c__19818__auto___71496,G__71315_71485,n__16947__auto___71483,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__71505 = (__71484 + (1));
__71484 = G__71505;
continue;
} else {
}
break;
}

var c__19818__auto___71506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___71506,jobs,results,process,async){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___71506,jobs,results,process,async){
return (function (state_71391){
var state_val_71392 = (state_71391[(1)]);
if((state_val_71392 === (1))){
var state_71391__$1 = state_71391;
var statearr_71393_71507 = state_71391__$1;
(statearr_71393_71507[(2)] = null);

(statearr_71393_71507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71392 === (2))){
var state_71391__$1 = state_71391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71391__$1,(4),from);
} else {
if((state_val_71392 === (3))){
var inst_71389 = (state_71391[(2)]);
var state_71391__$1 = state_71391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71391__$1,inst_71389);
} else {
if((state_val_71392 === (4))){
var inst_71372 = (state_71391[(7)]);
var inst_71372__$1 = (state_71391[(2)]);
var inst_71373 = (inst_71372__$1 == null);
var state_71391__$1 = (function (){var statearr_71394 = state_71391;
(statearr_71394[(7)] = inst_71372__$1);

return statearr_71394;
})();
if(cljs.core.truth_(inst_71373)){
var statearr_71395_71508 = state_71391__$1;
(statearr_71395_71508[(1)] = (5));

} else {
var statearr_71396_71509 = state_71391__$1;
(statearr_71396_71509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71392 === (5))){
var inst_71375 = cljs.core.async.close_BANG_.call(null,jobs);
var state_71391__$1 = state_71391;
var statearr_71397_71510 = state_71391__$1;
(statearr_71397_71510[(2)] = inst_71375);

(statearr_71397_71510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71392 === (6))){
var inst_71377 = (state_71391[(8)]);
var inst_71372 = (state_71391[(7)]);
var inst_71377__$1 = cljs.core.async.chan.call(null,(1));
var inst_71378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71379 = [inst_71372,inst_71377__$1];
var inst_71380 = (new cljs.core.PersistentVector(null,2,(5),inst_71378,inst_71379,null));
var state_71391__$1 = (function (){var statearr_71398 = state_71391;
(statearr_71398[(8)] = inst_71377__$1);

return statearr_71398;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71391__$1,(8),jobs,inst_71380);
} else {
if((state_val_71392 === (7))){
var inst_71387 = (state_71391[(2)]);
var state_71391__$1 = state_71391;
var statearr_71399_71511 = state_71391__$1;
(statearr_71399_71511[(2)] = inst_71387);

(statearr_71399_71511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71392 === (8))){
var inst_71377 = (state_71391[(8)]);
var inst_71382 = (state_71391[(2)]);
var state_71391__$1 = (function (){var statearr_71400 = state_71391;
(statearr_71400[(9)] = inst_71382);

return statearr_71400;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71391__$1,(9),results,inst_71377);
} else {
if((state_val_71392 === (9))){
var inst_71384 = (state_71391[(2)]);
var state_71391__$1 = (function (){var statearr_71401 = state_71391;
(statearr_71401[(10)] = inst_71384);

return statearr_71401;
})();
var statearr_71402_71512 = state_71391__$1;
(statearr_71402_71512[(2)] = null);

(statearr_71402_71512[(1)] = (2));


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
});})(c__19818__auto___71506,jobs,results,process,async))
;
return ((function (switch__19756__auto__,c__19818__auto___71506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_71406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_71406[(1)] = (1));

return statearr_71406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_71391){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_71391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e71407){if((e71407 instanceof Object)){
var ex__19760__auto__ = e71407;
var statearr_71408_71513 = state_71391;
(statearr_71408_71513[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71514 = state_71391;
state_71391 = G__71514;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_71391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_71391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___71506,jobs,results,process,async))
})();
var state__19820__auto__ = (function (){var statearr_71409 = f__19819__auto__.call(null);
(statearr_71409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___71506);

return statearr_71409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___71506,jobs,results,process,async))
);


var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,jobs,results,process,async){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,jobs,results,process,async){
return (function (state_71447){
var state_val_71448 = (state_71447[(1)]);
if((state_val_71448 === (7))){
var inst_71443 = (state_71447[(2)]);
var state_71447__$1 = state_71447;
var statearr_71449_71515 = state_71447__$1;
(statearr_71449_71515[(2)] = inst_71443);

(statearr_71449_71515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (20))){
var state_71447__$1 = state_71447;
var statearr_71450_71516 = state_71447__$1;
(statearr_71450_71516[(2)] = null);

(statearr_71450_71516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (1))){
var state_71447__$1 = state_71447;
var statearr_71451_71517 = state_71447__$1;
(statearr_71451_71517[(2)] = null);

(statearr_71451_71517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (4))){
var inst_71412 = (state_71447[(7)]);
var inst_71412__$1 = (state_71447[(2)]);
var inst_71413 = (inst_71412__$1 == null);
var state_71447__$1 = (function (){var statearr_71452 = state_71447;
(statearr_71452[(7)] = inst_71412__$1);

return statearr_71452;
})();
if(cljs.core.truth_(inst_71413)){
var statearr_71453_71518 = state_71447__$1;
(statearr_71453_71518[(1)] = (5));

} else {
var statearr_71454_71519 = state_71447__$1;
(statearr_71454_71519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (15))){
var inst_71425 = (state_71447[(8)]);
var state_71447__$1 = state_71447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71447__$1,(18),to,inst_71425);
} else {
if((state_val_71448 === (21))){
var inst_71438 = (state_71447[(2)]);
var state_71447__$1 = state_71447;
var statearr_71455_71520 = state_71447__$1;
(statearr_71455_71520[(2)] = inst_71438);

(statearr_71455_71520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (13))){
var inst_71440 = (state_71447[(2)]);
var state_71447__$1 = (function (){var statearr_71456 = state_71447;
(statearr_71456[(9)] = inst_71440);

return statearr_71456;
})();
var statearr_71457_71521 = state_71447__$1;
(statearr_71457_71521[(2)] = null);

(statearr_71457_71521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (6))){
var inst_71412 = (state_71447[(7)]);
var state_71447__$1 = state_71447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71447__$1,(11),inst_71412);
} else {
if((state_val_71448 === (17))){
var inst_71433 = (state_71447[(2)]);
var state_71447__$1 = state_71447;
if(cljs.core.truth_(inst_71433)){
var statearr_71458_71522 = state_71447__$1;
(statearr_71458_71522[(1)] = (19));

} else {
var statearr_71459_71523 = state_71447__$1;
(statearr_71459_71523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (3))){
var inst_71445 = (state_71447[(2)]);
var state_71447__$1 = state_71447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71447__$1,inst_71445);
} else {
if((state_val_71448 === (12))){
var inst_71422 = (state_71447[(10)]);
var state_71447__$1 = state_71447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71447__$1,(14),inst_71422);
} else {
if((state_val_71448 === (2))){
var state_71447__$1 = state_71447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71447__$1,(4),results);
} else {
if((state_val_71448 === (19))){
var state_71447__$1 = state_71447;
var statearr_71460_71524 = state_71447__$1;
(statearr_71460_71524[(2)] = null);

(statearr_71460_71524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (11))){
var inst_71422 = (state_71447[(2)]);
var state_71447__$1 = (function (){var statearr_71461 = state_71447;
(statearr_71461[(10)] = inst_71422);

return statearr_71461;
})();
var statearr_71462_71525 = state_71447__$1;
(statearr_71462_71525[(2)] = null);

(statearr_71462_71525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (9))){
var state_71447__$1 = state_71447;
var statearr_71463_71526 = state_71447__$1;
(statearr_71463_71526[(2)] = null);

(statearr_71463_71526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (5))){
var state_71447__$1 = state_71447;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71464_71527 = state_71447__$1;
(statearr_71464_71527[(1)] = (8));

} else {
var statearr_71465_71528 = state_71447__$1;
(statearr_71465_71528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (14))){
var inst_71427 = (state_71447[(11)]);
var inst_71425 = (state_71447[(8)]);
var inst_71425__$1 = (state_71447[(2)]);
var inst_71426 = (inst_71425__$1 == null);
var inst_71427__$1 = cljs.core.not.call(null,inst_71426);
var state_71447__$1 = (function (){var statearr_71466 = state_71447;
(statearr_71466[(11)] = inst_71427__$1);

(statearr_71466[(8)] = inst_71425__$1);

return statearr_71466;
})();
if(inst_71427__$1){
var statearr_71467_71529 = state_71447__$1;
(statearr_71467_71529[(1)] = (15));

} else {
var statearr_71468_71530 = state_71447__$1;
(statearr_71468_71530[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (16))){
var inst_71427 = (state_71447[(11)]);
var state_71447__$1 = state_71447;
var statearr_71469_71531 = state_71447__$1;
(statearr_71469_71531[(2)] = inst_71427);

(statearr_71469_71531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (10))){
var inst_71419 = (state_71447[(2)]);
var state_71447__$1 = state_71447;
var statearr_71470_71532 = state_71447__$1;
(statearr_71470_71532[(2)] = inst_71419);

(statearr_71470_71532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (18))){
var inst_71430 = (state_71447[(2)]);
var state_71447__$1 = state_71447;
var statearr_71471_71533 = state_71447__$1;
(statearr_71471_71533[(2)] = inst_71430);

(statearr_71471_71533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71448 === (8))){
var inst_71416 = cljs.core.async.close_BANG_.call(null,to);
var state_71447__$1 = state_71447;
var statearr_71472_71534 = state_71447__$1;
(statearr_71472_71534[(2)] = inst_71416);

(statearr_71472_71534[(1)] = (10));


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
var statearr_71476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_71476[(1)] = (1));

return statearr_71476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_71447){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_71447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e71477){if((e71477 instanceof Object)){
var ex__19760__auto__ = e71477;
var statearr_71478_71535 = state_71447;
(statearr_71478_71535[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71536 = state_71447;
state_71447 = G__71536;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_71447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_71447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,jobs,results,process,async))
})();
var state__19820__auto__ = (function (){var statearr_71479 = f__19819__auto__.call(null);
(statearr_71479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_71479;
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
var G__71538 = arguments.length;
switch (G__71538) {
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
var G__71541 = arguments.length;
switch (G__71541) {
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
var G__71544 = arguments.length;
switch (G__71544) {
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
var c__19818__auto___71596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___71596,tc,fc){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___71596,tc,fc){
return (function (state_71570){
var state_val_71571 = (state_71570[(1)]);
if((state_val_71571 === (7))){
var inst_71566 = (state_71570[(2)]);
var state_71570__$1 = state_71570;
var statearr_71572_71597 = state_71570__$1;
(statearr_71572_71597[(2)] = inst_71566);

(statearr_71572_71597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71571 === (1))){
var state_71570__$1 = state_71570;
var statearr_71573_71598 = state_71570__$1;
(statearr_71573_71598[(2)] = null);

(statearr_71573_71598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71571 === (4))){
var inst_71547 = (state_71570[(7)]);
var inst_71547__$1 = (state_71570[(2)]);
var inst_71548 = (inst_71547__$1 == null);
var state_71570__$1 = (function (){var statearr_71574 = state_71570;
(statearr_71574[(7)] = inst_71547__$1);

return statearr_71574;
})();
if(cljs.core.truth_(inst_71548)){
var statearr_71575_71599 = state_71570__$1;
(statearr_71575_71599[(1)] = (5));

} else {
var statearr_71576_71600 = state_71570__$1;
(statearr_71576_71600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71571 === (13))){
var state_71570__$1 = state_71570;
var statearr_71577_71601 = state_71570__$1;
(statearr_71577_71601[(2)] = null);

(statearr_71577_71601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71571 === (6))){
var inst_71547 = (state_71570[(7)]);
var inst_71553 = p.call(null,inst_71547);
var state_71570__$1 = state_71570;
if(cljs.core.truth_(inst_71553)){
var statearr_71578_71602 = state_71570__$1;
(statearr_71578_71602[(1)] = (9));

} else {
var statearr_71579_71603 = state_71570__$1;
(statearr_71579_71603[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71571 === (3))){
var inst_71568 = (state_71570[(2)]);
var state_71570__$1 = state_71570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71570__$1,inst_71568);
} else {
if((state_val_71571 === (12))){
var state_71570__$1 = state_71570;
var statearr_71580_71604 = state_71570__$1;
(statearr_71580_71604[(2)] = null);

(statearr_71580_71604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71571 === (2))){
var state_71570__$1 = state_71570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71570__$1,(4),ch);
} else {
if((state_val_71571 === (11))){
var inst_71547 = (state_71570[(7)]);
var inst_71557 = (state_71570[(2)]);
var state_71570__$1 = state_71570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71570__$1,(8),inst_71557,inst_71547);
} else {
if((state_val_71571 === (9))){
var state_71570__$1 = state_71570;
var statearr_71581_71605 = state_71570__$1;
(statearr_71581_71605[(2)] = tc);

(statearr_71581_71605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71571 === (5))){
var inst_71550 = cljs.core.async.close_BANG_.call(null,tc);
var inst_71551 = cljs.core.async.close_BANG_.call(null,fc);
var state_71570__$1 = (function (){var statearr_71582 = state_71570;
(statearr_71582[(8)] = inst_71550);

return statearr_71582;
})();
var statearr_71583_71606 = state_71570__$1;
(statearr_71583_71606[(2)] = inst_71551);

(statearr_71583_71606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71571 === (14))){
var inst_71564 = (state_71570[(2)]);
var state_71570__$1 = state_71570;
var statearr_71584_71607 = state_71570__$1;
(statearr_71584_71607[(2)] = inst_71564);

(statearr_71584_71607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71571 === (10))){
var state_71570__$1 = state_71570;
var statearr_71585_71608 = state_71570__$1;
(statearr_71585_71608[(2)] = fc);

(statearr_71585_71608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71571 === (8))){
var inst_71559 = (state_71570[(2)]);
var state_71570__$1 = state_71570;
if(cljs.core.truth_(inst_71559)){
var statearr_71586_71609 = state_71570__$1;
(statearr_71586_71609[(1)] = (12));

} else {
var statearr_71587_71610 = state_71570__$1;
(statearr_71587_71610[(1)] = (13));

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
});})(c__19818__auto___71596,tc,fc))
;
return ((function (switch__19756__auto__,c__19818__auto___71596,tc,fc){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_71591 = [null,null,null,null,null,null,null,null,null];
(statearr_71591[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_71591[(1)] = (1));

return statearr_71591;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_71570){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_71570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e71592){if((e71592 instanceof Object)){
var ex__19760__auto__ = e71592;
var statearr_71593_71611 = state_71570;
(statearr_71593_71611[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71612 = state_71570;
state_71570 = G__71612;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_71570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_71570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___71596,tc,fc))
})();
var state__19820__auto__ = (function (){var statearr_71594 = f__19819__auto__.call(null);
(statearr_71594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___71596);

return statearr_71594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___71596,tc,fc))
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
return (function (state_71659){
var state_val_71660 = (state_71659[(1)]);
if((state_val_71660 === (1))){
var inst_71645 = init;
var state_71659__$1 = (function (){var statearr_71661 = state_71659;
(statearr_71661[(7)] = inst_71645);

return statearr_71661;
})();
var statearr_71662_71677 = state_71659__$1;
(statearr_71662_71677[(2)] = null);

(statearr_71662_71677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71660 === (2))){
var state_71659__$1 = state_71659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71659__$1,(4),ch);
} else {
if((state_val_71660 === (3))){
var inst_71657 = (state_71659[(2)]);
var state_71659__$1 = state_71659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71659__$1,inst_71657);
} else {
if((state_val_71660 === (4))){
var inst_71648 = (state_71659[(8)]);
var inst_71648__$1 = (state_71659[(2)]);
var inst_71649 = (inst_71648__$1 == null);
var state_71659__$1 = (function (){var statearr_71663 = state_71659;
(statearr_71663[(8)] = inst_71648__$1);

return statearr_71663;
})();
if(cljs.core.truth_(inst_71649)){
var statearr_71664_71678 = state_71659__$1;
(statearr_71664_71678[(1)] = (5));

} else {
var statearr_71665_71679 = state_71659__$1;
(statearr_71665_71679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71660 === (5))){
var inst_71645 = (state_71659[(7)]);
var state_71659__$1 = state_71659;
var statearr_71666_71680 = state_71659__$1;
(statearr_71666_71680[(2)] = inst_71645);

(statearr_71666_71680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71660 === (6))){
var inst_71645 = (state_71659[(7)]);
var inst_71648 = (state_71659[(8)]);
var inst_71652 = f.call(null,inst_71645,inst_71648);
var inst_71645__$1 = inst_71652;
var state_71659__$1 = (function (){var statearr_71667 = state_71659;
(statearr_71667[(7)] = inst_71645__$1);

return statearr_71667;
})();
var statearr_71668_71681 = state_71659__$1;
(statearr_71668_71681[(2)] = null);

(statearr_71668_71681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71660 === (7))){
var inst_71655 = (state_71659[(2)]);
var state_71659__$1 = state_71659;
var statearr_71669_71682 = state_71659__$1;
(statearr_71669_71682[(2)] = inst_71655);

(statearr_71669_71682[(1)] = (3));


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
var statearr_71673 = [null,null,null,null,null,null,null,null,null];
(statearr_71673[(0)] = cljs$core$async$reduce_$_state_machine__19757__auto__);

(statearr_71673[(1)] = (1));

return statearr_71673;
});
var cljs$core$async$reduce_$_state_machine__19757__auto____1 = (function (state_71659){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_71659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e71674){if((e71674 instanceof Object)){
var ex__19760__auto__ = e71674;
var statearr_71675_71683 = state_71659;
(statearr_71675_71683[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71684 = state_71659;
state_71659 = G__71684;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19757__auto__ = function(state_71659){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19757__auto____1.call(this,state_71659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19757__auto____0;
cljs$core$async$reduce_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19757__auto____1;
return cljs$core$async$reduce_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_71676 = f__19819__auto__.call(null);
(statearr_71676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_71676;
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
var G__71686 = arguments.length;
switch (G__71686) {
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
return (function (state_71711){
var state_val_71712 = (state_71711[(1)]);
if((state_val_71712 === (7))){
var inst_71693 = (state_71711[(2)]);
var state_71711__$1 = state_71711;
var statearr_71713_71737 = state_71711__$1;
(statearr_71713_71737[(2)] = inst_71693);

(statearr_71713_71737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71712 === (1))){
var inst_71687 = cljs.core.seq.call(null,coll);
var inst_71688 = inst_71687;
var state_71711__$1 = (function (){var statearr_71714 = state_71711;
(statearr_71714[(7)] = inst_71688);

return statearr_71714;
})();
var statearr_71715_71738 = state_71711__$1;
(statearr_71715_71738[(2)] = null);

(statearr_71715_71738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71712 === (4))){
var inst_71688 = (state_71711[(7)]);
var inst_71691 = cljs.core.first.call(null,inst_71688);
var state_71711__$1 = state_71711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71711__$1,(7),ch,inst_71691);
} else {
if((state_val_71712 === (13))){
var inst_71705 = (state_71711[(2)]);
var state_71711__$1 = state_71711;
var statearr_71716_71739 = state_71711__$1;
(statearr_71716_71739[(2)] = inst_71705);

(statearr_71716_71739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71712 === (6))){
var inst_71696 = (state_71711[(2)]);
var state_71711__$1 = state_71711;
if(cljs.core.truth_(inst_71696)){
var statearr_71717_71740 = state_71711__$1;
(statearr_71717_71740[(1)] = (8));

} else {
var statearr_71718_71741 = state_71711__$1;
(statearr_71718_71741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71712 === (3))){
var inst_71709 = (state_71711[(2)]);
var state_71711__$1 = state_71711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71711__$1,inst_71709);
} else {
if((state_val_71712 === (12))){
var state_71711__$1 = state_71711;
var statearr_71719_71742 = state_71711__$1;
(statearr_71719_71742[(2)] = null);

(statearr_71719_71742[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71712 === (2))){
var inst_71688 = (state_71711[(7)]);
var state_71711__$1 = state_71711;
if(cljs.core.truth_(inst_71688)){
var statearr_71720_71743 = state_71711__$1;
(statearr_71720_71743[(1)] = (4));

} else {
var statearr_71721_71744 = state_71711__$1;
(statearr_71721_71744[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71712 === (11))){
var inst_71702 = cljs.core.async.close_BANG_.call(null,ch);
var state_71711__$1 = state_71711;
var statearr_71722_71745 = state_71711__$1;
(statearr_71722_71745[(2)] = inst_71702);

(statearr_71722_71745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71712 === (9))){
var state_71711__$1 = state_71711;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71723_71746 = state_71711__$1;
(statearr_71723_71746[(1)] = (11));

} else {
var statearr_71724_71747 = state_71711__$1;
(statearr_71724_71747[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71712 === (5))){
var inst_71688 = (state_71711[(7)]);
var state_71711__$1 = state_71711;
var statearr_71725_71748 = state_71711__$1;
(statearr_71725_71748[(2)] = inst_71688);

(statearr_71725_71748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71712 === (10))){
var inst_71707 = (state_71711[(2)]);
var state_71711__$1 = state_71711;
var statearr_71726_71749 = state_71711__$1;
(statearr_71726_71749[(2)] = inst_71707);

(statearr_71726_71749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71712 === (8))){
var inst_71688 = (state_71711[(7)]);
var inst_71698 = cljs.core.next.call(null,inst_71688);
var inst_71688__$1 = inst_71698;
var state_71711__$1 = (function (){var statearr_71727 = state_71711;
(statearr_71727[(7)] = inst_71688__$1);

return statearr_71727;
})();
var statearr_71728_71750 = state_71711__$1;
(statearr_71728_71750[(2)] = null);

(statearr_71728_71750[(1)] = (2));


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
var statearr_71732 = [null,null,null,null,null,null,null,null];
(statearr_71732[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_71732[(1)] = (1));

return statearr_71732;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_71711){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_71711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e71733){if((e71733 instanceof Object)){
var ex__19760__auto__ = e71733;
var statearr_71734_71751 = state_71711;
(statearr_71734_71751[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71752 = state_71711;
state_71711 = G__71752;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_71711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_71711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_71735 = f__19819__auto__.call(null);
(statearr_71735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_71735;
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

cljs.core.async.Mux = (function (){var obj71754 = {};
return obj71754;
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


cljs.core.async.Mult = (function (){var obj71756 = {};
return obj71756;
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
if(typeof cljs.core.async.t71978 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t71978 = (function (mult,ch,cs,meta71979){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta71979 = meta71979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t71978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_71980,meta71979__$1){
var self__ = this;
var _71980__$1 = this;
return (new cljs.core.async.t71978(self__.mult,self__.ch,self__.cs,meta71979__$1));
});})(cs))
;

cljs.core.async.t71978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_71980){
var self__ = this;
var _71980__$1 = this;
return self__.meta71979;
});})(cs))
;

cljs.core.async.t71978.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t71978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t71978.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t71978.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t71978.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t71978.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t71978.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta71979","meta71979",97015625,null)], null);
});})(cs))
;

cljs.core.async.t71978.cljs$lang$type = true;

cljs.core.async.t71978.cljs$lang$ctorStr = "cljs.core.async/t71978";

cljs.core.async.t71978.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t71978");
});})(cs))
;

cljs.core.async.__GT_t71978 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t71978(mult__$1,ch__$1,cs__$1,meta71979){
return (new cljs.core.async.t71978(mult__$1,ch__$1,cs__$1,meta71979));
});})(cs))
;

}

return (new cljs.core.async.t71978(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19818__auto___72199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___72199,cs,m,dchan,dctr,done){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___72199,cs,m,dchan,dctr,done){
return (function (state_72111){
var state_val_72112 = (state_72111[(1)]);
if((state_val_72112 === (7))){
var inst_72107 = (state_72111[(2)]);
var state_72111__$1 = state_72111;
var statearr_72113_72200 = state_72111__$1;
(statearr_72113_72200[(2)] = inst_72107);

(statearr_72113_72200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (20))){
var inst_72012 = (state_72111[(7)]);
var inst_72022 = cljs.core.first.call(null,inst_72012);
var inst_72023 = cljs.core.nth.call(null,inst_72022,(0),null);
var inst_72024 = cljs.core.nth.call(null,inst_72022,(1),null);
var state_72111__$1 = (function (){var statearr_72114 = state_72111;
(statearr_72114[(8)] = inst_72023);

return statearr_72114;
})();
if(cljs.core.truth_(inst_72024)){
var statearr_72115_72201 = state_72111__$1;
(statearr_72115_72201[(1)] = (22));

} else {
var statearr_72116_72202 = state_72111__$1;
(statearr_72116_72202[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (27))){
var inst_72059 = (state_72111[(9)]);
var inst_72052 = (state_72111[(10)]);
var inst_72054 = (state_72111[(11)]);
var inst_71983 = (state_72111[(12)]);
var inst_72059__$1 = cljs.core._nth.call(null,inst_72052,inst_72054);
var inst_72060 = cljs.core.async.put_BANG_.call(null,inst_72059__$1,inst_71983,done);
var state_72111__$1 = (function (){var statearr_72117 = state_72111;
(statearr_72117[(9)] = inst_72059__$1);

return statearr_72117;
})();
if(cljs.core.truth_(inst_72060)){
var statearr_72118_72203 = state_72111__$1;
(statearr_72118_72203[(1)] = (30));

} else {
var statearr_72119_72204 = state_72111__$1;
(statearr_72119_72204[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (1))){
var state_72111__$1 = state_72111;
var statearr_72120_72205 = state_72111__$1;
(statearr_72120_72205[(2)] = null);

(statearr_72120_72205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (24))){
var inst_72012 = (state_72111[(7)]);
var inst_72029 = (state_72111[(2)]);
var inst_72030 = cljs.core.next.call(null,inst_72012);
var inst_71992 = inst_72030;
var inst_71993 = null;
var inst_71994 = (0);
var inst_71995 = (0);
var state_72111__$1 = (function (){var statearr_72121 = state_72111;
(statearr_72121[(13)] = inst_71993);

(statearr_72121[(14)] = inst_71994);

(statearr_72121[(15)] = inst_71995);

(statearr_72121[(16)] = inst_71992);

(statearr_72121[(17)] = inst_72029);

return statearr_72121;
})();
var statearr_72122_72206 = state_72111__$1;
(statearr_72122_72206[(2)] = null);

(statearr_72122_72206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (39))){
var state_72111__$1 = state_72111;
var statearr_72126_72207 = state_72111__$1;
(statearr_72126_72207[(2)] = null);

(statearr_72126_72207[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (4))){
var inst_71983 = (state_72111[(12)]);
var inst_71983__$1 = (state_72111[(2)]);
var inst_71984 = (inst_71983__$1 == null);
var state_72111__$1 = (function (){var statearr_72127 = state_72111;
(statearr_72127[(12)] = inst_71983__$1);

return statearr_72127;
})();
if(cljs.core.truth_(inst_71984)){
var statearr_72128_72208 = state_72111__$1;
(statearr_72128_72208[(1)] = (5));

} else {
var statearr_72129_72209 = state_72111__$1;
(statearr_72129_72209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (15))){
var inst_71993 = (state_72111[(13)]);
var inst_71994 = (state_72111[(14)]);
var inst_71995 = (state_72111[(15)]);
var inst_71992 = (state_72111[(16)]);
var inst_72008 = (state_72111[(2)]);
var inst_72009 = (inst_71995 + (1));
var tmp72123 = inst_71993;
var tmp72124 = inst_71994;
var tmp72125 = inst_71992;
var inst_71992__$1 = tmp72125;
var inst_71993__$1 = tmp72123;
var inst_71994__$1 = tmp72124;
var inst_71995__$1 = inst_72009;
var state_72111__$1 = (function (){var statearr_72130 = state_72111;
(statearr_72130[(13)] = inst_71993__$1);

(statearr_72130[(14)] = inst_71994__$1);

(statearr_72130[(15)] = inst_71995__$1);

(statearr_72130[(16)] = inst_71992__$1);

(statearr_72130[(18)] = inst_72008);

return statearr_72130;
})();
var statearr_72131_72210 = state_72111__$1;
(statearr_72131_72210[(2)] = null);

(statearr_72131_72210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (21))){
var inst_72033 = (state_72111[(2)]);
var state_72111__$1 = state_72111;
var statearr_72135_72211 = state_72111__$1;
(statearr_72135_72211[(2)] = inst_72033);

(statearr_72135_72211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (31))){
var inst_72059 = (state_72111[(9)]);
var inst_72063 = done.call(null,null);
var inst_72064 = cljs.core.async.untap_STAR_.call(null,m,inst_72059);
var state_72111__$1 = (function (){var statearr_72136 = state_72111;
(statearr_72136[(19)] = inst_72063);

return statearr_72136;
})();
var statearr_72137_72212 = state_72111__$1;
(statearr_72137_72212[(2)] = inst_72064);

(statearr_72137_72212[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (32))){
var inst_72052 = (state_72111[(10)]);
var inst_72051 = (state_72111[(20)]);
var inst_72054 = (state_72111[(11)]);
var inst_72053 = (state_72111[(21)]);
var inst_72066 = (state_72111[(2)]);
var inst_72067 = (inst_72054 + (1));
var tmp72132 = inst_72052;
var tmp72133 = inst_72051;
var tmp72134 = inst_72053;
var inst_72051__$1 = tmp72133;
var inst_72052__$1 = tmp72132;
var inst_72053__$1 = tmp72134;
var inst_72054__$1 = inst_72067;
var state_72111__$1 = (function (){var statearr_72138 = state_72111;
(statearr_72138[(22)] = inst_72066);

(statearr_72138[(10)] = inst_72052__$1);

(statearr_72138[(20)] = inst_72051__$1);

(statearr_72138[(11)] = inst_72054__$1);

(statearr_72138[(21)] = inst_72053__$1);

return statearr_72138;
})();
var statearr_72139_72213 = state_72111__$1;
(statearr_72139_72213[(2)] = null);

(statearr_72139_72213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (40))){
var inst_72079 = (state_72111[(23)]);
var inst_72083 = done.call(null,null);
var inst_72084 = cljs.core.async.untap_STAR_.call(null,m,inst_72079);
var state_72111__$1 = (function (){var statearr_72140 = state_72111;
(statearr_72140[(24)] = inst_72083);

return statearr_72140;
})();
var statearr_72141_72214 = state_72111__$1;
(statearr_72141_72214[(2)] = inst_72084);

(statearr_72141_72214[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (33))){
var inst_72070 = (state_72111[(25)]);
var inst_72072 = cljs.core.chunked_seq_QMARK_.call(null,inst_72070);
var state_72111__$1 = state_72111;
if(inst_72072){
var statearr_72142_72215 = state_72111__$1;
(statearr_72142_72215[(1)] = (36));

} else {
var statearr_72143_72216 = state_72111__$1;
(statearr_72143_72216[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (13))){
var inst_72002 = (state_72111[(26)]);
var inst_72005 = cljs.core.async.close_BANG_.call(null,inst_72002);
var state_72111__$1 = state_72111;
var statearr_72144_72217 = state_72111__$1;
(statearr_72144_72217[(2)] = inst_72005);

(statearr_72144_72217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (22))){
var inst_72023 = (state_72111[(8)]);
var inst_72026 = cljs.core.async.close_BANG_.call(null,inst_72023);
var state_72111__$1 = state_72111;
var statearr_72145_72218 = state_72111__$1;
(statearr_72145_72218[(2)] = inst_72026);

(statearr_72145_72218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (36))){
var inst_72070 = (state_72111[(25)]);
var inst_72074 = cljs.core.chunk_first.call(null,inst_72070);
var inst_72075 = cljs.core.chunk_rest.call(null,inst_72070);
var inst_72076 = cljs.core.count.call(null,inst_72074);
var inst_72051 = inst_72075;
var inst_72052 = inst_72074;
var inst_72053 = inst_72076;
var inst_72054 = (0);
var state_72111__$1 = (function (){var statearr_72146 = state_72111;
(statearr_72146[(10)] = inst_72052);

(statearr_72146[(20)] = inst_72051);

(statearr_72146[(11)] = inst_72054);

(statearr_72146[(21)] = inst_72053);

return statearr_72146;
})();
var statearr_72147_72219 = state_72111__$1;
(statearr_72147_72219[(2)] = null);

(statearr_72147_72219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (41))){
var inst_72070 = (state_72111[(25)]);
var inst_72086 = (state_72111[(2)]);
var inst_72087 = cljs.core.next.call(null,inst_72070);
var inst_72051 = inst_72087;
var inst_72052 = null;
var inst_72053 = (0);
var inst_72054 = (0);
var state_72111__$1 = (function (){var statearr_72148 = state_72111;
(statearr_72148[(27)] = inst_72086);

(statearr_72148[(10)] = inst_72052);

(statearr_72148[(20)] = inst_72051);

(statearr_72148[(11)] = inst_72054);

(statearr_72148[(21)] = inst_72053);

return statearr_72148;
})();
var statearr_72149_72220 = state_72111__$1;
(statearr_72149_72220[(2)] = null);

(statearr_72149_72220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (43))){
var state_72111__$1 = state_72111;
var statearr_72150_72221 = state_72111__$1;
(statearr_72150_72221[(2)] = null);

(statearr_72150_72221[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (29))){
var inst_72095 = (state_72111[(2)]);
var state_72111__$1 = state_72111;
var statearr_72151_72222 = state_72111__$1;
(statearr_72151_72222[(2)] = inst_72095);

(statearr_72151_72222[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (44))){
var inst_72104 = (state_72111[(2)]);
var state_72111__$1 = (function (){var statearr_72152 = state_72111;
(statearr_72152[(28)] = inst_72104);

return statearr_72152;
})();
var statearr_72153_72223 = state_72111__$1;
(statearr_72153_72223[(2)] = null);

(statearr_72153_72223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (6))){
var inst_72043 = (state_72111[(29)]);
var inst_72042 = cljs.core.deref.call(null,cs);
var inst_72043__$1 = cljs.core.keys.call(null,inst_72042);
var inst_72044 = cljs.core.count.call(null,inst_72043__$1);
var inst_72045 = cljs.core.reset_BANG_.call(null,dctr,inst_72044);
var inst_72050 = cljs.core.seq.call(null,inst_72043__$1);
var inst_72051 = inst_72050;
var inst_72052 = null;
var inst_72053 = (0);
var inst_72054 = (0);
var state_72111__$1 = (function (){var statearr_72154 = state_72111;
(statearr_72154[(29)] = inst_72043__$1);

(statearr_72154[(10)] = inst_72052);

(statearr_72154[(20)] = inst_72051);

(statearr_72154[(11)] = inst_72054);

(statearr_72154[(21)] = inst_72053);

(statearr_72154[(30)] = inst_72045);

return statearr_72154;
})();
var statearr_72155_72224 = state_72111__$1;
(statearr_72155_72224[(2)] = null);

(statearr_72155_72224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (28))){
var inst_72070 = (state_72111[(25)]);
var inst_72051 = (state_72111[(20)]);
var inst_72070__$1 = cljs.core.seq.call(null,inst_72051);
var state_72111__$1 = (function (){var statearr_72156 = state_72111;
(statearr_72156[(25)] = inst_72070__$1);

return statearr_72156;
})();
if(inst_72070__$1){
var statearr_72157_72225 = state_72111__$1;
(statearr_72157_72225[(1)] = (33));

} else {
var statearr_72158_72226 = state_72111__$1;
(statearr_72158_72226[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (25))){
var inst_72054 = (state_72111[(11)]);
var inst_72053 = (state_72111[(21)]);
var inst_72056 = (inst_72054 < inst_72053);
var inst_72057 = inst_72056;
var state_72111__$1 = state_72111;
if(cljs.core.truth_(inst_72057)){
var statearr_72159_72227 = state_72111__$1;
(statearr_72159_72227[(1)] = (27));

} else {
var statearr_72160_72228 = state_72111__$1;
(statearr_72160_72228[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (34))){
var state_72111__$1 = state_72111;
var statearr_72161_72229 = state_72111__$1;
(statearr_72161_72229[(2)] = null);

(statearr_72161_72229[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (17))){
var state_72111__$1 = state_72111;
var statearr_72162_72230 = state_72111__$1;
(statearr_72162_72230[(2)] = null);

(statearr_72162_72230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (3))){
var inst_72109 = (state_72111[(2)]);
var state_72111__$1 = state_72111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72111__$1,inst_72109);
} else {
if((state_val_72112 === (12))){
var inst_72038 = (state_72111[(2)]);
var state_72111__$1 = state_72111;
var statearr_72163_72231 = state_72111__$1;
(statearr_72163_72231[(2)] = inst_72038);

(statearr_72163_72231[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (2))){
var state_72111__$1 = state_72111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72111__$1,(4),ch);
} else {
if((state_val_72112 === (23))){
var state_72111__$1 = state_72111;
var statearr_72164_72232 = state_72111__$1;
(statearr_72164_72232[(2)] = null);

(statearr_72164_72232[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (35))){
var inst_72093 = (state_72111[(2)]);
var state_72111__$1 = state_72111;
var statearr_72165_72233 = state_72111__$1;
(statearr_72165_72233[(2)] = inst_72093);

(statearr_72165_72233[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (19))){
var inst_72012 = (state_72111[(7)]);
var inst_72016 = cljs.core.chunk_first.call(null,inst_72012);
var inst_72017 = cljs.core.chunk_rest.call(null,inst_72012);
var inst_72018 = cljs.core.count.call(null,inst_72016);
var inst_71992 = inst_72017;
var inst_71993 = inst_72016;
var inst_71994 = inst_72018;
var inst_71995 = (0);
var state_72111__$1 = (function (){var statearr_72166 = state_72111;
(statearr_72166[(13)] = inst_71993);

(statearr_72166[(14)] = inst_71994);

(statearr_72166[(15)] = inst_71995);

(statearr_72166[(16)] = inst_71992);

return statearr_72166;
})();
var statearr_72167_72234 = state_72111__$1;
(statearr_72167_72234[(2)] = null);

(statearr_72167_72234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (11))){
var inst_72012 = (state_72111[(7)]);
var inst_71992 = (state_72111[(16)]);
var inst_72012__$1 = cljs.core.seq.call(null,inst_71992);
var state_72111__$1 = (function (){var statearr_72168 = state_72111;
(statearr_72168[(7)] = inst_72012__$1);

return statearr_72168;
})();
if(inst_72012__$1){
var statearr_72169_72235 = state_72111__$1;
(statearr_72169_72235[(1)] = (16));

} else {
var statearr_72170_72236 = state_72111__$1;
(statearr_72170_72236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (9))){
var inst_72040 = (state_72111[(2)]);
var state_72111__$1 = state_72111;
var statearr_72171_72237 = state_72111__$1;
(statearr_72171_72237[(2)] = inst_72040);

(statearr_72171_72237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (5))){
var inst_71990 = cljs.core.deref.call(null,cs);
var inst_71991 = cljs.core.seq.call(null,inst_71990);
var inst_71992 = inst_71991;
var inst_71993 = null;
var inst_71994 = (0);
var inst_71995 = (0);
var state_72111__$1 = (function (){var statearr_72172 = state_72111;
(statearr_72172[(13)] = inst_71993);

(statearr_72172[(14)] = inst_71994);

(statearr_72172[(15)] = inst_71995);

(statearr_72172[(16)] = inst_71992);

return statearr_72172;
})();
var statearr_72173_72238 = state_72111__$1;
(statearr_72173_72238[(2)] = null);

(statearr_72173_72238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (14))){
var state_72111__$1 = state_72111;
var statearr_72174_72239 = state_72111__$1;
(statearr_72174_72239[(2)] = null);

(statearr_72174_72239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (45))){
var inst_72101 = (state_72111[(2)]);
var state_72111__$1 = state_72111;
var statearr_72175_72240 = state_72111__$1;
(statearr_72175_72240[(2)] = inst_72101);

(statearr_72175_72240[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (26))){
var inst_72043 = (state_72111[(29)]);
var inst_72097 = (state_72111[(2)]);
var inst_72098 = cljs.core.seq.call(null,inst_72043);
var state_72111__$1 = (function (){var statearr_72176 = state_72111;
(statearr_72176[(31)] = inst_72097);

return statearr_72176;
})();
if(inst_72098){
var statearr_72177_72241 = state_72111__$1;
(statearr_72177_72241[(1)] = (42));

} else {
var statearr_72178_72242 = state_72111__$1;
(statearr_72178_72242[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (16))){
var inst_72012 = (state_72111[(7)]);
var inst_72014 = cljs.core.chunked_seq_QMARK_.call(null,inst_72012);
var state_72111__$1 = state_72111;
if(inst_72014){
var statearr_72179_72243 = state_72111__$1;
(statearr_72179_72243[(1)] = (19));

} else {
var statearr_72180_72244 = state_72111__$1;
(statearr_72180_72244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (38))){
var inst_72090 = (state_72111[(2)]);
var state_72111__$1 = state_72111;
var statearr_72181_72245 = state_72111__$1;
(statearr_72181_72245[(2)] = inst_72090);

(statearr_72181_72245[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (30))){
var state_72111__$1 = state_72111;
var statearr_72182_72246 = state_72111__$1;
(statearr_72182_72246[(2)] = null);

(statearr_72182_72246[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (10))){
var inst_71993 = (state_72111[(13)]);
var inst_71995 = (state_72111[(15)]);
var inst_72001 = cljs.core._nth.call(null,inst_71993,inst_71995);
var inst_72002 = cljs.core.nth.call(null,inst_72001,(0),null);
var inst_72003 = cljs.core.nth.call(null,inst_72001,(1),null);
var state_72111__$1 = (function (){var statearr_72183 = state_72111;
(statearr_72183[(26)] = inst_72002);

return statearr_72183;
})();
if(cljs.core.truth_(inst_72003)){
var statearr_72184_72247 = state_72111__$1;
(statearr_72184_72247[(1)] = (13));

} else {
var statearr_72185_72248 = state_72111__$1;
(statearr_72185_72248[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (18))){
var inst_72036 = (state_72111[(2)]);
var state_72111__$1 = state_72111;
var statearr_72186_72249 = state_72111__$1;
(statearr_72186_72249[(2)] = inst_72036);

(statearr_72186_72249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (42))){
var state_72111__$1 = state_72111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72111__$1,(45),dchan);
} else {
if((state_val_72112 === (37))){
var inst_72070 = (state_72111[(25)]);
var inst_71983 = (state_72111[(12)]);
var inst_72079 = (state_72111[(23)]);
var inst_72079__$1 = cljs.core.first.call(null,inst_72070);
var inst_72080 = cljs.core.async.put_BANG_.call(null,inst_72079__$1,inst_71983,done);
var state_72111__$1 = (function (){var statearr_72187 = state_72111;
(statearr_72187[(23)] = inst_72079__$1);

return statearr_72187;
})();
if(cljs.core.truth_(inst_72080)){
var statearr_72188_72250 = state_72111__$1;
(statearr_72188_72250[(1)] = (39));

} else {
var statearr_72189_72251 = state_72111__$1;
(statearr_72189_72251[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72112 === (8))){
var inst_71994 = (state_72111[(14)]);
var inst_71995 = (state_72111[(15)]);
var inst_71997 = (inst_71995 < inst_71994);
var inst_71998 = inst_71997;
var state_72111__$1 = state_72111;
if(cljs.core.truth_(inst_71998)){
var statearr_72190_72252 = state_72111__$1;
(statearr_72190_72252[(1)] = (10));

} else {
var statearr_72191_72253 = state_72111__$1;
(statearr_72191_72253[(1)] = (11));

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
});})(c__19818__auto___72199,cs,m,dchan,dctr,done))
;
return ((function (switch__19756__auto__,c__19818__auto___72199,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19757__auto__ = null;
var cljs$core$async$mult_$_state_machine__19757__auto____0 = (function (){
var statearr_72195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72195[(0)] = cljs$core$async$mult_$_state_machine__19757__auto__);

(statearr_72195[(1)] = (1));

return statearr_72195;
});
var cljs$core$async$mult_$_state_machine__19757__auto____1 = (function (state_72111){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_72111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e72196){if((e72196 instanceof Object)){
var ex__19760__auto__ = e72196;
var statearr_72197_72254 = state_72111;
(statearr_72197_72254[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72255 = state_72111;
state_72111 = G__72255;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19757__auto__ = function(state_72111){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19757__auto____1.call(this,state_72111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19757__auto____0;
cljs$core$async$mult_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19757__auto____1;
return cljs$core$async$mult_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___72199,cs,m,dchan,dctr,done))
})();
var state__19820__auto__ = (function (){var statearr_72198 = f__19819__auto__.call(null);
(statearr_72198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___72199);

return statearr_72198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___72199,cs,m,dchan,dctr,done))
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
var G__72257 = arguments.length;
switch (G__72257) {
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

cljs.core.async.Mix = (function (){var obj72260 = {};
return obj72260;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__72265){
var map__72266 = p__72265;
var map__72266__$1 = ((cljs.core.seq_QMARK_.call(null,map__72266))?cljs.core.apply.call(null,cljs.core.hash_map,map__72266):map__72266);
var opts = map__72266__$1;
var statearr_72267_72270 = state;
(statearr_72267_72270[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__72266,map__72266__$1,opts){
return (function (val){
var statearr_72268_72271 = state;
(statearr_72268_72271[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__72266,map__72266__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_72269_72272 = state;
(statearr_72269_72272[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq72261){
var G__72262 = cljs.core.first.call(null,seq72261);
var seq72261__$1 = cljs.core.next.call(null,seq72261);
var G__72263 = cljs.core.first.call(null,seq72261__$1);
var seq72261__$2 = cljs.core.next.call(null,seq72261__$1);
var G__72264 = cljs.core.first.call(null,seq72261__$2);
var seq72261__$3 = cljs.core.next.call(null,seq72261__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__72262,G__72263,G__72264,seq72261__$3);
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
if(typeof cljs.core.async.t72392 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t72392 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta72393){
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
this.meta72393 = meta72393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t72392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_72394,meta72393__$1){
var self__ = this;
var _72394__$1 = this;
return (new cljs.core.async.t72392(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta72393__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t72392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_72394){
var self__ = this;
var _72394__$1 = this;
return self__.meta72393;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t72392.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t72392.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t72392.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t72392.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t72392.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t72392.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t72392.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t72392.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t72392.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta72393","meta72393",637770873,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t72392.cljs$lang$type = true;

cljs.core.async.t72392.cljs$lang$ctorStr = "cljs.core.async/t72392";

cljs.core.async.t72392.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t72392");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t72392 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t72392(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta72393){
return (new cljs.core.async.t72392(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta72393));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t72392(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19818__auto___72511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___72511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___72511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_72464){
var state_val_72465 = (state_72464[(1)]);
if((state_val_72465 === (7))){
var inst_72408 = (state_72464[(7)]);
var inst_72413 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72408);
var state_72464__$1 = state_72464;
var statearr_72466_72512 = state_72464__$1;
(statearr_72466_72512[(2)] = inst_72413);

(statearr_72466_72512[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (20))){
var inst_72423 = (state_72464[(8)]);
var state_72464__$1 = state_72464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72464__$1,(23),out,inst_72423);
} else {
if((state_val_72465 === (1))){
var inst_72398 = (state_72464[(9)]);
var inst_72398__$1 = calc_state.call(null);
var inst_72399 = cljs.core.seq_QMARK_.call(null,inst_72398__$1);
var state_72464__$1 = (function (){var statearr_72467 = state_72464;
(statearr_72467[(9)] = inst_72398__$1);

return statearr_72467;
})();
if(inst_72399){
var statearr_72468_72513 = state_72464__$1;
(statearr_72468_72513[(1)] = (2));

} else {
var statearr_72469_72514 = state_72464__$1;
(statearr_72469_72514[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (24))){
var inst_72416 = (state_72464[(10)]);
var inst_72408 = inst_72416;
var state_72464__$1 = (function (){var statearr_72470 = state_72464;
(statearr_72470[(7)] = inst_72408);

return statearr_72470;
})();
var statearr_72471_72515 = state_72464__$1;
(statearr_72471_72515[(2)] = null);

(statearr_72471_72515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (4))){
var inst_72398 = (state_72464[(9)]);
var inst_72404 = (state_72464[(2)]);
var inst_72405 = cljs.core.get.call(null,inst_72404,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_72406 = cljs.core.get.call(null,inst_72404,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_72407 = cljs.core.get.call(null,inst_72404,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_72408 = inst_72398;
var state_72464__$1 = (function (){var statearr_72472 = state_72464;
(statearr_72472[(11)] = inst_72407);

(statearr_72472[(12)] = inst_72405);

(statearr_72472[(13)] = inst_72406);

(statearr_72472[(7)] = inst_72408);

return statearr_72472;
})();
var statearr_72473_72516 = state_72464__$1;
(statearr_72473_72516[(2)] = null);

(statearr_72473_72516[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (15))){
var state_72464__$1 = state_72464;
var statearr_72474_72517 = state_72464__$1;
(statearr_72474_72517[(2)] = null);

(statearr_72474_72517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (21))){
var inst_72416 = (state_72464[(10)]);
var inst_72408 = inst_72416;
var state_72464__$1 = (function (){var statearr_72475 = state_72464;
(statearr_72475[(7)] = inst_72408);

return statearr_72475;
})();
var statearr_72476_72518 = state_72464__$1;
(statearr_72476_72518[(2)] = null);

(statearr_72476_72518[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (13))){
var inst_72460 = (state_72464[(2)]);
var state_72464__$1 = state_72464;
var statearr_72477_72519 = state_72464__$1;
(statearr_72477_72519[(2)] = inst_72460);

(statearr_72477_72519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (22))){
var inst_72458 = (state_72464[(2)]);
var state_72464__$1 = state_72464;
var statearr_72478_72520 = state_72464__$1;
(statearr_72478_72520[(2)] = inst_72458);

(statearr_72478_72520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (6))){
var inst_72462 = (state_72464[(2)]);
var state_72464__$1 = state_72464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72464__$1,inst_72462);
} else {
if((state_val_72465 === (25))){
var state_72464__$1 = state_72464;
var statearr_72479_72521 = state_72464__$1;
(statearr_72479_72521[(2)] = null);

(statearr_72479_72521[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (17))){
var inst_72438 = (state_72464[(14)]);
var state_72464__$1 = state_72464;
var statearr_72480_72522 = state_72464__$1;
(statearr_72480_72522[(2)] = inst_72438);

(statearr_72480_72522[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (3))){
var inst_72398 = (state_72464[(9)]);
var state_72464__$1 = state_72464;
var statearr_72481_72523 = state_72464__$1;
(statearr_72481_72523[(2)] = inst_72398);

(statearr_72481_72523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (12))){
var inst_72417 = (state_72464[(15)]);
var inst_72438 = (state_72464[(14)]);
var inst_72424 = (state_72464[(16)]);
var inst_72438__$1 = inst_72417.call(null,inst_72424);
var state_72464__$1 = (function (){var statearr_72482 = state_72464;
(statearr_72482[(14)] = inst_72438__$1);

return statearr_72482;
})();
if(cljs.core.truth_(inst_72438__$1)){
var statearr_72483_72524 = state_72464__$1;
(statearr_72483_72524[(1)] = (17));

} else {
var statearr_72484_72525 = state_72464__$1;
(statearr_72484_72525[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (2))){
var inst_72398 = (state_72464[(9)]);
var inst_72401 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72398);
var state_72464__$1 = state_72464;
var statearr_72485_72526 = state_72464__$1;
(statearr_72485_72526[(2)] = inst_72401);

(statearr_72485_72526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (23))){
var inst_72449 = (state_72464[(2)]);
var state_72464__$1 = state_72464;
if(cljs.core.truth_(inst_72449)){
var statearr_72486_72527 = state_72464__$1;
(statearr_72486_72527[(1)] = (24));

} else {
var statearr_72487_72528 = state_72464__$1;
(statearr_72487_72528[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (19))){
var inst_72446 = (state_72464[(2)]);
var state_72464__$1 = state_72464;
if(cljs.core.truth_(inst_72446)){
var statearr_72488_72529 = state_72464__$1;
(statearr_72488_72529[(1)] = (20));

} else {
var statearr_72489_72530 = state_72464__$1;
(statearr_72489_72530[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (11))){
var inst_72423 = (state_72464[(8)]);
var inst_72429 = (inst_72423 == null);
var state_72464__$1 = state_72464;
if(cljs.core.truth_(inst_72429)){
var statearr_72490_72531 = state_72464__$1;
(statearr_72490_72531[(1)] = (14));

} else {
var statearr_72491_72532 = state_72464__$1;
(statearr_72491_72532[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (9))){
var inst_72416 = (state_72464[(10)]);
var inst_72416__$1 = (state_72464[(2)]);
var inst_72417 = cljs.core.get.call(null,inst_72416__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_72418 = cljs.core.get.call(null,inst_72416__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_72419 = cljs.core.get.call(null,inst_72416__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_72464__$1 = (function (){var statearr_72492 = state_72464;
(statearr_72492[(10)] = inst_72416__$1);

(statearr_72492[(15)] = inst_72417);

(statearr_72492[(17)] = inst_72418);

return statearr_72492;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_72464__$1,(10),inst_72419);
} else {
if((state_val_72465 === (5))){
var inst_72408 = (state_72464[(7)]);
var inst_72411 = cljs.core.seq_QMARK_.call(null,inst_72408);
var state_72464__$1 = state_72464;
if(inst_72411){
var statearr_72493_72533 = state_72464__$1;
(statearr_72493_72533[(1)] = (7));

} else {
var statearr_72494_72534 = state_72464__$1;
(statearr_72494_72534[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (14))){
var inst_72424 = (state_72464[(16)]);
var inst_72431 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_72424);
var state_72464__$1 = state_72464;
var statearr_72495_72535 = state_72464__$1;
(statearr_72495_72535[(2)] = inst_72431);

(statearr_72495_72535[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (26))){
var inst_72454 = (state_72464[(2)]);
var state_72464__$1 = state_72464;
var statearr_72496_72536 = state_72464__$1;
(statearr_72496_72536[(2)] = inst_72454);

(statearr_72496_72536[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (16))){
var inst_72434 = (state_72464[(2)]);
var inst_72435 = calc_state.call(null);
var inst_72408 = inst_72435;
var state_72464__$1 = (function (){var statearr_72497 = state_72464;
(statearr_72497[(7)] = inst_72408);

(statearr_72497[(18)] = inst_72434);

return statearr_72497;
})();
var statearr_72498_72537 = state_72464__$1;
(statearr_72498_72537[(2)] = null);

(statearr_72498_72537[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (10))){
var inst_72423 = (state_72464[(8)]);
var inst_72424 = (state_72464[(16)]);
var inst_72422 = (state_72464[(2)]);
var inst_72423__$1 = cljs.core.nth.call(null,inst_72422,(0),null);
var inst_72424__$1 = cljs.core.nth.call(null,inst_72422,(1),null);
var inst_72425 = (inst_72423__$1 == null);
var inst_72426 = cljs.core._EQ_.call(null,inst_72424__$1,change);
var inst_72427 = (inst_72425) || (inst_72426);
var state_72464__$1 = (function (){var statearr_72499 = state_72464;
(statearr_72499[(8)] = inst_72423__$1);

(statearr_72499[(16)] = inst_72424__$1);

return statearr_72499;
})();
if(cljs.core.truth_(inst_72427)){
var statearr_72500_72538 = state_72464__$1;
(statearr_72500_72538[(1)] = (11));

} else {
var statearr_72501_72539 = state_72464__$1;
(statearr_72501_72539[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (18))){
var inst_72417 = (state_72464[(15)]);
var inst_72424 = (state_72464[(16)]);
var inst_72418 = (state_72464[(17)]);
var inst_72441 = cljs.core.empty_QMARK_.call(null,inst_72417);
var inst_72442 = inst_72418.call(null,inst_72424);
var inst_72443 = cljs.core.not.call(null,inst_72442);
var inst_72444 = (inst_72441) && (inst_72443);
var state_72464__$1 = state_72464;
var statearr_72502_72540 = state_72464__$1;
(statearr_72502_72540[(2)] = inst_72444);

(statearr_72502_72540[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72465 === (8))){
var inst_72408 = (state_72464[(7)]);
var state_72464__$1 = state_72464;
var statearr_72503_72541 = state_72464__$1;
(statearr_72503_72541[(2)] = inst_72408);

(statearr_72503_72541[(1)] = (9));


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
});})(c__19818__auto___72511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19756__auto__,c__19818__auto___72511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19757__auto__ = null;
var cljs$core$async$mix_$_state_machine__19757__auto____0 = (function (){
var statearr_72507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72507[(0)] = cljs$core$async$mix_$_state_machine__19757__auto__);

(statearr_72507[(1)] = (1));

return statearr_72507;
});
var cljs$core$async$mix_$_state_machine__19757__auto____1 = (function (state_72464){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_72464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e72508){if((e72508 instanceof Object)){
var ex__19760__auto__ = e72508;
var statearr_72509_72542 = state_72464;
(statearr_72509_72542[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72543 = state_72464;
state_72464 = G__72543;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19757__auto__ = function(state_72464){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19757__auto____1.call(this,state_72464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19757__auto____0;
cljs$core$async$mix_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19757__auto____1;
return cljs$core$async$mix_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___72511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19820__auto__ = (function (){var statearr_72510 = f__19819__auto__.call(null);
(statearr_72510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___72511);

return statearr_72510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___72511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj72545 = {};
return obj72545;
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
var G__72547 = arguments.length;
switch (G__72547) {
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
var G__72551 = arguments.length;
switch (G__72551) {
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
return (function (p1__72549_SHARP_){
if(cljs.core.truth_(p1__72549_SHARP_.call(null,topic))){
return p1__72549_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__72549_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16062__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t72552 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t72552 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta72553){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta72553 = meta72553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t72552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_72554,meta72553__$1){
var self__ = this;
var _72554__$1 = this;
return (new cljs.core.async.t72552(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta72553__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t72552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_72554){
var self__ = this;
var _72554__$1 = this;
return self__.meta72553;
});})(mults,ensure_mult))
;

cljs.core.async.t72552.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t72552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t72552.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t72552.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t72552.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t72552.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t72552.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t72552.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta72553","meta72553",2115190105,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t72552.cljs$lang$type = true;

cljs.core.async.t72552.cljs$lang$ctorStr = "cljs.core.async/t72552";

cljs.core.async.t72552.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t72552");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t72552 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t72552(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta72553){
return (new cljs.core.async.t72552(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta72553));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t72552(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19818__auto___72675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___72675,mults,ensure_mult,p){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___72675,mults,ensure_mult,p){
return (function (state_72626){
var state_val_72627 = (state_72626[(1)]);
if((state_val_72627 === (7))){
var inst_72622 = (state_72626[(2)]);
var state_72626__$1 = state_72626;
var statearr_72628_72676 = state_72626__$1;
(statearr_72628_72676[(2)] = inst_72622);

(statearr_72628_72676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (20))){
var state_72626__$1 = state_72626;
var statearr_72629_72677 = state_72626__$1;
(statearr_72629_72677[(2)] = null);

(statearr_72629_72677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (1))){
var state_72626__$1 = state_72626;
var statearr_72630_72678 = state_72626__$1;
(statearr_72630_72678[(2)] = null);

(statearr_72630_72678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (24))){
var inst_72605 = (state_72626[(7)]);
var inst_72614 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_72605);
var state_72626__$1 = state_72626;
var statearr_72631_72679 = state_72626__$1;
(statearr_72631_72679[(2)] = inst_72614);

(statearr_72631_72679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (4))){
var inst_72557 = (state_72626[(8)]);
var inst_72557__$1 = (state_72626[(2)]);
var inst_72558 = (inst_72557__$1 == null);
var state_72626__$1 = (function (){var statearr_72632 = state_72626;
(statearr_72632[(8)] = inst_72557__$1);

return statearr_72632;
})();
if(cljs.core.truth_(inst_72558)){
var statearr_72633_72680 = state_72626__$1;
(statearr_72633_72680[(1)] = (5));

} else {
var statearr_72634_72681 = state_72626__$1;
(statearr_72634_72681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (15))){
var inst_72599 = (state_72626[(2)]);
var state_72626__$1 = state_72626;
var statearr_72635_72682 = state_72626__$1;
(statearr_72635_72682[(2)] = inst_72599);

(statearr_72635_72682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (21))){
var inst_72619 = (state_72626[(2)]);
var state_72626__$1 = (function (){var statearr_72636 = state_72626;
(statearr_72636[(9)] = inst_72619);

return statearr_72636;
})();
var statearr_72637_72683 = state_72626__$1;
(statearr_72637_72683[(2)] = null);

(statearr_72637_72683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (13))){
var inst_72581 = (state_72626[(10)]);
var inst_72583 = cljs.core.chunked_seq_QMARK_.call(null,inst_72581);
var state_72626__$1 = state_72626;
if(inst_72583){
var statearr_72638_72684 = state_72626__$1;
(statearr_72638_72684[(1)] = (16));

} else {
var statearr_72639_72685 = state_72626__$1;
(statearr_72639_72685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (22))){
var inst_72611 = (state_72626[(2)]);
var state_72626__$1 = state_72626;
if(cljs.core.truth_(inst_72611)){
var statearr_72640_72686 = state_72626__$1;
(statearr_72640_72686[(1)] = (23));

} else {
var statearr_72641_72687 = state_72626__$1;
(statearr_72641_72687[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (6))){
var inst_72557 = (state_72626[(8)]);
var inst_72607 = (state_72626[(11)]);
var inst_72605 = (state_72626[(7)]);
var inst_72605__$1 = topic_fn.call(null,inst_72557);
var inst_72606 = cljs.core.deref.call(null,mults);
var inst_72607__$1 = cljs.core.get.call(null,inst_72606,inst_72605__$1);
var state_72626__$1 = (function (){var statearr_72642 = state_72626;
(statearr_72642[(11)] = inst_72607__$1);

(statearr_72642[(7)] = inst_72605__$1);

return statearr_72642;
})();
if(cljs.core.truth_(inst_72607__$1)){
var statearr_72643_72688 = state_72626__$1;
(statearr_72643_72688[(1)] = (19));

} else {
var statearr_72644_72689 = state_72626__$1;
(statearr_72644_72689[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (25))){
var inst_72616 = (state_72626[(2)]);
var state_72626__$1 = state_72626;
var statearr_72645_72690 = state_72626__$1;
(statearr_72645_72690[(2)] = inst_72616);

(statearr_72645_72690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (17))){
var inst_72581 = (state_72626[(10)]);
var inst_72590 = cljs.core.first.call(null,inst_72581);
var inst_72591 = cljs.core.async.muxch_STAR_.call(null,inst_72590);
var inst_72592 = cljs.core.async.close_BANG_.call(null,inst_72591);
var inst_72593 = cljs.core.next.call(null,inst_72581);
var inst_72567 = inst_72593;
var inst_72568 = null;
var inst_72569 = (0);
var inst_72570 = (0);
var state_72626__$1 = (function (){var statearr_72646 = state_72626;
(statearr_72646[(12)] = inst_72570);

(statearr_72646[(13)] = inst_72569);

(statearr_72646[(14)] = inst_72592);

(statearr_72646[(15)] = inst_72568);

(statearr_72646[(16)] = inst_72567);

return statearr_72646;
})();
var statearr_72647_72691 = state_72626__$1;
(statearr_72647_72691[(2)] = null);

(statearr_72647_72691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (3))){
var inst_72624 = (state_72626[(2)]);
var state_72626__$1 = state_72626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72626__$1,inst_72624);
} else {
if((state_val_72627 === (12))){
var inst_72601 = (state_72626[(2)]);
var state_72626__$1 = state_72626;
var statearr_72648_72692 = state_72626__$1;
(statearr_72648_72692[(2)] = inst_72601);

(statearr_72648_72692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (2))){
var state_72626__$1 = state_72626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72626__$1,(4),ch);
} else {
if((state_val_72627 === (23))){
var state_72626__$1 = state_72626;
var statearr_72649_72693 = state_72626__$1;
(statearr_72649_72693[(2)] = null);

(statearr_72649_72693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (19))){
var inst_72557 = (state_72626[(8)]);
var inst_72607 = (state_72626[(11)]);
var inst_72609 = cljs.core.async.muxch_STAR_.call(null,inst_72607);
var state_72626__$1 = state_72626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72626__$1,(22),inst_72609,inst_72557);
} else {
if((state_val_72627 === (11))){
var inst_72581 = (state_72626[(10)]);
var inst_72567 = (state_72626[(16)]);
var inst_72581__$1 = cljs.core.seq.call(null,inst_72567);
var state_72626__$1 = (function (){var statearr_72650 = state_72626;
(statearr_72650[(10)] = inst_72581__$1);

return statearr_72650;
})();
if(inst_72581__$1){
var statearr_72651_72694 = state_72626__$1;
(statearr_72651_72694[(1)] = (13));

} else {
var statearr_72652_72695 = state_72626__$1;
(statearr_72652_72695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (9))){
var inst_72603 = (state_72626[(2)]);
var state_72626__$1 = state_72626;
var statearr_72653_72696 = state_72626__$1;
(statearr_72653_72696[(2)] = inst_72603);

(statearr_72653_72696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (5))){
var inst_72564 = cljs.core.deref.call(null,mults);
var inst_72565 = cljs.core.vals.call(null,inst_72564);
var inst_72566 = cljs.core.seq.call(null,inst_72565);
var inst_72567 = inst_72566;
var inst_72568 = null;
var inst_72569 = (0);
var inst_72570 = (0);
var state_72626__$1 = (function (){var statearr_72654 = state_72626;
(statearr_72654[(12)] = inst_72570);

(statearr_72654[(13)] = inst_72569);

(statearr_72654[(15)] = inst_72568);

(statearr_72654[(16)] = inst_72567);

return statearr_72654;
})();
var statearr_72655_72697 = state_72626__$1;
(statearr_72655_72697[(2)] = null);

(statearr_72655_72697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (14))){
var state_72626__$1 = state_72626;
var statearr_72659_72698 = state_72626__$1;
(statearr_72659_72698[(2)] = null);

(statearr_72659_72698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (16))){
var inst_72581 = (state_72626[(10)]);
var inst_72585 = cljs.core.chunk_first.call(null,inst_72581);
var inst_72586 = cljs.core.chunk_rest.call(null,inst_72581);
var inst_72587 = cljs.core.count.call(null,inst_72585);
var inst_72567 = inst_72586;
var inst_72568 = inst_72585;
var inst_72569 = inst_72587;
var inst_72570 = (0);
var state_72626__$1 = (function (){var statearr_72660 = state_72626;
(statearr_72660[(12)] = inst_72570);

(statearr_72660[(13)] = inst_72569);

(statearr_72660[(15)] = inst_72568);

(statearr_72660[(16)] = inst_72567);

return statearr_72660;
})();
var statearr_72661_72699 = state_72626__$1;
(statearr_72661_72699[(2)] = null);

(statearr_72661_72699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (10))){
var inst_72570 = (state_72626[(12)]);
var inst_72569 = (state_72626[(13)]);
var inst_72568 = (state_72626[(15)]);
var inst_72567 = (state_72626[(16)]);
var inst_72575 = cljs.core._nth.call(null,inst_72568,inst_72570);
var inst_72576 = cljs.core.async.muxch_STAR_.call(null,inst_72575);
var inst_72577 = cljs.core.async.close_BANG_.call(null,inst_72576);
var inst_72578 = (inst_72570 + (1));
var tmp72656 = inst_72569;
var tmp72657 = inst_72568;
var tmp72658 = inst_72567;
var inst_72567__$1 = tmp72658;
var inst_72568__$1 = tmp72657;
var inst_72569__$1 = tmp72656;
var inst_72570__$1 = inst_72578;
var state_72626__$1 = (function (){var statearr_72662 = state_72626;
(statearr_72662[(12)] = inst_72570__$1);

(statearr_72662[(13)] = inst_72569__$1);

(statearr_72662[(15)] = inst_72568__$1);

(statearr_72662[(16)] = inst_72567__$1);

(statearr_72662[(17)] = inst_72577);

return statearr_72662;
})();
var statearr_72663_72700 = state_72626__$1;
(statearr_72663_72700[(2)] = null);

(statearr_72663_72700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (18))){
var inst_72596 = (state_72626[(2)]);
var state_72626__$1 = state_72626;
var statearr_72664_72701 = state_72626__$1;
(statearr_72664_72701[(2)] = inst_72596);

(statearr_72664_72701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72627 === (8))){
var inst_72570 = (state_72626[(12)]);
var inst_72569 = (state_72626[(13)]);
var inst_72572 = (inst_72570 < inst_72569);
var inst_72573 = inst_72572;
var state_72626__$1 = state_72626;
if(cljs.core.truth_(inst_72573)){
var statearr_72665_72702 = state_72626__$1;
(statearr_72665_72702[(1)] = (10));

} else {
var statearr_72666_72703 = state_72626__$1;
(statearr_72666_72703[(1)] = (11));

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
});})(c__19818__auto___72675,mults,ensure_mult,p))
;
return ((function (switch__19756__auto__,c__19818__auto___72675,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_72670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72670[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_72670[(1)] = (1));

return statearr_72670;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_72626){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_72626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e72671){if((e72671 instanceof Object)){
var ex__19760__auto__ = e72671;
var statearr_72672_72704 = state_72626;
(statearr_72672_72704[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72705 = state_72626;
state_72626 = G__72705;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_72626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_72626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___72675,mults,ensure_mult,p))
})();
var state__19820__auto__ = (function (){var statearr_72673 = f__19819__auto__.call(null);
(statearr_72673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___72675);

return statearr_72673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___72675,mults,ensure_mult,p))
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
var G__72707 = arguments.length;
switch (G__72707) {
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
var G__72710 = arguments.length;
switch (G__72710) {
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
var G__72713 = arguments.length;
switch (G__72713) {
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
var c__19818__auto___72783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___72783,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___72783,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_72752){
var state_val_72753 = (state_72752[(1)]);
if((state_val_72753 === (7))){
var state_72752__$1 = state_72752;
var statearr_72754_72784 = state_72752__$1;
(statearr_72754_72784[(2)] = null);

(statearr_72754_72784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72753 === (1))){
var state_72752__$1 = state_72752;
var statearr_72755_72785 = state_72752__$1;
(statearr_72755_72785[(2)] = null);

(statearr_72755_72785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72753 === (4))){
var inst_72716 = (state_72752[(7)]);
var inst_72718 = (inst_72716 < cnt);
var state_72752__$1 = state_72752;
if(cljs.core.truth_(inst_72718)){
var statearr_72756_72786 = state_72752__$1;
(statearr_72756_72786[(1)] = (6));

} else {
var statearr_72757_72787 = state_72752__$1;
(statearr_72757_72787[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72753 === (15))){
var inst_72748 = (state_72752[(2)]);
var state_72752__$1 = state_72752;
var statearr_72758_72788 = state_72752__$1;
(statearr_72758_72788[(2)] = inst_72748);

(statearr_72758_72788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72753 === (13))){
var inst_72741 = cljs.core.async.close_BANG_.call(null,out);
var state_72752__$1 = state_72752;
var statearr_72759_72789 = state_72752__$1;
(statearr_72759_72789[(2)] = inst_72741);

(statearr_72759_72789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72753 === (6))){
var state_72752__$1 = state_72752;
var statearr_72760_72790 = state_72752__$1;
(statearr_72760_72790[(2)] = null);

(statearr_72760_72790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72753 === (3))){
var inst_72750 = (state_72752[(2)]);
var state_72752__$1 = state_72752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72752__$1,inst_72750);
} else {
if((state_val_72753 === (12))){
var inst_72738 = (state_72752[(8)]);
var inst_72738__$1 = (state_72752[(2)]);
var inst_72739 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_72738__$1);
var state_72752__$1 = (function (){var statearr_72761 = state_72752;
(statearr_72761[(8)] = inst_72738__$1);

return statearr_72761;
})();
if(cljs.core.truth_(inst_72739)){
var statearr_72762_72791 = state_72752__$1;
(statearr_72762_72791[(1)] = (13));

} else {
var statearr_72763_72792 = state_72752__$1;
(statearr_72763_72792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72753 === (2))){
var inst_72715 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_72716 = (0);
var state_72752__$1 = (function (){var statearr_72764 = state_72752;
(statearr_72764[(7)] = inst_72716);

(statearr_72764[(9)] = inst_72715);

return statearr_72764;
})();
var statearr_72765_72793 = state_72752__$1;
(statearr_72765_72793[(2)] = null);

(statearr_72765_72793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72753 === (11))){
var inst_72716 = (state_72752[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_72752,(10),Object,null,(9));
var inst_72725 = chs__$1.call(null,inst_72716);
var inst_72726 = done.call(null,inst_72716);
var inst_72727 = cljs.core.async.take_BANG_.call(null,inst_72725,inst_72726);
var state_72752__$1 = state_72752;
var statearr_72766_72794 = state_72752__$1;
(statearr_72766_72794[(2)] = inst_72727);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72752__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72753 === (9))){
var inst_72716 = (state_72752[(7)]);
var inst_72729 = (state_72752[(2)]);
var inst_72730 = (inst_72716 + (1));
var inst_72716__$1 = inst_72730;
var state_72752__$1 = (function (){var statearr_72767 = state_72752;
(statearr_72767[(7)] = inst_72716__$1);

(statearr_72767[(10)] = inst_72729);

return statearr_72767;
})();
var statearr_72768_72795 = state_72752__$1;
(statearr_72768_72795[(2)] = null);

(statearr_72768_72795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72753 === (5))){
var inst_72736 = (state_72752[(2)]);
var state_72752__$1 = (function (){var statearr_72769 = state_72752;
(statearr_72769[(11)] = inst_72736);

return statearr_72769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72752__$1,(12),dchan);
} else {
if((state_val_72753 === (14))){
var inst_72738 = (state_72752[(8)]);
var inst_72743 = cljs.core.apply.call(null,f,inst_72738);
var state_72752__$1 = state_72752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72752__$1,(16),out,inst_72743);
} else {
if((state_val_72753 === (16))){
var inst_72745 = (state_72752[(2)]);
var state_72752__$1 = (function (){var statearr_72770 = state_72752;
(statearr_72770[(12)] = inst_72745);

return statearr_72770;
})();
var statearr_72771_72796 = state_72752__$1;
(statearr_72771_72796[(2)] = null);

(statearr_72771_72796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72753 === (10))){
var inst_72720 = (state_72752[(2)]);
var inst_72721 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_72752__$1 = (function (){var statearr_72772 = state_72752;
(statearr_72772[(13)] = inst_72720);

return statearr_72772;
})();
var statearr_72773_72797 = state_72752__$1;
(statearr_72773_72797[(2)] = inst_72721);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72752__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72753 === (8))){
var inst_72734 = (state_72752[(2)]);
var state_72752__$1 = state_72752;
var statearr_72774_72798 = state_72752__$1;
(statearr_72774_72798[(2)] = inst_72734);

(statearr_72774_72798[(1)] = (5));


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
});})(c__19818__auto___72783,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19756__auto__,c__19818__auto___72783,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_72778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72778[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_72778[(1)] = (1));

return statearr_72778;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_72752){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_72752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e72779){if((e72779 instanceof Object)){
var ex__19760__auto__ = e72779;
var statearr_72780_72799 = state_72752;
(statearr_72780_72799[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72800 = state_72752;
state_72752 = G__72800;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_72752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_72752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___72783,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19820__auto__ = (function (){var statearr_72781 = f__19819__auto__.call(null);
(statearr_72781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___72783);

return statearr_72781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___72783,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__72803 = arguments.length;
switch (G__72803) {
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
var c__19818__auto___72858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___72858,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___72858,out){
return (function (state_72833){
var state_val_72834 = (state_72833[(1)]);
if((state_val_72834 === (7))){
var inst_72812 = (state_72833[(7)]);
var inst_72813 = (state_72833[(8)]);
var inst_72812__$1 = (state_72833[(2)]);
var inst_72813__$1 = cljs.core.nth.call(null,inst_72812__$1,(0),null);
var inst_72814 = cljs.core.nth.call(null,inst_72812__$1,(1),null);
var inst_72815 = (inst_72813__$1 == null);
var state_72833__$1 = (function (){var statearr_72835 = state_72833;
(statearr_72835[(9)] = inst_72814);

(statearr_72835[(7)] = inst_72812__$1);

(statearr_72835[(8)] = inst_72813__$1);

return statearr_72835;
})();
if(cljs.core.truth_(inst_72815)){
var statearr_72836_72859 = state_72833__$1;
(statearr_72836_72859[(1)] = (8));

} else {
var statearr_72837_72860 = state_72833__$1;
(statearr_72837_72860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72834 === (1))){
var inst_72804 = cljs.core.vec.call(null,chs);
var inst_72805 = inst_72804;
var state_72833__$1 = (function (){var statearr_72838 = state_72833;
(statearr_72838[(10)] = inst_72805);

return statearr_72838;
})();
var statearr_72839_72861 = state_72833__$1;
(statearr_72839_72861[(2)] = null);

(statearr_72839_72861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72834 === (4))){
var inst_72805 = (state_72833[(10)]);
var state_72833__$1 = state_72833;
return cljs.core.async.ioc_alts_BANG_.call(null,state_72833__$1,(7),inst_72805);
} else {
if((state_val_72834 === (6))){
var inst_72829 = (state_72833[(2)]);
var state_72833__$1 = state_72833;
var statearr_72840_72862 = state_72833__$1;
(statearr_72840_72862[(2)] = inst_72829);

(statearr_72840_72862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72834 === (3))){
var inst_72831 = (state_72833[(2)]);
var state_72833__$1 = state_72833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72833__$1,inst_72831);
} else {
if((state_val_72834 === (2))){
var inst_72805 = (state_72833[(10)]);
var inst_72807 = cljs.core.count.call(null,inst_72805);
var inst_72808 = (inst_72807 > (0));
var state_72833__$1 = state_72833;
if(cljs.core.truth_(inst_72808)){
var statearr_72842_72863 = state_72833__$1;
(statearr_72842_72863[(1)] = (4));

} else {
var statearr_72843_72864 = state_72833__$1;
(statearr_72843_72864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72834 === (11))){
var inst_72805 = (state_72833[(10)]);
var inst_72822 = (state_72833[(2)]);
var tmp72841 = inst_72805;
var inst_72805__$1 = tmp72841;
var state_72833__$1 = (function (){var statearr_72844 = state_72833;
(statearr_72844[(11)] = inst_72822);

(statearr_72844[(10)] = inst_72805__$1);

return statearr_72844;
})();
var statearr_72845_72865 = state_72833__$1;
(statearr_72845_72865[(2)] = null);

(statearr_72845_72865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72834 === (9))){
var inst_72813 = (state_72833[(8)]);
var state_72833__$1 = state_72833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72833__$1,(11),out,inst_72813);
} else {
if((state_val_72834 === (5))){
var inst_72827 = cljs.core.async.close_BANG_.call(null,out);
var state_72833__$1 = state_72833;
var statearr_72846_72866 = state_72833__$1;
(statearr_72846_72866[(2)] = inst_72827);

(statearr_72846_72866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72834 === (10))){
var inst_72825 = (state_72833[(2)]);
var state_72833__$1 = state_72833;
var statearr_72847_72867 = state_72833__$1;
(statearr_72847_72867[(2)] = inst_72825);

(statearr_72847_72867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72834 === (8))){
var inst_72814 = (state_72833[(9)]);
var inst_72812 = (state_72833[(7)]);
var inst_72805 = (state_72833[(10)]);
var inst_72813 = (state_72833[(8)]);
var inst_72817 = (function (){var cs = inst_72805;
var vec__72810 = inst_72812;
var v = inst_72813;
var c = inst_72814;
return ((function (cs,vec__72810,v,c,inst_72814,inst_72812,inst_72805,inst_72813,state_val_72834,c__19818__auto___72858,out){
return (function (p1__72801_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__72801_SHARP_);
});
;})(cs,vec__72810,v,c,inst_72814,inst_72812,inst_72805,inst_72813,state_val_72834,c__19818__auto___72858,out))
})();
var inst_72818 = cljs.core.filterv.call(null,inst_72817,inst_72805);
var inst_72805__$1 = inst_72818;
var state_72833__$1 = (function (){var statearr_72848 = state_72833;
(statearr_72848[(10)] = inst_72805__$1);

return statearr_72848;
})();
var statearr_72849_72868 = state_72833__$1;
(statearr_72849_72868[(2)] = null);

(statearr_72849_72868[(1)] = (2));


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
});})(c__19818__auto___72858,out))
;
return ((function (switch__19756__auto__,c__19818__auto___72858,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_72853 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72853[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_72853[(1)] = (1));

return statearr_72853;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_72833){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_72833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e72854){if((e72854 instanceof Object)){
var ex__19760__auto__ = e72854;
var statearr_72855_72869 = state_72833;
(statearr_72855_72869[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72870 = state_72833;
state_72833 = G__72870;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_72833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_72833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___72858,out))
})();
var state__19820__auto__ = (function (){var statearr_72856 = f__19819__auto__.call(null);
(statearr_72856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___72858);

return statearr_72856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___72858,out))
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
var G__72872 = arguments.length;
switch (G__72872) {
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
var c__19818__auto___72920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___72920,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___72920,out){
return (function (state_72896){
var state_val_72897 = (state_72896[(1)]);
if((state_val_72897 === (7))){
var inst_72878 = (state_72896[(7)]);
var inst_72878__$1 = (state_72896[(2)]);
var inst_72879 = (inst_72878__$1 == null);
var inst_72880 = cljs.core.not.call(null,inst_72879);
var state_72896__$1 = (function (){var statearr_72898 = state_72896;
(statearr_72898[(7)] = inst_72878__$1);

return statearr_72898;
})();
if(inst_72880){
var statearr_72899_72921 = state_72896__$1;
(statearr_72899_72921[(1)] = (8));

} else {
var statearr_72900_72922 = state_72896__$1;
(statearr_72900_72922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72897 === (1))){
var inst_72873 = (0);
var state_72896__$1 = (function (){var statearr_72901 = state_72896;
(statearr_72901[(8)] = inst_72873);

return statearr_72901;
})();
var statearr_72902_72923 = state_72896__$1;
(statearr_72902_72923[(2)] = null);

(statearr_72902_72923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72897 === (4))){
var state_72896__$1 = state_72896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72896__$1,(7),ch);
} else {
if((state_val_72897 === (6))){
var inst_72891 = (state_72896[(2)]);
var state_72896__$1 = state_72896;
var statearr_72903_72924 = state_72896__$1;
(statearr_72903_72924[(2)] = inst_72891);

(statearr_72903_72924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72897 === (3))){
var inst_72893 = (state_72896[(2)]);
var inst_72894 = cljs.core.async.close_BANG_.call(null,out);
var state_72896__$1 = (function (){var statearr_72904 = state_72896;
(statearr_72904[(9)] = inst_72893);

return statearr_72904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72896__$1,inst_72894);
} else {
if((state_val_72897 === (2))){
var inst_72873 = (state_72896[(8)]);
var inst_72875 = (inst_72873 < n);
var state_72896__$1 = state_72896;
if(cljs.core.truth_(inst_72875)){
var statearr_72905_72925 = state_72896__$1;
(statearr_72905_72925[(1)] = (4));

} else {
var statearr_72906_72926 = state_72896__$1;
(statearr_72906_72926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72897 === (11))){
var inst_72873 = (state_72896[(8)]);
var inst_72883 = (state_72896[(2)]);
var inst_72884 = (inst_72873 + (1));
var inst_72873__$1 = inst_72884;
var state_72896__$1 = (function (){var statearr_72907 = state_72896;
(statearr_72907[(8)] = inst_72873__$1);

(statearr_72907[(10)] = inst_72883);

return statearr_72907;
})();
var statearr_72908_72927 = state_72896__$1;
(statearr_72908_72927[(2)] = null);

(statearr_72908_72927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72897 === (9))){
var state_72896__$1 = state_72896;
var statearr_72909_72928 = state_72896__$1;
(statearr_72909_72928[(2)] = null);

(statearr_72909_72928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72897 === (5))){
var state_72896__$1 = state_72896;
var statearr_72910_72929 = state_72896__$1;
(statearr_72910_72929[(2)] = null);

(statearr_72910_72929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72897 === (10))){
var inst_72888 = (state_72896[(2)]);
var state_72896__$1 = state_72896;
var statearr_72911_72930 = state_72896__$1;
(statearr_72911_72930[(2)] = inst_72888);

(statearr_72911_72930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72897 === (8))){
var inst_72878 = (state_72896[(7)]);
var state_72896__$1 = state_72896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72896__$1,(11),out,inst_72878);
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
});})(c__19818__auto___72920,out))
;
return ((function (switch__19756__auto__,c__19818__auto___72920,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_72915 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72915[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_72915[(1)] = (1));

return statearr_72915;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_72896){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_72896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e72916){if((e72916 instanceof Object)){
var ex__19760__auto__ = e72916;
var statearr_72917_72931 = state_72896;
(statearr_72917_72931[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72932 = state_72896;
state_72896 = G__72932;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_72896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_72896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___72920,out))
})();
var state__19820__auto__ = (function (){var statearr_72918 = f__19819__auto__.call(null);
(statearr_72918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___72920);

return statearr_72918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___72920,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t72940 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t72940 = (function (map_LT_,f,ch,meta72941){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta72941 = meta72941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t72940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72942,meta72941__$1){
var self__ = this;
var _72942__$1 = this;
return (new cljs.core.async.t72940(self__.map_LT_,self__.f,self__.ch,meta72941__$1));
});

cljs.core.async.t72940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72942){
var self__ = this;
var _72942__$1 = this;
return self__.meta72941;
});

cljs.core.async.t72940.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t72940.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t72940.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t72940.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t72940.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t72943 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t72943 = (function (map_LT_,f,ch,meta72941,_,fn1,meta72944){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta72941 = meta72941;
this._ = _;
this.fn1 = fn1;
this.meta72944 = meta72944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t72943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_72945,meta72944__$1){
var self__ = this;
var _72945__$1 = this;
return (new cljs.core.async.t72943(self__.map_LT_,self__.f,self__.ch,self__.meta72941,self__._,self__.fn1,meta72944__$1));
});})(___$1))
;

cljs.core.async.t72943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_72945){
var self__ = this;
var _72945__$1 = this;
return self__.meta72944;
});})(___$1))
;

cljs.core.async.t72943.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t72943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t72943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__72933_SHARP_){
return f1.call(null,(((p1__72933_SHARP_ == null))?null:self__.f.call(null,p1__72933_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t72943.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72941","meta72941",634179786,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta72944","meta72944",-2103144319,null)], null);
});})(___$1))
;

cljs.core.async.t72943.cljs$lang$type = true;

cljs.core.async.t72943.cljs$lang$ctorStr = "cljs.core.async/t72943";

cljs.core.async.t72943.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t72943");
});})(___$1))
;

cljs.core.async.__GT_t72943 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t72943(map_LT___$1,f__$1,ch__$1,meta72941__$1,___$2,fn1__$1,meta72944){
return (new cljs.core.async.t72943(map_LT___$1,f__$1,ch__$1,meta72941__$1,___$2,fn1__$1,meta72944));
});})(___$1))
;

}

return (new cljs.core.async.t72943(self__.map_LT_,self__.f,self__.ch,self__.meta72941,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t72940.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t72940.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t72940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72941","meta72941",634179786,null)], null);
});

cljs.core.async.t72940.cljs$lang$type = true;

cljs.core.async.t72940.cljs$lang$ctorStr = "cljs.core.async/t72940";

cljs.core.async.t72940.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t72940");
});

cljs.core.async.__GT_t72940 = (function cljs$core$async$map_LT__$___GT_t72940(map_LT___$1,f__$1,ch__$1,meta72941){
return (new cljs.core.async.t72940(map_LT___$1,f__$1,ch__$1,meta72941));
});

}

return (new cljs.core.async.t72940(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t72949 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t72949 = (function (map_GT_,f,ch,meta72950){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta72950 = meta72950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t72949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72951,meta72950__$1){
var self__ = this;
var _72951__$1 = this;
return (new cljs.core.async.t72949(self__.map_GT_,self__.f,self__.ch,meta72950__$1));
});

cljs.core.async.t72949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72951){
var self__ = this;
var _72951__$1 = this;
return self__.meta72950;
});

cljs.core.async.t72949.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t72949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t72949.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t72949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t72949.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t72949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t72949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72950","meta72950",1676441870,null)], null);
});

cljs.core.async.t72949.cljs$lang$type = true;

cljs.core.async.t72949.cljs$lang$ctorStr = "cljs.core.async/t72949";

cljs.core.async.t72949.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t72949");
});

cljs.core.async.__GT_t72949 = (function cljs$core$async$map_GT__$___GT_t72949(map_GT___$1,f__$1,ch__$1,meta72950){
return (new cljs.core.async.t72949(map_GT___$1,f__$1,ch__$1,meta72950));
});

}

return (new cljs.core.async.t72949(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t72955 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t72955 = (function (filter_GT_,p,ch,meta72956){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta72956 = meta72956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t72955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72957,meta72956__$1){
var self__ = this;
var _72957__$1 = this;
return (new cljs.core.async.t72955(self__.filter_GT_,self__.p,self__.ch,meta72956__$1));
});

cljs.core.async.t72955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72957){
var self__ = this;
var _72957__$1 = this;
return self__.meta72956;
});

cljs.core.async.t72955.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t72955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t72955.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t72955.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t72955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t72955.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t72955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t72955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72956","meta72956",1760950682,null)], null);
});

cljs.core.async.t72955.cljs$lang$type = true;

cljs.core.async.t72955.cljs$lang$ctorStr = "cljs.core.async/t72955";

cljs.core.async.t72955.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t72955");
});

cljs.core.async.__GT_t72955 = (function cljs$core$async$filter_GT__$___GT_t72955(filter_GT___$1,p__$1,ch__$1,meta72956){
return (new cljs.core.async.t72955(filter_GT___$1,p__$1,ch__$1,meta72956));
});

}

return (new cljs.core.async.t72955(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__72959 = arguments.length;
switch (G__72959) {
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
var c__19818__auto___73002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___73002,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___73002,out){
return (function (state_72980){
var state_val_72981 = (state_72980[(1)]);
if((state_val_72981 === (7))){
var inst_72976 = (state_72980[(2)]);
var state_72980__$1 = state_72980;
var statearr_72982_73003 = state_72980__$1;
(statearr_72982_73003[(2)] = inst_72976);

(statearr_72982_73003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72981 === (1))){
var state_72980__$1 = state_72980;
var statearr_72983_73004 = state_72980__$1;
(statearr_72983_73004[(2)] = null);

(statearr_72983_73004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72981 === (4))){
var inst_72962 = (state_72980[(7)]);
var inst_72962__$1 = (state_72980[(2)]);
var inst_72963 = (inst_72962__$1 == null);
var state_72980__$1 = (function (){var statearr_72984 = state_72980;
(statearr_72984[(7)] = inst_72962__$1);

return statearr_72984;
})();
if(cljs.core.truth_(inst_72963)){
var statearr_72985_73005 = state_72980__$1;
(statearr_72985_73005[(1)] = (5));

} else {
var statearr_72986_73006 = state_72980__$1;
(statearr_72986_73006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72981 === (6))){
var inst_72962 = (state_72980[(7)]);
var inst_72967 = p.call(null,inst_72962);
var state_72980__$1 = state_72980;
if(cljs.core.truth_(inst_72967)){
var statearr_72987_73007 = state_72980__$1;
(statearr_72987_73007[(1)] = (8));

} else {
var statearr_72988_73008 = state_72980__$1;
(statearr_72988_73008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72981 === (3))){
var inst_72978 = (state_72980[(2)]);
var state_72980__$1 = state_72980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72980__$1,inst_72978);
} else {
if((state_val_72981 === (2))){
var state_72980__$1 = state_72980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72980__$1,(4),ch);
} else {
if((state_val_72981 === (11))){
var inst_72970 = (state_72980[(2)]);
var state_72980__$1 = state_72980;
var statearr_72989_73009 = state_72980__$1;
(statearr_72989_73009[(2)] = inst_72970);

(statearr_72989_73009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72981 === (9))){
var state_72980__$1 = state_72980;
var statearr_72990_73010 = state_72980__$1;
(statearr_72990_73010[(2)] = null);

(statearr_72990_73010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72981 === (5))){
var inst_72965 = cljs.core.async.close_BANG_.call(null,out);
var state_72980__$1 = state_72980;
var statearr_72991_73011 = state_72980__$1;
(statearr_72991_73011[(2)] = inst_72965);

(statearr_72991_73011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72981 === (10))){
var inst_72973 = (state_72980[(2)]);
var state_72980__$1 = (function (){var statearr_72992 = state_72980;
(statearr_72992[(8)] = inst_72973);

return statearr_72992;
})();
var statearr_72993_73012 = state_72980__$1;
(statearr_72993_73012[(2)] = null);

(statearr_72993_73012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72981 === (8))){
var inst_72962 = (state_72980[(7)]);
var state_72980__$1 = state_72980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72980__$1,(11),out,inst_72962);
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
});})(c__19818__auto___73002,out))
;
return ((function (switch__19756__auto__,c__19818__auto___73002,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_72997 = [null,null,null,null,null,null,null,null,null];
(statearr_72997[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_72997[(1)] = (1));

return statearr_72997;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_72980){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_72980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e72998){if((e72998 instanceof Object)){
var ex__19760__auto__ = e72998;
var statearr_72999_73013 = state_72980;
(statearr_72999_73013[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73014 = state_72980;
state_72980 = G__73014;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_72980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_72980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___73002,out))
})();
var state__19820__auto__ = (function (){var statearr_73000 = f__19819__auto__.call(null);
(statearr_73000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___73002);

return statearr_73000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___73002,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__73016 = arguments.length;
switch (G__73016) {
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
return (function (state_73183){
var state_val_73184 = (state_73183[(1)]);
if((state_val_73184 === (7))){
var inst_73179 = (state_73183[(2)]);
var state_73183__$1 = state_73183;
var statearr_73185_73226 = state_73183__$1;
(statearr_73185_73226[(2)] = inst_73179);

(statearr_73185_73226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (20))){
var inst_73149 = (state_73183[(7)]);
var inst_73160 = (state_73183[(2)]);
var inst_73161 = cljs.core.next.call(null,inst_73149);
var inst_73135 = inst_73161;
var inst_73136 = null;
var inst_73137 = (0);
var inst_73138 = (0);
var state_73183__$1 = (function (){var statearr_73186 = state_73183;
(statearr_73186[(8)] = inst_73160);

(statearr_73186[(9)] = inst_73135);

(statearr_73186[(10)] = inst_73138);

(statearr_73186[(11)] = inst_73136);

(statearr_73186[(12)] = inst_73137);

return statearr_73186;
})();
var statearr_73187_73227 = state_73183__$1;
(statearr_73187_73227[(2)] = null);

(statearr_73187_73227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (1))){
var state_73183__$1 = state_73183;
var statearr_73188_73228 = state_73183__$1;
(statearr_73188_73228[(2)] = null);

(statearr_73188_73228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (4))){
var inst_73124 = (state_73183[(13)]);
var inst_73124__$1 = (state_73183[(2)]);
var inst_73125 = (inst_73124__$1 == null);
var state_73183__$1 = (function (){var statearr_73189 = state_73183;
(statearr_73189[(13)] = inst_73124__$1);

return statearr_73189;
})();
if(cljs.core.truth_(inst_73125)){
var statearr_73190_73229 = state_73183__$1;
(statearr_73190_73229[(1)] = (5));

} else {
var statearr_73191_73230 = state_73183__$1;
(statearr_73191_73230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (15))){
var state_73183__$1 = state_73183;
var statearr_73195_73231 = state_73183__$1;
(statearr_73195_73231[(2)] = null);

(statearr_73195_73231[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (21))){
var state_73183__$1 = state_73183;
var statearr_73196_73232 = state_73183__$1;
(statearr_73196_73232[(2)] = null);

(statearr_73196_73232[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (13))){
var inst_73135 = (state_73183[(9)]);
var inst_73138 = (state_73183[(10)]);
var inst_73136 = (state_73183[(11)]);
var inst_73137 = (state_73183[(12)]);
var inst_73145 = (state_73183[(2)]);
var inst_73146 = (inst_73138 + (1));
var tmp73192 = inst_73135;
var tmp73193 = inst_73136;
var tmp73194 = inst_73137;
var inst_73135__$1 = tmp73192;
var inst_73136__$1 = tmp73193;
var inst_73137__$1 = tmp73194;
var inst_73138__$1 = inst_73146;
var state_73183__$1 = (function (){var statearr_73197 = state_73183;
(statearr_73197[(14)] = inst_73145);

(statearr_73197[(9)] = inst_73135__$1);

(statearr_73197[(10)] = inst_73138__$1);

(statearr_73197[(11)] = inst_73136__$1);

(statearr_73197[(12)] = inst_73137__$1);

return statearr_73197;
})();
var statearr_73198_73233 = state_73183__$1;
(statearr_73198_73233[(2)] = null);

(statearr_73198_73233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (22))){
var state_73183__$1 = state_73183;
var statearr_73199_73234 = state_73183__$1;
(statearr_73199_73234[(2)] = null);

(statearr_73199_73234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (6))){
var inst_73124 = (state_73183[(13)]);
var inst_73133 = f.call(null,inst_73124);
var inst_73134 = cljs.core.seq.call(null,inst_73133);
var inst_73135 = inst_73134;
var inst_73136 = null;
var inst_73137 = (0);
var inst_73138 = (0);
var state_73183__$1 = (function (){var statearr_73200 = state_73183;
(statearr_73200[(9)] = inst_73135);

(statearr_73200[(10)] = inst_73138);

(statearr_73200[(11)] = inst_73136);

(statearr_73200[(12)] = inst_73137);

return statearr_73200;
})();
var statearr_73201_73235 = state_73183__$1;
(statearr_73201_73235[(2)] = null);

(statearr_73201_73235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (17))){
var inst_73149 = (state_73183[(7)]);
var inst_73153 = cljs.core.chunk_first.call(null,inst_73149);
var inst_73154 = cljs.core.chunk_rest.call(null,inst_73149);
var inst_73155 = cljs.core.count.call(null,inst_73153);
var inst_73135 = inst_73154;
var inst_73136 = inst_73153;
var inst_73137 = inst_73155;
var inst_73138 = (0);
var state_73183__$1 = (function (){var statearr_73202 = state_73183;
(statearr_73202[(9)] = inst_73135);

(statearr_73202[(10)] = inst_73138);

(statearr_73202[(11)] = inst_73136);

(statearr_73202[(12)] = inst_73137);

return statearr_73202;
})();
var statearr_73203_73236 = state_73183__$1;
(statearr_73203_73236[(2)] = null);

(statearr_73203_73236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (3))){
var inst_73181 = (state_73183[(2)]);
var state_73183__$1 = state_73183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73183__$1,inst_73181);
} else {
if((state_val_73184 === (12))){
var inst_73169 = (state_73183[(2)]);
var state_73183__$1 = state_73183;
var statearr_73204_73237 = state_73183__$1;
(statearr_73204_73237[(2)] = inst_73169);

(statearr_73204_73237[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (2))){
var state_73183__$1 = state_73183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73183__$1,(4),in$);
} else {
if((state_val_73184 === (23))){
var inst_73177 = (state_73183[(2)]);
var state_73183__$1 = state_73183;
var statearr_73205_73238 = state_73183__$1;
(statearr_73205_73238[(2)] = inst_73177);

(statearr_73205_73238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (19))){
var inst_73164 = (state_73183[(2)]);
var state_73183__$1 = state_73183;
var statearr_73206_73239 = state_73183__$1;
(statearr_73206_73239[(2)] = inst_73164);

(statearr_73206_73239[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (11))){
var inst_73149 = (state_73183[(7)]);
var inst_73135 = (state_73183[(9)]);
var inst_73149__$1 = cljs.core.seq.call(null,inst_73135);
var state_73183__$1 = (function (){var statearr_73207 = state_73183;
(statearr_73207[(7)] = inst_73149__$1);

return statearr_73207;
})();
if(inst_73149__$1){
var statearr_73208_73240 = state_73183__$1;
(statearr_73208_73240[(1)] = (14));

} else {
var statearr_73209_73241 = state_73183__$1;
(statearr_73209_73241[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (9))){
var inst_73171 = (state_73183[(2)]);
var inst_73172 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_73183__$1 = (function (){var statearr_73210 = state_73183;
(statearr_73210[(15)] = inst_73171);

return statearr_73210;
})();
if(cljs.core.truth_(inst_73172)){
var statearr_73211_73242 = state_73183__$1;
(statearr_73211_73242[(1)] = (21));

} else {
var statearr_73212_73243 = state_73183__$1;
(statearr_73212_73243[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (5))){
var inst_73127 = cljs.core.async.close_BANG_.call(null,out);
var state_73183__$1 = state_73183;
var statearr_73213_73244 = state_73183__$1;
(statearr_73213_73244[(2)] = inst_73127);

(statearr_73213_73244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (14))){
var inst_73149 = (state_73183[(7)]);
var inst_73151 = cljs.core.chunked_seq_QMARK_.call(null,inst_73149);
var state_73183__$1 = state_73183;
if(inst_73151){
var statearr_73214_73245 = state_73183__$1;
(statearr_73214_73245[(1)] = (17));

} else {
var statearr_73215_73246 = state_73183__$1;
(statearr_73215_73246[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (16))){
var inst_73167 = (state_73183[(2)]);
var state_73183__$1 = state_73183;
var statearr_73216_73247 = state_73183__$1;
(statearr_73216_73247[(2)] = inst_73167);

(statearr_73216_73247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73184 === (10))){
var inst_73138 = (state_73183[(10)]);
var inst_73136 = (state_73183[(11)]);
var inst_73143 = cljs.core._nth.call(null,inst_73136,inst_73138);
var state_73183__$1 = state_73183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73183__$1,(13),out,inst_73143);
} else {
if((state_val_73184 === (18))){
var inst_73149 = (state_73183[(7)]);
var inst_73158 = cljs.core.first.call(null,inst_73149);
var state_73183__$1 = state_73183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73183__$1,(20),out,inst_73158);
} else {
if((state_val_73184 === (8))){
var inst_73138 = (state_73183[(10)]);
var inst_73137 = (state_73183[(12)]);
var inst_73140 = (inst_73138 < inst_73137);
var inst_73141 = inst_73140;
var state_73183__$1 = state_73183;
if(cljs.core.truth_(inst_73141)){
var statearr_73217_73248 = state_73183__$1;
(statearr_73217_73248[(1)] = (10));

} else {
var statearr_73218_73249 = state_73183__$1;
(statearr_73218_73249[(1)] = (11));

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
var statearr_73222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73222[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__);

(statearr_73222[(1)] = (1));

return statearr_73222;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____1 = (function (state_73183){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_73183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e73223){if((e73223 instanceof Object)){
var ex__19760__auto__ = e73223;
var statearr_73224_73250 = state_73183;
(statearr_73224_73250[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73251 = state_73183;
state_73183 = G__73251;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__ = function(state_73183){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____1.call(this,state_73183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_73225 = f__19819__auto__.call(null);
(statearr_73225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_73225;
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
var G__73253 = arguments.length;
switch (G__73253) {
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
var G__73256 = arguments.length;
switch (G__73256) {
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
var G__73259 = arguments.length;
switch (G__73259) {
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
var c__19818__auto___73309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___73309,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___73309,out){
return (function (state_73283){
var state_val_73284 = (state_73283[(1)]);
if((state_val_73284 === (7))){
var inst_73278 = (state_73283[(2)]);
var state_73283__$1 = state_73283;
var statearr_73285_73310 = state_73283__$1;
(statearr_73285_73310[(2)] = inst_73278);

(statearr_73285_73310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73284 === (1))){
var inst_73260 = null;
var state_73283__$1 = (function (){var statearr_73286 = state_73283;
(statearr_73286[(7)] = inst_73260);

return statearr_73286;
})();
var statearr_73287_73311 = state_73283__$1;
(statearr_73287_73311[(2)] = null);

(statearr_73287_73311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73284 === (4))){
var inst_73263 = (state_73283[(8)]);
var inst_73263__$1 = (state_73283[(2)]);
var inst_73264 = (inst_73263__$1 == null);
var inst_73265 = cljs.core.not.call(null,inst_73264);
var state_73283__$1 = (function (){var statearr_73288 = state_73283;
(statearr_73288[(8)] = inst_73263__$1);

return statearr_73288;
})();
if(inst_73265){
var statearr_73289_73312 = state_73283__$1;
(statearr_73289_73312[(1)] = (5));

} else {
var statearr_73290_73313 = state_73283__$1;
(statearr_73290_73313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73284 === (6))){
var state_73283__$1 = state_73283;
var statearr_73291_73314 = state_73283__$1;
(statearr_73291_73314[(2)] = null);

(statearr_73291_73314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73284 === (3))){
var inst_73280 = (state_73283[(2)]);
var inst_73281 = cljs.core.async.close_BANG_.call(null,out);
var state_73283__$1 = (function (){var statearr_73292 = state_73283;
(statearr_73292[(9)] = inst_73280);

return statearr_73292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73283__$1,inst_73281);
} else {
if((state_val_73284 === (2))){
var state_73283__$1 = state_73283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73283__$1,(4),ch);
} else {
if((state_val_73284 === (11))){
var inst_73263 = (state_73283[(8)]);
var inst_73272 = (state_73283[(2)]);
var inst_73260 = inst_73263;
var state_73283__$1 = (function (){var statearr_73293 = state_73283;
(statearr_73293[(7)] = inst_73260);

(statearr_73293[(10)] = inst_73272);

return statearr_73293;
})();
var statearr_73294_73315 = state_73283__$1;
(statearr_73294_73315[(2)] = null);

(statearr_73294_73315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73284 === (9))){
var inst_73263 = (state_73283[(8)]);
var state_73283__$1 = state_73283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73283__$1,(11),out,inst_73263);
} else {
if((state_val_73284 === (5))){
var inst_73260 = (state_73283[(7)]);
var inst_73263 = (state_73283[(8)]);
var inst_73267 = cljs.core._EQ_.call(null,inst_73263,inst_73260);
var state_73283__$1 = state_73283;
if(inst_73267){
var statearr_73296_73316 = state_73283__$1;
(statearr_73296_73316[(1)] = (8));

} else {
var statearr_73297_73317 = state_73283__$1;
(statearr_73297_73317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73284 === (10))){
var inst_73275 = (state_73283[(2)]);
var state_73283__$1 = state_73283;
var statearr_73298_73318 = state_73283__$1;
(statearr_73298_73318[(2)] = inst_73275);

(statearr_73298_73318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73284 === (8))){
var inst_73260 = (state_73283[(7)]);
var tmp73295 = inst_73260;
var inst_73260__$1 = tmp73295;
var state_73283__$1 = (function (){var statearr_73299 = state_73283;
(statearr_73299[(7)] = inst_73260__$1);

return statearr_73299;
})();
var statearr_73300_73319 = state_73283__$1;
(statearr_73300_73319[(2)] = null);

(statearr_73300_73319[(1)] = (2));


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
});})(c__19818__auto___73309,out))
;
return ((function (switch__19756__auto__,c__19818__auto___73309,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_73304 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73304[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_73304[(1)] = (1));

return statearr_73304;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_73283){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_73283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e73305){if((e73305 instanceof Object)){
var ex__19760__auto__ = e73305;
var statearr_73306_73320 = state_73283;
(statearr_73306_73320[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73321 = state_73283;
state_73283 = G__73321;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_73283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_73283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___73309,out))
})();
var state__19820__auto__ = (function (){var statearr_73307 = f__19819__auto__.call(null);
(statearr_73307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___73309);

return statearr_73307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___73309,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__73323 = arguments.length;
switch (G__73323) {
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
var c__19818__auto___73392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___73392,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___73392,out){
return (function (state_73361){
var state_val_73362 = (state_73361[(1)]);
if((state_val_73362 === (7))){
var inst_73357 = (state_73361[(2)]);
var state_73361__$1 = state_73361;
var statearr_73363_73393 = state_73361__$1;
(statearr_73363_73393[(2)] = inst_73357);

(statearr_73363_73393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73362 === (1))){
var inst_73324 = (new Array(n));
var inst_73325 = inst_73324;
var inst_73326 = (0);
var state_73361__$1 = (function (){var statearr_73364 = state_73361;
(statearr_73364[(7)] = inst_73325);

(statearr_73364[(8)] = inst_73326);

return statearr_73364;
})();
var statearr_73365_73394 = state_73361__$1;
(statearr_73365_73394[(2)] = null);

(statearr_73365_73394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73362 === (4))){
var inst_73329 = (state_73361[(9)]);
var inst_73329__$1 = (state_73361[(2)]);
var inst_73330 = (inst_73329__$1 == null);
var inst_73331 = cljs.core.not.call(null,inst_73330);
var state_73361__$1 = (function (){var statearr_73366 = state_73361;
(statearr_73366[(9)] = inst_73329__$1);

return statearr_73366;
})();
if(inst_73331){
var statearr_73367_73395 = state_73361__$1;
(statearr_73367_73395[(1)] = (5));

} else {
var statearr_73368_73396 = state_73361__$1;
(statearr_73368_73396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73362 === (15))){
var inst_73351 = (state_73361[(2)]);
var state_73361__$1 = state_73361;
var statearr_73369_73397 = state_73361__$1;
(statearr_73369_73397[(2)] = inst_73351);

(statearr_73369_73397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73362 === (13))){
var state_73361__$1 = state_73361;
var statearr_73370_73398 = state_73361__$1;
(statearr_73370_73398[(2)] = null);

(statearr_73370_73398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73362 === (6))){
var inst_73326 = (state_73361[(8)]);
var inst_73347 = (inst_73326 > (0));
var state_73361__$1 = state_73361;
if(cljs.core.truth_(inst_73347)){
var statearr_73371_73399 = state_73361__$1;
(statearr_73371_73399[(1)] = (12));

} else {
var statearr_73372_73400 = state_73361__$1;
(statearr_73372_73400[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73362 === (3))){
var inst_73359 = (state_73361[(2)]);
var state_73361__$1 = state_73361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73361__$1,inst_73359);
} else {
if((state_val_73362 === (12))){
var inst_73325 = (state_73361[(7)]);
var inst_73349 = cljs.core.vec.call(null,inst_73325);
var state_73361__$1 = state_73361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73361__$1,(15),out,inst_73349);
} else {
if((state_val_73362 === (2))){
var state_73361__$1 = state_73361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73361__$1,(4),ch);
} else {
if((state_val_73362 === (11))){
var inst_73341 = (state_73361[(2)]);
var inst_73342 = (new Array(n));
var inst_73325 = inst_73342;
var inst_73326 = (0);
var state_73361__$1 = (function (){var statearr_73373 = state_73361;
(statearr_73373[(7)] = inst_73325);

(statearr_73373[(8)] = inst_73326);

(statearr_73373[(10)] = inst_73341);

return statearr_73373;
})();
var statearr_73374_73401 = state_73361__$1;
(statearr_73374_73401[(2)] = null);

(statearr_73374_73401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73362 === (9))){
var inst_73325 = (state_73361[(7)]);
var inst_73339 = cljs.core.vec.call(null,inst_73325);
var state_73361__$1 = state_73361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73361__$1,(11),out,inst_73339);
} else {
if((state_val_73362 === (5))){
var inst_73329 = (state_73361[(9)]);
var inst_73325 = (state_73361[(7)]);
var inst_73334 = (state_73361[(11)]);
var inst_73326 = (state_73361[(8)]);
var inst_73333 = (inst_73325[inst_73326] = inst_73329);
var inst_73334__$1 = (inst_73326 + (1));
var inst_73335 = (inst_73334__$1 < n);
var state_73361__$1 = (function (){var statearr_73375 = state_73361;
(statearr_73375[(12)] = inst_73333);

(statearr_73375[(11)] = inst_73334__$1);

return statearr_73375;
})();
if(cljs.core.truth_(inst_73335)){
var statearr_73376_73402 = state_73361__$1;
(statearr_73376_73402[(1)] = (8));

} else {
var statearr_73377_73403 = state_73361__$1;
(statearr_73377_73403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73362 === (14))){
var inst_73354 = (state_73361[(2)]);
var inst_73355 = cljs.core.async.close_BANG_.call(null,out);
var state_73361__$1 = (function (){var statearr_73379 = state_73361;
(statearr_73379[(13)] = inst_73354);

return statearr_73379;
})();
var statearr_73380_73404 = state_73361__$1;
(statearr_73380_73404[(2)] = inst_73355);

(statearr_73380_73404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73362 === (10))){
var inst_73345 = (state_73361[(2)]);
var state_73361__$1 = state_73361;
var statearr_73381_73405 = state_73361__$1;
(statearr_73381_73405[(2)] = inst_73345);

(statearr_73381_73405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73362 === (8))){
var inst_73325 = (state_73361[(7)]);
var inst_73334 = (state_73361[(11)]);
var tmp73378 = inst_73325;
var inst_73325__$1 = tmp73378;
var inst_73326 = inst_73334;
var state_73361__$1 = (function (){var statearr_73382 = state_73361;
(statearr_73382[(7)] = inst_73325__$1);

(statearr_73382[(8)] = inst_73326);

return statearr_73382;
})();
var statearr_73383_73406 = state_73361__$1;
(statearr_73383_73406[(2)] = null);

(statearr_73383_73406[(1)] = (2));


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
});})(c__19818__auto___73392,out))
;
return ((function (switch__19756__auto__,c__19818__auto___73392,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_73387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73387[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_73387[(1)] = (1));

return statearr_73387;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_73361){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_73361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e73388){if((e73388 instanceof Object)){
var ex__19760__auto__ = e73388;
var statearr_73389_73407 = state_73361;
(statearr_73389_73407[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73408 = state_73361;
state_73361 = G__73408;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_73361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_73361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___73392,out))
})();
var state__19820__auto__ = (function (){var statearr_73390 = f__19819__auto__.call(null);
(statearr_73390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___73392);

return statearr_73390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___73392,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__73410 = arguments.length;
switch (G__73410) {
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
var c__19818__auto___73483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___73483,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___73483,out){
return (function (state_73452){
var state_val_73453 = (state_73452[(1)]);
if((state_val_73453 === (7))){
var inst_73448 = (state_73452[(2)]);
var state_73452__$1 = state_73452;
var statearr_73454_73484 = state_73452__$1;
(statearr_73454_73484[(2)] = inst_73448);

(statearr_73454_73484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73453 === (1))){
var inst_73411 = [];
var inst_73412 = inst_73411;
var inst_73413 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_73452__$1 = (function (){var statearr_73455 = state_73452;
(statearr_73455[(7)] = inst_73412);

(statearr_73455[(8)] = inst_73413);

return statearr_73455;
})();
var statearr_73456_73485 = state_73452__$1;
(statearr_73456_73485[(2)] = null);

(statearr_73456_73485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73453 === (4))){
var inst_73416 = (state_73452[(9)]);
var inst_73416__$1 = (state_73452[(2)]);
var inst_73417 = (inst_73416__$1 == null);
var inst_73418 = cljs.core.not.call(null,inst_73417);
var state_73452__$1 = (function (){var statearr_73457 = state_73452;
(statearr_73457[(9)] = inst_73416__$1);

return statearr_73457;
})();
if(inst_73418){
var statearr_73458_73486 = state_73452__$1;
(statearr_73458_73486[(1)] = (5));

} else {
var statearr_73459_73487 = state_73452__$1;
(statearr_73459_73487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73453 === (15))){
var inst_73442 = (state_73452[(2)]);
var state_73452__$1 = state_73452;
var statearr_73460_73488 = state_73452__$1;
(statearr_73460_73488[(2)] = inst_73442);

(statearr_73460_73488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73453 === (13))){
var state_73452__$1 = state_73452;
var statearr_73461_73489 = state_73452__$1;
(statearr_73461_73489[(2)] = null);

(statearr_73461_73489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73453 === (6))){
var inst_73412 = (state_73452[(7)]);
var inst_73437 = inst_73412.length;
var inst_73438 = (inst_73437 > (0));
var state_73452__$1 = state_73452;
if(cljs.core.truth_(inst_73438)){
var statearr_73462_73490 = state_73452__$1;
(statearr_73462_73490[(1)] = (12));

} else {
var statearr_73463_73491 = state_73452__$1;
(statearr_73463_73491[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73453 === (3))){
var inst_73450 = (state_73452[(2)]);
var state_73452__$1 = state_73452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73452__$1,inst_73450);
} else {
if((state_val_73453 === (12))){
var inst_73412 = (state_73452[(7)]);
var inst_73440 = cljs.core.vec.call(null,inst_73412);
var state_73452__$1 = state_73452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73452__$1,(15),out,inst_73440);
} else {
if((state_val_73453 === (2))){
var state_73452__$1 = state_73452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73452__$1,(4),ch);
} else {
if((state_val_73453 === (11))){
var inst_73416 = (state_73452[(9)]);
var inst_73420 = (state_73452[(10)]);
var inst_73430 = (state_73452[(2)]);
var inst_73431 = [];
var inst_73432 = inst_73431.push(inst_73416);
var inst_73412 = inst_73431;
var inst_73413 = inst_73420;
var state_73452__$1 = (function (){var statearr_73464 = state_73452;
(statearr_73464[(11)] = inst_73430);

(statearr_73464[(12)] = inst_73432);

(statearr_73464[(7)] = inst_73412);

(statearr_73464[(8)] = inst_73413);

return statearr_73464;
})();
var statearr_73465_73492 = state_73452__$1;
(statearr_73465_73492[(2)] = null);

(statearr_73465_73492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73453 === (9))){
var inst_73412 = (state_73452[(7)]);
var inst_73428 = cljs.core.vec.call(null,inst_73412);
var state_73452__$1 = state_73452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73452__$1,(11),out,inst_73428);
} else {
if((state_val_73453 === (5))){
var inst_73416 = (state_73452[(9)]);
var inst_73413 = (state_73452[(8)]);
var inst_73420 = (state_73452[(10)]);
var inst_73420__$1 = f.call(null,inst_73416);
var inst_73421 = cljs.core._EQ_.call(null,inst_73420__$1,inst_73413);
var inst_73422 = cljs.core.keyword_identical_QMARK_.call(null,inst_73413,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_73423 = (inst_73421) || (inst_73422);
var state_73452__$1 = (function (){var statearr_73466 = state_73452;
(statearr_73466[(10)] = inst_73420__$1);

return statearr_73466;
})();
if(cljs.core.truth_(inst_73423)){
var statearr_73467_73493 = state_73452__$1;
(statearr_73467_73493[(1)] = (8));

} else {
var statearr_73468_73494 = state_73452__$1;
(statearr_73468_73494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73453 === (14))){
var inst_73445 = (state_73452[(2)]);
var inst_73446 = cljs.core.async.close_BANG_.call(null,out);
var state_73452__$1 = (function (){var statearr_73470 = state_73452;
(statearr_73470[(13)] = inst_73445);

return statearr_73470;
})();
var statearr_73471_73495 = state_73452__$1;
(statearr_73471_73495[(2)] = inst_73446);

(statearr_73471_73495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73453 === (10))){
var inst_73435 = (state_73452[(2)]);
var state_73452__$1 = state_73452;
var statearr_73472_73496 = state_73452__$1;
(statearr_73472_73496[(2)] = inst_73435);

(statearr_73472_73496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73453 === (8))){
var inst_73416 = (state_73452[(9)]);
var inst_73412 = (state_73452[(7)]);
var inst_73420 = (state_73452[(10)]);
var inst_73425 = inst_73412.push(inst_73416);
var tmp73469 = inst_73412;
var inst_73412__$1 = tmp73469;
var inst_73413 = inst_73420;
var state_73452__$1 = (function (){var statearr_73473 = state_73452;
(statearr_73473[(7)] = inst_73412__$1);

(statearr_73473[(14)] = inst_73425);

(statearr_73473[(8)] = inst_73413);

return statearr_73473;
})();
var statearr_73474_73497 = state_73452__$1;
(statearr_73474_73497[(2)] = null);

(statearr_73474_73497[(1)] = (2));


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
});})(c__19818__auto___73483,out))
;
return ((function (switch__19756__auto__,c__19818__auto___73483,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_73478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73478[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_73478[(1)] = (1));

return statearr_73478;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_73452){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_73452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e73479){if((e73479 instanceof Object)){
var ex__19760__auto__ = e73479;
var statearr_73480_73498 = state_73452;
(statearr_73480_73498[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73499 = state_73452;
state_73452 = G__73499;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_73452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_73452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___73483,out))
})();
var state__19820__auto__ = (function (){var statearr_73481 = f__19819__auto__.call(null);
(statearr_73481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___73483);

return statearr_73481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___73483,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map