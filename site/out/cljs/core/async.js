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
if(typeof cljs.core.async.t33791 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33791 = (function (fn_handler,f,meta33792){
this.fn_handler = fn_handler;
this.f = f;
this.meta33792 = meta33792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33793,meta33792__$1){
var self__ = this;
var _33793__$1 = this;
return (new cljs.core.async.t33791(self__.fn_handler,self__.f,meta33792__$1));
});

cljs.core.async.t33791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33793){
var self__ = this;
var _33793__$1 = this;
return self__.meta33792;
});

cljs.core.async.t33791.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t33791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t33791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta33792","meta33792",2069483672,null)], null);
});

cljs.core.async.t33791.cljs$lang$type = true;

cljs.core.async.t33791.cljs$lang$ctorStr = "cljs.core.async/t33791";

cljs.core.async.t33791.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t33791");
});

cljs.core.async.__GT_t33791 = (function cljs$core$async$fn_handler_$___GT_t33791(fn_handler__$1,f__$1,meta33792){
return (new cljs.core.async.t33791(fn_handler__$1,f__$1,meta33792));
});

}

return (new cljs.core.async.t33791(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33795 = buff;
if(G__33795){
var bit__16736__auto__ = null;
if(cljs.core.truth_((function (){var or__16062__auto__ = bit__16736__auto__;
if(cljs.core.truth_(or__16062__auto__)){
return or__16062__auto__;
} else {
return G__33795.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__33795.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33795);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33795);
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
var G__33797 = arguments.length;
switch (G__33797) {
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
var G__33800 = arguments.length;
switch (G__33800) {
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
var val_33802 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33802);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33802,ret){
return (function (){
return fn1.call(null,val_33802);
});})(val_33802,ret))
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
var G__33804 = arguments.length;
switch (G__33804) {
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
var n__16947__auto___33806 = n;
var x_33807 = (0);
while(true){
if((x_33807 < n__16947__auto___33806)){
(a[x_33807] = (0));

var G__33808 = (x_33807 + (1));
x_33807 = G__33808;
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

var G__33809 = (i + (1));
i = G__33809;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t33813 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33813 = (function (alt_flag,flag,meta33814){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33814 = meta33814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33815,meta33814__$1){
var self__ = this;
var _33815__$1 = this;
return (new cljs.core.async.t33813(self__.alt_flag,self__.flag,meta33814__$1));
});})(flag))
;

cljs.core.async.t33813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33815){
var self__ = this;
var _33815__$1 = this;
return self__.meta33814;
});})(flag))
;

cljs.core.async.t33813.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t33813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t33813.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33814","meta33814",176940111,null)], null);
});})(flag))
;

cljs.core.async.t33813.cljs$lang$type = true;

cljs.core.async.t33813.cljs$lang$ctorStr = "cljs.core.async/t33813";

cljs.core.async.t33813.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t33813");
});})(flag))
;

cljs.core.async.__GT_t33813 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t33813(alt_flag__$1,flag__$1,meta33814){
return (new cljs.core.async.t33813(alt_flag__$1,flag__$1,meta33814));
});})(flag))
;

}

return (new cljs.core.async.t33813(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t33819 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33819 = (function (alt_handler,flag,cb,meta33820){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33820 = meta33820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33821,meta33820__$1){
var self__ = this;
var _33821__$1 = this;
return (new cljs.core.async.t33819(self__.alt_handler,self__.flag,self__.cb,meta33820__$1));
});

cljs.core.async.t33819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33821){
var self__ = this;
var _33821__$1 = this;
return self__.meta33820;
});

cljs.core.async.t33819.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t33819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t33819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33820","meta33820",1917963837,null)], null);
});

cljs.core.async.t33819.cljs$lang$type = true;

cljs.core.async.t33819.cljs$lang$ctorStr = "cljs.core.async/t33819";

cljs.core.async.t33819.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t33819");
});

cljs.core.async.__GT_t33819 = (function cljs$core$async$alt_handler_$___GT_t33819(alt_handler__$1,flag__$1,cb__$1,meta33820){
return (new cljs.core.async.t33819(alt_handler__$1,flag__$1,cb__$1,meta33820));
});

}

return (new cljs.core.async.t33819(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33822_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33822_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33823_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33823_SHARP_,port], null));
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
var G__33824 = (i + (1));
i = G__33824;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33827){
var map__33828 = p__33827;
var map__33828__$1 = ((cljs.core.seq_QMARK_.call(null,map__33828))?cljs.core.apply.call(null,cljs.core.hash_map,map__33828):map__33828);
var opts = map__33828__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33825){
var G__33826 = cljs.core.first.call(null,seq33825);
var seq33825__$1 = cljs.core.next.call(null,seq33825);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33826,seq33825__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__33830 = arguments.length;
switch (G__33830) {
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
var c__19818__auto___33879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___33879){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___33879){
return (function (state_33854){
var state_val_33855 = (state_33854[(1)]);
if((state_val_33855 === (7))){
var inst_33850 = (state_33854[(2)]);
var state_33854__$1 = state_33854;
var statearr_33856_33880 = state_33854__$1;
(statearr_33856_33880[(2)] = inst_33850);

(statearr_33856_33880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (1))){
var state_33854__$1 = state_33854;
var statearr_33857_33881 = state_33854__$1;
(statearr_33857_33881[(2)] = null);

(statearr_33857_33881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (4))){
var inst_33833 = (state_33854[(7)]);
var inst_33833__$1 = (state_33854[(2)]);
var inst_33834 = (inst_33833__$1 == null);
var state_33854__$1 = (function (){var statearr_33858 = state_33854;
(statearr_33858[(7)] = inst_33833__$1);

return statearr_33858;
})();
if(cljs.core.truth_(inst_33834)){
var statearr_33859_33882 = state_33854__$1;
(statearr_33859_33882[(1)] = (5));

} else {
var statearr_33860_33883 = state_33854__$1;
(statearr_33860_33883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (13))){
var state_33854__$1 = state_33854;
var statearr_33861_33884 = state_33854__$1;
(statearr_33861_33884[(2)] = null);

(statearr_33861_33884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (6))){
var inst_33833 = (state_33854[(7)]);
var state_33854__$1 = state_33854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33854__$1,(11),to,inst_33833);
} else {
if((state_val_33855 === (3))){
var inst_33852 = (state_33854[(2)]);
var state_33854__$1 = state_33854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33854__$1,inst_33852);
} else {
if((state_val_33855 === (12))){
var state_33854__$1 = state_33854;
var statearr_33862_33885 = state_33854__$1;
(statearr_33862_33885[(2)] = null);

(statearr_33862_33885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (2))){
var state_33854__$1 = state_33854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33854__$1,(4),from);
} else {
if((state_val_33855 === (11))){
var inst_33843 = (state_33854[(2)]);
var state_33854__$1 = state_33854;
if(cljs.core.truth_(inst_33843)){
var statearr_33863_33886 = state_33854__$1;
(statearr_33863_33886[(1)] = (12));

} else {
var statearr_33864_33887 = state_33854__$1;
(statearr_33864_33887[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (9))){
var state_33854__$1 = state_33854;
var statearr_33865_33888 = state_33854__$1;
(statearr_33865_33888[(2)] = null);

(statearr_33865_33888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (5))){
var state_33854__$1 = state_33854;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33866_33889 = state_33854__$1;
(statearr_33866_33889[(1)] = (8));

} else {
var statearr_33867_33890 = state_33854__$1;
(statearr_33867_33890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (14))){
var inst_33848 = (state_33854[(2)]);
var state_33854__$1 = state_33854;
var statearr_33868_33891 = state_33854__$1;
(statearr_33868_33891[(2)] = inst_33848);

(statearr_33868_33891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (10))){
var inst_33840 = (state_33854[(2)]);
var state_33854__$1 = state_33854;
var statearr_33869_33892 = state_33854__$1;
(statearr_33869_33892[(2)] = inst_33840);

(statearr_33869_33892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (8))){
var inst_33837 = cljs.core.async.close_BANG_.call(null,to);
var state_33854__$1 = state_33854;
var statearr_33870_33893 = state_33854__$1;
(statearr_33870_33893[(2)] = inst_33837);

(statearr_33870_33893[(1)] = (10));


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
});})(c__19818__auto___33879))
;
return ((function (switch__19756__auto__,c__19818__auto___33879){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_33874 = [null,null,null,null,null,null,null,null];
(statearr_33874[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_33874[(1)] = (1));

return statearr_33874;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_33854){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_33854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e33875){if((e33875 instanceof Object)){
var ex__19760__auto__ = e33875;
var statearr_33876_33894 = state_33854;
(statearr_33876_33894[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33895 = state_33854;
state_33854 = G__33895;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_33854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_33854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___33879))
})();
var state__19820__auto__ = (function (){var statearr_33877 = f__19819__auto__.call(null);
(statearr_33877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___33879);

return statearr_33877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___33879))
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
return (function (p__34079){
var vec__34080 = p__34079;
var v = cljs.core.nth.call(null,vec__34080,(0),null);
var p = cljs.core.nth.call(null,vec__34080,(1),null);
var job = vec__34080;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19818__auto___34262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___34262,res,vec__34080,v,p,job,jobs,results){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___34262,res,vec__34080,v,p,job,jobs,results){
return (function (state_34085){
var state_val_34086 = (state_34085[(1)]);
if((state_val_34086 === (1))){
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34085__$1,(2),res,v);
} else {
if((state_val_34086 === (2))){
var inst_34082 = (state_34085[(2)]);
var inst_34083 = cljs.core.async.close_BANG_.call(null,res);
var state_34085__$1 = (function (){var statearr_34087 = state_34085;
(statearr_34087[(7)] = inst_34082);

return statearr_34087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34085__$1,inst_34083);
} else {
return null;
}
}
});})(c__19818__auto___34262,res,vec__34080,v,p,job,jobs,results))
;
return ((function (switch__19756__auto__,c__19818__auto___34262,res,vec__34080,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_34091 = [null,null,null,null,null,null,null,null];
(statearr_34091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_34091[(1)] = (1));

return statearr_34091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_34085){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_34085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e34092){if((e34092 instanceof Object)){
var ex__19760__auto__ = e34092;
var statearr_34093_34263 = state_34085;
(statearr_34093_34263[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34264 = state_34085;
state_34085 = G__34264;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_34085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_34085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___34262,res,vec__34080,v,p,job,jobs,results))
})();
var state__19820__auto__ = (function (){var statearr_34094 = f__19819__auto__.call(null);
(statearr_34094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___34262);

return statearr_34094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___34262,res,vec__34080,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34095){
var vec__34096 = p__34095;
var v = cljs.core.nth.call(null,vec__34096,(0),null);
var p = cljs.core.nth.call(null,vec__34096,(1),null);
var job = vec__34096;
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
var n__16947__auto___34265 = n;
var __34266 = (0);
while(true){
if((__34266 < n__16947__auto___34265)){
var G__34097_34267 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34097_34267) {
case "compute":
var c__19818__auto___34269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34266,c__19818__auto___34269,G__34097_34267,n__16947__auto___34265,jobs,results,process,async){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (__34266,c__19818__auto___34269,G__34097_34267,n__16947__auto___34265,jobs,results,process,async){
return (function (state_34110){
var state_val_34111 = (state_34110[(1)]);
if((state_val_34111 === (1))){
var state_34110__$1 = state_34110;
var statearr_34112_34270 = state_34110__$1;
(statearr_34112_34270[(2)] = null);

(statearr_34112_34270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (2))){
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34110__$1,(4),jobs);
} else {
if((state_val_34111 === (3))){
var inst_34108 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34110__$1,inst_34108);
} else {
if((state_val_34111 === (4))){
var inst_34100 = (state_34110[(2)]);
var inst_34101 = process.call(null,inst_34100);
var state_34110__$1 = state_34110;
if(cljs.core.truth_(inst_34101)){
var statearr_34113_34271 = state_34110__$1;
(statearr_34113_34271[(1)] = (5));

} else {
var statearr_34114_34272 = state_34110__$1;
(statearr_34114_34272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (5))){
var state_34110__$1 = state_34110;
var statearr_34115_34273 = state_34110__$1;
(statearr_34115_34273[(2)] = null);

(statearr_34115_34273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (6))){
var state_34110__$1 = state_34110;
var statearr_34116_34274 = state_34110__$1;
(statearr_34116_34274[(2)] = null);

(statearr_34116_34274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (7))){
var inst_34106 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34117_34275 = state_34110__$1;
(statearr_34117_34275[(2)] = inst_34106);

(statearr_34117_34275[(1)] = (3));


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
});})(__34266,c__19818__auto___34269,G__34097_34267,n__16947__auto___34265,jobs,results,process,async))
;
return ((function (__34266,switch__19756__auto__,c__19818__auto___34269,G__34097_34267,n__16947__auto___34265,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_34121 = [null,null,null,null,null,null,null];
(statearr_34121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_34121[(1)] = (1));

return statearr_34121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_34110){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_34110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e34122){if((e34122 instanceof Object)){
var ex__19760__auto__ = e34122;
var statearr_34123_34276 = state_34110;
(statearr_34123_34276[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34277 = state_34110;
state_34110 = G__34277;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_34110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_34110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(__34266,switch__19756__auto__,c__19818__auto___34269,G__34097_34267,n__16947__auto___34265,jobs,results,process,async))
})();
var state__19820__auto__ = (function (){var statearr_34124 = f__19819__auto__.call(null);
(statearr_34124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___34269);

return statearr_34124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(__34266,c__19818__auto___34269,G__34097_34267,n__16947__auto___34265,jobs,results,process,async))
);


break;
case "async":
var c__19818__auto___34278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34266,c__19818__auto___34278,G__34097_34267,n__16947__auto___34265,jobs,results,process,async){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (__34266,c__19818__auto___34278,G__34097_34267,n__16947__auto___34265,jobs,results,process,async){
return (function (state_34137){
var state_val_34138 = (state_34137[(1)]);
if((state_val_34138 === (1))){
var state_34137__$1 = state_34137;
var statearr_34139_34279 = state_34137__$1;
(statearr_34139_34279[(2)] = null);

(statearr_34139_34279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (2))){
var state_34137__$1 = state_34137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34137__$1,(4),jobs);
} else {
if((state_val_34138 === (3))){
var inst_34135 = (state_34137[(2)]);
var state_34137__$1 = state_34137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34137__$1,inst_34135);
} else {
if((state_val_34138 === (4))){
var inst_34127 = (state_34137[(2)]);
var inst_34128 = async.call(null,inst_34127);
var state_34137__$1 = state_34137;
if(cljs.core.truth_(inst_34128)){
var statearr_34140_34280 = state_34137__$1;
(statearr_34140_34280[(1)] = (5));

} else {
var statearr_34141_34281 = state_34137__$1;
(statearr_34141_34281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (5))){
var state_34137__$1 = state_34137;
var statearr_34142_34282 = state_34137__$1;
(statearr_34142_34282[(2)] = null);

(statearr_34142_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (6))){
var state_34137__$1 = state_34137;
var statearr_34143_34283 = state_34137__$1;
(statearr_34143_34283[(2)] = null);

(statearr_34143_34283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (7))){
var inst_34133 = (state_34137[(2)]);
var state_34137__$1 = state_34137;
var statearr_34144_34284 = state_34137__$1;
(statearr_34144_34284[(2)] = inst_34133);

(statearr_34144_34284[(1)] = (3));


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
});})(__34266,c__19818__auto___34278,G__34097_34267,n__16947__auto___34265,jobs,results,process,async))
;
return ((function (__34266,switch__19756__auto__,c__19818__auto___34278,G__34097_34267,n__16947__auto___34265,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_34148 = [null,null,null,null,null,null,null];
(statearr_34148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_34148[(1)] = (1));

return statearr_34148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_34137){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_34137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e34149){if((e34149 instanceof Object)){
var ex__19760__auto__ = e34149;
var statearr_34150_34285 = state_34137;
(statearr_34150_34285[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34286 = state_34137;
state_34137 = G__34286;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_34137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_34137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(__34266,switch__19756__auto__,c__19818__auto___34278,G__34097_34267,n__16947__auto___34265,jobs,results,process,async))
})();
var state__19820__auto__ = (function (){var statearr_34151 = f__19819__auto__.call(null);
(statearr_34151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___34278);

return statearr_34151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(__34266,c__19818__auto___34278,G__34097_34267,n__16947__auto___34265,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34287 = (__34266 + (1));
__34266 = G__34287;
continue;
} else {
}
break;
}

var c__19818__auto___34288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___34288,jobs,results,process,async){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___34288,jobs,results,process,async){
return (function (state_34173){
var state_val_34174 = (state_34173[(1)]);
if((state_val_34174 === (1))){
var state_34173__$1 = state_34173;
var statearr_34175_34289 = state_34173__$1;
(statearr_34175_34289[(2)] = null);

(statearr_34175_34289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34174 === (2))){
var state_34173__$1 = state_34173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34173__$1,(4),from);
} else {
if((state_val_34174 === (3))){
var inst_34171 = (state_34173[(2)]);
var state_34173__$1 = state_34173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34173__$1,inst_34171);
} else {
if((state_val_34174 === (4))){
var inst_34154 = (state_34173[(7)]);
var inst_34154__$1 = (state_34173[(2)]);
var inst_34155 = (inst_34154__$1 == null);
var state_34173__$1 = (function (){var statearr_34176 = state_34173;
(statearr_34176[(7)] = inst_34154__$1);

return statearr_34176;
})();
if(cljs.core.truth_(inst_34155)){
var statearr_34177_34290 = state_34173__$1;
(statearr_34177_34290[(1)] = (5));

} else {
var statearr_34178_34291 = state_34173__$1;
(statearr_34178_34291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34174 === (5))){
var inst_34157 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34173__$1 = state_34173;
var statearr_34179_34292 = state_34173__$1;
(statearr_34179_34292[(2)] = inst_34157);

(statearr_34179_34292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34174 === (6))){
var inst_34159 = (state_34173[(8)]);
var inst_34154 = (state_34173[(7)]);
var inst_34159__$1 = cljs.core.async.chan.call(null,(1));
var inst_34160 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34161 = [inst_34154,inst_34159__$1];
var inst_34162 = (new cljs.core.PersistentVector(null,2,(5),inst_34160,inst_34161,null));
var state_34173__$1 = (function (){var statearr_34180 = state_34173;
(statearr_34180[(8)] = inst_34159__$1);

return statearr_34180;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34173__$1,(8),jobs,inst_34162);
} else {
if((state_val_34174 === (7))){
var inst_34169 = (state_34173[(2)]);
var state_34173__$1 = state_34173;
var statearr_34181_34293 = state_34173__$1;
(statearr_34181_34293[(2)] = inst_34169);

(statearr_34181_34293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34174 === (8))){
var inst_34159 = (state_34173[(8)]);
var inst_34164 = (state_34173[(2)]);
var state_34173__$1 = (function (){var statearr_34182 = state_34173;
(statearr_34182[(9)] = inst_34164);

return statearr_34182;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34173__$1,(9),results,inst_34159);
} else {
if((state_val_34174 === (9))){
var inst_34166 = (state_34173[(2)]);
var state_34173__$1 = (function (){var statearr_34183 = state_34173;
(statearr_34183[(10)] = inst_34166);

return statearr_34183;
})();
var statearr_34184_34294 = state_34173__$1;
(statearr_34184_34294[(2)] = null);

(statearr_34184_34294[(1)] = (2));


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
});})(c__19818__auto___34288,jobs,results,process,async))
;
return ((function (switch__19756__auto__,c__19818__auto___34288,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0 = (function (){
var statearr_34188 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_34188[(1)] = (1));

return statearr_34188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_34173){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_34173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e34189){if((e34189 instanceof Object)){
var ex__19760__auto__ = e34189;
var statearr_34190_34295 = state_34173;
(statearr_34190_34295[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34296 = state_34173;
state_34173 = G__34296;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_34173){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_34173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___34288,jobs,results,process,async))
})();
var state__19820__auto__ = (function (){var statearr_34191 = f__19819__auto__.call(null);
(statearr_34191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___34288);

return statearr_34191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___34288,jobs,results,process,async))
);


var c__19818__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto__,jobs,results,process,async){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto__,jobs,results,process,async){
return (function (state_34229){
var state_val_34230 = (state_34229[(1)]);
if((state_val_34230 === (7))){
var inst_34225 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
var statearr_34231_34297 = state_34229__$1;
(statearr_34231_34297[(2)] = inst_34225);

(statearr_34231_34297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (20))){
var state_34229__$1 = state_34229;
var statearr_34232_34298 = state_34229__$1;
(statearr_34232_34298[(2)] = null);

(statearr_34232_34298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (1))){
var state_34229__$1 = state_34229;
var statearr_34233_34299 = state_34229__$1;
(statearr_34233_34299[(2)] = null);

(statearr_34233_34299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (4))){
var inst_34194 = (state_34229[(7)]);
var inst_34194__$1 = (state_34229[(2)]);
var inst_34195 = (inst_34194__$1 == null);
var state_34229__$1 = (function (){var statearr_34234 = state_34229;
(statearr_34234[(7)] = inst_34194__$1);

return statearr_34234;
})();
if(cljs.core.truth_(inst_34195)){
var statearr_34235_34300 = state_34229__$1;
(statearr_34235_34300[(1)] = (5));

} else {
var statearr_34236_34301 = state_34229__$1;
(statearr_34236_34301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (15))){
var inst_34207 = (state_34229[(8)]);
var state_34229__$1 = state_34229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34229__$1,(18),to,inst_34207);
} else {
if((state_val_34230 === (21))){
var inst_34220 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
var statearr_34237_34302 = state_34229__$1;
(statearr_34237_34302[(2)] = inst_34220);

(statearr_34237_34302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (13))){
var inst_34222 = (state_34229[(2)]);
var state_34229__$1 = (function (){var statearr_34238 = state_34229;
(statearr_34238[(9)] = inst_34222);

return statearr_34238;
})();
var statearr_34239_34303 = state_34229__$1;
(statearr_34239_34303[(2)] = null);

(statearr_34239_34303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (6))){
var inst_34194 = (state_34229[(7)]);
var state_34229__$1 = state_34229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34229__$1,(11),inst_34194);
} else {
if((state_val_34230 === (17))){
var inst_34215 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
if(cljs.core.truth_(inst_34215)){
var statearr_34240_34304 = state_34229__$1;
(statearr_34240_34304[(1)] = (19));

} else {
var statearr_34241_34305 = state_34229__$1;
(statearr_34241_34305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (3))){
var inst_34227 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34229__$1,inst_34227);
} else {
if((state_val_34230 === (12))){
var inst_34204 = (state_34229[(10)]);
var state_34229__$1 = state_34229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34229__$1,(14),inst_34204);
} else {
if((state_val_34230 === (2))){
var state_34229__$1 = state_34229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34229__$1,(4),results);
} else {
if((state_val_34230 === (19))){
var state_34229__$1 = state_34229;
var statearr_34242_34306 = state_34229__$1;
(statearr_34242_34306[(2)] = null);

(statearr_34242_34306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (11))){
var inst_34204 = (state_34229[(2)]);
var state_34229__$1 = (function (){var statearr_34243 = state_34229;
(statearr_34243[(10)] = inst_34204);

return statearr_34243;
})();
var statearr_34244_34307 = state_34229__$1;
(statearr_34244_34307[(2)] = null);

(statearr_34244_34307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (9))){
var state_34229__$1 = state_34229;
var statearr_34245_34308 = state_34229__$1;
(statearr_34245_34308[(2)] = null);

(statearr_34245_34308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (5))){
var state_34229__$1 = state_34229;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34246_34309 = state_34229__$1;
(statearr_34246_34309[(1)] = (8));

} else {
var statearr_34247_34310 = state_34229__$1;
(statearr_34247_34310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (14))){
var inst_34207 = (state_34229[(8)]);
var inst_34209 = (state_34229[(11)]);
var inst_34207__$1 = (state_34229[(2)]);
var inst_34208 = (inst_34207__$1 == null);
var inst_34209__$1 = cljs.core.not.call(null,inst_34208);
var state_34229__$1 = (function (){var statearr_34248 = state_34229;
(statearr_34248[(8)] = inst_34207__$1);

(statearr_34248[(11)] = inst_34209__$1);

return statearr_34248;
})();
if(inst_34209__$1){
var statearr_34249_34311 = state_34229__$1;
(statearr_34249_34311[(1)] = (15));

} else {
var statearr_34250_34312 = state_34229__$1;
(statearr_34250_34312[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (16))){
var inst_34209 = (state_34229[(11)]);
var state_34229__$1 = state_34229;
var statearr_34251_34313 = state_34229__$1;
(statearr_34251_34313[(2)] = inst_34209);

(statearr_34251_34313[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (10))){
var inst_34201 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
var statearr_34252_34314 = state_34229__$1;
(statearr_34252_34314[(2)] = inst_34201);

(statearr_34252_34314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (18))){
var inst_34212 = (state_34229[(2)]);
var state_34229__$1 = state_34229;
var statearr_34253_34315 = state_34229__$1;
(statearr_34253_34315[(2)] = inst_34212);

(statearr_34253_34315[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34230 === (8))){
var inst_34198 = cljs.core.async.close_BANG_.call(null,to);
var state_34229__$1 = state_34229;
var statearr_34254_34316 = state_34229__$1;
(statearr_34254_34316[(2)] = inst_34198);

(statearr_34254_34316[(1)] = (10));


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
var statearr_34258 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__);

(statearr_34258[(1)] = (1));

return statearr_34258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1 = (function (state_34229){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_34229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e34259){if((e34259 instanceof Object)){
var ex__19760__auto__ = e34259;
var statearr_34260_34317 = state_34229;
(statearr_34260_34317[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34318 = state_34229;
state_34229 = G__34318;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__ = function(state_34229){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1.call(this,state_34229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__,jobs,results,process,async))
})();
var state__19820__auto__ = (function (){var statearr_34261 = f__19819__auto__.call(null);
(statearr_34261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_34261;
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
var G__34320 = arguments.length;
switch (G__34320) {
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
var G__34323 = arguments.length;
switch (G__34323) {
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
var G__34326 = arguments.length;
switch (G__34326) {
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
var c__19818__auto___34378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___34378,tc,fc){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___34378,tc,fc){
return (function (state_34352){
var state_val_34353 = (state_34352[(1)]);
if((state_val_34353 === (7))){
var inst_34348 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
var statearr_34354_34379 = state_34352__$1;
(statearr_34354_34379[(2)] = inst_34348);

(statearr_34354_34379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (1))){
var state_34352__$1 = state_34352;
var statearr_34355_34380 = state_34352__$1;
(statearr_34355_34380[(2)] = null);

(statearr_34355_34380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (4))){
var inst_34329 = (state_34352[(7)]);
var inst_34329__$1 = (state_34352[(2)]);
var inst_34330 = (inst_34329__$1 == null);
var state_34352__$1 = (function (){var statearr_34356 = state_34352;
(statearr_34356[(7)] = inst_34329__$1);

return statearr_34356;
})();
if(cljs.core.truth_(inst_34330)){
var statearr_34357_34381 = state_34352__$1;
(statearr_34357_34381[(1)] = (5));

} else {
var statearr_34358_34382 = state_34352__$1;
(statearr_34358_34382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (13))){
var state_34352__$1 = state_34352;
var statearr_34359_34383 = state_34352__$1;
(statearr_34359_34383[(2)] = null);

(statearr_34359_34383[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (6))){
var inst_34329 = (state_34352[(7)]);
var inst_34335 = p.call(null,inst_34329);
var state_34352__$1 = state_34352;
if(cljs.core.truth_(inst_34335)){
var statearr_34360_34384 = state_34352__$1;
(statearr_34360_34384[(1)] = (9));

} else {
var statearr_34361_34385 = state_34352__$1;
(statearr_34361_34385[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (3))){
var inst_34350 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34352__$1,inst_34350);
} else {
if((state_val_34353 === (12))){
var state_34352__$1 = state_34352;
var statearr_34362_34386 = state_34352__$1;
(statearr_34362_34386[(2)] = null);

(statearr_34362_34386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (2))){
var state_34352__$1 = state_34352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34352__$1,(4),ch);
} else {
if((state_val_34353 === (11))){
var inst_34329 = (state_34352[(7)]);
var inst_34339 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34352__$1,(8),inst_34339,inst_34329);
} else {
if((state_val_34353 === (9))){
var state_34352__$1 = state_34352;
var statearr_34363_34387 = state_34352__$1;
(statearr_34363_34387[(2)] = tc);

(statearr_34363_34387[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (5))){
var inst_34332 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34333 = cljs.core.async.close_BANG_.call(null,fc);
var state_34352__$1 = (function (){var statearr_34364 = state_34352;
(statearr_34364[(8)] = inst_34332);

return statearr_34364;
})();
var statearr_34365_34388 = state_34352__$1;
(statearr_34365_34388[(2)] = inst_34333);

(statearr_34365_34388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (14))){
var inst_34346 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
var statearr_34366_34389 = state_34352__$1;
(statearr_34366_34389[(2)] = inst_34346);

(statearr_34366_34389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (10))){
var state_34352__$1 = state_34352;
var statearr_34367_34390 = state_34352__$1;
(statearr_34367_34390[(2)] = fc);

(statearr_34367_34390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34353 === (8))){
var inst_34341 = (state_34352[(2)]);
var state_34352__$1 = state_34352;
if(cljs.core.truth_(inst_34341)){
var statearr_34368_34391 = state_34352__$1;
(statearr_34368_34391[(1)] = (12));

} else {
var statearr_34369_34392 = state_34352__$1;
(statearr_34369_34392[(1)] = (13));

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
});})(c__19818__auto___34378,tc,fc))
;
return ((function (switch__19756__auto__,c__19818__auto___34378,tc,fc){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_34373 = [null,null,null,null,null,null,null,null,null];
(statearr_34373[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_34373[(1)] = (1));

return statearr_34373;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_34352){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_34352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e34374){if((e34374 instanceof Object)){
var ex__19760__auto__ = e34374;
var statearr_34375_34393 = state_34352;
(statearr_34375_34393[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34394 = state_34352;
state_34352 = G__34394;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_34352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_34352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___34378,tc,fc))
})();
var state__19820__auto__ = (function (){var statearr_34376 = f__19819__auto__.call(null);
(statearr_34376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___34378);

return statearr_34376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___34378,tc,fc))
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
return (function (state_34441){
var state_val_34442 = (state_34441[(1)]);
if((state_val_34442 === (1))){
var inst_34427 = init;
var state_34441__$1 = (function (){var statearr_34443 = state_34441;
(statearr_34443[(7)] = inst_34427);

return statearr_34443;
})();
var statearr_34444_34459 = state_34441__$1;
(statearr_34444_34459[(2)] = null);

(statearr_34444_34459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (2))){
var state_34441__$1 = state_34441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34441__$1,(4),ch);
} else {
if((state_val_34442 === (3))){
var inst_34439 = (state_34441[(2)]);
var state_34441__$1 = state_34441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34441__$1,inst_34439);
} else {
if((state_val_34442 === (4))){
var inst_34430 = (state_34441[(8)]);
var inst_34430__$1 = (state_34441[(2)]);
var inst_34431 = (inst_34430__$1 == null);
var state_34441__$1 = (function (){var statearr_34445 = state_34441;
(statearr_34445[(8)] = inst_34430__$1);

return statearr_34445;
})();
if(cljs.core.truth_(inst_34431)){
var statearr_34446_34460 = state_34441__$1;
(statearr_34446_34460[(1)] = (5));

} else {
var statearr_34447_34461 = state_34441__$1;
(statearr_34447_34461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (5))){
var inst_34427 = (state_34441[(7)]);
var state_34441__$1 = state_34441;
var statearr_34448_34462 = state_34441__$1;
(statearr_34448_34462[(2)] = inst_34427);

(statearr_34448_34462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (6))){
var inst_34430 = (state_34441[(8)]);
var inst_34427 = (state_34441[(7)]);
var inst_34434 = f.call(null,inst_34427,inst_34430);
var inst_34427__$1 = inst_34434;
var state_34441__$1 = (function (){var statearr_34449 = state_34441;
(statearr_34449[(7)] = inst_34427__$1);

return statearr_34449;
})();
var statearr_34450_34463 = state_34441__$1;
(statearr_34450_34463[(2)] = null);

(statearr_34450_34463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (7))){
var inst_34437 = (state_34441[(2)]);
var state_34441__$1 = state_34441;
var statearr_34451_34464 = state_34441__$1;
(statearr_34451_34464[(2)] = inst_34437);

(statearr_34451_34464[(1)] = (3));


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
var statearr_34455 = [null,null,null,null,null,null,null,null,null];
(statearr_34455[(0)] = cljs$core$async$reduce_$_state_machine__19757__auto__);

(statearr_34455[(1)] = (1));

return statearr_34455;
});
var cljs$core$async$reduce_$_state_machine__19757__auto____1 = (function (state_34441){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_34441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e34456){if((e34456 instanceof Object)){
var ex__19760__auto__ = e34456;
var statearr_34457_34465 = state_34441;
(statearr_34457_34465[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34466 = state_34441;
state_34441 = G__34466;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19757__auto__ = function(state_34441){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19757__auto____1.call(this,state_34441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19757__auto____0;
cljs$core$async$reduce_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19757__auto____1;
return cljs$core$async$reduce_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_34458 = f__19819__auto__.call(null);
(statearr_34458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_34458;
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
var G__34468 = arguments.length;
switch (G__34468) {
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
return (function (state_34493){
var state_val_34494 = (state_34493[(1)]);
if((state_val_34494 === (7))){
var inst_34475 = (state_34493[(2)]);
var state_34493__$1 = state_34493;
var statearr_34495_34519 = state_34493__$1;
(statearr_34495_34519[(2)] = inst_34475);

(statearr_34495_34519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (1))){
var inst_34469 = cljs.core.seq.call(null,coll);
var inst_34470 = inst_34469;
var state_34493__$1 = (function (){var statearr_34496 = state_34493;
(statearr_34496[(7)] = inst_34470);

return statearr_34496;
})();
var statearr_34497_34520 = state_34493__$1;
(statearr_34497_34520[(2)] = null);

(statearr_34497_34520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (4))){
var inst_34470 = (state_34493[(7)]);
var inst_34473 = cljs.core.first.call(null,inst_34470);
var state_34493__$1 = state_34493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34493__$1,(7),ch,inst_34473);
} else {
if((state_val_34494 === (13))){
var inst_34487 = (state_34493[(2)]);
var state_34493__$1 = state_34493;
var statearr_34498_34521 = state_34493__$1;
(statearr_34498_34521[(2)] = inst_34487);

(statearr_34498_34521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (6))){
var inst_34478 = (state_34493[(2)]);
var state_34493__$1 = state_34493;
if(cljs.core.truth_(inst_34478)){
var statearr_34499_34522 = state_34493__$1;
(statearr_34499_34522[(1)] = (8));

} else {
var statearr_34500_34523 = state_34493__$1;
(statearr_34500_34523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (3))){
var inst_34491 = (state_34493[(2)]);
var state_34493__$1 = state_34493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34493__$1,inst_34491);
} else {
if((state_val_34494 === (12))){
var state_34493__$1 = state_34493;
var statearr_34501_34524 = state_34493__$1;
(statearr_34501_34524[(2)] = null);

(statearr_34501_34524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (2))){
var inst_34470 = (state_34493[(7)]);
var state_34493__$1 = state_34493;
if(cljs.core.truth_(inst_34470)){
var statearr_34502_34525 = state_34493__$1;
(statearr_34502_34525[(1)] = (4));

} else {
var statearr_34503_34526 = state_34493__$1;
(statearr_34503_34526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (11))){
var inst_34484 = cljs.core.async.close_BANG_.call(null,ch);
var state_34493__$1 = state_34493;
var statearr_34504_34527 = state_34493__$1;
(statearr_34504_34527[(2)] = inst_34484);

(statearr_34504_34527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (9))){
var state_34493__$1 = state_34493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34505_34528 = state_34493__$1;
(statearr_34505_34528[(1)] = (11));

} else {
var statearr_34506_34529 = state_34493__$1;
(statearr_34506_34529[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (5))){
var inst_34470 = (state_34493[(7)]);
var state_34493__$1 = state_34493;
var statearr_34507_34530 = state_34493__$1;
(statearr_34507_34530[(2)] = inst_34470);

(statearr_34507_34530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (10))){
var inst_34489 = (state_34493[(2)]);
var state_34493__$1 = state_34493;
var statearr_34508_34531 = state_34493__$1;
(statearr_34508_34531[(2)] = inst_34489);

(statearr_34508_34531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (8))){
var inst_34470 = (state_34493[(7)]);
var inst_34480 = cljs.core.next.call(null,inst_34470);
var inst_34470__$1 = inst_34480;
var state_34493__$1 = (function (){var statearr_34509 = state_34493;
(statearr_34509[(7)] = inst_34470__$1);

return statearr_34509;
})();
var statearr_34510_34532 = state_34493__$1;
(statearr_34510_34532[(2)] = null);

(statearr_34510_34532[(1)] = (2));


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
var statearr_34514 = [null,null,null,null,null,null,null,null];
(statearr_34514[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_34514[(1)] = (1));

return statearr_34514;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_34493){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_34493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e34515){if((e34515 instanceof Object)){
var ex__19760__auto__ = e34515;
var statearr_34516_34533 = state_34493;
(statearr_34516_34533[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34534 = state_34493;
state_34493 = G__34534;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_34493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_34493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_34517 = f__19819__auto__.call(null);
(statearr_34517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_34517;
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

cljs.core.async.Mux = (function (){var obj34536 = {};
return obj34536;
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


cljs.core.async.Mult = (function (){var obj34538 = {};
return obj34538;
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
if(typeof cljs.core.async.t34760 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34760 = (function (mult,ch,cs,meta34761){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34761 = meta34761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34762,meta34761__$1){
var self__ = this;
var _34762__$1 = this;
return (new cljs.core.async.t34760(self__.mult,self__.ch,self__.cs,meta34761__$1));
});})(cs))
;

cljs.core.async.t34760.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34762){
var self__ = this;
var _34762__$1 = this;
return self__.meta34761;
});})(cs))
;

cljs.core.async.t34760.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34760.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t34760.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t34760.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t34760.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t34760.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t34760.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34761","meta34761",-1018244246,null)], null);
});})(cs))
;

cljs.core.async.t34760.cljs$lang$type = true;

cljs.core.async.t34760.cljs$lang$ctorStr = "cljs.core.async/t34760";

cljs.core.async.t34760.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t34760");
});})(cs))
;

cljs.core.async.__GT_t34760 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t34760(mult__$1,ch__$1,cs__$1,meta34761){
return (new cljs.core.async.t34760(mult__$1,ch__$1,cs__$1,meta34761));
});})(cs))
;

}

return (new cljs.core.async.t34760(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19818__auto___34981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___34981,cs,m,dchan,dctr,done){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___34981,cs,m,dchan,dctr,done){
return (function (state_34893){
var state_val_34894 = (state_34893[(1)]);
if((state_val_34894 === (7))){
var inst_34889 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34895_34982 = state_34893__$1;
(statearr_34895_34982[(2)] = inst_34889);

(statearr_34895_34982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (20))){
var inst_34794 = (state_34893[(7)]);
var inst_34804 = cljs.core.first.call(null,inst_34794);
var inst_34805 = cljs.core.nth.call(null,inst_34804,(0),null);
var inst_34806 = cljs.core.nth.call(null,inst_34804,(1),null);
var state_34893__$1 = (function (){var statearr_34896 = state_34893;
(statearr_34896[(8)] = inst_34805);

return statearr_34896;
})();
if(cljs.core.truth_(inst_34806)){
var statearr_34897_34983 = state_34893__$1;
(statearr_34897_34983[(1)] = (22));

} else {
var statearr_34898_34984 = state_34893__$1;
(statearr_34898_34984[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (27))){
var inst_34836 = (state_34893[(9)]);
var inst_34765 = (state_34893[(10)]);
var inst_34834 = (state_34893[(11)]);
var inst_34841 = (state_34893[(12)]);
var inst_34841__$1 = cljs.core._nth.call(null,inst_34834,inst_34836);
var inst_34842 = cljs.core.async.put_BANG_.call(null,inst_34841__$1,inst_34765,done);
var state_34893__$1 = (function (){var statearr_34899 = state_34893;
(statearr_34899[(12)] = inst_34841__$1);

return statearr_34899;
})();
if(cljs.core.truth_(inst_34842)){
var statearr_34900_34985 = state_34893__$1;
(statearr_34900_34985[(1)] = (30));

} else {
var statearr_34901_34986 = state_34893__$1;
(statearr_34901_34986[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (1))){
var state_34893__$1 = state_34893;
var statearr_34902_34987 = state_34893__$1;
(statearr_34902_34987[(2)] = null);

(statearr_34902_34987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (24))){
var inst_34794 = (state_34893[(7)]);
var inst_34811 = (state_34893[(2)]);
var inst_34812 = cljs.core.next.call(null,inst_34794);
var inst_34774 = inst_34812;
var inst_34775 = null;
var inst_34776 = (0);
var inst_34777 = (0);
var state_34893__$1 = (function (){var statearr_34903 = state_34893;
(statearr_34903[(13)] = inst_34775);

(statearr_34903[(14)] = inst_34774);

(statearr_34903[(15)] = inst_34811);

(statearr_34903[(16)] = inst_34776);

(statearr_34903[(17)] = inst_34777);

return statearr_34903;
})();
var statearr_34904_34988 = state_34893__$1;
(statearr_34904_34988[(2)] = null);

(statearr_34904_34988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (39))){
var state_34893__$1 = state_34893;
var statearr_34908_34989 = state_34893__$1;
(statearr_34908_34989[(2)] = null);

(statearr_34908_34989[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (4))){
var inst_34765 = (state_34893[(10)]);
var inst_34765__$1 = (state_34893[(2)]);
var inst_34766 = (inst_34765__$1 == null);
var state_34893__$1 = (function (){var statearr_34909 = state_34893;
(statearr_34909[(10)] = inst_34765__$1);

return statearr_34909;
})();
if(cljs.core.truth_(inst_34766)){
var statearr_34910_34990 = state_34893__$1;
(statearr_34910_34990[(1)] = (5));

} else {
var statearr_34911_34991 = state_34893__$1;
(statearr_34911_34991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (15))){
var inst_34775 = (state_34893[(13)]);
var inst_34774 = (state_34893[(14)]);
var inst_34776 = (state_34893[(16)]);
var inst_34777 = (state_34893[(17)]);
var inst_34790 = (state_34893[(2)]);
var inst_34791 = (inst_34777 + (1));
var tmp34905 = inst_34775;
var tmp34906 = inst_34774;
var tmp34907 = inst_34776;
var inst_34774__$1 = tmp34906;
var inst_34775__$1 = tmp34905;
var inst_34776__$1 = tmp34907;
var inst_34777__$1 = inst_34791;
var state_34893__$1 = (function (){var statearr_34912 = state_34893;
(statearr_34912[(13)] = inst_34775__$1);

(statearr_34912[(14)] = inst_34774__$1);

(statearr_34912[(18)] = inst_34790);

(statearr_34912[(16)] = inst_34776__$1);

(statearr_34912[(17)] = inst_34777__$1);

return statearr_34912;
})();
var statearr_34913_34992 = state_34893__$1;
(statearr_34913_34992[(2)] = null);

(statearr_34913_34992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (21))){
var inst_34815 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34917_34993 = state_34893__$1;
(statearr_34917_34993[(2)] = inst_34815);

(statearr_34917_34993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (31))){
var inst_34841 = (state_34893[(12)]);
var inst_34845 = done.call(null,null);
var inst_34846 = cljs.core.async.untap_STAR_.call(null,m,inst_34841);
var state_34893__$1 = (function (){var statearr_34918 = state_34893;
(statearr_34918[(19)] = inst_34845);

return statearr_34918;
})();
var statearr_34919_34994 = state_34893__$1;
(statearr_34919_34994[(2)] = inst_34846);

(statearr_34919_34994[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (32))){
var inst_34835 = (state_34893[(20)]);
var inst_34833 = (state_34893[(21)]);
var inst_34836 = (state_34893[(9)]);
var inst_34834 = (state_34893[(11)]);
var inst_34848 = (state_34893[(2)]);
var inst_34849 = (inst_34836 + (1));
var tmp34914 = inst_34835;
var tmp34915 = inst_34833;
var tmp34916 = inst_34834;
var inst_34833__$1 = tmp34915;
var inst_34834__$1 = tmp34916;
var inst_34835__$1 = tmp34914;
var inst_34836__$1 = inst_34849;
var state_34893__$1 = (function (){var statearr_34920 = state_34893;
(statearr_34920[(22)] = inst_34848);

(statearr_34920[(20)] = inst_34835__$1);

(statearr_34920[(21)] = inst_34833__$1);

(statearr_34920[(9)] = inst_34836__$1);

(statearr_34920[(11)] = inst_34834__$1);

return statearr_34920;
})();
var statearr_34921_34995 = state_34893__$1;
(statearr_34921_34995[(2)] = null);

(statearr_34921_34995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (40))){
var inst_34861 = (state_34893[(23)]);
var inst_34865 = done.call(null,null);
var inst_34866 = cljs.core.async.untap_STAR_.call(null,m,inst_34861);
var state_34893__$1 = (function (){var statearr_34922 = state_34893;
(statearr_34922[(24)] = inst_34865);

return statearr_34922;
})();
var statearr_34923_34996 = state_34893__$1;
(statearr_34923_34996[(2)] = inst_34866);

(statearr_34923_34996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (33))){
var inst_34852 = (state_34893[(25)]);
var inst_34854 = cljs.core.chunked_seq_QMARK_.call(null,inst_34852);
var state_34893__$1 = state_34893;
if(inst_34854){
var statearr_34924_34997 = state_34893__$1;
(statearr_34924_34997[(1)] = (36));

} else {
var statearr_34925_34998 = state_34893__$1;
(statearr_34925_34998[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (13))){
var inst_34784 = (state_34893[(26)]);
var inst_34787 = cljs.core.async.close_BANG_.call(null,inst_34784);
var state_34893__$1 = state_34893;
var statearr_34926_34999 = state_34893__$1;
(statearr_34926_34999[(2)] = inst_34787);

(statearr_34926_34999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (22))){
var inst_34805 = (state_34893[(8)]);
var inst_34808 = cljs.core.async.close_BANG_.call(null,inst_34805);
var state_34893__$1 = state_34893;
var statearr_34927_35000 = state_34893__$1;
(statearr_34927_35000[(2)] = inst_34808);

(statearr_34927_35000[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (36))){
var inst_34852 = (state_34893[(25)]);
var inst_34856 = cljs.core.chunk_first.call(null,inst_34852);
var inst_34857 = cljs.core.chunk_rest.call(null,inst_34852);
var inst_34858 = cljs.core.count.call(null,inst_34856);
var inst_34833 = inst_34857;
var inst_34834 = inst_34856;
var inst_34835 = inst_34858;
var inst_34836 = (0);
var state_34893__$1 = (function (){var statearr_34928 = state_34893;
(statearr_34928[(20)] = inst_34835);

(statearr_34928[(21)] = inst_34833);

(statearr_34928[(9)] = inst_34836);

(statearr_34928[(11)] = inst_34834);

return statearr_34928;
})();
var statearr_34929_35001 = state_34893__$1;
(statearr_34929_35001[(2)] = null);

(statearr_34929_35001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (41))){
var inst_34852 = (state_34893[(25)]);
var inst_34868 = (state_34893[(2)]);
var inst_34869 = cljs.core.next.call(null,inst_34852);
var inst_34833 = inst_34869;
var inst_34834 = null;
var inst_34835 = (0);
var inst_34836 = (0);
var state_34893__$1 = (function (){var statearr_34930 = state_34893;
(statearr_34930[(20)] = inst_34835);

(statearr_34930[(21)] = inst_34833);

(statearr_34930[(27)] = inst_34868);

(statearr_34930[(9)] = inst_34836);

(statearr_34930[(11)] = inst_34834);

return statearr_34930;
})();
var statearr_34931_35002 = state_34893__$1;
(statearr_34931_35002[(2)] = null);

(statearr_34931_35002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (43))){
var state_34893__$1 = state_34893;
var statearr_34932_35003 = state_34893__$1;
(statearr_34932_35003[(2)] = null);

(statearr_34932_35003[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (29))){
var inst_34877 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34933_35004 = state_34893__$1;
(statearr_34933_35004[(2)] = inst_34877);

(statearr_34933_35004[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (44))){
var inst_34886 = (state_34893[(2)]);
var state_34893__$1 = (function (){var statearr_34934 = state_34893;
(statearr_34934[(28)] = inst_34886);

return statearr_34934;
})();
var statearr_34935_35005 = state_34893__$1;
(statearr_34935_35005[(2)] = null);

(statearr_34935_35005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (6))){
var inst_34825 = (state_34893[(29)]);
var inst_34824 = cljs.core.deref.call(null,cs);
var inst_34825__$1 = cljs.core.keys.call(null,inst_34824);
var inst_34826 = cljs.core.count.call(null,inst_34825__$1);
var inst_34827 = cljs.core.reset_BANG_.call(null,dctr,inst_34826);
var inst_34832 = cljs.core.seq.call(null,inst_34825__$1);
var inst_34833 = inst_34832;
var inst_34834 = null;
var inst_34835 = (0);
var inst_34836 = (0);
var state_34893__$1 = (function (){var statearr_34936 = state_34893;
(statearr_34936[(20)] = inst_34835);

(statearr_34936[(21)] = inst_34833);

(statearr_34936[(9)] = inst_34836);

(statearr_34936[(11)] = inst_34834);

(statearr_34936[(30)] = inst_34827);

(statearr_34936[(29)] = inst_34825__$1);

return statearr_34936;
})();
var statearr_34937_35006 = state_34893__$1;
(statearr_34937_35006[(2)] = null);

(statearr_34937_35006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (28))){
var inst_34852 = (state_34893[(25)]);
var inst_34833 = (state_34893[(21)]);
var inst_34852__$1 = cljs.core.seq.call(null,inst_34833);
var state_34893__$1 = (function (){var statearr_34938 = state_34893;
(statearr_34938[(25)] = inst_34852__$1);

return statearr_34938;
})();
if(inst_34852__$1){
var statearr_34939_35007 = state_34893__$1;
(statearr_34939_35007[(1)] = (33));

} else {
var statearr_34940_35008 = state_34893__$1;
(statearr_34940_35008[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (25))){
var inst_34835 = (state_34893[(20)]);
var inst_34836 = (state_34893[(9)]);
var inst_34838 = (inst_34836 < inst_34835);
var inst_34839 = inst_34838;
var state_34893__$1 = state_34893;
if(cljs.core.truth_(inst_34839)){
var statearr_34941_35009 = state_34893__$1;
(statearr_34941_35009[(1)] = (27));

} else {
var statearr_34942_35010 = state_34893__$1;
(statearr_34942_35010[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (34))){
var state_34893__$1 = state_34893;
var statearr_34943_35011 = state_34893__$1;
(statearr_34943_35011[(2)] = null);

(statearr_34943_35011[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (17))){
var state_34893__$1 = state_34893;
var statearr_34944_35012 = state_34893__$1;
(statearr_34944_35012[(2)] = null);

(statearr_34944_35012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (3))){
var inst_34891 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34893__$1,inst_34891);
} else {
if((state_val_34894 === (12))){
var inst_34820 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34945_35013 = state_34893__$1;
(statearr_34945_35013[(2)] = inst_34820);

(statearr_34945_35013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (2))){
var state_34893__$1 = state_34893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34893__$1,(4),ch);
} else {
if((state_val_34894 === (23))){
var state_34893__$1 = state_34893;
var statearr_34946_35014 = state_34893__$1;
(statearr_34946_35014[(2)] = null);

(statearr_34946_35014[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (35))){
var inst_34875 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34947_35015 = state_34893__$1;
(statearr_34947_35015[(2)] = inst_34875);

(statearr_34947_35015[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (19))){
var inst_34794 = (state_34893[(7)]);
var inst_34798 = cljs.core.chunk_first.call(null,inst_34794);
var inst_34799 = cljs.core.chunk_rest.call(null,inst_34794);
var inst_34800 = cljs.core.count.call(null,inst_34798);
var inst_34774 = inst_34799;
var inst_34775 = inst_34798;
var inst_34776 = inst_34800;
var inst_34777 = (0);
var state_34893__$1 = (function (){var statearr_34948 = state_34893;
(statearr_34948[(13)] = inst_34775);

(statearr_34948[(14)] = inst_34774);

(statearr_34948[(16)] = inst_34776);

(statearr_34948[(17)] = inst_34777);

return statearr_34948;
})();
var statearr_34949_35016 = state_34893__$1;
(statearr_34949_35016[(2)] = null);

(statearr_34949_35016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (11))){
var inst_34774 = (state_34893[(14)]);
var inst_34794 = (state_34893[(7)]);
var inst_34794__$1 = cljs.core.seq.call(null,inst_34774);
var state_34893__$1 = (function (){var statearr_34950 = state_34893;
(statearr_34950[(7)] = inst_34794__$1);

return statearr_34950;
})();
if(inst_34794__$1){
var statearr_34951_35017 = state_34893__$1;
(statearr_34951_35017[(1)] = (16));

} else {
var statearr_34952_35018 = state_34893__$1;
(statearr_34952_35018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (9))){
var inst_34822 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34953_35019 = state_34893__$1;
(statearr_34953_35019[(2)] = inst_34822);

(statearr_34953_35019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (5))){
var inst_34772 = cljs.core.deref.call(null,cs);
var inst_34773 = cljs.core.seq.call(null,inst_34772);
var inst_34774 = inst_34773;
var inst_34775 = null;
var inst_34776 = (0);
var inst_34777 = (0);
var state_34893__$1 = (function (){var statearr_34954 = state_34893;
(statearr_34954[(13)] = inst_34775);

(statearr_34954[(14)] = inst_34774);

(statearr_34954[(16)] = inst_34776);

(statearr_34954[(17)] = inst_34777);

return statearr_34954;
})();
var statearr_34955_35020 = state_34893__$1;
(statearr_34955_35020[(2)] = null);

(statearr_34955_35020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (14))){
var state_34893__$1 = state_34893;
var statearr_34956_35021 = state_34893__$1;
(statearr_34956_35021[(2)] = null);

(statearr_34956_35021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (45))){
var inst_34883 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34957_35022 = state_34893__$1;
(statearr_34957_35022[(2)] = inst_34883);

(statearr_34957_35022[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (26))){
var inst_34825 = (state_34893[(29)]);
var inst_34879 = (state_34893[(2)]);
var inst_34880 = cljs.core.seq.call(null,inst_34825);
var state_34893__$1 = (function (){var statearr_34958 = state_34893;
(statearr_34958[(31)] = inst_34879);

return statearr_34958;
})();
if(inst_34880){
var statearr_34959_35023 = state_34893__$1;
(statearr_34959_35023[(1)] = (42));

} else {
var statearr_34960_35024 = state_34893__$1;
(statearr_34960_35024[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (16))){
var inst_34794 = (state_34893[(7)]);
var inst_34796 = cljs.core.chunked_seq_QMARK_.call(null,inst_34794);
var state_34893__$1 = state_34893;
if(inst_34796){
var statearr_34961_35025 = state_34893__$1;
(statearr_34961_35025[(1)] = (19));

} else {
var statearr_34962_35026 = state_34893__$1;
(statearr_34962_35026[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (38))){
var inst_34872 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34963_35027 = state_34893__$1;
(statearr_34963_35027[(2)] = inst_34872);

(statearr_34963_35027[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (30))){
var state_34893__$1 = state_34893;
var statearr_34964_35028 = state_34893__$1;
(statearr_34964_35028[(2)] = null);

(statearr_34964_35028[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (10))){
var inst_34775 = (state_34893[(13)]);
var inst_34777 = (state_34893[(17)]);
var inst_34783 = cljs.core._nth.call(null,inst_34775,inst_34777);
var inst_34784 = cljs.core.nth.call(null,inst_34783,(0),null);
var inst_34785 = cljs.core.nth.call(null,inst_34783,(1),null);
var state_34893__$1 = (function (){var statearr_34965 = state_34893;
(statearr_34965[(26)] = inst_34784);

return statearr_34965;
})();
if(cljs.core.truth_(inst_34785)){
var statearr_34966_35029 = state_34893__$1;
(statearr_34966_35029[(1)] = (13));

} else {
var statearr_34967_35030 = state_34893__$1;
(statearr_34967_35030[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (18))){
var inst_34818 = (state_34893[(2)]);
var state_34893__$1 = state_34893;
var statearr_34968_35031 = state_34893__$1;
(statearr_34968_35031[(2)] = inst_34818);

(statearr_34968_35031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (42))){
var state_34893__$1 = state_34893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34893__$1,(45),dchan);
} else {
if((state_val_34894 === (37))){
var inst_34852 = (state_34893[(25)]);
var inst_34765 = (state_34893[(10)]);
var inst_34861 = (state_34893[(23)]);
var inst_34861__$1 = cljs.core.first.call(null,inst_34852);
var inst_34862 = cljs.core.async.put_BANG_.call(null,inst_34861__$1,inst_34765,done);
var state_34893__$1 = (function (){var statearr_34969 = state_34893;
(statearr_34969[(23)] = inst_34861__$1);

return statearr_34969;
})();
if(cljs.core.truth_(inst_34862)){
var statearr_34970_35032 = state_34893__$1;
(statearr_34970_35032[(1)] = (39));

} else {
var statearr_34971_35033 = state_34893__$1;
(statearr_34971_35033[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34894 === (8))){
var inst_34776 = (state_34893[(16)]);
var inst_34777 = (state_34893[(17)]);
var inst_34779 = (inst_34777 < inst_34776);
var inst_34780 = inst_34779;
var state_34893__$1 = state_34893;
if(cljs.core.truth_(inst_34780)){
var statearr_34972_35034 = state_34893__$1;
(statearr_34972_35034[(1)] = (10));

} else {
var statearr_34973_35035 = state_34893__$1;
(statearr_34973_35035[(1)] = (11));

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
});})(c__19818__auto___34981,cs,m,dchan,dctr,done))
;
return ((function (switch__19756__auto__,c__19818__auto___34981,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19757__auto__ = null;
var cljs$core$async$mult_$_state_machine__19757__auto____0 = (function (){
var statearr_34977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34977[(0)] = cljs$core$async$mult_$_state_machine__19757__auto__);

(statearr_34977[(1)] = (1));

return statearr_34977;
});
var cljs$core$async$mult_$_state_machine__19757__auto____1 = (function (state_34893){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_34893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e34978){if((e34978 instanceof Object)){
var ex__19760__auto__ = e34978;
var statearr_34979_35036 = state_34893;
(statearr_34979_35036[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35037 = state_34893;
state_34893 = G__35037;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19757__auto__ = function(state_34893){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19757__auto____1.call(this,state_34893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19757__auto____0;
cljs$core$async$mult_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19757__auto____1;
return cljs$core$async$mult_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___34981,cs,m,dchan,dctr,done))
})();
var state__19820__auto__ = (function (){var statearr_34980 = f__19819__auto__.call(null);
(statearr_34980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___34981);

return statearr_34980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___34981,cs,m,dchan,dctr,done))
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
var G__35039 = arguments.length;
switch (G__35039) {
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

cljs.core.async.Mix = (function (){var obj35042 = {};
return obj35042;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35047){
var map__35048 = p__35047;
var map__35048__$1 = ((cljs.core.seq_QMARK_.call(null,map__35048))?cljs.core.apply.call(null,cljs.core.hash_map,map__35048):map__35048);
var opts = map__35048__$1;
var statearr_35049_35052 = state;
(statearr_35049_35052[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__35048,map__35048__$1,opts){
return (function (val){
var statearr_35050_35053 = state;
(statearr_35050_35053[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35048,map__35048__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_35051_35054 = state;
(statearr_35051_35054[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35043){
var G__35044 = cljs.core.first.call(null,seq35043);
var seq35043__$1 = cljs.core.next.call(null,seq35043);
var G__35045 = cljs.core.first.call(null,seq35043__$1);
var seq35043__$2 = cljs.core.next.call(null,seq35043__$1);
var G__35046 = cljs.core.first.call(null,seq35043__$2);
var seq35043__$3 = cljs.core.next.call(null,seq35043__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35044,G__35045,G__35046,seq35043__$3);
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
if(typeof cljs.core.async.t35174 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35174 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35175){
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
this.meta35175 = meta35175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35176,meta35175__$1){
var self__ = this;
var _35176__$1 = this;
return (new cljs.core.async.t35174(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35175__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35176){
var self__ = this;
var _35176__$1 = this;
return self__.meta35175;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35174.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35174.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35174.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t35174.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35174.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35174.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35174.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35174.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t35174.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35175","meta35175",1942454418,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35174.cljs$lang$type = true;

cljs.core.async.t35174.cljs$lang$ctorStr = "cljs.core.async/t35174";

cljs.core.async.t35174.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t35174");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t35174 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t35174(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35175){
return (new cljs.core.async.t35174(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35175));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t35174(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19818__auto___35293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___35293,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___35293,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35246){
var state_val_35247 = (state_35246[(1)]);
if((state_val_35247 === (7))){
var inst_35190 = (state_35246[(7)]);
var inst_35195 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35190);
var state_35246__$1 = state_35246;
var statearr_35248_35294 = state_35246__$1;
(statearr_35248_35294[(2)] = inst_35195);

(statearr_35248_35294[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (20))){
var inst_35205 = (state_35246[(8)]);
var state_35246__$1 = state_35246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35246__$1,(23),out,inst_35205);
} else {
if((state_val_35247 === (1))){
var inst_35180 = (state_35246[(9)]);
var inst_35180__$1 = calc_state.call(null);
var inst_35181 = cljs.core.seq_QMARK_.call(null,inst_35180__$1);
var state_35246__$1 = (function (){var statearr_35249 = state_35246;
(statearr_35249[(9)] = inst_35180__$1);

return statearr_35249;
})();
if(inst_35181){
var statearr_35250_35295 = state_35246__$1;
(statearr_35250_35295[(1)] = (2));

} else {
var statearr_35251_35296 = state_35246__$1;
(statearr_35251_35296[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (24))){
var inst_35198 = (state_35246[(10)]);
var inst_35190 = inst_35198;
var state_35246__$1 = (function (){var statearr_35252 = state_35246;
(statearr_35252[(7)] = inst_35190);

return statearr_35252;
})();
var statearr_35253_35297 = state_35246__$1;
(statearr_35253_35297[(2)] = null);

(statearr_35253_35297[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (4))){
var inst_35180 = (state_35246[(9)]);
var inst_35186 = (state_35246[(2)]);
var inst_35187 = cljs.core.get.call(null,inst_35186,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35188 = cljs.core.get.call(null,inst_35186,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35189 = cljs.core.get.call(null,inst_35186,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35190 = inst_35180;
var state_35246__$1 = (function (){var statearr_35254 = state_35246;
(statearr_35254[(11)] = inst_35187);

(statearr_35254[(12)] = inst_35188);

(statearr_35254[(13)] = inst_35189);

(statearr_35254[(7)] = inst_35190);

return statearr_35254;
})();
var statearr_35255_35298 = state_35246__$1;
(statearr_35255_35298[(2)] = null);

(statearr_35255_35298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (15))){
var state_35246__$1 = state_35246;
var statearr_35256_35299 = state_35246__$1;
(statearr_35256_35299[(2)] = null);

(statearr_35256_35299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (21))){
var inst_35198 = (state_35246[(10)]);
var inst_35190 = inst_35198;
var state_35246__$1 = (function (){var statearr_35257 = state_35246;
(statearr_35257[(7)] = inst_35190);

return statearr_35257;
})();
var statearr_35258_35300 = state_35246__$1;
(statearr_35258_35300[(2)] = null);

(statearr_35258_35300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (13))){
var inst_35242 = (state_35246[(2)]);
var state_35246__$1 = state_35246;
var statearr_35259_35301 = state_35246__$1;
(statearr_35259_35301[(2)] = inst_35242);

(statearr_35259_35301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (22))){
var inst_35240 = (state_35246[(2)]);
var state_35246__$1 = state_35246;
var statearr_35260_35302 = state_35246__$1;
(statearr_35260_35302[(2)] = inst_35240);

(statearr_35260_35302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (6))){
var inst_35244 = (state_35246[(2)]);
var state_35246__$1 = state_35246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35246__$1,inst_35244);
} else {
if((state_val_35247 === (25))){
var state_35246__$1 = state_35246;
var statearr_35261_35303 = state_35246__$1;
(statearr_35261_35303[(2)] = null);

(statearr_35261_35303[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (17))){
var inst_35220 = (state_35246[(14)]);
var state_35246__$1 = state_35246;
var statearr_35262_35304 = state_35246__$1;
(statearr_35262_35304[(2)] = inst_35220);

(statearr_35262_35304[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (3))){
var inst_35180 = (state_35246[(9)]);
var state_35246__$1 = state_35246;
var statearr_35263_35305 = state_35246__$1;
(statearr_35263_35305[(2)] = inst_35180);

(statearr_35263_35305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (12))){
var inst_35199 = (state_35246[(15)]);
var inst_35206 = (state_35246[(16)]);
var inst_35220 = (state_35246[(14)]);
var inst_35220__$1 = inst_35199.call(null,inst_35206);
var state_35246__$1 = (function (){var statearr_35264 = state_35246;
(statearr_35264[(14)] = inst_35220__$1);

return statearr_35264;
})();
if(cljs.core.truth_(inst_35220__$1)){
var statearr_35265_35306 = state_35246__$1;
(statearr_35265_35306[(1)] = (17));

} else {
var statearr_35266_35307 = state_35246__$1;
(statearr_35266_35307[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (2))){
var inst_35180 = (state_35246[(9)]);
var inst_35183 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35180);
var state_35246__$1 = state_35246;
var statearr_35267_35308 = state_35246__$1;
(statearr_35267_35308[(2)] = inst_35183);

(statearr_35267_35308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (23))){
var inst_35231 = (state_35246[(2)]);
var state_35246__$1 = state_35246;
if(cljs.core.truth_(inst_35231)){
var statearr_35268_35309 = state_35246__$1;
(statearr_35268_35309[(1)] = (24));

} else {
var statearr_35269_35310 = state_35246__$1;
(statearr_35269_35310[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (19))){
var inst_35228 = (state_35246[(2)]);
var state_35246__$1 = state_35246;
if(cljs.core.truth_(inst_35228)){
var statearr_35270_35311 = state_35246__$1;
(statearr_35270_35311[(1)] = (20));

} else {
var statearr_35271_35312 = state_35246__$1;
(statearr_35271_35312[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (11))){
var inst_35205 = (state_35246[(8)]);
var inst_35211 = (inst_35205 == null);
var state_35246__$1 = state_35246;
if(cljs.core.truth_(inst_35211)){
var statearr_35272_35313 = state_35246__$1;
(statearr_35272_35313[(1)] = (14));

} else {
var statearr_35273_35314 = state_35246__$1;
(statearr_35273_35314[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (9))){
var inst_35198 = (state_35246[(10)]);
var inst_35198__$1 = (state_35246[(2)]);
var inst_35199 = cljs.core.get.call(null,inst_35198__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35200 = cljs.core.get.call(null,inst_35198__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35201 = cljs.core.get.call(null,inst_35198__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35246__$1 = (function (){var statearr_35274 = state_35246;
(statearr_35274[(10)] = inst_35198__$1);

(statearr_35274[(15)] = inst_35199);

(statearr_35274[(17)] = inst_35200);

return statearr_35274;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35246__$1,(10),inst_35201);
} else {
if((state_val_35247 === (5))){
var inst_35190 = (state_35246[(7)]);
var inst_35193 = cljs.core.seq_QMARK_.call(null,inst_35190);
var state_35246__$1 = state_35246;
if(inst_35193){
var statearr_35275_35315 = state_35246__$1;
(statearr_35275_35315[(1)] = (7));

} else {
var statearr_35276_35316 = state_35246__$1;
(statearr_35276_35316[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (14))){
var inst_35206 = (state_35246[(16)]);
var inst_35213 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35206);
var state_35246__$1 = state_35246;
var statearr_35277_35317 = state_35246__$1;
(statearr_35277_35317[(2)] = inst_35213);

(statearr_35277_35317[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (26))){
var inst_35236 = (state_35246[(2)]);
var state_35246__$1 = state_35246;
var statearr_35278_35318 = state_35246__$1;
(statearr_35278_35318[(2)] = inst_35236);

(statearr_35278_35318[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (16))){
var inst_35216 = (state_35246[(2)]);
var inst_35217 = calc_state.call(null);
var inst_35190 = inst_35217;
var state_35246__$1 = (function (){var statearr_35279 = state_35246;
(statearr_35279[(7)] = inst_35190);

(statearr_35279[(18)] = inst_35216);

return statearr_35279;
})();
var statearr_35280_35319 = state_35246__$1;
(statearr_35280_35319[(2)] = null);

(statearr_35280_35319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (10))){
var inst_35205 = (state_35246[(8)]);
var inst_35206 = (state_35246[(16)]);
var inst_35204 = (state_35246[(2)]);
var inst_35205__$1 = cljs.core.nth.call(null,inst_35204,(0),null);
var inst_35206__$1 = cljs.core.nth.call(null,inst_35204,(1),null);
var inst_35207 = (inst_35205__$1 == null);
var inst_35208 = cljs.core._EQ_.call(null,inst_35206__$1,change);
var inst_35209 = (inst_35207) || (inst_35208);
var state_35246__$1 = (function (){var statearr_35281 = state_35246;
(statearr_35281[(8)] = inst_35205__$1);

(statearr_35281[(16)] = inst_35206__$1);

return statearr_35281;
})();
if(cljs.core.truth_(inst_35209)){
var statearr_35282_35320 = state_35246__$1;
(statearr_35282_35320[(1)] = (11));

} else {
var statearr_35283_35321 = state_35246__$1;
(statearr_35283_35321[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (18))){
var inst_35199 = (state_35246[(15)]);
var inst_35200 = (state_35246[(17)]);
var inst_35206 = (state_35246[(16)]);
var inst_35223 = cljs.core.empty_QMARK_.call(null,inst_35199);
var inst_35224 = inst_35200.call(null,inst_35206);
var inst_35225 = cljs.core.not.call(null,inst_35224);
var inst_35226 = (inst_35223) && (inst_35225);
var state_35246__$1 = state_35246;
var statearr_35284_35322 = state_35246__$1;
(statearr_35284_35322[(2)] = inst_35226);

(statearr_35284_35322[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (8))){
var inst_35190 = (state_35246[(7)]);
var state_35246__$1 = state_35246;
var statearr_35285_35323 = state_35246__$1;
(statearr_35285_35323[(2)] = inst_35190);

(statearr_35285_35323[(1)] = (9));


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
});})(c__19818__auto___35293,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19756__auto__,c__19818__auto___35293,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19757__auto__ = null;
var cljs$core$async$mix_$_state_machine__19757__auto____0 = (function (){
var statearr_35289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35289[(0)] = cljs$core$async$mix_$_state_machine__19757__auto__);

(statearr_35289[(1)] = (1));

return statearr_35289;
});
var cljs$core$async$mix_$_state_machine__19757__auto____1 = (function (state_35246){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_35246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e35290){if((e35290 instanceof Object)){
var ex__19760__auto__ = e35290;
var statearr_35291_35324 = state_35246;
(statearr_35291_35324[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35325 = state_35246;
state_35246 = G__35325;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19757__auto__ = function(state_35246){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19757__auto____1.call(this,state_35246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19757__auto____0;
cljs$core$async$mix_$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19757__auto____1;
return cljs$core$async$mix_$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___35293,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19820__auto__ = (function (){var statearr_35292 = f__19819__auto__.call(null);
(statearr_35292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___35293);

return statearr_35292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___35293,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj35327 = {};
return obj35327;
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
var G__35329 = arguments.length;
switch (G__35329) {
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
var G__35333 = arguments.length;
switch (G__35333) {
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
return (function (p1__35331_SHARP_){
if(cljs.core.truth_(p1__35331_SHARP_.call(null,topic))){
return p1__35331_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35331_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16062__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t35334 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35334 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35335){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35335 = meta35335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35336,meta35335__$1){
var self__ = this;
var _35336__$1 = this;
return (new cljs.core.async.t35334(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35335__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t35334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35336){
var self__ = this;
var _35336__$1 = this;
return self__.meta35335;
});})(mults,ensure_mult))
;

cljs.core.async.t35334.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t35334.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t35334.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t35334.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t35334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t35334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t35334.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35335","meta35335",-894003309,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t35334.cljs$lang$type = true;

cljs.core.async.t35334.cljs$lang$ctorStr = "cljs.core.async/t35334";

cljs.core.async.t35334.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t35334");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t35334 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t35334(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35335){
return (new cljs.core.async.t35334(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35335));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t35334(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19818__auto___35457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___35457,mults,ensure_mult,p){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___35457,mults,ensure_mult,p){
return (function (state_35408){
var state_val_35409 = (state_35408[(1)]);
if((state_val_35409 === (7))){
var inst_35404 = (state_35408[(2)]);
var state_35408__$1 = state_35408;
var statearr_35410_35458 = state_35408__$1;
(statearr_35410_35458[(2)] = inst_35404);

(statearr_35410_35458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (20))){
var state_35408__$1 = state_35408;
var statearr_35411_35459 = state_35408__$1;
(statearr_35411_35459[(2)] = null);

(statearr_35411_35459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (1))){
var state_35408__$1 = state_35408;
var statearr_35412_35460 = state_35408__$1;
(statearr_35412_35460[(2)] = null);

(statearr_35412_35460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (24))){
var inst_35387 = (state_35408[(7)]);
var inst_35396 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35387);
var state_35408__$1 = state_35408;
var statearr_35413_35461 = state_35408__$1;
(statearr_35413_35461[(2)] = inst_35396);

(statearr_35413_35461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (4))){
var inst_35339 = (state_35408[(8)]);
var inst_35339__$1 = (state_35408[(2)]);
var inst_35340 = (inst_35339__$1 == null);
var state_35408__$1 = (function (){var statearr_35414 = state_35408;
(statearr_35414[(8)] = inst_35339__$1);

return statearr_35414;
})();
if(cljs.core.truth_(inst_35340)){
var statearr_35415_35462 = state_35408__$1;
(statearr_35415_35462[(1)] = (5));

} else {
var statearr_35416_35463 = state_35408__$1;
(statearr_35416_35463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (15))){
var inst_35381 = (state_35408[(2)]);
var state_35408__$1 = state_35408;
var statearr_35417_35464 = state_35408__$1;
(statearr_35417_35464[(2)] = inst_35381);

(statearr_35417_35464[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (21))){
var inst_35401 = (state_35408[(2)]);
var state_35408__$1 = (function (){var statearr_35418 = state_35408;
(statearr_35418[(9)] = inst_35401);

return statearr_35418;
})();
var statearr_35419_35465 = state_35408__$1;
(statearr_35419_35465[(2)] = null);

(statearr_35419_35465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (13))){
var inst_35363 = (state_35408[(10)]);
var inst_35365 = cljs.core.chunked_seq_QMARK_.call(null,inst_35363);
var state_35408__$1 = state_35408;
if(inst_35365){
var statearr_35420_35466 = state_35408__$1;
(statearr_35420_35466[(1)] = (16));

} else {
var statearr_35421_35467 = state_35408__$1;
(statearr_35421_35467[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (22))){
var inst_35393 = (state_35408[(2)]);
var state_35408__$1 = state_35408;
if(cljs.core.truth_(inst_35393)){
var statearr_35422_35468 = state_35408__$1;
(statearr_35422_35468[(1)] = (23));

} else {
var statearr_35423_35469 = state_35408__$1;
(statearr_35423_35469[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (6))){
var inst_35389 = (state_35408[(11)]);
var inst_35387 = (state_35408[(7)]);
var inst_35339 = (state_35408[(8)]);
var inst_35387__$1 = topic_fn.call(null,inst_35339);
var inst_35388 = cljs.core.deref.call(null,mults);
var inst_35389__$1 = cljs.core.get.call(null,inst_35388,inst_35387__$1);
var state_35408__$1 = (function (){var statearr_35424 = state_35408;
(statearr_35424[(11)] = inst_35389__$1);

(statearr_35424[(7)] = inst_35387__$1);

return statearr_35424;
})();
if(cljs.core.truth_(inst_35389__$1)){
var statearr_35425_35470 = state_35408__$1;
(statearr_35425_35470[(1)] = (19));

} else {
var statearr_35426_35471 = state_35408__$1;
(statearr_35426_35471[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (25))){
var inst_35398 = (state_35408[(2)]);
var state_35408__$1 = state_35408;
var statearr_35427_35472 = state_35408__$1;
(statearr_35427_35472[(2)] = inst_35398);

(statearr_35427_35472[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (17))){
var inst_35363 = (state_35408[(10)]);
var inst_35372 = cljs.core.first.call(null,inst_35363);
var inst_35373 = cljs.core.async.muxch_STAR_.call(null,inst_35372);
var inst_35374 = cljs.core.async.close_BANG_.call(null,inst_35373);
var inst_35375 = cljs.core.next.call(null,inst_35363);
var inst_35349 = inst_35375;
var inst_35350 = null;
var inst_35351 = (0);
var inst_35352 = (0);
var state_35408__$1 = (function (){var statearr_35428 = state_35408;
(statearr_35428[(12)] = inst_35352);

(statearr_35428[(13)] = inst_35349);

(statearr_35428[(14)] = inst_35350);

(statearr_35428[(15)] = inst_35374);

(statearr_35428[(16)] = inst_35351);

return statearr_35428;
})();
var statearr_35429_35473 = state_35408__$1;
(statearr_35429_35473[(2)] = null);

(statearr_35429_35473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (3))){
var inst_35406 = (state_35408[(2)]);
var state_35408__$1 = state_35408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35408__$1,inst_35406);
} else {
if((state_val_35409 === (12))){
var inst_35383 = (state_35408[(2)]);
var state_35408__$1 = state_35408;
var statearr_35430_35474 = state_35408__$1;
(statearr_35430_35474[(2)] = inst_35383);

(statearr_35430_35474[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (2))){
var state_35408__$1 = state_35408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35408__$1,(4),ch);
} else {
if((state_val_35409 === (23))){
var state_35408__$1 = state_35408;
var statearr_35431_35475 = state_35408__$1;
(statearr_35431_35475[(2)] = null);

(statearr_35431_35475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (19))){
var inst_35389 = (state_35408[(11)]);
var inst_35339 = (state_35408[(8)]);
var inst_35391 = cljs.core.async.muxch_STAR_.call(null,inst_35389);
var state_35408__$1 = state_35408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35408__$1,(22),inst_35391,inst_35339);
} else {
if((state_val_35409 === (11))){
var inst_35349 = (state_35408[(13)]);
var inst_35363 = (state_35408[(10)]);
var inst_35363__$1 = cljs.core.seq.call(null,inst_35349);
var state_35408__$1 = (function (){var statearr_35432 = state_35408;
(statearr_35432[(10)] = inst_35363__$1);

return statearr_35432;
})();
if(inst_35363__$1){
var statearr_35433_35476 = state_35408__$1;
(statearr_35433_35476[(1)] = (13));

} else {
var statearr_35434_35477 = state_35408__$1;
(statearr_35434_35477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (9))){
var inst_35385 = (state_35408[(2)]);
var state_35408__$1 = state_35408;
var statearr_35435_35478 = state_35408__$1;
(statearr_35435_35478[(2)] = inst_35385);

(statearr_35435_35478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (5))){
var inst_35346 = cljs.core.deref.call(null,mults);
var inst_35347 = cljs.core.vals.call(null,inst_35346);
var inst_35348 = cljs.core.seq.call(null,inst_35347);
var inst_35349 = inst_35348;
var inst_35350 = null;
var inst_35351 = (0);
var inst_35352 = (0);
var state_35408__$1 = (function (){var statearr_35436 = state_35408;
(statearr_35436[(12)] = inst_35352);

(statearr_35436[(13)] = inst_35349);

(statearr_35436[(14)] = inst_35350);

(statearr_35436[(16)] = inst_35351);

return statearr_35436;
})();
var statearr_35437_35479 = state_35408__$1;
(statearr_35437_35479[(2)] = null);

(statearr_35437_35479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (14))){
var state_35408__$1 = state_35408;
var statearr_35441_35480 = state_35408__$1;
(statearr_35441_35480[(2)] = null);

(statearr_35441_35480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (16))){
var inst_35363 = (state_35408[(10)]);
var inst_35367 = cljs.core.chunk_first.call(null,inst_35363);
var inst_35368 = cljs.core.chunk_rest.call(null,inst_35363);
var inst_35369 = cljs.core.count.call(null,inst_35367);
var inst_35349 = inst_35368;
var inst_35350 = inst_35367;
var inst_35351 = inst_35369;
var inst_35352 = (0);
var state_35408__$1 = (function (){var statearr_35442 = state_35408;
(statearr_35442[(12)] = inst_35352);

(statearr_35442[(13)] = inst_35349);

(statearr_35442[(14)] = inst_35350);

(statearr_35442[(16)] = inst_35351);

return statearr_35442;
})();
var statearr_35443_35481 = state_35408__$1;
(statearr_35443_35481[(2)] = null);

(statearr_35443_35481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (10))){
var inst_35352 = (state_35408[(12)]);
var inst_35349 = (state_35408[(13)]);
var inst_35350 = (state_35408[(14)]);
var inst_35351 = (state_35408[(16)]);
var inst_35357 = cljs.core._nth.call(null,inst_35350,inst_35352);
var inst_35358 = cljs.core.async.muxch_STAR_.call(null,inst_35357);
var inst_35359 = cljs.core.async.close_BANG_.call(null,inst_35358);
var inst_35360 = (inst_35352 + (1));
var tmp35438 = inst_35349;
var tmp35439 = inst_35350;
var tmp35440 = inst_35351;
var inst_35349__$1 = tmp35438;
var inst_35350__$1 = tmp35439;
var inst_35351__$1 = tmp35440;
var inst_35352__$1 = inst_35360;
var state_35408__$1 = (function (){var statearr_35444 = state_35408;
(statearr_35444[(12)] = inst_35352__$1);

(statearr_35444[(13)] = inst_35349__$1);

(statearr_35444[(14)] = inst_35350__$1);

(statearr_35444[(17)] = inst_35359);

(statearr_35444[(16)] = inst_35351__$1);

return statearr_35444;
})();
var statearr_35445_35482 = state_35408__$1;
(statearr_35445_35482[(2)] = null);

(statearr_35445_35482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (18))){
var inst_35378 = (state_35408[(2)]);
var state_35408__$1 = state_35408;
var statearr_35446_35483 = state_35408__$1;
(statearr_35446_35483[(2)] = inst_35378);

(statearr_35446_35483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35409 === (8))){
var inst_35352 = (state_35408[(12)]);
var inst_35351 = (state_35408[(16)]);
var inst_35354 = (inst_35352 < inst_35351);
var inst_35355 = inst_35354;
var state_35408__$1 = state_35408;
if(cljs.core.truth_(inst_35355)){
var statearr_35447_35484 = state_35408__$1;
(statearr_35447_35484[(1)] = (10));

} else {
var statearr_35448_35485 = state_35408__$1;
(statearr_35448_35485[(1)] = (11));

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
});})(c__19818__auto___35457,mults,ensure_mult,p))
;
return ((function (switch__19756__auto__,c__19818__auto___35457,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_35452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35452[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_35452[(1)] = (1));

return statearr_35452;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_35408){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_35408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e35453){if((e35453 instanceof Object)){
var ex__19760__auto__ = e35453;
var statearr_35454_35486 = state_35408;
(statearr_35454_35486[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35487 = state_35408;
state_35408 = G__35487;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_35408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_35408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___35457,mults,ensure_mult,p))
})();
var state__19820__auto__ = (function (){var statearr_35455 = f__19819__auto__.call(null);
(statearr_35455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___35457);

return statearr_35455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___35457,mults,ensure_mult,p))
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
var G__35489 = arguments.length;
switch (G__35489) {
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
var G__35492 = arguments.length;
switch (G__35492) {
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
var G__35495 = arguments.length;
switch (G__35495) {
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
var c__19818__auto___35565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___35565,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___35565,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35534){
var state_val_35535 = (state_35534[(1)]);
if((state_val_35535 === (7))){
var state_35534__$1 = state_35534;
var statearr_35536_35566 = state_35534__$1;
(statearr_35536_35566[(2)] = null);

(statearr_35536_35566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35535 === (1))){
var state_35534__$1 = state_35534;
var statearr_35537_35567 = state_35534__$1;
(statearr_35537_35567[(2)] = null);

(statearr_35537_35567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35535 === (4))){
var inst_35498 = (state_35534[(7)]);
var inst_35500 = (inst_35498 < cnt);
var state_35534__$1 = state_35534;
if(cljs.core.truth_(inst_35500)){
var statearr_35538_35568 = state_35534__$1;
(statearr_35538_35568[(1)] = (6));

} else {
var statearr_35539_35569 = state_35534__$1;
(statearr_35539_35569[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35535 === (15))){
var inst_35530 = (state_35534[(2)]);
var state_35534__$1 = state_35534;
var statearr_35540_35570 = state_35534__$1;
(statearr_35540_35570[(2)] = inst_35530);

(statearr_35540_35570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35535 === (13))){
var inst_35523 = cljs.core.async.close_BANG_.call(null,out);
var state_35534__$1 = state_35534;
var statearr_35541_35571 = state_35534__$1;
(statearr_35541_35571[(2)] = inst_35523);

(statearr_35541_35571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35535 === (6))){
var state_35534__$1 = state_35534;
var statearr_35542_35572 = state_35534__$1;
(statearr_35542_35572[(2)] = null);

(statearr_35542_35572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35535 === (3))){
var inst_35532 = (state_35534[(2)]);
var state_35534__$1 = state_35534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35534__$1,inst_35532);
} else {
if((state_val_35535 === (12))){
var inst_35520 = (state_35534[(8)]);
var inst_35520__$1 = (state_35534[(2)]);
var inst_35521 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35520__$1);
var state_35534__$1 = (function (){var statearr_35543 = state_35534;
(statearr_35543[(8)] = inst_35520__$1);

return statearr_35543;
})();
if(cljs.core.truth_(inst_35521)){
var statearr_35544_35573 = state_35534__$1;
(statearr_35544_35573[(1)] = (13));

} else {
var statearr_35545_35574 = state_35534__$1;
(statearr_35545_35574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35535 === (2))){
var inst_35497 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35498 = (0);
var state_35534__$1 = (function (){var statearr_35546 = state_35534;
(statearr_35546[(9)] = inst_35497);

(statearr_35546[(7)] = inst_35498);

return statearr_35546;
})();
var statearr_35547_35575 = state_35534__$1;
(statearr_35547_35575[(2)] = null);

(statearr_35547_35575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35535 === (11))){
var inst_35498 = (state_35534[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35534,(10),Object,null,(9));
var inst_35507 = chs__$1.call(null,inst_35498);
var inst_35508 = done.call(null,inst_35498);
var inst_35509 = cljs.core.async.take_BANG_.call(null,inst_35507,inst_35508);
var state_35534__$1 = state_35534;
var statearr_35548_35576 = state_35534__$1;
(statearr_35548_35576[(2)] = inst_35509);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35534__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35535 === (9))){
var inst_35498 = (state_35534[(7)]);
var inst_35511 = (state_35534[(2)]);
var inst_35512 = (inst_35498 + (1));
var inst_35498__$1 = inst_35512;
var state_35534__$1 = (function (){var statearr_35549 = state_35534;
(statearr_35549[(10)] = inst_35511);

(statearr_35549[(7)] = inst_35498__$1);

return statearr_35549;
})();
var statearr_35550_35577 = state_35534__$1;
(statearr_35550_35577[(2)] = null);

(statearr_35550_35577[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35535 === (5))){
var inst_35518 = (state_35534[(2)]);
var state_35534__$1 = (function (){var statearr_35551 = state_35534;
(statearr_35551[(11)] = inst_35518);

return statearr_35551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35534__$1,(12),dchan);
} else {
if((state_val_35535 === (14))){
var inst_35520 = (state_35534[(8)]);
var inst_35525 = cljs.core.apply.call(null,f,inst_35520);
var state_35534__$1 = state_35534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35534__$1,(16),out,inst_35525);
} else {
if((state_val_35535 === (16))){
var inst_35527 = (state_35534[(2)]);
var state_35534__$1 = (function (){var statearr_35552 = state_35534;
(statearr_35552[(12)] = inst_35527);

return statearr_35552;
})();
var statearr_35553_35578 = state_35534__$1;
(statearr_35553_35578[(2)] = null);

(statearr_35553_35578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35535 === (10))){
var inst_35502 = (state_35534[(2)]);
var inst_35503 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35534__$1 = (function (){var statearr_35554 = state_35534;
(statearr_35554[(13)] = inst_35502);

return statearr_35554;
})();
var statearr_35555_35579 = state_35534__$1;
(statearr_35555_35579[(2)] = inst_35503);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35534__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35535 === (8))){
var inst_35516 = (state_35534[(2)]);
var state_35534__$1 = state_35534;
var statearr_35556_35580 = state_35534__$1;
(statearr_35556_35580[(2)] = inst_35516);

(statearr_35556_35580[(1)] = (5));


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
});})(c__19818__auto___35565,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19756__auto__,c__19818__auto___35565,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_35560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35560[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_35560[(1)] = (1));

return statearr_35560;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_35534){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_35534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e35561){if((e35561 instanceof Object)){
var ex__19760__auto__ = e35561;
var statearr_35562_35581 = state_35534;
(statearr_35562_35581[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35582 = state_35534;
state_35534 = G__35582;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_35534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_35534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___35565,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19820__auto__ = (function (){var statearr_35563 = f__19819__auto__.call(null);
(statearr_35563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___35565);

return statearr_35563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___35565,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35585 = arguments.length;
switch (G__35585) {
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
var c__19818__auto___35640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___35640,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___35640,out){
return (function (state_35615){
var state_val_35616 = (state_35615[(1)]);
if((state_val_35616 === (7))){
var inst_35595 = (state_35615[(7)]);
var inst_35594 = (state_35615[(8)]);
var inst_35594__$1 = (state_35615[(2)]);
var inst_35595__$1 = cljs.core.nth.call(null,inst_35594__$1,(0),null);
var inst_35596 = cljs.core.nth.call(null,inst_35594__$1,(1),null);
var inst_35597 = (inst_35595__$1 == null);
var state_35615__$1 = (function (){var statearr_35617 = state_35615;
(statearr_35617[(9)] = inst_35596);

(statearr_35617[(7)] = inst_35595__$1);

(statearr_35617[(8)] = inst_35594__$1);

return statearr_35617;
})();
if(cljs.core.truth_(inst_35597)){
var statearr_35618_35641 = state_35615__$1;
(statearr_35618_35641[(1)] = (8));

} else {
var statearr_35619_35642 = state_35615__$1;
(statearr_35619_35642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (1))){
var inst_35586 = cljs.core.vec.call(null,chs);
var inst_35587 = inst_35586;
var state_35615__$1 = (function (){var statearr_35620 = state_35615;
(statearr_35620[(10)] = inst_35587);

return statearr_35620;
})();
var statearr_35621_35643 = state_35615__$1;
(statearr_35621_35643[(2)] = null);

(statearr_35621_35643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (4))){
var inst_35587 = (state_35615[(10)]);
var state_35615__$1 = state_35615;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35615__$1,(7),inst_35587);
} else {
if((state_val_35616 === (6))){
var inst_35611 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35622_35644 = state_35615__$1;
(statearr_35622_35644[(2)] = inst_35611);

(statearr_35622_35644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (3))){
var inst_35613 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35615__$1,inst_35613);
} else {
if((state_val_35616 === (2))){
var inst_35587 = (state_35615[(10)]);
var inst_35589 = cljs.core.count.call(null,inst_35587);
var inst_35590 = (inst_35589 > (0));
var state_35615__$1 = state_35615;
if(cljs.core.truth_(inst_35590)){
var statearr_35624_35645 = state_35615__$1;
(statearr_35624_35645[(1)] = (4));

} else {
var statearr_35625_35646 = state_35615__$1;
(statearr_35625_35646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (11))){
var inst_35587 = (state_35615[(10)]);
var inst_35604 = (state_35615[(2)]);
var tmp35623 = inst_35587;
var inst_35587__$1 = tmp35623;
var state_35615__$1 = (function (){var statearr_35626 = state_35615;
(statearr_35626[(11)] = inst_35604);

(statearr_35626[(10)] = inst_35587__$1);

return statearr_35626;
})();
var statearr_35627_35647 = state_35615__$1;
(statearr_35627_35647[(2)] = null);

(statearr_35627_35647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (9))){
var inst_35595 = (state_35615[(7)]);
var state_35615__$1 = state_35615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35615__$1,(11),out,inst_35595);
} else {
if((state_val_35616 === (5))){
var inst_35609 = cljs.core.async.close_BANG_.call(null,out);
var state_35615__$1 = state_35615;
var statearr_35628_35648 = state_35615__$1;
(statearr_35628_35648[(2)] = inst_35609);

(statearr_35628_35648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (10))){
var inst_35607 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35629_35649 = state_35615__$1;
(statearr_35629_35649[(2)] = inst_35607);

(statearr_35629_35649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (8))){
var inst_35596 = (state_35615[(9)]);
var inst_35595 = (state_35615[(7)]);
var inst_35594 = (state_35615[(8)]);
var inst_35587 = (state_35615[(10)]);
var inst_35599 = (function (){var cs = inst_35587;
var vec__35592 = inst_35594;
var v = inst_35595;
var c = inst_35596;
return ((function (cs,vec__35592,v,c,inst_35596,inst_35595,inst_35594,inst_35587,state_val_35616,c__19818__auto___35640,out){
return (function (p1__35583_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35583_SHARP_);
});
;})(cs,vec__35592,v,c,inst_35596,inst_35595,inst_35594,inst_35587,state_val_35616,c__19818__auto___35640,out))
})();
var inst_35600 = cljs.core.filterv.call(null,inst_35599,inst_35587);
var inst_35587__$1 = inst_35600;
var state_35615__$1 = (function (){var statearr_35630 = state_35615;
(statearr_35630[(10)] = inst_35587__$1);

return statearr_35630;
})();
var statearr_35631_35650 = state_35615__$1;
(statearr_35631_35650[(2)] = null);

(statearr_35631_35650[(1)] = (2));


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
});})(c__19818__auto___35640,out))
;
return ((function (switch__19756__auto__,c__19818__auto___35640,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_35635 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35635[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_35635[(1)] = (1));

return statearr_35635;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_35615){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_35615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e35636){if((e35636 instanceof Object)){
var ex__19760__auto__ = e35636;
var statearr_35637_35651 = state_35615;
(statearr_35637_35651[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35652 = state_35615;
state_35615 = G__35652;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_35615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_35615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___35640,out))
})();
var state__19820__auto__ = (function (){var statearr_35638 = f__19819__auto__.call(null);
(statearr_35638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___35640);

return statearr_35638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___35640,out))
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
var G__35654 = arguments.length;
switch (G__35654) {
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
var c__19818__auto___35702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___35702,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___35702,out){
return (function (state_35678){
var state_val_35679 = (state_35678[(1)]);
if((state_val_35679 === (7))){
var inst_35660 = (state_35678[(7)]);
var inst_35660__$1 = (state_35678[(2)]);
var inst_35661 = (inst_35660__$1 == null);
var inst_35662 = cljs.core.not.call(null,inst_35661);
var state_35678__$1 = (function (){var statearr_35680 = state_35678;
(statearr_35680[(7)] = inst_35660__$1);

return statearr_35680;
})();
if(inst_35662){
var statearr_35681_35703 = state_35678__$1;
(statearr_35681_35703[(1)] = (8));

} else {
var statearr_35682_35704 = state_35678__$1;
(statearr_35682_35704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (1))){
var inst_35655 = (0);
var state_35678__$1 = (function (){var statearr_35683 = state_35678;
(statearr_35683[(8)] = inst_35655);

return statearr_35683;
})();
var statearr_35684_35705 = state_35678__$1;
(statearr_35684_35705[(2)] = null);

(statearr_35684_35705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (4))){
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35678__$1,(7),ch);
} else {
if((state_val_35679 === (6))){
var inst_35673 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35685_35706 = state_35678__$1;
(statearr_35685_35706[(2)] = inst_35673);

(statearr_35685_35706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (3))){
var inst_35675 = (state_35678[(2)]);
var inst_35676 = cljs.core.async.close_BANG_.call(null,out);
var state_35678__$1 = (function (){var statearr_35686 = state_35678;
(statearr_35686[(9)] = inst_35675);

return statearr_35686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35678__$1,inst_35676);
} else {
if((state_val_35679 === (2))){
var inst_35655 = (state_35678[(8)]);
var inst_35657 = (inst_35655 < n);
var state_35678__$1 = state_35678;
if(cljs.core.truth_(inst_35657)){
var statearr_35687_35707 = state_35678__$1;
(statearr_35687_35707[(1)] = (4));

} else {
var statearr_35688_35708 = state_35678__$1;
(statearr_35688_35708[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (11))){
var inst_35655 = (state_35678[(8)]);
var inst_35665 = (state_35678[(2)]);
var inst_35666 = (inst_35655 + (1));
var inst_35655__$1 = inst_35666;
var state_35678__$1 = (function (){var statearr_35689 = state_35678;
(statearr_35689[(10)] = inst_35665);

(statearr_35689[(8)] = inst_35655__$1);

return statearr_35689;
})();
var statearr_35690_35709 = state_35678__$1;
(statearr_35690_35709[(2)] = null);

(statearr_35690_35709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (9))){
var state_35678__$1 = state_35678;
var statearr_35691_35710 = state_35678__$1;
(statearr_35691_35710[(2)] = null);

(statearr_35691_35710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (5))){
var state_35678__$1 = state_35678;
var statearr_35692_35711 = state_35678__$1;
(statearr_35692_35711[(2)] = null);

(statearr_35692_35711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (10))){
var inst_35670 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35693_35712 = state_35678__$1;
(statearr_35693_35712[(2)] = inst_35670);

(statearr_35693_35712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (8))){
var inst_35660 = (state_35678[(7)]);
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35678__$1,(11),out,inst_35660);
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
});})(c__19818__auto___35702,out))
;
return ((function (switch__19756__auto__,c__19818__auto___35702,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_35697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35697[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_35697[(1)] = (1));

return statearr_35697;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_35678){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_35678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e35698){if((e35698 instanceof Object)){
var ex__19760__auto__ = e35698;
var statearr_35699_35713 = state_35678;
(statearr_35699_35713[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35714 = state_35678;
state_35678 = G__35714;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_35678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_35678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___35702,out))
})();
var state__19820__auto__ = (function (){var statearr_35700 = f__19819__auto__.call(null);
(statearr_35700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___35702);

return statearr_35700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___35702,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t35722 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35722 = (function (map_LT_,f,ch,meta35723){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35723 = meta35723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35724,meta35723__$1){
var self__ = this;
var _35724__$1 = this;
return (new cljs.core.async.t35722(self__.map_LT_,self__.f,self__.ch,meta35723__$1));
});

cljs.core.async.t35722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35724){
var self__ = this;
var _35724__$1 = this;
return self__.meta35723;
});

cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t35725 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35725 = (function (map_LT_,f,ch,meta35723,_,fn1,meta35726){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35723 = meta35723;
this._ = _;
this.fn1 = fn1;
this.meta35726 = meta35726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35727,meta35726__$1){
var self__ = this;
var _35727__$1 = this;
return (new cljs.core.async.t35725(self__.map_LT_,self__.f,self__.ch,self__.meta35723,self__._,self__.fn1,meta35726__$1));
});})(___$1))
;

cljs.core.async.t35725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35727){
var self__ = this;
var _35727__$1 = this;
return self__.meta35726;
});})(___$1))
;

cljs.core.async.t35725.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t35725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35715_SHARP_){
return f1.call(null,(((p1__35715_SHARP_ == null))?null:self__.f.call(null,p1__35715_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t35725.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35723","meta35723",-313839483,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35726","meta35726",2095736103,null)], null);
});})(___$1))
;

cljs.core.async.t35725.cljs$lang$type = true;

cljs.core.async.t35725.cljs$lang$ctorStr = "cljs.core.async/t35725";

cljs.core.async.t35725.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t35725");
});})(___$1))
;

cljs.core.async.__GT_t35725 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t35725(map_LT___$1,f__$1,ch__$1,meta35723__$1,___$2,fn1__$1,meta35726){
return (new cljs.core.async.t35725(map_LT___$1,f__$1,ch__$1,meta35723__$1,___$2,fn1__$1,meta35726));
});})(___$1))
;

}

return (new cljs.core.async.t35725(self__.map_LT_,self__.f,self__.ch,self__.meta35723,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t35722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35723","meta35723",-313839483,null)], null);
});

cljs.core.async.t35722.cljs$lang$type = true;

cljs.core.async.t35722.cljs$lang$ctorStr = "cljs.core.async/t35722";

cljs.core.async.t35722.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t35722");
});

cljs.core.async.__GT_t35722 = (function cljs$core$async$map_LT__$___GT_t35722(map_LT___$1,f__$1,ch__$1,meta35723){
return (new cljs.core.async.t35722(map_LT___$1,f__$1,ch__$1,meta35723));
});

}

return (new cljs.core.async.t35722(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t35731 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35731 = (function (map_GT_,f,ch,meta35732){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35732 = meta35732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35733,meta35732__$1){
var self__ = this;
var _35733__$1 = this;
return (new cljs.core.async.t35731(self__.map_GT_,self__.f,self__.ch,meta35732__$1));
});

cljs.core.async.t35731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35733){
var self__ = this;
var _35733__$1 = this;
return self__.meta35732;
});

cljs.core.async.t35731.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35731.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35731.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35731.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t35731.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35731.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t35731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35732","meta35732",843875838,null)], null);
});

cljs.core.async.t35731.cljs$lang$type = true;

cljs.core.async.t35731.cljs$lang$ctorStr = "cljs.core.async/t35731";

cljs.core.async.t35731.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t35731");
});

cljs.core.async.__GT_t35731 = (function cljs$core$async$map_GT__$___GT_t35731(map_GT___$1,f__$1,ch__$1,meta35732){
return (new cljs.core.async.t35731(map_GT___$1,f__$1,ch__$1,meta35732));
});

}

return (new cljs.core.async.t35731(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t35737 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35737 = (function (filter_GT_,p,ch,meta35738){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35738 = meta35738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35739,meta35738__$1){
var self__ = this;
var _35739__$1 = this;
return (new cljs.core.async.t35737(self__.filter_GT_,self__.p,self__.ch,meta35738__$1));
});

cljs.core.async.t35737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35739){
var self__ = this;
var _35739__$1 = this;
return self__.meta35738;
});

cljs.core.async.t35737.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35737.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35737.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t35737.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35737.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t35737.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35737.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t35737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35738","meta35738",133944492,null)], null);
});

cljs.core.async.t35737.cljs$lang$type = true;

cljs.core.async.t35737.cljs$lang$ctorStr = "cljs.core.async/t35737";

cljs.core.async.t35737.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"cljs.core.async/t35737");
});

cljs.core.async.__GT_t35737 = (function cljs$core$async$filter_GT__$___GT_t35737(filter_GT___$1,p__$1,ch__$1,meta35738){
return (new cljs.core.async.t35737(filter_GT___$1,p__$1,ch__$1,meta35738));
});

}

return (new cljs.core.async.t35737(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35741 = arguments.length;
switch (G__35741) {
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
var c__19818__auto___35784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___35784,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___35784,out){
return (function (state_35762){
var state_val_35763 = (state_35762[(1)]);
if((state_val_35763 === (7))){
var inst_35758 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35764_35785 = state_35762__$1;
(statearr_35764_35785[(2)] = inst_35758);

(statearr_35764_35785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (1))){
var state_35762__$1 = state_35762;
var statearr_35765_35786 = state_35762__$1;
(statearr_35765_35786[(2)] = null);

(statearr_35765_35786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (4))){
var inst_35744 = (state_35762[(7)]);
var inst_35744__$1 = (state_35762[(2)]);
var inst_35745 = (inst_35744__$1 == null);
var state_35762__$1 = (function (){var statearr_35766 = state_35762;
(statearr_35766[(7)] = inst_35744__$1);

return statearr_35766;
})();
if(cljs.core.truth_(inst_35745)){
var statearr_35767_35787 = state_35762__$1;
(statearr_35767_35787[(1)] = (5));

} else {
var statearr_35768_35788 = state_35762__$1;
(statearr_35768_35788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (6))){
var inst_35744 = (state_35762[(7)]);
var inst_35749 = p.call(null,inst_35744);
var state_35762__$1 = state_35762;
if(cljs.core.truth_(inst_35749)){
var statearr_35769_35789 = state_35762__$1;
(statearr_35769_35789[(1)] = (8));

} else {
var statearr_35770_35790 = state_35762__$1;
(statearr_35770_35790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (3))){
var inst_35760 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35762__$1,inst_35760);
} else {
if((state_val_35763 === (2))){
var state_35762__$1 = state_35762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35762__$1,(4),ch);
} else {
if((state_val_35763 === (11))){
var inst_35752 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35771_35791 = state_35762__$1;
(statearr_35771_35791[(2)] = inst_35752);

(statearr_35771_35791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (9))){
var state_35762__$1 = state_35762;
var statearr_35772_35792 = state_35762__$1;
(statearr_35772_35792[(2)] = null);

(statearr_35772_35792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (5))){
var inst_35747 = cljs.core.async.close_BANG_.call(null,out);
var state_35762__$1 = state_35762;
var statearr_35773_35793 = state_35762__$1;
(statearr_35773_35793[(2)] = inst_35747);

(statearr_35773_35793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (10))){
var inst_35755 = (state_35762[(2)]);
var state_35762__$1 = (function (){var statearr_35774 = state_35762;
(statearr_35774[(8)] = inst_35755);

return statearr_35774;
})();
var statearr_35775_35794 = state_35762__$1;
(statearr_35775_35794[(2)] = null);

(statearr_35775_35794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (8))){
var inst_35744 = (state_35762[(7)]);
var state_35762__$1 = state_35762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35762__$1,(11),out,inst_35744);
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
});})(c__19818__auto___35784,out))
;
return ((function (switch__19756__auto__,c__19818__auto___35784,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_35779 = [null,null,null,null,null,null,null,null,null];
(statearr_35779[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_35779[(1)] = (1));

return statearr_35779;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_35762){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_35762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e35780){if((e35780 instanceof Object)){
var ex__19760__auto__ = e35780;
var statearr_35781_35795 = state_35762;
(statearr_35781_35795[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35796 = state_35762;
state_35762 = G__35796;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_35762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_35762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___35784,out))
})();
var state__19820__auto__ = (function (){var statearr_35782 = f__19819__auto__.call(null);
(statearr_35782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___35784);

return statearr_35782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___35784,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__35798 = arguments.length;
switch (G__35798) {
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
return (function (state_35965){
var state_val_35966 = (state_35965[(1)]);
if((state_val_35966 === (7))){
var inst_35961 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
var statearr_35967_36008 = state_35965__$1;
(statearr_35967_36008[(2)] = inst_35961);

(statearr_35967_36008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (20))){
var inst_35931 = (state_35965[(7)]);
var inst_35942 = (state_35965[(2)]);
var inst_35943 = cljs.core.next.call(null,inst_35931);
var inst_35917 = inst_35943;
var inst_35918 = null;
var inst_35919 = (0);
var inst_35920 = (0);
var state_35965__$1 = (function (){var statearr_35968 = state_35965;
(statearr_35968[(8)] = inst_35917);

(statearr_35968[(9)] = inst_35942);

(statearr_35968[(10)] = inst_35920);

(statearr_35968[(11)] = inst_35918);

(statearr_35968[(12)] = inst_35919);

return statearr_35968;
})();
var statearr_35969_36009 = state_35965__$1;
(statearr_35969_36009[(2)] = null);

(statearr_35969_36009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (1))){
var state_35965__$1 = state_35965;
var statearr_35970_36010 = state_35965__$1;
(statearr_35970_36010[(2)] = null);

(statearr_35970_36010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (4))){
var inst_35906 = (state_35965[(13)]);
var inst_35906__$1 = (state_35965[(2)]);
var inst_35907 = (inst_35906__$1 == null);
var state_35965__$1 = (function (){var statearr_35971 = state_35965;
(statearr_35971[(13)] = inst_35906__$1);

return statearr_35971;
})();
if(cljs.core.truth_(inst_35907)){
var statearr_35972_36011 = state_35965__$1;
(statearr_35972_36011[(1)] = (5));

} else {
var statearr_35973_36012 = state_35965__$1;
(statearr_35973_36012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (15))){
var state_35965__$1 = state_35965;
var statearr_35977_36013 = state_35965__$1;
(statearr_35977_36013[(2)] = null);

(statearr_35977_36013[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (21))){
var state_35965__$1 = state_35965;
var statearr_35978_36014 = state_35965__$1;
(statearr_35978_36014[(2)] = null);

(statearr_35978_36014[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (13))){
var inst_35917 = (state_35965[(8)]);
var inst_35920 = (state_35965[(10)]);
var inst_35918 = (state_35965[(11)]);
var inst_35919 = (state_35965[(12)]);
var inst_35927 = (state_35965[(2)]);
var inst_35928 = (inst_35920 + (1));
var tmp35974 = inst_35917;
var tmp35975 = inst_35918;
var tmp35976 = inst_35919;
var inst_35917__$1 = tmp35974;
var inst_35918__$1 = tmp35975;
var inst_35919__$1 = tmp35976;
var inst_35920__$1 = inst_35928;
var state_35965__$1 = (function (){var statearr_35979 = state_35965;
(statearr_35979[(8)] = inst_35917__$1);

(statearr_35979[(10)] = inst_35920__$1);

(statearr_35979[(11)] = inst_35918__$1);

(statearr_35979[(12)] = inst_35919__$1);

(statearr_35979[(14)] = inst_35927);

return statearr_35979;
})();
var statearr_35980_36015 = state_35965__$1;
(statearr_35980_36015[(2)] = null);

(statearr_35980_36015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (22))){
var state_35965__$1 = state_35965;
var statearr_35981_36016 = state_35965__$1;
(statearr_35981_36016[(2)] = null);

(statearr_35981_36016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (6))){
var inst_35906 = (state_35965[(13)]);
var inst_35915 = f.call(null,inst_35906);
var inst_35916 = cljs.core.seq.call(null,inst_35915);
var inst_35917 = inst_35916;
var inst_35918 = null;
var inst_35919 = (0);
var inst_35920 = (0);
var state_35965__$1 = (function (){var statearr_35982 = state_35965;
(statearr_35982[(8)] = inst_35917);

(statearr_35982[(10)] = inst_35920);

(statearr_35982[(11)] = inst_35918);

(statearr_35982[(12)] = inst_35919);

return statearr_35982;
})();
var statearr_35983_36017 = state_35965__$1;
(statearr_35983_36017[(2)] = null);

(statearr_35983_36017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (17))){
var inst_35931 = (state_35965[(7)]);
var inst_35935 = cljs.core.chunk_first.call(null,inst_35931);
var inst_35936 = cljs.core.chunk_rest.call(null,inst_35931);
var inst_35937 = cljs.core.count.call(null,inst_35935);
var inst_35917 = inst_35936;
var inst_35918 = inst_35935;
var inst_35919 = inst_35937;
var inst_35920 = (0);
var state_35965__$1 = (function (){var statearr_35984 = state_35965;
(statearr_35984[(8)] = inst_35917);

(statearr_35984[(10)] = inst_35920);

(statearr_35984[(11)] = inst_35918);

(statearr_35984[(12)] = inst_35919);

return statearr_35984;
})();
var statearr_35985_36018 = state_35965__$1;
(statearr_35985_36018[(2)] = null);

(statearr_35985_36018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (3))){
var inst_35963 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35965__$1,inst_35963);
} else {
if((state_val_35966 === (12))){
var inst_35951 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
var statearr_35986_36019 = state_35965__$1;
(statearr_35986_36019[(2)] = inst_35951);

(statearr_35986_36019[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (2))){
var state_35965__$1 = state_35965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35965__$1,(4),in$);
} else {
if((state_val_35966 === (23))){
var inst_35959 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
var statearr_35987_36020 = state_35965__$1;
(statearr_35987_36020[(2)] = inst_35959);

(statearr_35987_36020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (19))){
var inst_35946 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
var statearr_35988_36021 = state_35965__$1;
(statearr_35988_36021[(2)] = inst_35946);

(statearr_35988_36021[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (11))){
var inst_35917 = (state_35965[(8)]);
var inst_35931 = (state_35965[(7)]);
var inst_35931__$1 = cljs.core.seq.call(null,inst_35917);
var state_35965__$1 = (function (){var statearr_35989 = state_35965;
(statearr_35989[(7)] = inst_35931__$1);

return statearr_35989;
})();
if(inst_35931__$1){
var statearr_35990_36022 = state_35965__$1;
(statearr_35990_36022[(1)] = (14));

} else {
var statearr_35991_36023 = state_35965__$1;
(statearr_35991_36023[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (9))){
var inst_35953 = (state_35965[(2)]);
var inst_35954 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35965__$1 = (function (){var statearr_35992 = state_35965;
(statearr_35992[(15)] = inst_35953);

return statearr_35992;
})();
if(cljs.core.truth_(inst_35954)){
var statearr_35993_36024 = state_35965__$1;
(statearr_35993_36024[(1)] = (21));

} else {
var statearr_35994_36025 = state_35965__$1;
(statearr_35994_36025[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (5))){
var inst_35909 = cljs.core.async.close_BANG_.call(null,out);
var state_35965__$1 = state_35965;
var statearr_35995_36026 = state_35965__$1;
(statearr_35995_36026[(2)] = inst_35909);

(statearr_35995_36026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (14))){
var inst_35931 = (state_35965[(7)]);
var inst_35933 = cljs.core.chunked_seq_QMARK_.call(null,inst_35931);
var state_35965__$1 = state_35965;
if(inst_35933){
var statearr_35996_36027 = state_35965__$1;
(statearr_35996_36027[(1)] = (17));

} else {
var statearr_35997_36028 = state_35965__$1;
(statearr_35997_36028[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (16))){
var inst_35949 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
var statearr_35998_36029 = state_35965__$1;
(statearr_35998_36029[(2)] = inst_35949);

(statearr_35998_36029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (10))){
var inst_35920 = (state_35965[(10)]);
var inst_35918 = (state_35965[(11)]);
var inst_35925 = cljs.core._nth.call(null,inst_35918,inst_35920);
var state_35965__$1 = state_35965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35965__$1,(13),out,inst_35925);
} else {
if((state_val_35966 === (18))){
var inst_35931 = (state_35965[(7)]);
var inst_35940 = cljs.core.first.call(null,inst_35931);
var state_35965__$1 = state_35965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35965__$1,(20),out,inst_35940);
} else {
if((state_val_35966 === (8))){
var inst_35920 = (state_35965[(10)]);
var inst_35919 = (state_35965[(12)]);
var inst_35922 = (inst_35920 < inst_35919);
var inst_35923 = inst_35922;
var state_35965__$1 = state_35965;
if(cljs.core.truth_(inst_35923)){
var statearr_35999_36030 = state_35965__$1;
(statearr_35999_36030[(1)] = (10));

} else {
var statearr_36000_36031 = state_35965__$1;
(statearr_36000_36031[(1)] = (11));

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
var statearr_36004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36004[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__);

(statearr_36004[(1)] = (1));

return statearr_36004;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____1 = (function (state_35965){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_35965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e36005){if((e36005 instanceof Object)){
var ex__19760__auto__ = e36005;
var statearr_36006_36032 = state_35965;
(statearr_36006_36032[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36033 = state_35965;
state_35965 = G__36033;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__ = function(state_35965){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____1.call(this,state_35965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19757__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto__))
})();
var state__19820__auto__ = (function (){var statearr_36007 = f__19819__auto__.call(null);
(statearr_36007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto__);

return statearr_36007;
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
var G__36035 = arguments.length;
switch (G__36035) {
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
var G__36038 = arguments.length;
switch (G__36038) {
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
var G__36041 = arguments.length;
switch (G__36041) {
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
var c__19818__auto___36091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___36091,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___36091,out){
return (function (state_36065){
var state_val_36066 = (state_36065[(1)]);
if((state_val_36066 === (7))){
var inst_36060 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36067_36092 = state_36065__$1;
(statearr_36067_36092[(2)] = inst_36060);

(statearr_36067_36092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (1))){
var inst_36042 = null;
var state_36065__$1 = (function (){var statearr_36068 = state_36065;
(statearr_36068[(7)] = inst_36042);

return statearr_36068;
})();
var statearr_36069_36093 = state_36065__$1;
(statearr_36069_36093[(2)] = null);

(statearr_36069_36093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (4))){
var inst_36045 = (state_36065[(8)]);
var inst_36045__$1 = (state_36065[(2)]);
var inst_36046 = (inst_36045__$1 == null);
var inst_36047 = cljs.core.not.call(null,inst_36046);
var state_36065__$1 = (function (){var statearr_36070 = state_36065;
(statearr_36070[(8)] = inst_36045__$1);

return statearr_36070;
})();
if(inst_36047){
var statearr_36071_36094 = state_36065__$1;
(statearr_36071_36094[(1)] = (5));

} else {
var statearr_36072_36095 = state_36065__$1;
(statearr_36072_36095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (6))){
var state_36065__$1 = state_36065;
var statearr_36073_36096 = state_36065__$1;
(statearr_36073_36096[(2)] = null);

(statearr_36073_36096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (3))){
var inst_36062 = (state_36065[(2)]);
var inst_36063 = cljs.core.async.close_BANG_.call(null,out);
var state_36065__$1 = (function (){var statearr_36074 = state_36065;
(statearr_36074[(9)] = inst_36062);

return statearr_36074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36065__$1,inst_36063);
} else {
if((state_val_36066 === (2))){
var state_36065__$1 = state_36065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36065__$1,(4),ch);
} else {
if((state_val_36066 === (11))){
var inst_36045 = (state_36065[(8)]);
var inst_36054 = (state_36065[(2)]);
var inst_36042 = inst_36045;
var state_36065__$1 = (function (){var statearr_36075 = state_36065;
(statearr_36075[(7)] = inst_36042);

(statearr_36075[(10)] = inst_36054);

return statearr_36075;
})();
var statearr_36076_36097 = state_36065__$1;
(statearr_36076_36097[(2)] = null);

(statearr_36076_36097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (9))){
var inst_36045 = (state_36065[(8)]);
var state_36065__$1 = state_36065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36065__$1,(11),out,inst_36045);
} else {
if((state_val_36066 === (5))){
var inst_36042 = (state_36065[(7)]);
var inst_36045 = (state_36065[(8)]);
var inst_36049 = cljs.core._EQ_.call(null,inst_36045,inst_36042);
var state_36065__$1 = state_36065;
if(inst_36049){
var statearr_36078_36098 = state_36065__$1;
(statearr_36078_36098[(1)] = (8));

} else {
var statearr_36079_36099 = state_36065__$1;
(statearr_36079_36099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (10))){
var inst_36057 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36080_36100 = state_36065__$1;
(statearr_36080_36100[(2)] = inst_36057);

(statearr_36080_36100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (8))){
var inst_36042 = (state_36065[(7)]);
var tmp36077 = inst_36042;
var inst_36042__$1 = tmp36077;
var state_36065__$1 = (function (){var statearr_36081 = state_36065;
(statearr_36081[(7)] = inst_36042__$1);

return statearr_36081;
})();
var statearr_36082_36101 = state_36065__$1;
(statearr_36082_36101[(2)] = null);

(statearr_36082_36101[(1)] = (2));


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
});})(c__19818__auto___36091,out))
;
return ((function (switch__19756__auto__,c__19818__auto___36091,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_36086 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36086[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_36086[(1)] = (1));

return statearr_36086;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_36065){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_36065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e36087){if((e36087 instanceof Object)){
var ex__19760__auto__ = e36087;
var statearr_36088_36102 = state_36065;
(statearr_36088_36102[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36103 = state_36065;
state_36065 = G__36103;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_36065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_36065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___36091,out))
})();
var state__19820__auto__ = (function (){var statearr_36089 = f__19819__auto__.call(null);
(statearr_36089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___36091);

return statearr_36089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___36091,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__36105 = arguments.length;
switch (G__36105) {
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
var c__19818__auto___36174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___36174,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___36174,out){
return (function (state_36143){
var state_val_36144 = (state_36143[(1)]);
if((state_val_36144 === (7))){
var inst_36139 = (state_36143[(2)]);
var state_36143__$1 = state_36143;
var statearr_36145_36175 = state_36143__$1;
(statearr_36145_36175[(2)] = inst_36139);

(statearr_36145_36175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (1))){
var inst_36106 = (new Array(n));
var inst_36107 = inst_36106;
var inst_36108 = (0);
var state_36143__$1 = (function (){var statearr_36146 = state_36143;
(statearr_36146[(7)] = inst_36107);

(statearr_36146[(8)] = inst_36108);

return statearr_36146;
})();
var statearr_36147_36176 = state_36143__$1;
(statearr_36147_36176[(2)] = null);

(statearr_36147_36176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (4))){
var inst_36111 = (state_36143[(9)]);
var inst_36111__$1 = (state_36143[(2)]);
var inst_36112 = (inst_36111__$1 == null);
var inst_36113 = cljs.core.not.call(null,inst_36112);
var state_36143__$1 = (function (){var statearr_36148 = state_36143;
(statearr_36148[(9)] = inst_36111__$1);

return statearr_36148;
})();
if(inst_36113){
var statearr_36149_36177 = state_36143__$1;
(statearr_36149_36177[(1)] = (5));

} else {
var statearr_36150_36178 = state_36143__$1;
(statearr_36150_36178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (15))){
var inst_36133 = (state_36143[(2)]);
var state_36143__$1 = state_36143;
var statearr_36151_36179 = state_36143__$1;
(statearr_36151_36179[(2)] = inst_36133);

(statearr_36151_36179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (13))){
var state_36143__$1 = state_36143;
var statearr_36152_36180 = state_36143__$1;
(statearr_36152_36180[(2)] = null);

(statearr_36152_36180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (6))){
var inst_36108 = (state_36143[(8)]);
var inst_36129 = (inst_36108 > (0));
var state_36143__$1 = state_36143;
if(cljs.core.truth_(inst_36129)){
var statearr_36153_36181 = state_36143__$1;
(statearr_36153_36181[(1)] = (12));

} else {
var statearr_36154_36182 = state_36143__$1;
(statearr_36154_36182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (3))){
var inst_36141 = (state_36143[(2)]);
var state_36143__$1 = state_36143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36143__$1,inst_36141);
} else {
if((state_val_36144 === (12))){
var inst_36107 = (state_36143[(7)]);
var inst_36131 = cljs.core.vec.call(null,inst_36107);
var state_36143__$1 = state_36143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36143__$1,(15),out,inst_36131);
} else {
if((state_val_36144 === (2))){
var state_36143__$1 = state_36143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36143__$1,(4),ch);
} else {
if((state_val_36144 === (11))){
var inst_36123 = (state_36143[(2)]);
var inst_36124 = (new Array(n));
var inst_36107 = inst_36124;
var inst_36108 = (0);
var state_36143__$1 = (function (){var statearr_36155 = state_36143;
(statearr_36155[(7)] = inst_36107);

(statearr_36155[(8)] = inst_36108);

(statearr_36155[(10)] = inst_36123);

return statearr_36155;
})();
var statearr_36156_36183 = state_36143__$1;
(statearr_36156_36183[(2)] = null);

(statearr_36156_36183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (9))){
var inst_36107 = (state_36143[(7)]);
var inst_36121 = cljs.core.vec.call(null,inst_36107);
var state_36143__$1 = state_36143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36143__$1,(11),out,inst_36121);
} else {
if((state_val_36144 === (5))){
var inst_36107 = (state_36143[(7)]);
var inst_36111 = (state_36143[(9)]);
var inst_36108 = (state_36143[(8)]);
var inst_36116 = (state_36143[(11)]);
var inst_36115 = (inst_36107[inst_36108] = inst_36111);
var inst_36116__$1 = (inst_36108 + (1));
var inst_36117 = (inst_36116__$1 < n);
var state_36143__$1 = (function (){var statearr_36157 = state_36143;
(statearr_36157[(12)] = inst_36115);

(statearr_36157[(11)] = inst_36116__$1);

return statearr_36157;
})();
if(cljs.core.truth_(inst_36117)){
var statearr_36158_36184 = state_36143__$1;
(statearr_36158_36184[(1)] = (8));

} else {
var statearr_36159_36185 = state_36143__$1;
(statearr_36159_36185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (14))){
var inst_36136 = (state_36143[(2)]);
var inst_36137 = cljs.core.async.close_BANG_.call(null,out);
var state_36143__$1 = (function (){var statearr_36161 = state_36143;
(statearr_36161[(13)] = inst_36136);

return statearr_36161;
})();
var statearr_36162_36186 = state_36143__$1;
(statearr_36162_36186[(2)] = inst_36137);

(statearr_36162_36186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (10))){
var inst_36127 = (state_36143[(2)]);
var state_36143__$1 = state_36143;
var statearr_36163_36187 = state_36143__$1;
(statearr_36163_36187[(2)] = inst_36127);

(statearr_36163_36187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (8))){
var inst_36107 = (state_36143[(7)]);
var inst_36116 = (state_36143[(11)]);
var tmp36160 = inst_36107;
var inst_36107__$1 = tmp36160;
var inst_36108 = inst_36116;
var state_36143__$1 = (function (){var statearr_36164 = state_36143;
(statearr_36164[(7)] = inst_36107__$1);

(statearr_36164[(8)] = inst_36108);

return statearr_36164;
})();
var statearr_36165_36188 = state_36143__$1;
(statearr_36165_36188[(2)] = null);

(statearr_36165_36188[(1)] = (2));


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
});})(c__19818__auto___36174,out))
;
return ((function (switch__19756__auto__,c__19818__auto___36174,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_36169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36169[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_36169[(1)] = (1));

return statearr_36169;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_36143){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_36143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e36170){if((e36170 instanceof Object)){
var ex__19760__auto__ = e36170;
var statearr_36171_36189 = state_36143;
(statearr_36171_36189[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36190 = state_36143;
state_36143 = G__36190;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_36143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_36143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___36174,out))
})();
var state__19820__auto__ = (function (){var statearr_36172 = f__19819__auto__.call(null);
(statearr_36172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___36174);

return statearr_36172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___36174,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__36192 = arguments.length;
switch (G__36192) {
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
var c__19818__auto___36265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19818__auto___36265,out){
return (function (){
var f__19819__auto__ = (function (){var switch__19756__auto__ = ((function (c__19818__auto___36265,out){
return (function (state_36234){
var state_val_36235 = (state_36234[(1)]);
if((state_val_36235 === (7))){
var inst_36230 = (state_36234[(2)]);
var state_36234__$1 = state_36234;
var statearr_36236_36266 = state_36234__$1;
(statearr_36236_36266[(2)] = inst_36230);

(statearr_36236_36266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (1))){
var inst_36193 = [];
var inst_36194 = inst_36193;
var inst_36195 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36234__$1 = (function (){var statearr_36237 = state_36234;
(statearr_36237[(7)] = inst_36194);

(statearr_36237[(8)] = inst_36195);

return statearr_36237;
})();
var statearr_36238_36267 = state_36234__$1;
(statearr_36238_36267[(2)] = null);

(statearr_36238_36267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (4))){
var inst_36198 = (state_36234[(9)]);
var inst_36198__$1 = (state_36234[(2)]);
var inst_36199 = (inst_36198__$1 == null);
var inst_36200 = cljs.core.not.call(null,inst_36199);
var state_36234__$1 = (function (){var statearr_36239 = state_36234;
(statearr_36239[(9)] = inst_36198__$1);

return statearr_36239;
})();
if(inst_36200){
var statearr_36240_36268 = state_36234__$1;
(statearr_36240_36268[(1)] = (5));

} else {
var statearr_36241_36269 = state_36234__$1;
(statearr_36241_36269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (15))){
var inst_36224 = (state_36234[(2)]);
var state_36234__$1 = state_36234;
var statearr_36242_36270 = state_36234__$1;
(statearr_36242_36270[(2)] = inst_36224);

(statearr_36242_36270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (13))){
var state_36234__$1 = state_36234;
var statearr_36243_36271 = state_36234__$1;
(statearr_36243_36271[(2)] = null);

(statearr_36243_36271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (6))){
var inst_36194 = (state_36234[(7)]);
var inst_36219 = inst_36194.length;
var inst_36220 = (inst_36219 > (0));
var state_36234__$1 = state_36234;
if(cljs.core.truth_(inst_36220)){
var statearr_36244_36272 = state_36234__$1;
(statearr_36244_36272[(1)] = (12));

} else {
var statearr_36245_36273 = state_36234__$1;
(statearr_36245_36273[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (3))){
var inst_36232 = (state_36234[(2)]);
var state_36234__$1 = state_36234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36234__$1,inst_36232);
} else {
if((state_val_36235 === (12))){
var inst_36194 = (state_36234[(7)]);
var inst_36222 = cljs.core.vec.call(null,inst_36194);
var state_36234__$1 = state_36234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36234__$1,(15),out,inst_36222);
} else {
if((state_val_36235 === (2))){
var state_36234__$1 = state_36234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36234__$1,(4),ch);
} else {
if((state_val_36235 === (11))){
var inst_36202 = (state_36234[(10)]);
var inst_36198 = (state_36234[(9)]);
var inst_36212 = (state_36234[(2)]);
var inst_36213 = [];
var inst_36214 = inst_36213.push(inst_36198);
var inst_36194 = inst_36213;
var inst_36195 = inst_36202;
var state_36234__$1 = (function (){var statearr_36246 = state_36234;
(statearr_36246[(11)] = inst_36212);

(statearr_36246[(7)] = inst_36194);

(statearr_36246[(8)] = inst_36195);

(statearr_36246[(12)] = inst_36214);

return statearr_36246;
})();
var statearr_36247_36274 = state_36234__$1;
(statearr_36247_36274[(2)] = null);

(statearr_36247_36274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (9))){
var inst_36194 = (state_36234[(7)]);
var inst_36210 = cljs.core.vec.call(null,inst_36194);
var state_36234__$1 = state_36234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36234__$1,(11),out,inst_36210);
} else {
if((state_val_36235 === (5))){
var inst_36195 = (state_36234[(8)]);
var inst_36202 = (state_36234[(10)]);
var inst_36198 = (state_36234[(9)]);
var inst_36202__$1 = f.call(null,inst_36198);
var inst_36203 = cljs.core._EQ_.call(null,inst_36202__$1,inst_36195);
var inst_36204 = cljs.core.keyword_identical_QMARK_.call(null,inst_36195,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36205 = (inst_36203) || (inst_36204);
var state_36234__$1 = (function (){var statearr_36248 = state_36234;
(statearr_36248[(10)] = inst_36202__$1);

return statearr_36248;
})();
if(cljs.core.truth_(inst_36205)){
var statearr_36249_36275 = state_36234__$1;
(statearr_36249_36275[(1)] = (8));

} else {
var statearr_36250_36276 = state_36234__$1;
(statearr_36250_36276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (14))){
var inst_36227 = (state_36234[(2)]);
var inst_36228 = cljs.core.async.close_BANG_.call(null,out);
var state_36234__$1 = (function (){var statearr_36252 = state_36234;
(statearr_36252[(13)] = inst_36227);

return statearr_36252;
})();
var statearr_36253_36277 = state_36234__$1;
(statearr_36253_36277[(2)] = inst_36228);

(statearr_36253_36277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (10))){
var inst_36217 = (state_36234[(2)]);
var state_36234__$1 = state_36234;
var statearr_36254_36278 = state_36234__$1;
(statearr_36254_36278[(2)] = inst_36217);

(statearr_36254_36278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (8))){
var inst_36194 = (state_36234[(7)]);
var inst_36202 = (state_36234[(10)]);
var inst_36198 = (state_36234[(9)]);
var inst_36207 = inst_36194.push(inst_36198);
var tmp36251 = inst_36194;
var inst_36194__$1 = tmp36251;
var inst_36195 = inst_36202;
var state_36234__$1 = (function (){var statearr_36255 = state_36234;
(statearr_36255[(7)] = inst_36194__$1);

(statearr_36255[(14)] = inst_36207);

(statearr_36255[(8)] = inst_36195);

return statearr_36255;
})();
var statearr_36256_36279 = state_36234__$1;
(statearr_36256_36279[(2)] = null);

(statearr_36256_36279[(1)] = (2));


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
});})(c__19818__auto___36265,out))
;
return ((function (switch__19756__auto__,c__19818__auto___36265,out){
return (function() {
var cljs$core$async$state_machine__19757__auto__ = null;
var cljs$core$async$state_machine__19757__auto____0 = (function (){
var statearr_36260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36260[(0)] = cljs$core$async$state_machine__19757__auto__);

(statearr_36260[(1)] = (1));

return statearr_36260;
});
var cljs$core$async$state_machine__19757__auto____1 = (function (state_36234){
while(true){
var ret_value__19758__auto__ = (function (){try{while(true){
var result__19759__auto__ = switch__19756__auto__.call(null,state_36234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19759__auto__;
}
break;
}
}catch (e36261){if((e36261 instanceof Object)){
var ex__19760__auto__ = e36261;
var statearr_36262_36280 = state_36234;
(statearr_36262_36280[(5)] = ex__19760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36281 = state_36234;
state_36234 = G__36281;
continue;
} else {
return ret_value__19758__auto__;
}
break;
}
});
cljs$core$async$state_machine__19757__auto__ = function(state_36234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19757__auto____1.call(this,state_36234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19757__auto____0;
cljs$core$async$state_machine__19757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19757__auto____1;
return cljs$core$async$state_machine__19757__auto__;
})()
;})(switch__19756__auto__,c__19818__auto___36265,out))
})();
var state__19820__auto__ = (function (){var statearr_36263 = f__19819__auto__.call(null);
(statearr_36263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19818__auto___36265);

return statearr_36263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19820__auto__);
});})(c__19818__auto___36265,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1436385357162