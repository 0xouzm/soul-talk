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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35528_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35528_SHARP_));
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
var seq__35529 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35530 = null;
var count__35531 = (0);
var i__35532 = (0);
while(true){
if((i__35532 < count__35531)){
var n = cljs.core._nth.call(null,chunk__35530,i__35532);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__35533 = seq__35529;
var G__35534 = chunk__35530;
var G__35535 = count__35531;
var G__35536 = (i__35532 + (1));
seq__35529 = G__35533;
chunk__35530 = G__35534;
count__35531 = G__35535;
i__35532 = G__35536;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35529);
if(temp__5720__auto__){
var seq__35529__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35529__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35529__$1);
var G__35537 = cljs.core.chunk_rest.call(null,seq__35529__$1);
var G__35538 = c__4550__auto__;
var G__35539 = cljs.core.count.call(null,c__4550__auto__);
var G__35540 = (0);
seq__35529 = G__35537;
chunk__35530 = G__35538;
count__35531 = G__35539;
i__35532 = G__35540;
continue;
} else {
var n = cljs.core.first.call(null,seq__35529__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__35541 = cljs.core.next.call(null,seq__35529__$1);
var G__35542 = null;
var G__35543 = (0);
var G__35544 = (0);
seq__35529 = G__35541;
chunk__35530 = G__35542;
count__35531 = G__35543;
i__35532 = G__35544;
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
return cljs.core.some.call(null,(function (p__35545){
var vec__35546 = p__35545;
var _ = cljs.core.nth.call(null,vec__35546,(0),null);
var v = cljs.core.nth.call(null,vec__35546,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__35549){
var vec__35550 = p__35549;
var k = cljs.core.nth.call(null,vec__35550,(0),null);
var v = cljs.core.nth.call(null,vec__35550,(1),null);
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

var seq__35562_35570 = cljs.core.seq.call(null,deps);
var chunk__35563_35571 = null;
var count__35564_35572 = (0);
var i__35565_35573 = (0);
while(true){
if((i__35565_35573 < count__35564_35572)){
var dep_35574 = cljs.core._nth.call(null,chunk__35563_35571,i__35565_35573);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_35574;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35574));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35574,(depth + (1)),state);
} else {
}


var G__35575 = seq__35562_35570;
var G__35576 = chunk__35563_35571;
var G__35577 = count__35564_35572;
var G__35578 = (i__35565_35573 + (1));
seq__35562_35570 = G__35575;
chunk__35563_35571 = G__35576;
count__35564_35572 = G__35577;
i__35565_35573 = G__35578;
continue;
} else {
var temp__5720__auto___35579 = cljs.core.seq.call(null,seq__35562_35570);
if(temp__5720__auto___35579){
var seq__35562_35580__$1 = temp__5720__auto___35579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35562_35580__$1)){
var c__4550__auto___35581 = cljs.core.chunk_first.call(null,seq__35562_35580__$1);
var G__35582 = cljs.core.chunk_rest.call(null,seq__35562_35580__$1);
var G__35583 = c__4550__auto___35581;
var G__35584 = cljs.core.count.call(null,c__4550__auto___35581);
var G__35585 = (0);
seq__35562_35570 = G__35582;
chunk__35563_35571 = G__35583;
count__35564_35572 = G__35584;
i__35565_35573 = G__35585;
continue;
} else {
var dep_35586 = cljs.core.first.call(null,seq__35562_35580__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_35586;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35586));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35586,(depth + (1)),state);
} else {
}


var G__35587 = cljs.core.next.call(null,seq__35562_35580__$1);
var G__35588 = null;
var G__35589 = (0);
var G__35590 = (0);
seq__35562_35570 = G__35587;
chunk__35563_35571 = G__35588;
count__35564_35572 = G__35589;
i__35565_35573 = G__35590;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35566){
var vec__35567 = p__35566;
var seq__35568 = cljs.core.seq.call(null,vec__35567);
var first__35569 = cljs.core.first.call(null,seq__35568);
var seq__35568__$1 = cljs.core.next.call(null,seq__35568);
var x = first__35569;
var xs = seq__35568__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35567,seq__35568,first__35569,seq__35568__$1,x,xs,get_deps__$1){
return (function (p1__35553_SHARP_){
return clojure.set.difference.call(null,p1__35553_SHARP_,x);
});})(vec__35567,seq__35568,first__35569,seq__35568__$1,x,xs,get_deps__$1))
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
var seq__35591 = cljs.core.seq.call(null,provides);
var chunk__35592 = null;
var count__35593 = (0);
var i__35594 = (0);
while(true){
if((i__35594 < count__35593)){
var prov = cljs.core._nth.call(null,chunk__35592,i__35594);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35603_35611 = cljs.core.seq.call(null,requires);
var chunk__35604_35612 = null;
var count__35605_35613 = (0);
var i__35606_35614 = (0);
while(true){
if((i__35606_35614 < count__35605_35613)){
var req_35615 = cljs.core._nth.call(null,chunk__35604_35612,i__35606_35614);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35615,prov);


var G__35616 = seq__35603_35611;
var G__35617 = chunk__35604_35612;
var G__35618 = count__35605_35613;
var G__35619 = (i__35606_35614 + (1));
seq__35603_35611 = G__35616;
chunk__35604_35612 = G__35617;
count__35605_35613 = G__35618;
i__35606_35614 = G__35619;
continue;
} else {
var temp__5720__auto___35620 = cljs.core.seq.call(null,seq__35603_35611);
if(temp__5720__auto___35620){
var seq__35603_35621__$1 = temp__5720__auto___35620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35603_35621__$1)){
var c__4550__auto___35622 = cljs.core.chunk_first.call(null,seq__35603_35621__$1);
var G__35623 = cljs.core.chunk_rest.call(null,seq__35603_35621__$1);
var G__35624 = c__4550__auto___35622;
var G__35625 = cljs.core.count.call(null,c__4550__auto___35622);
var G__35626 = (0);
seq__35603_35611 = G__35623;
chunk__35604_35612 = G__35624;
count__35605_35613 = G__35625;
i__35606_35614 = G__35626;
continue;
} else {
var req_35627 = cljs.core.first.call(null,seq__35603_35621__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35627,prov);


var G__35628 = cljs.core.next.call(null,seq__35603_35621__$1);
var G__35629 = null;
var G__35630 = (0);
var G__35631 = (0);
seq__35603_35611 = G__35628;
chunk__35604_35612 = G__35629;
count__35605_35613 = G__35630;
i__35606_35614 = G__35631;
continue;
}
} else {
}
}
break;
}


var G__35632 = seq__35591;
var G__35633 = chunk__35592;
var G__35634 = count__35593;
var G__35635 = (i__35594 + (1));
seq__35591 = G__35632;
chunk__35592 = G__35633;
count__35593 = G__35634;
i__35594 = G__35635;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35591);
if(temp__5720__auto__){
var seq__35591__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35591__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35591__$1);
var G__35636 = cljs.core.chunk_rest.call(null,seq__35591__$1);
var G__35637 = c__4550__auto__;
var G__35638 = cljs.core.count.call(null,c__4550__auto__);
var G__35639 = (0);
seq__35591 = G__35636;
chunk__35592 = G__35637;
count__35593 = G__35638;
i__35594 = G__35639;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35591__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35607_35640 = cljs.core.seq.call(null,requires);
var chunk__35608_35641 = null;
var count__35609_35642 = (0);
var i__35610_35643 = (0);
while(true){
if((i__35610_35643 < count__35609_35642)){
var req_35644 = cljs.core._nth.call(null,chunk__35608_35641,i__35610_35643);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35644,prov);


var G__35645 = seq__35607_35640;
var G__35646 = chunk__35608_35641;
var G__35647 = count__35609_35642;
var G__35648 = (i__35610_35643 + (1));
seq__35607_35640 = G__35645;
chunk__35608_35641 = G__35646;
count__35609_35642 = G__35647;
i__35610_35643 = G__35648;
continue;
} else {
var temp__5720__auto___35649__$1 = cljs.core.seq.call(null,seq__35607_35640);
if(temp__5720__auto___35649__$1){
var seq__35607_35650__$1 = temp__5720__auto___35649__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35607_35650__$1)){
var c__4550__auto___35651 = cljs.core.chunk_first.call(null,seq__35607_35650__$1);
var G__35652 = cljs.core.chunk_rest.call(null,seq__35607_35650__$1);
var G__35653 = c__4550__auto___35651;
var G__35654 = cljs.core.count.call(null,c__4550__auto___35651);
var G__35655 = (0);
seq__35607_35640 = G__35652;
chunk__35608_35641 = G__35653;
count__35609_35642 = G__35654;
i__35610_35643 = G__35655;
continue;
} else {
var req_35656 = cljs.core.first.call(null,seq__35607_35650__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35656,prov);


var G__35657 = cljs.core.next.call(null,seq__35607_35650__$1);
var G__35658 = null;
var G__35659 = (0);
var G__35660 = (0);
seq__35607_35640 = G__35657;
chunk__35608_35641 = G__35658;
count__35609_35642 = G__35659;
i__35610_35643 = G__35660;
continue;
}
} else {
}
}
break;
}


var G__35661 = cljs.core.next.call(null,seq__35591__$1);
var G__35662 = null;
var G__35663 = (0);
var G__35664 = (0);
seq__35591 = G__35661;
chunk__35592 = G__35662;
count__35593 = G__35663;
i__35594 = G__35664;
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
var seq__35665_35669 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35666_35670 = null;
var count__35667_35671 = (0);
var i__35668_35672 = (0);
while(true){
if((i__35668_35672 < count__35667_35671)){
var ns_35673 = cljs.core._nth.call(null,chunk__35666_35670,i__35668_35672);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35673);


var G__35674 = seq__35665_35669;
var G__35675 = chunk__35666_35670;
var G__35676 = count__35667_35671;
var G__35677 = (i__35668_35672 + (1));
seq__35665_35669 = G__35674;
chunk__35666_35670 = G__35675;
count__35667_35671 = G__35676;
i__35668_35672 = G__35677;
continue;
} else {
var temp__5720__auto___35678 = cljs.core.seq.call(null,seq__35665_35669);
if(temp__5720__auto___35678){
var seq__35665_35679__$1 = temp__5720__auto___35678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35665_35679__$1)){
var c__4550__auto___35680 = cljs.core.chunk_first.call(null,seq__35665_35679__$1);
var G__35681 = cljs.core.chunk_rest.call(null,seq__35665_35679__$1);
var G__35682 = c__4550__auto___35680;
var G__35683 = cljs.core.count.call(null,c__4550__auto___35680);
var G__35684 = (0);
seq__35665_35669 = G__35681;
chunk__35666_35670 = G__35682;
count__35667_35671 = G__35683;
i__35668_35672 = G__35684;
continue;
} else {
var ns_35685 = cljs.core.first.call(null,seq__35665_35679__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35685);


var G__35686 = cljs.core.next.call(null,seq__35665_35679__$1);
var G__35687 = null;
var G__35688 = (0);
var G__35689 = (0);
seq__35665_35669 = G__35686;
chunk__35666_35670 = G__35687;
count__35667_35671 = G__35688;
i__35668_35672 = G__35689;
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
var G__35690__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35691__i = 0, G__35691__a = new Array(arguments.length -  0);
while (G__35691__i < G__35691__a.length) {G__35691__a[G__35691__i] = arguments[G__35691__i + 0]; ++G__35691__i;}
  args = new cljs.core.IndexedSeq(G__35691__a,0,null);
} 
return G__35690__delegate.call(this,args);};
G__35690.cljs$lang$maxFixedArity = 0;
G__35690.cljs$lang$applyTo = (function (arglist__35692){
var args = cljs.core.seq(arglist__35692);
return G__35690__delegate(args);
});
G__35690.cljs$core$IFn$_invoke$arity$variadic = G__35690__delegate;
return G__35690;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__35693_SHARP_,p2__35694_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35693_SHARP_)),p2__35694_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__35695_SHARP_,p2__35696_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35695_SHARP_),p2__35696_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35697 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35697.addCallback(((function (G__35697){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35697))
);

G__35697.addErrback(((function (G__35697){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35697))
);

return G__35697;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35698){if((e35698 instanceof Error)){
var e = e35698;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35698;

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
}catch (e35699){if((e35699 instanceof Error)){
var e = e35699;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35699;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35700 = cljs.core._EQ_;
var expr__35701 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35700.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35701))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35700.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35701))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35700.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35701))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35700,expr__35701){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35700,expr__35701))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35703,callback){
var map__35704 = p__35703;
var map__35704__$1 = (((((!((map__35704 == null))))?(((((map__35704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35704):map__35704);
var file_msg = map__35704__$1;
var request_url = cljs.core.get.call(null,map__35704__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35704,map__35704__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35704,map__35704__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto__){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto__){
return (function (state_35742){
var state_val_35743 = (state_35742[(1)]);
if((state_val_35743 === (7))){
var inst_35738 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
var statearr_35744_35770 = state_35742__$1;
(statearr_35744_35770[(2)] = inst_35738);

(statearr_35744_35770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (1))){
var state_35742__$1 = state_35742;
var statearr_35745_35771 = state_35742__$1;
(statearr_35745_35771[(2)] = null);

(statearr_35745_35771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (4))){
var inst_35708 = (state_35742[(7)]);
var inst_35708__$1 = (state_35742[(2)]);
var state_35742__$1 = (function (){var statearr_35746 = state_35742;
(statearr_35746[(7)] = inst_35708__$1);

return statearr_35746;
})();
if(cljs.core.truth_(inst_35708__$1)){
var statearr_35747_35772 = state_35742__$1;
(statearr_35747_35772[(1)] = (5));

} else {
var statearr_35748_35773 = state_35742__$1;
(statearr_35748_35773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (15))){
var inst_35723 = (state_35742[(8)]);
var inst_35721 = (state_35742[(9)]);
var inst_35725 = inst_35723.call(null,inst_35721);
var state_35742__$1 = state_35742;
var statearr_35749_35774 = state_35742__$1;
(statearr_35749_35774[(2)] = inst_35725);

(statearr_35749_35774[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (13))){
var inst_35732 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
var statearr_35750_35775 = state_35742__$1;
(statearr_35750_35775[(2)] = inst_35732);

(statearr_35750_35775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (6))){
var state_35742__$1 = state_35742;
var statearr_35751_35776 = state_35742__$1;
(statearr_35751_35776[(2)] = null);

(statearr_35751_35776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (17))){
var inst_35729 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
var statearr_35752_35777 = state_35742__$1;
(statearr_35752_35777[(2)] = inst_35729);

(statearr_35752_35777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (3))){
var inst_35740 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35742__$1,inst_35740);
} else {
if((state_val_35743 === (12))){
var state_35742__$1 = state_35742;
var statearr_35753_35778 = state_35742__$1;
(statearr_35753_35778[(2)] = null);

(statearr_35753_35778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (2))){
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35742__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35743 === (11))){
var inst_35713 = (state_35742[(10)]);
var inst_35719 = figwheel.client.file_reloading.blocking_load.call(null,inst_35713);
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35742__$1,(14),inst_35719);
} else {
if((state_val_35743 === (9))){
var inst_35713 = (state_35742[(10)]);
var state_35742__$1 = state_35742;
if(cljs.core.truth_(inst_35713)){
var statearr_35754_35779 = state_35742__$1;
(statearr_35754_35779[(1)] = (11));

} else {
var statearr_35755_35780 = state_35742__$1;
(statearr_35755_35780[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (5))){
var inst_35714 = (state_35742[(11)]);
var inst_35708 = (state_35742[(7)]);
var inst_35713 = cljs.core.nth.call(null,inst_35708,(0),null);
var inst_35714__$1 = cljs.core.nth.call(null,inst_35708,(1),null);
var state_35742__$1 = (function (){var statearr_35756 = state_35742;
(statearr_35756[(10)] = inst_35713);

(statearr_35756[(11)] = inst_35714__$1);

return statearr_35756;
})();
if(cljs.core.truth_(inst_35714__$1)){
var statearr_35757_35781 = state_35742__$1;
(statearr_35757_35781[(1)] = (8));

} else {
var statearr_35758_35782 = state_35742__$1;
(statearr_35758_35782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (14))){
var inst_35723 = (state_35742[(8)]);
var inst_35713 = (state_35742[(10)]);
var inst_35721 = (state_35742[(2)]);
var inst_35722 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35723__$1 = cljs.core.get.call(null,inst_35722,inst_35713);
var state_35742__$1 = (function (){var statearr_35759 = state_35742;
(statearr_35759[(8)] = inst_35723__$1);

(statearr_35759[(9)] = inst_35721);

return statearr_35759;
})();
if(cljs.core.truth_(inst_35723__$1)){
var statearr_35760_35783 = state_35742__$1;
(statearr_35760_35783[(1)] = (15));

} else {
var statearr_35761_35784 = state_35742__$1;
(statearr_35761_35784[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (16))){
var inst_35721 = (state_35742[(9)]);
var inst_35727 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35721);
var state_35742__$1 = state_35742;
var statearr_35762_35785 = state_35742__$1;
(statearr_35762_35785[(2)] = inst_35727);

(statearr_35762_35785[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (10))){
var inst_35734 = (state_35742[(2)]);
var state_35742__$1 = (function (){var statearr_35763 = state_35742;
(statearr_35763[(12)] = inst_35734);

return statearr_35763;
})();
var statearr_35764_35786 = state_35742__$1;
(statearr_35764_35786[(2)] = null);

(statearr_35764_35786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (8))){
var inst_35714 = (state_35742[(11)]);
var inst_35716 = eval(inst_35714);
var state_35742__$1 = state_35742;
var statearr_35765_35787 = state_35742__$1;
(statearr_35765_35787[(2)] = inst_35716);

(statearr_35765_35787[(1)] = (10));


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
});})(c__33521__auto__))
;
return ((function (switch__33426__auto__,c__33521__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33427__auto__ = null;
var figwheel$client$file_reloading$state_machine__33427__auto____0 = (function (){
var statearr_35766 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35766[(0)] = figwheel$client$file_reloading$state_machine__33427__auto__);

(statearr_35766[(1)] = (1));

return statearr_35766;
});
var figwheel$client$file_reloading$state_machine__33427__auto____1 = (function (state_35742){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_35742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e35767){if((e35767 instanceof Object)){
var ex__33430__auto__ = e35767;
var statearr_35768_35788 = state_35742;
(statearr_35768_35788[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35789 = state_35742;
state_35742 = G__35789;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33427__auto__ = function(state_35742){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33427__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33427__auto____1.call(this,state_35742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33427__auto____0;
figwheel$client$file_reloading$state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33427__auto____1;
return figwheel$client$file_reloading$state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto__))
})();
var state__33523__auto__ = (function (){var statearr_35769 = f__33522__auto__.call(null);
(statearr_35769[(6)] = c__33521__auto__);

return statearr_35769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto__))
);

return c__33521__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35791 = arguments.length;
switch (G__35791) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35793,callback){
var map__35794 = p__35793;
var map__35794__$1 = (((((!((map__35794 == null))))?(((((map__35794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35794):map__35794);
var file_msg = map__35794__$1;
var namespace = cljs.core.get.call(null,map__35794__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35794,map__35794__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35794,map__35794__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35796){
var map__35797 = p__35796;
var map__35797__$1 = (((((!((map__35797 == null))))?(((((map__35797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35797):map__35797);
var file_msg = map__35797__$1;
var namespace = cljs.core.get.call(null,map__35797__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35799){
var map__35800 = p__35799;
var map__35800__$1 = (((((!((map__35800 == null))))?(((((map__35800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35800):map__35800);
var file_msg = map__35800__$1;
var namespace = cljs.core.get.call(null,map__35800__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35802,callback){
var map__35803 = p__35802;
var map__35803__$1 = (((((!((map__35803 == null))))?(((((map__35803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35803):map__35803);
var file_msg = map__35803__$1;
var request_url = cljs.core.get.call(null,map__35803__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35803__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33521__auto___35853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___35853,out){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___35853,out){
return (function (state_35838){
var state_val_35839 = (state_35838[(1)]);
if((state_val_35839 === (1))){
var inst_35812 = cljs.core.seq.call(null,files);
var inst_35813 = cljs.core.first.call(null,inst_35812);
var inst_35814 = cljs.core.next.call(null,inst_35812);
var inst_35815 = files;
var state_35838__$1 = (function (){var statearr_35840 = state_35838;
(statearr_35840[(7)] = inst_35813);

(statearr_35840[(8)] = inst_35815);

(statearr_35840[(9)] = inst_35814);

return statearr_35840;
})();
var statearr_35841_35854 = state_35838__$1;
(statearr_35841_35854[(2)] = null);

(statearr_35841_35854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35839 === (2))){
var inst_35821 = (state_35838[(10)]);
var inst_35815 = (state_35838[(8)]);
var inst_35820 = cljs.core.seq.call(null,inst_35815);
var inst_35821__$1 = cljs.core.first.call(null,inst_35820);
var inst_35822 = cljs.core.next.call(null,inst_35820);
var inst_35823 = (inst_35821__$1 == null);
var inst_35824 = cljs.core.not.call(null,inst_35823);
var state_35838__$1 = (function (){var statearr_35842 = state_35838;
(statearr_35842[(11)] = inst_35822);

(statearr_35842[(10)] = inst_35821__$1);

return statearr_35842;
})();
if(inst_35824){
var statearr_35843_35855 = state_35838__$1;
(statearr_35843_35855[(1)] = (4));

} else {
var statearr_35844_35856 = state_35838__$1;
(statearr_35844_35856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35839 === (3))){
var inst_35836 = (state_35838[(2)]);
var state_35838__$1 = state_35838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35838__$1,inst_35836);
} else {
if((state_val_35839 === (4))){
var inst_35821 = (state_35838[(10)]);
var inst_35826 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35821);
var state_35838__$1 = state_35838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35838__$1,(7),inst_35826);
} else {
if((state_val_35839 === (5))){
var inst_35832 = cljs.core.async.close_BANG_.call(null,out);
var state_35838__$1 = state_35838;
var statearr_35845_35857 = state_35838__$1;
(statearr_35845_35857[(2)] = inst_35832);

(statearr_35845_35857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35839 === (6))){
var inst_35834 = (state_35838[(2)]);
var state_35838__$1 = state_35838;
var statearr_35846_35858 = state_35838__$1;
(statearr_35846_35858[(2)] = inst_35834);

(statearr_35846_35858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35839 === (7))){
var inst_35822 = (state_35838[(11)]);
var inst_35828 = (state_35838[(2)]);
var inst_35829 = cljs.core.async.put_BANG_.call(null,out,inst_35828);
var inst_35815 = inst_35822;
var state_35838__$1 = (function (){var statearr_35847 = state_35838;
(statearr_35847[(8)] = inst_35815);

(statearr_35847[(12)] = inst_35829);

return statearr_35847;
})();
var statearr_35848_35859 = state_35838__$1;
(statearr_35848_35859[(2)] = null);

(statearr_35848_35859[(1)] = (2));


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
});})(c__33521__auto___35853,out))
;
return ((function (switch__33426__auto__,c__33521__auto___35853,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33427__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33427__auto____0 = (function (){
var statearr_35849 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35849[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33427__auto__);

(statearr_35849[(1)] = (1));

return statearr_35849;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33427__auto____1 = (function (state_35838){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_35838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e35850){if((e35850 instanceof Object)){
var ex__33430__auto__ = e35850;
var statearr_35851_35860 = state_35838;
(statearr_35851_35860[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35861 = state_35838;
state_35838 = G__35861;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33427__auto__ = function(state_35838){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33427__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33427__auto____1.call(this,state_35838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33427__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33427__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___35853,out))
})();
var state__33523__auto__ = (function (){var statearr_35852 = f__33522__auto__.call(null);
(statearr_35852[(6)] = c__33521__auto___35853);

return statearr_35852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___35853,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35862,opts){
var map__35863 = p__35862;
var map__35863__$1 = (((((!((map__35863 == null))))?(((((map__35863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35863):map__35863);
var eval_body = cljs.core.get.call(null,map__35863__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35865){var e = e35865;
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
return (function (p1__35866_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35866_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35867){
var vec__35868 = p__35867;
var k = cljs.core.nth.call(null,vec__35868,(0),null);
var v = cljs.core.nth.call(null,vec__35868,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35871){
var vec__35872 = p__35871;
var k = cljs.core.nth.call(null,vec__35872,(0),null);
var v = cljs.core.nth.call(null,vec__35872,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35878,p__35879){
var map__35880 = p__35878;
var map__35880__$1 = (((((!((map__35880 == null))))?(((((map__35880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35880):map__35880);
var opts = map__35880__$1;
var before_jsload = cljs.core.get.call(null,map__35880__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35880__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35880__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35881 = p__35879;
var map__35881__$1 = (((((!((map__35881 == null))))?(((((map__35881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35881):map__35881);
var msg = map__35881__$1;
var files = cljs.core.get.call(null,map__35881__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35881__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35881__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36035){
var state_val_36036 = (state_36035[(1)]);
if((state_val_36036 === (7))){
var inst_35895 = (state_36035[(7)]);
var inst_35898 = (state_36035[(8)]);
var inst_35897 = (state_36035[(9)]);
var inst_35896 = (state_36035[(10)]);
var inst_35903 = cljs.core._nth.call(null,inst_35896,inst_35898);
var inst_35904 = figwheel.client.file_reloading.eval_body.call(null,inst_35903,opts);
var inst_35905 = (inst_35898 + (1));
var tmp36037 = inst_35895;
var tmp36038 = inst_35897;
var tmp36039 = inst_35896;
var inst_35895__$1 = tmp36037;
var inst_35896__$1 = tmp36039;
var inst_35897__$1 = tmp36038;
var inst_35898__$1 = inst_35905;
var state_36035__$1 = (function (){var statearr_36040 = state_36035;
(statearr_36040[(7)] = inst_35895__$1);

(statearr_36040[(8)] = inst_35898__$1);

(statearr_36040[(9)] = inst_35897__$1);

(statearr_36040[(10)] = inst_35896__$1);

(statearr_36040[(11)] = inst_35904);

return statearr_36040;
})();
var statearr_36041_36124 = state_36035__$1;
(statearr_36041_36124[(2)] = null);

(statearr_36041_36124[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (20))){
var inst_35938 = (state_36035[(12)]);
var inst_35946 = figwheel.client.file_reloading.sort_files.call(null,inst_35938);
var state_36035__$1 = state_36035;
var statearr_36042_36125 = state_36035__$1;
(statearr_36042_36125[(2)] = inst_35946);

(statearr_36042_36125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (27))){
var state_36035__$1 = state_36035;
var statearr_36043_36126 = state_36035__$1;
(statearr_36043_36126[(2)] = null);

(statearr_36043_36126[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (1))){
var inst_35887 = (state_36035[(13)]);
var inst_35884 = before_jsload.call(null,files);
var inst_35885 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35886 = (function (){return ((function (inst_35887,inst_35884,inst_35885,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35875_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35875_SHARP_);
});
;})(inst_35887,inst_35884,inst_35885,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35887__$1 = cljs.core.filter.call(null,inst_35886,files);
var inst_35888 = cljs.core.not_empty.call(null,inst_35887__$1);
var state_36035__$1 = (function (){var statearr_36044 = state_36035;
(statearr_36044[(13)] = inst_35887__$1);

(statearr_36044[(14)] = inst_35885);

(statearr_36044[(15)] = inst_35884);

return statearr_36044;
})();
if(cljs.core.truth_(inst_35888)){
var statearr_36045_36127 = state_36035__$1;
(statearr_36045_36127[(1)] = (2));

} else {
var statearr_36046_36128 = state_36035__$1;
(statearr_36046_36128[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (24))){
var state_36035__$1 = state_36035;
var statearr_36047_36129 = state_36035__$1;
(statearr_36047_36129[(2)] = null);

(statearr_36047_36129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (39))){
var inst_35988 = (state_36035[(16)]);
var state_36035__$1 = state_36035;
var statearr_36048_36130 = state_36035__$1;
(statearr_36048_36130[(2)] = inst_35988);

(statearr_36048_36130[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (46))){
var inst_36030 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
var statearr_36049_36131 = state_36035__$1;
(statearr_36049_36131[(2)] = inst_36030);

(statearr_36049_36131[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (4))){
var inst_35932 = (state_36035[(2)]);
var inst_35933 = cljs.core.List.EMPTY;
var inst_35934 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35933);
var inst_35935 = (function (){return ((function (inst_35932,inst_35933,inst_35934,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35876_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35876_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35876_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35876_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_35932,inst_35933,inst_35934,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35936 = cljs.core.filter.call(null,inst_35935,files);
var inst_35937 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35938 = cljs.core.concat.call(null,inst_35936,inst_35937);
var state_36035__$1 = (function (){var statearr_36050 = state_36035;
(statearr_36050[(12)] = inst_35938);

(statearr_36050[(17)] = inst_35934);

(statearr_36050[(18)] = inst_35932);

return statearr_36050;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36051_36132 = state_36035__$1;
(statearr_36051_36132[(1)] = (16));

} else {
var statearr_36052_36133 = state_36035__$1;
(statearr_36052_36133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (15))){
var inst_35922 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
var statearr_36053_36134 = state_36035__$1;
(statearr_36053_36134[(2)] = inst_35922);

(statearr_36053_36134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (21))){
var inst_35948 = (state_36035[(19)]);
var inst_35948__$1 = (state_36035[(2)]);
var inst_35949 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35948__$1);
var state_36035__$1 = (function (){var statearr_36054 = state_36035;
(statearr_36054[(19)] = inst_35948__$1);

return statearr_36054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36035__$1,(22),inst_35949);
} else {
if((state_val_36036 === (31))){
var inst_36033 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36035__$1,inst_36033);
} else {
if((state_val_36036 === (32))){
var inst_35988 = (state_36035[(16)]);
var inst_35993 = inst_35988.cljs$lang$protocol_mask$partition0$;
var inst_35994 = (inst_35993 & (64));
var inst_35995 = inst_35988.cljs$core$ISeq$;
var inst_35996 = (cljs.core.PROTOCOL_SENTINEL === inst_35995);
var inst_35997 = ((inst_35994) || (inst_35996));
var state_36035__$1 = state_36035;
if(cljs.core.truth_(inst_35997)){
var statearr_36055_36135 = state_36035__$1;
(statearr_36055_36135[(1)] = (35));

} else {
var statearr_36056_36136 = state_36035__$1;
(statearr_36056_36136[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (40))){
var inst_36010 = (state_36035[(20)]);
var inst_36009 = (state_36035[(2)]);
var inst_36010__$1 = cljs.core.get.call(null,inst_36009,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36011 = cljs.core.get.call(null,inst_36009,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36012 = cljs.core.not_empty.call(null,inst_36010__$1);
var state_36035__$1 = (function (){var statearr_36057 = state_36035;
(statearr_36057[(20)] = inst_36010__$1);

(statearr_36057[(21)] = inst_36011);

return statearr_36057;
})();
if(cljs.core.truth_(inst_36012)){
var statearr_36058_36137 = state_36035__$1;
(statearr_36058_36137[(1)] = (41));

} else {
var statearr_36059_36138 = state_36035__$1;
(statearr_36059_36138[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (33))){
var state_36035__$1 = state_36035;
var statearr_36060_36139 = state_36035__$1;
(statearr_36060_36139[(2)] = false);

(statearr_36060_36139[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (13))){
var inst_35908 = (state_36035[(22)]);
var inst_35912 = cljs.core.chunk_first.call(null,inst_35908);
var inst_35913 = cljs.core.chunk_rest.call(null,inst_35908);
var inst_35914 = cljs.core.count.call(null,inst_35912);
var inst_35895 = inst_35913;
var inst_35896 = inst_35912;
var inst_35897 = inst_35914;
var inst_35898 = (0);
var state_36035__$1 = (function (){var statearr_36061 = state_36035;
(statearr_36061[(7)] = inst_35895);

(statearr_36061[(8)] = inst_35898);

(statearr_36061[(9)] = inst_35897);

(statearr_36061[(10)] = inst_35896);

return statearr_36061;
})();
var statearr_36062_36140 = state_36035__$1;
(statearr_36062_36140[(2)] = null);

(statearr_36062_36140[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (22))){
var inst_35956 = (state_36035[(23)]);
var inst_35948 = (state_36035[(19)]);
var inst_35952 = (state_36035[(24)]);
var inst_35951 = (state_36035[(25)]);
var inst_35951__$1 = (state_36035[(2)]);
var inst_35952__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35951__$1);
var inst_35953 = (function (){var all_files = inst_35948;
var res_SINGLEQUOTE_ = inst_35951__$1;
var res = inst_35952__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35956,inst_35948,inst_35952,inst_35951,inst_35951__$1,inst_35952__$1,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35877_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35877_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35956,inst_35948,inst_35952,inst_35951,inst_35951__$1,inst_35952__$1,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35954 = cljs.core.filter.call(null,inst_35953,inst_35951__$1);
var inst_35955 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35956__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35955);
var inst_35957 = cljs.core.not_empty.call(null,inst_35956__$1);
var state_36035__$1 = (function (){var statearr_36063 = state_36035;
(statearr_36063[(23)] = inst_35956__$1);

(statearr_36063[(24)] = inst_35952__$1);

(statearr_36063[(26)] = inst_35954);

(statearr_36063[(25)] = inst_35951__$1);

return statearr_36063;
})();
if(cljs.core.truth_(inst_35957)){
var statearr_36064_36141 = state_36035__$1;
(statearr_36064_36141[(1)] = (23));

} else {
var statearr_36065_36142 = state_36035__$1;
(statearr_36065_36142[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (36))){
var state_36035__$1 = state_36035;
var statearr_36066_36143 = state_36035__$1;
(statearr_36066_36143[(2)] = false);

(statearr_36066_36143[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (41))){
var inst_36010 = (state_36035[(20)]);
var inst_36014 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36015 = cljs.core.map.call(null,inst_36014,inst_36010);
var inst_36016 = cljs.core.pr_str.call(null,inst_36015);
var inst_36017 = ["figwheel-no-load meta-data: ",inst_36016].join('');
var inst_36018 = figwheel.client.utils.log.call(null,inst_36017);
var state_36035__$1 = state_36035;
var statearr_36067_36144 = state_36035__$1;
(statearr_36067_36144[(2)] = inst_36018);

(statearr_36067_36144[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (43))){
var inst_36011 = (state_36035[(21)]);
var inst_36021 = (state_36035[(2)]);
var inst_36022 = cljs.core.not_empty.call(null,inst_36011);
var state_36035__$1 = (function (){var statearr_36068 = state_36035;
(statearr_36068[(27)] = inst_36021);

return statearr_36068;
})();
if(cljs.core.truth_(inst_36022)){
var statearr_36069_36145 = state_36035__$1;
(statearr_36069_36145[(1)] = (44));

} else {
var statearr_36070_36146 = state_36035__$1;
(statearr_36070_36146[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (29))){
var inst_35956 = (state_36035[(23)]);
var inst_35948 = (state_36035[(19)]);
var inst_35952 = (state_36035[(24)]);
var inst_35954 = (state_36035[(26)]);
var inst_35988 = (state_36035[(16)]);
var inst_35951 = (state_36035[(25)]);
var inst_35984 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35987 = (function (){var all_files = inst_35948;
var res_SINGLEQUOTE_ = inst_35951;
var res = inst_35952;
var files_not_loaded = inst_35954;
var dependencies_that_loaded = inst_35956;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35948,inst_35952,inst_35954,inst_35988,inst_35951,inst_35984,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35986){
var map__36071 = p__35986;
var map__36071__$1 = (((((!((map__36071 == null))))?(((((map__36071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36071):map__36071);
var namespace = cljs.core.get.call(null,map__36071__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35948,inst_35952,inst_35954,inst_35988,inst_35951,inst_35984,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35988__$1 = cljs.core.group_by.call(null,inst_35987,inst_35954);
var inst_35990 = (inst_35988__$1 == null);
var inst_35991 = cljs.core.not.call(null,inst_35990);
var state_36035__$1 = (function (){var statearr_36073 = state_36035;
(statearr_36073[(28)] = inst_35984);

(statearr_36073[(16)] = inst_35988__$1);

return statearr_36073;
})();
if(inst_35991){
var statearr_36074_36147 = state_36035__$1;
(statearr_36074_36147[(1)] = (32));

} else {
var statearr_36075_36148 = state_36035__$1;
(statearr_36075_36148[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (44))){
var inst_36011 = (state_36035[(21)]);
var inst_36024 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36011);
var inst_36025 = cljs.core.pr_str.call(null,inst_36024);
var inst_36026 = ["not required: ",inst_36025].join('');
var inst_36027 = figwheel.client.utils.log.call(null,inst_36026);
var state_36035__$1 = state_36035;
var statearr_36076_36149 = state_36035__$1;
(statearr_36076_36149[(2)] = inst_36027);

(statearr_36076_36149[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (6))){
var inst_35929 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
var statearr_36077_36150 = state_36035__$1;
(statearr_36077_36150[(2)] = inst_35929);

(statearr_36077_36150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (28))){
var inst_35954 = (state_36035[(26)]);
var inst_35981 = (state_36035[(2)]);
var inst_35982 = cljs.core.not_empty.call(null,inst_35954);
var state_36035__$1 = (function (){var statearr_36078 = state_36035;
(statearr_36078[(29)] = inst_35981);

return statearr_36078;
})();
if(cljs.core.truth_(inst_35982)){
var statearr_36079_36151 = state_36035__$1;
(statearr_36079_36151[(1)] = (29));

} else {
var statearr_36080_36152 = state_36035__$1;
(statearr_36080_36152[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (25))){
var inst_35952 = (state_36035[(24)]);
var inst_35968 = (state_36035[(2)]);
var inst_35969 = cljs.core.not_empty.call(null,inst_35952);
var state_36035__$1 = (function (){var statearr_36081 = state_36035;
(statearr_36081[(30)] = inst_35968);

return statearr_36081;
})();
if(cljs.core.truth_(inst_35969)){
var statearr_36082_36153 = state_36035__$1;
(statearr_36082_36153[(1)] = (26));

} else {
var statearr_36083_36154 = state_36035__$1;
(statearr_36083_36154[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (34))){
var inst_36004 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
if(cljs.core.truth_(inst_36004)){
var statearr_36084_36155 = state_36035__$1;
(statearr_36084_36155[(1)] = (38));

} else {
var statearr_36085_36156 = state_36035__$1;
(statearr_36085_36156[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (17))){
var state_36035__$1 = state_36035;
var statearr_36086_36157 = state_36035__$1;
(statearr_36086_36157[(2)] = recompile_dependents);

(statearr_36086_36157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (3))){
var state_36035__$1 = state_36035;
var statearr_36087_36158 = state_36035__$1;
(statearr_36087_36158[(2)] = null);

(statearr_36087_36158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (12))){
var inst_35925 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
var statearr_36088_36159 = state_36035__$1;
(statearr_36088_36159[(2)] = inst_35925);

(statearr_36088_36159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (2))){
var inst_35887 = (state_36035[(13)]);
var inst_35894 = cljs.core.seq.call(null,inst_35887);
var inst_35895 = inst_35894;
var inst_35896 = null;
var inst_35897 = (0);
var inst_35898 = (0);
var state_36035__$1 = (function (){var statearr_36089 = state_36035;
(statearr_36089[(7)] = inst_35895);

(statearr_36089[(8)] = inst_35898);

(statearr_36089[(9)] = inst_35897);

(statearr_36089[(10)] = inst_35896);

return statearr_36089;
})();
var statearr_36090_36160 = state_36035__$1;
(statearr_36090_36160[(2)] = null);

(statearr_36090_36160[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (23))){
var inst_35956 = (state_36035[(23)]);
var inst_35948 = (state_36035[(19)]);
var inst_35952 = (state_36035[(24)]);
var inst_35954 = (state_36035[(26)]);
var inst_35951 = (state_36035[(25)]);
var inst_35959 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35961 = (function (){var all_files = inst_35948;
var res_SINGLEQUOTE_ = inst_35951;
var res = inst_35952;
var files_not_loaded = inst_35954;
var dependencies_that_loaded = inst_35956;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35948,inst_35952,inst_35954,inst_35951,inst_35959,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35960){
var map__36091 = p__35960;
var map__36091__$1 = (((((!((map__36091 == null))))?(((((map__36091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36091):map__36091);
var request_url = cljs.core.get.call(null,map__36091__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35948,inst_35952,inst_35954,inst_35951,inst_35959,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35962 = cljs.core.reverse.call(null,inst_35956);
var inst_35963 = cljs.core.map.call(null,inst_35961,inst_35962);
var inst_35964 = cljs.core.pr_str.call(null,inst_35963);
var inst_35965 = figwheel.client.utils.log.call(null,inst_35964);
var state_36035__$1 = (function (){var statearr_36093 = state_36035;
(statearr_36093[(31)] = inst_35959);

return statearr_36093;
})();
var statearr_36094_36161 = state_36035__$1;
(statearr_36094_36161[(2)] = inst_35965);

(statearr_36094_36161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (35))){
var state_36035__$1 = state_36035;
var statearr_36095_36162 = state_36035__$1;
(statearr_36095_36162[(2)] = true);

(statearr_36095_36162[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (19))){
var inst_35938 = (state_36035[(12)]);
var inst_35944 = figwheel.client.file_reloading.expand_files.call(null,inst_35938);
var state_36035__$1 = state_36035;
var statearr_36096_36163 = state_36035__$1;
(statearr_36096_36163[(2)] = inst_35944);

(statearr_36096_36163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (11))){
var state_36035__$1 = state_36035;
var statearr_36097_36164 = state_36035__$1;
(statearr_36097_36164[(2)] = null);

(statearr_36097_36164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (9))){
var inst_35927 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
var statearr_36098_36165 = state_36035__$1;
(statearr_36098_36165[(2)] = inst_35927);

(statearr_36098_36165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (5))){
var inst_35898 = (state_36035[(8)]);
var inst_35897 = (state_36035[(9)]);
var inst_35900 = (inst_35898 < inst_35897);
var inst_35901 = inst_35900;
var state_36035__$1 = state_36035;
if(cljs.core.truth_(inst_35901)){
var statearr_36099_36166 = state_36035__$1;
(statearr_36099_36166[(1)] = (7));

} else {
var statearr_36100_36167 = state_36035__$1;
(statearr_36100_36167[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (14))){
var inst_35908 = (state_36035[(22)]);
var inst_35917 = cljs.core.first.call(null,inst_35908);
var inst_35918 = figwheel.client.file_reloading.eval_body.call(null,inst_35917,opts);
var inst_35919 = cljs.core.next.call(null,inst_35908);
var inst_35895 = inst_35919;
var inst_35896 = null;
var inst_35897 = (0);
var inst_35898 = (0);
var state_36035__$1 = (function (){var statearr_36101 = state_36035;
(statearr_36101[(7)] = inst_35895);

(statearr_36101[(32)] = inst_35918);

(statearr_36101[(8)] = inst_35898);

(statearr_36101[(9)] = inst_35897);

(statearr_36101[(10)] = inst_35896);

return statearr_36101;
})();
var statearr_36102_36168 = state_36035__$1;
(statearr_36102_36168[(2)] = null);

(statearr_36102_36168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (45))){
var state_36035__$1 = state_36035;
var statearr_36103_36169 = state_36035__$1;
(statearr_36103_36169[(2)] = null);

(statearr_36103_36169[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (26))){
var inst_35956 = (state_36035[(23)]);
var inst_35948 = (state_36035[(19)]);
var inst_35952 = (state_36035[(24)]);
var inst_35954 = (state_36035[(26)]);
var inst_35951 = (state_36035[(25)]);
var inst_35971 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35973 = (function (){var all_files = inst_35948;
var res_SINGLEQUOTE_ = inst_35951;
var res = inst_35952;
var files_not_loaded = inst_35954;
var dependencies_that_loaded = inst_35956;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35948,inst_35952,inst_35954,inst_35951,inst_35971,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35972){
var map__36104 = p__35972;
var map__36104__$1 = (((((!((map__36104 == null))))?(((((map__36104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36104):map__36104);
var namespace = cljs.core.get.call(null,map__36104__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36104__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35948,inst_35952,inst_35954,inst_35951,inst_35971,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35974 = cljs.core.map.call(null,inst_35973,inst_35952);
var inst_35975 = cljs.core.pr_str.call(null,inst_35974);
var inst_35976 = figwheel.client.utils.log.call(null,inst_35975);
var inst_35977 = (function (){var all_files = inst_35948;
var res_SINGLEQUOTE_ = inst_35951;
var res = inst_35952;
var files_not_loaded = inst_35954;
var dependencies_that_loaded = inst_35956;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35948,inst_35952,inst_35954,inst_35951,inst_35971,inst_35973,inst_35974,inst_35975,inst_35976,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35956,inst_35948,inst_35952,inst_35954,inst_35951,inst_35971,inst_35973,inst_35974,inst_35975,inst_35976,state_val_36036,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35978 = setTimeout(inst_35977,(10));
var state_36035__$1 = (function (){var statearr_36106 = state_36035;
(statearr_36106[(33)] = inst_35976);

(statearr_36106[(34)] = inst_35971);

return statearr_36106;
})();
var statearr_36107_36170 = state_36035__$1;
(statearr_36107_36170[(2)] = inst_35978);

(statearr_36107_36170[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (16))){
var state_36035__$1 = state_36035;
var statearr_36108_36171 = state_36035__$1;
(statearr_36108_36171[(2)] = reload_dependents);

(statearr_36108_36171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (38))){
var inst_35988 = (state_36035[(16)]);
var inst_36006 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35988);
var state_36035__$1 = state_36035;
var statearr_36109_36172 = state_36035__$1;
(statearr_36109_36172[(2)] = inst_36006);

(statearr_36109_36172[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (30))){
var state_36035__$1 = state_36035;
var statearr_36110_36173 = state_36035__$1;
(statearr_36110_36173[(2)] = null);

(statearr_36110_36173[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (10))){
var inst_35908 = (state_36035[(22)]);
var inst_35910 = cljs.core.chunked_seq_QMARK_.call(null,inst_35908);
var state_36035__$1 = state_36035;
if(inst_35910){
var statearr_36111_36174 = state_36035__$1;
(statearr_36111_36174[(1)] = (13));

} else {
var statearr_36112_36175 = state_36035__$1;
(statearr_36112_36175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (18))){
var inst_35942 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
if(cljs.core.truth_(inst_35942)){
var statearr_36113_36176 = state_36035__$1;
(statearr_36113_36176[(1)] = (19));

} else {
var statearr_36114_36177 = state_36035__$1;
(statearr_36114_36177[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (42))){
var state_36035__$1 = state_36035;
var statearr_36115_36178 = state_36035__$1;
(statearr_36115_36178[(2)] = null);

(statearr_36115_36178[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (37))){
var inst_36001 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
var statearr_36116_36179 = state_36035__$1;
(statearr_36116_36179[(2)] = inst_36001);

(statearr_36116_36179[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (8))){
var inst_35895 = (state_36035[(7)]);
var inst_35908 = (state_36035[(22)]);
var inst_35908__$1 = cljs.core.seq.call(null,inst_35895);
var state_36035__$1 = (function (){var statearr_36117 = state_36035;
(statearr_36117[(22)] = inst_35908__$1);

return statearr_36117;
})();
if(inst_35908__$1){
var statearr_36118_36180 = state_36035__$1;
(statearr_36118_36180[(1)] = (10));

} else {
var statearr_36119_36181 = state_36035__$1;
(statearr_36119_36181[(1)] = (11));

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
});})(c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33426__auto__,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33427__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33427__auto____0 = (function (){
var statearr_36120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36120[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33427__auto__);

(statearr_36120[(1)] = (1));

return statearr_36120;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33427__auto____1 = (function (state_36035){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_36035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e36121){if((e36121 instanceof Object)){
var ex__33430__auto__ = e36121;
var statearr_36122_36182 = state_36035;
(statearr_36122_36182[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36183 = state_36035;
state_36035 = G__36183;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33427__auto__ = function(state_36035){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33427__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33427__auto____1.call(this,state_36035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33427__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33427__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33523__auto__ = (function (){var statearr_36123 = f__33522__auto__.call(null);
(statearr_36123[(6)] = c__33521__auto__);

return statearr_36123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto__,map__35880,map__35880__$1,opts,before_jsload,on_jsload,reload_dependents,map__35881,map__35881__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33521__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36186,link){
var map__36187 = p__36186;
var map__36187__$1 = (((((!((map__36187 == null))))?(((((map__36187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36187):map__36187);
var file = cljs.core.get.call(null,map__36187__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__36187,map__36187__$1,file){
return (function (p1__36184_SHARP_,p2__36185_SHARP_){
if(cljs.core._EQ_.call(null,p1__36184_SHARP_,p2__36185_SHARP_)){
return p1__36184_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__36187,map__36187__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36190){
var map__36191 = p__36190;
var map__36191__$1 = (((((!((map__36191 == null))))?(((((map__36191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36191):map__36191);
var match_length = cljs.core.get.call(null,map__36191__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36191__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36189_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36189_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36193_SHARP_,p2__36194_SHARP_){
return cljs.core.assoc.call(null,p1__36193_SHARP_,cljs.core.get.call(null,p2__36194_SHARP_,key),p2__36194_SHARP_);
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
var loaded_f_datas_36195 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36195);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36195);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36196,p__36197){
var map__36198 = p__36196;
var map__36198__$1 = (((((!((map__36198 == null))))?(((((map__36198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36198):map__36198);
var on_cssload = cljs.core.get.call(null,map__36198__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36199 = p__36197;
var map__36199__$1 = (((((!((map__36199 == null))))?(((((map__36199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36199):map__36199);
var files_msg = map__36199__$1;
var files = cljs.core.get.call(null,map__36199__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1568179221405
