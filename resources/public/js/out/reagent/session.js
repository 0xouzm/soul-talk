// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25915 = arguments.length;
var i__4731__auto___25916 = (0);
while(true){
if((i__4731__auto___25916 < len__4730__auto___25915)){
args__4736__auto__.push((arguments[i__4731__auto___25916]));

var G__25917 = (i__4731__auto___25916 + (1));
i__4731__auto___25916 = G__25917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__25911){
var vec__25912 = p__25911;
var default$ = cljs.core.nth.call(null,vec__25912,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if((!((cljs.core.deref.call(null,temp_a) == null)))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get.cljs$lang$applyTo = (function (seq25909){
var G__25910 = cljs.core.first.call(null,seq25909);
var seq25909__$1 = cljs.core.next.call(null,seq25909);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25910,seq25909__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25924 = arguments.length;
var i__4731__auto___25925 = (0);
while(true){
if((i__4731__auto___25925 < len__4730__auto___25924)){
args__4736__auto__.push((arguments[i__4731__auto___25925]));

var G__25926 = (i__4731__auto___25925 + (1));
i__4731__auto___25925 = G__25926;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__25920){
var vec__25921 = p__25920;
var default$ = cljs.core.nth.call(null,vec__25921,(0),null);
var or__4131__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in.cljs$lang$applyTo = (function (seq25918){
var G__25919 = cljs.core.first.call(null,seq25918);
var seq25918__$1 = cljs.core.next.call(null,seq25918);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25919,seq25918__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25929 = arguments.length;
var i__4731__auto___25930 = (0);
while(true){
if((i__4731__auto___25930 < len__4730__auto___25929)){
args__4736__auto__.push((arguments[i__4731__auto___25930]));

var G__25931 = (i__4731__auto___25930 + (1));
i__4731__auto___25930 = G__25931;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq25927){
var G__25928 = cljs.core.first.call(null,seq25927);
var seq25927__$1 = cljs.core.next.call(null,seq25927);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25928,seq25927__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25938 = arguments.length;
var i__4731__auto___25939 = (0);
while(true){
if((i__4731__auto___25939 < len__4730__auto___25938)){
args__4736__auto__.push((arguments[i__4731__auto___25939]));

var G__25940 = (i__4731__auto___25939 + (1));
i__4731__auto___25939 = G__25940;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__25934){
var vec__25935 = p__25934;
var default$ = cljs.core.nth.call(null,vec__25935,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq25932){
var G__25933 = cljs.core.first.call(null,seq25932);
var seq25932__$1 = cljs.core.next.call(null,seq25932);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25933,seq25932__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25947 = arguments.length;
var i__4731__auto___25948 = (0);
while(true){
if((i__4731__auto___25948 < len__4730__auto___25947)){
args__4736__auto__.push((arguments[i__4731__auto___25948]));

var G__25949 = (i__4731__auto___25948 + (1));
i__4731__auto___25948 = G__25949;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__25943){
var vec__25944 = p__25943;
var default$ = cljs.core.nth.call(null,vec__25944,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq25941){
var G__25942 = cljs.core.first.call(null,seq25941);
var seq25941__$1 = cljs.core.next.call(null,seq25941);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25942,seq25941__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25954 = arguments.length;
var i__4731__auto___25955 = (0);
while(true){
if((i__4731__auto___25955 < len__4730__auto___25954)){
args__4736__auto__.push((arguments[i__4731__auto___25955]));

var G__25956 = (i__4731__auto___25955 + (1));
i__4731__auto___25955 = G__25956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__25950_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__25950_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq25951){
var G__25952 = cljs.core.first.call(null,seq25951);
var seq25951__$1 = cljs.core.next.call(null,seq25951);
var G__25953 = cljs.core.first.call(null,seq25951__$1);
var seq25951__$2 = cljs.core.next.call(null,seq25951__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25952,G__25953,seq25951__$2);
});

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25961 = arguments.length;
var i__4731__auto___25962 = (0);
while(true){
if((i__4731__auto___25962 < len__4730__auto___25961)){
args__4736__auto__.push((arguments[i__4731__auto___25962]));

var G__25963 = (i__4731__auto___25962 + (1));
i__4731__auto___25962 = G__25963;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__25957_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__25957_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq25958){
var G__25959 = cljs.core.first.call(null,seq25958);
var seq25958__$1 = cljs.core.next.call(null,seq25958);
var G__25960 = cljs.core.first.call(null,seq25958__$1);
var seq25958__$2 = cljs.core.next.call(null,seq25958__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25959,G__25960,seq25958__$2);
});


//# sourceMappingURL=session.js.map?rel=1568179214232
