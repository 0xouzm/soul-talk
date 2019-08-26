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
var G__21916__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21917__i = 0, G__21917__a = new Array(arguments.length -  0);
while (G__21917__i < G__21917__a.length) {G__21917__a[G__21917__i] = arguments[G__21917__i + 0]; ++G__21917__i;}
  args = new cljs.core.IndexedSeq(G__21917__a,0,null);
} 
return G__21916__delegate.call(this,args);};
G__21916.cljs$lang$maxFixedArity = 0;
G__21916.cljs$lang$applyTo = (function (arglist__21918){
var args = cljs.core.seq(arglist__21918);
return G__21916__delegate(args);
});
G__21916.cljs$core$IFn$_invoke$arity$variadic = G__21916__delegate;
return G__21916;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21919__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21920__i = 0, G__21920__a = new Array(arguments.length -  0);
while (G__21920__i < G__21920__a.length) {G__21920__a[G__21920__i] = arguments[G__21920__i + 0]; ++G__21920__i;}
  args = new cljs.core.IndexedSeq(G__21920__a,0,null);
} 
return G__21919__delegate.call(this,args);};
G__21919.cljs$lang$maxFixedArity = 0;
G__21919.cljs$lang$applyTo = (function (arglist__21921){
var args = cljs.core.seq(arglist__21921);
return G__21919__delegate(args);
});
G__21919.cljs$core$IFn$_invoke$arity$variadic = G__21919__delegate;
return G__21919;
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

//# sourceMappingURL=debug.js.map?rel=1566805865277
