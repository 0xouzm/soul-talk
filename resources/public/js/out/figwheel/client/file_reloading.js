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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28894_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28894_SHARP_));
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
var seq__28895 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28896 = null;
var count__28897 = (0);
var i__28898 = (0);
while(true){
if((i__28898 < count__28897)){
var n = cljs.core._nth.call(null,chunk__28896,i__28898);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28899 = seq__28895;
var G__28900 = chunk__28896;
var G__28901 = count__28897;
var G__28902 = (i__28898 + (1));
seq__28895 = G__28899;
chunk__28896 = G__28900;
count__28897 = G__28901;
i__28898 = G__28902;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28895);
if(temp__5720__auto__){
var seq__28895__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28895__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28895__$1);
var G__28903 = cljs.core.chunk_rest.call(null,seq__28895__$1);
var G__28904 = c__4550__auto__;
var G__28905 = cljs.core.count.call(null,c__4550__auto__);
var G__28906 = (0);
seq__28895 = G__28903;
chunk__28896 = G__28904;
count__28897 = G__28905;
i__28898 = G__28906;
continue;
} else {
var n = cljs.core.first.call(null,seq__28895__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28907 = cljs.core.next.call(null,seq__28895__$1);
var G__28908 = null;
var G__28909 = (0);
var G__28910 = (0);
seq__28895 = G__28907;
chunk__28896 = G__28908;
count__28897 = G__28909;
i__28898 = G__28910;
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
return cljs.core.some.call(null,(function (p__28911){
var vec__28912 = p__28911;
var _ = cljs.core.nth.call(null,vec__28912,(0),null);
var v = cljs.core.nth.call(null,vec__28912,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__28915){
var vec__28916 = p__28915;
var k = cljs.core.nth.call(null,vec__28916,(0),null);
var v = cljs.core.nth.call(null,vec__28916,(1),null);
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

var seq__28928_28936 = cljs.core.seq.call(null,deps);
var chunk__28929_28937 = null;
var count__28930_28938 = (0);
var i__28931_28939 = (0);
while(true){
if((i__28931_28939 < count__28930_28938)){
var dep_28940 = cljs.core._nth.call(null,chunk__28929_28937,i__28931_28939);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28940;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28940));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28940,(depth + (1)),state);
} else {
}


var G__28941 = seq__28928_28936;
var G__28942 = chunk__28929_28937;
var G__28943 = count__28930_28938;
var G__28944 = (i__28931_28939 + (1));
seq__28928_28936 = G__28941;
chunk__28929_28937 = G__28942;
count__28930_28938 = G__28943;
i__28931_28939 = G__28944;
continue;
} else {
var temp__5720__auto___28945 = cljs.core.seq.call(null,seq__28928_28936);
if(temp__5720__auto___28945){
var seq__28928_28946__$1 = temp__5720__auto___28945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28928_28946__$1)){
var c__4550__auto___28947 = cljs.core.chunk_first.call(null,seq__28928_28946__$1);
var G__28948 = cljs.core.chunk_rest.call(null,seq__28928_28946__$1);
var G__28949 = c__4550__auto___28947;
var G__28950 = cljs.core.count.call(null,c__4550__auto___28947);
var G__28951 = (0);
seq__28928_28936 = G__28948;
chunk__28929_28937 = G__28949;
count__28930_28938 = G__28950;
i__28931_28939 = G__28951;
continue;
} else {
var dep_28952 = cljs.core.first.call(null,seq__28928_28946__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28952;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28952));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28952,(depth + (1)),state);
} else {
}


var G__28953 = cljs.core.next.call(null,seq__28928_28946__$1);
var G__28954 = null;
var G__28955 = (0);
var G__28956 = (0);
seq__28928_28936 = G__28953;
chunk__28929_28937 = G__28954;
count__28930_28938 = G__28955;
i__28931_28939 = G__28956;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28932){
var vec__28933 = p__28932;
var seq__28934 = cljs.core.seq.call(null,vec__28933);
var first__28935 = cljs.core.first.call(null,seq__28934);
var seq__28934__$1 = cljs.core.next.call(null,seq__28934);
var x = first__28935;
var xs = seq__28934__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28933,seq__28934,first__28935,seq__28934__$1,x,xs,get_deps__$1){
return (function (p1__28919_SHARP_){
return clojure.set.difference.call(null,p1__28919_SHARP_,x);
});})(vec__28933,seq__28934,first__28935,seq__28934__$1,x,xs,get_deps__$1))
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
var seq__28957 = cljs.core.seq.call(null,provides);
var chunk__28958 = null;
var count__28959 = (0);
var i__28960 = (0);
while(true){
if((i__28960 < count__28959)){
var prov = cljs.core._nth.call(null,chunk__28958,i__28960);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28969_28977 = cljs.core.seq.call(null,requires);
var chunk__28970_28978 = null;
var count__28971_28979 = (0);
var i__28972_28980 = (0);
while(true){
if((i__28972_28980 < count__28971_28979)){
var req_28981 = cljs.core._nth.call(null,chunk__28970_28978,i__28972_28980);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28981,prov);


var G__28982 = seq__28969_28977;
var G__28983 = chunk__28970_28978;
var G__28984 = count__28971_28979;
var G__28985 = (i__28972_28980 + (1));
seq__28969_28977 = G__28982;
chunk__28970_28978 = G__28983;
count__28971_28979 = G__28984;
i__28972_28980 = G__28985;
continue;
} else {
var temp__5720__auto___28986 = cljs.core.seq.call(null,seq__28969_28977);
if(temp__5720__auto___28986){
var seq__28969_28987__$1 = temp__5720__auto___28986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28969_28987__$1)){
var c__4550__auto___28988 = cljs.core.chunk_first.call(null,seq__28969_28987__$1);
var G__28989 = cljs.core.chunk_rest.call(null,seq__28969_28987__$1);
var G__28990 = c__4550__auto___28988;
var G__28991 = cljs.core.count.call(null,c__4550__auto___28988);
var G__28992 = (0);
seq__28969_28977 = G__28989;
chunk__28970_28978 = G__28990;
count__28971_28979 = G__28991;
i__28972_28980 = G__28992;
continue;
} else {
var req_28993 = cljs.core.first.call(null,seq__28969_28987__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28993,prov);


var G__28994 = cljs.core.next.call(null,seq__28969_28987__$1);
var G__28995 = null;
var G__28996 = (0);
var G__28997 = (0);
seq__28969_28977 = G__28994;
chunk__28970_28978 = G__28995;
count__28971_28979 = G__28996;
i__28972_28980 = G__28997;
continue;
}
} else {
}
}
break;
}


var G__28998 = seq__28957;
var G__28999 = chunk__28958;
var G__29000 = count__28959;
var G__29001 = (i__28960 + (1));
seq__28957 = G__28998;
chunk__28958 = G__28999;
count__28959 = G__29000;
i__28960 = G__29001;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28957);
if(temp__5720__auto__){
var seq__28957__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28957__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28957__$1);
var G__29002 = cljs.core.chunk_rest.call(null,seq__28957__$1);
var G__29003 = c__4550__auto__;
var G__29004 = cljs.core.count.call(null,c__4550__auto__);
var G__29005 = (0);
seq__28957 = G__29002;
chunk__28958 = G__29003;
count__28959 = G__29004;
i__28960 = G__29005;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28957__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28973_29006 = cljs.core.seq.call(null,requires);
var chunk__28974_29007 = null;
var count__28975_29008 = (0);
var i__28976_29009 = (0);
while(true){
if((i__28976_29009 < count__28975_29008)){
var req_29010 = cljs.core._nth.call(null,chunk__28974_29007,i__28976_29009);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29010,prov);


var G__29011 = seq__28973_29006;
var G__29012 = chunk__28974_29007;
var G__29013 = count__28975_29008;
var G__29014 = (i__28976_29009 + (1));
seq__28973_29006 = G__29011;
chunk__28974_29007 = G__29012;
count__28975_29008 = G__29013;
i__28976_29009 = G__29014;
continue;
} else {
var temp__5720__auto___29015__$1 = cljs.core.seq.call(null,seq__28973_29006);
if(temp__5720__auto___29015__$1){
var seq__28973_29016__$1 = temp__5720__auto___29015__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28973_29016__$1)){
var c__4550__auto___29017 = cljs.core.chunk_first.call(null,seq__28973_29016__$1);
var G__29018 = cljs.core.chunk_rest.call(null,seq__28973_29016__$1);
var G__29019 = c__4550__auto___29017;
var G__29020 = cljs.core.count.call(null,c__4550__auto___29017);
var G__29021 = (0);
seq__28973_29006 = G__29018;
chunk__28974_29007 = G__29019;
count__28975_29008 = G__29020;
i__28976_29009 = G__29021;
continue;
} else {
var req_29022 = cljs.core.first.call(null,seq__28973_29016__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29022,prov);


var G__29023 = cljs.core.next.call(null,seq__28973_29016__$1);
var G__29024 = null;
var G__29025 = (0);
var G__29026 = (0);
seq__28973_29006 = G__29023;
chunk__28974_29007 = G__29024;
count__28975_29008 = G__29025;
i__28976_29009 = G__29026;
continue;
}
} else {
}
}
break;
}


var G__29027 = cljs.core.next.call(null,seq__28957__$1);
var G__29028 = null;
var G__29029 = (0);
var G__29030 = (0);
seq__28957 = G__29027;
chunk__28958 = G__29028;
count__28959 = G__29029;
i__28960 = G__29030;
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
var seq__29031_29035 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29032_29036 = null;
var count__29033_29037 = (0);
var i__29034_29038 = (0);
while(true){
if((i__29034_29038 < count__29033_29037)){
var ns_29039 = cljs.core._nth.call(null,chunk__29032_29036,i__29034_29038);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29039);


var G__29040 = seq__29031_29035;
var G__29041 = chunk__29032_29036;
var G__29042 = count__29033_29037;
var G__29043 = (i__29034_29038 + (1));
seq__29031_29035 = G__29040;
chunk__29032_29036 = G__29041;
count__29033_29037 = G__29042;
i__29034_29038 = G__29043;
continue;
} else {
var temp__5720__auto___29044 = cljs.core.seq.call(null,seq__29031_29035);
if(temp__5720__auto___29044){
var seq__29031_29045__$1 = temp__5720__auto___29044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29031_29045__$1)){
var c__4550__auto___29046 = cljs.core.chunk_first.call(null,seq__29031_29045__$1);
var G__29047 = cljs.core.chunk_rest.call(null,seq__29031_29045__$1);
var G__29048 = c__4550__auto___29046;
var G__29049 = cljs.core.count.call(null,c__4550__auto___29046);
var G__29050 = (0);
seq__29031_29035 = G__29047;
chunk__29032_29036 = G__29048;
count__29033_29037 = G__29049;
i__29034_29038 = G__29050;
continue;
} else {
var ns_29051 = cljs.core.first.call(null,seq__29031_29045__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29051);


var G__29052 = cljs.core.next.call(null,seq__29031_29045__$1);
var G__29053 = null;
var G__29054 = (0);
var G__29055 = (0);
seq__29031_29035 = G__29052;
chunk__29032_29036 = G__29053;
count__29033_29037 = G__29054;
i__29034_29038 = G__29055;
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
var G__29056__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29057__i = 0, G__29057__a = new Array(arguments.length -  0);
while (G__29057__i < G__29057__a.length) {G__29057__a[G__29057__i] = arguments[G__29057__i + 0]; ++G__29057__i;}
  args = new cljs.core.IndexedSeq(G__29057__a,0,null);
} 
return G__29056__delegate.call(this,args);};
G__29056.cljs$lang$maxFixedArity = 0;
G__29056.cljs$lang$applyTo = (function (arglist__29058){
var args = cljs.core.seq(arglist__29058);
return G__29056__delegate(args);
});
G__29056.cljs$core$IFn$_invoke$arity$variadic = G__29056__delegate;
return G__29056;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29059_SHARP_,p2__29060_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29059_SHARP_)),p2__29060_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29061_SHARP_,p2__29062_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29061_SHARP_),p2__29062_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29063 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29063.addCallback(((function (G__29063){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29063))
);

G__29063.addErrback(((function (G__29063){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29063))
);

return G__29063;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29064){if((e29064 instanceof Error)){
var e = e29064;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29064;

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
}catch (e29065){if((e29065 instanceof Error)){
var e = e29065;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29065;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29066 = cljs.core._EQ_;
var expr__29067 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29066.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29067))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29066.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29067))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29066.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29067))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29066,expr__29067){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29066,expr__29067))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29069,callback){
var map__29070 = p__29069;
var map__29070__$1 = (((((!((map__29070 == null))))?(((((map__29070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29070):map__29070);
var file_msg = map__29070__$1;
var request_url = cljs.core.get.call(null,map__29070__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29070,map__29070__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29070,map__29070__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__25511__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto__){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto__){
return (function (state_29108){
var state_val_29109 = (state_29108[(1)]);
if((state_val_29109 === (7))){
var inst_29104 = (state_29108[(2)]);
var state_29108__$1 = state_29108;
var statearr_29110_29136 = state_29108__$1;
(statearr_29110_29136[(2)] = inst_29104);

(statearr_29110_29136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (1))){
var state_29108__$1 = state_29108;
var statearr_29111_29137 = state_29108__$1;
(statearr_29111_29137[(2)] = null);

(statearr_29111_29137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (4))){
var inst_29074 = (state_29108[(7)]);
var inst_29074__$1 = (state_29108[(2)]);
var state_29108__$1 = (function (){var statearr_29112 = state_29108;
(statearr_29112[(7)] = inst_29074__$1);

return statearr_29112;
})();
if(cljs.core.truth_(inst_29074__$1)){
var statearr_29113_29138 = state_29108__$1;
(statearr_29113_29138[(1)] = (5));

} else {
var statearr_29114_29139 = state_29108__$1;
(statearr_29114_29139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (15))){
var inst_29087 = (state_29108[(8)]);
var inst_29089 = (state_29108[(9)]);
var inst_29091 = inst_29089.call(null,inst_29087);
var state_29108__$1 = state_29108;
var statearr_29115_29140 = state_29108__$1;
(statearr_29115_29140[(2)] = inst_29091);

(statearr_29115_29140[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (13))){
var inst_29098 = (state_29108[(2)]);
var state_29108__$1 = state_29108;
var statearr_29116_29141 = state_29108__$1;
(statearr_29116_29141[(2)] = inst_29098);

(statearr_29116_29141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (6))){
var state_29108__$1 = state_29108;
var statearr_29117_29142 = state_29108__$1;
(statearr_29117_29142[(2)] = null);

(statearr_29117_29142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (17))){
var inst_29095 = (state_29108[(2)]);
var state_29108__$1 = state_29108;
var statearr_29118_29143 = state_29108__$1;
(statearr_29118_29143[(2)] = inst_29095);

(statearr_29118_29143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (3))){
var inst_29106 = (state_29108[(2)]);
var state_29108__$1 = state_29108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29108__$1,inst_29106);
} else {
if((state_val_29109 === (12))){
var state_29108__$1 = state_29108;
var statearr_29119_29144 = state_29108__$1;
(statearr_29119_29144[(2)] = null);

(statearr_29119_29144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (2))){
var state_29108__$1 = state_29108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29108__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29109 === (11))){
var inst_29079 = (state_29108[(10)]);
var inst_29085 = figwheel.client.file_reloading.blocking_load.call(null,inst_29079);
var state_29108__$1 = state_29108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29108__$1,(14),inst_29085);
} else {
if((state_val_29109 === (9))){
var inst_29079 = (state_29108[(10)]);
var state_29108__$1 = state_29108;
if(cljs.core.truth_(inst_29079)){
var statearr_29120_29145 = state_29108__$1;
(statearr_29120_29145[(1)] = (11));

} else {
var statearr_29121_29146 = state_29108__$1;
(statearr_29121_29146[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (5))){
var inst_29074 = (state_29108[(7)]);
var inst_29080 = (state_29108[(11)]);
var inst_29079 = cljs.core.nth.call(null,inst_29074,(0),null);
var inst_29080__$1 = cljs.core.nth.call(null,inst_29074,(1),null);
var state_29108__$1 = (function (){var statearr_29122 = state_29108;
(statearr_29122[(11)] = inst_29080__$1);

(statearr_29122[(10)] = inst_29079);

return statearr_29122;
})();
if(cljs.core.truth_(inst_29080__$1)){
var statearr_29123_29147 = state_29108__$1;
(statearr_29123_29147[(1)] = (8));

} else {
var statearr_29124_29148 = state_29108__$1;
(statearr_29124_29148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (14))){
var inst_29089 = (state_29108[(9)]);
var inst_29079 = (state_29108[(10)]);
var inst_29087 = (state_29108[(2)]);
var inst_29088 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29089__$1 = cljs.core.get.call(null,inst_29088,inst_29079);
var state_29108__$1 = (function (){var statearr_29125 = state_29108;
(statearr_29125[(8)] = inst_29087);

(statearr_29125[(9)] = inst_29089__$1);

return statearr_29125;
})();
if(cljs.core.truth_(inst_29089__$1)){
var statearr_29126_29149 = state_29108__$1;
(statearr_29126_29149[(1)] = (15));

} else {
var statearr_29127_29150 = state_29108__$1;
(statearr_29127_29150[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (16))){
var inst_29087 = (state_29108[(8)]);
var inst_29093 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29087);
var state_29108__$1 = state_29108;
var statearr_29128_29151 = state_29108__$1;
(statearr_29128_29151[(2)] = inst_29093);

(statearr_29128_29151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (10))){
var inst_29100 = (state_29108[(2)]);
var state_29108__$1 = (function (){var statearr_29129 = state_29108;
(statearr_29129[(12)] = inst_29100);

return statearr_29129;
})();
var statearr_29130_29152 = state_29108__$1;
(statearr_29130_29152[(2)] = null);

(statearr_29130_29152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29109 === (8))){
var inst_29080 = (state_29108[(11)]);
var inst_29082 = eval(inst_29080);
var state_29108__$1 = state_29108;
var statearr_29131_29153 = state_29108__$1;
(statearr_29131_29153[(2)] = inst_29082);

(statearr_29131_29153[(1)] = (10));


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
});})(c__25511__auto__))
;
return ((function (switch__25416__auto__,c__25511__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25417__auto__ = null;
var figwheel$client$file_reloading$state_machine__25417__auto____0 = (function (){
var statearr_29132 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29132[(0)] = figwheel$client$file_reloading$state_machine__25417__auto__);

(statearr_29132[(1)] = (1));

return statearr_29132;
});
var figwheel$client$file_reloading$state_machine__25417__auto____1 = (function (state_29108){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_29108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e29133){if((e29133 instanceof Object)){
var ex__25420__auto__ = e29133;
var statearr_29134_29154 = state_29108;
(statearr_29134_29154[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29155 = state_29108;
state_29108 = G__29155;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25417__auto__ = function(state_29108){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25417__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25417__auto____1.call(this,state_29108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25417__auto____0;
figwheel$client$file_reloading$state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25417__auto____1;
return figwheel$client$file_reloading$state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto__))
})();
var state__25513__auto__ = (function (){var statearr_29135 = f__25512__auto__.call(null);
(statearr_29135[(6)] = c__25511__auto__);

return statearr_29135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto__))
);

return c__25511__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29157 = arguments.length;
switch (G__29157) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29159,callback){
var map__29160 = p__29159;
var map__29160__$1 = (((((!((map__29160 == null))))?(((((map__29160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29160):map__29160);
var file_msg = map__29160__$1;
var namespace = cljs.core.get.call(null,map__29160__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29160,map__29160__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29160,map__29160__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29162){
var map__29163 = p__29162;
var map__29163__$1 = (((((!((map__29163 == null))))?(((((map__29163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29163):map__29163);
var file_msg = map__29163__$1;
var namespace = cljs.core.get.call(null,map__29163__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29165){
var map__29166 = p__29165;
var map__29166__$1 = (((((!((map__29166 == null))))?(((((map__29166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29166):map__29166);
var file_msg = map__29166__$1;
var namespace = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29168,callback){
var map__29169 = p__29168;
var map__29169__$1 = (((((!((map__29169 == null))))?(((((map__29169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29169):map__29169);
var file_msg = map__29169__$1;
var request_url = cljs.core.get.call(null,map__29169__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29169__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__25511__auto___29219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto___29219,out){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto___29219,out){
return (function (state_29204){
var state_val_29205 = (state_29204[(1)]);
if((state_val_29205 === (1))){
var inst_29178 = cljs.core.seq.call(null,files);
var inst_29179 = cljs.core.first.call(null,inst_29178);
var inst_29180 = cljs.core.next.call(null,inst_29178);
var inst_29181 = files;
var state_29204__$1 = (function (){var statearr_29206 = state_29204;
(statearr_29206[(7)] = inst_29181);

(statearr_29206[(8)] = inst_29180);

(statearr_29206[(9)] = inst_29179);

return statearr_29206;
})();
var statearr_29207_29220 = state_29204__$1;
(statearr_29207_29220[(2)] = null);

(statearr_29207_29220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (2))){
var inst_29181 = (state_29204[(7)]);
var inst_29187 = (state_29204[(10)]);
var inst_29186 = cljs.core.seq.call(null,inst_29181);
var inst_29187__$1 = cljs.core.first.call(null,inst_29186);
var inst_29188 = cljs.core.next.call(null,inst_29186);
var inst_29189 = (inst_29187__$1 == null);
var inst_29190 = cljs.core.not.call(null,inst_29189);
var state_29204__$1 = (function (){var statearr_29208 = state_29204;
(statearr_29208[(11)] = inst_29188);

(statearr_29208[(10)] = inst_29187__$1);

return statearr_29208;
})();
if(inst_29190){
var statearr_29209_29221 = state_29204__$1;
(statearr_29209_29221[(1)] = (4));

} else {
var statearr_29210_29222 = state_29204__$1;
(statearr_29210_29222[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (3))){
var inst_29202 = (state_29204[(2)]);
var state_29204__$1 = state_29204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29204__$1,inst_29202);
} else {
if((state_val_29205 === (4))){
var inst_29187 = (state_29204[(10)]);
var inst_29192 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29187);
var state_29204__$1 = state_29204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29204__$1,(7),inst_29192);
} else {
if((state_val_29205 === (5))){
var inst_29198 = cljs.core.async.close_BANG_.call(null,out);
var state_29204__$1 = state_29204;
var statearr_29211_29223 = state_29204__$1;
(statearr_29211_29223[(2)] = inst_29198);

(statearr_29211_29223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (6))){
var inst_29200 = (state_29204[(2)]);
var state_29204__$1 = state_29204;
var statearr_29212_29224 = state_29204__$1;
(statearr_29212_29224[(2)] = inst_29200);

(statearr_29212_29224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (7))){
var inst_29188 = (state_29204[(11)]);
var inst_29194 = (state_29204[(2)]);
var inst_29195 = cljs.core.async.put_BANG_.call(null,out,inst_29194);
var inst_29181 = inst_29188;
var state_29204__$1 = (function (){var statearr_29213 = state_29204;
(statearr_29213[(7)] = inst_29181);

(statearr_29213[(12)] = inst_29195);

return statearr_29213;
})();
var statearr_29214_29225 = state_29204__$1;
(statearr_29214_29225[(2)] = null);

(statearr_29214_29225[(1)] = (2));


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
});})(c__25511__auto___29219,out))
;
return ((function (switch__25416__auto__,c__25511__auto___29219,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25417__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25417__auto____0 = (function (){
var statearr_29215 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29215[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25417__auto__);

(statearr_29215[(1)] = (1));

return statearr_29215;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25417__auto____1 = (function (state_29204){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_29204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e29216){if((e29216 instanceof Object)){
var ex__25420__auto__ = e29216;
var statearr_29217_29226 = state_29204;
(statearr_29217_29226[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29227 = state_29204;
state_29204 = G__29227;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25417__auto__ = function(state_29204){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25417__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25417__auto____1.call(this,state_29204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25417__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25417__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto___29219,out))
})();
var state__25513__auto__ = (function (){var statearr_29218 = f__25512__auto__.call(null);
(statearr_29218[(6)] = c__25511__auto___29219);

return statearr_29218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto___29219,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29228,opts){
var map__29229 = p__29228;
var map__29229__$1 = (((((!((map__29229 == null))))?(((((map__29229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29229):map__29229);
var eval_body = cljs.core.get.call(null,map__29229__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29229__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29231){var e = e29231;
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
return (function (p1__29232_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29232_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29233){
var vec__29234 = p__29233;
var k = cljs.core.nth.call(null,vec__29234,(0),null);
var v = cljs.core.nth.call(null,vec__29234,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29237){
var vec__29238 = p__29237;
var k = cljs.core.nth.call(null,vec__29238,(0),null);
var v = cljs.core.nth.call(null,vec__29238,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29244,p__29245){
var map__29246 = p__29244;
var map__29246__$1 = (((((!((map__29246 == null))))?(((((map__29246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29246):map__29246);
var opts = map__29246__$1;
var before_jsload = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29247 = p__29245;
var map__29247__$1 = (((((!((map__29247 == null))))?(((((map__29247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29247):map__29247);
var msg = map__29247__$1;
var files = cljs.core.get.call(null,map__29247__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29247__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29247__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25511__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25512__auto__ = (function (){var switch__25416__auto__ = ((function (c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29401){
var state_val_29402 = (state_29401[(1)]);
if((state_val_29402 === (7))){
var inst_29262 = (state_29401[(7)]);
var inst_29263 = (state_29401[(8)]);
var inst_29264 = (state_29401[(9)]);
var inst_29261 = (state_29401[(10)]);
var inst_29269 = cljs.core._nth.call(null,inst_29262,inst_29264);
var inst_29270 = figwheel.client.file_reloading.eval_body.call(null,inst_29269,opts);
var inst_29271 = (inst_29264 + (1));
var tmp29403 = inst_29262;
var tmp29404 = inst_29263;
var tmp29405 = inst_29261;
var inst_29261__$1 = tmp29405;
var inst_29262__$1 = tmp29403;
var inst_29263__$1 = tmp29404;
var inst_29264__$1 = inst_29271;
var state_29401__$1 = (function (){var statearr_29406 = state_29401;
(statearr_29406[(7)] = inst_29262__$1);

(statearr_29406[(8)] = inst_29263__$1);

(statearr_29406[(9)] = inst_29264__$1);

(statearr_29406[(11)] = inst_29270);

(statearr_29406[(10)] = inst_29261__$1);

return statearr_29406;
})();
var statearr_29407_29490 = state_29401__$1;
(statearr_29407_29490[(2)] = null);

(statearr_29407_29490[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (20))){
var inst_29304 = (state_29401[(12)]);
var inst_29312 = figwheel.client.file_reloading.sort_files.call(null,inst_29304);
var state_29401__$1 = state_29401;
var statearr_29408_29491 = state_29401__$1;
(statearr_29408_29491[(2)] = inst_29312);

(statearr_29408_29491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (27))){
var state_29401__$1 = state_29401;
var statearr_29409_29492 = state_29401__$1;
(statearr_29409_29492[(2)] = null);

(statearr_29409_29492[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (1))){
var inst_29253 = (state_29401[(13)]);
var inst_29250 = before_jsload.call(null,files);
var inst_29251 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29252 = (function (){return ((function (inst_29253,inst_29250,inst_29251,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29241_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29241_SHARP_);
});
;})(inst_29253,inst_29250,inst_29251,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29253__$1 = cljs.core.filter.call(null,inst_29252,files);
var inst_29254 = cljs.core.not_empty.call(null,inst_29253__$1);
var state_29401__$1 = (function (){var statearr_29410 = state_29401;
(statearr_29410[(14)] = inst_29250);

(statearr_29410[(15)] = inst_29251);

(statearr_29410[(13)] = inst_29253__$1);

return statearr_29410;
})();
if(cljs.core.truth_(inst_29254)){
var statearr_29411_29493 = state_29401__$1;
(statearr_29411_29493[(1)] = (2));

} else {
var statearr_29412_29494 = state_29401__$1;
(statearr_29412_29494[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (24))){
var state_29401__$1 = state_29401;
var statearr_29413_29495 = state_29401__$1;
(statearr_29413_29495[(2)] = null);

(statearr_29413_29495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (39))){
var inst_29354 = (state_29401[(16)]);
var state_29401__$1 = state_29401;
var statearr_29414_29496 = state_29401__$1;
(statearr_29414_29496[(2)] = inst_29354);

(statearr_29414_29496[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (46))){
var inst_29396 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29415_29497 = state_29401__$1;
(statearr_29415_29497[(2)] = inst_29396);

(statearr_29415_29497[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (4))){
var inst_29298 = (state_29401[(2)]);
var inst_29299 = cljs.core.List.EMPTY;
var inst_29300 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29299);
var inst_29301 = (function (){return ((function (inst_29298,inst_29299,inst_29300,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29242_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29242_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29242_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29242_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_29298,inst_29299,inst_29300,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29302 = cljs.core.filter.call(null,inst_29301,files);
var inst_29303 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29304 = cljs.core.concat.call(null,inst_29302,inst_29303);
var state_29401__$1 = (function (){var statearr_29416 = state_29401;
(statearr_29416[(12)] = inst_29304);

(statearr_29416[(17)] = inst_29298);

(statearr_29416[(18)] = inst_29300);

return statearr_29416;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29417_29498 = state_29401__$1;
(statearr_29417_29498[(1)] = (16));

} else {
var statearr_29418_29499 = state_29401__$1;
(statearr_29418_29499[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (15))){
var inst_29288 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29419_29500 = state_29401__$1;
(statearr_29419_29500[(2)] = inst_29288);

(statearr_29419_29500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (21))){
var inst_29314 = (state_29401[(19)]);
var inst_29314__$1 = (state_29401[(2)]);
var inst_29315 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29314__$1);
var state_29401__$1 = (function (){var statearr_29420 = state_29401;
(statearr_29420[(19)] = inst_29314__$1);

return statearr_29420;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29401__$1,(22),inst_29315);
} else {
if((state_val_29402 === (31))){
var inst_29399 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29401__$1,inst_29399);
} else {
if((state_val_29402 === (32))){
var inst_29354 = (state_29401[(16)]);
var inst_29359 = inst_29354.cljs$lang$protocol_mask$partition0$;
var inst_29360 = (inst_29359 & (64));
var inst_29361 = inst_29354.cljs$core$ISeq$;
var inst_29362 = (cljs.core.PROTOCOL_SENTINEL === inst_29361);
var inst_29363 = ((inst_29360) || (inst_29362));
var state_29401__$1 = state_29401;
if(cljs.core.truth_(inst_29363)){
var statearr_29421_29501 = state_29401__$1;
(statearr_29421_29501[(1)] = (35));

} else {
var statearr_29422_29502 = state_29401__$1;
(statearr_29422_29502[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (40))){
var inst_29376 = (state_29401[(20)]);
var inst_29375 = (state_29401[(2)]);
var inst_29376__$1 = cljs.core.get.call(null,inst_29375,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29377 = cljs.core.get.call(null,inst_29375,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29378 = cljs.core.not_empty.call(null,inst_29376__$1);
var state_29401__$1 = (function (){var statearr_29423 = state_29401;
(statearr_29423[(21)] = inst_29377);

(statearr_29423[(20)] = inst_29376__$1);

return statearr_29423;
})();
if(cljs.core.truth_(inst_29378)){
var statearr_29424_29503 = state_29401__$1;
(statearr_29424_29503[(1)] = (41));

} else {
var statearr_29425_29504 = state_29401__$1;
(statearr_29425_29504[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (33))){
var state_29401__$1 = state_29401;
var statearr_29426_29505 = state_29401__$1;
(statearr_29426_29505[(2)] = false);

(statearr_29426_29505[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (13))){
var inst_29274 = (state_29401[(22)]);
var inst_29278 = cljs.core.chunk_first.call(null,inst_29274);
var inst_29279 = cljs.core.chunk_rest.call(null,inst_29274);
var inst_29280 = cljs.core.count.call(null,inst_29278);
var inst_29261 = inst_29279;
var inst_29262 = inst_29278;
var inst_29263 = inst_29280;
var inst_29264 = (0);
var state_29401__$1 = (function (){var statearr_29427 = state_29401;
(statearr_29427[(7)] = inst_29262);

(statearr_29427[(8)] = inst_29263);

(statearr_29427[(9)] = inst_29264);

(statearr_29427[(10)] = inst_29261);

return statearr_29427;
})();
var statearr_29428_29506 = state_29401__$1;
(statearr_29428_29506[(2)] = null);

(statearr_29428_29506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (22))){
var inst_29314 = (state_29401[(19)]);
var inst_29318 = (state_29401[(23)]);
var inst_29317 = (state_29401[(24)]);
var inst_29322 = (state_29401[(25)]);
var inst_29317__$1 = (state_29401[(2)]);
var inst_29318__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29317__$1);
var inst_29319 = (function (){var all_files = inst_29314;
var res_SINGLEQUOTE_ = inst_29317__$1;
var res = inst_29318__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29314,inst_29318,inst_29317,inst_29322,inst_29317__$1,inst_29318__$1,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29243_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29243_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29314,inst_29318,inst_29317,inst_29322,inst_29317__$1,inst_29318__$1,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29320 = cljs.core.filter.call(null,inst_29319,inst_29317__$1);
var inst_29321 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29322__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29321);
var inst_29323 = cljs.core.not_empty.call(null,inst_29322__$1);
var state_29401__$1 = (function (){var statearr_29429 = state_29401;
(statearr_29429[(26)] = inst_29320);

(statearr_29429[(23)] = inst_29318__$1);

(statearr_29429[(24)] = inst_29317__$1);

(statearr_29429[(25)] = inst_29322__$1);

return statearr_29429;
})();
if(cljs.core.truth_(inst_29323)){
var statearr_29430_29507 = state_29401__$1;
(statearr_29430_29507[(1)] = (23));

} else {
var statearr_29431_29508 = state_29401__$1;
(statearr_29431_29508[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (36))){
var state_29401__$1 = state_29401;
var statearr_29432_29509 = state_29401__$1;
(statearr_29432_29509[(2)] = false);

(statearr_29432_29509[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (41))){
var inst_29376 = (state_29401[(20)]);
var inst_29380 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29381 = cljs.core.map.call(null,inst_29380,inst_29376);
var inst_29382 = cljs.core.pr_str.call(null,inst_29381);
var inst_29383 = ["figwheel-no-load meta-data: ",inst_29382].join('');
var inst_29384 = figwheel.client.utils.log.call(null,inst_29383);
var state_29401__$1 = state_29401;
var statearr_29433_29510 = state_29401__$1;
(statearr_29433_29510[(2)] = inst_29384);

(statearr_29433_29510[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (43))){
var inst_29377 = (state_29401[(21)]);
var inst_29387 = (state_29401[(2)]);
var inst_29388 = cljs.core.not_empty.call(null,inst_29377);
var state_29401__$1 = (function (){var statearr_29434 = state_29401;
(statearr_29434[(27)] = inst_29387);

return statearr_29434;
})();
if(cljs.core.truth_(inst_29388)){
var statearr_29435_29511 = state_29401__$1;
(statearr_29435_29511[(1)] = (44));

} else {
var statearr_29436_29512 = state_29401__$1;
(statearr_29436_29512[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (29))){
var inst_29354 = (state_29401[(16)]);
var inst_29314 = (state_29401[(19)]);
var inst_29320 = (state_29401[(26)]);
var inst_29318 = (state_29401[(23)]);
var inst_29317 = (state_29401[(24)]);
var inst_29322 = (state_29401[(25)]);
var inst_29350 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29353 = (function (){var all_files = inst_29314;
var res_SINGLEQUOTE_ = inst_29317;
var res = inst_29318;
var files_not_loaded = inst_29320;
var dependencies_that_loaded = inst_29322;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29354,inst_29314,inst_29320,inst_29318,inst_29317,inst_29322,inst_29350,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29352){
var map__29437 = p__29352;
var map__29437__$1 = (((((!((map__29437 == null))))?(((((map__29437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29437):map__29437);
var namespace = cljs.core.get.call(null,map__29437__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29354,inst_29314,inst_29320,inst_29318,inst_29317,inst_29322,inst_29350,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29354__$1 = cljs.core.group_by.call(null,inst_29353,inst_29320);
var inst_29356 = (inst_29354__$1 == null);
var inst_29357 = cljs.core.not.call(null,inst_29356);
var state_29401__$1 = (function (){var statearr_29439 = state_29401;
(statearr_29439[(16)] = inst_29354__$1);

(statearr_29439[(28)] = inst_29350);

return statearr_29439;
})();
if(inst_29357){
var statearr_29440_29513 = state_29401__$1;
(statearr_29440_29513[(1)] = (32));

} else {
var statearr_29441_29514 = state_29401__$1;
(statearr_29441_29514[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (44))){
var inst_29377 = (state_29401[(21)]);
var inst_29390 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29377);
var inst_29391 = cljs.core.pr_str.call(null,inst_29390);
var inst_29392 = ["not required: ",inst_29391].join('');
var inst_29393 = figwheel.client.utils.log.call(null,inst_29392);
var state_29401__$1 = state_29401;
var statearr_29442_29515 = state_29401__$1;
(statearr_29442_29515[(2)] = inst_29393);

(statearr_29442_29515[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (6))){
var inst_29295 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29443_29516 = state_29401__$1;
(statearr_29443_29516[(2)] = inst_29295);

(statearr_29443_29516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (28))){
var inst_29320 = (state_29401[(26)]);
var inst_29347 = (state_29401[(2)]);
var inst_29348 = cljs.core.not_empty.call(null,inst_29320);
var state_29401__$1 = (function (){var statearr_29444 = state_29401;
(statearr_29444[(29)] = inst_29347);

return statearr_29444;
})();
if(cljs.core.truth_(inst_29348)){
var statearr_29445_29517 = state_29401__$1;
(statearr_29445_29517[(1)] = (29));

} else {
var statearr_29446_29518 = state_29401__$1;
(statearr_29446_29518[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (25))){
var inst_29318 = (state_29401[(23)]);
var inst_29334 = (state_29401[(2)]);
var inst_29335 = cljs.core.not_empty.call(null,inst_29318);
var state_29401__$1 = (function (){var statearr_29447 = state_29401;
(statearr_29447[(30)] = inst_29334);

return statearr_29447;
})();
if(cljs.core.truth_(inst_29335)){
var statearr_29448_29519 = state_29401__$1;
(statearr_29448_29519[(1)] = (26));

} else {
var statearr_29449_29520 = state_29401__$1;
(statearr_29449_29520[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (34))){
var inst_29370 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
if(cljs.core.truth_(inst_29370)){
var statearr_29450_29521 = state_29401__$1;
(statearr_29450_29521[(1)] = (38));

} else {
var statearr_29451_29522 = state_29401__$1;
(statearr_29451_29522[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (17))){
var state_29401__$1 = state_29401;
var statearr_29452_29523 = state_29401__$1;
(statearr_29452_29523[(2)] = recompile_dependents);

(statearr_29452_29523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (3))){
var state_29401__$1 = state_29401;
var statearr_29453_29524 = state_29401__$1;
(statearr_29453_29524[(2)] = null);

(statearr_29453_29524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (12))){
var inst_29291 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29454_29525 = state_29401__$1;
(statearr_29454_29525[(2)] = inst_29291);

(statearr_29454_29525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (2))){
var inst_29253 = (state_29401[(13)]);
var inst_29260 = cljs.core.seq.call(null,inst_29253);
var inst_29261 = inst_29260;
var inst_29262 = null;
var inst_29263 = (0);
var inst_29264 = (0);
var state_29401__$1 = (function (){var statearr_29455 = state_29401;
(statearr_29455[(7)] = inst_29262);

(statearr_29455[(8)] = inst_29263);

(statearr_29455[(9)] = inst_29264);

(statearr_29455[(10)] = inst_29261);

return statearr_29455;
})();
var statearr_29456_29526 = state_29401__$1;
(statearr_29456_29526[(2)] = null);

(statearr_29456_29526[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (23))){
var inst_29314 = (state_29401[(19)]);
var inst_29320 = (state_29401[(26)]);
var inst_29318 = (state_29401[(23)]);
var inst_29317 = (state_29401[(24)]);
var inst_29322 = (state_29401[(25)]);
var inst_29325 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29327 = (function (){var all_files = inst_29314;
var res_SINGLEQUOTE_ = inst_29317;
var res = inst_29318;
var files_not_loaded = inst_29320;
var dependencies_that_loaded = inst_29322;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29314,inst_29320,inst_29318,inst_29317,inst_29322,inst_29325,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29326){
var map__29457 = p__29326;
var map__29457__$1 = (((((!((map__29457 == null))))?(((((map__29457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29457):map__29457);
var request_url = cljs.core.get.call(null,map__29457__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29314,inst_29320,inst_29318,inst_29317,inst_29322,inst_29325,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29328 = cljs.core.reverse.call(null,inst_29322);
var inst_29329 = cljs.core.map.call(null,inst_29327,inst_29328);
var inst_29330 = cljs.core.pr_str.call(null,inst_29329);
var inst_29331 = figwheel.client.utils.log.call(null,inst_29330);
var state_29401__$1 = (function (){var statearr_29459 = state_29401;
(statearr_29459[(31)] = inst_29325);

return statearr_29459;
})();
var statearr_29460_29527 = state_29401__$1;
(statearr_29460_29527[(2)] = inst_29331);

(statearr_29460_29527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (35))){
var state_29401__$1 = state_29401;
var statearr_29461_29528 = state_29401__$1;
(statearr_29461_29528[(2)] = true);

(statearr_29461_29528[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (19))){
var inst_29304 = (state_29401[(12)]);
var inst_29310 = figwheel.client.file_reloading.expand_files.call(null,inst_29304);
var state_29401__$1 = state_29401;
var statearr_29462_29529 = state_29401__$1;
(statearr_29462_29529[(2)] = inst_29310);

(statearr_29462_29529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (11))){
var state_29401__$1 = state_29401;
var statearr_29463_29530 = state_29401__$1;
(statearr_29463_29530[(2)] = null);

(statearr_29463_29530[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (9))){
var inst_29293 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29464_29531 = state_29401__$1;
(statearr_29464_29531[(2)] = inst_29293);

(statearr_29464_29531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (5))){
var inst_29263 = (state_29401[(8)]);
var inst_29264 = (state_29401[(9)]);
var inst_29266 = (inst_29264 < inst_29263);
var inst_29267 = inst_29266;
var state_29401__$1 = state_29401;
if(cljs.core.truth_(inst_29267)){
var statearr_29465_29532 = state_29401__$1;
(statearr_29465_29532[(1)] = (7));

} else {
var statearr_29466_29533 = state_29401__$1;
(statearr_29466_29533[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (14))){
var inst_29274 = (state_29401[(22)]);
var inst_29283 = cljs.core.first.call(null,inst_29274);
var inst_29284 = figwheel.client.file_reloading.eval_body.call(null,inst_29283,opts);
var inst_29285 = cljs.core.next.call(null,inst_29274);
var inst_29261 = inst_29285;
var inst_29262 = null;
var inst_29263 = (0);
var inst_29264 = (0);
var state_29401__$1 = (function (){var statearr_29467 = state_29401;
(statearr_29467[(7)] = inst_29262);

(statearr_29467[(32)] = inst_29284);

(statearr_29467[(8)] = inst_29263);

(statearr_29467[(9)] = inst_29264);

(statearr_29467[(10)] = inst_29261);

return statearr_29467;
})();
var statearr_29468_29534 = state_29401__$1;
(statearr_29468_29534[(2)] = null);

(statearr_29468_29534[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (45))){
var state_29401__$1 = state_29401;
var statearr_29469_29535 = state_29401__$1;
(statearr_29469_29535[(2)] = null);

(statearr_29469_29535[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (26))){
var inst_29314 = (state_29401[(19)]);
var inst_29320 = (state_29401[(26)]);
var inst_29318 = (state_29401[(23)]);
var inst_29317 = (state_29401[(24)]);
var inst_29322 = (state_29401[(25)]);
var inst_29337 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29339 = (function (){var all_files = inst_29314;
var res_SINGLEQUOTE_ = inst_29317;
var res = inst_29318;
var files_not_loaded = inst_29320;
var dependencies_that_loaded = inst_29322;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29314,inst_29320,inst_29318,inst_29317,inst_29322,inst_29337,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29338){
var map__29470 = p__29338;
var map__29470__$1 = (((((!((map__29470 == null))))?(((((map__29470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29470):map__29470);
var namespace = cljs.core.get.call(null,map__29470__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29470__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29314,inst_29320,inst_29318,inst_29317,inst_29322,inst_29337,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29340 = cljs.core.map.call(null,inst_29339,inst_29318);
var inst_29341 = cljs.core.pr_str.call(null,inst_29340);
var inst_29342 = figwheel.client.utils.log.call(null,inst_29341);
var inst_29343 = (function (){var all_files = inst_29314;
var res_SINGLEQUOTE_ = inst_29317;
var res = inst_29318;
var files_not_loaded = inst_29320;
var dependencies_that_loaded = inst_29322;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29314,inst_29320,inst_29318,inst_29317,inst_29322,inst_29337,inst_29339,inst_29340,inst_29341,inst_29342,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29314,inst_29320,inst_29318,inst_29317,inst_29322,inst_29337,inst_29339,inst_29340,inst_29341,inst_29342,state_val_29402,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29344 = setTimeout(inst_29343,(10));
var state_29401__$1 = (function (){var statearr_29472 = state_29401;
(statearr_29472[(33)] = inst_29342);

(statearr_29472[(34)] = inst_29337);

return statearr_29472;
})();
var statearr_29473_29536 = state_29401__$1;
(statearr_29473_29536[(2)] = inst_29344);

(statearr_29473_29536[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (16))){
var state_29401__$1 = state_29401;
var statearr_29474_29537 = state_29401__$1;
(statearr_29474_29537[(2)] = reload_dependents);

(statearr_29474_29537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (38))){
var inst_29354 = (state_29401[(16)]);
var inst_29372 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29354);
var state_29401__$1 = state_29401;
var statearr_29475_29538 = state_29401__$1;
(statearr_29475_29538[(2)] = inst_29372);

(statearr_29475_29538[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (30))){
var state_29401__$1 = state_29401;
var statearr_29476_29539 = state_29401__$1;
(statearr_29476_29539[(2)] = null);

(statearr_29476_29539[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (10))){
var inst_29274 = (state_29401[(22)]);
var inst_29276 = cljs.core.chunked_seq_QMARK_.call(null,inst_29274);
var state_29401__$1 = state_29401;
if(inst_29276){
var statearr_29477_29540 = state_29401__$1;
(statearr_29477_29540[(1)] = (13));

} else {
var statearr_29478_29541 = state_29401__$1;
(statearr_29478_29541[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (18))){
var inst_29308 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
if(cljs.core.truth_(inst_29308)){
var statearr_29479_29542 = state_29401__$1;
(statearr_29479_29542[(1)] = (19));

} else {
var statearr_29480_29543 = state_29401__$1;
(statearr_29480_29543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (42))){
var state_29401__$1 = state_29401;
var statearr_29481_29544 = state_29401__$1;
(statearr_29481_29544[(2)] = null);

(statearr_29481_29544[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (37))){
var inst_29367 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29482_29545 = state_29401__$1;
(statearr_29482_29545[(2)] = inst_29367);

(statearr_29482_29545[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (8))){
var inst_29274 = (state_29401[(22)]);
var inst_29261 = (state_29401[(10)]);
var inst_29274__$1 = cljs.core.seq.call(null,inst_29261);
var state_29401__$1 = (function (){var statearr_29483 = state_29401;
(statearr_29483[(22)] = inst_29274__$1);

return statearr_29483;
})();
if(inst_29274__$1){
var statearr_29484_29546 = state_29401__$1;
(statearr_29484_29546[(1)] = (10));

} else {
var statearr_29485_29547 = state_29401__$1;
(statearr_29485_29547[(1)] = (11));

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
});})(c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25416__auto__,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25417__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25417__auto____0 = (function (){
var statearr_29486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29486[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25417__auto__);

(statearr_29486[(1)] = (1));

return statearr_29486;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25417__auto____1 = (function (state_29401){
while(true){
var ret_value__25418__auto__ = (function (){try{while(true){
var result__25419__auto__ = switch__25416__auto__.call(null,state_29401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25419__auto__;
}
break;
}
}catch (e29487){if((e29487 instanceof Object)){
var ex__25420__auto__ = e29487;
var statearr_29488_29548 = state_29401;
(statearr_29488_29548[(5)] = ex__25420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29549 = state_29401;
state_29401 = G__29549;
continue;
} else {
return ret_value__25418__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25417__auto__ = function(state_29401){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25417__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25417__auto____1.call(this,state_29401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25417__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25417__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25417__auto__;
})()
;})(switch__25416__auto__,c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25513__auto__ = (function (){var statearr_29489 = f__25512__auto__.call(null);
(statearr_29489[(6)] = c__25511__auto__);

return statearr_29489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25513__auto__);
});})(c__25511__auto__,map__29246,map__29246__$1,opts,before_jsload,on_jsload,reload_dependents,map__29247,map__29247__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25511__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29552,link){
var map__29553 = p__29552;
var map__29553__$1 = (((((!((map__29553 == null))))?(((((map__29553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29553):map__29553);
var file = cljs.core.get.call(null,map__29553__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__29553,map__29553__$1,file){
return (function (p1__29550_SHARP_,p2__29551_SHARP_){
if(cljs.core._EQ_.call(null,p1__29550_SHARP_,p2__29551_SHARP_)){
return p1__29550_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__29553,map__29553__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29556){
var map__29557 = p__29556;
var map__29557__$1 = (((((!((map__29557 == null))))?(((((map__29557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29557):map__29557);
var match_length = cljs.core.get.call(null,map__29557__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29557__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29555_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29555_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29559_SHARP_,p2__29560_SHARP_){
return cljs.core.assoc.call(null,p1__29559_SHARP_,cljs.core.get.call(null,p2__29560_SHARP_,key),p2__29560_SHARP_);
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
var loaded_f_datas_29561 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29561);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29561);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29562,p__29563){
var map__29564 = p__29562;
var map__29564__$1 = (((((!((map__29564 == null))))?(((((map__29564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29564):map__29564);
var on_cssload = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29565 = p__29563;
var map__29565__$1 = (((((!((map__29565 == null))))?(((((map__29565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29565):map__29565);
var files_msg = map__29565__$1;
var files = cljs.core.get.call(null,map__29565__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1568085256822
