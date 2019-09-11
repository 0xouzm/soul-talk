// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__24678__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24679__i = 0, G__24679__a = new Array(arguments.length -  0);
while (G__24679__i < G__24679__a.length) {G__24679__a[G__24679__i] = arguments[G__24679__i + 0]; ++G__24679__i;}
  args = new cljs.core.IndexedSeq(G__24679__a,0,null);
} 
return G__24678__delegate.call(this,args);};
G__24678.cljs$lang$maxFixedArity = 0;
G__24678.cljs$lang$applyTo = (function (arglist__24680){
var args = cljs.core.seq(arglist__24680);
return G__24678__delegate(args);
});
G__24678.cljs$core$IFn$_invoke$arity$variadic = G__24678__delegate;
return G__24678;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24681__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24682__i = 0, G__24682__a = new Array(arguments.length -  0);
while (G__24682__i < G__24682__a.length) {G__24682__a[G__24682__i] = arguments[G__24682__i + 0]; ++G__24682__i;}
  args = new cljs.core.IndexedSeq(G__24682__a,0,null);
} 
return G__24681__delegate.call(this,args);};
G__24681.cljs$lang$maxFixedArity = 0;
G__24681.cljs$lang$applyTo = (function (arglist__24683){
var args = cljs.core.seq(arglist__24683);
return G__24681__delegate(args);
});
G__24681.cljs$core$IFn$_invoke$arity$variadic = G__24681__delegate;
return G__24681;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1568179212348
