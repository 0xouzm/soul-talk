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
var G__33581 = arguments.length;
switch (G__33581) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33582 = (function (f,blockable,meta33583){
this.f = f;
this.blockable = blockable;
this.meta33583 = meta33583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33584,meta33583__$1){
var self__ = this;
var _33584__$1 = this;
return (new cljs.core.async.t_cljs$core$async33582(self__.f,self__.blockable,meta33583__$1));
});

cljs.core.async.t_cljs$core$async33582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33584){
var self__ = this;
var _33584__$1 = this;
return self__.meta33583;
});

cljs.core.async.t_cljs$core$async33582.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33583","meta33583",-1722420873,null)], null);
});

cljs.core.async.t_cljs$core$async33582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33582";

cljs.core.async.t_cljs$core$async33582.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33582");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33582.
 */
cljs.core.async.__GT_t_cljs$core$async33582 = (function cljs$core$async$__GT_t_cljs$core$async33582(f__$1,blockable__$1,meta33583){
return (new cljs.core.async.t_cljs$core$async33582(f__$1,blockable__$1,meta33583));
});

}

return (new cljs.core.async.t_cljs$core$async33582(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33588 = arguments.length;
switch (G__33588) {
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
var G__33591 = arguments.length;
switch (G__33591) {
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
var G__33594 = arguments.length;
switch (G__33594) {
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
var val_33596 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33596);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33596,ret){
return (function (){
return fn1.call(null,val_33596);
});})(val_33596,ret))
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
var G__33598 = arguments.length;
switch (G__33598) {
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
var n__4607__auto___33600 = n;
var x_33601 = (0);
while(true){
if((x_33601 < n__4607__auto___33600)){
(a[x_33601] = (0));

var G__33602 = (x_33601 + (1));
x_33601 = G__33602;
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

var G__33603 = (i + (1));
i = G__33603;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33604 = (function (flag,meta33605){
this.flag = flag;
this.meta33605 = meta33605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33606,meta33605__$1){
var self__ = this;
var _33606__$1 = this;
return (new cljs.core.async.t_cljs$core$async33604(self__.flag,meta33605__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33606){
var self__ = this;
var _33606__$1 = this;
return self__.meta33605;
});})(flag))
;

cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33604.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33605","meta33605",-1329362264,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33604";

cljs.core.async.t_cljs$core$async33604.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33604");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33604.
 */
cljs.core.async.__GT_t_cljs$core$async33604 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33604(flag__$1,meta33605){
return (new cljs.core.async.t_cljs$core$async33604(flag__$1,meta33605));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33604(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33607 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33607 = (function (flag,cb,meta33608){
this.flag = flag;
this.cb = cb;
this.meta33608 = meta33608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33609,meta33608__$1){
var self__ = this;
var _33609__$1 = this;
return (new cljs.core.async.t_cljs$core$async33607(self__.flag,self__.cb,meta33608__$1));
});

cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33609){
var self__ = this;
var _33609__$1 = this;
return self__.meta33608;
});

cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33608","meta33608",2011096329,null)], null);
});

cljs.core.async.t_cljs$core$async33607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33607";

cljs.core.async.t_cljs$core$async33607.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33607");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33607.
 */
cljs.core.async.__GT_t_cljs$core$async33607 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33607(flag__$1,cb__$1,meta33608){
return (new cljs.core.async.t_cljs$core$async33607(flag__$1,cb__$1,meta33608));
});

}

return (new cljs.core.async.t_cljs$core$async33607(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33610_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33610_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33611_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33611_SHARP_,port], null));
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
var G__33612 = (i + (1));
i = G__33612;
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
var len__4730__auto___33618 = arguments.length;
var i__4731__auto___33619 = (0);
while(true){
if((i__4731__auto___33619 < len__4730__auto___33618)){
args__4736__auto__.push((arguments[i__4731__auto___33619]));

var G__33620 = (i__4731__auto___33619 + (1));
i__4731__auto___33619 = G__33620;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33615){
var map__33616 = p__33615;
var map__33616__$1 = (((((!((map__33616 == null))))?(((((map__33616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33616):map__33616);
var opts = map__33616__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33613){
var G__33614 = cljs.core.first.call(null,seq33613);
var seq33613__$1 = cljs.core.next.call(null,seq33613);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33614,seq33613__$1);
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
var G__33622 = arguments.length;
switch (G__33622) {
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
var c__33521__auto___33668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___33668){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___33668){
return (function (state_33646){
var state_val_33647 = (state_33646[(1)]);
if((state_val_33647 === (7))){
var inst_33642 = (state_33646[(2)]);
var state_33646__$1 = state_33646;
var statearr_33648_33669 = state_33646__$1;
(statearr_33648_33669[(2)] = inst_33642);

(statearr_33648_33669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (1))){
var state_33646__$1 = state_33646;
var statearr_33649_33670 = state_33646__$1;
(statearr_33649_33670[(2)] = null);

(statearr_33649_33670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (4))){
var inst_33625 = (state_33646[(7)]);
var inst_33625__$1 = (state_33646[(2)]);
var inst_33626 = (inst_33625__$1 == null);
var state_33646__$1 = (function (){var statearr_33650 = state_33646;
(statearr_33650[(7)] = inst_33625__$1);

return statearr_33650;
})();
if(cljs.core.truth_(inst_33626)){
var statearr_33651_33671 = state_33646__$1;
(statearr_33651_33671[(1)] = (5));

} else {
var statearr_33652_33672 = state_33646__$1;
(statearr_33652_33672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (13))){
var state_33646__$1 = state_33646;
var statearr_33653_33673 = state_33646__$1;
(statearr_33653_33673[(2)] = null);

(statearr_33653_33673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (6))){
var inst_33625 = (state_33646[(7)]);
var state_33646__$1 = state_33646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33646__$1,(11),to,inst_33625);
} else {
if((state_val_33647 === (3))){
var inst_33644 = (state_33646[(2)]);
var state_33646__$1 = state_33646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33646__$1,inst_33644);
} else {
if((state_val_33647 === (12))){
var state_33646__$1 = state_33646;
var statearr_33654_33674 = state_33646__$1;
(statearr_33654_33674[(2)] = null);

(statearr_33654_33674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (2))){
var state_33646__$1 = state_33646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33646__$1,(4),from);
} else {
if((state_val_33647 === (11))){
var inst_33635 = (state_33646[(2)]);
var state_33646__$1 = state_33646;
if(cljs.core.truth_(inst_33635)){
var statearr_33655_33675 = state_33646__$1;
(statearr_33655_33675[(1)] = (12));

} else {
var statearr_33656_33676 = state_33646__$1;
(statearr_33656_33676[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (9))){
var state_33646__$1 = state_33646;
var statearr_33657_33677 = state_33646__$1;
(statearr_33657_33677[(2)] = null);

(statearr_33657_33677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (5))){
var state_33646__$1 = state_33646;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33658_33678 = state_33646__$1;
(statearr_33658_33678[(1)] = (8));

} else {
var statearr_33659_33679 = state_33646__$1;
(statearr_33659_33679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (14))){
var inst_33640 = (state_33646[(2)]);
var state_33646__$1 = state_33646;
var statearr_33660_33680 = state_33646__$1;
(statearr_33660_33680[(2)] = inst_33640);

(statearr_33660_33680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (10))){
var inst_33632 = (state_33646[(2)]);
var state_33646__$1 = state_33646;
var statearr_33661_33681 = state_33646__$1;
(statearr_33661_33681[(2)] = inst_33632);

(statearr_33661_33681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (8))){
var inst_33629 = cljs.core.async.close_BANG_.call(null,to);
var state_33646__$1 = state_33646;
var statearr_33662_33682 = state_33646__$1;
(statearr_33662_33682[(2)] = inst_33629);

(statearr_33662_33682[(1)] = (10));


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
});})(c__33521__auto___33668))
;
return ((function (switch__33426__auto__,c__33521__auto___33668){
return (function() {
var cljs$core$async$state_machine__33427__auto__ = null;
var cljs$core$async$state_machine__33427__auto____0 = (function (){
var statearr_33663 = [null,null,null,null,null,null,null,null];
(statearr_33663[(0)] = cljs$core$async$state_machine__33427__auto__);

(statearr_33663[(1)] = (1));

return statearr_33663;
});
var cljs$core$async$state_machine__33427__auto____1 = (function (state_33646){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_33646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e33664){if((e33664 instanceof Object)){
var ex__33430__auto__ = e33664;
var statearr_33665_33683 = state_33646;
(statearr_33665_33683[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33684 = state_33646;
state_33646 = G__33684;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$state_machine__33427__auto__ = function(state_33646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33427__auto____1.call(this,state_33646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33427__auto____0;
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33427__auto____1;
return cljs$core$async$state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___33668))
})();
var state__33523__auto__ = (function (){var statearr_33666 = f__33522__auto__.call(null);
(statearr_33666[(6)] = c__33521__auto___33668);

return statearr_33666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___33668))
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
return (function (p__33685){
var vec__33686 = p__33685;
var v = cljs.core.nth.call(null,vec__33686,(0),null);
var p = cljs.core.nth.call(null,vec__33686,(1),null);
var job = vec__33686;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33521__auto___33857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___33857,res,vec__33686,v,p,job,jobs,results){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___33857,res,vec__33686,v,p,job,jobs,results){
return (function (state_33693){
var state_val_33694 = (state_33693[(1)]);
if((state_val_33694 === (1))){
var state_33693__$1 = state_33693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33693__$1,(2),res,v);
} else {
if((state_val_33694 === (2))){
var inst_33690 = (state_33693[(2)]);
var inst_33691 = cljs.core.async.close_BANG_.call(null,res);
var state_33693__$1 = (function (){var statearr_33695 = state_33693;
(statearr_33695[(7)] = inst_33690);

return statearr_33695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33693__$1,inst_33691);
} else {
return null;
}
}
});})(c__33521__auto___33857,res,vec__33686,v,p,job,jobs,results))
;
return ((function (switch__33426__auto__,c__33521__auto___33857,res,vec__33686,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0 = (function (){
var statearr_33696 = [null,null,null,null,null,null,null,null];
(statearr_33696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__);

(statearr_33696[(1)] = (1));

return statearr_33696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1 = (function (state_33693){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_33693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e33697){if((e33697 instanceof Object)){
var ex__33430__auto__ = e33697;
var statearr_33698_33858 = state_33693;
(statearr_33698_33858[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33859 = state_33693;
state_33693 = G__33859;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__ = function(state_33693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1.call(this,state_33693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___33857,res,vec__33686,v,p,job,jobs,results))
})();
var state__33523__auto__ = (function (){var statearr_33699 = f__33522__auto__.call(null);
(statearr_33699[(6)] = c__33521__auto___33857);

return statearr_33699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___33857,res,vec__33686,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33700){
var vec__33701 = p__33700;
var v = cljs.core.nth.call(null,vec__33701,(0),null);
var p = cljs.core.nth.call(null,vec__33701,(1),null);
var job = vec__33701;
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
var n__4607__auto___33860 = n;
var __33861 = (0);
while(true){
if((__33861 < n__4607__auto___33860)){
var G__33704_33862 = type;
var G__33704_33863__$1 = (((G__33704_33862 instanceof cljs.core.Keyword))?G__33704_33862.fqn:null);
switch (G__33704_33863__$1) {
case "compute":
var c__33521__auto___33865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33861,c__33521__auto___33865,G__33704_33862,G__33704_33863__$1,n__4607__auto___33860,jobs,results,process,async){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (__33861,c__33521__auto___33865,G__33704_33862,G__33704_33863__$1,n__4607__auto___33860,jobs,results,process,async){
return (function (state_33717){
var state_val_33718 = (state_33717[(1)]);
if((state_val_33718 === (1))){
var state_33717__$1 = state_33717;
var statearr_33719_33866 = state_33717__$1;
(statearr_33719_33866[(2)] = null);

(statearr_33719_33866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33718 === (2))){
var state_33717__$1 = state_33717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33717__$1,(4),jobs);
} else {
if((state_val_33718 === (3))){
var inst_33715 = (state_33717[(2)]);
var state_33717__$1 = state_33717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33717__$1,inst_33715);
} else {
if((state_val_33718 === (4))){
var inst_33707 = (state_33717[(2)]);
var inst_33708 = process.call(null,inst_33707);
var state_33717__$1 = state_33717;
if(cljs.core.truth_(inst_33708)){
var statearr_33720_33867 = state_33717__$1;
(statearr_33720_33867[(1)] = (5));

} else {
var statearr_33721_33868 = state_33717__$1;
(statearr_33721_33868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33718 === (5))){
var state_33717__$1 = state_33717;
var statearr_33722_33869 = state_33717__$1;
(statearr_33722_33869[(2)] = null);

(statearr_33722_33869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33718 === (6))){
var state_33717__$1 = state_33717;
var statearr_33723_33870 = state_33717__$1;
(statearr_33723_33870[(2)] = null);

(statearr_33723_33870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33718 === (7))){
var inst_33713 = (state_33717[(2)]);
var state_33717__$1 = state_33717;
var statearr_33724_33871 = state_33717__$1;
(statearr_33724_33871[(2)] = inst_33713);

(statearr_33724_33871[(1)] = (3));


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
});})(__33861,c__33521__auto___33865,G__33704_33862,G__33704_33863__$1,n__4607__auto___33860,jobs,results,process,async))
;
return ((function (__33861,switch__33426__auto__,c__33521__auto___33865,G__33704_33862,G__33704_33863__$1,n__4607__auto___33860,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0 = (function (){
var statearr_33725 = [null,null,null,null,null,null,null];
(statearr_33725[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__);

(statearr_33725[(1)] = (1));

return statearr_33725;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1 = (function (state_33717){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_33717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e33726){if((e33726 instanceof Object)){
var ex__33430__auto__ = e33726;
var statearr_33727_33872 = state_33717;
(statearr_33727_33872[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33873 = state_33717;
state_33717 = G__33873;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__ = function(state_33717){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1.call(this,state_33717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__;
})()
;})(__33861,switch__33426__auto__,c__33521__auto___33865,G__33704_33862,G__33704_33863__$1,n__4607__auto___33860,jobs,results,process,async))
})();
var state__33523__auto__ = (function (){var statearr_33728 = f__33522__auto__.call(null);
(statearr_33728[(6)] = c__33521__auto___33865);

return statearr_33728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(__33861,c__33521__auto___33865,G__33704_33862,G__33704_33863__$1,n__4607__auto___33860,jobs,results,process,async))
);


break;
case "async":
var c__33521__auto___33874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33861,c__33521__auto___33874,G__33704_33862,G__33704_33863__$1,n__4607__auto___33860,jobs,results,process,async){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (__33861,c__33521__auto___33874,G__33704_33862,G__33704_33863__$1,n__4607__auto___33860,jobs,results,process,async){
return (function (state_33741){
var state_val_33742 = (state_33741[(1)]);
if((state_val_33742 === (1))){
var state_33741__$1 = state_33741;
var statearr_33743_33875 = state_33741__$1;
(statearr_33743_33875[(2)] = null);

(statearr_33743_33875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33742 === (2))){
var state_33741__$1 = state_33741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33741__$1,(4),jobs);
} else {
if((state_val_33742 === (3))){
var inst_33739 = (state_33741[(2)]);
var state_33741__$1 = state_33741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33741__$1,inst_33739);
} else {
if((state_val_33742 === (4))){
var inst_33731 = (state_33741[(2)]);
var inst_33732 = async.call(null,inst_33731);
var state_33741__$1 = state_33741;
if(cljs.core.truth_(inst_33732)){
var statearr_33744_33876 = state_33741__$1;
(statearr_33744_33876[(1)] = (5));

} else {
var statearr_33745_33877 = state_33741__$1;
(statearr_33745_33877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33742 === (5))){
var state_33741__$1 = state_33741;
var statearr_33746_33878 = state_33741__$1;
(statearr_33746_33878[(2)] = null);

(statearr_33746_33878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33742 === (6))){
var state_33741__$1 = state_33741;
var statearr_33747_33879 = state_33741__$1;
(statearr_33747_33879[(2)] = null);

(statearr_33747_33879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33742 === (7))){
var inst_33737 = (state_33741[(2)]);
var state_33741__$1 = state_33741;
var statearr_33748_33880 = state_33741__$1;
(statearr_33748_33880[(2)] = inst_33737);

(statearr_33748_33880[(1)] = (3));


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
});})(__33861,c__33521__auto___33874,G__33704_33862,G__33704_33863__$1,n__4607__auto___33860,jobs,results,process,async))
;
return ((function (__33861,switch__33426__auto__,c__33521__auto___33874,G__33704_33862,G__33704_33863__$1,n__4607__auto___33860,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0 = (function (){
var statearr_33749 = [null,null,null,null,null,null,null];
(statearr_33749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__);

(statearr_33749[(1)] = (1));

return statearr_33749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1 = (function (state_33741){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_33741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e33750){if((e33750 instanceof Object)){
var ex__33430__auto__ = e33750;
var statearr_33751_33881 = state_33741;
(statearr_33751_33881[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33882 = state_33741;
state_33741 = G__33882;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__ = function(state_33741){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1.call(this,state_33741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__;
})()
;})(__33861,switch__33426__auto__,c__33521__auto___33874,G__33704_33862,G__33704_33863__$1,n__4607__auto___33860,jobs,results,process,async))
})();
var state__33523__auto__ = (function (){var statearr_33752 = f__33522__auto__.call(null);
(statearr_33752[(6)] = c__33521__auto___33874);

return statearr_33752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(__33861,c__33521__auto___33874,G__33704_33862,G__33704_33863__$1,n__4607__auto___33860,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33704_33863__$1)].join('')));

}

var G__33883 = (__33861 + (1));
__33861 = G__33883;
continue;
} else {
}
break;
}

var c__33521__auto___33884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___33884,jobs,results,process,async){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___33884,jobs,results,process,async){
return (function (state_33774){
var state_val_33775 = (state_33774[(1)]);
if((state_val_33775 === (7))){
var inst_33770 = (state_33774[(2)]);
var state_33774__$1 = state_33774;
var statearr_33776_33885 = state_33774__$1;
(statearr_33776_33885[(2)] = inst_33770);

(statearr_33776_33885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (1))){
var state_33774__$1 = state_33774;
var statearr_33777_33886 = state_33774__$1;
(statearr_33777_33886[(2)] = null);

(statearr_33777_33886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (4))){
var inst_33755 = (state_33774[(7)]);
var inst_33755__$1 = (state_33774[(2)]);
var inst_33756 = (inst_33755__$1 == null);
var state_33774__$1 = (function (){var statearr_33778 = state_33774;
(statearr_33778[(7)] = inst_33755__$1);

return statearr_33778;
})();
if(cljs.core.truth_(inst_33756)){
var statearr_33779_33887 = state_33774__$1;
(statearr_33779_33887[(1)] = (5));

} else {
var statearr_33780_33888 = state_33774__$1;
(statearr_33780_33888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (6))){
var inst_33760 = (state_33774[(8)]);
var inst_33755 = (state_33774[(7)]);
var inst_33760__$1 = cljs.core.async.chan.call(null,(1));
var inst_33761 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33762 = [inst_33755,inst_33760__$1];
var inst_33763 = (new cljs.core.PersistentVector(null,2,(5),inst_33761,inst_33762,null));
var state_33774__$1 = (function (){var statearr_33781 = state_33774;
(statearr_33781[(8)] = inst_33760__$1);

return statearr_33781;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33774__$1,(8),jobs,inst_33763);
} else {
if((state_val_33775 === (3))){
var inst_33772 = (state_33774[(2)]);
var state_33774__$1 = state_33774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33774__$1,inst_33772);
} else {
if((state_val_33775 === (2))){
var state_33774__$1 = state_33774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33774__$1,(4),from);
} else {
if((state_val_33775 === (9))){
var inst_33767 = (state_33774[(2)]);
var state_33774__$1 = (function (){var statearr_33782 = state_33774;
(statearr_33782[(9)] = inst_33767);

return statearr_33782;
})();
var statearr_33783_33889 = state_33774__$1;
(statearr_33783_33889[(2)] = null);

(statearr_33783_33889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (5))){
var inst_33758 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33774__$1 = state_33774;
var statearr_33784_33890 = state_33774__$1;
(statearr_33784_33890[(2)] = inst_33758);

(statearr_33784_33890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (8))){
var inst_33760 = (state_33774[(8)]);
var inst_33765 = (state_33774[(2)]);
var state_33774__$1 = (function (){var statearr_33785 = state_33774;
(statearr_33785[(10)] = inst_33765);

return statearr_33785;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33774__$1,(9),results,inst_33760);
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
});})(c__33521__auto___33884,jobs,results,process,async))
;
return ((function (switch__33426__auto__,c__33521__auto___33884,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0 = (function (){
var statearr_33786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__);

(statearr_33786[(1)] = (1));

return statearr_33786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1 = (function (state_33774){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_33774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e33787){if((e33787 instanceof Object)){
var ex__33430__auto__ = e33787;
var statearr_33788_33891 = state_33774;
(statearr_33788_33891[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33892 = state_33774;
state_33774 = G__33892;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__ = function(state_33774){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1.call(this,state_33774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___33884,jobs,results,process,async))
})();
var state__33523__auto__ = (function (){var statearr_33789 = f__33522__auto__.call(null);
(statearr_33789[(6)] = c__33521__auto___33884);

return statearr_33789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___33884,jobs,results,process,async))
);


var c__33521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto__,jobs,results,process,async){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto__,jobs,results,process,async){
return (function (state_33827){
var state_val_33828 = (state_33827[(1)]);
if((state_val_33828 === (7))){
var inst_33823 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33829_33893 = state_33827__$1;
(statearr_33829_33893[(2)] = inst_33823);

(statearr_33829_33893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (20))){
var state_33827__$1 = state_33827;
var statearr_33830_33894 = state_33827__$1;
(statearr_33830_33894[(2)] = null);

(statearr_33830_33894[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (1))){
var state_33827__$1 = state_33827;
var statearr_33831_33895 = state_33827__$1;
(statearr_33831_33895[(2)] = null);

(statearr_33831_33895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (4))){
var inst_33792 = (state_33827[(7)]);
var inst_33792__$1 = (state_33827[(2)]);
var inst_33793 = (inst_33792__$1 == null);
var state_33827__$1 = (function (){var statearr_33832 = state_33827;
(statearr_33832[(7)] = inst_33792__$1);

return statearr_33832;
})();
if(cljs.core.truth_(inst_33793)){
var statearr_33833_33896 = state_33827__$1;
(statearr_33833_33896[(1)] = (5));

} else {
var statearr_33834_33897 = state_33827__$1;
(statearr_33834_33897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (15))){
var inst_33805 = (state_33827[(8)]);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33827__$1,(18),to,inst_33805);
} else {
if((state_val_33828 === (21))){
var inst_33818 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33835_33898 = state_33827__$1;
(statearr_33835_33898[(2)] = inst_33818);

(statearr_33835_33898[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (13))){
var inst_33820 = (state_33827[(2)]);
var state_33827__$1 = (function (){var statearr_33836 = state_33827;
(statearr_33836[(9)] = inst_33820);

return statearr_33836;
})();
var statearr_33837_33899 = state_33827__$1;
(statearr_33837_33899[(2)] = null);

(statearr_33837_33899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (6))){
var inst_33792 = (state_33827[(7)]);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33827__$1,(11),inst_33792);
} else {
if((state_val_33828 === (17))){
var inst_33813 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33813)){
var statearr_33838_33900 = state_33827__$1;
(statearr_33838_33900[(1)] = (19));

} else {
var statearr_33839_33901 = state_33827__$1;
(statearr_33839_33901[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (3))){
var inst_33825 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33827__$1,inst_33825);
} else {
if((state_val_33828 === (12))){
var inst_33802 = (state_33827[(10)]);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33827__$1,(14),inst_33802);
} else {
if((state_val_33828 === (2))){
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33827__$1,(4),results);
} else {
if((state_val_33828 === (19))){
var state_33827__$1 = state_33827;
var statearr_33840_33902 = state_33827__$1;
(statearr_33840_33902[(2)] = null);

(statearr_33840_33902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (11))){
var inst_33802 = (state_33827[(2)]);
var state_33827__$1 = (function (){var statearr_33841 = state_33827;
(statearr_33841[(10)] = inst_33802);

return statearr_33841;
})();
var statearr_33842_33903 = state_33827__$1;
(statearr_33842_33903[(2)] = null);

(statearr_33842_33903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (9))){
var state_33827__$1 = state_33827;
var statearr_33843_33904 = state_33827__$1;
(statearr_33843_33904[(2)] = null);

(statearr_33843_33904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (5))){
var state_33827__$1 = state_33827;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33844_33905 = state_33827__$1;
(statearr_33844_33905[(1)] = (8));

} else {
var statearr_33845_33906 = state_33827__$1;
(statearr_33845_33906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (14))){
var inst_33805 = (state_33827[(8)]);
var inst_33807 = (state_33827[(11)]);
var inst_33805__$1 = (state_33827[(2)]);
var inst_33806 = (inst_33805__$1 == null);
var inst_33807__$1 = cljs.core.not.call(null,inst_33806);
var state_33827__$1 = (function (){var statearr_33846 = state_33827;
(statearr_33846[(8)] = inst_33805__$1);

(statearr_33846[(11)] = inst_33807__$1);

return statearr_33846;
})();
if(inst_33807__$1){
var statearr_33847_33907 = state_33827__$1;
(statearr_33847_33907[(1)] = (15));

} else {
var statearr_33848_33908 = state_33827__$1;
(statearr_33848_33908[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (16))){
var inst_33807 = (state_33827[(11)]);
var state_33827__$1 = state_33827;
var statearr_33849_33909 = state_33827__$1;
(statearr_33849_33909[(2)] = inst_33807);

(statearr_33849_33909[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (10))){
var inst_33799 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33850_33910 = state_33827__$1;
(statearr_33850_33910[(2)] = inst_33799);

(statearr_33850_33910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (18))){
var inst_33810 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33851_33911 = state_33827__$1;
(statearr_33851_33911[(2)] = inst_33810);

(statearr_33851_33911[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (8))){
var inst_33796 = cljs.core.async.close_BANG_.call(null,to);
var state_33827__$1 = state_33827;
var statearr_33852_33912 = state_33827__$1;
(statearr_33852_33912[(2)] = inst_33796);

(statearr_33852_33912[(1)] = (10));


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
});})(c__33521__auto__,jobs,results,process,async))
;
return ((function (switch__33426__auto__,c__33521__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0 = (function (){
var statearr_33853 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33853[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__);

(statearr_33853[(1)] = (1));

return statearr_33853;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1 = (function (state_33827){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_33827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e33854){if((e33854 instanceof Object)){
var ex__33430__auto__ = e33854;
var statearr_33855_33913 = state_33827;
(statearr_33855_33913[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33914 = state_33827;
state_33827 = G__33914;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__ = function(state_33827){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1.call(this,state_33827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto__,jobs,results,process,async))
})();
var state__33523__auto__ = (function (){var statearr_33856 = f__33522__auto__.call(null);
(statearr_33856[(6)] = c__33521__auto__);

return statearr_33856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto__,jobs,results,process,async))
);

return c__33521__auto__;
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
var G__33916 = arguments.length;
switch (G__33916) {
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
var G__33919 = arguments.length;
switch (G__33919) {
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
var G__33922 = arguments.length;
switch (G__33922) {
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
var c__33521__auto___33971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___33971,tc,fc){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___33971,tc,fc){
return (function (state_33948){
var state_val_33949 = (state_33948[(1)]);
if((state_val_33949 === (7))){
var inst_33944 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_33950_33972 = state_33948__$1;
(statearr_33950_33972[(2)] = inst_33944);

(statearr_33950_33972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (1))){
var state_33948__$1 = state_33948;
var statearr_33951_33973 = state_33948__$1;
(statearr_33951_33973[(2)] = null);

(statearr_33951_33973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (4))){
var inst_33925 = (state_33948[(7)]);
var inst_33925__$1 = (state_33948[(2)]);
var inst_33926 = (inst_33925__$1 == null);
var state_33948__$1 = (function (){var statearr_33952 = state_33948;
(statearr_33952[(7)] = inst_33925__$1);

return statearr_33952;
})();
if(cljs.core.truth_(inst_33926)){
var statearr_33953_33974 = state_33948__$1;
(statearr_33953_33974[(1)] = (5));

} else {
var statearr_33954_33975 = state_33948__$1;
(statearr_33954_33975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (13))){
var state_33948__$1 = state_33948;
var statearr_33955_33976 = state_33948__$1;
(statearr_33955_33976[(2)] = null);

(statearr_33955_33976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (6))){
var inst_33925 = (state_33948[(7)]);
var inst_33931 = p.call(null,inst_33925);
var state_33948__$1 = state_33948;
if(cljs.core.truth_(inst_33931)){
var statearr_33956_33977 = state_33948__$1;
(statearr_33956_33977[(1)] = (9));

} else {
var statearr_33957_33978 = state_33948__$1;
(statearr_33957_33978[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (3))){
var inst_33946 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33948__$1,inst_33946);
} else {
if((state_val_33949 === (12))){
var state_33948__$1 = state_33948;
var statearr_33958_33979 = state_33948__$1;
(statearr_33958_33979[(2)] = null);

(statearr_33958_33979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (2))){
var state_33948__$1 = state_33948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33948__$1,(4),ch);
} else {
if((state_val_33949 === (11))){
var inst_33925 = (state_33948[(7)]);
var inst_33935 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33948__$1,(8),inst_33935,inst_33925);
} else {
if((state_val_33949 === (9))){
var state_33948__$1 = state_33948;
var statearr_33959_33980 = state_33948__$1;
(statearr_33959_33980[(2)] = tc);

(statearr_33959_33980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (5))){
var inst_33928 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33929 = cljs.core.async.close_BANG_.call(null,fc);
var state_33948__$1 = (function (){var statearr_33960 = state_33948;
(statearr_33960[(8)] = inst_33928);

return statearr_33960;
})();
var statearr_33961_33981 = state_33948__$1;
(statearr_33961_33981[(2)] = inst_33929);

(statearr_33961_33981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (14))){
var inst_33942 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_33962_33982 = state_33948__$1;
(statearr_33962_33982[(2)] = inst_33942);

(statearr_33962_33982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (10))){
var state_33948__$1 = state_33948;
var statearr_33963_33983 = state_33948__$1;
(statearr_33963_33983[(2)] = fc);

(statearr_33963_33983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (8))){
var inst_33937 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
if(cljs.core.truth_(inst_33937)){
var statearr_33964_33984 = state_33948__$1;
(statearr_33964_33984[(1)] = (12));

} else {
var statearr_33965_33985 = state_33948__$1;
(statearr_33965_33985[(1)] = (13));

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
});})(c__33521__auto___33971,tc,fc))
;
return ((function (switch__33426__auto__,c__33521__auto___33971,tc,fc){
return (function() {
var cljs$core$async$state_machine__33427__auto__ = null;
var cljs$core$async$state_machine__33427__auto____0 = (function (){
var statearr_33966 = [null,null,null,null,null,null,null,null,null];
(statearr_33966[(0)] = cljs$core$async$state_machine__33427__auto__);

(statearr_33966[(1)] = (1));

return statearr_33966;
});
var cljs$core$async$state_machine__33427__auto____1 = (function (state_33948){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_33948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e33967){if((e33967 instanceof Object)){
var ex__33430__auto__ = e33967;
var statearr_33968_33986 = state_33948;
(statearr_33968_33986[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33987 = state_33948;
state_33948 = G__33987;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$state_machine__33427__auto__ = function(state_33948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33427__auto____1.call(this,state_33948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33427__auto____0;
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33427__auto____1;
return cljs$core$async$state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___33971,tc,fc))
})();
var state__33523__auto__ = (function (){var statearr_33969 = f__33522__auto__.call(null);
(statearr_33969[(6)] = c__33521__auto___33971);

return statearr_33969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___33971,tc,fc))
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
var c__33521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto__){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto__){
return (function (state_34008){
var state_val_34009 = (state_34008[(1)]);
if((state_val_34009 === (7))){
var inst_34004 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34010_34028 = state_34008__$1;
(statearr_34010_34028[(2)] = inst_34004);

(statearr_34010_34028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (1))){
var inst_33988 = init;
var state_34008__$1 = (function (){var statearr_34011 = state_34008;
(statearr_34011[(7)] = inst_33988);

return statearr_34011;
})();
var statearr_34012_34029 = state_34008__$1;
(statearr_34012_34029[(2)] = null);

(statearr_34012_34029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (4))){
var inst_33991 = (state_34008[(8)]);
var inst_33991__$1 = (state_34008[(2)]);
var inst_33992 = (inst_33991__$1 == null);
var state_34008__$1 = (function (){var statearr_34013 = state_34008;
(statearr_34013[(8)] = inst_33991__$1);

return statearr_34013;
})();
if(cljs.core.truth_(inst_33992)){
var statearr_34014_34030 = state_34008__$1;
(statearr_34014_34030[(1)] = (5));

} else {
var statearr_34015_34031 = state_34008__$1;
(statearr_34015_34031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (6))){
var inst_33988 = (state_34008[(7)]);
var inst_33991 = (state_34008[(8)]);
var inst_33995 = (state_34008[(9)]);
var inst_33995__$1 = f.call(null,inst_33988,inst_33991);
var inst_33996 = cljs.core.reduced_QMARK_.call(null,inst_33995__$1);
var state_34008__$1 = (function (){var statearr_34016 = state_34008;
(statearr_34016[(9)] = inst_33995__$1);

return statearr_34016;
})();
if(inst_33996){
var statearr_34017_34032 = state_34008__$1;
(statearr_34017_34032[(1)] = (8));

} else {
var statearr_34018_34033 = state_34008__$1;
(statearr_34018_34033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (3))){
var inst_34006 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34008__$1,inst_34006);
} else {
if((state_val_34009 === (2))){
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34008__$1,(4),ch);
} else {
if((state_val_34009 === (9))){
var inst_33995 = (state_34008[(9)]);
var inst_33988 = inst_33995;
var state_34008__$1 = (function (){var statearr_34019 = state_34008;
(statearr_34019[(7)] = inst_33988);

return statearr_34019;
})();
var statearr_34020_34034 = state_34008__$1;
(statearr_34020_34034[(2)] = null);

(statearr_34020_34034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (5))){
var inst_33988 = (state_34008[(7)]);
var state_34008__$1 = state_34008;
var statearr_34021_34035 = state_34008__$1;
(statearr_34021_34035[(2)] = inst_33988);

(statearr_34021_34035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (10))){
var inst_34002 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34022_34036 = state_34008__$1;
(statearr_34022_34036[(2)] = inst_34002);

(statearr_34022_34036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (8))){
var inst_33995 = (state_34008[(9)]);
var inst_33998 = cljs.core.deref.call(null,inst_33995);
var state_34008__$1 = state_34008;
var statearr_34023_34037 = state_34008__$1;
(statearr_34023_34037[(2)] = inst_33998);

(statearr_34023_34037[(1)] = (10));


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
});})(c__33521__auto__))
;
return ((function (switch__33426__auto__,c__33521__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33427__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33427__auto____0 = (function (){
var statearr_34024 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34024[(0)] = cljs$core$async$reduce_$_state_machine__33427__auto__);

(statearr_34024[(1)] = (1));

return statearr_34024;
});
var cljs$core$async$reduce_$_state_machine__33427__auto____1 = (function (state_34008){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_34008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e34025){if((e34025 instanceof Object)){
var ex__33430__auto__ = e34025;
var statearr_34026_34038 = state_34008;
(statearr_34026_34038[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34039 = state_34008;
state_34008 = G__34039;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33427__auto__ = function(state_34008){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33427__auto____1.call(this,state_34008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33427__auto____0;
cljs$core$async$reduce_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33427__auto____1;
return cljs$core$async$reduce_$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto__))
})();
var state__33523__auto__ = (function (){var statearr_34027 = f__33522__auto__.call(null);
(statearr_34027[(6)] = c__33521__auto__);

return statearr_34027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto__))
);

return c__33521__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto__,f__$1){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto__,f__$1){
return (function (state_34045){
var state_val_34046 = (state_34045[(1)]);
if((state_val_34046 === (1))){
var inst_34040 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34045__$1 = state_34045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34045__$1,(2),inst_34040);
} else {
if((state_val_34046 === (2))){
var inst_34042 = (state_34045[(2)]);
var inst_34043 = f__$1.call(null,inst_34042);
var state_34045__$1 = state_34045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34045__$1,inst_34043);
} else {
return null;
}
}
});})(c__33521__auto__,f__$1))
;
return ((function (switch__33426__auto__,c__33521__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33427__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33427__auto____0 = (function (){
var statearr_34047 = [null,null,null,null,null,null,null];
(statearr_34047[(0)] = cljs$core$async$transduce_$_state_machine__33427__auto__);

(statearr_34047[(1)] = (1));

return statearr_34047;
});
var cljs$core$async$transduce_$_state_machine__33427__auto____1 = (function (state_34045){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_34045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e34048){if((e34048 instanceof Object)){
var ex__33430__auto__ = e34048;
var statearr_34049_34051 = state_34045;
(statearr_34049_34051[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34052 = state_34045;
state_34045 = G__34052;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33427__auto__ = function(state_34045){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33427__auto____1.call(this,state_34045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33427__auto____0;
cljs$core$async$transduce_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33427__auto____1;
return cljs$core$async$transduce_$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto__,f__$1))
})();
var state__33523__auto__ = (function (){var statearr_34050 = f__33522__auto__.call(null);
(statearr_34050[(6)] = c__33521__auto__);

return statearr_34050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto__,f__$1))
);

return c__33521__auto__;
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
var G__34054 = arguments.length;
switch (G__34054) {
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
var c__33521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto__){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto__){
return (function (state_34079){
var state_val_34080 = (state_34079[(1)]);
if((state_val_34080 === (7))){
var inst_34061 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34081_34102 = state_34079__$1;
(statearr_34081_34102[(2)] = inst_34061);

(statearr_34081_34102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (1))){
var inst_34055 = cljs.core.seq.call(null,coll);
var inst_34056 = inst_34055;
var state_34079__$1 = (function (){var statearr_34082 = state_34079;
(statearr_34082[(7)] = inst_34056);

return statearr_34082;
})();
var statearr_34083_34103 = state_34079__$1;
(statearr_34083_34103[(2)] = null);

(statearr_34083_34103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (4))){
var inst_34056 = (state_34079[(7)]);
var inst_34059 = cljs.core.first.call(null,inst_34056);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34079__$1,(7),ch,inst_34059);
} else {
if((state_val_34080 === (13))){
var inst_34073 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34084_34104 = state_34079__$1;
(statearr_34084_34104[(2)] = inst_34073);

(statearr_34084_34104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (6))){
var inst_34064 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
if(cljs.core.truth_(inst_34064)){
var statearr_34085_34105 = state_34079__$1;
(statearr_34085_34105[(1)] = (8));

} else {
var statearr_34086_34106 = state_34079__$1;
(statearr_34086_34106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (3))){
var inst_34077 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34079__$1,inst_34077);
} else {
if((state_val_34080 === (12))){
var state_34079__$1 = state_34079;
var statearr_34087_34107 = state_34079__$1;
(statearr_34087_34107[(2)] = null);

(statearr_34087_34107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (2))){
var inst_34056 = (state_34079[(7)]);
var state_34079__$1 = state_34079;
if(cljs.core.truth_(inst_34056)){
var statearr_34088_34108 = state_34079__$1;
(statearr_34088_34108[(1)] = (4));

} else {
var statearr_34089_34109 = state_34079__$1;
(statearr_34089_34109[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (11))){
var inst_34070 = cljs.core.async.close_BANG_.call(null,ch);
var state_34079__$1 = state_34079;
var statearr_34090_34110 = state_34079__$1;
(statearr_34090_34110[(2)] = inst_34070);

(statearr_34090_34110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (9))){
var state_34079__$1 = state_34079;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34091_34111 = state_34079__$1;
(statearr_34091_34111[(1)] = (11));

} else {
var statearr_34092_34112 = state_34079__$1;
(statearr_34092_34112[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (5))){
var inst_34056 = (state_34079[(7)]);
var state_34079__$1 = state_34079;
var statearr_34093_34113 = state_34079__$1;
(statearr_34093_34113[(2)] = inst_34056);

(statearr_34093_34113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (10))){
var inst_34075 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34094_34114 = state_34079__$1;
(statearr_34094_34114[(2)] = inst_34075);

(statearr_34094_34114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (8))){
var inst_34056 = (state_34079[(7)]);
var inst_34066 = cljs.core.next.call(null,inst_34056);
var inst_34056__$1 = inst_34066;
var state_34079__$1 = (function (){var statearr_34095 = state_34079;
(statearr_34095[(7)] = inst_34056__$1);

return statearr_34095;
})();
var statearr_34096_34115 = state_34079__$1;
(statearr_34096_34115[(2)] = null);

(statearr_34096_34115[(1)] = (2));


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
});})(c__33521__auto__))
;
return ((function (switch__33426__auto__,c__33521__auto__){
return (function() {
var cljs$core$async$state_machine__33427__auto__ = null;
var cljs$core$async$state_machine__33427__auto____0 = (function (){
var statearr_34097 = [null,null,null,null,null,null,null,null];
(statearr_34097[(0)] = cljs$core$async$state_machine__33427__auto__);

(statearr_34097[(1)] = (1));

return statearr_34097;
});
var cljs$core$async$state_machine__33427__auto____1 = (function (state_34079){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_34079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e34098){if((e34098 instanceof Object)){
var ex__33430__auto__ = e34098;
var statearr_34099_34116 = state_34079;
(statearr_34099_34116[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34117 = state_34079;
state_34079 = G__34117;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$state_machine__33427__auto__ = function(state_34079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33427__auto____1.call(this,state_34079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33427__auto____0;
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33427__auto____1;
return cljs$core$async$state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto__))
})();
var state__33523__auto__ = (function (){var statearr_34100 = f__33522__auto__.call(null);
(statearr_34100[(6)] = c__33521__auto__);

return statearr_34100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto__))
);

return c__33521__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34118 = (function (ch,cs,meta34119){
this.ch = ch;
this.cs = cs;
this.meta34119 = meta34119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34120,meta34119__$1){
var self__ = this;
var _34120__$1 = this;
return (new cljs.core.async.t_cljs$core$async34118(self__.ch,self__.cs,meta34119__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34120){
var self__ = this;
var _34120__$1 = this;
return self__.meta34119;
});})(cs))
;

cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34118.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34119","meta34119",-1482079878,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34118";

cljs.core.async.t_cljs$core$async34118.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34118");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34118.
 */
cljs.core.async.__GT_t_cljs$core$async34118 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34118(ch__$1,cs__$1,meta34119){
return (new cljs.core.async.t_cljs$core$async34118(ch__$1,cs__$1,meta34119));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34118(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33521__auto___34340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___34340,cs,m,dchan,dctr,done){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___34340,cs,m,dchan,dctr,done){
return (function (state_34255){
var state_val_34256 = (state_34255[(1)]);
if((state_val_34256 === (7))){
var inst_34251 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34257_34341 = state_34255__$1;
(statearr_34257_34341[(2)] = inst_34251);

(statearr_34257_34341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (20))){
var inst_34154 = (state_34255[(7)]);
var inst_34166 = cljs.core.first.call(null,inst_34154);
var inst_34167 = cljs.core.nth.call(null,inst_34166,(0),null);
var inst_34168 = cljs.core.nth.call(null,inst_34166,(1),null);
var state_34255__$1 = (function (){var statearr_34258 = state_34255;
(statearr_34258[(8)] = inst_34167);

return statearr_34258;
})();
if(cljs.core.truth_(inst_34168)){
var statearr_34259_34342 = state_34255__$1;
(statearr_34259_34342[(1)] = (22));

} else {
var statearr_34260_34343 = state_34255__$1;
(statearr_34260_34343[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (27))){
var inst_34203 = (state_34255[(9)]);
var inst_34198 = (state_34255[(10)]);
var inst_34196 = (state_34255[(11)]);
var inst_34123 = (state_34255[(12)]);
var inst_34203__$1 = cljs.core._nth.call(null,inst_34196,inst_34198);
var inst_34204 = cljs.core.async.put_BANG_.call(null,inst_34203__$1,inst_34123,done);
var state_34255__$1 = (function (){var statearr_34261 = state_34255;
(statearr_34261[(9)] = inst_34203__$1);

return statearr_34261;
})();
if(cljs.core.truth_(inst_34204)){
var statearr_34262_34344 = state_34255__$1;
(statearr_34262_34344[(1)] = (30));

} else {
var statearr_34263_34345 = state_34255__$1;
(statearr_34263_34345[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (1))){
var state_34255__$1 = state_34255;
var statearr_34264_34346 = state_34255__$1;
(statearr_34264_34346[(2)] = null);

(statearr_34264_34346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (24))){
var inst_34154 = (state_34255[(7)]);
var inst_34173 = (state_34255[(2)]);
var inst_34174 = cljs.core.next.call(null,inst_34154);
var inst_34132 = inst_34174;
var inst_34133 = null;
var inst_34134 = (0);
var inst_34135 = (0);
var state_34255__$1 = (function (){var statearr_34265 = state_34255;
(statearr_34265[(13)] = inst_34132);

(statearr_34265[(14)] = inst_34135);

(statearr_34265[(15)] = inst_34134);

(statearr_34265[(16)] = inst_34133);

(statearr_34265[(17)] = inst_34173);

return statearr_34265;
})();
var statearr_34266_34347 = state_34255__$1;
(statearr_34266_34347[(2)] = null);

(statearr_34266_34347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (39))){
var state_34255__$1 = state_34255;
var statearr_34270_34348 = state_34255__$1;
(statearr_34270_34348[(2)] = null);

(statearr_34270_34348[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (4))){
var inst_34123 = (state_34255[(12)]);
var inst_34123__$1 = (state_34255[(2)]);
var inst_34124 = (inst_34123__$1 == null);
var state_34255__$1 = (function (){var statearr_34271 = state_34255;
(statearr_34271[(12)] = inst_34123__$1);

return statearr_34271;
})();
if(cljs.core.truth_(inst_34124)){
var statearr_34272_34349 = state_34255__$1;
(statearr_34272_34349[(1)] = (5));

} else {
var statearr_34273_34350 = state_34255__$1;
(statearr_34273_34350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (15))){
var inst_34132 = (state_34255[(13)]);
var inst_34135 = (state_34255[(14)]);
var inst_34134 = (state_34255[(15)]);
var inst_34133 = (state_34255[(16)]);
var inst_34150 = (state_34255[(2)]);
var inst_34151 = (inst_34135 + (1));
var tmp34267 = inst_34132;
var tmp34268 = inst_34134;
var tmp34269 = inst_34133;
var inst_34132__$1 = tmp34267;
var inst_34133__$1 = tmp34269;
var inst_34134__$1 = tmp34268;
var inst_34135__$1 = inst_34151;
var state_34255__$1 = (function (){var statearr_34274 = state_34255;
(statearr_34274[(13)] = inst_34132__$1);

(statearr_34274[(14)] = inst_34135__$1);

(statearr_34274[(15)] = inst_34134__$1);

(statearr_34274[(16)] = inst_34133__$1);

(statearr_34274[(18)] = inst_34150);

return statearr_34274;
})();
var statearr_34275_34351 = state_34255__$1;
(statearr_34275_34351[(2)] = null);

(statearr_34275_34351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (21))){
var inst_34177 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34279_34352 = state_34255__$1;
(statearr_34279_34352[(2)] = inst_34177);

(statearr_34279_34352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (31))){
var inst_34203 = (state_34255[(9)]);
var inst_34207 = done.call(null,null);
var inst_34208 = cljs.core.async.untap_STAR_.call(null,m,inst_34203);
var state_34255__$1 = (function (){var statearr_34280 = state_34255;
(statearr_34280[(19)] = inst_34207);

return statearr_34280;
})();
var statearr_34281_34353 = state_34255__$1;
(statearr_34281_34353[(2)] = inst_34208);

(statearr_34281_34353[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (32))){
var inst_34198 = (state_34255[(10)]);
var inst_34196 = (state_34255[(11)]);
var inst_34195 = (state_34255[(20)]);
var inst_34197 = (state_34255[(21)]);
var inst_34210 = (state_34255[(2)]);
var inst_34211 = (inst_34198 + (1));
var tmp34276 = inst_34196;
var tmp34277 = inst_34195;
var tmp34278 = inst_34197;
var inst_34195__$1 = tmp34277;
var inst_34196__$1 = tmp34276;
var inst_34197__$1 = tmp34278;
var inst_34198__$1 = inst_34211;
var state_34255__$1 = (function (){var statearr_34282 = state_34255;
(statearr_34282[(10)] = inst_34198__$1);

(statearr_34282[(11)] = inst_34196__$1);

(statearr_34282[(22)] = inst_34210);

(statearr_34282[(20)] = inst_34195__$1);

(statearr_34282[(21)] = inst_34197__$1);

return statearr_34282;
})();
var statearr_34283_34354 = state_34255__$1;
(statearr_34283_34354[(2)] = null);

(statearr_34283_34354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (40))){
var inst_34223 = (state_34255[(23)]);
var inst_34227 = done.call(null,null);
var inst_34228 = cljs.core.async.untap_STAR_.call(null,m,inst_34223);
var state_34255__$1 = (function (){var statearr_34284 = state_34255;
(statearr_34284[(24)] = inst_34227);

return statearr_34284;
})();
var statearr_34285_34355 = state_34255__$1;
(statearr_34285_34355[(2)] = inst_34228);

(statearr_34285_34355[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (33))){
var inst_34214 = (state_34255[(25)]);
var inst_34216 = cljs.core.chunked_seq_QMARK_.call(null,inst_34214);
var state_34255__$1 = state_34255;
if(inst_34216){
var statearr_34286_34356 = state_34255__$1;
(statearr_34286_34356[(1)] = (36));

} else {
var statearr_34287_34357 = state_34255__$1;
(statearr_34287_34357[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (13))){
var inst_34144 = (state_34255[(26)]);
var inst_34147 = cljs.core.async.close_BANG_.call(null,inst_34144);
var state_34255__$1 = state_34255;
var statearr_34288_34358 = state_34255__$1;
(statearr_34288_34358[(2)] = inst_34147);

(statearr_34288_34358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (22))){
var inst_34167 = (state_34255[(8)]);
var inst_34170 = cljs.core.async.close_BANG_.call(null,inst_34167);
var state_34255__$1 = state_34255;
var statearr_34289_34359 = state_34255__$1;
(statearr_34289_34359[(2)] = inst_34170);

(statearr_34289_34359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (36))){
var inst_34214 = (state_34255[(25)]);
var inst_34218 = cljs.core.chunk_first.call(null,inst_34214);
var inst_34219 = cljs.core.chunk_rest.call(null,inst_34214);
var inst_34220 = cljs.core.count.call(null,inst_34218);
var inst_34195 = inst_34219;
var inst_34196 = inst_34218;
var inst_34197 = inst_34220;
var inst_34198 = (0);
var state_34255__$1 = (function (){var statearr_34290 = state_34255;
(statearr_34290[(10)] = inst_34198);

(statearr_34290[(11)] = inst_34196);

(statearr_34290[(20)] = inst_34195);

(statearr_34290[(21)] = inst_34197);

return statearr_34290;
})();
var statearr_34291_34360 = state_34255__$1;
(statearr_34291_34360[(2)] = null);

(statearr_34291_34360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (41))){
var inst_34214 = (state_34255[(25)]);
var inst_34230 = (state_34255[(2)]);
var inst_34231 = cljs.core.next.call(null,inst_34214);
var inst_34195 = inst_34231;
var inst_34196 = null;
var inst_34197 = (0);
var inst_34198 = (0);
var state_34255__$1 = (function (){var statearr_34292 = state_34255;
(statearr_34292[(10)] = inst_34198);

(statearr_34292[(11)] = inst_34196);

(statearr_34292[(27)] = inst_34230);

(statearr_34292[(20)] = inst_34195);

(statearr_34292[(21)] = inst_34197);

return statearr_34292;
})();
var statearr_34293_34361 = state_34255__$1;
(statearr_34293_34361[(2)] = null);

(statearr_34293_34361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (43))){
var state_34255__$1 = state_34255;
var statearr_34294_34362 = state_34255__$1;
(statearr_34294_34362[(2)] = null);

(statearr_34294_34362[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (29))){
var inst_34239 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34295_34363 = state_34255__$1;
(statearr_34295_34363[(2)] = inst_34239);

(statearr_34295_34363[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (44))){
var inst_34248 = (state_34255[(2)]);
var state_34255__$1 = (function (){var statearr_34296 = state_34255;
(statearr_34296[(28)] = inst_34248);

return statearr_34296;
})();
var statearr_34297_34364 = state_34255__$1;
(statearr_34297_34364[(2)] = null);

(statearr_34297_34364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (6))){
var inst_34187 = (state_34255[(29)]);
var inst_34186 = cljs.core.deref.call(null,cs);
var inst_34187__$1 = cljs.core.keys.call(null,inst_34186);
var inst_34188 = cljs.core.count.call(null,inst_34187__$1);
var inst_34189 = cljs.core.reset_BANG_.call(null,dctr,inst_34188);
var inst_34194 = cljs.core.seq.call(null,inst_34187__$1);
var inst_34195 = inst_34194;
var inst_34196 = null;
var inst_34197 = (0);
var inst_34198 = (0);
var state_34255__$1 = (function (){var statearr_34298 = state_34255;
(statearr_34298[(10)] = inst_34198);

(statearr_34298[(11)] = inst_34196);

(statearr_34298[(20)] = inst_34195);

(statearr_34298[(21)] = inst_34197);

(statearr_34298[(30)] = inst_34189);

(statearr_34298[(29)] = inst_34187__$1);

return statearr_34298;
})();
var statearr_34299_34365 = state_34255__$1;
(statearr_34299_34365[(2)] = null);

(statearr_34299_34365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (28))){
var inst_34195 = (state_34255[(20)]);
var inst_34214 = (state_34255[(25)]);
var inst_34214__$1 = cljs.core.seq.call(null,inst_34195);
var state_34255__$1 = (function (){var statearr_34300 = state_34255;
(statearr_34300[(25)] = inst_34214__$1);

return statearr_34300;
})();
if(inst_34214__$1){
var statearr_34301_34366 = state_34255__$1;
(statearr_34301_34366[(1)] = (33));

} else {
var statearr_34302_34367 = state_34255__$1;
(statearr_34302_34367[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (25))){
var inst_34198 = (state_34255[(10)]);
var inst_34197 = (state_34255[(21)]);
var inst_34200 = (inst_34198 < inst_34197);
var inst_34201 = inst_34200;
var state_34255__$1 = state_34255;
if(cljs.core.truth_(inst_34201)){
var statearr_34303_34368 = state_34255__$1;
(statearr_34303_34368[(1)] = (27));

} else {
var statearr_34304_34369 = state_34255__$1;
(statearr_34304_34369[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (34))){
var state_34255__$1 = state_34255;
var statearr_34305_34370 = state_34255__$1;
(statearr_34305_34370[(2)] = null);

(statearr_34305_34370[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (17))){
var state_34255__$1 = state_34255;
var statearr_34306_34371 = state_34255__$1;
(statearr_34306_34371[(2)] = null);

(statearr_34306_34371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (3))){
var inst_34253 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34255__$1,inst_34253);
} else {
if((state_val_34256 === (12))){
var inst_34182 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34307_34372 = state_34255__$1;
(statearr_34307_34372[(2)] = inst_34182);

(statearr_34307_34372[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (2))){
var state_34255__$1 = state_34255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34255__$1,(4),ch);
} else {
if((state_val_34256 === (23))){
var state_34255__$1 = state_34255;
var statearr_34308_34373 = state_34255__$1;
(statearr_34308_34373[(2)] = null);

(statearr_34308_34373[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (35))){
var inst_34237 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34309_34374 = state_34255__$1;
(statearr_34309_34374[(2)] = inst_34237);

(statearr_34309_34374[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (19))){
var inst_34154 = (state_34255[(7)]);
var inst_34158 = cljs.core.chunk_first.call(null,inst_34154);
var inst_34159 = cljs.core.chunk_rest.call(null,inst_34154);
var inst_34160 = cljs.core.count.call(null,inst_34158);
var inst_34132 = inst_34159;
var inst_34133 = inst_34158;
var inst_34134 = inst_34160;
var inst_34135 = (0);
var state_34255__$1 = (function (){var statearr_34310 = state_34255;
(statearr_34310[(13)] = inst_34132);

(statearr_34310[(14)] = inst_34135);

(statearr_34310[(15)] = inst_34134);

(statearr_34310[(16)] = inst_34133);

return statearr_34310;
})();
var statearr_34311_34375 = state_34255__$1;
(statearr_34311_34375[(2)] = null);

(statearr_34311_34375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (11))){
var inst_34132 = (state_34255[(13)]);
var inst_34154 = (state_34255[(7)]);
var inst_34154__$1 = cljs.core.seq.call(null,inst_34132);
var state_34255__$1 = (function (){var statearr_34312 = state_34255;
(statearr_34312[(7)] = inst_34154__$1);

return statearr_34312;
})();
if(inst_34154__$1){
var statearr_34313_34376 = state_34255__$1;
(statearr_34313_34376[(1)] = (16));

} else {
var statearr_34314_34377 = state_34255__$1;
(statearr_34314_34377[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (9))){
var inst_34184 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34315_34378 = state_34255__$1;
(statearr_34315_34378[(2)] = inst_34184);

(statearr_34315_34378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (5))){
var inst_34130 = cljs.core.deref.call(null,cs);
var inst_34131 = cljs.core.seq.call(null,inst_34130);
var inst_34132 = inst_34131;
var inst_34133 = null;
var inst_34134 = (0);
var inst_34135 = (0);
var state_34255__$1 = (function (){var statearr_34316 = state_34255;
(statearr_34316[(13)] = inst_34132);

(statearr_34316[(14)] = inst_34135);

(statearr_34316[(15)] = inst_34134);

(statearr_34316[(16)] = inst_34133);

return statearr_34316;
})();
var statearr_34317_34379 = state_34255__$1;
(statearr_34317_34379[(2)] = null);

(statearr_34317_34379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (14))){
var state_34255__$1 = state_34255;
var statearr_34318_34380 = state_34255__$1;
(statearr_34318_34380[(2)] = null);

(statearr_34318_34380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (45))){
var inst_34245 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34319_34381 = state_34255__$1;
(statearr_34319_34381[(2)] = inst_34245);

(statearr_34319_34381[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (26))){
var inst_34187 = (state_34255[(29)]);
var inst_34241 = (state_34255[(2)]);
var inst_34242 = cljs.core.seq.call(null,inst_34187);
var state_34255__$1 = (function (){var statearr_34320 = state_34255;
(statearr_34320[(31)] = inst_34241);

return statearr_34320;
})();
if(inst_34242){
var statearr_34321_34382 = state_34255__$1;
(statearr_34321_34382[(1)] = (42));

} else {
var statearr_34322_34383 = state_34255__$1;
(statearr_34322_34383[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (16))){
var inst_34154 = (state_34255[(7)]);
var inst_34156 = cljs.core.chunked_seq_QMARK_.call(null,inst_34154);
var state_34255__$1 = state_34255;
if(inst_34156){
var statearr_34323_34384 = state_34255__$1;
(statearr_34323_34384[(1)] = (19));

} else {
var statearr_34324_34385 = state_34255__$1;
(statearr_34324_34385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (38))){
var inst_34234 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34325_34386 = state_34255__$1;
(statearr_34325_34386[(2)] = inst_34234);

(statearr_34325_34386[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (30))){
var state_34255__$1 = state_34255;
var statearr_34326_34387 = state_34255__$1;
(statearr_34326_34387[(2)] = null);

(statearr_34326_34387[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (10))){
var inst_34135 = (state_34255[(14)]);
var inst_34133 = (state_34255[(16)]);
var inst_34143 = cljs.core._nth.call(null,inst_34133,inst_34135);
var inst_34144 = cljs.core.nth.call(null,inst_34143,(0),null);
var inst_34145 = cljs.core.nth.call(null,inst_34143,(1),null);
var state_34255__$1 = (function (){var statearr_34327 = state_34255;
(statearr_34327[(26)] = inst_34144);

return statearr_34327;
})();
if(cljs.core.truth_(inst_34145)){
var statearr_34328_34388 = state_34255__$1;
(statearr_34328_34388[(1)] = (13));

} else {
var statearr_34329_34389 = state_34255__$1;
(statearr_34329_34389[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (18))){
var inst_34180 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34330_34390 = state_34255__$1;
(statearr_34330_34390[(2)] = inst_34180);

(statearr_34330_34390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (42))){
var state_34255__$1 = state_34255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34255__$1,(45),dchan);
} else {
if((state_val_34256 === (37))){
var inst_34223 = (state_34255[(23)]);
var inst_34123 = (state_34255[(12)]);
var inst_34214 = (state_34255[(25)]);
var inst_34223__$1 = cljs.core.first.call(null,inst_34214);
var inst_34224 = cljs.core.async.put_BANG_.call(null,inst_34223__$1,inst_34123,done);
var state_34255__$1 = (function (){var statearr_34331 = state_34255;
(statearr_34331[(23)] = inst_34223__$1);

return statearr_34331;
})();
if(cljs.core.truth_(inst_34224)){
var statearr_34332_34391 = state_34255__$1;
(statearr_34332_34391[(1)] = (39));

} else {
var statearr_34333_34392 = state_34255__$1;
(statearr_34333_34392[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (8))){
var inst_34135 = (state_34255[(14)]);
var inst_34134 = (state_34255[(15)]);
var inst_34137 = (inst_34135 < inst_34134);
var inst_34138 = inst_34137;
var state_34255__$1 = state_34255;
if(cljs.core.truth_(inst_34138)){
var statearr_34334_34393 = state_34255__$1;
(statearr_34334_34393[(1)] = (10));

} else {
var statearr_34335_34394 = state_34255__$1;
(statearr_34335_34394[(1)] = (11));

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
});})(c__33521__auto___34340,cs,m,dchan,dctr,done))
;
return ((function (switch__33426__auto__,c__33521__auto___34340,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33427__auto__ = null;
var cljs$core$async$mult_$_state_machine__33427__auto____0 = (function (){
var statearr_34336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34336[(0)] = cljs$core$async$mult_$_state_machine__33427__auto__);

(statearr_34336[(1)] = (1));

return statearr_34336;
});
var cljs$core$async$mult_$_state_machine__33427__auto____1 = (function (state_34255){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_34255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e34337){if((e34337 instanceof Object)){
var ex__33430__auto__ = e34337;
var statearr_34338_34395 = state_34255;
(statearr_34338_34395[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34396 = state_34255;
state_34255 = G__34396;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33427__auto__ = function(state_34255){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33427__auto____1.call(this,state_34255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33427__auto____0;
cljs$core$async$mult_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33427__auto____1;
return cljs$core$async$mult_$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___34340,cs,m,dchan,dctr,done))
})();
var state__33523__auto__ = (function (){var statearr_34339 = f__33522__auto__.call(null);
(statearr_34339[(6)] = c__33521__auto___34340);

return statearr_34339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___34340,cs,m,dchan,dctr,done))
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
var G__34398 = arguments.length;
switch (G__34398) {
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
var len__4730__auto___34410 = arguments.length;
var i__4731__auto___34411 = (0);
while(true){
if((i__4731__auto___34411 < len__4730__auto___34410)){
args__4736__auto__.push((arguments[i__4731__auto___34411]));

var G__34412 = (i__4731__auto___34411 + (1));
i__4731__auto___34411 = G__34412;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34404){
var map__34405 = p__34404;
var map__34405__$1 = (((((!((map__34405 == null))))?(((((map__34405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34405):map__34405);
var opts = map__34405__$1;
var statearr_34407_34413 = state;
(statearr_34407_34413[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__34405,map__34405__$1,opts){
return (function (val){
var statearr_34408_34414 = state;
(statearr_34408_34414[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34405,map__34405__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_34409_34415 = state;
(statearr_34409_34415[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34400){
var G__34401 = cljs.core.first.call(null,seq34400);
var seq34400__$1 = cljs.core.next.call(null,seq34400);
var G__34402 = cljs.core.first.call(null,seq34400__$1);
var seq34400__$2 = cljs.core.next.call(null,seq34400__$1);
var G__34403 = cljs.core.first.call(null,seq34400__$2);
var seq34400__$3 = cljs.core.next.call(null,seq34400__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34401,G__34402,G__34403,seq34400__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34416 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34417){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34417 = meta34417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34418,meta34417__$1){
var self__ = this;
var _34418__$1 = this;
return (new cljs.core.async.t_cljs$core$async34416(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34417__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34418){
var self__ = this;
var _34418__$1 = this;
return self__.meta34417;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34416.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34417","meta34417",719617664,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34416.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34416";

cljs.core.async.t_cljs$core$async34416.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34416");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34416.
 */
cljs.core.async.__GT_t_cljs$core$async34416 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34416(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34417){
return (new cljs.core.async.t_cljs$core$async34416(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34417));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34416(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33521__auto___34580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___34580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___34580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34520){
var state_val_34521 = (state_34520[(1)]);
if((state_val_34521 === (7))){
var inst_34435 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34522_34581 = state_34520__$1;
(statearr_34522_34581[(2)] = inst_34435);

(statearr_34522_34581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (20))){
var inst_34447 = (state_34520[(7)]);
var state_34520__$1 = state_34520;
var statearr_34523_34582 = state_34520__$1;
(statearr_34523_34582[(2)] = inst_34447);

(statearr_34523_34582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (27))){
var state_34520__$1 = state_34520;
var statearr_34524_34583 = state_34520__$1;
(statearr_34524_34583[(2)] = null);

(statearr_34524_34583[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (1))){
var inst_34422 = (state_34520[(8)]);
var inst_34422__$1 = calc_state.call(null);
var inst_34424 = (inst_34422__$1 == null);
var inst_34425 = cljs.core.not.call(null,inst_34424);
var state_34520__$1 = (function (){var statearr_34525 = state_34520;
(statearr_34525[(8)] = inst_34422__$1);

return statearr_34525;
})();
if(inst_34425){
var statearr_34526_34584 = state_34520__$1;
(statearr_34526_34584[(1)] = (2));

} else {
var statearr_34527_34585 = state_34520__$1;
(statearr_34527_34585[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (24))){
var inst_34471 = (state_34520[(9)]);
var inst_34494 = (state_34520[(10)]);
var inst_34480 = (state_34520[(11)]);
var inst_34494__$1 = inst_34471.call(null,inst_34480);
var state_34520__$1 = (function (){var statearr_34528 = state_34520;
(statearr_34528[(10)] = inst_34494__$1);

return statearr_34528;
})();
if(cljs.core.truth_(inst_34494__$1)){
var statearr_34529_34586 = state_34520__$1;
(statearr_34529_34586[(1)] = (29));

} else {
var statearr_34530_34587 = state_34520__$1;
(statearr_34530_34587[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (4))){
var inst_34438 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
if(cljs.core.truth_(inst_34438)){
var statearr_34531_34588 = state_34520__$1;
(statearr_34531_34588[(1)] = (8));

} else {
var statearr_34532_34589 = state_34520__$1;
(statearr_34532_34589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (15))){
var inst_34465 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
if(cljs.core.truth_(inst_34465)){
var statearr_34533_34590 = state_34520__$1;
(statearr_34533_34590[(1)] = (19));

} else {
var statearr_34534_34591 = state_34520__$1;
(statearr_34534_34591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (21))){
var inst_34470 = (state_34520[(12)]);
var inst_34470__$1 = (state_34520[(2)]);
var inst_34471 = cljs.core.get.call(null,inst_34470__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34472 = cljs.core.get.call(null,inst_34470__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34473 = cljs.core.get.call(null,inst_34470__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34520__$1 = (function (){var statearr_34535 = state_34520;
(statearr_34535[(12)] = inst_34470__$1);

(statearr_34535[(9)] = inst_34471);

(statearr_34535[(13)] = inst_34472);

return statearr_34535;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34520__$1,(22),inst_34473);
} else {
if((state_val_34521 === (31))){
var inst_34502 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
if(cljs.core.truth_(inst_34502)){
var statearr_34536_34592 = state_34520__$1;
(statearr_34536_34592[(1)] = (32));

} else {
var statearr_34537_34593 = state_34520__$1;
(statearr_34537_34593[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (32))){
var inst_34479 = (state_34520[(14)]);
var state_34520__$1 = state_34520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34520__$1,(35),out,inst_34479);
} else {
if((state_val_34521 === (33))){
var inst_34470 = (state_34520[(12)]);
var inst_34447 = inst_34470;
var state_34520__$1 = (function (){var statearr_34538 = state_34520;
(statearr_34538[(7)] = inst_34447);

return statearr_34538;
})();
var statearr_34539_34594 = state_34520__$1;
(statearr_34539_34594[(2)] = null);

(statearr_34539_34594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (13))){
var inst_34447 = (state_34520[(7)]);
var inst_34454 = inst_34447.cljs$lang$protocol_mask$partition0$;
var inst_34455 = (inst_34454 & (64));
var inst_34456 = inst_34447.cljs$core$ISeq$;
var inst_34457 = (cljs.core.PROTOCOL_SENTINEL === inst_34456);
var inst_34458 = ((inst_34455) || (inst_34457));
var state_34520__$1 = state_34520;
if(cljs.core.truth_(inst_34458)){
var statearr_34540_34595 = state_34520__$1;
(statearr_34540_34595[(1)] = (16));

} else {
var statearr_34541_34596 = state_34520__$1;
(statearr_34541_34596[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (22))){
var inst_34479 = (state_34520[(14)]);
var inst_34480 = (state_34520[(11)]);
var inst_34478 = (state_34520[(2)]);
var inst_34479__$1 = cljs.core.nth.call(null,inst_34478,(0),null);
var inst_34480__$1 = cljs.core.nth.call(null,inst_34478,(1),null);
var inst_34481 = (inst_34479__$1 == null);
var inst_34482 = cljs.core._EQ_.call(null,inst_34480__$1,change);
var inst_34483 = ((inst_34481) || (inst_34482));
var state_34520__$1 = (function (){var statearr_34542 = state_34520;
(statearr_34542[(14)] = inst_34479__$1);

(statearr_34542[(11)] = inst_34480__$1);

return statearr_34542;
})();
if(cljs.core.truth_(inst_34483)){
var statearr_34543_34597 = state_34520__$1;
(statearr_34543_34597[(1)] = (23));

} else {
var statearr_34544_34598 = state_34520__$1;
(statearr_34544_34598[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (36))){
var inst_34470 = (state_34520[(12)]);
var inst_34447 = inst_34470;
var state_34520__$1 = (function (){var statearr_34545 = state_34520;
(statearr_34545[(7)] = inst_34447);

return statearr_34545;
})();
var statearr_34546_34599 = state_34520__$1;
(statearr_34546_34599[(2)] = null);

(statearr_34546_34599[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (29))){
var inst_34494 = (state_34520[(10)]);
var state_34520__$1 = state_34520;
var statearr_34547_34600 = state_34520__$1;
(statearr_34547_34600[(2)] = inst_34494);

(statearr_34547_34600[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (6))){
var state_34520__$1 = state_34520;
var statearr_34548_34601 = state_34520__$1;
(statearr_34548_34601[(2)] = false);

(statearr_34548_34601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (28))){
var inst_34490 = (state_34520[(2)]);
var inst_34491 = calc_state.call(null);
var inst_34447 = inst_34491;
var state_34520__$1 = (function (){var statearr_34549 = state_34520;
(statearr_34549[(7)] = inst_34447);

(statearr_34549[(15)] = inst_34490);

return statearr_34549;
})();
var statearr_34550_34602 = state_34520__$1;
(statearr_34550_34602[(2)] = null);

(statearr_34550_34602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (25))){
var inst_34516 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34551_34603 = state_34520__$1;
(statearr_34551_34603[(2)] = inst_34516);

(statearr_34551_34603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (34))){
var inst_34514 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34552_34604 = state_34520__$1;
(statearr_34552_34604[(2)] = inst_34514);

(statearr_34552_34604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (17))){
var state_34520__$1 = state_34520;
var statearr_34553_34605 = state_34520__$1;
(statearr_34553_34605[(2)] = false);

(statearr_34553_34605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (3))){
var state_34520__$1 = state_34520;
var statearr_34554_34606 = state_34520__$1;
(statearr_34554_34606[(2)] = false);

(statearr_34554_34606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (12))){
var inst_34518 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34520__$1,inst_34518);
} else {
if((state_val_34521 === (2))){
var inst_34422 = (state_34520[(8)]);
var inst_34427 = inst_34422.cljs$lang$protocol_mask$partition0$;
var inst_34428 = (inst_34427 & (64));
var inst_34429 = inst_34422.cljs$core$ISeq$;
var inst_34430 = (cljs.core.PROTOCOL_SENTINEL === inst_34429);
var inst_34431 = ((inst_34428) || (inst_34430));
var state_34520__$1 = state_34520;
if(cljs.core.truth_(inst_34431)){
var statearr_34555_34607 = state_34520__$1;
(statearr_34555_34607[(1)] = (5));

} else {
var statearr_34556_34608 = state_34520__$1;
(statearr_34556_34608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (23))){
var inst_34479 = (state_34520[(14)]);
var inst_34485 = (inst_34479 == null);
var state_34520__$1 = state_34520;
if(cljs.core.truth_(inst_34485)){
var statearr_34557_34609 = state_34520__$1;
(statearr_34557_34609[(1)] = (26));

} else {
var statearr_34558_34610 = state_34520__$1;
(statearr_34558_34610[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (35))){
var inst_34505 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
if(cljs.core.truth_(inst_34505)){
var statearr_34559_34611 = state_34520__$1;
(statearr_34559_34611[(1)] = (36));

} else {
var statearr_34560_34612 = state_34520__$1;
(statearr_34560_34612[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (19))){
var inst_34447 = (state_34520[(7)]);
var inst_34467 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34447);
var state_34520__$1 = state_34520;
var statearr_34561_34613 = state_34520__$1;
(statearr_34561_34613[(2)] = inst_34467);

(statearr_34561_34613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (11))){
var inst_34447 = (state_34520[(7)]);
var inst_34451 = (inst_34447 == null);
var inst_34452 = cljs.core.not.call(null,inst_34451);
var state_34520__$1 = state_34520;
if(inst_34452){
var statearr_34562_34614 = state_34520__$1;
(statearr_34562_34614[(1)] = (13));

} else {
var statearr_34563_34615 = state_34520__$1;
(statearr_34563_34615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (9))){
var inst_34422 = (state_34520[(8)]);
var state_34520__$1 = state_34520;
var statearr_34564_34616 = state_34520__$1;
(statearr_34564_34616[(2)] = inst_34422);

(statearr_34564_34616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (5))){
var state_34520__$1 = state_34520;
var statearr_34565_34617 = state_34520__$1;
(statearr_34565_34617[(2)] = true);

(statearr_34565_34617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (14))){
var state_34520__$1 = state_34520;
var statearr_34566_34618 = state_34520__$1;
(statearr_34566_34618[(2)] = false);

(statearr_34566_34618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (26))){
var inst_34480 = (state_34520[(11)]);
var inst_34487 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34480);
var state_34520__$1 = state_34520;
var statearr_34567_34619 = state_34520__$1;
(statearr_34567_34619[(2)] = inst_34487);

(statearr_34567_34619[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (16))){
var state_34520__$1 = state_34520;
var statearr_34568_34620 = state_34520__$1;
(statearr_34568_34620[(2)] = true);

(statearr_34568_34620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (38))){
var inst_34510 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34569_34621 = state_34520__$1;
(statearr_34569_34621[(2)] = inst_34510);

(statearr_34569_34621[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (30))){
var inst_34471 = (state_34520[(9)]);
var inst_34472 = (state_34520[(13)]);
var inst_34480 = (state_34520[(11)]);
var inst_34497 = cljs.core.empty_QMARK_.call(null,inst_34471);
var inst_34498 = inst_34472.call(null,inst_34480);
var inst_34499 = cljs.core.not.call(null,inst_34498);
var inst_34500 = ((inst_34497) && (inst_34499));
var state_34520__$1 = state_34520;
var statearr_34570_34622 = state_34520__$1;
(statearr_34570_34622[(2)] = inst_34500);

(statearr_34570_34622[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (10))){
var inst_34422 = (state_34520[(8)]);
var inst_34443 = (state_34520[(2)]);
var inst_34444 = cljs.core.get.call(null,inst_34443,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34445 = cljs.core.get.call(null,inst_34443,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34446 = cljs.core.get.call(null,inst_34443,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34447 = inst_34422;
var state_34520__$1 = (function (){var statearr_34571 = state_34520;
(statearr_34571[(7)] = inst_34447);

(statearr_34571[(16)] = inst_34445);

(statearr_34571[(17)] = inst_34444);

(statearr_34571[(18)] = inst_34446);

return statearr_34571;
})();
var statearr_34572_34623 = state_34520__$1;
(statearr_34572_34623[(2)] = null);

(statearr_34572_34623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (18))){
var inst_34462 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34573_34624 = state_34520__$1;
(statearr_34573_34624[(2)] = inst_34462);

(statearr_34573_34624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (37))){
var state_34520__$1 = state_34520;
var statearr_34574_34625 = state_34520__$1;
(statearr_34574_34625[(2)] = null);

(statearr_34574_34625[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (8))){
var inst_34422 = (state_34520[(8)]);
var inst_34440 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34422);
var state_34520__$1 = state_34520;
var statearr_34575_34626 = state_34520__$1;
(statearr_34575_34626[(2)] = inst_34440);

(statearr_34575_34626[(1)] = (10));


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
});})(c__33521__auto___34580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33426__auto__,c__33521__auto___34580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33427__auto__ = null;
var cljs$core$async$mix_$_state_machine__33427__auto____0 = (function (){
var statearr_34576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34576[(0)] = cljs$core$async$mix_$_state_machine__33427__auto__);

(statearr_34576[(1)] = (1));

return statearr_34576;
});
var cljs$core$async$mix_$_state_machine__33427__auto____1 = (function (state_34520){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_34520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e34577){if((e34577 instanceof Object)){
var ex__33430__auto__ = e34577;
var statearr_34578_34627 = state_34520;
(statearr_34578_34627[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34628 = state_34520;
state_34520 = G__34628;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33427__auto__ = function(state_34520){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33427__auto____1.call(this,state_34520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33427__auto____0;
cljs$core$async$mix_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33427__auto____1;
return cljs$core$async$mix_$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___34580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33523__auto__ = (function (){var statearr_34579 = f__33522__auto__.call(null);
(statearr_34579[(6)] = c__33521__auto___34580);

return statearr_34579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___34580,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__34630 = arguments.length;
switch (G__34630) {
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
var G__34634 = arguments.length;
switch (G__34634) {
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
return (function (p1__34632_SHARP_){
if(cljs.core.truth_(p1__34632_SHARP_.call(null,topic))){
return p1__34632_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34632_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34635 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34635 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34636){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34636 = meta34636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34637,meta34636__$1){
var self__ = this;
var _34637__$1 = this;
return (new cljs.core.async.t_cljs$core$async34635(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34636__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34637){
var self__ = this;
var _34637__$1 = this;
return self__.meta34636;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34635.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34635.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34636","meta34636",1872020403,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34635";

cljs.core.async.t_cljs$core$async34635.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34635");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34635.
 */
cljs.core.async.__GT_t_cljs$core$async34635 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34635(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34636){
return (new cljs.core.async.t_cljs$core$async34635(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34636));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34635(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33521__auto___34755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___34755,mults,ensure_mult,p){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___34755,mults,ensure_mult,p){
return (function (state_34709){
var state_val_34710 = (state_34709[(1)]);
if((state_val_34710 === (7))){
var inst_34705 = (state_34709[(2)]);
var state_34709__$1 = state_34709;
var statearr_34711_34756 = state_34709__$1;
(statearr_34711_34756[(2)] = inst_34705);

(statearr_34711_34756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (20))){
var state_34709__$1 = state_34709;
var statearr_34712_34757 = state_34709__$1;
(statearr_34712_34757[(2)] = null);

(statearr_34712_34757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (1))){
var state_34709__$1 = state_34709;
var statearr_34713_34758 = state_34709__$1;
(statearr_34713_34758[(2)] = null);

(statearr_34713_34758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (24))){
var inst_34688 = (state_34709[(7)]);
var inst_34697 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34688);
var state_34709__$1 = state_34709;
var statearr_34714_34759 = state_34709__$1;
(statearr_34714_34759[(2)] = inst_34697);

(statearr_34714_34759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (4))){
var inst_34640 = (state_34709[(8)]);
var inst_34640__$1 = (state_34709[(2)]);
var inst_34641 = (inst_34640__$1 == null);
var state_34709__$1 = (function (){var statearr_34715 = state_34709;
(statearr_34715[(8)] = inst_34640__$1);

return statearr_34715;
})();
if(cljs.core.truth_(inst_34641)){
var statearr_34716_34760 = state_34709__$1;
(statearr_34716_34760[(1)] = (5));

} else {
var statearr_34717_34761 = state_34709__$1;
(statearr_34717_34761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (15))){
var inst_34682 = (state_34709[(2)]);
var state_34709__$1 = state_34709;
var statearr_34718_34762 = state_34709__$1;
(statearr_34718_34762[(2)] = inst_34682);

(statearr_34718_34762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (21))){
var inst_34702 = (state_34709[(2)]);
var state_34709__$1 = (function (){var statearr_34719 = state_34709;
(statearr_34719[(9)] = inst_34702);

return statearr_34719;
})();
var statearr_34720_34763 = state_34709__$1;
(statearr_34720_34763[(2)] = null);

(statearr_34720_34763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (13))){
var inst_34664 = (state_34709[(10)]);
var inst_34666 = cljs.core.chunked_seq_QMARK_.call(null,inst_34664);
var state_34709__$1 = state_34709;
if(inst_34666){
var statearr_34721_34764 = state_34709__$1;
(statearr_34721_34764[(1)] = (16));

} else {
var statearr_34722_34765 = state_34709__$1;
(statearr_34722_34765[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (22))){
var inst_34694 = (state_34709[(2)]);
var state_34709__$1 = state_34709;
if(cljs.core.truth_(inst_34694)){
var statearr_34723_34766 = state_34709__$1;
(statearr_34723_34766[(1)] = (23));

} else {
var statearr_34724_34767 = state_34709__$1;
(statearr_34724_34767[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (6))){
var inst_34690 = (state_34709[(11)]);
var inst_34640 = (state_34709[(8)]);
var inst_34688 = (state_34709[(7)]);
var inst_34688__$1 = topic_fn.call(null,inst_34640);
var inst_34689 = cljs.core.deref.call(null,mults);
var inst_34690__$1 = cljs.core.get.call(null,inst_34689,inst_34688__$1);
var state_34709__$1 = (function (){var statearr_34725 = state_34709;
(statearr_34725[(11)] = inst_34690__$1);

(statearr_34725[(7)] = inst_34688__$1);

return statearr_34725;
})();
if(cljs.core.truth_(inst_34690__$1)){
var statearr_34726_34768 = state_34709__$1;
(statearr_34726_34768[(1)] = (19));

} else {
var statearr_34727_34769 = state_34709__$1;
(statearr_34727_34769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (25))){
var inst_34699 = (state_34709[(2)]);
var state_34709__$1 = state_34709;
var statearr_34728_34770 = state_34709__$1;
(statearr_34728_34770[(2)] = inst_34699);

(statearr_34728_34770[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (17))){
var inst_34664 = (state_34709[(10)]);
var inst_34673 = cljs.core.first.call(null,inst_34664);
var inst_34674 = cljs.core.async.muxch_STAR_.call(null,inst_34673);
var inst_34675 = cljs.core.async.close_BANG_.call(null,inst_34674);
var inst_34676 = cljs.core.next.call(null,inst_34664);
var inst_34650 = inst_34676;
var inst_34651 = null;
var inst_34652 = (0);
var inst_34653 = (0);
var state_34709__$1 = (function (){var statearr_34729 = state_34709;
(statearr_34729[(12)] = inst_34675);

(statearr_34729[(13)] = inst_34651);

(statearr_34729[(14)] = inst_34650);

(statearr_34729[(15)] = inst_34653);

(statearr_34729[(16)] = inst_34652);

return statearr_34729;
})();
var statearr_34730_34771 = state_34709__$1;
(statearr_34730_34771[(2)] = null);

(statearr_34730_34771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (3))){
var inst_34707 = (state_34709[(2)]);
var state_34709__$1 = state_34709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34709__$1,inst_34707);
} else {
if((state_val_34710 === (12))){
var inst_34684 = (state_34709[(2)]);
var state_34709__$1 = state_34709;
var statearr_34731_34772 = state_34709__$1;
(statearr_34731_34772[(2)] = inst_34684);

(statearr_34731_34772[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (2))){
var state_34709__$1 = state_34709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34709__$1,(4),ch);
} else {
if((state_val_34710 === (23))){
var state_34709__$1 = state_34709;
var statearr_34732_34773 = state_34709__$1;
(statearr_34732_34773[(2)] = null);

(statearr_34732_34773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (19))){
var inst_34690 = (state_34709[(11)]);
var inst_34640 = (state_34709[(8)]);
var inst_34692 = cljs.core.async.muxch_STAR_.call(null,inst_34690);
var state_34709__$1 = state_34709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34709__$1,(22),inst_34692,inst_34640);
} else {
if((state_val_34710 === (11))){
var inst_34664 = (state_34709[(10)]);
var inst_34650 = (state_34709[(14)]);
var inst_34664__$1 = cljs.core.seq.call(null,inst_34650);
var state_34709__$1 = (function (){var statearr_34733 = state_34709;
(statearr_34733[(10)] = inst_34664__$1);

return statearr_34733;
})();
if(inst_34664__$1){
var statearr_34734_34774 = state_34709__$1;
(statearr_34734_34774[(1)] = (13));

} else {
var statearr_34735_34775 = state_34709__$1;
(statearr_34735_34775[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (9))){
var inst_34686 = (state_34709[(2)]);
var state_34709__$1 = state_34709;
var statearr_34736_34776 = state_34709__$1;
(statearr_34736_34776[(2)] = inst_34686);

(statearr_34736_34776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (5))){
var inst_34647 = cljs.core.deref.call(null,mults);
var inst_34648 = cljs.core.vals.call(null,inst_34647);
var inst_34649 = cljs.core.seq.call(null,inst_34648);
var inst_34650 = inst_34649;
var inst_34651 = null;
var inst_34652 = (0);
var inst_34653 = (0);
var state_34709__$1 = (function (){var statearr_34737 = state_34709;
(statearr_34737[(13)] = inst_34651);

(statearr_34737[(14)] = inst_34650);

(statearr_34737[(15)] = inst_34653);

(statearr_34737[(16)] = inst_34652);

return statearr_34737;
})();
var statearr_34738_34777 = state_34709__$1;
(statearr_34738_34777[(2)] = null);

(statearr_34738_34777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (14))){
var state_34709__$1 = state_34709;
var statearr_34742_34778 = state_34709__$1;
(statearr_34742_34778[(2)] = null);

(statearr_34742_34778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (16))){
var inst_34664 = (state_34709[(10)]);
var inst_34668 = cljs.core.chunk_first.call(null,inst_34664);
var inst_34669 = cljs.core.chunk_rest.call(null,inst_34664);
var inst_34670 = cljs.core.count.call(null,inst_34668);
var inst_34650 = inst_34669;
var inst_34651 = inst_34668;
var inst_34652 = inst_34670;
var inst_34653 = (0);
var state_34709__$1 = (function (){var statearr_34743 = state_34709;
(statearr_34743[(13)] = inst_34651);

(statearr_34743[(14)] = inst_34650);

(statearr_34743[(15)] = inst_34653);

(statearr_34743[(16)] = inst_34652);

return statearr_34743;
})();
var statearr_34744_34779 = state_34709__$1;
(statearr_34744_34779[(2)] = null);

(statearr_34744_34779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (10))){
var inst_34651 = (state_34709[(13)]);
var inst_34650 = (state_34709[(14)]);
var inst_34653 = (state_34709[(15)]);
var inst_34652 = (state_34709[(16)]);
var inst_34658 = cljs.core._nth.call(null,inst_34651,inst_34653);
var inst_34659 = cljs.core.async.muxch_STAR_.call(null,inst_34658);
var inst_34660 = cljs.core.async.close_BANG_.call(null,inst_34659);
var inst_34661 = (inst_34653 + (1));
var tmp34739 = inst_34651;
var tmp34740 = inst_34650;
var tmp34741 = inst_34652;
var inst_34650__$1 = tmp34740;
var inst_34651__$1 = tmp34739;
var inst_34652__$1 = tmp34741;
var inst_34653__$1 = inst_34661;
var state_34709__$1 = (function (){var statearr_34745 = state_34709;
(statearr_34745[(17)] = inst_34660);

(statearr_34745[(13)] = inst_34651__$1);

(statearr_34745[(14)] = inst_34650__$1);

(statearr_34745[(15)] = inst_34653__$1);

(statearr_34745[(16)] = inst_34652__$1);

return statearr_34745;
})();
var statearr_34746_34780 = state_34709__$1;
(statearr_34746_34780[(2)] = null);

(statearr_34746_34780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (18))){
var inst_34679 = (state_34709[(2)]);
var state_34709__$1 = state_34709;
var statearr_34747_34781 = state_34709__$1;
(statearr_34747_34781[(2)] = inst_34679);

(statearr_34747_34781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34710 === (8))){
var inst_34653 = (state_34709[(15)]);
var inst_34652 = (state_34709[(16)]);
var inst_34655 = (inst_34653 < inst_34652);
var inst_34656 = inst_34655;
var state_34709__$1 = state_34709;
if(cljs.core.truth_(inst_34656)){
var statearr_34748_34782 = state_34709__$1;
(statearr_34748_34782[(1)] = (10));

} else {
var statearr_34749_34783 = state_34709__$1;
(statearr_34749_34783[(1)] = (11));

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
});})(c__33521__auto___34755,mults,ensure_mult,p))
;
return ((function (switch__33426__auto__,c__33521__auto___34755,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33427__auto__ = null;
var cljs$core$async$state_machine__33427__auto____0 = (function (){
var statearr_34750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34750[(0)] = cljs$core$async$state_machine__33427__auto__);

(statearr_34750[(1)] = (1));

return statearr_34750;
});
var cljs$core$async$state_machine__33427__auto____1 = (function (state_34709){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_34709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e34751){if((e34751 instanceof Object)){
var ex__33430__auto__ = e34751;
var statearr_34752_34784 = state_34709;
(statearr_34752_34784[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34785 = state_34709;
state_34709 = G__34785;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$state_machine__33427__auto__ = function(state_34709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33427__auto____1.call(this,state_34709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33427__auto____0;
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33427__auto____1;
return cljs$core$async$state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___34755,mults,ensure_mult,p))
})();
var state__33523__auto__ = (function (){var statearr_34753 = f__33522__auto__.call(null);
(statearr_34753[(6)] = c__33521__auto___34755);

return statearr_34753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___34755,mults,ensure_mult,p))
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
var G__34787 = arguments.length;
switch (G__34787) {
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
var G__34790 = arguments.length;
switch (G__34790) {
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
var G__34793 = arguments.length;
switch (G__34793) {
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
var c__33521__auto___34860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___34860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___34860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34832){
var state_val_34833 = (state_34832[(1)]);
if((state_val_34833 === (7))){
var state_34832__$1 = state_34832;
var statearr_34834_34861 = state_34832__$1;
(statearr_34834_34861[(2)] = null);

(statearr_34834_34861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (1))){
var state_34832__$1 = state_34832;
var statearr_34835_34862 = state_34832__$1;
(statearr_34835_34862[(2)] = null);

(statearr_34835_34862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (4))){
var inst_34796 = (state_34832[(7)]);
var inst_34798 = (inst_34796 < cnt);
var state_34832__$1 = state_34832;
if(cljs.core.truth_(inst_34798)){
var statearr_34836_34863 = state_34832__$1;
(statearr_34836_34863[(1)] = (6));

} else {
var statearr_34837_34864 = state_34832__$1;
(statearr_34837_34864[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (15))){
var inst_34828 = (state_34832[(2)]);
var state_34832__$1 = state_34832;
var statearr_34838_34865 = state_34832__$1;
(statearr_34838_34865[(2)] = inst_34828);

(statearr_34838_34865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (13))){
var inst_34821 = cljs.core.async.close_BANG_.call(null,out);
var state_34832__$1 = state_34832;
var statearr_34839_34866 = state_34832__$1;
(statearr_34839_34866[(2)] = inst_34821);

(statearr_34839_34866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (6))){
var state_34832__$1 = state_34832;
var statearr_34840_34867 = state_34832__$1;
(statearr_34840_34867[(2)] = null);

(statearr_34840_34867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (3))){
var inst_34830 = (state_34832[(2)]);
var state_34832__$1 = state_34832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34832__$1,inst_34830);
} else {
if((state_val_34833 === (12))){
var inst_34818 = (state_34832[(8)]);
var inst_34818__$1 = (state_34832[(2)]);
var inst_34819 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34818__$1);
var state_34832__$1 = (function (){var statearr_34841 = state_34832;
(statearr_34841[(8)] = inst_34818__$1);

return statearr_34841;
})();
if(cljs.core.truth_(inst_34819)){
var statearr_34842_34868 = state_34832__$1;
(statearr_34842_34868[(1)] = (13));

} else {
var statearr_34843_34869 = state_34832__$1;
(statearr_34843_34869[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (2))){
var inst_34795 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34796 = (0);
var state_34832__$1 = (function (){var statearr_34844 = state_34832;
(statearr_34844[(7)] = inst_34796);

(statearr_34844[(9)] = inst_34795);

return statearr_34844;
})();
var statearr_34845_34870 = state_34832__$1;
(statearr_34845_34870[(2)] = null);

(statearr_34845_34870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (11))){
var inst_34796 = (state_34832[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34832,(10),Object,null,(9));
var inst_34805 = chs__$1.call(null,inst_34796);
var inst_34806 = done.call(null,inst_34796);
var inst_34807 = cljs.core.async.take_BANG_.call(null,inst_34805,inst_34806);
var state_34832__$1 = state_34832;
var statearr_34846_34871 = state_34832__$1;
(statearr_34846_34871[(2)] = inst_34807);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34832__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (9))){
var inst_34796 = (state_34832[(7)]);
var inst_34809 = (state_34832[(2)]);
var inst_34810 = (inst_34796 + (1));
var inst_34796__$1 = inst_34810;
var state_34832__$1 = (function (){var statearr_34847 = state_34832;
(statearr_34847[(7)] = inst_34796__$1);

(statearr_34847[(10)] = inst_34809);

return statearr_34847;
})();
var statearr_34848_34872 = state_34832__$1;
(statearr_34848_34872[(2)] = null);

(statearr_34848_34872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (5))){
var inst_34816 = (state_34832[(2)]);
var state_34832__$1 = (function (){var statearr_34849 = state_34832;
(statearr_34849[(11)] = inst_34816);

return statearr_34849;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34832__$1,(12),dchan);
} else {
if((state_val_34833 === (14))){
var inst_34818 = (state_34832[(8)]);
var inst_34823 = cljs.core.apply.call(null,f,inst_34818);
var state_34832__$1 = state_34832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34832__$1,(16),out,inst_34823);
} else {
if((state_val_34833 === (16))){
var inst_34825 = (state_34832[(2)]);
var state_34832__$1 = (function (){var statearr_34850 = state_34832;
(statearr_34850[(12)] = inst_34825);

return statearr_34850;
})();
var statearr_34851_34873 = state_34832__$1;
(statearr_34851_34873[(2)] = null);

(statearr_34851_34873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (10))){
var inst_34800 = (state_34832[(2)]);
var inst_34801 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34832__$1 = (function (){var statearr_34852 = state_34832;
(statearr_34852[(13)] = inst_34800);

return statearr_34852;
})();
var statearr_34853_34874 = state_34832__$1;
(statearr_34853_34874[(2)] = inst_34801);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34832__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34833 === (8))){
var inst_34814 = (state_34832[(2)]);
var state_34832__$1 = state_34832;
var statearr_34854_34875 = state_34832__$1;
(statearr_34854_34875[(2)] = inst_34814);

(statearr_34854_34875[(1)] = (5));


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
});})(c__33521__auto___34860,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33426__auto__,c__33521__auto___34860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33427__auto__ = null;
var cljs$core$async$state_machine__33427__auto____0 = (function (){
var statearr_34855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34855[(0)] = cljs$core$async$state_machine__33427__auto__);

(statearr_34855[(1)] = (1));

return statearr_34855;
});
var cljs$core$async$state_machine__33427__auto____1 = (function (state_34832){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_34832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e34856){if((e34856 instanceof Object)){
var ex__33430__auto__ = e34856;
var statearr_34857_34876 = state_34832;
(statearr_34857_34876[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34877 = state_34832;
state_34832 = G__34877;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$state_machine__33427__auto__ = function(state_34832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33427__auto____1.call(this,state_34832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33427__auto____0;
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33427__auto____1;
return cljs$core$async$state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___34860,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33523__auto__ = (function (){var statearr_34858 = f__33522__auto__.call(null);
(statearr_34858[(6)] = c__33521__auto___34860);

return statearr_34858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___34860,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34880 = arguments.length;
switch (G__34880) {
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
var c__33521__auto___34934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___34934,out){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___34934,out){
return (function (state_34912){
var state_val_34913 = (state_34912[(1)]);
if((state_val_34913 === (7))){
var inst_34891 = (state_34912[(7)]);
var inst_34892 = (state_34912[(8)]);
var inst_34891__$1 = (state_34912[(2)]);
var inst_34892__$1 = cljs.core.nth.call(null,inst_34891__$1,(0),null);
var inst_34893 = cljs.core.nth.call(null,inst_34891__$1,(1),null);
var inst_34894 = (inst_34892__$1 == null);
var state_34912__$1 = (function (){var statearr_34914 = state_34912;
(statearr_34914[(7)] = inst_34891__$1);

(statearr_34914[(8)] = inst_34892__$1);

(statearr_34914[(9)] = inst_34893);

return statearr_34914;
})();
if(cljs.core.truth_(inst_34894)){
var statearr_34915_34935 = state_34912__$1;
(statearr_34915_34935[(1)] = (8));

} else {
var statearr_34916_34936 = state_34912__$1;
(statearr_34916_34936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34913 === (1))){
var inst_34881 = cljs.core.vec.call(null,chs);
var inst_34882 = inst_34881;
var state_34912__$1 = (function (){var statearr_34917 = state_34912;
(statearr_34917[(10)] = inst_34882);

return statearr_34917;
})();
var statearr_34918_34937 = state_34912__$1;
(statearr_34918_34937[(2)] = null);

(statearr_34918_34937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34913 === (4))){
var inst_34882 = (state_34912[(10)]);
var state_34912__$1 = state_34912;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34912__$1,(7),inst_34882);
} else {
if((state_val_34913 === (6))){
var inst_34908 = (state_34912[(2)]);
var state_34912__$1 = state_34912;
var statearr_34919_34938 = state_34912__$1;
(statearr_34919_34938[(2)] = inst_34908);

(statearr_34919_34938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34913 === (3))){
var inst_34910 = (state_34912[(2)]);
var state_34912__$1 = state_34912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34912__$1,inst_34910);
} else {
if((state_val_34913 === (2))){
var inst_34882 = (state_34912[(10)]);
var inst_34884 = cljs.core.count.call(null,inst_34882);
var inst_34885 = (inst_34884 > (0));
var state_34912__$1 = state_34912;
if(cljs.core.truth_(inst_34885)){
var statearr_34921_34939 = state_34912__$1;
(statearr_34921_34939[(1)] = (4));

} else {
var statearr_34922_34940 = state_34912__$1;
(statearr_34922_34940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34913 === (11))){
var inst_34882 = (state_34912[(10)]);
var inst_34901 = (state_34912[(2)]);
var tmp34920 = inst_34882;
var inst_34882__$1 = tmp34920;
var state_34912__$1 = (function (){var statearr_34923 = state_34912;
(statearr_34923[(11)] = inst_34901);

(statearr_34923[(10)] = inst_34882__$1);

return statearr_34923;
})();
var statearr_34924_34941 = state_34912__$1;
(statearr_34924_34941[(2)] = null);

(statearr_34924_34941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34913 === (9))){
var inst_34892 = (state_34912[(8)]);
var state_34912__$1 = state_34912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34912__$1,(11),out,inst_34892);
} else {
if((state_val_34913 === (5))){
var inst_34906 = cljs.core.async.close_BANG_.call(null,out);
var state_34912__$1 = state_34912;
var statearr_34925_34942 = state_34912__$1;
(statearr_34925_34942[(2)] = inst_34906);

(statearr_34925_34942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34913 === (10))){
var inst_34904 = (state_34912[(2)]);
var state_34912__$1 = state_34912;
var statearr_34926_34943 = state_34912__$1;
(statearr_34926_34943[(2)] = inst_34904);

(statearr_34926_34943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34913 === (8))){
var inst_34891 = (state_34912[(7)]);
var inst_34892 = (state_34912[(8)]);
var inst_34882 = (state_34912[(10)]);
var inst_34893 = (state_34912[(9)]);
var inst_34896 = (function (){var cs = inst_34882;
var vec__34887 = inst_34891;
var v = inst_34892;
var c = inst_34893;
return ((function (cs,vec__34887,v,c,inst_34891,inst_34892,inst_34882,inst_34893,state_val_34913,c__33521__auto___34934,out){
return (function (p1__34878_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34878_SHARP_);
});
;})(cs,vec__34887,v,c,inst_34891,inst_34892,inst_34882,inst_34893,state_val_34913,c__33521__auto___34934,out))
})();
var inst_34897 = cljs.core.filterv.call(null,inst_34896,inst_34882);
var inst_34882__$1 = inst_34897;
var state_34912__$1 = (function (){var statearr_34927 = state_34912;
(statearr_34927[(10)] = inst_34882__$1);

return statearr_34927;
})();
var statearr_34928_34944 = state_34912__$1;
(statearr_34928_34944[(2)] = null);

(statearr_34928_34944[(1)] = (2));


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
});})(c__33521__auto___34934,out))
;
return ((function (switch__33426__auto__,c__33521__auto___34934,out){
return (function() {
var cljs$core$async$state_machine__33427__auto__ = null;
var cljs$core$async$state_machine__33427__auto____0 = (function (){
var statearr_34929 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34929[(0)] = cljs$core$async$state_machine__33427__auto__);

(statearr_34929[(1)] = (1));

return statearr_34929;
});
var cljs$core$async$state_machine__33427__auto____1 = (function (state_34912){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_34912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e34930){if((e34930 instanceof Object)){
var ex__33430__auto__ = e34930;
var statearr_34931_34945 = state_34912;
(statearr_34931_34945[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34946 = state_34912;
state_34912 = G__34946;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$state_machine__33427__auto__ = function(state_34912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33427__auto____1.call(this,state_34912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33427__auto____0;
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33427__auto____1;
return cljs$core$async$state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___34934,out))
})();
var state__33523__auto__ = (function (){var statearr_34932 = f__33522__auto__.call(null);
(statearr_34932[(6)] = c__33521__auto___34934);

return statearr_34932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___34934,out))
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
var G__34948 = arguments.length;
switch (G__34948) {
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
var c__33521__auto___34993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___34993,out){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___34993,out){
return (function (state_34972){
var state_val_34973 = (state_34972[(1)]);
if((state_val_34973 === (7))){
var inst_34954 = (state_34972[(7)]);
var inst_34954__$1 = (state_34972[(2)]);
var inst_34955 = (inst_34954__$1 == null);
var inst_34956 = cljs.core.not.call(null,inst_34955);
var state_34972__$1 = (function (){var statearr_34974 = state_34972;
(statearr_34974[(7)] = inst_34954__$1);

return statearr_34974;
})();
if(inst_34956){
var statearr_34975_34994 = state_34972__$1;
(statearr_34975_34994[(1)] = (8));

} else {
var statearr_34976_34995 = state_34972__$1;
(statearr_34976_34995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (1))){
var inst_34949 = (0);
var state_34972__$1 = (function (){var statearr_34977 = state_34972;
(statearr_34977[(8)] = inst_34949);

return statearr_34977;
})();
var statearr_34978_34996 = state_34972__$1;
(statearr_34978_34996[(2)] = null);

(statearr_34978_34996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (4))){
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34972__$1,(7),ch);
} else {
if((state_val_34973 === (6))){
var inst_34967 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_34979_34997 = state_34972__$1;
(statearr_34979_34997[(2)] = inst_34967);

(statearr_34979_34997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (3))){
var inst_34969 = (state_34972[(2)]);
var inst_34970 = cljs.core.async.close_BANG_.call(null,out);
var state_34972__$1 = (function (){var statearr_34980 = state_34972;
(statearr_34980[(9)] = inst_34969);

return statearr_34980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34972__$1,inst_34970);
} else {
if((state_val_34973 === (2))){
var inst_34949 = (state_34972[(8)]);
var inst_34951 = (inst_34949 < n);
var state_34972__$1 = state_34972;
if(cljs.core.truth_(inst_34951)){
var statearr_34981_34998 = state_34972__$1;
(statearr_34981_34998[(1)] = (4));

} else {
var statearr_34982_34999 = state_34972__$1;
(statearr_34982_34999[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (11))){
var inst_34949 = (state_34972[(8)]);
var inst_34959 = (state_34972[(2)]);
var inst_34960 = (inst_34949 + (1));
var inst_34949__$1 = inst_34960;
var state_34972__$1 = (function (){var statearr_34983 = state_34972;
(statearr_34983[(10)] = inst_34959);

(statearr_34983[(8)] = inst_34949__$1);

return statearr_34983;
})();
var statearr_34984_35000 = state_34972__$1;
(statearr_34984_35000[(2)] = null);

(statearr_34984_35000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (9))){
var state_34972__$1 = state_34972;
var statearr_34985_35001 = state_34972__$1;
(statearr_34985_35001[(2)] = null);

(statearr_34985_35001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (5))){
var state_34972__$1 = state_34972;
var statearr_34986_35002 = state_34972__$1;
(statearr_34986_35002[(2)] = null);

(statearr_34986_35002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (10))){
var inst_34964 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_34987_35003 = state_34972__$1;
(statearr_34987_35003[(2)] = inst_34964);

(statearr_34987_35003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (8))){
var inst_34954 = (state_34972[(7)]);
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34972__$1,(11),out,inst_34954);
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
});})(c__33521__auto___34993,out))
;
return ((function (switch__33426__auto__,c__33521__auto___34993,out){
return (function() {
var cljs$core$async$state_machine__33427__auto__ = null;
var cljs$core$async$state_machine__33427__auto____0 = (function (){
var statearr_34988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34988[(0)] = cljs$core$async$state_machine__33427__auto__);

(statearr_34988[(1)] = (1));

return statearr_34988;
});
var cljs$core$async$state_machine__33427__auto____1 = (function (state_34972){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_34972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e34989){if((e34989 instanceof Object)){
var ex__33430__auto__ = e34989;
var statearr_34990_35004 = state_34972;
(statearr_34990_35004[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35005 = state_34972;
state_34972 = G__35005;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$state_machine__33427__auto__ = function(state_34972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33427__auto____1.call(this,state_34972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33427__auto____0;
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33427__auto____1;
return cljs$core$async$state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___34993,out))
})();
var state__33523__auto__ = (function (){var statearr_34991 = f__33522__auto__.call(null);
(statearr_34991[(6)] = c__33521__auto___34993);

return statearr_34991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___34993,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35007 = (function (f,ch,meta35008){
this.f = f;
this.ch = ch;
this.meta35008 = meta35008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35009,meta35008__$1){
var self__ = this;
var _35009__$1 = this;
return (new cljs.core.async.t_cljs$core$async35007(self__.f,self__.ch,meta35008__$1));
});

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35009){
var self__ = this;
var _35009__$1 = this;
return self__.meta35008;
});

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35010 = (function (f,ch,meta35008,_,fn1,meta35011){
this.f = f;
this.ch = ch;
this.meta35008 = meta35008;
this._ = _;
this.fn1 = fn1;
this.meta35011 = meta35011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35012,meta35011__$1){
var self__ = this;
var _35012__$1 = this;
return (new cljs.core.async.t_cljs$core$async35010(self__.f,self__.ch,self__.meta35008,self__._,self__.fn1,meta35011__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35012){
var self__ = this;
var _35012__$1 = this;
return self__.meta35011;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35006_SHARP_){
return f1.call(null,(((p1__35006_SHARP_ == null))?null:self__.f.call(null,p1__35006_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35010.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35008","meta35008",-1187816630,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35007","cljs.core.async/t_cljs$core$async35007",1295195526,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35011","meta35011",969699168,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35010.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35010";

cljs.core.async.t_cljs$core$async35010.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async35010");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35010.
 */
cljs.core.async.__GT_t_cljs$core$async35010 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35010(f__$1,ch__$1,meta35008__$1,___$2,fn1__$1,meta35011){
return (new cljs.core.async.t_cljs$core$async35010(f__$1,ch__$1,meta35008__$1,___$2,fn1__$1,meta35011));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35010(self__.f,self__.ch,self__.meta35008,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35007.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35008","meta35008",-1187816630,null)], null);
});

cljs.core.async.t_cljs$core$async35007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35007";

cljs.core.async.t_cljs$core$async35007.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async35007");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35007.
 */
cljs.core.async.__GT_t_cljs$core$async35007 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35007(f__$1,ch__$1,meta35008){
return (new cljs.core.async.t_cljs$core$async35007(f__$1,ch__$1,meta35008));
});

}

return (new cljs.core.async.t_cljs$core$async35007(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35013 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35013 = (function (f,ch,meta35014){
this.f = f;
this.ch = ch;
this.meta35014 = meta35014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35015,meta35014__$1){
var self__ = this;
var _35015__$1 = this;
return (new cljs.core.async.t_cljs$core$async35013(self__.f,self__.ch,meta35014__$1));
});

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35015){
var self__ = this;
var _35015__$1 = this;
return self__.meta35014;
});

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35014","meta35014",553205378,null)], null);
});

cljs.core.async.t_cljs$core$async35013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35013";

cljs.core.async.t_cljs$core$async35013.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async35013");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35013.
 */
cljs.core.async.__GT_t_cljs$core$async35013 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35013(f__$1,ch__$1,meta35014){
return (new cljs.core.async.t_cljs$core$async35013(f__$1,ch__$1,meta35014));
});

}

return (new cljs.core.async.t_cljs$core$async35013(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35016 = (function (p,ch,meta35017){
this.p = p;
this.ch = ch;
this.meta35017 = meta35017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35018,meta35017__$1){
var self__ = this;
var _35018__$1 = this;
return (new cljs.core.async.t_cljs$core$async35016(self__.p,self__.ch,meta35017__$1));
});

cljs.core.async.t_cljs$core$async35016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35018){
var self__ = this;
var _35018__$1 = this;
return self__.meta35017;
});

cljs.core.async.t_cljs$core$async35016.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35016.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35016.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35016.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35016.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35016.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35016.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35017","meta35017",603287009,null)], null);
});

cljs.core.async.t_cljs$core$async35016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35016";

cljs.core.async.t_cljs$core$async35016.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async35016");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35016.
 */
cljs.core.async.__GT_t_cljs$core$async35016 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35016(p__$1,ch__$1,meta35017){
return (new cljs.core.async.t_cljs$core$async35016(p__$1,ch__$1,meta35017));
});

}

return (new cljs.core.async.t_cljs$core$async35016(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35020 = arguments.length;
switch (G__35020) {
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
var c__33521__auto___35060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___35060,out){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___35060,out){
return (function (state_35041){
var state_val_35042 = (state_35041[(1)]);
if((state_val_35042 === (7))){
var inst_35037 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
var statearr_35043_35061 = state_35041__$1;
(statearr_35043_35061[(2)] = inst_35037);

(statearr_35043_35061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (1))){
var state_35041__$1 = state_35041;
var statearr_35044_35062 = state_35041__$1;
(statearr_35044_35062[(2)] = null);

(statearr_35044_35062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (4))){
var inst_35023 = (state_35041[(7)]);
var inst_35023__$1 = (state_35041[(2)]);
var inst_35024 = (inst_35023__$1 == null);
var state_35041__$1 = (function (){var statearr_35045 = state_35041;
(statearr_35045[(7)] = inst_35023__$1);

return statearr_35045;
})();
if(cljs.core.truth_(inst_35024)){
var statearr_35046_35063 = state_35041__$1;
(statearr_35046_35063[(1)] = (5));

} else {
var statearr_35047_35064 = state_35041__$1;
(statearr_35047_35064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (6))){
var inst_35023 = (state_35041[(7)]);
var inst_35028 = p.call(null,inst_35023);
var state_35041__$1 = state_35041;
if(cljs.core.truth_(inst_35028)){
var statearr_35048_35065 = state_35041__$1;
(statearr_35048_35065[(1)] = (8));

} else {
var statearr_35049_35066 = state_35041__$1;
(statearr_35049_35066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (3))){
var inst_35039 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35041__$1,inst_35039);
} else {
if((state_val_35042 === (2))){
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35041__$1,(4),ch);
} else {
if((state_val_35042 === (11))){
var inst_35031 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
var statearr_35050_35067 = state_35041__$1;
(statearr_35050_35067[(2)] = inst_35031);

(statearr_35050_35067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (9))){
var state_35041__$1 = state_35041;
var statearr_35051_35068 = state_35041__$1;
(statearr_35051_35068[(2)] = null);

(statearr_35051_35068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (5))){
var inst_35026 = cljs.core.async.close_BANG_.call(null,out);
var state_35041__$1 = state_35041;
var statearr_35052_35069 = state_35041__$1;
(statearr_35052_35069[(2)] = inst_35026);

(statearr_35052_35069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (10))){
var inst_35034 = (state_35041[(2)]);
var state_35041__$1 = (function (){var statearr_35053 = state_35041;
(statearr_35053[(8)] = inst_35034);

return statearr_35053;
})();
var statearr_35054_35070 = state_35041__$1;
(statearr_35054_35070[(2)] = null);

(statearr_35054_35070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (8))){
var inst_35023 = (state_35041[(7)]);
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35041__$1,(11),out,inst_35023);
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
});})(c__33521__auto___35060,out))
;
return ((function (switch__33426__auto__,c__33521__auto___35060,out){
return (function() {
var cljs$core$async$state_machine__33427__auto__ = null;
var cljs$core$async$state_machine__33427__auto____0 = (function (){
var statearr_35055 = [null,null,null,null,null,null,null,null,null];
(statearr_35055[(0)] = cljs$core$async$state_machine__33427__auto__);

(statearr_35055[(1)] = (1));

return statearr_35055;
});
var cljs$core$async$state_machine__33427__auto____1 = (function (state_35041){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_35041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e35056){if((e35056 instanceof Object)){
var ex__33430__auto__ = e35056;
var statearr_35057_35071 = state_35041;
(statearr_35057_35071[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35072 = state_35041;
state_35041 = G__35072;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$state_machine__33427__auto__ = function(state_35041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33427__auto____1.call(this,state_35041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33427__auto____0;
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33427__auto____1;
return cljs$core$async$state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___35060,out))
})();
var state__33523__auto__ = (function (){var statearr_35058 = f__33522__auto__.call(null);
(statearr_35058[(6)] = c__33521__auto___35060);

return statearr_35058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___35060,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35074 = arguments.length;
switch (G__35074) {
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
var c__33521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto__){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto__){
return (function (state_35137){
var state_val_35138 = (state_35137[(1)]);
if((state_val_35138 === (7))){
var inst_35133 = (state_35137[(2)]);
var state_35137__$1 = state_35137;
var statearr_35139_35177 = state_35137__$1;
(statearr_35139_35177[(2)] = inst_35133);

(statearr_35139_35177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (20))){
var inst_35103 = (state_35137[(7)]);
var inst_35114 = (state_35137[(2)]);
var inst_35115 = cljs.core.next.call(null,inst_35103);
var inst_35089 = inst_35115;
var inst_35090 = null;
var inst_35091 = (0);
var inst_35092 = (0);
var state_35137__$1 = (function (){var statearr_35140 = state_35137;
(statearr_35140[(8)] = inst_35090);

(statearr_35140[(9)] = inst_35092);

(statearr_35140[(10)] = inst_35089);

(statearr_35140[(11)] = inst_35114);

(statearr_35140[(12)] = inst_35091);

return statearr_35140;
})();
var statearr_35141_35178 = state_35137__$1;
(statearr_35141_35178[(2)] = null);

(statearr_35141_35178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (1))){
var state_35137__$1 = state_35137;
var statearr_35142_35179 = state_35137__$1;
(statearr_35142_35179[(2)] = null);

(statearr_35142_35179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (4))){
var inst_35078 = (state_35137[(13)]);
var inst_35078__$1 = (state_35137[(2)]);
var inst_35079 = (inst_35078__$1 == null);
var state_35137__$1 = (function (){var statearr_35143 = state_35137;
(statearr_35143[(13)] = inst_35078__$1);

return statearr_35143;
})();
if(cljs.core.truth_(inst_35079)){
var statearr_35144_35180 = state_35137__$1;
(statearr_35144_35180[(1)] = (5));

} else {
var statearr_35145_35181 = state_35137__$1;
(statearr_35145_35181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (15))){
var state_35137__$1 = state_35137;
var statearr_35149_35182 = state_35137__$1;
(statearr_35149_35182[(2)] = null);

(statearr_35149_35182[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (21))){
var state_35137__$1 = state_35137;
var statearr_35150_35183 = state_35137__$1;
(statearr_35150_35183[(2)] = null);

(statearr_35150_35183[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (13))){
var inst_35090 = (state_35137[(8)]);
var inst_35092 = (state_35137[(9)]);
var inst_35089 = (state_35137[(10)]);
var inst_35091 = (state_35137[(12)]);
var inst_35099 = (state_35137[(2)]);
var inst_35100 = (inst_35092 + (1));
var tmp35146 = inst_35090;
var tmp35147 = inst_35089;
var tmp35148 = inst_35091;
var inst_35089__$1 = tmp35147;
var inst_35090__$1 = tmp35146;
var inst_35091__$1 = tmp35148;
var inst_35092__$1 = inst_35100;
var state_35137__$1 = (function (){var statearr_35151 = state_35137;
(statearr_35151[(8)] = inst_35090__$1);

(statearr_35151[(9)] = inst_35092__$1);

(statearr_35151[(14)] = inst_35099);

(statearr_35151[(10)] = inst_35089__$1);

(statearr_35151[(12)] = inst_35091__$1);

return statearr_35151;
})();
var statearr_35152_35184 = state_35137__$1;
(statearr_35152_35184[(2)] = null);

(statearr_35152_35184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (22))){
var state_35137__$1 = state_35137;
var statearr_35153_35185 = state_35137__$1;
(statearr_35153_35185[(2)] = null);

(statearr_35153_35185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (6))){
var inst_35078 = (state_35137[(13)]);
var inst_35087 = f.call(null,inst_35078);
var inst_35088 = cljs.core.seq.call(null,inst_35087);
var inst_35089 = inst_35088;
var inst_35090 = null;
var inst_35091 = (0);
var inst_35092 = (0);
var state_35137__$1 = (function (){var statearr_35154 = state_35137;
(statearr_35154[(8)] = inst_35090);

(statearr_35154[(9)] = inst_35092);

(statearr_35154[(10)] = inst_35089);

(statearr_35154[(12)] = inst_35091);

return statearr_35154;
})();
var statearr_35155_35186 = state_35137__$1;
(statearr_35155_35186[(2)] = null);

(statearr_35155_35186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (17))){
var inst_35103 = (state_35137[(7)]);
var inst_35107 = cljs.core.chunk_first.call(null,inst_35103);
var inst_35108 = cljs.core.chunk_rest.call(null,inst_35103);
var inst_35109 = cljs.core.count.call(null,inst_35107);
var inst_35089 = inst_35108;
var inst_35090 = inst_35107;
var inst_35091 = inst_35109;
var inst_35092 = (0);
var state_35137__$1 = (function (){var statearr_35156 = state_35137;
(statearr_35156[(8)] = inst_35090);

(statearr_35156[(9)] = inst_35092);

(statearr_35156[(10)] = inst_35089);

(statearr_35156[(12)] = inst_35091);

return statearr_35156;
})();
var statearr_35157_35187 = state_35137__$1;
(statearr_35157_35187[(2)] = null);

(statearr_35157_35187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (3))){
var inst_35135 = (state_35137[(2)]);
var state_35137__$1 = state_35137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35137__$1,inst_35135);
} else {
if((state_val_35138 === (12))){
var inst_35123 = (state_35137[(2)]);
var state_35137__$1 = state_35137;
var statearr_35158_35188 = state_35137__$1;
(statearr_35158_35188[(2)] = inst_35123);

(statearr_35158_35188[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (2))){
var state_35137__$1 = state_35137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35137__$1,(4),in$);
} else {
if((state_val_35138 === (23))){
var inst_35131 = (state_35137[(2)]);
var state_35137__$1 = state_35137;
var statearr_35159_35189 = state_35137__$1;
(statearr_35159_35189[(2)] = inst_35131);

(statearr_35159_35189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (19))){
var inst_35118 = (state_35137[(2)]);
var state_35137__$1 = state_35137;
var statearr_35160_35190 = state_35137__$1;
(statearr_35160_35190[(2)] = inst_35118);

(statearr_35160_35190[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (11))){
var inst_35103 = (state_35137[(7)]);
var inst_35089 = (state_35137[(10)]);
var inst_35103__$1 = cljs.core.seq.call(null,inst_35089);
var state_35137__$1 = (function (){var statearr_35161 = state_35137;
(statearr_35161[(7)] = inst_35103__$1);

return statearr_35161;
})();
if(inst_35103__$1){
var statearr_35162_35191 = state_35137__$1;
(statearr_35162_35191[(1)] = (14));

} else {
var statearr_35163_35192 = state_35137__$1;
(statearr_35163_35192[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (9))){
var inst_35125 = (state_35137[(2)]);
var inst_35126 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35137__$1 = (function (){var statearr_35164 = state_35137;
(statearr_35164[(15)] = inst_35125);

return statearr_35164;
})();
if(cljs.core.truth_(inst_35126)){
var statearr_35165_35193 = state_35137__$1;
(statearr_35165_35193[(1)] = (21));

} else {
var statearr_35166_35194 = state_35137__$1;
(statearr_35166_35194[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (5))){
var inst_35081 = cljs.core.async.close_BANG_.call(null,out);
var state_35137__$1 = state_35137;
var statearr_35167_35195 = state_35137__$1;
(statearr_35167_35195[(2)] = inst_35081);

(statearr_35167_35195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (14))){
var inst_35103 = (state_35137[(7)]);
var inst_35105 = cljs.core.chunked_seq_QMARK_.call(null,inst_35103);
var state_35137__$1 = state_35137;
if(inst_35105){
var statearr_35168_35196 = state_35137__$1;
(statearr_35168_35196[(1)] = (17));

} else {
var statearr_35169_35197 = state_35137__$1;
(statearr_35169_35197[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (16))){
var inst_35121 = (state_35137[(2)]);
var state_35137__$1 = state_35137;
var statearr_35170_35198 = state_35137__$1;
(statearr_35170_35198[(2)] = inst_35121);

(statearr_35170_35198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35138 === (10))){
var inst_35090 = (state_35137[(8)]);
var inst_35092 = (state_35137[(9)]);
var inst_35097 = cljs.core._nth.call(null,inst_35090,inst_35092);
var state_35137__$1 = state_35137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35137__$1,(13),out,inst_35097);
} else {
if((state_val_35138 === (18))){
var inst_35103 = (state_35137[(7)]);
var inst_35112 = cljs.core.first.call(null,inst_35103);
var state_35137__$1 = state_35137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35137__$1,(20),out,inst_35112);
} else {
if((state_val_35138 === (8))){
var inst_35092 = (state_35137[(9)]);
var inst_35091 = (state_35137[(12)]);
var inst_35094 = (inst_35092 < inst_35091);
var inst_35095 = inst_35094;
var state_35137__$1 = state_35137;
if(cljs.core.truth_(inst_35095)){
var statearr_35171_35199 = state_35137__$1;
(statearr_35171_35199[(1)] = (10));

} else {
var statearr_35172_35200 = state_35137__$1;
(statearr_35172_35200[(1)] = (11));

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
});})(c__33521__auto__))
;
return ((function (switch__33426__auto__,c__33521__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33427__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33427__auto____0 = (function (){
var statearr_35173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35173[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33427__auto__);

(statearr_35173[(1)] = (1));

return statearr_35173;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33427__auto____1 = (function (state_35137){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_35137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e35174){if((e35174 instanceof Object)){
var ex__33430__auto__ = e35174;
var statearr_35175_35201 = state_35137;
(statearr_35175_35201[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35202 = state_35137;
state_35137 = G__35202;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33427__auto__ = function(state_35137){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33427__auto____1.call(this,state_35137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33427__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33427__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto__))
})();
var state__33523__auto__ = (function (){var statearr_35176 = f__33522__auto__.call(null);
(statearr_35176[(6)] = c__33521__auto__);

return statearr_35176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto__))
);

return c__33521__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35204 = arguments.length;
switch (G__35204) {
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
var G__35207 = arguments.length;
switch (G__35207) {
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
var G__35210 = arguments.length;
switch (G__35210) {
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
var c__33521__auto___35257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___35257,out){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___35257,out){
return (function (state_35234){
var state_val_35235 = (state_35234[(1)]);
if((state_val_35235 === (7))){
var inst_35229 = (state_35234[(2)]);
var state_35234__$1 = state_35234;
var statearr_35236_35258 = state_35234__$1;
(statearr_35236_35258[(2)] = inst_35229);

(statearr_35236_35258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (1))){
var inst_35211 = null;
var state_35234__$1 = (function (){var statearr_35237 = state_35234;
(statearr_35237[(7)] = inst_35211);

return statearr_35237;
})();
var statearr_35238_35259 = state_35234__$1;
(statearr_35238_35259[(2)] = null);

(statearr_35238_35259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (4))){
var inst_35214 = (state_35234[(8)]);
var inst_35214__$1 = (state_35234[(2)]);
var inst_35215 = (inst_35214__$1 == null);
var inst_35216 = cljs.core.not.call(null,inst_35215);
var state_35234__$1 = (function (){var statearr_35239 = state_35234;
(statearr_35239[(8)] = inst_35214__$1);

return statearr_35239;
})();
if(inst_35216){
var statearr_35240_35260 = state_35234__$1;
(statearr_35240_35260[(1)] = (5));

} else {
var statearr_35241_35261 = state_35234__$1;
(statearr_35241_35261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (6))){
var state_35234__$1 = state_35234;
var statearr_35242_35262 = state_35234__$1;
(statearr_35242_35262[(2)] = null);

(statearr_35242_35262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (3))){
var inst_35231 = (state_35234[(2)]);
var inst_35232 = cljs.core.async.close_BANG_.call(null,out);
var state_35234__$1 = (function (){var statearr_35243 = state_35234;
(statearr_35243[(9)] = inst_35231);

return statearr_35243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35234__$1,inst_35232);
} else {
if((state_val_35235 === (2))){
var state_35234__$1 = state_35234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35234__$1,(4),ch);
} else {
if((state_val_35235 === (11))){
var inst_35214 = (state_35234[(8)]);
var inst_35223 = (state_35234[(2)]);
var inst_35211 = inst_35214;
var state_35234__$1 = (function (){var statearr_35244 = state_35234;
(statearr_35244[(7)] = inst_35211);

(statearr_35244[(10)] = inst_35223);

return statearr_35244;
})();
var statearr_35245_35263 = state_35234__$1;
(statearr_35245_35263[(2)] = null);

(statearr_35245_35263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (9))){
var inst_35214 = (state_35234[(8)]);
var state_35234__$1 = state_35234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35234__$1,(11),out,inst_35214);
} else {
if((state_val_35235 === (5))){
var inst_35211 = (state_35234[(7)]);
var inst_35214 = (state_35234[(8)]);
var inst_35218 = cljs.core._EQ_.call(null,inst_35214,inst_35211);
var state_35234__$1 = state_35234;
if(inst_35218){
var statearr_35247_35264 = state_35234__$1;
(statearr_35247_35264[(1)] = (8));

} else {
var statearr_35248_35265 = state_35234__$1;
(statearr_35248_35265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (10))){
var inst_35226 = (state_35234[(2)]);
var state_35234__$1 = state_35234;
var statearr_35249_35266 = state_35234__$1;
(statearr_35249_35266[(2)] = inst_35226);

(statearr_35249_35266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (8))){
var inst_35211 = (state_35234[(7)]);
var tmp35246 = inst_35211;
var inst_35211__$1 = tmp35246;
var state_35234__$1 = (function (){var statearr_35250 = state_35234;
(statearr_35250[(7)] = inst_35211__$1);

return statearr_35250;
})();
var statearr_35251_35267 = state_35234__$1;
(statearr_35251_35267[(2)] = null);

(statearr_35251_35267[(1)] = (2));


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
});})(c__33521__auto___35257,out))
;
return ((function (switch__33426__auto__,c__33521__auto___35257,out){
return (function() {
var cljs$core$async$state_machine__33427__auto__ = null;
var cljs$core$async$state_machine__33427__auto____0 = (function (){
var statearr_35252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35252[(0)] = cljs$core$async$state_machine__33427__auto__);

(statearr_35252[(1)] = (1));

return statearr_35252;
});
var cljs$core$async$state_machine__33427__auto____1 = (function (state_35234){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_35234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e35253){if((e35253 instanceof Object)){
var ex__33430__auto__ = e35253;
var statearr_35254_35268 = state_35234;
(statearr_35254_35268[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35269 = state_35234;
state_35234 = G__35269;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$state_machine__33427__auto__ = function(state_35234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33427__auto____1.call(this,state_35234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33427__auto____0;
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33427__auto____1;
return cljs$core$async$state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___35257,out))
})();
var state__33523__auto__ = (function (){var statearr_35255 = f__33522__auto__.call(null);
(statearr_35255[(6)] = c__33521__auto___35257);

return statearr_35255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___35257,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35271 = arguments.length;
switch (G__35271) {
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
var c__33521__auto___35337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___35337,out){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___35337,out){
return (function (state_35309){
var state_val_35310 = (state_35309[(1)]);
if((state_val_35310 === (7))){
var inst_35305 = (state_35309[(2)]);
var state_35309__$1 = state_35309;
var statearr_35311_35338 = state_35309__$1;
(statearr_35311_35338[(2)] = inst_35305);

(statearr_35311_35338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (1))){
var inst_35272 = (new Array(n));
var inst_35273 = inst_35272;
var inst_35274 = (0);
var state_35309__$1 = (function (){var statearr_35312 = state_35309;
(statearr_35312[(7)] = inst_35273);

(statearr_35312[(8)] = inst_35274);

return statearr_35312;
})();
var statearr_35313_35339 = state_35309__$1;
(statearr_35313_35339[(2)] = null);

(statearr_35313_35339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (4))){
var inst_35277 = (state_35309[(9)]);
var inst_35277__$1 = (state_35309[(2)]);
var inst_35278 = (inst_35277__$1 == null);
var inst_35279 = cljs.core.not.call(null,inst_35278);
var state_35309__$1 = (function (){var statearr_35314 = state_35309;
(statearr_35314[(9)] = inst_35277__$1);

return statearr_35314;
})();
if(inst_35279){
var statearr_35315_35340 = state_35309__$1;
(statearr_35315_35340[(1)] = (5));

} else {
var statearr_35316_35341 = state_35309__$1;
(statearr_35316_35341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (15))){
var inst_35299 = (state_35309[(2)]);
var state_35309__$1 = state_35309;
var statearr_35317_35342 = state_35309__$1;
(statearr_35317_35342[(2)] = inst_35299);

(statearr_35317_35342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (13))){
var state_35309__$1 = state_35309;
var statearr_35318_35343 = state_35309__$1;
(statearr_35318_35343[(2)] = null);

(statearr_35318_35343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (6))){
var inst_35274 = (state_35309[(8)]);
var inst_35295 = (inst_35274 > (0));
var state_35309__$1 = state_35309;
if(cljs.core.truth_(inst_35295)){
var statearr_35319_35344 = state_35309__$1;
(statearr_35319_35344[(1)] = (12));

} else {
var statearr_35320_35345 = state_35309__$1;
(statearr_35320_35345[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (3))){
var inst_35307 = (state_35309[(2)]);
var state_35309__$1 = state_35309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35309__$1,inst_35307);
} else {
if((state_val_35310 === (12))){
var inst_35273 = (state_35309[(7)]);
var inst_35297 = cljs.core.vec.call(null,inst_35273);
var state_35309__$1 = state_35309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35309__$1,(15),out,inst_35297);
} else {
if((state_val_35310 === (2))){
var state_35309__$1 = state_35309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35309__$1,(4),ch);
} else {
if((state_val_35310 === (11))){
var inst_35289 = (state_35309[(2)]);
var inst_35290 = (new Array(n));
var inst_35273 = inst_35290;
var inst_35274 = (0);
var state_35309__$1 = (function (){var statearr_35321 = state_35309;
(statearr_35321[(10)] = inst_35289);

(statearr_35321[(7)] = inst_35273);

(statearr_35321[(8)] = inst_35274);

return statearr_35321;
})();
var statearr_35322_35346 = state_35309__$1;
(statearr_35322_35346[(2)] = null);

(statearr_35322_35346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (9))){
var inst_35273 = (state_35309[(7)]);
var inst_35287 = cljs.core.vec.call(null,inst_35273);
var state_35309__$1 = state_35309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35309__$1,(11),out,inst_35287);
} else {
if((state_val_35310 === (5))){
var inst_35273 = (state_35309[(7)]);
var inst_35282 = (state_35309[(11)]);
var inst_35274 = (state_35309[(8)]);
var inst_35277 = (state_35309[(9)]);
var inst_35281 = (inst_35273[inst_35274] = inst_35277);
var inst_35282__$1 = (inst_35274 + (1));
var inst_35283 = (inst_35282__$1 < n);
var state_35309__$1 = (function (){var statearr_35323 = state_35309;
(statearr_35323[(11)] = inst_35282__$1);

(statearr_35323[(12)] = inst_35281);

return statearr_35323;
})();
if(cljs.core.truth_(inst_35283)){
var statearr_35324_35347 = state_35309__$1;
(statearr_35324_35347[(1)] = (8));

} else {
var statearr_35325_35348 = state_35309__$1;
(statearr_35325_35348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (14))){
var inst_35302 = (state_35309[(2)]);
var inst_35303 = cljs.core.async.close_BANG_.call(null,out);
var state_35309__$1 = (function (){var statearr_35327 = state_35309;
(statearr_35327[(13)] = inst_35302);

return statearr_35327;
})();
var statearr_35328_35349 = state_35309__$1;
(statearr_35328_35349[(2)] = inst_35303);

(statearr_35328_35349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (10))){
var inst_35293 = (state_35309[(2)]);
var state_35309__$1 = state_35309;
var statearr_35329_35350 = state_35309__$1;
(statearr_35329_35350[(2)] = inst_35293);

(statearr_35329_35350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35310 === (8))){
var inst_35273 = (state_35309[(7)]);
var inst_35282 = (state_35309[(11)]);
var tmp35326 = inst_35273;
var inst_35273__$1 = tmp35326;
var inst_35274 = inst_35282;
var state_35309__$1 = (function (){var statearr_35330 = state_35309;
(statearr_35330[(7)] = inst_35273__$1);

(statearr_35330[(8)] = inst_35274);

return statearr_35330;
})();
var statearr_35331_35351 = state_35309__$1;
(statearr_35331_35351[(2)] = null);

(statearr_35331_35351[(1)] = (2));


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
});})(c__33521__auto___35337,out))
;
return ((function (switch__33426__auto__,c__33521__auto___35337,out){
return (function() {
var cljs$core$async$state_machine__33427__auto__ = null;
var cljs$core$async$state_machine__33427__auto____0 = (function (){
var statearr_35332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35332[(0)] = cljs$core$async$state_machine__33427__auto__);

(statearr_35332[(1)] = (1));

return statearr_35332;
});
var cljs$core$async$state_machine__33427__auto____1 = (function (state_35309){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_35309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e35333){if((e35333 instanceof Object)){
var ex__33430__auto__ = e35333;
var statearr_35334_35352 = state_35309;
(statearr_35334_35352[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35353 = state_35309;
state_35309 = G__35353;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$state_machine__33427__auto__ = function(state_35309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33427__auto____1.call(this,state_35309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33427__auto____0;
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33427__auto____1;
return cljs$core$async$state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___35337,out))
})();
var state__33523__auto__ = (function (){var statearr_35335 = f__33522__auto__.call(null);
(statearr_35335[(6)] = c__33521__auto___35337);

return statearr_35335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___35337,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35355 = arguments.length;
switch (G__35355) {
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
var c__33521__auto___35425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___35425,out){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___35425,out){
return (function (state_35397){
var state_val_35398 = (state_35397[(1)]);
if((state_val_35398 === (7))){
var inst_35393 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
var statearr_35399_35426 = state_35397__$1;
(statearr_35399_35426[(2)] = inst_35393);

(statearr_35399_35426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (1))){
var inst_35356 = [];
var inst_35357 = inst_35356;
var inst_35358 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35397__$1 = (function (){var statearr_35400 = state_35397;
(statearr_35400[(7)] = inst_35357);

(statearr_35400[(8)] = inst_35358);

return statearr_35400;
})();
var statearr_35401_35427 = state_35397__$1;
(statearr_35401_35427[(2)] = null);

(statearr_35401_35427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (4))){
var inst_35361 = (state_35397[(9)]);
var inst_35361__$1 = (state_35397[(2)]);
var inst_35362 = (inst_35361__$1 == null);
var inst_35363 = cljs.core.not.call(null,inst_35362);
var state_35397__$1 = (function (){var statearr_35402 = state_35397;
(statearr_35402[(9)] = inst_35361__$1);

return statearr_35402;
})();
if(inst_35363){
var statearr_35403_35428 = state_35397__$1;
(statearr_35403_35428[(1)] = (5));

} else {
var statearr_35404_35429 = state_35397__$1;
(statearr_35404_35429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (15))){
var inst_35387 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
var statearr_35405_35430 = state_35397__$1;
(statearr_35405_35430[(2)] = inst_35387);

(statearr_35405_35430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (13))){
var state_35397__$1 = state_35397;
var statearr_35406_35431 = state_35397__$1;
(statearr_35406_35431[(2)] = null);

(statearr_35406_35431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (6))){
var inst_35357 = (state_35397[(7)]);
var inst_35382 = inst_35357.length;
var inst_35383 = (inst_35382 > (0));
var state_35397__$1 = state_35397;
if(cljs.core.truth_(inst_35383)){
var statearr_35407_35432 = state_35397__$1;
(statearr_35407_35432[(1)] = (12));

} else {
var statearr_35408_35433 = state_35397__$1;
(statearr_35408_35433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (3))){
var inst_35395 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35397__$1,inst_35395);
} else {
if((state_val_35398 === (12))){
var inst_35357 = (state_35397[(7)]);
var inst_35385 = cljs.core.vec.call(null,inst_35357);
var state_35397__$1 = state_35397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35397__$1,(15),out,inst_35385);
} else {
if((state_val_35398 === (2))){
var state_35397__$1 = state_35397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35397__$1,(4),ch);
} else {
if((state_val_35398 === (11))){
var inst_35365 = (state_35397[(10)]);
var inst_35361 = (state_35397[(9)]);
var inst_35375 = (state_35397[(2)]);
var inst_35376 = [];
var inst_35377 = inst_35376.push(inst_35361);
var inst_35357 = inst_35376;
var inst_35358 = inst_35365;
var state_35397__$1 = (function (){var statearr_35409 = state_35397;
(statearr_35409[(11)] = inst_35375);

(statearr_35409[(7)] = inst_35357);

(statearr_35409[(12)] = inst_35377);

(statearr_35409[(8)] = inst_35358);

return statearr_35409;
})();
var statearr_35410_35434 = state_35397__$1;
(statearr_35410_35434[(2)] = null);

(statearr_35410_35434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (9))){
var inst_35357 = (state_35397[(7)]);
var inst_35373 = cljs.core.vec.call(null,inst_35357);
var state_35397__$1 = state_35397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35397__$1,(11),out,inst_35373);
} else {
if((state_val_35398 === (5))){
var inst_35365 = (state_35397[(10)]);
var inst_35361 = (state_35397[(9)]);
var inst_35358 = (state_35397[(8)]);
var inst_35365__$1 = f.call(null,inst_35361);
var inst_35366 = cljs.core._EQ_.call(null,inst_35365__$1,inst_35358);
var inst_35367 = cljs.core.keyword_identical_QMARK_.call(null,inst_35358,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35368 = ((inst_35366) || (inst_35367));
var state_35397__$1 = (function (){var statearr_35411 = state_35397;
(statearr_35411[(10)] = inst_35365__$1);

return statearr_35411;
})();
if(cljs.core.truth_(inst_35368)){
var statearr_35412_35435 = state_35397__$1;
(statearr_35412_35435[(1)] = (8));

} else {
var statearr_35413_35436 = state_35397__$1;
(statearr_35413_35436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (14))){
var inst_35390 = (state_35397[(2)]);
var inst_35391 = cljs.core.async.close_BANG_.call(null,out);
var state_35397__$1 = (function (){var statearr_35415 = state_35397;
(statearr_35415[(13)] = inst_35390);

return statearr_35415;
})();
var statearr_35416_35437 = state_35397__$1;
(statearr_35416_35437[(2)] = inst_35391);

(statearr_35416_35437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (10))){
var inst_35380 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
var statearr_35417_35438 = state_35397__$1;
(statearr_35417_35438[(2)] = inst_35380);

(statearr_35417_35438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (8))){
var inst_35365 = (state_35397[(10)]);
var inst_35357 = (state_35397[(7)]);
var inst_35361 = (state_35397[(9)]);
var inst_35370 = inst_35357.push(inst_35361);
var tmp35414 = inst_35357;
var inst_35357__$1 = tmp35414;
var inst_35358 = inst_35365;
var state_35397__$1 = (function (){var statearr_35418 = state_35397;
(statearr_35418[(14)] = inst_35370);

(statearr_35418[(7)] = inst_35357__$1);

(statearr_35418[(8)] = inst_35358);

return statearr_35418;
})();
var statearr_35419_35439 = state_35397__$1;
(statearr_35419_35439[(2)] = null);

(statearr_35419_35439[(1)] = (2));


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
});})(c__33521__auto___35425,out))
;
return ((function (switch__33426__auto__,c__33521__auto___35425,out){
return (function() {
var cljs$core$async$state_machine__33427__auto__ = null;
var cljs$core$async$state_machine__33427__auto____0 = (function (){
var statearr_35420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35420[(0)] = cljs$core$async$state_machine__33427__auto__);

(statearr_35420[(1)] = (1));

return statearr_35420;
});
var cljs$core$async$state_machine__33427__auto____1 = (function (state_35397){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_35397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e35421){if((e35421 instanceof Object)){
var ex__33430__auto__ = e35421;
var statearr_35422_35440 = state_35397;
(statearr_35422_35440[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35441 = state_35397;
state_35397 = G__35441;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
cljs$core$async$state_machine__33427__auto__ = function(state_35397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33427__auto____1.call(this,state_35397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33427__auto____0;
cljs$core$async$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33427__auto____1;
return cljs$core$async$state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___35425,out))
})();
var state__33523__auto__ = (function (){var statearr_35423 = f__33522__auto__.call(null);
(statearr_35423[(6)] = c__33521__auto___35425);

return statearr_35423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___35425,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1568179220910
