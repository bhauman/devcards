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
if(typeof cljs.core.async.t45623 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45623 = (function (fn_handler,f,meta45624){
this.fn_handler = fn_handler;
this.f = f;
this.meta45624 = meta45624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t45623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45625,meta45624__$1){
var self__ = this;
var _45625__$1 = this;
return (new cljs.core.async.t45623(self__.fn_handler,self__.f,meta45624__$1));
});

cljs.core.async.t45623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45625){
var self__ = this;
var _45625__$1 = this;
return self__.meta45624;
});

cljs.core.async.t45623.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t45623.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t45623.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t45623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta45624","meta45624",1703397785,null)], null);
});

cljs.core.async.t45623.cljs$lang$type = true;

cljs.core.async.t45623.cljs$lang$ctorStr = "cljs.core.async/t45623";

cljs.core.async.t45623.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t45623");
});

cljs.core.async.__GT_t45623 = (function cljs$core$async$fn_handler_$___GT_t45623(fn_handler__$1,f__$1,meta45624){
return (new cljs.core.async.t45623(fn_handler__$1,f__$1,meta45624));
});

}

return (new cljs.core.async.t45623(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45627 = buff;
if(G__45627){
var bit__16736__auto__ = null;
if(cljs.core.truth_((function (){var or__16062__auto__ = bit__16736__auto__;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return G__45627.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__45627.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__45627);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__45627);
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
var G__45629 = arguments.length;
switch (G__45629) {
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
var G__45632 = arguments.length;
switch (G__45632) {
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
var val_45634 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45634);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45634,ret){
return (function (){
return fn1.call(null,val_45634);
});})(val_45634,ret))
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
var G__45636 = arguments.length;
switch (G__45636) {
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
var n__16947__auto___45638 = n;
var x_45639 = (0);
while(true){
if((x_45639 < n__16947__auto___45638)){
(a[x_45639] = (0));

var G__45640 = (x_45639 + (1));
x_45639 = G__45640;
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

var G__45641 = (i + (1));
i = G__45641;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t45645 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45645 = (function (alt_flag,flag,meta45646){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta45646 = meta45646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t45645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45647,meta45646__$1){
var self__ = this;
var _45647__$1 = this;
return (new cljs.core.async.t45645(self__.alt_flag,self__.flag,meta45646__$1));
});})(flag))
;

cljs.core.async.t45645.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45647){
var self__ = this;
var _45647__$1 = this;
return self__.meta45646;
});})(flag))
;

cljs.core.async.t45645.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t45645.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t45645.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t45645.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45646","meta45646",-459866692,null)], null);
});})(flag))
;

cljs.core.async.t45645.cljs$lang$type = true;

cljs.core.async.t45645.cljs$lang$ctorStr = "cljs.core.async/t45645";

cljs.core.async.t45645.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t45645");
});})(flag))
;

cljs.core.async.__GT_t45645 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t45645(alt_flag__$1,flag__$1,meta45646){
return (new cljs.core.async.t45645(alt_flag__$1,flag__$1,meta45646));
});})(flag))
;

}

return (new cljs.core.async.t45645(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t45651 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45651 = (function (alt_handler,flag,cb,meta45652){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta45652 = meta45652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t45651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45653,meta45652__$1){
var self__ = this;
var _45653__$1 = this;
return (new cljs.core.async.t45651(self__.alt_handler,self__.flag,self__.cb,meta45652__$1));
});

cljs.core.async.t45651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45653){
var self__ = this;
var _45653__$1 = this;
return self__.meta45652;
});

cljs.core.async.t45651.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t45651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t45651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t45651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45652","meta45652",848440623,null)], null);
});

cljs.core.async.t45651.cljs$lang$type = true;

cljs.core.async.t45651.cljs$lang$ctorStr = "cljs.core.async/t45651";

cljs.core.async.t45651.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t45651");
});

cljs.core.async.__GT_t45651 = (function cljs$core$async$alt_handler_$___GT_t45651(alt_handler__$1,flag__$1,cb__$1,meta45652){
return (new cljs.core.async.t45651(alt_handler__$1,flag__$1,cb__$1,meta45652));
});

}

return (new cljs.core.async.t45651(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__45654_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45654_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45655_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45655_SHARP_,port], null));
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
var G__45656 = (i + (1));
i = G__45656;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45659){
var map__45660 = p__45659;
var map__45660__$1 = ((cljs.core.seq_QMARK_.call(null,map__45660))?cljs.core.apply.call(null,cljs.core.hash_map,map__45660):map__45660);
var opts = map__45660__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45657){
var G__45658 = cljs.core.first.call(null,seq45657);
var seq45657__$1 = cljs.core.next.call(null,seq45657);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45658,seq45657__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__45662 = arguments.length;
switch (G__45662) {
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
var c__19819__auto___45711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___45711){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___45711){
return (function (state_45686){
var state_val_45687 = (state_45686[(1)]);
if((state_val_45687 === (7))){
var inst_45682 = (state_45686[(2)]);
var state_45686__$1 = state_45686;
var statearr_45688_45712 = state_45686__$1;
(statearr_45688_45712[(2)] = inst_45682);

(statearr_45688_45712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (1))){
var state_45686__$1 = state_45686;
var statearr_45689_45713 = state_45686__$1;
(statearr_45689_45713[(2)] = null);

(statearr_45689_45713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (4))){
var inst_45665 = (state_45686[(7)]);
var inst_45665__$1 = (state_45686[(2)]);
var inst_45666 = (inst_45665__$1 == null);
var state_45686__$1 = (function (){var statearr_45690 = state_45686;
(statearr_45690[(7)] = inst_45665__$1);

return statearr_45690;
})();
if(cljs.core.truth_(inst_45666)){
var statearr_45691_45714 = state_45686__$1;
(statearr_45691_45714[(1)] = (5));

} else {
var statearr_45692_45715 = state_45686__$1;
(statearr_45692_45715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (13))){
var state_45686__$1 = state_45686;
var statearr_45693_45716 = state_45686__$1;
(statearr_45693_45716[(2)] = null);

(statearr_45693_45716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (6))){
var inst_45665 = (state_45686[(7)]);
var state_45686__$1 = state_45686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45686__$1,(11),to,inst_45665);
} else {
if((state_val_45687 === (3))){
var inst_45684 = (state_45686[(2)]);
var state_45686__$1 = state_45686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45686__$1,inst_45684);
} else {
if((state_val_45687 === (12))){
var state_45686__$1 = state_45686;
var statearr_45694_45717 = state_45686__$1;
(statearr_45694_45717[(2)] = null);

(statearr_45694_45717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (2))){
var state_45686__$1 = state_45686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45686__$1,(4),from);
} else {
if((state_val_45687 === (11))){
var inst_45675 = (state_45686[(2)]);
var state_45686__$1 = state_45686;
if(cljs.core.truth_(inst_45675)){
var statearr_45695_45718 = state_45686__$1;
(statearr_45695_45718[(1)] = (12));

} else {
var statearr_45696_45719 = state_45686__$1;
(statearr_45696_45719[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (9))){
var state_45686__$1 = state_45686;
var statearr_45697_45720 = state_45686__$1;
(statearr_45697_45720[(2)] = null);

(statearr_45697_45720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (5))){
var state_45686__$1 = state_45686;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45698_45721 = state_45686__$1;
(statearr_45698_45721[(1)] = (8));

} else {
var statearr_45699_45722 = state_45686__$1;
(statearr_45699_45722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (14))){
var inst_45680 = (state_45686[(2)]);
var state_45686__$1 = state_45686;
var statearr_45700_45723 = state_45686__$1;
(statearr_45700_45723[(2)] = inst_45680);

(statearr_45700_45723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (10))){
var inst_45672 = (state_45686[(2)]);
var state_45686__$1 = state_45686;
var statearr_45701_45724 = state_45686__$1;
(statearr_45701_45724[(2)] = inst_45672);

(statearr_45701_45724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (8))){
var inst_45669 = cljs.core.async.close_BANG_.call(null,to);
var state_45686__$1 = state_45686;
var statearr_45702_45725 = state_45686__$1;
(statearr_45702_45725[(2)] = inst_45669);

(statearr_45702_45725[(1)] = (10));


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
});})(c__19819__auto___45711))
;
return ((function (switch__19757__auto__,c__19819__auto___45711){
return (function() {
var cljs$core$async$state_machine__19758__auto__ = null;
var cljs$core$async$state_machine__19758__auto____0 = (function (){
var statearr_45706 = [null,null,null,null,null,null,null,null];
(statearr_45706[(0)] = cljs$core$async$state_machine__19758__auto__);

(statearr_45706[(1)] = (1));

return statearr_45706;
});
var cljs$core$async$state_machine__19758__auto____1 = (function (state_45686){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_45686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e45707){if((e45707 instanceof Object)){
var ex__19761__auto__ = e45707;
var statearr_45708_45726 = state_45686;
(statearr_45708_45726[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45727 = state_45686;
state_45686 = G__45727;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$state_machine__19758__auto__ = function(state_45686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19758__auto____1.call(this,state_45686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19758__auto____0;
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19758__auto____1;
return cljs$core$async$state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___45711))
})();
var state__19821__auto__ = (function (){var statearr_45709 = f__19820__auto__.call(null);
(statearr_45709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___45711);

return statearr_45709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___45711))
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
return (function (p__45911){
var vec__45912 = p__45911;
var v = cljs.core.nth.call(null,vec__45912,(0),null);
var p = cljs.core.nth.call(null,vec__45912,(1),null);
var job = vec__45912;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19819__auto___46094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___46094,res,vec__45912,v,p,job,jobs,results){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___46094,res,vec__45912,v,p,job,jobs,results){
return (function (state_45917){
var state_val_45918 = (state_45917[(1)]);
if((state_val_45918 === (1))){
var state_45917__$1 = state_45917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45917__$1,(2),res,v);
} else {
if((state_val_45918 === (2))){
var inst_45914 = (state_45917[(2)]);
var inst_45915 = cljs.core.async.close_BANG_.call(null,res);
var state_45917__$1 = (function (){var statearr_45919 = state_45917;
(statearr_45919[(7)] = inst_45914);

return statearr_45919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45917__$1,inst_45915);
} else {
return null;
}
}
});})(c__19819__auto___46094,res,vec__45912,v,p,job,jobs,results))
;
return ((function (switch__19757__auto__,c__19819__auto___46094,res,vec__45912,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0 = (function (){
var statearr_45923 = [null,null,null,null,null,null,null,null];
(statearr_45923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__);

(statearr_45923[(1)] = (1));

return statearr_45923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1 = (function (state_45917){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_45917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e45924){if((e45924 instanceof Object)){
var ex__19761__auto__ = e45924;
var statearr_45925_46095 = state_45917;
(statearr_45925_46095[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46096 = state_45917;
state_45917 = G__46096;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__ = function(state_45917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1.call(this,state_45917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___46094,res,vec__45912,v,p,job,jobs,results))
})();
var state__19821__auto__ = (function (){var statearr_45926 = f__19820__auto__.call(null);
(statearr_45926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___46094);

return statearr_45926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___46094,res,vec__45912,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45927){
var vec__45928 = p__45927;
var v = cljs.core.nth.call(null,vec__45928,(0),null);
var p = cljs.core.nth.call(null,vec__45928,(1),null);
var job = vec__45928;
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
var n__16947__auto___46097 = n;
var __46098 = (0);
while(true){
if((__46098 < n__16947__auto___46097)){
var G__45929_46099 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__45929_46099) {
case "compute":
var c__19819__auto___46101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46098,c__19819__auto___46101,G__45929_46099,n__16947__auto___46097,jobs,results,process,async){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (__46098,c__19819__auto___46101,G__45929_46099,n__16947__auto___46097,jobs,results,process,async){
return (function (state_45942){
var state_val_45943 = (state_45942[(1)]);
if((state_val_45943 === (1))){
var state_45942__$1 = state_45942;
var statearr_45944_46102 = state_45942__$1;
(statearr_45944_46102[(2)] = null);

(statearr_45944_46102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45943 === (2))){
var state_45942__$1 = state_45942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45942__$1,(4),jobs);
} else {
if((state_val_45943 === (3))){
var inst_45940 = (state_45942[(2)]);
var state_45942__$1 = state_45942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45942__$1,inst_45940);
} else {
if((state_val_45943 === (4))){
var inst_45932 = (state_45942[(2)]);
var inst_45933 = process.call(null,inst_45932);
var state_45942__$1 = state_45942;
if(cljs.core.truth_(inst_45933)){
var statearr_45945_46103 = state_45942__$1;
(statearr_45945_46103[(1)] = (5));

} else {
var statearr_45946_46104 = state_45942__$1;
(statearr_45946_46104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45943 === (5))){
var state_45942__$1 = state_45942;
var statearr_45947_46105 = state_45942__$1;
(statearr_45947_46105[(2)] = null);

(statearr_45947_46105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45943 === (6))){
var state_45942__$1 = state_45942;
var statearr_45948_46106 = state_45942__$1;
(statearr_45948_46106[(2)] = null);

(statearr_45948_46106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45943 === (7))){
var inst_45938 = (state_45942[(2)]);
var state_45942__$1 = state_45942;
var statearr_45949_46107 = state_45942__$1;
(statearr_45949_46107[(2)] = inst_45938);

(statearr_45949_46107[(1)] = (3));


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
});})(__46098,c__19819__auto___46101,G__45929_46099,n__16947__auto___46097,jobs,results,process,async))
;
return ((function (__46098,switch__19757__auto__,c__19819__auto___46101,G__45929_46099,n__16947__auto___46097,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0 = (function (){
var statearr_45953 = [null,null,null,null,null,null,null];
(statearr_45953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__);

(statearr_45953[(1)] = (1));

return statearr_45953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1 = (function (state_45942){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_45942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e45954){if((e45954 instanceof Object)){
var ex__19761__auto__ = e45954;
var statearr_45955_46108 = state_45942;
(statearr_45955_46108[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46109 = state_45942;
state_45942 = G__46109;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__ = function(state_45942){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1.call(this,state_45942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__;
})()
;})(__46098,switch__19757__auto__,c__19819__auto___46101,G__45929_46099,n__16947__auto___46097,jobs,results,process,async))
})();
var state__19821__auto__ = (function (){var statearr_45956 = f__19820__auto__.call(null);
(statearr_45956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___46101);

return statearr_45956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(__46098,c__19819__auto___46101,G__45929_46099,n__16947__auto___46097,jobs,results,process,async))
);


break;
case "async":
var c__19819__auto___46110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46098,c__19819__auto___46110,G__45929_46099,n__16947__auto___46097,jobs,results,process,async){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (__46098,c__19819__auto___46110,G__45929_46099,n__16947__auto___46097,jobs,results,process,async){
return (function (state_45969){
var state_val_45970 = (state_45969[(1)]);
if((state_val_45970 === (1))){
var state_45969__$1 = state_45969;
var statearr_45971_46111 = state_45969__$1;
(statearr_45971_46111[(2)] = null);

(statearr_45971_46111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45970 === (2))){
var state_45969__$1 = state_45969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45969__$1,(4),jobs);
} else {
if((state_val_45970 === (3))){
var inst_45967 = (state_45969[(2)]);
var state_45969__$1 = state_45969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45969__$1,inst_45967);
} else {
if((state_val_45970 === (4))){
var inst_45959 = (state_45969[(2)]);
var inst_45960 = async.call(null,inst_45959);
var state_45969__$1 = state_45969;
if(cljs.core.truth_(inst_45960)){
var statearr_45972_46112 = state_45969__$1;
(statearr_45972_46112[(1)] = (5));

} else {
var statearr_45973_46113 = state_45969__$1;
(statearr_45973_46113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45970 === (5))){
var state_45969__$1 = state_45969;
var statearr_45974_46114 = state_45969__$1;
(statearr_45974_46114[(2)] = null);

(statearr_45974_46114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45970 === (6))){
var state_45969__$1 = state_45969;
var statearr_45975_46115 = state_45969__$1;
(statearr_45975_46115[(2)] = null);

(statearr_45975_46115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45970 === (7))){
var inst_45965 = (state_45969[(2)]);
var state_45969__$1 = state_45969;
var statearr_45976_46116 = state_45969__$1;
(statearr_45976_46116[(2)] = inst_45965);

(statearr_45976_46116[(1)] = (3));


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
});})(__46098,c__19819__auto___46110,G__45929_46099,n__16947__auto___46097,jobs,results,process,async))
;
return ((function (__46098,switch__19757__auto__,c__19819__auto___46110,G__45929_46099,n__16947__auto___46097,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0 = (function (){
var statearr_45980 = [null,null,null,null,null,null,null];
(statearr_45980[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__);

(statearr_45980[(1)] = (1));

return statearr_45980;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1 = (function (state_45969){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_45969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e45981){if((e45981 instanceof Object)){
var ex__19761__auto__ = e45981;
var statearr_45982_46117 = state_45969;
(statearr_45982_46117[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46118 = state_45969;
state_45969 = G__46118;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__ = function(state_45969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1.call(this,state_45969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__;
})()
;})(__46098,switch__19757__auto__,c__19819__auto___46110,G__45929_46099,n__16947__auto___46097,jobs,results,process,async))
})();
var state__19821__auto__ = (function (){var statearr_45983 = f__19820__auto__.call(null);
(statearr_45983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___46110);

return statearr_45983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(__46098,c__19819__auto___46110,G__45929_46099,n__16947__auto___46097,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__46119 = (__46098 + (1));
__46098 = G__46119;
continue;
} else {
}
break;
}

var c__19819__auto___46120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___46120,jobs,results,process,async){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___46120,jobs,results,process,async){
return (function (state_46005){
var state_val_46006 = (state_46005[(1)]);
if((state_val_46006 === (1))){
var state_46005__$1 = state_46005;
var statearr_46007_46121 = state_46005__$1;
(statearr_46007_46121[(2)] = null);

(statearr_46007_46121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (2))){
var state_46005__$1 = state_46005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46005__$1,(4),from);
} else {
if((state_val_46006 === (3))){
var inst_46003 = (state_46005[(2)]);
var state_46005__$1 = state_46005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46005__$1,inst_46003);
} else {
if((state_val_46006 === (4))){
var inst_45986 = (state_46005[(7)]);
var inst_45986__$1 = (state_46005[(2)]);
var inst_45987 = (inst_45986__$1 == null);
var state_46005__$1 = (function (){var statearr_46008 = state_46005;
(statearr_46008[(7)] = inst_45986__$1);

return statearr_46008;
})();
if(cljs.core.truth_(inst_45987)){
var statearr_46009_46122 = state_46005__$1;
(statearr_46009_46122[(1)] = (5));

} else {
var statearr_46010_46123 = state_46005__$1;
(statearr_46010_46123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (5))){
var inst_45989 = cljs.core.async.close_BANG_.call(null,jobs);
var state_46005__$1 = state_46005;
var statearr_46011_46124 = state_46005__$1;
(statearr_46011_46124[(2)] = inst_45989);

(statearr_46011_46124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (6))){
var inst_45991 = (state_46005[(8)]);
var inst_45986 = (state_46005[(7)]);
var inst_45991__$1 = cljs.core.async.chan.call(null,(1));
var inst_45992 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45993 = [inst_45986,inst_45991__$1];
var inst_45994 = (new cljs.core.PersistentVector(null,2,(5),inst_45992,inst_45993,null));
var state_46005__$1 = (function (){var statearr_46012 = state_46005;
(statearr_46012[(8)] = inst_45991__$1);

return statearr_46012;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46005__$1,(8),jobs,inst_45994);
} else {
if((state_val_46006 === (7))){
var inst_46001 = (state_46005[(2)]);
var state_46005__$1 = state_46005;
var statearr_46013_46125 = state_46005__$1;
(statearr_46013_46125[(2)] = inst_46001);

(statearr_46013_46125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46006 === (8))){
var inst_45991 = (state_46005[(8)]);
var inst_45996 = (state_46005[(2)]);
var state_46005__$1 = (function (){var statearr_46014 = state_46005;
(statearr_46014[(9)] = inst_45996);

return statearr_46014;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46005__$1,(9),results,inst_45991);
} else {
if((state_val_46006 === (9))){
var inst_45998 = (state_46005[(2)]);
var state_46005__$1 = (function (){var statearr_46015 = state_46005;
(statearr_46015[(10)] = inst_45998);

return statearr_46015;
})();
var statearr_46016_46126 = state_46005__$1;
(statearr_46016_46126[(2)] = null);

(statearr_46016_46126[(1)] = (2));


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
});})(c__19819__auto___46120,jobs,results,process,async))
;
return ((function (switch__19757__auto__,c__19819__auto___46120,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0 = (function (){
var statearr_46020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__);

(statearr_46020[(1)] = (1));

return statearr_46020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1 = (function (state_46005){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_46005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e46021){if((e46021 instanceof Object)){
var ex__19761__auto__ = e46021;
var statearr_46022_46127 = state_46005;
(statearr_46022_46127[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46128 = state_46005;
state_46005 = G__46128;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__ = function(state_46005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1.call(this,state_46005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___46120,jobs,results,process,async))
})();
var state__19821__auto__ = (function (){var statearr_46023 = f__19820__auto__.call(null);
(statearr_46023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___46120);

return statearr_46023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___46120,jobs,results,process,async))
);


var c__19819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto__,jobs,results,process,async){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto__,jobs,results,process,async){
return (function (state_46061){
var state_val_46062 = (state_46061[(1)]);
if((state_val_46062 === (7))){
var inst_46057 = (state_46061[(2)]);
var state_46061__$1 = state_46061;
var statearr_46063_46129 = state_46061__$1;
(statearr_46063_46129[(2)] = inst_46057);

(statearr_46063_46129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (20))){
var state_46061__$1 = state_46061;
var statearr_46064_46130 = state_46061__$1;
(statearr_46064_46130[(2)] = null);

(statearr_46064_46130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (1))){
var state_46061__$1 = state_46061;
var statearr_46065_46131 = state_46061__$1;
(statearr_46065_46131[(2)] = null);

(statearr_46065_46131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (4))){
var inst_46026 = (state_46061[(7)]);
var inst_46026__$1 = (state_46061[(2)]);
var inst_46027 = (inst_46026__$1 == null);
var state_46061__$1 = (function (){var statearr_46066 = state_46061;
(statearr_46066[(7)] = inst_46026__$1);

return statearr_46066;
})();
if(cljs.core.truth_(inst_46027)){
var statearr_46067_46132 = state_46061__$1;
(statearr_46067_46132[(1)] = (5));

} else {
var statearr_46068_46133 = state_46061__$1;
(statearr_46068_46133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (15))){
var inst_46039 = (state_46061[(8)]);
var state_46061__$1 = state_46061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46061__$1,(18),to,inst_46039);
} else {
if((state_val_46062 === (21))){
var inst_46052 = (state_46061[(2)]);
var state_46061__$1 = state_46061;
var statearr_46069_46134 = state_46061__$1;
(statearr_46069_46134[(2)] = inst_46052);

(statearr_46069_46134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (13))){
var inst_46054 = (state_46061[(2)]);
var state_46061__$1 = (function (){var statearr_46070 = state_46061;
(statearr_46070[(9)] = inst_46054);

return statearr_46070;
})();
var statearr_46071_46135 = state_46061__$1;
(statearr_46071_46135[(2)] = null);

(statearr_46071_46135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (6))){
var inst_46026 = (state_46061[(7)]);
var state_46061__$1 = state_46061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46061__$1,(11),inst_46026);
} else {
if((state_val_46062 === (17))){
var inst_46047 = (state_46061[(2)]);
var state_46061__$1 = state_46061;
if(cljs.core.truth_(inst_46047)){
var statearr_46072_46136 = state_46061__$1;
(statearr_46072_46136[(1)] = (19));

} else {
var statearr_46073_46137 = state_46061__$1;
(statearr_46073_46137[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (3))){
var inst_46059 = (state_46061[(2)]);
var state_46061__$1 = state_46061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46061__$1,inst_46059);
} else {
if((state_val_46062 === (12))){
var inst_46036 = (state_46061[(10)]);
var state_46061__$1 = state_46061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46061__$1,(14),inst_46036);
} else {
if((state_val_46062 === (2))){
var state_46061__$1 = state_46061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46061__$1,(4),results);
} else {
if((state_val_46062 === (19))){
var state_46061__$1 = state_46061;
var statearr_46074_46138 = state_46061__$1;
(statearr_46074_46138[(2)] = null);

(statearr_46074_46138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (11))){
var inst_46036 = (state_46061[(2)]);
var state_46061__$1 = (function (){var statearr_46075 = state_46061;
(statearr_46075[(10)] = inst_46036);

return statearr_46075;
})();
var statearr_46076_46139 = state_46061__$1;
(statearr_46076_46139[(2)] = null);

(statearr_46076_46139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (9))){
var state_46061__$1 = state_46061;
var statearr_46077_46140 = state_46061__$1;
(statearr_46077_46140[(2)] = null);

(statearr_46077_46140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (5))){
var state_46061__$1 = state_46061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46078_46141 = state_46061__$1;
(statearr_46078_46141[(1)] = (8));

} else {
var statearr_46079_46142 = state_46061__$1;
(statearr_46079_46142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (14))){
var inst_46041 = (state_46061[(11)]);
var inst_46039 = (state_46061[(8)]);
var inst_46039__$1 = (state_46061[(2)]);
var inst_46040 = (inst_46039__$1 == null);
var inst_46041__$1 = cljs.core.not.call(null,inst_46040);
var state_46061__$1 = (function (){var statearr_46080 = state_46061;
(statearr_46080[(11)] = inst_46041__$1);

(statearr_46080[(8)] = inst_46039__$1);

return statearr_46080;
})();
if(inst_46041__$1){
var statearr_46081_46143 = state_46061__$1;
(statearr_46081_46143[(1)] = (15));

} else {
var statearr_46082_46144 = state_46061__$1;
(statearr_46082_46144[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (16))){
var inst_46041 = (state_46061[(11)]);
var state_46061__$1 = state_46061;
var statearr_46083_46145 = state_46061__$1;
(statearr_46083_46145[(2)] = inst_46041);

(statearr_46083_46145[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (10))){
var inst_46033 = (state_46061[(2)]);
var state_46061__$1 = state_46061;
var statearr_46084_46146 = state_46061__$1;
(statearr_46084_46146[(2)] = inst_46033);

(statearr_46084_46146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (18))){
var inst_46044 = (state_46061[(2)]);
var state_46061__$1 = state_46061;
var statearr_46085_46147 = state_46061__$1;
(statearr_46085_46147[(2)] = inst_46044);

(statearr_46085_46147[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46062 === (8))){
var inst_46030 = cljs.core.async.close_BANG_.call(null,to);
var state_46061__$1 = state_46061;
var statearr_46086_46148 = state_46061__$1;
(statearr_46086_46148[(2)] = inst_46030);

(statearr_46086_46148[(1)] = (10));


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
});})(c__19819__auto__,jobs,results,process,async))
;
return ((function (switch__19757__auto__,c__19819__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0 = (function (){
var statearr_46090 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__);

(statearr_46090[(1)] = (1));

return statearr_46090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1 = (function (state_46061){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_46061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e46091){if((e46091 instanceof Object)){
var ex__19761__auto__ = e46091;
var statearr_46092_46149 = state_46061;
(statearr_46092_46149[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46150 = state_46061;
state_46061 = G__46150;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__ = function(state_46061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1.call(this,state_46061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto__,jobs,results,process,async))
})();
var state__19821__auto__ = (function (){var statearr_46093 = f__19820__auto__.call(null);
(statearr_46093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto__);

return statearr_46093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto__,jobs,results,process,async))
);

return c__19819__auto__;
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
var G__46152 = arguments.length;
switch (G__46152) {
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
var G__46155 = arguments.length;
switch (G__46155) {
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
var G__46158 = arguments.length;
switch (G__46158) {
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
var c__19819__auto___46210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___46210,tc,fc){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___46210,tc,fc){
return (function (state_46184){
var state_val_46185 = (state_46184[(1)]);
if((state_val_46185 === (7))){
var inst_46180 = (state_46184[(2)]);
var state_46184__$1 = state_46184;
var statearr_46186_46211 = state_46184__$1;
(statearr_46186_46211[(2)] = inst_46180);

(statearr_46186_46211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46185 === (1))){
var state_46184__$1 = state_46184;
var statearr_46187_46212 = state_46184__$1;
(statearr_46187_46212[(2)] = null);

(statearr_46187_46212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46185 === (4))){
var inst_46161 = (state_46184[(7)]);
var inst_46161__$1 = (state_46184[(2)]);
var inst_46162 = (inst_46161__$1 == null);
var state_46184__$1 = (function (){var statearr_46188 = state_46184;
(statearr_46188[(7)] = inst_46161__$1);

return statearr_46188;
})();
if(cljs.core.truth_(inst_46162)){
var statearr_46189_46213 = state_46184__$1;
(statearr_46189_46213[(1)] = (5));

} else {
var statearr_46190_46214 = state_46184__$1;
(statearr_46190_46214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46185 === (13))){
var state_46184__$1 = state_46184;
var statearr_46191_46215 = state_46184__$1;
(statearr_46191_46215[(2)] = null);

(statearr_46191_46215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46185 === (6))){
var inst_46161 = (state_46184[(7)]);
var inst_46167 = p.call(null,inst_46161);
var state_46184__$1 = state_46184;
if(cljs.core.truth_(inst_46167)){
var statearr_46192_46216 = state_46184__$1;
(statearr_46192_46216[(1)] = (9));

} else {
var statearr_46193_46217 = state_46184__$1;
(statearr_46193_46217[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46185 === (3))){
var inst_46182 = (state_46184[(2)]);
var state_46184__$1 = state_46184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46184__$1,inst_46182);
} else {
if((state_val_46185 === (12))){
var state_46184__$1 = state_46184;
var statearr_46194_46218 = state_46184__$1;
(statearr_46194_46218[(2)] = null);

(statearr_46194_46218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46185 === (2))){
var state_46184__$1 = state_46184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46184__$1,(4),ch);
} else {
if((state_val_46185 === (11))){
var inst_46161 = (state_46184[(7)]);
var inst_46171 = (state_46184[(2)]);
var state_46184__$1 = state_46184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46184__$1,(8),inst_46171,inst_46161);
} else {
if((state_val_46185 === (9))){
var state_46184__$1 = state_46184;
var statearr_46195_46219 = state_46184__$1;
(statearr_46195_46219[(2)] = tc);

(statearr_46195_46219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46185 === (5))){
var inst_46164 = cljs.core.async.close_BANG_.call(null,tc);
var inst_46165 = cljs.core.async.close_BANG_.call(null,fc);
var state_46184__$1 = (function (){var statearr_46196 = state_46184;
(statearr_46196[(8)] = inst_46164);

return statearr_46196;
})();
var statearr_46197_46220 = state_46184__$1;
(statearr_46197_46220[(2)] = inst_46165);

(statearr_46197_46220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46185 === (14))){
var inst_46178 = (state_46184[(2)]);
var state_46184__$1 = state_46184;
var statearr_46198_46221 = state_46184__$1;
(statearr_46198_46221[(2)] = inst_46178);

(statearr_46198_46221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46185 === (10))){
var state_46184__$1 = state_46184;
var statearr_46199_46222 = state_46184__$1;
(statearr_46199_46222[(2)] = fc);

(statearr_46199_46222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46185 === (8))){
var inst_46173 = (state_46184[(2)]);
var state_46184__$1 = state_46184;
if(cljs.core.truth_(inst_46173)){
var statearr_46200_46223 = state_46184__$1;
(statearr_46200_46223[(1)] = (12));

} else {
var statearr_46201_46224 = state_46184__$1;
(statearr_46201_46224[(1)] = (13));

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
});})(c__19819__auto___46210,tc,fc))
;
return ((function (switch__19757__auto__,c__19819__auto___46210,tc,fc){
return (function() {
var cljs$core$async$state_machine__19758__auto__ = null;
var cljs$core$async$state_machine__19758__auto____0 = (function (){
var statearr_46205 = [null,null,null,null,null,null,null,null,null];
(statearr_46205[(0)] = cljs$core$async$state_machine__19758__auto__);

(statearr_46205[(1)] = (1));

return statearr_46205;
});
var cljs$core$async$state_machine__19758__auto____1 = (function (state_46184){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_46184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e46206){if((e46206 instanceof Object)){
var ex__19761__auto__ = e46206;
var statearr_46207_46225 = state_46184;
(statearr_46207_46225[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46226 = state_46184;
state_46184 = G__46226;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$state_machine__19758__auto__ = function(state_46184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19758__auto____1.call(this,state_46184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19758__auto____0;
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19758__auto____1;
return cljs$core$async$state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___46210,tc,fc))
})();
var state__19821__auto__ = (function (){var statearr_46208 = f__19820__auto__.call(null);
(statearr_46208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___46210);

return statearr_46208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___46210,tc,fc))
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
var c__19819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto__){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto__){
return (function (state_46273){
var state_val_46274 = (state_46273[(1)]);
if((state_val_46274 === (1))){
var inst_46259 = init;
var state_46273__$1 = (function (){var statearr_46275 = state_46273;
(statearr_46275[(7)] = inst_46259);

return statearr_46275;
})();
var statearr_46276_46291 = state_46273__$1;
(statearr_46276_46291[(2)] = null);

(statearr_46276_46291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46274 === (2))){
var state_46273__$1 = state_46273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46273__$1,(4),ch);
} else {
if((state_val_46274 === (3))){
var inst_46271 = (state_46273[(2)]);
var state_46273__$1 = state_46273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46273__$1,inst_46271);
} else {
if((state_val_46274 === (4))){
var inst_46262 = (state_46273[(8)]);
var inst_46262__$1 = (state_46273[(2)]);
var inst_46263 = (inst_46262__$1 == null);
var state_46273__$1 = (function (){var statearr_46277 = state_46273;
(statearr_46277[(8)] = inst_46262__$1);

return statearr_46277;
})();
if(cljs.core.truth_(inst_46263)){
var statearr_46278_46292 = state_46273__$1;
(statearr_46278_46292[(1)] = (5));

} else {
var statearr_46279_46293 = state_46273__$1;
(statearr_46279_46293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46274 === (5))){
var inst_46259 = (state_46273[(7)]);
var state_46273__$1 = state_46273;
var statearr_46280_46294 = state_46273__$1;
(statearr_46280_46294[(2)] = inst_46259);

(statearr_46280_46294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46274 === (6))){
var inst_46262 = (state_46273[(8)]);
var inst_46259 = (state_46273[(7)]);
var inst_46266 = f.call(null,inst_46259,inst_46262);
var inst_46259__$1 = inst_46266;
var state_46273__$1 = (function (){var statearr_46281 = state_46273;
(statearr_46281[(7)] = inst_46259__$1);

return statearr_46281;
})();
var statearr_46282_46295 = state_46273__$1;
(statearr_46282_46295[(2)] = null);

(statearr_46282_46295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46274 === (7))){
var inst_46269 = (state_46273[(2)]);
var state_46273__$1 = state_46273;
var statearr_46283_46296 = state_46273__$1;
(statearr_46283_46296[(2)] = inst_46269);

(statearr_46283_46296[(1)] = (3));


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
});})(c__19819__auto__))
;
return ((function (switch__19757__auto__,c__19819__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19758__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19758__auto____0 = (function (){
var statearr_46287 = [null,null,null,null,null,null,null,null,null];
(statearr_46287[(0)] = cljs$core$async$reduce_$_state_machine__19758__auto__);

(statearr_46287[(1)] = (1));

return statearr_46287;
});
var cljs$core$async$reduce_$_state_machine__19758__auto____1 = (function (state_46273){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_46273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e46288){if((e46288 instanceof Object)){
var ex__19761__auto__ = e46288;
var statearr_46289_46297 = state_46273;
(statearr_46289_46297[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46298 = state_46273;
state_46273 = G__46298;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19758__auto__ = function(state_46273){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19758__auto____1.call(this,state_46273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19758__auto____0;
cljs$core$async$reduce_$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19758__auto____1;
return cljs$core$async$reduce_$_state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto__))
})();
var state__19821__auto__ = (function (){var statearr_46290 = f__19820__auto__.call(null);
(statearr_46290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto__);

return statearr_46290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto__))
);

return c__19819__auto__;
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
var G__46300 = arguments.length;
switch (G__46300) {
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
var c__19819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto__){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto__){
return (function (state_46325){
var state_val_46326 = (state_46325[(1)]);
if((state_val_46326 === (7))){
var inst_46307 = (state_46325[(2)]);
var state_46325__$1 = state_46325;
var statearr_46327_46351 = state_46325__$1;
(statearr_46327_46351[(2)] = inst_46307);

(statearr_46327_46351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46326 === (1))){
var inst_46301 = cljs.core.seq.call(null,coll);
var inst_46302 = inst_46301;
var state_46325__$1 = (function (){var statearr_46328 = state_46325;
(statearr_46328[(7)] = inst_46302);

return statearr_46328;
})();
var statearr_46329_46352 = state_46325__$1;
(statearr_46329_46352[(2)] = null);

(statearr_46329_46352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46326 === (4))){
var inst_46302 = (state_46325[(7)]);
var inst_46305 = cljs.core.first.call(null,inst_46302);
var state_46325__$1 = state_46325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46325__$1,(7),ch,inst_46305);
} else {
if((state_val_46326 === (13))){
var inst_46319 = (state_46325[(2)]);
var state_46325__$1 = state_46325;
var statearr_46330_46353 = state_46325__$1;
(statearr_46330_46353[(2)] = inst_46319);

(statearr_46330_46353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46326 === (6))){
var inst_46310 = (state_46325[(2)]);
var state_46325__$1 = state_46325;
if(cljs.core.truth_(inst_46310)){
var statearr_46331_46354 = state_46325__$1;
(statearr_46331_46354[(1)] = (8));

} else {
var statearr_46332_46355 = state_46325__$1;
(statearr_46332_46355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46326 === (3))){
var inst_46323 = (state_46325[(2)]);
var state_46325__$1 = state_46325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46325__$1,inst_46323);
} else {
if((state_val_46326 === (12))){
var state_46325__$1 = state_46325;
var statearr_46333_46356 = state_46325__$1;
(statearr_46333_46356[(2)] = null);

(statearr_46333_46356[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46326 === (2))){
var inst_46302 = (state_46325[(7)]);
var state_46325__$1 = state_46325;
if(cljs.core.truth_(inst_46302)){
var statearr_46334_46357 = state_46325__$1;
(statearr_46334_46357[(1)] = (4));

} else {
var statearr_46335_46358 = state_46325__$1;
(statearr_46335_46358[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46326 === (11))){
var inst_46316 = cljs.core.async.close_BANG_.call(null,ch);
var state_46325__$1 = state_46325;
var statearr_46336_46359 = state_46325__$1;
(statearr_46336_46359[(2)] = inst_46316);

(statearr_46336_46359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46326 === (9))){
var state_46325__$1 = state_46325;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46337_46360 = state_46325__$1;
(statearr_46337_46360[(1)] = (11));

} else {
var statearr_46338_46361 = state_46325__$1;
(statearr_46338_46361[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46326 === (5))){
var inst_46302 = (state_46325[(7)]);
var state_46325__$1 = state_46325;
var statearr_46339_46362 = state_46325__$1;
(statearr_46339_46362[(2)] = inst_46302);

(statearr_46339_46362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46326 === (10))){
var inst_46321 = (state_46325[(2)]);
var state_46325__$1 = state_46325;
var statearr_46340_46363 = state_46325__$1;
(statearr_46340_46363[(2)] = inst_46321);

(statearr_46340_46363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46326 === (8))){
var inst_46302 = (state_46325[(7)]);
var inst_46312 = cljs.core.next.call(null,inst_46302);
var inst_46302__$1 = inst_46312;
var state_46325__$1 = (function (){var statearr_46341 = state_46325;
(statearr_46341[(7)] = inst_46302__$1);

return statearr_46341;
})();
var statearr_46342_46364 = state_46325__$1;
(statearr_46342_46364[(2)] = null);

(statearr_46342_46364[(1)] = (2));


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
});})(c__19819__auto__))
;
return ((function (switch__19757__auto__,c__19819__auto__){
return (function() {
var cljs$core$async$state_machine__19758__auto__ = null;
var cljs$core$async$state_machine__19758__auto____0 = (function (){
var statearr_46346 = [null,null,null,null,null,null,null,null];
(statearr_46346[(0)] = cljs$core$async$state_machine__19758__auto__);

(statearr_46346[(1)] = (1));

return statearr_46346;
});
var cljs$core$async$state_machine__19758__auto____1 = (function (state_46325){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_46325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e46347){if((e46347 instanceof Object)){
var ex__19761__auto__ = e46347;
var statearr_46348_46365 = state_46325;
(statearr_46348_46365[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46366 = state_46325;
state_46325 = G__46366;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$state_machine__19758__auto__ = function(state_46325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19758__auto____1.call(this,state_46325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19758__auto____0;
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19758__auto____1;
return cljs$core$async$state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto__))
})();
var state__19821__auto__ = (function (){var statearr_46349 = f__19820__auto__.call(null);
(statearr_46349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto__);

return statearr_46349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto__))
);

return c__19819__auto__;
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

cljs.core.async.Mux = (function (){var obj46368 = {};
return obj46368;
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


cljs.core.async.Mult = (function (){var obj46370 = {};
return obj46370;
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
if(typeof cljs.core.async.t46592 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t46592 = (function (mult,ch,cs,meta46593){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta46593 = meta46593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t46592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46594,meta46593__$1){
var self__ = this;
var _46594__$1 = this;
return (new cljs.core.async.t46592(self__.mult,self__.ch,self__.cs,meta46593__$1));
});})(cs))
;

cljs.core.async.t46592.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46594){
var self__ = this;
var _46594__$1 = this;
return self__.meta46593;
});})(cs))
;

cljs.core.async.t46592.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t46592.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t46592.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t46592.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t46592.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t46592.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t46592.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46593","meta46593",-87799150,null)], null);
});})(cs))
;

cljs.core.async.t46592.cljs$lang$type = true;

cljs.core.async.t46592.cljs$lang$ctorStr = "cljs.core.async/t46592";

cljs.core.async.t46592.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t46592");
});})(cs))
;

cljs.core.async.__GT_t46592 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t46592(mult__$1,ch__$1,cs__$1,meta46593){
return (new cljs.core.async.t46592(mult__$1,ch__$1,cs__$1,meta46593));
});})(cs))
;

}

return (new cljs.core.async.t46592(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19819__auto___46813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___46813,cs,m,dchan,dctr,done){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___46813,cs,m,dchan,dctr,done){
return (function (state_46725){
var state_val_46726 = (state_46725[(1)]);
if((state_val_46726 === (7))){
var inst_46721 = (state_46725[(2)]);
var state_46725__$1 = state_46725;
var statearr_46727_46814 = state_46725__$1;
(statearr_46727_46814[(2)] = inst_46721);

(statearr_46727_46814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (20))){
var inst_46626 = (state_46725[(7)]);
var inst_46636 = cljs.core.first.call(null,inst_46626);
var inst_46637 = cljs.core.nth.call(null,inst_46636,(0),null);
var inst_46638 = cljs.core.nth.call(null,inst_46636,(1),null);
var state_46725__$1 = (function (){var statearr_46728 = state_46725;
(statearr_46728[(8)] = inst_46637);

return statearr_46728;
})();
if(cljs.core.truth_(inst_46638)){
var statearr_46729_46815 = state_46725__$1;
(statearr_46729_46815[(1)] = (22));

} else {
var statearr_46730_46816 = state_46725__$1;
(statearr_46730_46816[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (27))){
var inst_46597 = (state_46725[(9)]);
var inst_46673 = (state_46725[(10)]);
var inst_46668 = (state_46725[(11)]);
var inst_46666 = (state_46725[(12)]);
var inst_46673__$1 = cljs.core._nth.call(null,inst_46666,inst_46668);
var inst_46674 = cljs.core.async.put_BANG_.call(null,inst_46673__$1,inst_46597,done);
var state_46725__$1 = (function (){var statearr_46731 = state_46725;
(statearr_46731[(10)] = inst_46673__$1);

return statearr_46731;
})();
if(cljs.core.truth_(inst_46674)){
var statearr_46732_46817 = state_46725__$1;
(statearr_46732_46817[(1)] = (30));

} else {
var statearr_46733_46818 = state_46725__$1;
(statearr_46733_46818[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (1))){
var state_46725__$1 = state_46725;
var statearr_46734_46819 = state_46725__$1;
(statearr_46734_46819[(2)] = null);

(statearr_46734_46819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (24))){
var inst_46626 = (state_46725[(7)]);
var inst_46643 = (state_46725[(2)]);
var inst_46644 = cljs.core.next.call(null,inst_46626);
var inst_46606 = inst_46644;
var inst_46607 = null;
var inst_46608 = (0);
var inst_46609 = (0);
var state_46725__$1 = (function (){var statearr_46735 = state_46725;
(statearr_46735[(13)] = inst_46609);

(statearr_46735[(14)] = inst_46643);

(statearr_46735[(15)] = inst_46606);

(statearr_46735[(16)] = inst_46607);

(statearr_46735[(17)] = inst_46608);

return statearr_46735;
})();
var statearr_46736_46820 = state_46725__$1;
(statearr_46736_46820[(2)] = null);

(statearr_46736_46820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (39))){
var state_46725__$1 = state_46725;
var statearr_46740_46821 = state_46725__$1;
(statearr_46740_46821[(2)] = null);

(statearr_46740_46821[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (4))){
var inst_46597 = (state_46725[(9)]);
var inst_46597__$1 = (state_46725[(2)]);
var inst_46598 = (inst_46597__$1 == null);
var state_46725__$1 = (function (){var statearr_46741 = state_46725;
(statearr_46741[(9)] = inst_46597__$1);

return statearr_46741;
})();
if(cljs.core.truth_(inst_46598)){
var statearr_46742_46822 = state_46725__$1;
(statearr_46742_46822[(1)] = (5));

} else {
var statearr_46743_46823 = state_46725__$1;
(statearr_46743_46823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (15))){
var inst_46609 = (state_46725[(13)]);
var inst_46606 = (state_46725[(15)]);
var inst_46607 = (state_46725[(16)]);
var inst_46608 = (state_46725[(17)]);
var inst_46622 = (state_46725[(2)]);
var inst_46623 = (inst_46609 + (1));
var tmp46737 = inst_46606;
var tmp46738 = inst_46607;
var tmp46739 = inst_46608;
var inst_46606__$1 = tmp46737;
var inst_46607__$1 = tmp46738;
var inst_46608__$1 = tmp46739;
var inst_46609__$1 = inst_46623;
var state_46725__$1 = (function (){var statearr_46744 = state_46725;
(statearr_46744[(18)] = inst_46622);

(statearr_46744[(13)] = inst_46609__$1);

(statearr_46744[(15)] = inst_46606__$1);

(statearr_46744[(16)] = inst_46607__$1);

(statearr_46744[(17)] = inst_46608__$1);

return statearr_46744;
})();
var statearr_46745_46824 = state_46725__$1;
(statearr_46745_46824[(2)] = null);

(statearr_46745_46824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (21))){
var inst_46647 = (state_46725[(2)]);
var state_46725__$1 = state_46725;
var statearr_46749_46825 = state_46725__$1;
(statearr_46749_46825[(2)] = inst_46647);

(statearr_46749_46825[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (31))){
var inst_46673 = (state_46725[(10)]);
var inst_46677 = done.call(null,null);
var inst_46678 = cljs.core.async.untap_STAR_.call(null,m,inst_46673);
var state_46725__$1 = (function (){var statearr_46750 = state_46725;
(statearr_46750[(19)] = inst_46677);

return statearr_46750;
})();
var statearr_46751_46826 = state_46725__$1;
(statearr_46751_46826[(2)] = inst_46678);

(statearr_46751_46826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (32))){
var inst_46667 = (state_46725[(20)]);
var inst_46665 = (state_46725[(21)]);
var inst_46668 = (state_46725[(11)]);
var inst_46666 = (state_46725[(12)]);
var inst_46680 = (state_46725[(2)]);
var inst_46681 = (inst_46668 + (1));
var tmp46746 = inst_46667;
var tmp46747 = inst_46665;
var tmp46748 = inst_46666;
var inst_46665__$1 = tmp46747;
var inst_46666__$1 = tmp46748;
var inst_46667__$1 = tmp46746;
var inst_46668__$1 = inst_46681;
var state_46725__$1 = (function (){var statearr_46752 = state_46725;
(statearr_46752[(20)] = inst_46667__$1);

(statearr_46752[(21)] = inst_46665__$1);

(statearr_46752[(11)] = inst_46668__$1);

(statearr_46752[(22)] = inst_46680);

(statearr_46752[(12)] = inst_46666__$1);

return statearr_46752;
})();
var statearr_46753_46827 = state_46725__$1;
(statearr_46753_46827[(2)] = null);

(statearr_46753_46827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (40))){
var inst_46693 = (state_46725[(23)]);
var inst_46697 = done.call(null,null);
var inst_46698 = cljs.core.async.untap_STAR_.call(null,m,inst_46693);
var state_46725__$1 = (function (){var statearr_46754 = state_46725;
(statearr_46754[(24)] = inst_46697);

return statearr_46754;
})();
var statearr_46755_46828 = state_46725__$1;
(statearr_46755_46828[(2)] = inst_46698);

(statearr_46755_46828[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (33))){
var inst_46684 = (state_46725[(25)]);
var inst_46686 = cljs.core.chunked_seq_QMARK_.call(null,inst_46684);
var state_46725__$1 = state_46725;
if(inst_46686){
var statearr_46756_46829 = state_46725__$1;
(statearr_46756_46829[(1)] = (36));

} else {
var statearr_46757_46830 = state_46725__$1;
(statearr_46757_46830[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (13))){
var inst_46616 = (state_46725[(26)]);
var inst_46619 = cljs.core.async.close_BANG_.call(null,inst_46616);
var state_46725__$1 = state_46725;
var statearr_46758_46831 = state_46725__$1;
(statearr_46758_46831[(2)] = inst_46619);

(statearr_46758_46831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (22))){
var inst_46637 = (state_46725[(8)]);
var inst_46640 = cljs.core.async.close_BANG_.call(null,inst_46637);
var state_46725__$1 = state_46725;
var statearr_46759_46832 = state_46725__$1;
(statearr_46759_46832[(2)] = inst_46640);

(statearr_46759_46832[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (36))){
var inst_46684 = (state_46725[(25)]);
var inst_46688 = cljs.core.chunk_first.call(null,inst_46684);
var inst_46689 = cljs.core.chunk_rest.call(null,inst_46684);
var inst_46690 = cljs.core.count.call(null,inst_46688);
var inst_46665 = inst_46689;
var inst_46666 = inst_46688;
var inst_46667 = inst_46690;
var inst_46668 = (0);
var state_46725__$1 = (function (){var statearr_46760 = state_46725;
(statearr_46760[(20)] = inst_46667);

(statearr_46760[(21)] = inst_46665);

(statearr_46760[(11)] = inst_46668);

(statearr_46760[(12)] = inst_46666);

return statearr_46760;
})();
var statearr_46761_46833 = state_46725__$1;
(statearr_46761_46833[(2)] = null);

(statearr_46761_46833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (41))){
var inst_46684 = (state_46725[(25)]);
var inst_46700 = (state_46725[(2)]);
var inst_46701 = cljs.core.next.call(null,inst_46684);
var inst_46665 = inst_46701;
var inst_46666 = null;
var inst_46667 = (0);
var inst_46668 = (0);
var state_46725__$1 = (function (){var statearr_46762 = state_46725;
(statearr_46762[(27)] = inst_46700);

(statearr_46762[(20)] = inst_46667);

(statearr_46762[(21)] = inst_46665);

(statearr_46762[(11)] = inst_46668);

(statearr_46762[(12)] = inst_46666);

return statearr_46762;
})();
var statearr_46763_46834 = state_46725__$1;
(statearr_46763_46834[(2)] = null);

(statearr_46763_46834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (43))){
var state_46725__$1 = state_46725;
var statearr_46764_46835 = state_46725__$1;
(statearr_46764_46835[(2)] = null);

(statearr_46764_46835[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (29))){
var inst_46709 = (state_46725[(2)]);
var state_46725__$1 = state_46725;
var statearr_46765_46836 = state_46725__$1;
(statearr_46765_46836[(2)] = inst_46709);

(statearr_46765_46836[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (44))){
var inst_46718 = (state_46725[(2)]);
var state_46725__$1 = (function (){var statearr_46766 = state_46725;
(statearr_46766[(28)] = inst_46718);

return statearr_46766;
})();
var statearr_46767_46837 = state_46725__$1;
(statearr_46767_46837[(2)] = null);

(statearr_46767_46837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (6))){
var inst_46657 = (state_46725[(29)]);
var inst_46656 = cljs.core.deref.call(null,cs);
var inst_46657__$1 = cljs.core.keys.call(null,inst_46656);
var inst_46658 = cljs.core.count.call(null,inst_46657__$1);
var inst_46659 = cljs.core.reset_BANG_.call(null,dctr,inst_46658);
var inst_46664 = cljs.core.seq.call(null,inst_46657__$1);
var inst_46665 = inst_46664;
var inst_46666 = null;
var inst_46667 = (0);
var inst_46668 = (0);
var state_46725__$1 = (function (){var statearr_46768 = state_46725;
(statearr_46768[(20)] = inst_46667);

(statearr_46768[(21)] = inst_46665);

(statearr_46768[(11)] = inst_46668);

(statearr_46768[(12)] = inst_46666);

(statearr_46768[(29)] = inst_46657__$1);

(statearr_46768[(30)] = inst_46659);

return statearr_46768;
})();
var statearr_46769_46838 = state_46725__$1;
(statearr_46769_46838[(2)] = null);

(statearr_46769_46838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (28))){
var inst_46665 = (state_46725[(21)]);
var inst_46684 = (state_46725[(25)]);
var inst_46684__$1 = cljs.core.seq.call(null,inst_46665);
var state_46725__$1 = (function (){var statearr_46770 = state_46725;
(statearr_46770[(25)] = inst_46684__$1);

return statearr_46770;
})();
if(inst_46684__$1){
var statearr_46771_46839 = state_46725__$1;
(statearr_46771_46839[(1)] = (33));

} else {
var statearr_46772_46840 = state_46725__$1;
(statearr_46772_46840[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (25))){
var inst_46667 = (state_46725[(20)]);
var inst_46668 = (state_46725[(11)]);
var inst_46670 = (inst_46668 < inst_46667);
var inst_46671 = inst_46670;
var state_46725__$1 = state_46725;
if(cljs.core.truth_(inst_46671)){
var statearr_46773_46841 = state_46725__$1;
(statearr_46773_46841[(1)] = (27));

} else {
var statearr_46774_46842 = state_46725__$1;
(statearr_46774_46842[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (34))){
var state_46725__$1 = state_46725;
var statearr_46775_46843 = state_46725__$1;
(statearr_46775_46843[(2)] = null);

(statearr_46775_46843[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (17))){
var state_46725__$1 = state_46725;
var statearr_46776_46844 = state_46725__$1;
(statearr_46776_46844[(2)] = null);

(statearr_46776_46844[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (3))){
var inst_46723 = (state_46725[(2)]);
var state_46725__$1 = state_46725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46725__$1,inst_46723);
} else {
if((state_val_46726 === (12))){
var inst_46652 = (state_46725[(2)]);
var state_46725__$1 = state_46725;
var statearr_46777_46845 = state_46725__$1;
(statearr_46777_46845[(2)] = inst_46652);

(statearr_46777_46845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (2))){
var state_46725__$1 = state_46725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46725__$1,(4),ch);
} else {
if((state_val_46726 === (23))){
var state_46725__$1 = state_46725;
var statearr_46778_46846 = state_46725__$1;
(statearr_46778_46846[(2)] = null);

(statearr_46778_46846[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (35))){
var inst_46707 = (state_46725[(2)]);
var state_46725__$1 = state_46725;
var statearr_46779_46847 = state_46725__$1;
(statearr_46779_46847[(2)] = inst_46707);

(statearr_46779_46847[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (19))){
var inst_46626 = (state_46725[(7)]);
var inst_46630 = cljs.core.chunk_first.call(null,inst_46626);
var inst_46631 = cljs.core.chunk_rest.call(null,inst_46626);
var inst_46632 = cljs.core.count.call(null,inst_46630);
var inst_46606 = inst_46631;
var inst_46607 = inst_46630;
var inst_46608 = inst_46632;
var inst_46609 = (0);
var state_46725__$1 = (function (){var statearr_46780 = state_46725;
(statearr_46780[(13)] = inst_46609);

(statearr_46780[(15)] = inst_46606);

(statearr_46780[(16)] = inst_46607);

(statearr_46780[(17)] = inst_46608);

return statearr_46780;
})();
var statearr_46781_46848 = state_46725__$1;
(statearr_46781_46848[(2)] = null);

(statearr_46781_46848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (11))){
var inst_46626 = (state_46725[(7)]);
var inst_46606 = (state_46725[(15)]);
var inst_46626__$1 = cljs.core.seq.call(null,inst_46606);
var state_46725__$1 = (function (){var statearr_46782 = state_46725;
(statearr_46782[(7)] = inst_46626__$1);

return statearr_46782;
})();
if(inst_46626__$1){
var statearr_46783_46849 = state_46725__$1;
(statearr_46783_46849[(1)] = (16));

} else {
var statearr_46784_46850 = state_46725__$1;
(statearr_46784_46850[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (9))){
var inst_46654 = (state_46725[(2)]);
var state_46725__$1 = state_46725;
var statearr_46785_46851 = state_46725__$1;
(statearr_46785_46851[(2)] = inst_46654);

(statearr_46785_46851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (5))){
var inst_46604 = cljs.core.deref.call(null,cs);
var inst_46605 = cljs.core.seq.call(null,inst_46604);
var inst_46606 = inst_46605;
var inst_46607 = null;
var inst_46608 = (0);
var inst_46609 = (0);
var state_46725__$1 = (function (){var statearr_46786 = state_46725;
(statearr_46786[(13)] = inst_46609);

(statearr_46786[(15)] = inst_46606);

(statearr_46786[(16)] = inst_46607);

(statearr_46786[(17)] = inst_46608);

return statearr_46786;
})();
var statearr_46787_46852 = state_46725__$1;
(statearr_46787_46852[(2)] = null);

(statearr_46787_46852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (14))){
var state_46725__$1 = state_46725;
var statearr_46788_46853 = state_46725__$1;
(statearr_46788_46853[(2)] = null);

(statearr_46788_46853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (45))){
var inst_46715 = (state_46725[(2)]);
var state_46725__$1 = state_46725;
var statearr_46789_46854 = state_46725__$1;
(statearr_46789_46854[(2)] = inst_46715);

(statearr_46789_46854[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (26))){
var inst_46657 = (state_46725[(29)]);
var inst_46711 = (state_46725[(2)]);
var inst_46712 = cljs.core.seq.call(null,inst_46657);
var state_46725__$1 = (function (){var statearr_46790 = state_46725;
(statearr_46790[(31)] = inst_46711);

return statearr_46790;
})();
if(inst_46712){
var statearr_46791_46855 = state_46725__$1;
(statearr_46791_46855[(1)] = (42));

} else {
var statearr_46792_46856 = state_46725__$1;
(statearr_46792_46856[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (16))){
var inst_46626 = (state_46725[(7)]);
var inst_46628 = cljs.core.chunked_seq_QMARK_.call(null,inst_46626);
var state_46725__$1 = state_46725;
if(inst_46628){
var statearr_46793_46857 = state_46725__$1;
(statearr_46793_46857[(1)] = (19));

} else {
var statearr_46794_46858 = state_46725__$1;
(statearr_46794_46858[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (38))){
var inst_46704 = (state_46725[(2)]);
var state_46725__$1 = state_46725;
var statearr_46795_46859 = state_46725__$1;
(statearr_46795_46859[(2)] = inst_46704);

(statearr_46795_46859[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (30))){
var state_46725__$1 = state_46725;
var statearr_46796_46860 = state_46725__$1;
(statearr_46796_46860[(2)] = null);

(statearr_46796_46860[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (10))){
var inst_46609 = (state_46725[(13)]);
var inst_46607 = (state_46725[(16)]);
var inst_46615 = cljs.core._nth.call(null,inst_46607,inst_46609);
var inst_46616 = cljs.core.nth.call(null,inst_46615,(0),null);
var inst_46617 = cljs.core.nth.call(null,inst_46615,(1),null);
var state_46725__$1 = (function (){var statearr_46797 = state_46725;
(statearr_46797[(26)] = inst_46616);

return statearr_46797;
})();
if(cljs.core.truth_(inst_46617)){
var statearr_46798_46861 = state_46725__$1;
(statearr_46798_46861[(1)] = (13));

} else {
var statearr_46799_46862 = state_46725__$1;
(statearr_46799_46862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (18))){
var inst_46650 = (state_46725[(2)]);
var state_46725__$1 = state_46725;
var statearr_46800_46863 = state_46725__$1;
(statearr_46800_46863[(2)] = inst_46650);

(statearr_46800_46863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (42))){
var state_46725__$1 = state_46725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46725__$1,(45),dchan);
} else {
if((state_val_46726 === (37))){
var inst_46597 = (state_46725[(9)]);
var inst_46684 = (state_46725[(25)]);
var inst_46693 = (state_46725[(23)]);
var inst_46693__$1 = cljs.core.first.call(null,inst_46684);
var inst_46694 = cljs.core.async.put_BANG_.call(null,inst_46693__$1,inst_46597,done);
var state_46725__$1 = (function (){var statearr_46801 = state_46725;
(statearr_46801[(23)] = inst_46693__$1);

return statearr_46801;
})();
if(cljs.core.truth_(inst_46694)){
var statearr_46802_46864 = state_46725__$1;
(statearr_46802_46864[(1)] = (39));

} else {
var statearr_46803_46865 = state_46725__$1;
(statearr_46803_46865[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46726 === (8))){
var inst_46609 = (state_46725[(13)]);
var inst_46608 = (state_46725[(17)]);
var inst_46611 = (inst_46609 < inst_46608);
var inst_46612 = inst_46611;
var state_46725__$1 = state_46725;
if(cljs.core.truth_(inst_46612)){
var statearr_46804_46866 = state_46725__$1;
(statearr_46804_46866[(1)] = (10));

} else {
var statearr_46805_46867 = state_46725__$1;
(statearr_46805_46867[(1)] = (11));

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
});})(c__19819__auto___46813,cs,m,dchan,dctr,done))
;
return ((function (switch__19757__auto__,c__19819__auto___46813,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19758__auto__ = null;
var cljs$core$async$mult_$_state_machine__19758__auto____0 = (function (){
var statearr_46809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46809[(0)] = cljs$core$async$mult_$_state_machine__19758__auto__);

(statearr_46809[(1)] = (1));

return statearr_46809;
});
var cljs$core$async$mult_$_state_machine__19758__auto____1 = (function (state_46725){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_46725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e46810){if((e46810 instanceof Object)){
var ex__19761__auto__ = e46810;
var statearr_46811_46868 = state_46725;
(statearr_46811_46868[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46869 = state_46725;
state_46725 = G__46869;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19758__auto__ = function(state_46725){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19758__auto____1.call(this,state_46725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19758__auto____0;
cljs$core$async$mult_$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19758__auto____1;
return cljs$core$async$mult_$_state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___46813,cs,m,dchan,dctr,done))
})();
var state__19821__auto__ = (function (){var statearr_46812 = f__19820__auto__.call(null);
(statearr_46812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___46813);

return statearr_46812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___46813,cs,m,dchan,dctr,done))
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
var G__46871 = arguments.length;
switch (G__46871) {
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

cljs.core.async.Mix = (function (){var obj46874 = {};
return obj46874;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46879){
var map__46880 = p__46879;
var map__46880__$1 = ((cljs.core.seq_QMARK_.call(null,map__46880))?cljs.core.apply.call(null,cljs.core.hash_map,map__46880):map__46880);
var opts = map__46880__$1;
var statearr_46881_46884 = state;
(statearr_46881_46884[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__46880,map__46880__$1,opts){
return (function (val){
var statearr_46882_46885 = state;
(statearr_46882_46885[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46880,map__46880__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_46883_46886 = state;
(statearr_46883_46886[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46875){
var G__46876 = cljs.core.first.call(null,seq46875);
var seq46875__$1 = cljs.core.next.call(null,seq46875);
var G__46877 = cljs.core.first.call(null,seq46875__$1);
var seq46875__$2 = cljs.core.next.call(null,seq46875__$1);
var G__46878 = cljs.core.first.call(null,seq46875__$2);
var seq46875__$3 = cljs.core.next.call(null,seq46875__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46876,G__46877,G__46878,seq46875__$3);
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
if(typeof cljs.core.async.t47006 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t47006 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47007){
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
this.meta47007 = meta47007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t47006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47008,meta47007__$1){
var self__ = this;
var _47008__$1 = this;
return (new cljs.core.async.t47006(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47007__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t47006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47008){
var self__ = this;
var _47008__$1 = this;
return self__.meta47007;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t47006.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t47006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t47006.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t47006.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t47006.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t47006.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t47006.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t47006.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t47006.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47007","meta47007",-659859269,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t47006.cljs$lang$type = true;

cljs.core.async.t47006.cljs$lang$ctorStr = "cljs.core.async/t47006";

cljs.core.async.t47006.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t47006");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t47006 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t47006(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47007){
return (new cljs.core.async.t47006(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47007));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t47006(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19819__auto___47125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___47125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___47125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47078){
var state_val_47079 = (state_47078[(1)]);
if((state_val_47079 === (7))){
var inst_47022 = (state_47078[(7)]);
var inst_47027 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47022);
var state_47078__$1 = state_47078;
var statearr_47080_47126 = state_47078__$1;
(statearr_47080_47126[(2)] = inst_47027);

(statearr_47080_47126[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (20))){
var inst_47037 = (state_47078[(8)]);
var state_47078__$1 = state_47078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47078__$1,(23),out,inst_47037);
} else {
if((state_val_47079 === (1))){
var inst_47012 = (state_47078[(9)]);
var inst_47012__$1 = calc_state.call(null);
var inst_47013 = cljs.core.seq_QMARK_.call(null,inst_47012__$1);
var state_47078__$1 = (function (){var statearr_47081 = state_47078;
(statearr_47081[(9)] = inst_47012__$1);

return statearr_47081;
})();
if(inst_47013){
var statearr_47082_47127 = state_47078__$1;
(statearr_47082_47127[(1)] = (2));

} else {
var statearr_47083_47128 = state_47078__$1;
(statearr_47083_47128[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (24))){
var inst_47030 = (state_47078[(10)]);
var inst_47022 = inst_47030;
var state_47078__$1 = (function (){var statearr_47084 = state_47078;
(statearr_47084[(7)] = inst_47022);

return statearr_47084;
})();
var statearr_47085_47129 = state_47078__$1;
(statearr_47085_47129[(2)] = null);

(statearr_47085_47129[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (4))){
var inst_47012 = (state_47078[(9)]);
var inst_47018 = (state_47078[(2)]);
var inst_47019 = cljs.core.get.call(null,inst_47018,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47020 = cljs.core.get.call(null,inst_47018,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47021 = cljs.core.get.call(null,inst_47018,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47022 = inst_47012;
var state_47078__$1 = (function (){var statearr_47086 = state_47078;
(statearr_47086[(11)] = inst_47021);

(statearr_47086[(7)] = inst_47022);

(statearr_47086[(12)] = inst_47020);

(statearr_47086[(13)] = inst_47019);

return statearr_47086;
})();
var statearr_47087_47130 = state_47078__$1;
(statearr_47087_47130[(2)] = null);

(statearr_47087_47130[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (15))){
var state_47078__$1 = state_47078;
var statearr_47088_47131 = state_47078__$1;
(statearr_47088_47131[(2)] = null);

(statearr_47088_47131[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (21))){
var inst_47030 = (state_47078[(10)]);
var inst_47022 = inst_47030;
var state_47078__$1 = (function (){var statearr_47089 = state_47078;
(statearr_47089[(7)] = inst_47022);

return statearr_47089;
})();
var statearr_47090_47132 = state_47078__$1;
(statearr_47090_47132[(2)] = null);

(statearr_47090_47132[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (13))){
var inst_47074 = (state_47078[(2)]);
var state_47078__$1 = state_47078;
var statearr_47091_47133 = state_47078__$1;
(statearr_47091_47133[(2)] = inst_47074);

(statearr_47091_47133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (22))){
var inst_47072 = (state_47078[(2)]);
var state_47078__$1 = state_47078;
var statearr_47092_47134 = state_47078__$1;
(statearr_47092_47134[(2)] = inst_47072);

(statearr_47092_47134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (6))){
var inst_47076 = (state_47078[(2)]);
var state_47078__$1 = state_47078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47078__$1,inst_47076);
} else {
if((state_val_47079 === (25))){
var state_47078__$1 = state_47078;
var statearr_47093_47135 = state_47078__$1;
(statearr_47093_47135[(2)] = null);

(statearr_47093_47135[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (17))){
var inst_47052 = (state_47078[(14)]);
var state_47078__$1 = state_47078;
var statearr_47094_47136 = state_47078__$1;
(statearr_47094_47136[(2)] = inst_47052);

(statearr_47094_47136[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (3))){
var inst_47012 = (state_47078[(9)]);
var state_47078__$1 = state_47078;
var statearr_47095_47137 = state_47078__$1;
(statearr_47095_47137[(2)] = inst_47012);

(statearr_47095_47137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (12))){
var inst_47038 = (state_47078[(15)]);
var inst_47052 = (state_47078[(14)]);
var inst_47031 = (state_47078[(16)]);
var inst_47052__$1 = inst_47031.call(null,inst_47038);
var state_47078__$1 = (function (){var statearr_47096 = state_47078;
(statearr_47096[(14)] = inst_47052__$1);

return statearr_47096;
})();
if(cljs.core.truth_(inst_47052__$1)){
var statearr_47097_47138 = state_47078__$1;
(statearr_47097_47138[(1)] = (17));

} else {
var statearr_47098_47139 = state_47078__$1;
(statearr_47098_47139[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (2))){
var inst_47012 = (state_47078[(9)]);
var inst_47015 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47012);
var state_47078__$1 = state_47078;
var statearr_47099_47140 = state_47078__$1;
(statearr_47099_47140[(2)] = inst_47015);

(statearr_47099_47140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (23))){
var inst_47063 = (state_47078[(2)]);
var state_47078__$1 = state_47078;
if(cljs.core.truth_(inst_47063)){
var statearr_47100_47141 = state_47078__$1;
(statearr_47100_47141[(1)] = (24));

} else {
var statearr_47101_47142 = state_47078__$1;
(statearr_47101_47142[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (19))){
var inst_47060 = (state_47078[(2)]);
var state_47078__$1 = state_47078;
if(cljs.core.truth_(inst_47060)){
var statearr_47102_47143 = state_47078__$1;
(statearr_47102_47143[(1)] = (20));

} else {
var statearr_47103_47144 = state_47078__$1;
(statearr_47103_47144[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (11))){
var inst_47037 = (state_47078[(8)]);
var inst_47043 = (inst_47037 == null);
var state_47078__$1 = state_47078;
if(cljs.core.truth_(inst_47043)){
var statearr_47104_47145 = state_47078__$1;
(statearr_47104_47145[(1)] = (14));

} else {
var statearr_47105_47146 = state_47078__$1;
(statearr_47105_47146[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (9))){
var inst_47030 = (state_47078[(10)]);
var inst_47030__$1 = (state_47078[(2)]);
var inst_47031 = cljs.core.get.call(null,inst_47030__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47032 = cljs.core.get.call(null,inst_47030__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47033 = cljs.core.get.call(null,inst_47030__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47078__$1 = (function (){var statearr_47106 = state_47078;
(statearr_47106[(17)] = inst_47032);

(statearr_47106[(10)] = inst_47030__$1);

(statearr_47106[(16)] = inst_47031);

return statearr_47106;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47078__$1,(10),inst_47033);
} else {
if((state_val_47079 === (5))){
var inst_47022 = (state_47078[(7)]);
var inst_47025 = cljs.core.seq_QMARK_.call(null,inst_47022);
var state_47078__$1 = state_47078;
if(inst_47025){
var statearr_47107_47147 = state_47078__$1;
(statearr_47107_47147[(1)] = (7));

} else {
var statearr_47108_47148 = state_47078__$1;
(statearr_47108_47148[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (14))){
var inst_47038 = (state_47078[(15)]);
var inst_47045 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47038);
var state_47078__$1 = state_47078;
var statearr_47109_47149 = state_47078__$1;
(statearr_47109_47149[(2)] = inst_47045);

(statearr_47109_47149[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (26))){
var inst_47068 = (state_47078[(2)]);
var state_47078__$1 = state_47078;
var statearr_47110_47150 = state_47078__$1;
(statearr_47110_47150[(2)] = inst_47068);

(statearr_47110_47150[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (16))){
var inst_47048 = (state_47078[(2)]);
var inst_47049 = calc_state.call(null);
var inst_47022 = inst_47049;
var state_47078__$1 = (function (){var statearr_47111 = state_47078;
(statearr_47111[(18)] = inst_47048);

(statearr_47111[(7)] = inst_47022);

return statearr_47111;
})();
var statearr_47112_47151 = state_47078__$1;
(statearr_47112_47151[(2)] = null);

(statearr_47112_47151[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (10))){
var inst_47038 = (state_47078[(15)]);
var inst_47037 = (state_47078[(8)]);
var inst_47036 = (state_47078[(2)]);
var inst_47037__$1 = cljs.core.nth.call(null,inst_47036,(0),null);
var inst_47038__$1 = cljs.core.nth.call(null,inst_47036,(1),null);
var inst_47039 = (inst_47037__$1 == null);
var inst_47040 = cljs.core._EQ_.call(null,inst_47038__$1,change);
var inst_47041 = (inst_47039) || (inst_47040);
var state_47078__$1 = (function (){var statearr_47113 = state_47078;
(statearr_47113[(15)] = inst_47038__$1);

(statearr_47113[(8)] = inst_47037__$1);

return statearr_47113;
})();
if(cljs.core.truth_(inst_47041)){
var statearr_47114_47152 = state_47078__$1;
(statearr_47114_47152[(1)] = (11));

} else {
var statearr_47115_47153 = state_47078__$1;
(statearr_47115_47153[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (18))){
var inst_47032 = (state_47078[(17)]);
var inst_47038 = (state_47078[(15)]);
var inst_47031 = (state_47078[(16)]);
var inst_47055 = cljs.core.empty_QMARK_.call(null,inst_47031);
var inst_47056 = inst_47032.call(null,inst_47038);
var inst_47057 = cljs.core.not.call(null,inst_47056);
var inst_47058 = (inst_47055) && (inst_47057);
var state_47078__$1 = state_47078;
var statearr_47116_47154 = state_47078__$1;
(statearr_47116_47154[(2)] = inst_47058);

(statearr_47116_47154[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47079 === (8))){
var inst_47022 = (state_47078[(7)]);
var state_47078__$1 = state_47078;
var statearr_47117_47155 = state_47078__$1;
(statearr_47117_47155[(2)] = inst_47022);

(statearr_47117_47155[(1)] = (9));


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
});})(c__19819__auto___47125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19757__auto__,c__19819__auto___47125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19758__auto__ = null;
var cljs$core$async$mix_$_state_machine__19758__auto____0 = (function (){
var statearr_47121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47121[(0)] = cljs$core$async$mix_$_state_machine__19758__auto__);

(statearr_47121[(1)] = (1));

return statearr_47121;
});
var cljs$core$async$mix_$_state_machine__19758__auto____1 = (function (state_47078){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_47078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e47122){if((e47122 instanceof Object)){
var ex__19761__auto__ = e47122;
var statearr_47123_47156 = state_47078;
(statearr_47123_47156[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47157 = state_47078;
state_47078 = G__47157;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19758__auto__ = function(state_47078){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19758__auto____1.call(this,state_47078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19758__auto____0;
cljs$core$async$mix_$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19758__auto____1;
return cljs$core$async$mix_$_state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___47125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19821__auto__ = (function (){var statearr_47124 = f__19820__auto__.call(null);
(statearr_47124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___47125);

return statearr_47124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___47125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj47159 = {};
return obj47159;
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
var G__47161 = arguments.length;
switch (G__47161) {
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
var G__47165 = arguments.length;
switch (G__47165) {
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
return (function (p1__47163_SHARP_){
if(cljs.core.truth_(p1__47163_SHARP_.call(null,topic))){
return p1__47163_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__47163_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16062__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t47166 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t47166 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47167){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47167 = meta47167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t47166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47168,meta47167__$1){
var self__ = this;
var _47168__$1 = this;
return (new cljs.core.async.t47166(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47167__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t47166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47168){
var self__ = this;
var _47168__$1 = this;
return self__.meta47167;
});})(mults,ensure_mult))
;

cljs.core.async.t47166.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t47166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t47166.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t47166.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t47166.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t47166.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t47166.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t47166.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47167","meta47167",718333636,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t47166.cljs$lang$type = true;

cljs.core.async.t47166.cljs$lang$ctorStr = "cljs.core.async/t47166";

cljs.core.async.t47166.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t47166");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t47166 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t47166(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47167){
return (new cljs.core.async.t47166(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47167));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t47166(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19819__auto___47289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___47289,mults,ensure_mult,p){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___47289,mults,ensure_mult,p){
return (function (state_47240){
var state_val_47241 = (state_47240[(1)]);
if((state_val_47241 === (7))){
var inst_47236 = (state_47240[(2)]);
var state_47240__$1 = state_47240;
var statearr_47242_47290 = state_47240__$1;
(statearr_47242_47290[(2)] = inst_47236);

(statearr_47242_47290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (20))){
var state_47240__$1 = state_47240;
var statearr_47243_47291 = state_47240__$1;
(statearr_47243_47291[(2)] = null);

(statearr_47243_47291[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (1))){
var state_47240__$1 = state_47240;
var statearr_47244_47292 = state_47240__$1;
(statearr_47244_47292[(2)] = null);

(statearr_47244_47292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (24))){
var inst_47219 = (state_47240[(7)]);
var inst_47228 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_47219);
var state_47240__$1 = state_47240;
var statearr_47245_47293 = state_47240__$1;
(statearr_47245_47293[(2)] = inst_47228);

(statearr_47245_47293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (4))){
var inst_47171 = (state_47240[(8)]);
var inst_47171__$1 = (state_47240[(2)]);
var inst_47172 = (inst_47171__$1 == null);
var state_47240__$1 = (function (){var statearr_47246 = state_47240;
(statearr_47246[(8)] = inst_47171__$1);

return statearr_47246;
})();
if(cljs.core.truth_(inst_47172)){
var statearr_47247_47294 = state_47240__$1;
(statearr_47247_47294[(1)] = (5));

} else {
var statearr_47248_47295 = state_47240__$1;
(statearr_47248_47295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (15))){
var inst_47213 = (state_47240[(2)]);
var state_47240__$1 = state_47240;
var statearr_47249_47296 = state_47240__$1;
(statearr_47249_47296[(2)] = inst_47213);

(statearr_47249_47296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (21))){
var inst_47233 = (state_47240[(2)]);
var state_47240__$1 = (function (){var statearr_47250 = state_47240;
(statearr_47250[(9)] = inst_47233);

return statearr_47250;
})();
var statearr_47251_47297 = state_47240__$1;
(statearr_47251_47297[(2)] = null);

(statearr_47251_47297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (13))){
var inst_47195 = (state_47240[(10)]);
var inst_47197 = cljs.core.chunked_seq_QMARK_.call(null,inst_47195);
var state_47240__$1 = state_47240;
if(inst_47197){
var statearr_47252_47298 = state_47240__$1;
(statearr_47252_47298[(1)] = (16));

} else {
var statearr_47253_47299 = state_47240__$1;
(statearr_47253_47299[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (22))){
var inst_47225 = (state_47240[(2)]);
var state_47240__$1 = state_47240;
if(cljs.core.truth_(inst_47225)){
var statearr_47254_47300 = state_47240__$1;
(statearr_47254_47300[(1)] = (23));

} else {
var statearr_47255_47301 = state_47240__$1;
(statearr_47255_47301[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (6))){
var inst_47221 = (state_47240[(11)]);
var inst_47171 = (state_47240[(8)]);
var inst_47219 = (state_47240[(7)]);
var inst_47219__$1 = topic_fn.call(null,inst_47171);
var inst_47220 = cljs.core.deref.call(null,mults);
var inst_47221__$1 = cljs.core.get.call(null,inst_47220,inst_47219__$1);
var state_47240__$1 = (function (){var statearr_47256 = state_47240;
(statearr_47256[(11)] = inst_47221__$1);

(statearr_47256[(7)] = inst_47219__$1);

return statearr_47256;
})();
if(cljs.core.truth_(inst_47221__$1)){
var statearr_47257_47302 = state_47240__$1;
(statearr_47257_47302[(1)] = (19));

} else {
var statearr_47258_47303 = state_47240__$1;
(statearr_47258_47303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (25))){
var inst_47230 = (state_47240[(2)]);
var state_47240__$1 = state_47240;
var statearr_47259_47304 = state_47240__$1;
(statearr_47259_47304[(2)] = inst_47230);

(statearr_47259_47304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (17))){
var inst_47195 = (state_47240[(10)]);
var inst_47204 = cljs.core.first.call(null,inst_47195);
var inst_47205 = cljs.core.async.muxch_STAR_.call(null,inst_47204);
var inst_47206 = cljs.core.async.close_BANG_.call(null,inst_47205);
var inst_47207 = cljs.core.next.call(null,inst_47195);
var inst_47181 = inst_47207;
var inst_47182 = null;
var inst_47183 = (0);
var inst_47184 = (0);
var state_47240__$1 = (function (){var statearr_47260 = state_47240;
(statearr_47260[(12)] = inst_47181);

(statearr_47260[(13)] = inst_47184);

(statearr_47260[(14)] = inst_47183);

(statearr_47260[(15)] = inst_47206);

(statearr_47260[(16)] = inst_47182);

return statearr_47260;
})();
var statearr_47261_47305 = state_47240__$1;
(statearr_47261_47305[(2)] = null);

(statearr_47261_47305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (3))){
var inst_47238 = (state_47240[(2)]);
var state_47240__$1 = state_47240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47240__$1,inst_47238);
} else {
if((state_val_47241 === (12))){
var inst_47215 = (state_47240[(2)]);
var state_47240__$1 = state_47240;
var statearr_47262_47306 = state_47240__$1;
(statearr_47262_47306[(2)] = inst_47215);

(statearr_47262_47306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (2))){
var state_47240__$1 = state_47240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47240__$1,(4),ch);
} else {
if((state_val_47241 === (23))){
var state_47240__$1 = state_47240;
var statearr_47263_47307 = state_47240__$1;
(statearr_47263_47307[(2)] = null);

(statearr_47263_47307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (19))){
var inst_47221 = (state_47240[(11)]);
var inst_47171 = (state_47240[(8)]);
var inst_47223 = cljs.core.async.muxch_STAR_.call(null,inst_47221);
var state_47240__$1 = state_47240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47240__$1,(22),inst_47223,inst_47171);
} else {
if((state_val_47241 === (11))){
var inst_47181 = (state_47240[(12)]);
var inst_47195 = (state_47240[(10)]);
var inst_47195__$1 = cljs.core.seq.call(null,inst_47181);
var state_47240__$1 = (function (){var statearr_47264 = state_47240;
(statearr_47264[(10)] = inst_47195__$1);

return statearr_47264;
})();
if(inst_47195__$1){
var statearr_47265_47308 = state_47240__$1;
(statearr_47265_47308[(1)] = (13));

} else {
var statearr_47266_47309 = state_47240__$1;
(statearr_47266_47309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (9))){
var inst_47217 = (state_47240[(2)]);
var state_47240__$1 = state_47240;
var statearr_47267_47310 = state_47240__$1;
(statearr_47267_47310[(2)] = inst_47217);

(statearr_47267_47310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (5))){
var inst_47178 = cljs.core.deref.call(null,mults);
var inst_47179 = cljs.core.vals.call(null,inst_47178);
var inst_47180 = cljs.core.seq.call(null,inst_47179);
var inst_47181 = inst_47180;
var inst_47182 = null;
var inst_47183 = (0);
var inst_47184 = (0);
var state_47240__$1 = (function (){var statearr_47268 = state_47240;
(statearr_47268[(12)] = inst_47181);

(statearr_47268[(13)] = inst_47184);

(statearr_47268[(14)] = inst_47183);

(statearr_47268[(16)] = inst_47182);

return statearr_47268;
})();
var statearr_47269_47311 = state_47240__$1;
(statearr_47269_47311[(2)] = null);

(statearr_47269_47311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (14))){
var state_47240__$1 = state_47240;
var statearr_47273_47312 = state_47240__$1;
(statearr_47273_47312[(2)] = null);

(statearr_47273_47312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (16))){
var inst_47195 = (state_47240[(10)]);
var inst_47199 = cljs.core.chunk_first.call(null,inst_47195);
var inst_47200 = cljs.core.chunk_rest.call(null,inst_47195);
var inst_47201 = cljs.core.count.call(null,inst_47199);
var inst_47181 = inst_47200;
var inst_47182 = inst_47199;
var inst_47183 = inst_47201;
var inst_47184 = (0);
var state_47240__$1 = (function (){var statearr_47274 = state_47240;
(statearr_47274[(12)] = inst_47181);

(statearr_47274[(13)] = inst_47184);

(statearr_47274[(14)] = inst_47183);

(statearr_47274[(16)] = inst_47182);

return statearr_47274;
})();
var statearr_47275_47313 = state_47240__$1;
(statearr_47275_47313[(2)] = null);

(statearr_47275_47313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (10))){
var inst_47181 = (state_47240[(12)]);
var inst_47184 = (state_47240[(13)]);
var inst_47183 = (state_47240[(14)]);
var inst_47182 = (state_47240[(16)]);
var inst_47189 = cljs.core._nth.call(null,inst_47182,inst_47184);
var inst_47190 = cljs.core.async.muxch_STAR_.call(null,inst_47189);
var inst_47191 = cljs.core.async.close_BANG_.call(null,inst_47190);
var inst_47192 = (inst_47184 + (1));
var tmp47270 = inst_47181;
var tmp47271 = inst_47183;
var tmp47272 = inst_47182;
var inst_47181__$1 = tmp47270;
var inst_47182__$1 = tmp47272;
var inst_47183__$1 = tmp47271;
var inst_47184__$1 = inst_47192;
var state_47240__$1 = (function (){var statearr_47276 = state_47240;
(statearr_47276[(12)] = inst_47181__$1);

(statearr_47276[(13)] = inst_47184__$1);

(statearr_47276[(14)] = inst_47183__$1);

(statearr_47276[(16)] = inst_47182__$1);

(statearr_47276[(17)] = inst_47191);

return statearr_47276;
})();
var statearr_47277_47314 = state_47240__$1;
(statearr_47277_47314[(2)] = null);

(statearr_47277_47314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (18))){
var inst_47210 = (state_47240[(2)]);
var state_47240__$1 = state_47240;
var statearr_47278_47315 = state_47240__$1;
(statearr_47278_47315[(2)] = inst_47210);

(statearr_47278_47315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47241 === (8))){
var inst_47184 = (state_47240[(13)]);
var inst_47183 = (state_47240[(14)]);
var inst_47186 = (inst_47184 < inst_47183);
var inst_47187 = inst_47186;
var state_47240__$1 = state_47240;
if(cljs.core.truth_(inst_47187)){
var statearr_47279_47316 = state_47240__$1;
(statearr_47279_47316[(1)] = (10));

} else {
var statearr_47280_47317 = state_47240__$1;
(statearr_47280_47317[(1)] = (11));

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
});})(c__19819__auto___47289,mults,ensure_mult,p))
;
return ((function (switch__19757__auto__,c__19819__auto___47289,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19758__auto__ = null;
var cljs$core$async$state_machine__19758__auto____0 = (function (){
var statearr_47284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47284[(0)] = cljs$core$async$state_machine__19758__auto__);

(statearr_47284[(1)] = (1));

return statearr_47284;
});
var cljs$core$async$state_machine__19758__auto____1 = (function (state_47240){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_47240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e47285){if((e47285 instanceof Object)){
var ex__19761__auto__ = e47285;
var statearr_47286_47318 = state_47240;
(statearr_47286_47318[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47319 = state_47240;
state_47240 = G__47319;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$state_machine__19758__auto__ = function(state_47240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19758__auto____1.call(this,state_47240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19758__auto____0;
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19758__auto____1;
return cljs$core$async$state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___47289,mults,ensure_mult,p))
})();
var state__19821__auto__ = (function (){var statearr_47287 = f__19820__auto__.call(null);
(statearr_47287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___47289);

return statearr_47287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___47289,mults,ensure_mult,p))
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
var G__47321 = arguments.length;
switch (G__47321) {
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
var G__47324 = arguments.length;
switch (G__47324) {
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
var G__47327 = arguments.length;
switch (G__47327) {
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
var c__19819__auto___47397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___47397,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___47397,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47366){
var state_val_47367 = (state_47366[(1)]);
if((state_val_47367 === (7))){
var state_47366__$1 = state_47366;
var statearr_47368_47398 = state_47366__$1;
(statearr_47368_47398[(2)] = null);

(statearr_47368_47398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47367 === (1))){
var state_47366__$1 = state_47366;
var statearr_47369_47399 = state_47366__$1;
(statearr_47369_47399[(2)] = null);

(statearr_47369_47399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47367 === (4))){
var inst_47330 = (state_47366[(7)]);
var inst_47332 = (inst_47330 < cnt);
var state_47366__$1 = state_47366;
if(cljs.core.truth_(inst_47332)){
var statearr_47370_47400 = state_47366__$1;
(statearr_47370_47400[(1)] = (6));

} else {
var statearr_47371_47401 = state_47366__$1;
(statearr_47371_47401[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47367 === (15))){
var inst_47362 = (state_47366[(2)]);
var state_47366__$1 = state_47366;
var statearr_47372_47402 = state_47366__$1;
(statearr_47372_47402[(2)] = inst_47362);

(statearr_47372_47402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47367 === (13))){
var inst_47355 = cljs.core.async.close_BANG_.call(null,out);
var state_47366__$1 = state_47366;
var statearr_47373_47403 = state_47366__$1;
(statearr_47373_47403[(2)] = inst_47355);

(statearr_47373_47403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47367 === (6))){
var state_47366__$1 = state_47366;
var statearr_47374_47404 = state_47366__$1;
(statearr_47374_47404[(2)] = null);

(statearr_47374_47404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47367 === (3))){
var inst_47364 = (state_47366[(2)]);
var state_47366__$1 = state_47366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47366__$1,inst_47364);
} else {
if((state_val_47367 === (12))){
var inst_47352 = (state_47366[(8)]);
var inst_47352__$1 = (state_47366[(2)]);
var inst_47353 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_47352__$1);
var state_47366__$1 = (function (){var statearr_47375 = state_47366;
(statearr_47375[(8)] = inst_47352__$1);

return statearr_47375;
})();
if(cljs.core.truth_(inst_47353)){
var statearr_47376_47405 = state_47366__$1;
(statearr_47376_47405[(1)] = (13));

} else {
var statearr_47377_47406 = state_47366__$1;
(statearr_47377_47406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47367 === (2))){
var inst_47329 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_47330 = (0);
var state_47366__$1 = (function (){var statearr_47378 = state_47366;
(statearr_47378[(7)] = inst_47330);

(statearr_47378[(9)] = inst_47329);

return statearr_47378;
})();
var statearr_47379_47407 = state_47366__$1;
(statearr_47379_47407[(2)] = null);

(statearr_47379_47407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47367 === (11))){
var inst_47330 = (state_47366[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47366,(10),Object,null,(9));
var inst_47339 = chs__$1.call(null,inst_47330);
var inst_47340 = done.call(null,inst_47330);
var inst_47341 = cljs.core.async.take_BANG_.call(null,inst_47339,inst_47340);
var state_47366__$1 = state_47366;
var statearr_47380_47408 = state_47366__$1;
(statearr_47380_47408[(2)] = inst_47341);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47366__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47367 === (9))){
var inst_47330 = (state_47366[(7)]);
var inst_47343 = (state_47366[(2)]);
var inst_47344 = (inst_47330 + (1));
var inst_47330__$1 = inst_47344;
var state_47366__$1 = (function (){var statearr_47381 = state_47366;
(statearr_47381[(7)] = inst_47330__$1);

(statearr_47381[(10)] = inst_47343);

return statearr_47381;
})();
var statearr_47382_47409 = state_47366__$1;
(statearr_47382_47409[(2)] = null);

(statearr_47382_47409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47367 === (5))){
var inst_47350 = (state_47366[(2)]);
var state_47366__$1 = (function (){var statearr_47383 = state_47366;
(statearr_47383[(11)] = inst_47350);

return statearr_47383;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47366__$1,(12),dchan);
} else {
if((state_val_47367 === (14))){
var inst_47352 = (state_47366[(8)]);
var inst_47357 = cljs.core.apply.call(null,f,inst_47352);
var state_47366__$1 = state_47366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47366__$1,(16),out,inst_47357);
} else {
if((state_val_47367 === (16))){
var inst_47359 = (state_47366[(2)]);
var state_47366__$1 = (function (){var statearr_47384 = state_47366;
(statearr_47384[(12)] = inst_47359);

return statearr_47384;
})();
var statearr_47385_47410 = state_47366__$1;
(statearr_47385_47410[(2)] = null);

(statearr_47385_47410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47367 === (10))){
var inst_47334 = (state_47366[(2)]);
var inst_47335 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_47366__$1 = (function (){var statearr_47386 = state_47366;
(statearr_47386[(13)] = inst_47334);

return statearr_47386;
})();
var statearr_47387_47411 = state_47366__$1;
(statearr_47387_47411[(2)] = inst_47335);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47366__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47367 === (8))){
var inst_47348 = (state_47366[(2)]);
var state_47366__$1 = state_47366;
var statearr_47388_47412 = state_47366__$1;
(statearr_47388_47412[(2)] = inst_47348);

(statearr_47388_47412[(1)] = (5));


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
});})(c__19819__auto___47397,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19757__auto__,c__19819__auto___47397,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19758__auto__ = null;
var cljs$core$async$state_machine__19758__auto____0 = (function (){
var statearr_47392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47392[(0)] = cljs$core$async$state_machine__19758__auto__);

(statearr_47392[(1)] = (1));

return statearr_47392;
});
var cljs$core$async$state_machine__19758__auto____1 = (function (state_47366){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_47366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e47393){if((e47393 instanceof Object)){
var ex__19761__auto__ = e47393;
var statearr_47394_47413 = state_47366;
(statearr_47394_47413[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47414 = state_47366;
state_47366 = G__47414;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$state_machine__19758__auto__ = function(state_47366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19758__auto____1.call(this,state_47366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19758__auto____0;
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19758__auto____1;
return cljs$core$async$state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___47397,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19821__auto__ = (function (){var statearr_47395 = f__19820__auto__.call(null);
(statearr_47395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___47397);

return statearr_47395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___47397,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__47417 = arguments.length;
switch (G__47417) {
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
var c__19819__auto___47472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___47472,out){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___47472,out){
return (function (state_47447){
var state_val_47448 = (state_47447[(1)]);
if((state_val_47448 === (7))){
var inst_47427 = (state_47447[(7)]);
var inst_47426 = (state_47447[(8)]);
var inst_47426__$1 = (state_47447[(2)]);
var inst_47427__$1 = cljs.core.nth.call(null,inst_47426__$1,(0),null);
var inst_47428 = cljs.core.nth.call(null,inst_47426__$1,(1),null);
var inst_47429 = (inst_47427__$1 == null);
var state_47447__$1 = (function (){var statearr_47449 = state_47447;
(statearr_47449[(9)] = inst_47428);

(statearr_47449[(7)] = inst_47427__$1);

(statearr_47449[(8)] = inst_47426__$1);

return statearr_47449;
})();
if(cljs.core.truth_(inst_47429)){
var statearr_47450_47473 = state_47447__$1;
(statearr_47450_47473[(1)] = (8));

} else {
var statearr_47451_47474 = state_47447__$1;
(statearr_47451_47474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (1))){
var inst_47418 = cljs.core.vec.call(null,chs);
var inst_47419 = inst_47418;
var state_47447__$1 = (function (){var statearr_47452 = state_47447;
(statearr_47452[(10)] = inst_47419);

return statearr_47452;
})();
var statearr_47453_47475 = state_47447__$1;
(statearr_47453_47475[(2)] = null);

(statearr_47453_47475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (4))){
var inst_47419 = (state_47447[(10)]);
var state_47447__$1 = state_47447;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47447__$1,(7),inst_47419);
} else {
if((state_val_47448 === (6))){
var inst_47443 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47454_47476 = state_47447__$1;
(statearr_47454_47476[(2)] = inst_47443);

(statearr_47454_47476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (3))){
var inst_47445 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47447__$1,inst_47445);
} else {
if((state_val_47448 === (2))){
var inst_47419 = (state_47447[(10)]);
var inst_47421 = cljs.core.count.call(null,inst_47419);
var inst_47422 = (inst_47421 > (0));
var state_47447__$1 = state_47447;
if(cljs.core.truth_(inst_47422)){
var statearr_47456_47477 = state_47447__$1;
(statearr_47456_47477[(1)] = (4));

} else {
var statearr_47457_47478 = state_47447__$1;
(statearr_47457_47478[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (11))){
var inst_47419 = (state_47447[(10)]);
var inst_47436 = (state_47447[(2)]);
var tmp47455 = inst_47419;
var inst_47419__$1 = tmp47455;
var state_47447__$1 = (function (){var statearr_47458 = state_47447;
(statearr_47458[(11)] = inst_47436);

(statearr_47458[(10)] = inst_47419__$1);

return statearr_47458;
})();
var statearr_47459_47479 = state_47447__$1;
(statearr_47459_47479[(2)] = null);

(statearr_47459_47479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (9))){
var inst_47427 = (state_47447[(7)]);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47447__$1,(11),out,inst_47427);
} else {
if((state_val_47448 === (5))){
var inst_47441 = cljs.core.async.close_BANG_.call(null,out);
var state_47447__$1 = state_47447;
var statearr_47460_47480 = state_47447__$1;
(statearr_47460_47480[(2)] = inst_47441);

(statearr_47460_47480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (10))){
var inst_47439 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47461_47481 = state_47447__$1;
(statearr_47461_47481[(2)] = inst_47439);

(statearr_47461_47481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (8))){
var inst_47428 = (state_47447[(9)]);
var inst_47427 = (state_47447[(7)]);
var inst_47419 = (state_47447[(10)]);
var inst_47426 = (state_47447[(8)]);
var inst_47431 = (function (){var cs = inst_47419;
var vec__47424 = inst_47426;
var v = inst_47427;
var c = inst_47428;
return ((function (cs,vec__47424,v,c,inst_47428,inst_47427,inst_47419,inst_47426,state_val_47448,c__19819__auto___47472,out){
return (function (p1__47415_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__47415_SHARP_);
});
;})(cs,vec__47424,v,c,inst_47428,inst_47427,inst_47419,inst_47426,state_val_47448,c__19819__auto___47472,out))
})();
var inst_47432 = cljs.core.filterv.call(null,inst_47431,inst_47419);
var inst_47419__$1 = inst_47432;
var state_47447__$1 = (function (){var statearr_47462 = state_47447;
(statearr_47462[(10)] = inst_47419__$1);

return statearr_47462;
})();
var statearr_47463_47482 = state_47447__$1;
(statearr_47463_47482[(2)] = null);

(statearr_47463_47482[(1)] = (2));


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
});})(c__19819__auto___47472,out))
;
return ((function (switch__19757__auto__,c__19819__auto___47472,out){
return (function() {
var cljs$core$async$state_machine__19758__auto__ = null;
var cljs$core$async$state_machine__19758__auto____0 = (function (){
var statearr_47467 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47467[(0)] = cljs$core$async$state_machine__19758__auto__);

(statearr_47467[(1)] = (1));

return statearr_47467;
});
var cljs$core$async$state_machine__19758__auto____1 = (function (state_47447){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_47447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e47468){if((e47468 instanceof Object)){
var ex__19761__auto__ = e47468;
var statearr_47469_47483 = state_47447;
(statearr_47469_47483[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47484 = state_47447;
state_47447 = G__47484;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$state_machine__19758__auto__ = function(state_47447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19758__auto____1.call(this,state_47447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19758__auto____0;
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19758__auto____1;
return cljs$core$async$state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___47472,out))
})();
var state__19821__auto__ = (function (){var statearr_47470 = f__19820__auto__.call(null);
(statearr_47470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___47472);

return statearr_47470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___47472,out))
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
var G__47486 = arguments.length;
switch (G__47486) {
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
var c__19819__auto___47534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___47534,out){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___47534,out){
return (function (state_47510){
var state_val_47511 = (state_47510[(1)]);
if((state_val_47511 === (7))){
var inst_47492 = (state_47510[(7)]);
var inst_47492__$1 = (state_47510[(2)]);
var inst_47493 = (inst_47492__$1 == null);
var inst_47494 = cljs.core.not.call(null,inst_47493);
var state_47510__$1 = (function (){var statearr_47512 = state_47510;
(statearr_47512[(7)] = inst_47492__$1);

return statearr_47512;
})();
if(inst_47494){
var statearr_47513_47535 = state_47510__$1;
(statearr_47513_47535[(1)] = (8));

} else {
var statearr_47514_47536 = state_47510__$1;
(statearr_47514_47536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (1))){
var inst_47487 = (0);
var state_47510__$1 = (function (){var statearr_47515 = state_47510;
(statearr_47515[(8)] = inst_47487);

return statearr_47515;
})();
var statearr_47516_47537 = state_47510__$1;
(statearr_47516_47537[(2)] = null);

(statearr_47516_47537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (4))){
var state_47510__$1 = state_47510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47510__$1,(7),ch);
} else {
if((state_val_47511 === (6))){
var inst_47505 = (state_47510[(2)]);
var state_47510__$1 = state_47510;
var statearr_47517_47538 = state_47510__$1;
(statearr_47517_47538[(2)] = inst_47505);

(statearr_47517_47538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (3))){
var inst_47507 = (state_47510[(2)]);
var inst_47508 = cljs.core.async.close_BANG_.call(null,out);
var state_47510__$1 = (function (){var statearr_47518 = state_47510;
(statearr_47518[(9)] = inst_47507);

return statearr_47518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47510__$1,inst_47508);
} else {
if((state_val_47511 === (2))){
var inst_47487 = (state_47510[(8)]);
var inst_47489 = (inst_47487 < n);
var state_47510__$1 = state_47510;
if(cljs.core.truth_(inst_47489)){
var statearr_47519_47539 = state_47510__$1;
(statearr_47519_47539[(1)] = (4));

} else {
var statearr_47520_47540 = state_47510__$1;
(statearr_47520_47540[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (11))){
var inst_47487 = (state_47510[(8)]);
var inst_47497 = (state_47510[(2)]);
var inst_47498 = (inst_47487 + (1));
var inst_47487__$1 = inst_47498;
var state_47510__$1 = (function (){var statearr_47521 = state_47510;
(statearr_47521[(10)] = inst_47497);

(statearr_47521[(8)] = inst_47487__$1);

return statearr_47521;
})();
var statearr_47522_47541 = state_47510__$1;
(statearr_47522_47541[(2)] = null);

(statearr_47522_47541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (9))){
var state_47510__$1 = state_47510;
var statearr_47523_47542 = state_47510__$1;
(statearr_47523_47542[(2)] = null);

(statearr_47523_47542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (5))){
var state_47510__$1 = state_47510;
var statearr_47524_47543 = state_47510__$1;
(statearr_47524_47543[(2)] = null);

(statearr_47524_47543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (10))){
var inst_47502 = (state_47510[(2)]);
var state_47510__$1 = state_47510;
var statearr_47525_47544 = state_47510__$1;
(statearr_47525_47544[(2)] = inst_47502);

(statearr_47525_47544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47511 === (8))){
var inst_47492 = (state_47510[(7)]);
var state_47510__$1 = state_47510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47510__$1,(11),out,inst_47492);
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
});})(c__19819__auto___47534,out))
;
return ((function (switch__19757__auto__,c__19819__auto___47534,out){
return (function() {
var cljs$core$async$state_machine__19758__auto__ = null;
var cljs$core$async$state_machine__19758__auto____0 = (function (){
var statearr_47529 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47529[(0)] = cljs$core$async$state_machine__19758__auto__);

(statearr_47529[(1)] = (1));

return statearr_47529;
});
var cljs$core$async$state_machine__19758__auto____1 = (function (state_47510){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_47510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e47530){if((e47530 instanceof Object)){
var ex__19761__auto__ = e47530;
var statearr_47531_47545 = state_47510;
(statearr_47531_47545[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47546 = state_47510;
state_47510 = G__47546;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$state_machine__19758__auto__ = function(state_47510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19758__auto____1.call(this,state_47510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19758__auto____0;
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19758__auto____1;
return cljs$core$async$state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___47534,out))
})();
var state__19821__auto__ = (function (){var statearr_47532 = f__19820__auto__.call(null);
(statearr_47532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___47534);

return statearr_47532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___47534,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t47554 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t47554 = (function (map_LT_,f,ch,meta47555){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47555 = meta47555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t47554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47556,meta47555__$1){
var self__ = this;
var _47556__$1 = this;
return (new cljs.core.async.t47554(self__.map_LT_,self__.f,self__.ch,meta47555__$1));
});

cljs.core.async.t47554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47556){
var self__ = this;
var _47556__$1 = this;
return self__.meta47555;
});

cljs.core.async.t47554.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t47554.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t47554.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t47554.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t47554.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t47557 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t47557 = (function (map_LT_,f,ch,meta47555,_,fn1,meta47558){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47555 = meta47555;
this._ = _;
this.fn1 = fn1;
this.meta47558 = meta47558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t47557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47559,meta47558__$1){
var self__ = this;
var _47559__$1 = this;
return (new cljs.core.async.t47557(self__.map_LT_,self__.f,self__.ch,self__.meta47555,self__._,self__.fn1,meta47558__$1));
});})(___$1))
;

cljs.core.async.t47557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47559){
var self__ = this;
var _47559__$1 = this;
return self__.meta47558;
});})(___$1))
;

cljs.core.async.t47557.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t47557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t47557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47547_SHARP_){
return f1.call(null,(((p1__47547_SHARP_ == null))?null:self__.f.call(null,p1__47547_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t47557.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47555","meta47555",-1849230865,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47558","meta47558",1147673373,null)], null);
});})(___$1))
;

cljs.core.async.t47557.cljs$lang$type = true;

cljs.core.async.t47557.cljs$lang$ctorStr = "cljs.core.async/t47557";

cljs.core.async.t47557.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t47557");
});})(___$1))
;

cljs.core.async.__GT_t47557 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t47557(map_LT___$1,f__$1,ch__$1,meta47555__$1,___$2,fn1__$1,meta47558){
return (new cljs.core.async.t47557(map_LT___$1,f__$1,ch__$1,meta47555__$1,___$2,fn1__$1,meta47558));
});})(___$1))
;

}

return (new cljs.core.async.t47557(self__.map_LT_,self__.f,self__.ch,self__.meta47555,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t47554.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t47554.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t47554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47555","meta47555",-1849230865,null)], null);
});

cljs.core.async.t47554.cljs$lang$type = true;

cljs.core.async.t47554.cljs$lang$ctorStr = "cljs.core.async/t47554";

cljs.core.async.t47554.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t47554");
});

cljs.core.async.__GT_t47554 = (function cljs$core$async$map_LT__$___GT_t47554(map_LT___$1,f__$1,ch__$1,meta47555){
return (new cljs.core.async.t47554(map_LT___$1,f__$1,ch__$1,meta47555));
});

}

return (new cljs.core.async.t47554(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t47563 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t47563 = (function (map_GT_,f,ch,meta47564){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta47564 = meta47564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t47563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47565,meta47564__$1){
var self__ = this;
var _47565__$1 = this;
return (new cljs.core.async.t47563(self__.map_GT_,self__.f,self__.ch,meta47564__$1));
});

cljs.core.async.t47563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47565){
var self__ = this;
var _47565__$1 = this;
return self__.meta47564;
});

cljs.core.async.t47563.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t47563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t47563.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t47563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t47563.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t47563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t47563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47564","meta47564",-1941526687,null)], null);
});

cljs.core.async.t47563.cljs$lang$type = true;

cljs.core.async.t47563.cljs$lang$ctorStr = "cljs.core.async/t47563";

cljs.core.async.t47563.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t47563");
});

cljs.core.async.__GT_t47563 = (function cljs$core$async$map_GT__$___GT_t47563(map_GT___$1,f__$1,ch__$1,meta47564){
return (new cljs.core.async.t47563(map_GT___$1,f__$1,ch__$1,meta47564));
});

}

return (new cljs.core.async.t47563(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t47569 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t47569 = (function (filter_GT_,p,ch,meta47570){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta47570 = meta47570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t47569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47571,meta47570__$1){
var self__ = this;
var _47571__$1 = this;
return (new cljs.core.async.t47569(self__.filter_GT_,self__.p,self__.ch,meta47570__$1));
});

cljs.core.async.t47569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47571){
var self__ = this;
var _47571__$1 = this;
return self__.meta47570;
});

cljs.core.async.t47569.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t47569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t47569.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t47569.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t47569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t47569.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t47569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t47569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47570","meta47570",-429250501,null)], null);
});

cljs.core.async.t47569.cljs$lang$type = true;

cljs.core.async.t47569.cljs$lang$ctorStr = "cljs.core.async/t47569";

cljs.core.async.t47569.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t47569");
});

cljs.core.async.__GT_t47569 = (function cljs$core$async$filter_GT__$___GT_t47569(filter_GT___$1,p__$1,ch__$1,meta47570){
return (new cljs.core.async.t47569(filter_GT___$1,p__$1,ch__$1,meta47570));
});

}

return (new cljs.core.async.t47569(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47573 = arguments.length;
switch (G__47573) {
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
var c__19819__auto___47616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___47616,out){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___47616,out){
return (function (state_47594){
var state_val_47595 = (state_47594[(1)]);
if((state_val_47595 === (7))){
var inst_47590 = (state_47594[(2)]);
var state_47594__$1 = state_47594;
var statearr_47596_47617 = state_47594__$1;
(statearr_47596_47617[(2)] = inst_47590);

(statearr_47596_47617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (1))){
var state_47594__$1 = state_47594;
var statearr_47597_47618 = state_47594__$1;
(statearr_47597_47618[(2)] = null);

(statearr_47597_47618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (4))){
var inst_47576 = (state_47594[(7)]);
var inst_47576__$1 = (state_47594[(2)]);
var inst_47577 = (inst_47576__$1 == null);
var state_47594__$1 = (function (){var statearr_47598 = state_47594;
(statearr_47598[(7)] = inst_47576__$1);

return statearr_47598;
})();
if(cljs.core.truth_(inst_47577)){
var statearr_47599_47619 = state_47594__$1;
(statearr_47599_47619[(1)] = (5));

} else {
var statearr_47600_47620 = state_47594__$1;
(statearr_47600_47620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (6))){
var inst_47576 = (state_47594[(7)]);
var inst_47581 = p.call(null,inst_47576);
var state_47594__$1 = state_47594;
if(cljs.core.truth_(inst_47581)){
var statearr_47601_47621 = state_47594__$1;
(statearr_47601_47621[(1)] = (8));

} else {
var statearr_47602_47622 = state_47594__$1;
(statearr_47602_47622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (3))){
var inst_47592 = (state_47594[(2)]);
var state_47594__$1 = state_47594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47594__$1,inst_47592);
} else {
if((state_val_47595 === (2))){
var state_47594__$1 = state_47594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47594__$1,(4),ch);
} else {
if((state_val_47595 === (11))){
var inst_47584 = (state_47594[(2)]);
var state_47594__$1 = state_47594;
var statearr_47603_47623 = state_47594__$1;
(statearr_47603_47623[(2)] = inst_47584);

(statearr_47603_47623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (9))){
var state_47594__$1 = state_47594;
var statearr_47604_47624 = state_47594__$1;
(statearr_47604_47624[(2)] = null);

(statearr_47604_47624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (5))){
var inst_47579 = cljs.core.async.close_BANG_.call(null,out);
var state_47594__$1 = state_47594;
var statearr_47605_47625 = state_47594__$1;
(statearr_47605_47625[(2)] = inst_47579);

(statearr_47605_47625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (10))){
var inst_47587 = (state_47594[(2)]);
var state_47594__$1 = (function (){var statearr_47606 = state_47594;
(statearr_47606[(8)] = inst_47587);

return statearr_47606;
})();
var statearr_47607_47626 = state_47594__$1;
(statearr_47607_47626[(2)] = null);

(statearr_47607_47626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47595 === (8))){
var inst_47576 = (state_47594[(7)]);
var state_47594__$1 = state_47594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47594__$1,(11),out,inst_47576);
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
});})(c__19819__auto___47616,out))
;
return ((function (switch__19757__auto__,c__19819__auto___47616,out){
return (function() {
var cljs$core$async$state_machine__19758__auto__ = null;
var cljs$core$async$state_machine__19758__auto____0 = (function (){
var statearr_47611 = [null,null,null,null,null,null,null,null,null];
(statearr_47611[(0)] = cljs$core$async$state_machine__19758__auto__);

(statearr_47611[(1)] = (1));

return statearr_47611;
});
var cljs$core$async$state_machine__19758__auto____1 = (function (state_47594){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_47594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e47612){if((e47612 instanceof Object)){
var ex__19761__auto__ = e47612;
var statearr_47613_47627 = state_47594;
(statearr_47613_47627[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47628 = state_47594;
state_47594 = G__47628;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$state_machine__19758__auto__ = function(state_47594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19758__auto____1.call(this,state_47594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19758__auto____0;
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19758__auto____1;
return cljs$core$async$state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___47616,out))
})();
var state__19821__auto__ = (function (){var statearr_47614 = f__19820__auto__.call(null);
(statearr_47614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___47616);

return statearr_47614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___47616,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__47630 = arguments.length;
switch (G__47630) {
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
var c__19819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto__){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto__){
return (function (state_47797){
var state_val_47798 = (state_47797[(1)]);
if((state_val_47798 === (7))){
var inst_47793 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
var statearr_47799_47840 = state_47797__$1;
(statearr_47799_47840[(2)] = inst_47793);

(statearr_47799_47840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (20))){
var inst_47763 = (state_47797[(7)]);
var inst_47774 = (state_47797[(2)]);
var inst_47775 = cljs.core.next.call(null,inst_47763);
var inst_47749 = inst_47775;
var inst_47750 = null;
var inst_47751 = (0);
var inst_47752 = (0);
var state_47797__$1 = (function (){var statearr_47800 = state_47797;
(statearr_47800[(8)] = inst_47749);

(statearr_47800[(9)] = inst_47750);

(statearr_47800[(10)] = inst_47751);

(statearr_47800[(11)] = inst_47752);

(statearr_47800[(12)] = inst_47774);

return statearr_47800;
})();
var statearr_47801_47841 = state_47797__$1;
(statearr_47801_47841[(2)] = null);

(statearr_47801_47841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (1))){
var state_47797__$1 = state_47797;
var statearr_47802_47842 = state_47797__$1;
(statearr_47802_47842[(2)] = null);

(statearr_47802_47842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (4))){
var inst_47738 = (state_47797[(13)]);
var inst_47738__$1 = (state_47797[(2)]);
var inst_47739 = (inst_47738__$1 == null);
var state_47797__$1 = (function (){var statearr_47803 = state_47797;
(statearr_47803[(13)] = inst_47738__$1);

return statearr_47803;
})();
if(cljs.core.truth_(inst_47739)){
var statearr_47804_47843 = state_47797__$1;
(statearr_47804_47843[(1)] = (5));

} else {
var statearr_47805_47844 = state_47797__$1;
(statearr_47805_47844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (15))){
var state_47797__$1 = state_47797;
var statearr_47809_47845 = state_47797__$1;
(statearr_47809_47845[(2)] = null);

(statearr_47809_47845[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (21))){
var state_47797__$1 = state_47797;
var statearr_47810_47846 = state_47797__$1;
(statearr_47810_47846[(2)] = null);

(statearr_47810_47846[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (13))){
var inst_47749 = (state_47797[(8)]);
var inst_47750 = (state_47797[(9)]);
var inst_47751 = (state_47797[(10)]);
var inst_47752 = (state_47797[(11)]);
var inst_47759 = (state_47797[(2)]);
var inst_47760 = (inst_47752 + (1));
var tmp47806 = inst_47749;
var tmp47807 = inst_47750;
var tmp47808 = inst_47751;
var inst_47749__$1 = tmp47806;
var inst_47750__$1 = tmp47807;
var inst_47751__$1 = tmp47808;
var inst_47752__$1 = inst_47760;
var state_47797__$1 = (function (){var statearr_47811 = state_47797;
(statearr_47811[(8)] = inst_47749__$1);

(statearr_47811[(9)] = inst_47750__$1);

(statearr_47811[(14)] = inst_47759);

(statearr_47811[(10)] = inst_47751__$1);

(statearr_47811[(11)] = inst_47752__$1);

return statearr_47811;
})();
var statearr_47812_47847 = state_47797__$1;
(statearr_47812_47847[(2)] = null);

(statearr_47812_47847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (22))){
var state_47797__$1 = state_47797;
var statearr_47813_47848 = state_47797__$1;
(statearr_47813_47848[(2)] = null);

(statearr_47813_47848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (6))){
var inst_47738 = (state_47797[(13)]);
var inst_47747 = f.call(null,inst_47738);
var inst_47748 = cljs.core.seq.call(null,inst_47747);
var inst_47749 = inst_47748;
var inst_47750 = null;
var inst_47751 = (0);
var inst_47752 = (0);
var state_47797__$1 = (function (){var statearr_47814 = state_47797;
(statearr_47814[(8)] = inst_47749);

(statearr_47814[(9)] = inst_47750);

(statearr_47814[(10)] = inst_47751);

(statearr_47814[(11)] = inst_47752);

return statearr_47814;
})();
var statearr_47815_47849 = state_47797__$1;
(statearr_47815_47849[(2)] = null);

(statearr_47815_47849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (17))){
var inst_47763 = (state_47797[(7)]);
var inst_47767 = cljs.core.chunk_first.call(null,inst_47763);
var inst_47768 = cljs.core.chunk_rest.call(null,inst_47763);
var inst_47769 = cljs.core.count.call(null,inst_47767);
var inst_47749 = inst_47768;
var inst_47750 = inst_47767;
var inst_47751 = inst_47769;
var inst_47752 = (0);
var state_47797__$1 = (function (){var statearr_47816 = state_47797;
(statearr_47816[(8)] = inst_47749);

(statearr_47816[(9)] = inst_47750);

(statearr_47816[(10)] = inst_47751);

(statearr_47816[(11)] = inst_47752);

return statearr_47816;
})();
var statearr_47817_47850 = state_47797__$1;
(statearr_47817_47850[(2)] = null);

(statearr_47817_47850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (3))){
var inst_47795 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47797__$1,inst_47795);
} else {
if((state_val_47798 === (12))){
var inst_47783 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
var statearr_47818_47851 = state_47797__$1;
(statearr_47818_47851[(2)] = inst_47783);

(statearr_47818_47851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (2))){
var state_47797__$1 = state_47797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47797__$1,(4),in$);
} else {
if((state_val_47798 === (23))){
var inst_47791 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
var statearr_47819_47852 = state_47797__$1;
(statearr_47819_47852[(2)] = inst_47791);

(statearr_47819_47852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (19))){
var inst_47778 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
var statearr_47820_47853 = state_47797__$1;
(statearr_47820_47853[(2)] = inst_47778);

(statearr_47820_47853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (11))){
var inst_47763 = (state_47797[(7)]);
var inst_47749 = (state_47797[(8)]);
var inst_47763__$1 = cljs.core.seq.call(null,inst_47749);
var state_47797__$1 = (function (){var statearr_47821 = state_47797;
(statearr_47821[(7)] = inst_47763__$1);

return statearr_47821;
})();
if(inst_47763__$1){
var statearr_47822_47854 = state_47797__$1;
(statearr_47822_47854[(1)] = (14));

} else {
var statearr_47823_47855 = state_47797__$1;
(statearr_47823_47855[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (9))){
var inst_47785 = (state_47797[(2)]);
var inst_47786 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47797__$1 = (function (){var statearr_47824 = state_47797;
(statearr_47824[(15)] = inst_47785);

return statearr_47824;
})();
if(cljs.core.truth_(inst_47786)){
var statearr_47825_47856 = state_47797__$1;
(statearr_47825_47856[(1)] = (21));

} else {
var statearr_47826_47857 = state_47797__$1;
(statearr_47826_47857[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (5))){
var inst_47741 = cljs.core.async.close_BANG_.call(null,out);
var state_47797__$1 = state_47797;
var statearr_47827_47858 = state_47797__$1;
(statearr_47827_47858[(2)] = inst_47741);

(statearr_47827_47858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (14))){
var inst_47763 = (state_47797[(7)]);
var inst_47765 = cljs.core.chunked_seq_QMARK_.call(null,inst_47763);
var state_47797__$1 = state_47797;
if(inst_47765){
var statearr_47828_47859 = state_47797__$1;
(statearr_47828_47859[(1)] = (17));

} else {
var statearr_47829_47860 = state_47797__$1;
(statearr_47829_47860[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (16))){
var inst_47781 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
var statearr_47830_47861 = state_47797__$1;
(statearr_47830_47861[(2)] = inst_47781);

(statearr_47830_47861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (10))){
var inst_47750 = (state_47797[(9)]);
var inst_47752 = (state_47797[(11)]);
var inst_47757 = cljs.core._nth.call(null,inst_47750,inst_47752);
var state_47797__$1 = state_47797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47797__$1,(13),out,inst_47757);
} else {
if((state_val_47798 === (18))){
var inst_47763 = (state_47797[(7)]);
var inst_47772 = cljs.core.first.call(null,inst_47763);
var state_47797__$1 = state_47797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47797__$1,(20),out,inst_47772);
} else {
if((state_val_47798 === (8))){
var inst_47751 = (state_47797[(10)]);
var inst_47752 = (state_47797[(11)]);
var inst_47754 = (inst_47752 < inst_47751);
var inst_47755 = inst_47754;
var state_47797__$1 = state_47797;
if(cljs.core.truth_(inst_47755)){
var statearr_47831_47862 = state_47797__$1;
(statearr_47831_47862[(1)] = (10));

} else {
var statearr_47832_47863 = state_47797__$1;
(statearr_47832_47863[(1)] = (11));

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
});})(c__19819__auto__))
;
return ((function (switch__19757__auto__,c__19819__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19758__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19758__auto____0 = (function (){
var statearr_47836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47836[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19758__auto__);

(statearr_47836[(1)] = (1));

return statearr_47836;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19758__auto____1 = (function (state_47797){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_47797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e47837){if((e47837 instanceof Object)){
var ex__19761__auto__ = e47837;
var statearr_47838_47864 = state_47797;
(statearr_47838_47864[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47865 = state_47797;
state_47797 = G__47865;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19758__auto__ = function(state_47797){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19758__auto____1.call(this,state_47797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19758__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19758__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto__))
})();
var state__19821__auto__ = (function (){var statearr_47839 = f__19820__auto__.call(null);
(statearr_47839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto__);

return statearr_47839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto__))
);

return c__19819__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__47867 = arguments.length;
switch (G__47867) {
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
var G__47870 = arguments.length;
switch (G__47870) {
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
var G__47873 = arguments.length;
switch (G__47873) {
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
var c__19819__auto___47923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___47923,out){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___47923,out){
return (function (state_47897){
var state_val_47898 = (state_47897[(1)]);
if((state_val_47898 === (7))){
var inst_47892 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
var statearr_47899_47924 = state_47897__$1;
(statearr_47899_47924[(2)] = inst_47892);

(statearr_47899_47924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (1))){
var inst_47874 = null;
var state_47897__$1 = (function (){var statearr_47900 = state_47897;
(statearr_47900[(7)] = inst_47874);

return statearr_47900;
})();
var statearr_47901_47925 = state_47897__$1;
(statearr_47901_47925[(2)] = null);

(statearr_47901_47925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (4))){
var inst_47877 = (state_47897[(8)]);
var inst_47877__$1 = (state_47897[(2)]);
var inst_47878 = (inst_47877__$1 == null);
var inst_47879 = cljs.core.not.call(null,inst_47878);
var state_47897__$1 = (function (){var statearr_47902 = state_47897;
(statearr_47902[(8)] = inst_47877__$1);

return statearr_47902;
})();
if(inst_47879){
var statearr_47903_47926 = state_47897__$1;
(statearr_47903_47926[(1)] = (5));

} else {
var statearr_47904_47927 = state_47897__$1;
(statearr_47904_47927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (6))){
var state_47897__$1 = state_47897;
var statearr_47905_47928 = state_47897__$1;
(statearr_47905_47928[(2)] = null);

(statearr_47905_47928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (3))){
var inst_47894 = (state_47897[(2)]);
var inst_47895 = cljs.core.async.close_BANG_.call(null,out);
var state_47897__$1 = (function (){var statearr_47906 = state_47897;
(statearr_47906[(9)] = inst_47894);

return statearr_47906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47897__$1,inst_47895);
} else {
if((state_val_47898 === (2))){
var state_47897__$1 = state_47897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47897__$1,(4),ch);
} else {
if((state_val_47898 === (11))){
var inst_47877 = (state_47897[(8)]);
var inst_47886 = (state_47897[(2)]);
var inst_47874 = inst_47877;
var state_47897__$1 = (function (){var statearr_47907 = state_47897;
(statearr_47907[(10)] = inst_47886);

(statearr_47907[(7)] = inst_47874);

return statearr_47907;
})();
var statearr_47908_47929 = state_47897__$1;
(statearr_47908_47929[(2)] = null);

(statearr_47908_47929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (9))){
var inst_47877 = (state_47897[(8)]);
var state_47897__$1 = state_47897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47897__$1,(11),out,inst_47877);
} else {
if((state_val_47898 === (5))){
var inst_47877 = (state_47897[(8)]);
var inst_47874 = (state_47897[(7)]);
var inst_47881 = cljs.core._EQ_.call(null,inst_47877,inst_47874);
var state_47897__$1 = state_47897;
if(inst_47881){
var statearr_47910_47930 = state_47897__$1;
(statearr_47910_47930[(1)] = (8));

} else {
var statearr_47911_47931 = state_47897__$1;
(statearr_47911_47931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (10))){
var inst_47889 = (state_47897[(2)]);
var state_47897__$1 = state_47897;
var statearr_47912_47932 = state_47897__$1;
(statearr_47912_47932[(2)] = inst_47889);

(statearr_47912_47932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47898 === (8))){
var inst_47874 = (state_47897[(7)]);
var tmp47909 = inst_47874;
var inst_47874__$1 = tmp47909;
var state_47897__$1 = (function (){var statearr_47913 = state_47897;
(statearr_47913[(7)] = inst_47874__$1);

return statearr_47913;
})();
var statearr_47914_47933 = state_47897__$1;
(statearr_47914_47933[(2)] = null);

(statearr_47914_47933[(1)] = (2));


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
});})(c__19819__auto___47923,out))
;
return ((function (switch__19757__auto__,c__19819__auto___47923,out){
return (function() {
var cljs$core$async$state_machine__19758__auto__ = null;
var cljs$core$async$state_machine__19758__auto____0 = (function (){
var statearr_47918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47918[(0)] = cljs$core$async$state_machine__19758__auto__);

(statearr_47918[(1)] = (1));

return statearr_47918;
});
var cljs$core$async$state_machine__19758__auto____1 = (function (state_47897){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_47897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e47919){if((e47919 instanceof Object)){
var ex__19761__auto__ = e47919;
var statearr_47920_47934 = state_47897;
(statearr_47920_47934[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47935 = state_47897;
state_47897 = G__47935;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$state_machine__19758__auto__ = function(state_47897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19758__auto____1.call(this,state_47897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19758__auto____0;
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19758__auto____1;
return cljs$core$async$state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___47923,out))
})();
var state__19821__auto__ = (function (){var statearr_47921 = f__19820__auto__.call(null);
(statearr_47921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___47923);

return statearr_47921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___47923,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__47937 = arguments.length;
switch (G__47937) {
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
var c__19819__auto___48006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___48006,out){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___48006,out){
return (function (state_47975){
var state_val_47976 = (state_47975[(1)]);
if((state_val_47976 === (7))){
var inst_47971 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
var statearr_47977_48007 = state_47975__$1;
(statearr_47977_48007[(2)] = inst_47971);

(statearr_47977_48007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (1))){
var inst_47938 = (new Array(n));
var inst_47939 = inst_47938;
var inst_47940 = (0);
var state_47975__$1 = (function (){var statearr_47978 = state_47975;
(statearr_47978[(7)] = inst_47939);

(statearr_47978[(8)] = inst_47940);

return statearr_47978;
})();
var statearr_47979_48008 = state_47975__$1;
(statearr_47979_48008[(2)] = null);

(statearr_47979_48008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (4))){
var inst_47943 = (state_47975[(9)]);
var inst_47943__$1 = (state_47975[(2)]);
var inst_47944 = (inst_47943__$1 == null);
var inst_47945 = cljs.core.not.call(null,inst_47944);
var state_47975__$1 = (function (){var statearr_47980 = state_47975;
(statearr_47980[(9)] = inst_47943__$1);

return statearr_47980;
})();
if(inst_47945){
var statearr_47981_48009 = state_47975__$1;
(statearr_47981_48009[(1)] = (5));

} else {
var statearr_47982_48010 = state_47975__$1;
(statearr_47982_48010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (15))){
var inst_47965 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
var statearr_47983_48011 = state_47975__$1;
(statearr_47983_48011[(2)] = inst_47965);

(statearr_47983_48011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (13))){
var state_47975__$1 = state_47975;
var statearr_47984_48012 = state_47975__$1;
(statearr_47984_48012[(2)] = null);

(statearr_47984_48012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (6))){
var inst_47940 = (state_47975[(8)]);
var inst_47961 = (inst_47940 > (0));
var state_47975__$1 = state_47975;
if(cljs.core.truth_(inst_47961)){
var statearr_47985_48013 = state_47975__$1;
(statearr_47985_48013[(1)] = (12));

} else {
var statearr_47986_48014 = state_47975__$1;
(statearr_47986_48014[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (3))){
var inst_47973 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47975__$1,inst_47973);
} else {
if((state_val_47976 === (12))){
var inst_47939 = (state_47975[(7)]);
var inst_47963 = cljs.core.vec.call(null,inst_47939);
var state_47975__$1 = state_47975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47975__$1,(15),out,inst_47963);
} else {
if((state_val_47976 === (2))){
var state_47975__$1 = state_47975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47975__$1,(4),ch);
} else {
if((state_val_47976 === (11))){
var inst_47955 = (state_47975[(2)]);
var inst_47956 = (new Array(n));
var inst_47939 = inst_47956;
var inst_47940 = (0);
var state_47975__$1 = (function (){var statearr_47987 = state_47975;
(statearr_47987[(10)] = inst_47955);

(statearr_47987[(7)] = inst_47939);

(statearr_47987[(8)] = inst_47940);

return statearr_47987;
})();
var statearr_47988_48015 = state_47975__$1;
(statearr_47988_48015[(2)] = null);

(statearr_47988_48015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (9))){
var inst_47939 = (state_47975[(7)]);
var inst_47953 = cljs.core.vec.call(null,inst_47939);
var state_47975__$1 = state_47975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47975__$1,(11),out,inst_47953);
} else {
if((state_val_47976 === (5))){
var inst_47943 = (state_47975[(9)]);
var inst_47939 = (state_47975[(7)]);
var inst_47948 = (state_47975[(11)]);
var inst_47940 = (state_47975[(8)]);
var inst_47947 = (inst_47939[inst_47940] = inst_47943);
var inst_47948__$1 = (inst_47940 + (1));
var inst_47949 = (inst_47948__$1 < n);
var state_47975__$1 = (function (){var statearr_47989 = state_47975;
(statearr_47989[(12)] = inst_47947);

(statearr_47989[(11)] = inst_47948__$1);

return statearr_47989;
})();
if(cljs.core.truth_(inst_47949)){
var statearr_47990_48016 = state_47975__$1;
(statearr_47990_48016[(1)] = (8));

} else {
var statearr_47991_48017 = state_47975__$1;
(statearr_47991_48017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (14))){
var inst_47968 = (state_47975[(2)]);
var inst_47969 = cljs.core.async.close_BANG_.call(null,out);
var state_47975__$1 = (function (){var statearr_47993 = state_47975;
(statearr_47993[(13)] = inst_47968);

return statearr_47993;
})();
var statearr_47994_48018 = state_47975__$1;
(statearr_47994_48018[(2)] = inst_47969);

(statearr_47994_48018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (10))){
var inst_47959 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
var statearr_47995_48019 = state_47975__$1;
(statearr_47995_48019[(2)] = inst_47959);

(statearr_47995_48019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (8))){
var inst_47939 = (state_47975[(7)]);
var inst_47948 = (state_47975[(11)]);
var tmp47992 = inst_47939;
var inst_47939__$1 = tmp47992;
var inst_47940 = inst_47948;
var state_47975__$1 = (function (){var statearr_47996 = state_47975;
(statearr_47996[(7)] = inst_47939__$1);

(statearr_47996[(8)] = inst_47940);

return statearr_47996;
})();
var statearr_47997_48020 = state_47975__$1;
(statearr_47997_48020[(2)] = null);

(statearr_47997_48020[(1)] = (2));


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
});})(c__19819__auto___48006,out))
;
return ((function (switch__19757__auto__,c__19819__auto___48006,out){
return (function() {
var cljs$core$async$state_machine__19758__auto__ = null;
var cljs$core$async$state_machine__19758__auto____0 = (function (){
var statearr_48001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48001[(0)] = cljs$core$async$state_machine__19758__auto__);

(statearr_48001[(1)] = (1));

return statearr_48001;
});
var cljs$core$async$state_machine__19758__auto____1 = (function (state_47975){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_47975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e48002){if((e48002 instanceof Object)){
var ex__19761__auto__ = e48002;
var statearr_48003_48021 = state_47975;
(statearr_48003_48021[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48022 = state_47975;
state_47975 = G__48022;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$state_machine__19758__auto__ = function(state_47975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19758__auto____1.call(this,state_47975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19758__auto____0;
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19758__auto____1;
return cljs$core$async$state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___48006,out))
})();
var state__19821__auto__ = (function (){var statearr_48004 = f__19820__auto__.call(null);
(statearr_48004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___48006);

return statearr_48004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___48006,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__48024 = arguments.length;
switch (G__48024) {
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
var c__19819__auto___48097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___48097,out){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___48097,out){
return (function (state_48066){
var state_val_48067 = (state_48066[(1)]);
if((state_val_48067 === (7))){
var inst_48062 = (state_48066[(2)]);
var state_48066__$1 = state_48066;
var statearr_48068_48098 = state_48066__$1;
(statearr_48068_48098[(2)] = inst_48062);

(statearr_48068_48098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48067 === (1))){
var inst_48025 = [];
var inst_48026 = inst_48025;
var inst_48027 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48066__$1 = (function (){var statearr_48069 = state_48066;
(statearr_48069[(7)] = inst_48027);

(statearr_48069[(8)] = inst_48026);

return statearr_48069;
})();
var statearr_48070_48099 = state_48066__$1;
(statearr_48070_48099[(2)] = null);

(statearr_48070_48099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48067 === (4))){
var inst_48030 = (state_48066[(9)]);
var inst_48030__$1 = (state_48066[(2)]);
var inst_48031 = (inst_48030__$1 == null);
var inst_48032 = cljs.core.not.call(null,inst_48031);
var state_48066__$1 = (function (){var statearr_48071 = state_48066;
(statearr_48071[(9)] = inst_48030__$1);

return statearr_48071;
})();
if(inst_48032){
var statearr_48072_48100 = state_48066__$1;
(statearr_48072_48100[(1)] = (5));

} else {
var statearr_48073_48101 = state_48066__$1;
(statearr_48073_48101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48067 === (15))){
var inst_48056 = (state_48066[(2)]);
var state_48066__$1 = state_48066;
var statearr_48074_48102 = state_48066__$1;
(statearr_48074_48102[(2)] = inst_48056);

(statearr_48074_48102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48067 === (13))){
var state_48066__$1 = state_48066;
var statearr_48075_48103 = state_48066__$1;
(statearr_48075_48103[(2)] = null);

(statearr_48075_48103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48067 === (6))){
var inst_48026 = (state_48066[(8)]);
var inst_48051 = inst_48026.length;
var inst_48052 = (inst_48051 > (0));
var state_48066__$1 = state_48066;
if(cljs.core.truth_(inst_48052)){
var statearr_48076_48104 = state_48066__$1;
(statearr_48076_48104[(1)] = (12));

} else {
var statearr_48077_48105 = state_48066__$1;
(statearr_48077_48105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48067 === (3))){
var inst_48064 = (state_48066[(2)]);
var state_48066__$1 = state_48066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48066__$1,inst_48064);
} else {
if((state_val_48067 === (12))){
var inst_48026 = (state_48066[(8)]);
var inst_48054 = cljs.core.vec.call(null,inst_48026);
var state_48066__$1 = state_48066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48066__$1,(15),out,inst_48054);
} else {
if((state_val_48067 === (2))){
var state_48066__$1 = state_48066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48066__$1,(4),ch);
} else {
if((state_val_48067 === (11))){
var inst_48034 = (state_48066[(10)]);
var inst_48030 = (state_48066[(9)]);
var inst_48044 = (state_48066[(2)]);
var inst_48045 = [];
var inst_48046 = inst_48045.push(inst_48030);
var inst_48026 = inst_48045;
var inst_48027 = inst_48034;
var state_48066__$1 = (function (){var statearr_48078 = state_48066;
(statearr_48078[(7)] = inst_48027);

(statearr_48078[(11)] = inst_48044);

(statearr_48078[(12)] = inst_48046);

(statearr_48078[(8)] = inst_48026);

return statearr_48078;
})();
var statearr_48079_48106 = state_48066__$1;
(statearr_48079_48106[(2)] = null);

(statearr_48079_48106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48067 === (9))){
var inst_48026 = (state_48066[(8)]);
var inst_48042 = cljs.core.vec.call(null,inst_48026);
var state_48066__$1 = state_48066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48066__$1,(11),out,inst_48042);
} else {
if((state_val_48067 === (5))){
var inst_48034 = (state_48066[(10)]);
var inst_48027 = (state_48066[(7)]);
var inst_48030 = (state_48066[(9)]);
var inst_48034__$1 = f.call(null,inst_48030);
var inst_48035 = cljs.core._EQ_.call(null,inst_48034__$1,inst_48027);
var inst_48036 = cljs.core.keyword_identical_QMARK_.call(null,inst_48027,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48037 = (inst_48035) || (inst_48036);
var state_48066__$1 = (function (){var statearr_48080 = state_48066;
(statearr_48080[(10)] = inst_48034__$1);

return statearr_48080;
})();
if(cljs.core.truth_(inst_48037)){
var statearr_48081_48107 = state_48066__$1;
(statearr_48081_48107[(1)] = (8));

} else {
var statearr_48082_48108 = state_48066__$1;
(statearr_48082_48108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48067 === (14))){
var inst_48059 = (state_48066[(2)]);
var inst_48060 = cljs.core.async.close_BANG_.call(null,out);
var state_48066__$1 = (function (){var statearr_48084 = state_48066;
(statearr_48084[(13)] = inst_48059);

return statearr_48084;
})();
var statearr_48085_48109 = state_48066__$1;
(statearr_48085_48109[(2)] = inst_48060);

(statearr_48085_48109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48067 === (10))){
var inst_48049 = (state_48066[(2)]);
var state_48066__$1 = state_48066;
var statearr_48086_48110 = state_48066__$1;
(statearr_48086_48110[(2)] = inst_48049);

(statearr_48086_48110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48067 === (8))){
var inst_48034 = (state_48066[(10)]);
var inst_48030 = (state_48066[(9)]);
var inst_48026 = (state_48066[(8)]);
var inst_48039 = inst_48026.push(inst_48030);
var tmp48083 = inst_48026;
var inst_48026__$1 = tmp48083;
var inst_48027 = inst_48034;
var state_48066__$1 = (function (){var statearr_48087 = state_48066;
(statearr_48087[(7)] = inst_48027);

(statearr_48087[(14)] = inst_48039);

(statearr_48087[(8)] = inst_48026__$1);

return statearr_48087;
})();
var statearr_48088_48111 = state_48066__$1;
(statearr_48088_48111[(2)] = null);

(statearr_48088_48111[(1)] = (2));


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
});})(c__19819__auto___48097,out))
;
return ((function (switch__19757__auto__,c__19819__auto___48097,out){
return (function() {
var cljs$core$async$state_machine__19758__auto__ = null;
var cljs$core$async$state_machine__19758__auto____0 = (function (){
var statearr_48092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48092[(0)] = cljs$core$async$state_machine__19758__auto__);

(statearr_48092[(1)] = (1));

return statearr_48092;
});
var cljs$core$async$state_machine__19758__auto____1 = (function (state_48066){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_48066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e48093){if((e48093 instanceof Object)){
var ex__19761__auto__ = e48093;
var statearr_48094_48112 = state_48066;
(statearr_48094_48112[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48113 = state_48066;
state_48066 = G__48113;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
cljs$core$async$state_machine__19758__auto__ = function(state_48066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19758__auto____1.call(this,state_48066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19758__auto____0;
cljs$core$async$state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19758__auto____1;
return cljs$core$async$state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___48097,out))
})();
var state__19821__auto__ = (function (){var statearr_48095 = f__19820__auto__.call(null);
(statearr_48095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___48097);

return statearr_48095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___48097,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
