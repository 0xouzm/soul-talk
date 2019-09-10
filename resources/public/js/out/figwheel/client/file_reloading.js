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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34547_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34547_SHARP_));
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
var seq__34548 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34549 = null;
var count__34550 = (0);
var i__34551 = (0);
while(true){
if((i__34551 < count__34550)){
var n = cljs.core._nth.call(null,chunk__34549,i__34551);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34552 = seq__34548;
var G__34553 = chunk__34549;
var G__34554 = count__34550;
var G__34555 = (i__34551 + (1));
seq__34548 = G__34552;
chunk__34549 = G__34553;
count__34550 = G__34554;
i__34551 = G__34555;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34548);
if(temp__5720__auto__){
var seq__34548__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34548__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34548__$1);
var G__34556 = cljs.core.chunk_rest.call(null,seq__34548__$1);
var G__34557 = c__4550__auto__;
var G__34558 = cljs.core.count.call(null,c__4550__auto__);
var G__34559 = (0);
seq__34548 = G__34556;
chunk__34549 = G__34557;
count__34550 = G__34558;
i__34551 = G__34559;
continue;
} else {
var n = cljs.core.first.call(null,seq__34548__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34560 = cljs.core.next.call(null,seq__34548__$1);
var G__34561 = null;
var G__34562 = (0);
var G__34563 = (0);
seq__34548 = G__34560;
chunk__34549 = G__34561;
count__34550 = G__34562;
i__34551 = G__34563;
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
return cljs.core.some.call(null,(function (p__34564){
var vec__34565 = p__34564;
var _ = cljs.core.nth.call(null,vec__34565,(0),null);
var v = cljs.core.nth.call(null,vec__34565,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__34568){
var vec__34569 = p__34568;
var k = cljs.core.nth.call(null,vec__34569,(0),null);
var v = cljs.core.nth.call(null,vec__34569,(1),null);
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

var seq__34581_34589 = cljs.core.seq.call(null,deps);
var chunk__34582_34590 = null;
var count__34583_34591 = (0);
var i__34584_34592 = (0);
while(true){
if((i__34584_34592 < count__34583_34591)){
var dep_34593 = cljs.core._nth.call(null,chunk__34582_34590,i__34584_34592);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_34593;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34593));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34593,(depth + (1)),state);
} else {
}


var G__34594 = seq__34581_34589;
var G__34595 = chunk__34582_34590;
var G__34596 = count__34583_34591;
var G__34597 = (i__34584_34592 + (1));
seq__34581_34589 = G__34594;
chunk__34582_34590 = G__34595;
count__34583_34591 = G__34596;
i__34584_34592 = G__34597;
continue;
} else {
var temp__5720__auto___34598 = cljs.core.seq.call(null,seq__34581_34589);
if(temp__5720__auto___34598){
var seq__34581_34599__$1 = temp__5720__auto___34598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34581_34599__$1)){
var c__4550__auto___34600 = cljs.core.chunk_first.call(null,seq__34581_34599__$1);
var G__34601 = cljs.core.chunk_rest.call(null,seq__34581_34599__$1);
var G__34602 = c__4550__auto___34600;
var G__34603 = cljs.core.count.call(null,c__4550__auto___34600);
var G__34604 = (0);
seq__34581_34589 = G__34601;
chunk__34582_34590 = G__34602;
count__34583_34591 = G__34603;
i__34584_34592 = G__34604;
continue;
} else {
var dep_34605 = cljs.core.first.call(null,seq__34581_34599__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_34605;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34605));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34605,(depth + (1)),state);
} else {
}


var G__34606 = cljs.core.next.call(null,seq__34581_34599__$1);
var G__34607 = null;
var G__34608 = (0);
var G__34609 = (0);
seq__34581_34589 = G__34606;
chunk__34582_34590 = G__34607;
count__34583_34591 = G__34608;
i__34584_34592 = G__34609;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34585){
var vec__34586 = p__34585;
var seq__34587 = cljs.core.seq.call(null,vec__34586);
var first__34588 = cljs.core.first.call(null,seq__34587);
var seq__34587__$1 = cljs.core.next.call(null,seq__34587);
var x = first__34588;
var xs = seq__34587__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34586,seq__34587,first__34588,seq__34587__$1,x,xs,get_deps__$1){
return (function (p1__34572_SHARP_){
return clojure.set.difference.call(null,p1__34572_SHARP_,x);
});})(vec__34586,seq__34587,first__34588,seq__34587__$1,x,xs,get_deps__$1))
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
var seq__34610 = cljs.core.seq.call(null,provides);
var chunk__34611 = null;
var count__34612 = (0);
var i__34613 = (0);
while(true){
if((i__34613 < count__34612)){
var prov = cljs.core._nth.call(null,chunk__34611,i__34613);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34622_34630 = cljs.core.seq.call(null,requires);
var chunk__34623_34631 = null;
var count__34624_34632 = (0);
var i__34625_34633 = (0);
while(true){
if((i__34625_34633 < count__34624_34632)){
var req_34634 = cljs.core._nth.call(null,chunk__34623_34631,i__34625_34633);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34634,prov);


var G__34635 = seq__34622_34630;
var G__34636 = chunk__34623_34631;
var G__34637 = count__34624_34632;
var G__34638 = (i__34625_34633 + (1));
seq__34622_34630 = G__34635;
chunk__34623_34631 = G__34636;
count__34624_34632 = G__34637;
i__34625_34633 = G__34638;
continue;
} else {
var temp__5720__auto___34639 = cljs.core.seq.call(null,seq__34622_34630);
if(temp__5720__auto___34639){
var seq__34622_34640__$1 = temp__5720__auto___34639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34622_34640__$1)){
var c__4550__auto___34641 = cljs.core.chunk_first.call(null,seq__34622_34640__$1);
var G__34642 = cljs.core.chunk_rest.call(null,seq__34622_34640__$1);
var G__34643 = c__4550__auto___34641;
var G__34644 = cljs.core.count.call(null,c__4550__auto___34641);
var G__34645 = (0);
seq__34622_34630 = G__34642;
chunk__34623_34631 = G__34643;
count__34624_34632 = G__34644;
i__34625_34633 = G__34645;
continue;
} else {
var req_34646 = cljs.core.first.call(null,seq__34622_34640__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34646,prov);


var G__34647 = cljs.core.next.call(null,seq__34622_34640__$1);
var G__34648 = null;
var G__34649 = (0);
var G__34650 = (0);
seq__34622_34630 = G__34647;
chunk__34623_34631 = G__34648;
count__34624_34632 = G__34649;
i__34625_34633 = G__34650;
continue;
}
} else {
}
}
break;
}


var G__34651 = seq__34610;
var G__34652 = chunk__34611;
var G__34653 = count__34612;
var G__34654 = (i__34613 + (1));
seq__34610 = G__34651;
chunk__34611 = G__34652;
count__34612 = G__34653;
i__34613 = G__34654;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34610);
if(temp__5720__auto__){
var seq__34610__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34610__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34610__$1);
var G__34655 = cljs.core.chunk_rest.call(null,seq__34610__$1);
var G__34656 = c__4550__auto__;
var G__34657 = cljs.core.count.call(null,c__4550__auto__);
var G__34658 = (0);
seq__34610 = G__34655;
chunk__34611 = G__34656;
count__34612 = G__34657;
i__34613 = G__34658;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34610__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34626_34659 = cljs.core.seq.call(null,requires);
var chunk__34627_34660 = null;
var count__34628_34661 = (0);
var i__34629_34662 = (0);
while(true){
if((i__34629_34662 < count__34628_34661)){
var req_34663 = cljs.core._nth.call(null,chunk__34627_34660,i__34629_34662);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34663,prov);


var G__34664 = seq__34626_34659;
var G__34665 = chunk__34627_34660;
var G__34666 = count__34628_34661;
var G__34667 = (i__34629_34662 + (1));
seq__34626_34659 = G__34664;
chunk__34627_34660 = G__34665;
count__34628_34661 = G__34666;
i__34629_34662 = G__34667;
continue;
} else {
var temp__5720__auto___34668__$1 = cljs.core.seq.call(null,seq__34626_34659);
if(temp__5720__auto___34668__$1){
var seq__34626_34669__$1 = temp__5720__auto___34668__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34626_34669__$1)){
var c__4550__auto___34670 = cljs.core.chunk_first.call(null,seq__34626_34669__$1);
var G__34671 = cljs.core.chunk_rest.call(null,seq__34626_34669__$1);
var G__34672 = c__4550__auto___34670;
var G__34673 = cljs.core.count.call(null,c__4550__auto___34670);
var G__34674 = (0);
seq__34626_34659 = G__34671;
chunk__34627_34660 = G__34672;
count__34628_34661 = G__34673;
i__34629_34662 = G__34674;
continue;
} else {
var req_34675 = cljs.core.first.call(null,seq__34626_34669__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34675,prov);


var G__34676 = cljs.core.next.call(null,seq__34626_34669__$1);
var G__34677 = null;
var G__34678 = (0);
var G__34679 = (0);
seq__34626_34659 = G__34676;
chunk__34627_34660 = G__34677;
count__34628_34661 = G__34678;
i__34629_34662 = G__34679;
continue;
}
} else {
}
}
break;
}


var G__34680 = cljs.core.next.call(null,seq__34610__$1);
var G__34681 = null;
var G__34682 = (0);
var G__34683 = (0);
seq__34610 = G__34680;
chunk__34611 = G__34681;
count__34612 = G__34682;
i__34613 = G__34683;
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
var seq__34684_34688 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34685_34689 = null;
var count__34686_34690 = (0);
var i__34687_34691 = (0);
while(true){
if((i__34687_34691 < count__34686_34690)){
var ns_34692 = cljs.core._nth.call(null,chunk__34685_34689,i__34687_34691);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34692);


var G__34693 = seq__34684_34688;
var G__34694 = chunk__34685_34689;
var G__34695 = count__34686_34690;
var G__34696 = (i__34687_34691 + (1));
seq__34684_34688 = G__34693;
chunk__34685_34689 = G__34694;
count__34686_34690 = G__34695;
i__34687_34691 = G__34696;
continue;
} else {
var temp__5720__auto___34697 = cljs.core.seq.call(null,seq__34684_34688);
if(temp__5720__auto___34697){
var seq__34684_34698__$1 = temp__5720__auto___34697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34684_34698__$1)){
var c__4550__auto___34699 = cljs.core.chunk_first.call(null,seq__34684_34698__$1);
var G__34700 = cljs.core.chunk_rest.call(null,seq__34684_34698__$1);
var G__34701 = c__4550__auto___34699;
var G__34702 = cljs.core.count.call(null,c__4550__auto___34699);
var G__34703 = (0);
seq__34684_34688 = G__34700;
chunk__34685_34689 = G__34701;
count__34686_34690 = G__34702;
i__34687_34691 = G__34703;
continue;
} else {
var ns_34704 = cljs.core.first.call(null,seq__34684_34698__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34704);


var G__34705 = cljs.core.next.call(null,seq__34684_34698__$1);
var G__34706 = null;
var G__34707 = (0);
var G__34708 = (0);
seq__34684_34688 = G__34705;
chunk__34685_34689 = G__34706;
count__34686_34690 = G__34707;
i__34687_34691 = G__34708;
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
var G__34709__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34710__i = 0, G__34710__a = new Array(arguments.length -  0);
while (G__34710__i < G__34710__a.length) {G__34710__a[G__34710__i] = arguments[G__34710__i + 0]; ++G__34710__i;}
  args = new cljs.core.IndexedSeq(G__34710__a,0,null);
} 
return G__34709__delegate.call(this,args);};
G__34709.cljs$lang$maxFixedArity = 0;
G__34709.cljs$lang$applyTo = (function (arglist__34711){
var args = cljs.core.seq(arglist__34711);
return G__34709__delegate(args);
});
G__34709.cljs$core$IFn$_invoke$arity$variadic = G__34709__delegate;
return G__34709;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__34712_SHARP_,p2__34713_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34712_SHARP_)),p2__34713_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__34714_SHARP_,p2__34715_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34714_SHARP_),p2__34715_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34716 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34716.addCallback(((function (G__34716){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34716))
);

G__34716.addErrback(((function (G__34716){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34716))
);

return G__34716;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34717){if((e34717 instanceof Error)){
var e = e34717;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34717;

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
}catch (e34718){if((e34718 instanceof Error)){
var e = e34718;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34718;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34719 = cljs.core._EQ_;
var expr__34720 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34719.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34720))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34719.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34720))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34719.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34720))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34719,expr__34720){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34719,expr__34720))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34722,callback){
var map__34723 = p__34722;
var map__34723__$1 = (((((!((map__34723 == null))))?(((((map__34723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34723):map__34723);
var file_msg = map__34723__$1;
var request_url = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34723,map__34723__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34723,map__34723__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto__){
return (function (state_34761){
var state_val_34762 = (state_34761[(1)]);
if((state_val_34762 === (7))){
var inst_34757 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34763_34789 = state_34761__$1;
(statearr_34763_34789[(2)] = inst_34757);

(statearr_34763_34789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (1))){
var state_34761__$1 = state_34761;
var statearr_34764_34790 = state_34761__$1;
(statearr_34764_34790[(2)] = null);

(statearr_34764_34790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (4))){
var inst_34727 = (state_34761[(7)]);
var inst_34727__$1 = (state_34761[(2)]);
var state_34761__$1 = (function (){var statearr_34765 = state_34761;
(statearr_34765[(7)] = inst_34727__$1);

return statearr_34765;
})();
if(cljs.core.truth_(inst_34727__$1)){
var statearr_34766_34791 = state_34761__$1;
(statearr_34766_34791[(1)] = (5));

} else {
var statearr_34767_34792 = state_34761__$1;
(statearr_34767_34792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (15))){
var inst_34740 = (state_34761[(8)]);
var inst_34742 = (state_34761[(9)]);
var inst_34744 = inst_34742.call(null,inst_34740);
var state_34761__$1 = state_34761;
var statearr_34768_34793 = state_34761__$1;
(statearr_34768_34793[(2)] = inst_34744);

(statearr_34768_34793[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (13))){
var inst_34751 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34769_34794 = state_34761__$1;
(statearr_34769_34794[(2)] = inst_34751);

(statearr_34769_34794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (6))){
var state_34761__$1 = state_34761;
var statearr_34770_34795 = state_34761__$1;
(statearr_34770_34795[(2)] = null);

(statearr_34770_34795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (17))){
var inst_34748 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34771_34796 = state_34761__$1;
(statearr_34771_34796[(2)] = inst_34748);

(statearr_34771_34796[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (3))){
var inst_34759 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34761__$1,inst_34759);
} else {
if((state_val_34762 === (12))){
var state_34761__$1 = state_34761;
var statearr_34772_34797 = state_34761__$1;
(statearr_34772_34797[(2)] = null);

(statearr_34772_34797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (2))){
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34761__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34762 === (11))){
var inst_34732 = (state_34761[(10)]);
var inst_34738 = figwheel.client.file_reloading.blocking_load.call(null,inst_34732);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34761__$1,(14),inst_34738);
} else {
if((state_val_34762 === (9))){
var inst_34732 = (state_34761[(10)]);
var state_34761__$1 = state_34761;
if(cljs.core.truth_(inst_34732)){
var statearr_34773_34798 = state_34761__$1;
(statearr_34773_34798[(1)] = (11));

} else {
var statearr_34774_34799 = state_34761__$1;
(statearr_34774_34799[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (5))){
var inst_34727 = (state_34761[(7)]);
var inst_34733 = (state_34761[(11)]);
var inst_34732 = cljs.core.nth.call(null,inst_34727,(0),null);
var inst_34733__$1 = cljs.core.nth.call(null,inst_34727,(1),null);
var state_34761__$1 = (function (){var statearr_34775 = state_34761;
(statearr_34775[(10)] = inst_34732);

(statearr_34775[(11)] = inst_34733__$1);

return statearr_34775;
})();
if(cljs.core.truth_(inst_34733__$1)){
var statearr_34776_34800 = state_34761__$1;
(statearr_34776_34800[(1)] = (8));

} else {
var statearr_34777_34801 = state_34761__$1;
(statearr_34777_34801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (14))){
var inst_34742 = (state_34761[(9)]);
var inst_34732 = (state_34761[(10)]);
var inst_34740 = (state_34761[(2)]);
var inst_34741 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34742__$1 = cljs.core.get.call(null,inst_34741,inst_34732);
var state_34761__$1 = (function (){var statearr_34778 = state_34761;
(statearr_34778[(8)] = inst_34740);

(statearr_34778[(9)] = inst_34742__$1);

return statearr_34778;
})();
if(cljs.core.truth_(inst_34742__$1)){
var statearr_34779_34802 = state_34761__$1;
(statearr_34779_34802[(1)] = (15));

} else {
var statearr_34780_34803 = state_34761__$1;
(statearr_34780_34803[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (16))){
var inst_34740 = (state_34761[(8)]);
var inst_34746 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34740);
var state_34761__$1 = state_34761;
var statearr_34781_34804 = state_34761__$1;
(statearr_34781_34804[(2)] = inst_34746);

(statearr_34781_34804[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (10))){
var inst_34753 = (state_34761[(2)]);
var state_34761__$1 = (function (){var statearr_34782 = state_34761;
(statearr_34782[(12)] = inst_34753);

return statearr_34782;
})();
var statearr_34783_34805 = state_34761__$1;
(statearr_34783_34805[(2)] = null);

(statearr_34783_34805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (8))){
var inst_34733 = (state_34761[(11)]);
var inst_34735 = eval(inst_34733);
var state_34761__$1 = state_34761;
var statearr_34784_34806 = state_34761__$1;
(statearr_34784_34806[(2)] = inst_34735);

(statearr_34784_34806[(1)] = (10));


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
});})(c__27336__auto__))
;
return ((function (switch__27169__auto__,c__27336__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27170__auto__ = null;
var figwheel$client$file_reloading$state_machine__27170__auto____0 = (function (){
var statearr_34785 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34785[(0)] = figwheel$client$file_reloading$state_machine__27170__auto__);

(statearr_34785[(1)] = (1));

return statearr_34785;
});
var figwheel$client$file_reloading$state_machine__27170__auto____1 = (function (state_34761){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_34761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e34786){if((e34786 instanceof Object)){
var ex__27173__auto__ = e34786;
var statearr_34787_34807 = state_34761;
(statearr_34787_34807[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34808 = state_34761;
state_34761 = G__34808;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27170__auto__ = function(state_34761){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27170__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27170__auto____1.call(this,state_34761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27170__auto____0;
figwheel$client$file_reloading$state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27170__auto____1;
return figwheel$client$file_reloading$state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto__))
})();
var state__27338__auto__ = (function (){var statearr_34788 = f__27337__auto__.call(null);
(statearr_34788[(6)] = c__27336__auto__);

return statearr_34788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__))
);

return c__27336__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34810 = arguments.length;
switch (G__34810) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34812,callback){
var map__34813 = p__34812;
var map__34813__$1 = (((((!((map__34813 == null))))?(((((map__34813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34813):map__34813);
var file_msg = map__34813__$1;
var namespace = cljs.core.get.call(null,map__34813__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34813,map__34813__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34813,map__34813__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34815){
var map__34816 = p__34815;
var map__34816__$1 = (((((!((map__34816 == null))))?(((((map__34816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34816):map__34816);
var file_msg = map__34816__$1;
var namespace = cljs.core.get.call(null,map__34816__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34818){
var map__34819 = p__34818;
var map__34819__$1 = (((((!((map__34819 == null))))?(((((map__34819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34819):map__34819);
var file_msg = map__34819__$1;
var namespace = cljs.core.get.call(null,map__34819__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34821,callback){
var map__34822 = p__34821;
var map__34822__$1 = (((((!((map__34822 == null))))?(((((map__34822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34822):map__34822);
var file_msg = map__34822__$1;
var request_url = cljs.core.get.call(null,map__34822__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34822__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27336__auto___34872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___34872,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___34872,out){
return (function (state_34857){
var state_val_34858 = (state_34857[(1)]);
if((state_val_34858 === (1))){
var inst_34831 = cljs.core.seq.call(null,files);
var inst_34832 = cljs.core.first.call(null,inst_34831);
var inst_34833 = cljs.core.next.call(null,inst_34831);
var inst_34834 = files;
var state_34857__$1 = (function (){var statearr_34859 = state_34857;
(statearr_34859[(7)] = inst_34833);

(statearr_34859[(8)] = inst_34834);

(statearr_34859[(9)] = inst_34832);

return statearr_34859;
})();
var statearr_34860_34873 = state_34857__$1;
(statearr_34860_34873[(2)] = null);

(statearr_34860_34873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34858 === (2))){
var inst_34840 = (state_34857[(10)]);
var inst_34834 = (state_34857[(8)]);
var inst_34839 = cljs.core.seq.call(null,inst_34834);
var inst_34840__$1 = cljs.core.first.call(null,inst_34839);
var inst_34841 = cljs.core.next.call(null,inst_34839);
var inst_34842 = (inst_34840__$1 == null);
var inst_34843 = cljs.core.not.call(null,inst_34842);
var state_34857__$1 = (function (){var statearr_34861 = state_34857;
(statearr_34861[(10)] = inst_34840__$1);

(statearr_34861[(11)] = inst_34841);

return statearr_34861;
})();
if(inst_34843){
var statearr_34862_34874 = state_34857__$1;
(statearr_34862_34874[(1)] = (4));

} else {
var statearr_34863_34875 = state_34857__$1;
(statearr_34863_34875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34858 === (3))){
var inst_34855 = (state_34857[(2)]);
var state_34857__$1 = state_34857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34857__$1,inst_34855);
} else {
if((state_val_34858 === (4))){
var inst_34840 = (state_34857[(10)]);
var inst_34845 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34840);
var state_34857__$1 = state_34857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34857__$1,(7),inst_34845);
} else {
if((state_val_34858 === (5))){
var inst_34851 = cljs.core.async.close_BANG_.call(null,out);
var state_34857__$1 = state_34857;
var statearr_34864_34876 = state_34857__$1;
(statearr_34864_34876[(2)] = inst_34851);

(statearr_34864_34876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34858 === (6))){
var inst_34853 = (state_34857[(2)]);
var state_34857__$1 = state_34857;
var statearr_34865_34877 = state_34857__$1;
(statearr_34865_34877[(2)] = inst_34853);

(statearr_34865_34877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34858 === (7))){
var inst_34841 = (state_34857[(11)]);
var inst_34847 = (state_34857[(2)]);
var inst_34848 = cljs.core.async.put_BANG_.call(null,out,inst_34847);
var inst_34834 = inst_34841;
var state_34857__$1 = (function (){var statearr_34866 = state_34857;
(statearr_34866[(12)] = inst_34848);

(statearr_34866[(8)] = inst_34834);

return statearr_34866;
})();
var statearr_34867_34878 = state_34857__$1;
(statearr_34867_34878[(2)] = null);

(statearr_34867_34878[(1)] = (2));


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
});})(c__27336__auto___34872,out))
;
return ((function (switch__27169__auto__,c__27336__auto___34872,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27170__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27170__auto____0 = (function (){
var statearr_34868 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34868[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27170__auto__);

(statearr_34868[(1)] = (1));

return statearr_34868;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27170__auto____1 = (function (state_34857){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_34857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e34869){if((e34869 instanceof Object)){
var ex__27173__auto__ = e34869;
var statearr_34870_34879 = state_34857;
(statearr_34870_34879[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34880 = state_34857;
state_34857 = G__34880;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27170__auto__ = function(state_34857){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27170__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27170__auto____1.call(this,state_34857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27170__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27170__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___34872,out))
})();
var state__27338__auto__ = (function (){var statearr_34871 = f__27337__auto__.call(null);
(statearr_34871[(6)] = c__27336__auto___34872);

return statearr_34871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___34872,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34881,opts){
var map__34882 = p__34881;
var map__34882__$1 = (((((!((map__34882 == null))))?(((((map__34882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34882):map__34882);
var eval_body = cljs.core.get.call(null,map__34882__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34882__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34884){var e = e34884;
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
return (function (p1__34885_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34885_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34886){
var vec__34887 = p__34886;
var k = cljs.core.nth.call(null,vec__34887,(0),null);
var v = cljs.core.nth.call(null,vec__34887,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34890){
var vec__34891 = p__34890;
var k = cljs.core.nth.call(null,vec__34891,(0),null);
var v = cljs.core.nth.call(null,vec__34891,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34897,p__34898){
var map__34899 = p__34897;
var map__34899__$1 = (((((!((map__34899 == null))))?(((((map__34899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34899):map__34899);
var opts = map__34899__$1;
var before_jsload = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34900 = p__34898;
var map__34900__$1 = (((((!((map__34900 == null))))?(((((map__34900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34900):map__34900);
var msg = map__34900__$1;
var files = cljs.core.get.call(null,map__34900__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34900__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34900__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35054){
var state_val_35055 = (state_35054[(1)]);
if((state_val_35055 === (7))){
var inst_34914 = (state_35054[(7)]);
var inst_34915 = (state_35054[(8)]);
var inst_34916 = (state_35054[(9)]);
var inst_34917 = (state_35054[(10)]);
var inst_34922 = cljs.core._nth.call(null,inst_34915,inst_34917);
var inst_34923 = figwheel.client.file_reloading.eval_body.call(null,inst_34922,opts);
var inst_34924 = (inst_34917 + (1));
var tmp35056 = inst_34914;
var tmp35057 = inst_34915;
var tmp35058 = inst_34916;
var inst_34914__$1 = tmp35056;
var inst_34915__$1 = tmp35057;
var inst_34916__$1 = tmp35058;
var inst_34917__$1 = inst_34924;
var state_35054__$1 = (function (){var statearr_35059 = state_35054;
(statearr_35059[(11)] = inst_34923);

(statearr_35059[(7)] = inst_34914__$1);

(statearr_35059[(8)] = inst_34915__$1);

(statearr_35059[(9)] = inst_34916__$1);

(statearr_35059[(10)] = inst_34917__$1);

return statearr_35059;
})();
var statearr_35060_35143 = state_35054__$1;
(statearr_35060_35143[(2)] = null);

(statearr_35060_35143[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (20))){
var inst_34957 = (state_35054[(12)]);
var inst_34965 = figwheel.client.file_reloading.sort_files.call(null,inst_34957);
var state_35054__$1 = state_35054;
var statearr_35061_35144 = state_35054__$1;
(statearr_35061_35144[(2)] = inst_34965);

(statearr_35061_35144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (27))){
var state_35054__$1 = state_35054;
var statearr_35062_35145 = state_35054__$1;
(statearr_35062_35145[(2)] = null);

(statearr_35062_35145[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (1))){
var inst_34906 = (state_35054[(13)]);
var inst_34903 = before_jsload.call(null,files);
var inst_34904 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34905 = (function (){return ((function (inst_34906,inst_34903,inst_34904,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34894_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34894_SHARP_);
});
;})(inst_34906,inst_34903,inst_34904,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34906__$1 = cljs.core.filter.call(null,inst_34905,files);
var inst_34907 = cljs.core.not_empty.call(null,inst_34906__$1);
var state_35054__$1 = (function (){var statearr_35063 = state_35054;
(statearr_35063[(13)] = inst_34906__$1);

(statearr_35063[(14)] = inst_34903);

(statearr_35063[(15)] = inst_34904);

return statearr_35063;
})();
if(cljs.core.truth_(inst_34907)){
var statearr_35064_35146 = state_35054__$1;
(statearr_35064_35146[(1)] = (2));

} else {
var statearr_35065_35147 = state_35054__$1;
(statearr_35065_35147[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (24))){
var state_35054__$1 = state_35054;
var statearr_35066_35148 = state_35054__$1;
(statearr_35066_35148[(2)] = null);

(statearr_35066_35148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (39))){
var inst_35007 = (state_35054[(16)]);
var state_35054__$1 = state_35054;
var statearr_35067_35149 = state_35054__$1;
(statearr_35067_35149[(2)] = inst_35007);

(statearr_35067_35149[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (46))){
var inst_35049 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35068_35150 = state_35054__$1;
(statearr_35068_35150[(2)] = inst_35049);

(statearr_35068_35150[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (4))){
var inst_34951 = (state_35054[(2)]);
var inst_34952 = cljs.core.List.EMPTY;
var inst_34953 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34952);
var inst_34954 = (function (){return ((function (inst_34951,inst_34952,inst_34953,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34895_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34895_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34895_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34895_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_34951,inst_34952,inst_34953,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34955 = cljs.core.filter.call(null,inst_34954,files);
var inst_34956 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34957 = cljs.core.concat.call(null,inst_34955,inst_34956);
var state_35054__$1 = (function (){var statearr_35069 = state_35054;
(statearr_35069[(17)] = inst_34951);

(statearr_35069[(12)] = inst_34957);

(statearr_35069[(18)] = inst_34953);

return statearr_35069;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35070_35151 = state_35054__$1;
(statearr_35070_35151[(1)] = (16));

} else {
var statearr_35071_35152 = state_35054__$1;
(statearr_35071_35152[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (15))){
var inst_34941 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35072_35153 = state_35054__$1;
(statearr_35072_35153[(2)] = inst_34941);

(statearr_35072_35153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (21))){
var inst_34967 = (state_35054[(19)]);
var inst_34967__$1 = (state_35054[(2)]);
var inst_34968 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34967__$1);
var state_35054__$1 = (function (){var statearr_35073 = state_35054;
(statearr_35073[(19)] = inst_34967__$1);

return statearr_35073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35054__$1,(22),inst_34968);
} else {
if((state_val_35055 === (31))){
var inst_35052 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35054__$1,inst_35052);
} else {
if((state_val_35055 === (32))){
var inst_35007 = (state_35054[(16)]);
var inst_35012 = inst_35007.cljs$lang$protocol_mask$partition0$;
var inst_35013 = (inst_35012 & (64));
var inst_35014 = inst_35007.cljs$core$ISeq$;
var inst_35015 = (cljs.core.PROTOCOL_SENTINEL === inst_35014);
var inst_35016 = ((inst_35013) || (inst_35015));
var state_35054__$1 = state_35054;
if(cljs.core.truth_(inst_35016)){
var statearr_35074_35154 = state_35054__$1;
(statearr_35074_35154[(1)] = (35));

} else {
var statearr_35075_35155 = state_35054__$1;
(statearr_35075_35155[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (40))){
var inst_35029 = (state_35054[(20)]);
var inst_35028 = (state_35054[(2)]);
var inst_35029__$1 = cljs.core.get.call(null,inst_35028,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35030 = cljs.core.get.call(null,inst_35028,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35031 = cljs.core.not_empty.call(null,inst_35029__$1);
var state_35054__$1 = (function (){var statearr_35076 = state_35054;
(statearr_35076[(20)] = inst_35029__$1);

(statearr_35076[(21)] = inst_35030);

return statearr_35076;
})();
if(cljs.core.truth_(inst_35031)){
var statearr_35077_35156 = state_35054__$1;
(statearr_35077_35156[(1)] = (41));

} else {
var statearr_35078_35157 = state_35054__$1;
(statearr_35078_35157[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (33))){
var state_35054__$1 = state_35054;
var statearr_35079_35158 = state_35054__$1;
(statearr_35079_35158[(2)] = false);

(statearr_35079_35158[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (13))){
var inst_34927 = (state_35054[(22)]);
var inst_34931 = cljs.core.chunk_first.call(null,inst_34927);
var inst_34932 = cljs.core.chunk_rest.call(null,inst_34927);
var inst_34933 = cljs.core.count.call(null,inst_34931);
var inst_34914 = inst_34932;
var inst_34915 = inst_34931;
var inst_34916 = inst_34933;
var inst_34917 = (0);
var state_35054__$1 = (function (){var statearr_35080 = state_35054;
(statearr_35080[(7)] = inst_34914);

(statearr_35080[(8)] = inst_34915);

(statearr_35080[(9)] = inst_34916);

(statearr_35080[(10)] = inst_34917);

return statearr_35080;
})();
var statearr_35081_35159 = state_35054__$1;
(statearr_35081_35159[(2)] = null);

(statearr_35081_35159[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (22))){
var inst_34971 = (state_35054[(23)]);
var inst_34975 = (state_35054[(24)]);
var inst_34970 = (state_35054[(25)]);
var inst_34967 = (state_35054[(19)]);
var inst_34970__$1 = (state_35054[(2)]);
var inst_34971__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34970__$1);
var inst_34972 = (function (){var all_files = inst_34967;
var res_SINGLEQUOTE_ = inst_34970__$1;
var res = inst_34971__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34971,inst_34975,inst_34970,inst_34967,inst_34970__$1,inst_34971__$1,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34896_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34896_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34971,inst_34975,inst_34970,inst_34967,inst_34970__$1,inst_34971__$1,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34973 = cljs.core.filter.call(null,inst_34972,inst_34970__$1);
var inst_34974 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34975__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34974);
var inst_34976 = cljs.core.not_empty.call(null,inst_34975__$1);
var state_35054__$1 = (function (){var statearr_35082 = state_35054;
(statearr_35082[(23)] = inst_34971__$1);

(statearr_35082[(24)] = inst_34975__$1);

(statearr_35082[(26)] = inst_34973);

(statearr_35082[(25)] = inst_34970__$1);

return statearr_35082;
})();
if(cljs.core.truth_(inst_34976)){
var statearr_35083_35160 = state_35054__$1;
(statearr_35083_35160[(1)] = (23));

} else {
var statearr_35084_35161 = state_35054__$1;
(statearr_35084_35161[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (36))){
var state_35054__$1 = state_35054;
var statearr_35085_35162 = state_35054__$1;
(statearr_35085_35162[(2)] = false);

(statearr_35085_35162[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (41))){
var inst_35029 = (state_35054[(20)]);
var inst_35033 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35034 = cljs.core.map.call(null,inst_35033,inst_35029);
var inst_35035 = cljs.core.pr_str.call(null,inst_35034);
var inst_35036 = ["figwheel-no-load meta-data: ",inst_35035].join('');
var inst_35037 = figwheel.client.utils.log.call(null,inst_35036);
var state_35054__$1 = state_35054;
var statearr_35086_35163 = state_35054__$1;
(statearr_35086_35163[(2)] = inst_35037);

(statearr_35086_35163[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (43))){
var inst_35030 = (state_35054[(21)]);
var inst_35040 = (state_35054[(2)]);
var inst_35041 = cljs.core.not_empty.call(null,inst_35030);
var state_35054__$1 = (function (){var statearr_35087 = state_35054;
(statearr_35087[(27)] = inst_35040);

return statearr_35087;
})();
if(cljs.core.truth_(inst_35041)){
var statearr_35088_35164 = state_35054__$1;
(statearr_35088_35164[(1)] = (44));

} else {
var statearr_35089_35165 = state_35054__$1;
(statearr_35089_35165[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (29))){
var inst_34971 = (state_35054[(23)]);
var inst_34975 = (state_35054[(24)]);
var inst_35007 = (state_35054[(16)]);
var inst_34973 = (state_35054[(26)]);
var inst_34970 = (state_35054[(25)]);
var inst_34967 = (state_35054[(19)]);
var inst_35003 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35006 = (function (){var all_files = inst_34967;
var res_SINGLEQUOTE_ = inst_34970;
var res = inst_34971;
var files_not_loaded = inst_34973;
var dependencies_that_loaded = inst_34975;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34975,inst_35007,inst_34973,inst_34970,inst_34967,inst_35003,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35005){
var map__35090 = p__35005;
var map__35090__$1 = (((((!((map__35090 == null))))?(((((map__35090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35090):map__35090);
var namespace = cljs.core.get.call(null,map__35090__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34975,inst_35007,inst_34973,inst_34970,inst_34967,inst_35003,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35007__$1 = cljs.core.group_by.call(null,inst_35006,inst_34973);
var inst_35009 = (inst_35007__$1 == null);
var inst_35010 = cljs.core.not.call(null,inst_35009);
var state_35054__$1 = (function (){var statearr_35092 = state_35054;
(statearr_35092[(28)] = inst_35003);

(statearr_35092[(16)] = inst_35007__$1);

return statearr_35092;
})();
if(inst_35010){
var statearr_35093_35166 = state_35054__$1;
(statearr_35093_35166[(1)] = (32));

} else {
var statearr_35094_35167 = state_35054__$1;
(statearr_35094_35167[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (44))){
var inst_35030 = (state_35054[(21)]);
var inst_35043 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35030);
var inst_35044 = cljs.core.pr_str.call(null,inst_35043);
var inst_35045 = ["not required: ",inst_35044].join('');
var inst_35046 = figwheel.client.utils.log.call(null,inst_35045);
var state_35054__$1 = state_35054;
var statearr_35095_35168 = state_35054__$1;
(statearr_35095_35168[(2)] = inst_35046);

(statearr_35095_35168[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (6))){
var inst_34948 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35096_35169 = state_35054__$1;
(statearr_35096_35169[(2)] = inst_34948);

(statearr_35096_35169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (28))){
var inst_34973 = (state_35054[(26)]);
var inst_35000 = (state_35054[(2)]);
var inst_35001 = cljs.core.not_empty.call(null,inst_34973);
var state_35054__$1 = (function (){var statearr_35097 = state_35054;
(statearr_35097[(29)] = inst_35000);

return statearr_35097;
})();
if(cljs.core.truth_(inst_35001)){
var statearr_35098_35170 = state_35054__$1;
(statearr_35098_35170[(1)] = (29));

} else {
var statearr_35099_35171 = state_35054__$1;
(statearr_35099_35171[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (25))){
var inst_34971 = (state_35054[(23)]);
var inst_34987 = (state_35054[(2)]);
var inst_34988 = cljs.core.not_empty.call(null,inst_34971);
var state_35054__$1 = (function (){var statearr_35100 = state_35054;
(statearr_35100[(30)] = inst_34987);

return statearr_35100;
})();
if(cljs.core.truth_(inst_34988)){
var statearr_35101_35172 = state_35054__$1;
(statearr_35101_35172[(1)] = (26));

} else {
var statearr_35102_35173 = state_35054__$1;
(statearr_35102_35173[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (34))){
var inst_35023 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
if(cljs.core.truth_(inst_35023)){
var statearr_35103_35174 = state_35054__$1;
(statearr_35103_35174[(1)] = (38));

} else {
var statearr_35104_35175 = state_35054__$1;
(statearr_35104_35175[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (17))){
var state_35054__$1 = state_35054;
var statearr_35105_35176 = state_35054__$1;
(statearr_35105_35176[(2)] = recompile_dependents);

(statearr_35105_35176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (3))){
var state_35054__$1 = state_35054;
var statearr_35106_35177 = state_35054__$1;
(statearr_35106_35177[(2)] = null);

(statearr_35106_35177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (12))){
var inst_34944 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35107_35178 = state_35054__$1;
(statearr_35107_35178[(2)] = inst_34944);

(statearr_35107_35178[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (2))){
var inst_34906 = (state_35054[(13)]);
var inst_34913 = cljs.core.seq.call(null,inst_34906);
var inst_34914 = inst_34913;
var inst_34915 = null;
var inst_34916 = (0);
var inst_34917 = (0);
var state_35054__$1 = (function (){var statearr_35108 = state_35054;
(statearr_35108[(7)] = inst_34914);

(statearr_35108[(8)] = inst_34915);

(statearr_35108[(9)] = inst_34916);

(statearr_35108[(10)] = inst_34917);

return statearr_35108;
})();
var statearr_35109_35179 = state_35054__$1;
(statearr_35109_35179[(2)] = null);

(statearr_35109_35179[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (23))){
var inst_34971 = (state_35054[(23)]);
var inst_34975 = (state_35054[(24)]);
var inst_34973 = (state_35054[(26)]);
var inst_34970 = (state_35054[(25)]);
var inst_34967 = (state_35054[(19)]);
var inst_34978 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34980 = (function (){var all_files = inst_34967;
var res_SINGLEQUOTE_ = inst_34970;
var res = inst_34971;
var files_not_loaded = inst_34973;
var dependencies_that_loaded = inst_34975;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34975,inst_34973,inst_34970,inst_34967,inst_34978,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34979){
var map__35110 = p__34979;
var map__35110__$1 = (((((!((map__35110 == null))))?(((((map__35110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35110):map__35110);
var request_url = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34975,inst_34973,inst_34970,inst_34967,inst_34978,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34981 = cljs.core.reverse.call(null,inst_34975);
var inst_34982 = cljs.core.map.call(null,inst_34980,inst_34981);
var inst_34983 = cljs.core.pr_str.call(null,inst_34982);
var inst_34984 = figwheel.client.utils.log.call(null,inst_34983);
var state_35054__$1 = (function (){var statearr_35112 = state_35054;
(statearr_35112[(31)] = inst_34978);

return statearr_35112;
})();
var statearr_35113_35180 = state_35054__$1;
(statearr_35113_35180[(2)] = inst_34984);

(statearr_35113_35180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (35))){
var state_35054__$1 = state_35054;
var statearr_35114_35181 = state_35054__$1;
(statearr_35114_35181[(2)] = true);

(statearr_35114_35181[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (19))){
var inst_34957 = (state_35054[(12)]);
var inst_34963 = figwheel.client.file_reloading.expand_files.call(null,inst_34957);
var state_35054__$1 = state_35054;
var statearr_35115_35182 = state_35054__$1;
(statearr_35115_35182[(2)] = inst_34963);

(statearr_35115_35182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (11))){
var state_35054__$1 = state_35054;
var statearr_35116_35183 = state_35054__$1;
(statearr_35116_35183[(2)] = null);

(statearr_35116_35183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (9))){
var inst_34946 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35117_35184 = state_35054__$1;
(statearr_35117_35184[(2)] = inst_34946);

(statearr_35117_35184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (5))){
var inst_34916 = (state_35054[(9)]);
var inst_34917 = (state_35054[(10)]);
var inst_34919 = (inst_34917 < inst_34916);
var inst_34920 = inst_34919;
var state_35054__$1 = state_35054;
if(cljs.core.truth_(inst_34920)){
var statearr_35118_35185 = state_35054__$1;
(statearr_35118_35185[(1)] = (7));

} else {
var statearr_35119_35186 = state_35054__$1;
(statearr_35119_35186[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (14))){
var inst_34927 = (state_35054[(22)]);
var inst_34936 = cljs.core.first.call(null,inst_34927);
var inst_34937 = figwheel.client.file_reloading.eval_body.call(null,inst_34936,opts);
var inst_34938 = cljs.core.next.call(null,inst_34927);
var inst_34914 = inst_34938;
var inst_34915 = null;
var inst_34916 = (0);
var inst_34917 = (0);
var state_35054__$1 = (function (){var statearr_35120 = state_35054;
(statearr_35120[(7)] = inst_34914);

(statearr_35120[(32)] = inst_34937);

(statearr_35120[(8)] = inst_34915);

(statearr_35120[(9)] = inst_34916);

(statearr_35120[(10)] = inst_34917);

return statearr_35120;
})();
var statearr_35121_35187 = state_35054__$1;
(statearr_35121_35187[(2)] = null);

(statearr_35121_35187[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (45))){
var state_35054__$1 = state_35054;
var statearr_35122_35188 = state_35054__$1;
(statearr_35122_35188[(2)] = null);

(statearr_35122_35188[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (26))){
var inst_34971 = (state_35054[(23)]);
var inst_34975 = (state_35054[(24)]);
var inst_34973 = (state_35054[(26)]);
var inst_34970 = (state_35054[(25)]);
var inst_34967 = (state_35054[(19)]);
var inst_34990 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34992 = (function (){var all_files = inst_34967;
var res_SINGLEQUOTE_ = inst_34970;
var res = inst_34971;
var files_not_loaded = inst_34973;
var dependencies_that_loaded = inst_34975;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34975,inst_34973,inst_34970,inst_34967,inst_34990,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34991){
var map__35123 = p__34991;
var map__35123__$1 = (((((!((map__35123 == null))))?(((((map__35123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35123):map__35123);
var namespace = cljs.core.get.call(null,map__35123__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35123__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34975,inst_34973,inst_34970,inst_34967,inst_34990,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34993 = cljs.core.map.call(null,inst_34992,inst_34971);
var inst_34994 = cljs.core.pr_str.call(null,inst_34993);
var inst_34995 = figwheel.client.utils.log.call(null,inst_34994);
var inst_34996 = (function (){var all_files = inst_34967;
var res_SINGLEQUOTE_ = inst_34970;
var res = inst_34971;
var files_not_loaded = inst_34973;
var dependencies_that_loaded = inst_34975;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34975,inst_34973,inst_34970,inst_34967,inst_34990,inst_34992,inst_34993,inst_34994,inst_34995,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34971,inst_34975,inst_34973,inst_34970,inst_34967,inst_34990,inst_34992,inst_34993,inst_34994,inst_34995,state_val_35055,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34997 = setTimeout(inst_34996,(10));
var state_35054__$1 = (function (){var statearr_35125 = state_35054;
(statearr_35125[(33)] = inst_34995);

(statearr_35125[(34)] = inst_34990);

return statearr_35125;
})();
var statearr_35126_35189 = state_35054__$1;
(statearr_35126_35189[(2)] = inst_34997);

(statearr_35126_35189[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (16))){
var state_35054__$1 = state_35054;
var statearr_35127_35190 = state_35054__$1;
(statearr_35127_35190[(2)] = reload_dependents);

(statearr_35127_35190[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (38))){
var inst_35007 = (state_35054[(16)]);
var inst_35025 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35007);
var state_35054__$1 = state_35054;
var statearr_35128_35191 = state_35054__$1;
(statearr_35128_35191[(2)] = inst_35025);

(statearr_35128_35191[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (30))){
var state_35054__$1 = state_35054;
var statearr_35129_35192 = state_35054__$1;
(statearr_35129_35192[(2)] = null);

(statearr_35129_35192[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (10))){
var inst_34927 = (state_35054[(22)]);
var inst_34929 = cljs.core.chunked_seq_QMARK_.call(null,inst_34927);
var state_35054__$1 = state_35054;
if(inst_34929){
var statearr_35130_35193 = state_35054__$1;
(statearr_35130_35193[(1)] = (13));

} else {
var statearr_35131_35194 = state_35054__$1;
(statearr_35131_35194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (18))){
var inst_34961 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
if(cljs.core.truth_(inst_34961)){
var statearr_35132_35195 = state_35054__$1;
(statearr_35132_35195[(1)] = (19));

} else {
var statearr_35133_35196 = state_35054__$1;
(statearr_35133_35196[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (42))){
var state_35054__$1 = state_35054;
var statearr_35134_35197 = state_35054__$1;
(statearr_35134_35197[(2)] = null);

(statearr_35134_35197[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (37))){
var inst_35020 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35135_35198 = state_35054__$1;
(statearr_35135_35198[(2)] = inst_35020);

(statearr_35135_35198[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (8))){
var inst_34927 = (state_35054[(22)]);
var inst_34914 = (state_35054[(7)]);
var inst_34927__$1 = cljs.core.seq.call(null,inst_34914);
var state_35054__$1 = (function (){var statearr_35136 = state_35054;
(statearr_35136[(22)] = inst_34927__$1);

return statearr_35136;
})();
if(inst_34927__$1){
var statearr_35137_35199 = state_35054__$1;
(statearr_35137_35199[(1)] = (10));

} else {
var statearr_35138_35200 = state_35054__$1;
(statearr_35138_35200[(1)] = (11));

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
});})(c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27169__auto__,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27170__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27170__auto____0 = (function (){
var statearr_35139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35139[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27170__auto__);

(statearr_35139[(1)] = (1));

return statearr_35139;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27170__auto____1 = (function (state_35054){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_35054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e35140){if((e35140 instanceof Object)){
var ex__27173__auto__ = e35140;
var statearr_35141_35201 = state_35054;
(statearr_35141_35201[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35202 = state_35054;
state_35054 = G__35202;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27170__auto__ = function(state_35054){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27170__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27170__auto____1.call(this,state_35054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27170__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27170__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27338__auto__ = (function (){var statearr_35142 = f__27337__auto__.call(null);
(statearr_35142[(6)] = c__27336__auto__);

return statearr_35142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__,map__34899,map__34899__$1,opts,before_jsload,on_jsload,reload_dependents,map__34900,map__34900__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27336__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35205,link){
var map__35206 = p__35205;
var map__35206__$1 = (((((!((map__35206 == null))))?(((((map__35206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35206):map__35206);
var file = cljs.core.get.call(null,map__35206__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__35206,map__35206__$1,file){
return (function (p1__35203_SHARP_,p2__35204_SHARP_){
if(cljs.core._EQ_.call(null,p1__35203_SHARP_,p2__35204_SHARP_)){
return p1__35203_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__35206,map__35206__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35209){
var map__35210 = p__35209;
var map__35210__$1 = (((((!((map__35210 == null))))?(((((map__35210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35210):map__35210);
var match_length = cljs.core.get.call(null,map__35210__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35210__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35208_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35208_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35212_SHARP_,p2__35213_SHARP_){
return cljs.core.assoc.call(null,p1__35212_SHARP_,cljs.core.get.call(null,p2__35213_SHARP_,key),p2__35213_SHARP_);
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
var loaded_f_datas_35214 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35214);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35214);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35215,p__35216){
var map__35217 = p__35215;
var map__35217__$1 = (((((!((map__35217 == null))))?(((((map__35217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35217):map__35217);
var on_cssload = cljs.core.get.call(null,map__35217__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35218 = p__35216;
var map__35218__$1 = (((((!((map__35218 == null))))?(((((map__35218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35218):map__35218);
var files_msg = map__35218__$1;
var files = cljs.core.get.call(null,map__35218__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1568097128980
