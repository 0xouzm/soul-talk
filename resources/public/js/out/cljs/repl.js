// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37058){
var map__37059 = p__37058;
var map__37059__$1 = (((((!((map__37059 == null))))?(((((map__37059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37059):map__37059);
var m = map__37059__$1;
var n = cljs.core.get.call(null,map__37059__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37059__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37061_37093 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37062_37094 = null;
var count__37063_37095 = (0);
var i__37064_37096 = (0);
while(true){
if((i__37064_37096 < count__37063_37095)){
var f_37097 = cljs.core._nth.call(null,chunk__37062_37094,i__37064_37096);
cljs.core.println.call(null,"  ",f_37097);


var G__37098 = seq__37061_37093;
var G__37099 = chunk__37062_37094;
var G__37100 = count__37063_37095;
var G__37101 = (i__37064_37096 + (1));
seq__37061_37093 = G__37098;
chunk__37062_37094 = G__37099;
count__37063_37095 = G__37100;
i__37064_37096 = G__37101;
continue;
} else {
var temp__5720__auto___37102 = cljs.core.seq.call(null,seq__37061_37093);
if(temp__5720__auto___37102){
var seq__37061_37103__$1 = temp__5720__auto___37102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37061_37103__$1)){
var c__4550__auto___37104 = cljs.core.chunk_first.call(null,seq__37061_37103__$1);
var G__37105 = cljs.core.chunk_rest.call(null,seq__37061_37103__$1);
var G__37106 = c__4550__auto___37104;
var G__37107 = cljs.core.count.call(null,c__4550__auto___37104);
var G__37108 = (0);
seq__37061_37093 = G__37105;
chunk__37062_37094 = G__37106;
count__37063_37095 = G__37107;
i__37064_37096 = G__37108;
continue;
} else {
var f_37109 = cljs.core.first.call(null,seq__37061_37103__$1);
cljs.core.println.call(null,"  ",f_37109);


var G__37110 = cljs.core.next.call(null,seq__37061_37103__$1);
var G__37111 = null;
var G__37112 = (0);
var G__37113 = (0);
seq__37061_37093 = G__37110;
chunk__37062_37094 = G__37111;
count__37063_37095 = G__37112;
i__37064_37096 = G__37113;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37114 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37114);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37114)))?cljs.core.second.call(null,arglists_37114):arglists_37114));
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
var seq__37065_37115 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37066_37116 = null;
var count__37067_37117 = (0);
var i__37068_37118 = (0);
while(true){
if((i__37068_37118 < count__37067_37117)){
var vec__37079_37119 = cljs.core._nth.call(null,chunk__37066_37116,i__37068_37118);
var name_37120 = cljs.core.nth.call(null,vec__37079_37119,(0),null);
var map__37082_37121 = cljs.core.nth.call(null,vec__37079_37119,(1),null);
var map__37082_37122__$1 = (((((!((map__37082_37121 == null))))?(((((map__37082_37121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37082_37121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37082_37121):map__37082_37121);
var doc_37123 = cljs.core.get.call(null,map__37082_37122__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37124 = cljs.core.get.call(null,map__37082_37122__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37120);

cljs.core.println.call(null," ",arglists_37124);

if(cljs.core.truth_(doc_37123)){
cljs.core.println.call(null," ",doc_37123);
} else {
}


var G__37125 = seq__37065_37115;
var G__37126 = chunk__37066_37116;
var G__37127 = count__37067_37117;
var G__37128 = (i__37068_37118 + (1));
seq__37065_37115 = G__37125;
chunk__37066_37116 = G__37126;
count__37067_37117 = G__37127;
i__37068_37118 = G__37128;
continue;
} else {
var temp__5720__auto___37129 = cljs.core.seq.call(null,seq__37065_37115);
if(temp__5720__auto___37129){
var seq__37065_37130__$1 = temp__5720__auto___37129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37065_37130__$1)){
var c__4550__auto___37131 = cljs.core.chunk_first.call(null,seq__37065_37130__$1);
var G__37132 = cljs.core.chunk_rest.call(null,seq__37065_37130__$1);
var G__37133 = c__4550__auto___37131;
var G__37134 = cljs.core.count.call(null,c__4550__auto___37131);
var G__37135 = (0);
seq__37065_37115 = G__37132;
chunk__37066_37116 = G__37133;
count__37067_37117 = G__37134;
i__37068_37118 = G__37135;
continue;
} else {
var vec__37084_37136 = cljs.core.first.call(null,seq__37065_37130__$1);
var name_37137 = cljs.core.nth.call(null,vec__37084_37136,(0),null);
var map__37087_37138 = cljs.core.nth.call(null,vec__37084_37136,(1),null);
var map__37087_37139__$1 = (((((!((map__37087_37138 == null))))?(((((map__37087_37138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37087_37138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37087_37138):map__37087_37138);
var doc_37140 = cljs.core.get.call(null,map__37087_37139__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37141 = cljs.core.get.call(null,map__37087_37139__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37137);

cljs.core.println.call(null," ",arglists_37141);

if(cljs.core.truth_(doc_37140)){
cljs.core.println.call(null," ",doc_37140);
} else {
}


var G__37142 = cljs.core.next.call(null,seq__37065_37130__$1);
var G__37143 = null;
var G__37144 = (0);
var G__37145 = (0);
seq__37065_37115 = G__37142;
chunk__37066_37116 = G__37143;
count__37067_37117 = G__37144;
i__37068_37118 = G__37145;
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

var seq__37089 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37090 = null;
var count__37091 = (0);
var i__37092 = (0);
while(true){
if((i__37092 < count__37091)){
var role = cljs.core._nth.call(null,chunk__37090,i__37092);
var temp__5720__auto___37146__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___37146__$1)){
var spec_37147 = temp__5720__auto___37146__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37147));
} else {
}


var G__37148 = seq__37089;
var G__37149 = chunk__37090;
var G__37150 = count__37091;
var G__37151 = (i__37092 + (1));
seq__37089 = G__37148;
chunk__37090 = G__37149;
count__37091 = G__37150;
i__37092 = G__37151;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__37089);
if(temp__5720__auto____$1){
var seq__37089__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37089__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__37089__$1);
var G__37152 = cljs.core.chunk_rest.call(null,seq__37089__$1);
var G__37153 = c__4550__auto__;
var G__37154 = cljs.core.count.call(null,c__4550__auto__);
var G__37155 = (0);
seq__37089 = G__37152;
chunk__37090 = G__37153;
count__37091 = G__37154;
i__37092 = G__37155;
continue;
} else {
var role = cljs.core.first.call(null,seq__37089__$1);
var temp__5720__auto___37156__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___37156__$2)){
var spec_37157 = temp__5720__auto___37156__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37157));
} else {
}


var G__37158 = cljs.core.next.call(null,seq__37089__$1);
var G__37159 = null;
var G__37160 = (0);
var G__37161 = (0);
seq__37089 = G__37158;
chunk__37090 = G__37159;
count__37091 = G__37160;
i__37092 = G__37161;
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
var G__37162 = cljs.core.conj.call(null,via,t);
var G__37163 = cljs.core.ex_cause.call(null,t);
via = G__37162;
t = G__37163;
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
var map__37166 = datafied_throwable;
var map__37166__$1 = (((((!((map__37166 == null))))?(((((map__37166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37166):map__37166);
var via = cljs.core.get.call(null,map__37166__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__37166__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__37166__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37167 = cljs.core.last.call(null,via);
var map__37167__$1 = (((((!((map__37167 == null))))?(((((map__37167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37167):map__37167);
var type = cljs.core.get.call(null,map__37167__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__37167__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__37167__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37168 = data;
var map__37168__$1 = (((((!((map__37168 == null))))?(((((map__37168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37168):map__37168);
var problems = cljs.core.get.call(null,map__37168__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__37168__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__37168__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37169 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__37169__$1 = (((((!((map__37169 == null))))?(((((map__37169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37169):map__37169);
var top_data = map__37169__$1;
var source = cljs.core.get.call(null,map__37169__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__37174 = phase;
var G__37174__$1 = (((G__37174 instanceof cljs.core.Keyword))?G__37174.fqn:null);
switch (G__37174__$1) {
case "read-source":
var map__37175 = data;
var map__37175__$1 = (((((!((map__37175 == null))))?(((((map__37175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37175):map__37175);
var line = cljs.core.get.call(null,map__37175__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__37175__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37177 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__37177__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__37177,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37177);
var G__37177__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__37177__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37177__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__37177__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37177__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37178 = top_data;
var G__37178__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__37178,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37178);
var G__37178__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__37178__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37178__$1);
var G__37178__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__37178__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37178__$2);
var G__37178__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__37178__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37178__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__37178__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37178__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37179 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__37179,(0),null);
var method = cljs.core.nth.call(null,vec__37179,(1),null);
var file = cljs.core.nth.call(null,vec__37179,(2),null);
var line = cljs.core.nth.call(null,vec__37179,(3),null);
var G__37182 = top_data;
var G__37182__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__37182,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37182);
var G__37182__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__37182__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37182__$1);
var G__37182__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__37182__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37182__$2);
var G__37182__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__37182__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37182__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__37182__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37182__$4;
}

break;
case "execution":
var vec__37183 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__37183,(0),null);
var method = cljs.core.nth.call(null,vec__37183,(1),null);
var file = cljs.core.nth.call(null,vec__37183,(2),null);
var line = cljs.core.nth.call(null,vec__37183,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__37183,source__$1,method,file,line,G__37174,G__37174__$1,map__37166,map__37166__$1,via,trace,phase,map__37167,map__37167__$1,type,message,data,map__37168,map__37168__$1,problems,fn,caller,map__37169,map__37169__$1,top_data,source){
return (function (p1__37165_SHARP_){
var or__4131__auto__ = (p1__37165_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__37165_SHARP_);
}
});})(vec__37183,source__$1,method,file,line,G__37174,G__37174__$1,map__37166,map__37166__$1,via,trace,phase,map__37167,map__37167__$1,type,message,data,map__37168,map__37168__$1,problems,fn,caller,map__37169,map__37169__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__37186 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37186__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__37186,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37186);
var G__37186__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__37186__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37186__$1);
var G__37186__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__37186__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37186__$2);
var G__37186__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__37186__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37186__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__37186__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37186__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37174__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37190){
var map__37191 = p__37190;
var map__37191__$1 = (((((!((map__37191 == null))))?(((((map__37191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37191):map__37191);
var triage_data = map__37191__$1;
var phase = cljs.core.get.call(null,map__37191__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__37191__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__37191__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__37191__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__37191__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__37191__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__37191__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__37191__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__37193 = phase;
var G__37193__$1 = (((G__37193 instanceof cljs.core.Keyword))?G__37193.fqn:null);
switch (G__37193__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37194_37203 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37195_37204 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37196_37205 = true;
var _STAR_print_fn_STAR__temp_val__37197_37206 = ((function (_STAR_print_newline_STAR__orig_val__37194_37203,_STAR_print_fn_STAR__orig_val__37195_37204,_STAR_print_newline_STAR__temp_val__37196_37205,sb__4661__auto__,G__37193,G__37193__$1,loc,class_name,simple_class,cause_type,format,map__37191,map__37191__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__37194_37203,_STAR_print_fn_STAR__orig_val__37195_37204,_STAR_print_newline_STAR__temp_val__37196_37205,sb__4661__auto__,G__37193,G__37193__$1,loc,class_name,simple_class,cause_type,format,map__37191,map__37191__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37196_37205;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37197_37206;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__37194_37203,_STAR_print_fn_STAR__orig_val__37195_37204,_STAR_print_newline_STAR__temp_val__37196_37205,_STAR_print_fn_STAR__temp_val__37197_37206,sb__4661__auto__,G__37193,G__37193__$1,loc,class_name,simple_class,cause_type,format,map__37191,map__37191__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__37194_37203,_STAR_print_fn_STAR__orig_val__37195_37204,_STAR_print_newline_STAR__temp_val__37196_37205,_STAR_print_fn_STAR__temp_val__37197_37206,sb__4661__auto__,G__37193,G__37193__$1,loc,class_name,simple_class,cause_type,format,map__37191,map__37191__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__37188_SHARP_){
return cljs.core.dissoc.call(null,p1__37188_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__37194_37203,_STAR_print_fn_STAR__orig_val__37195_37204,_STAR_print_newline_STAR__temp_val__37196_37205,_STAR_print_fn_STAR__temp_val__37197_37206,sb__4661__auto__,G__37193,G__37193__$1,loc,class_name,simple_class,cause_type,format,map__37191,map__37191__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__37194_37203,_STAR_print_fn_STAR__orig_val__37195_37204,_STAR_print_newline_STAR__temp_val__37196_37205,_STAR_print_fn_STAR__temp_val__37197_37206,sb__4661__auto__,G__37193,G__37193__$1,loc,class_name,simple_class,cause_type,format,map__37191,map__37191__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37195_37204;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37194_37203;
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
var _STAR_print_newline_STAR__orig_val__37198_37207 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37199_37208 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37200_37209 = true;
var _STAR_print_fn_STAR__temp_val__37201_37210 = ((function (_STAR_print_newline_STAR__orig_val__37198_37207,_STAR_print_fn_STAR__orig_val__37199_37208,_STAR_print_newline_STAR__temp_val__37200_37209,sb__4661__auto__,G__37193,G__37193__$1,loc,class_name,simple_class,cause_type,format,map__37191,map__37191__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__37198_37207,_STAR_print_fn_STAR__orig_val__37199_37208,_STAR_print_newline_STAR__temp_val__37200_37209,sb__4661__auto__,G__37193,G__37193__$1,loc,class_name,simple_class,cause_type,format,map__37191,map__37191__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37200_37209;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37201_37210;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__37198_37207,_STAR_print_fn_STAR__orig_val__37199_37208,_STAR_print_newline_STAR__temp_val__37200_37209,_STAR_print_fn_STAR__temp_val__37201_37210,sb__4661__auto__,G__37193,G__37193__$1,loc,class_name,simple_class,cause_type,format,map__37191,map__37191__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__37198_37207,_STAR_print_fn_STAR__orig_val__37199_37208,_STAR_print_newline_STAR__temp_val__37200_37209,_STAR_print_fn_STAR__temp_val__37201_37210,sb__4661__auto__,G__37193,G__37193__$1,loc,class_name,simple_class,cause_type,format,map__37191,map__37191__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__37189_SHARP_){
return cljs.core.dissoc.call(null,p1__37189_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__37198_37207,_STAR_print_fn_STAR__orig_val__37199_37208,_STAR_print_newline_STAR__temp_val__37200_37209,_STAR_print_fn_STAR__temp_val__37201_37210,sb__4661__auto__,G__37193,G__37193__$1,loc,class_name,simple_class,cause_type,format,map__37191,map__37191__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__37198_37207,_STAR_print_fn_STAR__orig_val__37199_37208,_STAR_print_newline_STAR__temp_val__37200_37209,_STAR_print_fn_STAR__temp_val__37201_37210,sb__4661__auto__,G__37193,G__37193__$1,loc,class_name,simple_class,cause_type,format,map__37191,map__37191__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37199_37208;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37198_37207;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37193__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1568179222444
