// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25111 = arguments.length;
switch (G__25111) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25112 = (function (f,blockable,meta25113){
this.f = f;
this.blockable = blockable;
this.meta25113 = meta25113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25114,meta25113__$1){
var self__ = this;
var _25114__$1 = this;
return (new cljs.core.async.t_cljs$core$async25112(self__.f,self__.blockable,meta25113__$1));
});

cljs.core.async.t_cljs$core$async25112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25114){
var self__ = this;
var _25114__$1 = this;
return self__.meta25113;
});

cljs.core.async.t_cljs$core$async25112.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25112.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25113","meta25113",-1478255634,null)], null);
});

cljs.core.async.t_cljs$core$async25112.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25112";

cljs.core.async.t_cljs$core$async25112.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25112");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25112.
 */
cljs.core.async.__GT_t_cljs$core$async25112 = (function cljs$core$async$__GT_t_cljs$core$async25112(f__$1,blockable__$1,meta25113){
return (new cljs.core.async.t_cljs$core$async25112(f__$1,blockable__$1,meta25113));
});

}

return (new cljs.core.async.t_cljs$core$async25112(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25118 = arguments.length;
switch (G__25118) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25121 = arguments.length;
switch (G__25121) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25124 = arguments.length;
switch (G__25124) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25126 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25126);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25126,ret){
return (function (){
return fn1.call(null,val_25126);
});})(val_25126,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25128 = arguments.length;
switch (G__25128) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
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
var n__4607__auto___25130 = n;
var x_25131 = (0);
while(true){
if((x_25131 < n__4607__auto___25130)){
(a[x_25131] = (0));

var G__25132 = (x_25131 + (1));
x_25131 = G__25132;
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

var G__25133 = (i + (1));
i = G__25133;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25134 = (function (flag,meta25135){
this.flag = flag;
this.meta25135 = meta25135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25136,meta25135__$1){
var self__ = this;
var _25136__$1 = this;
return (new cljs.core.async.t_cljs$core$async25134(self__.flag,meta25135__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25134.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25136){
var self__ = this;
var _25136__$1 = this;
return self__.meta25135;
});})(flag))
;

cljs.core.async.t_cljs$core$async25134.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25134.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25134.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25135","meta25135",833211613,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25134.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25134";

cljs.core.async.t_cljs$core$async25134.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25134");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25134.
 */
cljs.core.async.__GT_t_cljs$core$async25134 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25134(flag__$1,meta25135){
return (new cljs.core.async.t_cljs$core$async25134(flag__$1,meta25135));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25134(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25137 = (function (flag,cb,meta25138){
this.flag = flag;
this.cb = cb;
this.meta25138 = meta25138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25139,meta25138__$1){
var self__ = this;
var _25139__$1 = this;
return (new cljs.core.async.t_cljs$core$async25137(self__.flag,self__.cb,meta25138__$1));
});

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25139){
var self__ = this;
var _25139__$1 = this;
return self__.meta25138;
});

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25138","meta25138",-1940239086,null)], null);
});

cljs.core.async.t_cljs$core$async25137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25137";

cljs.core.async.t_cljs$core$async25137.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25137");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25137.
 */
cljs.core.async.__GT_t_cljs$core$async25137 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25137(flag__$1,cb__$1,meta25138){
return (new cljs.core.async.t_cljs$core$async25137(flag__$1,cb__$1,meta25138));
});

}

return (new cljs.core.async.t_cljs$core$async25137(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25140_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25140_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25141_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25141_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25142 = (i + (1));
i = G__25142;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25148 = arguments.length;
var i__4731__auto___25149 = (0);
while(true){
if((i__4731__auto___25149 < len__4730__auto___25148)){
args__4736__auto__.push((arguments[i__4731__auto___25149]));

var G__25150 = (i__4731__auto___25149 + (1));
i__4731__auto___25149 = G__25150;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25145){
var map__25146 = p__25145;
var map__25146__$1 = (((((!((map__25146 == null))))?(((((map__25146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25146):map__25146);
var opts = map__25146__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25143){
var G__25144 = cljs.core.first.call(null,seq25143);
var seq25143__$1 = cljs.core.next.call(null,seq25143);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25144,seq25143__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25152 = arguments.length;
switch (G__25152) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25051__auto___25198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___25198){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___25198){
return (function (state_25176){
var state_val_25177 = (state_25176[(1)]);
if((state_val_25177 === (7))){
var inst_25172 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
var statearr_25178_25199 = state_25176__$1;
(statearr_25178_25199[(2)] = inst_25172);

(statearr_25178_25199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (1))){
var state_25176__$1 = state_25176;
var statearr_25179_25200 = state_25176__$1;
(statearr_25179_25200[(2)] = null);

(statearr_25179_25200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (4))){
var inst_25155 = (state_25176[(7)]);
var inst_25155__$1 = (state_25176[(2)]);
var inst_25156 = (inst_25155__$1 == null);
var state_25176__$1 = (function (){var statearr_25180 = state_25176;
(statearr_25180[(7)] = inst_25155__$1);

return statearr_25180;
})();
if(cljs.core.truth_(inst_25156)){
var statearr_25181_25201 = state_25176__$1;
(statearr_25181_25201[(1)] = (5));

} else {
var statearr_25182_25202 = state_25176__$1;
(statearr_25182_25202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (13))){
var state_25176__$1 = state_25176;
var statearr_25183_25203 = state_25176__$1;
(statearr_25183_25203[(2)] = null);

(statearr_25183_25203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (6))){
var inst_25155 = (state_25176[(7)]);
var state_25176__$1 = state_25176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25176__$1,(11),to,inst_25155);
} else {
if((state_val_25177 === (3))){
var inst_25174 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25176__$1,inst_25174);
} else {
if((state_val_25177 === (12))){
var state_25176__$1 = state_25176;
var statearr_25184_25204 = state_25176__$1;
(statearr_25184_25204[(2)] = null);

(statearr_25184_25204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (2))){
var state_25176__$1 = state_25176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25176__$1,(4),from);
} else {
if((state_val_25177 === (11))){
var inst_25165 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
if(cljs.core.truth_(inst_25165)){
var statearr_25185_25205 = state_25176__$1;
(statearr_25185_25205[(1)] = (12));

} else {
var statearr_25186_25206 = state_25176__$1;
(statearr_25186_25206[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (9))){
var state_25176__$1 = state_25176;
var statearr_25187_25207 = state_25176__$1;
(statearr_25187_25207[(2)] = null);

(statearr_25187_25207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (5))){
var state_25176__$1 = state_25176;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25188_25208 = state_25176__$1;
(statearr_25188_25208[(1)] = (8));

} else {
var statearr_25189_25209 = state_25176__$1;
(statearr_25189_25209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (14))){
var inst_25170 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
var statearr_25190_25210 = state_25176__$1;
(statearr_25190_25210[(2)] = inst_25170);

(statearr_25190_25210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (10))){
var inst_25162 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
var statearr_25191_25211 = state_25176__$1;
(statearr_25191_25211[(2)] = inst_25162);

(statearr_25191_25211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (8))){
var inst_25159 = cljs.core.async.close_BANG_.call(null,to);
var state_25176__$1 = state_25176;
var statearr_25192_25212 = state_25176__$1;
(statearr_25192_25212[(2)] = inst_25159);

(statearr_25192_25212[(1)] = (10));


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
});})(c__25051__auto___25198))
;
return ((function (switch__24956__auto__,c__25051__auto___25198){
return (function() {
var cljs$core$async$state_machine__24957__auto__ = null;
var cljs$core$async$state_machine__24957__auto____0 = (function (){
var statearr_25193 = [null,null,null,null,null,null,null,null];
(statearr_25193[(0)] = cljs$core$async$state_machine__24957__auto__);

(statearr_25193[(1)] = (1));

return statearr_25193;
});
var cljs$core$async$state_machine__24957__auto____1 = (function (state_25176){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_25176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e25194){if((e25194 instanceof Object)){
var ex__24960__auto__ = e25194;
var statearr_25195_25213 = state_25176;
(statearr_25195_25213[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25214 = state_25176;
state_25176 = G__25214;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$state_machine__24957__auto__ = function(state_25176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24957__auto____1.call(this,state_25176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24957__auto____0;
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24957__auto____1;
return cljs$core$async$state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___25198))
})();
var state__25053__auto__ = (function (){var statearr_25196 = f__25052__auto__.call(null);
(statearr_25196[(6)] = c__25051__auto___25198);

return statearr_25196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___25198))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25215){
var vec__25216 = p__25215;
var v = cljs.core.nth.call(null,vec__25216,(0),null);
var p = cljs.core.nth.call(null,vec__25216,(1),null);
var job = vec__25216;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25051__auto___25387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___25387,res,vec__25216,v,p,job,jobs,results){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___25387,res,vec__25216,v,p,job,jobs,results){
return (function (state_25223){
var state_val_25224 = (state_25223[(1)]);
if((state_val_25224 === (1))){
var state_25223__$1 = state_25223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25223__$1,(2),res,v);
} else {
if((state_val_25224 === (2))){
var inst_25220 = (state_25223[(2)]);
var inst_25221 = cljs.core.async.close_BANG_.call(null,res);
var state_25223__$1 = (function (){var statearr_25225 = state_25223;
(statearr_25225[(7)] = inst_25220);

return statearr_25225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25223__$1,inst_25221);
} else {
return null;
}
}
});})(c__25051__auto___25387,res,vec__25216,v,p,job,jobs,results))
;
return ((function (switch__24956__auto__,c__25051__auto___25387,res,vec__25216,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0 = (function (){
var statearr_25226 = [null,null,null,null,null,null,null,null];
(statearr_25226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__);

(statearr_25226[(1)] = (1));

return statearr_25226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1 = (function (state_25223){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_25223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e25227){if((e25227 instanceof Object)){
var ex__24960__auto__ = e25227;
var statearr_25228_25388 = state_25223;
(statearr_25228_25388[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25389 = state_25223;
state_25223 = G__25389;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__ = function(state_25223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1.call(this,state_25223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___25387,res,vec__25216,v,p,job,jobs,results))
})();
var state__25053__auto__ = (function (){var statearr_25229 = f__25052__auto__.call(null);
(statearr_25229[(6)] = c__25051__auto___25387);

return statearr_25229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___25387,res,vec__25216,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25230){
var vec__25231 = p__25230;
var v = cljs.core.nth.call(null,vec__25231,(0),null);
var p = cljs.core.nth.call(null,vec__25231,(1),null);
var job = vec__25231;
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
var n__4607__auto___25390 = n;
var __25391 = (0);
while(true){
if((__25391 < n__4607__auto___25390)){
var G__25234_25392 = type;
var G__25234_25393__$1 = (((G__25234_25392 instanceof cljs.core.Keyword))?G__25234_25392.fqn:null);
switch (G__25234_25393__$1) {
case "compute":
var c__25051__auto___25395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25391,c__25051__auto___25395,G__25234_25392,G__25234_25393__$1,n__4607__auto___25390,jobs,results,process,async){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (__25391,c__25051__auto___25395,G__25234_25392,G__25234_25393__$1,n__4607__auto___25390,jobs,results,process,async){
return (function (state_25247){
var state_val_25248 = (state_25247[(1)]);
if((state_val_25248 === (1))){
var state_25247__$1 = state_25247;
var statearr_25249_25396 = state_25247__$1;
(statearr_25249_25396[(2)] = null);

(statearr_25249_25396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25248 === (2))){
var state_25247__$1 = state_25247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25247__$1,(4),jobs);
} else {
if((state_val_25248 === (3))){
var inst_25245 = (state_25247[(2)]);
var state_25247__$1 = state_25247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25247__$1,inst_25245);
} else {
if((state_val_25248 === (4))){
var inst_25237 = (state_25247[(2)]);
var inst_25238 = process.call(null,inst_25237);
var state_25247__$1 = state_25247;
if(cljs.core.truth_(inst_25238)){
var statearr_25250_25397 = state_25247__$1;
(statearr_25250_25397[(1)] = (5));

} else {
var statearr_25251_25398 = state_25247__$1;
(statearr_25251_25398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25248 === (5))){
var state_25247__$1 = state_25247;
var statearr_25252_25399 = state_25247__$1;
(statearr_25252_25399[(2)] = null);

(statearr_25252_25399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25248 === (6))){
var state_25247__$1 = state_25247;
var statearr_25253_25400 = state_25247__$1;
(statearr_25253_25400[(2)] = null);

(statearr_25253_25400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25248 === (7))){
var inst_25243 = (state_25247[(2)]);
var state_25247__$1 = state_25247;
var statearr_25254_25401 = state_25247__$1;
(statearr_25254_25401[(2)] = inst_25243);

(statearr_25254_25401[(1)] = (3));


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
});})(__25391,c__25051__auto___25395,G__25234_25392,G__25234_25393__$1,n__4607__auto___25390,jobs,results,process,async))
;
return ((function (__25391,switch__24956__auto__,c__25051__auto___25395,G__25234_25392,G__25234_25393__$1,n__4607__auto___25390,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0 = (function (){
var statearr_25255 = [null,null,null,null,null,null,null];
(statearr_25255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__);

(statearr_25255[(1)] = (1));

return statearr_25255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1 = (function (state_25247){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_25247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e25256){if((e25256 instanceof Object)){
var ex__24960__auto__ = e25256;
var statearr_25257_25402 = state_25247;
(statearr_25257_25402[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25403 = state_25247;
state_25247 = G__25403;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__ = function(state_25247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1.call(this,state_25247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__;
})()
;})(__25391,switch__24956__auto__,c__25051__auto___25395,G__25234_25392,G__25234_25393__$1,n__4607__auto___25390,jobs,results,process,async))
})();
var state__25053__auto__ = (function (){var statearr_25258 = f__25052__auto__.call(null);
(statearr_25258[(6)] = c__25051__auto___25395);

return statearr_25258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(__25391,c__25051__auto___25395,G__25234_25392,G__25234_25393__$1,n__4607__auto___25390,jobs,results,process,async))
);


break;
case "async":
var c__25051__auto___25404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25391,c__25051__auto___25404,G__25234_25392,G__25234_25393__$1,n__4607__auto___25390,jobs,results,process,async){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (__25391,c__25051__auto___25404,G__25234_25392,G__25234_25393__$1,n__4607__auto___25390,jobs,results,process,async){
return (function (state_25271){
var state_val_25272 = (state_25271[(1)]);
if((state_val_25272 === (1))){
var state_25271__$1 = state_25271;
var statearr_25273_25405 = state_25271__$1;
(statearr_25273_25405[(2)] = null);

(statearr_25273_25405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (2))){
var state_25271__$1 = state_25271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25271__$1,(4),jobs);
} else {
if((state_val_25272 === (3))){
var inst_25269 = (state_25271[(2)]);
var state_25271__$1 = state_25271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25271__$1,inst_25269);
} else {
if((state_val_25272 === (4))){
var inst_25261 = (state_25271[(2)]);
var inst_25262 = async.call(null,inst_25261);
var state_25271__$1 = state_25271;
if(cljs.core.truth_(inst_25262)){
var statearr_25274_25406 = state_25271__$1;
(statearr_25274_25406[(1)] = (5));

} else {
var statearr_25275_25407 = state_25271__$1;
(statearr_25275_25407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (5))){
var state_25271__$1 = state_25271;
var statearr_25276_25408 = state_25271__$1;
(statearr_25276_25408[(2)] = null);

(statearr_25276_25408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (6))){
var state_25271__$1 = state_25271;
var statearr_25277_25409 = state_25271__$1;
(statearr_25277_25409[(2)] = null);

(statearr_25277_25409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (7))){
var inst_25267 = (state_25271[(2)]);
var state_25271__$1 = state_25271;
var statearr_25278_25410 = state_25271__$1;
(statearr_25278_25410[(2)] = inst_25267);

(statearr_25278_25410[(1)] = (3));


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
});})(__25391,c__25051__auto___25404,G__25234_25392,G__25234_25393__$1,n__4607__auto___25390,jobs,results,process,async))
;
return ((function (__25391,switch__24956__auto__,c__25051__auto___25404,G__25234_25392,G__25234_25393__$1,n__4607__auto___25390,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0 = (function (){
var statearr_25279 = [null,null,null,null,null,null,null];
(statearr_25279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__);

(statearr_25279[(1)] = (1));

return statearr_25279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1 = (function (state_25271){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_25271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e25280){if((e25280 instanceof Object)){
var ex__24960__auto__ = e25280;
var statearr_25281_25411 = state_25271;
(statearr_25281_25411[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25412 = state_25271;
state_25271 = G__25412;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__ = function(state_25271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1.call(this,state_25271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__;
})()
;})(__25391,switch__24956__auto__,c__25051__auto___25404,G__25234_25392,G__25234_25393__$1,n__4607__auto___25390,jobs,results,process,async))
})();
var state__25053__auto__ = (function (){var statearr_25282 = f__25052__auto__.call(null);
(statearr_25282[(6)] = c__25051__auto___25404);

return statearr_25282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(__25391,c__25051__auto___25404,G__25234_25392,G__25234_25393__$1,n__4607__auto___25390,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25234_25393__$1)].join('')));

}

var G__25413 = (__25391 + (1));
__25391 = G__25413;
continue;
} else {
}
break;
}

var c__25051__auto___25414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___25414,jobs,results,process,async){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___25414,jobs,results,process,async){
return (function (state_25304){
var state_val_25305 = (state_25304[(1)]);
if((state_val_25305 === (7))){
var inst_25300 = (state_25304[(2)]);
var state_25304__$1 = state_25304;
var statearr_25306_25415 = state_25304__$1;
(statearr_25306_25415[(2)] = inst_25300);

(statearr_25306_25415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25305 === (1))){
var state_25304__$1 = state_25304;
var statearr_25307_25416 = state_25304__$1;
(statearr_25307_25416[(2)] = null);

(statearr_25307_25416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25305 === (4))){
var inst_25285 = (state_25304[(7)]);
var inst_25285__$1 = (state_25304[(2)]);
var inst_25286 = (inst_25285__$1 == null);
var state_25304__$1 = (function (){var statearr_25308 = state_25304;
(statearr_25308[(7)] = inst_25285__$1);

return statearr_25308;
})();
if(cljs.core.truth_(inst_25286)){
var statearr_25309_25417 = state_25304__$1;
(statearr_25309_25417[(1)] = (5));

} else {
var statearr_25310_25418 = state_25304__$1;
(statearr_25310_25418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25305 === (6))){
var inst_25290 = (state_25304[(8)]);
var inst_25285 = (state_25304[(7)]);
var inst_25290__$1 = cljs.core.async.chan.call(null,(1));
var inst_25291 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25292 = [inst_25285,inst_25290__$1];
var inst_25293 = (new cljs.core.PersistentVector(null,2,(5),inst_25291,inst_25292,null));
var state_25304__$1 = (function (){var statearr_25311 = state_25304;
(statearr_25311[(8)] = inst_25290__$1);

return statearr_25311;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25304__$1,(8),jobs,inst_25293);
} else {
if((state_val_25305 === (3))){
var inst_25302 = (state_25304[(2)]);
var state_25304__$1 = state_25304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25304__$1,inst_25302);
} else {
if((state_val_25305 === (2))){
var state_25304__$1 = state_25304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25304__$1,(4),from);
} else {
if((state_val_25305 === (9))){
var inst_25297 = (state_25304[(2)]);
var state_25304__$1 = (function (){var statearr_25312 = state_25304;
(statearr_25312[(9)] = inst_25297);

return statearr_25312;
})();
var statearr_25313_25419 = state_25304__$1;
(statearr_25313_25419[(2)] = null);

(statearr_25313_25419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25305 === (5))){
var inst_25288 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25304__$1 = state_25304;
var statearr_25314_25420 = state_25304__$1;
(statearr_25314_25420[(2)] = inst_25288);

(statearr_25314_25420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25305 === (8))){
var inst_25290 = (state_25304[(8)]);
var inst_25295 = (state_25304[(2)]);
var state_25304__$1 = (function (){var statearr_25315 = state_25304;
(statearr_25315[(10)] = inst_25295);

return statearr_25315;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25304__$1,(9),results,inst_25290);
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
});})(c__25051__auto___25414,jobs,results,process,async))
;
return ((function (switch__24956__auto__,c__25051__auto___25414,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0 = (function (){
var statearr_25316 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25316[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__);

(statearr_25316[(1)] = (1));

return statearr_25316;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1 = (function (state_25304){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_25304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e25317){if((e25317 instanceof Object)){
var ex__24960__auto__ = e25317;
var statearr_25318_25421 = state_25304;
(statearr_25318_25421[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25422 = state_25304;
state_25304 = G__25422;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__ = function(state_25304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1.call(this,state_25304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___25414,jobs,results,process,async))
})();
var state__25053__auto__ = (function (){var statearr_25319 = f__25052__auto__.call(null);
(statearr_25319[(6)] = c__25051__auto___25414);

return statearr_25319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___25414,jobs,results,process,async))
);


var c__25051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto__,jobs,results,process,async){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto__,jobs,results,process,async){
return (function (state_25357){
var state_val_25358 = (state_25357[(1)]);
if((state_val_25358 === (7))){
var inst_25353 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25359_25423 = state_25357__$1;
(statearr_25359_25423[(2)] = inst_25353);

(statearr_25359_25423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (20))){
var state_25357__$1 = state_25357;
var statearr_25360_25424 = state_25357__$1;
(statearr_25360_25424[(2)] = null);

(statearr_25360_25424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (1))){
var state_25357__$1 = state_25357;
var statearr_25361_25425 = state_25357__$1;
(statearr_25361_25425[(2)] = null);

(statearr_25361_25425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (4))){
var inst_25322 = (state_25357[(7)]);
var inst_25322__$1 = (state_25357[(2)]);
var inst_25323 = (inst_25322__$1 == null);
var state_25357__$1 = (function (){var statearr_25362 = state_25357;
(statearr_25362[(7)] = inst_25322__$1);

return statearr_25362;
})();
if(cljs.core.truth_(inst_25323)){
var statearr_25363_25426 = state_25357__$1;
(statearr_25363_25426[(1)] = (5));

} else {
var statearr_25364_25427 = state_25357__$1;
(statearr_25364_25427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (15))){
var inst_25335 = (state_25357[(8)]);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25357__$1,(18),to,inst_25335);
} else {
if((state_val_25358 === (21))){
var inst_25348 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25365_25428 = state_25357__$1;
(statearr_25365_25428[(2)] = inst_25348);

(statearr_25365_25428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (13))){
var inst_25350 = (state_25357[(2)]);
var state_25357__$1 = (function (){var statearr_25366 = state_25357;
(statearr_25366[(9)] = inst_25350);

return statearr_25366;
})();
var statearr_25367_25429 = state_25357__$1;
(statearr_25367_25429[(2)] = null);

(statearr_25367_25429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (6))){
var inst_25322 = (state_25357[(7)]);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25357__$1,(11),inst_25322);
} else {
if((state_val_25358 === (17))){
var inst_25343 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
if(cljs.core.truth_(inst_25343)){
var statearr_25368_25430 = state_25357__$1;
(statearr_25368_25430[(1)] = (19));

} else {
var statearr_25369_25431 = state_25357__$1;
(statearr_25369_25431[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (3))){
var inst_25355 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25357__$1,inst_25355);
} else {
if((state_val_25358 === (12))){
var inst_25332 = (state_25357[(10)]);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25357__$1,(14),inst_25332);
} else {
if((state_val_25358 === (2))){
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25357__$1,(4),results);
} else {
if((state_val_25358 === (19))){
var state_25357__$1 = state_25357;
var statearr_25370_25432 = state_25357__$1;
(statearr_25370_25432[(2)] = null);

(statearr_25370_25432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (11))){
var inst_25332 = (state_25357[(2)]);
var state_25357__$1 = (function (){var statearr_25371 = state_25357;
(statearr_25371[(10)] = inst_25332);

return statearr_25371;
})();
var statearr_25372_25433 = state_25357__$1;
(statearr_25372_25433[(2)] = null);

(statearr_25372_25433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (9))){
var state_25357__$1 = state_25357;
var statearr_25373_25434 = state_25357__$1;
(statearr_25373_25434[(2)] = null);

(statearr_25373_25434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (5))){
var state_25357__$1 = state_25357;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25374_25435 = state_25357__$1;
(statearr_25374_25435[(1)] = (8));

} else {
var statearr_25375_25436 = state_25357__$1;
(statearr_25375_25436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (14))){
var inst_25337 = (state_25357[(11)]);
var inst_25335 = (state_25357[(8)]);
var inst_25335__$1 = (state_25357[(2)]);
var inst_25336 = (inst_25335__$1 == null);
var inst_25337__$1 = cljs.core.not.call(null,inst_25336);
var state_25357__$1 = (function (){var statearr_25376 = state_25357;
(statearr_25376[(11)] = inst_25337__$1);

(statearr_25376[(8)] = inst_25335__$1);

return statearr_25376;
})();
if(inst_25337__$1){
var statearr_25377_25437 = state_25357__$1;
(statearr_25377_25437[(1)] = (15));

} else {
var statearr_25378_25438 = state_25357__$1;
(statearr_25378_25438[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (16))){
var inst_25337 = (state_25357[(11)]);
var state_25357__$1 = state_25357;
var statearr_25379_25439 = state_25357__$1;
(statearr_25379_25439[(2)] = inst_25337);

(statearr_25379_25439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (10))){
var inst_25329 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25380_25440 = state_25357__$1;
(statearr_25380_25440[(2)] = inst_25329);

(statearr_25380_25440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (18))){
var inst_25340 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25381_25441 = state_25357__$1;
(statearr_25381_25441[(2)] = inst_25340);

(statearr_25381_25441[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (8))){
var inst_25326 = cljs.core.async.close_BANG_.call(null,to);
var state_25357__$1 = state_25357;
var statearr_25382_25442 = state_25357__$1;
(statearr_25382_25442[(2)] = inst_25326);

(statearr_25382_25442[(1)] = (10));


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
});})(c__25051__auto__,jobs,results,process,async))
;
return ((function (switch__24956__auto__,c__25051__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0 = (function (){
var statearr_25383 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__);

(statearr_25383[(1)] = (1));

return statearr_25383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1 = (function (state_25357){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_25357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e25384){if((e25384 instanceof Object)){
var ex__24960__auto__ = e25384;
var statearr_25385_25443 = state_25357;
(statearr_25385_25443[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25444 = state_25357;
state_25357 = G__25444;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__ = function(state_25357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1.call(this,state_25357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24957__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto__,jobs,results,process,async))
})();
var state__25053__auto__ = (function (){var statearr_25386 = f__25052__auto__.call(null);
(statearr_25386[(6)] = c__25051__auto__);

return statearr_25386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto__,jobs,results,process,async))
);

return c__25051__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25446 = arguments.length;
switch (G__25446) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25449 = arguments.length;
switch (G__25449) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25452 = arguments.length;
switch (G__25452) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25051__auto___25501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___25501,tc,fc){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___25501,tc,fc){
return (function (state_25478){
var state_val_25479 = (state_25478[(1)]);
if((state_val_25479 === (7))){
var inst_25474 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
var statearr_25480_25502 = state_25478__$1;
(statearr_25480_25502[(2)] = inst_25474);

(statearr_25480_25502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (1))){
var state_25478__$1 = state_25478;
var statearr_25481_25503 = state_25478__$1;
(statearr_25481_25503[(2)] = null);

(statearr_25481_25503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (4))){
var inst_25455 = (state_25478[(7)]);
var inst_25455__$1 = (state_25478[(2)]);
var inst_25456 = (inst_25455__$1 == null);
var state_25478__$1 = (function (){var statearr_25482 = state_25478;
(statearr_25482[(7)] = inst_25455__$1);

return statearr_25482;
})();
if(cljs.core.truth_(inst_25456)){
var statearr_25483_25504 = state_25478__$1;
(statearr_25483_25504[(1)] = (5));

} else {
var statearr_25484_25505 = state_25478__$1;
(statearr_25484_25505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (13))){
var state_25478__$1 = state_25478;
var statearr_25485_25506 = state_25478__$1;
(statearr_25485_25506[(2)] = null);

(statearr_25485_25506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (6))){
var inst_25455 = (state_25478[(7)]);
var inst_25461 = p.call(null,inst_25455);
var state_25478__$1 = state_25478;
if(cljs.core.truth_(inst_25461)){
var statearr_25486_25507 = state_25478__$1;
(statearr_25486_25507[(1)] = (9));

} else {
var statearr_25487_25508 = state_25478__$1;
(statearr_25487_25508[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (3))){
var inst_25476 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25478__$1,inst_25476);
} else {
if((state_val_25479 === (12))){
var state_25478__$1 = state_25478;
var statearr_25488_25509 = state_25478__$1;
(statearr_25488_25509[(2)] = null);

(statearr_25488_25509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (2))){
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25478__$1,(4),ch);
} else {
if((state_val_25479 === (11))){
var inst_25455 = (state_25478[(7)]);
var inst_25465 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25478__$1,(8),inst_25465,inst_25455);
} else {
if((state_val_25479 === (9))){
var state_25478__$1 = state_25478;
var statearr_25489_25510 = state_25478__$1;
(statearr_25489_25510[(2)] = tc);

(statearr_25489_25510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (5))){
var inst_25458 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25459 = cljs.core.async.close_BANG_.call(null,fc);
var state_25478__$1 = (function (){var statearr_25490 = state_25478;
(statearr_25490[(8)] = inst_25458);

return statearr_25490;
})();
var statearr_25491_25511 = state_25478__$1;
(statearr_25491_25511[(2)] = inst_25459);

(statearr_25491_25511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (14))){
var inst_25472 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
var statearr_25492_25512 = state_25478__$1;
(statearr_25492_25512[(2)] = inst_25472);

(statearr_25492_25512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (10))){
var state_25478__$1 = state_25478;
var statearr_25493_25513 = state_25478__$1;
(statearr_25493_25513[(2)] = fc);

(statearr_25493_25513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (8))){
var inst_25467 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
if(cljs.core.truth_(inst_25467)){
var statearr_25494_25514 = state_25478__$1;
(statearr_25494_25514[(1)] = (12));

} else {
var statearr_25495_25515 = state_25478__$1;
(statearr_25495_25515[(1)] = (13));

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
});})(c__25051__auto___25501,tc,fc))
;
return ((function (switch__24956__auto__,c__25051__auto___25501,tc,fc){
return (function() {
var cljs$core$async$state_machine__24957__auto__ = null;
var cljs$core$async$state_machine__24957__auto____0 = (function (){
var statearr_25496 = [null,null,null,null,null,null,null,null,null];
(statearr_25496[(0)] = cljs$core$async$state_machine__24957__auto__);

(statearr_25496[(1)] = (1));

return statearr_25496;
});
var cljs$core$async$state_machine__24957__auto____1 = (function (state_25478){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_25478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e25497){if((e25497 instanceof Object)){
var ex__24960__auto__ = e25497;
var statearr_25498_25516 = state_25478;
(statearr_25498_25516[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25517 = state_25478;
state_25478 = G__25517;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$state_machine__24957__auto__ = function(state_25478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24957__auto____1.call(this,state_25478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24957__auto____0;
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24957__auto____1;
return cljs$core$async$state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___25501,tc,fc))
})();
var state__25053__auto__ = (function (){var statearr_25499 = f__25052__auto__.call(null);
(statearr_25499[(6)] = c__25051__auto___25501);

return statearr_25499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___25501,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto__){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto__){
return (function (state_25538){
var state_val_25539 = (state_25538[(1)]);
if((state_val_25539 === (7))){
var inst_25534 = (state_25538[(2)]);
var state_25538__$1 = state_25538;
var statearr_25540_25558 = state_25538__$1;
(statearr_25540_25558[(2)] = inst_25534);

(statearr_25540_25558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (1))){
var inst_25518 = init;
var state_25538__$1 = (function (){var statearr_25541 = state_25538;
(statearr_25541[(7)] = inst_25518);

return statearr_25541;
})();
var statearr_25542_25559 = state_25538__$1;
(statearr_25542_25559[(2)] = null);

(statearr_25542_25559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (4))){
var inst_25521 = (state_25538[(8)]);
var inst_25521__$1 = (state_25538[(2)]);
var inst_25522 = (inst_25521__$1 == null);
var state_25538__$1 = (function (){var statearr_25543 = state_25538;
(statearr_25543[(8)] = inst_25521__$1);

return statearr_25543;
})();
if(cljs.core.truth_(inst_25522)){
var statearr_25544_25560 = state_25538__$1;
(statearr_25544_25560[(1)] = (5));

} else {
var statearr_25545_25561 = state_25538__$1;
(statearr_25545_25561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (6))){
var inst_25525 = (state_25538[(9)]);
var inst_25518 = (state_25538[(7)]);
var inst_25521 = (state_25538[(8)]);
var inst_25525__$1 = f.call(null,inst_25518,inst_25521);
var inst_25526 = cljs.core.reduced_QMARK_.call(null,inst_25525__$1);
var state_25538__$1 = (function (){var statearr_25546 = state_25538;
(statearr_25546[(9)] = inst_25525__$1);

return statearr_25546;
})();
if(inst_25526){
var statearr_25547_25562 = state_25538__$1;
(statearr_25547_25562[(1)] = (8));

} else {
var statearr_25548_25563 = state_25538__$1;
(statearr_25548_25563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (3))){
var inst_25536 = (state_25538[(2)]);
var state_25538__$1 = state_25538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25538__$1,inst_25536);
} else {
if((state_val_25539 === (2))){
var state_25538__$1 = state_25538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25538__$1,(4),ch);
} else {
if((state_val_25539 === (9))){
var inst_25525 = (state_25538[(9)]);
var inst_25518 = inst_25525;
var state_25538__$1 = (function (){var statearr_25549 = state_25538;
(statearr_25549[(7)] = inst_25518);

return statearr_25549;
})();
var statearr_25550_25564 = state_25538__$1;
(statearr_25550_25564[(2)] = null);

(statearr_25550_25564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (5))){
var inst_25518 = (state_25538[(7)]);
var state_25538__$1 = state_25538;
var statearr_25551_25565 = state_25538__$1;
(statearr_25551_25565[(2)] = inst_25518);

(statearr_25551_25565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (10))){
var inst_25532 = (state_25538[(2)]);
var state_25538__$1 = state_25538;
var statearr_25552_25566 = state_25538__$1;
(statearr_25552_25566[(2)] = inst_25532);

(statearr_25552_25566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25539 === (8))){
var inst_25525 = (state_25538[(9)]);
var inst_25528 = cljs.core.deref.call(null,inst_25525);
var state_25538__$1 = state_25538;
var statearr_25553_25567 = state_25538__$1;
(statearr_25553_25567[(2)] = inst_25528);

(statearr_25553_25567[(1)] = (10));


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
});})(c__25051__auto__))
;
return ((function (switch__24956__auto__,c__25051__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24957__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24957__auto____0 = (function (){
var statearr_25554 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25554[(0)] = cljs$core$async$reduce_$_state_machine__24957__auto__);

(statearr_25554[(1)] = (1));

return statearr_25554;
});
var cljs$core$async$reduce_$_state_machine__24957__auto____1 = (function (state_25538){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_25538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e25555){if((e25555 instanceof Object)){
var ex__24960__auto__ = e25555;
var statearr_25556_25568 = state_25538;
(statearr_25556_25568[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25569 = state_25538;
state_25538 = G__25569;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24957__auto__ = function(state_25538){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24957__auto____1.call(this,state_25538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24957__auto____0;
cljs$core$async$reduce_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24957__auto____1;
return cljs$core$async$reduce_$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto__))
})();
var state__25053__auto__ = (function (){var statearr_25557 = f__25052__auto__.call(null);
(statearr_25557[(6)] = c__25051__auto__);

return statearr_25557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto__))
);

return c__25051__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto__,f__$1){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto__,f__$1){
return (function (state_25575){
var state_val_25576 = (state_25575[(1)]);
if((state_val_25576 === (1))){
var inst_25570 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25575__$1,(2),inst_25570);
} else {
if((state_val_25576 === (2))){
var inst_25572 = (state_25575[(2)]);
var inst_25573 = f__$1.call(null,inst_25572);
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25575__$1,inst_25573);
} else {
return null;
}
}
});})(c__25051__auto__,f__$1))
;
return ((function (switch__24956__auto__,c__25051__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24957__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24957__auto____0 = (function (){
var statearr_25577 = [null,null,null,null,null,null,null];
(statearr_25577[(0)] = cljs$core$async$transduce_$_state_machine__24957__auto__);

(statearr_25577[(1)] = (1));

return statearr_25577;
});
var cljs$core$async$transduce_$_state_machine__24957__auto____1 = (function (state_25575){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_25575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e25578){if((e25578 instanceof Object)){
var ex__24960__auto__ = e25578;
var statearr_25579_25581 = state_25575;
(statearr_25579_25581[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25582 = state_25575;
state_25575 = G__25582;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24957__auto__ = function(state_25575){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24957__auto____1.call(this,state_25575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24957__auto____0;
cljs$core$async$transduce_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24957__auto____1;
return cljs$core$async$transduce_$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto__,f__$1))
})();
var state__25053__auto__ = (function (){var statearr_25580 = f__25052__auto__.call(null);
(statearr_25580[(6)] = c__25051__auto__);

return statearr_25580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto__,f__$1))
);

return c__25051__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25584 = arguments.length;
switch (G__25584) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto__){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto__){
return (function (state_25609){
var state_val_25610 = (state_25609[(1)]);
if((state_val_25610 === (7))){
var inst_25591 = (state_25609[(2)]);
var state_25609__$1 = state_25609;
var statearr_25611_25632 = state_25609__$1;
(statearr_25611_25632[(2)] = inst_25591);

(statearr_25611_25632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (1))){
var inst_25585 = cljs.core.seq.call(null,coll);
var inst_25586 = inst_25585;
var state_25609__$1 = (function (){var statearr_25612 = state_25609;
(statearr_25612[(7)] = inst_25586);

return statearr_25612;
})();
var statearr_25613_25633 = state_25609__$1;
(statearr_25613_25633[(2)] = null);

(statearr_25613_25633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (4))){
var inst_25586 = (state_25609[(7)]);
var inst_25589 = cljs.core.first.call(null,inst_25586);
var state_25609__$1 = state_25609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25609__$1,(7),ch,inst_25589);
} else {
if((state_val_25610 === (13))){
var inst_25603 = (state_25609[(2)]);
var state_25609__$1 = state_25609;
var statearr_25614_25634 = state_25609__$1;
(statearr_25614_25634[(2)] = inst_25603);

(statearr_25614_25634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (6))){
var inst_25594 = (state_25609[(2)]);
var state_25609__$1 = state_25609;
if(cljs.core.truth_(inst_25594)){
var statearr_25615_25635 = state_25609__$1;
(statearr_25615_25635[(1)] = (8));

} else {
var statearr_25616_25636 = state_25609__$1;
(statearr_25616_25636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (3))){
var inst_25607 = (state_25609[(2)]);
var state_25609__$1 = state_25609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25609__$1,inst_25607);
} else {
if((state_val_25610 === (12))){
var state_25609__$1 = state_25609;
var statearr_25617_25637 = state_25609__$1;
(statearr_25617_25637[(2)] = null);

(statearr_25617_25637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (2))){
var inst_25586 = (state_25609[(7)]);
var state_25609__$1 = state_25609;
if(cljs.core.truth_(inst_25586)){
var statearr_25618_25638 = state_25609__$1;
(statearr_25618_25638[(1)] = (4));

} else {
var statearr_25619_25639 = state_25609__$1;
(statearr_25619_25639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (11))){
var inst_25600 = cljs.core.async.close_BANG_.call(null,ch);
var state_25609__$1 = state_25609;
var statearr_25620_25640 = state_25609__$1;
(statearr_25620_25640[(2)] = inst_25600);

(statearr_25620_25640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (9))){
var state_25609__$1 = state_25609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25621_25641 = state_25609__$1;
(statearr_25621_25641[(1)] = (11));

} else {
var statearr_25622_25642 = state_25609__$1;
(statearr_25622_25642[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (5))){
var inst_25586 = (state_25609[(7)]);
var state_25609__$1 = state_25609;
var statearr_25623_25643 = state_25609__$1;
(statearr_25623_25643[(2)] = inst_25586);

(statearr_25623_25643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (10))){
var inst_25605 = (state_25609[(2)]);
var state_25609__$1 = state_25609;
var statearr_25624_25644 = state_25609__$1;
(statearr_25624_25644[(2)] = inst_25605);

(statearr_25624_25644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (8))){
var inst_25586 = (state_25609[(7)]);
var inst_25596 = cljs.core.next.call(null,inst_25586);
var inst_25586__$1 = inst_25596;
var state_25609__$1 = (function (){var statearr_25625 = state_25609;
(statearr_25625[(7)] = inst_25586__$1);

return statearr_25625;
})();
var statearr_25626_25645 = state_25609__$1;
(statearr_25626_25645[(2)] = null);

(statearr_25626_25645[(1)] = (2));


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
});})(c__25051__auto__))
;
return ((function (switch__24956__auto__,c__25051__auto__){
return (function() {
var cljs$core$async$state_machine__24957__auto__ = null;
var cljs$core$async$state_machine__24957__auto____0 = (function (){
var statearr_25627 = [null,null,null,null,null,null,null,null];
(statearr_25627[(0)] = cljs$core$async$state_machine__24957__auto__);

(statearr_25627[(1)] = (1));

return statearr_25627;
});
var cljs$core$async$state_machine__24957__auto____1 = (function (state_25609){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_25609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e25628){if((e25628 instanceof Object)){
var ex__24960__auto__ = e25628;
var statearr_25629_25646 = state_25609;
(statearr_25629_25646[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25647 = state_25609;
state_25609 = G__25647;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$state_machine__24957__auto__ = function(state_25609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24957__auto____1.call(this,state_25609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24957__auto____0;
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24957__auto____1;
return cljs$core$async$state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto__))
})();
var state__25053__auto__ = (function (){var statearr_25630 = f__25052__auto__.call(null);
(statearr_25630[(6)] = c__25051__auto__);

return statearr_25630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto__))
);

return c__25051__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25648 = (function (ch,cs,meta25649){
this.ch = ch;
this.cs = cs;
this.meta25649 = meta25649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25650,meta25649__$1){
var self__ = this;
var _25650__$1 = this;
return (new cljs.core.async.t_cljs$core$async25648(self__.ch,self__.cs,meta25649__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25650){
var self__ = this;
var _25650__$1 = this;
return self__.meta25649;
});})(cs))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25648.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25649","meta25649",-1114013517,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25648";

cljs.core.async.t_cljs$core$async25648.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25648");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25648.
 */
cljs.core.async.__GT_t_cljs$core$async25648 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25648(ch__$1,cs__$1,meta25649){
return (new cljs.core.async.t_cljs$core$async25648(ch__$1,cs__$1,meta25649));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25648(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25051__auto___25870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___25870,cs,m,dchan,dctr,done){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___25870,cs,m,dchan,dctr,done){
return (function (state_25785){
var state_val_25786 = (state_25785[(1)]);
if((state_val_25786 === (7))){
var inst_25781 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25787_25871 = state_25785__$1;
(statearr_25787_25871[(2)] = inst_25781);

(statearr_25787_25871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (20))){
var inst_25684 = (state_25785[(7)]);
var inst_25696 = cljs.core.first.call(null,inst_25684);
var inst_25697 = cljs.core.nth.call(null,inst_25696,(0),null);
var inst_25698 = cljs.core.nth.call(null,inst_25696,(1),null);
var state_25785__$1 = (function (){var statearr_25788 = state_25785;
(statearr_25788[(8)] = inst_25697);

return statearr_25788;
})();
if(cljs.core.truth_(inst_25698)){
var statearr_25789_25872 = state_25785__$1;
(statearr_25789_25872[(1)] = (22));

} else {
var statearr_25790_25873 = state_25785__$1;
(statearr_25790_25873[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (27))){
var inst_25653 = (state_25785[(9)]);
var inst_25728 = (state_25785[(10)]);
var inst_25726 = (state_25785[(11)]);
var inst_25733 = (state_25785[(12)]);
var inst_25733__$1 = cljs.core._nth.call(null,inst_25726,inst_25728);
var inst_25734 = cljs.core.async.put_BANG_.call(null,inst_25733__$1,inst_25653,done);
var state_25785__$1 = (function (){var statearr_25791 = state_25785;
(statearr_25791[(12)] = inst_25733__$1);

return statearr_25791;
})();
if(cljs.core.truth_(inst_25734)){
var statearr_25792_25874 = state_25785__$1;
(statearr_25792_25874[(1)] = (30));

} else {
var statearr_25793_25875 = state_25785__$1;
(statearr_25793_25875[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (1))){
var state_25785__$1 = state_25785;
var statearr_25794_25876 = state_25785__$1;
(statearr_25794_25876[(2)] = null);

(statearr_25794_25876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (24))){
var inst_25684 = (state_25785[(7)]);
var inst_25703 = (state_25785[(2)]);
var inst_25704 = cljs.core.next.call(null,inst_25684);
var inst_25662 = inst_25704;
var inst_25663 = null;
var inst_25664 = (0);
var inst_25665 = (0);
var state_25785__$1 = (function (){var statearr_25795 = state_25785;
(statearr_25795[(13)] = inst_25662);

(statearr_25795[(14)] = inst_25663);

(statearr_25795[(15)] = inst_25665);

(statearr_25795[(16)] = inst_25664);

(statearr_25795[(17)] = inst_25703);

return statearr_25795;
})();
var statearr_25796_25877 = state_25785__$1;
(statearr_25796_25877[(2)] = null);

(statearr_25796_25877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (39))){
var state_25785__$1 = state_25785;
var statearr_25800_25878 = state_25785__$1;
(statearr_25800_25878[(2)] = null);

(statearr_25800_25878[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (4))){
var inst_25653 = (state_25785[(9)]);
var inst_25653__$1 = (state_25785[(2)]);
var inst_25654 = (inst_25653__$1 == null);
var state_25785__$1 = (function (){var statearr_25801 = state_25785;
(statearr_25801[(9)] = inst_25653__$1);

return statearr_25801;
})();
if(cljs.core.truth_(inst_25654)){
var statearr_25802_25879 = state_25785__$1;
(statearr_25802_25879[(1)] = (5));

} else {
var statearr_25803_25880 = state_25785__$1;
(statearr_25803_25880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (15))){
var inst_25662 = (state_25785[(13)]);
var inst_25663 = (state_25785[(14)]);
var inst_25665 = (state_25785[(15)]);
var inst_25664 = (state_25785[(16)]);
var inst_25680 = (state_25785[(2)]);
var inst_25681 = (inst_25665 + (1));
var tmp25797 = inst_25662;
var tmp25798 = inst_25663;
var tmp25799 = inst_25664;
var inst_25662__$1 = tmp25797;
var inst_25663__$1 = tmp25798;
var inst_25664__$1 = tmp25799;
var inst_25665__$1 = inst_25681;
var state_25785__$1 = (function (){var statearr_25804 = state_25785;
(statearr_25804[(13)] = inst_25662__$1);

(statearr_25804[(18)] = inst_25680);

(statearr_25804[(14)] = inst_25663__$1);

(statearr_25804[(15)] = inst_25665__$1);

(statearr_25804[(16)] = inst_25664__$1);

return statearr_25804;
})();
var statearr_25805_25881 = state_25785__$1;
(statearr_25805_25881[(2)] = null);

(statearr_25805_25881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (21))){
var inst_25707 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25809_25882 = state_25785__$1;
(statearr_25809_25882[(2)] = inst_25707);

(statearr_25809_25882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (31))){
var inst_25733 = (state_25785[(12)]);
var inst_25737 = done.call(null,null);
var inst_25738 = cljs.core.async.untap_STAR_.call(null,m,inst_25733);
var state_25785__$1 = (function (){var statearr_25810 = state_25785;
(statearr_25810[(19)] = inst_25737);

return statearr_25810;
})();
var statearr_25811_25883 = state_25785__$1;
(statearr_25811_25883[(2)] = inst_25738);

(statearr_25811_25883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (32))){
var inst_25728 = (state_25785[(10)]);
var inst_25725 = (state_25785[(20)]);
var inst_25727 = (state_25785[(21)]);
var inst_25726 = (state_25785[(11)]);
var inst_25740 = (state_25785[(2)]);
var inst_25741 = (inst_25728 + (1));
var tmp25806 = inst_25725;
var tmp25807 = inst_25727;
var tmp25808 = inst_25726;
var inst_25725__$1 = tmp25806;
var inst_25726__$1 = tmp25808;
var inst_25727__$1 = tmp25807;
var inst_25728__$1 = inst_25741;
var state_25785__$1 = (function (){var statearr_25812 = state_25785;
(statearr_25812[(22)] = inst_25740);

(statearr_25812[(10)] = inst_25728__$1);

(statearr_25812[(20)] = inst_25725__$1);

(statearr_25812[(21)] = inst_25727__$1);

(statearr_25812[(11)] = inst_25726__$1);

return statearr_25812;
})();
var statearr_25813_25884 = state_25785__$1;
(statearr_25813_25884[(2)] = null);

(statearr_25813_25884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (40))){
var inst_25753 = (state_25785[(23)]);
var inst_25757 = done.call(null,null);
var inst_25758 = cljs.core.async.untap_STAR_.call(null,m,inst_25753);
var state_25785__$1 = (function (){var statearr_25814 = state_25785;
(statearr_25814[(24)] = inst_25757);

return statearr_25814;
})();
var statearr_25815_25885 = state_25785__$1;
(statearr_25815_25885[(2)] = inst_25758);

(statearr_25815_25885[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (33))){
var inst_25744 = (state_25785[(25)]);
var inst_25746 = cljs.core.chunked_seq_QMARK_.call(null,inst_25744);
var state_25785__$1 = state_25785;
if(inst_25746){
var statearr_25816_25886 = state_25785__$1;
(statearr_25816_25886[(1)] = (36));

} else {
var statearr_25817_25887 = state_25785__$1;
(statearr_25817_25887[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (13))){
var inst_25674 = (state_25785[(26)]);
var inst_25677 = cljs.core.async.close_BANG_.call(null,inst_25674);
var state_25785__$1 = state_25785;
var statearr_25818_25888 = state_25785__$1;
(statearr_25818_25888[(2)] = inst_25677);

(statearr_25818_25888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (22))){
var inst_25697 = (state_25785[(8)]);
var inst_25700 = cljs.core.async.close_BANG_.call(null,inst_25697);
var state_25785__$1 = state_25785;
var statearr_25819_25889 = state_25785__$1;
(statearr_25819_25889[(2)] = inst_25700);

(statearr_25819_25889[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (36))){
var inst_25744 = (state_25785[(25)]);
var inst_25748 = cljs.core.chunk_first.call(null,inst_25744);
var inst_25749 = cljs.core.chunk_rest.call(null,inst_25744);
var inst_25750 = cljs.core.count.call(null,inst_25748);
var inst_25725 = inst_25749;
var inst_25726 = inst_25748;
var inst_25727 = inst_25750;
var inst_25728 = (0);
var state_25785__$1 = (function (){var statearr_25820 = state_25785;
(statearr_25820[(10)] = inst_25728);

(statearr_25820[(20)] = inst_25725);

(statearr_25820[(21)] = inst_25727);

(statearr_25820[(11)] = inst_25726);

return statearr_25820;
})();
var statearr_25821_25890 = state_25785__$1;
(statearr_25821_25890[(2)] = null);

(statearr_25821_25890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (41))){
var inst_25744 = (state_25785[(25)]);
var inst_25760 = (state_25785[(2)]);
var inst_25761 = cljs.core.next.call(null,inst_25744);
var inst_25725 = inst_25761;
var inst_25726 = null;
var inst_25727 = (0);
var inst_25728 = (0);
var state_25785__$1 = (function (){var statearr_25822 = state_25785;
(statearr_25822[(10)] = inst_25728);

(statearr_25822[(20)] = inst_25725);

(statearr_25822[(21)] = inst_25727);

(statearr_25822[(11)] = inst_25726);

(statearr_25822[(27)] = inst_25760);

return statearr_25822;
})();
var statearr_25823_25891 = state_25785__$1;
(statearr_25823_25891[(2)] = null);

(statearr_25823_25891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (43))){
var state_25785__$1 = state_25785;
var statearr_25824_25892 = state_25785__$1;
(statearr_25824_25892[(2)] = null);

(statearr_25824_25892[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (29))){
var inst_25769 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25825_25893 = state_25785__$1;
(statearr_25825_25893[(2)] = inst_25769);

(statearr_25825_25893[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (44))){
var inst_25778 = (state_25785[(2)]);
var state_25785__$1 = (function (){var statearr_25826 = state_25785;
(statearr_25826[(28)] = inst_25778);

return statearr_25826;
})();
var statearr_25827_25894 = state_25785__$1;
(statearr_25827_25894[(2)] = null);

(statearr_25827_25894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (6))){
var inst_25717 = (state_25785[(29)]);
var inst_25716 = cljs.core.deref.call(null,cs);
var inst_25717__$1 = cljs.core.keys.call(null,inst_25716);
var inst_25718 = cljs.core.count.call(null,inst_25717__$1);
var inst_25719 = cljs.core.reset_BANG_.call(null,dctr,inst_25718);
var inst_25724 = cljs.core.seq.call(null,inst_25717__$1);
var inst_25725 = inst_25724;
var inst_25726 = null;
var inst_25727 = (0);
var inst_25728 = (0);
var state_25785__$1 = (function (){var statearr_25828 = state_25785;
(statearr_25828[(10)] = inst_25728);

(statearr_25828[(20)] = inst_25725);

(statearr_25828[(30)] = inst_25719);

(statearr_25828[(29)] = inst_25717__$1);

(statearr_25828[(21)] = inst_25727);

(statearr_25828[(11)] = inst_25726);

return statearr_25828;
})();
var statearr_25829_25895 = state_25785__$1;
(statearr_25829_25895[(2)] = null);

(statearr_25829_25895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (28))){
var inst_25744 = (state_25785[(25)]);
var inst_25725 = (state_25785[(20)]);
var inst_25744__$1 = cljs.core.seq.call(null,inst_25725);
var state_25785__$1 = (function (){var statearr_25830 = state_25785;
(statearr_25830[(25)] = inst_25744__$1);

return statearr_25830;
})();
if(inst_25744__$1){
var statearr_25831_25896 = state_25785__$1;
(statearr_25831_25896[(1)] = (33));

} else {
var statearr_25832_25897 = state_25785__$1;
(statearr_25832_25897[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (25))){
var inst_25728 = (state_25785[(10)]);
var inst_25727 = (state_25785[(21)]);
var inst_25730 = (inst_25728 < inst_25727);
var inst_25731 = inst_25730;
var state_25785__$1 = state_25785;
if(cljs.core.truth_(inst_25731)){
var statearr_25833_25898 = state_25785__$1;
(statearr_25833_25898[(1)] = (27));

} else {
var statearr_25834_25899 = state_25785__$1;
(statearr_25834_25899[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (34))){
var state_25785__$1 = state_25785;
var statearr_25835_25900 = state_25785__$1;
(statearr_25835_25900[(2)] = null);

(statearr_25835_25900[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (17))){
var state_25785__$1 = state_25785;
var statearr_25836_25901 = state_25785__$1;
(statearr_25836_25901[(2)] = null);

(statearr_25836_25901[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (3))){
var inst_25783 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25785__$1,inst_25783);
} else {
if((state_val_25786 === (12))){
var inst_25712 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25837_25902 = state_25785__$1;
(statearr_25837_25902[(2)] = inst_25712);

(statearr_25837_25902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (2))){
var state_25785__$1 = state_25785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25785__$1,(4),ch);
} else {
if((state_val_25786 === (23))){
var state_25785__$1 = state_25785;
var statearr_25838_25903 = state_25785__$1;
(statearr_25838_25903[(2)] = null);

(statearr_25838_25903[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (35))){
var inst_25767 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25839_25904 = state_25785__$1;
(statearr_25839_25904[(2)] = inst_25767);

(statearr_25839_25904[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (19))){
var inst_25684 = (state_25785[(7)]);
var inst_25688 = cljs.core.chunk_first.call(null,inst_25684);
var inst_25689 = cljs.core.chunk_rest.call(null,inst_25684);
var inst_25690 = cljs.core.count.call(null,inst_25688);
var inst_25662 = inst_25689;
var inst_25663 = inst_25688;
var inst_25664 = inst_25690;
var inst_25665 = (0);
var state_25785__$1 = (function (){var statearr_25840 = state_25785;
(statearr_25840[(13)] = inst_25662);

(statearr_25840[(14)] = inst_25663);

(statearr_25840[(15)] = inst_25665);

(statearr_25840[(16)] = inst_25664);

return statearr_25840;
})();
var statearr_25841_25905 = state_25785__$1;
(statearr_25841_25905[(2)] = null);

(statearr_25841_25905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (11))){
var inst_25662 = (state_25785[(13)]);
var inst_25684 = (state_25785[(7)]);
var inst_25684__$1 = cljs.core.seq.call(null,inst_25662);
var state_25785__$1 = (function (){var statearr_25842 = state_25785;
(statearr_25842[(7)] = inst_25684__$1);

return statearr_25842;
})();
if(inst_25684__$1){
var statearr_25843_25906 = state_25785__$1;
(statearr_25843_25906[(1)] = (16));

} else {
var statearr_25844_25907 = state_25785__$1;
(statearr_25844_25907[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (9))){
var inst_25714 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25845_25908 = state_25785__$1;
(statearr_25845_25908[(2)] = inst_25714);

(statearr_25845_25908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (5))){
var inst_25660 = cljs.core.deref.call(null,cs);
var inst_25661 = cljs.core.seq.call(null,inst_25660);
var inst_25662 = inst_25661;
var inst_25663 = null;
var inst_25664 = (0);
var inst_25665 = (0);
var state_25785__$1 = (function (){var statearr_25846 = state_25785;
(statearr_25846[(13)] = inst_25662);

(statearr_25846[(14)] = inst_25663);

(statearr_25846[(15)] = inst_25665);

(statearr_25846[(16)] = inst_25664);

return statearr_25846;
})();
var statearr_25847_25909 = state_25785__$1;
(statearr_25847_25909[(2)] = null);

(statearr_25847_25909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (14))){
var state_25785__$1 = state_25785;
var statearr_25848_25910 = state_25785__$1;
(statearr_25848_25910[(2)] = null);

(statearr_25848_25910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (45))){
var inst_25775 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25849_25911 = state_25785__$1;
(statearr_25849_25911[(2)] = inst_25775);

(statearr_25849_25911[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (26))){
var inst_25717 = (state_25785[(29)]);
var inst_25771 = (state_25785[(2)]);
var inst_25772 = cljs.core.seq.call(null,inst_25717);
var state_25785__$1 = (function (){var statearr_25850 = state_25785;
(statearr_25850[(31)] = inst_25771);

return statearr_25850;
})();
if(inst_25772){
var statearr_25851_25912 = state_25785__$1;
(statearr_25851_25912[(1)] = (42));

} else {
var statearr_25852_25913 = state_25785__$1;
(statearr_25852_25913[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (16))){
var inst_25684 = (state_25785[(7)]);
var inst_25686 = cljs.core.chunked_seq_QMARK_.call(null,inst_25684);
var state_25785__$1 = state_25785;
if(inst_25686){
var statearr_25853_25914 = state_25785__$1;
(statearr_25853_25914[(1)] = (19));

} else {
var statearr_25854_25915 = state_25785__$1;
(statearr_25854_25915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (38))){
var inst_25764 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25855_25916 = state_25785__$1;
(statearr_25855_25916[(2)] = inst_25764);

(statearr_25855_25916[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (30))){
var state_25785__$1 = state_25785;
var statearr_25856_25917 = state_25785__$1;
(statearr_25856_25917[(2)] = null);

(statearr_25856_25917[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (10))){
var inst_25663 = (state_25785[(14)]);
var inst_25665 = (state_25785[(15)]);
var inst_25673 = cljs.core._nth.call(null,inst_25663,inst_25665);
var inst_25674 = cljs.core.nth.call(null,inst_25673,(0),null);
var inst_25675 = cljs.core.nth.call(null,inst_25673,(1),null);
var state_25785__$1 = (function (){var statearr_25857 = state_25785;
(statearr_25857[(26)] = inst_25674);

return statearr_25857;
})();
if(cljs.core.truth_(inst_25675)){
var statearr_25858_25918 = state_25785__$1;
(statearr_25858_25918[(1)] = (13));

} else {
var statearr_25859_25919 = state_25785__$1;
(statearr_25859_25919[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (18))){
var inst_25710 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25860_25920 = state_25785__$1;
(statearr_25860_25920[(2)] = inst_25710);

(statearr_25860_25920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (42))){
var state_25785__$1 = state_25785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25785__$1,(45),dchan);
} else {
if((state_val_25786 === (37))){
var inst_25744 = (state_25785[(25)]);
var inst_25653 = (state_25785[(9)]);
var inst_25753 = (state_25785[(23)]);
var inst_25753__$1 = cljs.core.first.call(null,inst_25744);
var inst_25754 = cljs.core.async.put_BANG_.call(null,inst_25753__$1,inst_25653,done);
var state_25785__$1 = (function (){var statearr_25861 = state_25785;
(statearr_25861[(23)] = inst_25753__$1);

return statearr_25861;
})();
if(cljs.core.truth_(inst_25754)){
var statearr_25862_25921 = state_25785__$1;
(statearr_25862_25921[(1)] = (39));

} else {
var statearr_25863_25922 = state_25785__$1;
(statearr_25863_25922[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (8))){
var inst_25665 = (state_25785[(15)]);
var inst_25664 = (state_25785[(16)]);
var inst_25667 = (inst_25665 < inst_25664);
var inst_25668 = inst_25667;
var state_25785__$1 = state_25785;
if(cljs.core.truth_(inst_25668)){
var statearr_25864_25923 = state_25785__$1;
(statearr_25864_25923[(1)] = (10));

} else {
var statearr_25865_25924 = state_25785__$1;
(statearr_25865_25924[(1)] = (11));

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
});})(c__25051__auto___25870,cs,m,dchan,dctr,done))
;
return ((function (switch__24956__auto__,c__25051__auto___25870,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24957__auto__ = null;
var cljs$core$async$mult_$_state_machine__24957__auto____0 = (function (){
var statearr_25866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25866[(0)] = cljs$core$async$mult_$_state_machine__24957__auto__);

(statearr_25866[(1)] = (1));

return statearr_25866;
});
var cljs$core$async$mult_$_state_machine__24957__auto____1 = (function (state_25785){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_25785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e25867){if((e25867 instanceof Object)){
var ex__24960__auto__ = e25867;
var statearr_25868_25925 = state_25785;
(statearr_25868_25925[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25926 = state_25785;
state_25785 = G__25926;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24957__auto__ = function(state_25785){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24957__auto____1.call(this,state_25785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24957__auto____0;
cljs$core$async$mult_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24957__auto____1;
return cljs$core$async$mult_$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___25870,cs,m,dchan,dctr,done))
})();
var state__25053__auto__ = (function (){var statearr_25869 = f__25052__auto__.call(null);
(statearr_25869[(6)] = c__25051__auto___25870);

return statearr_25869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___25870,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25928 = arguments.length;
switch (G__25928) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25940 = arguments.length;
var i__4731__auto___25941 = (0);
while(true){
if((i__4731__auto___25941 < len__4730__auto___25940)){
args__4736__auto__.push((arguments[i__4731__auto___25941]));

var G__25942 = (i__4731__auto___25941 + (1));
i__4731__auto___25941 = G__25942;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25934){
var map__25935 = p__25934;
var map__25935__$1 = (((((!((map__25935 == null))))?(((((map__25935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25935):map__25935);
var opts = map__25935__$1;
var statearr_25937_25943 = state;
(statearr_25937_25943[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__25935,map__25935__$1,opts){
return (function (val){
var statearr_25938_25944 = state;
(statearr_25938_25944[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25935,map__25935__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_25939_25945 = state;
(statearr_25939_25945[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25930){
var G__25931 = cljs.core.first.call(null,seq25930);
var seq25930__$1 = cljs.core.next.call(null,seq25930);
var G__25932 = cljs.core.first.call(null,seq25930__$1);
var seq25930__$2 = cljs.core.next.call(null,seq25930__$1);
var G__25933 = cljs.core.first.call(null,seq25930__$2);
var seq25930__$3 = cljs.core.next.call(null,seq25930__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25931,G__25932,G__25933,seq25930__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25946 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25947){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25947 = meta25947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25948,meta25947__$1){
var self__ = this;
var _25948__$1 = this;
return (new cljs.core.async.t_cljs$core$async25946(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25947__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25948){
var self__ = this;
var _25948__$1 = this;
return self__.meta25947;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25946.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25946.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25946.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25946.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25946.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25946.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25946.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25946.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25947","meta25947",986396064,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25946.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25946";

cljs.core.async.t_cljs$core$async25946.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25946");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25946.
 */
cljs.core.async.__GT_t_cljs$core$async25946 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25946(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25947){
return (new cljs.core.async.t_cljs$core$async25946(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25947));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25946(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25051__auto___26110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___26110,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___26110,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26050){
var state_val_26051 = (state_26050[(1)]);
if((state_val_26051 === (7))){
var inst_25965 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
var statearr_26052_26111 = state_26050__$1;
(statearr_26052_26111[(2)] = inst_25965);

(statearr_26052_26111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (20))){
var inst_25977 = (state_26050[(7)]);
var state_26050__$1 = state_26050;
var statearr_26053_26112 = state_26050__$1;
(statearr_26053_26112[(2)] = inst_25977);

(statearr_26053_26112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (27))){
var state_26050__$1 = state_26050;
var statearr_26054_26113 = state_26050__$1;
(statearr_26054_26113[(2)] = null);

(statearr_26054_26113[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (1))){
var inst_25952 = (state_26050[(8)]);
var inst_25952__$1 = calc_state.call(null);
var inst_25954 = (inst_25952__$1 == null);
var inst_25955 = cljs.core.not.call(null,inst_25954);
var state_26050__$1 = (function (){var statearr_26055 = state_26050;
(statearr_26055[(8)] = inst_25952__$1);

return statearr_26055;
})();
if(inst_25955){
var statearr_26056_26114 = state_26050__$1;
(statearr_26056_26114[(1)] = (2));

} else {
var statearr_26057_26115 = state_26050__$1;
(statearr_26057_26115[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (24))){
var inst_26001 = (state_26050[(9)]);
var inst_26024 = (state_26050[(10)]);
var inst_26010 = (state_26050[(11)]);
var inst_26024__$1 = inst_26001.call(null,inst_26010);
var state_26050__$1 = (function (){var statearr_26058 = state_26050;
(statearr_26058[(10)] = inst_26024__$1);

return statearr_26058;
})();
if(cljs.core.truth_(inst_26024__$1)){
var statearr_26059_26116 = state_26050__$1;
(statearr_26059_26116[(1)] = (29));

} else {
var statearr_26060_26117 = state_26050__$1;
(statearr_26060_26117[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (4))){
var inst_25968 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
if(cljs.core.truth_(inst_25968)){
var statearr_26061_26118 = state_26050__$1;
(statearr_26061_26118[(1)] = (8));

} else {
var statearr_26062_26119 = state_26050__$1;
(statearr_26062_26119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (15))){
var inst_25995 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
if(cljs.core.truth_(inst_25995)){
var statearr_26063_26120 = state_26050__$1;
(statearr_26063_26120[(1)] = (19));

} else {
var statearr_26064_26121 = state_26050__$1;
(statearr_26064_26121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (21))){
var inst_26000 = (state_26050[(12)]);
var inst_26000__$1 = (state_26050[(2)]);
var inst_26001 = cljs.core.get.call(null,inst_26000__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26002 = cljs.core.get.call(null,inst_26000__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26003 = cljs.core.get.call(null,inst_26000__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26050__$1 = (function (){var statearr_26065 = state_26050;
(statearr_26065[(9)] = inst_26001);

(statearr_26065[(13)] = inst_26002);

(statearr_26065[(12)] = inst_26000__$1);

return statearr_26065;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26050__$1,(22),inst_26003);
} else {
if((state_val_26051 === (31))){
var inst_26032 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
if(cljs.core.truth_(inst_26032)){
var statearr_26066_26122 = state_26050__$1;
(statearr_26066_26122[(1)] = (32));

} else {
var statearr_26067_26123 = state_26050__$1;
(statearr_26067_26123[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (32))){
var inst_26009 = (state_26050[(14)]);
var state_26050__$1 = state_26050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26050__$1,(35),out,inst_26009);
} else {
if((state_val_26051 === (33))){
var inst_26000 = (state_26050[(12)]);
var inst_25977 = inst_26000;
var state_26050__$1 = (function (){var statearr_26068 = state_26050;
(statearr_26068[(7)] = inst_25977);

return statearr_26068;
})();
var statearr_26069_26124 = state_26050__$1;
(statearr_26069_26124[(2)] = null);

(statearr_26069_26124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (13))){
var inst_25977 = (state_26050[(7)]);
var inst_25984 = inst_25977.cljs$lang$protocol_mask$partition0$;
var inst_25985 = (inst_25984 & (64));
var inst_25986 = inst_25977.cljs$core$ISeq$;
var inst_25987 = (cljs.core.PROTOCOL_SENTINEL === inst_25986);
var inst_25988 = ((inst_25985) || (inst_25987));
var state_26050__$1 = state_26050;
if(cljs.core.truth_(inst_25988)){
var statearr_26070_26125 = state_26050__$1;
(statearr_26070_26125[(1)] = (16));

} else {
var statearr_26071_26126 = state_26050__$1;
(statearr_26071_26126[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (22))){
var inst_26010 = (state_26050[(11)]);
var inst_26009 = (state_26050[(14)]);
var inst_26008 = (state_26050[(2)]);
var inst_26009__$1 = cljs.core.nth.call(null,inst_26008,(0),null);
var inst_26010__$1 = cljs.core.nth.call(null,inst_26008,(1),null);
var inst_26011 = (inst_26009__$1 == null);
var inst_26012 = cljs.core._EQ_.call(null,inst_26010__$1,change);
var inst_26013 = ((inst_26011) || (inst_26012));
var state_26050__$1 = (function (){var statearr_26072 = state_26050;
(statearr_26072[(11)] = inst_26010__$1);

(statearr_26072[(14)] = inst_26009__$1);

return statearr_26072;
})();
if(cljs.core.truth_(inst_26013)){
var statearr_26073_26127 = state_26050__$1;
(statearr_26073_26127[(1)] = (23));

} else {
var statearr_26074_26128 = state_26050__$1;
(statearr_26074_26128[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (36))){
var inst_26000 = (state_26050[(12)]);
var inst_25977 = inst_26000;
var state_26050__$1 = (function (){var statearr_26075 = state_26050;
(statearr_26075[(7)] = inst_25977);

return statearr_26075;
})();
var statearr_26076_26129 = state_26050__$1;
(statearr_26076_26129[(2)] = null);

(statearr_26076_26129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (29))){
var inst_26024 = (state_26050[(10)]);
var state_26050__$1 = state_26050;
var statearr_26077_26130 = state_26050__$1;
(statearr_26077_26130[(2)] = inst_26024);

(statearr_26077_26130[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (6))){
var state_26050__$1 = state_26050;
var statearr_26078_26131 = state_26050__$1;
(statearr_26078_26131[(2)] = false);

(statearr_26078_26131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (28))){
var inst_26020 = (state_26050[(2)]);
var inst_26021 = calc_state.call(null);
var inst_25977 = inst_26021;
var state_26050__$1 = (function (){var statearr_26079 = state_26050;
(statearr_26079[(15)] = inst_26020);

(statearr_26079[(7)] = inst_25977);

return statearr_26079;
})();
var statearr_26080_26132 = state_26050__$1;
(statearr_26080_26132[(2)] = null);

(statearr_26080_26132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (25))){
var inst_26046 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
var statearr_26081_26133 = state_26050__$1;
(statearr_26081_26133[(2)] = inst_26046);

(statearr_26081_26133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (34))){
var inst_26044 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
var statearr_26082_26134 = state_26050__$1;
(statearr_26082_26134[(2)] = inst_26044);

(statearr_26082_26134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (17))){
var state_26050__$1 = state_26050;
var statearr_26083_26135 = state_26050__$1;
(statearr_26083_26135[(2)] = false);

(statearr_26083_26135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (3))){
var state_26050__$1 = state_26050;
var statearr_26084_26136 = state_26050__$1;
(statearr_26084_26136[(2)] = false);

(statearr_26084_26136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (12))){
var inst_26048 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26050__$1,inst_26048);
} else {
if((state_val_26051 === (2))){
var inst_25952 = (state_26050[(8)]);
var inst_25957 = inst_25952.cljs$lang$protocol_mask$partition0$;
var inst_25958 = (inst_25957 & (64));
var inst_25959 = inst_25952.cljs$core$ISeq$;
var inst_25960 = (cljs.core.PROTOCOL_SENTINEL === inst_25959);
var inst_25961 = ((inst_25958) || (inst_25960));
var state_26050__$1 = state_26050;
if(cljs.core.truth_(inst_25961)){
var statearr_26085_26137 = state_26050__$1;
(statearr_26085_26137[(1)] = (5));

} else {
var statearr_26086_26138 = state_26050__$1;
(statearr_26086_26138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (23))){
var inst_26009 = (state_26050[(14)]);
var inst_26015 = (inst_26009 == null);
var state_26050__$1 = state_26050;
if(cljs.core.truth_(inst_26015)){
var statearr_26087_26139 = state_26050__$1;
(statearr_26087_26139[(1)] = (26));

} else {
var statearr_26088_26140 = state_26050__$1;
(statearr_26088_26140[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (35))){
var inst_26035 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
if(cljs.core.truth_(inst_26035)){
var statearr_26089_26141 = state_26050__$1;
(statearr_26089_26141[(1)] = (36));

} else {
var statearr_26090_26142 = state_26050__$1;
(statearr_26090_26142[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (19))){
var inst_25977 = (state_26050[(7)]);
var inst_25997 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25977);
var state_26050__$1 = state_26050;
var statearr_26091_26143 = state_26050__$1;
(statearr_26091_26143[(2)] = inst_25997);

(statearr_26091_26143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (11))){
var inst_25977 = (state_26050[(7)]);
var inst_25981 = (inst_25977 == null);
var inst_25982 = cljs.core.not.call(null,inst_25981);
var state_26050__$1 = state_26050;
if(inst_25982){
var statearr_26092_26144 = state_26050__$1;
(statearr_26092_26144[(1)] = (13));

} else {
var statearr_26093_26145 = state_26050__$1;
(statearr_26093_26145[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (9))){
var inst_25952 = (state_26050[(8)]);
var state_26050__$1 = state_26050;
var statearr_26094_26146 = state_26050__$1;
(statearr_26094_26146[(2)] = inst_25952);

(statearr_26094_26146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (5))){
var state_26050__$1 = state_26050;
var statearr_26095_26147 = state_26050__$1;
(statearr_26095_26147[(2)] = true);

(statearr_26095_26147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (14))){
var state_26050__$1 = state_26050;
var statearr_26096_26148 = state_26050__$1;
(statearr_26096_26148[(2)] = false);

(statearr_26096_26148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (26))){
var inst_26010 = (state_26050[(11)]);
var inst_26017 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26010);
var state_26050__$1 = state_26050;
var statearr_26097_26149 = state_26050__$1;
(statearr_26097_26149[(2)] = inst_26017);

(statearr_26097_26149[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (16))){
var state_26050__$1 = state_26050;
var statearr_26098_26150 = state_26050__$1;
(statearr_26098_26150[(2)] = true);

(statearr_26098_26150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (38))){
var inst_26040 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
var statearr_26099_26151 = state_26050__$1;
(statearr_26099_26151[(2)] = inst_26040);

(statearr_26099_26151[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (30))){
var inst_26001 = (state_26050[(9)]);
var inst_26002 = (state_26050[(13)]);
var inst_26010 = (state_26050[(11)]);
var inst_26027 = cljs.core.empty_QMARK_.call(null,inst_26001);
var inst_26028 = inst_26002.call(null,inst_26010);
var inst_26029 = cljs.core.not.call(null,inst_26028);
var inst_26030 = ((inst_26027) && (inst_26029));
var state_26050__$1 = state_26050;
var statearr_26100_26152 = state_26050__$1;
(statearr_26100_26152[(2)] = inst_26030);

(statearr_26100_26152[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (10))){
var inst_25952 = (state_26050[(8)]);
var inst_25973 = (state_26050[(2)]);
var inst_25974 = cljs.core.get.call(null,inst_25973,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25975 = cljs.core.get.call(null,inst_25973,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25976 = cljs.core.get.call(null,inst_25973,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25977 = inst_25952;
var state_26050__$1 = (function (){var statearr_26101 = state_26050;
(statearr_26101[(16)] = inst_25974);

(statearr_26101[(17)] = inst_25976);

(statearr_26101[(7)] = inst_25977);

(statearr_26101[(18)] = inst_25975);

return statearr_26101;
})();
var statearr_26102_26153 = state_26050__$1;
(statearr_26102_26153[(2)] = null);

(statearr_26102_26153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (18))){
var inst_25992 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
var statearr_26103_26154 = state_26050__$1;
(statearr_26103_26154[(2)] = inst_25992);

(statearr_26103_26154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (37))){
var state_26050__$1 = state_26050;
var statearr_26104_26155 = state_26050__$1;
(statearr_26104_26155[(2)] = null);

(statearr_26104_26155[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (8))){
var inst_25952 = (state_26050[(8)]);
var inst_25970 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25952);
var state_26050__$1 = state_26050;
var statearr_26105_26156 = state_26050__$1;
(statearr_26105_26156[(2)] = inst_25970);

(statearr_26105_26156[(1)] = (10));


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
});})(c__25051__auto___26110,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24956__auto__,c__25051__auto___26110,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24957__auto__ = null;
var cljs$core$async$mix_$_state_machine__24957__auto____0 = (function (){
var statearr_26106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26106[(0)] = cljs$core$async$mix_$_state_machine__24957__auto__);

(statearr_26106[(1)] = (1));

return statearr_26106;
});
var cljs$core$async$mix_$_state_machine__24957__auto____1 = (function (state_26050){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_26050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e26107){if((e26107 instanceof Object)){
var ex__24960__auto__ = e26107;
var statearr_26108_26157 = state_26050;
(statearr_26108_26157[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26158 = state_26050;
state_26050 = G__26158;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24957__auto__ = function(state_26050){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24957__auto____1.call(this,state_26050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24957__auto____0;
cljs$core$async$mix_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24957__auto____1;
return cljs$core$async$mix_$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___26110,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25053__auto__ = (function (){var statearr_26109 = f__25052__auto__.call(null);
(statearr_26109[(6)] = c__25051__auto___26110);

return statearr_26109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___26110,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26160 = arguments.length;
switch (G__26160) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26164 = arguments.length;
switch (G__26164) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__26162_SHARP_){
if(cljs.core.truth_(p1__26162_SHARP_.call(null,topic))){
return p1__26162_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26162_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26165 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26166){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26166 = meta26166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26167,meta26166__$1){
var self__ = this;
var _26167__$1 = this;
return (new cljs.core.async.t_cljs$core$async26165(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26166__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26167){
var self__ = this;
var _26167__$1 = this;
return self__.meta26166;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26166","meta26166",-842177715,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26165.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26165";

cljs.core.async.t_cljs$core$async26165.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26165");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26165.
 */
cljs.core.async.__GT_t_cljs$core$async26165 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26165(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26166){
return (new cljs.core.async.t_cljs$core$async26165(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26166));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26165(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25051__auto___26285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___26285,mults,ensure_mult,p){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___26285,mults,ensure_mult,p){
return (function (state_26239){
var state_val_26240 = (state_26239[(1)]);
if((state_val_26240 === (7))){
var inst_26235 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26241_26286 = state_26239__$1;
(statearr_26241_26286[(2)] = inst_26235);

(statearr_26241_26286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (20))){
var state_26239__$1 = state_26239;
var statearr_26242_26287 = state_26239__$1;
(statearr_26242_26287[(2)] = null);

(statearr_26242_26287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (1))){
var state_26239__$1 = state_26239;
var statearr_26243_26288 = state_26239__$1;
(statearr_26243_26288[(2)] = null);

(statearr_26243_26288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (24))){
var inst_26218 = (state_26239[(7)]);
var inst_26227 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26218);
var state_26239__$1 = state_26239;
var statearr_26244_26289 = state_26239__$1;
(statearr_26244_26289[(2)] = inst_26227);

(statearr_26244_26289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (4))){
var inst_26170 = (state_26239[(8)]);
var inst_26170__$1 = (state_26239[(2)]);
var inst_26171 = (inst_26170__$1 == null);
var state_26239__$1 = (function (){var statearr_26245 = state_26239;
(statearr_26245[(8)] = inst_26170__$1);

return statearr_26245;
})();
if(cljs.core.truth_(inst_26171)){
var statearr_26246_26290 = state_26239__$1;
(statearr_26246_26290[(1)] = (5));

} else {
var statearr_26247_26291 = state_26239__$1;
(statearr_26247_26291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (15))){
var inst_26212 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26248_26292 = state_26239__$1;
(statearr_26248_26292[(2)] = inst_26212);

(statearr_26248_26292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (21))){
var inst_26232 = (state_26239[(2)]);
var state_26239__$1 = (function (){var statearr_26249 = state_26239;
(statearr_26249[(9)] = inst_26232);

return statearr_26249;
})();
var statearr_26250_26293 = state_26239__$1;
(statearr_26250_26293[(2)] = null);

(statearr_26250_26293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (13))){
var inst_26194 = (state_26239[(10)]);
var inst_26196 = cljs.core.chunked_seq_QMARK_.call(null,inst_26194);
var state_26239__$1 = state_26239;
if(inst_26196){
var statearr_26251_26294 = state_26239__$1;
(statearr_26251_26294[(1)] = (16));

} else {
var statearr_26252_26295 = state_26239__$1;
(statearr_26252_26295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (22))){
var inst_26224 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
if(cljs.core.truth_(inst_26224)){
var statearr_26253_26296 = state_26239__$1;
(statearr_26253_26296[(1)] = (23));

} else {
var statearr_26254_26297 = state_26239__$1;
(statearr_26254_26297[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (6))){
var inst_26218 = (state_26239[(7)]);
var inst_26170 = (state_26239[(8)]);
var inst_26220 = (state_26239[(11)]);
var inst_26218__$1 = topic_fn.call(null,inst_26170);
var inst_26219 = cljs.core.deref.call(null,mults);
var inst_26220__$1 = cljs.core.get.call(null,inst_26219,inst_26218__$1);
var state_26239__$1 = (function (){var statearr_26255 = state_26239;
(statearr_26255[(7)] = inst_26218__$1);

(statearr_26255[(11)] = inst_26220__$1);

return statearr_26255;
})();
if(cljs.core.truth_(inst_26220__$1)){
var statearr_26256_26298 = state_26239__$1;
(statearr_26256_26298[(1)] = (19));

} else {
var statearr_26257_26299 = state_26239__$1;
(statearr_26257_26299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (25))){
var inst_26229 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26258_26300 = state_26239__$1;
(statearr_26258_26300[(2)] = inst_26229);

(statearr_26258_26300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (17))){
var inst_26194 = (state_26239[(10)]);
var inst_26203 = cljs.core.first.call(null,inst_26194);
var inst_26204 = cljs.core.async.muxch_STAR_.call(null,inst_26203);
var inst_26205 = cljs.core.async.close_BANG_.call(null,inst_26204);
var inst_26206 = cljs.core.next.call(null,inst_26194);
var inst_26180 = inst_26206;
var inst_26181 = null;
var inst_26182 = (0);
var inst_26183 = (0);
var state_26239__$1 = (function (){var statearr_26259 = state_26239;
(statearr_26259[(12)] = inst_26180);

(statearr_26259[(13)] = inst_26183);

(statearr_26259[(14)] = inst_26205);

(statearr_26259[(15)] = inst_26182);

(statearr_26259[(16)] = inst_26181);

return statearr_26259;
})();
var statearr_26260_26301 = state_26239__$1;
(statearr_26260_26301[(2)] = null);

(statearr_26260_26301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (3))){
var inst_26237 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26239__$1,inst_26237);
} else {
if((state_val_26240 === (12))){
var inst_26214 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26261_26302 = state_26239__$1;
(statearr_26261_26302[(2)] = inst_26214);

(statearr_26261_26302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (2))){
var state_26239__$1 = state_26239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26239__$1,(4),ch);
} else {
if((state_val_26240 === (23))){
var state_26239__$1 = state_26239;
var statearr_26262_26303 = state_26239__$1;
(statearr_26262_26303[(2)] = null);

(statearr_26262_26303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (19))){
var inst_26170 = (state_26239[(8)]);
var inst_26220 = (state_26239[(11)]);
var inst_26222 = cljs.core.async.muxch_STAR_.call(null,inst_26220);
var state_26239__$1 = state_26239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26239__$1,(22),inst_26222,inst_26170);
} else {
if((state_val_26240 === (11))){
var inst_26180 = (state_26239[(12)]);
var inst_26194 = (state_26239[(10)]);
var inst_26194__$1 = cljs.core.seq.call(null,inst_26180);
var state_26239__$1 = (function (){var statearr_26263 = state_26239;
(statearr_26263[(10)] = inst_26194__$1);

return statearr_26263;
})();
if(inst_26194__$1){
var statearr_26264_26304 = state_26239__$1;
(statearr_26264_26304[(1)] = (13));

} else {
var statearr_26265_26305 = state_26239__$1;
(statearr_26265_26305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (9))){
var inst_26216 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26266_26306 = state_26239__$1;
(statearr_26266_26306[(2)] = inst_26216);

(statearr_26266_26306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (5))){
var inst_26177 = cljs.core.deref.call(null,mults);
var inst_26178 = cljs.core.vals.call(null,inst_26177);
var inst_26179 = cljs.core.seq.call(null,inst_26178);
var inst_26180 = inst_26179;
var inst_26181 = null;
var inst_26182 = (0);
var inst_26183 = (0);
var state_26239__$1 = (function (){var statearr_26267 = state_26239;
(statearr_26267[(12)] = inst_26180);

(statearr_26267[(13)] = inst_26183);

(statearr_26267[(15)] = inst_26182);

(statearr_26267[(16)] = inst_26181);

return statearr_26267;
})();
var statearr_26268_26307 = state_26239__$1;
(statearr_26268_26307[(2)] = null);

(statearr_26268_26307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (14))){
var state_26239__$1 = state_26239;
var statearr_26272_26308 = state_26239__$1;
(statearr_26272_26308[(2)] = null);

(statearr_26272_26308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (16))){
var inst_26194 = (state_26239[(10)]);
var inst_26198 = cljs.core.chunk_first.call(null,inst_26194);
var inst_26199 = cljs.core.chunk_rest.call(null,inst_26194);
var inst_26200 = cljs.core.count.call(null,inst_26198);
var inst_26180 = inst_26199;
var inst_26181 = inst_26198;
var inst_26182 = inst_26200;
var inst_26183 = (0);
var state_26239__$1 = (function (){var statearr_26273 = state_26239;
(statearr_26273[(12)] = inst_26180);

(statearr_26273[(13)] = inst_26183);

(statearr_26273[(15)] = inst_26182);

(statearr_26273[(16)] = inst_26181);

return statearr_26273;
})();
var statearr_26274_26309 = state_26239__$1;
(statearr_26274_26309[(2)] = null);

(statearr_26274_26309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (10))){
var inst_26180 = (state_26239[(12)]);
var inst_26183 = (state_26239[(13)]);
var inst_26182 = (state_26239[(15)]);
var inst_26181 = (state_26239[(16)]);
var inst_26188 = cljs.core._nth.call(null,inst_26181,inst_26183);
var inst_26189 = cljs.core.async.muxch_STAR_.call(null,inst_26188);
var inst_26190 = cljs.core.async.close_BANG_.call(null,inst_26189);
var inst_26191 = (inst_26183 + (1));
var tmp26269 = inst_26180;
var tmp26270 = inst_26182;
var tmp26271 = inst_26181;
var inst_26180__$1 = tmp26269;
var inst_26181__$1 = tmp26271;
var inst_26182__$1 = tmp26270;
var inst_26183__$1 = inst_26191;
var state_26239__$1 = (function (){var statearr_26275 = state_26239;
(statearr_26275[(12)] = inst_26180__$1);

(statearr_26275[(17)] = inst_26190);

(statearr_26275[(13)] = inst_26183__$1);

(statearr_26275[(15)] = inst_26182__$1);

(statearr_26275[(16)] = inst_26181__$1);

return statearr_26275;
})();
var statearr_26276_26310 = state_26239__$1;
(statearr_26276_26310[(2)] = null);

(statearr_26276_26310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (18))){
var inst_26209 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26277_26311 = state_26239__$1;
(statearr_26277_26311[(2)] = inst_26209);

(statearr_26277_26311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (8))){
var inst_26183 = (state_26239[(13)]);
var inst_26182 = (state_26239[(15)]);
var inst_26185 = (inst_26183 < inst_26182);
var inst_26186 = inst_26185;
var state_26239__$1 = state_26239;
if(cljs.core.truth_(inst_26186)){
var statearr_26278_26312 = state_26239__$1;
(statearr_26278_26312[(1)] = (10));

} else {
var statearr_26279_26313 = state_26239__$1;
(statearr_26279_26313[(1)] = (11));

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
});})(c__25051__auto___26285,mults,ensure_mult,p))
;
return ((function (switch__24956__auto__,c__25051__auto___26285,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24957__auto__ = null;
var cljs$core$async$state_machine__24957__auto____0 = (function (){
var statearr_26280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26280[(0)] = cljs$core$async$state_machine__24957__auto__);

(statearr_26280[(1)] = (1));

return statearr_26280;
});
var cljs$core$async$state_machine__24957__auto____1 = (function (state_26239){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_26239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e26281){if((e26281 instanceof Object)){
var ex__24960__auto__ = e26281;
var statearr_26282_26314 = state_26239;
(statearr_26282_26314[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26315 = state_26239;
state_26239 = G__26315;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$state_machine__24957__auto__ = function(state_26239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24957__auto____1.call(this,state_26239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24957__auto____0;
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24957__auto____1;
return cljs$core$async$state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___26285,mults,ensure_mult,p))
})();
var state__25053__auto__ = (function (){var statearr_26283 = f__25052__auto__.call(null);
(statearr_26283[(6)] = c__25051__auto___26285);

return statearr_26283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___26285,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26317 = arguments.length;
switch (G__26317) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26320 = arguments.length;
switch (G__26320) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26323 = arguments.length;
switch (G__26323) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__25051__auto___26390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___26390,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___26390,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26362){
var state_val_26363 = (state_26362[(1)]);
if((state_val_26363 === (7))){
var state_26362__$1 = state_26362;
var statearr_26364_26391 = state_26362__$1;
(statearr_26364_26391[(2)] = null);

(statearr_26364_26391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (1))){
var state_26362__$1 = state_26362;
var statearr_26365_26392 = state_26362__$1;
(statearr_26365_26392[(2)] = null);

(statearr_26365_26392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (4))){
var inst_26326 = (state_26362[(7)]);
var inst_26328 = (inst_26326 < cnt);
var state_26362__$1 = state_26362;
if(cljs.core.truth_(inst_26328)){
var statearr_26366_26393 = state_26362__$1;
(statearr_26366_26393[(1)] = (6));

} else {
var statearr_26367_26394 = state_26362__$1;
(statearr_26367_26394[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (15))){
var inst_26358 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
var statearr_26368_26395 = state_26362__$1;
(statearr_26368_26395[(2)] = inst_26358);

(statearr_26368_26395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (13))){
var inst_26351 = cljs.core.async.close_BANG_.call(null,out);
var state_26362__$1 = state_26362;
var statearr_26369_26396 = state_26362__$1;
(statearr_26369_26396[(2)] = inst_26351);

(statearr_26369_26396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (6))){
var state_26362__$1 = state_26362;
var statearr_26370_26397 = state_26362__$1;
(statearr_26370_26397[(2)] = null);

(statearr_26370_26397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (3))){
var inst_26360 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26362__$1,inst_26360);
} else {
if((state_val_26363 === (12))){
var inst_26348 = (state_26362[(8)]);
var inst_26348__$1 = (state_26362[(2)]);
var inst_26349 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26348__$1);
var state_26362__$1 = (function (){var statearr_26371 = state_26362;
(statearr_26371[(8)] = inst_26348__$1);

return statearr_26371;
})();
if(cljs.core.truth_(inst_26349)){
var statearr_26372_26398 = state_26362__$1;
(statearr_26372_26398[(1)] = (13));

} else {
var statearr_26373_26399 = state_26362__$1;
(statearr_26373_26399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (2))){
var inst_26325 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26326 = (0);
var state_26362__$1 = (function (){var statearr_26374 = state_26362;
(statearr_26374[(7)] = inst_26326);

(statearr_26374[(9)] = inst_26325);

return statearr_26374;
})();
var statearr_26375_26400 = state_26362__$1;
(statearr_26375_26400[(2)] = null);

(statearr_26375_26400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (11))){
var inst_26326 = (state_26362[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26362,(10),Object,null,(9));
var inst_26335 = chs__$1.call(null,inst_26326);
var inst_26336 = done.call(null,inst_26326);
var inst_26337 = cljs.core.async.take_BANG_.call(null,inst_26335,inst_26336);
var state_26362__$1 = state_26362;
var statearr_26376_26401 = state_26362__$1;
(statearr_26376_26401[(2)] = inst_26337);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26362__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (9))){
var inst_26326 = (state_26362[(7)]);
var inst_26339 = (state_26362[(2)]);
var inst_26340 = (inst_26326 + (1));
var inst_26326__$1 = inst_26340;
var state_26362__$1 = (function (){var statearr_26377 = state_26362;
(statearr_26377[(10)] = inst_26339);

(statearr_26377[(7)] = inst_26326__$1);

return statearr_26377;
})();
var statearr_26378_26402 = state_26362__$1;
(statearr_26378_26402[(2)] = null);

(statearr_26378_26402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (5))){
var inst_26346 = (state_26362[(2)]);
var state_26362__$1 = (function (){var statearr_26379 = state_26362;
(statearr_26379[(11)] = inst_26346);

return statearr_26379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26362__$1,(12),dchan);
} else {
if((state_val_26363 === (14))){
var inst_26348 = (state_26362[(8)]);
var inst_26353 = cljs.core.apply.call(null,f,inst_26348);
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26362__$1,(16),out,inst_26353);
} else {
if((state_val_26363 === (16))){
var inst_26355 = (state_26362[(2)]);
var state_26362__$1 = (function (){var statearr_26380 = state_26362;
(statearr_26380[(12)] = inst_26355);

return statearr_26380;
})();
var statearr_26381_26403 = state_26362__$1;
(statearr_26381_26403[(2)] = null);

(statearr_26381_26403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (10))){
var inst_26330 = (state_26362[(2)]);
var inst_26331 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26362__$1 = (function (){var statearr_26382 = state_26362;
(statearr_26382[(13)] = inst_26330);

return statearr_26382;
})();
var statearr_26383_26404 = state_26362__$1;
(statearr_26383_26404[(2)] = inst_26331);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26362__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (8))){
var inst_26344 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
var statearr_26384_26405 = state_26362__$1;
(statearr_26384_26405[(2)] = inst_26344);

(statearr_26384_26405[(1)] = (5));


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
});})(c__25051__auto___26390,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24956__auto__,c__25051__auto___26390,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24957__auto__ = null;
var cljs$core$async$state_machine__24957__auto____0 = (function (){
var statearr_26385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26385[(0)] = cljs$core$async$state_machine__24957__auto__);

(statearr_26385[(1)] = (1));

return statearr_26385;
});
var cljs$core$async$state_machine__24957__auto____1 = (function (state_26362){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_26362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e26386){if((e26386 instanceof Object)){
var ex__24960__auto__ = e26386;
var statearr_26387_26406 = state_26362;
(statearr_26387_26406[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26407 = state_26362;
state_26362 = G__26407;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$state_machine__24957__auto__ = function(state_26362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24957__auto____1.call(this,state_26362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24957__auto____0;
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24957__auto____1;
return cljs$core$async$state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___26390,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25053__auto__ = (function (){var statearr_26388 = f__25052__auto__.call(null);
(statearr_26388[(6)] = c__25051__auto___26390);

return statearr_26388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___26390,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26410 = arguments.length;
switch (G__26410) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25051__auto___26464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___26464,out){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___26464,out){
return (function (state_26442){
var state_val_26443 = (state_26442[(1)]);
if((state_val_26443 === (7))){
var inst_26421 = (state_26442[(7)]);
var inst_26422 = (state_26442[(8)]);
var inst_26421__$1 = (state_26442[(2)]);
var inst_26422__$1 = cljs.core.nth.call(null,inst_26421__$1,(0),null);
var inst_26423 = cljs.core.nth.call(null,inst_26421__$1,(1),null);
var inst_26424 = (inst_26422__$1 == null);
var state_26442__$1 = (function (){var statearr_26444 = state_26442;
(statearr_26444[(9)] = inst_26423);

(statearr_26444[(7)] = inst_26421__$1);

(statearr_26444[(8)] = inst_26422__$1);

return statearr_26444;
})();
if(cljs.core.truth_(inst_26424)){
var statearr_26445_26465 = state_26442__$1;
(statearr_26445_26465[(1)] = (8));

} else {
var statearr_26446_26466 = state_26442__$1;
(statearr_26446_26466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (1))){
var inst_26411 = cljs.core.vec.call(null,chs);
var inst_26412 = inst_26411;
var state_26442__$1 = (function (){var statearr_26447 = state_26442;
(statearr_26447[(10)] = inst_26412);

return statearr_26447;
})();
var statearr_26448_26467 = state_26442__$1;
(statearr_26448_26467[(2)] = null);

(statearr_26448_26467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (4))){
var inst_26412 = (state_26442[(10)]);
var state_26442__$1 = state_26442;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26442__$1,(7),inst_26412);
} else {
if((state_val_26443 === (6))){
var inst_26438 = (state_26442[(2)]);
var state_26442__$1 = state_26442;
var statearr_26449_26468 = state_26442__$1;
(statearr_26449_26468[(2)] = inst_26438);

(statearr_26449_26468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (3))){
var inst_26440 = (state_26442[(2)]);
var state_26442__$1 = state_26442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26442__$1,inst_26440);
} else {
if((state_val_26443 === (2))){
var inst_26412 = (state_26442[(10)]);
var inst_26414 = cljs.core.count.call(null,inst_26412);
var inst_26415 = (inst_26414 > (0));
var state_26442__$1 = state_26442;
if(cljs.core.truth_(inst_26415)){
var statearr_26451_26469 = state_26442__$1;
(statearr_26451_26469[(1)] = (4));

} else {
var statearr_26452_26470 = state_26442__$1;
(statearr_26452_26470[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (11))){
var inst_26412 = (state_26442[(10)]);
var inst_26431 = (state_26442[(2)]);
var tmp26450 = inst_26412;
var inst_26412__$1 = tmp26450;
var state_26442__$1 = (function (){var statearr_26453 = state_26442;
(statearr_26453[(10)] = inst_26412__$1);

(statearr_26453[(11)] = inst_26431);

return statearr_26453;
})();
var statearr_26454_26471 = state_26442__$1;
(statearr_26454_26471[(2)] = null);

(statearr_26454_26471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (9))){
var inst_26422 = (state_26442[(8)]);
var state_26442__$1 = state_26442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26442__$1,(11),out,inst_26422);
} else {
if((state_val_26443 === (5))){
var inst_26436 = cljs.core.async.close_BANG_.call(null,out);
var state_26442__$1 = state_26442;
var statearr_26455_26472 = state_26442__$1;
(statearr_26455_26472[(2)] = inst_26436);

(statearr_26455_26472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (10))){
var inst_26434 = (state_26442[(2)]);
var state_26442__$1 = state_26442;
var statearr_26456_26473 = state_26442__$1;
(statearr_26456_26473[(2)] = inst_26434);

(statearr_26456_26473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (8))){
var inst_26423 = (state_26442[(9)]);
var inst_26412 = (state_26442[(10)]);
var inst_26421 = (state_26442[(7)]);
var inst_26422 = (state_26442[(8)]);
var inst_26426 = (function (){var cs = inst_26412;
var vec__26417 = inst_26421;
var v = inst_26422;
var c = inst_26423;
return ((function (cs,vec__26417,v,c,inst_26423,inst_26412,inst_26421,inst_26422,state_val_26443,c__25051__auto___26464,out){
return (function (p1__26408_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26408_SHARP_);
});
;})(cs,vec__26417,v,c,inst_26423,inst_26412,inst_26421,inst_26422,state_val_26443,c__25051__auto___26464,out))
})();
var inst_26427 = cljs.core.filterv.call(null,inst_26426,inst_26412);
var inst_26412__$1 = inst_26427;
var state_26442__$1 = (function (){var statearr_26457 = state_26442;
(statearr_26457[(10)] = inst_26412__$1);

return statearr_26457;
})();
var statearr_26458_26474 = state_26442__$1;
(statearr_26458_26474[(2)] = null);

(statearr_26458_26474[(1)] = (2));


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
});})(c__25051__auto___26464,out))
;
return ((function (switch__24956__auto__,c__25051__auto___26464,out){
return (function() {
var cljs$core$async$state_machine__24957__auto__ = null;
var cljs$core$async$state_machine__24957__auto____0 = (function (){
var statearr_26459 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26459[(0)] = cljs$core$async$state_machine__24957__auto__);

(statearr_26459[(1)] = (1));

return statearr_26459;
});
var cljs$core$async$state_machine__24957__auto____1 = (function (state_26442){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_26442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e26460){if((e26460 instanceof Object)){
var ex__24960__auto__ = e26460;
var statearr_26461_26475 = state_26442;
(statearr_26461_26475[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26476 = state_26442;
state_26442 = G__26476;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$state_machine__24957__auto__ = function(state_26442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24957__auto____1.call(this,state_26442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24957__auto____0;
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24957__auto____1;
return cljs$core$async$state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___26464,out))
})();
var state__25053__auto__ = (function (){var statearr_26462 = f__25052__auto__.call(null);
(statearr_26462[(6)] = c__25051__auto___26464);

return statearr_26462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___26464,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26478 = arguments.length;
switch (G__26478) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25051__auto___26523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___26523,out){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___26523,out){
return (function (state_26502){
var state_val_26503 = (state_26502[(1)]);
if((state_val_26503 === (7))){
var inst_26484 = (state_26502[(7)]);
var inst_26484__$1 = (state_26502[(2)]);
var inst_26485 = (inst_26484__$1 == null);
var inst_26486 = cljs.core.not.call(null,inst_26485);
var state_26502__$1 = (function (){var statearr_26504 = state_26502;
(statearr_26504[(7)] = inst_26484__$1);

return statearr_26504;
})();
if(inst_26486){
var statearr_26505_26524 = state_26502__$1;
(statearr_26505_26524[(1)] = (8));

} else {
var statearr_26506_26525 = state_26502__$1;
(statearr_26506_26525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (1))){
var inst_26479 = (0);
var state_26502__$1 = (function (){var statearr_26507 = state_26502;
(statearr_26507[(8)] = inst_26479);

return statearr_26507;
})();
var statearr_26508_26526 = state_26502__$1;
(statearr_26508_26526[(2)] = null);

(statearr_26508_26526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (4))){
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26502__$1,(7),ch);
} else {
if((state_val_26503 === (6))){
var inst_26497 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26509_26527 = state_26502__$1;
(statearr_26509_26527[(2)] = inst_26497);

(statearr_26509_26527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (3))){
var inst_26499 = (state_26502[(2)]);
var inst_26500 = cljs.core.async.close_BANG_.call(null,out);
var state_26502__$1 = (function (){var statearr_26510 = state_26502;
(statearr_26510[(9)] = inst_26499);

return statearr_26510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26502__$1,inst_26500);
} else {
if((state_val_26503 === (2))){
var inst_26479 = (state_26502[(8)]);
var inst_26481 = (inst_26479 < n);
var state_26502__$1 = state_26502;
if(cljs.core.truth_(inst_26481)){
var statearr_26511_26528 = state_26502__$1;
(statearr_26511_26528[(1)] = (4));

} else {
var statearr_26512_26529 = state_26502__$1;
(statearr_26512_26529[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (11))){
var inst_26479 = (state_26502[(8)]);
var inst_26489 = (state_26502[(2)]);
var inst_26490 = (inst_26479 + (1));
var inst_26479__$1 = inst_26490;
var state_26502__$1 = (function (){var statearr_26513 = state_26502;
(statearr_26513[(8)] = inst_26479__$1);

(statearr_26513[(10)] = inst_26489);

return statearr_26513;
})();
var statearr_26514_26530 = state_26502__$1;
(statearr_26514_26530[(2)] = null);

(statearr_26514_26530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (9))){
var state_26502__$1 = state_26502;
var statearr_26515_26531 = state_26502__$1;
(statearr_26515_26531[(2)] = null);

(statearr_26515_26531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (5))){
var state_26502__$1 = state_26502;
var statearr_26516_26532 = state_26502__$1;
(statearr_26516_26532[(2)] = null);

(statearr_26516_26532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (10))){
var inst_26494 = (state_26502[(2)]);
var state_26502__$1 = state_26502;
var statearr_26517_26533 = state_26502__$1;
(statearr_26517_26533[(2)] = inst_26494);

(statearr_26517_26533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26503 === (8))){
var inst_26484 = (state_26502[(7)]);
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26502__$1,(11),out,inst_26484);
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
});})(c__25051__auto___26523,out))
;
return ((function (switch__24956__auto__,c__25051__auto___26523,out){
return (function() {
var cljs$core$async$state_machine__24957__auto__ = null;
var cljs$core$async$state_machine__24957__auto____0 = (function (){
var statearr_26518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26518[(0)] = cljs$core$async$state_machine__24957__auto__);

(statearr_26518[(1)] = (1));

return statearr_26518;
});
var cljs$core$async$state_machine__24957__auto____1 = (function (state_26502){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_26502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e26519){if((e26519 instanceof Object)){
var ex__24960__auto__ = e26519;
var statearr_26520_26534 = state_26502;
(statearr_26520_26534[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26535 = state_26502;
state_26502 = G__26535;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$state_machine__24957__auto__ = function(state_26502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24957__auto____1.call(this,state_26502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24957__auto____0;
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24957__auto____1;
return cljs$core$async$state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___26523,out))
})();
var state__25053__auto__ = (function (){var statearr_26521 = f__25052__auto__.call(null);
(statearr_26521[(6)] = c__25051__auto___26523);

return statearr_26521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___26523,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26537 = (function (f,ch,meta26538){
this.f = f;
this.ch = ch;
this.meta26538 = meta26538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26539,meta26538__$1){
var self__ = this;
var _26539__$1 = this;
return (new cljs.core.async.t_cljs$core$async26537(self__.f,self__.ch,meta26538__$1));
});

cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26539){
var self__ = this;
var _26539__$1 = this;
return self__.meta26538;
});

cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26540 = (function (f,ch,meta26538,_,fn1,meta26541){
this.f = f;
this.ch = ch;
this.meta26538 = meta26538;
this._ = _;
this.fn1 = fn1;
this.meta26541 = meta26541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26542,meta26541__$1){
var self__ = this;
var _26542__$1 = this;
return (new cljs.core.async.t_cljs$core$async26540(self__.f,self__.ch,self__.meta26538,self__._,self__.fn1,meta26541__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26542){
var self__ = this;
var _26542__$1 = this;
return self__.meta26541;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26540.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26536_SHARP_){
return f1.call(null,(((p1__26536_SHARP_ == null))?null:self__.f.call(null,p1__26536_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26540.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26538","meta26538",823321289,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26537","cljs.core.async/t_cljs$core$async26537",724221991,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26541","meta26541",1250297220,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26540";

cljs.core.async.t_cljs$core$async26540.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26540");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26540.
 */
cljs.core.async.__GT_t_cljs$core$async26540 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26540(f__$1,ch__$1,meta26538__$1,___$2,fn1__$1,meta26541){
return (new cljs.core.async.t_cljs$core$async26540(f__$1,ch__$1,meta26538__$1,___$2,fn1__$1,meta26541));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26540(self__.f,self__.ch,self__.meta26538,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26538","meta26538",823321289,null)], null);
});

cljs.core.async.t_cljs$core$async26537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26537";

cljs.core.async.t_cljs$core$async26537.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26537");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26537.
 */
cljs.core.async.__GT_t_cljs$core$async26537 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26537(f__$1,ch__$1,meta26538){
return (new cljs.core.async.t_cljs$core$async26537(f__$1,ch__$1,meta26538));
});

}

return (new cljs.core.async.t_cljs$core$async26537(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26543 = (function (f,ch,meta26544){
this.f = f;
this.ch = ch;
this.meta26544 = meta26544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26545,meta26544__$1){
var self__ = this;
var _26545__$1 = this;
return (new cljs.core.async.t_cljs$core$async26543(self__.f,self__.ch,meta26544__$1));
});

cljs.core.async.t_cljs$core$async26543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26545){
var self__ = this;
var _26545__$1 = this;
return self__.meta26544;
});

cljs.core.async.t_cljs$core$async26543.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26543.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26543.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26543.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26543.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26543.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26544","meta26544",-457536594,null)], null);
});

cljs.core.async.t_cljs$core$async26543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26543";

cljs.core.async.t_cljs$core$async26543.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26543");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26543.
 */
cljs.core.async.__GT_t_cljs$core$async26543 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26543(f__$1,ch__$1,meta26544){
return (new cljs.core.async.t_cljs$core$async26543(f__$1,ch__$1,meta26544));
});

}

return (new cljs.core.async.t_cljs$core$async26543(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26546 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26546 = (function (p,ch,meta26547){
this.p = p;
this.ch = ch;
this.meta26547 = meta26547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26548,meta26547__$1){
var self__ = this;
var _26548__$1 = this;
return (new cljs.core.async.t_cljs$core$async26546(self__.p,self__.ch,meta26547__$1));
});

cljs.core.async.t_cljs$core$async26546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26548){
var self__ = this;
var _26548__$1 = this;
return self__.meta26547;
});

cljs.core.async.t_cljs$core$async26546.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26546.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26546.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26546.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26546.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26546.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26546.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26547","meta26547",-329993659,null)], null);
});

cljs.core.async.t_cljs$core$async26546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26546";

cljs.core.async.t_cljs$core$async26546.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26546");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26546.
 */
cljs.core.async.__GT_t_cljs$core$async26546 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26546(p__$1,ch__$1,meta26547){
return (new cljs.core.async.t_cljs$core$async26546(p__$1,ch__$1,meta26547));
});

}

return (new cljs.core.async.t_cljs$core$async26546(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26550 = arguments.length;
switch (G__26550) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25051__auto___26590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___26590,out){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___26590,out){
return (function (state_26571){
var state_val_26572 = (state_26571[(1)]);
if((state_val_26572 === (7))){
var inst_26567 = (state_26571[(2)]);
var state_26571__$1 = state_26571;
var statearr_26573_26591 = state_26571__$1;
(statearr_26573_26591[(2)] = inst_26567);

(statearr_26573_26591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (1))){
var state_26571__$1 = state_26571;
var statearr_26574_26592 = state_26571__$1;
(statearr_26574_26592[(2)] = null);

(statearr_26574_26592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (4))){
var inst_26553 = (state_26571[(7)]);
var inst_26553__$1 = (state_26571[(2)]);
var inst_26554 = (inst_26553__$1 == null);
var state_26571__$1 = (function (){var statearr_26575 = state_26571;
(statearr_26575[(7)] = inst_26553__$1);

return statearr_26575;
})();
if(cljs.core.truth_(inst_26554)){
var statearr_26576_26593 = state_26571__$1;
(statearr_26576_26593[(1)] = (5));

} else {
var statearr_26577_26594 = state_26571__$1;
(statearr_26577_26594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (6))){
var inst_26553 = (state_26571[(7)]);
var inst_26558 = p.call(null,inst_26553);
var state_26571__$1 = state_26571;
if(cljs.core.truth_(inst_26558)){
var statearr_26578_26595 = state_26571__$1;
(statearr_26578_26595[(1)] = (8));

} else {
var statearr_26579_26596 = state_26571__$1;
(statearr_26579_26596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (3))){
var inst_26569 = (state_26571[(2)]);
var state_26571__$1 = state_26571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26571__$1,inst_26569);
} else {
if((state_val_26572 === (2))){
var state_26571__$1 = state_26571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26571__$1,(4),ch);
} else {
if((state_val_26572 === (11))){
var inst_26561 = (state_26571[(2)]);
var state_26571__$1 = state_26571;
var statearr_26580_26597 = state_26571__$1;
(statearr_26580_26597[(2)] = inst_26561);

(statearr_26580_26597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (9))){
var state_26571__$1 = state_26571;
var statearr_26581_26598 = state_26571__$1;
(statearr_26581_26598[(2)] = null);

(statearr_26581_26598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (5))){
var inst_26556 = cljs.core.async.close_BANG_.call(null,out);
var state_26571__$1 = state_26571;
var statearr_26582_26599 = state_26571__$1;
(statearr_26582_26599[(2)] = inst_26556);

(statearr_26582_26599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (10))){
var inst_26564 = (state_26571[(2)]);
var state_26571__$1 = (function (){var statearr_26583 = state_26571;
(statearr_26583[(8)] = inst_26564);

return statearr_26583;
})();
var statearr_26584_26600 = state_26571__$1;
(statearr_26584_26600[(2)] = null);

(statearr_26584_26600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (8))){
var inst_26553 = (state_26571[(7)]);
var state_26571__$1 = state_26571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26571__$1,(11),out,inst_26553);
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
});})(c__25051__auto___26590,out))
;
return ((function (switch__24956__auto__,c__25051__auto___26590,out){
return (function() {
var cljs$core$async$state_machine__24957__auto__ = null;
var cljs$core$async$state_machine__24957__auto____0 = (function (){
var statearr_26585 = [null,null,null,null,null,null,null,null,null];
(statearr_26585[(0)] = cljs$core$async$state_machine__24957__auto__);

(statearr_26585[(1)] = (1));

return statearr_26585;
});
var cljs$core$async$state_machine__24957__auto____1 = (function (state_26571){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_26571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e26586){if((e26586 instanceof Object)){
var ex__24960__auto__ = e26586;
var statearr_26587_26601 = state_26571;
(statearr_26587_26601[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26602 = state_26571;
state_26571 = G__26602;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$state_machine__24957__auto__ = function(state_26571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24957__auto____1.call(this,state_26571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24957__auto____0;
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24957__auto____1;
return cljs$core$async$state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___26590,out))
})();
var state__25053__auto__ = (function (){var statearr_26588 = f__25052__auto__.call(null);
(statearr_26588[(6)] = c__25051__auto___26590);

return statearr_26588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___26590,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26604 = arguments.length;
switch (G__26604) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__25051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto__){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto__){
return (function (state_26667){
var state_val_26668 = (state_26667[(1)]);
if((state_val_26668 === (7))){
var inst_26663 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26669_26707 = state_26667__$1;
(statearr_26669_26707[(2)] = inst_26663);

(statearr_26669_26707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (20))){
var inst_26633 = (state_26667[(7)]);
var inst_26644 = (state_26667[(2)]);
var inst_26645 = cljs.core.next.call(null,inst_26633);
var inst_26619 = inst_26645;
var inst_26620 = null;
var inst_26621 = (0);
var inst_26622 = (0);
var state_26667__$1 = (function (){var statearr_26670 = state_26667;
(statearr_26670[(8)] = inst_26619);

(statearr_26670[(9)] = inst_26644);

(statearr_26670[(10)] = inst_26620);

(statearr_26670[(11)] = inst_26621);

(statearr_26670[(12)] = inst_26622);

return statearr_26670;
})();
var statearr_26671_26708 = state_26667__$1;
(statearr_26671_26708[(2)] = null);

(statearr_26671_26708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (1))){
var state_26667__$1 = state_26667;
var statearr_26672_26709 = state_26667__$1;
(statearr_26672_26709[(2)] = null);

(statearr_26672_26709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (4))){
var inst_26608 = (state_26667[(13)]);
var inst_26608__$1 = (state_26667[(2)]);
var inst_26609 = (inst_26608__$1 == null);
var state_26667__$1 = (function (){var statearr_26673 = state_26667;
(statearr_26673[(13)] = inst_26608__$1);

return statearr_26673;
})();
if(cljs.core.truth_(inst_26609)){
var statearr_26674_26710 = state_26667__$1;
(statearr_26674_26710[(1)] = (5));

} else {
var statearr_26675_26711 = state_26667__$1;
(statearr_26675_26711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (15))){
var state_26667__$1 = state_26667;
var statearr_26679_26712 = state_26667__$1;
(statearr_26679_26712[(2)] = null);

(statearr_26679_26712[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (21))){
var state_26667__$1 = state_26667;
var statearr_26680_26713 = state_26667__$1;
(statearr_26680_26713[(2)] = null);

(statearr_26680_26713[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (13))){
var inst_26619 = (state_26667[(8)]);
var inst_26620 = (state_26667[(10)]);
var inst_26621 = (state_26667[(11)]);
var inst_26622 = (state_26667[(12)]);
var inst_26629 = (state_26667[(2)]);
var inst_26630 = (inst_26622 + (1));
var tmp26676 = inst_26619;
var tmp26677 = inst_26620;
var tmp26678 = inst_26621;
var inst_26619__$1 = tmp26676;
var inst_26620__$1 = tmp26677;
var inst_26621__$1 = tmp26678;
var inst_26622__$1 = inst_26630;
var state_26667__$1 = (function (){var statearr_26681 = state_26667;
(statearr_26681[(8)] = inst_26619__$1);

(statearr_26681[(10)] = inst_26620__$1);

(statearr_26681[(14)] = inst_26629);

(statearr_26681[(11)] = inst_26621__$1);

(statearr_26681[(12)] = inst_26622__$1);

return statearr_26681;
})();
var statearr_26682_26714 = state_26667__$1;
(statearr_26682_26714[(2)] = null);

(statearr_26682_26714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (22))){
var state_26667__$1 = state_26667;
var statearr_26683_26715 = state_26667__$1;
(statearr_26683_26715[(2)] = null);

(statearr_26683_26715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (6))){
var inst_26608 = (state_26667[(13)]);
var inst_26617 = f.call(null,inst_26608);
var inst_26618 = cljs.core.seq.call(null,inst_26617);
var inst_26619 = inst_26618;
var inst_26620 = null;
var inst_26621 = (0);
var inst_26622 = (0);
var state_26667__$1 = (function (){var statearr_26684 = state_26667;
(statearr_26684[(8)] = inst_26619);

(statearr_26684[(10)] = inst_26620);

(statearr_26684[(11)] = inst_26621);

(statearr_26684[(12)] = inst_26622);

return statearr_26684;
})();
var statearr_26685_26716 = state_26667__$1;
(statearr_26685_26716[(2)] = null);

(statearr_26685_26716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (17))){
var inst_26633 = (state_26667[(7)]);
var inst_26637 = cljs.core.chunk_first.call(null,inst_26633);
var inst_26638 = cljs.core.chunk_rest.call(null,inst_26633);
var inst_26639 = cljs.core.count.call(null,inst_26637);
var inst_26619 = inst_26638;
var inst_26620 = inst_26637;
var inst_26621 = inst_26639;
var inst_26622 = (0);
var state_26667__$1 = (function (){var statearr_26686 = state_26667;
(statearr_26686[(8)] = inst_26619);

(statearr_26686[(10)] = inst_26620);

(statearr_26686[(11)] = inst_26621);

(statearr_26686[(12)] = inst_26622);

return statearr_26686;
})();
var statearr_26687_26717 = state_26667__$1;
(statearr_26687_26717[(2)] = null);

(statearr_26687_26717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (3))){
var inst_26665 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26667__$1,inst_26665);
} else {
if((state_val_26668 === (12))){
var inst_26653 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26688_26718 = state_26667__$1;
(statearr_26688_26718[(2)] = inst_26653);

(statearr_26688_26718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (2))){
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(4),in$);
} else {
if((state_val_26668 === (23))){
var inst_26661 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26689_26719 = state_26667__$1;
(statearr_26689_26719[(2)] = inst_26661);

(statearr_26689_26719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (19))){
var inst_26648 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26690_26720 = state_26667__$1;
(statearr_26690_26720[(2)] = inst_26648);

(statearr_26690_26720[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (11))){
var inst_26633 = (state_26667[(7)]);
var inst_26619 = (state_26667[(8)]);
var inst_26633__$1 = cljs.core.seq.call(null,inst_26619);
var state_26667__$1 = (function (){var statearr_26691 = state_26667;
(statearr_26691[(7)] = inst_26633__$1);

return statearr_26691;
})();
if(inst_26633__$1){
var statearr_26692_26721 = state_26667__$1;
(statearr_26692_26721[(1)] = (14));

} else {
var statearr_26693_26722 = state_26667__$1;
(statearr_26693_26722[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (9))){
var inst_26655 = (state_26667[(2)]);
var inst_26656 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26667__$1 = (function (){var statearr_26694 = state_26667;
(statearr_26694[(15)] = inst_26655);

return statearr_26694;
})();
if(cljs.core.truth_(inst_26656)){
var statearr_26695_26723 = state_26667__$1;
(statearr_26695_26723[(1)] = (21));

} else {
var statearr_26696_26724 = state_26667__$1;
(statearr_26696_26724[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (5))){
var inst_26611 = cljs.core.async.close_BANG_.call(null,out);
var state_26667__$1 = state_26667;
var statearr_26697_26725 = state_26667__$1;
(statearr_26697_26725[(2)] = inst_26611);

(statearr_26697_26725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (14))){
var inst_26633 = (state_26667[(7)]);
var inst_26635 = cljs.core.chunked_seq_QMARK_.call(null,inst_26633);
var state_26667__$1 = state_26667;
if(inst_26635){
var statearr_26698_26726 = state_26667__$1;
(statearr_26698_26726[(1)] = (17));

} else {
var statearr_26699_26727 = state_26667__$1;
(statearr_26699_26727[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (16))){
var inst_26651 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26700_26728 = state_26667__$1;
(statearr_26700_26728[(2)] = inst_26651);

(statearr_26700_26728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (10))){
var inst_26620 = (state_26667[(10)]);
var inst_26622 = (state_26667[(12)]);
var inst_26627 = cljs.core._nth.call(null,inst_26620,inst_26622);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26667__$1,(13),out,inst_26627);
} else {
if((state_val_26668 === (18))){
var inst_26633 = (state_26667[(7)]);
var inst_26642 = cljs.core.first.call(null,inst_26633);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26667__$1,(20),out,inst_26642);
} else {
if((state_val_26668 === (8))){
var inst_26621 = (state_26667[(11)]);
var inst_26622 = (state_26667[(12)]);
var inst_26624 = (inst_26622 < inst_26621);
var inst_26625 = inst_26624;
var state_26667__$1 = state_26667;
if(cljs.core.truth_(inst_26625)){
var statearr_26701_26729 = state_26667__$1;
(statearr_26701_26729[(1)] = (10));

} else {
var statearr_26702_26730 = state_26667__$1;
(statearr_26702_26730[(1)] = (11));

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
});})(c__25051__auto__))
;
return ((function (switch__24956__auto__,c__25051__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24957__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24957__auto____0 = (function (){
var statearr_26703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26703[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24957__auto__);

(statearr_26703[(1)] = (1));

return statearr_26703;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24957__auto____1 = (function (state_26667){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_26667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e26704){if((e26704 instanceof Object)){
var ex__24960__auto__ = e26704;
var statearr_26705_26731 = state_26667;
(statearr_26705_26731[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26732 = state_26667;
state_26667 = G__26732;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24957__auto__ = function(state_26667){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24957__auto____1.call(this,state_26667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24957__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24957__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto__))
})();
var state__25053__auto__ = (function (){var statearr_26706 = f__25052__auto__.call(null);
(statearr_26706[(6)] = c__25051__auto__);

return statearr_26706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto__))
);

return c__25051__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26734 = arguments.length;
switch (G__26734) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26737 = arguments.length;
switch (G__26737) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26740 = arguments.length;
switch (G__26740) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25051__auto___26787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___26787,out){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___26787,out){
return (function (state_26764){
var state_val_26765 = (state_26764[(1)]);
if((state_val_26765 === (7))){
var inst_26759 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26766_26788 = state_26764__$1;
(statearr_26766_26788[(2)] = inst_26759);

(statearr_26766_26788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (1))){
var inst_26741 = null;
var state_26764__$1 = (function (){var statearr_26767 = state_26764;
(statearr_26767[(7)] = inst_26741);

return statearr_26767;
})();
var statearr_26768_26789 = state_26764__$1;
(statearr_26768_26789[(2)] = null);

(statearr_26768_26789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (4))){
var inst_26744 = (state_26764[(8)]);
var inst_26744__$1 = (state_26764[(2)]);
var inst_26745 = (inst_26744__$1 == null);
var inst_26746 = cljs.core.not.call(null,inst_26745);
var state_26764__$1 = (function (){var statearr_26769 = state_26764;
(statearr_26769[(8)] = inst_26744__$1);

return statearr_26769;
})();
if(inst_26746){
var statearr_26770_26790 = state_26764__$1;
(statearr_26770_26790[(1)] = (5));

} else {
var statearr_26771_26791 = state_26764__$1;
(statearr_26771_26791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (6))){
var state_26764__$1 = state_26764;
var statearr_26772_26792 = state_26764__$1;
(statearr_26772_26792[(2)] = null);

(statearr_26772_26792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (3))){
var inst_26761 = (state_26764[(2)]);
var inst_26762 = cljs.core.async.close_BANG_.call(null,out);
var state_26764__$1 = (function (){var statearr_26773 = state_26764;
(statearr_26773[(9)] = inst_26761);

return statearr_26773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26764__$1,inst_26762);
} else {
if((state_val_26765 === (2))){
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26764__$1,(4),ch);
} else {
if((state_val_26765 === (11))){
var inst_26744 = (state_26764[(8)]);
var inst_26753 = (state_26764[(2)]);
var inst_26741 = inst_26744;
var state_26764__$1 = (function (){var statearr_26774 = state_26764;
(statearr_26774[(7)] = inst_26741);

(statearr_26774[(10)] = inst_26753);

return statearr_26774;
})();
var statearr_26775_26793 = state_26764__$1;
(statearr_26775_26793[(2)] = null);

(statearr_26775_26793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (9))){
var inst_26744 = (state_26764[(8)]);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26764__$1,(11),out,inst_26744);
} else {
if((state_val_26765 === (5))){
var inst_26741 = (state_26764[(7)]);
var inst_26744 = (state_26764[(8)]);
var inst_26748 = cljs.core._EQ_.call(null,inst_26744,inst_26741);
var state_26764__$1 = state_26764;
if(inst_26748){
var statearr_26777_26794 = state_26764__$1;
(statearr_26777_26794[(1)] = (8));

} else {
var statearr_26778_26795 = state_26764__$1;
(statearr_26778_26795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (10))){
var inst_26756 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26779_26796 = state_26764__$1;
(statearr_26779_26796[(2)] = inst_26756);

(statearr_26779_26796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (8))){
var inst_26741 = (state_26764[(7)]);
var tmp26776 = inst_26741;
var inst_26741__$1 = tmp26776;
var state_26764__$1 = (function (){var statearr_26780 = state_26764;
(statearr_26780[(7)] = inst_26741__$1);

return statearr_26780;
})();
var statearr_26781_26797 = state_26764__$1;
(statearr_26781_26797[(2)] = null);

(statearr_26781_26797[(1)] = (2));


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
});})(c__25051__auto___26787,out))
;
return ((function (switch__24956__auto__,c__25051__auto___26787,out){
return (function() {
var cljs$core$async$state_machine__24957__auto__ = null;
var cljs$core$async$state_machine__24957__auto____0 = (function (){
var statearr_26782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26782[(0)] = cljs$core$async$state_machine__24957__auto__);

(statearr_26782[(1)] = (1));

return statearr_26782;
});
var cljs$core$async$state_machine__24957__auto____1 = (function (state_26764){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_26764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e26783){if((e26783 instanceof Object)){
var ex__24960__auto__ = e26783;
var statearr_26784_26798 = state_26764;
(statearr_26784_26798[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26799 = state_26764;
state_26764 = G__26799;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$state_machine__24957__auto__ = function(state_26764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24957__auto____1.call(this,state_26764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24957__auto____0;
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24957__auto____1;
return cljs$core$async$state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___26787,out))
})();
var state__25053__auto__ = (function (){var statearr_26785 = f__25052__auto__.call(null);
(statearr_26785[(6)] = c__25051__auto___26787);

return statearr_26785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___26787,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26801 = arguments.length;
switch (G__26801) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25051__auto___26867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___26867,out){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___26867,out){
return (function (state_26839){
var state_val_26840 = (state_26839[(1)]);
if((state_val_26840 === (7))){
var inst_26835 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26841_26868 = state_26839__$1;
(statearr_26841_26868[(2)] = inst_26835);

(statearr_26841_26868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (1))){
var inst_26802 = (new Array(n));
var inst_26803 = inst_26802;
var inst_26804 = (0);
var state_26839__$1 = (function (){var statearr_26842 = state_26839;
(statearr_26842[(7)] = inst_26804);

(statearr_26842[(8)] = inst_26803);

return statearr_26842;
})();
var statearr_26843_26869 = state_26839__$1;
(statearr_26843_26869[(2)] = null);

(statearr_26843_26869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (4))){
var inst_26807 = (state_26839[(9)]);
var inst_26807__$1 = (state_26839[(2)]);
var inst_26808 = (inst_26807__$1 == null);
var inst_26809 = cljs.core.not.call(null,inst_26808);
var state_26839__$1 = (function (){var statearr_26844 = state_26839;
(statearr_26844[(9)] = inst_26807__$1);

return statearr_26844;
})();
if(inst_26809){
var statearr_26845_26870 = state_26839__$1;
(statearr_26845_26870[(1)] = (5));

} else {
var statearr_26846_26871 = state_26839__$1;
(statearr_26846_26871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (15))){
var inst_26829 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26847_26872 = state_26839__$1;
(statearr_26847_26872[(2)] = inst_26829);

(statearr_26847_26872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (13))){
var state_26839__$1 = state_26839;
var statearr_26848_26873 = state_26839__$1;
(statearr_26848_26873[(2)] = null);

(statearr_26848_26873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (6))){
var inst_26804 = (state_26839[(7)]);
var inst_26825 = (inst_26804 > (0));
var state_26839__$1 = state_26839;
if(cljs.core.truth_(inst_26825)){
var statearr_26849_26874 = state_26839__$1;
(statearr_26849_26874[(1)] = (12));

} else {
var statearr_26850_26875 = state_26839__$1;
(statearr_26850_26875[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (3))){
var inst_26837 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26839__$1,inst_26837);
} else {
if((state_val_26840 === (12))){
var inst_26803 = (state_26839[(8)]);
var inst_26827 = cljs.core.vec.call(null,inst_26803);
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26839__$1,(15),out,inst_26827);
} else {
if((state_val_26840 === (2))){
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26839__$1,(4),ch);
} else {
if((state_val_26840 === (11))){
var inst_26819 = (state_26839[(2)]);
var inst_26820 = (new Array(n));
var inst_26803 = inst_26820;
var inst_26804 = (0);
var state_26839__$1 = (function (){var statearr_26851 = state_26839;
(statearr_26851[(7)] = inst_26804);

(statearr_26851[(10)] = inst_26819);

(statearr_26851[(8)] = inst_26803);

return statearr_26851;
})();
var statearr_26852_26876 = state_26839__$1;
(statearr_26852_26876[(2)] = null);

(statearr_26852_26876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (9))){
var inst_26803 = (state_26839[(8)]);
var inst_26817 = cljs.core.vec.call(null,inst_26803);
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26839__$1,(11),out,inst_26817);
} else {
if((state_val_26840 === (5))){
var inst_26807 = (state_26839[(9)]);
var inst_26804 = (state_26839[(7)]);
var inst_26812 = (state_26839[(11)]);
var inst_26803 = (state_26839[(8)]);
var inst_26811 = (inst_26803[inst_26804] = inst_26807);
var inst_26812__$1 = (inst_26804 + (1));
var inst_26813 = (inst_26812__$1 < n);
var state_26839__$1 = (function (){var statearr_26853 = state_26839;
(statearr_26853[(12)] = inst_26811);

(statearr_26853[(11)] = inst_26812__$1);

return statearr_26853;
})();
if(cljs.core.truth_(inst_26813)){
var statearr_26854_26877 = state_26839__$1;
(statearr_26854_26877[(1)] = (8));

} else {
var statearr_26855_26878 = state_26839__$1;
(statearr_26855_26878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (14))){
var inst_26832 = (state_26839[(2)]);
var inst_26833 = cljs.core.async.close_BANG_.call(null,out);
var state_26839__$1 = (function (){var statearr_26857 = state_26839;
(statearr_26857[(13)] = inst_26832);

return statearr_26857;
})();
var statearr_26858_26879 = state_26839__$1;
(statearr_26858_26879[(2)] = inst_26833);

(statearr_26858_26879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (10))){
var inst_26823 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26859_26880 = state_26839__$1;
(statearr_26859_26880[(2)] = inst_26823);

(statearr_26859_26880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (8))){
var inst_26812 = (state_26839[(11)]);
var inst_26803 = (state_26839[(8)]);
var tmp26856 = inst_26803;
var inst_26803__$1 = tmp26856;
var inst_26804 = inst_26812;
var state_26839__$1 = (function (){var statearr_26860 = state_26839;
(statearr_26860[(7)] = inst_26804);

(statearr_26860[(8)] = inst_26803__$1);

return statearr_26860;
})();
var statearr_26861_26881 = state_26839__$1;
(statearr_26861_26881[(2)] = null);

(statearr_26861_26881[(1)] = (2));


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
});})(c__25051__auto___26867,out))
;
return ((function (switch__24956__auto__,c__25051__auto___26867,out){
return (function() {
var cljs$core$async$state_machine__24957__auto__ = null;
var cljs$core$async$state_machine__24957__auto____0 = (function (){
var statearr_26862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26862[(0)] = cljs$core$async$state_machine__24957__auto__);

(statearr_26862[(1)] = (1));

return statearr_26862;
});
var cljs$core$async$state_machine__24957__auto____1 = (function (state_26839){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_26839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e26863){if((e26863 instanceof Object)){
var ex__24960__auto__ = e26863;
var statearr_26864_26882 = state_26839;
(statearr_26864_26882[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26883 = state_26839;
state_26839 = G__26883;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$state_machine__24957__auto__ = function(state_26839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24957__auto____1.call(this,state_26839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24957__auto____0;
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24957__auto____1;
return cljs$core$async$state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___26867,out))
})();
var state__25053__auto__ = (function (){var statearr_26865 = f__25052__auto__.call(null);
(statearr_26865[(6)] = c__25051__auto___26867);

return statearr_26865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___26867,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26885 = arguments.length;
switch (G__26885) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25051__auto___26955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___26955,out){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___26955,out){
return (function (state_26927){
var state_val_26928 = (state_26927[(1)]);
if((state_val_26928 === (7))){
var inst_26923 = (state_26927[(2)]);
var state_26927__$1 = state_26927;
var statearr_26929_26956 = state_26927__$1;
(statearr_26929_26956[(2)] = inst_26923);

(statearr_26929_26956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (1))){
var inst_26886 = [];
var inst_26887 = inst_26886;
var inst_26888 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26927__$1 = (function (){var statearr_26930 = state_26927;
(statearr_26930[(7)] = inst_26887);

(statearr_26930[(8)] = inst_26888);

return statearr_26930;
})();
var statearr_26931_26957 = state_26927__$1;
(statearr_26931_26957[(2)] = null);

(statearr_26931_26957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (4))){
var inst_26891 = (state_26927[(9)]);
var inst_26891__$1 = (state_26927[(2)]);
var inst_26892 = (inst_26891__$1 == null);
var inst_26893 = cljs.core.not.call(null,inst_26892);
var state_26927__$1 = (function (){var statearr_26932 = state_26927;
(statearr_26932[(9)] = inst_26891__$1);

return statearr_26932;
})();
if(inst_26893){
var statearr_26933_26958 = state_26927__$1;
(statearr_26933_26958[(1)] = (5));

} else {
var statearr_26934_26959 = state_26927__$1;
(statearr_26934_26959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (15))){
var inst_26917 = (state_26927[(2)]);
var state_26927__$1 = state_26927;
var statearr_26935_26960 = state_26927__$1;
(statearr_26935_26960[(2)] = inst_26917);

(statearr_26935_26960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (13))){
var state_26927__$1 = state_26927;
var statearr_26936_26961 = state_26927__$1;
(statearr_26936_26961[(2)] = null);

(statearr_26936_26961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (6))){
var inst_26887 = (state_26927[(7)]);
var inst_26912 = inst_26887.length;
var inst_26913 = (inst_26912 > (0));
var state_26927__$1 = state_26927;
if(cljs.core.truth_(inst_26913)){
var statearr_26937_26962 = state_26927__$1;
(statearr_26937_26962[(1)] = (12));

} else {
var statearr_26938_26963 = state_26927__$1;
(statearr_26938_26963[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (3))){
var inst_26925 = (state_26927[(2)]);
var state_26927__$1 = state_26927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26927__$1,inst_26925);
} else {
if((state_val_26928 === (12))){
var inst_26887 = (state_26927[(7)]);
var inst_26915 = cljs.core.vec.call(null,inst_26887);
var state_26927__$1 = state_26927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26927__$1,(15),out,inst_26915);
} else {
if((state_val_26928 === (2))){
var state_26927__$1 = state_26927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26927__$1,(4),ch);
} else {
if((state_val_26928 === (11))){
var inst_26895 = (state_26927[(10)]);
var inst_26891 = (state_26927[(9)]);
var inst_26905 = (state_26927[(2)]);
var inst_26906 = [];
var inst_26907 = inst_26906.push(inst_26891);
var inst_26887 = inst_26906;
var inst_26888 = inst_26895;
var state_26927__$1 = (function (){var statearr_26939 = state_26927;
(statearr_26939[(7)] = inst_26887);

(statearr_26939[(8)] = inst_26888);

(statearr_26939[(11)] = inst_26907);

(statearr_26939[(12)] = inst_26905);

return statearr_26939;
})();
var statearr_26940_26964 = state_26927__$1;
(statearr_26940_26964[(2)] = null);

(statearr_26940_26964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (9))){
var inst_26887 = (state_26927[(7)]);
var inst_26903 = cljs.core.vec.call(null,inst_26887);
var state_26927__$1 = state_26927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26927__$1,(11),out,inst_26903);
} else {
if((state_val_26928 === (5))){
var inst_26888 = (state_26927[(8)]);
var inst_26895 = (state_26927[(10)]);
var inst_26891 = (state_26927[(9)]);
var inst_26895__$1 = f.call(null,inst_26891);
var inst_26896 = cljs.core._EQ_.call(null,inst_26895__$1,inst_26888);
var inst_26897 = cljs.core.keyword_identical_QMARK_.call(null,inst_26888,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26898 = ((inst_26896) || (inst_26897));
var state_26927__$1 = (function (){var statearr_26941 = state_26927;
(statearr_26941[(10)] = inst_26895__$1);

return statearr_26941;
})();
if(cljs.core.truth_(inst_26898)){
var statearr_26942_26965 = state_26927__$1;
(statearr_26942_26965[(1)] = (8));

} else {
var statearr_26943_26966 = state_26927__$1;
(statearr_26943_26966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (14))){
var inst_26920 = (state_26927[(2)]);
var inst_26921 = cljs.core.async.close_BANG_.call(null,out);
var state_26927__$1 = (function (){var statearr_26945 = state_26927;
(statearr_26945[(13)] = inst_26920);

return statearr_26945;
})();
var statearr_26946_26967 = state_26927__$1;
(statearr_26946_26967[(2)] = inst_26921);

(statearr_26946_26967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (10))){
var inst_26910 = (state_26927[(2)]);
var state_26927__$1 = state_26927;
var statearr_26947_26968 = state_26927__$1;
(statearr_26947_26968[(2)] = inst_26910);

(statearr_26947_26968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (8))){
var inst_26887 = (state_26927[(7)]);
var inst_26895 = (state_26927[(10)]);
var inst_26891 = (state_26927[(9)]);
var inst_26900 = inst_26887.push(inst_26891);
var tmp26944 = inst_26887;
var inst_26887__$1 = tmp26944;
var inst_26888 = inst_26895;
var state_26927__$1 = (function (){var statearr_26948 = state_26927;
(statearr_26948[(7)] = inst_26887__$1);

(statearr_26948[(8)] = inst_26888);

(statearr_26948[(14)] = inst_26900);

return statearr_26948;
})();
var statearr_26949_26969 = state_26927__$1;
(statearr_26949_26969[(2)] = null);

(statearr_26949_26969[(1)] = (2));


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
});})(c__25051__auto___26955,out))
;
return ((function (switch__24956__auto__,c__25051__auto___26955,out){
return (function() {
var cljs$core$async$state_machine__24957__auto__ = null;
var cljs$core$async$state_machine__24957__auto____0 = (function (){
var statearr_26950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26950[(0)] = cljs$core$async$state_machine__24957__auto__);

(statearr_26950[(1)] = (1));

return statearr_26950;
});
var cljs$core$async$state_machine__24957__auto____1 = (function (state_26927){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_26927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e26951){if((e26951 instanceof Object)){
var ex__24960__auto__ = e26951;
var statearr_26952_26970 = state_26927;
(statearr_26952_26970[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26971 = state_26927;
state_26927 = G__26971;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
cljs$core$async$state_machine__24957__auto__ = function(state_26927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24957__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24957__auto____1.call(this,state_26927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24957__auto____0;
cljs$core$async$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24957__auto____1;
return cljs$core$async$state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___26955,out))
})();
var state__25053__auto__ = (function (){var statearr_26953 = f__25052__auto__.call(null);
(statearr_26953[(6)] = c__25051__auto___26955);

return statearr_26953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___26955,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1566805869216
