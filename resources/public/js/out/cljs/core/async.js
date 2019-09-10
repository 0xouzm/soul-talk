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
var G__29260 = arguments.length;
switch (G__29260) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29261 = (function (f,blockable,meta29262){
this.f = f;
this.blockable = blockable;
this.meta29262 = meta29262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29263,meta29262__$1){
var self__ = this;
var _29263__$1 = this;
return (new cljs.core.async.t_cljs$core$async29261(self__.f,self__.blockable,meta29262__$1));
});

cljs.core.async.t_cljs$core$async29261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29263){
var self__ = this;
var _29263__$1 = this;
return self__.meta29262;
});

cljs.core.async.t_cljs$core$async29261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29262","meta29262",750927162,null)], null);
});

cljs.core.async.t_cljs$core$async29261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29261";

cljs.core.async.t_cljs$core$async29261.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29261");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29261.
 */
cljs.core.async.__GT_t_cljs$core$async29261 = (function cljs$core$async$__GT_t_cljs$core$async29261(f__$1,blockable__$1,meta29262){
return (new cljs.core.async.t_cljs$core$async29261(f__$1,blockable__$1,meta29262));
});

}

return (new cljs.core.async.t_cljs$core$async29261(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29267 = arguments.length;
switch (G__29267) {
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
var G__29270 = arguments.length;
switch (G__29270) {
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
var G__29273 = arguments.length;
switch (G__29273) {
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
var val_29275 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29275);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29275,ret){
return (function (){
return fn1.call(null,val_29275);
});})(val_29275,ret))
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
var G__29277 = arguments.length;
switch (G__29277) {
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
var n__4607__auto___29279 = n;
var x_29280 = (0);
while(true){
if((x_29280 < n__4607__auto___29279)){
(a[x_29280] = (0));

var G__29281 = (x_29280 + (1));
x_29280 = G__29281;
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

var G__29282 = (i + (1));
i = G__29282;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29283 = (function (flag,meta29284){
this.flag = flag;
this.meta29284 = meta29284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29285,meta29284__$1){
var self__ = this;
var _29285__$1 = this;
return (new cljs.core.async.t_cljs$core$async29283(self__.flag,meta29284__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29285){
var self__ = this;
var _29285__$1 = this;
return self__.meta29284;
});})(flag))
;

cljs.core.async.t_cljs$core$async29283.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29283.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29283.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29284","meta29284",1792767525,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29283";

cljs.core.async.t_cljs$core$async29283.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29283");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29283.
 */
cljs.core.async.__GT_t_cljs$core$async29283 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29283(flag__$1,meta29284){
return (new cljs.core.async.t_cljs$core$async29283(flag__$1,meta29284));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29283(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29286 = (function (flag,cb,meta29287){
this.flag = flag;
this.cb = cb;
this.meta29287 = meta29287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29288,meta29287__$1){
var self__ = this;
var _29288__$1 = this;
return (new cljs.core.async.t_cljs$core$async29286(self__.flag,self__.cb,meta29287__$1));
});

cljs.core.async.t_cljs$core$async29286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29288){
var self__ = this;
var _29288__$1 = this;
return self__.meta29287;
});

cljs.core.async.t_cljs$core$async29286.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29286.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29287","meta29287",-1578197718,null)], null);
});

cljs.core.async.t_cljs$core$async29286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29286";

cljs.core.async.t_cljs$core$async29286.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29286");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29286.
 */
cljs.core.async.__GT_t_cljs$core$async29286 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29286(flag__$1,cb__$1,meta29287){
return (new cljs.core.async.t_cljs$core$async29286(flag__$1,cb__$1,meta29287));
});

}

return (new cljs.core.async.t_cljs$core$async29286(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29289_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29289_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29290_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29290_SHARP_,port], null));
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
var G__29291 = (i + (1));
i = G__29291;
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
var len__4730__auto___29297 = arguments.length;
var i__4731__auto___29298 = (0);
while(true){
if((i__4731__auto___29298 < len__4730__auto___29297)){
args__4736__auto__.push((arguments[i__4731__auto___29298]));

var G__29299 = (i__4731__auto___29298 + (1));
i__4731__auto___29298 = G__29299;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29294){
var map__29295 = p__29294;
var map__29295__$1 = (((((!((map__29295 == null))))?(((((map__29295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29295):map__29295);
var opts = map__29295__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29292){
var G__29293 = cljs.core.first.call(null,seq29292);
var seq29292__$1 = cljs.core.next.call(null,seq29292);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29293,seq29292__$1);
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
var G__29301 = arguments.length;
switch (G__29301) {
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
var c__27336__auto___29347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___29347){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___29347){
return (function (state_29325){
var state_val_29326 = (state_29325[(1)]);
if((state_val_29326 === (7))){
var inst_29321 = (state_29325[(2)]);
var state_29325__$1 = state_29325;
var statearr_29327_29348 = state_29325__$1;
(statearr_29327_29348[(2)] = inst_29321);

(statearr_29327_29348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (1))){
var state_29325__$1 = state_29325;
var statearr_29328_29349 = state_29325__$1;
(statearr_29328_29349[(2)] = null);

(statearr_29328_29349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (4))){
var inst_29304 = (state_29325[(7)]);
var inst_29304__$1 = (state_29325[(2)]);
var inst_29305 = (inst_29304__$1 == null);
var state_29325__$1 = (function (){var statearr_29329 = state_29325;
(statearr_29329[(7)] = inst_29304__$1);

return statearr_29329;
})();
if(cljs.core.truth_(inst_29305)){
var statearr_29330_29350 = state_29325__$1;
(statearr_29330_29350[(1)] = (5));

} else {
var statearr_29331_29351 = state_29325__$1;
(statearr_29331_29351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (13))){
var state_29325__$1 = state_29325;
var statearr_29332_29352 = state_29325__$1;
(statearr_29332_29352[(2)] = null);

(statearr_29332_29352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (6))){
var inst_29304 = (state_29325[(7)]);
var state_29325__$1 = state_29325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29325__$1,(11),to,inst_29304);
} else {
if((state_val_29326 === (3))){
var inst_29323 = (state_29325[(2)]);
var state_29325__$1 = state_29325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29325__$1,inst_29323);
} else {
if((state_val_29326 === (12))){
var state_29325__$1 = state_29325;
var statearr_29333_29353 = state_29325__$1;
(statearr_29333_29353[(2)] = null);

(statearr_29333_29353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (2))){
var state_29325__$1 = state_29325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29325__$1,(4),from);
} else {
if((state_val_29326 === (11))){
var inst_29314 = (state_29325[(2)]);
var state_29325__$1 = state_29325;
if(cljs.core.truth_(inst_29314)){
var statearr_29334_29354 = state_29325__$1;
(statearr_29334_29354[(1)] = (12));

} else {
var statearr_29335_29355 = state_29325__$1;
(statearr_29335_29355[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (9))){
var state_29325__$1 = state_29325;
var statearr_29336_29356 = state_29325__$1;
(statearr_29336_29356[(2)] = null);

(statearr_29336_29356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (5))){
var state_29325__$1 = state_29325;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29337_29357 = state_29325__$1;
(statearr_29337_29357[(1)] = (8));

} else {
var statearr_29338_29358 = state_29325__$1;
(statearr_29338_29358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (14))){
var inst_29319 = (state_29325[(2)]);
var state_29325__$1 = state_29325;
var statearr_29339_29359 = state_29325__$1;
(statearr_29339_29359[(2)] = inst_29319);

(statearr_29339_29359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (10))){
var inst_29311 = (state_29325[(2)]);
var state_29325__$1 = state_29325;
var statearr_29340_29360 = state_29325__$1;
(statearr_29340_29360[(2)] = inst_29311);

(statearr_29340_29360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (8))){
var inst_29308 = cljs.core.async.close_BANG_.call(null,to);
var state_29325__$1 = state_29325;
var statearr_29341_29361 = state_29325__$1;
(statearr_29341_29361[(2)] = inst_29308);

(statearr_29341_29361[(1)] = (10));


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
});})(c__27336__auto___29347))
;
return ((function (switch__27169__auto__,c__27336__auto___29347){
return (function() {
var cljs$core$async$state_machine__27170__auto__ = null;
var cljs$core$async$state_machine__27170__auto____0 = (function (){
var statearr_29342 = [null,null,null,null,null,null,null,null];
(statearr_29342[(0)] = cljs$core$async$state_machine__27170__auto__);

(statearr_29342[(1)] = (1));

return statearr_29342;
});
var cljs$core$async$state_machine__27170__auto____1 = (function (state_29325){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_29325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e29343){if((e29343 instanceof Object)){
var ex__27173__auto__ = e29343;
var statearr_29344_29362 = state_29325;
(statearr_29344_29362[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29363 = state_29325;
state_29325 = G__29363;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$state_machine__27170__auto__ = function(state_29325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27170__auto____1.call(this,state_29325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27170__auto____0;
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27170__auto____1;
return cljs$core$async$state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___29347))
})();
var state__27338__auto__ = (function (){var statearr_29345 = f__27337__auto__.call(null);
(statearr_29345[(6)] = c__27336__auto___29347);

return statearr_29345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___29347))
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
return (function (p__29364){
var vec__29365 = p__29364;
var v = cljs.core.nth.call(null,vec__29365,(0),null);
var p = cljs.core.nth.call(null,vec__29365,(1),null);
var job = vec__29365;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27336__auto___29536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___29536,res,vec__29365,v,p,job,jobs,results){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___29536,res,vec__29365,v,p,job,jobs,results){
return (function (state_29372){
var state_val_29373 = (state_29372[(1)]);
if((state_val_29373 === (1))){
var state_29372__$1 = state_29372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29372__$1,(2),res,v);
} else {
if((state_val_29373 === (2))){
var inst_29369 = (state_29372[(2)]);
var inst_29370 = cljs.core.async.close_BANG_.call(null,res);
var state_29372__$1 = (function (){var statearr_29374 = state_29372;
(statearr_29374[(7)] = inst_29369);

return statearr_29374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29372__$1,inst_29370);
} else {
return null;
}
}
});})(c__27336__auto___29536,res,vec__29365,v,p,job,jobs,results))
;
return ((function (switch__27169__auto__,c__27336__auto___29536,res,vec__29365,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0 = (function (){
var statearr_29375 = [null,null,null,null,null,null,null,null];
(statearr_29375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__);

(statearr_29375[(1)] = (1));

return statearr_29375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1 = (function (state_29372){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_29372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e29376){if((e29376 instanceof Object)){
var ex__27173__auto__ = e29376;
var statearr_29377_29537 = state_29372;
(statearr_29377_29537[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29538 = state_29372;
state_29372 = G__29538;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__ = function(state_29372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1.call(this,state_29372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___29536,res,vec__29365,v,p,job,jobs,results))
})();
var state__27338__auto__ = (function (){var statearr_29378 = f__27337__auto__.call(null);
(statearr_29378[(6)] = c__27336__auto___29536);

return statearr_29378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___29536,res,vec__29365,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29379){
var vec__29380 = p__29379;
var v = cljs.core.nth.call(null,vec__29380,(0),null);
var p = cljs.core.nth.call(null,vec__29380,(1),null);
var job = vec__29380;
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
var n__4607__auto___29539 = n;
var __29540 = (0);
while(true){
if((__29540 < n__4607__auto___29539)){
var G__29383_29541 = type;
var G__29383_29542__$1 = (((G__29383_29541 instanceof cljs.core.Keyword))?G__29383_29541.fqn:null);
switch (G__29383_29542__$1) {
case "compute":
var c__27336__auto___29544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29540,c__27336__auto___29544,G__29383_29541,G__29383_29542__$1,n__4607__auto___29539,jobs,results,process,async){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (__29540,c__27336__auto___29544,G__29383_29541,G__29383_29542__$1,n__4607__auto___29539,jobs,results,process,async){
return (function (state_29396){
var state_val_29397 = (state_29396[(1)]);
if((state_val_29397 === (1))){
var state_29396__$1 = state_29396;
var statearr_29398_29545 = state_29396__$1;
(statearr_29398_29545[(2)] = null);

(statearr_29398_29545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (2))){
var state_29396__$1 = state_29396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29396__$1,(4),jobs);
} else {
if((state_val_29397 === (3))){
var inst_29394 = (state_29396[(2)]);
var state_29396__$1 = state_29396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29396__$1,inst_29394);
} else {
if((state_val_29397 === (4))){
var inst_29386 = (state_29396[(2)]);
var inst_29387 = process.call(null,inst_29386);
var state_29396__$1 = state_29396;
if(cljs.core.truth_(inst_29387)){
var statearr_29399_29546 = state_29396__$1;
(statearr_29399_29546[(1)] = (5));

} else {
var statearr_29400_29547 = state_29396__$1;
(statearr_29400_29547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (5))){
var state_29396__$1 = state_29396;
var statearr_29401_29548 = state_29396__$1;
(statearr_29401_29548[(2)] = null);

(statearr_29401_29548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (6))){
var state_29396__$1 = state_29396;
var statearr_29402_29549 = state_29396__$1;
(statearr_29402_29549[(2)] = null);

(statearr_29402_29549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (7))){
var inst_29392 = (state_29396[(2)]);
var state_29396__$1 = state_29396;
var statearr_29403_29550 = state_29396__$1;
(statearr_29403_29550[(2)] = inst_29392);

(statearr_29403_29550[(1)] = (3));


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
});})(__29540,c__27336__auto___29544,G__29383_29541,G__29383_29542__$1,n__4607__auto___29539,jobs,results,process,async))
;
return ((function (__29540,switch__27169__auto__,c__27336__auto___29544,G__29383_29541,G__29383_29542__$1,n__4607__auto___29539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0 = (function (){
var statearr_29404 = [null,null,null,null,null,null,null];
(statearr_29404[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__);

(statearr_29404[(1)] = (1));

return statearr_29404;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1 = (function (state_29396){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_29396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e29405){if((e29405 instanceof Object)){
var ex__27173__auto__ = e29405;
var statearr_29406_29551 = state_29396;
(statearr_29406_29551[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29552 = state_29396;
state_29396 = G__29552;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__ = function(state_29396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1.call(this,state_29396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__;
})()
;})(__29540,switch__27169__auto__,c__27336__auto___29544,G__29383_29541,G__29383_29542__$1,n__4607__auto___29539,jobs,results,process,async))
})();
var state__27338__auto__ = (function (){var statearr_29407 = f__27337__auto__.call(null);
(statearr_29407[(6)] = c__27336__auto___29544);

return statearr_29407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(__29540,c__27336__auto___29544,G__29383_29541,G__29383_29542__$1,n__4607__auto___29539,jobs,results,process,async))
);


break;
case "async":
var c__27336__auto___29553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29540,c__27336__auto___29553,G__29383_29541,G__29383_29542__$1,n__4607__auto___29539,jobs,results,process,async){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (__29540,c__27336__auto___29553,G__29383_29541,G__29383_29542__$1,n__4607__auto___29539,jobs,results,process,async){
return (function (state_29420){
var state_val_29421 = (state_29420[(1)]);
if((state_val_29421 === (1))){
var state_29420__$1 = state_29420;
var statearr_29422_29554 = state_29420__$1;
(statearr_29422_29554[(2)] = null);

(statearr_29422_29554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (2))){
var state_29420__$1 = state_29420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29420__$1,(4),jobs);
} else {
if((state_val_29421 === (3))){
var inst_29418 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29420__$1,inst_29418);
} else {
if((state_val_29421 === (4))){
var inst_29410 = (state_29420[(2)]);
var inst_29411 = async.call(null,inst_29410);
var state_29420__$1 = state_29420;
if(cljs.core.truth_(inst_29411)){
var statearr_29423_29555 = state_29420__$1;
(statearr_29423_29555[(1)] = (5));

} else {
var statearr_29424_29556 = state_29420__$1;
(statearr_29424_29556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (5))){
var state_29420__$1 = state_29420;
var statearr_29425_29557 = state_29420__$1;
(statearr_29425_29557[(2)] = null);

(statearr_29425_29557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (6))){
var state_29420__$1 = state_29420;
var statearr_29426_29558 = state_29420__$1;
(statearr_29426_29558[(2)] = null);

(statearr_29426_29558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (7))){
var inst_29416 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
var statearr_29427_29559 = state_29420__$1;
(statearr_29427_29559[(2)] = inst_29416);

(statearr_29427_29559[(1)] = (3));


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
});})(__29540,c__27336__auto___29553,G__29383_29541,G__29383_29542__$1,n__4607__auto___29539,jobs,results,process,async))
;
return ((function (__29540,switch__27169__auto__,c__27336__auto___29553,G__29383_29541,G__29383_29542__$1,n__4607__auto___29539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0 = (function (){
var statearr_29428 = [null,null,null,null,null,null,null];
(statearr_29428[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__);

(statearr_29428[(1)] = (1));

return statearr_29428;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1 = (function (state_29420){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_29420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e29429){if((e29429 instanceof Object)){
var ex__27173__auto__ = e29429;
var statearr_29430_29560 = state_29420;
(statearr_29430_29560[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29561 = state_29420;
state_29420 = G__29561;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__ = function(state_29420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1.call(this,state_29420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__;
})()
;})(__29540,switch__27169__auto__,c__27336__auto___29553,G__29383_29541,G__29383_29542__$1,n__4607__auto___29539,jobs,results,process,async))
})();
var state__27338__auto__ = (function (){var statearr_29431 = f__27337__auto__.call(null);
(statearr_29431[(6)] = c__27336__auto___29553);

return statearr_29431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(__29540,c__27336__auto___29553,G__29383_29541,G__29383_29542__$1,n__4607__auto___29539,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29383_29542__$1)].join('')));

}

var G__29562 = (__29540 + (1));
__29540 = G__29562;
continue;
} else {
}
break;
}

var c__27336__auto___29563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___29563,jobs,results,process,async){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___29563,jobs,results,process,async){
return (function (state_29453){
var state_val_29454 = (state_29453[(1)]);
if((state_val_29454 === (7))){
var inst_29449 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29455_29564 = state_29453__$1;
(statearr_29455_29564[(2)] = inst_29449);

(statearr_29455_29564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (1))){
var state_29453__$1 = state_29453;
var statearr_29456_29565 = state_29453__$1;
(statearr_29456_29565[(2)] = null);

(statearr_29456_29565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (4))){
var inst_29434 = (state_29453[(7)]);
var inst_29434__$1 = (state_29453[(2)]);
var inst_29435 = (inst_29434__$1 == null);
var state_29453__$1 = (function (){var statearr_29457 = state_29453;
(statearr_29457[(7)] = inst_29434__$1);

return statearr_29457;
})();
if(cljs.core.truth_(inst_29435)){
var statearr_29458_29566 = state_29453__$1;
(statearr_29458_29566[(1)] = (5));

} else {
var statearr_29459_29567 = state_29453__$1;
(statearr_29459_29567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (6))){
var inst_29439 = (state_29453[(8)]);
var inst_29434 = (state_29453[(7)]);
var inst_29439__$1 = cljs.core.async.chan.call(null,(1));
var inst_29440 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29441 = [inst_29434,inst_29439__$1];
var inst_29442 = (new cljs.core.PersistentVector(null,2,(5),inst_29440,inst_29441,null));
var state_29453__$1 = (function (){var statearr_29460 = state_29453;
(statearr_29460[(8)] = inst_29439__$1);

return statearr_29460;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29453__$1,(8),jobs,inst_29442);
} else {
if((state_val_29454 === (3))){
var inst_29451 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29453__$1,inst_29451);
} else {
if((state_val_29454 === (2))){
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29453__$1,(4),from);
} else {
if((state_val_29454 === (9))){
var inst_29446 = (state_29453[(2)]);
var state_29453__$1 = (function (){var statearr_29461 = state_29453;
(statearr_29461[(9)] = inst_29446);

return statearr_29461;
})();
var statearr_29462_29568 = state_29453__$1;
(statearr_29462_29568[(2)] = null);

(statearr_29462_29568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (5))){
var inst_29437 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29453__$1 = state_29453;
var statearr_29463_29569 = state_29453__$1;
(statearr_29463_29569[(2)] = inst_29437);

(statearr_29463_29569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (8))){
var inst_29439 = (state_29453[(8)]);
var inst_29444 = (state_29453[(2)]);
var state_29453__$1 = (function (){var statearr_29464 = state_29453;
(statearr_29464[(10)] = inst_29444);

return statearr_29464;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29453__$1,(9),results,inst_29439);
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
});})(c__27336__auto___29563,jobs,results,process,async))
;
return ((function (switch__27169__auto__,c__27336__auto___29563,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0 = (function (){
var statearr_29465 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__);

(statearr_29465[(1)] = (1));

return statearr_29465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1 = (function (state_29453){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_29453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e29466){if((e29466 instanceof Object)){
var ex__27173__auto__ = e29466;
var statearr_29467_29570 = state_29453;
(statearr_29467_29570[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29571 = state_29453;
state_29453 = G__29571;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__ = function(state_29453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1.call(this,state_29453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___29563,jobs,results,process,async))
})();
var state__27338__auto__ = (function (){var statearr_29468 = f__27337__auto__.call(null);
(statearr_29468[(6)] = c__27336__auto___29563);

return statearr_29468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___29563,jobs,results,process,async))
);


var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__,jobs,results,process,async){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto__,jobs,results,process,async){
return (function (state_29506){
var state_val_29507 = (state_29506[(1)]);
if((state_val_29507 === (7))){
var inst_29502 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
var statearr_29508_29572 = state_29506__$1;
(statearr_29508_29572[(2)] = inst_29502);

(statearr_29508_29572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (20))){
var state_29506__$1 = state_29506;
var statearr_29509_29573 = state_29506__$1;
(statearr_29509_29573[(2)] = null);

(statearr_29509_29573[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (1))){
var state_29506__$1 = state_29506;
var statearr_29510_29574 = state_29506__$1;
(statearr_29510_29574[(2)] = null);

(statearr_29510_29574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (4))){
var inst_29471 = (state_29506[(7)]);
var inst_29471__$1 = (state_29506[(2)]);
var inst_29472 = (inst_29471__$1 == null);
var state_29506__$1 = (function (){var statearr_29511 = state_29506;
(statearr_29511[(7)] = inst_29471__$1);

return statearr_29511;
})();
if(cljs.core.truth_(inst_29472)){
var statearr_29512_29575 = state_29506__$1;
(statearr_29512_29575[(1)] = (5));

} else {
var statearr_29513_29576 = state_29506__$1;
(statearr_29513_29576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (15))){
var inst_29484 = (state_29506[(8)]);
var state_29506__$1 = state_29506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29506__$1,(18),to,inst_29484);
} else {
if((state_val_29507 === (21))){
var inst_29497 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
var statearr_29514_29577 = state_29506__$1;
(statearr_29514_29577[(2)] = inst_29497);

(statearr_29514_29577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (13))){
var inst_29499 = (state_29506[(2)]);
var state_29506__$1 = (function (){var statearr_29515 = state_29506;
(statearr_29515[(9)] = inst_29499);

return statearr_29515;
})();
var statearr_29516_29578 = state_29506__$1;
(statearr_29516_29578[(2)] = null);

(statearr_29516_29578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (6))){
var inst_29471 = (state_29506[(7)]);
var state_29506__$1 = state_29506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29506__$1,(11),inst_29471);
} else {
if((state_val_29507 === (17))){
var inst_29492 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
if(cljs.core.truth_(inst_29492)){
var statearr_29517_29579 = state_29506__$1;
(statearr_29517_29579[(1)] = (19));

} else {
var statearr_29518_29580 = state_29506__$1;
(statearr_29518_29580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (3))){
var inst_29504 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29506__$1,inst_29504);
} else {
if((state_val_29507 === (12))){
var inst_29481 = (state_29506[(10)]);
var state_29506__$1 = state_29506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29506__$1,(14),inst_29481);
} else {
if((state_val_29507 === (2))){
var state_29506__$1 = state_29506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29506__$1,(4),results);
} else {
if((state_val_29507 === (19))){
var state_29506__$1 = state_29506;
var statearr_29519_29581 = state_29506__$1;
(statearr_29519_29581[(2)] = null);

(statearr_29519_29581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (11))){
var inst_29481 = (state_29506[(2)]);
var state_29506__$1 = (function (){var statearr_29520 = state_29506;
(statearr_29520[(10)] = inst_29481);

return statearr_29520;
})();
var statearr_29521_29582 = state_29506__$1;
(statearr_29521_29582[(2)] = null);

(statearr_29521_29582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (9))){
var state_29506__$1 = state_29506;
var statearr_29522_29583 = state_29506__$1;
(statearr_29522_29583[(2)] = null);

(statearr_29522_29583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (5))){
var state_29506__$1 = state_29506;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29523_29584 = state_29506__$1;
(statearr_29523_29584[(1)] = (8));

} else {
var statearr_29524_29585 = state_29506__$1;
(statearr_29524_29585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (14))){
var inst_29486 = (state_29506[(11)]);
var inst_29484 = (state_29506[(8)]);
var inst_29484__$1 = (state_29506[(2)]);
var inst_29485 = (inst_29484__$1 == null);
var inst_29486__$1 = cljs.core.not.call(null,inst_29485);
var state_29506__$1 = (function (){var statearr_29525 = state_29506;
(statearr_29525[(11)] = inst_29486__$1);

(statearr_29525[(8)] = inst_29484__$1);

return statearr_29525;
})();
if(inst_29486__$1){
var statearr_29526_29586 = state_29506__$1;
(statearr_29526_29586[(1)] = (15));

} else {
var statearr_29527_29587 = state_29506__$1;
(statearr_29527_29587[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (16))){
var inst_29486 = (state_29506[(11)]);
var state_29506__$1 = state_29506;
var statearr_29528_29588 = state_29506__$1;
(statearr_29528_29588[(2)] = inst_29486);

(statearr_29528_29588[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (10))){
var inst_29478 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
var statearr_29529_29589 = state_29506__$1;
(statearr_29529_29589[(2)] = inst_29478);

(statearr_29529_29589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (18))){
var inst_29489 = (state_29506[(2)]);
var state_29506__$1 = state_29506;
var statearr_29530_29590 = state_29506__$1;
(statearr_29530_29590[(2)] = inst_29489);

(statearr_29530_29590[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29507 === (8))){
var inst_29475 = cljs.core.async.close_BANG_.call(null,to);
var state_29506__$1 = state_29506;
var statearr_29531_29591 = state_29506__$1;
(statearr_29531_29591[(2)] = inst_29475);

(statearr_29531_29591[(1)] = (10));


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
});})(c__27336__auto__,jobs,results,process,async))
;
return ((function (switch__27169__auto__,c__27336__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0 = (function (){
var statearr_29532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__);

(statearr_29532[(1)] = (1));

return statearr_29532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1 = (function (state_29506){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_29506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e29533){if((e29533 instanceof Object)){
var ex__27173__auto__ = e29533;
var statearr_29534_29592 = state_29506;
(statearr_29534_29592[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29593 = state_29506;
state_29506 = G__29593;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__ = function(state_29506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1.call(this,state_29506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto__,jobs,results,process,async))
})();
var state__27338__auto__ = (function (){var statearr_29535 = f__27337__auto__.call(null);
(statearr_29535[(6)] = c__27336__auto__);

return statearr_29535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__,jobs,results,process,async))
);

return c__27336__auto__;
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
var G__29595 = arguments.length;
switch (G__29595) {
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
var G__29598 = arguments.length;
switch (G__29598) {
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
var G__29601 = arguments.length;
switch (G__29601) {
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
var c__27336__auto___29650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___29650,tc,fc){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___29650,tc,fc){
return (function (state_29627){
var state_val_29628 = (state_29627[(1)]);
if((state_val_29628 === (7))){
var inst_29623 = (state_29627[(2)]);
var state_29627__$1 = state_29627;
var statearr_29629_29651 = state_29627__$1;
(statearr_29629_29651[(2)] = inst_29623);

(statearr_29629_29651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (1))){
var state_29627__$1 = state_29627;
var statearr_29630_29652 = state_29627__$1;
(statearr_29630_29652[(2)] = null);

(statearr_29630_29652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (4))){
var inst_29604 = (state_29627[(7)]);
var inst_29604__$1 = (state_29627[(2)]);
var inst_29605 = (inst_29604__$1 == null);
var state_29627__$1 = (function (){var statearr_29631 = state_29627;
(statearr_29631[(7)] = inst_29604__$1);

return statearr_29631;
})();
if(cljs.core.truth_(inst_29605)){
var statearr_29632_29653 = state_29627__$1;
(statearr_29632_29653[(1)] = (5));

} else {
var statearr_29633_29654 = state_29627__$1;
(statearr_29633_29654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (13))){
var state_29627__$1 = state_29627;
var statearr_29634_29655 = state_29627__$1;
(statearr_29634_29655[(2)] = null);

(statearr_29634_29655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (6))){
var inst_29604 = (state_29627[(7)]);
var inst_29610 = p.call(null,inst_29604);
var state_29627__$1 = state_29627;
if(cljs.core.truth_(inst_29610)){
var statearr_29635_29656 = state_29627__$1;
(statearr_29635_29656[(1)] = (9));

} else {
var statearr_29636_29657 = state_29627__$1;
(statearr_29636_29657[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (3))){
var inst_29625 = (state_29627[(2)]);
var state_29627__$1 = state_29627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29627__$1,inst_29625);
} else {
if((state_val_29628 === (12))){
var state_29627__$1 = state_29627;
var statearr_29637_29658 = state_29627__$1;
(statearr_29637_29658[(2)] = null);

(statearr_29637_29658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (2))){
var state_29627__$1 = state_29627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29627__$1,(4),ch);
} else {
if((state_val_29628 === (11))){
var inst_29604 = (state_29627[(7)]);
var inst_29614 = (state_29627[(2)]);
var state_29627__$1 = state_29627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29627__$1,(8),inst_29614,inst_29604);
} else {
if((state_val_29628 === (9))){
var state_29627__$1 = state_29627;
var statearr_29638_29659 = state_29627__$1;
(statearr_29638_29659[(2)] = tc);

(statearr_29638_29659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (5))){
var inst_29607 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29608 = cljs.core.async.close_BANG_.call(null,fc);
var state_29627__$1 = (function (){var statearr_29639 = state_29627;
(statearr_29639[(8)] = inst_29607);

return statearr_29639;
})();
var statearr_29640_29660 = state_29627__$1;
(statearr_29640_29660[(2)] = inst_29608);

(statearr_29640_29660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (14))){
var inst_29621 = (state_29627[(2)]);
var state_29627__$1 = state_29627;
var statearr_29641_29661 = state_29627__$1;
(statearr_29641_29661[(2)] = inst_29621);

(statearr_29641_29661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (10))){
var state_29627__$1 = state_29627;
var statearr_29642_29662 = state_29627__$1;
(statearr_29642_29662[(2)] = fc);

(statearr_29642_29662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29628 === (8))){
var inst_29616 = (state_29627[(2)]);
var state_29627__$1 = state_29627;
if(cljs.core.truth_(inst_29616)){
var statearr_29643_29663 = state_29627__$1;
(statearr_29643_29663[(1)] = (12));

} else {
var statearr_29644_29664 = state_29627__$1;
(statearr_29644_29664[(1)] = (13));

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
});})(c__27336__auto___29650,tc,fc))
;
return ((function (switch__27169__auto__,c__27336__auto___29650,tc,fc){
return (function() {
var cljs$core$async$state_machine__27170__auto__ = null;
var cljs$core$async$state_machine__27170__auto____0 = (function (){
var statearr_29645 = [null,null,null,null,null,null,null,null,null];
(statearr_29645[(0)] = cljs$core$async$state_machine__27170__auto__);

(statearr_29645[(1)] = (1));

return statearr_29645;
});
var cljs$core$async$state_machine__27170__auto____1 = (function (state_29627){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_29627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e29646){if((e29646 instanceof Object)){
var ex__27173__auto__ = e29646;
var statearr_29647_29665 = state_29627;
(statearr_29647_29665[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29666 = state_29627;
state_29627 = G__29666;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$state_machine__27170__auto__ = function(state_29627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27170__auto____1.call(this,state_29627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27170__auto____0;
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27170__auto____1;
return cljs$core$async$state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___29650,tc,fc))
})();
var state__27338__auto__ = (function (){var statearr_29648 = f__27337__auto__.call(null);
(statearr_29648[(6)] = c__27336__auto___29650);

return statearr_29648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___29650,tc,fc))
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
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto__){
return (function (state_29687){
var state_val_29688 = (state_29687[(1)]);
if((state_val_29688 === (7))){
var inst_29683 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29689_29707 = state_29687__$1;
(statearr_29689_29707[(2)] = inst_29683);

(statearr_29689_29707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (1))){
var inst_29667 = init;
var state_29687__$1 = (function (){var statearr_29690 = state_29687;
(statearr_29690[(7)] = inst_29667);

return statearr_29690;
})();
var statearr_29691_29708 = state_29687__$1;
(statearr_29691_29708[(2)] = null);

(statearr_29691_29708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (4))){
var inst_29670 = (state_29687[(8)]);
var inst_29670__$1 = (state_29687[(2)]);
var inst_29671 = (inst_29670__$1 == null);
var state_29687__$1 = (function (){var statearr_29692 = state_29687;
(statearr_29692[(8)] = inst_29670__$1);

return statearr_29692;
})();
if(cljs.core.truth_(inst_29671)){
var statearr_29693_29709 = state_29687__$1;
(statearr_29693_29709[(1)] = (5));

} else {
var statearr_29694_29710 = state_29687__$1;
(statearr_29694_29710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (6))){
var inst_29674 = (state_29687[(9)]);
var inst_29667 = (state_29687[(7)]);
var inst_29670 = (state_29687[(8)]);
var inst_29674__$1 = f.call(null,inst_29667,inst_29670);
var inst_29675 = cljs.core.reduced_QMARK_.call(null,inst_29674__$1);
var state_29687__$1 = (function (){var statearr_29695 = state_29687;
(statearr_29695[(9)] = inst_29674__$1);

return statearr_29695;
})();
if(inst_29675){
var statearr_29696_29711 = state_29687__$1;
(statearr_29696_29711[(1)] = (8));

} else {
var statearr_29697_29712 = state_29687__$1;
(statearr_29697_29712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (3))){
var inst_29685 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29687__$1,inst_29685);
} else {
if((state_val_29688 === (2))){
var state_29687__$1 = state_29687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29687__$1,(4),ch);
} else {
if((state_val_29688 === (9))){
var inst_29674 = (state_29687[(9)]);
var inst_29667 = inst_29674;
var state_29687__$1 = (function (){var statearr_29698 = state_29687;
(statearr_29698[(7)] = inst_29667);

return statearr_29698;
})();
var statearr_29699_29713 = state_29687__$1;
(statearr_29699_29713[(2)] = null);

(statearr_29699_29713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (5))){
var inst_29667 = (state_29687[(7)]);
var state_29687__$1 = state_29687;
var statearr_29700_29714 = state_29687__$1;
(statearr_29700_29714[(2)] = inst_29667);

(statearr_29700_29714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (10))){
var inst_29681 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29701_29715 = state_29687__$1;
(statearr_29701_29715[(2)] = inst_29681);

(statearr_29701_29715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (8))){
var inst_29674 = (state_29687[(9)]);
var inst_29677 = cljs.core.deref.call(null,inst_29674);
var state_29687__$1 = state_29687;
var statearr_29702_29716 = state_29687__$1;
(statearr_29702_29716[(2)] = inst_29677);

(statearr_29702_29716[(1)] = (10));


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
});})(c__27336__auto__))
;
return ((function (switch__27169__auto__,c__27336__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27170__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27170__auto____0 = (function (){
var statearr_29703 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29703[(0)] = cljs$core$async$reduce_$_state_machine__27170__auto__);

(statearr_29703[(1)] = (1));

return statearr_29703;
});
var cljs$core$async$reduce_$_state_machine__27170__auto____1 = (function (state_29687){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_29687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e29704){if((e29704 instanceof Object)){
var ex__27173__auto__ = e29704;
var statearr_29705_29717 = state_29687;
(statearr_29705_29717[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29718 = state_29687;
state_29687 = G__29718;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27170__auto__ = function(state_29687){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27170__auto____1.call(this,state_29687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27170__auto____0;
cljs$core$async$reduce_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27170__auto____1;
return cljs$core$async$reduce_$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto__))
})();
var state__27338__auto__ = (function (){var statearr_29706 = f__27337__auto__.call(null);
(statearr_29706[(6)] = c__27336__auto__);

return statearr_29706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__))
);

return c__27336__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__,f__$1){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto__,f__$1){
return (function (state_29724){
var state_val_29725 = (state_29724[(1)]);
if((state_val_29725 === (1))){
var inst_29719 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29724__$1 = state_29724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29724__$1,(2),inst_29719);
} else {
if((state_val_29725 === (2))){
var inst_29721 = (state_29724[(2)]);
var inst_29722 = f__$1.call(null,inst_29721);
var state_29724__$1 = state_29724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29724__$1,inst_29722);
} else {
return null;
}
}
});})(c__27336__auto__,f__$1))
;
return ((function (switch__27169__auto__,c__27336__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27170__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27170__auto____0 = (function (){
var statearr_29726 = [null,null,null,null,null,null,null];
(statearr_29726[(0)] = cljs$core$async$transduce_$_state_machine__27170__auto__);

(statearr_29726[(1)] = (1));

return statearr_29726;
});
var cljs$core$async$transduce_$_state_machine__27170__auto____1 = (function (state_29724){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_29724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e29727){if((e29727 instanceof Object)){
var ex__27173__auto__ = e29727;
var statearr_29728_29730 = state_29724;
(statearr_29728_29730[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29731 = state_29724;
state_29724 = G__29731;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27170__auto__ = function(state_29724){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27170__auto____1.call(this,state_29724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27170__auto____0;
cljs$core$async$transduce_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27170__auto____1;
return cljs$core$async$transduce_$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto__,f__$1))
})();
var state__27338__auto__ = (function (){var statearr_29729 = f__27337__auto__.call(null);
(statearr_29729[(6)] = c__27336__auto__);

return statearr_29729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__,f__$1))
);

return c__27336__auto__;
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
var G__29733 = arguments.length;
switch (G__29733) {
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
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto__){
return (function (state_29758){
var state_val_29759 = (state_29758[(1)]);
if((state_val_29759 === (7))){
var inst_29740 = (state_29758[(2)]);
var state_29758__$1 = state_29758;
var statearr_29760_29781 = state_29758__$1;
(statearr_29760_29781[(2)] = inst_29740);

(statearr_29760_29781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (1))){
var inst_29734 = cljs.core.seq.call(null,coll);
var inst_29735 = inst_29734;
var state_29758__$1 = (function (){var statearr_29761 = state_29758;
(statearr_29761[(7)] = inst_29735);

return statearr_29761;
})();
var statearr_29762_29782 = state_29758__$1;
(statearr_29762_29782[(2)] = null);

(statearr_29762_29782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (4))){
var inst_29735 = (state_29758[(7)]);
var inst_29738 = cljs.core.first.call(null,inst_29735);
var state_29758__$1 = state_29758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29758__$1,(7),ch,inst_29738);
} else {
if((state_val_29759 === (13))){
var inst_29752 = (state_29758[(2)]);
var state_29758__$1 = state_29758;
var statearr_29763_29783 = state_29758__$1;
(statearr_29763_29783[(2)] = inst_29752);

(statearr_29763_29783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (6))){
var inst_29743 = (state_29758[(2)]);
var state_29758__$1 = state_29758;
if(cljs.core.truth_(inst_29743)){
var statearr_29764_29784 = state_29758__$1;
(statearr_29764_29784[(1)] = (8));

} else {
var statearr_29765_29785 = state_29758__$1;
(statearr_29765_29785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (3))){
var inst_29756 = (state_29758[(2)]);
var state_29758__$1 = state_29758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29758__$1,inst_29756);
} else {
if((state_val_29759 === (12))){
var state_29758__$1 = state_29758;
var statearr_29766_29786 = state_29758__$1;
(statearr_29766_29786[(2)] = null);

(statearr_29766_29786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (2))){
var inst_29735 = (state_29758[(7)]);
var state_29758__$1 = state_29758;
if(cljs.core.truth_(inst_29735)){
var statearr_29767_29787 = state_29758__$1;
(statearr_29767_29787[(1)] = (4));

} else {
var statearr_29768_29788 = state_29758__$1;
(statearr_29768_29788[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (11))){
var inst_29749 = cljs.core.async.close_BANG_.call(null,ch);
var state_29758__$1 = state_29758;
var statearr_29769_29789 = state_29758__$1;
(statearr_29769_29789[(2)] = inst_29749);

(statearr_29769_29789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (9))){
var state_29758__$1 = state_29758;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29770_29790 = state_29758__$1;
(statearr_29770_29790[(1)] = (11));

} else {
var statearr_29771_29791 = state_29758__$1;
(statearr_29771_29791[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (5))){
var inst_29735 = (state_29758[(7)]);
var state_29758__$1 = state_29758;
var statearr_29772_29792 = state_29758__$1;
(statearr_29772_29792[(2)] = inst_29735);

(statearr_29772_29792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (10))){
var inst_29754 = (state_29758[(2)]);
var state_29758__$1 = state_29758;
var statearr_29773_29793 = state_29758__$1;
(statearr_29773_29793[(2)] = inst_29754);

(statearr_29773_29793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (8))){
var inst_29735 = (state_29758[(7)]);
var inst_29745 = cljs.core.next.call(null,inst_29735);
var inst_29735__$1 = inst_29745;
var state_29758__$1 = (function (){var statearr_29774 = state_29758;
(statearr_29774[(7)] = inst_29735__$1);

return statearr_29774;
})();
var statearr_29775_29794 = state_29758__$1;
(statearr_29775_29794[(2)] = null);

(statearr_29775_29794[(1)] = (2));


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
});})(c__27336__auto__))
;
return ((function (switch__27169__auto__,c__27336__auto__){
return (function() {
var cljs$core$async$state_machine__27170__auto__ = null;
var cljs$core$async$state_machine__27170__auto____0 = (function (){
var statearr_29776 = [null,null,null,null,null,null,null,null];
(statearr_29776[(0)] = cljs$core$async$state_machine__27170__auto__);

(statearr_29776[(1)] = (1));

return statearr_29776;
});
var cljs$core$async$state_machine__27170__auto____1 = (function (state_29758){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_29758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e29777){if((e29777 instanceof Object)){
var ex__27173__auto__ = e29777;
var statearr_29778_29795 = state_29758;
(statearr_29778_29795[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29796 = state_29758;
state_29758 = G__29796;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$state_machine__27170__auto__ = function(state_29758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27170__auto____1.call(this,state_29758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27170__auto____0;
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27170__auto____1;
return cljs$core$async$state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto__))
})();
var state__27338__auto__ = (function (){var statearr_29779 = f__27337__auto__.call(null);
(statearr_29779[(6)] = c__27336__auto__);

return statearr_29779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__))
);

return c__27336__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29797 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29797 = (function (ch,cs,meta29798){
this.ch = ch;
this.cs = cs;
this.meta29798 = meta29798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29799,meta29798__$1){
var self__ = this;
var _29799__$1 = this;
return (new cljs.core.async.t_cljs$core$async29797(self__.ch,self__.cs,meta29798__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29799){
var self__ = this;
var _29799__$1 = this;
return self__.meta29798;
});})(cs))
;

cljs.core.async.t_cljs$core$async29797.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29797.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29797.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29797.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29797.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29797.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29798","meta29798",-320462391,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29797";

cljs.core.async.t_cljs$core$async29797.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29797");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29797.
 */
cljs.core.async.__GT_t_cljs$core$async29797 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29797(ch__$1,cs__$1,meta29798){
return (new cljs.core.async.t_cljs$core$async29797(ch__$1,cs__$1,meta29798));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29797(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27336__auto___30019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___30019,cs,m,dchan,dctr,done){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___30019,cs,m,dchan,dctr,done){
return (function (state_29934){
var state_val_29935 = (state_29934[(1)]);
if((state_val_29935 === (7))){
var inst_29930 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29936_30020 = state_29934__$1;
(statearr_29936_30020[(2)] = inst_29930);

(statearr_29936_30020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (20))){
var inst_29833 = (state_29934[(7)]);
var inst_29845 = cljs.core.first.call(null,inst_29833);
var inst_29846 = cljs.core.nth.call(null,inst_29845,(0),null);
var inst_29847 = cljs.core.nth.call(null,inst_29845,(1),null);
var state_29934__$1 = (function (){var statearr_29937 = state_29934;
(statearr_29937[(8)] = inst_29846);

return statearr_29937;
})();
if(cljs.core.truth_(inst_29847)){
var statearr_29938_30021 = state_29934__$1;
(statearr_29938_30021[(1)] = (22));

} else {
var statearr_29939_30022 = state_29934__$1;
(statearr_29939_30022[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (27))){
var inst_29875 = (state_29934[(9)]);
var inst_29882 = (state_29934[(10)]);
var inst_29877 = (state_29934[(11)]);
var inst_29802 = (state_29934[(12)]);
var inst_29882__$1 = cljs.core._nth.call(null,inst_29875,inst_29877);
var inst_29883 = cljs.core.async.put_BANG_.call(null,inst_29882__$1,inst_29802,done);
var state_29934__$1 = (function (){var statearr_29940 = state_29934;
(statearr_29940[(10)] = inst_29882__$1);

return statearr_29940;
})();
if(cljs.core.truth_(inst_29883)){
var statearr_29941_30023 = state_29934__$1;
(statearr_29941_30023[(1)] = (30));

} else {
var statearr_29942_30024 = state_29934__$1;
(statearr_29942_30024[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (1))){
var state_29934__$1 = state_29934;
var statearr_29943_30025 = state_29934__$1;
(statearr_29943_30025[(2)] = null);

(statearr_29943_30025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (24))){
var inst_29833 = (state_29934[(7)]);
var inst_29852 = (state_29934[(2)]);
var inst_29853 = cljs.core.next.call(null,inst_29833);
var inst_29811 = inst_29853;
var inst_29812 = null;
var inst_29813 = (0);
var inst_29814 = (0);
var state_29934__$1 = (function (){var statearr_29944 = state_29934;
(statearr_29944[(13)] = inst_29812);

(statearr_29944[(14)] = inst_29813);

(statearr_29944[(15)] = inst_29852);

(statearr_29944[(16)] = inst_29814);

(statearr_29944[(17)] = inst_29811);

return statearr_29944;
})();
var statearr_29945_30026 = state_29934__$1;
(statearr_29945_30026[(2)] = null);

(statearr_29945_30026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (39))){
var state_29934__$1 = state_29934;
var statearr_29949_30027 = state_29934__$1;
(statearr_29949_30027[(2)] = null);

(statearr_29949_30027[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (4))){
var inst_29802 = (state_29934[(12)]);
var inst_29802__$1 = (state_29934[(2)]);
var inst_29803 = (inst_29802__$1 == null);
var state_29934__$1 = (function (){var statearr_29950 = state_29934;
(statearr_29950[(12)] = inst_29802__$1);

return statearr_29950;
})();
if(cljs.core.truth_(inst_29803)){
var statearr_29951_30028 = state_29934__$1;
(statearr_29951_30028[(1)] = (5));

} else {
var statearr_29952_30029 = state_29934__$1;
(statearr_29952_30029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (15))){
var inst_29812 = (state_29934[(13)]);
var inst_29813 = (state_29934[(14)]);
var inst_29814 = (state_29934[(16)]);
var inst_29811 = (state_29934[(17)]);
var inst_29829 = (state_29934[(2)]);
var inst_29830 = (inst_29814 + (1));
var tmp29946 = inst_29812;
var tmp29947 = inst_29813;
var tmp29948 = inst_29811;
var inst_29811__$1 = tmp29948;
var inst_29812__$1 = tmp29946;
var inst_29813__$1 = tmp29947;
var inst_29814__$1 = inst_29830;
var state_29934__$1 = (function (){var statearr_29953 = state_29934;
(statearr_29953[(13)] = inst_29812__$1);

(statearr_29953[(18)] = inst_29829);

(statearr_29953[(14)] = inst_29813__$1);

(statearr_29953[(16)] = inst_29814__$1);

(statearr_29953[(17)] = inst_29811__$1);

return statearr_29953;
})();
var statearr_29954_30030 = state_29934__$1;
(statearr_29954_30030[(2)] = null);

(statearr_29954_30030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (21))){
var inst_29856 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29958_30031 = state_29934__$1;
(statearr_29958_30031[(2)] = inst_29856);

(statearr_29958_30031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (31))){
var inst_29882 = (state_29934[(10)]);
var inst_29886 = done.call(null,null);
var inst_29887 = cljs.core.async.untap_STAR_.call(null,m,inst_29882);
var state_29934__$1 = (function (){var statearr_29959 = state_29934;
(statearr_29959[(19)] = inst_29886);

return statearr_29959;
})();
var statearr_29960_30032 = state_29934__$1;
(statearr_29960_30032[(2)] = inst_29887);

(statearr_29960_30032[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (32))){
var inst_29876 = (state_29934[(20)]);
var inst_29875 = (state_29934[(9)]);
var inst_29874 = (state_29934[(21)]);
var inst_29877 = (state_29934[(11)]);
var inst_29889 = (state_29934[(2)]);
var inst_29890 = (inst_29877 + (1));
var tmp29955 = inst_29876;
var tmp29956 = inst_29875;
var tmp29957 = inst_29874;
var inst_29874__$1 = tmp29957;
var inst_29875__$1 = tmp29956;
var inst_29876__$1 = tmp29955;
var inst_29877__$1 = inst_29890;
var state_29934__$1 = (function (){var statearr_29961 = state_29934;
(statearr_29961[(20)] = inst_29876__$1);

(statearr_29961[(9)] = inst_29875__$1);

(statearr_29961[(21)] = inst_29874__$1);

(statearr_29961[(22)] = inst_29889);

(statearr_29961[(11)] = inst_29877__$1);

return statearr_29961;
})();
var statearr_29962_30033 = state_29934__$1;
(statearr_29962_30033[(2)] = null);

(statearr_29962_30033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (40))){
var inst_29902 = (state_29934[(23)]);
var inst_29906 = done.call(null,null);
var inst_29907 = cljs.core.async.untap_STAR_.call(null,m,inst_29902);
var state_29934__$1 = (function (){var statearr_29963 = state_29934;
(statearr_29963[(24)] = inst_29906);

return statearr_29963;
})();
var statearr_29964_30034 = state_29934__$1;
(statearr_29964_30034[(2)] = inst_29907);

(statearr_29964_30034[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (33))){
var inst_29893 = (state_29934[(25)]);
var inst_29895 = cljs.core.chunked_seq_QMARK_.call(null,inst_29893);
var state_29934__$1 = state_29934;
if(inst_29895){
var statearr_29965_30035 = state_29934__$1;
(statearr_29965_30035[(1)] = (36));

} else {
var statearr_29966_30036 = state_29934__$1;
(statearr_29966_30036[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (13))){
var inst_29823 = (state_29934[(26)]);
var inst_29826 = cljs.core.async.close_BANG_.call(null,inst_29823);
var state_29934__$1 = state_29934;
var statearr_29967_30037 = state_29934__$1;
(statearr_29967_30037[(2)] = inst_29826);

(statearr_29967_30037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (22))){
var inst_29846 = (state_29934[(8)]);
var inst_29849 = cljs.core.async.close_BANG_.call(null,inst_29846);
var state_29934__$1 = state_29934;
var statearr_29968_30038 = state_29934__$1;
(statearr_29968_30038[(2)] = inst_29849);

(statearr_29968_30038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (36))){
var inst_29893 = (state_29934[(25)]);
var inst_29897 = cljs.core.chunk_first.call(null,inst_29893);
var inst_29898 = cljs.core.chunk_rest.call(null,inst_29893);
var inst_29899 = cljs.core.count.call(null,inst_29897);
var inst_29874 = inst_29898;
var inst_29875 = inst_29897;
var inst_29876 = inst_29899;
var inst_29877 = (0);
var state_29934__$1 = (function (){var statearr_29969 = state_29934;
(statearr_29969[(20)] = inst_29876);

(statearr_29969[(9)] = inst_29875);

(statearr_29969[(21)] = inst_29874);

(statearr_29969[(11)] = inst_29877);

return statearr_29969;
})();
var statearr_29970_30039 = state_29934__$1;
(statearr_29970_30039[(2)] = null);

(statearr_29970_30039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (41))){
var inst_29893 = (state_29934[(25)]);
var inst_29909 = (state_29934[(2)]);
var inst_29910 = cljs.core.next.call(null,inst_29893);
var inst_29874 = inst_29910;
var inst_29875 = null;
var inst_29876 = (0);
var inst_29877 = (0);
var state_29934__$1 = (function (){var statearr_29971 = state_29934;
(statearr_29971[(20)] = inst_29876);

(statearr_29971[(27)] = inst_29909);

(statearr_29971[(9)] = inst_29875);

(statearr_29971[(21)] = inst_29874);

(statearr_29971[(11)] = inst_29877);

return statearr_29971;
})();
var statearr_29972_30040 = state_29934__$1;
(statearr_29972_30040[(2)] = null);

(statearr_29972_30040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (43))){
var state_29934__$1 = state_29934;
var statearr_29973_30041 = state_29934__$1;
(statearr_29973_30041[(2)] = null);

(statearr_29973_30041[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (29))){
var inst_29918 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29974_30042 = state_29934__$1;
(statearr_29974_30042[(2)] = inst_29918);

(statearr_29974_30042[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (44))){
var inst_29927 = (state_29934[(2)]);
var state_29934__$1 = (function (){var statearr_29975 = state_29934;
(statearr_29975[(28)] = inst_29927);

return statearr_29975;
})();
var statearr_29976_30043 = state_29934__$1;
(statearr_29976_30043[(2)] = null);

(statearr_29976_30043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (6))){
var inst_29866 = (state_29934[(29)]);
var inst_29865 = cljs.core.deref.call(null,cs);
var inst_29866__$1 = cljs.core.keys.call(null,inst_29865);
var inst_29867 = cljs.core.count.call(null,inst_29866__$1);
var inst_29868 = cljs.core.reset_BANG_.call(null,dctr,inst_29867);
var inst_29873 = cljs.core.seq.call(null,inst_29866__$1);
var inst_29874 = inst_29873;
var inst_29875 = null;
var inst_29876 = (0);
var inst_29877 = (0);
var state_29934__$1 = (function (){var statearr_29977 = state_29934;
(statearr_29977[(20)] = inst_29876);

(statearr_29977[(9)] = inst_29875);

(statearr_29977[(21)] = inst_29874);

(statearr_29977[(29)] = inst_29866__$1);

(statearr_29977[(11)] = inst_29877);

(statearr_29977[(30)] = inst_29868);

return statearr_29977;
})();
var statearr_29978_30044 = state_29934__$1;
(statearr_29978_30044[(2)] = null);

(statearr_29978_30044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (28))){
var inst_29874 = (state_29934[(21)]);
var inst_29893 = (state_29934[(25)]);
var inst_29893__$1 = cljs.core.seq.call(null,inst_29874);
var state_29934__$1 = (function (){var statearr_29979 = state_29934;
(statearr_29979[(25)] = inst_29893__$1);

return statearr_29979;
})();
if(inst_29893__$1){
var statearr_29980_30045 = state_29934__$1;
(statearr_29980_30045[(1)] = (33));

} else {
var statearr_29981_30046 = state_29934__$1;
(statearr_29981_30046[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (25))){
var inst_29876 = (state_29934[(20)]);
var inst_29877 = (state_29934[(11)]);
var inst_29879 = (inst_29877 < inst_29876);
var inst_29880 = inst_29879;
var state_29934__$1 = state_29934;
if(cljs.core.truth_(inst_29880)){
var statearr_29982_30047 = state_29934__$1;
(statearr_29982_30047[(1)] = (27));

} else {
var statearr_29983_30048 = state_29934__$1;
(statearr_29983_30048[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (34))){
var state_29934__$1 = state_29934;
var statearr_29984_30049 = state_29934__$1;
(statearr_29984_30049[(2)] = null);

(statearr_29984_30049[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (17))){
var state_29934__$1 = state_29934;
var statearr_29985_30050 = state_29934__$1;
(statearr_29985_30050[(2)] = null);

(statearr_29985_30050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (3))){
var inst_29932 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29934__$1,inst_29932);
} else {
if((state_val_29935 === (12))){
var inst_29861 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29986_30051 = state_29934__$1;
(statearr_29986_30051[(2)] = inst_29861);

(statearr_29986_30051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (2))){
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29934__$1,(4),ch);
} else {
if((state_val_29935 === (23))){
var state_29934__$1 = state_29934;
var statearr_29987_30052 = state_29934__$1;
(statearr_29987_30052[(2)] = null);

(statearr_29987_30052[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (35))){
var inst_29916 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29988_30053 = state_29934__$1;
(statearr_29988_30053[(2)] = inst_29916);

(statearr_29988_30053[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (19))){
var inst_29833 = (state_29934[(7)]);
var inst_29837 = cljs.core.chunk_first.call(null,inst_29833);
var inst_29838 = cljs.core.chunk_rest.call(null,inst_29833);
var inst_29839 = cljs.core.count.call(null,inst_29837);
var inst_29811 = inst_29838;
var inst_29812 = inst_29837;
var inst_29813 = inst_29839;
var inst_29814 = (0);
var state_29934__$1 = (function (){var statearr_29989 = state_29934;
(statearr_29989[(13)] = inst_29812);

(statearr_29989[(14)] = inst_29813);

(statearr_29989[(16)] = inst_29814);

(statearr_29989[(17)] = inst_29811);

return statearr_29989;
})();
var statearr_29990_30054 = state_29934__$1;
(statearr_29990_30054[(2)] = null);

(statearr_29990_30054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (11))){
var inst_29833 = (state_29934[(7)]);
var inst_29811 = (state_29934[(17)]);
var inst_29833__$1 = cljs.core.seq.call(null,inst_29811);
var state_29934__$1 = (function (){var statearr_29991 = state_29934;
(statearr_29991[(7)] = inst_29833__$1);

return statearr_29991;
})();
if(inst_29833__$1){
var statearr_29992_30055 = state_29934__$1;
(statearr_29992_30055[(1)] = (16));

} else {
var statearr_29993_30056 = state_29934__$1;
(statearr_29993_30056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (9))){
var inst_29863 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29994_30057 = state_29934__$1;
(statearr_29994_30057[(2)] = inst_29863);

(statearr_29994_30057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (5))){
var inst_29809 = cljs.core.deref.call(null,cs);
var inst_29810 = cljs.core.seq.call(null,inst_29809);
var inst_29811 = inst_29810;
var inst_29812 = null;
var inst_29813 = (0);
var inst_29814 = (0);
var state_29934__$1 = (function (){var statearr_29995 = state_29934;
(statearr_29995[(13)] = inst_29812);

(statearr_29995[(14)] = inst_29813);

(statearr_29995[(16)] = inst_29814);

(statearr_29995[(17)] = inst_29811);

return statearr_29995;
})();
var statearr_29996_30058 = state_29934__$1;
(statearr_29996_30058[(2)] = null);

(statearr_29996_30058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (14))){
var state_29934__$1 = state_29934;
var statearr_29997_30059 = state_29934__$1;
(statearr_29997_30059[(2)] = null);

(statearr_29997_30059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (45))){
var inst_29924 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29998_30060 = state_29934__$1;
(statearr_29998_30060[(2)] = inst_29924);

(statearr_29998_30060[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (26))){
var inst_29866 = (state_29934[(29)]);
var inst_29920 = (state_29934[(2)]);
var inst_29921 = cljs.core.seq.call(null,inst_29866);
var state_29934__$1 = (function (){var statearr_29999 = state_29934;
(statearr_29999[(31)] = inst_29920);

return statearr_29999;
})();
if(inst_29921){
var statearr_30000_30061 = state_29934__$1;
(statearr_30000_30061[(1)] = (42));

} else {
var statearr_30001_30062 = state_29934__$1;
(statearr_30001_30062[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (16))){
var inst_29833 = (state_29934[(7)]);
var inst_29835 = cljs.core.chunked_seq_QMARK_.call(null,inst_29833);
var state_29934__$1 = state_29934;
if(inst_29835){
var statearr_30002_30063 = state_29934__$1;
(statearr_30002_30063[(1)] = (19));

} else {
var statearr_30003_30064 = state_29934__$1;
(statearr_30003_30064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (38))){
var inst_29913 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_30004_30065 = state_29934__$1;
(statearr_30004_30065[(2)] = inst_29913);

(statearr_30004_30065[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (30))){
var state_29934__$1 = state_29934;
var statearr_30005_30066 = state_29934__$1;
(statearr_30005_30066[(2)] = null);

(statearr_30005_30066[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (10))){
var inst_29812 = (state_29934[(13)]);
var inst_29814 = (state_29934[(16)]);
var inst_29822 = cljs.core._nth.call(null,inst_29812,inst_29814);
var inst_29823 = cljs.core.nth.call(null,inst_29822,(0),null);
var inst_29824 = cljs.core.nth.call(null,inst_29822,(1),null);
var state_29934__$1 = (function (){var statearr_30006 = state_29934;
(statearr_30006[(26)] = inst_29823);

return statearr_30006;
})();
if(cljs.core.truth_(inst_29824)){
var statearr_30007_30067 = state_29934__$1;
(statearr_30007_30067[(1)] = (13));

} else {
var statearr_30008_30068 = state_29934__$1;
(statearr_30008_30068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (18))){
var inst_29859 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_30009_30069 = state_29934__$1;
(statearr_30009_30069[(2)] = inst_29859);

(statearr_30009_30069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (42))){
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29934__$1,(45),dchan);
} else {
if((state_val_29935 === (37))){
var inst_29893 = (state_29934[(25)]);
var inst_29902 = (state_29934[(23)]);
var inst_29802 = (state_29934[(12)]);
var inst_29902__$1 = cljs.core.first.call(null,inst_29893);
var inst_29903 = cljs.core.async.put_BANG_.call(null,inst_29902__$1,inst_29802,done);
var state_29934__$1 = (function (){var statearr_30010 = state_29934;
(statearr_30010[(23)] = inst_29902__$1);

return statearr_30010;
})();
if(cljs.core.truth_(inst_29903)){
var statearr_30011_30070 = state_29934__$1;
(statearr_30011_30070[(1)] = (39));

} else {
var statearr_30012_30071 = state_29934__$1;
(statearr_30012_30071[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (8))){
var inst_29813 = (state_29934[(14)]);
var inst_29814 = (state_29934[(16)]);
var inst_29816 = (inst_29814 < inst_29813);
var inst_29817 = inst_29816;
var state_29934__$1 = state_29934;
if(cljs.core.truth_(inst_29817)){
var statearr_30013_30072 = state_29934__$1;
(statearr_30013_30072[(1)] = (10));

} else {
var statearr_30014_30073 = state_29934__$1;
(statearr_30014_30073[(1)] = (11));

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
});})(c__27336__auto___30019,cs,m,dchan,dctr,done))
;
return ((function (switch__27169__auto__,c__27336__auto___30019,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27170__auto__ = null;
var cljs$core$async$mult_$_state_machine__27170__auto____0 = (function (){
var statearr_30015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30015[(0)] = cljs$core$async$mult_$_state_machine__27170__auto__);

(statearr_30015[(1)] = (1));

return statearr_30015;
});
var cljs$core$async$mult_$_state_machine__27170__auto____1 = (function (state_29934){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_29934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e30016){if((e30016 instanceof Object)){
var ex__27173__auto__ = e30016;
var statearr_30017_30074 = state_29934;
(statearr_30017_30074[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30075 = state_29934;
state_29934 = G__30075;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27170__auto__ = function(state_29934){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27170__auto____1.call(this,state_29934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27170__auto____0;
cljs$core$async$mult_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27170__auto____1;
return cljs$core$async$mult_$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___30019,cs,m,dchan,dctr,done))
})();
var state__27338__auto__ = (function (){var statearr_30018 = f__27337__auto__.call(null);
(statearr_30018[(6)] = c__27336__auto___30019);

return statearr_30018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___30019,cs,m,dchan,dctr,done))
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
var G__30077 = arguments.length;
switch (G__30077) {
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
var len__4730__auto___30089 = arguments.length;
var i__4731__auto___30090 = (0);
while(true){
if((i__4731__auto___30090 < len__4730__auto___30089)){
args__4736__auto__.push((arguments[i__4731__auto___30090]));

var G__30091 = (i__4731__auto___30090 + (1));
i__4731__auto___30090 = G__30091;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30083){
var map__30084 = p__30083;
var map__30084__$1 = (((((!((map__30084 == null))))?(((((map__30084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30084):map__30084);
var opts = map__30084__$1;
var statearr_30086_30092 = state;
(statearr_30086_30092[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__30084,map__30084__$1,opts){
return (function (val){
var statearr_30087_30093 = state;
(statearr_30087_30093[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30084,map__30084__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_30088_30094 = state;
(statearr_30088_30094[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30079){
var G__30080 = cljs.core.first.call(null,seq30079);
var seq30079__$1 = cljs.core.next.call(null,seq30079);
var G__30081 = cljs.core.first.call(null,seq30079__$1);
var seq30079__$2 = cljs.core.next.call(null,seq30079__$1);
var G__30082 = cljs.core.first.call(null,seq30079__$2);
var seq30079__$3 = cljs.core.next.call(null,seq30079__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30080,G__30081,G__30082,seq30079__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30095 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30096){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30096 = meta30096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30097,meta30096__$1){
var self__ = this;
var _30097__$1 = this;
return (new cljs.core.async.t_cljs$core$async30095(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30096__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30097){
var self__ = this;
var _30097__$1 = this;
return self__.meta30096;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30095.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30095.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30095.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30095.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30095.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30095.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30095.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30095.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30096","meta30096",-1514463855,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30095";

cljs.core.async.t_cljs$core$async30095.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30095");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30095.
 */
cljs.core.async.__GT_t_cljs$core$async30095 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30095(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30096){
return (new cljs.core.async.t_cljs$core$async30095(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30096));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30095(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27336__auto___30259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___30259,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___30259,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30199){
var state_val_30200 = (state_30199[(1)]);
if((state_val_30200 === (7))){
var inst_30114 = (state_30199[(2)]);
var state_30199__$1 = state_30199;
var statearr_30201_30260 = state_30199__$1;
(statearr_30201_30260[(2)] = inst_30114);

(statearr_30201_30260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (20))){
var inst_30126 = (state_30199[(7)]);
var state_30199__$1 = state_30199;
var statearr_30202_30261 = state_30199__$1;
(statearr_30202_30261[(2)] = inst_30126);

(statearr_30202_30261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (27))){
var state_30199__$1 = state_30199;
var statearr_30203_30262 = state_30199__$1;
(statearr_30203_30262[(2)] = null);

(statearr_30203_30262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (1))){
var inst_30101 = (state_30199[(8)]);
var inst_30101__$1 = calc_state.call(null);
var inst_30103 = (inst_30101__$1 == null);
var inst_30104 = cljs.core.not.call(null,inst_30103);
var state_30199__$1 = (function (){var statearr_30204 = state_30199;
(statearr_30204[(8)] = inst_30101__$1);

return statearr_30204;
})();
if(inst_30104){
var statearr_30205_30263 = state_30199__$1;
(statearr_30205_30263[(1)] = (2));

} else {
var statearr_30206_30264 = state_30199__$1;
(statearr_30206_30264[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (24))){
var inst_30150 = (state_30199[(9)]);
var inst_30159 = (state_30199[(10)]);
var inst_30173 = (state_30199[(11)]);
var inst_30173__$1 = inst_30150.call(null,inst_30159);
var state_30199__$1 = (function (){var statearr_30207 = state_30199;
(statearr_30207[(11)] = inst_30173__$1);

return statearr_30207;
})();
if(cljs.core.truth_(inst_30173__$1)){
var statearr_30208_30265 = state_30199__$1;
(statearr_30208_30265[(1)] = (29));

} else {
var statearr_30209_30266 = state_30199__$1;
(statearr_30209_30266[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (4))){
var inst_30117 = (state_30199[(2)]);
var state_30199__$1 = state_30199;
if(cljs.core.truth_(inst_30117)){
var statearr_30210_30267 = state_30199__$1;
(statearr_30210_30267[(1)] = (8));

} else {
var statearr_30211_30268 = state_30199__$1;
(statearr_30211_30268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (15))){
var inst_30144 = (state_30199[(2)]);
var state_30199__$1 = state_30199;
if(cljs.core.truth_(inst_30144)){
var statearr_30212_30269 = state_30199__$1;
(statearr_30212_30269[(1)] = (19));

} else {
var statearr_30213_30270 = state_30199__$1;
(statearr_30213_30270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (21))){
var inst_30149 = (state_30199[(12)]);
var inst_30149__$1 = (state_30199[(2)]);
var inst_30150 = cljs.core.get.call(null,inst_30149__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30151 = cljs.core.get.call(null,inst_30149__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30152 = cljs.core.get.call(null,inst_30149__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30199__$1 = (function (){var statearr_30214 = state_30199;
(statearr_30214[(9)] = inst_30150);

(statearr_30214[(12)] = inst_30149__$1);

(statearr_30214[(13)] = inst_30151);

return statearr_30214;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30199__$1,(22),inst_30152);
} else {
if((state_val_30200 === (31))){
var inst_30181 = (state_30199[(2)]);
var state_30199__$1 = state_30199;
if(cljs.core.truth_(inst_30181)){
var statearr_30215_30271 = state_30199__$1;
(statearr_30215_30271[(1)] = (32));

} else {
var statearr_30216_30272 = state_30199__$1;
(statearr_30216_30272[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (32))){
var inst_30158 = (state_30199[(14)]);
var state_30199__$1 = state_30199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30199__$1,(35),out,inst_30158);
} else {
if((state_val_30200 === (33))){
var inst_30149 = (state_30199[(12)]);
var inst_30126 = inst_30149;
var state_30199__$1 = (function (){var statearr_30217 = state_30199;
(statearr_30217[(7)] = inst_30126);

return statearr_30217;
})();
var statearr_30218_30273 = state_30199__$1;
(statearr_30218_30273[(2)] = null);

(statearr_30218_30273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (13))){
var inst_30126 = (state_30199[(7)]);
var inst_30133 = inst_30126.cljs$lang$protocol_mask$partition0$;
var inst_30134 = (inst_30133 & (64));
var inst_30135 = inst_30126.cljs$core$ISeq$;
var inst_30136 = (cljs.core.PROTOCOL_SENTINEL === inst_30135);
var inst_30137 = ((inst_30134) || (inst_30136));
var state_30199__$1 = state_30199;
if(cljs.core.truth_(inst_30137)){
var statearr_30219_30274 = state_30199__$1;
(statearr_30219_30274[(1)] = (16));

} else {
var statearr_30220_30275 = state_30199__$1;
(statearr_30220_30275[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (22))){
var inst_30158 = (state_30199[(14)]);
var inst_30159 = (state_30199[(10)]);
var inst_30157 = (state_30199[(2)]);
var inst_30158__$1 = cljs.core.nth.call(null,inst_30157,(0),null);
var inst_30159__$1 = cljs.core.nth.call(null,inst_30157,(1),null);
var inst_30160 = (inst_30158__$1 == null);
var inst_30161 = cljs.core._EQ_.call(null,inst_30159__$1,change);
var inst_30162 = ((inst_30160) || (inst_30161));
var state_30199__$1 = (function (){var statearr_30221 = state_30199;
(statearr_30221[(14)] = inst_30158__$1);

(statearr_30221[(10)] = inst_30159__$1);

return statearr_30221;
})();
if(cljs.core.truth_(inst_30162)){
var statearr_30222_30276 = state_30199__$1;
(statearr_30222_30276[(1)] = (23));

} else {
var statearr_30223_30277 = state_30199__$1;
(statearr_30223_30277[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (36))){
var inst_30149 = (state_30199[(12)]);
var inst_30126 = inst_30149;
var state_30199__$1 = (function (){var statearr_30224 = state_30199;
(statearr_30224[(7)] = inst_30126);

return statearr_30224;
})();
var statearr_30225_30278 = state_30199__$1;
(statearr_30225_30278[(2)] = null);

(statearr_30225_30278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (29))){
var inst_30173 = (state_30199[(11)]);
var state_30199__$1 = state_30199;
var statearr_30226_30279 = state_30199__$1;
(statearr_30226_30279[(2)] = inst_30173);

(statearr_30226_30279[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (6))){
var state_30199__$1 = state_30199;
var statearr_30227_30280 = state_30199__$1;
(statearr_30227_30280[(2)] = false);

(statearr_30227_30280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (28))){
var inst_30169 = (state_30199[(2)]);
var inst_30170 = calc_state.call(null);
var inst_30126 = inst_30170;
var state_30199__$1 = (function (){var statearr_30228 = state_30199;
(statearr_30228[(15)] = inst_30169);

(statearr_30228[(7)] = inst_30126);

return statearr_30228;
})();
var statearr_30229_30281 = state_30199__$1;
(statearr_30229_30281[(2)] = null);

(statearr_30229_30281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (25))){
var inst_30195 = (state_30199[(2)]);
var state_30199__$1 = state_30199;
var statearr_30230_30282 = state_30199__$1;
(statearr_30230_30282[(2)] = inst_30195);

(statearr_30230_30282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (34))){
var inst_30193 = (state_30199[(2)]);
var state_30199__$1 = state_30199;
var statearr_30231_30283 = state_30199__$1;
(statearr_30231_30283[(2)] = inst_30193);

(statearr_30231_30283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (17))){
var state_30199__$1 = state_30199;
var statearr_30232_30284 = state_30199__$1;
(statearr_30232_30284[(2)] = false);

(statearr_30232_30284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (3))){
var state_30199__$1 = state_30199;
var statearr_30233_30285 = state_30199__$1;
(statearr_30233_30285[(2)] = false);

(statearr_30233_30285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (12))){
var inst_30197 = (state_30199[(2)]);
var state_30199__$1 = state_30199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30199__$1,inst_30197);
} else {
if((state_val_30200 === (2))){
var inst_30101 = (state_30199[(8)]);
var inst_30106 = inst_30101.cljs$lang$protocol_mask$partition0$;
var inst_30107 = (inst_30106 & (64));
var inst_30108 = inst_30101.cljs$core$ISeq$;
var inst_30109 = (cljs.core.PROTOCOL_SENTINEL === inst_30108);
var inst_30110 = ((inst_30107) || (inst_30109));
var state_30199__$1 = state_30199;
if(cljs.core.truth_(inst_30110)){
var statearr_30234_30286 = state_30199__$1;
(statearr_30234_30286[(1)] = (5));

} else {
var statearr_30235_30287 = state_30199__$1;
(statearr_30235_30287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (23))){
var inst_30158 = (state_30199[(14)]);
var inst_30164 = (inst_30158 == null);
var state_30199__$1 = state_30199;
if(cljs.core.truth_(inst_30164)){
var statearr_30236_30288 = state_30199__$1;
(statearr_30236_30288[(1)] = (26));

} else {
var statearr_30237_30289 = state_30199__$1;
(statearr_30237_30289[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (35))){
var inst_30184 = (state_30199[(2)]);
var state_30199__$1 = state_30199;
if(cljs.core.truth_(inst_30184)){
var statearr_30238_30290 = state_30199__$1;
(statearr_30238_30290[(1)] = (36));

} else {
var statearr_30239_30291 = state_30199__$1;
(statearr_30239_30291[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (19))){
var inst_30126 = (state_30199[(7)]);
var inst_30146 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30126);
var state_30199__$1 = state_30199;
var statearr_30240_30292 = state_30199__$1;
(statearr_30240_30292[(2)] = inst_30146);

(statearr_30240_30292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (11))){
var inst_30126 = (state_30199[(7)]);
var inst_30130 = (inst_30126 == null);
var inst_30131 = cljs.core.not.call(null,inst_30130);
var state_30199__$1 = state_30199;
if(inst_30131){
var statearr_30241_30293 = state_30199__$1;
(statearr_30241_30293[(1)] = (13));

} else {
var statearr_30242_30294 = state_30199__$1;
(statearr_30242_30294[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (9))){
var inst_30101 = (state_30199[(8)]);
var state_30199__$1 = state_30199;
var statearr_30243_30295 = state_30199__$1;
(statearr_30243_30295[(2)] = inst_30101);

(statearr_30243_30295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (5))){
var state_30199__$1 = state_30199;
var statearr_30244_30296 = state_30199__$1;
(statearr_30244_30296[(2)] = true);

(statearr_30244_30296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (14))){
var state_30199__$1 = state_30199;
var statearr_30245_30297 = state_30199__$1;
(statearr_30245_30297[(2)] = false);

(statearr_30245_30297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (26))){
var inst_30159 = (state_30199[(10)]);
var inst_30166 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30159);
var state_30199__$1 = state_30199;
var statearr_30246_30298 = state_30199__$1;
(statearr_30246_30298[(2)] = inst_30166);

(statearr_30246_30298[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (16))){
var state_30199__$1 = state_30199;
var statearr_30247_30299 = state_30199__$1;
(statearr_30247_30299[(2)] = true);

(statearr_30247_30299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (38))){
var inst_30189 = (state_30199[(2)]);
var state_30199__$1 = state_30199;
var statearr_30248_30300 = state_30199__$1;
(statearr_30248_30300[(2)] = inst_30189);

(statearr_30248_30300[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (30))){
var inst_30150 = (state_30199[(9)]);
var inst_30159 = (state_30199[(10)]);
var inst_30151 = (state_30199[(13)]);
var inst_30176 = cljs.core.empty_QMARK_.call(null,inst_30150);
var inst_30177 = inst_30151.call(null,inst_30159);
var inst_30178 = cljs.core.not.call(null,inst_30177);
var inst_30179 = ((inst_30176) && (inst_30178));
var state_30199__$1 = state_30199;
var statearr_30249_30301 = state_30199__$1;
(statearr_30249_30301[(2)] = inst_30179);

(statearr_30249_30301[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (10))){
var inst_30101 = (state_30199[(8)]);
var inst_30122 = (state_30199[(2)]);
var inst_30123 = cljs.core.get.call(null,inst_30122,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30124 = cljs.core.get.call(null,inst_30122,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30125 = cljs.core.get.call(null,inst_30122,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30126 = inst_30101;
var state_30199__$1 = (function (){var statearr_30250 = state_30199;
(statearr_30250[(16)] = inst_30124);

(statearr_30250[(17)] = inst_30123);

(statearr_30250[(7)] = inst_30126);

(statearr_30250[(18)] = inst_30125);

return statearr_30250;
})();
var statearr_30251_30302 = state_30199__$1;
(statearr_30251_30302[(2)] = null);

(statearr_30251_30302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (18))){
var inst_30141 = (state_30199[(2)]);
var state_30199__$1 = state_30199;
var statearr_30252_30303 = state_30199__$1;
(statearr_30252_30303[(2)] = inst_30141);

(statearr_30252_30303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (37))){
var state_30199__$1 = state_30199;
var statearr_30253_30304 = state_30199__$1;
(statearr_30253_30304[(2)] = null);

(statearr_30253_30304[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (8))){
var inst_30101 = (state_30199[(8)]);
var inst_30119 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30101);
var state_30199__$1 = state_30199;
var statearr_30254_30305 = state_30199__$1;
(statearr_30254_30305[(2)] = inst_30119);

(statearr_30254_30305[(1)] = (10));


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
});})(c__27336__auto___30259,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27169__auto__,c__27336__auto___30259,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27170__auto__ = null;
var cljs$core$async$mix_$_state_machine__27170__auto____0 = (function (){
var statearr_30255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30255[(0)] = cljs$core$async$mix_$_state_machine__27170__auto__);

(statearr_30255[(1)] = (1));

return statearr_30255;
});
var cljs$core$async$mix_$_state_machine__27170__auto____1 = (function (state_30199){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_30199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e30256){if((e30256 instanceof Object)){
var ex__27173__auto__ = e30256;
var statearr_30257_30306 = state_30199;
(statearr_30257_30306[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30307 = state_30199;
state_30199 = G__30307;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27170__auto__ = function(state_30199){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27170__auto____1.call(this,state_30199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27170__auto____0;
cljs$core$async$mix_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27170__auto____1;
return cljs$core$async$mix_$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___30259,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27338__auto__ = (function (){var statearr_30258 = f__27337__auto__.call(null);
(statearr_30258[(6)] = c__27336__auto___30259);

return statearr_30258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___30259,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__30309 = arguments.length;
switch (G__30309) {
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
var G__30313 = arguments.length;
switch (G__30313) {
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
return (function (p1__30311_SHARP_){
if(cljs.core.truth_(p1__30311_SHARP_.call(null,topic))){
return p1__30311_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30311_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30314 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30315){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30315 = meta30315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30316,meta30315__$1){
var self__ = this;
var _30316__$1 = this;
return (new cljs.core.async.t_cljs$core$async30314(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30315__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30316){
var self__ = this;
var _30316__$1 = this;
return self__.meta30315;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30314.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30315","meta30315",-399857570,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30314.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30314";

cljs.core.async.t_cljs$core$async30314.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30314");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30314.
 */
cljs.core.async.__GT_t_cljs$core$async30314 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30314(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30315){
return (new cljs.core.async.t_cljs$core$async30314(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30315));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30314(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27336__auto___30434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___30434,mults,ensure_mult,p){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___30434,mults,ensure_mult,p){
return (function (state_30388){
var state_val_30389 = (state_30388[(1)]);
if((state_val_30389 === (7))){
var inst_30384 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
var statearr_30390_30435 = state_30388__$1;
(statearr_30390_30435[(2)] = inst_30384);

(statearr_30390_30435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (20))){
var state_30388__$1 = state_30388;
var statearr_30391_30436 = state_30388__$1;
(statearr_30391_30436[(2)] = null);

(statearr_30391_30436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (1))){
var state_30388__$1 = state_30388;
var statearr_30392_30437 = state_30388__$1;
(statearr_30392_30437[(2)] = null);

(statearr_30392_30437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (24))){
var inst_30367 = (state_30388[(7)]);
var inst_30376 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30367);
var state_30388__$1 = state_30388;
var statearr_30393_30438 = state_30388__$1;
(statearr_30393_30438[(2)] = inst_30376);

(statearr_30393_30438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (4))){
var inst_30319 = (state_30388[(8)]);
var inst_30319__$1 = (state_30388[(2)]);
var inst_30320 = (inst_30319__$1 == null);
var state_30388__$1 = (function (){var statearr_30394 = state_30388;
(statearr_30394[(8)] = inst_30319__$1);

return statearr_30394;
})();
if(cljs.core.truth_(inst_30320)){
var statearr_30395_30439 = state_30388__$1;
(statearr_30395_30439[(1)] = (5));

} else {
var statearr_30396_30440 = state_30388__$1;
(statearr_30396_30440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (15))){
var inst_30361 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
var statearr_30397_30441 = state_30388__$1;
(statearr_30397_30441[(2)] = inst_30361);

(statearr_30397_30441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (21))){
var inst_30381 = (state_30388[(2)]);
var state_30388__$1 = (function (){var statearr_30398 = state_30388;
(statearr_30398[(9)] = inst_30381);

return statearr_30398;
})();
var statearr_30399_30442 = state_30388__$1;
(statearr_30399_30442[(2)] = null);

(statearr_30399_30442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (13))){
var inst_30343 = (state_30388[(10)]);
var inst_30345 = cljs.core.chunked_seq_QMARK_.call(null,inst_30343);
var state_30388__$1 = state_30388;
if(inst_30345){
var statearr_30400_30443 = state_30388__$1;
(statearr_30400_30443[(1)] = (16));

} else {
var statearr_30401_30444 = state_30388__$1;
(statearr_30401_30444[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (22))){
var inst_30373 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
if(cljs.core.truth_(inst_30373)){
var statearr_30402_30445 = state_30388__$1;
(statearr_30402_30445[(1)] = (23));

} else {
var statearr_30403_30446 = state_30388__$1;
(statearr_30403_30446[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (6))){
var inst_30369 = (state_30388[(11)]);
var inst_30367 = (state_30388[(7)]);
var inst_30319 = (state_30388[(8)]);
var inst_30367__$1 = topic_fn.call(null,inst_30319);
var inst_30368 = cljs.core.deref.call(null,mults);
var inst_30369__$1 = cljs.core.get.call(null,inst_30368,inst_30367__$1);
var state_30388__$1 = (function (){var statearr_30404 = state_30388;
(statearr_30404[(11)] = inst_30369__$1);

(statearr_30404[(7)] = inst_30367__$1);

return statearr_30404;
})();
if(cljs.core.truth_(inst_30369__$1)){
var statearr_30405_30447 = state_30388__$1;
(statearr_30405_30447[(1)] = (19));

} else {
var statearr_30406_30448 = state_30388__$1;
(statearr_30406_30448[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (25))){
var inst_30378 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
var statearr_30407_30449 = state_30388__$1;
(statearr_30407_30449[(2)] = inst_30378);

(statearr_30407_30449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (17))){
var inst_30343 = (state_30388[(10)]);
var inst_30352 = cljs.core.first.call(null,inst_30343);
var inst_30353 = cljs.core.async.muxch_STAR_.call(null,inst_30352);
var inst_30354 = cljs.core.async.close_BANG_.call(null,inst_30353);
var inst_30355 = cljs.core.next.call(null,inst_30343);
var inst_30329 = inst_30355;
var inst_30330 = null;
var inst_30331 = (0);
var inst_30332 = (0);
var state_30388__$1 = (function (){var statearr_30408 = state_30388;
(statearr_30408[(12)] = inst_30330);

(statearr_30408[(13)] = inst_30354);

(statearr_30408[(14)] = inst_30329);

(statearr_30408[(15)] = inst_30332);

(statearr_30408[(16)] = inst_30331);

return statearr_30408;
})();
var statearr_30409_30450 = state_30388__$1;
(statearr_30409_30450[(2)] = null);

(statearr_30409_30450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (3))){
var inst_30386 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30388__$1,inst_30386);
} else {
if((state_val_30389 === (12))){
var inst_30363 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
var statearr_30410_30451 = state_30388__$1;
(statearr_30410_30451[(2)] = inst_30363);

(statearr_30410_30451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (2))){
var state_30388__$1 = state_30388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30388__$1,(4),ch);
} else {
if((state_val_30389 === (23))){
var state_30388__$1 = state_30388;
var statearr_30411_30452 = state_30388__$1;
(statearr_30411_30452[(2)] = null);

(statearr_30411_30452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (19))){
var inst_30369 = (state_30388[(11)]);
var inst_30319 = (state_30388[(8)]);
var inst_30371 = cljs.core.async.muxch_STAR_.call(null,inst_30369);
var state_30388__$1 = state_30388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30388__$1,(22),inst_30371,inst_30319);
} else {
if((state_val_30389 === (11))){
var inst_30343 = (state_30388[(10)]);
var inst_30329 = (state_30388[(14)]);
var inst_30343__$1 = cljs.core.seq.call(null,inst_30329);
var state_30388__$1 = (function (){var statearr_30412 = state_30388;
(statearr_30412[(10)] = inst_30343__$1);

return statearr_30412;
})();
if(inst_30343__$1){
var statearr_30413_30453 = state_30388__$1;
(statearr_30413_30453[(1)] = (13));

} else {
var statearr_30414_30454 = state_30388__$1;
(statearr_30414_30454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (9))){
var inst_30365 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
var statearr_30415_30455 = state_30388__$1;
(statearr_30415_30455[(2)] = inst_30365);

(statearr_30415_30455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (5))){
var inst_30326 = cljs.core.deref.call(null,mults);
var inst_30327 = cljs.core.vals.call(null,inst_30326);
var inst_30328 = cljs.core.seq.call(null,inst_30327);
var inst_30329 = inst_30328;
var inst_30330 = null;
var inst_30331 = (0);
var inst_30332 = (0);
var state_30388__$1 = (function (){var statearr_30416 = state_30388;
(statearr_30416[(12)] = inst_30330);

(statearr_30416[(14)] = inst_30329);

(statearr_30416[(15)] = inst_30332);

(statearr_30416[(16)] = inst_30331);

return statearr_30416;
})();
var statearr_30417_30456 = state_30388__$1;
(statearr_30417_30456[(2)] = null);

(statearr_30417_30456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (14))){
var state_30388__$1 = state_30388;
var statearr_30421_30457 = state_30388__$1;
(statearr_30421_30457[(2)] = null);

(statearr_30421_30457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (16))){
var inst_30343 = (state_30388[(10)]);
var inst_30347 = cljs.core.chunk_first.call(null,inst_30343);
var inst_30348 = cljs.core.chunk_rest.call(null,inst_30343);
var inst_30349 = cljs.core.count.call(null,inst_30347);
var inst_30329 = inst_30348;
var inst_30330 = inst_30347;
var inst_30331 = inst_30349;
var inst_30332 = (0);
var state_30388__$1 = (function (){var statearr_30422 = state_30388;
(statearr_30422[(12)] = inst_30330);

(statearr_30422[(14)] = inst_30329);

(statearr_30422[(15)] = inst_30332);

(statearr_30422[(16)] = inst_30331);

return statearr_30422;
})();
var statearr_30423_30458 = state_30388__$1;
(statearr_30423_30458[(2)] = null);

(statearr_30423_30458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (10))){
var inst_30330 = (state_30388[(12)]);
var inst_30329 = (state_30388[(14)]);
var inst_30332 = (state_30388[(15)]);
var inst_30331 = (state_30388[(16)]);
var inst_30337 = cljs.core._nth.call(null,inst_30330,inst_30332);
var inst_30338 = cljs.core.async.muxch_STAR_.call(null,inst_30337);
var inst_30339 = cljs.core.async.close_BANG_.call(null,inst_30338);
var inst_30340 = (inst_30332 + (1));
var tmp30418 = inst_30330;
var tmp30419 = inst_30329;
var tmp30420 = inst_30331;
var inst_30329__$1 = tmp30419;
var inst_30330__$1 = tmp30418;
var inst_30331__$1 = tmp30420;
var inst_30332__$1 = inst_30340;
var state_30388__$1 = (function (){var statearr_30424 = state_30388;
(statearr_30424[(17)] = inst_30339);

(statearr_30424[(12)] = inst_30330__$1);

(statearr_30424[(14)] = inst_30329__$1);

(statearr_30424[(15)] = inst_30332__$1);

(statearr_30424[(16)] = inst_30331__$1);

return statearr_30424;
})();
var statearr_30425_30459 = state_30388__$1;
(statearr_30425_30459[(2)] = null);

(statearr_30425_30459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (18))){
var inst_30358 = (state_30388[(2)]);
var state_30388__$1 = state_30388;
var statearr_30426_30460 = state_30388__$1;
(statearr_30426_30460[(2)] = inst_30358);

(statearr_30426_30460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30389 === (8))){
var inst_30332 = (state_30388[(15)]);
var inst_30331 = (state_30388[(16)]);
var inst_30334 = (inst_30332 < inst_30331);
var inst_30335 = inst_30334;
var state_30388__$1 = state_30388;
if(cljs.core.truth_(inst_30335)){
var statearr_30427_30461 = state_30388__$1;
(statearr_30427_30461[(1)] = (10));

} else {
var statearr_30428_30462 = state_30388__$1;
(statearr_30428_30462[(1)] = (11));

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
});})(c__27336__auto___30434,mults,ensure_mult,p))
;
return ((function (switch__27169__auto__,c__27336__auto___30434,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27170__auto__ = null;
var cljs$core$async$state_machine__27170__auto____0 = (function (){
var statearr_30429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30429[(0)] = cljs$core$async$state_machine__27170__auto__);

(statearr_30429[(1)] = (1));

return statearr_30429;
});
var cljs$core$async$state_machine__27170__auto____1 = (function (state_30388){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_30388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e30430){if((e30430 instanceof Object)){
var ex__27173__auto__ = e30430;
var statearr_30431_30463 = state_30388;
(statearr_30431_30463[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30464 = state_30388;
state_30388 = G__30464;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$state_machine__27170__auto__ = function(state_30388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27170__auto____1.call(this,state_30388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27170__auto____0;
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27170__auto____1;
return cljs$core$async$state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___30434,mults,ensure_mult,p))
})();
var state__27338__auto__ = (function (){var statearr_30432 = f__27337__auto__.call(null);
(statearr_30432[(6)] = c__27336__auto___30434);

return statearr_30432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___30434,mults,ensure_mult,p))
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
var G__30466 = arguments.length;
switch (G__30466) {
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
var G__30469 = arguments.length;
switch (G__30469) {
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
var G__30472 = arguments.length;
switch (G__30472) {
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
var c__27336__auto___30539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___30539,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___30539,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30511){
var state_val_30512 = (state_30511[(1)]);
if((state_val_30512 === (7))){
var state_30511__$1 = state_30511;
var statearr_30513_30540 = state_30511__$1;
(statearr_30513_30540[(2)] = null);

(statearr_30513_30540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (1))){
var state_30511__$1 = state_30511;
var statearr_30514_30541 = state_30511__$1;
(statearr_30514_30541[(2)] = null);

(statearr_30514_30541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (4))){
var inst_30475 = (state_30511[(7)]);
var inst_30477 = (inst_30475 < cnt);
var state_30511__$1 = state_30511;
if(cljs.core.truth_(inst_30477)){
var statearr_30515_30542 = state_30511__$1;
(statearr_30515_30542[(1)] = (6));

} else {
var statearr_30516_30543 = state_30511__$1;
(statearr_30516_30543[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (15))){
var inst_30507 = (state_30511[(2)]);
var state_30511__$1 = state_30511;
var statearr_30517_30544 = state_30511__$1;
(statearr_30517_30544[(2)] = inst_30507);

(statearr_30517_30544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (13))){
var inst_30500 = cljs.core.async.close_BANG_.call(null,out);
var state_30511__$1 = state_30511;
var statearr_30518_30545 = state_30511__$1;
(statearr_30518_30545[(2)] = inst_30500);

(statearr_30518_30545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (6))){
var state_30511__$1 = state_30511;
var statearr_30519_30546 = state_30511__$1;
(statearr_30519_30546[(2)] = null);

(statearr_30519_30546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (3))){
var inst_30509 = (state_30511[(2)]);
var state_30511__$1 = state_30511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30511__$1,inst_30509);
} else {
if((state_val_30512 === (12))){
var inst_30497 = (state_30511[(8)]);
var inst_30497__$1 = (state_30511[(2)]);
var inst_30498 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30497__$1);
var state_30511__$1 = (function (){var statearr_30520 = state_30511;
(statearr_30520[(8)] = inst_30497__$1);

return statearr_30520;
})();
if(cljs.core.truth_(inst_30498)){
var statearr_30521_30547 = state_30511__$1;
(statearr_30521_30547[(1)] = (13));

} else {
var statearr_30522_30548 = state_30511__$1;
(statearr_30522_30548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (2))){
var inst_30474 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30475 = (0);
var state_30511__$1 = (function (){var statearr_30523 = state_30511;
(statearr_30523[(9)] = inst_30474);

(statearr_30523[(7)] = inst_30475);

return statearr_30523;
})();
var statearr_30524_30549 = state_30511__$1;
(statearr_30524_30549[(2)] = null);

(statearr_30524_30549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (11))){
var inst_30475 = (state_30511[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30511,(10),Object,null,(9));
var inst_30484 = chs__$1.call(null,inst_30475);
var inst_30485 = done.call(null,inst_30475);
var inst_30486 = cljs.core.async.take_BANG_.call(null,inst_30484,inst_30485);
var state_30511__$1 = state_30511;
var statearr_30525_30550 = state_30511__$1;
(statearr_30525_30550[(2)] = inst_30486);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30511__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (9))){
var inst_30475 = (state_30511[(7)]);
var inst_30488 = (state_30511[(2)]);
var inst_30489 = (inst_30475 + (1));
var inst_30475__$1 = inst_30489;
var state_30511__$1 = (function (){var statearr_30526 = state_30511;
(statearr_30526[(7)] = inst_30475__$1);

(statearr_30526[(10)] = inst_30488);

return statearr_30526;
})();
var statearr_30527_30551 = state_30511__$1;
(statearr_30527_30551[(2)] = null);

(statearr_30527_30551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (5))){
var inst_30495 = (state_30511[(2)]);
var state_30511__$1 = (function (){var statearr_30528 = state_30511;
(statearr_30528[(11)] = inst_30495);

return statearr_30528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30511__$1,(12),dchan);
} else {
if((state_val_30512 === (14))){
var inst_30497 = (state_30511[(8)]);
var inst_30502 = cljs.core.apply.call(null,f,inst_30497);
var state_30511__$1 = state_30511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30511__$1,(16),out,inst_30502);
} else {
if((state_val_30512 === (16))){
var inst_30504 = (state_30511[(2)]);
var state_30511__$1 = (function (){var statearr_30529 = state_30511;
(statearr_30529[(12)] = inst_30504);

return statearr_30529;
})();
var statearr_30530_30552 = state_30511__$1;
(statearr_30530_30552[(2)] = null);

(statearr_30530_30552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (10))){
var inst_30479 = (state_30511[(2)]);
var inst_30480 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30511__$1 = (function (){var statearr_30531 = state_30511;
(statearr_30531[(13)] = inst_30479);

return statearr_30531;
})();
var statearr_30532_30553 = state_30511__$1;
(statearr_30532_30553[(2)] = inst_30480);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30511__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30512 === (8))){
var inst_30493 = (state_30511[(2)]);
var state_30511__$1 = state_30511;
var statearr_30533_30554 = state_30511__$1;
(statearr_30533_30554[(2)] = inst_30493);

(statearr_30533_30554[(1)] = (5));


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
});})(c__27336__auto___30539,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27169__auto__,c__27336__auto___30539,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27170__auto__ = null;
var cljs$core$async$state_machine__27170__auto____0 = (function (){
var statearr_30534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30534[(0)] = cljs$core$async$state_machine__27170__auto__);

(statearr_30534[(1)] = (1));

return statearr_30534;
});
var cljs$core$async$state_machine__27170__auto____1 = (function (state_30511){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_30511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e30535){if((e30535 instanceof Object)){
var ex__27173__auto__ = e30535;
var statearr_30536_30555 = state_30511;
(statearr_30536_30555[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30556 = state_30511;
state_30511 = G__30556;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$state_machine__27170__auto__ = function(state_30511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27170__auto____1.call(this,state_30511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27170__auto____0;
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27170__auto____1;
return cljs$core$async$state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___30539,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27338__auto__ = (function (){var statearr_30537 = f__27337__auto__.call(null);
(statearr_30537[(6)] = c__27336__auto___30539);

return statearr_30537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___30539,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__30559 = arguments.length;
switch (G__30559) {
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
var c__27336__auto___30613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___30613,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___30613,out){
return (function (state_30591){
var state_val_30592 = (state_30591[(1)]);
if((state_val_30592 === (7))){
var inst_30570 = (state_30591[(7)]);
var inst_30571 = (state_30591[(8)]);
var inst_30570__$1 = (state_30591[(2)]);
var inst_30571__$1 = cljs.core.nth.call(null,inst_30570__$1,(0),null);
var inst_30572 = cljs.core.nth.call(null,inst_30570__$1,(1),null);
var inst_30573 = (inst_30571__$1 == null);
var state_30591__$1 = (function (){var statearr_30593 = state_30591;
(statearr_30593[(7)] = inst_30570__$1);

(statearr_30593[(8)] = inst_30571__$1);

(statearr_30593[(9)] = inst_30572);

return statearr_30593;
})();
if(cljs.core.truth_(inst_30573)){
var statearr_30594_30614 = state_30591__$1;
(statearr_30594_30614[(1)] = (8));

} else {
var statearr_30595_30615 = state_30591__$1;
(statearr_30595_30615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (1))){
var inst_30560 = cljs.core.vec.call(null,chs);
var inst_30561 = inst_30560;
var state_30591__$1 = (function (){var statearr_30596 = state_30591;
(statearr_30596[(10)] = inst_30561);

return statearr_30596;
})();
var statearr_30597_30616 = state_30591__$1;
(statearr_30597_30616[(2)] = null);

(statearr_30597_30616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (4))){
var inst_30561 = (state_30591[(10)]);
var state_30591__$1 = state_30591;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30591__$1,(7),inst_30561);
} else {
if((state_val_30592 === (6))){
var inst_30587 = (state_30591[(2)]);
var state_30591__$1 = state_30591;
var statearr_30598_30617 = state_30591__$1;
(statearr_30598_30617[(2)] = inst_30587);

(statearr_30598_30617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (3))){
var inst_30589 = (state_30591[(2)]);
var state_30591__$1 = state_30591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30591__$1,inst_30589);
} else {
if((state_val_30592 === (2))){
var inst_30561 = (state_30591[(10)]);
var inst_30563 = cljs.core.count.call(null,inst_30561);
var inst_30564 = (inst_30563 > (0));
var state_30591__$1 = state_30591;
if(cljs.core.truth_(inst_30564)){
var statearr_30600_30618 = state_30591__$1;
(statearr_30600_30618[(1)] = (4));

} else {
var statearr_30601_30619 = state_30591__$1;
(statearr_30601_30619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (11))){
var inst_30561 = (state_30591[(10)]);
var inst_30580 = (state_30591[(2)]);
var tmp30599 = inst_30561;
var inst_30561__$1 = tmp30599;
var state_30591__$1 = (function (){var statearr_30602 = state_30591;
(statearr_30602[(11)] = inst_30580);

(statearr_30602[(10)] = inst_30561__$1);

return statearr_30602;
})();
var statearr_30603_30620 = state_30591__$1;
(statearr_30603_30620[(2)] = null);

(statearr_30603_30620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (9))){
var inst_30571 = (state_30591[(8)]);
var state_30591__$1 = state_30591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30591__$1,(11),out,inst_30571);
} else {
if((state_val_30592 === (5))){
var inst_30585 = cljs.core.async.close_BANG_.call(null,out);
var state_30591__$1 = state_30591;
var statearr_30604_30621 = state_30591__$1;
(statearr_30604_30621[(2)] = inst_30585);

(statearr_30604_30621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (10))){
var inst_30583 = (state_30591[(2)]);
var state_30591__$1 = state_30591;
var statearr_30605_30622 = state_30591__$1;
(statearr_30605_30622[(2)] = inst_30583);

(statearr_30605_30622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30592 === (8))){
var inst_30570 = (state_30591[(7)]);
var inst_30571 = (state_30591[(8)]);
var inst_30572 = (state_30591[(9)]);
var inst_30561 = (state_30591[(10)]);
var inst_30575 = (function (){var cs = inst_30561;
var vec__30566 = inst_30570;
var v = inst_30571;
var c = inst_30572;
return ((function (cs,vec__30566,v,c,inst_30570,inst_30571,inst_30572,inst_30561,state_val_30592,c__27336__auto___30613,out){
return (function (p1__30557_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30557_SHARP_);
});
;})(cs,vec__30566,v,c,inst_30570,inst_30571,inst_30572,inst_30561,state_val_30592,c__27336__auto___30613,out))
})();
var inst_30576 = cljs.core.filterv.call(null,inst_30575,inst_30561);
var inst_30561__$1 = inst_30576;
var state_30591__$1 = (function (){var statearr_30606 = state_30591;
(statearr_30606[(10)] = inst_30561__$1);

return statearr_30606;
})();
var statearr_30607_30623 = state_30591__$1;
(statearr_30607_30623[(2)] = null);

(statearr_30607_30623[(1)] = (2));


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
});})(c__27336__auto___30613,out))
;
return ((function (switch__27169__auto__,c__27336__auto___30613,out){
return (function() {
var cljs$core$async$state_machine__27170__auto__ = null;
var cljs$core$async$state_machine__27170__auto____0 = (function (){
var statearr_30608 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30608[(0)] = cljs$core$async$state_machine__27170__auto__);

(statearr_30608[(1)] = (1));

return statearr_30608;
});
var cljs$core$async$state_machine__27170__auto____1 = (function (state_30591){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_30591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e30609){if((e30609 instanceof Object)){
var ex__27173__auto__ = e30609;
var statearr_30610_30624 = state_30591;
(statearr_30610_30624[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30625 = state_30591;
state_30591 = G__30625;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$state_machine__27170__auto__ = function(state_30591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27170__auto____1.call(this,state_30591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27170__auto____0;
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27170__auto____1;
return cljs$core$async$state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___30613,out))
})();
var state__27338__auto__ = (function (){var statearr_30611 = f__27337__auto__.call(null);
(statearr_30611[(6)] = c__27336__auto___30613);

return statearr_30611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___30613,out))
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
var G__30627 = arguments.length;
switch (G__30627) {
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
var c__27336__auto___30672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___30672,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___30672,out){
return (function (state_30651){
var state_val_30652 = (state_30651[(1)]);
if((state_val_30652 === (7))){
var inst_30633 = (state_30651[(7)]);
var inst_30633__$1 = (state_30651[(2)]);
var inst_30634 = (inst_30633__$1 == null);
var inst_30635 = cljs.core.not.call(null,inst_30634);
var state_30651__$1 = (function (){var statearr_30653 = state_30651;
(statearr_30653[(7)] = inst_30633__$1);

return statearr_30653;
})();
if(inst_30635){
var statearr_30654_30673 = state_30651__$1;
(statearr_30654_30673[(1)] = (8));

} else {
var statearr_30655_30674 = state_30651__$1;
(statearr_30655_30674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (1))){
var inst_30628 = (0);
var state_30651__$1 = (function (){var statearr_30656 = state_30651;
(statearr_30656[(8)] = inst_30628);

return statearr_30656;
})();
var statearr_30657_30675 = state_30651__$1;
(statearr_30657_30675[(2)] = null);

(statearr_30657_30675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (4))){
var state_30651__$1 = state_30651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30651__$1,(7),ch);
} else {
if((state_val_30652 === (6))){
var inst_30646 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30658_30676 = state_30651__$1;
(statearr_30658_30676[(2)] = inst_30646);

(statearr_30658_30676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (3))){
var inst_30648 = (state_30651[(2)]);
var inst_30649 = cljs.core.async.close_BANG_.call(null,out);
var state_30651__$1 = (function (){var statearr_30659 = state_30651;
(statearr_30659[(9)] = inst_30648);

return statearr_30659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30651__$1,inst_30649);
} else {
if((state_val_30652 === (2))){
var inst_30628 = (state_30651[(8)]);
var inst_30630 = (inst_30628 < n);
var state_30651__$1 = state_30651;
if(cljs.core.truth_(inst_30630)){
var statearr_30660_30677 = state_30651__$1;
(statearr_30660_30677[(1)] = (4));

} else {
var statearr_30661_30678 = state_30651__$1;
(statearr_30661_30678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (11))){
var inst_30628 = (state_30651[(8)]);
var inst_30638 = (state_30651[(2)]);
var inst_30639 = (inst_30628 + (1));
var inst_30628__$1 = inst_30639;
var state_30651__$1 = (function (){var statearr_30662 = state_30651;
(statearr_30662[(8)] = inst_30628__$1);

(statearr_30662[(10)] = inst_30638);

return statearr_30662;
})();
var statearr_30663_30679 = state_30651__$1;
(statearr_30663_30679[(2)] = null);

(statearr_30663_30679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (9))){
var state_30651__$1 = state_30651;
var statearr_30664_30680 = state_30651__$1;
(statearr_30664_30680[(2)] = null);

(statearr_30664_30680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (5))){
var state_30651__$1 = state_30651;
var statearr_30665_30681 = state_30651__$1;
(statearr_30665_30681[(2)] = null);

(statearr_30665_30681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (10))){
var inst_30643 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30666_30682 = state_30651__$1;
(statearr_30666_30682[(2)] = inst_30643);

(statearr_30666_30682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (8))){
var inst_30633 = (state_30651[(7)]);
var state_30651__$1 = state_30651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30651__$1,(11),out,inst_30633);
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
});})(c__27336__auto___30672,out))
;
return ((function (switch__27169__auto__,c__27336__auto___30672,out){
return (function() {
var cljs$core$async$state_machine__27170__auto__ = null;
var cljs$core$async$state_machine__27170__auto____0 = (function (){
var statearr_30667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30667[(0)] = cljs$core$async$state_machine__27170__auto__);

(statearr_30667[(1)] = (1));

return statearr_30667;
});
var cljs$core$async$state_machine__27170__auto____1 = (function (state_30651){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_30651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e30668){if((e30668 instanceof Object)){
var ex__27173__auto__ = e30668;
var statearr_30669_30683 = state_30651;
(statearr_30669_30683[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30684 = state_30651;
state_30651 = G__30684;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$state_machine__27170__auto__ = function(state_30651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27170__auto____1.call(this,state_30651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27170__auto____0;
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27170__auto____1;
return cljs$core$async$state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___30672,out))
})();
var state__27338__auto__ = (function (){var statearr_30670 = f__27337__auto__.call(null);
(statearr_30670[(6)] = c__27336__auto___30672);

return statearr_30670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___30672,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30686 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30686 = (function (f,ch,meta30687){
this.f = f;
this.ch = ch;
this.meta30687 = meta30687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30688,meta30687__$1){
var self__ = this;
var _30688__$1 = this;
return (new cljs.core.async.t_cljs$core$async30686(self__.f,self__.ch,meta30687__$1));
});

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30688){
var self__ = this;
var _30688__$1 = this;
return self__.meta30687;
});

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30689 = (function (f,ch,meta30687,_,fn1,meta30690){
this.f = f;
this.ch = ch;
this.meta30687 = meta30687;
this._ = _;
this.fn1 = fn1;
this.meta30690 = meta30690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30691,meta30690__$1){
var self__ = this;
var _30691__$1 = this;
return (new cljs.core.async.t_cljs$core$async30689(self__.f,self__.ch,self__.meta30687,self__._,self__.fn1,meta30690__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30691){
var self__ = this;
var _30691__$1 = this;
return self__.meta30690;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30689.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30689.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30685_SHARP_){
return f1.call(null,(((p1__30685_SHARP_ == null))?null:self__.f.call(null,p1__30685_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30689.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30687","meta30687",317189570,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30686","cljs.core.async/t_cljs$core$async30686",1349764475,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30690","meta30690",-1833618569,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30689";

cljs.core.async.t_cljs$core$async30689.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30689");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30689.
 */
cljs.core.async.__GT_t_cljs$core$async30689 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30689(f__$1,ch__$1,meta30687__$1,___$2,fn1__$1,meta30690){
return (new cljs.core.async.t_cljs$core$async30689(f__$1,ch__$1,meta30687__$1,___$2,fn1__$1,meta30690));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30689(self__.f,self__.ch,self__.meta30687,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30687","meta30687",317189570,null)], null);
});

cljs.core.async.t_cljs$core$async30686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30686";

cljs.core.async.t_cljs$core$async30686.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30686");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30686.
 */
cljs.core.async.__GT_t_cljs$core$async30686 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30686(f__$1,ch__$1,meta30687){
return (new cljs.core.async.t_cljs$core$async30686(f__$1,ch__$1,meta30687));
});

}

return (new cljs.core.async.t_cljs$core$async30686(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30692 = (function (f,ch,meta30693){
this.f = f;
this.ch = ch;
this.meta30693 = meta30693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30694,meta30693__$1){
var self__ = this;
var _30694__$1 = this;
return (new cljs.core.async.t_cljs$core$async30692(self__.f,self__.ch,meta30693__$1));
});

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30694){
var self__ = this;
var _30694__$1 = this;
return self__.meta30693;
});

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30693","meta30693",418131231,null)], null);
});

cljs.core.async.t_cljs$core$async30692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30692";

cljs.core.async.t_cljs$core$async30692.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30692");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30692.
 */
cljs.core.async.__GT_t_cljs$core$async30692 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30692(f__$1,ch__$1,meta30693){
return (new cljs.core.async.t_cljs$core$async30692(f__$1,ch__$1,meta30693));
});

}

return (new cljs.core.async.t_cljs$core$async30692(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30695 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30695 = (function (p,ch,meta30696){
this.p = p;
this.ch = ch;
this.meta30696 = meta30696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30697,meta30696__$1){
var self__ = this;
var _30697__$1 = this;
return (new cljs.core.async.t_cljs$core$async30695(self__.p,self__.ch,meta30696__$1));
});

cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30697){
var self__ = this;
var _30697__$1 = this;
return self__.meta30696;
});

cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30696","meta30696",-718425746,null)], null);
});

cljs.core.async.t_cljs$core$async30695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30695";

cljs.core.async.t_cljs$core$async30695.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30695");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30695.
 */
cljs.core.async.__GT_t_cljs$core$async30695 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30695(p__$1,ch__$1,meta30696){
return (new cljs.core.async.t_cljs$core$async30695(p__$1,ch__$1,meta30696));
});

}

return (new cljs.core.async.t_cljs$core$async30695(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30699 = arguments.length;
switch (G__30699) {
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
var c__27336__auto___30739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___30739,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___30739,out){
return (function (state_30720){
var state_val_30721 = (state_30720[(1)]);
if((state_val_30721 === (7))){
var inst_30716 = (state_30720[(2)]);
var state_30720__$1 = state_30720;
var statearr_30722_30740 = state_30720__$1;
(statearr_30722_30740[(2)] = inst_30716);

(statearr_30722_30740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (1))){
var state_30720__$1 = state_30720;
var statearr_30723_30741 = state_30720__$1;
(statearr_30723_30741[(2)] = null);

(statearr_30723_30741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (4))){
var inst_30702 = (state_30720[(7)]);
var inst_30702__$1 = (state_30720[(2)]);
var inst_30703 = (inst_30702__$1 == null);
var state_30720__$1 = (function (){var statearr_30724 = state_30720;
(statearr_30724[(7)] = inst_30702__$1);

return statearr_30724;
})();
if(cljs.core.truth_(inst_30703)){
var statearr_30725_30742 = state_30720__$1;
(statearr_30725_30742[(1)] = (5));

} else {
var statearr_30726_30743 = state_30720__$1;
(statearr_30726_30743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (6))){
var inst_30702 = (state_30720[(7)]);
var inst_30707 = p.call(null,inst_30702);
var state_30720__$1 = state_30720;
if(cljs.core.truth_(inst_30707)){
var statearr_30727_30744 = state_30720__$1;
(statearr_30727_30744[(1)] = (8));

} else {
var statearr_30728_30745 = state_30720__$1;
(statearr_30728_30745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (3))){
var inst_30718 = (state_30720[(2)]);
var state_30720__$1 = state_30720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30720__$1,inst_30718);
} else {
if((state_val_30721 === (2))){
var state_30720__$1 = state_30720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30720__$1,(4),ch);
} else {
if((state_val_30721 === (11))){
var inst_30710 = (state_30720[(2)]);
var state_30720__$1 = state_30720;
var statearr_30729_30746 = state_30720__$1;
(statearr_30729_30746[(2)] = inst_30710);

(statearr_30729_30746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (9))){
var state_30720__$1 = state_30720;
var statearr_30730_30747 = state_30720__$1;
(statearr_30730_30747[(2)] = null);

(statearr_30730_30747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (5))){
var inst_30705 = cljs.core.async.close_BANG_.call(null,out);
var state_30720__$1 = state_30720;
var statearr_30731_30748 = state_30720__$1;
(statearr_30731_30748[(2)] = inst_30705);

(statearr_30731_30748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (10))){
var inst_30713 = (state_30720[(2)]);
var state_30720__$1 = (function (){var statearr_30732 = state_30720;
(statearr_30732[(8)] = inst_30713);

return statearr_30732;
})();
var statearr_30733_30749 = state_30720__$1;
(statearr_30733_30749[(2)] = null);

(statearr_30733_30749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30721 === (8))){
var inst_30702 = (state_30720[(7)]);
var state_30720__$1 = state_30720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30720__$1,(11),out,inst_30702);
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
});})(c__27336__auto___30739,out))
;
return ((function (switch__27169__auto__,c__27336__auto___30739,out){
return (function() {
var cljs$core$async$state_machine__27170__auto__ = null;
var cljs$core$async$state_machine__27170__auto____0 = (function (){
var statearr_30734 = [null,null,null,null,null,null,null,null,null];
(statearr_30734[(0)] = cljs$core$async$state_machine__27170__auto__);

(statearr_30734[(1)] = (1));

return statearr_30734;
});
var cljs$core$async$state_machine__27170__auto____1 = (function (state_30720){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_30720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e30735){if((e30735 instanceof Object)){
var ex__27173__auto__ = e30735;
var statearr_30736_30750 = state_30720;
(statearr_30736_30750[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30751 = state_30720;
state_30720 = G__30751;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$state_machine__27170__auto__ = function(state_30720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27170__auto____1.call(this,state_30720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27170__auto____0;
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27170__auto____1;
return cljs$core$async$state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___30739,out))
})();
var state__27338__auto__ = (function (){var statearr_30737 = f__27337__auto__.call(null);
(statearr_30737[(6)] = c__27336__auto___30739);

return statearr_30737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___30739,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30753 = arguments.length;
switch (G__30753) {
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
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto__){
return (function (state_30816){
var state_val_30817 = (state_30816[(1)]);
if((state_val_30817 === (7))){
var inst_30812 = (state_30816[(2)]);
var state_30816__$1 = state_30816;
var statearr_30818_30856 = state_30816__$1;
(statearr_30818_30856[(2)] = inst_30812);

(statearr_30818_30856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (20))){
var inst_30782 = (state_30816[(7)]);
var inst_30793 = (state_30816[(2)]);
var inst_30794 = cljs.core.next.call(null,inst_30782);
var inst_30768 = inst_30794;
var inst_30769 = null;
var inst_30770 = (0);
var inst_30771 = (0);
var state_30816__$1 = (function (){var statearr_30819 = state_30816;
(statearr_30819[(8)] = inst_30771);

(statearr_30819[(9)] = inst_30769);

(statearr_30819[(10)] = inst_30770);

(statearr_30819[(11)] = inst_30768);

(statearr_30819[(12)] = inst_30793);

return statearr_30819;
})();
var statearr_30820_30857 = state_30816__$1;
(statearr_30820_30857[(2)] = null);

(statearr_30820_30857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (1))){
var state_30816__$1 = state_30816;
var statearr_30821_30858 = state_30816__$1;
(statearr_30821_30858[(2)] = null);

(statearr_30821_30858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (4))){
var inst_30757 = (state_30816[(13)]);
var inst_30757__$1 = (state_30816[(2)]);
var inst_30758 = (inst_30757__$1 == null);
var state_30816__$1 = (function (){var statearr_30822 = state_30816;
(statearr_30822[(13)] = inst_30757__$1);

return statearr_30822;
})();
if(cljs.core.truth_(inst_30758)){
var statearr_30823_30859 = state_30816__$1;
(statearr_30823_30859[(1)] = (5));

} else {
var statearr_30824_30860 = state_30816__$1;
(statearr_30824_30860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (15))){
var state_30816__$1 = state_30816;
var statearr_30828_30861 = state_30816__$1;
(statearr_30828_30861[(2)] = null);

(statearr_30828_30861[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (21))){
var state_30816__$1 = state_30816;
var statearr_30829_30862 = state_30816__$1;
(statearr_30829_30862[(2)] = null);

(statearr_30829_30862[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (13))){
var inst_30771 = (state_30816[(8)]);
var inst_30769 = (state_30816[(9)]);
var inst_30770 = (state_30816[(10)]);
var inst_30768 = (state_30816[(11)]);
var inst_30778 = (state_30816[(2)]);
var inst_30779 = (inst_30771 + (1));
var tmp30825 = inst_30769;
var tmp30826 = inst_30770;
var tmp30827 = inst_30768;
var inst_30768__$1 = tmp30827;
var inst_30769__$1 = tmp30825;
var inst_30770__$1 = tmp30826;
var inst_30771__$1 = inst_30779;
var state_30816__$1 = (function (){var statearr_30830 = state_30816;
(statearr_30830[(14)] = inst_30778);

(statearr_30830[(8)] = inst_30771__$1);

(statearr_30830[(9)] = inst_30769__$1);

(statearr_30830[(10)] = inst_30770__$1);

(statearr_30830[(11)] = inst_30768__$1);

return statearr_30830;
})();
var statearr_30831_30863 = state_30816__$1;
(statearr_30831_30863[(2)] = null);

(statearr_30831_30863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (22))){
var state_30816__$1 = state_30816;
var statearr_30832_30864 = state_30816__$1;
(statearr_30832_30864[(2)] = null);

(statearr_30832_30864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (6))){
var inst_30757 = (state_30816[(13)]);
var inst_30766 = f.call(null,inst_30757);
var inst_30767 = cljs.core.seq.call(null,inst_30766);
var inst_30768 = inst_30767;
var inst_30769 = null;
var inst_30770 = (0);
var inst_30771 = (0);
var state_30816__$1 = (function (){var statearr_30833 = state_30816;
(statearr_30833[(8)] = inst_30771);

(statearr_30833[(9)] = inst_30769);

(statearr_30833[(10)] = inst_30770);

(statearr_30833[(11)] = inst_30768);

return statearr_30833;
})();
var statearr_30834_30865 = state_30816__$1;
(statearr_30834_30865[(2)] = null);

(statearr_30834_30865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (17))){
var inst_30782 = (state_30816[(7)]);
var inst_30786 = cljs.core.chunk_first.call(null,inst_30782);
var inst_30787 = cljs.core.chunk_rest.call(null,inst_30782);
var inst_30788 = cljs.core.count.call(null,inst_30786);
var inst_30768 = inst_30787;
var inst_30769 = inst_30786;
var inst_30770 = inst_30788;
var inst_30771 = (0);
var state_30816__$1 = (function (){var statearr_30835 = state_30816;
(statearr_30835[(8)] = inst_30771);

(statearr_30835[(9)] = inst_30769);

(statearr_30835[(10)] = inst_30770);

(statearr_30835[(11)] = inst_30768);

return statearr_30835;
})();
var statearr_30836_30866 = state_30816__$1;
(statearr_30836_30866[(2)] = null);

(statearr_30836_30866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (3))){
var inst_30814 = (state_30816[(2)]);
var state_30816__$1 = state_30816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30816__$1,inst_30814);
} else {
if((state_val_30817 === (12))){
var inst_30802 = (state_30816[(2)]);
var state_30816__$1 = state_30816;
var statearr_30837_30867 = state_30816__$1;
(statearr_30837_30867[(2)] = inst_30802);

(statearr_30837_30867[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (2))){
var state_30816__$1 = state_30816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30816__$1,(4),in$);
} else {
if((state_val_30817 === (23))){
var inst_30810 = (state_30816[(2)]);
var state_30816__$1 = state_30816;
var statearr_30838_30868 = state_30816__$1;
(statearr_30838_30868[(2)] = inst_30810);

(statearr_30838_30868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (19))){
var inst_30797 = (state_30816[(2)]);
var state_30816__$1 = state_30816;
var statearr_30839_30869 = state_30816__$1;
(statearr_30839_30869[(2)] = inst_30797);

(statearr_30839_30869[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (11))){
var inst_30782 = (state_30816[(7)]);
var inst_30768 = (state_30816[(11)]);
var inst_30782__$1 = cljs.core.seq.call(null,inst_30768);
var state_30816__$1 = (function (){var statearr_30840 = state_30816;
(statearr_30840[(7)] = inst_30782__$1);

return statearr_30840;
})();
if(inst_30782__$1){
var statearr_30841_30870 = state_30816__$1;
(statearr_30841_30870[(1)] = (14));

} else {
var statearr_30842_30871 = state_30816__$1;
(statearr_30842_30871[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (9))){
var inst_30804 = (state_30816[(2)]);
var inst_30805 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30816__$1 = (function (){var statearr_30843 = state_30816;
(statearr_30843[(15)] = inst_30804);

return statearr_30843;
})();
if(cljs.core.truth_(inst_30805)){
var statearr_30844_30872 = state_30816__$1;
(statearr_30844_30872[(1)] = (21));

} else {
var statearr_30845_30873 = state_30816__$1;
(statearr_30845_30873[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (5))){
var inst_30760 = cljs.core.async.close_BANG_.call(null,out);
var state_30816__$1 = state_30816;
var statearr_30846_30874 = state_30816__$1;
(statearr_30846_30874[(2)] = inst_30760);

(statearr_30846_30874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (14))){
var inst_30782 = (state_30816[(7)]);
var inst_30784 = cljs.core.chunked_seq_QMARK_.call(null,inst_30782);
var state_30816__$1 = state_30816;
if(inst_30784){
var statearr_30847_30875 = state_30816__$1;
(statearr_30847_30875[(1)] = (17));

} else {
var statearr_30848_30876 = state_30816__$1;
(statearr_30848_30876[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (16))){
var inst_30800 = (state_30816[(2)]);
var state_30816__$1 = state_30816;
var statearr_30849_30877 = state_30816__$1;
(statearr_30849_30877[(2)] = inst_30800);

(statearr_30849_30877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30817 === (10))){
var inst_30771 = (state_30816[(8)]);
var inst_30769 = (state_30816[(9)]);
var inst_30776 = cljs.core._nth.call(null,inst_30769,inst_30771);
var state_30816__$1 = state_30816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30816__$1,(13),out,inst_30776);
} else {
if((state_val_30817 === (18))){
var inst_30782 = (state_30816[(7)]);
var inst_30791 = cljs.core.first.call(null,inst_30782);
var state_30816__$1 = state_30816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30816__$1,(20),out,inst_30791);
} else {
if((state_val_30817 === (8))){
var inst_30771 = (state_30816[(8)]);
var inst_30770 = (state_30816[(10)]);
var inst_30773 = (inst_30771 < inst_30770);
var inst_30774 = inst_30773;
var state_30816__$1 = state_30816;
if(cljs.core.truth_(inst_30774)){
var statearr_30850_30878 = state_30816__$1;
(statearr_30850_30878[(1)] = (10));

} else {
var statearr_30851_30879 = state_30816__$1;
(statearr_30851_30879[(1)] = (11));

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
});})(c__27336__auto__))
;
return ((function (switch__27169__auto__,c__27336__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27170__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27170__auto____0 = (function (){
var statearr_30852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30852[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27170__auto__);

(statearr_30852[(1)] = (1));

return statearr_30852;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27170__auto____1 = (function (state_30816){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_30816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e30853){if((e30853 instanceof Object)){
var ex__27173__auto__ = e30853;
var statearr_30854_30880 = state_30816;
(statearr_30854_30880[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30881 = state_30816;
state_30816 = G__30881;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27170__auto__ = function(state_30816){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27170__auto____1.call(this,state_30816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27170__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27170__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto__))
})();
var state__27338__auto__ = (function (){var statearr_30855 = f__27337__auto__.call(null);
(statearr_30855[(6)] = c__27336__auto__);

return statearr_30855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__))
);

return c__27336__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30883 = arguments.length;
switch (G__30883) {
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
var G__30886 = arguments.length;
switch (G__30886) {
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
var G__30889 = arguments.length;
switch (G__30889) {
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
var c__27336__auto___30936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___30936,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___30936,out){
return (function (state_30913){
var state_val_30914 = (state_30913[(1)]);
if((state_val_30914 === (7))){
var inst_30908 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
var statearr_30915_30937 = state_30913__$1;
(statearr_30915_30937[(2)] = inst_30908);

(statearr_30915_30937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (1))){
var inst_30890 = null;
var state_30913__$1 = (function (){var statearr_30916 = state_30913;
(statearr_30916[(7)] = inst_30890);

return statearr_30916;
})();
var statearr_30917_30938 = state_30913__$1;
(statearr_30917_30938[(2)] = null);

(statearr_30917_30938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (4))){
var inst_30893 = (state_30913[(8)]);
var inst_30893__$1 = (state_30913[(2)]);
var inst_30894 = (inst_30893__$1 == null);
var inst_30895 = cljs.core.not.call(null,inst_30894);
var state_30913__$1 = (function (){var statearr_30918 = state_30913;
(statearr_30918[(8)] = inst_30893__$1);

return statearr_30918;
})();
if(inst_30895){
var statearr_30919_30939 = state_30913__$1;
(statearr_30919_30939[(1)] = (5));

} else {
var statearr_30920_30940 = state_30913__$1;
(statearr_30920_30940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (6))){
var state_30913__$1 = state_30913;
var statearr_30921_30941 = state_30913__$1;
(statearr_30921_30941[(2)] = null);

(statearr_30921_30941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (3))){
var inst_30910 = (state_30913[(2)]);
var inst_30911 = cljs.core.async.close_BANG_.call(null,out);
var state_30913__$1 = (function (){var statearr_30922 = state_30913;
(statearr_30922[(9)] = inst_30910);

return statearr_30922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30913__$1,inst_30911);
} else {
if((state_val_30914 === (2))){
var state_30913__$1 = state_30913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30913__$1,(4),ch);
} else {
if((state_val_30914 === (11))){
var inst_30893 = (state_30913[(8)]);
var inst_30902 = (state_30913[(2)]);
var inst_30890 = inst_30893;
var state_30913__$1 = (function (){var statearr_30923 = state_30913;
(statearr_30923[(7)] = inst_30890);

(statearr_30923[(10)] = inst_30902);

return statearr_30923;
})();
var statearr_30924_30942 = state_30913__$1;
(statearr_30924_30942[(2)] = null);

(statearr_30924_30942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (9))){
var inst_30893 = (state_30913[(8)]);
var state_30913__$1 = state_30913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30913__$1,(11),out,inst_30893);
} else {
if((state_val_30914 === (5))){
var inst_30890 = (state_30913[(7)]);
var inst_30893 = (state_30913[(8)]);
var inst_30897 = cljs.core._EQ_.call(null,inst_30893,inst_30890);
var state_30913__$1 = state_30913;
if(inst_30897){
var statearr_30926_30943 = state_30913__$1;
(statearr_30926_30943[(1)] = (8));

} else {
var statearr_30927_30944 = state_30913__$1;
(statearr_30927_30944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (10))){
var inst_30905 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
var statearr_30928_30945 = state_30913__$1;
(statearr_30928_30945[(2)] = inst_30905);

(statearr_30928_30945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (8))){
var inst_30890 = (state_30913[(7)]);
var tmp30925 = inst_30890;
var inst_30890__$1 = tmp30925;
var state_30913__$1 = (function (){var statearr_30929 = state_30913;
(statearr_30929[(7)] = inst_30890__$1);

return statearr_30929;
})();
var statearr_30930_30946 = state_30913__$1;
(statearr_30930_30946[(2)] = null);

(statearr_30930_30946[(1)] = (2));


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
});})(c__27336__auto___30936,out))
;
return ((function (switch__27169__auto__,c__27336__auto___30936,out){
return (function() {
var cljs$core$async$state_machine__27170__auto__ = null;
var cljs$core$async$state_machine__27170__auto____0 = (function (){
var statearr_30931 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30931[(0)] = cljs$core$async$state_machine__27170__auto__);

(statearr_30931[(1)] = (1));

return statearr_30931;
});
var cljs$core$async$state_machine__27170__auto____1 = (function (state_30913){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_30913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e30932){if((e30932 instanceof Object)){
var ex__27173__auto__ = e30932;
var statearr_30933_30947 = state_30913;
(statearr_30933_30947[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30948 = state_30913;
state_30913 = G__30948;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$state_machine__27170__auto__ = function(state_30913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27170__auto____1.call(this,state_30913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27170__auto____0;
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27170__auto____1;
return cljs$core$async$state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___30936,out))
})();
var state__27338__auto__ = (function (){var statearr_30934 = f__27337__auto__.call(null);
(statearr_30934[(6)] = c__27336__auto___30936);

return statearr_30934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___30936,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30950 = arguments.length;
switch (G__30950) {
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
var c__27336__auto___31016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___31016,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___31016,out){
return (function (state_30988){
var state_val_30989 = (state_30988[(1)]);
if((state_val_30989 === (7))){
var inst_30984 = (state_30988[(2)]);
var state_30988__$1 = state_30988;
var statearr_30990_31017 = state_30988__$1;
(statearr_30990_31017[(2)] = inst_30984);

(statearr_30990_31017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (1))){
var inst_30951 = (new Array(n));
var inst_30952 = inst_30951;
var inst_30953 = (0);
var state_30988__$1 = (function (){var statearr_30991 = state_30988;
(statearr_30991[(7)] = inst_30952);

(statearr_30991[(8)] = inst_30953);

return statearr_30991;
})();
var statearr_30992_31018 = state_30988__$1;
(statearr_30992_31018[(2)] = null);

(statearr_30992_31018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (4))){
var inst_30956 = (state_30988[(9)]);
var inst_30956__$1 = (state_30988[(2)]);
var inst_30957 = (inst_30956__$1 == null);
var inst_30958 = cljs.core.not.call(null,inst_30957);
var state_30988__$1 = (function (){var statearr_30993 = state_30988;
(statearr_30993[(9)] = inst_30956__$1);

return statearr_30993;
})();
if(inst_30958){
var statearr_30994_31019 = state_30988__$1;
(statearr_30994_31019[(1)] = (5));

} else {
var statearr_30995_31020 = state_30988__$1;
(statearr_30995_31020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (15))){
var inst_30978 = (state_30988[(2)]);
var state_30988__$1 = state_30988;
var statearr_30996_31021 = state_30988__$1;
(statearr_30996_31021[(2)] = inst_30978);

(statearr_30996_31021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (13))){
var state_30988__$1 = state_30988;
var statearr_30997_31022 = state_30988__$1;
(statearr_30997_31022[(2)] = null);

(statearr_30997_31022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (6))){
var inst_30953 = (state_30988[(8)]);
var inst_30974 = (inst_30953 > (0));
var state_30988__$1 = state_30988;
if(cljs.core.truth_(inst_30974)){
var statearr_30998_31023 = state_30988__$1;
(statearr_30998_31023[(1)] = (12));

} else {
var statearr_30999_31024 = state_30988__$1;
(statearr_30999_31024[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (3))){
var inst_30986 = (state_30988[(2)]);
var state_30988__$1 = state_30988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30988__$1,inst_30986);
} else {
if((state_val_30989 === (12))){
var inst_30952 = (state_30988[(7)]);
var inst_30976 = cljs.core.vec.call(null,inst_30952);
var state_30988__$1 = state_30988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30988__$1,(15),out,inst_30976);
} else {
if((state_val_30989 === (2))){
var state_30988__$1 = state_30988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30988__$1,(4),ch);
} else {
if((state_val_30989 === (11))){
var inst_30968 = (state_30988[(2)]);
var inst_30969 = (new Array(n));
var inst_30952 = inst_30969;
var inst_30953 = (0);
var state_30988__$1 = (function (){var statearr_31000 = state_30988;
(statearr_31000[(10)] = inst_30968);

(statearr_31000[(7)] = inst_30952);

(statearr_31000[(8)] = inst_30953);

return statearr_31000;
})();
var statearr_31001_31025 = state_30988__$1;
(statearr_31001_31025[(2)] = null);

(statearr_31001_31025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (9))){
var inst_30952 = (state_30988[(7)]);
var inst_30966 = cljs.core.vec.call(null,inst_30952);
var state_30988__$1 = state_30988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30988__$1,(11),out,inst_30966);
} else {
if((state_val_30989 === (5))){
var inst_30952 = (state_30988[(7)]);
var inst_30956 = (state_30988[(9)]);
var inst_30953 = (state_30988[(8)]);
var inst_30961 = (state_30988[(11)]);
var inst_30960 = (inst_30952[inst_30953] = inst_30956);
var inst_30961__$1 = (inst_30953 + (1));
var inst_30962 = (inst_30961__$1 < n);
var state_30988__$1 = (function (){var statearr_31002 = state_30988;
(statearr_31002[(12)] = inst_30960);

(statearr_31002[(11)] = inst_30961__$1);

return statearr_31002;
})();
if(cljs.core.truth_(inst_30962)){
var statearr_31003_31026 = state_30988__$1;
(statearr_31003_31026[(1)] = (8));

} else {
var statearr_31004_31027 = state_30988__$1;
(statearr_31004_31027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (14))){
var inst_30981 = (state_30988[(2)]);
var inst_30982 = cljs.core.async.close_BANG_.call(null,out);
var state_30988__$1 = (function (){var statearr_31006 = state_30988;
(statearr_31006[(13)] = inst_30981);

return statearr_31006;
})();
var statearr_31007_31028 = state_30988__$1;
(statearr_31007_31028[(2)] = inst_30982);

(statearr_31007_31028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (10))){
var inst_30972 = (state_30988[(2)]);
var state_30988__$1 = state_30988;
var statearr_31008_31029 = state_30988__$1;
(statearr_31008_31029[(2)] = inst_30972);

(statearr_31008_31029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30989 === (8))){
var inst_30952 = (state_30988[(7)]);
var inst_30961 = (state_30988[(11)]);
var tmp31005 = inst_30952;
var inst_30952__$1 = tmp31005;
var inst_30953 = inst_30961;
var state_30988__$1 = (function (){var statearr_31009 = state_30988;
(statearr_31009[(7)] = inst_30952__$1);

(statearr_31009[(8)] = inst_30953);

return statearr_31009;
})();
var statearr_31010_31030 = state_30988__$1;
(statearr_31010_31030[(2)] = null);

(statearr_31010_31030[(1)] = (2));


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
});})(c__27336__auto___31016,out))
;
return ((function (switch__27169__auto__,c__27336__auto___31016,out){
return (function() {
var cljs$core$async$state_machine__27170__auto__ = null;
var cljs$core$async$state_machine__27170__auto____0 = (function (){
var statearr_31011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31011[(0)] = cljs$core$async$state_machine__27170__auto__);

(statearr_31011[(1)] = (1));

return statearr_31011;
});
var cljs$core$async$state_machine__27170__auto____1 = (function (state_30988){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_30988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e31012){if((e31012 instanceof Object)){
var ex__27173__auto__ = e31012;
var statearr_31013_31031 = state_30988;
(statearr_31013_31031[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31032 = state_30988;
state_30988 = G__31032;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$state_machine__27170__auto__ = function(state_30988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27170__auto____1.call(this,state_30988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27170__auto____0;
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27170__auto____1;
return cljs$core$async$state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___31016,out))
})();
var state__27338__auto__ = (function (){var statearr_31014 = f__27337__auto__.call(null);
(statearr_31014[(6)] = c__27336__auto___31016);

return statearr_31014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___31016,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31034 = arguments.length;
switch (G__31034) {
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
var c__27336__auto___31104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___31104,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___31104,out){
return (function (state_31076){
var state_val_31077 = (state_31076[(1)]);
if((state_val_31077 === (7))){
var inst_31072 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31078_31105 = state_31076__$1;
(statearr_31078_31105[(2)] = inst_31072);

(statearr_31078_31105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (1))){
var inst_31035 = [];
var inst_31036 = inst_31035;
var inst_31037 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31076__$1 = (function (){var statearr_31079 = state_31076;
(statearr_31079[(7)] = inst_31036);

(statearr_31079[(8)] = inst_31037);

return statearr_31079;
})();
var statearr_31080_31106 = state_31076__$1;
(statearr_31080_31106[(2)] = null);

(statearr_31080_31106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (4))){
var inst_31040 = (state_31076[(9)]);
var inst_31040__$1 = (state_31076[(2)]);
var inst_31041 = (inst_31040__$1 == null);
var inst_31042 = cljs.core.not.call(null,inst_31041);
var state_31076__$1 = (function (){var statearr_31081 = state_31076;
(statearr_31081[(9)] = inst_31040__$1);

return statearr_31081;
})();
if(inst_31042){
var statearr_31082_31107 = state_31076__$1;
(statearr_31082_31107[(1)] = (5));

} else {
var statearr_31083_31108 = state_31076__$1;
(statearr_31083_31108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (15))){
var inst_31066 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31084_31109 = state_31076__$1;
(statearr_31084_31109[(2)] = inst_31066);

(statearr_31084_31109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (13))){
var state_31076__$1 = state_31076;
var statearr_31085_31110 = state_31076__$1;
(statearr_31085_31110[(2)] = null);

(statearr_31085_31110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (6))){
var inst_31036 = (state_31076[(7)]);
var inst_31061 = inst_31036.length;
var inst_31062 = (inst_31061 > (0));
var state_31076__$1 = state_31076;
if(cljs.core.truth_(inst_31062)){
var statearr_31086_31111 = state_31076__$1;
(statearr_31086_31111[(1)] = (12));

} else {
var statearr_31087_31112 = state_31076__$1;
(statearr_31087_31112[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (3))){
var inst_31074 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31076__$1,inst_31074);
} else {
if((state_val_31077 === (12))){
var inst_31036 = (state_31076[(7)]);
var inst_31064 = cljs.core.vec.call(null,inst_31036);
var state_31076__$1 = state_31076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31076__$1,(15),out,inst_31064);
} else {
if((state_val_31077 === (2))){
var state_31076__$1 = state_31076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31076__$1,(4),ch);
} else {
if((state_val_31077 === (11))){
var inst_31044 = (state_31076[(10)]);
var inst_31040 = (state_31076[(9)]);
var inst_31054 = (state_31076[(2)]);
var inst_31055 = [];
var inst_31056 = inst_31055.push(inst_31040);
var inst_31036 = inst_31055;
var inst_31037 = inst_31044;
var state_31076__$1 = (function (){var statearr_31088 = state_31076;
(statearr_31088[(7)] = inst_31036);

(statearr_31088[(11)] = inst_31056);

(statearr_31088[(8)] = inst_31037);

(statearr_31088[(12)] = inst_31054);

return statearr_31088;
})();
var statearr_31089_31113 = state_31076__$1;
(statearr_31089_31113[(2)] = null);

(statearr_31089_31113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (9))){
var inst_31036 = (state_31076[(7)]);
var inst_31052 = cljs.core.vec.call(null,inst_31036);
var state_31076__$1 = state_31076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31076__$1,(11),out,inst_31052);
} else {
if((state_val_31077 === (5))){
var inst_31044 = (state_31076[(10)]);
var inst_31040 = (state_31076[(9)]);
var inst_31037 = (state_31076[(8)]);
var inst_31044__$1 = f.call(null,inst_31040);
var inst_31045 = cljs.core._EQ_.call(null,inst_31044__$1,inst_31037);
var inst_31046 = cljs.core.keyword_identical_QMARK_.call(null,inst_31037,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31047 = ((inst_31045) || (inst_31046));
var state_31076__$1 = (function (){var statearr_31090 = state_31076;
(statearr_31090[(10)] = inst_31044__$1);

return statearr_31090;
})();
if(cljs.core.truth_(inst_31047)){
var statearr_31091_31114 = state_31076__$1;
(statearr_31091_31114[(1)] = (8));

} else {
var statearr_31092_31115 = state_31076__$1;
(statearr_31092_31115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (14))){
var inst_31069 = (state_31076[(2)]);
var inst_31070 = cljs.core.async.close_BANG_.call(null,out);
var state_31076__$1 = (function (){var statearr_31094 = state_31076;
(statearr_31094[(13)] = inst_31069);

return statearr_31094;
})();
var statearr_31095_31116 = state_31076__$1;
(statearr_31095_31116[(2)] = inst_31070);

(statearr_31095_31116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (10))){
var inst_31059 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31096_31117 = state_31076__$1;
(statearr_31096_31117[(2)] = inst_31059);

(statearr_31096_31117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (8))){
var inst_31044 = (state_31076[(10)]);
var inst_31036 = (state_31076[(7)]);
var inst_31040 = (state_31076[(9)]);
var inst_31049 = inst_31036.push(inst_31040);
var tmp31093 = inst_31036;
var inst_31036__$1 = tmp31093;
var inst_31037 = inst_31044;
var state_31076__$1 = (function (){var statearr_31097 = state_31076;
(statearr_31097[(7)] = inst_31036__$1);

(statearr_31097[(14)] = inst_31049);

(statearr_31097[(8)] = inst_31037);

return statearr_31097;
})();
var statearr_31098_31118 = state_31076__$1;
(statearr_31098_31118[(2)] = null);

(statearr_31098_31118[(1)] = (2));


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
});})(c__27336__auto___31104,out))
;
return ((function (switch__27169__auto__,c__27336__auto___31104,out){
return (function() {
var cljs$core$async$state_machine__27170__auto__ = null;
var cljs$core$async$state_machine__27170__auto____0 = (function (){
var statearr_31099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31099[(0)] = cljs$core$async$state_machine__27170__auto__);

(statearr_31099[(1)] = (1));

return statearr_31099;
});
var cljs$core$async$state_machine__27170__auto____1 = (function (state_31076){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_31076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e31100){if((e31100 instanceof Object)){
var ex__27173__auto__ = e31100;
var statearr_31101_31119 = state_31076;
(statearr_31101_31119[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31120 = state_31076;
state_31076 = G__31120;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
cljs$core$async$state_machine__27170__auto__ = function(state_31076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27170__auto____1.call(this,state_31076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27170__auto____0;
cljs$core$async$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27170__auto____1;
return cljs$core$async$state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___31104,out))
})();
var state__27338__auto__ = (function (){var statearr_31102 = f__27337__auto__.call(null);
(statearr_31102[(6)] = c__27336__auto___31104);

return statearr_31102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___31104,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1568097126148
