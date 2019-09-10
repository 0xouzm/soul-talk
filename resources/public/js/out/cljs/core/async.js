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
var G__25571 = arguments.length;
switch (G__25571) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25572 = (function (f,blockable,meta25573){
this.f = f;
this.blockable = blockable;
this.meta25573 = meta25573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25574,meta25573__$1){
var self__ = this;
var _25574__$1 = this;
return (new cljs.core.async.t_cljs$core$async25572(self__.f,self__.blockable,meta25573__$1));
});

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25574){
var self__ = this;
var _25574__$1 = this;
return self__.meta25573;
});

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25573","meta25573",-479512866,null)], null);
});

cljs.core.async.t_cljs$core$async25572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25572";

cljs.core.async.t_cljs$core$async25572.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25572");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25572.
 */
cljs.core.async.__GT_t_cljs$core$async25572 = (function cljs$core$async$__GT_t_cljs$core$async25572(f__$1,blockable__$1,meta25573){
return (new cljs.core.async.t_cljs$core$async25572(f__$1,blockable__$1,meta25573));
});

}

return (new cljs.core.async.t_cljs$core$async25572(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25578 = arguments.length;
switch (G__25578) {
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
var G__25581 = arguments.length;
switch (G__25581) {
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
var G__25584 = arguments.length;
switch (G__25584) {
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
var val_25586 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25586);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25586,ret){
return (function (){
return fn1.call(null,val_25586);
});})(val_25586,ret))
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
var G__25588 = arguments.length;
switch (G__25588) {
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
var n__4607__auto___25590 = n;
var x_25591 = (0);
while(true){
if((x_25591 < n__4607__auto___25590)){
(a[x_25591] = (0));

var G__25592 = (x_25591 + (1));
x_25591 = G__25592;
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

var G__25593 = (i + (1));
i = G__25593;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25594 = (function (flag,meta25595){
this.flag = flag;
this.meta25595 = meta25595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25596,meta25595__$1){
var self__ = this;
var _25596__$1 = this;
return (new cljs.core.async.t_cljs$core$async25594(self__.flag,meta25595__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25596){
var self__ = this;
var _25596__$1 = this;
return self__.meta25595;
});})(flag))
;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25594.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25595","meta25595",-1016409079,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25594";

cljs.core.async.t_cljs$core$async25594.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25594");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25594.
 */
cljs.core.async.__GT_t_cljs$core$async25594 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25594(flag__$1,meta25595){
return (new cljs.core.async.t_cljs$core$async25594(flag__$1,meta25595));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25594(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25597 = (function (flag,cb,meta25598){
this.flag = flag;
this.cb = cb;
this.meta25598 = meta25598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25599,meta25598__$1){
var self__ = this;
var _25599__$1 = this;
return (new cljs.core.async.t_cljs$core$async25597(self__.flag,self__.cb,meta25598__$1));
});

cljs.core.async.t_cljs$core$async25597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25599){
var self__ = this;
var _25599__$1 = this;
return self__.meta25598;
});

cljs.core.async.t_cljs$core$async25597.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25597.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25598","meta25598",1773913062,null)], null);
});

cljs.core.async.t_cljs$core$async25597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25597";

cljs.core.async.t_cljs$core$async25597.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25597");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25597.
 */
cljs.core.async.__GT_t_cljs$core$async25597 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25597(flag__$1,cb__$1,meta25598){
return (new cljs.core.async.t_cljs$core$async25597(flag__$1,cb__$1,meta25598));
});

}

return (new cljs.core.async.t_cljs$core$async25597(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25600_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25600_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25601_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25601_SHARP_,port], null));
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
var G__25602 = (i + (1));
i = G__25602;
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
var len__4730__auto___25608 = arguments.length;
var i__4731__auto___25609 = (0);
while(true){
if((i__4731__auto___25609 < len__4730__auto___25608)){
args__4736__auto__.push((arguments[i__4731__auto___25609]));

var G__25610 = (i__4731__auto___25609 + (1));
i__4731__auto___25609 = G__25610;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25605){
var map__25606 = p__25605;
var map__25606__$1 = (((((!((map__25606 == null))))?(((((map__25606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25606):map__25606);
var opts = map__25606__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25603){
var G__25604 = cljs.core.first.call(null,seq25603);
var seq25603__$1 = cljs.core.next.call(null,seq25603);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25604,seq25603__$1);
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
var G__25612 = arguments.length;
switch (G__25612) {
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
var c__25511__auto___25658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___25658){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___25658){
return (function (state_25636){
var state_val_25637 = (state_25636[(1)]);
if((state_val_25637 === (7))){
var inst_25632 = (state_25636[(2)]);
var state_25636__$1 = state_25636;
var statearr_25638_25659 = state_25636__$1;
(statearr_25638_25659[(2)] = inst_25632);

(statearr_25638_25659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (1))){
var state_25636__$1 = state_25636;
var statearr_25639_25660 = state_25636__$1;
(statearr_25639_25660[(2)] = null);

(statearr_25639_25660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (4))){
var inst_25615 = (state_25636[(7)]);
var inst_25615__$1 = (state_25636[(2)]);
var inst_25616 = (inst_25615__$1 == null);
var state_25636__$1 = (function (){var statearr_25640 = state_25636;
(statearr_25640[(7)] = inst_25615__$1);

return statearr_25640;
})();
if(cljs.core.truth_(inst_25616)){
var statearr_25641_25661 = state_25636__$1;
(statearr_25641_25661[(1)] = (5));

} else {
var statearr_25642_25662 = state_25636__$1;
(statearr_25642_25662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (13))){
var state_25636__$1 = state_25636;
var statearr_25643_25663 = state_25636__$1;
(statearr_25643_25663[(2)] = null);

(statearr_25643_25663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (6))){
var inst_25615 = (state_25636[(7)]);
var state_25636__$1 = state_25636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25636__$1,(11),to,inst_25615);
} else {
if((state_val_25637 === (3))){
var inst_25634 = (state_25636[(2)]);
var state_25636__$1 = state_25636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25636__$1,inst_25634);
} else {
if((state_val_25637 === (12))){
var state_25636__$1 = state_25636;
var statearr_25644_25664 = state_25636__$1;
(statearr_25644_25664[(2)] = null);

(statearr_25644_25664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (2))){
var state_25636__$1 = state_25636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25636__$1,(4),from);
} else {
if((state_val_25637 === (11))){
var inst_25625 = (state_25636[(2)]);
var state_25636__$1 = state_25636;
if(cljs.core.truth_(inst_25625)){
var statearr_25645_25665 = state_25636__$1;
(statearr_25645_25665[(1)] = (12));

} else {
var statearr_25646_25666 = state_25636__$1;
(statearr_25646_25666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (9))){
var state_25636__$1 = state_25636;
var statearr_25647_25667 = state_25636__$1;
(statearr_25647_25667[(2)] = null);

(statearr_25647_25667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (5))){
var state_25636__$1 = state_25636;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25648_25668 = state_25636__$1;
(statearr_25648_25668[(1)] = (8));

} else {
var statearr_25649_25669 = state_25636__$1;
(statearr_25649_25669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (14))){
var inst_25630 = (state_25636[(2)]);
var state_25636__$1 = state_25636;
var statearr_25650_25670 = state_25636__$1;
(statearr_25650_25670[(2)] = inst_25630);

(statearr_25650_25670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (10))){
var inst_25622 = (state_25636[(2)]);
var state_25636__$1 = state_25636;
var statearr_25651_25671 = state_25636__$1;
(statearr_25651_25671[(2)] = inst_25622);

(statearr_25651_25671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (8))){
var inst_25619 = cljs.core.async.close_BANG_.call(null,to);
var state_25636__$1 = state_25636;
var statearr_25652_25672 = state_25636__$1;
(statearr_25652_25672[(2)] = inst_25619);

(statearr_25652_25672[(1)] = (10));


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
});})(c__25511__auto___25658))
;
return ((function (switch__25416__auto__,c__25511__auto___25658){
return (function() {
var cljs$core$async$state_machine__25417__auto__ = null;
var cljs$core$async$state_machine__25417__auto____0 = (function (){
var statearr_25653 = [null,null,null,null,null,null,null,null];
(statearr_25653[(0)] = cljs$core$async$state_machine__25417__auto__);

(statearr_25653[(1)] = (1));

return statearr_25653;
});
var cljs$core$async$state_machine__25417__auto____1 = (function (state_25636){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_25636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e25654){if((e25654 instanceof Object)){
var ex__25420__auto__ = e25654;
var statearr_25655_25673 = state_25636;
(statearr_25655_25673[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25674 = state_25636;
state_25636 = G__25674;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$state_machine__25417__auto__ = function(state_25636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25417__auto____1.call(this,state_25636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25417__auto____0;
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25417__auto____1;
return cljs$core$async$state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___25658))
})();
var state__25513__auto__ = (function (){var statearr_25656 = f__25512__auto__.call(null);
(statearr_25656[(6)] = c__25511__auto___25658);

return statearr_25656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___25658))
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
return (function (p__25675){
var vec__25676 = p__25675;
var v = cljs.core.nth.call(null,vec__25676,(0),null);
var p = cljs.core.nth.call(null,vec__25676,(1),null);
var job = vec__25676;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25511__auto___25847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___25847,res,vec__25676,v,p,job,jobs,results){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___25847,res,vec__25676,v,p,job,jobs,results){
return (function (state_25683){
var state_val_25684 = (state_25683[(1)]);
if((state_val_25684 === (1))){
var state_25683__$1 = state_25683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25683__$1,(2),res,v);
} else {
if((state_val_25684 === (2))){
var inst_25680 = (state_25683[(2)]);
var inst_25681 = cljs.core.async.close_BANG_.call(null,res);
var state_25683__$1 = (function (){var statearr_25685 = state_25683;
(statearr_25685[(7)] = inst_25680);

return statearr_25685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25683__$1,inst_25681);
} else {
return null;
}
}
});})(c__25511__auto___25847,res,vec__25676,v,p,job,jobs,results))
;
return ((function (switch__25416__auto__,c__25511__auto___25847,res,vec__25676,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0 = (function (){
var statearr_25686 = [null,null,null,null,null,null,null,null];
(statearr_25686[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__);

(statearr_25686[(1)] = (1));

return statearr_25686;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1 = (function (state_25683){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_25683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e25687){if((e25687 instanceof Object)){
var ex__25420__auto__ = e25687;
var statearr_25688_25848 = state_25683;
(statearr_25688_25848[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25849 = state_25683;
state_25683 = G__25849;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__ = function(state_25683){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1.call(this,state_25683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___25847,res,vec__25676,v,p,job,jobs,results))
})();
var state__25513__auto__ = (function (){var statearr_25689 = f__25512__auto__.call(null);
(statearr_25689[(6)] = c__25511__auto___25847);

return statearr_25689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___25847,res,vec__25676,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25690){
var vec__25691 = p__25690;
var v = cljs.core.nth.call(null,vec__25691,(0),null);
var p = cljs.core.nth.call(null,vec__25691,(1),null);
var job = vec__25691;
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
var n__4607__auto___25850 = n;
var __25851 = (0);
while(true){
if((__25851 < n__4607__auto___25850)){
var G__25694_25852 = type;
var G__25694_25853__$1 = (((G__25694_25852 instanceof cljs.core.Keyword))?G__25694_25852.fqn:null);
switch (G__25694_25853__$1) {
case "compute":
var c__25511__auto___25855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25851,c__25511__auto___25855,G__25694_25852,G__25694_25853__$1,n__4607__auto___25850,jobs,results,process,async){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (__25851,c__25511__auto___25855,G__25694_25852,G__25694_25853__$1,n__4607__auto___25850,jobs,results,process,async){
return (function (state_25707){
var state_val_25708 = (state_25707[(1)]);
if((state_val_25708 === (1))){
var state_25707__$1 = state_25707;
var statearr_25709_25856 = state_25707__$1;
(statearr_25709_25856[(2)] = null);

(statearr_25709_25856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (2))){
var state_25707__$1 = state_25707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25707__$1,(4),jobs);
} else {
if((state_val_25708 === (3))){
var inst_25705 = (state_25707[(2)]);
var state_25707__$1 = state_25707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25707__$1,inst_25705);
} else {
if((state_val_25708 === (4))){
var inst_25697 = (state_25707[(2)]);
var inst_25698 = process.call(null,inst_25697);
var state_25707__$1 = state_25707;
if(cljs.core.truth_(inst_25698)){
var statearr_25710_25857 = state_25707__$1;
(statearr_25710_25857[(1)] = (5));

} else {
var statearr_25711_25858 = state_25707__$1;
(statearr_25711_25858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (5))){
var state_25707__$1 = state_25707;
var statearr_25712_25859 = state_25707__$1;
(statearr_25712_25859[(2)] = null);

(statearr_25712_25859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (6))){
var state_25707__$1 = state_25707;
var statearr_25713_25860 = state_25707__$1;
(statearr_25713_25860[(2)] = null);

(statearr_25713_25860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (7))){
var inst_25703 = (state_25707[(2)]);
var state_25707__$1 = state_25707;
var statearr_25714_25861 = state_25707__$1;
(statearr_25714_25861[(2)] = inst_25703);

(statearr_25714_25861[(1)] = (3));


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
});})(__25851,c__25511__auto___25855,G__25694_25852,G__25694_25853__$1,n__4607__auto___25850,jobs,results,process,async))
;
return ((function (__25851,switch__25416__auto__,c__25511__auto___25855,G__25694_25852,G__25694_25853__$1,n__4607__auto___25850,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0 = (function (){
var statearr_25715 = [null,null,null,null,null,null,null];
(statearr_25715[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__);

(statearr_25715[(1)] = (1));

return statearr_25715;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1 = (function (state_25707){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_25707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e25716){if((e25716 instanceof Object)){
var ex__25420__auto__ = e25716;
var statearr_25717_25862 = state_25707;
(statearr_25717_25862[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25863 = state_25707;
state_25707 = G__25863;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__ = function(state_25707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1.call(this,state_25707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__;
})()
;})(__25851,switch__25416__auto__,c__25511__auto___25855,G__25694_25852,G__25694_25853__$1,n__4607__auto___25850,jobs,results,process,async))
})();
var state__25513__auto__ = (function (){var statearr_25718 = f__25512__auto__.call(null);
(statearr_25718[(6)] = c__25511__auto___25855);

return statearr_25718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(__25851,c__25511__auto___25855,G__25694_25852,G__25694_25853__$1,n__4607__auto___25850,jobs,results,process,async))
);


break;
case "async":
var c__25511__auto___25864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25851,c__25511__auto___25864,G__25694_25852,G__25694_25853__$1,n__4607__auto___25850,jobs,results,process,async){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (__25851,c__25511__auto___25864,G__25694_25852,G__25694_25853__$1,n__4607__auto___25850,jobs,results,process,async){
return (function (state_25731){
var state_val_25732 = (state_25731[(1)]);
if((state_val_25732 === (1))){
var state_25731__$1 = state_25731;
var statearr_25733_25865 = state_25731__$1;
(statearr_25733_25865[(2)] = null);

(statearr_25733_25865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (2))){
var state_25731__$1 = state_25731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25731__$1,(4),jobs);
} else {
if((state_val_25732 === (3))){
var inst_25729 = (state_25731[(2)]);
var state_25731__$1 = state_25731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25731__$1,inst_25729);
} else {
if((state_val_25732 === (4))){
var inst_25721 = (state_25731[(2)]);
var inst_25722 = async.call(null,inst_25721);
var state_25731__$1 = state_25731;
if(cljs.core.truth_(inst_25722)){
var statearr_25734_25866 = state_25731__$1;
(statearr_25734_25866[(1)] = (5));

} else {
var statearr_25735_25867 = state_25731__$1;
(statearr_25735_25867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (5))){
var state_25731__$1 = state_25731;
var statearr_25736_25868 = state_25731__$1;
(statearr_25736_25868[(2)] = null);

(statearr_25736_25868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (6))){
var state_25731__$1 = state_25731;
var statearr_25737_25869 = state_25731__$1;
(statearr_25737_25869[(2)] = null);

(statearr_25737_25869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (7))){
var inst_25727 = (state_25731[(2)]);
var state_25731__$1 = state_25731;
var statearr_25738_25870 = state_25731__$1;
(statearr_25738_25870[(2)] = inst_25727);

(statearr_25738_25870[(1)] = (3));


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
});})(__25851,c__25511__auto___25864,G__25694_25852,G__25694_25853__$1,n__4607__auto___25850,jobs,results,process,async))
;
return ((function (__25851,switch__25416__auto__,c__25511__auto___25864,G__25694_25852,G__25694_25853__$1,n__4607__auto___25850,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0 = (function (){
var statearr_25739 = [null,null,null,null,null,null,null];
(statearr_25739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__);

(statearr_25739[(1)] = (1));

return statearr_25739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1 = (function (state_25731){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_25731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e25740){if((e25740 instanceof Object)){
var ex__25420__auto__ = e25740;
var statearr_25741_25871 = state_25731;
(statearr_25741_25871[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25872 = state_25731;
state_25731 = G__25872;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__ = function(state_25731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1.call(this,state_25731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__;
})()
;})(__25851,switch__25416__auto__,c__25511__auto___25864,G__25694_25852,G__25694_25853__$1,n__4607__auto___25850,jobs,results,process,async))
})();
var state__25513__auto__ = (function (){var statearr_25742 = f__25512__auto__.call(null);
(statearr_25742[(6)] = c__25511__auto___25864);

return statearr_25742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(__25851,c__25511__auto___25864,G__25694_25852,G__25694_25853__$1,n__4607__auto___25850,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25694_25853__$1)].join('')));

}

var G__25873 = (__25851 + (1));
__25851 = G__25873;
continue;
} else {
}
break;
}

var c__25511__auto___25874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___25874,jobs,results,process,async){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___25874,jobs,results,process,async){
return (function (state_25764){
var state_val_25765 = (state_25764[(1)]);
if((state_val_25765 === (7))){
var inst_25760 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
var statearr_25766_25875 = state_25764__$1;
(statearr_25766_25875[(2)] = inst_25760);

(statearr_25766_25875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (1))){
var state_25764__$1 = state_25764;
var statearr_25767_25876 = state_25764__$1;
(statearr_25767_25876[(2)] = null);

(statearr_25767_25876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (4))){
var inst_25745 = (state_25764[(7)]);
var inst_25745__$1 = (state_25764[(2)]);
var inst_25746 = (inst_25745__$1 == null);
var state_25764__$1 = (function (){var statearr_25768 = state_25764;
(statearr_25768[(7)] = inst_25745__$1);

return statearr_25768;
})();
if(cljs.core.truth_(inst_25746)){
var statearr_25769_25877 = state_25764__$1;
(statearr_25769_25877[(1)] = (5));

} else {
var statearr_25770_25878 = state_25764__$1;
(statearr_25770_25878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (6))){
var inst_25750 = (state_25764[(8)]);
var inst_25745 = (state_25764[(7)]);
var inst_25750__$1 = cljs.core.async.chan.call(null,(1));
var inst_25751 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25752 = [inst_25745,inst_25750__$1];
var inst_25753 = (new cljs.core.PersistentVector(null,2,(5),inst_25751,inst_25752,null));
var state_25764__$1 = (function (){var statearr_25771 = state_25764;
(statearr_25771[(8)] = inst_25750__$1);

return statearr_25771;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25764__$1,(8),jobs,inst_25753);
} else {
if((state_val_25765 === (3))){
var inst_25762 = (state_25764[(2)]);
var state_25764__$1 = state_25764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25764__$1,inst_25762);
} else {
if((state_val_25765 === (2))){
var state_25764__$1 = state_25764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25764__$1,(4),from);
} else {
if((state_val_25765 === (9))){
var inst_25757 = (state_25764[(2)]);
var state_25764__$1 = (function (){var statearr_25772 = state_25764;
(statearr_25772[(9)] = inst_25757);

return statearr_25772;
})();
var statearr_25773_25879 = state_25764__$1;
(statearr_25773_25879[(2)] = null);

(statearr_25773_25879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (5))){
var inst_25748 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25764__$1 = state_25764;
var statearr_25774_25880 = state_25764__$1;
(statearr_25774_25880[(2)] = inst_25748);

(statearr_25774_25880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25765 === (8))){
var inst_25750 = (state_25764[(8)]);
var inst_25755 = (state_25764[(2)]);
var state_25764__$1 = (function (){var statearr_25775 = state_25764;
(statearr_25775[(10)] = inst_25755);

return statearr_25775;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25764__$1,(9),results,inst_25750);
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
});})(c__25511__auto___25874,jobs,results,process,async))
;
return ((function (switch__25416__auto__,c__25511__auto___25874,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0 = (function (){
var statearr_25776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25776[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__);

(statearr_25776[(1)] = (1));

return statearr_25776;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1 = (function (state_25764){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_25764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e25777){if((e25777 instanceof Object)){
var ex__25420__auto__ = e25777;
var statearr_25778_25881 = state_25764;
(statearr_25778_25881[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25882 = state_25764;
state_25764 = G__25882;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__ = function(state_25764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1.call(this,state_25764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___25874,jobs,results,process,async))
})();
var state__25513__auto__ = (function (){var statearr_25779 = f__25512__auto__.call(null);
(statearr_25779[(6)] = c__25511__auto___25874);

return statearr_25779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___25874,jobs,results,process,async))
);


var c__25511__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto__,jobs,results,process,async){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto__,jobs,results,process,async){
return (function (state_25817){
var state_val_25818 = (state_25817[(1)]);
if((state_val_25818 === (7))){
var inst_25813 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
var statearr_25819_25883 = state_25817__$1;
(statearr_25819_25883[(2)] = inst_25813);

(statearr_25819_25883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (20))){
var state_25817__$1 = state_25817;
var statearr_25820_25884 = state_25817__$1;
(statearr_25820_25884[(2)] = null);

(statearr_25820_25884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (1))){
var state_25817__$1 = state_25817;
var statearr_25821_25885 = state_25817__$1;
(statearr_25821_25885[(2)] = null);

(statearr_25821_25885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (4))){
var inst_25782 = (state_25817[(7)]);
var inst_25782__$1 = (state_25817[(2)]);
var inst_25783 = (inst_25782__$1 == null);
var state_25817__$1 = (function (){var statearr_25822 = state_25817;
(statearr_25822[(7)] = inst_25782__$1);

return statearr_25822;
})();
if(cljs.core.truth_(inst_25783)){
var statearr_25823_25886 = state_25817__$1;
(statearr_25823_25886[(1)] = (5));

} else {
var statearr_25824_25887 = state_25817__$1;
(statearr_25824_25887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (15))){
var inst_25795 = (state_25817[(8)]);
var state_25817__$1 = state_25817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25817__$1,(18),to,inst_25795);
} else {
if((state_val_25818 === (21))){
var inst_25808 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
var statearr_25825_25888 = state_25817__$1;
(statearr_25825_25888[(2)] = inst_25808);

(statearr_25825_25888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (13))){
var inst_25810 = (state_25817[(2)]);
var state_25817__$1 = (function (){var statearr_25826 = state_25817;
(statearr_25826[(9)] = inst_25810);

return statearr_25826;
})();
var statearr_25827_25889 = state_25817__$1;
(statearr_25827_25889[(2)] = null);

(statearr_25827_25889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (6))){
var inst_25782 = (state_25817[(7)]);
var state_25817__$1 = state_25817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25817__$1,(11),inst_25782);
} else {
if((state_val_25818 === (17))){
var inst_25803 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
if(cljs.core.truth_(inst_25803)){
var statearr_25828_25890 = state_25817__$1;
(statearr_25828_25890[(1)] = (19));

} else {
var statearr_25829_25891 = state_25817__$1;
(statearr_25829_25891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (3))){
var inst_25815 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25817__$1,inst_25815);
} else {
if((state_val_25818 === (12))){
var inst_25792 = (state_25817[(10)]);
var state_25817__$1 = state_25817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25817__$1,(14),inst_25792);
} else {
if((state_val_25818 === (2))){
var state_25817__$1 = state_25817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25817__$1,(4),results);
} else {
if((state_val_25818 === (19))){
var state_25817__$1 = state_25817;
var statearr_25830_25892 = state_25817__$1;
(statearr_25830_25892[(2)] = null);

(statearr_25830_25892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (11))){
var inst_25792 = (state_25817[(2)]);
var state_25817__$1 = (function (){var statearr_25831 = state_25817;
(statearr_25831[(10)] = inst_25792);

return statearr_25831;
})();
var statearr_25832_25893 = state_25817__$1;
(statearr_25832_25893[(2)] = null);

(statearr_25832_25893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (9))){
var state_25817__$1 = state_25817;
var statearr_25833_25894 = state_25817__$1;
(statearr_25833_25894[(2)] = null);

(statearr_25833_25894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (5))){
var state_25817__$1 = state_25817;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25834_25895 = state_25817__$1;
(statearr_25834_25895[(1)] = (8));

} else {
var statearr_25835_25896 = state_25817__$1;
(statearr_25835_25896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (14))){
var inst_25797 = (state_25817[(11)]);
var inst_25795 = (state_25817[(8)]);
var inst_25795__$1 = (state_25817[(2)]);
var inst_25796 = (inst_25795__$1 == null);
var inst_25797__$1 = cljs.core.not.call(null,inst_25796);
var state_25817__$1 = (function (){var statearr_25836 = state_25817;
(statearr_25836[(11)] = inst_25797__$1);

(statearr_25836[(8)] = inst_25795__$1);

return statearr_25836;
})();
if(inst_25797__$1){
var statearr_25837_25897 = state_25817__$1;
(statearr_25837_25897[(1)] = (15));

} else {
var statearr_25838_25898 = state_25817__$1;
(statearr_25838_25898[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (16))){
var inst_25797 = (state_25817[(11)]);
var state_25817__$1 = state_25817;
var statearr_25839_25899 = state_25817__$1;
(statearr_25839_25899[(2)] = inst_25797);

(statearr_25839_25899[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (10))){
var inst_25789 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
var statearr_25840_25900 = state_25817__$1;
(statearr_25840_25900[(2)] = inst_25789);

(statearr_25840_25900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (18))){
var inst_25800 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
var statearr_25841_25901 = state_25817__$1;
(statearr_25841_25901[(2)] = inst_25800);

(statearr_25841_25901[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (8))){
var inst_25786 = cljs.core.async.close_BANG_.call(null,to);
var state_25817__$1 = state_25817;
var statearr_25842_25902 = state_25817__$1;
(statearr_25842_25902[(2)] = inst_25786);

(statearr_25842_25902[(1)] = (10));


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
});})(c__25511__auto__,jobs,results,process,async))
;
return ((function (switch__25416__auto__,c__25511__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0 = (function (){
var statearr_25843 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25843[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__);

(statearr_25843[(1)] = (1));

return statearr_25843;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1 = (function (state_25817){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_25817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e25844){if((e25844 instanceof Object)){
var ex__25420__auto__ = e25844;
var statearr_25845_25903 = state_25817;
(statearr_25845_25903[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25904 = state_25817;
state_25817 = G__25904;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__ = function(state_25817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1.call(this,state_25817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25417__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto__,jobs,results,process,async))
})();
var state__25513__auto__ = (function (){var statearr_25846 = f__25512__auto__.call(null);
(statearr_25846[(6)] = c__25511__auto__);

return statearr_25846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto__,jobs,results,process,async))
);

return c__25511__auto__;
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
var G__25906 = arguments.length;
switch (G__25906) {
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
var G__25909 = arguments.length;
switch (G__25909) {
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
var G__25912 = arguments.length;
switch (G__25912) {
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
var c__25511__auto___25961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___25961,tc,fc){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___25961,tc,fc){
return (function (state_25938){
var state_val_25939 = (state_25938[(1)]);
if((state_val_25939 === (7))){
var inst_25934 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
var statearr_25940_25962 = state_25938__$1;
(statearr_25940_25962[(2)] = inst_25934);

(statearr_25940_25962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (1))){
var state_25938__$1 = state_25938;
var statearr_25941_25963 = state_25938__$1;
(statearr_25941_25963[(2)] = null);

(statearr_25941_25963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (4))){
var inst_25915 = (state_25938[(7)]);
var inst_25915__$1 = (state_25938[(2)]);
var inst_25916 = (inst_25915__$1 == null);
var state_25938__$1 = (function (){var statearr_25942 = state_25938;
(statearr_25942[(7)] = inst_25915__$1);

return statearr_25942;
})();
if(cljs.core.truth_(inst_25916)){
var statearr_25943_25964 = state_25938__$1;
(statearr_25943_25964[(1)] = (5));

} else {
var statearr_25944_25965 = state_25938__$1;
(statearr_25944_25965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (13))){
var state_25938__$1 = state_25938;
var statearr_25945_25966 = state_25938__$1;
(statearr_25945_25966[(2)] = null);

(statearr_25945_25966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (6))){
var inst_25915 = (state_25938[(7)]);
var inst_25921 = p.call(null,inst_25915);
var state_25938__$1 = state_25938;
if(cljs.core.truth_(inst_25921)){
var statearr_25946_25967 = state_25938__$1;
(statearr_25946_25967[(1)] = (9));

} else {
var statearr_25947_25968 = state_25938__$1;
(statearr_25947_25968[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (3))){
var inst_25936 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25938__$1,inst_25936);
} else {
if((state_val_25939 === (12))){
var state_25938__$1 = state_25938;
var statearr_25948_25969 = state_25938__$1;
(statearr_25948_25969[(2)] = null);

(statearr_25948_25969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (2))){
var state_25938__$1 = state_25938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25938__$1,(4),ch);
} else {
if((state_val_25939 === (11))){
var inst_25915 = (state_25938[(7)]);
var inst_25925 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25938__$1,(8),inst_25925,inst_25915);
} else {
if((state_val_25939 === (9))){
var state_25938__$1 = state_25938;
var statearr_25949_25970 = state_25938__$1;
(statearr_25949_25970[(2)] = tc);

(statearr_25949_25970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (5))){
var inst_25918 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25919 = cljs.core.async.close_BANG_.call(null,fc);
var state_25938__$1 = (function (){var statearr_25950 = state_25938;
(statearr_25950[(8)] = inst_25918);

return statearr_25950;
})();
var statearr_25951_25971 = state_25938__$1;
(statearr_25951_25971[(2)] = inst_25919);

(statearr_25951_25971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (14))){
var inst_25932 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
var statearr_25952_25972 = state_25938__$1;
(statearr_25952_25972[(2)] = inst_25932);

(statearr_25952_25972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (10))){
var state_25938__$1 = state_25938;
var statearr_25953_25973 = state_25938__$1;
(statearr_25953_25973[(2)] = fc);

(statearr_25953_25973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (8))){
var inst_25927 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
if(cljs.core.truth_(inst_25927)){
var statearr_25954_25974 = state_25938__$1;
(statearr_25954_25974[(1)] = (12));

} else {
var statearr_25955_25975 = state_25938__$1;
(statearr_25955_25975[(1)] = (13));

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
});})(c__25511__auto___25961,tc,fc))
;
return ((function (switch__25416__auto__,c__25511__auto___25961,tc,fc){
return (function() {
var cljs$core$async$state_machine__25417__auto__ = null;
var cljs$core$async$state_machine__25417__auto____0 = (function (){
var statearr_25956 = [null,null,null,null,null,null,null,null,null];
(statearr_25956[(0)] = cljs$core$async$state_machine__25417__auto__);

(statearr_25956[(1)] = (1));

return statearr_25956;
});
var cljs$core$async$state_machine__25417__auto____1 = (function (state_25938){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_25938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e25957){if((e25957 instanceof Object)){
var ex__25420__auto__ = e25957;
var statearr_25958_25976 = state_25938;
(statearr_25958_25976[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25977 = state_25938;
state_25938 = G__25977;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$state_machine__25417__auto__ = function(state_25938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25417__auto____1.call(this,state_25938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25417__auto____0;
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25417__auto____1;
return cljs$core$async$state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___25961,tc,fc))
})();
var state__25513__auto__ = (function (){var statearr_25959 = f__25512__auto__.call(null);
(statearr_25959[(6)] = c__25511__auto___25961);

return statearr_25959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___25961,tc,fc))
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
var c__25511__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto__){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto__){
return (function (state_25998){
var state_val_25999 = (state_25998[(1)]);
if((state_val_25999 === (7))){
var inst_25994 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
var statearr_26000_26018 = state_25998__$1;
(statearr_26000_26018[(2)] = inst_25994);

(statearr_26000_26018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (1))){
var inst_25978 = init;
var state_25998__$1 = (function (){var statearr_26001 = state_25998;
(statearr_26001[(7)] = inst_25978);

return statearr_26001;
})();
var statearr_26002_26019 = state_25998__$1;
(statearr_26002_26019[(2)] = null);

(statearr_26002_26019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (4))){
var inst_25981 = (state_25998[(8)]);
var inst_25981__$1 = (state_25998[(2)]);
var inst_25982 = (inst_25981__$1 == null);
var state_25998__$1 = (function (){var statearr_26003 = state_25998;
(statearr_26003[(8)] = inst_25981__$1);

return statearr_26003;
})();
if(cljs.core.truth_(inst_25982)){
var statearr_26004_26020 = state_25998__$1;
(statearr_26004_26020[(1)] = (5));

} else {
var statearr_26005_26021 = state_25998__$1;
(statearr_26005_26021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (6))){
var inst_25985 = (state_25998[(9)]);
var inst_25978 = (state_25998[(7)]);
var inst_25981 = (state_25998[(8)]);
var inst_25985__$1 = f.call(null,inst_25978,inst_25981);
var inst_25986 = cljs.core.reduced_QMARK_.call(null,inst_25985__$1);
var state_25998__$1 = (function (){var statearr_26006 = state_25998;
(statearr_26006[(9)] = inst_25985__$1);

return statearr_26006;
})();
if(inst_25986){
var statearr_26007_26022 = state_25998__$1;
(statearr_26007_26022[(1)] = (8));

} else {
var statearr_26008_26023 = state_25998__$1;
(statearr_26008_26023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (3))){
var inst_25996 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25998__$1,inst_25996);
} else {
if((state_val_25999 === (2))){
var state_25998__$1 = state_25998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25998__$1,(4),ch);
} else {
if((state_val_25999 === (9))){
var inst_25985 = (state_25998[(9)]);
var inst_25978 = inst_25985;
var state_25998__$1 = (function (){var statearr_26009 = state_25998;
(statearr_26009[(7)] = inst_25978);

return statearr_26009;
})();
var statearr_26010_26024 = state_25998__$1;
(statearr_26010_26024[(2)] = null);

(statearr_26010_26024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (5))){
var inst_25978 = (state_25998[(7)]);
var state_25998__$1 = state_25998;
var statearr_26011_26025 = state_25998__$1;
(statearr_26011_26025[(2)] = inst_25978);

(statearr_26011_26025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (10))){
var inst_25992 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
var statearr_26012_26026 = state_25998__$1;
(statearr_26012_26026[(2)] = inst_25992);

(statearr_26012_26026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (8))){
var inst_25985 = (state_25998[(9)]);
var inst_25988 = cljs.core.deref.call(null,inst_25985);
var state_25998__$1 = state_25998;
var statearr_26013_26027 = state_25998__$1;
(statearr_26013_26027[(2)] = inst_25988);

(statearr_26013_26027[(1)] = (10));


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
});})(c__25511__auto__))
;
return ((function (switch__25416__auto__,c__25511__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25417__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25417__auto____0 = (function (){
var statearr_26014 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26014[(0)] = cljs$core$async$reduce_$_state_machine__25417__auto__);

(statearr_26014[(1)] = (1));

return statearr_26014;
});
var cljs$core$async$reduce_$_state_machine__25417__auto____1 = (function (state_25998){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_25998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e26015){if((e26015 instanceof Object)){
var ex__25420__auto__ = e26015;
var statearr_26016_26028 = state_25998;
(statearr_26016_26028[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26029 = state_25998;
state_25998 = G__26029;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25417__auto__ = function(state_25998){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25417__auto____1.call(this,state_25998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25417__auto____0;
cljs$core$async$reduce_$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25417__auto____1;
return cljs$core$async$reduce_$_state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto__))
})();
var state__25513__auto__ = (function (){var statearr_26017 = f__25512__auto__.call(null);
(statearr_26017[(6)] = c__25511__auto__);

return statearr_26017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto__))
);

return c__25511__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25511__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto__,f__$1){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto__,f__$1){
return (function (state_26035){
var state_val_26036 = (state_26035[(1)]);
if((state_val_26036 === (1))){
var inst_26030 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26035__$1 = state_26035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26035__$1,(2),inst_26030);
} else {
if((state_val_26036 === (2))){
var inst_26032 = (state_26035[(2)]);
var inst_26033 = f__$1.call(null,inst_26032);
var state_26035__$1 = state_26035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26035__$1,inst_26033);
} else {
return null;
}
}
});})(c__25511__auto__,f__$1))
;
return ((function (switch__25416__auto__,c__25511__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25417__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25417__auto____0 = (function (){
var statearr_26037 = [null,null,null,null,null,null,null];
(statearr_26037[(0)] = cljs$core$async$transduce_$_state_machine__25417__auto__);

(statearr_26037[(1)] = (1));

return statearr_26037;
});
var cljs$core$async$transduce_$_state_machine__25417__auto____1 = (function (state_26035){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_26035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e26038){if((e26038 instanceof Object)){
var ex__25420__auto__ = e26038;
var statearr_26039_26041 = state_26035;
(statearr_26039_26041[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26042 = state_26035;
state_26035 = G__26042;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25417__auto__ = function(state_26035){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25417__auto____1.call(this,state_26035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25417__auto____0;
cljs$core$async$transduce_$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25417__auto____1;
return cljs$core$async$transduce_$_state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto__,f__$1))
})();
var state__25513__auto__ = (function (){var statearr_26040 = f__25512__auto__.call(null);
(statearr_26040[(6)] = c__25511__auto__);

return statearr_26040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto__,f__$1))
);

return c__25511__auto__;
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
var G__26044 = arguments.length;
switch (G__26044) {
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
var c__25511__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto__){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto__){
return (function (state_26069){
var state_val_26070 = (state_26069[(1)]);
if((state_val_26070 === (7))){
var inst_26051 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26071_26092 = state_26069__$1;
(statearr_26071_26092[(2)] = inst_26051);

(statearr_26071_26092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (1))){
var inst_26045 = cljs.core.seq.call(null,coll);
var inst_26046 = inst_26045;
var state_26069__$1 = (function (){var statearr_26072 = state_26069;
(statearr_26072[(7)] = inst_26046);

return statearr_26072;
})();
var statearr_26073_26093 = state_26069__$1;
(statearr_26073_26093[(2)] = null);

(statearr_26073_26093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (4))){
var inst_26046 = (state_26069[(7)]);
var inst_26049 = cljs.core.first.call(null,inst_26046);
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26069__$1,(7),ch,inst_26049);
} else {
if((state_val_26070 === (13))){
var inst_26063 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26074_26094 = state_26069__$1;
(statearr_26074_26094[(2)] = inst_26063);

(statearr_26074_26094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (6))){
var inst_26054 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_26054)){
var statearr_26075_26095 = state_26069__$1;
(statearr_26075_26095[(1)] = (8));

} else {
var statearr_26076_26096 = state_26069__$1;
(statearr_26076_26096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (3))){
var inst_26067 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26069__$1,inst_26067);
} else {
if((state_val_26070 === (12))){
var state_26069__$1 = state_26069;
var statearr_26077_26097 = state_26069__$1;
(statearr_26077_26097[(2)] = null);

(statearr_26077_26097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (2))){
var inst_26046 = (state_26069[(7)]);
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_26046)){
var statearr_26078_26098 = state_26069__$1;
(statearr_26078_26098[(1)] = (4));

} else {
var statearr_26079_26099 = state_26069__$1;
(statearr_26079_26099[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (11))){
var inst_26060 = cljs.core.async.close_BANG_.call(null,ch);
var state_26069__$1 = state_26069;
var statearr_26080_26100 = state_26069__$1;
(statearr_26080_26100[(2)] = inst_26060);

(statearr_26080_26100[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (9))){
var state_26069__$1 = state_26069;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26081_26101 = state_26069__$1;
(statearr_26081_26101[(1)] = (11));

} else {
var statearr_26082_26102 = state_26069__$1;
(statearr_26082_26102[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (5))){
var inst_26046 = (state_26069[(7)]);
var state_26069__$1 = state_26069;
var statearr_26083_26103 = state_26069__$1;
(statearr_26083_26103[(2)] = inst_26046);

(statearr_26083_26103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (10))){
var inst_26065 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26084_26104 = state_26069__$1;
(statearr_26084_26104[(2)] = inst_26065);

(statearr_26084_26104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (8))){
var inst_26046 = (state_26069[(7)]);
var inst_26056 = cljs.core.next.call(null,inst_26046);
var inst_26046__$1 = inst_26056;
var state_26069__$1 = (function (){var statearr_26085 = state_26069;
(statearr_26085[(7)] = inst_26046__$1);

return statearr_26085;
})();
var statearr_26086_26105 = state_26069__$1;
(statearr_26086_26105[(2)] = null);

(statearr_26086_26105[(1)] = (2));


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
});})(c__25511__auto__))
;
return ((function (switch__25416__auto__,c__25511__auto__){
return (function() {
var cljs$core$async$state_machine__25417__auto__ = null;
var cljs$core$async$state_machine__25417__auto____0 = (function (){
var statearr_26087 = [null,null,null,null,null,null,null,null];
(statearr_26087[(0)] = cljs$core$async$state_machine__25417__auto__);

(statearr_26087[(1)] = (1));

return statearr_26087;
});
var cljs$core$async$state_machine__25417__auto____1 = (function (state_26069){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_26069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e26088){if((e26088 instanceof Object)){
var ex__25420__auto__ = e26088;
var statearr_26089_26106 = state_26069;
(statearr_26089_26106[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26107 = state_26069;
state_26069 = G__26107;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$state_machine__25417__auto__ = function(state_26069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25417__auto____1.call(this,state_26069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25417__auto____0;
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25417__auto____1;
return cljs$core$async$state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto__))
})();
var state__25513__auto__ = (function (){var statearr_26090 = f__25512__auto__.call(null);
(statearr_26090[(6)] = c__25511__auto__);

return statearr_26090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto__))
);

return c__25511__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26108 = (function (ch,cs,meta26109){
this.ch = ch;
this.cs = cs;
this.meta26109 = meta26109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26110,meta26109__$1){
var self__ = this;
var _26110__$1 = this;
return (new cljs.core.async.t_cljs$core$async26108(self__.ch,self__.cs,meta26109__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26110){
var self__ = this;
var _26110__$1 = this;
return self__.meta26109;
});})(cs))
;

cljs.core.async.t_cljs$core$async26108.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26108.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26108.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26108.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26108.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26108.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26108.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26109","meta26109",-924351290,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26108";

cljs.core.async.t_cljs$core$async26108.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26108");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26108.
 */
cljs.core.async.__GT_t_cljs$core$async26108 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26108(ch__$1,cs__$1,meta26109){
return (new cljs.core.async.t_cljs$core$async26108(ch__$1,cs__$1,meta26109));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26108(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25511__auto___26330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___26330,cs,m,dchan,dctr,done){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___26330,cs,m,dchan,dctr,done){
return (function (state_26245){
var state_val_26246 = (state_26245[(1)]);
if((state_val_26246 === (7))){
var inst_26241 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
var statearr_26247_26331 = state_26245__$1;
(statearr_26247_26331[(2)] = inst_26241);

(statearr_26247_26331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (20))){
var inst_26144 = (state_26245[(7)]);
var inst_26156 = cljs.core.first.call(null,inst_26144);
var inst_26157 = cljs.core.nth.call(null,inst_26156,(0),null);
var inst_26158 = cljs.core.nth.call(null,inst_26156,(1),null);
var state_26245__$1 = (function (){var statearr_26248 = state_26245;
(statearr_26248[(8)] = inst_26157);

return statearr_26248;
})();
if(cljs.core.truth_(inst_26158)){
var statearr_26249_26332 = state_26245__$1;
(statearr_26249_26332[(1)] = (22));

} else {
var statearr_26250_26333 = state_26245__$1;
(statearr_26250_26333[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (27))){
var inst_26193 = (state_26245[(9)]);
var inst_26113 = (state_26245[(10)]);
var inst_26186 = (state_26245[(11)]);
var inst_26188 = (state_26245[(12)]);
var inst_26193__$1 = cljs.core._nth.call(null,inst_26186,inst_26188);
var inst_26194 = cljs.core.async.put_BANG_.call(null,inst_26193__$1,inst_26113,done);
var state_26245__$1 = (function (){var statearr_26251 = state_26245;
(statearr_26251[(9)] = inst_26193__$1);

return statearr_26251;
})();
if(cljs.core.truth_(inst_26194)){
var statearr_26252_26334 = state_26245__$1;
(statearr_26252_26334[(1)] = (30));

} else {
var statearr_26253_26335 = state_26245__$1;
(statearr_26253_26335[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (1))){
var state_26245__$1 = state_26245;
var statearr_26254_26336 = state_26245__$1;
(statearr_26254_26336[(2)] = null);

(statearr_26254_26336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (24))){
var inst_26144 = (state_26245[(7)]);
var inst_26163 = (state_26245[(2)]);
var inst_26164 = cljs.core.next.call(null,inst_26144);
var inst_26122 = inst_26164;
var inst_26123 = null;
var inst_26124 = (0);
var inst_26125 = (0);
var state_26245__$1 = (function (){var statearr_26255 = state_26245;
(statearr_26255[(13)] = inst_26122);

(statearr_26255[(14)] = inst_26123);

(statearr_26255[(15)] = inst_26124);

(statearr_26255[(16)] = inst_26125);

(statearr_26255[(17)] = inst_26163);

return statearr_26255;
})();
var statearr_26256_26337 = state_26245__$1;
(statearr_26256_26337[(2)] = null);

(statearr_26256_26337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (39))){
var state_26245__$1 = state_26245;
var statearr_26260_26338 = state_26245__$1;
(statearr_26260_26338[(2)] = null);

(statearr_26260_26338[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (4))){
var inst_26113 = (state_26245[(10)]);
var inst_26113__$1 = (state_26245[(2)]);
var inst_26114 = (inst_26113__$1 == null);
var state_26245__$1 = (function (){var statearr_26261 = state_26245;
(statearr_26261[(10)] = inst_26113__$1);

return statearr_26261;
})();
if(cljs.core.truth_(inst_26114)){
var statearr_26262_26339 = state_26245__$1;
(statearr_26262_26339[(1)] = (5));

} else {
var statearr_26263_26340 = state_26245__$1;
(statearr_26263_26340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (15))){
var inst_26122 = (state_26245[(13)]);
var inst_26123 = (state_26245[(14)]);
var inst_26124 = (state_26245[(15)]);
var inst_26125 = (state_26245[(16)]);
var inst_26140 = (state_26245[(2)]);
var inst_26141 = (inst_26125 + (1));
var tmp26257 = inst_26122;
var tmp26258 = inst_26123;
var tmp26259 = inst_26124;
var inst_26122__$1 = tmp26257;
var inst_26123__$1 = tmp26258;
var inst_26124__$1 = tmp26259;
var inst_26125__$1 = inst_26141;
var state_26245__$1 = (function (){var statearr_26264 = state_26245;
(statearr_26264[(13)] = inst_26122__$1);

(statearr_26264[(18)] = inst_26140);

(statearr_26264[(14)] = inst_26123__$1);

(statearr_26264[(15)] = inst_26124__$1);

(statearr_26264[(16)] = inst_26125__$1);

return statearr_26264;
})();
var statearr_26265_26341 = state_26245__$1;
(statearr_26265_26341[(2)] = null);

(statearr_26265_26341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (21))){
var inst_26167 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
var statearr_26269_26342 = state_26245__$1;
(statearr_26269_26342[(2)] = inst_26167);

(statearr_26269_26342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (31))){
var inst_26193 = (state_26245[(9)]);
var inst_26197 = done.call(null,null);
var inst_26198 = cljs.core.async.untap_STAR_.call(null,m,inst_26193);
var state_26245__$1 = (function (){var statearr_26270 = state_26245;
(statearr_26270[(19)] = inst_26197);

return statearr_26270;
})();
var statearr_26271_26343 = state_26245__$1;
(statearr_26271_26343[(2)] = inst_26198);

(statearr_26271_26343[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (32))){
var inst_26185 = (state_26245[(20)]);
var inst_26187 = (state_26245[(21)]);
var inst_26186 = (state_26245[(11)]);
var inst_26188 = (state_26245[(12)]);
var inst_26200 = (state_26245[(2)]);
var inst_26201 = (inst_26188 + (1));
var tmp26266 = inst_26185;
var tmp26267 = inst_26187;
var tmp26268 = inst_26186;
var inst_26185__$1 = tmp26266;
var inst_26186__$1 = tmp26268;
var inst_26187__$1 = tmp26267;
var inst_26188__$1 = inst_26201;
var state_26245__$1 = (function (){var statearr_26272 = state_26245;
(statearr_26272[(20)] = inst_26185__$1);

(statearr_26272[(21)] = inst_26187__$1);

(statearr_26272[(22)] = inst_26200);

(statearr_26272[(11)] = inst_26186__$1);

(statearr_26272[(12)] = inst_26188__$1);

return statearr_26272;
})();
var statearr_26273_26344 = state_26245__$1;
(statearr_26273_26344[(2)] = null);

(statearr_26273_26344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (40))){
var inst_26213 = (state_26245[(23)]);
var inst_26217 = done.call(null,null);
var inst_26218 = cljs.core.async.untap_STAR_.call(null,m,inst_26213);
var state_26245__$1 = (function (){var statearr_26274 = state_26245;
(statearr_26274[(24)] = inst_26217);

return statearr_26274;
})();
var statearr_26275_26345 = state_26245__$1;
(statearr_26275_26345[(2)] = inst_26218);

(statearr_26275_26345[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (33))){
var inst_26204 = (state_26245[(25)]);
var inst_26206 = cljs.core.chunked_seq_QMARK_.call(null,inst_26204);
var state_26245__$1 = state_26245;
if(inst_26206){
var statearr_26276_26346 = state_26245__$1;
(statearr_26276_26346[(1)] = (36));

} else {
var statearr_26277_26347 = state_26245__$1;
(statearr_26277_26347[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (13))){
var inst_26134 = (state_26245[(26)]);
var inst_26137 = cljs.core.async.close_BANG_.call(null,inst_26134);
var state_26245__$1 = state_26245;
var statearr_26278_26348 = state_26245__$1;
(statearr_26278_26348[(2)] = inst_26137);

(statearr_26278_26348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (22))){
var inst_26157 = (state_26245[(8)]);
var inst_26160 = cljs.core.async.close_BANG_.call(null,inst_26157);
var state_26245__$1 = state_26245;
var statearr_26279_26349 = state_26245__$1;
(statearr_26279_26349[(2)] = inst_26160);

(statearr_26279_26349[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (36))){
var inst_26204 = (state_26245[(25)]);
var inst_26208 = cljs.core.chunk_first.call(null,inst_26204);
var inst_26209 = cljs.core.chunk_rest.call(null,inst_26204);
var inst_26210 = cljs.core.count.call(null,inst_26208);
var inst_26185 = inst_26209;
var inst_26186 = inst_26208;
var inst_26187 = inst_26210;
var inst_26188 = (0);
var state_26245__$1 = (function (){var statearr_26280 = state_26245;
(statearr_26280[(20)] = inst_26185);

(statearr_26280[(21)] = inst_26187);

(statearr_26280[(11)] = inst_26186);

(statearr_26280[(12)] = inst_26188);

return statearr_26280;
})();
var statearr_26281_26350 = state_26245__$1;
(statearr_26281_26350[(2)] = null);

(statearr_26281_26350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (41))){
var inst_26204 = (state_26245[(25)]);
var inst_26220 = (state_26245[(2)]);
var inst_26221 = cljs.core.next.call(null,inst_26204);
var inst_26185 = inst_26221;
var inst_26186 = null;
var inst_26187 = (0);
var inst_26188 = (0);
var state_26245__$1 = (function (){var statearr_26282 = state_26245;
(statearr_26282[(20)] = inst_26185);

(statearr_26282[(21)] = inst_26187);

(statearr_26282[(11)] = inst_26186);

(statearr_26282[(12)] = inst_26188);

(statearr_26282[(27)] = inst_26220);

return statearr_26282;
})();
var statearr_26283_26351 = state_26245__$1;
(statearr_26283_26351[(2)] = null);

(statearr_26283_26351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (43))){
var state_26245__$1 = state_26245;
var statearr_26284_26352 = state_26245__$1;
(statearr_26284_26352[(2)] = null);

(statearr_26284_26352[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (29))){
var inst_26229 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
var statearr_26285_26353 = state_26245__$1;
(statearr_26285_26353[(2)] = inst_26229);

(statearr_26285_26353[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (44))){
var inst_26238 = (state_26245[(2)]);
var state_26245__$1 = (function (){var statearr_26286 = state_26245;
(statearr_26286[(28)] = inst_26238);

return statearr_26286;
})();
var statearr_26287_26354 = state_26245__$1;
(statearr_26287_26354[(2)] = null);

(statearr_26287_26354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (6))){
var inst_26177 = (state_26245[(29)]);
var inst_26176 = cljs.core.deref.call(null,cs);
var inst_26177__$1 = cljs.core.keys.call(null,inst_26176);
var inst_26178 = cljs.core.count.call(null,inst_26177__$1);
var inst_26179 = cljs.core.reset_BANG_.call(null,dctr,inst_26178);
var inst_26184 = cljs.core.seq.call(null,inst_26177__$1);
var inst_26185 = inst_26184;
var inst_26186 = null;
var inst_26187 = (0);
var inst_26188 = (0);
var state_26245__$1 = (function (){var statearr_26288 = state_26245;
(statearr_26288[(20)] = inst_26185);

(statearr_26288[(30)] = inst_26179);

(statearr_26288[(29)] = inst_26177__$1);

(statearr_26288[(21)] = inst_26187);

(statearr_26288[(11)] = inst_26186);

(statearr_26288[(12)] = inst_26188);

return statearr_26288;
})();
var statearr_26289_26355 = state_26245__$1;
(statearr_26289_26355[(2)] = null);

(statearr_26289_26355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (28))){
var inst_26185 = (state_26245[(20)]);
var inst_26204 = (state_26245[(25)]);
var inst_26204__$1 = cljs.core.seq.call(null,inst_26185);
var state_26245__$1 = (function (){var statearr_26290 = state_26245;
(statearr_26290[(25)] = inst_26204__$1);

return statearr_26290;
})();
if(inst_26204__$1){
var statearr_26291_26356 = state_26245__$1;
(statearr_26291_26356[(1)] = (33));

} else {
var statearr_26292_26357 = state_26245__$1;
(statearr_26292_26357[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (25))){
var inst_26187 = (state_26245[(21)]);
var inst_26188 = (state_26245[(12)]);
var inst_26190 = (inst_26188 < inst_26187);
var inst_26191 = inst_26190;
var state_26245__$1 = state_26245;
if(cljs.core.truth_(inst_26191)){
var statearr_26293_26358 = state_26245__$1;
(statearr_26293_26358[(1)] = (27));

} else {
var statearr_26294_26359 = state_26245__$1;
(statearr_26294_26359[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (34))){
var state_26245__$1 = state_26245;
var statearr_26295_26360 = state_26245__$1;
(statearr_26295_26360[(2)] = null);

(statearr_26295_26360[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (17))){
var state_26245__$1 = state_26245;
var statearr_26296_26361 = state_26245__$1;
(statearr_26296_26361[(2)] = null);

(statearr_26296_26361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (3))){
var inst_26243 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26245__$1,inst_26243);
} else {
if((state_val_26246 === (12))){
var inst_26172 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
var statearr_26297_26362 = state_26245__$1;
(statearr_26297_26362[(2)] = inst_26172);

(statearr_26297_26362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (2))){
var state_26245__$1 = state_26245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26245__$1,(4),ch);
} else {
if((state_val_26246 === (23))){
var state_26245__$1 = state_26245;
var statearr_26298_26363 = state_26245__$1;
(statearr_26298_26363[(2)] = null);

(statearr_26298_26363[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (35))){
var inst_26227 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
var statearr_26299_26364 = state_26245__$1;
(statearr_26299_26364[(2)] = inst_26227);

(statearr_26299_26364[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (19))){
var inst_26144 = (state_26245[(7)]);
var inst_26148 = cljs.core.chunk_first.call(null,inst_26144);
var inst_26149 = cljs.core.chunk_rest.call(null,inst_26144);
var inst_26150 = cljs.core.count.call(null,inst_26148);
var inst_26122 = inst_26149;
var inst_26123 = inst_26148;
var inst_26124 = inst_26150;
var inst_26125 = (0);
var state_26245__$1 = (function (){var statearr_26300 = state_26245;
(statearr_26300[(13)] = inst_26122);

(statearr_26300[(14)] = inst_26123);

(statearr_26300[(15)] = inst_26124);

(statearr_26300[(16)] = inst_26125);

return statearr_26300;
})();
var statearr_26301_26365 = state_26245__$1;
(statearr_26301_26365[(2)] = null);

(statearr_26301_26365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (11))){
var inst_26122 = (state_26245[(13)]);
var inst_26144 = (state_26245[(7)]);
var inst_26144__$1 = cljs.core.seq.call(null,inst_26122);
var state_26245__$1 = (function (){var statearr_26302 = state_26245;
(statearr_26302[(7)] = inst_26144__$1);

return statearr_26302;
})();
if(inst_26144__$1){
var statearr_26303_26366 = state_26245__$1;
(statearr_26303_26366[(1)] = (16));

} else {
var statearr_26304_26367 = state_26245__$1;
(statearr_26304_26367[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (9))){
var inst_26174 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
var statearr_26305_26368 = state_26245__$1;
(statearr_26305_26368[(2)] = inst_26174);

(statearr_26305_26368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (5))){
var inst_26120 = cljs.core.deref.call(null,cs);
var inst_26121 = cljs.core.seq.call(null,inst_26120);
var inst_26122 = inst_26121;
var inst_26123 = null;
var inst_26124 = (0);
var inst_26125 = (0);
var state_26245__$1 = (function (){var statearr_26306 = state_26245;
(statearr_26306[(13)] = inst_26122);

(statearr_26306[(14)] = inst_26123);

(statearr_26306[(15)] = inst_26124);

(statearr_26306[(16)] = inst_26125);

return statearr_26306;
})();
var statearr_26307_26369 = state_26245__$1;
(statearr_26307_26369[(2)] = null);

(statearr_26307_26369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (14))){
var state_26245__$1 = state_26245;
var statearr_26308_26370 = state_26245__$1;
(statearr_26308_26370[(2)] = null);

(statearr_26308_26370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (45))){
var inst_26235 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
var statearr_26309_26371 = state_26245__$1;
(statearr_26309_26371[(2)] = inst_26235);

(statearr_26309_26371[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (26))){
var inst_26177 = (state_26245[(29)]);
var inst_26231 = (state_26245[(2)]);
var inst_26232 = cljs.core.seq.call(null,inst_26177);
var state_26245__$1 = (function (){var statearr_26310 = state_26245;
(statearr_26310[(31)] = inst_26231);

return statearr_26310;
})();
if(inst_26232){
var statearr_26311_26372 = state_26245__$1;
(statearr_26311_26372[(1)] = (42));

} else {
var statearr_26312_26373 = state_26245__$1;
(statearr_26312_26373[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (16))){
var inst_26144 = (state_26245[(7)]);
var inst_26146 = cljs.core.chunked_seq_QMARK_.call(null,inst_26144);
var state_26245__$1 = state_26245;
if(inst_26146){
var statearr_26313_26374 = state_26245__$1;
(statearr_26313_26374[(1)] = (19));

} else {
var statearr_26314_26375 = state_26245__$1;
(statearr_26314_26375[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (38))){
var inst_26224 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
var statearr_26315_26376 = state_26245__$1;
(statearr_26315_26376[(2)] = inst_26224);

(statearr_26315_26376[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (30))){
var state_26245__$1 = state_26245;
var statearr_26316_26377 = state_26245__$1;
(statearr_26316_26377[(2)] = null);

(statearr_26316_26377[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (10))){
var inst_26123 = (state_26245[(14)]);
var inst_26125 = (state_26245[(16)]);
var inst_26133 = cljs.core._nth.call(null,inst_26123,inst_26125);
var inst_26134 = cljs.core.nth.call(null,inst_26133,(0),null);
var inst_26135 = cljs.core.nth.call(null,inst_26133,(1),null);
var state_26245__$1 = (function (){var statearr_26317 = state_26245;
(statearr_26317[(26)] = inst_26134);

return statearr_26317;
})();
if(cljs.core.truth_(inst_26135)){
var statearr_26318_26378 = state_26245__$1;
(statearr_26318_26378[(1)] = (13));

} else {
var statearr_26319_26379 = state_26245__$1;
(statearr_26319_26379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (18))){
var inst_26170 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
var statearr_26320_26380 = state_26245__$1;
(statearr_26320_26380[(2)] = inst_26170);

(statearr_26320_26380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (42))){
var state_26245__$1 = state_26245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26245__$1,(45),dchan);
} else {
if((state_val_26246 === (37))){
var inst_26204 = (state_26245[(25)]);
var inst_26113 = (state_26245[(10)]);
var inst_26213 = (state_26245[(23)]);
var inst_26213__$1 = cljs.core.first.call(null,inst_26204);
var inst_26214 = cljs.core.async.put_BANG_.call(null,inst_26213__$1,inst_26113,done);
var state_26245__$1 = (function (){var statearr_26321 = state_26245;
(statearr_26321[(23)] = inst_26213__$1);

return statearr_26321;
})();
if(cljs.core.truth_(inst_26214)){
var statearr_26322_26381 = state_26245__$1;
(statearr_26322_26381[(1)] = (39));

} else {
var statearr_26323_26382 = state_26245__$1;
(statearr_26323_26382[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (8))){
var inst_26124 = (state_26245[(15)]);
var inst_26125 = (state_26245[(16)]);
var inst_26127 = (inst_26125 < inst_26124);
var inst_26128 = inst_26127;
var state_26245__$1 = state_26245;
if(cljs.core.truth_(inst_26128)){
var statearr_26324_26383 = state_26245__$1;
(statearr_26324_26383[(1)] = (10));

} else {
var statearr_26325_26384 = state_26245__$1;
(statearr_26325_26384[(1)] = (11));

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
});})(c__25511__auto___26330,cs,m,dchan,dctr,done))
;
return ((function (switch__25416__auto__,c__25511__auto___26330,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25417__auto__ = null;
var cljs$core$async$mult_$_state_machine__25417__auto____0 = (function (){
var statearr_26326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26326[(0)] = cljs$core$async$mult_$_state_machine__25417__auto__);

(statearr_26326[(1)] = (1));

return statearr_26326;
});
var cljs$core$async$mult_$_state_machine__25417__auto____1 = (function (state_26245){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_26245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e26327){if((e26327 instanceof Object)){
var ex__25420__auto__ = e26327;
var statearr_26328_26385 = state_26245;
(statearr_26328_26385[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26386 = state_26245;
state_26245 = G__26386;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25417__auto__ = function(state_26245){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25417__auto____1.call(this,state_26245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25417__auto____0;
cljs$core$async$mult_$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25417__auto____1;
return cljs$core$async$mult_$_state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___26330,cs,m,dchan,dctr,done))
})();
var state__25513__auto__ = (function (){var statearr_26329 = f__25512__auto__.call(null);
(statearr_26329[(6)] = c__25511__auto___26330);

return statearr_26329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___26330,cs,m,dchan,dctr,done))
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
var G__26388 = arguments.length;
switch (G__26388) {
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
var len__4730__auto___26400 = arguments.length;
var i__4731__auto___26401 = (0);
while(true){
if((i__4731__auto___26401 < len__4730__auto___26400)){
args__4736__auto__.push((arguments[i__4731__auto___26401]));

var G__26402 = (i__4731__auto___26401 + (1));
i__4731__auto___26401 = G__26402;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26394){
var map__26395 = p__26394;
var map__26395__$1 = (((((!((map__26395 == null))))?(((((map__26395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26395):map__26395);
var opts = map__26395__$1;
var statearr_26397_26403 = state;
(statearr_26397_26403[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__26395,map__26395__$1,opts){
return (function (val){
var statearr_26398_26404 = state;
(statearr_26398_26404[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26395,map__26395__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_26399_26405 = state;
(statearr_26399_26405[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26390){
var G__26391 = cljs.core.first.call(null,seq26390);
var seq26390__$1 = cljs.core.next.call(null,seq26390);
var G__26392 = cljs.core.first.call(null,seq26390__$1);
var seq26390__$2 = cljs.core.next.call(null,seq26390__$1);
var G__26393 = cljs.core.first.call(null,seq26390__$2);
var seq26390__$3 = cljs.core.next.call(null,seq26390__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26391,G__26392,G__26393,seq26390__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26406 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26406 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26407){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26407 = meta26407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26408,meta26407__$1){
var self__ = this;
var _26408__$1 = this;
return (new cljs.core.async.t_cljs$core$async26406(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26407__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26408){
var self__ = this;
var _26408__$1 = this;
return self__.meta26407;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26406.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26407","meta26407",-296129034,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26406.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26406";

cljs.core.async.t_cljs$core$async26406.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26406");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26406.
 */
cljs.core.async.__GT_t_cljs$core$async26406 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26406(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26407){
return (new cljs.core.async.t_cljs$core$async26406(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26407));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26406(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25511__auto___26570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___26570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___26570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26510){
var state_val_26511 = (state_26510[(1)]);
if((state_val_26511 === (7))){
var inst_26425 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
var statearr_26512_26571 = state_26510__$1;
(statearr_26512_26571[(2)] = inst_26425);

(statearr_26512_26571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (20))){
var inst_26437 = (state_26510[(7)]);
var state_26510__$1 = state_26510;
var statearr_26513_26572 = state_26510__$1;
(statearr_26513_26572[(2)] = inst_26437);

(statearr_26513_26572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (27))){
var state_26510__$1 = state_26510;
var statearr_26514_26573 = state_26510__$1;
(statearr_26514_26573[(2)] = null);

(statearr_26514_26573[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (1))){
var inst_26412 = (state_26510[(8)]);
var inst_26412__$1 = calc_state.call(null);
var inst_26414 = (inst_26412__$1 == null);
var inst_26415 = cljs.core.not.call(null,inst_26414);
var state_26510__$1 = (function (){var statearr_26515 = state_26510;
(statearr_26515[(8)] = inst_26412__$1);

return statearr_26515;
})();
if(inst_26415){
var statearr_26516_26574 = state_26510__$1;
(statearr_26516_26574[(1)] = (2));

} else {
var statearr_26517_26575 = state_26510__$1;
(statearr_26517_26575[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (24))){
var inst_26470 = (state_26510[(9)]);
var inst_26461 = (state_26510[(10)]);
var inst_26484 = (state_26510[(11)]);
var inst_26484__$1 = inst_26461.call(null,inst_26470);
var state_26510__$1 = (function (){var statearr_26518 = state_26510;
(statearr_26518[(11)] = inst_26484__$1);

return statearr_26518;
})();
if(cljs.core.truth_(inst_26484__$1)){
var statearr_26519_26576 = state_26510__$1;
(statearr_26519_26576[(1)] = (29));

} else {
var statearr_26520_26577 = state_26510__$1;
(statearr_26520_26577[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (4))){
var inst_26428 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
if(cljs.core.truth_(inst_26428)){
var statearr_26521_26578 = state_26510__$1;
(statearr_26521_26578[(1)] = (8));

} else {
var statearr_26522_26579 = state_26510__$1;
(statearr_26522_26579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (15))){
var inst_26455 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
if(cljs.core.truth_(inst_26455)){
var statearr_26523_26580 = state_26510__$1;
(statearr_26523_26580[(1)] = (19));

} else {
var statearr_26524_26581 = state_26510__$1;
(statearr_26524_26581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (21))){
var inst_26460 = (state_26510[(12)]);
var inst_26460__$1 = (state_26510[(2)]);
var inst_26461 = cljs.core.get.call(null,inst_26460__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26462 = cljs.core.get.call(null,inst_26460__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26463 = cljs.core.get.call(null,inst_26460__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26510__$1 = (function (){var statearr_26525 = state_26510;
(statearr_26525[(12)] = inst_26460__$1);

(statearr_26525[(10)] = inst_26461);

(statearr_26525[(13)] = inst_26462);

return statearr_26525;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26510__$1,(22),inst_26463);
} else {
if((state_val_26511 === (31))){
var inst_26492 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
if(cljs.core.truth_(inst_26492)){
var statearr_26526_26582 = state_26510__$1;
(statearr_26526_26582[(1)] = (32));

} else {
var statearr_26527_26583 = state_26510__$1;
(statearr_26527_26583[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (32))){
var inst_26469 = (state_26510[(14)]);
var state_26510__$1 = state_26510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26510__$1,(35),out,inst_26469);
} else {
if((state_val_26511 === (33))){
var inst_26460 = (state_26510[(12)]);
var inst_26437 = inst_26460;
var state_26510__$1 = (function (){var statearr_26528 = state_26510;
(statearr_26528[(7)] = inst_26437);

return statearr_26528;
})();
var statearr_26529_26584 = state_26510__$1;
(statearr_26529_26584[(2)] = null);

(statearr_26529_26584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (13))){
var inst_26437 = (state_26510[(7)]);
var inst_26444 = inst_26437.cljs$lang$protocol_mask$partition0$;
var inst_26445 = (inst_26444 & (64));
var inst_26446 = inst_26437.cljs$core$ISeq$;
var inst_26447 = (cljs.core.PROTOCOL_SENTINEL === inst_26446);
var inst_26448 = ((inst_26445) || (inst_26447));
var state_26510__$1 = state_26510;
if(cljs.core.truth_(inst_26448)){
var statearr_26530_26585 = state_26510__$1;
(statearr_26530_26585[(1)] = (16));

} else {
var statearr_26531_26586 = state_26510__$1;
(statearr_26531_26586[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (22))){
var inst_26469 = (state_26510[(14)]);
var inst_26470 = (state_26510[(9)]);
var inst_26468 = (state_26510[(2)]);
var inst_26469__$1 = cljs.core.nth.call(null,inst_26468,(0),null);
var inst_26470__$1 = cljs.core.nth.call(null,inst_26468,(1),null);
var inst_26471 = (inst_26469__$1 == null);
var inst_26472 = cljs.core._EQ_.call(null,inst_26470__$1,change);
var inst_26473 = ((inst_26471) || (inst_26472));
var state_26510__$1 = (function (){var statearr_26532 = state_26510;
(statearr_26532[(14)] = inst_26469__$1);

(statearr_26532[(9)] = inst_26470__$1);

return statearr_26532;
})();
if(cljs.core.truth_(inst_26473)){
var statearr_26533_26587 = state_26510__$1;
(statearr_26533_26587[(1)] = (23));

} else {
var statearr_26534_26588 = state_26510__$1;
(statearr_26534_26588[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (36))){
var inst_26460 = (state_26510[(12)]);
var inst_26437 = inst_26460;
var state_26510__$1 = (function (){var statearr_26535 = state_26510;
(statearr_26535[(7)] = inst_26437);

return statearr_26535;
})();
var statearr_26536_26589 = state_26510__$1;
(statearr_26536_26589[(2)] = null);

(statearr_26536_26589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (29))){
var inst_26484 = (state_26510[(11)]);
var state_26510__$1 = state_26510;
var statearr_26537_26590 = state_26510__$1;
(statearr_26537_26590[(2)] = inst_26484);

(statearr_26537_26590[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (6))){
var state_26510__$1 = state_26510;
var statearr_26538_26591 = state_26510__$1;
(statearr_26538_26591[(2)] = false);

(statearr_26538_26591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (28))){
var inst_26480 = (state_26510[(2)]);
var inst_26481 = calc_state.call(null);
var inst_26437 = inst_26481;
var state_26510__$1 = (function (){var statearr_26539 = state_26510;
(statearr_26539[(7)] = inst_26437);

(statearr_26539[(15)] = inst_26480);

return statearr_26539;
})();
var statearr_26540_26592 = state_26510__$1;
(statearr_26540_26592[(2)] = null);

(statearr_26540_26592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (25))){
var inst_26506 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
var statearr_26541_26593 = state_26510__$1;
(statearr_26541_26593[(2)] = inst_26506);

(statearr_26541_26593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (34))){
var inst_26504 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
var statearr_26542_26594 = state_26510__$1;
(statearr_26542_26594[(2)] = inst_26504);

(statearr_26542_26594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (17))){
var state_26510__$1 = state_26510;
var statearr_26543_26595 = state_26510__$1;
(statearr_26543_26595[(2)] = false);

(statearr_26543_26595[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (3))){
var state_26510__$1 = state_26510;
var statearr_26544_26596 = state_26510__$1;
(statearr_26544_26596[(2)] = false);

(statearr_26544_26596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (12))){
var inst_26508 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26510__$1,inst_26508);
} else {
if((state_val_26511 === (2))){
var inst_26412 = (state_26510[(8)]);
var inst_26417 = inst_26412.cljs$lang$protocol_mask$partition0$;
var inst_26418 = (inst_26417 & (64));
var inst_26419 = inst_26412.cljs$core$ISeq$;
var inst_26420 = (cljs.core.PROTOCOL_SENTINEL === inst_26419);
var inst_26421 = ((inst_26418) || (inst_26420));
var state_26510__$1 = state_26510;
if(cljs.core.truth_(inst_26421)){
var statearr_26545_26597 = state_26510__$1;
(statearr_26545_26597[(1)] = (5));

} else {
var statearr_26546_26598 = state_26510__$1;
(statearr_26546_26598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (23))){
var inst_26469 = (state_26510[(14)]);
var inst_26475 = (inst_26469 == null);
var state_26510__$1 = state_26510;
if(cljs.core.truth_(inst_26475)){
var statearr_26547_26599 = state_26510__$1;
(statearr_26547_26599[(1)] = (26));

} else {
var statearr_26548_26600 = state_26510__$1;
(statearr_26548_26600[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (35))){
var inst_26495 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
if(cljs.core.truth_(inst_26495)){
var statearr_26549_26601 = state_26510__$1;
(statearr_26549_26601[(1)] = (36));

} else {
var statearr_26550_26602 = state_26510__$1;
(statearr_26550_26602[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (19))){
var inst_26437 = (state_26510[(7)]);
var inst_26457 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26437);
var state_26510__$1 = state_26510;
var statearr_26551_26603 = state_26510__$1;
(statearr_26551_26603[(2)] = inst_26457);

(statearr_26551_26603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (11))){
var inst_26437 = (state_26510[(7)]);
var inst_26441 = (inst_26437 == null);
var inst_26442 = cljs.core.not.call(null,inst_26441);
var state_26510__$1 = state_26510;
if(inst_26442){
var statearr_26552_26604 = state_26510__$1;
(statearr_26552_26604[(1)] = (13));

} else {
var statearr_26553_26605 = state_26510__$1;
(statearr_26553_26605[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (9))){
var inst_26412 = (state_26510[(8)]);
var state_26510__$1 = state_26510;
var statearr_26554_26606 = state_26510__$1;
(statearr_26554_26606[(2)] = inst_26412);

(statearr_26554_26606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (5))){
var state_26510__$1 = state_26510;
var statearr_26555_26607 = state_26510__$1;
(statearr_26555_26607[(2)] = true);

(statearr_26555_26607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (14))){
var state_26510__$1 = state_26510;
var statearr_26556_26608 = state_26510__$1;
(statearr_26556_26608[(2)] = false);

(statearr_26556_26608[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (26))){
var inst_26470 = (state_26510[(9)]);
var inst_26477 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26470);
var state_26510__$1 = state_26510;
var statearr_26557_26609 = state_26510__$1;
(statearr_26557_26609[(2)] = inst_26477);

(statearr_26557_26609[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (16))){
var state_26510__$1 = state_26510;
var statearr_26558_26610 = state_26510__$1;
(statearr_26558_26610[(2)] = true);

(statearr_26558_26610[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (38))){
var inst_26500 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
var statearr_26559_26611 = state_26510__$1;
(statearr_26559_26611[(2)] = inst_26500);

(statearr_26559_26611[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (30))){
var inst_26470 = (state_26510[(9)]);
var inst_26461 = (state_26510[(10)]);
var inst_26462 = (state_26510[(13)]);
var inst_26487 = cljs.core.empty_QMARK_.call(null,inst_26461);
var inst_26488 = inst_26462.call(null,inst_26470);
var inst_26489 = cljs.core.not.call(null,inst_26488);
var inst_26490 = ((inst_26487) && (inst_26489));
var state_26510__$1 = state_26510;
var statearr_26560_26612 = state_26510__$1;
(statearr_26560_26612[(2)] = inst_26490);

(statearr_26560_26612[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (10))){
var inst_26412 = (state_26510[(8)]);
var inst_26433 = (state_26510[(2)]);
var inst_26434 = cljs.core.get.call(null,inst_26433,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26435 = cljs.core.get.call(null,inst_26433,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26436 = cljs.core.get.call(null,inst_26433,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26437 = inst_26412;
var state_26510__$1 = (function (){var statearr_26561 = state_26510;
(statearr_26561[(7)] = inst_26437);

(statearr_26561[(16)] = inst_26434);

(statearr_26561[(17)] = inst_26436);

(statearr_26561[(18)] = inst_26435);

return statearr_26561;
})();
var statearr_26562_26613 = state_26510__$1;
(statearr_26562_26613[(2)] = null);

(statearr_26562_26613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (18))){
var inst_26452 = (state_26510[(2)]);
var state_26510__$1 = state_26510;
var statearr_26563_26614 = state_26510__$1;
(statearr_26563_26614[(2)] = inst_26452);

(statearr_26563_26614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (37))){
var state_26510__$1 = state_26510;
var statearr_26564_26615 = state_26510__$1;
(statearr_26564_26615[(2)] = null);

(statearr_26564_26615[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26511 === (8))){
var inst_26412 = (state_26510[(8)]);
var inst_26430 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26412);
var state_26510__$1 = state_26510;
var statearr_26565_26616 = state_26510__$1;
(statearr_26565_26616[(2)] = inst_26430);

(statearr_26565_26616[(1)] = (10));


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
});})(c__25511__auto___26570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25416__auto__,c__25511__auto___26570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25417__auto__ = null;
var cljs$core$async$mix_$_state_machine__25417__auto____0 = (function (){
var statearr_26566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26566[(0)] = cljs$core$async$mix_$_state_machine__25417__auto__);

(statearr_26566[(1)] = (1));

return statearr_26566;
});
var cljs$core$async$mix_$_state_machine__25417__auto____1 = (function (state_26510){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_26510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e26567){if((e26567 instanceof Object)){
var ex__25420__auto__ = e26567;
var statearr_26568_26617 = state_26510;
(statearr_26568_26617[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26618 = state_26510;
state_26510 = G__26618;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25417__auto__ = function(state_26510){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25417__auto____1.call(this,state_26510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25417__auto____0;
cljs$core$async$mix_$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25417__auto____1;
return cljs$core$async$mix_$_state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___26570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25513__auto__ = (function (){var statearr_26569 = f__25512__auto__.call(null);
(statearr_26569[(6)] = c__25511__auto___26570);

return statearr_26569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___26570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__26620 = arguments.length;
switch (G__26620) {
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
var G__26624 = arguments.length;
switch (G__26624) {
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
return (function (p1__26622_SHARP_){
if(cljs.core.truth_(p1__26622_SHARP_.call(null,topic))){
return p1__26622_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26622_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26625 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26626){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26626 = meta26626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26627,meta26626__$1){
var self__ = this;
var _26627__$1 = this;
return (new cljs.core.async.t_cljs$core$async26625(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26626__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26627){
var self__ = this;
var _26627__$1 = this;
return self__.meta26626;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26625.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26625.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26625.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26625.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26625.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26625.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26625.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26626","meta26626",-555815450,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26625.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26625";

cljs.core.async.t_cljs$core$async26625.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26625");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26625.
 */
cljs.core.async.__GT_t_cljs$core$async26625 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26625(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26626){
return (new cljs.core.async.t_cljs$core$async26625(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26626));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26625(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25511__auto___26745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___26745,mults,ensure_mult,p){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___26745,mults,ensure_mult,p){
return (function (state_26699){
var state_val_26700 = (state_26699[(1)]);
if((state_val_26700 === (7))){
var inst_26695 = (state_26699[(2)]);
var state_26699__$1 = state_26699;
var statearr_26701_26746 = state_26699__$1;
(statearr_26701_26746[(2)] = inst_26695);

(statearr_26701_26746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (20))){
var state_26699__$1 = state_26699;
var statearr_26702_26747 = state_26699__$1;
(statearr_26702_26747[(2)] = null);

(statearr_26702_26747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (1))){
var state_26699__$1 = state_26699;
var statearr_26703_26748 = state_26699__$1;
(statearr_26703_26748[(2)] = null);

(statearr_26703_26748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (24))){
var inst_26678 = (state_26699[(7)]);
var inst_26687 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26678);
var state_26699__$1 = state_26699;
var statearr_26704_26749 = state_26699__$1;
(statearr_26704_26749[(2)] = inst_26687);

(statearr_26704_26749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (4))){
var inst_26630 = (state_26699[(8)]);
var inst_26630__$1 = (state_26699[(2)]);
var inst_26631 = (inst_26630__$1 == null);
var state_26699__$1 = (function (){var statearr_26705 = state_26699;
(statearr_26705[(8)] = inst_26630__$1);

return statearr_26705;
})();
if(cljs.core.truth_(inst_26631)){
var statearr_26706_26750 = state_26699__$1;
(statearr_26706_26750[(1)] = (5));

} else {
var statearr_26707_26751 = state_26699__$1;
(statearr_26707_26751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (15))){
var inst_26672 = (state_26699[(2)]);
var state_26699__$1 = state_26699;
var statearr_26708_26752 = state_26699__$1;
(statearr_26708_26752[(2)] = inst_26672);

(statearr_26708_26752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (21))){
var inst_26692 = (state_26699[(2)]);
var state_26699__$1 = (function (){var statearr_26709 = state_26699;
(statearr_26709[(9)] = inst_26692);

return statearr_26709;
})();
var statearr_26710_26753 = state_26699__$1;
(statearr_26710_26753[(2)] = null);

(statearr_26710_26753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (13))){
var inst_26654 = (state_26699[(10)]);
var inst_26656 = cljs.core.chunked_seq_QMARK_.call(null,inst_26654);
var state_26699__$1 = state_26699;
if(inst_26656){
var statearr_26711_26754 = state_26699__$1;
(statearr_26711_26754[(1)] = (16));

} else {
var statearr_26712_26755 = state_26699__$1;
(statearr_26712_26755[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (22))){
var inst_26684 = (state_26699[(2)]);
var state_26699__$1 = state_26699;
if(cljs.core.truth_(inst_26684)){
var statearr_26713_26756 = state_26699__$1;
(statearr_26713_26756[(1)] = (23));

} else {
var statearr_26714_26757 = state_26699__$1;
(statearr_26714_26757[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (6))){
var inst_26678 = (state_26699[(7)]);
var inst_26630 = (state_26699[(8)]);
var inst_26680 = (state_26699[(11)]);
var inst_26678__$1 = topic_fn.call(null,inst_26630);
var inst_26679 = cljs.core.deref.call(null,mults);
var inst_26680__$1 = cljs.core.get.call(null,inst_26679,inst_26678__$1);
var state_26699__$1 = (function (){var statearr_26715 = state_26699;
(statearr_26715[(7)] = inst_26678__$1);

(statearr_26715[(11)] = inst_26680__$1);

return statearr_26715;
})();
if(cljs.core.truth_(inst_26680__$1)){
var statearr_26716_26758 = state_26699__$1;
(statearr_26716_26758[(1)] = (19));

} else {
var statearr_26717_26759 = state_26699__$1;
(statearr_26717_26759[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (25))){
var inst_26689 = (state_26699[(2)]);
var state_26699__$1 = state_26699;
var statearr_26718_26760 = state_26699__$1;
(statearr_26718_26760[(2)] = inst_26689);

(statearr_26718_26760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (17))){
var inst_26654 = (state_26699[(10)]);
var inst_26663 = cljs.core.first.call(null,inst_26654);
var inst_26664 = cljs.core.async.muxch_STAR_.call(null,inst_26663);
var inst_26665 = cljs.core.async.close_BANG_.call(null,inst_26664);
var inst_26666 = cljs.core.next.call(null,inst_26654);
var inst_26640 = inst_26666;
var inst_26641 = null;
var inst_26642 = (0);
var inst_26643 = (0);
var state_26699__$1 = (function (){var statearr_26719 = state_26699;
(statearr_26719[(12)] = inst_26665);

(statearr_26719[(13)] = inst_26641);

(statearr_26719[(14)] = inst_26642);

(statearr_26719[(15)] = inst_26640);

(statearr_26719[(16)] = inst_26643);

return statearr_26719;
})();
var statearr_26720_26761 = state_26699__$1;
(statearr_26720_26761[(2)] = null);

(statearr_26720_26761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (3))){
var inst_26697 = (state_26699[(2)]);
var state_26699__$1 = state_26699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26699__$1,inst_26697);
} else {
if((state_val_26700 === (12))){
var inst_26674 = (state_26699[(2)]);
var state_26699__$1 = state_26699;
var statearr_26721_26762 = state_26699__$1;
(statearr_26721_26762[(2)] = inst_26674);

(statearr_26721_26762[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (2))){
var state_26699__$1 = state_26699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26699__$1,(4),ch);
} else {
if((state_val_26700 === (23))){
var state_26699__$1 = state_26699;
var statearr_26722_26763 = state_26699__$1;
(statearr_26722_26763[(2)] = null);

(statearr_26722_26763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (19))){
var inst_26630 = (state_26699[(8)]);
var inst_26680 = (state_26699[(11)]);
var inst_26682 = cljs.core.async.muxch_STAR_.call(null,inst_26680);
var state_26699__$1 = state_26699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26699__$1,(22),inst_26682,inst_26630);
} else {
if((state_val_26700 === (11))){
var inst_26654 = (state_26699[(10)]);
var inst_26640 = (state_26699[(15)]);
var inst_26654__$1 = cljs.core.seq.call(null,inst_26640);
var state_26699__$1 = (function (){var statearr_26723 = state_26699;
(statearr_26723[(10)] = inst_26654__$1);

return statearr_26723;
})();
if(inst_26654__$1){
var statearr_26724_26764 = state_26699__$1;
(statearr_26724_26764[(1)] = (13));

} else {
var statearr_26725_26765 = state_26699__$1;
(statearr_26725_26765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (9))){
var inst_26676 = (state_26699[(2)]);
var state_26699__$1 = state_26699;
var statearr_26726_26766 = state_26699__$1;
(statearr_26726_26766[(2)] = inst_26676);

(statearr_26726_26766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (5))){
var inst_26637 = cljs.core.deref.call(null,mults);
var inst_26638 = cljs.core.vals.call(null,inst_26637);
var inst_26639 = cljs.core.seq.call(null,inst_26638);
var inst_26640 = inst_26639;
var inst_26641 = null;
var inst_26642 = (0);
var inst_26643 = (0);
var state_26699__$1 = (function (){var statearr_26727 = state_26699;
(statearr_26727[(13)] = inst_26641);

(statearr_26727[(14)] = inst_26642);

(statearr_26727[(15)] = inst_26640);

(statearr_26727[(16)] = inst_26643);

return statearr_26727;
})();
var statearr_26728_26767 = state_26699__$1;
(statearr_26728_26767[(2)] = null);

(statearr_26728_26767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (14))){
var state_26699__$1 = state_26699;
var statearr_26732_26768 = state_26699__$1;
(statearr_26732_26768[(2)] = null);

(statearr_26732_26768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (16))){
var inst_26654 = (state_26699[(10)]);
var inst_26658 = cljs.core.chunk_first.call(null,inst_26654);
var inst_26659 = cljs.core.chunk_rest.call(null,inst_26654);
var inst_26660 = cljs.core.count.call(null,inst_26658);
var inst_26640 = inst_26659;
var inst_26641 = inst_26658;
var inst_26642 = inst_26660;
var inst_26643 = (0);
var state_26699__$1 = (function (){var statearr_26733 = state_26699;
(statearr_26733[(13)] = inst_26641);

(statearr_26733[(14)] = inst_26642);

(statearr_26733[(15)] = inst_26640);

(statearr_26733[(16)] = inst_26643);

return statearr_26733;
})();
var statearr_26734_26769 = state_26699__$1;
(statearr_26734_26769[(2)] = null);

(statearr_26734_26769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (10))){
var inst_26641 = (state_26699[(13)]);
var inst_26642 = (state_26699[(14)]);
var inst_26640 = (state_26699[(15)]);
var inst_26643 = (state_26699[(16)]);
var inst_26648 = cljs.core._nth.call(null,inst_26641,inst_26643);
var inst_26649 = cljs.core.async.muxch_STAR_.call(null,inst_26648);
var inst_26650 = cljs.core.async.close_BANG_.call(null,inst_26649);
var inst_26651 = (inst_26643 + (1));
var tmp26729 = inst_26641;
var tmp26730 = inst_26642;
var tmp26731 = inst_26640;
var inst_26640__$1 = tmp26731;
var inst_26641__$1 = tmp26729;
var inst_26642__$1 = tmp26730;
var inst_26643__$1 = inst_26651;
var state_26699__$1 = (function (){var statearr_26735 = state_26699;
(statearr_26735[(17)] = inst_26650);

(statearr_26735[(13)] = inst_26641__$1);

(statearr_26735[(14)] = inst_26642__$1);

(statearr_26735[(15)] = inst_26640__$1);

(statearr_26735[(16)] = inst_26643__$1);

return statearr_26735;
})();
var statearr_26736_26770 = state_26699__$1;
(statearr_26736_26770[(2)] = null);

(statearr_26736_26770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (18))){
var inst_26669 = (state_26699[(2)]);
var state_26699__$1 = state_26699;
var statearr_26737_26771 = state_26699__$1;
(statearr_26737_26771[(2)] = inst_26669);

(statearr_26737_26771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26700 === (8))){
var inst_26642 = (state_26699[(14)]);
var inst_26643 = (state_26699[(16)]);
var inst_26645 = (inst_26643 < inst_26642);
var inst_26646 = inst_26645;
var state_26699__$1 = state_26699;
if(cljs.core.truth_(inst_26646)){
var statearr_26738_26772 = state_26699__$1;
(statearr_26738_26772[(1)] = (10));

} else {
var statearr_26739_26773 = state_26699__$1;
(statearr_26739_26773[(1)] = (11));

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
});})(c__25511__auto___26745,mults,ensure_mult,p))
;
return ((function (switch__25416__auto__,c__25511__auto___26745,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25417__auto__ = null;
var cljs$core$async$state_machine__25417__auto____0 = (function (){
var statearr_26740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26740[(0)] = cljs$core$async$state_machine__25417__auto__);

(statearr_26740[(1)] = (1));

return statearr_26740;
});
var cljs$core$async$state_machine__25417__auto____1 = (function (state_26699){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_26699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e26741){if((e26741 instanceof Object)){
var ex__25420__auto__ = e26741;
var statearr_26742_26774 = state_26699;
(statearr_26742_26774[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26775 = state_26699;
state_26699 = G__26775;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$state_machine__25417__auto__ = function(state_26699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25417__auto____1.call(this,state_26699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25417__auto____0;
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25417__auto____1;
return cljs$core$async$state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___26745,mults,ensure_mult,p))
})();
var state__25513__auto__ = (function (){var statearr_26743 = f__25512__auto__.call(null);
(statearr_26743[(6)] = c__25511__auto___26745);

return statearr_26743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___26745,mults,ensure_mult,p))
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
var G__26777 = arguments.length;
switch (G__26777) {
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
var G__26780 = arguments.length;
switch (G__26780) {
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
var G__26783 = arguments.length;
switch (G__26783) {
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
var c__25511__auto___26850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___26850,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___26850,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26822){
var state_val_26823 = (state_26822[(1)]);
if((state_val_26823 === (7))){
var state_26822__$1 = state_26822;
var statearr_26824_26851 = state_26822__$1;
(statearr_26824_26851[(2)] = null);

(statearr_26824_26851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (1))){
var state_26822__$1 = state_26822;
var statearr_26825_26852 = state_26822__$1;
(statearr_26825_26852[(2)] = null);

(statearr_26825_26852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (4))){
var inst_26786 = (state_26822[(7)]);
var inst_26788 = (inst_26786 < cnt);
var state_26822__$1 = state_26822;
if(cljs.core.truth_(inst_26788)){
var statearr_26826_26853 = state_26822__$1;
(statearr_26826_26853[(1)] = (6));

} else {
var statearr_26827_26854 = state_26822__$1;
(statearr_26827_26854[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (15))){
var inst_26818 = (state_26822[(2)]);
var state_26822__$1 = state_26822;
var statearr_26828_26855 = state_26822__$1;
(statearr_26828_26855[(2)] = inst_26818);

(statearr_26828_26855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (13))){
var inst_26811 = cljs.core.async.close_BANG_.call(null,out);
var state_26822__$1 = state_26822;
var statearr_26829_26856 = state_26822__$1;
(statearr_26829_26856[(2)] = inst_26811);

(statearr_26829_26856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (6))){
var state_26822__$1 = state_26822;
var statearr_26830_26857 = state_26822__$1;
(statearr_26830_26857[(2)] = null);

(statearr_26830_26857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (3))){
var inst_26820 = (state_26822[(2)]);
var state_26822__$1 = state_26822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26822__$1,inst_26820);
} else {
if((state_val_26823 === (12))){
var inst_26808 = (state_26822[(8)]);
var inst_26808__$1 = (state_26822[(2)]);
var inst_26809 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26808__$1);
var state_26822__$1 = (function (){var statearr_26831 = state_26822;
(statearr_26831[(8)] = inst_26808__$1);

return statearr_26831;
})();
if(cljs.core.truth_(inst_26809)){
var statearr_26832_26858 = state_26822__$1;
(statearr_26832_26858[(1)] = (13));

} else {
var statearr_26833_26859 = state_26822__$1;
(statearr_26833_26859[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (2))){
var inst_26785 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26786 = (0);
var state_26822__$1 = (function (){var statearr_26834 = state_26822;
(statearr_26834[(7)] = inst_26786);

(statearr_26834[(9)] = inst_26785);

return statearr_26834;
})();
var statearr_26835_26860 = state_26822__$1;
(statearr_26835_26860[(2)] = null);

(statearr_26835_26860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (11))){
var inst_26786 = (state_26822[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26822,(10),Object,null,(9));
var inst_26795 = chs__$1.call(null,inst_26786);
var inst_26796 = done.call(null,inst_26786);
var inst_26797 = cljs.core.async.take_BANG_.call(null,inst_26795,inst_26796);
var state_26822__$1 = state_26822;
var statearr_26836_26861 = state_26822__$1;
(statearr_26836_26861[(2)] = inst_26797);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (9))){
var inst_26786 = (state_26822[(7)]);
var inst_26799 = (state_26822[(2)]);
var inst_26800 = (inst_26786 + (1));
var inst_26786__$1 = inst_26800;
var state_26822__$1 = (function (){var statearr_26837 = state_26822;
(statearr_26837[(10)] = inst_26799);

(statearr_26837[(7)] = inst_26786__$1);

return statearr_26837;
})();
var statearr_26838_26862 = state_26822__$1;
(statearr_26838_26862[(2)] = null);

(statearr_26838_26862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (5))){
var inst_26806 = (state_26822[(2)]);
var state_26822__$1 = (function (){var statearr_26839 = state_26822;
(statearr_26839[(11)] = inst_26806);

return statearr_26839;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26822__$1,(12),dchan);
} else {
if((state_val_26823 === (14))){
var inst_26808 = (state_26822[(8)]);
var inst_26813 = cljs.core.apply.call(null,f,inst_26808);
var state_26822__$1 = state_26822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26822__$1,(16),out,inst_26813);
} else {
if((state_val_26823 === (16))){
var inst_26815 = (state_26822[(2)]);
var state_26822__$1 = (function (){var statearr_26840 = state_26822;
(statearr_26840[(12)] = inst_26815);

return statearr_26840;
})();
var statearr_26841_26863 = state_26822__$1;
(statearr_26841_26863[(2)] = null);

(statearr_26841_26863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (10))){
var inst_26790 = (state_26822[(2)]);
var inst_26791 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26822__$1 = (function (){var statearr_26842 = state_26822;
(statearr_26842[(13)] = inst_26790);

return statearr_26842;
})();
var statearr_26843_26864 = state_26822__$1;
(statearr_26843_26864[(2)] = inst_26791);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (8))){
var inst_26804 = (state_26822[(2)]);
var state_26822__$1 = state_26822;
var statearr_26844_26865 = state_26822__$1;
(statearr_26844_26865[(2)] = inst_26804);

(statearr_26844_26865[(1)] = (5));


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
});})(c__25511__auto___26850,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25416__auto__,c__25511__auto___26850,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25417__auto__ = null;
var cljs$core$async$state_machine__25417__auto____0 = (function (){
var statearr_26845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26845[(0)] = cljs$core$async$state_machine__25417__auto__);

(statearr_26845[(1)] = (1));

return statearr_26845;
});
var cljs$core$async$state_machine__25417__auto____1 = (function (state_26822){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_26822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e26846){if((e26846 instanceof Object)){
var ex__25420__auto__ = e26846;
var statearr_26847_26866 = state_26822;
(statearr_26847_26866[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26867 = state_26822;
state_26822 = G__26867;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$state_machine__25417__auto__ = function(state_26822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25417__auto____1.call(this,state_26822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25417__auto____0;
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25417__auto____1;
return cljs$core$async$state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___26850,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25513__auto__ = (function (){var statearr_26848 = f__25512__auto__.call(null);
(statearr_26848[(6)] = c__25511__auto___26850);

return statearr_26848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___26850,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__26870 = arguments.length;
switch (G__26870) {
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
var c__25511__auto___26924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___26924,out){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___26924,out){
return (function (state_26902){
var state_val_26903 = (state_26902[(1)]);
if((state_val_26903 === (7))){
var inst_26882 = (state_26902[(7)]);
var inst_26881 = (state_26902[(8)]);
var inst_26881__$1 = (state_26902[(2)]);
var inst_26882__$1 = cljs.core.nth.call(null,inst_26881__$1,(0),null);
var inst_26883 = cljs.core.nth.call(null,inst_26881__$1,(1),null);
var inst_26884 = (inst_26882__$1 == null);
var state_26902__$1 = (function (){var statearr_26904 = state_26902;
(statearr_26904[(9)] = inst_26883);

(statearr_26904[(7)] = inst_26882__$1);

(statearr_26904[(8)] = inst_26881__$1);

return statearr_26904;
})();
if(cljs.core.truth_(inst_26884)){
var statearr_26905_26925 = state_26902__$1;
(statearr_26905_26925[(1)] = (8));

} else {
var statearr_26906_26926 = state_26902__$1;
(statearr_26906_26926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (1))){
var inst_26871 = cljs.core.vec.call(null,chs);
var inst_26872 = inst_26871;
var state_26902__$1 = (function (){var statearr_26907 = state_26902;
(statearr_26907[(10)] = inst_26872);

return statearr_26907;
})();
var statearr_26908_26927 = state_26902__$1;
(statearr_26908_26927[(2)] = null);

(statearr_26908_26927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (4))){
var inst_26872 = (state_26902[(10)]);
var state_26902__$1 = state_26902;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26902__$1,(7),inst_26872);
} else {
if((state_val_26903 === (6))){
var inst_26898 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
var statearr_26909_26928 = state_26902__$1;
(statearr_26909_26928[(2)] = inst_26898);

(statearr_26909_26928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (3))){
var inst_26900 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26902__$1,inst_26900);
} else {
if((state_val_26903 === (2))){
var inst_26872 = (state_26902[(10)]);
var inst_26874 = cljs.core.count.call(null,inst_26872);
var inst_26875 = (inst_26874 > (0));
var state_26902__$1 = state_26902;
if(cljs.core.truth_(inst_26875)){
var statearr_26911_26929 = state_26902__$1;
(statearr_26911_26929[(1)] = (4));

} else {
var statearr_26912_26930 = state_26902__$1;
(statearr_26912_26930[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (11))){
var inst_26872 = (state_26902[(10)]);
var inst_26891 = (state_26902[(2)]);
var tmp26910 = inst_26872;
var inst_26872__$1 = tmp26910;
var state_26902__$1 = (function (){var statearr_26913 = state_26902;
(statearr_26913[(10)] = inst_26872__$1);

(statearr_26913[(11)] = inst_26891);

return statearr_26913;
})();
var statearr_26914_26931 = state_26902__$1;
(statearr_26914_26931[(2)] = null);

(statearr_26914_26931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (9))){
var inst_26882 = (state_26902[(7)]);
var state_26902__$1 = state_26902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26902__$1,(11),out,inst_26882);
} else {
if((state_val_26903 === (5))){
var inst_26896 = cljs.core.async.close_BANG_.call(null,out);
var state_26902__$1 = state_26902;
var statearr_26915_26932 = state_26902__$1;
(statearr_26915_26932[(2)] = inst_26896);

(statearr_26915_26932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (10))){
var inst_26894 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
var statearr_26916_26933 = state_26902__$1;
(statearr_26916_26933[(2)] = inst_26894);

(statearr_26916_26933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (8))){
var inst_26883 = (state_26902[(9)]);
var inst_26872 = (state_26902[(10)]);
var inst_26882 = (state_26902[(7)]);
var inst_26881 = (state_26902[(8)]);
var inst_26886 = (function (){var cs = inst_26872;
var vec__26877 = inst_26881;
var v = inst_26882;
var c = inst_26883;
return ((function (cs,vec__26877,v,c,inst_26883,inst_26872,inst_26882,inst_26881,state_val_26903,c__25511__auto___26924,out){
return (function (p1__26868_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26868_SHARP_);
});
;})(cs,vec__26877,v,c,inst_26883,inst_26872,inst_26882,inst_26881,state_val_26903,c__25511__auto___26924,out))
})();
var inst_26887 = cljs.core.filterv.call(null,inst_26886,inst_26872);
var inst_26872__$1 = inst_26887;
var state_26902__$1 = (function (){var statearr_26917 = state_26902;
(statearr_26917[(10)] = inst_26872__$1);

return statearr_26917;
})();
var statearr_26918_26934 = state_26902__$1;
(statearr_26918_26934[(2)] = null);

(statearr_26918_26934[(1)] = (2));


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
});})(c__25511__auto___26924,out))
;
return ((function (switch__25416__auto__,c__25511__auto___26924,out){
return (function() {
var cljs$core$async$state_machine__25417__auto__ = null;
var cljs$core$async$state_machine__25417__auto____0 = (function (){
var statearr_26919 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26919[(0)] = cljs$core$async$state_machine__25417__auto__);

(statearr_26919[(1)] = (1));

return statearr_26919;
});
var cljs$core$async$state_machine__25417__auto____1 = (function (state_26902){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_26902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e26920){if((e26920 instanceof Object)){
var ex__25420__auto__ = e26920;
var statearr_26921_26935 = state_26902;
(statearr_26921_26935[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26936 = state_26902;
state_26902 = G__26936;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$state_machine__25417__auto__ = function(state_26902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25417__auto____1.call(this,state_26902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25417__auto____0;
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25417__auto____1;
return cljs$core$async$state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___26924,out))
})();
var state__25513__auto__ = (function (){var statearr_26922 = f__25512__auto__.call(null);
(statearr_26922[(6)] = c__25511__auto___26924);

return statearr_26922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___26924,out))
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
var G__26938 = arguments.length;
switch (G__26938) {
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
var c__25511__auto___26983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___26983,out){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___26983,out){
return (function (state_26962){
var state_val_26963 = (state_26962[(1)]);
if((state_val_26963 === (7))){
var inst_26944 = (state_26962[(7)]);
var inst_26944__$1 = (state_26962[(2)]);
var inst_26945 = (inst_26944__$1 == null);
var inst_26946 = cljs.core.not.call(null,inst_26945);
var state_26962__$1 = (function (){var statearr_26964 = state_26962;
(statearr_26964[(7)] = inst_26944__$1);

return statearr_26964;
})();
if(inst_26946){
var statearr_26965_26984 = state_26962__$1;
(statearr_26965_26984[(1)] = (8));

} else {
var statearr_26966_26985 = state_26962__$1;
(statearr_26966_26985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (1))){
var inst_26939 = (0);
var state_26962__$1 = (function (){var statearr_26967 = state_26962;
(statearr_26967[(8)] = inst_26939);

return statearr_26967;
})();
var statearr_26968_26986 = state_26962__$1;
(statearr_26968_26986[(2)] = null);

(statearr_26968_26986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (4))){
var state_26962__$1 = state_26962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26962__$1,(7),ch);
} else {
if((state_val_26963 === (6))){
var inst_26957 = (state_26962[(2)]);
var state_26962__$1 = state_26962;
var statearr_26969_26987 = state_26962__$1;
(statearr_26969_26987[(2)] = inst_26957);

(statearr_26969_26987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (3))){
var inst_26959 = (state_26962[(2)]);
var inst_26960 = cljs.core.async.close_BANG_.call(null,out);
var state_26962__$1 = (function (){var statearr_26970 = state_26962;
(statearr_26970[(9)] = inst_26959);

return statearr_26970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26962__$1,inst_26960);
} else {
if((state_val_26963 === (2))){
var inst_26939 = (state_26962[(8)]);
var inst_26941 = (inst_26939 < n);
var state_26962__$1 = state_26962;
if(cljs.core.truth_(inst_26941)){
var statearr_26971_26988 = state_26962__$1;
(statearr_26971_26988[(1)] = (4));

} else {
var statearr_26972_26989 = state_26962__$1;
(statearr_26972_26989[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (11))){
var inst_26939 = (state_26962[(8)]);
var inst_26949 = (state_26962[(2)]);
var inst_26950 = (inst_26939 + (1));
var inst_26939__$1 = inst_26950;
var state_26962__$1 = (function (){var statearr_26973 = state_26962;
(statearr_26973[(10)] = inst_26949);

(statearr_26973[(8)] = inst_26939__$1);

return statearr_26973;
})();
var statearr_26974_26990 = state_26962__$1;
(statearr_26974_26990[(2)] = null);

(statearr_26974_26990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (9))){
var state_26962__$1 = state_26962;
var statearr_26975_26991 = state_26962__$1;
(statearr_26975_26991[(2)] = null);

(statearr_26975_26991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (5))){
var state_26962__$1 = state_26962;
var statearr_26976_26992 = state_26962__$1;
(statearr_26976_26992[(2)] = null);

(statearr_26976_26992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (10))){
var inst_26954 = (state_26962[(2)]);
var state_26962__$1 = state_26962;
var statearr_26977_26993 = state_26962__$1;
(statearr_26977_26993[(2)] = inst_26954);

(statearr_26977_26993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (8))){
var inst_26944 = (state_26962[(7)]);
var state_26962__$1 = state_26962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26962__$1,(11),out,inst_26944);
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
});})(c__25511__auto___26983,out))
;
return ((function (switch__25416__auto__,c__25511__auto___26983,out){
return (function() {
var cljs$core$async$state_machine__25417__auto__ = null;
var cljs$core$async$state_machine__25417__auto____0 = (function (){
var statearr_26978 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26978[(0)] = cljs$core$async$state_machine__25417__auto__);

(statearr_26978[(1)] = (1));

return statearr_26978;
});
var cljs$core$async$state_machine__25417__auto____1 = (function (state_26962){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_26962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e26979){if((e26979 instanceof Object)){
var ex__25420__auto__ = e26979;
var statearr_26980_26994 = state_26962;
(statearr_26980_26994[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26995 = state_26962;
state_26962 = G__26995;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$state_machine__25417__auto__ = function(state_26962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25417__auto____1.call(this,state_26962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25417__auto____0;
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25417__auto____1;
return cljs$core$async$state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___26983,out))
})();
var state__25513__auto__ = (function (){var statearr_26981 = f__25512__auto__.call(null);
(statearr_26981[(6)] = c__25511__auto___26983);

return statearr_26981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___26983,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26997 = (function (f,ch,meta26998){
this.f = f;
this.ch = ch;
this.meta26998 = meta26998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26999,meta26998__$1){
var self__ = this;
var _26999__$1 = this;
return (new cljs.core.async.t_cljs$core$async26997(self__.f,self__.ch,meta26998__$1));
});

cljs.core.async.t_cljs$core$async26997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26999){
var self__ = this;
var _26999__$1 = this;
return self__.meta26998;
});

cljs.core.async.t_cljs$core$async26997.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26997.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26997.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26997.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26997.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27000 = (function (f,ch,meta26998,_,fn1,meta27001){
this.f = f;
this.ch = ch;
this.meta26998 = meta26998;
this._ = _;
this.fn1 = fn1;
this.meta27001 = meta27001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27002,meta27001__$1){
var self__ = this;
var _27002__$1 = this;
return (new cljs.core.async.t_cljs$core$async27000(self__.f,self__.ch,self__.meta26998,self__._,self__.fn1,meta27001__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27002){
var self__ = this;
var _27002__$1 = this;
return self__.meta27001;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27000.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27000.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27000.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27000.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26996_SHARP_){
return f1.call(null,(((p1__26996_SHARP_ == null))?null:self__.f.call(null,p1__26996_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27000.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26998","meta26998",-1397712633,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26997","cljs.core.async/t_cljs$core$async26997",405104144,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27001","meta27001",-2114201649,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27000";

cljs.core.async.t_cljs$core$async27000.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27000");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27000.
 */
cljs.core.async.__GT_t_cljs$core$async27000 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27000(f__$1,ch__$1,meta26998__$1,___$2,fn1__$1,meta27001){
return (new cljs.core.async.t_cljs$core$async27000(f__$1,ch__$1,meta26998__$1,___$2,fn1__$1,meta27001));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27000(self__.f,self__.ch,self__.meta26998,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26997.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26997.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26998","meta26998",-1397712633,null)], null);
});

cljs.core.async.t_cljs$core$async26997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26997";

cljs.core.async.t_cljs$core$async26997.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26997");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26997.
 */
cljs.core.async.__GT_t_cljs$core$async26997 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26997(f__$1,ch__$1,meta26998){
return (new cljs.core.async.t_cljs$core$async26997(f__$1,ch__$1,meta26998));
});

}

return (new cljs.core.async.t_cljs$core$async26997(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27003 = (function (f,ch,meta27004){
this.f = f;
this.ch = ch;
this.meta27004 = meta27004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27005,meta27004__$1){
var self__ = this;
var _27005__$1 = this;
return (new cljs.core.async.t_cljs$core$async27003(self__.f,self__.ch,meta27004__$1));
});

cljs.core.async.t_cljs$core$async27003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27005){
var self__ = this;
var _27005__$1 = this;
return self__.meta27004;
});

cljs.core.async.t_cljs$core$async27003.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27003.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27003.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27003.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27003.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27003.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27004","meta27004",913540111,null)], null);
});

cljs.core.async.t_cljs$core$async27003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27003";

cljs.core.async.t_cljs$core$async27003.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27003");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27003.
 */
cljs.core.async.__GT_t_cljs$core$async27003 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27003(f__$1,ch__$1,meta27004){
return (new cljs.core.async.t_cljs$core$async27003(f__$1,ch__$1,meta27004));
});

}

return (new cljs.core.async.t_cljs$core$async27003(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27006 = (function (p,ch,meta27007){
this.p = p;
this.ch = ch;
this.meta27007 = meta27007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27008,meta27007__$1){
var self__ = this;
var _27008__$1 = this;
return (new cljs.core.async.t_cljs$core$async27006(self__.p,self__.ch,meta27007__$1));
});

cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27008){
var self__ = this;
var _27008__$1 = this;
return self__.meta27007;
});

cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27007","meta27007",87032809,null)], null);
});

cljs.core.async.t_cljs$core$async27006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27006";

cljs.core.async.t_cljs$core$async27006.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27006");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27006.
 */
cljs.core.async.__GT_t_cljs$core$async27006 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27006(p__$1,ch__$1,meta27007){
return (new cljs.core.async.t_cljs$core$async27006(p__$1,ch__$1,meta27007));
});

}

return (new cljs.core.async.t_cljs$core$async27006(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27010 = arguments.length;
switch (G__27010) {
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
var c__25511__auto___27050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___27050,out){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___27050,out){
return (function (state_27031){
var state_val_27032 = (state_27031[(1)]);
if((state_val_27032 === (7))){
var inst_27027 = (state_27031[(2)]);
var state_27031__$1 = state_27031;
var statearr_27033_27051 = state_27031__$1;
(statearr_27033_27051[(2)] = inst_27027);

(statearr_27033_27051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27032 === (1))){
var state_27031__$1 = state_27031;
var statearr_27034_27052 = state_27031__$1;
(statearr_27034_27052[(2)] = null);

(statearr_27034_27052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27032 === (4))){
var inst_27013 = (state_27031[(7)]);
var inst_27013__$1 = (state_27031[(2)]);
var inst_27014 = (inst_27013__$1 == null);
var state_27031__$1 = (function (){var statearr_27035 = state_27031;
(statearr_27035[(7)] = inst_27013__$1);

return statearr_27035;
})();
if(cljs.core.truth_(inst_27014)){
var statearr_27036_27053 = state_27031__$1;
(statearr_27036_27053[(1)] = (5));

} else {
var statearr_27037_27054 = state_27031__$1;
(statearr_27037_27054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27032 === (6))){
var inst_27013 = (state_27031[(7)]);
var inst_27018 = p.call(null,inst_27013);
var state_27031__$1 = state_27031;
if(cljs.core.truth_(inst_27018)){
var statearr_27038_27055 = state_27031__$1;
(statearr_27038_27055[(1)] = (8));

} else {
var statearr_27039_27056 = state_27031__$1;
(statearr_27039_27056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27032 === (3))){
var inst_27029 = (state_27031[(2)]);
var state_27031__$1 = state_27031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27031__$1,inst_27029);
} else {
if((state_val_27032 === (2))){
var state_27031__$1 = state_27031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27031__$1,(4),ch);
} else {
if((state_val_27032 === (11))){
var inst_27021 = (state_27031[(2)]);
var state_27031__$1 = state_27031;
var statearr_27040_27057 = state_27031__$1;
(statearr_27040_27057[(2)] = inst_27021);

(statearr_27040_27057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27032 === (9))){
var state_27031__$1 = state_27031;
var statearr_27041_27058 = state_27031__$1;
(statearr_27041_27058[(2)] = null);

(statearr_27041_27058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27032 === (5))){
var inst_27016 = cljs.core.async.close_BANG_.call(null,out);
var state_27031__$1 = state_27031;
var statearr_27042_27059 = state_27031__$1;
(statearr_27042_27059[(2)] = inst_27016);

(statearr_27042_27059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27032 === (10))){
var inst_27024 = (state_27031[(2)]);
var state_27031__$1 = (function (){var statearr_27043 = state_27031;
(statearr_27043[(8)] = inst_27024);

return statearr_27043;
})();
var statearr_27044_27060 = state_27031__$1;
(statearr_27044_27060[(2)] = null);

(statearr_27044_27060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27032 === (8))){
var inst_27013 = (state_27031[(7)]);
var state_27031__$1 = state_27031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27031__$1,(11),out,inst_27013);
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
});})(c__25511__auto___27050,out))
;
return ((function (switch__25416__auto__,c__25511__auto___27050,out){
return (function() {
var cljs$core$async$state_machine__25417__auto__ = null;
var cljs$core$async$state_machine__25417__auto____0 = (function (){
var statearr_27045 = [null,null,null,null,null,null,null,null,null];
(statearr_27045[(0)] = cljs$core$async$state_machine__25417__auto__);

(statearr_27045[(1)] = (1));

return statearr_27045;
});
var cljs$core$async$state_machine__25417__auto____1 = (function (state_27031){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_27031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e27046){if((e27046 instanceof Object)){
var ex__25420__auto__ = e27046;
var statearr_27047_27061 = state_27031;
(statearr_27047_27061[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27062 = state_27031;
state_27031 = G__27062;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$state_machine__25417__auto__ = function(state_27031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25417__auto____1.call(this,state_27031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25417__auto____0;
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25417__auto____1;
return cljs$core$async$state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___27050,out))
})();
var state__25513__auto__ = (function (){var statearr_27048 = f__25512__auto__.call(null);
(statearr_27048[(6)] = c__25511__auto___27050);

return statearr_27048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___27050,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27064 = arguments.length;
switch (G__27064) {
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
var c__25511__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto__){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto__){
return (function (state_27127){
var state_val_27128 = (state_27127[(1)]);
if((state_val_27128 === (7))){
var inst_27123 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
var statearr_27129_27167 = state_27127__$1;
(statearr_27129_27167[(2)] = inst_27123);

(statearr_27129_27167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (20))){
var inst_27093 = (state_27127[(7)]);
var inst_27104 = (state_27127[(2)]);
var inst_27105 = cljs.core.next.call(null,inst_27093);
var inst_27079 = inst_27105;
var inst_27080 = null;
var inst_27081 = (0);
var inst_27082 = (0);
var state_27127__$1 = (function (){var statearr_27130 = state_27127;
(statearr_27130[(8)] = inst_27104);

(statearr_27130[(9)] = inst_27082);

(statearr_27130[(10)] = inst_27080);

(statearr_27130[(11)] = inst_27081);

(statearr_27130[(12)] = inst_27079);

return statearr_27130;
})();
var statearr_27131_27168 = state_27127__$1;
(statearr_27131_27168[(2)] = null);

(statearr_27131_27168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (1))){
var state_27127__$1 = state_27127;
var statearr_27132_27169 = state_27127__$1;
(statearr_27132_27169[(2)] = null);

(statearr_27132_27169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (4))){
var inst_27068 = (state_27127[(13)]);
var inst_27068__$1 = (state_27127[(2)]);
var inst_27069 = (inst_27068__$1 == null);
var state_27127__$1 = (function (){var statearr_27133 = state_27127;
(statearr_27133[(13)] = inst_27068__$1);

return statearr_27133;
})();
if(cljs.core.truth_(inst_27069)){
var statearr_27134_27170 = state_27127__$1;
(statearr_27134_27170[(1)] = (5));

} else {
var statearr_27135_27171 = state_27127__$1;
(statearr_27135_27171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (15))){
var state_27127__$1 = state_27127;
var statearr_27139_27172 = state_27127__$1;
(statearr_27139_27172[(2)] = null);

(statearr_27139_27172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (21))){
var state_27127__$1 = state_27127;
var statearr_27140_27173 = state_27127__$1;
(statearr_27140_27173[(2)] = null);

(statearr_27140_27173[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (13))){
var inst_27082 = (state_27127[(9)]);
var inst_27080 = (state_27127[(10)]);
var inst_27081 = (state_27127[(11)]);
var inst_27079 = (state_27127[(12)]);
var inst_27089 = (state_27127[(2)]);
var inst_27090 = (inst_27082 + (1));
var tmp27136 = inst_27080;
var tmp27137 = inst_27081;
var tmp27138 = inst_27079;
var inst_27079__$1 = tmp27138;
var inst_27080__$1 = tmp27136;
var inst_27081__$1 = tmp27137;
var inst_27082__$1 = inst_27090;
var state_27127__$1 = (function (){var statearr_27141 = state_27127;
(statearr_27141[(9)] = inst_27082__$1);

(statearr_27141[(10)] = inst_27080__$1);

(statearr_27141[(11)] = inst_27081__$1);

(statearr_27141[(14)] = inst_27089);

(statearr_27141[(12)] = inst_27079__$1);

return statearr_27141;
})();
var statearr_27142_27174 = state_27127__$1;
(statearr_27142_27174[(2)] = null);

(statearr_27142_27174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (22))){
var state_27127__$1 = state_27127;
var statearr_27143_27175 = state_27127__$1;
(statearr_27143_27175[(2)] = null);

(statearr_27143_27175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (6))){
var inst_27068 = (state_27127[(13)]);
var inst_27077 = f.call(null,inst_27068);
var inst_27078 = cljs.core.seq.call(null,inst_27077);
var inst_27079 = inst_27078;
var inst_27080 = null;
var inst_27081 = (0);
var inst_27082 = (0);
var state_27127__$1 = (function (){var statearr_27144 = state_27127;
(statearr_27144[(9)] = inst_27082);

(statearr_27144[(10)] = inst_27080);

(statearr_27144[(11)] = inst_27081);

(statearr_27144[(12)] = inst_27079);

return statearr_27144;
})();
var statearr_27145_27176 = state_27127__$1;
(statearr_27145_27176[(2)] = null);

(statearr_27145_27176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (17))){
var inst_27093 = (state_27127[(7)]);
var inst_27097 = cljs.core.chunk_first.call(null,inst_27093);
var inst_27098 = cljs.core.chunk_rest.call(null,inst_27093);
var inst_27099 = cljs.core.count.call(null,inst_27097);
var inst_27079 = inst_27098;
var inst_27080 = inst_27097;
var inst_27081 = inst_27099;
var inst_27082 = (0);
var state_27127__$1 = (function (){var statearr_27146 = state_27127;
(statearr_27146[(9)] = inst_27082);

(statearr_27146[(10)] = inst_27080);

(statearr_27146[(11)] = inst_27081);

(statearr_27146[(12)] = inst_27079);

return statearr_27146;
})();
var statearr_27147_27177 = state_27127__$1;
(statearr_27147_27177[(2)] = null);

(statearr_27147_27177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (3))){
var inst_27125 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27127__$1,inst_27125);
} else {
if((state_val_27128 === (12))){
var inst_27113 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
var statearr_27148_27178 = state_27127__$1;
(statearr_27148_27178[(2)] = inst_27113);

(statearr_27148_27178[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (2))){
var state_27127__$1 = state_27127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27127__$1,(4),in$);
} else {
if((state_val_27128 === (23))){
var inst_27121 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
var statearr_27149_27179 = state_27127__$1;
(statearr_27149_27179[(2)] = inst_27121);

(statearr_27149_27179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (19))){
var inst_27108 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
var statearr_27150_27180 = state_27127__$1;
(statearr_27150_27180[(2)] = inst_27108);

(statearr_27150_27180[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (11))){
var inst_27079 = (state_27127[(12)]);
var inst_27093 = (state_27127[(7)]);
var inst_27093__$1 = cljs.core.seq.call(null,inst_27079);
var state_27127__$1 = (function (){var statearr_27151 = state_27127;
(statearr_27151[(7)] = inst_27093__$1);

return statearr_27151;
})();
if(inst_27093__$1){
var statearr_27152_27181 = state_27127__$1;
(statearr_27152_27181[(1)] = (14));

} else {
var statearr_27153_27182 = state_27127__$1;
(statearr_27153_27182[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (9))){
var inst_27115 = (state_27127[(2)]);
var inst_27116 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27127__$1 = (function (){var statearr_27154 = state_27127;
(statearr_27154[(15)] = inst_27115);

return statearr_27154;
})();
if(cljs.core.truth_(inst_27116)){
var statearr_27155_27183 = state_27127__$1;
(statearr_27155_27183[(1)] = (21));

} else {
var statearr_27156_27184 = state_27127__$1;
(statearr_27156_27184[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (5))){
var inst_27071 = cljs.core.async.close_BANG_.call(null,out);
var state_27127__$1 = state_27127;
var statearr_27157_27185 = state_27127__$1;
(statearr_27157_27185[(2)] = inst_27071);

(statearr_27157_27185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (14))){
var inst_27093 = (state_27127[(7)]);
var inst_27095 = cljs.core.chunked_seq_QMARK_.call(null,inst_27093);
var state_27127__$1 = state_27127;
if(inst_27095){
var statearr_27158_27186 = state_27127__$1;
(statearr_27158_27186[(1)] = (17));

} else {
var statearr_27159_27187 = state_27127__$1;
(statearr_27159_27187[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (16))){
var inst_27111 = (state_27127[(2)]);
var state_27127__$1 = state_27127;
var statearr_27160_27188 = state_27127__$1;
(statearr_27160_27188[(2)] = inst_27111);

(statearr_27160_27188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27128 === (10))){
var inst_27082 = (state_27127[(9)]);
var inst_27080 = (state_27127[(10)]);
var inst_27087 = cljs.core._nth.call(null,inst_27080,inst_27082);
var state_27127__$1 = state_27127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27127__$1,(13),out,inst_27087);
} else {
if((state_val_27128 === (18))){
var inst_27093 = (state_27127[(7)]);
var inst_27102 = cljs.core.first.call(null,inst_27093);
var state_27127__$1 = state_27127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27127__$1,(20),out,inst_27102);
} else {
if((state_val_27128 === (8))){
var inst_27082 = (state_27127[(9)]);
var inst_27081 = (state_27127[(11)]);
var inst_27084 = (inst_27082 < inst_27081);
var inst_27085 = inst_27084;
var state_27127__$1 = state_27127;
if(cljs.core.truth_(inst_27085)){
var statearr_27161_27189 = state_27127__$1;
(statearr_27161_27189[(1)] = (10));

} else {
var statearr_27162_27190 = state_27127__$1;
(statearr_27162_27190[(1)] = (11));

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
});})(c__25511__auto__))
;
return ((function (switch__25416__auto__,c__25511__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25417__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25417__auto____0 = (function (){
var statearr_27163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27163[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25417__auto__);

(statearr_27163[(1)] = (1));

return statearr_27163;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25417__auto____1 = (function (state_27127){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_27127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e27164){if((e27164 instanceof Object)){
var ex__25420__auto__ = e27164;
var statearr_27165_27191 = state_27127;
(statearr_27165_27191[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27192 = state_27127;
state_27127 = G__27192;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25417__auto__ = function(state_27127){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25417__auto____1.call(this,state_27127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25417__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25417__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto__))
})();
var state__25513__auto__ = (function (){var statearr_27166 = f__25512__auto__.call(null);
(statearr_27166[(6)] = c__25511__auto__);

return statearr_27166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto__))
);

return c__25511__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27194 = arguments.length;
switch (G__27194) {
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
var G__27197 = arguments.length;
switch (G__27197) {
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
var G__27200 = arguments.length;
switch (G__27200) {
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
var c__25511__auto___27247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___27247,out){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___27247,out){
return (function (state_27224){
var state_val_27225 = (state_27224[(1)]);
if((state_val_27225 === (7))){
var inst_27219 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27226_27248 = state_27224__$1;
(statearr_27226_27248[(2)] = inst_27219);

(statearr_27226_27248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (1))){
var inst_27201 = null;
var state_27224__$1 = (function (){var statearr_27227 = state_27224;
(statearr_27227[(7)] = inst_27201);

return statearr_27227;
})();
var statearr_27228_27249 = state_27224__$1;
(statearr_27228_27249[(2)] = null);

(statearr_27228_27249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (4))){
var inst_27204 = (state_27224[(8)]);
var inst_27204__$1 = (state_27224[(2)]);
var inst_27205 = (inst_27204__$1 == null);
var inst_27206 = cljs.core.not.call(null,inst_27205);
var state_27224__$1 = (function (){var statearr_27229 = state_27224;
(statearr_27229[(8)] = inst_27204__$1);

return statearr_27229;
})();
if(inst_27206){
var statearr_27230_27250 = state_27224__$1;
(statearr_27230_27250[(1)] = (5));

} else {
var statearr_27231_27251 = state_27224__$1;
(statearr_27231_27251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (6))){
var state_27224__$1 = state_27224;
var statearr_27232_27252 = state_27224__$1;
(statearr_27232_27252[(2)] = null);

(statearr_27232_27252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (3))){
var inst_27221 = (state_27224[(2)]);
var inst_27222 = cljs.core.async.close_BANG_.call(null,out);
var state_27224__$1 = (function (){var statearr_27233 = state_27224;
(statearr_27233[(9)] = inst_27221);

return statearr_27233;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27224__$1,inst_27222);
} else {
if((state_val_27225 === (2))){
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(4),ch);
} else {
if((state_val_27225 === (11))){
var inst_27204 = (state_27224[(8)]);
var inst_27213 = (state_27224[(2)]);
var inst_27201 = inst_27204;
var state_27224__$1 = (function (){var statearr_27234 = state_27224;
(statearr_27234[(10)] = inst_27213);

(statearr_27234[(7)] = inst_27201);

return statearr_27234;
})();
var statearr_27235_27253 = state_27224__$1;
(statearr_27235_27253[(2)] = null);

(statearr_27235_27253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (9))){
var inst_27204 = (state_27224[(8)]);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27224__$1,(11),out,inst_27204);
} else {
if((state_val_27225 === (5))){
var inst_27201 = (state_27224[(7)]);
var inst_27204 = (state_27224[(8)]);
var inst_27208 = cljs.core._EQ_.call(null,inst_27204,inst_27201);
var state_27224__$1 = state_27224;
if(inst_27208){
var statearr_27237_27254 = state_27224__$1;
(statearr_27237_27254[(1)] = (8));

} else {
var statearr_27238_27255 = state_27224__$1;
(statearr_27238_27255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (10))){
var inst_27216 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27239_27256 = state_27224__$1;
(statearr_27239_27256[(2)] = inst_27216);

(statearr_27239_27256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (8))){
var inst_27201 = (state_27224[(7)]);
var tmp27236 = inst_27201;
var inst_27201__$1 = tmp27236;
var state_27224__$1 = (function (){var statearr_27240 = state_27224;
(statearr_27240[(7)] = inst_27201__$1);

return statearr_27240;
})();
var statearr_27241_27257 = state_27224__$1;
(statearr_27241_27257[(2)] = null);

(statearr_27241_27257[(1)] = (2));


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
});})(c__25511__auto___27247,out))
;
return ((function (switch__25416__auto__,c__25511__auto___27247,out){
return (function() {
var cljs$core$async$state_machine__25417__auto__ = null;
var cljs$core$async$state_machine__25417__auto____0 = (function (){
var statearr_27242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27242[(0)] = cljs$core$async$state_machine__25417__auto__);

(statearr_27242[(1)] = (1));

return statearr_27242;
});
var cljs$core$async$state_machine__25417__auto____1 = (function (state_27224){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_27224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e27243){if((e27243 instanceof Object)){
var ex__25420__auto__ = e27243;
var statearr_27244_27258 = state_27224;
(statearr_27244_27258[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27259 = state_27224;
state_27224 = G__27259;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$state_machine__25417__auto__ = function(state_27224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25417__auto____1.call(this,state_27224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25417__auto____0;
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25417__auto____1;
return cljs$core$async$state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___27247,out))
})();
var state__25513__auto__ = (function (){var statearr_27245 = f__25512__auto__.call(null);
(statearr_27245[(6)] = c__25511__auto___27247);

return statearr_27245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___27247,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27261 = arguments.length;
switch (G__27261) {
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
var c__25511__auto___27327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___27327,out){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___27327,out){
return (function (state_27299){
var state_val_27300 = (state_27299[(1)]);
if((state_val_27300 === (7))){
var inst_27295 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27301_27328 = state_27299__$1;
(statearr_27301_27328[(2)] = inst_27295);

(statearr_27301_27328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (1))){
var inst_27262 = (new Array(n));
var inst_27263 = inst_27262;
var inst_27264 = (0);
var state_27299__$1 = (function (){var statearr_27302 = state_27299;
(statearr_27302[(7)] = inst_27264);

(statearr_27302[(8)] = inst_27263);

return statearr_27302;
})();
var statearr_27303_27329 = state_27299__$1;
(statearr_27303_27329[(2)] = null);

(statearr_27303_27329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (4))){
var inst_27267 = (state_27299[(9)]);
var inst_27267__$1 = (state_27299[(2)]);
var inst_27268 = (inst_27267__$1 == null);
var inst_27269 = cljs.core.not.call(null,inst_27268);
var state_27299__$1 = (function (){var statearr_27304 = state_27299;
(statearr_27304[(9)] = inst_27267__$1);

return statearr_27304;
})();
if(inst_27269){
var statearr_27305_27330 = state_27299__$1;
(statearr_27305_27330[(1)] = (5));

} else {
var statearr_27306_27331 = state_27299__$1;
(statearr_27306_27331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (15))){
var inst_27289 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27307_27332 = state_27299__$1;
(statearr_27307_27332[(2)] = inst_27289);

(statearr_27307_27332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (13))){
var state_27299__$1 = state_27299;
var statearr_27308_27333 = state_27299__$1;
(statearr_27308_27333[(2)] = null);

(statearr_27308_27333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (6))){
var inst_27264 = (state_27299[(7)]);
var inst_27285 = (inst_27264 > (0));
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27285)){
var statearr_27309_27334 = state_27299__$1;
(statearr_27309_27334[(1)] = (12));

} else {
var statearr_27310_27335 = state_27299__$1;
(statearr_27310_27335[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (3))){
var inst_27297 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27299__$1,inst_27297);
} else {
if((state_val_27300 === (12))){
var inst_27263 = (state_27299[(8)]);
var inst_27287 = cljs.core.vec.call(null,inst_27263);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27299__$1,(15),out,inst_27287);
} else {
if((state_val_27300 === (2))){
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27299__$1,(4),ch);
} else {
if((state_val_27300 === (11))){
var inst_27279 = (state_27299[(2)]);
var inst_27280 = (new Array(n));
var inst_27263 = inst_27280;
var inst_27264 = (0);
var state_27299__$1 = (function (){var statearr_27311 = state_27299;
(statearr_27311[(7)] = inst_27264);

(statearr_27311[(8)] = inst_27263);

(statearr_27311[(10)] = inst_27279);

return statearr_27311;
})();
var statearr_27312_27336 = state_27299__$1;
(statearr_27312_27336[(2)] = null);

(statearr_27312_27336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (9))){
var inst_27263 = (state_27299[(8)]);
var inst_27277 = cljs.core.vec.call(null,inst_27263);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27299__$1,(11),out,inst_27277);
} else {
if((state_val_27300 === (5))){
var inst_27264 = (state_27299[(7)]);
var inst_27272 = (state_27299[(11)]);
var inst_27263 = (state_27299[(8)]);
var inst_27267 = (state_27299[(9)]);
var inst_27271 = (inst_27263[inst_27264] = inst_27267);
var inst_27272__$1 = (inst_27264 + (1));
var inst_27273 = (inst_27272__$1 < n);
var state_27299__$1 = (function (){var statearr_27313 = state_27299;
(statearr_27313[(11)] = inst_27272__$1);

(statearr_27313[(12)] = inst_27271);

return statearr_27313;
})();
if(cljs.core.truth_(inst_27273)){
var statearr_27314_27337 = state_27299__$1;
(statearr_27314_27337[(1)] = (8));

} else {
var statearr_27315_27338 = state_27299__$1;
(statearr_27315_27338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (14))){
var inst_27292 = (state_27299[(2)]);
var inst_27293 = cljs.core.async.close_BANG_.call(null,out);
var state_27299__$1 = (function (){var statearr_27317 = state_27299;
(statearr_27317[(13)] = inst_27292);

return statearr_27317;
})();
var statearr_27318_27339 = state_27299__$1;
(statearr_27318_27339[(2)] = inst_27293);

(statearr_27318_27339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (10))){
var inst_27283 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27319_27340 = state_27299__$1;
(statearr_27319_27340[(2)] = inst_27283);

(statearr_27319_27340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (8))){
var inst_27272 = (state_27299[(11)]);
var inst_27263 = (state_27299[(8)]);
var tmp27316 = inst_27263;
var inst_27263__$1 = tmp27316;
var inst_27264 = inst_27272;
var state_27299__$1 = (function (){var statearr_27320 = state_27299;
(statearr_27320[(7)] = inst_27264);

(statearr_27320[(8)] = inst_27263__$1);

return statearr_27320;
})();
var statearr_27321_27341 = state_27299__$1;
(statearr_27321_27341[(2)] = null);

(statearr_27321_27341[(1)] = (2));


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
});})(c__25511__auto___27327,out))
;
return ((function (switch__25416__auto__,c__25511__auto___27327,out){
return (function() {
var cljs$core$async$state_machine__25417__auto__ = null;
var cljs$core$async$state_machine__25417__auto____0 = (function (){
var statearr_27322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27322[(0)] = cljs$core$async$state_machine__25417__auto__);

(statearr_27322[(1)] = (1));

return statearr_27322;
});
var cljs$core$async$state_machine__25417__auto____1 = (function (state_27299){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_27299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e27323){if((e27323 instanceof Object)){
var ex__25420__auto__ = e27323;
var statearr_27324_27342 = state_27299;
(statearr_27324_27342[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27343 = state_27299;
state_27299 = G__27343;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$state_machine__25417__auto__ = function(state_27299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25417__auto____1.call(this,state_27299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25417__auto____0;
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25417__auto____1;
return cljs$core$async$state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___27327,out))
})();
var state__25513__auto__ = (function (){var statearr_27325 = f__25512__auto__.call(null);
(statearr_27325[(6)] = c__25511__auto___27327);

return statearr_27325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___27327,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27345 = arguments.length;
switch (G__27345) {
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
var c__25511__auto___27415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___27415,out){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___27415,out){
return (function (state_27387){
var state_val_27388 = (state_27387[(1)]);
if((state_val_27388 === (7))){
var inst_27383 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
var statearr_27389_27416 = state_27387__$1;
(statearr_27389_27416[(2)] = inst_27383);

(statearr_27389_27416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (1))){
var inst_27346 = [];
var inst_27347 = inst_27346;
var inst_27348 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27387__$1 = (function (){var statearr_27390 = state_27387;
(statearr_27390[(7)] = inst_27348);

(statearr_27390[(8)] = inst_27347);

return statearr_27390;
})();
var statearr_27391_27417 = state_27387__$1;
(statearr_27391_27417[(2)] = null);

(statearr_27391_27417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (4))){
var inst_27351 = (state_27387[(9)]);
var inst_27351__$1 = (state_27387[(2)]);
var inst_27352 = (inst_27351__$1 == null);
var inst_27353 = cljs.core.not.call(null,inst_27352);
var state_27387__$1 = (function (){var statearr_27392 = state_27387;
(statearr_27392[(9)] = inst_27351__$1);

return statearr_27392;
})();
if(inst_27353){
var statearr_27393_27418 = state_27387__$1;
(statearr_27393_27418[(1)] = (5));

} else {
var statearr_27394_27419 = state_27387__$1;
(statearr_27394_27419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (15))){
var inst_27377 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
var statearr_27395_27420 = state_27387__$1;
(statearr_27395_27420[(2)] = inst_27377);

(statearr_27395_27420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (13))){
var state_27387__$1 = state_27387;
var statearr_27396_27421 = state_27387__$1;
(statearr_27396_27421[(2)] = null);

(statearr_27396_27421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (6))){
var inst_27347 = (state_27387[(8)]);
var inst_27372 = inst_27347.length;
var inst_27373 = (inst_27372 > (0));
var state_27387__$1 = state_27387;
if(cljs.core.truth_(inst_27373)){
var statearr_27397_27422 = state_27387__$1;
(statearr_27397_27422[(1)] = (12));

} else {
var statearr_27398_27423 = state_27387__$1;
(statearr_27398_27423[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (3))){
var inst_27385 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27387__$1,inst_27385);
} else {
if((state_val_27388 === (12))){
var inst_27347 = (state_27387[(8)]);
var inst_27375 = cljs.core.vec.call(null,inst_27347);
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27387__$1,(15),out,inst_27375);
} else {
if((state_val_27388 === (2))){
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27387__$1,(4),ch);
} else {
if((state_val_27388 === (11))){
var inst_27351 = (state_27387[(9)]);
var inst_27355 = (state_27387[(10)]);
var inst_27365 = (state_27387[(2)]);
var inst_27366 = [];
var inst_27367 = inst_27366.push(inst_27351);
var inst_27347 = inst_27366;
var inst_27348 = inst_27355;
var state_27387__$1 = (function (){var statearr_27399 = state_27387;
(statearr_27399[(11)] = inst_27367);

(statearr_27399[(12)] = inst_27365);

(statearr_27399[(7)] = inst_27348);

(statearr_27399[(8)] = inst_27347);

return statearr_27399;
})();
var statearr_27400_27424 = state_27387__$1;
(statearr_27400_27424[(2)] = null);

(statearr_27400_27424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (9))){
var inst_27347 = (state_27387[(8)]);
var inst_27363 = cljs.core.vec.call(null,inst_27347);
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27387__$1,(11),out,inst_27363);
} else {
if((state_val_27388 === (5))){
var inst_27351 = (state_27387[(9)]);
var inst_27355 = (state_27387[(10)]);
var inst_27348 = (state_27387[(7)]);
var inst_27355__$1 = f.call(null,inst_27351);
var inst_27356 = cljs.core._EQ_.call(null,inst_27355__$1,inst_27348);
var inst_27357 = cljs.core.keyword_identical_QMARK_.call(null,inst_27348,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27358 = ((inst_27356) || (inst_27357));
var state_27387__$1 = (function (){var statearr_27401 = state_27387;
(statearr_27401[(10)] = inst_27355__$1);

return statearr_27401;
})();
if(cljs.core.truth_(inst_27358)){
var statearr_27402_27425 = state_27387__$1;
(statearr_27402_27425[(1)] = (8));

} else {
var statearr_27403_27426 = state_27387__$1;
(statearr_27403_27426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (14))){
var inst_27380 = (state_27387[(2)]);
var inst_27381 = cljs.core.async.close_BANG_.call(null,out);
var state_27387__$1 = (function (){var statearr_27405 = state_27387;
(statearr_27405[(13)] = inst_27380);

return statearr_27405;
})();
var statearr_27406_27427 = state_27387__$1;
(statearr_27406_27427[(2)] = inst_27381);

(statearr_27406_27427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (10))){
var inst_27370 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
var statearr_27407_27428 = state_27387__$1;
(statearr_27407_27428[(2)] = inst_27370);

(statearr_27407_27428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (8))){
var inst_27351 = (state_27387[(9)]);
var inst_27355 = (state_27387[(10)]);
var inst_27347 = (state_27387[(8)]);
var inst_27360 = inst_27347.push(inst_27351);
var tmp27404 = inst_27347;
var inst_27347__$1 = tmp27404;
var inst_27348 = inst_27355;
var state_27387__$1 = (function (){var statearr_27408 = state_27387;
(statearr_27408[(7)] = inst_27348);

(statearr_27408[(8)] = inst_27347__$1);

(statearr_27408[(14)] = inst_27360);

return statearr_27408;
})();
var statearr_27409_27429 = state_27387__$1;
(statearr_27409_27429[(2)] = null);

(statearr_27409_27429[(1)] = (2));


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
});})(c__25511__auto___27415,out))
;
return ((function (switch__25416__auto__,c__25511__auto___27415,out){
return (function() {
var cljs$core$async$state_machine__25417__auto__ = null;
var cljs$core$async$state_machine__25417__auto____0 = (function (){
var statearr_27410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27410[(0)] = cljs$core$async$state_machine__25417__auto__);

(statearr_27410[(1)] = (1));

return statearr_27410;
});
var cljs$core$async$state_machine__25417__auto____1 = (function (state_27387){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_27387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e27411){if((e27411 instanceof Object)){
var ex__25420__auto__ = e27411;
var statearr_27412_27430 = state_27387;
(statearr_27412_27430[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27431 = state_27387;
state_27387 = G__27431;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
cljs$core$async$state_machine__25417__auto__ = function(state_27387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25417__auto____1.call(this,state_27387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25417__auto____0;
cljs$core$async$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25417__auto____1;
return cljs$core$async$state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___27415,out))
})();
var state__25513__auto__ = (function (){var statearr_27413 = f__25512__auto__.call(null);
(statearr_27413[(6)] = c__25511__auto___27415);

return statearr_27413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___27415,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1568085255277
