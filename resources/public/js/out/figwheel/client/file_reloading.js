// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28434_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28434_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28435 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28436 = null;
var count__28437 = (0);
var i__28438 = (0);
while(true){
if((i__28438 < count__28437)){
var n = cljs.core._nth.call(null,chunk__28436,i__28438);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28439 = seq__28435;
var G__28440 = chunk__28436;
var G__28441 = count__28437;
var G__28442 = (i__28438 + (1));
seq__28435 = G__28439;
chunk__28436 = G__28440;
count__28437 = G__28441;
i__28438 = G__28442;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28435);
if(temp__5720__auto__){
var seq__28435__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28435__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28435__$1);
var G__28443 = cljs.core.chunk_rest.call(null,seq__28435__$1);
var G__28444 = c__4550__auto__;
var G__28445 = cljs.core.count.call(null,c__4550__auto__);
var G__28446 = (0);
seq__28435 = G__28443;
chunk__28436 = G__28444;
count__28437 = G__28445;
i__28438 = G__28446;
continue;
} else {
var n = cljs.core.first.call(null,seq__28435__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28447 = cljs.core.next.call(null,seq__28435__$1);
var G__28448 = null;
var G__28449 = (0);
var G__28450 = (0);
seq__28435 = G__28447;
chunk__28436 = G__28448;
count__28437 = G__28449;
i__28438 = G__28450;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28451){
var vec__28452 = p__28451;
var _ = cljs.core.nth.call(null,vec__28452,(0),null);
var v = cljs.core.nth.call(null,vec__28452,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__28455){
var vec__28456 = p__28455;
var k = cljs.core.nth.call(null,vec__28456,(0),null);
var v = cljs.core.nth.call(null,vec__28456,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28468_28476 = cljs.core.seq.call(null,deps);
var chunk__28469_28477 = null;
var count__28470_28478 = (0);
var i__28471_28479 = (0);
while(true){
if((i__28471_28479 < count__28470_28478)){
var dep_28480 = cljs.core._nth.call(null,chunk__28469_28477,i__28471_28479);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28480;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28480));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28480,(depth + (1)),state);
} else {
}


var G__28481 = seq__28468_28476;
var G__28482 = chunk__28469_28477;
var G__28483 = count__28470_28478;
var G__28484 = (i__28471_28479 + (1));
seq__28468_28476 = G__28481;
chunk__28469_28477 = G__28482;
count__28470_28478 = G__28483;
i__28471_28479 = G__28484;
continue;
} else {
var temp__5720__auto___28485 = cljs.core.seq.call(null,seq__28468_28476);
if(temp__5720__auto___28485){
var seq__28468_28486__$1 = temp__5720__auto___28485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28468_28486__$1)){
var c__4550__auto___28487 = cljs.core.chunk_first.call(null,seq__28468_28486__$1);
var G__28488 = cljs.core.chunk_rest.call(null,seq__28468_28486__$1);
var G__28489 = c__4550__auto___28487;
var G__28490 = cljs.core.count.call(null,c__4550__auto___28487);
var G__28491 = (0);
seq__28468_28476 = G__28488;
chunk__28469_28477 = G__28489;
count__28470_28478 = G__28490;
i__28471_28479 = G__28491;
continue;
} else {
var dep_28492 = cljs.core.first.call(null,seq__28468_28486__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28492;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28492));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28492,(depth + (1)),state);
} else {
}


var G__28493 = cljs.core.next.call(null,seq__28468_28486__$1);
var G__28494 = null;
var G__28495 = (0);
var G__28496 = (0);
seq__28468_28476 = G__28493;
chunk__28469_28477 = G__28494;
count__28470_28478 = G__28495;
i__28471_28479 = G__28496;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28472){
var vec__28473 = p__28472;
var seq__28474 = cljs.core.seq.call(null,vec__28473);
var first__28475 = cljs.core.first.call(null,seq__28474);
var seq__28474__$1 = cljs.core.next.call(null,seq__28474);
var x = first__28475;
var xs = seq__28474__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28473,seq__28474,first__28475,seq__28474__$1,x,xs,get_deps__$1){
return (function (p1__28459_SHARP_){
return clojure.set.difference.call(null,p1__28459_SHARP_,x);
});})(vec__28473,seq__28474,first__28475,seq__28474__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28497 = cljs.core.seq.call(null,provides);
var chunk__28498 = null;
var count__28499 = (0);
var i__28500 = (0);
while(true){
if((i__28500 < count__28499)){
var prov = cljs.core._nth.call(null,chunk__28498,i__28500);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28509_28517 = cljs.core.seq.call(null,requires);
var chunk__28510_28518 = null;
var count__28511_28519 = (0);
var i__28512_28520 = (0);
while(true){
if((i__28512_28520 < count__28511_28519)){
var req_28521 = cljs.core._nth.call(null,chunk__28510_28518,i__28512_28520);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28521,prov);


var G__28522 = seq__28509_28517;
var G__28523 = chunk__28510_28518;
var G__28524 = count__28511_28519;
var G__28525 = (i__28512_28520 + (1));
seq__28509_28517 = G__28522;
chunk__28510_28518 = G__28523;
count__28511_28519 = G__28524;
i__28512_28520 = G__28525;
continue;
} else {
var temp__5720__auto___28526 = cljs.core.seq.call(null,seq__28509_28517);
if(temp__5720__auto___28526){
var seq__28509_28527__$1 = temp__5720__auto___28526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28509_28527__$1)){
var c__4550__auto___28528 = cljs.core.chunk_first.call(null,seq__28509_28527__$1);
var G__28529 = cljs.core.chunk_rest.call(null,seq__28509_28527__$1);
var G__28530 = c__4550__auto___28528;
var G__28531 = cljs.core.count.call(null,c__4550__auto___28528);
var G__28532 = (0);
seq__28509_28517 = G__28529;
chunk__28510_28518 = G__28530;
count__28511_28519 = G__28531;
i__28512_28520 = G__28532;
continue;
} else {
var req_28533 = cljs.core.first.call(null,seq__28509_28527__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28533,prov);


var G__28534 = cljs.core.next.call(null,seq__28509_28527__$1);
var G__28535 = null;
var G__28536 = (0);
var G__28537 = (0);
seq__28509_28517 = G__28534;
chunk__28510_28518 = G__28535;
count__28511_28519 = G__28536;
i__28512_28520 = G__28537;
continue;
}
} else {
}
}
break;
}


var G__28538 = seq__28497;
var G__28539 = chunk__28498;
var G__28540 = count__28499;
var G__28541 = (i__28500 + (1));
seq__28497 = G__28538;
chunk__28498 = G__28539;
count__28499 = G__28540;
i__28500 = G__28541;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28497);
if(temp__5720__auto__){
var seq__28497__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28497__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28497__$1);
var G__28542 = cljs.core.chunk_rest.call(null,seq__28497__$1);
var G__28543 = c__4550__auto__;
var G__28544 = cljs.core.count.call(null,c__4550__auto__);
var G__28545 = (0);
seq__28497 = G__28542;
chunk__28498 = G__28543;
count__28499 = G__28544;
i__28500 = G__28545;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28497__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28513_28546 = cljs.core.seq.call(null,requires);
var chunk__28514_28547 = null;
var count__28515_28548 = (0);
var i__28516_28549 = (0);
while(true){
if((i__28516_28549 < count__28515_28548)){
var req_28550 = cljs.core._nth.call(null,chunk__28514_28547,i__28516_28549);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28550,prov);


var G__28551 = seq__28513_28546;
var G__28552 = chunk__28514_28547;
var G__28553 = count__28515_28548;
var G__28554 = (i__28516_28549 + (1));
seq__28513_28546 = G__28551;
chunk__28514_28547 = G__28552;
count__28515_28548 = G__28553;
i__28516_28549 = G__28554;
continue;
} else {
var temp__5720__auto___28555__$1 = cljs.core.seq.call(null,seq__28513_28546);
if(temp__5720__auto___28555__$1){
var seq__28513_28556__$1 = temp__5720__auto___28555__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28513_28556__$1)){
var c__4550__auto___28557 = cljs.core.chunk_first.call(null,seq__28513_28556__$1);
var G__28558 = cljs.core.chunk_rest.call(null,seq__28513_28556__$1);
var G__28559 = c__4550__auto___28557;
var G__28560 = cljs.core.count.call(null,c__4550__auto___28557);
var G__28561 = (0);
seq__28513_28546 = G__28558;
chunk__28514_28547 = G__28559;
count__28515_28548 = G__28560;
i__28516_28549 = G__28561;
continue;
} else {
var req_28562 = cljs.core.first.call(null,seq__28513_28556__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28562,prov);


var G__28563 = cljs.core.next.call(null,seq__28513_28556__$1);
var G__28564 = null;
var G__28565 = (0);
var G__28566 = (0);
seq__28513_28546 = G__28563;
chunk__28514_28547 = G__28564;
count__28515_28548 = G__28565;
i__28516_28549 = G__28566;
continue;
}
} else {
}
}
break;
}


var G__28567 = cljs.core.next.call(null,seq__28497__$1);
var G__28568 = null;
var G__28569 = (0);
var G__28570 = (0);
seq__28497 = G__28567;
chunk__28498 = G__28568;
count__28499 = G__28569;
i__28500 = G__28570;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28571_28575 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28572_28576 = null;
var count__28573_28577 = (0);
var i__28574_28578 = (0);
while(true){
if((i__28574_28578 < count__28573_28577)){
var ns_28579 = cljs.core._nth.call(null,chunk__28572_28576,i__28574_28578);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28579);


var G__28580 = seq__28571_28575;
var G__28581 = chunk__28572_28576;
var G__28582 = count__28573_28577;
var G__28583 = (i__28574_28578 + (1));
seq__28571_28575 = G__28580;
chunk__28572_28576 = G__28581;
count__28573_28577 = G__28582;
i__28574_28578 = G__28583;
continue;
} else {
var temp__5720__auto___28584 = cljs.core.seq.call(null,seq__28571_28575);
if(temp__5720__auto___28584){
var seq__28571_28585__$1 = temp__5720__auto___28584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28571_28585__$1)){
var c__4550__auto___28586 = cljs.core.chunk_first.call(null,seq__28571_28585__$1);
var G__28587 = cljs.core.chunk_rest.call(null,seq__28571_28585__$1);
var G__28588 = c__4550__auto___28586;
var G__28589 = cljs.core.count.call(null,c__4550__auto___28586);
var G__28590 = (0);
seq__28571_28575 = G__28587;
chunk__28572_28576 = G__28588;
count__28573_28577 = G__28589;
i__28574_28578 = G__28590;
continue;
} else {
var ns_28591 = cljs.core.first.call(null,seq__28571_28585__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28591);


var G__28592 = cljs.core.next.call(null,seq__28571_28585__$1);
var G__28593 = null;
var G__28594 = (0);
var G__28595 = (0);
seq__28571_28575 = G__28592;
chunk__28572_28576 = G__28593;
count__28573_28577 = G__28594;
i__28574_28578 = G__28595;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28596__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28597__i = 0, G__28597__a = new Array(arguments.length -  0);
while (G__28597__i < G__28597__a.length) {G__28597__a[G__28597__i] = arguments[G__28597__i + 0]; ++G__28597__i;}
  args = new cljs.core.IndexedSeq(G__28597__a,0,null);
} 
return G__28596__delegate.call(this,args);};
G__28596.cljs$lang$maxFixedArity = 0;
G__28596.cljs$lang$applyTo = (function (arglist__28598){
var args = cljs.core.seq(arglist__28598);
return G__28596__delegate(args);
});
G__28596.cljs$core$IFn$_invoke$arity$variadic = G__28596__delegate;
return G__28596;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28599_SHARP_,p2__28600_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28599_SHARP_)),p2__28600_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28601_SHARP_,p2__28602_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28601_SHARP_),p2__28602_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28603 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28603.addCallback(((function (G__28603){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28603))
);

G__28603.addErrback(((function (G__28603){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28603))
);

return G__28603;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28604){if((e28604 instanceof Error)){
var e = e28604;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28604;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28605){if((e28605 instanceof Error)){
var e = e28605;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28605;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28606 = cljs.core._EQ_;
var expr__28607 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28606.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28607))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28606.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28607))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28606.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28607))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28606,expr__28607){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28606,expr__28607))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28609,callback){
var map__28610 = p__28609;
var map__28610__$1 = (((((!((map__28610 == null))))?(((((map__28610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28610):map__28610);
var file_msg = map__28610__$1;
var request_url = cljs.core.get.call(null,map__28610__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28610,map__28610__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28610,map__28610__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto__){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto__){
return (function (state_28648){
var state_val_28649 = (state_28648[(1)]);
if((state_val_28649 === (7))){
var inst_28644 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
var statearr_28650_28676 = state_28648__$1;
(statearr_28650_28676[(2)] = inst_28644);

(statearr_28650_28676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (1))){
var state_28648__$1 = state_28648;
var statearr_28651_28677 = state_28648__$1;
(statearr_28651_28677[(2)] = null);

(statearr_28651_28677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (4))){
var inst_28614 = (state_28648[(7)]);
var inst_28614__$1 = (state_28648[(2)]);
var state_28648__$1 = (function (){var statearr_28652 = state_28648;
(statearr_28652[(7)] = inst_28614__$1);

return statearr_28652;
})();
if(cljs.core.truth_(inst_28614__$1)){
var statearr_28653_28678 = state_28648__$1;
(statearr_28653_28678[(1)] = (5));

} else {
var statearr_28654_28679 = state_28648__$1;
(statearr_28654_28679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (15))){
var inst_28629 = (state_28648[(8)]);
var inst_28627 = (state_28648[(9)]);
var inst_28631 = inst_28629.call(null,inst_28627);
var state_28648__$1 = state_28648;
var statearr_28655_28680 = state_28648__$1;
(statearr_28655_28680[(2)] = inst_28631);

(statearr_28655_28680[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (13))){
var inst_28638 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
var statearr_28656_28681 = state_28648__$1;
(statearr_28656_28681[(2)] = inst_28638);

(statearr_28656_28681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (6))){
var state_28648__$1 = state_28648;
var statearr_28657_28682 = state_28648__$1;
(statearr_28657_28682[(2)] = null);

(statearr_28657_28682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (17))){
var inst_28635 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
var statearr_28658_28683 = state_28648__$1;
(statearr_28658_28683[(2)] = inst_28635);

(statearr_28658_28683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (3))){
var inst_28646 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28648__$1,inst_28646);
} else {
if((state_val_28649 === (12))){
var state_28648__$1 = state_28648;
var statearr_28659_28684 = state_28648__$1;
(statearr_28659_28684[(2)] = null);

(statearr_28659_28684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (2))){
var state_28648__$1 = state_28648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28648__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28649 === (11))){
var inst_28619 = (state_28648[(10)]);
var inst_28625 = figwheel.client.file_reloading.blocking_load.call(null,inst_28619);
var state_28648__$1 = state_28648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28648__$1,(14),inst_28625);
} else {
if((state_val_28649 === (9))){
var inst_28619 = (state_28648[(10)]);
var state_28648__$1 = state_28648;
if(cljs.core.truth_(inst_28619)){
var statearr_28660_28685 = state_28648__$1;
(statearr_28660_28685[(1)] = (11));

} else {
var statearr_28661_28686 = state_28648__$1;
(statearr_28661_28686[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (5))){
var inst_28620 = (state_28648[(11)]);
var inst_28614 = (state_28648[(7)]);
var inst_28619 = cljs.core.nth.call(null,inst_28614,(0),null);
var inst_28620__$1 = cljs.core.nth.call(null,inst_28614,(1),null);
var state_28648__$1 = (function (){var statearr_28662 = state_28648;
(statearr_28662[(11)] = inst_28620__$1);

(statearr_28662[(10)] = inst_28619);

return statearr_28662;
})();
if(cljs.core.truth_(inst_28620__$1)){
var statearr_28663_28687 = state_28648__$1;
(statearr_28663_28687[(1)] = (8));

} else {
var statearr_28664_28688 = state_28648__$1;
(statearr_28664_28688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (14))){
var inst_28629 = (state_28648[(8)]);
var inst_28619 = (state_28648[(10)]);
var inst_28627 = (state_28648[(2)]);
var inst_28628 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28629__$1 = cljs.core.get.call(null,inst_28628,inst_28619);
var state_28648__$1 = (function (){var statearr_28665 = state_28648;
(statearr_28665[(8)] = inst_28629__$1);

(statearr_28665[(9)] = inst_28627);

return statearr_28665;
})();
if(cljs.core.truth_(inst_28629__$1)){
var statearr_28666_28689 = state_28648__$1;
(statearr_28666_28689[(1)] = (15));

} else {
var statearr_28667_28690 = state_28648__$1;
(statearr_28667_28690[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (16))){
var inst_28627 = (state_28648[(9)]);
var inst_28633 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28627);
var state_28648__$1 = state_28648;
var statearr_28668_28691 = state_28648__$1;
(statearr_28668_28691[(2)] = inst_28633);

(statearr_28668_28691[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (10))){
var inst_28640 = (state_28648[(2)]);
var state_28648__$1 = (function (){var statearr_28669 = state_28648;
(statearr_28669[(12)] = inst_28640);

return statearr_28669;
})();
var statearr_28670_28692 = state_28648__$1;
(statearr_28670_28692[(2)] = null);

(statearr_28670_28692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (8))){
var inst_28620 = (state_28648[(11)]);
var inst_28622 = eval(inst_28620);
var state_28648__$1 = state_28648;
var statearr_28671_28693 = state_28648__$1;
(statearr_28671_28693[(2)] = inst_28622);

(statearr_28671_28693[(1)] = (10));


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
});})(c__25051__auto__))
;
return ((function (switch__24956__auto__,c__25051__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24957__auto__ = null;
var figwheel$client$file_reloading$state_machine__24957__auto____0 = (function (){
var statearr_28672 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28672[(0)] = figwheel$client$file_reloading$state_machine__24957__auto__);

(statearr_28672[(1)] = (1));

return statearr_28672;
});
var figwheel$client$file_reloading$state_machine__24957__auto____1 = (function (state_28648){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_28648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e28673){if((e28673 instanceof Object)){
var ex__24960__auto__ = e28673;
var statearr_28674_28694 = state_28648;
(statearr_28674_28694[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28695 = state_28648;
state_28648 = G__28695;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24957__auto__ = function(state_28648){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24957__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24957__auto____1.call(this,state_28648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24957__auto____0;
figwheel$client$file_reloading$state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24957__auto____1;
return figwheel$client$file_reloading$state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto__))
})();
var state__25053__auto__ = (function (){var statearr_28675 = f__25052__auto__.call(null);
(statearr_28675[(6)] = c__25051__auto__);

return statearr_28675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto__))
);

return c__25051__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28697 = arguments.length;
switch (G__28697) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28699,callback){
var map__28700 = p__28699;
var map__28700__$1 = (((((!((map__28700 == null))))?(((((map__28700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28700):map__28700);
var file_msg = map__28700__$1;
var namespace = cljs.core.get.call(null,map__28700__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28700,map__28700__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28700,map__28700__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28702){
var map__28703 = p__28702;
var map__28703__$1 = (((((!((map__28703 == null))))?(((((map__28703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28703):map__28703);
var file_msg = map__28703__$1;
var namespace = cljs.core.get.call(null,map__28703__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28705){
var map__28706 = p__28705;
var map__28706__$1 = (((((!((map__28706 == null))))?(((((map__28706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28706):map__28706);
var file_msg = map__28706__$1;
var namespace = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28708,callback){
var map__28709 = p__28708;
var map__28709__$1 = (((((!((map__28709 == null))))?(((((map__28709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28709):map__28709);
var file_msg = map__28709__$1;
var request_url = cljs.core.get.call(null,map__28709__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28709__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25051__auto___28759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___28759,out){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___28759,out){
return (function (state_28744){
var state_val_28745 = (state_28744[(1)]);
if((state_val_28745 === (1))){
var inst_28718 = cljs.core.seq.call(null,files);
var inst_28719 = cljs.core.first.call(null,inst_28718);
var inst_28720 = cljs.core.next.call(null,inst_28718);
var inst_28721 = files;
var state_28744__$1 = (function (){var statearr_28746 = state_28744;
(statearr_28746[(7)] = inst_28721);

(statearr_28746[(8)] = inst_28720);

(statearr_28746[(9)] = inst_28719);

return statearr_28746;
})();
var statearr_28747_28760 = state_28744__$1;
(statearr_28747_28760[(2)] = null);

(statearr_28747_28760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (2))){
var inst_28721 = (state_28744[(7)]);
var inst_28727 = (state_28744[(10)]);
var inst_28726 = cljs.core.seq.call(null,inst_28721);
var inst_28727__$1 = cljs.core.first.call(null,inst_28726);
var inst_28728 = cljs.core.next.call(null,inst_28726);
var inst_28729 = (inst_28727__$1 == null);
var inst_28730 = cljs.core.not.call(null,inst_28729);
var state_28744__$1 = (function (){var statearr_28748 = state_28744;
(statearr_28748[(11)] = inst_28728);

(statearr_28748[(10)] = inst_28727__$1);

return statearr_28748;
})();
if(inst_28730){
var statearr_28749_28761 = state_28744__$1;
(statearr_28749_28761[(1)] = (4));

} else {
var statearr_28750_28762 = state_28744__$1;
(statearr_28750_28762[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (3))){
var inst_28742 = (state_28744[(2)]);
var state_28744__$1 = state_28744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28744__$1,inst_28742);
} else {
if((state_val_28745 === (4))){
var inst_28727 = (state_28744[(10)]);
var inst_28732 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28727);
var state_28744__$1 = state_28744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28744__$1,(7),inst_28732);
} else {
if((state_val_28745 === (5))){
var inst_28738 = cljs.core.async.close_BANG_.call(null,out);
var state_28744__$1 = state_28744;
var statearr_28751_28763 = state_28744__$1;
(statearr_28751_28763[(2)] = inst_28738);

(statearr_28751_28763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (6))){
var inst_28740 = (state_28744[(2)]);
var state_28744__$1 = state_28744;
var statearr_28752_28764 = state_28744__$1;
(statearr_28752_28764[(2)] = inst_28740);

(statearr_28752_28764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (7))){
var inst_28728 = (state_28744[(11)]);
var inst_28734 = (state_28744[(2)]);
var inst_28735 = cljs.core.async.put_BANG_.call(null,out,inst_28734);
var inst_28721 = inst_28728;
var state_28744__$1 = (function (){var statearr_28753 = state_28744;
(statearr_28753[(7)] = inst_28721);

(statearr_28753[(12)] = inst_28735);

return statearr_28753;
})();
var statearr_28754_28765 = state_28744__$1;
(statearr_28754_28765[(2)] = null);

(statearr_28754_28765[(1)] = (2));


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
});})(c__25051__auto___28759,out))
;
return ((function (switch__24956__auto__,c__25051__auto___28759,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24957__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24957__auto____0 = (function (){
var statearr_28755 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28755[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24957__auto__);

(statearr_28755[(1)] = (1));

return statearr_28755;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24957__auto____1 = (function (state_28744){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_28744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e28756){if((e28756 instanceof Object)){
var ex__24960__auto__ = e28756;
var statearr_28757_28766 = state_28744;
(statearr_28757_28766[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28767 = state_28744;
state_28744 = G__28767;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24957__auto__ = function(state_28744){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24957__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24957__auto____1.call(this,state_28744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24957__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24957__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___28759,out))
})();
var state__25053__auto__ = (function (){var statearr_28758 = f__25052__auto__.call(null);
(statearr_28758[(6)] = c__25051__auto___28759);

return statearr_28758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___28759,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28768,opts){
var map__28769 = p__28768;
var map__28769__$1 = (((((!((map__28769 == null))))?(((((map__28769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28769):map__28769);
var eval_body = cljs.core.get.call(null,map__28769__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28769__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28771){var e = e28771;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28772_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28772_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28773){
var vec__28774 = p__28773;
var k = cljs.core.nth.call(null,vec__28774,(0),null);
var v = cljs.core.nth.call(null,vec__28774,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28777){
var vec__28778 = p__28777;
var k = cljs.core.nth.call(null,vec__28778,(0),null);
var v = cljs.core.nth.call(null,vec__28778,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28784,p__28785){
var map__28786 = p__28784;
var map__28786__$1 = (((((!((map__28786 == null))))?(((((map__28786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28786):map__28786);
var opts = map__28786__$1;
var before_jsload = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28787 = p__28785;
var map__28787__$1 = (((((!((map__28787 == null))))?(((((map__28787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28787):map__28787);
var msg = map__28787__$1;
var files = cljs.core.get.call(null,map__28787__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28787__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28787__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28941){
var state_val_28942 = (state_28941[(1)]);
if((state_val_28942 === (7))){
var inst_28804 = (state_28941[(7)]);
var inst_28801 = (state_28941[(8)]);
var inst_28803 = (state_28941[(9)]);
var inst_28802 = (state_28941[(10)]);
var inst_28809 = cljs.core._nth.call(null,inst_28802,inst_28804);
var inst_28810 = figwheel.client.file_reloading.eval_body.call(null,inst_28809,opts);
var inst_28811 = (inst_28804 + (1));
var tmp28943 = inst_28801;
var tmp28944 = inst_28803;
var tmp28945 = inst_28802;
var inst_28801__$1 = tmp28943;
var inst_28802__$1 = tmp28945;
var inst_28803__$1 = tmp28944;
var inst_28804__$1 = inst_28811;
var state_28941__$1 = (function (){var statearr_28946 = state_28941;
(statearr_28946[(7)] = inst_28804__$1);

(statearr_28946[(8)] = inst_28801__$1);

(statearr_28946[(9)] = inst_28803__$1);

(statearr_28946[(11)] = inst_28810);

(statearr_28946[(10)] = inst_28802__$1);

return statearr_28946;
})();
var statearr_28947_29030 = state_28941__$1;
(statearr_28947_29030[(2)] = null);

(statearr_28947_29030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (20))){
var inst_28844 = (state_28941[(12)]);
var inst_28852 = figwheel.client.file_reloading.sort_files.call(null,inst_28844);
var state_28941__$1 = state_28941;
var statearr_28948_29031 = state_28941__$1;
(statearr_28948_29031[(2)] = inst_28852);

(statearr_28948_29031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (27))){
var state_28941__$1 = state_28941;
var statearr_28949_29032 = state_28941__$1;
(statearr_28949_29032[(2)] = null);

(statearr_28949_29032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (1))){
var inst_28793 = (state_28941[(13)]);
var inst_28790 = before_jsload.call(null,files);
var inst_28791 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28792 = (function (){return ((function (inst_28793,inst_28790,inst_28791,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28781_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28781_SHARP_);
});
;})(inst_28793,inst_28790,inst_28791,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28793__$1 = cljs.core.filter.call(null,inst_28792,files);
var inst_28794 = cljs.core.not_empty.call(null,inst_28793__$1);
var state_28941__$1 = (function (){var statearr_28950 = state_28941;
(statearr_28950[(14)] = inst_28790);

(statearr_28950[(13)] = inst_28793__$1);

(statearr_28950[(15)] = inst_28791);

return statearr_28950;
})();
if(cljs.core.truth_(inst_28794)){
var statearr_28951_29033 = state_28941__$1;
(statearr_28951_29033[(1)] = (2));

} else {
var statearr_28952_29034 = state_28941__$1;
(statearr_28952_29034[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (24))){
var state_28941__$1 = state_28941;
var statearr_28953_29035 = state_28941__$1;
(statearr_28953_29035[(2)] = null);

(statearr_28953_29035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (39))){
var inst_28894 = (state_28941[(16)]);
var state_28941__$1 = state_28941;
var statearr_28954_29036 = state_28941__$1;
(statearr_28954_29036[(2)] = inst_28894);

(statearr_28954_29036[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (46))){
var inst_28936 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28955_29037 = state_28941__$1;
(statearr_28955_29037[(2)] = inst_28936);

(statearr_28955_29037[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (4))){
var inst_28838 = (state_28941[(2)]);
var inst_28839 = cljs.core.List.EMPTY;
var inst_28840 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28839);
var inst_28841 = (function (){return ((function (inst_28838,inst_28839,inst_28840,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28782_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28782_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28782_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28782_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_28838,inst_28839,inst_28840,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28842 = cljs.core.filter.call(null,inst_28841,files);
var inst_28843 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28844 = cljs.core.concat.call(null,inst_28842,inst_28843);
var state_28941__$1 = (function (){var statearr_28956 = state_28941;
(statearr_28956[(12)] = inst_28844);

(statearr_28956[(17)] = inst_28838);

(statearr_28956[(18)] = inst_28840);

return statearr_28956;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28957_29038 = state_28941__$1;
(statearr_28957_29038[(1)] = (16));

} else {
var statearr_28958_29039 = state_28941__$1;
(statearr_28958_29039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (15))){
var inst_28828 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28959_29040 = state_28941__$1;
(statearr_28959_29040[(2)] = inst_28828);

(statearr_28959_29040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (21))){
var inst_28854 = (state_28941[(19)]);
var inst_28854__$1 = (state_28941[(2)]);
var inst_28855 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28854__$1);
var state_28941__$1 = (function (){var statearr_28960 = state_28941;
(statearr_28960[(19)] = inst_28854__$1);

return statearr_28960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28941__$1,(22),inst_28855);
} else {
if((state_val_28942 === (31))){
var inst_28939 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28941__$1,inst_28939);
} else {
if((state_val_28942 === (32))){
var inst_28894 = (state_28941[(16)]);
var inst_28899 = inst_28894.cljs$lang$protocol_mask$partition0$;
var inst_28900 = (inst_28899 & (64));
var inst_28901 = inst_28894.cljs$core$ISeq$;
var inst_28902 = (cljs.core.PROTOCOL_SENTINEL === inst_28901);
var inst_28903 = ((inst_28900) || (inst_28902));
var state_28941__$1 = state_28941;
if(cljs.core.truth_(inst_28903)){
var statearr_28961_29041 = state_28941__$1;
(statearr_28961_29041[(1)] = (35));

} else {
var statearr_28962_29042 = state_28941__$1;
(statearr_28962_29042[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (40))){
var inst_28916 = (state_28941[(20)]);
var inst_28915 = (state_28941[(2)]);
var inst_28916__$1 = cljs.core.get.call(null,inst_28915,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28917 = cljs.core.get.call(null,inst_28915,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28918 = cljs.core.not_empty.call(null,inst_28916__$1);
var state_28941__$1 = (function (){var statearr_28963 = state_28941;
(statearr_28963[(20)] = inst_28916__$1);

(statearr_28963[(21)] = inst_28917);

return statearr_28963;
})();
if(cljs.core.truth_(inst_28918)){
var statearr_28964_29043 = state_28941__$1;
(statearr_28964_29043[(1)] = (41));

} else {
var statearr_28965_29044 = state_28941__$1;
(statearr_28965_29044[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (33))){
var state_28941__$1 = state_28941;
var statearr_28966_29045 = state_28941__$1;
(statearr_28966_29045[(2)] = false);

(statearr_28966_29045[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (13))){
var inst_28814 = (state_28941[(22)]);
var inst_28818 = cljs.core.chunk_first.call(null,inst_28814);
var inst_28819 = cljs.core.chunk_rest.call(null,inst_28814);
var inst_28820 = cljs.core.count.call(null,inst_28818);
var inst_28801 = inst_28819;
var inst_28802 = inst_28818;
var inst_28803 = inst_28820;
var inst_28804 = (0);
var state_28941__$1 = (function (){var statearr_28967 = state_28941;
(statearr_28967[(7)] = inst_28804);

(statearr_28967[(8)] = inst_28801);

(statearr_28967[(9)] = inst_28803);

(statearr_28967[(10)] = inst_28802);

return statearr_28967;
})();
var statearr_28968_29046 = state_28941__$1;
(statearr_28968_29046[(2)] = null);

(statearr_28968_29046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (22))){
var inst_28854 = (state_28941[(19)]);
var inst_28862 = (state_28941[(23)]);
var inst_28857 = (state_28941[(24)]);
var inst_28858 = (state_28941[(25)]);
var inst_28857__$1 = (state_28941[(2)]);
var inst_28858__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28857__$1);
var inst_28859 = (function (){var all_files = inst_28854;
var res_SINGLEQUOTE_ = inst_28857__$1;
var res = inst_28858__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28854,inst_28862,inst_28857,inst_28858,inst_28857__$1,inst_28858__$1,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28783_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28783_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28854,inst_28862,inst_28857,inst_28858,inst_28857__$1,inst_28858__$1,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28860 = cljs.core.filter.call(null,inst_28859,inst_28857__$1);
var inst_28861 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28862__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28861);
var inst_28863 = cljs.core.not_empty.call(null,inst_28862__$1);
var state_28941__$1 = (function (){var statearr_28969 = state_28941;
(statearr_28969[(23)] = inst_28862__$1);

(statearr_28969[(24)] = inst_28857__$1);

(statearr_28969[(25)] = inst_28858__$1);

(statearr_28969[(26)] = inst_28860);

return statearr_28969;
})();
if(cljs.core.truth_(inst_28863)){
var statearr_28970_29047 = state_28941__$1;
(statearr_28970_29047[(1)] = (23));

} else {
var statearr_28971_29048 = state_28941__$1;
(statearr_28971_29048[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (36))){
var state_28941__$1 = state_28941;
var statearr_28972_29049 = state_28941__$1;
(statearr_28972_29049[(2)] = false);

(statearr_28972_29049[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (41))){
var inst_28916 = (state_28941[(20)]);
var inst_28920 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28921 = cljs.core.map.call(null,inst_28920,inst_28916);
var inst_28922 = cljs.core.pr_str.call(null,inst_28921);
var inst_28923 = ["figwheel-no-load meta-data: ",inst_28922].join('');
var inst_28924 = figwheel.client.utils.log.call(null,inst_28923);
var state_28941__$1 = state_28941;
var statearr_28973_29050 = state_28941__$1;
(statearr_28973_29050[(2)] = inst_28924);

(statearr_28973_29050[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (43))){
var inst_28917 = (state_28941[(21)]);
var inst_28927 = (state_28941[(2)]);
var inst_28928 = cljs.core.not_empty.call(null,inst_28917);
var state_28941__$1 = (function (){var statearr_28974 = state_28941;
(statearr_28974[(27)] = inst_28927);

return statearr_28974;
})();
if(cljs.core.truth_(inst_28928)){
var statearr_28975_29051 = state_28941__$1;
(statearr_28975_29051[(1)] = (44));

} else {
var statearr_28976_29052 = state_28941__$1;
(statearr_28976_29052[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (29))){
var inst_28854 = (state_28941[(19)]);
var inst_28862 = (state_28941[(23)]);
var inst_28894 = (state_28941[(16)]);
var inst_28857 = (state_28941[(24)]);
var inst_28858 = (state_28941[(25)]);
var inst_28860 = (state_28941[(26)]);
var inst_28890 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28893 = (function (){var all_files = inst_28854;
var res_SINGLEQUOTE_ = inst_28857;
var res = inst_28858;
var files_not_loaded = inst_28860;
var dependencies_that_loaded = inst_28862;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28862,inst_28894,inst_28857,inst_28858,inst_28860,inst_28890,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28892){
var map__28977 = p__28892;
var map__28977__$1 = (((((!((map__28977 == null))))?(((((map__28977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28977):map__28977);
var namespace = cljs.core.get.call(null,map__28977__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28862,inst_28894,inst_28857,inst_28858,inst_28860,inst_28890,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28894__$1 = cljs.core.group_by.call(null,inst_28893,inst_28860);
var inst_28896 = (inst_28894__$1 == null);
var inst_28897 = cljs.core.not.call(null,inst_28896);
var state_28941__$1 = (function (){var statearr_28979 = state_28941;
(statearr_28979[(28)] = inst_28890);

(statearr_28979[(16)] = inst_28894__$1);

return statearr_28979;
})();
if(inst_28897){
var statearr_28980_29053 = state_28941__$1;
(statearr_28980_29053[(1)] = (32));

} else {
var statearr_28981_29054 = state_28941__$1;
(statearr_28981_29054[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (44))){
var inst_28917 = (state_28941[(21)]);
var inst_28930 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28917);
var inst_28931 = cljs.core.pr_str.call(null,inst_28930);
var inst_28932 = ["not required: ",inst_28931].join('');
var inst_28933 = figwheel.client.utils.log.call(null,inst_28932);
var state_28941__$1 = state_28941;
var statearr_28982_29055 = state_28941__$1;
(statearr_28982_29055[(2)] = inst_28933);

(statearr_28982_29055[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (6))){
var inst_28835 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28983_29056 = state_28941__$1;
(statearr_28983_29056[(2)] = inst_28835);

(statearr_28983_29056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (28))){
var inst_28860 = (state_28941[(26)]);
var inst_28887 = (state_28941[(2)]);
var inst_28888 = cljs.core.not_empty.call(null,inst_28860);
var state_28941__$1 = (function (){var statearr_28984 = state_28941;
(statearr_28984[(29)] = inst_28887);

return statearr_28984;
})();
if(cljs.core.truth_(inst_28888)){
var statearr_28985_29057 = state_28941__$1;
(statearr_28985_29057[(1)] = (29));

} else {
var statearr_28986_29058 = state_28941__$1;
(statearr_28986_29058[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (25))){
var inst_28858 = (state_28941[(25)]);
var inst_28874 = (state_28941[(2)]);
var inst_28875 = cljs.core.not_empty.call(null,inst_28858);
var state_28941__$1 = (function (){var statearr_28987 = state_28941;
(statearr_28987[(30)] = inst_28874);

return statearr_28987;
})();
if(cljs.core.truth_(inst_28875)){
var statearr_28988_29059 = state_28941__$1;
(statearr_28988_29059[(1)] = (26));

} else {
var statearr_28989_29060 = state_28941__$1;
(statearr_28989_29060[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (34))){
var inst_28910 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
if(cljs.core.truth_(inst_28910)){
var statearr_28990_29061 = state_28941__$1;
(statearr_28990_29061[(1)] = (38));

} else {
var statearr_28991_29062 = state_28941__$1;
(statearr_28991_29062[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (17))){
var state_28941__$1 = state_28941;
var statearr_28992_29063 = state_28941__$1;
(statearr_28992_29063[(2)] = recompile_dependents);

(statearr_28992_29063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (3))){
var state_28941__$1 = state_28941;
var statearr_28993_29064 = state_28941__$1;
(statearr_28993_29064[(2)] = null);

(statearr_28993_29064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (12))){
var inst_28831 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_28994_29065 = state_28941__$1;
(statearr_28994_29065[(2)] = inst_28831);

(statearr_28994_29065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (2))){
var inst_28793 = (state_28941[(13)]);
var inst_28800 = cljs.core.seq.call(null,inst_28793);
var inst_28801 = inst_28800;
var inst_28802 = null;
var inst_28803 = (0);
var inst_28804 = (0);
var state_28941__$1 = (function (){var statearr_28995 = state_28941;
(statearr_28995[(7)] = inst_28804);

(statearr_28995[(8)] = inst_28801);

(statearr_28995[(9)] = inst_28803);

(statearr_28995[(10)] = inst_28802);

return statearr_28995;
})();
var statearr_28996_29066 = state_28941__$1;
(statearr_28996_29066[(2)] = null);

(statearr_28996_29066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (23))){
var inst_28854 = (state_28941[(19)]);
var inst_28862 = (state_28941[(23)]);
var inst_28857 = (state_28941[(24)]);
var inst_28858 = (state_28941[(25)]);
var inst_28860 = (state_28941[(26)]);
var inst_28865 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28867 = (function (){var all_files = inst_28854;
var res_SINGLEQUOTE_ = inst_28857;
var res = inst_28858;
var files_not_loaded = inst_28860;
var dependencies_that_loaded = inst_28862;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28862,inst_28857,inst_28858,inst_28860,inst_28865,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28866){
var map__28997 = p__28866;
var map__28997__$1 = (((((!((map__28997 == null))))?(((((map__28997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28997):map__28997);
var request_url = cljs.core.get.call(null,map__28997__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28862,inst_28857,inst_28858,inst_28860,inst_28865,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28868 = cljs.core.reverse.call(null,inst_28862);
var inst_28869 = cljs.core.map.call(null,inst_28867,inst_28868);
var inst_28870 = cljs.core.pr_str.call(null,inst_28869);
var inst_28871 = figwheel.client.utils.log.call(null,inst_28870);
var state_28941__$1 = (function (){var statearr_28999 = state_28941;
(statearr_28999[(31)] = inst_28865);

return statearr_28999;
})();
var statearr_29000_29067 = state_28941__$1;
(statearr_29000_29067[(2)] = inst_28871);

(statearr_29000_29067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (35))){
var state_28941__$1 = state_28941;
var statearr_29001_29068 = state_28941__$1;
(statearr_29001_29068[(2)] = true);

(statearr_29001_29068[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (19))){
var inst_28844 = (state_28941[(12)]);
var inst_28850 = figwheel.client.file_reloading.expand_files.call(null,inst_28844);
var state_28941__$1 = state_28941;
var statearr_29002_29069 = state_28941__$1;
(statearr_29002_29069[(2)] = inst_28850);

(statearr_29002_29069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (11))){
var state_28941__$1 = state_28941;
var statearr_29003_29070 = state_28941__$1;
(statearr_29003_29070[(2)] = null);

(statearr_29003_29070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (9))){
var inst_28833 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_29004_29071 = state_28941__$1;
(statearr_29004_29071[(2)] = inst_28833);

(statearr_29004_29071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (5))){
var inst_28804 = (state_28941[(7)]);
var inst_28803 = (state_28941[(9)]);
var inst_28806 = (inst_28804 < inst_28803);
var inst_28807 = inst_28806;
var state_28941__$1 = state_28941;
if(cljs.core.truth_(inst_28807)){
var statearr_29005_29072 = state_28941__$1;
(statearr_29005_29072[(1)] = (7));

} else {
var statearr_29006_29073 = state_28941__$1;
(statearr_29006_29073[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (14))){
var inst_28814 = (state_28941[(22)]);
var inst_28823 = cljs.core.first.call(null,inst_28814);
var inst_28824 = figwheel.client.file_reloading.eval_body.call(null,inst_28823,opts);
var inst_28825 = cljs.core.next.call(null,inst_28814);
var inst_28801 = inst_28825;
var inst_28802 = null;
var inst_28803 = (0);
var inst_28804 = (0);
var state_28941__$1 = (function (){var statearr_29007 = state_28941;
(statearr_29007[(7)] = inst_28804);

(statearr_29007[(8)] = inst_28801);

(statearr_29007[(32)] = inst_28824);

(statearr_29007[(9)] = inst_28803);

(statearr_29007[(10)] = inst_28802);

return statearr_29007;
})();
var statearr_29008_29074 = state_28941__$1;
(statearr_29008_29074[(2)] = null);

(statearr_29008_29074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (45))){
var state_28941__$1 = state_28941;
var statearr_29009_29075 = state_28941__$1;
(statearr_29009_29075[(2)] = null);

(statearr_29009_29075[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (26))){
var inst_28854 = (state_28941[(19)]);
var inst_28862 = (state_28941[(23)]);
var inst_28857 = (state_28941[(24)]);
var inst_28858 = (state_28941[(25)]);
var inst_28860 = (state_28941[(26)]);
var inst_28877 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28879 = (function (){var all_files = inst_28854;
var res_SINGLEQUOTE_ = inst_28857;
var res = inst_28858;
var files_not_loaded = inst_28860;
var dependencies_that_loaded = inst_28862;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28862,inst_28857,inst_28858,inst_28860,inst_28877,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28878){
var map__29010 = p__28878;
var map__29010__$1 = (((((!((map__29010 == null))))?(((((map__29010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29010):map__29010);
var namespace = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28862,inst_28857,inst_28858,inst_28860,inst_28877,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28880 = cljs.core.map.call(null,inst_28879,inst_28858);
var inst_28881 = cljs.core.pr_str.call(null,inst_28880);
var inst_28882 = figwheel.client.utils.log.call(null,inst_28881);
var inst_28883 = (function (){var all_files = inst_28854;
var res_SINGLEQUOTE_ = inst_28857;
var res = inst_28858;
var files_not_loaded = inst_28860;
var dependencies_that_loaded = inst_28862;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28862,inst_28857,inst_28858,inst_28860,inst_28877,inst_28879,inst_28880,inst_28881,inst_28882,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28854,inst_28862,inst_28857,inst_28858,inst_28860,inst_28877,inst_28879,inst_28880,inst_28881,inst_28882,state_val_28942,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28884 = setTimeout(inst_28883,(10));
var state_28941__$1 = (function (){var statearr_29012 = state_28941;
(statearr_29012[(33)] = inst_28877);

(statearr_29012[(34)] = inst_28882);

return statearr_29012;
})();
var statearr_29013_29076 = state_28941__$1;
(statearr_29013_29076[(2)] = inst_28884);

(statearr_29013_29076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (16))){
var state_28941__$1 = state_28941;
var statearr_29014_29077 = state_28941__$1;
(statearr_29014_29077[(2)] = reload_dependents);

(statearr_29014_29077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (38))){
var inst_28894 = (state_28941[(16)]);
var inst_28912 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28894);
var state_28941__$1 = state_28941;
var statearr_29015_29078 = state_28941__$1;
(statearr_29015_29078[(2)] = inst_28912);

(statearr_29015_29078[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (30))){
var state_28941__$1 = state_28941;
var statearr_29016_29079 = state_28941__$1;
(statearr_29016_29079[(2)] = null);

(statearr_29016_29079[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (10))){
var inst_28814 = (state_28941[(22)]);
var inst_28816 = cljs.core.chunked_seq_QMARK_.call(null,inst_28814);
var state_28941__$1 = state_28941;
if(inst_28816){
var statearr_29017_29080 = state_28941__$1;
(statearr_29017_29080[(1)] = (13));

} else {
var statearr_29018_29081 = state_28941__$1;
(statearr_29018_29081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (18))){
var inst_28848 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
if(cljs.core.truth_(inst_28848)){
var statearr_29019_29082 = state_28941__$1;
(statearr_29019_29082[(1)] = (19));

} else {
var statearr_29020_29083 = state_28941__$1;
(statearr_29020_29083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (42))){
var state_28941__$1 = state_28941;
var statearr_29021_29084 = state_28941__$1;
(statearr_29021_29084[(2)] = null);

(statearr_29021_29084[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (37))){
var inst_28907 = (state_28941[(2)]);
var state_28941__$1 = state_28941;
var statearr_29022_29085 = state_28941__$1;
(statearr_29022_29085[(2)] = inst_28907);

(statearr_29022_29085[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28942 === (8))){
var inst_28801 = (state_28941[(8)]);
var inst_28814 = (state_28941[(22)]);
var inst_28814__$1 = cljs.core.seq.call(null,inst_28801);
var state_28941__$1 = (function (){var statearr_29023 = state_28941;
(statearr_29023[(22)] = inst_28814__$1);

return statearr_29023;
})();
if(inst_28814__$1){
var statearr_29024_29086 = state_28941__$1;
(statearr_29024_29086[(1)] = (10));

} else {
var statearr_29025_29087 = state_28941__$1;
(statearr_29025_29087[(1)] = (11));

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
}
});})(c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24956__auto__,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24957__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24957__auto____0 = (function (){
var statearr_29026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29026[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24957__auto__);

(statearr_29026[(1)] = (1));

return statearr_29026;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24957__auto____1 = (function (state_28941){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_28941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e29027){if((e29027 instanceof Object)){
var ex__24960__auto__ = e29027;
var statearr_29028_29088 = state_28941;
(statearr_29028_29088[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29089 = state_28941;
state_28941 = G__29089;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24957__auto__ = function(state_28941){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24957__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24957__auto____1.call(this,state_28941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24957__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24957__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25053__auto__ = (function (){var statearr_29029 = f__25052__auto__.call(null);
(statearr_29029[(6)] = c__25051__auto__);

return statearr_29029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto__,map__28786,map__28786__$1,opts,before_jsload,on_jsload,reload_dependents,map__28787,map__28787__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25051__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29092,link){
var map__29093 = p__29092;
var map__29093__$1 = (((((!((map__29093 == null))))?(((((map__29093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29093):map__29093);
var file = cljs.core.get.call(null,map__29093__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__29093,map__29093__$1,file){
return (function (p1__29090_SHARP_,p2__29091_SHARP_){
if(cljs.core._EQ_.call(null,p1__29090_SHARP_,p2__29091_SHARP_)){
return p1__29090_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__29093,map__29093__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29096){
var map__29097 = p__29096;
var map__29097__$1 = (((((!((map__29097 == null))))?(((((map__29097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29097):map__29097);
var match_length = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29095_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29095_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29099_SHARP_,p2__29100_SHARP_){
return cljs.core.assoc.call(null,p1__29099_SHARP_,cljs.core.get.call(null,p2__29100_SHARP_,key),p2__29100_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29101 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29101);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29101);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29102,p__29103){
var map__29104 = p__29102;
var map__29104__$1 = (((((!((map__29104 == null))))?(((((map__29104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29104):map__29104);
var on_cssload = cljs.core.get.call(null,map__29104__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29105 = p__29103;
var map__29105__$1 = (((((!((map__29105 == null))))?(((((map__29105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29105):map__29105);
var files_msg = map__29105__$1;
var files = cljs.core.get.call(null,map__29105__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1566805870802
