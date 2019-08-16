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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26964_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26964_SHARP_));
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
var seq__26965 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26966 = null;
var count__26967 = (0);
var i__26968 = (0);
while(true){
if((i__26968 < count__26967)){
var n = cljs.core._nth.call(null,chunk__26966,i__26968);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26969 = seq__26965;
var G__26970 = chunk__26966;
var G__26971 = count__26967;
var G__26972 = (i__26968 + (1));
seq__26965 = G__26969;
chunk__26966 = G__26970;
count__26967 = G__26971;
i__26968 = G__26972;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26965);
if(temp__5720__auto__){
var seq__26965__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26965__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26965__$1);
var G__26973 = cljs.core.chunk_rest.call(null,seq__26965__$1);
var G__26974 = c__4550__auto__;
var G__26975 = cljs.core.count.call(null,c__4550__auto__);
var G__26976 = (0);
seq__26965 = G__26973;
chunk__26966 = G__26974;
count__26967 = G__26975;
i__26968 = G__26976;
continue;
} else {
var n = cljs.core.first.call(null,seq__26965__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26977 = cljs.core.next.call(null,seq__26965__$1);
var G__26978 = null;
var G__26979 = (0);
var G__26980 = (0);
seq__26965 = G__26977;
chunk__26966 = G__26978;
count__26967 = G__26979;
i__26968 = G__26980;
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
return cljs.core.some.call(null,(function (p__26981){
var vec__26982 = p__26981;
var _ = cljs.core.nth.call(null,vec__26982,(0),null);
var v = cljs.core.nth.call(null,vec__26982,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__26985){
var vec__26986 = p__26985;
var k = cljs.core.nth.call(null,vec__26986,(0),null);
var v = cljs.core.nth.call(null,vec__26986,(1),null);
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

var seq__26998_27006 = cljs.core.seq.call(null,deps);
var chunk__26999_27007 = null;
var count__27000_27008 = (0);
var i__27001_27009 = (0);
while(true){
if((i__27001_27009 < count__27000_27008)){
var dep_27010 = cljs.core._nth.call(null,chunk__26999_27007,i__27001_27009);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27010;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27010));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27010,(depth + (1)),state);
} else {
}


var G__27011 = seq__26998_27006;
var G__27012 = chunk__26999_27007;
var G__27013 = count__27000_27008;
var G__27014 = (i__27001_27009 + (1));
seq__26998_27006 = G__27011;
chunk__26999_27007 = G__27012;
count__27000_27008 = G__27013;
i__27001_27009 = G__27014;
continue;
} else {
var temp__5720__auto___27015 = cljs.core.seq.call(null,seq__26998_27006);
if(temp__5720__auto___27015){
var seq__26998_27016__$1 = temp__5720__auto___27015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26998_27016__$1)){
var c__4550__auto___27017 = cljs.core.chunk_first.call(null,seq__26998_27016__$1);
var G__27018 = cljs.core.chunk_rest.call(null,seq__26998_27016__$1);
var G__27019 = c__4550__auto___27017;
var G__27020 = cljs.core.count.call(null,c__4550__auto___27017);
var G__27021 = (0);
seq__26998_27006 = G__27018;
chunk__26999_27007 = G__27019;
count__27000_27008 = G__27020;
i__27001_27009 = G__27021;
continue;
} else {
var dep_27022 = cljs.core.first.call(null,seq__26998_27016__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27022;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27022));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27022,(depth + (1)),state);
} else {
}


var G__27023 = cljs.core.next.call(null,seq__26998_27016__$1);
var G__27024 = null;
var G__27025 = (0);
var G__27026 = (0);
seq__26998_27006 = G__27023;
chunk__26999_27007 = G__27024;
count__27000_27008 = G__27025;
i__27001_27009 = G__27026;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27002){
var vec__27003 = p__27002;
var seq__27004 = cljs.core.seq.call(null,vec__27003);
var first__27005 = cljs.core.first.call(null,seq__27004);
var seq__27004__$1 = cljs.core.next.call(null,seq__27004);
var x = first__27005;
var xs = seq__27004__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27003,seq__27004,first__27005,seq__27004__$1,x,xs,get_deps__$1){
return (function (p1__26989_SHARP_){
return clojure.set.difference.call(null,p1__26989_SHARP_,x);
});})(vec__27003,seq__27004,first__27005,seq__27004__$1,x,xs,get_deps__$1))
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
var seq__27027 = cljs.core.seq.call(null,provides);
var chunk__27028 = null;
var count__27029 = (0);
var i__27030 = (0);
while(true){
if((i__27030 < count__27029)){
var prov = cljs.core._nth.call(null,chunk__27028,i__27030);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27039_27047 = cljs.core.seq.call(null,requires);
var chunk__27040_27048 = null;
var count__27041_27049 = (0);
var i__27042_27050 = (0);
while(true){
if((i__27042_27050 < count__27041_27049)){
var req_27051 = cljs.core._nth.call(null,chunk__27040_27048,i__27042_27050);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27051,prov);


var G__27052 = seq__27039_27047;
var G__27053 = chunk__27040_27048;
var G__27054 = count__27041_27049;
var G__27055 = (i__27042_27050 + (1));
seq__27039_27047 = G__27052;
chunk__27040_27048 = G__27053;
count__27041_27049 = G__27054;
i__27042_27050 = G__27055;
continue;
} else {
var temp__5720__auto___27056 = cljs.core.seq.call(null,seq__27039_27047);
if(temp__5720__auto___27056){
var seq__27039_27057__$1 = temp__5720__auto___27056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27039_27057__$1)){
var c__4550__auto___27058 = cljs.core.chunk_first.call(null,seq__27039_27057__$1);
var G__27059 = cljs.core.chunk_rest.call(null,seq__27039_27057__$1);
var G__27060 = c__4550__auto___27058;
var G__27061 = cljs.core.count.call(null,c__4550__auto___27058);
var G__27062 = (0);
seq__27039_27047 = G__27059;
chunk__27040_27048 = G__27060;
count__27041_27049 = G__27061;
i__27042_27050 = G__27062;
continue;
} else {
var req_27063 = cljs.core.first.call(null,seq__27039_27057__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27063,prov);


var G__27064 = cljs.core.next.call(null,seq__27039_27057__$1);
var G__27065 = null;
var G__27066 = (0);
var G__27067 = (0);
seq__27039_27047 = G__27064;
chunk__27040_27048 = G__27065;
count__27041_27049 = G__27066;
i__27042_27050 = G__27067;
continue;
}
} else {
}
}
break;
}


var G__27068 = seq__27027;
var G__27069 = chunk__27028;
var G__27070 = count__27029;
var G__27071 = (i__27030 + (1));
seq__27027 = G__27068;
chunk__27028 = G__27069;
count__27029 = G__27070;
i__27030 = G__27071;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27027);
if(temp__5720__auto__){
var seq__27027__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27027__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27027__$1);
var G__27072 = cljs.core.chunk_rest.call(null,seq__27027__$1);
var G__27073 = c__4550__auto__;
var G__27074 = cljs.core.count.call(null,c__4550__auto__);
var G__27075 = (0);
seq__27027 = G__27072;
chunk__27028 = G__27073;
count__27029 = G__27074;
i__27030 = G__27075;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27027__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27043_27076 = cljs.core.seq.call(null,requires);
var chunk__27044_27077 = null;
var count__27045_27078 = (0);
var i__27046_27079 = (0);
while(true){
if((i__27046_27079 < count__27045_27078)){
var req_27080 = cljs.core._nth.call(null,chunk__27044_27077,i__27046_27079);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27080,prov);


var G__27081 = seq__27043_27076;
var G__27082 = chunk__27044_27077;
var G__27083 = count__27045_27078;
var G__27084 = (i__27046_27079 + (1));
seq__27043_27076 = G__27081;
chunk__27044_27077 = G__27082;
count__27045_27078 = G__27083;
i__27046_27079 = G__27084;
continue;
} else {
var temp__5720__auto___27085__$1 = cljs.core.seq.call(null,seq__27043_27076);
if(temp__5720__auto___27085__$1){
var seq__27043_27086__$1 = temp__5720__auto___27085__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27043_27086__$1)){
var c__4550__auto___27087 = cljs.core.chunk_first.call(null,seq__27043_27086__$1);
var G__27088 = cljs.core.chunk_rest.call(null,seq__27043_27086__$1);
var G__27089 = c__4550__auto___27087;
var G__27090 = cljs.core.count.call(null,c__4550__auto___27087);
var G__27091 = (0);
seq__27043_27076 = G__27088;
chunk__27044_27077 = G__27089;
count__27045_27078 = G__27090;
i__27046_27079 = G__27091;
continue;
} else {
var req_27092 = cljs.core.first.call(null,seq__27043_27086__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27092,prov);


var G__27093 = cljs.core.next.call(null,seq__27043_27086__$1);
var G__27094 = null;
var G__27095 = (0);
var G__27096 = (0);
seq__27043_27076 = G__27093;
chunk__27044_27077 = G__27094;
count__27045_27078 = G__27095;
i__27046_27079 = G__27096;
continue;
}
} else {
}
}
break;
}


var G__27097 = cljs.core.next.call(null,seq__27027__$1);
var G__27098 = null;
var G__27099 = (0);
var G__27100 = (0);
seq__27027 = G__27097;
chunk__27028 = G__27098;
count__27029 = G__27099;
i__27030 = G__27100;
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
var seq__27101_27105 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27102_27106 = null;
var count__27103_27107 = (0);
var i__27104_27108 = (0);
while(true){
if((i__27104_27108 < count__27103_27107)){
var ns_27109 = cljs.core._nth.call(null,chunk__27102_27106,i__27104_27108);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27109);


var G__27110 = seq__27101_27105;
var G__27111 = chunk__27102_27106;
var G__27112 = count__27103_27107;
var G__27113 = (i__27104_27108 + (1));
seq__27101_27105 = G__27110;
chunk__27102_27106 = G__27111;
count__27103_27107 = G__27112;
i__27104_27108 = G__27113;
continue;
} else {
var temp__5720__auto___27114 = cljs.core.seq.call(null,seq__27101_27105);
if(temp__5720__auto___27114){
var seq__27101_27115__$1 = temp__5720__auto___27114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27101_27115__$1)){
var c__4550__auto___27116 = cljs.core.chunk_first.call(null,seq__27101_27115__$1);
var G__27117 = cljs.core.chunk_rest.call(null,seq__27101_27115__$1);
var G__27118 = c__4550__auto___27116;
var G__27119 = cljs.core.count.call(null,c__4550__auto___27116);
var G__27120 = (0);
seq__27101_27105 = G__27117;
chunk__27102_27106 = G__27118;
count__27103_27107 = G__27119;
i__27104_27108 = G__27120;
continue;
} else {
var ns_27121 = cljs.core.first.call(null,seq__27101_27115__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27121);


var G__27122 = cljs.core.next.call(null,seq__27101_27115__$1);
var G__27123 = null;
var G__27124 = (0);
var G__27125 = (0);
seq__27101_27105 = G__27122;
chunk__27102_27106 = G__27123;
count__27103_27107 = G__27124;
i__27104_27108 = G__27125;
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
var G__27126__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27127__i = 0, G__27127__a = new Array(arguments.length -  0);
while (G__27127__i < G__27127__a.length) {G__27127__a[G__27127__i] = arguments[G__27127__i + 0]; ++G__27127__i;}
  args = new cljs.core.IndexedSeq(G__27127__a,0,null);
} 
return G__27126__delegate.call(this,args);};
G__27126.cljs$lang$maxFixedArity = 0;
G__27126.cljs$lang$applyTo = (function (arglist__27128){
var args = cljs.core.seq(arglist__27128);
return G__27126__delegate(args);
});
G__27126.cljs$core$IFn$_invoke$arity$variadic = G__27126__delegate;
return G__27126;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27129_SHARP_,p2__27130_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27129_SHARP_)),p2__27130_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27131_SHARP_,p2__27132_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27131_SHARP_),p2__27132_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27133 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27133.addCallback(((function (G__27133){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27133))
);

G__27133.addErrback(((function (G__27133){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27133))
);

return G__27133;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27134){if((e27134 instanceof Error)){
var e = e27134;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27134;

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
}catch (e27135){if((e27135 instanceof Error)){
var e = e27135;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27135;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27136 = cljs.core._EQ_;
var expr__27137 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27136.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27137))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27136.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27137))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27136.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27137))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27136,expr__27137){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27136,expr__27137))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27139,callback){
var map__27140 = p__27139;
var map__27140__$1 = (((((!((map__27140 == null))))?(((((map__27140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27140):map__27140);
var file_msg = map__27140__$1;
var request_url = cljs.core.get.call(null,map__27140__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27140,map__27140__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27140,map__27140__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto__){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto__){
return (function (state_27178){
var state_val_27179 = (state_27178[(1)]);
if((state_val_27179 === (7))){
var inst_27174 = (state_27178[(2)]);
var state_27178__$1 = state_27178;
var statearr_27180_27206 = state_27178__$1;
(statearr_27180_27206[(2)] = inst_27174);

(statearr_27180_27206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (1))){
var state_27178__$1 = state_27178;
var statearr_27181_27207 = state_27178__$1;
(statearr_27181_27207[(2)] = null);

(statearr_27181_27207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (4))){
var inst_27144 = (state_27178[(7)]);
var inst_27144__$1 = (state_27178[(2)]);
var state_27178__$1 = (function (){var statearr_27182 = state_27178;
(statearr_27182[(7)] = inst_27144__$1);

return statearr_27182;
})();
if(cljs.core.truth_(inst_27144__$1)){
var statearr_27183_27208 = state_27178__$1;
(statearr_27183_27208[(1)] = (5));

} else {
var statearr_27184_27209 = state_27178__$1;
(statearr_27184_27209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (15))){
var inst_27159 = (state_27178[(8)]);
var inst_27157 = (state_27178[(9)]);
var inst_27161 = inst_27159.call(null,inst_27157);
var state_27178__$1 = state_27178;
var statearr_27185_27210 = state_27178__$1;
(statearr_27185_27210[(2)] = inst_27161);

(statearr_27185_27210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (13))){
var inst_27168 = (state_27178[(2)]);
var state_27178__$1 = state_27178;
var statearr_27186_27211 = state_27178__$1;
(statearr_27186_27211[(2)] = inst_27168);

(statearr_27186_27211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (6))){
var state_27178__$1 = state_27178;
var statearr_27187_27212 = state_27178__$1;
(statearr_27187_27212[(2)] = null);

(statearr_27187_27212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (17))){
var inst_27165 = (state_27178[(2)]);
var state_27178__$1 = state_27178;
var statearr_27188_27213 = state_27178__$1;
(statearr_27188_27213[(2)] = inst_27165);

(statearr_27188_27213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (3))){
var inst_27176 = (state_27178[(2)]);
var state_27178__$1 = state_27178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27178__$1,inst_27176);
} else {
if((state_val_27179 === (12))){
var state_27178__$1 = state_27178;
var statearr_27189_27214 = state_27178__$1;
(statearr_27189_27214[(2)] = null);

(statearr_27189_27214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (2))){
var state_27178__$1 = state_27178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27178__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27179 === (11))){
var inst_27149 = (state_27178[(10)]);
var inst_27155 = figwheel.client.file_reloading.blocking_load.call(null,inst_27149);
var state_27178__$1 = state_27178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27178__$1,(14),inst_27155);
} else {
if((state_val_27179 === (9))){
var inst_27149 = (state_27178[(10)]);
var state_27178__$1 = state_27178;
if(cljs.core.truth_(inst_27149)){
var statearr_27190_27215 = state_27178__$1;
(statearr_27190_27215[(1)] = (11));

} else {
var statearr_27191_27216 = state_27178__$1;
(statearr_27191_27216[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (5))){
var inst_27144 = (state_27178[(7)]);
var inst_27150 = (state_27178[(11)]);
var inst_27149 = cljs.core.nth.call(null,inst_27144,(0),null);
var inst_27150__$1 = cljs.core.nth.call(null,inst_27144,(1),null);
var state_27178__$1 = (function (){var statearr_27192 = state_27178;
(statearr_27192[(10)] = inst_27149);

(statearr_27192[(11)] = inst_27150__$1);

return statearr_27192;
})();
if(cljs.core.truth_(inst_27150__$1)){
var statearr_27193_27217 = state_27178__$1;
(statearr_27193_27217[(1)] = (8));

} else {
var statearr_27194_27218 = state_27178__$1;
(statearr_27194_27218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (14))){
var inst_27149 = (state_27178[(10)]);
var inst_27159 = (state_27178[(8)]);
var inst_27157 = (state_27178[(2)]);
var inst_27158 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27159__$1 = cljs.core.get.call(null,inst_27158,inst_27149);
var state_27178__$1 = (function (){var statearr_27195 = state_27178;
(statearr_27195[(8)] = inst_27159__$1);

(statearr_27195[(9)] = inst_27157);

return statearr_27195;
})();
if(cljs.core.truth_(inst_27159__$1)){
var statearr_27196_27219 = state_27178__$1;
(statearr_27196_27219[(1)] = (15));

} else {
var statearr_27197_27220 = state_27178__$1;
(statearr_27197_27220[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (16))){
var inst_27157 = (state_27178[(9)]);
var inst_27163 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27157);
var state_27178__$1 = state_27178;
var statearr_27198_27221 = state_27178__$1;
(statearr_27198_27221[(2)] = inst_27163);

(statearr_27198_27221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (10))){
var inst_27170 = (state_27178[(2)]);
var state_27178__$1 = (function (){var statearr_27199 = state_27178;
(statearr_27199[(12)] = inst_27170);

return statearr_27199;
})();
var statearr_27200_27222 = state_27178__$1;
(statearr_27200_27222[(2)] = null);

(statearr_27200_27222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (8))){
var inst_27150 = (state_27178[(11)]);
var inst_27152 = eval(inst_27150);
var state_27178__$1 = state_27178;
var statearr_27201_27223 = state_27178__$1;
(statearr_27201_27223[(2)] = inst_27152);

(statearr_27201_27223[(1)] = (10));


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
});})(c__23523__auto__))
;
return ((function (switch__23428__auto__,c__23523__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23429__auto__ = null;
var figwheel$client$file_reloading$state_machine__23429__auto____0 = (function (){
var statearr_27202 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27202[(0)] = figwheel$client$file_reloading$state_machine__23429__auto__);

(statearr_27202[(1)] = (1));

return statearr_27202;
});
var figwheel$client$file_reloading$state_machine__23429__auto____1 = (function (state_27178){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_27178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e27203){if((e27203 instanceof Object)){
var ex__23432__auto__ = e27203;
var statearr_27204_27224 = state_27178;
(statearr_27204_27224[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27225 = state_27178;
state_27178 = G__27225;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23429__auto__ = function(state_27178){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23429__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23429__auto____1.call(this,state_27178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23429__auto____0;
figwheel$client$file_reloading$state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23429__auto____1;
return figwheel$client$file_reloading$state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto__))
})();
var state__23525__auto__ = (function (){var statearr_27205 = f__23524__auto__.call(null);
(statearr_27205[(6)] = c__23523__auto__);

return statearr_27205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto__))
);

return c__23523__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27227 = arguments.length;
switch (G__27227) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27229,callback){
var map__27230 = p__27229;
var map__27230__$1 = (((((!((map__27230 == null))))?(((((map__27230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27230):map__27230);
var file_msg = map__27230__$1;
var namespace = cljs.core.get.call(null,map__27230__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27230,map__27230__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27230,map__27230__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27232){
var map__27233 = p__27232;
var map__27233__$1 = (((((!((map__27233 == null))))?(((((map__27233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27233):map__27233);
var file_msg = map__27233__$1;
var namespace = cljs.core.get.call(null,map__27233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27235){
var map__27236 = p__27235;
var map__27236__$1 = (((((!((map__27236 == null))))?(((((map__27236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27236):map__27236);
var file_msg = map__27236__$1;
var namespace = cljs.core.get.call(null,map__27236__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27238,callback){
var map__27239 = p__27238;
var map__27239__$1 = (((((!((map__27239 == null))))?(((((map__27239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27239):map__27239);
var file_msg = map__27239__$1;
var request_url = cljs.core.get.call(null,map__27239__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27239__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23523__auto___27289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___27289,out){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___27289,out){
return (function (state_27274){
var state_val_27275 = (state_27274[(1)]);
if((state_val_27275 === (1))){
var inst_27248 = cljs.core.seq.call(null,files);
var inst_27249 = cljs.core.first.call(null,inst_27248);
var inst_27250 = cljs.core.next.call(null,inst_27248);
var inst_27251 = files;
var state_27274__$1 = (function (){var statearr_27276 = state_27274;
(statearr_27276[(7)] = inst_27249);

(statearr_27276[(8)] = inst_27250);

(statearr_27276[(9)] = inst_27251);

return statearr_27276;
})();
var statearr_27277_27290 = state_27274__$1;
(statearr_27277_27290[(2)] = null);

(statearr_27277_27290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (2))){
var inst_27257 = (state_27274[(10)]);
var inst_27251 = (state_27274[(9)]);
var inst_27256 = cljs.core.seq.call(null,inst_27251);
var inst_27257__$1 = cljs.core.first.call(null,inst_27256);
var inst_27258 = cljs.core.next.call(null,inst_27256);
var inst_27259 = (inst_27257__$1 == null);
var inst_27260 = cljs.core.not.call(null,inst_27259);
var state_27274__$1 = (function (){var statearr_27278 = state_27274;
(statearr_27278[(10)] = inst_27257__$1);

(statearr_27278[(11)] = inst_27258);

return statearr_27278;
})();
if(inst_27260){
var statearr_27279_27291 = state_27274__$1;
(statearr_27279_27291[(1)] = (4));

} else {
var statearr_27280_27292 = state_27274__$1;
(statearr_27280_27292[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (3))){
var inst_27272 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27274__$1,inst_27272);
} else {
if((state_val_27275 === (4))){
var inst_27257 = (state_27274[(10)]);
var inst_27262 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27257);
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,(7),inst_27262);
} else {
if((state_val_27275 === (5))){
var inst_27268 = cljs.core.async.close_BANG_.call(null,out);
var state_27274__$1 = state_27274;
var statearr_27281_27293 = state_27274__$1;
(statearr_27281_27293[(2)] = inst_27268);

(statearr_27281_27293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (6))){
var inst_27270 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27282_27294 = state_27274__$1;
(statearr_27282_27294[(2)] = inst_27270);

(statearr_27282_27294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (7))){
var inst_27258 = (state_27274[(11)]);
var inst_27264 = (state_27274[(2)]);
var inst_27265 = cljs.core.async.put_BANG_.call(null,out,inst_27264);
var inst_27251 = inst_27258;
var state_27274__$1 = (function (){var statearr_27283 = state_27274;
(statearr_27283[(12)] = inst_27265);

(statearr_27283[(9)] = inst_27251);

return statearr_27283;
})();
var statearr_27284_27295 = state_27274__$1;
(statearr_27284_27295[(2)] = null);

(statearr_27284_27295[(1)] = (2));


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
});})(c__23523__auto___27289,out))
;
return ((function (switch__23428__auto__,c__23523__auto___27289,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23429__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23429__auto____0 = (function (){
var statearr_27285 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27285[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23429__auto__);

(statearr_27285[(1)] = (1));

return statearr_27285;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23429__auto____1 = (function (state_27274){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_27274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e27286){if((e27286 instanceof Object)){
var ex__23432__auto__ = e27286;
var statearr_27287_27296 = state_27274;
(statearr_27287_27296[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27297 = state_27274;
state_27274 = G__27297;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23429__auto__ = function(state_27274){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23429__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23429__auto____1.call(this,state_27274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23429__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23429__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___27289,out))
})();
var state__23525__auto__ = (function (){var statearr_27288 = f__23524__auto__.call(null);
(statearr_27288[(6)] = c__23523__auto___27289);

return statearr_27288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___27289,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27298,opts){
var map__27299 = p__27298;
var map__27299__$1 = (((((!((map__27299 == null))))?(((((map__27299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27299):map__27299);
var eval_body = cljs.core.get.call(null,map__27299__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27299__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27301){var e = e27301;
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
return (function (p1__27302_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27302_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27303){
var vec__27304 = p__27303;
var k = cljs.core.nth.call(null,vec__27304,(0),null);
var v = cljs.core.nth.call(null,vec__27304,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27307){
var vec__27308 = p__27307;
var k = cljs.core.nth.call(null,vec__27308,(0),null);
var v = cljs.core.nth.call(null,vec__27308,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27314,p__27315){
var map__27316 = p__27314;
var map__27316__$1 = (((((!((map__27316 == null))))?(((((map__27316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27316):map__27316);
var opts = map__27316__$1;
var before_jsload = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27317 = p__27315;
var map__27317__$1 = (((((!((map__27317 == null))))?(((((map__27317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27317):map__27317);
var msg = map__27317__$1;
var files = cljs.core.get.call(null,map__27317__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27317__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27317__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27471){
var state_val_27472 = (state_27471[(1)]);
if((state_val_27472 === (7))){
var inst_27331 = (state_27471[(7)]);
var inst_27332 = (state_27471[(8)]);
var inst_27334 = (state_27471[(9)]);
var inst_27333 = (state_27471[(10)]);
var inst_27339 = cljs.core._nth.call(null,inst_27332,inst_27334);
var inst_27340 = figwheel.client.file_reloading.eval_body.call(null,inst_27339,opts);
var inst_27341 = (inst_27334 + (1));
var tmp27473 = inst_27331;
var tmp27474 = inst_27332;
var tmp27475 = inst_27333;
var inst_27331__$1 = tmp27473;
var inst_27332__$1 = tmp27474;
var inst_27333__$1 = tmp27475;
var inst_27334__$1 = inst_27341;
var state_27471__$1 = (function (){var statearr_27476 = state_27471;
(statearr_27476[(7)] = inst_27331__$1);

(statearr_27476[(8)] = inst_27332__$1);

(statearr_27476[(11)] = inst_27340);

(statearr_27476[(9)] = inst_27334__$1);

(statearr_27476[(10)] = inst_27333__$1);

return statearr_27476;
})();
var statearr_27477_27560 = state_27471__$1;
(statearr_27477_27560[(2)] = null);

(statearr_27477_27560[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (20))){
var inst_27374 = (state_27471[(12)]);
var inst_27382 = figwheel.client.file_reloading.sort_files.call(null,inst_27374);
var state_27471__$1 = state_27471;
var statearr_27478_27561 = state_27471__$1;
(statearr_27478_27561[(2)] = inst_27382);

(statearr_27478_27561[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (27))){
var state_27471__$1 = state_27471;
var statearr_27479_27562 = state_27471__$1;
(statearr_27479_27562[(2)] = null);

(statearr_27479_27562[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (1))){
var inst_27323 = (state_27471[(13)]);
var inst_27320 = before_jsload.call(null,files);
var inst_27321 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27322 = (function (){return ((function (inst_27323,inst_27320,inst_27321,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27311_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27311_SHARP_);
});
;})(inst_27323,inst_27320,inst_27321,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27323__$1 = cljs.core.filter.call(null,inst_27322,files);
var inst_27324 = cljs.core.not_empty.call(null,inst_27323__$1);
var state_27471__$1 = (function (){var statearr_27480 = state_27471;
(statearr_27480[(14)] = inst_27320);

(statearr_27480[(13)] = inst_27323__$1);

(statearr_27480[(15)] = inst_27321);

return statearr_27480;
})();
if(cljs.core.truth_(inst_27324)){
var statearr_27481_27563 = state_27471__$1;
(statearr_27481_27563[(1)] = (2));

} else {
var statearr_27482_27564 = state_27471__$1;
(statearr_27482_27564[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (24))){
var state_27471__$1 = state_27471;
var statearr_27483_27565 = state_27471__$1;
(statearr_27483_27565[(2)] = null);

(statearr_27483_27565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (39))){
var inst_27424 = (state_27471[(16)]);
var state_27471__$1 = state_27471;
var statearr_27484_27566 = state_27471__$1;
(statearr_27484_27566[(2)] = inst_27424);

(statearr_27484_27566[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (46))){
var inst_27466 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
var statearr_27485_27567 = state_27471__$1;
(statearr_27485_27567[(2)] = inst_27466);

(statearr_27485_27567[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (4))){
var inst_27368 = (state_27471[(2)]);
var inst_27369 = cljs.core.List.EMPTY;
var inst_27370 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27369);
var inst_27371 = (function (){return ((function (inst_27368,inst_27369,inst_27370,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27312_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27312_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27312_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27312_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27368,inst_27369,inst_27370,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27372 = cljs.core.filter.call(null,inst_27371,files);
var inst_27373 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27374 = cljs.core.concat.call(null,inst_27372,inst_27373);
var state_27471__$1 = (function (){var statearr_27486 = state_27471;
(statearr_27486[(12)] = inst_27374);

(statearr_27486[(17)] = inst_27368);

(statearr_27486[(18)] = inst_27370);

return statearr_27486;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27487_27568 = state_27471__$1;
(statearr_27487_27568[(1)] = (16));

} else {
var statearr_27488_27569 = state_27471__$1;
(statearr_27488_27569[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (15))){
var inst_27358 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
var statearr_27489_27570 = state_27471__$1;
(statearr_27489_27570[(2)] = inst_27358);

(statearr_27489_27570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (21))){
var inst_27384 = (state_27471[(19)]);
var inst_27384__$1 = (state_27471[(2)]);
var inst_27385 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27384__$1);
var state_27471__$1 = (function (){var statearr_27490 = state_27471;
(statearr_27490[(19)] = inst_27384__$1);

return statearr_27490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27471__$1,(22),inst_27385);
} else {
if((state_val_27472 === (31))){
var inst_27469 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27471__$1,inst_27469);
} else {
if((state_val_27472 === (32))){
var inst_27424 = (state_27471[(16)]);
var inst_27429 = inst_27424.cljs$lang$protocol_mask$partition0$;
var inst_27430 = (inst_27429 & (64));
var inst_27431 = inst_27424.cljs$core$ISeq$;
var inst_27432 = (cljs.core.PROTOCOL_SENTINEL === inst_27431);
var inst_27433 = ((inst_27430) || (inst_27432));
var state_27471__$1 = state_27471;
if(cljs.core.truth_(inst_27433)){
var statearr_27491_27571 = state_27471__$1;
(statearr_27491_27571[(1)] = (35));

} else {
var statearr_27492_27572 = state_27471__$1;
(statearr_27492_27572[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (40))){
var inst_27446 = (state_27471[(20)]);
var inst_27445 = (state_27471[(2)]);
var inst_27446__$1 = cljs.core.get.call(null,inst_27445,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27447 = cljs.core.get.call(null,inst_27445,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27448 = cljs.core.not_empty.call(null,inst_27446__$1);
var state_27471__$1 = (function (){var statearr_27493 = state_27471;
(statearr_27493[(20)] = inst_27446__$1);

(statearr_27493[(21)] = inst_27447);

return statearr_27493;
})();
if(cljs.core.truth_(inst_27448)){
var statearr_27494_27573 = state_27471__$1;
(statearr_27494_27573[(1)] = (41));

} else {
var statearr_27495_27574 = state_27471__$1;
(statearr_27495_27574[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (33))){
var state_27471__$1 = state_27471;
var statearr_27496_27575 = state_27471__$1;
(statearr_27496_27575[(2)] = false);

(statearr_27496_27575[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (13))){
var inst_27344 = (state_27471[(22)]);
var inst_27348 = cljs.core.chunk_first.call(null,inst_27344);
var inst_27349 = cljs.core.chunk_rest.call(null,inst_27344);
var inst_27350 = cljs.core.count.call(null,inst_27348);
var inst_27331 = inst_27349;
var inst_27332 = inst_27348;
var inst_27333 = inst_27350;
var inst_27334 = (0);
var state_27471__$1 = (function (){var statearr_27497 = state_27471;
(statearr_27497[(7)] = inst_27331);

(statearr_27497[(8)] = inst_27332);

(statearr_27497[(9)] = inst_27334);

(statearr_27497[(10)] = inst_27333);

return statearr_27497;
})();
var statearr_27498_27576 = state_27471__$1;
(statearr_27498_27576[(2)] = null);

(statearr_27498_27576[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (22))){
var inst_27384 = (state_27471[(19)]);
var inst_27387 = (state_27471[(23)]);
var inst_27392 = (state_27471[(24)]);
var inst_27388 = (state_27471[(25)]);
var inst_27387__$1 = (state_27471[(2)]);
var inst_27388__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27387__$1);
var inst_27389 = (function (){var all_files = inst_27384;
var res_SINGLEQUOTE_ = inst_27387__$1;
var res = inst_27388__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27384,inst_27387,inst_27392,inst_27388,inst_27387__$1,inst_27388__$1,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27313_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27313_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27384,inst_27387,inst_27392,inst_27388,inst_27387__$1,inst_27388__$1,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27390 = cljs.core.filter.call(null,inst_27389,inst_27387__$1);
var inst_27391 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27392__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27391);
var inst_27393 = cljs.core.not_empty.call(null,inst_27392__$1);
var state_27471__$1 = (function (){var statearr_27499 = state_27471;
(statearr_27499[(23)] = inst_27387__$1);

(statearr_27499[(24)] = inst_27392__$1);

(statearr_27499[(26)] = inst_27390);

(statearr_27499[(25)] = inst_27388__$1);

return statearr_27499;
})();
if(cljs.core.truth_(inst_27393)){
var statearr_27500_27577 = state_27471__$1;
(statearr_27500_27577[(1)] = (23));

} else {
var statearr_27501_27578 = state_27471__$1;
(statearr_27501_27578[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (36))){
var state_27471__$1 = state_27471;
var statearr_27502_27579 = state_27471__$1;
(statearr_27502_27579[(2)] = false);

(statearr_27502_27579[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (41))){
var inst_27446 = (state_27471[(20)]);
var inst_27450 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27451 = cljs.core.map.call(null,inst_27450,inst_27446);
var inst_27452 = cljs.core.pr_str.call(null,inst_27451);
var inst_27453 = ["figwheel-no-load meta-data: ",inst_27452].join('');
var inst_27454 = figwheel.client.utils.log.call(null,inst_27453);
var state_27471__$1 = state_27471;
var statearr_27503_27580 = state_27471__$1;
(statearr_27503_27580[(2)] = inst_27454);

(statearr_27503_27580[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (43))){
var inst_27447 = (state_27471[(21)]);
var inst_27457 = (state_27471[(2)]);
var inst_27458 = cljs.core.not_empty.call(null,inst_27447);
var state_27471__$1 = (function (){var statearr_27504 = state_27471;
(statearr_27504[(27)] = inst_27457);

return statearr_27504;
})();
if(cljs.core.truth_(inst_27458)){
var statearr_27505_27581 = state_27471__$1;
(statearr_27505_27581[(1)] = (44));

} else {
var statearr_27506_27582 = state_27471__$1;
(statearr_27506_27582[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (29))){
var inst_27384 = (state_27471[(19)]);
var inst_27387 = (state_27471[(23)]);
var inst_27392 = (state_27471[(24)]);
var inst_27390 = (state_27471[(26)]);
var inst_27388 = (state_27471[(25)]);
var inst_27424 = (state_27471[(16)]);
var inst_27420 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27423 = (function (){var all_files = inst_27384;
var res_SINGLEQUOTE_ = inst_27387;
var res = inst_27388;
var files_not_loaded = inst_27390;
var dependencies_that_loaded = inst_27392;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27384,inst_27387,inst_27392,inst_27390,inst_27388,inst_27424,inst_27420,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27422){
var map__27507 = p__27422;
var map__27507__$1 = (((((!((map__27507 == null))))?(((((map__27507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27507):map__27507);
var namespace = cljs.core.get.call(null,map__27507__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27384,inst_27387,inst_27392,inst_27390,inst_27388,inst_27424,inst_27420,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27424__$1 = cljs.core.group_by.call(null,inst_27423,inst_27390);
var inst_27426 = (inst_27424__$1 == null);
var inst_27427 = cljs.core.not.call(null,inst_27426);
var state_27471__$1 = (function (){var statearr_27509 = state_27471;
(statearr_27509[(28)] = inst_27420);

(statearr_27509[(16)] = inst_27424__$1);

return statearr_27509;
})();
if(inst_27427){
var statearr_27510_27583 = state_27471__$1;
(statearr_27510_27583[(1)] = (32));

} else {
var statearr_27511_27584 = state_27471__$1;
(statearr_27511_27584[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (44))){
var inst_27447 = (state_27471[(21)]);
var inst_27460 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27447);
var inst_27461 = cljs.core.pr_str.call(null,inst_27460);
var inst_27462 = ["not required: ",inst_27461].join('');
var inst_27463 = figwheel.client.utils.log.call(null,inst_27462);
var state_27471__$1 = state_27471;
var statearr_27512_27585 = state_27471__$1;
(statearr_27512_27585[(2)] = inst_27463);

(statearr_27512_27585[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (6))){
var inst_27365 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
var statearr_27513_27586 = state_27471__$1;
(statearr_27513_27586[(2)] = inst_27365);

(statearr_27513_27586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (28))){
var inst_27390 = (state_27471[(26)]);
var inst_27417 = (state_27471[(2)]);
var inst_27418 = cljs.core.not_empty.call(null,inst_27390);
var state_27471__$1 = (function (){var statearr_27514 = state_27471;
(statearr_27514[(29)] = inst_27417);

return statearr_27514;
})();
if(cljs.core.truth_(inst_27418)){
var statearr_27515_27587 = state_27471__$1;
(statearr_27515_27587[(1)] = (29));

} else {
var statearr_27516_27588 = state_27471__$1;
(statearr_27516_27588[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (25))){
var inst_27388 = (state_27471[(25)]);
var inst_27404 = (state_27471[(2)]);
var inst_27405 = cljs.core.not_empty.call(null,inst_27388);
var state_27471__$1 = (function (){var statearr_27517 = state_27471;
(statearr_27517[(30)] = inst_27404);

return statearr_27517;
})();
if(cljs.core.truth_(inst_27405)){
var statearr_27518_27589 = state_27471__$1;
(statearr_27518_27589[(1)] = (26));

} else {
var statearr_27519_27590 = state_27471__$1;
(statearr_27519_27590[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (34))){
var inst_27440 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
if(cljs.core.truth_(inst_27440)){
var statearr_27520_27591 = state_27471__$1;
(statearr_27520_27591[(1)] = (38));

} else {
var statearr_27521_27592 = state_27471__$1;
(statearr_27521_27592[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (17))){
var state_27471__$1 = state_27471;
var statearr_27522_27593 = state_27471__$1;
(statearr_27522_27593[(2)] = recompile_dependents);

(statearr_27522_27593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (3))){
var state_27471__$1 = state_27471;
var statearr_27523_27594 = state_27471__$1;
(statearr_27523_27594[(2)] = null);

(statearr_27523_27594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (12))){
var inst_27361 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
var statearr_27524_27595 = state_27471__$1;
(statearr_27524_27595[(2)] = inst_27361);

(statearr_27524_27595[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (2))){
var inst_27323 = (state_27471[(13)]);
var inst_27330 = cljs.core.seq.call(null,inst_27323);
var inst_27331 = inst_27330;
var inst_27332 = null;
var inst_27333 = (0);
var inst_27334 = (0);
var state_27471__$1 = (function (){var statearr_27525 = state_27471;
(statearr_27525[(7)] = inst_27331);

(statearr_27525[(8)] = inst_27332);

(statearr_27525[(9)] = inst_27334);

(statearr_27525[(10)] = inst_27333);

return statearr_27525;
})();
var statearr_27526_27596 = state_27471__$1;
(statearr_27526_27596[(2)] = null);

(statearr_27526_27596[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (23))){
var inst_27384 = (state_27471[(19)]);
var inst_27387 = (state_27471[(23)]);
var inst_27392 = (state_27471[(24)]);
var inst_27390 = (state_27471[(26)]);
var inst_27388 = (state_27471[(25)]);
var inst_27395 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27397 = (function (){var all_files = inst_27384;
var res_SINGLEQUOTE_ = inst_27387;
var res = inst_27388;
var files_not_loaded = inst_27390;
var dependencies_that_loaded = inst_27392;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27384,inst_27387,inst_27392,inst_27390,inst_27388,inst_27395,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27396){
var map__27527 = p__27396;
var map__27527__$1 = (((((!((map__27527 == null))))?(((((map__27527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27527):map__27527);
var request_url = cljs.core.get.call(null,map__27527__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27384,inst_27387,inst_27392,inst_27390,inst_27388,inst_27395,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27398 = cljs.core.reverse.call(null,inst_27392);
var inst_27399 = cljs.core.map.call(null,inst_27397,inst_27398);
var inst_27400 = cljs.core.pr_str.call(null,inst_27399);
var inst_27401 = figwheel.client.utils.log.call(null,inst_27400);
var state_27471__$1 = (function (){var statearr_27529 = state_27471;
(statearr_27529[(31)] = inst_27395);

return statearr_27529;
})();
var statearr_27530_27597 = state_27471__$1;
(statearr_27530_27597[(2)] = inst_27401);

(statearr_27530_27597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (35))){
var state_27471__$1 = state_27471;
var statearr_27531_27598 = state_27471__$1;
(statearr_27531_27598[(2)] = true);

(statearr_27531_27598[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (19))){
var inst_27374 = (state_27471[(12)]);
var inst_27380 = figwheel.client.file_reloading.expand_files.call(null,inst_27374);
var state_27471__$1 = state_27471;
var statearr_27532_27599 = state_27471__$1;
(statearr_27532_27599[(2)] = inst_27380);

(statearr_27532_27599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (11))){
var state_27471__$1 = state_27471;
var statearr_27533_27600 = state_27471__$1;
(statearr_27533_27600[(2)] = null);

(statearr_27533_27600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (9))){
var inst_27363 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
var statearr_27534_27601 = state_27471__$1;
(statearr_27534_27601[(2)] = inst_27363);

(statearr_27534_27601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (5))){
var inst_27334 = (state_27471[(9)]);
var inst_27333 = (state_27471[(10)]);
var inst_27336 = (inst_27334 < inst_27333);
var inst_27337 = inst_27336;
var state_27471__$1 = state_27471;
if(cljs.core.truth_(inst_27337)){
var statearr_27535_27602 = state_27471__$1;
(statearr_27535_27602[(1)] = (7));

} else {
var statearr_27536_27603 = state_27471__$1;
(statearr_27536_27603[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (14))){
var inst_27344 = (state_27471[(22)]);
var inst_27353 = cljs.core.first.call(null,inst_27344);
var inst_27354 = figwheel.client.file_reloading.eval_body.call(null,inst_27353,opts);
var inst_27355 = cljs.core.next.call(null,inst_27344);
var inst_27331 = inst_27355;
var inst_27332 = null;
var inst_27333 = (0);
var inst_27334 = (0);
var state_27471__$1 = (function (){var statearr_27537 = state_27471;
(statearr_27537[(7)] = inst_27331);

(statearr_27537[(8)] = inst_27332);

(statearr_27537[(9)] = inst_27334);

(statearr_27537[(32)] = inst_27354);

(statearr_27537[(10)] = inst_27333);

return statearr_27537;
})();
var statearr_27538_27604 = state_27471__$1;
(statearr_27538_27604[(2)] = null);

(statearr_27538_27604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (45))){
var state_27471__$1 = state_27471;
var statearr_27539_27605 = state_27471__$1;
(statearr_27539_27605[(2)] = null);

(statearr_27539_27605[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (26))){
var inst_27384 = (state_27471[(19)]);
var inst_27387 = (state_27471[(23)]);
var inst_27392 = (state_27471[(24)]);
var inst_27390 = (state_27471[(26)]);
var inst_27388 = (state_27471[(25)]);
var inst_27407 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27409 = (function (){var all_files = inst_27384;
var res_SINGLEQUOTE_ = inst_27387;
var res = inst_27388;
var files_not_loaded = inst_27390;
var dependencies_that_loaded = inst_27392;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27384,inst_27387,inst_27392,inst_27390,inst_27388,inst_27407,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27408){
var map__27540 = p__27408;
var map__27540__$1 = (((((!((map__27540 == null))))?(((((map__27540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27540):map__27540);
var namespace = cljs.core.get.call(null,map__27540__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27540__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27384,inst_27387,inst_27392,inst_27390,inst_27388,inst_27407,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27410 = cljs.core.map.call(null,inst_27409,inst_27388);
var inst_27411 = cljs.core.pr_str.call(null,inst_27410);
var inst_27412 = figwheel.client.utils.log.call(null,inst_27411);
var inst_27413 = (function (){var all_files = inst_27384;
var res_SINGLEQUOTE_ = inst_27387;
var res = inst_27388;
var files_not_loaded = inst_27390;
var dependencies_that_loaded = inst_27392;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27384,inst_27387,inst_27392,inst_27390,inst_27388,inst_27407,inst_27409,inst_27410,inst_27411,inst_27412,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27384,inst_27387,inst_27392,inst_27390,inst_27388,inst_27407,inst_27409,inst_27410,inst_27411,inst_27412,state_val_27472,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27414 = setTimeout(inst_27413,(10));
var state_27471__$1 = (function (){var statearr_27542 = state_27471;
(statearr_27542[(33)] = inst_27407);

(statearr_27542[(34)] = inst_27412);

return statearr_27542;
})();
var statearr_27543_27606 = state_27471__$1;
(statearr_27543_27606[(2)] = inst_27414);

(statearr_27543_27606[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (16))){
var state_27471__$1 = state_27471;
var statearr_27544_27607 = state_27471__$1;
(statearr_27544_27607[(2)] = reload_dependents);

(statearr_27544_27607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (38))){
var inst_27424 = (state_27471[(16)]);
var inst_27442 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27424);
var state_27471__$1 = state_27471;
var statearr_27545_27608 = state_27471__$1;
(statearr_27545_27608[(2)] = inst_27442);

(statearr_27545_27608[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (30))){
var state_27471__$1 = state_27471;
var statearr_27546_27609 = state_27471__$1;
(statearr_27546_27609[(2)] = null);

(statearr_27546_27609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (10))){
var inst_27344 = (state_27471[(22)]);
var inst_27346 = cljs.core.chunked_seq_QMARK_.call(null,inst_27344);
var state_27471__$1 = state_27471;
if(inst_27346){
var statearr_27547_27610 = state_27471__$1;
(statearr_27547_27610[(1)] = (13));

} else {
var statearr_27548_27611 = state_27471__$1;
(statearr_27548_27611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (18))){
var inst_27378 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
if(cljs.core.truth_(inst_27378)){
var statearr_27549_27612 = state_27471__$1;
(statearr_27549_27612[(1)] = (19));

} else {
var statearr_27550_27613 = state_27471__$1;
(statearr_27550_27613[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (42))){
var state_27471__$1 = state_27471;
var statearr_27551_27614 = state_27471__$1;
(statearr_27551_27614[(2)] = null);

(statearr_27551_27614[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (37))){
var inst_27437 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
var statearr_27552_27615 = state_27471__$1;
(statearr_27552_27615[(2)] = inst_27437);

(statearr_27552_27615[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (8))){
var inst_27331 = (state_27471[(7)]);
var inst_27344 = (state_27471[(22)]);
var inst_27344__$1 = cljs.core.seq.call(null,inst_27331);
var state_27471__$1 = (function (){var statearr_27553 = state_27471;
(statearr_27553[(22)] = inst_27344__$1);

return statearr_27553;
})();
if(inst_27344__$1){
var statearr_27554_27616 = state_27471__$1;
(statearr_27554_27616[(1)] = (10));

} else {
var statearr_27555_27617 = state_27471__$1;
(statearr_27555_27617[(1)] = (11));

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
});})(c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23428__auto__,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23429__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23429__auto____0 = (function (){
var statearr_27556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27556[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23429__auto__);

(statearr_27556[(1)] = (1));

return statearr_27556;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23429__auto____1 = (function (state_27471){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_27471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e27557){if((e27557 instanceof Object)){
var ex__23432__auto__ = e27557;
var statearr_27558_27618 = state_27471;
(statearr_27558_27618[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27619 = state_27471;
state_27471 = G__27619;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23429__auto__ = function(state_27471){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23429__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23429__auto____1.call(this,state_27471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23429__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23429__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23525__auto__ = (function (){var statearr_27559 = f__23524__auto__.call(null);
(statearr_27559[(6)] = c__23523__auto__);

return statearr_27559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto__,map__27316,map__27316__$1,opts,before_jsload,on_jsload,reload_dependents,map__27317,map__27317__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23523__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27622,link){
var map__27623 = p__27622;
var map__27623__$1 = (((((!((map__27623 == null))))?(((((map__27623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27623):map__27623);
var file = cljs.core.get.call(null,map__27623__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__27623,map__27623__$1,file){
return (function (p1__27620_SHARP_,p2__27621_SHARP_){
if(cljs.core._EQ_.call(null,p1__27620_SHARP_,p2__27621_SHARP_)){
return p1__27620_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__27623,map__27623__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27626){
var map__27627 = p__27626;
var map__27627__$1 = (((((!((map__27627 == null))))?(((((map__27627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27627):map__27627);
var match_length = cljs.core.get.call(null,map__27627__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27627__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27625_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27625_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27629_SHARP_,p2__27630_SHARP_){
return cljs.core.assoc.call(null,p1__27629_SHARP_,cljs.core.get.call(null,p2__27630_SHARP_,key),p2__27630_SHARP_);
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
var loaded_f_datas_27631 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27631);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27631);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27632,p__27633){
var map__27634 = p__27632;
var map__27634__$1 = (((((!((map__27634 == null))))?(((((map__27634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27634):map__27634);
var on_cssload = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27635 = p__27633;
var map__27635__$1 = (((((!((map__27635 == null))))?(((((map__27635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27635):map__27635);
var files_msg = map__27635__$1;
var files = cljs.core.get.call(null,map__27635__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1565953420302
