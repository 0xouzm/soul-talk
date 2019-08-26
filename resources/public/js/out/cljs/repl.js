// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29964){
var map__29965 = p__29964;
var map__29965__$1 = (((((!((map__29965 == null))))?(((((map__29965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29965):map__29965);
var m = map__29965__$1;
var n = cljs.core.get.call(null,map__29965__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29965__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29967_29999 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29968_30000 = null;
var count__29969_30001 = (0);
var i__29970_30002 = (0);
while(true){
if((i__29970_30002 < count__29969_30001)){
var f_30003 = cljs.core._nth.call(null,chunk__29968_30000,i__29970_30002);
cljs.core.println.call(null,"  ",f_30003);


var G__30004 = seq__29967_29999;
var G__30005 = chunk__29968_30000;
var G__30006 = count__29969_30001;
var G__30007 = (i__29970_30002 + (1));
seq__29967_29999 = G__30004;
chunk__29968_30000 = G__30005;
count__29969_30001 = G__30006;
i__29970_30002 = G__30007;
continue;
} else {
var temp__5720__auto___30008 = cljs.core.seq.call(null,seq__29967_29999);
if(temp__5720__auto___30008){
var seq__29967_30009__$1 = temp__5720__auto___30008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29967_30009__$1)){
var c__4550__auto___30010 = cljs.core.chunk_first.call(null,seq__29967_30009__$1);
var G__30011 = cljs.core.chunk_rest.call(null,seq__29967_30009__$1);
var G__30012 = c__4550__auto___30010;
var G__30013 = cljs.core.count.call(null,c__4550__auto___30010);
var G__30014 = (0);
seq__29967_29999 = G__30011;
chunk__29968_30000 = G__30012;
count__29969_30001 = G__30013;
i__29970_30002 = G__30014;
continue;
} else {
var f_30015 = cljs.core.first.call(null,seq__29967_30009__$1);
cljs.core.println.call(null,"  ",f_30015);


var G__30016 = cljs.core.next.call(null,seq__29967_30009__$1);
var G__30017 = null;
var G__30018 = (0);
var G__30019 = (0);
seq__29967_29999 = G__30016;
chunk__29968_30000 = G__30017;
count__29969_30001 = G__30018;
i__29970_30002 = G__30019;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30020 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30020);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30020)))?cljs.core.second.call(null,arglists_30020):arglists_30020));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29971_30021 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29972_30022 = null;
var count__29973_30023 = (0);
var i__29974_30024 = (0);
while(true){
if((i__29974_30024 < count__29973_30023)){
var vec__29985_30025 = cljs.core._nth.call(null,chunk__29972_30022,i__29974_30024);
var name_30026 = cljs.core.nth.call(null,vec__29985_30025,(0),null);
var map__29988_30027 = cljs.core.nth.call(null,vec__29985_30025,(1),null);
var map__29988_30028__$1 = (((((!((map__29988_30027 == null))))?(((((map__29988_30027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29988_30027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29988_30027):map__29988_30027);
var doc_30029 = cljs.core.get.call(null,map__29988_30028__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30030 = cljs.core.get.call(null,map__29988_30028__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30026);

cljs.core.println.call(null," ",arglists_30030);

if(cljs.core.truth_(doc_30029)){
cljs.core.println.call(null," ",doc_30029);
} else {
}


var G__30031 = seq__29971_30021;
var G__30032 = chunk__29972_30022;
var G__30033 = count__29973_30023;
var G__30034 = (i__29974_30024 + (1));
seq__29971_30021 = G__30031;
chunk__29972_30022 = G__30032;
count__29973_30023 = G__30033;
i__29974_30024 = G__30034;
continue;
} else {
var temp__5720__auto___30035 = cljs.core.seq.call(null,seq__29971_30021);
if(temp__5720__auto___30035){
var seq__29971_30036__$1 = temp__5720__auto___30035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29971_30036__$1)){
var c__4550__auto___30037 = cljs.core.chunk_first.call(null,seq__29971_30036__$1);
var G__30038 = cljs.core.chunk_rest.call(null,seq__29971_30036__$1);
var G__30039 = c__4550__auto___30037;
var G__30040 = cljs.core.count.call(null,c__4550__auto___30037);
var G__30041 = (0);
seq__29971_30021 = G__30038;
chunk__29972_30022 = G__30039;
count__29973_30023 = G__30040;
i__29974_30024 = G__30041;
continue;
} else {
var vec__29990_30042 = cljs.core.first.call(null,seq__29971_30036__$1);
var name_30043 = cljs.core.nth.call(null,vec__29990_30042,(0),null);
var map__29993_30044 = cljs.core.nth.call(null,vec__29990_30042,(1),null);
var map__29993_30045__$1 = (((((!((map__29993_30044 == null))))?(((((map__29993_30044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29993_30044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29993_30044):map__29993_30044);
var doc_30046 = cljs.core.get.call(null,map__29993_30045__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30047 = cljs.core.get.call(null,map__29993_30045__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30043);

cljs.core.println.call(null," ",arglists_30047);

if(cljs.core.truth_(doc_30046)){
cljs.core.println.call(null," ",doc_30046);
} else {
}


var G__30048 = cljs.core.next.call(null,seq__29971_30036__$1);
var G__30049 = null;
var G__30050 = (0);
var G__30051 = (0);
seq__29971_30021 = G__30048;
chunk__29972_30022 = G__30049;
count__29973_30023 = G__30050;
i__29974_30024 = G__30051;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__29995 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29996 = null;
var count__29997 = (0);
var i__29998 = (0);
while(true){
if((i__29998 < count__29997)){
var role = cljs.core._nth.call(null,chunk__29996,i__29998);
var temp__5720__auto___30052__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30052__$1)){
var spec_30053 = temp__5720__auto___30052__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30053));
} else {
}


var G__30054 = seq__29995;
var G__30055 = chunk__29996;
var G__30056 = count__29997;
var G__30057 = (i__29998 + (1));
seq__29995 = G__30054;
chunk__29996 = G__30055;
count__29997 = G__30056;
i__29998 = G__30057;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__29995);
if(temp__5720__auto____$1){
var seq__29995__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29995__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29995__$1);
var G__30058 = cljs.core.chunk_rest.call(null,seq__29995__$1);
var G__30059 = c__4550__auto__;
var G__30060 = cljs.core.count.call(null,c__4550__auto__);
var G__30061 = (0);
seq__29995 = G__30058;
chunk__29996 = G__30059;
count__29997 = G__30060;
i__29998 = G__30061;
continue;
} else {
var role = cljs.core.first.call(null,seq__29995__$1);
var temp__5720__auto___30062__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30062__$2)){
var spec_30063 = temp__5720__auto___30062__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30063));
} else {
}


var G__30064 = cljs.core.next.call(null,seq__29995__$1);
var G__30065 = null;
var G__30066 = (0);
var G__30067 = (0);
seq__29995 = G__30064;
chunk__29996 = G__30065;
count__29997 = G__30066;
i__29998 = G__30067;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30068 = cljs.core.conj.call(null,via,t);
var G__30069 = cljs.core.ex_cause.call(null,t);
via = G__30068;
t = G__30069;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__30072 = datafied_throwable;
var map__30072__$1 = (((((!((map__30072 == null))))?(((((map__30072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30072):map__30072);
var via = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30073 = cljs.core.last.call(null,via);
var map__30073__$1 = (((((!((map__30073 == null))))?(((((map__30073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30073):map__30073);
var type = cljs.core.get.call(null,map__30073__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30073__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30073__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30074 = data;
var map__30074__$1 = (((((!((map__30074 == null))))?(((((map__30074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30074):map__30074);
var problems = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30075 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30075__$1 = (((((!((map__30075 == null))))?(((((map__30075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30075):map__30075);
var top_data = map__30075__$1;
var source = cljs.core.get.call(null,map__30075__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30080 = phase;
var G__30080__$1 = (((G__30080 instanceof cljs.core.Keyword))?G__30080.fqn:null);
switch (G__30080__$1) {
case "read-source":
var map__30081 = data;
var map__30081__$1 = (((((!((map__30081 == null))))?(((((map__30081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30081):map__30081);
var line = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30083 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30083__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30083,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30083);
var G__30083__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30083__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30083__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30083__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30083__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30084 = top_data;
var G__30084__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30084,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30084);
var G__30084__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30084__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30084__$1);
var G__30084__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30084__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30084__$2);
var G__30084__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30084__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30084__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30084__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30084__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30085 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30085,(0),null);
var method = cljs.core.nth.call(null,vec__30085,(1),null);
var file = cljs.core.nth.call(null,vec__30085,(2),null);
var line = cljs.core.nth.call(null,vec__30085,(3),null);
var G__30088 = top_data;
var G__30088__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30088,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30088);
var G__30088__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30088__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30088__$1);
var G__30088__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__30088__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30088__$2);
var G__30088__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30088__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30088__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30088__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30088__$4;
}

break;
case "execution":
var vec__30089 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30089,(0),null);
var method = cljs.core.nth.call(null,vec__30089,(1),null);
var file = cljs.core.nth.call(null,vec__30089,(2),null);
var line = cljs.core.nth.call(null,vec__30089,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__30089,source__$1,method,file,line,G__30080,G__30080__$1,map__30072,map__30072__$1,via,trace,phase,map__30073,map__30073__$1,type,message,data,map__30074,map__30074__$1,problems,fn,caller,map__30075,map__30075__$1,top_data,source){
return (function (p1__30071_SHARP_){
var or__4131__auto__ = (p1__30071_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30071_SHARP_);
}
});})(vec__30089,source__$1,method,file,line,G__30080,G__30080__$1,map__30072,map__30072__$1,via,trace,phase,map__30073,map__30073__$1,type,message,data,map__30074,map__30074__$1,problems,fn,caller,map__30075,map__30075__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__30092 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30092__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30092,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30092);
var G__30092__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30092__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30092__$1);
var G__30092__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30092__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30092__$2);
var G__30092__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30092__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30092__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30092__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30092__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30080__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30096){
var map__30097 = p__30096;
var map__30097__$1 = (((((!((map__30097 == null))))?(((((map__30097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30097):map__30097);
var triage_data = map__30097__$1;
var phase = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30099 = phase;
var G__30099__$1 = (((G__30099 instanceof cljs.core.Keyword))?G__30099.fqn:null);
switch (G__30099__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30100_30109 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30101_30110 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30102_30111 = true;
var _STAR_print_fn_STAR__temp_val__30103_30112 = ((function (_STAR_print_newline_STAR__orig_val__30100_30109,_STAR_print_fn_STAR__orig_val__30101_30110,_STAR_print_newline_STAR__temp_val__30102_30111,sb__4661__auto__,G__30099,G__30099__$1,loc,class_name,simple_class,cause_type,format,map__30097,map__30097__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30100_30109,_STAR_print_fn_STAR__orig_val__30101_30110,_STAR_print_newline_STAR__temp_val__30102_30111,sb__4661__auto__,G__30099,G__30099__$1,loc,class_name,simple_class,cause_type,format,map__30097,map__30097__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30102_30111;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30103_30112;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30100_30109,_STAR_print_fn_STAR__orig_val__30101_30110,_STAR_print_newline_STAR__temp_val__30102_30111,_STAR_print_fn_STAR__temp_val__30103_30112,sb__4661__auto__,G__30099,G__30099__$1,loc,class_name,simple_class,cause_type,format,map__30097,map__30097__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30100_30109,_STAR_print_fn_STAR__orig_val__30101_30110,_STAR_print_newline_STAR__temp_val__30102_30111,_STAR_print_fn_STAR__temp_val__30103_30112,sb__4661__auto__,G__30099,G__30099__$1,loc,class_name,simple_class,cause_type,format,map__30097,map__30097__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30094_SHARP_){
return cljs.core.dissoc.call(null,p1__30094_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30100_30109,_STAR_print_fn_STAR__orig_val__30101_30110,_STAR_print_newline_STAR__temp_val__30102_30111,_STAR_print_fn_STAR__temp_val__30103_30112,sb__4661__auto__,G__30099,G__30099__$1,loc,class_name,simple_class,cause_type,format,map__30097,map__30097__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30100_30109,_STAR_print_fn_STAR__orig_val__30101_30110,_STAR_print_newline_STAR__temp_val__30102_30111,_STAR_print_fn_STAR__temp_val__30103_30112,sb__4661__auto__,G__30099,G__30099__$1,loc,class_name,simple_class,cause_type,format,map__30097,map__30097__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30101_30110;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30100_30109;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30104_30113 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30105_30114 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30106_30115 = true;
var _STAR_print_fn_STAR__temp_val__30107_30116 = ((function (_STAR_print_newline_STAR__orig_val__30104_30113,_STAR_print_fn_STAR__orig_val__30105_30114,_STAR_print_newline_STAR__temp_val__30106_30115,sb__4661__auto__,G__30099,G__30099__$1,loc,class_name,simple_class,cause_type,format,map__30097,map__30097__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30104_30113,_STAR_print_fn_STAR__orig_val__30105_30114,_STAR_print_newline_STAR__temp_val__30106_30115,sb__4661__auto__,G__30099,G__30099__$1,loc,class_name,simple_class,cause_type,format,map__30097,map__30097__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30106_30115;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30107_30116;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30104_30113,_STAR_print_fn_STAR__orig_val__30105_30114,_STAR_print_newline_STAR__temp_val__30106_30115,_STAR_print_fn_STAR__temp_val__30107_30116,sb__4661__auto__,G__30099,G__30099__$1,loc,class_name,simple_class,cause_type,format,map__30097,map__30097__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30104_30113,_STAR_print_fn_STAR__orig_val__30105_30114,_STAR_print_newline_STAR__temp_val__30106_30115,_STAR_print_fn_STAR__temp_val__30107_30116,sb__4661__auto__,G__30099,G__30099__$1,loc,class_name,simple_class,cause_type,format,map__30097,map__30097__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30095_SHARP_){
return cljs.core.dissoc.call(null,p1__30095_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30104_30113,_STAR_print_fn_STAR__orig_val__30105_30114,_STAR_print_newline_STAR__temp_val__30106_30115,_STAR_print_fn_STAR__temp_val__30107_30116,sb__4661__auto__,G__30099,G__30099__$1,loc,class_name,simple_class,cause_type,format,map__30097,map__30097__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30104_30113,_STAR_print_fn_STAR__orig_val__30105_30114,_STAR_print_newline_STAR__temp_val__30106_30115,_STAR_print_fn_STAR__temp_val__30107_30116,sb__4661__auto__,G__30099,G__30099__$1,loc,class_name,simple_class,cause_type,format,map__30097,map__30097__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30105_30114;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30104_30113;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30099__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1566805871745
