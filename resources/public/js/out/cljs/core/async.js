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
var G__23583 = arguments.length;
switch (G__23583) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23584 = (function (f,blockable,meta23585){
this.f = f;
this.blockable = blockable;
this.meta23585 = meta23585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23586,meta23585__$1){
var self__ = this;
var _23586__$1 = this;
return (new cljs.core.async.t_cljs$core$async23584(self__.f,self__.blockable,meta23585__$1));
});

cljs.core.async.t_cljs$core$async23584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23586){
var self__ = this;
var _23586__$1 = this;
return self__.meta23585;
});

cljs.core.async.t_cljs$core$async23584.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23584.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23585","meta23585",-113181553,null)], null);
});

cljs.core.async.t_cljs$core$async23584.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23584";

cljs.core.async.t_cljs$core$async23584.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23584");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23584.
 */
cljs.core.async.__GT_t_cljs$core$async23584 = (function cljs$core$async$__GT_t_cljs$core$async23584(f__$1,blockable__$1,meta23585){
return (new cljs.core.async.t_cljs$core$async23584(f__$1,blockable__$1,meta23585));
});

}

return (new cljs.core.async.t_cljs$core$async23584(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23590 = arguments.length;
switch (G__23590) {
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
var G__23593 = arguments.length;
switch (G__23593) {
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
var G__23596 = arguments.length;
switch (G__23596) {
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
var val_23598 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23598);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23598,ret){
return (function (){
return fn1.call(null,val_23598);
});})(val_23598,ret))
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
var G__23600 = arguments.length;
switch (G__23600) {
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
var n__4607__auto___23602 = n;
var x_23603 = (0);
while(true){
if((x_23603 < n__4607__auto___23602)){
(a[x_23603] = (0));

var G__23604 = (x_23603 + (1));
x_23603 = G__23604;
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

var G__23605 = (i + (1));
i = G__23605;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23606 = (function (flag,meta23607){
this.flag = flag;
this.meta23607 = meta23607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23608,meta23607__$1){
var self__ = this;
var _23608__$1 = this;
return (new cljs.core.async.t_cljs$core$async23606(self__.flag,meta23607__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23608){
var self__ = this;
var _23608__$1 = this;
return self__.meta23607;
});})(flag))
;

cljs.core.async.t_cljs$core$async23606.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23606.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23607","meta23607",-903177640,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23606";

cljs.core.async.t_cljs$core$async23606.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23606");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23606.
 */
cljs.core.async.__GT_t_cljs$core$async23606 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23606(flag__$1,meta23607){
return (new cljs.core.async.t_cljs$core$async23606(flag__$1,meta23607));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23606(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23609 = (function (flag,cb,meta23610){
this.flag = flag;
this.cb = cb;
this.meta23610 = meta23610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23611,meta23610__$1){
var self__ = this;
var _23611__$1 = this;
return (new cljs.core.async.t_cljs$core$async23609(self__.flag,self__.cb,meta23610__$1));
});

cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23611){
var self__ = this;
var _23611__$1 = this;
return self__.meta23610;
});

cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23610","meta23610",-1848296789,null)], null);
});

cljs.core.async.t_cljs$core$async23609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23609";

cljs.core.async.t_cljs$core$async23609.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23609");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23609.
 */
cljs.core.async.__GT_t_cljs$core$async23609 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23609(flag__$1,cb__$1,meta23610){
return (new cljs.core.async.t_cljs$core$async23609(flag__$1,cb__$1,meta23610));
});

}

return (new cljs.core.async.t_cljs$core$async23609(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23612_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23612_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23613_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23613_SHARP_,port], null));
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
var G__23614 = (i + (1));
i = G__23614;
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
var len__4730__auto___23620 = arguments.length;
var i__4731__auto___23621 = (0);
while(true){
if((i__4731__auto___23621 < len__4730__auto___23620)){
args__4736__auto__.push((arguments[i__4731__auto___23621]));

var G__23622 = (i__4731__auto___23621 + (1));
i__4731__auto___23621 = G__23622;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23617){
var map__23618 = p__23617;
var map__23618__$1 = (((((!((map__23618 == null))))?(((((map__23618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23618):map__23618);
var opts = map__23618__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23615){
var G__23616 = cljs.core.first.call(null,seq23615);
var seq23615__$1 = cljs.core.next.call(null,seq23615);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23616,seq23615__$1);
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
var G__23624 = arguments.length;
switch (G__23624) {
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
var c__23523__auto___23670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___23670){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___23670){
return (function (state_23648){
var state_val_23649 = (state_23648[(1)]);
if((state_val_23649 === (7))){
var inst_23644 = (state_23648[(2)]);
var state_23648__$1 = state_23648;
var statearr_23650_23671 = state_23648__$1;
(statearr_23650_23671[(2)] = inst_23644);

(statearr_23650_23671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (1))){
var state_23648__$1 = state_23648;
var statearr_23651_23672 = state_23648__$1;
(statearr_23651_23672[(2)] = null);

(statearr_23651_23672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (4))){
var inst_23627 = (state_23648[(7)]);
var inst_23627__$1 = (state_23648[(2)]);
var inst_23628 = (inst_23627__$1 == null);
var state_23648__$1 = (function (){var statearr_23652 = state_23648;
(statearr_23652[(7)] = inst_23627__$1);

return statearr_23652;
})();
if(cljs.core.truth_(inst_23628)){
var statearr_23653_23673 = state_23648__$1;
(statearr_23653_23673[(1)] = (5));

} else {
var statearr_23654_23674 = state_23648__$1;
(statearr_23654_23674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (13))){
var state_23648__$1 = state_23648;
var statearr_23655_23675 = state_23648__$1;
(statearr_23655_23675[(2)] = null);

(statearr_23655_23675[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (6))){
var inst_23627 = (state_23648[(7)]);
var state_23648__$1 = state_23648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23648__$1,(11),to,inst_23627);
} else {
if((state_val_23649 === (3))){
var inst_23646 = (state_23648[(2)]);
var state_23648__$1 = state_23648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23648__$1,inst_23646);
} else {
if((state_val_23649 === (12))){
var state_23648__$1 = state_23648;
var statearr_23656_23676 = state_23648__$1;
(statearr_23656_23676[(2)] = null);

(statearr_23656_23676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (2))){
var state_23648__$1 = state_23648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23648__$1,(4),from);
} else {
if((state_val_23649 === (11))){
var inst_23637 = (state_23648[(2)]);
var state_23648__$1 = state_23648;
if(cljs.core.truth_(inst_23637)){
var statearr_23657_23677 = state_23648__$1;
(statearr_23657_23677[(1)] = (12));

} else {
var statearr_23658_23678 = state_23648__$1;
(statearr_23658_23678[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (9))){
var state_23648__$1 = state_23648;
var statearr_23659_23679 = state_23648__$1;
(statearr_23659_23679[(2)] = null);

(statearr_23659_23679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (5))){
var state_23648__$1 = state_23648;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23660_23680 = state_23648__$1;
(statearr_23660_23680[(1)] = (8));

} else {
var statearr_23661_23681 = state_23648__$1;
(statearr_23661_23681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (14))){
var inst_23642 = (state_23648[(2)]);
var state_23648__$1 = state_23648;
var statearr_23662_23682 = state_23648__$1;
(statearr_23662_23682[(2)] = inst_23642);

(statearr_23662_23682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (10))){
var inst_23634 = (state_23648[(2)]);
var state_23648__$1 = state_23648;
var statearr_23663_23683 = state_23648__$1;
(statearr_23663_23683[(2)] = inst_23634);

(statearr_23663_23683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23649 === (8))){
var inst_23631 = cljs.core.async.close_BANG_.call(null,to);
var state_23648__$1 = state_23648;
var statearr_23664_23684 = state_23648__$1;
(statearr_23664_23684[(2)] = inst_23631);

(statearr_23664_23684[(1)] = (10));


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
});})(c__23523__auto___23670))
;
return ((function (switch__23428__auto__,c__23523__auto___23670){
return (function() {
var cljs$core$async$state_machine__23429__auto__ = null;
var cljs$core$async$state_machine__23429__auto____0 = (function (){
var statearr_23665 = [null,null,null,null,null,null,null,null];
(statearr_23665[(0)] = cljs$core$async$state_machine__23429__auto__);

(statearr_23665[(1)] = (1));

return statearr_23665;
});
var cljs$core$async$state_machine__23429__auto____1 = (function (state_23648){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_23648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e23666){if((e23666 instanceof Object)){
var ex__23432__auto__ = e23666;
var statearr_23667_23685 = state_23648;
(statearr_23667_23685[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23686 = state_23648;
state_23648 = G__23686;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$state_machine__23429__auto__ = function(state_23648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23429__auto____1.call(this,state_23648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23429__auto____0;
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23429__auto____1;
return cljs$core$async$state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___23670))
})();
var state__23525__auto__ = (function (){var statearr_23668 = f__23524__auto__.call(null);
(statearr_23668[(6)] = c__23523__auto___23670);

return statearr_23668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___23670))
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
return (function (p__23687){
var vec__23688 = p__23687;
var v = cljs.core.nth.call(null,vec__23688,(0),null);
var p = cljs.core.nth.call(null,vec__23688,(1),null);
var job = vec__23688;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23523__auto___23859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___23859,res,vec__23688,v,p,job,jobs,results){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___23859,res,vec__23688,v,p,job,jobs,results){
return (function (state_23695){
var state_val_23696 = (state_23695[(1)]);
if((state_val_23696 === (1))){
var state_23695__$1 = state_23695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23695__$1,(2),res,v);
} else {
if((state_val_23696 === (2))){
var inst_23692 = (state_23695[(2)]);
var inst_23693 = cljs.core.async.close_BANG_.call(null,res);
var state_23695__$1 = (function (){var statearr_23697 = state_23695;
(statearr_23697[(7)] = inst_23692);

return statearr_23697;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23695__$1,inst_23693);
} else {
return null;
}
}
});})(c__23523__auto___23859,res,vec__23688,v,p,job,jobs,results))
;
return ((function (switch__23428__auto__,c__23523__auto___23859,res,vec__23688,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0 = (function (){
var statearr_23698 = [null,null,null,null,null,null,null,null];
(statearr_23698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__);

(statearr_23698[(1)] = (1));

return statearr_23698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1 = (function (state_23695){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_23695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e23699){if((e23699 instanceof Object)){
var ex__23432__auto__ = e23699;
var statearr_23700_23860 = state_23695;
(statearr_23700_23860[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23861 = state_23695;
state_23695 = G__23861;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__ = function(state_23695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1.call(this,state_23695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___23859,res,vec__23688,v,p,job,jobs,results))
})();
var state__23525__auto__ = (function (){var statearr_23701 = f__23524__auto__.call(null);
(statearr_23701[(6)] = c__23523__auto___23859);

return statearr_23701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___23859,res,vec__23688,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23702){
var vec__23703 = p__23702;
var v = cljs.core.nth.call(null,vec__23703,(0),null);
var p = cljs.core.nth.call(null,vec__23703,(1),null);
var job = vec__23703;
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
var n__4607__auto___23862 = n;
var __23863 = (0);
while(true){
if((__23863 < n__4607__auto___23862)){
var G__23706_23864 = type;
var G__23706_23865__$1 = (((G__23706_23864 instanceof cljs.core.Keyword))?G__23706_23864.fqn:null);
switch (G__23706_23865__$1) {
case "compute":
var c__23523__auto___23867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23863,c__23523__auto___23867,G__23706_23864,G__23706_23865__$1,n__4607__auto___23862,jobs,results,process,async){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (__23863,c__23523__auto___23867,G__23706_23864,G__23706_23865__$1,n__4607__auto___23862,jobs,results,process,async){
return (function (state_23719){
var state_val_23720 = (state_23719[(1)]);
if((state_val_23720 === (1))){
var state_23719__$1 = state_23719;
var statearr_23721_23868 = state_23719__$1;
(statearr_23721_23868[(2)] = null);

(statearr_23721_23868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (2))){
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23719__$1,(4),jobs);
} else {
if((state_val_23720 === (3))){
var inst_23717 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23719__$1,inst_23717);
} else {
if((state_val_23720 === (4))){
var inst_23709 = (state_23719[(2)]);
var inst_23710 = process.call(null,inst_23709);
var state_23719__$1 = state_23719;
if(cljs.core.truth_(inst_23710)){
var statearr_23722_23869 = state_23719__$1;
(statearr_23722_23869[(1)] = (5));

} else {
var statearr_23723_23870 = state_23719__$1;
(statearr_23723_23870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (5))){
var state_23719__$1 = state_23719;
var statearr_23724_23871 = state_23719__$1;
(statearr_23724_23871[(2)] = null);

(statearr_23724_23871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (6))){
var state_23719__$1 = state_23719;
var statearr_23725_23872 = state_23719__$1;
(statearr_23725_23872[(2)] = null);

(statearr_23725_23872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (7))){
var inst_23715 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23726_23873 = state_23719__$1;
(statearr_23726_23873[(2)] = inst_23715);

(statearr_23726_23873[(1)] = (3));


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
});})(__23863,c__23523__auto___23867,G__23706_23864,G__23706_23865__$1,n__4607__auto___23862,jobs,results,process,async))
;
return ((function (__23863,switch__23428__auto__,c__23523__auto___23867,G__23706_23864,G__23706_23865__$1,n__4607__auto___23862,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0 = (function (){
var statearr_23727 = [null,null,null,null,null,null,null];
(statearr_23727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__);

(statearr_23727[(1)] = (1));

return statearr_23727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1 = (function (state_23719){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_23719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e23728){if((e23728 instanceof Object)){
var ex__23432__auto__ = e23728;
var statearr_23729_23874 = state_23719;
(statearr_23729_23874[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23875 = state_23719;
state_23719 = G__23875;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__ = function(state_23719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1.call(this,state_23719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__;
})()
;})(__23863,switch__23428__auto__,c__23523__auto___23867,G__23706_23864,G__23706_23865__$1,n__4607__auto___23862,jobs,results,process,async))
})();
var state__23525__auto__ = (function (){var statearr_23730 = f__23524__auto__.call(null);
(statearr_23730[(6)] = c__23523__auto___23867);

return statearr_23730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(__23863,c__23523__auto___23867,G__23706_23864,G__23706_23865__$1,n__4607__auto___23862,jobs,results,process,async))
);


break;
case "async":
var c__23523__auto___23876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23863,c__23523__auto___23876,G__23706_23864,G__23706_23865__$1,n__4607__auto___23862,jobs,results,process,async){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (__23863,c__23523__auto___23876,G__23706_23864,G__23706_23865__$1,n__4607__auto___23862,jobs,results,process,async){
return (function (state_23743){
var state_val_23744 = (state_23743[(1)]);
if((state_val_23744 === (1))){
var state_23743__$1 = state_23743;
var statearr_23745_23877 = state_23743__$1;
(statearr_23745_23877[(2)] = null);

(statearr_23745_23877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (2))){
var state_23743__$1 = state_23743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23743__$1,(4),jobs);
} else {
if((state_val_23744 === (3))){
var inst_23741 = (state_23743[(2)]);
var state_23743__$1 = state_23743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23743__$1,inst_23741);
} else {
if((state_val_23744 === (4))){
var inst_23733 = (state_23743[(2)]);
var inst_23734 = async.call(null,inst_23733);
var state_23743__$1 = state_23743;
if(cljs.core.truth_(inst_23734)){
var statearr_23746_23878 = state_23743__$1;
(statearr_23746_23878[(1)] = (5));

} else {
var statearr_23747_23879 = state_23743__$1;
(statearr_23747_23879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (5))){
var state_23743__$1 = state_23743;
var statearr_23748_23880 = state_23743__$1;
(statearr_23748_23880[(2)] = null);

(statearr_23748_23880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (6))){
var state_23743__$1 = state_23743;
var statearr_23749_23881 = state_23743__$1;
(statearr_23749_23881[(2)] = null);

(statearr_23749_23881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (7))){
var inst_23739 = (state_23743[(2)]);
var state_23743__$1 = state_23743;
var statearr_23750_23882 = state_23743__$1;
(statearr_23750_23882[(2)] = inst_23739);

(statearr_23750_23882[(1)] = (3));


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
});})(__23863,c__23523__auto___23876,G__23706_23864,G__23706_23865__$1,n__4607__auto___23862,jobs,results,process,async))
;
return ((function (__23863,switch__23428__auto__,c__23523__auto___23876,G__23706_23864,G__23706_23865__$1,n__4607__auto___23862,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0 = (function (){
var statearr_23751 = [null,null,null,null,null,null,null];
(statearr_23751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__);

(statearr_23751[(1)] = (1));

return statearr_23751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1 = (function (state_23743){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_23743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e23752){if((e23752 instanceof Object)){
var ex__23432__auto__ = e23752;
var statearr_23753_23883 = state_23743;
(statearr_23753_23883[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23884 = state_23743;
state_23743 = G__23884;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__ = function(state_23743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1.call(this,state_23743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__;
})()
;})(__23863,switch__23428__auto__,c__23523__auto___23876,G__23706_23864,G__23706_23865__$1,n__4607__auto___23862,jobs,results,process,async))
})();
var state__23525__auto__ = (function (){var statearr_23754 = f__23524__auto__.call(null);
(statearr_23754[(6)] = c__23523__auto___23876);

return statearr_23754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(__23863,c__23523__auto___23876,G__23706_23864,G__23706_23865__$1,n__4607__auto___23862,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23706_23865__$1)].join('')));

}

var G__23885 = (__23863 + (1));
__23863 = G__23885;
continue;
} else {
}
break;
}

var c__23523__auto___23886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___23886,jobs,results,process,async){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___23886,jobs,results,process,async){
return (function (state_23776){
var state_val_23777 = (state_23776[(1)]);
if((state_val_23777 === (7))){
var inst_23772 = (state_23776[(2)]);
var state_23776__$1 = state_23776;
var statearr_23778_23887 = state_23776__$1;
(statearr_23778_23887[(2)] = inst_23772);

(statearr_23778_23887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (1))){
var state_23776__$1 = state_23776;
var statearr_23779_23888 = state_23776__$1;
(statearr_23779_23888[(2)] = null);

(statearr_23779_23888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (4))){
var inst_23757 = (state_23776[(7)]);
var inst_23757__$1 = (state_23776[(2)]);
var inst_23758 = (inst_23757__$1 == null);
var state_23776__$1 = (function (){var statearr_23780 = state_23776;
(statearr_23780[(7)] = inst_23757__$1);

return statearr_23780;
})();
if(cljs.core.truth_(inst_23758)){
var statearr_23781_23889 = state_23776__$1;
(statearr_23781_23889[(1)] = (5));

} else {
var statearr_23782_23890 = state_23776__$1;
(statearr_23782_23890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (6))){
var inst_23757 = (state_23776[(7)]);
var inst_23762 = (state_23776[(8)]);
var inst_23762__$1 = cljs.core.async.chan.call(null,(1));
var inst_23763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23764 = [inst_23757,inst_23762__$1];
var inst_23765 = (new cljs.core.PersistentVector(null,2,(5),inst_23763,inst_23764,null));
var state_23776__$1 = (function (){var statearr_23783 = state_23776;
(statearr_23783[(8)] = inst_23762__$1);

return statearr_23783;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23776__$1,(8),jobs,inst_23765);
} else {
if((state_val_23777 === (3))){
var inst_23774 = (state_23776[(2)]);
var state_23776__$1 = state_23776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23776__$1,inst_23774);
} else {
if((state_val_23777 === (2))){
var state_23776__$1 = state_23776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23776__$1,(4),from);
} else {
if((state_val_23777 === (9))){
var inst_23769 = (state_23776[(2)]);
var state_23776__$1 = (function (){var statearr_23784 = state_23776;
(statearr_23784[(9)] = inst_23769);

return statearr_23784;
})();
var statearr_23785_23891 = state_23776__$1;
(statearr_23785_23891[(2)] = null);

(statearr_23785_23891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (5))){
var inst_23760 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23776__$1 = state_23776;
var statearr_23786_23892 = state_23776__$1;
(statearr_23786_23892[(2)] = inst_23760);

(statearr_23786_23892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23777 === (8))){
var inst_23762 = (state_23776[(8)]);
var inst_23767 = (state_23776[(2)]);
var state_23776__$1 = (function (){var statearr_23787 = state_23776;
(statearr_23787[(10)] = inst_23767);

return statearr_23787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23776__$1,(9),results,inst_23762);
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
});})(c__23523__auto___23886,jobs,results,process,async))
;
return ((function (switch__23428__auto__,c__23523__auto___23886,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0 = (function (){
var statearr_23788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23788[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__);

(statearr_23788[(1)] = (1));

return statearr_23788;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1 = (function (state_23776){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_23776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e23789){if((e23789 instanceof Object)){
var ex__23432__auto__ = e23789;
var statearr_23790_23893 = state_23776;
(statearr_23790_23893[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23894 = state_23776;
state_23776 = G__23894;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__ = function(state_23776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1.call(this,state_23776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___23886,jobs,results,process,async))
})();
var state__23525__auto__ = (function (){var statearr_23791 = f__23524__auto__.call(null);
(statearr_23791[(6)] = c__23523__auto___23886);

return statearr_23791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___23886,jobs,results,process,async))
);


var c__23523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto__,jobs,results,process,async){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto__,jobs,results,process,async){
return (function (state_23829){
var state_val_23830 = (state_23829[(1)]);
if((state_val_23830 === (7))){
var inst_23825 = (state_23829[(2)]);
var state_23829__$1 = state_23829;
var statearr_23831_23895 = state_23829__$1;
(statearr_23831_23895[(2)] = inst_23825);

(statearr_23831_23895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (20))){
var state_23829__$1 = state_23829;
var statearr_23832_23896 = state_23829__$1;
(statearr_23832_23896[(2)] = null);

(statearr_23832_23896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (1))){
var state_23829__$1 = state_23829;
var statearr_23833_23897 = state_23829__$1;
(statearr_23833_23897[(2)] = null);

(statearr_23833_23897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (4))){
var inst_23794 = (state_23829[(7)]);
var inst_23794__$1 = (state_23829[(2)]);
var inst_23795 = (inst_23794__$1 == null);
var state_23829__$1 = (function (){var statearr_23834 = state_23829;
(statearr_23834[(7)] = inst_23794__$1);

return statearr_23834;
})();
if(cljs.core.truth_(inst_23795)){
var statearr_23835_23898 = state_23829__$1;
(statearr_23835_23898[(1)] = (5));

} else {
var statearr_23836_23899 = state_23829__$1;
(statearr_23836_23899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (15))){
var inst_23807 = (state_23829[(8)]);
var state_23829__$1 = state_23829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23829__$1,(18),to,inst_23807);
} else {
if((state_val_23830 === (21))){
var inst_23820 = (state_23829[(2)]);
var state_23829__$1 = state_23829;
var statearr_23837_23900 = state_23829__$1;
(statearr_23837_23900[(2)] = inst_23820);

(statearr_23837_23900[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (13))){
var inst_23822 = (state_23829[(2)]);
var state_23829__$1 = (function (){var statearr_23838 = state_23829;
(statearr_23838[(9)] = inst_23822);

return statearr_23838;
})();
var statearr_23839_23901 = state_23829__$1;
(statearr_23839_23901[(2)] = null);

(statearr_23839_23901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (6))){
var inst_23794 = (state_23829[(7)]);
var state_23829__$1 = state_23829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23829__$1,(11),inst_23794);
} else {
if((state_val_23830 === (17))){
var inst_23815 = (state_23829[(2)]);
var state_23829__$1 = state_23829;
if(cljs.core.truth_(inst_23815)){
var statearr_23840_23902 = state_23829__$1;
(statearr_23840_23902[(1)] = (19));

} else {
var statearr_23841_23903 = state_23829__$1;
(statearr_23841_23903[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (3))){
var inst_23827 = (state_23829[(2)]);
var state_23829__$1 = state_23829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23829__$1,inst_23827);
} else {
if((state_val_23830 === (12))){
var inst_23804 = (state_23829[(10)]);
var state_23829__$1 = state_23829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23829__$1,(14),inst_23804);
} else {
if((state_val_23830 === (2))){
var state_23829__$1 = state_23829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23829__$1,(4),results);
} else {
if((state_val_23830 === (19))){
var state_23829__$1 = state_23829;
var statearr_23842_23904 = state_23829__$1;
(statearr_23842_23904[(2)] = null);

(statearr_23842_23904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (11))){
var inst_23804 = (state_23829[(2)]);
var state_23829__$1 = (function (){var statearr_23843 = state_23829;
(statearr_23843[(10)] = inst_23804);

return statearr_23843;
})();
var statearr_23844_23905 = state_23829__$1;
(statearr_23844_23905[(2)] = null);

(statearr_23844_23905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (9))){
var state_23829__$1 = state_23829;
var statearr_23845_23906 = state_23829__$1;
(statearr_23845_23906[(2)] = null);

(statearr_23845_23906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (5))){
var state_23829__$1 = state_23829;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23846_23907 = state_23829__$1;
(statearr_23846_23907[(1)] = (8));

} else {
var statearr_23847_23908 = state_23829__$1;
(statearr_23847_23908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (14))){
var inst_23807 = (state_23829[(8)]);
var inst_23809 = (state_23829[(11)]);
var inst_23807__$1 = (state_23829[(2)]);
var inst_23808 = (inst_23807__$1 == null);
var inst_23809__$1 = cljs.core.not.call(null,inst_23808);
var state_23829__$1 = (function (){var statearr_23848 = state_23829;
(statearr_23848[(8)] = inst_23807__$1);

(statearr_23848[(11)] = inst_23809__$1);

return statearr_23848;
})();
if(inst_23809__$1){
var statearr_23849_23909 = state_23829__$1;
(statearr_23849_23909[(1)] = (15));

} else {
var statearr_23850_23910 = state_23829__$1;
(statearr_23850_23910[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (16))){
var inst_23809 = (state_23829[(11)]);
var state_23829__$1 = state_23829;
var statearr_23851_23911 = state_23829__$1;
(statearr_23851_23911[(2)] = inst_23809);

(statearr_23851_23911[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (10))){
var inst_23801 = (state_23829[(2)]);
var state_23829__$1 = state_23829;
var statearr_23852_23912 = state_23829__$1;
(statearr_23852_23912[(2)] = inst_23801);

(statearr_23852_23912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (18))){
var inst_23812 = (state_23829[(2)]);
var state_23829__$1 = state_23829;
var statearr_23853_23913 = state_23829__$1;
(statearr_23853_23913[(2)] = inst_23812);

(statearr_23853_23913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23830 === (8))){
var inst_23798 = cljs.core.async.close_BANG_.call(null,to);
var state_23829__$1 = state_23829;
var statearr_23854_23914 = state_23829__$1;
(statearr_23854_23914[(2)] = inst_23798);

(statearr_23854_23914[(1)] = (10));


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
});})(c__23523__auto__,jobs,results,process,async))
;
return ((function (switch__23428__auto__,c__23523__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0 = (function (){
var statearr_23855 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__);

(statearr_23855[(1)] = (1));

return statearr_23855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1 = (function (state_23829){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_23829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e23856){if((e23856 instanceof Object)){
var ex__23432__auto__ = e23856;
var statearr_23857_23915 = state_23829;
(statearr_23857_23915[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23916 = state_23829;
state_23829 = G__23916;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__ = function(state_23829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1.call(this,state_23829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto__,jobs,results,process,async))
})();
var state__23525__auto__ = (function (){var statearr_23858 = f__23524__auto__.call(null);
(statearr_23858[(6)] = c__23523__auto__);

return statearr_23858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto__,jobs,results,process,async))
);

return c__23523__auto__;
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
var G__23918 = arguments.length;
switch (G__23918) {
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
var G__23921 = arguments.length;
switch (G__23921) {
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
var G__23924 = arguments.length;
switch (G__23924) {
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
var c__23523__auto___23973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___23973,tc,fc){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___23973,tc,fc){
return (function (state_23950){
var state_val_23951 = (state_23950[(1)]);
if((state_val_23951 === (7))){
var inst_23946 = (state_23950[(2)]);
var state_23950__$1 = state_23950;
var statearr_23952_23974 = state_23950__$1;
(statearr_23952_23974[(2)] = inst_23946);

(statearr_23952_23974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (1))){
var state_23950__$1 = state_23950;
var statearr_23953_23975 = state_23950__$1;
(statearr_23953_23975[(2)] = null);

(statearr_23953_23975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (4))){
var inst_23927 = (state_23950[(7)]);
var inst_23927__$1 = (state_23950[(2)]);
var inst_23928 = (inst_23927__$1 == null);
var state_23950__$1 = (function (){var statearr_23954 = state_23950;
(statearr_23954[(7)] = inst_23927__$1);

return statearr_23954;
})();
if(cljs.core.truth_(inst_23928)){
var statearr_23955_23976 = state_23950__$1;
(statearr_23955_23976[(1)] = (5));

} else {
var statearr_23956_23977 = state_23950__$1;
(statearr_23956_23977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (13))){
var state_23950__$1 = state_23950;
var statearr_23957_23978 = state_23950__$1;
(statearr_23957_23978[(2)] = null);

(statearr_23957_23978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (6))){
var inst_23927 = (state_23950[(7)]);
var inst_23933 = p.call(null,inst_23927);
var state_23950__$1 = state_23950;
if(cljs.core.truth_(inst_23933)){
var statearr_23958_23979 = state_23950__$1;
(statearr_23958_23979[(1)] = (9));

} else {
var statearr_23959_23980 = state_23950__$1;
(statearr_23959_23980[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (3))){
var inst_23948 = (state_23950[(2)]);
var state_23950__$1 = state_23950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23950__$1,inst_23948);
} else {
if((state_val_23951 === (12))){
var state_23950__$1 = state_23950;
var statearr_23960_23981 = state_23950__$1;
(statearr_23960_23981[(2)] = null);

(statearr_23960_23981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (2))){
var state_23950__$1 = state_23950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23950__$1,(4),ch);
} else {
if((state_val_23951 === (11))){
var inst_23927 = (state_23950[(7)]);
var inst_23937 = (state_23950[(2)]);
var state_23950__$1 = state_23950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23950__$1,(8),inst_23937,inst_23927);
} else {
if((state_val_23951 === (9))){
var state_23950__$1 = state_23950;
var statearr_23961_23982 = state_23950__$1;
(statearr_23961_23982[(2)] = tc);

(statearr_23961_23982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (5))){
var inst_23930 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23931 = cljs.core.async.close_BANG_.call(null,fc);
var state_23950__$1 = (function (){var statearr_23962 = state_23950;
(statearr_23962[(8)] = inst_23930);

return statearr_23962;
})();
var statearr_23963_23983 = state_23950__$1;
(statearr_23963_23983[(2)] = inst_23931);

(statearr_23963_23983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (14))){
var inst_23944 = (state_23950[(2)]);
var state_23950__$1 = state_23950;
var statearr_23964_23984 = state_23950__$1;
(statearr_23964_23984[(2)] = inst_23944);

(statearr_23964_23984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (10))){
var state_23950__$1 = state_23950;
var statearr_23965_23985 = state_23950__$1;
(statearr_23965_23985[(2)] = fc);

(statearr_23965_23985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (8))){
var inst_23939 = (state_23950[(2)]);
var state_23950__$1 = state_23950;
if(cljs.core.truth_(inst_23939)){
var statearr_23966_23986 = state_23950__$1;
(statearr_23966_23986[(1)] = (12));

} else {
var statearr_23967_23987 = state_23950__$1;
(statearr_23967_23987[(1)] = (13));

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
});})(c__23523__auto___23973,tc,fc))
;
return ((function (switch__23428__auto__,c__23523__auto___23973,tc,fc){
return (function() {
var cljs$core$async$state_machine__23429__auto__ = null;
var cljs$core$async$state_machine__23429__auto____0 = (function (){
var statearr_23968 = [null,null,null,null,null,null,null,null,null];
(statearr_23968[(0)] = cljs$core$async$state_machine__23429__auto__);

(statearr_23968[(1)] = (1));

return statearr_23968;
});
var cljs$core$async$state_machine__23429__auto____1 = (function (state_23950){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_23950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e23969){if((e23969 instanceof Object)){
var ex__23432__auto__ = e23969;
var statearr_23970_23988 = state_23950;
(statearr_23970_23988[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23989 = state_23950;
state_23950 = G__23989;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$state_machine__23429__auto__ = function(state_23950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23429__auto____1.call(this,state_23950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23429__auto____0;
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23429__auto____1;
return cljs$core$async$state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___23973,tc,fc))
})();
var state__23525__auto__ = (function (){var statearr_23971 = f__23524__auto__.call(null);
(statearr_23971[(6)] = c__23523__auto___23973);

return statearr_23971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___23973,tc,fc))
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
var c__23523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto__){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto__){
return (function (state_24010){
var state_val_24011 = (state_24010[(1)]);
if((state_val_24011 === (7))){
var inst_24006 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24012_24030 = state_24010__$1;
(statearr_24012_24030[(2)] = inst_24006);

(statearr_24012_24030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (1))){
var inst_23990 = init;
var state_24010__$1 = (function (){var statearr_24013 = state_24010;
(statearr_24013[(7)] = inst_23990);

return statearr_24013;
})();
var statearr_24014_24031 = state_24010__$1;
(statearr_24014_24031[(2)] = null);

(statearr_24014_24031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (4))){
var inst_23993 = (state_24010[(8)]);
var inst_23993__$1 = (state_24010[(2)]);
var inst_23994 = (inst_23993__$1 == null);
var state_24010__$1 = (function (){var statearr_24015 = state_24010;
(statearr_24015[(8)] = inst_23993__$1);

return statearr_24015;
})();
if(cljs.core.truth_(inst_23994)){
var statearr_24016_24032 = state_24010__$1;
(statearr_24016_24032[(1)] = (5));

} else {
var statearr_24017_24033 = state_24010__$1;
(statearr_24017_24033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (6))){
var inst_23997 = (state_24010[(9)]);
var inst_23990 = (state_24010[(7)]);
var inst_23993 = (state_24010[(8)]);
var inst_23997__$1 = f.call(null,inst_23990,inst_23993);
var inst_23998 = cljs.core.reduced_QMARK_.call(null,inst_23997__$1);
var state_24010__$1 = (function (){var statearr_24018 = state_24010;
(statearr_24018[(9)] = inst_23997__$1);

return statearr_24018;
})();
if(inst_23998){
var statearr_24019_24034 = state_24010__$1;
(statearr_24019_24034[(1)] = (8));

} else {
var statearr_24020_24035 = state_24010__$1;
(statearr_24020_24035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (3))){
var inst_24008 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24010__$1,inst_24008);
} else {
if((state_val_24011 === (2))){
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24010__$1,(4),ch);
} else {
if((state_val_24011 === (9))){
var inst_23997 = (state_24010[(9)]);
var inst_23990 = inst_23997;
var state_24010__$1 = (function (){var statearr_24021 = state_24010;
(statearr_24021[(7)] = inst_23990);

return statearr_24021;
})();
var statearr_24022_24036 = state_24010__$1;
(statearr_24022_24036[(2)] = null);

(statearr_24022_24036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (5))){
var inst_23990 = (state_24010[(7)]);
var state_24010__$1 = state_24010;
var statearr_24023_24037 = state_24010__$1;
(statearr_24023_24037[(2)] = inst_23990);

(statearr_24023_24037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (10))){
var inst_24004 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24024_24038 = state_24010__$1;
(statearr_24024_24038[(2)] = inst_24004);

(statearr_24024_24038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (8))){
var inst_23997 = (state_24010[(9)]);
var inst_24000 = cljs.core.deref.call(null,inst_23997);
var state_24010__$1 = state_24010;
var statearr_24025_24039 = state_24010__$1;
(statearr_24025_24039[(2)] = inst_24000);

(statearr_24025_24039[(1)] = (10));


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
});})(c__23523__auto__))
;
return ((function (switch__23428__auto__,c__23523__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23429__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23429__auto____0 = (function (){
var statearr_24026 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24026[(0)] = cljs$core$async$reduce_$_state_machine__23429__auto__);

(statearr_24026[(1)] = (1));

return statearr_24026;
});
var cljs$core$async$reduce_$_state_machine__23429__auto____1 = (function (state_24010){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_24010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e24027){if((e24027 instanceof Object)){
var ex__23432__auto__ = e24027;
var statearr_24028_24040 = state_24010;
(statearr_24028_24040[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24041 = state_24010;
state_24010 = G__24041;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23429__auto__ = function(state_24010){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23429__auto____1.call(this,state_24010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23429__auto____0;
cljs$core$async$reduce_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23429__auto____1;
return cljs$core$async$reduce_$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto__))
})();
var state__23525__auto__ = (function (){var statearr_24029 = f__23524__auto__.call(null);
(statearr_24029[(6)] = c__23523__auto__);

return statearr_24029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto__))
);

return c__23523__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto__,f__$1){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto__,f__$1){
return (function (state_24047){
var state_val_24048 = (state_24047[(1)]);
if((state_val_24048 === (1))){
var inst_24042 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24047__$1 = state_24047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24047__$1,(2),inst_24042);
} else {
if((state_val_24048 === (2))){
var inst_24044 = (state_24047[(2)]);
var inst_24045 = f__$1.call(null,inst_24044);
var state_24047__$1 = state_24047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24047__$1,inst_24045);
} else {
return null;
}
}
});})(c__23523__auto__,f__$1))
;
return ((function (switch__23428__auto__,c__23523__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23429__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23429__auto____0 = (function (){
var statearr_24049 = [null,null,null,null,null,null,null];
(statearr_24049[(0)] = cljs$core$async$transduce_$_state_machine__23429__auto__);

(statearr_24049[(1)] = (1));

return statearr_24049;
});
var cljs$core$async$transduce_$_state_machine__23429__auto____1 = (function (state_24047){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_24047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e24050){if((e24050 instanceof Object)){
var ex__23432__auto__ = e24050;
var statearr_24051_24053 = state_24047;
(statearr_24051_24053[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24054 = state_24047;
state_24047 = G__24054;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23429__auto__ = function(state_24047){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23429__auto____1.call(this,state_24047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23429__auto____0;
cljs$core$async$transduce_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23429__auto____1;
return cljs$core$async$transduce_$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto__,f__$1))
})();
var state__23525__auto__ = (function (){var statearr_24052 = f__23524__auto__.call(null);
(statearr_24052[(6)] = c__23523__auto__);

return statearr_24052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto__,f__$1))
);

return c__23523__auto__;
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
var G__24056 = arguments.length;
switch (G__24056) {
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
var c__23523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto__){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto__){
return (function (state_24081){
var state_val_24082 = (state_24081[(1)]);
if((state_val_24082 === (7))){
var inst_24063 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
var statearr_24083_24104 = state_24081__$1;
(statearr_24083_24104[(2)] = inst_24063);

(statearr_24083_24104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (1))){
var inst_24057 = cljs.core.seq.call(null,coll);
var inst_24058 = inst_24057;
var state_24081__$1 = (function (){var statearr_24084 = state_24081;
(statearr_24084[(7)] = inst_24058);

return statearr_24084;
})();
var statearr_24085_24105 = state_24081__$1;
(statearr_24085_24105[(2)] = null);

(statearr_24085_24105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (4))){
var inst_24058 = (state_24081[(7)]);
var inst_24061 = cljs.core.first.call(null,inst_24058);
var state_24081__$1 = state_24081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24081__$1,(7),ch,inst_24061);
} else {
if((state_val_24082 === (13))){
var inst_24075 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
var statearr_24086_24106 = state_24081__$1;
(statearr_24086_24106[(2)] = inst_24075);

(statearr_24086_24106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (6))){
var inst_24066 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
if(cljs.core.truth_(inst_24066)){
var statearr_24087_24107 = state_24081__$1;
(statearr_24087_24107[(1)] = (8));

} else {
var statearr_24088_24108 = state_24081__$1;
(statearr_24088_24108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (3))){
var inst_24079 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24081__$1,inst_24079);
} else {
if((state_val_24082 === (12))){
var state_24081__$1 = state_24081;
var statearr_24089_24109 = state_24081__$1;
(statearr_24089_24109[(2)] = null);

(statearr_24089_24109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (2))){
var inst_24058 = (state_24081[(7)]);
var state_24081__$1 = state_24081;
if(cljs.core.truth_(inst_24058)){
var statearr_24090_24110 = state_24081__$1;
(statearr_24090_24110[(1)] = (4));

} else {
var statearr_24091_24111 = state_24081__$1;
(statearr_24091_24111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (11))){
var inst_24072 = cljs.core.async.close_BANG_.call(null,ch);
var state_24081__$1 = state_24081;
var statearr_24092_24112 = state_24081__$1;
(statearr_24092_24112[(2)] = inst_24072);

(statearr_24092_24112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (9))){
var state_24081__$1 = state_24081;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24093_24113 = state_24081__$1;
(statearr_24093_24113[(1)] = (11));

} else {
var statearr_24094_24114 = state_24081__$1;
(statearr_24094_24114[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (5))){
var inst_24058 = (state_24081[(7)]);
var state_24081__$1 = state_24081;
var statearr_24095_24115 = state_24081__$1;
(statearr_24095_24115[(2)] = inst_24058);

(statearr_24095_24115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (10))){
var inst_24077 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
var statearr_24096_24116 = state_24081__$1;
(statearr_24096_24116[(2)] = inst_24077);

(statearr_24096_24116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (8))){
var inst_24058 = (state_24081[(7)]);
var inst_24068 = cljs.core.next.call(null,inst_24058);
var inst_24058__$1 = inst_24068;
var state_24081__$1 = (function (){var statearr_24097 = state_24081;
(statearr_24097[(7)] = inst_24058__$1);

return statearr_24097;
})();
var statearr_24098_24117 = state_24081__$1;
(statearr_24098_24117[(2)] = null);

(statearr_24098_24117[(1)] = (2));


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
});})(c__23523__auto__))
;
return ((function (switch__23428__auto__,c__23523__auto__){
return (function() {
var cljs$core$async$state_machine__23429__auto__ = null;
var cljs$core$async$state_machine__23429__auto____0 = (function (){
var statearr_24099 = [null,null,null,null,null,null,null,null];
(statearr_24099[(0)] = cljs$core$async$state_machine__23429__auto__);

(statearr_24099[(1)] = (1));

return statearr_24099;
});
var cljs$core$async$state_machine__23429__auto____1 = (function (state_24081){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_24081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e24100){if((e24100 instanceof Object)){
var ex__23432__auto__ = e24100;
var statearr_24101_24118 = state_24081;
(statearr_24101_24118[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24119 = state_24081;
state_24081 = G__24119;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$state_machine__23429__auto__ = function(state_24081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23429__auto____1.call(this,state_24081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23429__auto____0;
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23429__auto____1;
return cljs$core$async$state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto__))
})();
var state__23525__auto__ = (function (){var statearr_24102 = f__23524__auto__.call(null);
(statearr_24102[(6)] = c__23523__auto__);

return statearr_24102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto__))
);

return c__23523__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24120 = (function (ch,cs,meta24121){
this.ch = ch;
this.cs = cs;
this.meta24121 = meta24121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24122,meta24121__$1){
var self__ = this;
var _24122__$1 = this;
return (new cljs.core.async.t_cljs$core$async24120(self__.ch,self__.cs,meta24121__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24122){
var self__ = this;
var _24122__$1 = this;
return self__.meta24121;
});})(cs))
;

cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24120.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24121","meta24121",1870832536,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24120";

cljs.core.async.t_cljs$core$async24120.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24120");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24120.
 */
cljs.core.async.__GT_t_cljs$core$async24120 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24120(ch__$1,cs__$1,meta24121){
return (new cljs.core.async.t_cljs$core$async24120(ch__$1,cs__$1,meta24121));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24120(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23523__auto___24342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___24342,cs,m,dchan,dctr,done){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___24342,cs,m,dchan,dctr,done){
return (function (state_24257){
var state_val_24258 = (state_24257[(1)]);
if((state_val_24258 === (7))){
var inst_24253 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24259_24343 = state_24257__$1;
(statearr_24259_24343[(2)] = inst_24253);

(statearr_24259_24343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (20))){
var inst_24156 = (state_24257[(7)]);
var inst_24168 = cljs.core.first.call(null,inst_24156);
var inst_24169 = cljs.core.nth.call(null,inst_24168,(0),null);
var inst_24170 = cljs.core.nth.call(null,inst_24168,(1),null);
var state_24257__$1 = (function (){var statearr_24260 = state_24257;
(statearr_24260[(8)] = inst_24169);

return statearr_24260;
})();
if(cljs.core.truth_(inst_24170)){
var statearr_24261_24344 = state_24257__$1;
(statearr_24261_24344[(1)] = (22));

} else {
var statearr_24262_24345 = state_24257__$1;
(statearr_24262_24345[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (27))){
var inst_24200 = (state_24257[(9)]);
var inst_24198 = (state_24257[(10)]);
var inst_24205 = (state_24257[(11)]);
var inst_24125 = (state_24257[(12)]);
var inst_24205__$1 = cljs.core._nth.call(null,inst_24198,inst_24200);
var inst_24206 = cljs.core.async.put_BANG_.call(null,inst_24205__$1,inst_24125,done);
var state_24257__$1 = (function (){var statearr_24263 = state_24257;
(statearr_24263[(11)] = inst_24205__$1);

return statearr_24263;
})();
if(cljs.core.truth_(inst_24206)){
var statearr_24264_24346 = state_24257__$1;
(statearr_24264_24346[(1)] = (30));

} else {
var statearr_24265_24347 = state_24257__$1;
(statearr_24265_24347[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (1))){
var state_24257__$1 = state_24257;
var statearr_24266_24348 = state_24257__$1;
(statearr_24266_24348[(2)] = null);

(statearr_24266_24348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (24))){
var inst_24156 = (state_24257[(7)]);
var inst_24175 = (state_24257[(2)]);
var inst_24176 = cljs.core.next.call(null,inst_24156);
var inst_24134 = inst_24176;
var inst_24135 = null;
var inst_24136 = (0);
var inst_24137 = (0);
var state_24257__$1 = (function (){var statearr_24267 = state_24257;
(statearr_24267[(13)] = inst_24137);

(statearr_24267[(14)] = inst_24175);

(statearr_24267[(15)] = inst_24135);

(statearr_24267[(16)] = inst_24136);

(statearr_24267[(17)] = inst_24134);

return statearr_24267;
})();
var statearr_24268_24349 = state_24257__$1;
(statearr_24268_24349[(2)] = null);

(statearr_24268_24349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (39))){
var state_24257__$1 = state_24257;
var statearr_24272_24350 = state_24257__$1;
(statearr_24272_24350[(2)] = null);

(statearr_24272_24350[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (4))){
var inst_24125 = (state_24257[(12)]);
var inst_24125__$1 = (state_24257[(2)]);
var inst_24126 = (inst_24125__$1 == null);
var state_24257__$1 = (function (){var statearr_24273 = state_24257;
(statearr_24273[(12)] = inst_24125__$1);

return statearr_24273;
})();
if(cljs.core.truth_(inst_24126)){
var statearr_24274_24351 = state_24257__$1;
(statearr_24274_24351[(1)] = (5));

} else {
var statearr_24275_24352 = state_24257__$1;
(statearr_24275_24352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (15))){
var inst_24137 = (state_24257[(13)]);
var inst_24135 = (state_24257[(15)]);
var inst_24136 = (state_24257[(16)]);
var inst_24134 = (state_24257[(17)]);
var inst_24152 = (state_24257[(2)]);
var inst_24153 = (inst_24137 + (1));
var tmp24269 = inst_24135;
var tmp24270 = inst_24136;
var tmp24271 = inst_24134;
var inst_24134__$1 = tmp24271;
var inst_24135__$1 = tmp24269;
var inst_24136__$1 = tmp24270;
var inst_24137__$1 = inst_24153;
var state_24257__$1 = (function (){var statearr_24276 = state_24257;
(statearr_24276[(13)] = inst_24137__$1);

(statearr_24276[(18)] = inst_24152);

(statearr_24276[(15)] = inst_24135__$1);

(statearr_24276[(16)] = inst_24136__$1);

(statearr_24276[(17)] = inst_24134__$1);

return statearr_24276;
})();
var statearr_24277_24353 = state_24257__$1;
(statearr_24277_24353[(2)] = null);

(statearr_24277_24353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (21))){
var inst_24179 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24281_24354 = state_24257__$1;
(statearr_24281_24354[(2)] = inst_24179);

(statearr_24281_24354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (31))){
var inst_24205 = (state_24257[(11)]);
var inst_24209 = done.call(null,null);
var inst_24210 = cljs.core.async.untap_STAR_.call(null,m,inst_24205);
var state_24257__$1 = (function (){var statearr_24282 = state_24257;
(statearr_24282[(19)] = inst_24209);

return statearr_24282;
})();
var statearr_24283_24355 = state_24257__$1;
(statearr_24283_24355[(2)] = inst_24210);

(statearr_24283_24355[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (32))){
var inst_24200 = (state_24257[(9)]);
var inst_24199 = (state_24257[(20)]);
var inst_24198 = (state_24257[(10)]);
var inst_24197 = (state_24257[(21)]);
var inst_24212 = (state_24257[(2)]);
var inst_24213 = (inst_24200 + (1));
var tmp24278 = inst_24199;
var tmp24279 = inst_24198;
var tmp24280 = inst_24197;
var inst_24197__$1 = tmp24280;
var inst_24198__$1 = tmp24279;
var inst_24199__$1 = tmp24278;
var inst_24200__$1 = inst_24213;
var state_24257__$1 = (function (){var statearr_24284 = state_24257;
(statearr_24284[(22)] = inst_24212);

(statearr_24284[(9)] = inst_24200__$1);

(statearr_24284[(20)] = inst_24199__$1);

(statearr_24284[(10)] = inst_24198__$1);

(statearr_24284[(21)] = inst_24197__$1);

return statearr_24284;
})();
var statearr_24285_24356 = state_24257__$1;
(statearr_24285_24356[(2)] = null);

(statearr_24285_24356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (40))){
var inst_24225 = (state_24257[(23)]);
var inst_24229 = done.call(null,null);
var inst_24230 = cljs.core.async.untap_STAR_.call(null,m,inst_24225);
var state_24257__$1 = (function (){var statearr_24286 = state_24257;
(statearr_24286[(24)] = inst_24229);

return statearr_24286;
})();
var statearr_24287_24357 = state_24257__$1;
(statearr_24287_24357[(2)] = inst_24230);

(statearr_24287_24357[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (33))){
var inst_24216 = (state_24257[(25)]);
var inst_24218 = cljs.core.chunked_seq_QMARK_.call(null,inst_24216);
var state_24257__$1 = state_24257;
if(inst_24218){
var statearr_24288_24358 = state_24257__$1;
(statearr_24288_24358[(1)] = (36));

} else {
var statearr_24289_24359 = state_24257__$1;
(statearr_24289_24359[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (13))){
var inst_24146 = (state_24257[(26)]);
var inst_24149 = cljs.core.async.close_BANG_.call(null,inst_24146);
var state_24257__$1 = state_24257;
var statearr_24290_24360 = state_24257__$1;
(statearr_24290_24360[(2)] = inst_24149);

(statearr_24290_24360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (22))){
var inst_24169 = (state_24257[(8)]);
var inst_24172 = cljs.core.async.close_BANG_.call(null,inst_24169);
var state_24257__$1 = state_24257;
var statearr_24291_24361 = state_24257__$1;
(statearr_24291_24361[(2)] = inst_24172);

(statearr_24291_24361[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (36))){
var inst_24216 = (state_24257[(25)]);
var inst_24220 = cljs.core.chunk_first.call(null,inst_24216);
var inst_24221 = cljs.core.chunk_rest.call(null,inst_24216);
var inst_24222 = cljs.core.count.call(null,inst_24220);
var inst_24197 = inst_24221;
var inst_24198 = inst_24220;
var inst_24199 = inst_24222;
var inst_24200 = (0);
var state_24257__$1 = (function (){var statearr_24292 = state_24257;
(statearr_24292[(9)] = inst_24200);

(statearr_24292[(20)] = inst_24199);

(statearr_24292[(10)] = inst_24198);

(statearr_24292[(21)] = inst_24197);

return statearr_24292;
})();
var statearr_24293_24362 = state_24257__$1;
(statearr_24293_24362[(2)] = null);

(statearr_24293_24362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (41))){
var inst_24216 = (state_24257[(25)]);
var inst_24232 = (state_24257[(2)]);
var inst_24233 = cljs.core.next.call(null,inst_24216);
var inst_24197 = inst_24233;
var inst_24198 = null;
var inst_24199 = (0);
var inst_24200 = (0);
var state_24257__$1 = (function (){var statearr_24294 = state_24257;
(statearr_24294[(27)] = inst_24232);

(statearr_24294[(9)] = inst_24200);

(statearr_24294[(20)] = inst_24199);

(statearr_24294[(10)] = inst_24198);

(statearr_24294[(21)] = inst_24197);

return statearr_24294;
})();
var statearr_24295_24363 = state_24257__$1;
(statearr_24295_24363[(2)] = null);

(statearr_24295_24363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (43))){
var state_24257__$1 = state_24257;
var statearr_24296_24364 = state_24257__$1;
(statearr_24296_24364[(2)] = null);

(statearr_24296_24364[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (29))){
var inst_24241 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24297_24365 = state_24257__$1;
(statearr_24297_24365[(2)] = inst_24241);

(statearr_24297_24365[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (44))){
var inst_24250 = (state_24257[(2)]);
var state_24257__$1 = (function (){var statearr_24298 = state_24257;
(statearr_24298[(28)] = inst_24250);

return statearr_24298;
})();
var statearr_24299_24366 = state_24257__$1;
(statearr_24299_24366[(2)] = null);

(statearr_24299_24366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (6))){
var inst_24189 = (state_24257[(29)]);
var inst_24188 = cljs.core.deref.call(null,cs);
var inst_24189__$1 = cljs.core.keys.call(null,inst_24188);
var inst_24190 = cljs.core.count.call(null,inst_24189__$1);
var inst_24191 = cljs.core.reset_BANG_.call(null,dctr,inst_24190);
var inst_24196 = cljs.core.seq.call(null,inst_24189__$1);
var inst_24197 = inst_24196;
var inst_24198 = null;
var inst_24199 = (0);
var inst_24200 = (0);
var state_24257__$1 = (function (){var statearr_24300 = state_24257;
(statearr_24300[(9)] = inst_24200);

(statearr_24300[(29)] = inst_24189__$1);

(statearr_24300[(20)] = inst_24199);

(statearr_24300[(10)] = inst_24198);

(statearr_24300[(21)] = inst_24197);

(statearr_24300[(30)] = inst_24191);

return statearr_24300;
})();
var statearr_24301_24367 = state_24257__$1;
(statearr_24301_24367[(2)] = null);

(statearr_24301_24367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (28))){
var inst_24216 = (state_24257[(25)]);
var inst_24197 = (state_24257[(21)]);
var inst_24216__$1 = cljs.core.seq.call(null,inst_24197);
var state_24257__$1 = (function (){var statearr_24302 = state_24257;
(statearr_24302[(25)] = inst_24216__$1);

return statearr_24302;
})();
if(inst_24216__$1){
var statearr_24303_24368 = state_24257__$1;
(statearr_24303_24368[(1)] = (33));

} else {
var statearr_24304_24369 = state_24257__$1;
(statearr_24304_24369[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (25))){
var inst_24200 = (state_24257[(9)]);
var inst_24199 = (state_24257[(20)]);
var inst_24202 = (inst_24200 < inst_24199);
var inst_24203 = inst_24202;
var state_24257__$1 = state_24257;
if(cljs.core.truth_(inst_24203)){
var statearr_24305_24370 = state_24257__$1;
(statearr_24305_24370[(1)] = (27));

} else {
var statearr_24306_24371 = state_24257__$1;
(statearr_24306_24371[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (34))){
var state_24257__$1 = state_24257;
var statearr_24307_24372 = state_24257__$1;
(statearr_24307_24372[(2)] = null);

(statearr_24307_24372[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (17))){
var state_24257__$1 = state_24257;
var statearr_24308_24373 = state_24257__$1;
(statearr_24308_24373[(2)] = null);

(statearr_24308_24373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (3))){
var inst_24255 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24257__$1,inst_24255);
} else {
if((state_val_24258 === (12))){
var inst_24184 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24309_24374 = state_24257__$1;
(statearr_24309_24374[(2)] = inst_24184);

(statearr_24309_24374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (2))){
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24257__$1,(4),ch);
} else {
if((state_val_24258 === (23))){
var state_24257__$1 = state_24257;
var statearr_24310_24375 = state_24257__$1;
(statearr_24310_24375[(2)] = null);

(statearr_24310_24375[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (35))){
var inst_24239 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24311_24376 = state_24257__$1;
(statearr_24311_24376[(2)] = inst_24239);

(statearr_24311_24376[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (19))){
var inst_24156 = (state_24257[(7)]);
var inst_24160 = cljs.core.chunk_first.call(null,inst_24156);
var inst_24161 = cljs.core.chunk_rest.call(null,inst_24156);
var inst_24162 = cljs.core.count.call(null,inst_24160);
var inst_24134 = inst_24161;
var inst_24135 = inst_24160;
var inst_24136 = inst_24162;
var inst_24137 = (0);
var state_24257__$1 = (function (){var statearr_24312 = state_24257;
(statearr_24312[(13)] = inst_24137);

(statearr_24312[(15)] = inst_24135);

(statearr_24312[(16)] = inst_24136);

(statearr_24312[(17)] = inst_24134);

return statearr_24312;
})();
var statearr_24313_24377 = state_24257__$1;
(statearr_24313_24377[(2)] = null);

(statearr_24313_24377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (11))){
var inst_24156 = (state_24257[(7)]);
var inst_24134 = (state_24257[(17)]);
var inst_24156__$1 = cljs.core.seq.call(null,inst_24134);
var state_24257__$1 = (function (){var statearr_24314 = state_24257;
(statearr_24314[(7)] = inst_24156__$1);

return statearr_24314;
})();
if(inst_24156__$1){
var statearr_24315_24378 = state_24257__$1;
(statearr_24315_24378[(1)] = (16));

} else {
var statearr_24316_24379 = state_24257__$1;
(statearr_24316_24379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (9))){
var inst_24186 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24317_24380 = state_24257__$1;
(statearr_24317_24380[(2)] = inst_24186);

(statearr_24317_24380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (5))){
var inst_24132 = cljs.core.deref.call(null,cs);
var inst_24133 = cljs.core.seq.call(null,inst_24132);
var inst_24134 = inst_24133;
var inst_24135 = null;
var inst_24136 = (0);
var inst_24137 = (0);
var state_24257__$1 = (function (){var statearr_24318 = state_24257;
(statearr_24318[(13)] = inst_24137);

(statearr_24318[(15)] = inst_24135);

(statearr_24318[(16)] = inst_24136);

(statearr_24318[(17)] = inst_24134);

return statearr_24318;
})();
var statearr_24319_24381 = state_24257__$1;
(statearr_24319_24381[(2)] = null);

(statearr_24319_24381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (14))){
var state_24257__$1 = state_24257;
var statearr_24320_24382 = state_24257__$1;
(statearr_24320_24382[(2)] = null);

(statearr_24320_24382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (45))){
var inst_24247 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24321_24383 = state_24257__$1;
(statearr_24321_24383[(2)] = inst_24247);

(statearr_24321_24383[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (26))){
var inst_24189 = (state_24257[(29)]);
var inst_24243 = (state_24257[(2)]);
var inst_24244 = cljs.core.seq.call(null,inst_24189);
var state_24257__$1 = (function (){var statearr_24322 = state_24257;
(statearr_24322[(31)] = inst_24243);

return statearr_24322;
})();
if(inst_24244){
var statearr_24323_24384 = state_24257__$1;
(statearr_24323_24384[(1)] = (42));

} else {
var statearr_24324_24385 = state_24257__$1;
(statearr_24324_24385[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (16))){
var inst_24156 = (state_24257[(7)]);
var inst_24158 = cljs.core.chunked_seq_QMARK_.call(null,inst_24156);
var state_24257__$1 = state_24257;
if(inst_24158){
var statearr_24325_24386 = state_24257__$1;
(statearr_24325_24386[(1)] = (19));

} else {
var statearr_24326_24387 = state_24257__$1;
(statearr_24326_24387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (38))){
var inst_24236 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24327_24388 = state_24257__$1;
(statearr_24327_24388[(2)] = inst_24236);

(statearr_24327_24388[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (30))){
var state_24257__$1 = state_24257;
var statearr_24328_24389 = state_24257__$1;
(statearr_24328_24389[(2)] = null);

(statearr_24328_24389[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (10))){
var inst_24137 = (state_24257[(13)]);
var inst_24135 = (state_24257[(15)]);
var inst_24145 = cljs.core._nth.call(null,inst_24135,inst_24137);
var inst_24146 = cljs.core.nth.call(null,inst_24145,(0),null);
var inst_24147 = cljs.core.nth.call(null,inst_24145,(1),null);
var state_24257__$1 = (function (){var statearr_24329 = state_24257;
(statearr_24329[(26)] = inst_24146);

return statearr_24329;
})();
if(cljs.core.truth_(inst_24147)){
var statearr_24330_24390 = state_24257__$1;
(statearr_24330_24390[(1)] = (13));

} else {
var statearr_24331_24391 = state_24257__$1;
(statearr_24331_24391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (18))){
var inst_24182 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24332_24392 = state_24257__$1;
(statearr_24332_24392[(2)] = inst_24182);

(statearr_24332_24392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (42))){
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24257__$1,(45),dchan);
} else {
if((state_val_24258 === (37))){
var inst_24216 = (state_24257[(25)]);
var inst_24225 = (state_24257[(23)]);
var inst_24125 = (state_24257[(12)]);
var inst_24225__$1 = cljs.core.first.call(null,inst_24216);
var inst_24226 = cljs.core.async.put_BANG_.call(null,inst_24225__$1,inst_24125,done);
var state_24257__$1 = (function (){var statearr_24333 = state_24257;
(statearr_24333[(23)] = inst_24225__$1);

return statearr_24333;
})();
if(cljs.core.truth_(inst_24226)){
var statearr_24334_24393 = state_24257__$1;
(statearr_24334_24393[(1)] = (39));

} else {
var statearr_24335_24394 = state_24257__$1;
(statearr_24335_24394[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (8))){
var inst_24137 = (state_24257[(13)]);
var inst_24136 = (state_24257[(16)]);
var inst_24139 = (inst_24137 < inst_24136);
var inst_24140 = inst_24139;
var state_24257__$1 = state_24257;
if(cljs.core.truth_(inst_24140)){
var statearr_24336_24395 = state_24257__$1;
(statearr_24336_24395[(1)] = (10));

} else {
var statearr_24337_24396 = state_24257__$1;
(statearr_24337_24396[(1)] = (11));

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
});})(c__23523__auto___24342,cs,m,dchan,dctr,done))
;
return ((function (switch__23428__auto__,c__23523__auto___24342,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23429__auto__ = null;
var cljs$core$async$mult_$_state_machine__23429__auto____0 = (function (){
var statearr_24338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24338[(0)] = cljs$core$async$mult_$_state_machine__23429__auto__);

(statearr_24338[(1)] = (1));

return statearr_24338;
});
var cljs$core$async$mult_$_state_machine__23429__auto____1 = (function (state_24257){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_24257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e24339){if((e24339 instanceof Object)){
var ex__23432__auto__ = e24339;
var statearr_24340_24397 = state_24257;
(statearr_24340_24397[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24398 = state_24257;
state_24257 = G__24398;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23429__auto__ = function(state_24257){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23429__auto____1.call(this,state_24257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23429__auto____0;
cljs$core$async$mult_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23429__auto____1;
return cljs$core$async$mult_$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___24342,cs,m,dchan,dctr,done))
})();
var state__23525__auto__ = (function (){var statearr_24341 = f__23524__auto__.call(null);
(statearr_24341[(6)] = c__23523__auto___24342);

return statearr_24341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___24342,cs,m,dchan,dctr,done))
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
var G__24400 = arguments.length;
switch (G__24400) {
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
var len__4730__auto___24412 = arguments.length;
var i__4731__auto___24413 = (0);
while(true){
if((i__4731__auto___24413 < len__4730__auto___24412)){
args__4736__auto__.push((arguments[i__4731__auto___24413]));

var G__24414 = (i__4731__auto___24413 + (1));
i__4731__auto___24413 = G__24414;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24406){
var map__24407 = p__24406;
var map__24407__$1 = (((((!((map__24407 == null))))?(((((map__24407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24407):map__24407);
var opts = map__24407__$1;
var statearr_24409_24415 = state;
(statearr_24409_24415[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__24407,map__24407__$1,opts){
return (function (val){
var statearr_24410_24416 = state;
(statearr_24410_24416[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24407,map__24407__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_24411_24417 = state;
(statearr_24411_24417[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24402){
var G__24403 = cljs.core.first.call(null,seq24402);
var seq24402__$1 = cljs.core.next.call(null,seq24402);
var G__24404 = cljs.core.first.call(null,seq24402__$1);
var seq24402__$2 = cljs.core.next.call(null,seq24402__$1);
var G__24405 = cljs.core.first.call(null,seq24402__$2);
var seq24402__$3 = cljs.core.next.call(null,seq24402__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24403,G__24404,G__24405,seq24402__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24418 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24419){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24419 = meta24419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24420,meta24419__$1){
var self__ = this;
var _24420__$1 = this;
return (new cljs.core.async.t_cljs$core$async24418(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24419__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24420){
var self__ = this;
var _24420__$1 = this;
return self__.meta24419;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24418.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24419","meta24419",-1670688955,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24418";

cljs.core.async.t_cljs$core$async24418.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24418");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24418.
 */
cljs.core.async.__GT_t_cljs$core$async24418 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24418(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24419){
return (new cljs.core.async.t_cljs$core$async24418(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24419));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24418(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23523__auto___24582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___24582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___24582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24522){
var state_val_24523 = (state_24522[(1)]);
if((state_val_24523 === (7))){
var inst_24437 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
var statearr_24524_24583 = state_24522__$1;
(statearr_24524_24583[(2)] = inst_24437);

(statearr_24524_24583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (20))){
var inst_24449 = (state_24522[(7)]);
var state_24522__$1 = state_24522;
var statearr_24525_24584 = state_24522__$1;
(statearr_24525_24584[(2)] = inst_24449);

(statearr_24525_24584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (27))){
var state_24522__$1 = state_24522;
var statearr_24526_24585 = state_24522__$1;
(statearr_24526_24585[(2)] = null);

(statearr_24526_24585[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (1))){
var inst_24424 = (state_24522[(8)]);
var inst_24424__$1 = calc_state.call(null);
var inst_24426 = (inst_24424__$1 == null);
var inst_24427 = cljs.core.not.call(null,inst_24426);
var state_24522__$1 = (function (){var statearr_24527 = state_24522;
(statearr_24527[(8)] = inst_24424__$1);

return statearr_24527;
})();
if(inst_24427){
var statearr_24528_24586 = state_24522__$1;
(statearr_24528_24586[(1)] = (2));

} else {
var statearr_24529_24587 = state_24522__$1;
(statearr_24529_24587[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (24))){
var inst_24496 = (state_24522[(9)]);
var inst_24482 = (state_24522[(10)]);
var inst_24473 = (state_24522[(11)]);
var inst_24496__$1 = inst_24473.call(null,inst_24482);
var state_24522__$1 = (function (){var statearr_24530 = state_24522;
(statearr_24530[(9)] = inst_24496__$1);

return statearr_24530;
})();
if(cljs.core.truth_(inst_24496__$1)){
var statearr_24531_24588 = state_24522__$1;
(statearr_24531_24588[(1)] = (29));

} else {
var statearr_24532_24589 = state_24522__$1;
(statearr_24532_24589[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (4))){
var inst_24440 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
if(cljs.core.truth_(inst_24440)){
var statearr_24533_24590 = state_24522__$1;
(statearr_24533_24590[(1)] = (8));

} else {
var statearr_24534_24591 = state_24522__$1;
(statearr_24534_24591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (15))){
var inst_24467 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
if(cljs.core.truth_(inst_24467)){
var statearr_24535_24592 = state_24522__$1;
(statearr_24535_24592[(1)] = (19));

} else {
var statearr_24536_24593 = state_24522__$1;
(statearr_24536_24593[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (21))){
var inst_24472 = (state_24522[(12)]);
var inst_24472__$1 = (state_24522[(2)]);
var inst_24473 = cljs.core.get.call(null,inst_24472__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24474 = cljs.core.get.call(null,inst_24472__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24475 = cljs.core.get.call(null,inst_24472__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24522__$1 = (function (){var statearr_24537 = state_24522;
(statearr_24537[(12)] = inst_24472__$1);

(statearr_24537[(13)] = inst_24474);

(statearr_24537[(11)] = inst_24473);

return statearr_24537;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24522__$1,(22),inst_24475);
} else {
if((state_val_24523 === (31))){
var inst_24504 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
if(cljs.core.truth_(inst_24504)){
var statearr_24538_24594 = state_24522__$1;
(statearr_24538_24594[(1)] = (32));

} else {
var statearr_24539_24595 = state_24522__$1;
(statearr_24539_24595[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (32))){
var inst_24481 = (state_24522[(14)]);
var state_24522__$1 = state_24522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24522__$1,(35),out,inst_24481);
} else {
if((state_val_24523 === (33))){
var inst_24472 = (state_24522[(12)]);
var inst_24449 = inst_24472;
var state_24522__$1 = (function (){var statearr_24540 = state_24522;
(statearr_24540[(7)] = inst_24449);

return statearr_24540;
})();
var statearr_24541_24596 = state_24522__$1;
(statearr_24541_24596[(2)] = null);

(statearr_24541_24596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (13))){
var inst_24449 = (state_24522[(7)]);
var inst_24456 = inst_24449.cljs$lang$protocol_mask$partition0$;
var inst_24457 = (inst_24456 & (64));
var inst_24458 = inst_24449.cljs$core$ISeq$;
var inst_24459 = (cljs.core.PROTOCOL_SENTINEL === inst_24458);
var inst_24460 = ((inst_24457) || (inst_24459));
var state_24522__$1 = state_24522;
if(cljs.core.truth_(inst_24460)){
var statearr_24542_24597 = state_24522__$1;
(statearr_24542_24597[(1)] = (16));

} else {
var statearr_24543_24598 = state_24522__$1;
(statearr_24543_24598[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (22))){
var inst_24481 = (state_24522[(14)]);
var inst_24482 = (state_24522[(10)]);
var inst_24480 = (state_24522[(2)]);
var inst_24481__$1 = cljs.core.nth.call(null,inst_24480,(0),null);
var inst_24482__$1 = cljs.core.nth.call(null,inst_24480,(1),null);
var inst_24483 = (inst_24481__$1 == null);
var inst_24484 = cljs.core._EQ_.call(null,inst_24482__$1,change);
var inst_24485 = ((inst_24483) || (inst_24484));
var state_24522__$1 = (function (){var statearr_24544 = state_24522;
(statearr_24544[(14)] = inst_24481__$1);

(statearr_24544[(10)] = inst_24482__$1);

return statearr_24544;
})();
if(cljs.core.truth_(inst_24485)){
var statearr_24545_24599 = state_24522__$1;
(statearr_24545_24599[(1)] = (23));

} else {
var statearr_24546_24600 = state_24522__$1;
(statearr_24546_24600[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (36))){
var inst_24472 = (state_24522[(12)]);
var inst_24449 = inst_24472;
var state_24522__$1 = (function (){var statearr_24547 = state_24522;
(statearr_24547[(7)] = inst_24449);

return statearr_24547;
})();
var statearr_24548_24601 = state_24522__$1;
(statearr_24548_24601[(2)] = null);

(statearr_24548_24601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (29))){
var inst_24496 = (state_24522[(9)]);
var state_24522__$1 = state_24522;
var statearr_24549_24602 = state_24522__$1;
(statearr_24549_24602[(2)] = inst_24496);

(statearr_24549_24602[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (6))){
var state_24522__$1 = state_24522;
var statearr_24550_24603 = state_24522__$1;
(statearr_24550_24603[(2)] = false);

(statearr_24550_24603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (28))){
var inst_24492 = (state_24522[(2)]);
var inst_24493 = calc_state.call(null);
var inst_24449 = inst_24493;
var state_24522__$1 = (function (){var statearr_24551 = state_24522;
(statearr_24551[(15)] = inst_24492);

(statearr_24551[(7)] = inst_24449);

return statearr_24551;
})();
var statearr_24552_24604 = state_24522__$1;
(statearr_24552_24604[(2)] = null);

(statearr_24552_24604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (25))){
var inst_24518 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
var statearr_24553_24605 = state_24522__$1;
(statearr_24553_24605[(2)] = inst_24518);

(statearr_24553_24605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (34))){
var inst_24516 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
var statearr_24554_24606 = state_24522__$1;
(statearr_24554_24606[(2)] = inst_24516);

(statearr_24554_24606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (17))){
var state_24522__$1 = state_24522;
var statearr_24555_24607 = state_24522__$1;
(statearr_24555_24607[(2)] = false);

(statearr_24555_24607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (3))){
var state_24522__$1 = state_24522;
var statearr_24556_24608 = state_24522__$1;
(statearr_24556_24608[(2)] = false);

(statearr_24556_24608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (12))){
var inst_24520 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24522__$1,inst_24520);
} else {
if((state_val_24523 === (2))){
var inst_24424 = (state_24522[(8)]);
var inst_24429 = inst_24424.cljs$lang$protocol_mask$partition0$;
var inst_24430 = (inst_24429 & (64));
var inst_24431 = inst_24424.cljs$core$ISeq$;
var inst_24432 = (cljs.core.PROTOCOL_SENTINEL === inst_24431);
var inst_24433 = ((inst_24430) || (inst_24432));
var state_24522__$1 = state_24522;
if(cljs.core.truth_(inst_24433)){
var statearr_24557_24609 = state_24522__$1;
(statearr_24557_24609[(1)] = (5));

} else {
var statearr_24558_24610 = state_24522__$1;
(statearr_24558_24610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (23))){
var inst_24481 = (state_24522[(14)]);
var inst_24487 = (inst_24481 == null);
var state_24522__$1 = state_24522;
if(cljs.core.truth_(inst_24487)){
var statearr_24559_24611 = state_24522__$1;
(statearr_24559_24611[(1)] = (26));

} else {
var statearr_24560_24612 = state_24522__$1;
(statearr_24560_24612[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (35))){
var inst_24507 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
if(cljs.core.truth_(inst_24507)){
var statearr_24561_24613 = state_24522__$1;
(statearr_24561_24613[(1)] = (36));

} else {
var statearr_24562_24614 = state_24522__$1;
(statearr_24562_24614[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (19))){
var inst_24449 = (state_24522[(7)]);
var inst_24469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24449);
var state_24522__$1 = state_24522;
var statearr_24563_24615 = state_24522__$1;
(statearr_24563_24615[(2)] = inst_24469);

(statearr_24563_24615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (11))){
var inst_24449 = (state_24522[(7)]);
var inst_24453 = (inst_24449 == null);
var inst_24454 = cljs.core.not.call(null,inst_24453);
var state_24522__$1 = state_24522;
if(inst_24454){
var statearr_24564_24616 = state_24522__$1;
(statearr_24564_24616[(1)] = (13));

} else {
var statearr_24565_24617 = state_24522__$1;
(statearr_24565_24617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (9))){
var inst_24424 = (state_24522[(8)]);
var state_24522__$1 = state_24522;
var statearr_24566_24618 = state_24522__$1;
(statearr_24566_24618[(2)] = inst_24424);

(statearr_24566_24618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (5))){
var state_24522__$1 = state_24522;
var statearr_24567_24619 = state_24522__$1;
(statearr_24567_24619[(2)] = true);

(statearr_24567_24619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (14))){
var state_24522__$1 = state_24522;
var statearr_24568_24620 = state_24522__$1;
(statearr_24568_24620[(2)] = false);

(statearr_24568_24620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (26))){
var inst_24482 = (state_24522[(10)]);
var inst_24489 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24482);
var state_24522__$1 = state_24522;
var statearr_24569_24621 = state_24522__$1;
(statearr_24569_24621[(2)] = inst_24489);

(statearr_24569_24621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (16))){
var state_24522__$1 = state_24522;
var statearr_24570_24622 = state_24522__$1;
(statearr_24570_24622[(2)] = true);

(statearr_24570_24622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (38))){
var inst_24512 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
var statearr_24571_24623 = state_24522__$1;
(statearr_24571_24623[(2)] = inst_24512);

(statearr_24571_24623[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (30))){
var inst_24474 = (state_24522[(13)]);
var inst_24482 = (state_24522[(10)]);
var inst_24473 = (state_24522[(11)]);
var inst_24499 = cljs.core.empty_QMARK_.call(null,inst_24473);
var inst_24500 = inst_24474.call(null,inst_24482);
var inst_24501 = cljs.core.not.call(null,inst_24500);
var inst_24502 = ((inst_24499) && (inst_24501));
var state_24522__$1 = state_24522;
var statearr_24572_24624 = state_24522__$1;
(statearr_24572_24624[(2)] = inst_24502);

(statearr_24572_24624[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (10))){
var inst_24424 = (state_24522[(8)]);
var inst_24445 = (state_24522[(2)]);
var inst_24446 = cljs.core.get.call(null,inst_24445,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24447 = cljs.core.get.call(null,inst_24445,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24448 = cljs.core.get.call(null,inst_24445,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24449 = inst_24424;
var state_24522__$1 = (function (){var statearr_24573 = state_24522;
(statearr_24573[(7)] = inst_24449);

(statearr_24573[(16)] = inst_24448);

(statearr_24573[(17)] = inst_24447);

(statearr_24573[(18)] = inst_24446);

return statearr_24573;
})();
var statearr_24574_24625 = state_24522__$1;
(statearr_24574_24625[(2)] = null);

(statearr_24574_24625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (18))){
var inst_24464 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
var statearr_24575_24626 = state_24522__$1;
(statearr_24575_24626[(2)] = inst_24464);

(statearr_24575_24626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (37))){
var state_24522__$1 = state_24522;
var statearr_24576_24627 = state_24522__$1;
(statearr_24576_24627[(2)] = null);

(statearr_24576_24627[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (8))){
var inst_24424 = (state_24522[(8)]);
var inst_24442 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24424);
var state_24522__$1 = state_24522;
var statearr_24577_24628 = state_24522__$1;
(statearr_24577_24628[(2)] = inst_24442);

(statearr_24577_24628[(1)] = (10));


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
});})(c__23523__auto___24582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23428__auto__,c__23523__auto___24582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23429__auto__ = null;
var cljs$core$async$mix_$_state_machine__23429__auto____0 = (function (){
var statearr_24578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24578[(0)] = cljs$core$async$mix_$_state_machine__23429__auto__);

(statearr_24578[(1)] = (1));

return statearr_24578;
});
var cljs$core$async$mix_$_state_machine__23429__auto____1 = (function (state_24522){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_24522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e24579){if((e24579 instanceof Object)){
var ex__23432__auto__ = e24579;
var statearr_24580_24629 = state_24522;
(statearr_24580_24629[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24630 = state_24522;
state_24522 = G__24630;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23429__auto__ = function(state_24522){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23429__auto____1.call(this,state_24522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23429__auto____0;
cljs$core$async$mix_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23429__auto____1;
return cljs$core$async$mix_$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___24582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23525__auto__ = (function (){var statearr_24581 = f__23524__auto__.call(null);
(statearr_24581[(6)] = c__23523__auto___24582);

return statearr_24581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___24582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__24632 = arguments.length;
switch (G__24632) {
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
var G__24636 = arguments.length;
switch (G__24636) {
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
return (function (p1__24634_SHARP_){
if(cljs.core.truth_(p1__24634_SHARP_.call(null,topic))){
return p1__24634_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24634_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24637 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24638){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24638 = meta24638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24639,meta24638__$1){
var self__ = this;
var _24639__$1 = this;
return (new cljs.core.async.t_cljs$core$async24637(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24638__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24639){
var self__ = this;
var _24639__$1 = this;
return self__.meta24638;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24638","meta24638",-1398596974,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24637";

cljs.core.async.t_cljs$core$async24637.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24637");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24637.
 */
cljs.core.async.__GT_t_cljs$core$async24637 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24637(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24638){
return (new cljs.core.async.t_cljs$core$async24637(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24638));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24637(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23523__auto___24757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___24757,mults,ensure_mult,p){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___24757,mults,ensure_mult,p){
return (function (state_24711){
var state_val_24712 = (state_24711[(1)]);
if((state_val_24712 === (7))){
var inst_24707 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24713_24758 = state_24711__$1;
(statearr_24713_24758[(2)] = inst_24707);

(statearr_24713_24758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (20))){
var state_24711__$1 = state_24711;
var statearr_24714_24759 = state_24711__$1;
(statearr_24714_24759[(2)] = null);

(statearr_24714_24759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (1))){
var state_24711__$1 = state_24711;
var statearr_24715_24760 = state_24711__$1;
(statearr_24715_24760[(2)] = null);

(statearr_24715_24760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (24))){
var inst_24690 = (state_24711[(7)]);
var inst_24699 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24690);
var state_24711__$1 = state_24711;
var statearr_24716_24761 = state_24711__$1;
(statearr_24716_24761[(2)] = inst_24699);

(statearr_24716_24761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (4))){
var inst_24642 = (state_24711[(8)]);
var inst_24642__$1 = (state_24711[(2)]);
var inst_24643 = (inst_24642__$1 == null);
var state_24711__$1 = (function (){var statearr_24717 = state_24711;
(statearr_24717[(8)] = inst_24642__$1);

return statearr_24717;
})();
if(cljs.core.truth_(inst_24643)){
var statearr_24718_24762 = state_24711__$1;
(statearr_24718_24762[(1)] = (5));

} else {
var statearr_24719_24763 = state_24711__$1;
(statearr_24719_24763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (15))){
var inst_24684 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24720_24764 = state_24711__$1;
(statearr_24720_24764[(2)] = inst_24684);

(statearr_24720_24764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (21))){
var inst_24704 = (state_24711[(2)]);
var state_24711__$1 = (function (){var statearr_24721 = state_24711;
(statearr_24721[(9)] = inst_24704);

return statearr_24721;
})();
var statearr_24722_24765 = state_24711__$1;
(statearr_24722_24765[(2)] = null);

(statearr_24722_24765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (13))){
var inst_24666 = (state_24711[(10)]);
var inst_24668 = cljs.core.chunked_seq_QMARK_.call(null,inst_24666);
var state_24711__$1 = state_24711;
if(inst_24668){
var statearr_24723_24766 = state_24711__$1;
(statearr_24723_24766[(1)] = (16));

} else {
var statearr_24724_24767 = state_24711__$1;
(statearr_24724_24767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (22))){
var inst_24696 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
if(cljs.core.truth_(inst_24696)){
var statearr_24725_24768 = state_24711__$1;
(statearr_24725_24768[(1)] = (23));

} else {
var statearr_24726_24769 = state_24711__$1;
(statearr_24726_24769[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (6))){
var inst_24690 = (state_24711[(7)]);
var inst_24692 = (state_24711[(11)]);
var inst_24642 = (state_24711[(8)]);
var inst_24690__$1 = topic_fn.call(null,inst_24642);
var inst_24691 = cljs.core.deref.call(null,mults);
var inst_24692__$1 = cljs.core.get.call(null,inst_24691,inst_24690__$1);
var state_24711__$1 = (function (){var statearr_24727 = state_24711;
(statearr_24727[(7)] = inst_24690__$1);

(statearr_24727[(11)] = inst_24692__$1);

return statearr_24727;
})();
if(cljs.core.truth_(inst_24692__$1)){
var statearr_24728_24770 = state_24711__$1;
(statearr_24728_24770[(1)] = (19));

} else {
var statearr_24729_24771 = state_24711__$1;
(statearr_24729_24771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (25))){
var inst_24701 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24730_24772 = state_24711__$1;
(statearr_24730_24772[(2)] = inst_24701);

(statearr_24730_24772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (17))){
var inst_24666 = (state_24711[(10)]);
var inst_24675 = cljs.core.first.call(null,inst_24666);
var inst_24676 = cljs.core.async.muxch_STAR_.call(null,inst_24675);
var inst_24677 = cljs.core.async.close_BANG_.call(null,inst_24676);
var inst_24678 = cljs.core.next.call(null,inst_24666);
var inst_24652 = inst_24678;
var inst_24653 = null;
var inst_24654 = (0);
var inst_24655 = (0);
var state_24711__$1 = (function (){var statearr_24731 = state_24711;
(statearr_24731[(12)] = inst_24654);

(statearr_24731[(13)] = inst_24653);

(statearr_24731[(14)] = inst_24677);

(statearr_24731[(15)] = inst_24655);

(statearr_24731[(16)] = inst_24652);

return statearr_24731;
})();
var statearr_24732_24773 = state_24711__$1;
(statearr_24732_24773[(2)] = null);

(statearr_24732_24773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (3))){
var inst_24709 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24711__$1,inst_24709);
} else {
if((state_val_24712 === (12))){
var inst_24686 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24733_24774 = state_24711__$1;
(statearr_24733_24774[(2)] = inst_24686);

(statearr_24733_24774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (2))){
var state_24711__$1 = state_24711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24711__$1,(4),ch);
} else {
if((state_val_24712 === (23))){
var state_24711__$1 = state_24711;
var statearr_24734_24775 = state_24711__$1;
(statearr_24734_24775[(2)] = null);

(statearr_24734_24775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (19))){
var inst_24692 = (state_24711[(11)]);
var inst_24642 = (state_24711[(8)]);
var inst_24694 = cljs.core.async.muxch_STAR_.call(null,inst_24692);
var state_24711__$1 = state_24711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24711__$1,(22),inst_24694,inst_24642);
} else {
if((state_val_24712 === (11))){
var inst_24652 = (state_24711[(16)]);
var inst_24666 = (state_24711[(10)]);
var inst_24666__$1 = cljs.core.seq.call(null,inst_24652);
var state_24711__$1 = (function (){var statearr_24735 = state_24711;
(statearr_24735[(10)] = inst_24666__$1);

return statearr_24735;
})();
if(inst_24666__$1){
var statearr_24736_24776 = state_24711__$1;
(statearr_24736_24776[(1)] = (13));

} else {
var statearr_24737_24777 = state_24711__$1;
(statearr_24737_24777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (9))){
var inst_24688 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24738_24778 = state_24711__$1;
(statearr_24738_24778[(2)] = inst_24688);

(statearr_24738_24778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (5))){
var inst_24649 = cljs.core.deref.call(null,mults);
var inst_24650 = cljs.core.vals.call(null,inst_24649);
var inst_24651 = cljs.core.seq.call(null,inst_24650);
var inst_24652 = inst_24651;
var inst_24653 = null;
var inst_24654 = (0);
var inst_24655 = (0);
var state_24711__$1 = (function (){var statearr_24739 = state_24711;
(statearr_24739[(12)] = inst_24654);

(statearr_24739[(13)] = inst_24653);

(statearr_24739[(15)] = inst_24655);

(statearr_24739[(16)] = inst_24652);

return statearr_24739;
})();
var statearr_24740_24779 = state_24711__$1;
(statearr_24740_24779[(2)] = null);

(statearr_24740_24779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (14))){
var state_24711__$1 = state_24711;
var statearr_24744_24780 = state_24711__$1;
(statearr_24744_24780[(2)] = null);

(statearr_24744_24780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (16))){
var inst_24666 = (state_24711[(10)]);
var inst_24670 = cljs.core.chunk_first.call(null,inst_24666);
var inst_24671 = cljs.core.chunk_rest.call(null,inst_24666);
var inst_24672 = cljs.core.count.call(null,inst_24670);
var inst_24652 = inst_24671;
var inst_24653 = inst_24670;
var inst_24654 = inst_24672;
var inst_24655 = (0);
var state_24711__$1 = (function (){var statearr_24745 = state_24711;
(statearr_24745[(12)] = inst_24654);

(statearr_24745[(13)] = inst_24653);

(statearr_24745[(15)] = inst_24655);

(statearr_24745[(16)] = inst_24652);

return statearr_24745;
})();
var statearr_24746_24781 = state_24711__$1;
(statearr_24746_24781[(2)] = null);

(statearr_24746_24781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (10))){
var inst_24654 = (state_24711[(12)]);
var inst_24653 = (state_24711[(13)]);
var inst_24655 = (state_24711[(15)]);
var inst_24652 = (state_24711[(16)]);
var inst_24660 = cljs.core._nth.call(null,inst_24653,inst_24655);
var inst_24661 = cljs.core.async.muxch_STAR_.call(null,inst_24660);
var inst_24662 = cljs.core.async.close_BANG_.call(null,inst_24661);
var inst_24663 = (inst_24655 + (1));
var tmp24741 = inst_24654;
var tmp24742 = inst_24653;
var tmp24743 = inst_24652;
var inst_24652__$1 = tmp24743;
var inst_24653__$1 = tmp24742;
var inst_24654__$1 = tmp24741;
var inst_24655__$1 = inst_24663;
var state_24711__$1 = (function (){var statearr_24747 = state_24711;
(statearr_24747[(12)] = inst_24654__$1);

(statearr_24747[(13)] = inst_24653__$1);

(statearr_24747[(15)] = inst_24655__$1);

(statearr_24747[(17)] = inst_24662);

(statearr_24747[(16)] = inst_24652__$1);

return statearr_24747;
})();
var statearr_24748_24782 = state_24711__$1;
(statearr_24748_24782[(2)] = null);

(statearr_24748_24782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (18))){
var inst_24681 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24749_24783 = state_24711__$1;
(statearr_24749_24783[(2)] = inst_24681);

(statearr_24749_24783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (8))){
var inst_24654 = (state_24711[(12)]);
var inst_24655 = (state_24711[(15)]);
var inst_24657 = (inst_24655 < inst_24654);
var inst_24658 = inst_24657;
var state_24711__$1 = state_24711;
if(cljs.core.truth_(inst_24658)){
var statearr_24750_24784 = state_24711__$1;
(statearr_24750_24784[(1)] = (10));

} else {
var statearr_24751_24785 = state_24711__$1;
(statearr_24751_24785[(1)] = (11));

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
});})(c__23523__auto___24757,mults,ensure_mult,p))
;
return ((function (switch__23428__auto__,c__23523__auto___24757,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23429__auto__ = null;
var cljs$core$async$state_machine__23429__auto____0 = (function (){
var statearr_24752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24752[(0)] = cljs$core$async$state_machine__23429__auto__);

(statearr_24752[(1)] = (1));

return statearr_24752;
});
var cljs$core$async$state_machine__23429__auto____1 = (function (state_24711){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_24711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e24753){if((e24753 instanceof Object)){
var ex__23432__auto__ = e24753;
var statearr_24754_24786 = state_24711;
(statearr_24754_24786[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24787 = state_24711;
state_24711 = G__24787;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$state_machine__23429__auto__ = function(state_24711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23429__auto____1.call(this,state_24711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23429__auto____0;
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23429__auto____1;
return cljs$core$async$state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___24757,mults,ensure_mult,p))
})();
var state__23525__auto__ = (function (){var statearr_24755 = f__23524__auto__.call(null);
(statearr_24755[(6)] = c__23523__auto___24757);

return statearr_24755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___24757,mults,ensure_mult,p))
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
var G__24789 = arguments.length;
switch (G__24789) {
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
var G__24792 = arguments.length;
switch (G__24792) {
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
var G__24795 = arguments.length;
switch (G__24795) {
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
var c__23523__auto___24862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___24862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___24862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24834){
var state_val_24835 = (state_24834[(1)]);
if((state_val_24835 === (7))){
var state_24834__$1 = state_24834;
var statearr_24836_24863 = state_24834__$1;
(statearr_24836_24863[(2)] = null);

(statearr_24836_24863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (1))){
var state_24834__$1 = state_24834;
var statearr_24837_24864 = state_24834__$1;
(statearr_24837_24864[(2)] = null);

(statearr_24837_24864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (4))){
var inst_24798 = (state_24834[(7)]);
var inst_24800 = (inst_24798 < cnt);
var state_24834__$1 = state_24834;
if(cljs.core.truth_(inst_24800)){
var statearr_24838_24865 = state_24834__$1;
(statearr_24838_24865[(1)] = (6));

} else {
var statearr_24839_24866 = state_24834__$1;
(statearr_24839_24866[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (15))){
var inst_24830 = (state_24834[(2)]);
var state_24834__$1 = state_24834;
var statearr_24840_24867 = state_24834__$1;
(statearr_24840_24867[(2)] = inst_24830);

(statearr_24840_24867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (13))){
var inst_24823 = cljs.core.async.close_BANG_.call(null,out);
var state_24834__$1 = state_24834;
var statearr_24841_24868 = state_24834__$1;
(statearr_24841_24868[(2)] = inst_24823);

(statearr_24841_24868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (6))){
var state_24834__$1 = state_24834;
var statearr_24842_24869 = state_24834__$1;
(statearr_24842_24869[(2)] = null);

(statearr_24842_24869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (3))){
var inst_24832 = (state_24834[(2)]);
var state_24834__$1 = state_24834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24834__$1,inst_24832);
} else {
if((state_val_24835 === (12))){
var inst_24820 = (state_24834[(8)]);
var inst_24820__$1 = (state_24834[(2)]);
var inst_24821 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24820__$1);
var state_24834__$1 = (function (){var statearr_24843 = state_24834;
(statearr_24843[(8)] = inst_24820__$1);

return statearr_24843;
})();
if(cljs.core.truth_(inst_24821)){
var statearr_24844_24870 = state_24834__$1;
(statearr_24844_24870[(1)] = (13));

} else {
var statearr_24845_24871 = state_24834__$1;
(statearr_24845_24871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (2))){
var inst_24797 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24798 = (0);
var state_24834__$1 = (function (){var statearr_24846 = state_24834;
(statearr_24846[(9)] = inst_24797);

(statearr_24846[(7)] = inst_24798);

return statearr_24846;
})();
var statearr_24847_24872 = state_24834__$1;
(statearr_24847_24872[(2)] = null);

(statearr_24847_24872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (11))){
var inst_24798 = (state_24834[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24834,(10),Object,null,(9));
var inst_24807 = chs__$1.call(null,inst_24798);
var inst_24808 = done.call(null,inst_24798);
var inst_24809 = cljs.core.async.take_BANG_.call(null,inst_24807,inst_24808);
var state_24834__$1 = state_24834;
var statearr_24848_24873 = state_24834__$1;
(statearr_24848_24873[(2)] = inst_24809);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24834__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (9))){
var inst_24798 = (state_24834[(7)]);
var inst_24811 = (state_24834[(2)]);
var inst_24812 = (inst_24798 + (1));
var inst_24798__$1 = inst_24812;
var state_24834__$1 = (function (){var statearr_24849 = state_24834;
(statearr_24849[(10)] = inst_24811);

(statearr_24849[(7)] = inst_24798__$1);

return statearr_24849;
})();
var statearr_24850_24874 = state_24834__$1;
(statearr_24850_24874[(2)] = null);

(statearr_24850_24874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (5))){
var inst_24818 = (state_24834[(2)]);
var state_24834__$1 = (function (){var statearr_24851 = state_24834;
(statearr_24851[(11)] = inst_24818);

return statearr_24851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24834__$1,(12),dchan);
} else {
if((state_val_24835 === (14))){
var inst_24820 = (state_24834[(8)]);
var inst_24825 = cljs.core.apply.call(null,f,inst_24820);
var state_24834__$1 = state_24834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24834__$1,(16),out,inst_24825);
} else {
if((state_val_24835 === (16))){
var inst_24827 = (state_24834[(2)]);
var state_24834__$1 = (function (){var statearr_24852 = state_24834;
(statearr_24852[(12)] = inst_24827);

return statearr_24852;
})();
var statearr_24853_24875 = state_24834__$1;
(statearr_24853_24875[(2)] = null);

(statearr_24853_24875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (10))){
var inst_24802 = (state_24834[(2)]);
var inst_24803 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24834__$1 = (function (){var statearr_24854 = state_24834;
(statearr_24854[(13)] = inst_24802);

return statearr_24854;
})();
var statearr_24855_24876 = state_24834__$1;
(statearr_24855_24876[(2)] = inst_24803);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24834__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (8))){
var inst_24816 = (state_24834[(2)]);
var state_24834__$1 = state_24834;
var statearr_24856_24877 = state_24834__$1;
(statearr_24856_24877[(2)] = inst_24816);

(statearr_24856_24877[(1)] = (5));


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
});})(c__23523__auto___24862,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23428__auto__,c__23523__auto___24862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23429__auto__ = null;
var cljs$core$async$state_machine__23429__auto____0 = (function (){
var statearr_24857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24857[(0)] = cljs$core$async$state_machine__23429__auto__);

(statearr_24857[(1)] = (1));

return statearr_24857;
});
var cljs$core$async$state_machine__23429__auto____1 = (function (state_24834){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_24834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e24858){if((e24858 instanceof Object)){
var ex__23432__auto__ = e24858;
var statearr_24859_24878 = state_24834;
(statearr_24859_24878[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24879 = state_24834;
state_24834 = G__24879;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$state_machine__23429__auto__ = function(state_24834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23429__auto____1.call(this,state_24834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23429__auto____0;
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23429__auto____1;
return cljs$core$async$state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___24862,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23525__auto__ = (function (){var statearr_24860 = f__23524__auto__.call(null);
(statearr_24860[(6)] = c__23523__auto___24862);

return statearr_24860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___24862,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24882 = arguments.length;
switch (G__24882) {
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
var c__23523__auto___24936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___24936,out){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___24936,out){
return (function (state_24914){
var state_val_24915 = (state_24914[(1)]);
if((state_val_24915 === (7))){
var inst_24894 = (state_24914[(7)]);
var inst_24893 = (state_24914[(8)]);
var inst_24893__$1 = (state_24914[(2)]);
var inst_24894__$1 = cljs.core.nth.call(null,inst_24893__$1,(0),null);
var inst_24895 = cljs.core.nth.call(null,inst_24893__$1,(1),null);
var inst_24896 = (inst_24894__$1 == null);
var state_24914__$1 = (function (){var statearr_24916 = state_24914;
(statearr_24916[(7)] = inst_24894__$1);

(statearr_24916[(8)] = inst_24893__$1);

(statearr_24916[(9)] = inst_24895);

return statearr_24916;
})();
if(cljs.core.truth_(inst_24896)){
var statearr_24917_24937 = state_24914__$1;
(statearr_24917_24937[(1)] = (8));

} else {
var statearr_24918_24938 = state_24914__$1;
(statearr_24918_24938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24915 === (1))){
var inst_24883 = cljs.core.vec.call(null,chs);
var inst_24884 = inst_24883;
var state_24914__$1 = (function (){var statearr_24919 = state_24914;
(statearr_24919[(10)] = inst_24884);

return statearr_24919;
})();
var statearr_24920_24939 = state_24914__$1;
(statearr_24920_24939[(2)] = null);

(statearr_24920_24939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24915 === (4))){
var inst_24884 = (state_24914[(10)]);
var state_24914__$1 = state_24914;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24914__$1,(7),inst_24884);
} else {
if((state_val_24915 === (6))){
var inst_24910 = (state_24914[(2)]);
var state_24914__$1 = state_24914;
var statearr_24921_24940 = state_24914__$1;
(statearr_24921_24940[(2)] = inst_24910);

(statearr_24921_24940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24915 === (3))){
var inst_24912 = (state_24914[(2)]);
var state_24914__$1 = state_24914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24914__$1,inst_24912);
} else {
if((state_val_24915 === (2))){
var inst_24884 = (state_24914[(10)]);
var inst_24886 = cljs.core.count.call(null,inst_24884);
var inst_24887 = (inst_24886 > (0));
var state_24914__$1 = state_24914;
if(cljs.core.truth_(inst_24887)){
var statearr_24923_24941 = state_24914__$1;
(statearr_24923_24941[(1)] = (4));

} else {
var statearr_24924_24942 = state_24914__$1;
(statearr_24924_24942[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24915 === (11))){
var inst_24884 = (state_24914[(10)]);
var inst_24903 = (state_24914[(2)]);
var tmp24922 = inst_24884;
var inst_24884__$1 = tmp24922;
var state_24914__$1 = (function (){var statearr_24925 = state_24914;
(statearr_24925[(11)] = inst_24903);

(statearr_24925[(10)] = inst_24884__$1);

return statearr_24925;
})();
var statearr_24926_24943 = state_24914__$1;
(statearr_24926_24943[(2)] = null);

(statearr_24926_24943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24915 === (9))){
var inst_24894 = (state_24914[(7)]);
var state_24914__$1 = state_24914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24914__$1,(11),out,inst_24894);
} else {
if((state_val_24915 === (5))){
var inst_24908 = cljs.core.async.close_BANG_.call(null,out);
var state_24914__$1 = state_24914;
var statearr_24927_24944 = state_24914__$1;
(statearr_24927_24944[(2)] = inst_24908);

(statearr_24927_24944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24915 === (10))){
var inst_24906 = (state_24914[(2)]);
var state_24914__$1 = state_24914;
var statearr_24928_24945 = state_24914__$1;
(statearr_24928_24945[(2)] = inst_24906);

(statearr_24928_24945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24915 === (8))){
var inst_24894 = (state_24914[(7)]);
var inst_24893 = (state_24914[(8)]);
var inst_24884 = (state_24914[(10)]);
var inst_24895 = (state_24914[(9)]);
var inst_24898 = (function (){var cs = inst_24884;
var vec__24889 = inst_24893;
var v = inst_24894;
var c = inst_24895;
return ((function (cs,vec__24889,v,c,inst_24894,inst_24893,inst_24884,inst_24895,state_val_24915,c__23523__auto___24936,out){
return (function (p1__24880_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24880_SHARP_);
});
;})(cs,vec__24889,v,c,inst_24894,inst_24893,inst_24884,inst_24895,state_val_24915,c__23523__auto___24936,out))
})();
var inst_24899 = cljs.core.filterv.call(null,inst_24898,inst_24884);
var inst_24884__$1 = inst_24899;
var state_24914__$1 = (function (){var statearr_24929 = state_24914;
(statearr_24929[(10)] = inst_24884__$1);

return statearr_24929;
})();
var statearr_24930_24946 = state_24914__$1;
(statearr_24930_24946[(2)] = null);

(statearr_24930_24946[(1)] = (2));


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
});})(c__23523__auto___24936,out))
;
return ((function (switch__23428__auto__,c__23523__auto___24936,out){
return (function() {
var cljs$core$async$state_machine__23429__auto__ = null;
var cljs$core$async$state_machine__23429__auto____0 = (function (){
var statearr_24931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24931[(0)] = cljs$core$async$state_machine__23429__auto__);

(statearr_24931[(1)] = (1));

return statearr_24931;
});
var cljs$core$async$state_machine__23429__auto____1 = (function (state_24914){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_24914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e24932){if((e24932 instanceof Object)){
var ex__23432__auto__ = e24932;
var statearr_24933_24947 = state_24914;
(statearr_24933_24947[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24948 = state_24914;
state_24914 = G__24948;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$state_machine__23429__auto__ = function(state_24914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23429__auto____1.call(this,state_24914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23429__auto____0;
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23429__auto____1;
return cljs$core$async$state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___24936,out))
})();
var state__23525__auto__ = (function (){var statearr_24934 = f__23524__auto__.call(null);
(statearr_24934[(6)] = c__23523__auto___24936);

return statearr_24934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___24936,out))
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
var G__24950 = arguments.length;
switch (G__24950) {
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
var c__23523__auto___24995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___24995,out){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___24995,out){
return (function (state_24974){
var state_val_24975 = (state_24974[(1)]);
if((state_val_24975 === (7))){
var inst_24956 = (state_24974[(7)]);
var inst_24956__$1 = (state_24974[(2)]);
var inst_24957 = (inst_24956__$1 == null);
var inst_24958 = cljs.core.not.call(null,inst_24957);
var state_24974__$1 = (function (){var statearr_24976 = state_24974;
(statearr_24976[(7)] = inst_24956__$1);

return statearr_24976;
})();
if(inst_24958){
var statearr_24977_24996 = state_24974__$1;
(statearr_24977_24996[(1)] = (8));

} else {
var statearr_24978_24997 = state_24974__$1;
(statearr_24978_24997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (1))){
var inst_24951 = (0);
var state_24974__$1 = (function (){var statearr_24979 = state_24974;
(statearr_24979[(8)] = inst_24951);

return statearr_24979;
})();
var statearr_24980_24998 = state_24974__$1;
(statearr_24980_24998[(2)] = null);

(statearr_24980_24998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (4))){
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24974__$1,(7),ch);
} else {
if((state_val_24975 === (6))){
var inst_24969 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_24981_24999 = state_24974__$1;
(statearr_24981_24999[(2)] = inst_24969);

(statearr_24981_24999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (3))){
var inst_24971 = (state_24974[(2)]);
var inst_24972 = cljs.core.async.close_BANG_.call(null,out);
var state_24974__$1 = (function (){var statearr_24982 = state_24974;
(statearr_24982[(9)] = inst_24971);

return statearr_24982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24974__$1,inst_24972);
} else {
if((state_val_24975 === (2))){
var inst_24951 = (state_24974[(8)]);
var inst_24953 = (inst_24951 < n);
var state_24974__$1 = state_24974;
if(cljs.core.truth_(inst_24953)){
var statearr_24983_25000 = state_24974__$1;
(statearr_24983_25000[(1)] = (4));

} else {
var statearr_24984_25001 = state_24974__$1;
(statearr_24984_25001[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (11))){
var inst_24951 = (state_24974[(8)]);
var inst_24961 = (state_24974[(2)]);
var inst_24962 = (inst_24951 + (1));
var inst_24951__$1 = inst_24962;
var state_24974__$1 = (function (){var statearr_24985 = state_24974;
(statearr_24985[(8)] = inst_24951__$1);

(statearr_24985[(10)] = inst_24961);

return statearr_24985;
})();
var statearr_24986_25002 = state_24974__$1;
(statearr_24986_25002[(2)] = null);

(statearr_24986_25002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (9))){
var state_24974__$1 = state_24974;
var statearr_24987_25003 = state_24974__$1;
(statearr_24987_25003[(2)] = null);

(statearr_24987_25003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (5))){
var state_24974__$1 = state_24974;
var statearr_24988_25004 = state_24974__$1;
(statearr_24988_25004[(2)] = null);

(statearr_24988_25004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (10))){
var inst_24966 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_24989_25005 = state_24974__$1;
(statearr_24989_25005[(2)] = inst_24966);

(statearr_24989_25005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (8))){
var inst_24956 = (state_24974[(7)]);
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24974__$1,(11),out,inst_24956);
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
});})(c__23523__auto___24995,out))
;
return ((function (switch__23428__auto__,c__23523__auto___24995,out){
return (function() {
var cljs$core$async$state_machine__23429__auto__ = null;
var cljs$core$async$state_machine__23429__auto____0 = (function (){
var statearr_24990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24990[(0)] = cljs$core$async$state_machine__23429__auto__);

(statearr_24990[(1)] = (1));

return statearr_24990;
});
var cljs$core$async$state_machine__23429__auto____1 = (function (state_24974){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_24974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e24991){if((e24991 instanceof Object)){
var ex__23432__auto__ = e24991;
var statearr_24992_25006 = state_24974;
(statearr_24992_25006[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25007 = state_24974;
state_24974 = G__25007;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$state_machine__23429__auto__ = function(state_24974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23429__auto____1.call(this,state_24974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23429__auto____0;
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23429__auto____1;
return cljs$core$async$state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___24995,out))
})();
var state__23525__auto__ = (function (){var statearr_24993 = f__23524__auto__.call(null);
(statearr_24993[(6)] = c__23523__auto___24995);

return statearr_24993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___24995,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25009 = (function (f,ch,meta25010){
this.f = f;
this.ch = ch;
this.meta25010 = meta25010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25011,meta25010__$1){
var self__ = this;
var _25011__$1 = this;
return (new cljs.core.async.t_cljs$core$async25009(self__.f,self__.ch,meta25010__$1));
});

cljs.core.async.t_cljs$core$async25009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25011){
var self__ = this;
var _25011__$1 = this;
return self__.meta25010;
});

cljs.core.async.t_cljs$core$async25009.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25009.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25009.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25012 = (function (f,ch,meta25010,_,fn1,meta25013){
this.f = f;
this.ch = ch;
this.meta25010 = meta25010;
this._ = _;
this.fn1 = fn1;
this.meta25013 = meta25013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25014,meta25013__$1){
var self__ = this;
var _25014__$1 = this;
return (new cljs.core.async.t_cljs$core$async25012(self__.f,self__.ch,self__.meta25010,self__._,self__.fn1,meta25013__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25014){
var self__ = this;
var _25014__$1 = this;
return self__.meta25013;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25012.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25012.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25008_SHARP_){
return f1.call(null,(((p1__25008_SHARP_ == null))?null:self__.f.call(null,p1__25008_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25012.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25010","meta25010",308121165,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25009","cljs.core.async/t_cljs$core$async25009",1317149691,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25013","meta25013",848969559,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25012";

cljs.core.async.t_cljs$core$async25012.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25012");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25012.
 */
cljs.core.async.__GT_t_cljs$core$async25012 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25012(f__$1,ch__$1,meta25010__$1,___$2,fn1__$1,meta25013){
return (new cljs.core.async.t_cljs$core$async25012(f__$1,ch__$1,meta25010__$1,___$2,fn1__$1,meta25013));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25012(self__.f,self__.ch,self__.meta25010,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25009.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25010","meta25010",308121165,null)], null);
});

cljs.core.async.t_cljs$core$async25009.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25009";

cljs.core.async.t_cljs$core$async25009.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25009");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25009.
 */
cljs.core.async.__GT_t_cljs$core$async25009 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25009(f__$1,ch__$1,meta25010){
return (new cljs.core.async.t_cljs$core$async25009(f__$1,ch__$1,meta25010));
});

}

return (new cljs.core.async.t_cljs$core$async25009(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25015 = (function (f,ch,meta25016){
this.f = f;
this.ch = ch;
this.meta25016 = meta25016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25017,meta25016__$1){
var self__ = this;
var _25017__$1 = this;
return (new cljs.core.async.t_cljs$core$async25015(self__.f,self__.ch,meta25016__$1));
});

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25017){
var self__ = this;
var _25017__$1 = this;
return self__.meta25016;
});

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25016","meta25016",-338817739,null)], null);
});

cljs.core.async.t_cljs$core$async25015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25015";

cljs.core.async.t_cljs$core$async25015.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25015");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25015.
 */
cljs.core.async.__GT_t_cljs$core$async25015 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25015(f__$1,ch__$1,meta25016){
return (new cljs.core.async.t_cljs$core$async25015(f__$1,ch__$1,meta25016));
});

}

return (new cljs.core.async.t_cljs$core$async25015(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25018 = (function (p,ch,meta25019){
this.p = p;
this.ch = ch;
this.meta25019 = meta25019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25020,meta25019__$1){
var self__ = this;
var _25020__$1 = this;
return (new cljs.core.async.t_cljs$core$async25018(self__.p,self__.ch,meta25019__$1));
});

cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25020){
var self__ = this;
var _25020__$1 = this;
return self__.meta25019;
});

cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25018.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25019","meta25019",299905360,null)], null);
});

cljs.core.async.t_cljs$core$async25018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25018";

cljs.core.async.t_cljs$core$async25018.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25018");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25018.
 */
cljs.core.async.__GT_t_cljs$core$async25018 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25018(p__$1,ch__$1,meta25019){
return (new cljs.core.async.t_cljs$core$async25018(p__$1,ch__$1,meta25019));
});

}

return (new cljs.core.async.t_cljs$core$async25018(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25022 = arguments.length;
switch (G__25022) {
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
var c__23523__auto___25062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___25062,out){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___25062,out){
return (function (state_25043){
var state_val_25044 = (state_25043[(1)]);
if((state_val_25044 === (7))){
var inst_25039 = (state_25043[(2)]);
var state_25043__$1 = state_25043;
var statearr_25045_25063 = state_25043__$1;
(statearr_25045_25063[(2)] = inst_25039);

(statearr_25045_25063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (1))){
var state_25043__$1 = state_25043;
var statearr_25046_25064 = state_25043__$1;
(statearr_25046_25064[(2)] = null);

(statearr_25046_25064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (4))){
var inst_25025 = (state_25043[(7)]);
var inst_25025__$1 = (state_25043[(2)]);
var inst_25026 = (inst_25025__$1 == null);
var state_25043__$1 = (function (){var statearr_25047 = state_25043;
(statearr_25047[(7)] = inst_25025__$1);

return statearr_25047;
})();
if(cljs.core.truth_(inst_25026)){
var statearr_25048_25065 = state_25043__$1;
(statearr_25048_25065[(1)] = (5));

} else {
var statearr_25049_25066 = state_25043__$1;
(statearr_25049_25066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (6))){
var inst_25025 = (state_25043[(7)]);
var inst_25030 = p.call(null,inst_25025);
var state_25043__$1 = state_25043;
if(cljs.core.truth_(inst_25030)){
var statearr_25050_25067 = state_25043__$1;
(statearr_25050_25067[(1)] = (8));

} else {
var statearr_25051_25068 = state_25043__$1;
(statearr_25051_25068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (3))){
var inst_25041 = (state_25043[(2)]);
var state_25043__$1 = state_25043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25043__$1,inst_25041);
} else {
if((state_val_25044 === (2))){
var state_25043__$1 = state_25043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25043__$1,(4),ch);
} else {
if((state_val_25044 === (11))){
var inst_25033 = (state_25043[(2)]);
var state_25043__$1 = state_25043;
var statearr_25052_25069 = state_25043__$1;
(statearr_25052_25069[(2)] = inst_25033);

(statearr_25052_25069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (9))){
var state_25043__$1 = state_25043;
var statearr_25053_25070 = state_25043__$1;
(statearr_25053_25070[(2)] = null);

(statearr_25053_25070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (5))){
var inst_25028 = cljs.core.async.close_BANG_.call(null,out);
var state_25043__$1 = state_25043;
var statearr_25054_25071 = state_25043__$1;
(statearr_25054_25071[(2)] = inst_25028);

(statearr_25054_25071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (10))){
var inst_25036 = (state_25043[(2)]);
var state_25043__$1 = (function (){var statearr_25055 = state_25043;
(statearr_25055[(8)] = inst_25036);

return statearr_25055;
})();
var statearr_25056_25072 = state_25043__$1;
(statearr_25056_25072[(2)] = null);

(statearr_25056_25072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25044 === (8))){
var inst_25025 = (state_25043[(7)]);
var state_25043__$1 = state_25043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25043__$1,(11),out,inst_25025);
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
});})(c__23523__auto___25062,out))
;
return ((function (switch__23428__auto__,c__23523__auto___25062,out){
return (function() {
var cljs$core$async$state_machine__23429__auto__ = null;
var cljs$core$async$state_machine__23429__auto____0 = (function (){
var statearr_25057 = [null,null,null,null,null,null,null,null,null];
(statearr_25057[(0)] = cljs$core$async$state_machine__23429__auto__);

(statearr_25057[(1)] = (1));

return statearr_25057;
});
var cljs$core$async$state_machine__23429__auto____1 = (function (state_25043){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_25043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e25058){if((e25058 instanceof Object)){
var ex__23432__auto__ = e25058;
var statearr_25059_25073 = state_25043;
(statearr_25059_25073[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25074 = state_25043;
state_25043 = G__25074;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$state_machine__23429__auto__ = function(state_25043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23429__auto____1.call(this,state_25043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23429__auto____0;
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23429__auto____1;
return cljs$core$async$state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___25062,out))
})();
var state__23525__auto__ = (function (){var statearr_25060 = f__23524__auto__.call(null);
(statearr_25060[(6)] = c__23523__auto___25062);

return statearr_25060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___25062,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25076 = arguments.length;
switch (G__25076) {
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
var c__23523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto__){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto__){
return (function (state_25139){
var state_val_25140 = (state_25139[(1)]);
if((state_val_25140 === (7))){
var inst_25135 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
var statearr_25141_25179 = state_25139__$1;
(statearr_25141_25179[(2)] = inst_25135);

(statearr_25141_25179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (20))){
var inst_25105 = (state_25139[(7)]);
var inst_25116 = (state_25139[(2)]);
var inst_25117 = cljs.core.next.call(null,inst_25105);
var inst_25091 = inst_25117;
var inst_25092 = null;
var inst_25093 = (0);
var inst_25094 = (0);
var state_25139__$1 = (function (){var statearr_25142 = state_25139;
(statearr_25142[(8)] = inst_25092);

(statearr_25142[(9)] = inst_25091);

(statearr_25142[(10)] = inst_25116);

(statearr_25142[(11)] = inst_25094);

(statearr_25142[(12)] = inst_25093);

return statearr_25142;
})();
var statearr_25143_25180 = state_25139__$1;
(statearr_25143_25180[(2)] = null);

(statearr_25143_25180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (1))){
var state_25139__$1 = state_25139;
var statearr_25144_25181 = state_25139__$1;
(statearr_25144_25181[(2)] = null);

(statearr_25144_25181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (4))){
var inst_25080 = (state_25139[(13)]);
var inst_25080__$1 = (state_25139[(2)]);
var inst_25081 = (inst_25080__$1 == null);
var state_25139__$1 = (function (){var statearr_25145 = state_25139;
(statearr_25145[(13)] = inst_25080__$1);

return statearr_25145;
})();
if(cljs.core.truth_(inst_25081)){
var statearr_25146_25182 = state_25139__$1;
(statearr_25146_25182[(1)] = (5));

} else {
var statearr_25147_25183 = state_25139__$1;
(statearr_25147_25183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (15))){
var state_25139__$1 = state_25139;
var statearr_25151_25184 = state_25139__$1;
(statearr_25151_25184[(2)] = null);

(statearr_25151_25184[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (21))){
var state_25139__$1 = state_25139;
var statearr_25152_25185 = state_25139__$1;
(statearr_25152_25185[(2)] = null);

(statearr_25152_25185[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (13))){
var inst_25092 = (state_25139[(8)]);
var inst_25091 = (state_25139[(9)]);
var inst_25094 = (state_25139[(11)]);
var inst_25093 = (state_25139[(12)]);
var inst_25101 = (state_25139[(2)]);
var inst_25102 = (inst_25094 + (1));
var tmp25148 = inst_25092;
var tmp25149 = inst_25091;
var tmp25150 = inst_25093;
var inst_25091__$1 = tmp25149;
var inst_25092__$1 = tmp25148;
var inst_25093__$1 = tmp25150;
var inst_25094__$1 = inst_25102;
var state_25139__$1 = (function (){var statearr_25153 = state_25139;
(statearr_25153[(8)] = inst_25092__$1);

(statearr_25153[(9)] = inst_25091__$1);

(statearr_25153[(14)] = inst_25101);

(statearr_25153[(11)] = inst_25094__$1);

(statearr_25153[(12)] = inst_25093__$1);

return statearr_25153;
})();
var statearr_25154_25186 = state_25139__$1;
(statearr_25154_25186[(2)] = null);

(statearr_25154_25186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (22))){
var state_25139__$1 = state_25139;
var statearr_25155_25187 = state_25139__$1;
(statearr_25155_25187[(2)] = null);

(statearr_25155_25187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (6))){
var inst_25080 = (state_25139[(13)]);
var inst_25089 = f.call(null,inst_25080);
var inst_25090 = cljs.core.seq.call(null,inst_25089);
var inst_25091 = inst_25090;
var inst_25092 = null;
var inst_25093 = (0);
var inst_25094 = (0);
var state_25139__$1 = (function (){var statearr_25156 = state_25139;
(statearr_25156[(8)] = inst_25092);

(statearr_25156[(9)] = inst_25091);

(statearr_25156[(11)] = inst_25094);

(statearr_25156[(12)] = inst_25093);

return statearr_25156;
})();
var statearr_25157_25188 = state_25139__$1;
(statearr_25157_25188[(2)] = null);

(statearr_25157_25188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (17))){
var inst_25105 = (state_25139[(7)]);
var inst_25109 = cljs.core.chunk_first.call(null,inst_25105);
var inst_25110 = cljs.core.chunk_rest.call(null,inst_25105);
var inst_25111 = cljs.core.count.call(null,inst_25109);
var inst_25091 = inst_25110;
var inst_25092 = inst_25109;
var inst_25093 = inst_25111;
var inst_25094 = (0);
var state_25139__$1 = (function (){var statearr_25158 = state_25139;
(statearr_25158[(8)] = inst_25092);

(statearr_25158[(9)] = inst_25091);

(statearr_25158[(11)] = inst_25094);

(statearr_25158[(12)] = inst_25093);

return statearr_25158;
})();
var statearr_25159_25189 = state_25139__$1;
(statearr_25159_25189[(2)] = null);

(statearr_25159_25189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (3))){
var inst_25137 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25139__$1,inst_25137);
} else {
if((state_val_25140 === (12))){
var inst_25125 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
var statearr_25160_25190 = state_25139__$1;
(statearr_25160_25190[(2)] = inst_25125);

(statearr_25160_25190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (2))){
var state_25139__$1 = state_25139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25139__$1,(4),in$);
} else {
if((state_val_25140 === (23))){
var inst_25133 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
var statearr_25161_25191 = state_25139__$1;
(statearr_25161_25191[(2)] = inst_25133);

(statearr_25161_25191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (19))){
var inst_25120 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
var statearr_25162_25192 = state_25139__$1;
(statearr_25162_25192[(2)] = inst_25120);

(statearr_25162_25192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (11))){
var inst_25091 = (state_25139[(9)]);
var inst_25105 = (state_25139[(7)]);
var inst_25105__$1 = cljs.core.seq.call(null,inst_25091);
var state_25139__$1 = (function (){var statearr_25163 = state_25139;
(statearr_25163[(7)] = inst_25105__$1);

return statearr_25163;
})();
if(inst_25105__$1){
var statearr_25164_25193 = state_25139__$1;
(statearr_25164_25193[(1)] = (14));

} else {
var statearr_25165_25194 = state_25139__$1;
(statearr_25165_25194[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (9))){
var inst_25127 = (state_25139[(2)]);
var inst_25128 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25139__$1 = (function (){var statearr_25166 = state_25139;
(statearr_25166[(15)] = inst_25127);

return statearr_25166;
})();
if(cljs.core.truth_(inst_25128)){
var statearr_25167_25195 = state_25139__$1;
(statearr_25167_25195[(1)] = (21));

} else {
var statearr_25168_25196 = state_25139__$1;
(statearr_25168_25196[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (5))){
var inst_25083 = cljs.core.async.close_BANG_.call(null,out);
var state_25139__$1 = state_25139;
var statearr_25169_25197 = state_25139__$1;
(statearr_25169_25197[(2)] = inst_25083);

(statearr_25169_25197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (14))){
var inst_25105 = (state_25139[(7)]);
var inst_25107 = cljs.core.chunked_seq_QMARK_.call(null,inst_25105);
var state_25139__$1 = state_25139;
if(inst_25107){
var statearr_25170_25198 = state_25139__$1;
(statearr_25170_25198[(1)] = (17));

} else {
var statearr_25171_25199 = state_25139__$1;
(statearr_25171_25199[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (16))){
var inst_25123 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
var statearr_25172_25200 = state_25139__$1;
(statearr_25172_25200[(2)] = inst_25123);

(statearr_25172_25200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (10))){
var inst_25092 = (state_25139[(8)]);
var inst_25094 = (state_25139[(11)]);
var inst_25099 = cljs.core._nth.call(null,inst_25092,inst_25094);
var state_25139__$1 = state_25139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25139__$1,(13),out,inst_25099);
} else {
if((state_val_25140 === (18))){
var inst_25105 = (state_25139[(7)]);
var inst_25114 = cljs.core.first.call(null,inst_25105);
var state_25139__$1 = state_25139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25139__$1,(20),out,inst_25114);
} else {
if((state_val_25140 === (8))){
var inst_25094 = (state_25139[(11)]);
var inst_25093 = (state_25139[(12)]);
var inst_25096 = (inst_25094 < inst_25093);
var inst_25097 = inst_25096;
var state_25139__$1 = state_25139;
if(cljs.core.truth_(inst_25097)){
var statearr_25173_25201 = state_25139__$1;
(statearr_25173_25201[(1)] = (10));

} else {
var statearr_25174_25202 = state_25139__$1;
(statearr_25174_25202[(1)] = (11));

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
});})(c__23523__auto__))
;
return ((function (switch__23428__auto__,c__23523__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23429__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23429__auto____0 = (function (){
var statearr_25175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25175[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23429__auto__);

(statearr_25175[(1)] = (1));

return statearr_25175;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23429__auto____1 = (function (state_25139){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_25139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e25176){if((e25176 instanceof Object)){
var ex__23432__auto__ = e25176;
var statearr_25177_25203 = state_25139;
(statearr_25177_25203[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25204 = state_25139;
state_25139 = G__25204;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23429__auto__ = function(state_25139){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23429__auto____1.call(this,state_25139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23429__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23429__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto__))
})();
var state__23525__auto__ = (function (){var statearr_25178 = f__23524__auto__.call(null);
(statearr_25178[(6)] = c__23523__auto__);

return statearr_25178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto__))
);

return c__23523__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25206 = arguments.length;
switch (G__25206) {
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
var G__25209 = arguments.length;
switch (G__25209) {
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
var G__25212 = arguments.length;
switch (G__25212) {
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
var c__23523__auto___25259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___25259,out){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___25259,out){
return (function (state_25236){
var state_val_25237 = (state_25236[(1)]);
if((state_val_25237 === (7))){
var inst_25231 = (state_25236[(2)]);
var state_25236__$1 = state_25236;
var statearr_25238_25260 = state_25236__$1;
(statearr_25238_25260[(2)] = inst_25231);

(statearr_25238_25260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (1))){
var inst_25213 = null;
var state_25236__$1 = (function (){var statearr_25239 = state_25236;
(statearr_25239[(7)] = inst_25213);

return statearr_25239;
})();
var statearr_25240_25261 = state_25236__$1;
(statearr_25240_25261[(2)] = null);

(statearr_25240_25261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (4))){
var inst_25216 = (state_25236[(8)]);
var inst_25216__$1 = (state_25236[(2)]);
var inst_25217 = (inst_25216__$1 == null);
var inst_25218 = cljs.core.not.call(null,inst_25217);
var state_25236__$1 = (function (){var statearr_25241 = state_25236;
(statearr_25241[(8)] = inst_25216__$1);

return statearr_25241;
})();
if(inst_25218){
var statearr_25242_25262 = state_25236__$1;
(statearr_25242_25262[(1)] = (5));

} else {
var statearr_25243_25263 = state_25236__$1;
(statearr_25243_25263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (6))){
var state_25236__$1 = state_25236;
var statearr_25244_25264 = state_25236__$1;
(statearr_25244_25264[(2)] = null);

(statearr_25244_25264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (3))){
var inst_25233 = (state_25236[(2)]);
var inst_25234 = cljs.core.async.close_BANG_.call(null,out);
var state_25236__$1 = (function (){var statearr_25245 = state_25236;
(statearr_25245[(9)] = inst_25233);

return statearr_25245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25236__$1,inst_25234);
} else {
if((state_val_25237 === (2))){
var state_25236__$1 = state_25236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25236__$1,(4),ch);
} else {
if((state_val_25237 === (11))){
var inst_25216 = (state_25236[(8)]);
var inst_25225 = (state_25236[(2)]);
var inst_25213 = inst_25216;
var state_25236__$1 = (function (){var statearr_25246 = state_25236;
(statearr_25246[(10)] = inst_25225);

(statearr_25246[(7)] = inst_25213);

return statearr_25246;
})();
var statearr_25247_25265 = state_25236__$1;
(statearr_25247_25265[(2)] = null);

(statearr_25247_25265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (9))){
var inst_25216 = (state_25236[(8)]);
var state_25236__$1 = state_25236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25236__$1,(11),out,inst_25216);
} else {
if((state_val_25237 === (5))){
var inst_25216 = (state_25236[(8)]);
var inst_25213 = (state_25236[(7)]);
var inst_25220 = cljs.core._EQ_.call(null,inst_25216,inst_25213);
var state_25236__$1 = state_25236;
if(inst_25220){
var statearr_25249_25266 = state_25236__$1;
(statearr_25249_25266[(1)] = (8));

} else {
var statearr_25250_25267 = state_25236__$1;
(statearr_25250_25267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (10))){
var inst_25228 = (state_25236[(2)]);
var state_25236__$1 = state_25236;
var statearr_25251_25268 = state_25236__$1;
(statearr_25251_25268[(2)] = inst_25228);

(statearr_25251_25268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (8))){
var inst_25213 = (state_25236[(7)]);
var tmp25248 = inst_25213;
var inst_25213__$1 = tmp25248;
var state_25236__$1 = (function (){var statearr_25252 = state_25236;
(statearr_25252[(7)] = inst_25213__$1);

return statearr_25252;
})();
var statearr_25253_25269 = state_25236__$1;
(statearr_25253_25269[(2)] = null);

(statearr_25253_25269[(1)] = (2));


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
});})(c__23523__auto___25259,out))
;
return ((function (switch__23428__auto__,c__23523__auto___25259,out){
return (function() {
var cljs$core$async$state_machine__23429__auto__ = null;
var cljs$core$async$state_machine__23429__auto____0 = (function (){
var statearr_25254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25254[(0)] = cljs$core$async$state_machine__23429__auto__);

(statearr_25254[(1)] = (1));

return statearr_25254;
});
var cljs$core$async$state_machine__23429__auto____1 = (function (state_25236){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_25236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e25255){if((e25255 instanceof Object)){
var ex__23432__auto__ = e25255;
var statearr_25256_25270 = state_25236;
(statearr_25256_25270[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25271 = state_25236;
state_25236 = G__25271;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$state_machine__23429__auto__ = function(state_25236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23429__auto____1.call(this,state_25236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23429__auto____0;
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23429__auto____1;
return cljs$core$async$state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___25259,out))
})();
var state__23525__auto__ = (function (){var statearr_25257 = f__23524__auto__.call(null);
(statearr_25257[(6)] = c__23523__auto___25259);

return statearr_25257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___25259,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25273 = arguments.length;
switch (G__25273) {
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
var c__23523__auto___25339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___25339,out){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___25339,out){
return (function (state_25311){
var state_val_25312 = (state_25311[(1)]);
if((state_val_25312 === (7))){
var inst_25307 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25313_25340 = state_25311__$1;
(statearr_25313_25340[(2)] = inst_25307);

(statearr_25313_25340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (1))){
var inst_25274 = (new Array(n));
var inst_25275 = inst_25274;
var inst_25276 = (0);
var state_25311__$1 = (function (){var statearr_25314 = state_25311;
(statearr_25314[(7)] = inst_25276);

(statearr_25314[(8)] = inst_25275);

return statearr_25314;
})();
var statearr_25315_25341 = state_25311__$1;
(statearr_25315_25341[(2)] = null);

(statearr_25315_25341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (4))){
var inst_25279 = (state_25311[(9)]);
var inst_25279__$1 = (state_25311[(2)]);
var inst_25280 = (inst_25279__$1 == null);
var inst_25281 = cljs.core.not.call(null,inst_25280);
var state_25311__$1 = (function (){var statearr_25316 = state_25311;
(statearr_25316[(9)] = inst_25279__$1);

return statearr_25316;
})();
if(inst_25281){
var statearr_25317_25342 = state_25311__$1;
(statearr_25317_25342[(1)] = (5));

} else {
var statearr_25318_25343 = state_25311__$1;
(statearr_25318_25343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (15))){
var inst_25301 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25319_25344 = state_25311__$1;
(statearr_25319_25344[(2)] = inst_25301);

(statearr_25319_25344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (13))){
var state_25311__$1 = state_25311;
var statearr_25320_25345 = state_25311__$1;
(statearr_25320_25345[(2)] = null);

(statearr_25320_25345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (6))){
var inst_25276 = (state_25311[(7)]);
var inst_25297 = (inst_25276 > (0));
var state_25311__$1 = state_25311;
if(cljs.core.truth_(inst_25297)){
var statearr_25321_25346 = state_25311__$1;
(statearr_25321_25346[(1)] = (12));

} else {
var statearr_25322_25347 = state_25311__$1;
(statearr_25322_25347[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (3))){
var inst_25309 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25311__$1,inst_25309);
} else {
if((state_val_25312 === (12))){
var inst_25275 = (state_25311[(8)]);
var inst_25299 = cljs.core.vec.call(null,inst_25275);
var state_25311__$1 = state_25311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25311__$1,(15),out,inst_25299);
} else {
if((state_val_25312 === (2))){
var state_25311__$1 = state_25311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25311__$1,(4),ch);
} else {
if((state_val_25312 === (11))){
var inst_25291 = (state_25311[(2)]);
var inst_25292 = (new Array(n));
var inst_25275 = inst_25292;
var inst_25276 = (0);
var state_25311__$1 = (function (){var statearr_25323 = state_25311;
(statearr_25323[(7)] = inst_25276);

(statearr_25323[(10)] = inst_25291);

(statearr_25323[(8)] = inst_25275);

return statearr_25323;
})();
var statearr_25324_25348 = state_25311__$1;
(statearr_25324_25348[(2)] = null);

(statearr_25324_25348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (9))){
var inst_25275 = (state_25311[(8)]);
var inst_25289 = cljs.core.vec.call(null,inst_25275);
var state_25311__$1 = state_25311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25311__$1,(11),out,inst_25289);
} else {
if((state_val_25312 === (5))){
var inst_25279 = (state_25311[(9)]);
var inst_25284 = (state_25311[(11)]);
var inst_25276 = (state_25311[(7)]);
var inst_25275 = (state_25311[(8)]);
var inst_25283 = (inst_25275[inst_25276] = inst_25279);
var inst_25284__$1 = (inst_25276 + (1));
var inst_25285 = (inst_25284__$1 < n);
var state_25311__$1 = (function (){var statearr_25325 = state_25311;
(statearr_25325[(11)] = inst_25284__$1);

(statearr_25325[(12)] = inst_25283);

return statearr_25325;
})();
if(cljs.core.truth_(inst_25285)){
var statearr_25326_25349 = state_25311__$1;
(statearr_25326_25349[(1)] = (8));

} else {
var statearr_25327_25350 = state_25311__$1;
(statearr_25327_25350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (14))){
var inst_25304 = (state_25311[(2)]);
var inst_25305 = cljs.core.async.close_BANG_.call(null,out);
var state_25311__$1 = (function (){var statearr_25329 = state_25311;
(statearr_25329[(13)] = inst_25304);

return statearr_25329;
})();
var statearr_25330_25351 = state_25311__$1;
(statearr_25330_25351[(2)] = inst_25305);

(statearr_25330_25351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (10))){
var inst_25295 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25331_25352 = state_25311__$1;
(statearr_25331_25352[(2)] = inst_25295);

(statearr_25331_25352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (8))){
var inst_25284 = (state_25311[(11)]);
var inst_25275 = (state_25311[(8)]);
var tmp25328 = inst_25275;
var inst_25275__$1 = tmp25328;
var inst_25276 = inst_25284;
var state_25311__$1 = (function (){var statearr_25332 = state_25311;
(statearr_25332[(7)] = inst_25276);

(statearr_25332[(8)] = inst_25275__$1);

return statearr_25332;
})();
var statearr_25333_25353 = state_25311__$1;
(statearr_25333_25353[(2)] = null);

(statearr_25333_25353[(1)] = (2));


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
});})(c__23523__auto___25339,out))
;
return ((function (switch__23428__auto__,c__23523__auto___25339,out){
return (function() {
var cljs$core$async$state_machine__23429__auto__ = null;
var cljs$core$async$state_machine__23429__auto____0 = (function (){
var statearr_25334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25334[(0)] = cljs$core$async$state_machine__23429__auto__);

(statearr_25334[(1)] = (1));

return statearr_25334;
});
var cljs$core$async$state_machine__23429__auto____1 = (function (state_25311){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_25311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e25335){if((e25335 instanceof Object)){
var ex__23432__auto__ = e25335;
var statearr_25336_25354 = state_25311;
(statearr_25336_25354[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25355 = state_25311;
state_25311 = G__25355;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$state_machine__23429__auto__ = function(state_25311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23429__auto____1.call(this,state_25311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23429__auto____0;
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23429__auto____1;
return cljs$core$async$state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___25339,out))
})();
var state__23525__auto__ = (function (){var statearr_25337 = f__23524__auto__.call(null);
(statearr_25337[(6)] = c__23523__auto___25339);

return statearr_25337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___25339,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25357 = arguments.length;
switch (G__25357) {
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
var c__23523__auto___25427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___25427,out){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___25427,out){
return (function (state_25399){
var state_val_25400 = (state_25399[(1)]);
if((state_val_25400 === (7))){
var inst_25395 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25401_25428 = state_25399__$1;
(statearr_25401_25428[(2)] = inst_25395);

(statearr_25401_25428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (1))){
var inst_25358 = [];
var inst_25359 = inst_25358;
var inst_25360 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25399__$1 = (function (){var statearr_25402 = state_25399;
(statearr_25402[(7)] = inst_25360);

(statearr_25402[(8)] = inst_25359);

return statearr_25402;
})();
var statearr_25403_25429 = state_25399__$1;
(statearr_25403_25429[(2)] = null);

(statearr_25403_25429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (4))){
var inst_25363 = (state_25399[(9)]);
var inst_25363__$1 = (state_25399[(2)]);
var inst_25364 = (inst_25363__$1 == null);
var inst_25365 = cljs.core.not.call(null,inst_25364);
var state_25399__$1 = (function (){var statearr_25404 = state_25399;
(statearr_25404[(9)] = inst_25363__$1);

return statearr_25404;
})();
if(inst_25365){
var statearr_25405_25430 = state_25399__$1;
(statearr_25405_25430[(1)] = (5));

} else {
var statearr_25406_25431 = state_25399__$1;
(statearr_25406_25431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (15))){
var inst_25389 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25407_25432 = state_25399__$1;
(statearr_25407_25432[(2)] = inst_25389);

(statearr_25407_25432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (13))){
var state_25399__$1 = state_25399;
var statearr_25408_25433 = state_25399__$1;
(statearr_25408_25433[(2)] = null);

(statearr_25408_25433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (6))){
var inst_25359 = (state_25399[(8)]);
var inst_25384 = inst_25359.length;
var inst_25385 = (inst_25384 > (0));
var state_25399__$1 = state_25399;
if(cljs.core.truth_(inst_25385)){
var statearr_25409_25434 = state_25399__$1;
(statearr_25409_25434[(1)] = (12));

} else {
var statearr_25410_25435 = state_25399__$1;
(statearr_25410_25435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (3))){
var inst_25397 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25399__$1,inst_25397);
} else {
if((state_val_25400 === (12))){
var inst_25359 = (state_25399[(8)]);
var inst_25387 = cljs.core.vec.call(null,inst_25359);
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25399__$1,(15),out,inst_25387);
} else {
if((state_val_25400 === (2))){
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25399__$1,(4),ch);
} else {
if((state_val_25400 === (11))){
var inst_25363 = (state_25399[(9)]);
var inst_25367 = (state_25399[(10)]);
var inst_25377 = (state_25399[(2)]);
var inst_25378 = [];
var inst_25379 = inst_25378.push(inst_25363);
var inst_25359 = inst_25378;
var inst_25360 = inst_25367;
var state_25399__$1 = (function (){var statearr_25411 = state_25399;
(statearr_25411[(11)] = inst_25379);

(statearr_25411[(7)] = inst_25360);

(statearr_25411[(12)] = inst_25377);

(statearr_25411[(8)] = inst_25359);

return statearr_25411;
})();
var statearr_25412_25436 = state_25399__$1;
(statearr_25412_25436[(2)] = null);

(statearr_25412_25436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (9))){
var inst_25359 = (state_25399[(8)]);
var inst_25375 = cljs.core.vec.call(null,inst_25359);
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25399__$1,(11),out,inst_25375);
} else {
if((state_val_25400 === (5))){
var inst_25363 = (state_25399[(9)]);
var inst_25360 = (state_25399[(7)]);
var inst_25367 = (state_25399[(10)]);
var inst_25367__$1 = f.call(null,inst_25363);
var inst_25368 = cljs.core._EQ_.call(null,inst_25367__$1,inst_25360);
var inst_25369 = cljs.core.keyword_identical_QMARK_.call(null,inst_25360,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25370 = ((inst_25368) || (inst_25369));
var state_25399__$1 = (function (){var statearr_25413 = state_25399;
(statearr_25413[(10)] = inst_25367__$1);

return statearr_25413;
})();
if(cljs.core.truth_(inst_25370)){
var statearr_25414_25437 = state_25399__$1;
(statearr_25414_25437[(1)] = (8));

} else {
var statearr_25415_25438 = state_25399__$1;
(statearr_25415_25438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (14))){
var inst_25392 = (state_25399[(2)]);
var inst_25393 = cljs.core.async.close_BANG_.call(null,out);
var state_25399__$1 = (function (){var statearr_25417 = state_25399;
(statearr_25417[(13)] = inst_25392);

return statearr_25417;
})();
var statearr_25418_25439 = state_25399__$1;
(statearr_25418_25439[(2)] = inst_25393);

(statearr_25418_25439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (10))){
var inst_25382 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25419_25440 = state_25399__$1;
(statearr_25419_25440[(2)] = inst_25382);

(statearr_25419_25440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (8))){
var inst_25363 = (state_25399[(9)]);
var inst_25367 = (state_25399[(10)]);
var inst_25359 = (state_25399[(8)]);
var inst_25372 = inst_25359.push(inst_25363);
var tmp25416 = inst_25359;
var inst_25359__$1 = tmp25416;
var inst_25360 = inst_25367;
var state_25399__$1 = (function (){var statearr_25420 = state_25399;
(statearr_25420[(7)] = inst_25360);

(statearr_25420[(14)] = inst_25372);

(statearr_25420[(8)] = inst_25359__$1);

return statearr_25420;
})();
var statearr_25421_25441 = state_25399__$1;
(statearr_25421_25441[(2)] = null);

(statearr_25421_25441[(1)] = (2));


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
});})(c__23523__auto___25427,out))
;
return ((function (switch__23428__auto__,c__23523__auto___25427,out){
return (function() {
var cljs$core$async$state_machine__23429__auto__ = null;
var cljs$core$async$state_machine__23429__auto____0 = (function (){
var statearr_25422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25422[(0)] = cljs$core$async$state_machine__23429__auto__);

(statearr_25422[(1)] = (1));

return statearr_25422;
});
var cljs$core$async$state_machine__23429__auto____1 = (function (state_25399){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_25399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e25423){if((e25423 instanceof Object)){
var ex__23432__auto__ = e25423;
var statearr_25424_25442 = state_25399;
(statearr_25424_25442[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25443 = state_25399;
state_25399 = G__25443;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
cljs$core$async$state_machine__23429__auto__ = function(state_25399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23429__auto____1.call(this,state_25399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23429__auto____0;
cljs$core$async$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23429__auto____1;
return cljs$core$async$state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___25427,out))
})();
var state__23525__auto__ = (function (){var statearr_25425 = f__23524__auto__.call(null);
(statearr_25425[(6)] = c__23523__auto___25427);

return statearr_25425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___25427,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1565953418281
