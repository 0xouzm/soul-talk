// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36859){
var map__36860 = p__36859;
var map__36860__$1 = (((((!((map__36860 == null))))?(((((map__36860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36860):map__36860);
var m = map__36860__$1;
var n = cljs.core.get.call(null,map__36860__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36860__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36862_36894 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36863_36895 = null;
var count__36864_36896 = (0);
var i__36865_36897 = (0);
while(true){
if((i__36865_36897 < count__36864_36896)){
var f_36898 = cljs.core._nth.call(null,chunk__36863_36895,i__36865_36897);
cljs.core.println.call(null,"  ",f_36898);


var G__36899 = seq__36862_36894;
var G__36900 = chunk__36863_36895;
var G__36901 = count__36864_36896;
var G__36902 = (i__36865_36897 + (1));
seq__36862_36894 = G__36899;
chunk__36863_36895 = G__36900;
count__36864_36896 = G__36901;
i__36865_36897 = G__36902;
continue;
} else {
var temp__5720__auto___36903 = cljs.core.seq.call(null,seq__36862_36894);
if(temp__5720__auto___36903){
var seq__36862_36904__$1 = temp__5720__auto___36903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36862_36904__$1)){
var c__4550__auto___36905 = cljs.core.chunk_first.call(null,seq__36862_36904__$1);
var G__36906 = cljs.core.chunk_rest.call(null,seq__36862_36904__$1);
var G__36907 = c__4550__auto___36905;
var G__36908 = cljs.core.count.call(null,c__4550__auto___36905);
var G__36909 = (0);
seq__36862_36894 = G__36906;
chunk__36863_36895 = G__36907;
count__36864_36896 = G__36908;
i__36865_36897 = G__36909;
continue;
} else {
var f_36910 = cljs.core.first.call(null,seq__36862_36904__$1);
cljs.core.println.call(null,"  ",f_36910);


var G__36911 = cljs.core.next.call(null,seq__36862_36904__$1);
var G__36912 = null;
var G__36913 = (0);
var G__36914 = (0);
seq__36862_36894 = G__36911;
chunk__36863_36895 = G__36912;
count__36864_36896 = G__36913;
i__36865_36897 = G__36914;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36915 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36915);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36915)))?cljs.core.second.call(null,arglists_36915):arglists_36915));
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
var seq__36866_36916 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36867_36917 = null;
var count__36868_36918 = (0);
var i__36869_36919 = (0);
while(true){
if((i__36869_36919 < count__36868_36918)){
var vec__36880_36920 = cljs.core._nth.call(null,chunk__36867_36917,i__36869_36919);
var name_36921 = cljs.core.nth.call(null,vec__36880_36920,(0),null);
var map__36883_36922 = cljs.core.nth.call(null,vec__36880_36920,(1),null);
var map__36883_36923__$1 = (((((!((map__36883_36922 == null))))?(((((map__36883_36922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36883_36922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36883_36922):map__36883_36922);
var doc_36924 = cljs.core.get.call(null,map__36883_36923__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36925 = cljs.core.get.call(null,map__36883_36923__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36921);

cljs.core.println.call(null," ",arglists_36925);

if(cljs.core.truth_(doc_36924)){
cljs.core.println.call(null," ",doc_36924);
} else {
}


var G__36926 = seq__36866_36916;
var G__36927 = chunk__36867_36917;
var G__36928 = count__36868_36918;
var G__36929 = (i__36869_36919 + (1));
seq__36866_36916 = G__36926;
chunk__36867_36917 = G__36927;
count__36868_36918 = G__36928;
i__36869_36919 = G__36929;
continue;
} else {
var temp__5720__auto___36930 = cljs.core.seq.call(null,seq__36866_36916);
if(temp__5720__auto___36930){
var seq__36866_36931__$1 = temp__5720__auto___36930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36866_36931__$1)){
var c__4550__auto___36932 = cljs.core.chunk_first.call(null,seq__36866_36931__$1);
var G__36933 = cljs.core.chunk_rest.call(null,seq__36866_36931__$1);
var G__36934 = c__4550__auto___36932;
var G__36935 = cljs.core.count.call(null,c__4550__auto___36932);
var G__36936 = (0);
seq__36866_36916 = G__36933;
chunk__36867_36917 = G__36934;
count__36868_36918 = G__36935;
i__36869_36919 = G__36936;
continue;
} else {
var vec__36885_36937 = cljs.core.first.call(null,seq__36866_36931__$1);
var name_36938 = cljs.core.nth.call(null,vec__36885_36937,(0),null);
var map__36888_36939 = cljs.core.nth.call(null,vec__36885_36937,(1),null);
var map__36888_36940__$1 = (((((!((map__36888_36939 == null))))?(((((map__36888_36939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36888_36939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36888_36939):map__36888_36939);
var doc_36941 = cljs.core.get.call(null,map__36888_36940__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36942 = cljs.core.get.call(null,map__36888_36940__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36938);

cljs.core.println.call(null," ",arglists_36942);

if(cljs.core.truth_(doc_36941)){
cljs.core.println.call(null," ",doc_36941);
} else {
}


var G__36943 = cljs.core.next.call(null,seq__36866_36931__$1);
var G__36944 = null;
var G__36945 = (0);
var G__36946 = (0);
seq__36866_36916 = G__36943;
chunk__36867_36917 = G__36944;
count__36868_36918 = G__36945;
i__36869_36919 = G__36946;
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

var seq__36890 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36891 = null;
var count__36892 = (0);
var i__36893 = (0);
while(true){
if((i__36893 < count__36892)){
var role = cljs.core._nth.call(null,chunk__36891,i__36893);
var temp__5720__auto___36947__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___36947__$1)){
var spec_36948 = temp__5720__auto___36947__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36948));
} else {
}


var G__36949 = seq__36890;
var G__36950 = chunk__36891;
var G__36951 = count__36892;
var G__36952 = (i__36893 + (1));
seq__36890 = G__36949;
chunk__36891 = G__36950;
count__36892 = G__36951;
i__36893 = G__36952;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__36890);
if(temp__5720__auto____$1){
var seq__36890__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36890__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36890__$1);
var G__36953 = cljs.core.chunk_rest.call(null,seq__36890__$1);
var G__36954 = c__4550__auto__;
var G__36955 = cljs.core.count.call(null,c__4550__auto__);
var G__36956 = (0);
seq__36890 = G__36953;
chunk__36891 = G__36954;
count__36892 = G__36955;
i__36893 = G__36956;
continue;
} else {
var role = cljs.core.first.call(null,seq__36890__$1);
var temp__5720__auto___36957__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___36957__$2)){
var spec_36958 = temp__5720__auto___36957__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36958));
} else {
}


var G__36959 = cljs.core.next.call(null,seq__36890__$1);
var G__36960 = null;
var G__36961 = (0);
var G__36962 = (0);
seq__36890 = G__36959;
chunk__36891 = G__36960;
count__36892 = G__36961;
i__36893 = G__36962;
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
var G__36963 = cljs.core.conj.call(null,via,t);
var G__36964 = cljs.core.ex_cause.call(null,t);
via = G__36963;
t = G__36964;
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
var map__36967 = datafied_throwable;
var map__36967__$1 = (((((!((map__36967 == null))))?(((((map__36967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36967):map__36967);
var via = cljs.core.get.call(null,map__36967__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__36967__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__36967__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36968 = cljs.core.last.call(null,via);
var map__36968__$1 = (((((!((map__36968 == null))))?(((((map__36968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36968):map__36968);
var type = cljs.core.get.call(null,map__36968__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__36968__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__36968__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36969 = data;
var map__36969__$1 = (((((!((map__36969 == null))))?(((((map__36969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36969):map__36969);
var problems = cljs.core.get.call(null,map__36969__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__36969__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__36969__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36970 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__36970__$1 = (((((!((map__36970 == null))))?(((((map__36970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36970):map__36970);
var top_data = map__36970__$1;
var source = cljs.core.get.call(null,map__36970__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__36975 = phase;
var G__36975__$1 = (((G__36975 instanceof cljs.core.Keyword))?G__36975.fqn:null);
switch (G__36975__$1) {
case "read-source":
var map__36976 = data;
var map__36976__$1 = (((((!((map__36976 == null))))?(((((map__36976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36976):map__36976);
var line = cljs.core.get.call(null,map__36976__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__36976__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36978 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__36978__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__36978,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36978);
var G__36978__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__36978__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36978__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__36978__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36978__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36979 = top_data;
var G__36979__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__36979,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36979);
var G__36979__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__36979__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36979__$1);
var G__36979__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__36979__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36979__$2);
var G__36979__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__36979__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36979__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__36979__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36979__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36980 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__36980,(0),null);
var method = cljs.core.nth.call(null,vec__36980,(1),null);
var file = cljs.core.nth.call(null,vec__36980,(2),null);
var line = cljs.core.nth.call(null,vec__36980,(3),null);
var G__36983 = top_data;
var G__36983__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__36983,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36983);
var G__36983__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__36983__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36983__$1);
var G__36983__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__36983__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36983__$2);
var G__36983__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__36983__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36983__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__36983__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36983__$4;
}

break;
case "execution":
var vec__36984 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__36984,(0),null);
var method = cljs.core.nth.call(null,vec__36984,(1),null);
var file = cljs.core.nth.call(null,vec__36984,(2),null);
var line = cljs.core.nth.call(null,vec__36984,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__36984,source__$1,method,file,line,G__36975,G__36975__$1,map__36967,map__36967__$1,via,trace,phase,map__36968,map__36968__$1,type,message,data,map__36969,map__36969__$1,problems,fn,caller,map__36970,map__36970__$1,top_data,source){
return (function (p1__36966_SHARP_){
var or__4131__auto__ = (p1__36966_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__36966_SHARP_);
}
});})(vec__36984,source__$1,method,file,line,G__36975,G__36975__$1,map__36967,map__36967__$1,via,trace,phase,map__36968,map__36968__$1,type,message,data,map__36969,map__36969__$1,problems,fn,caller,map__36970,map__36970__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__36987 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36987__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__36987,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36987);
var G__36987__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__36987__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36987__$1);
var G__36987__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__36987__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36987__$2);
var G__36987__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__36987__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36987__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__36987__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36987__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36975__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36991){
var map__36992 = p__36991;
var map__36992__$1 = (((((!((map__36992 == null))))?(((((map__36992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36992):map__36992);
var triage_data = map__36992__$1;
var phase = cljs.core.get.call(null,map__36992__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__36992__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__36992__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__36992__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__36992__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__36992__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__36992__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__36992__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36994 = phase;
var G__36994__$1 = (((G__36994 instanceof cljs.core.Keyword))?G__36994.fqn:null);
switch (G__36994__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36995_37004 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36996_37005 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36997_37006 = true;
var _STAR_print_fn_STAR__temp_val__36998_37007 = ((function (_STAR_print_newline_STAR__orig_val__36995_37004,_STAR_print_fn_STAR__orig_val__36996_37005,_STAR_print_newline_STAR__temp_val__36997_37006,sb__4661__auto__,G__36994,G__36994__$1,loc,class_name,simple_class,cause_type,format,map__36992,map__36992__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__36995_37004,_STAR_print_fn_STAR__orig_val__36996_37005,_STAR_print_newline_STAR__temp_val__36997_37006,sb__4661__auto__,G__36994,G__36994__$1,loc,class_name,simple_class,cause_type,format,map__36992,map__36992__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36997_37006;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36998_37007;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__36995_37004,_STAR_print_fn_STAR__orig_val__36996_37005,_STAR_print_newline_STAR__temp_val__36997_37006,_STAR_print_fn_STAR__temp_val__36998_37007,sb__4661__auto__,G__36994,G__36994__$1,loc,class_name,simple_class,cause_type,format,map__36992,map__36992__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__36995_37004,_STAR_print_fn_STAR__orig_val__36996_37005,_STAR_print_newline_STAR__temp_val__36997_37006,_STAR_print_fn_STAR__temp_val__36998_37007,sb__4661__auto__,G__36994,G__36994__$1,loc,class_name,simple_class,cause_type,format,map__36992,map__36992__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__36989_SHARP_){
return cljs.core.dissoc.call(null,p1__36989_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__36995_37004,_STAR_print_fn_STAR__orig_val__36996_37005,_STAR_print_newline_STAR__temp_val__36997_37006,_STAR_print_fn_STAR__temp_val__36998_37007,sb__4661__auto__,G__36994,G__36994__$1,loc,class_name,simple_class,cause_type,format,map__36992,map__36992__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__36995_37004,_STAR_print_fn_STAR__orig_val__36996_37005,_STAR_print_newline_STAR__temp_val__36997_37006,_STAR_print_fn_STAR__temp_val__36998_37007,sb__4661__auto__,G__36994,G__36994__$1,loc,class_name,simple_class,cause_type,format,map__36992,map__36992__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36996_37005;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36995_37004;
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
var _STAR_print_newline_STAR__orig_val__36999_37008 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37000_37009 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37001_37010 = true;
var _STAR_print_fn_STAR__temp_val__37002_37011 = ((function (_STAR_print_newline_STAR__orig_val__36999_37008,_STAR_print_fn_STAR__orig_val__37000_37009,_STAR_print_newline_STAR__temp_val__37001_37010,sb__4661__auto__,G__36994,G__36994__$1,loc,class_name,simple_class,cause_type,format,map__36992,map__36992__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__36999_37008,_STAR_print_fn_STAR__orig_val__37000_37009,_STAR_print_newline_STAR__temp_val__37001_37010,sb__4661__auto__,G__36994,G__36994__$1,loc,class_name,simple_class,cause_type,format,map__36992,map__36992__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37001_37010;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37002_37011;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__36999_37008,_STAR_print_fn_STAR__orig_val__37000_37009,_STAR_print_newline_STAR__temp_val__37001_37010,_STAR_print_fn_STAR__temp_val__37002_37011,sb__4661__auto__,G__36994,G__36994__$1,loc,class_name,simple_class,cause_type,format,map__36992,map__36992__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__36999_37008,_STAR_print_fn_STAR__orig_val__37000_37009,_STAR_print_newline_STAR__temp_val__37001_37010,_STAR_print_fn_STAR__temp_val__37002_37011,sb__4661__auto__,G__36994,G__36994__$1,loc,class_name,simple_class,cause_type,format,map__36992,map__36992__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__36990_SHARP_){
return cljs.core.dissoc.call(null,p1__36990_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__36999_37008,_STAR_print_fn_STAR__orig_val__37000_37009,_STAR_print_newline_STAR__temp_val__37001_37010,_STAR_print_fn_STAR__temp_val__37002_37011,sb__4661__auto__,G__36994,G__36994__$1,loc,class_name,simple_class,cause_type,format,map__36992,map__36992__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__36999_37008,_STAR_print_fn_STAR__orig_val__37000_37009,_STAR_print_newline_STAR__temp_val__37001_37010,_STAR_print_fn_STAR__temp_val__37002_37011,sb__4661__auto__,G__36994,G__36994__$1,loc,class_name,simple_class,cause_type,format,map__36992,map__36992__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37000_37009;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36999_37008;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36994__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1568097130710
