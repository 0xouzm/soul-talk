// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30424){
var map__30425 = p__30424;
var map__30425__$1 = (((((!((map__30425 == null))))?(((((map__30425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30425):map__30425);
var m = map__30425__$1;
var n = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30427_30459 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30428_30460 = null;
var count__30429_30461 = (0);
var i__30430_30462 = (0);
while(true){
if((i__30430_30462 < count__30429_30461)){
var f_30463 = cljs.core._nth.call(null,chunk__30428_30460,i__30430_30462);
cljs.core.println.call(null,"  ",f_30463);


var G__30464 = seq__30427_30459;
var G__30465 = chunk__30428_30460;
var G__30466 = count__30429_30461;
var G__30467 = (i__30430_30462 + (1));
seq__30427_30459 = G__30464;
chunk__30428_30460 = G__30465;
count__30429_30461 = G__30466;
i__30430_30462 = G__30467;
continue;
} else {
var temp__5720__auto___30468 = cljs.core.seq.call(null,seq__30427_30459);
if(temp__5720__auto___30468){
var seq__30427_30469__$1 = temp__5720__auto___30468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30427_30469__$1)){
var c__4550__auto___30470 = cljs.core.chunk_first.call(null,seq__30427_30469__$1);
var G__30471 = cljs.core.chunk_rest.call(null,seq__30427_30469__$1);
var G__30472 = c__4550__auto___30470;
var G__30473 = cljs.core.count.call(null,c__4550__auto___30470);
var G__30474 = (0);
seq__30427_30459 = G__30471;
chunk__30428_30460 = G__30472;
count__30429_30461 = G__30473;
i__30430_30462 = G__30474;
continue;
} else {
var f_30475 = cljs.core.first.call(null,seq__30427_30469__$1);
cljs.core.println.call(null,"  ",f_30475);


var G__30476 = cljs.core.next.call(null,seq__30427_30469__$1);
var G__30477 = null;
var G__30478 = (0);
var G__30479 = (0);
seq__30427_30459 = G__30476;
chunk__30428_30460 = G__30477;
count__30429_30461 = G__30478;
i__30430_30462 = G__30479;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30480 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30480);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30480)))?cljs.core.second.call(null,arglists_30480):arglists_30480));
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
var seq__30431_30481 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30432_30482 = null;
var count__30433_30483 = (0);
var i__30434_30484 = (0);
while(true){
if((i__30434_30484 < count__30433_30483)){
var vec__30445_30485 = cljs.core._nth.call(null,chunk__30432_30482,i__30434_30484);
var name_30486 = cljs.core.nth.call(null,vec__30445_30485,(0),null);
var map__30448_30487 = cljs.core.nth.call(null,vec__30445_30485,(1),null);
var map__30448_30488__$1 = (((((!((map__30448_30487 == null))))?(((((map__30448_30487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30448_30487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30448_30487):map__30448_30487);
var doc_30489 = cljs.core.get.call(null,map__30448_30488__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30490 = cljs.core.get.call(null,map__30448_30488__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30486);

cljs.core.println.call(null," ",arglists_30490);

if(cljs.core.truth_(doc_30489)){
cljs.core.println.call(null," ",doc_30489);
} else {
}


var G__30491 = seq__30431_30481;
var G__30492 = chunk__30432_30482;
var G__30493 = count__30433_30483;
var G__30494 = (i__30434_30484 + (1));
seq__30431_30481 = G__30491;
chunk__30432_30482 = G__30492;
count__30433_30483 = G__30493;
i__30434_30484 = G__30494;
continue;
} else {
var temp__5720__auto___30495 = cljs.core.seq.call(null,seq__30431_30481);
if(temp__5720__auto___30495){
var seq__30431_30496__$1 = temp__5720__auto___30495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30431_30496__$1)){
var c__4550__auto___30497 = cljs.core.chunk_first.call(null,seq__30431_30496__$1);
var G__30498 = cljs.core.chunk_rest.call(null,seq__30431_30496__$1);
var G__30499 = c__4550__auto___30497;
var G__30500 = cljs.core.count.call(null,c__4550__auto___30497);
var G__30501 = (0);
seq__30431_30481 = G__30498;
chunk__30432_30482 = G__30499;
count__30433_30483 = G__30500;
i__30434_30484 = G__30501;
continue;
} else {
var vec__30450_30502 = cljs.core.first.call(null,seq__30431_30496__$1);
var name_30503 = cljs.core.nth.call(null,vec__30450_30502,(0),null);
var map__30453_30504 = cljs.core.nth.call(null,vec__30450_30502,(1),null);
var map__30453_30505__$1 = (((((!((map__30453_30504 == null))))?(((((map__30453_30504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30453_30504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30453_30504):map__30453_30504);
var doc_30506 = cljs.core.get.call(null,map__30453_30505__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30507 = cljs.core.get.call(null,map__30453_30505__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30503);

cljs.core.println.call(null," ",arglists_30507);

if(cljs.core.truth_(doc_30506)){
cljs.core.println.call(null," ",doc_30506);
} else {
}


var G__30508 = cljs.core.next.call(null,seq__30431_30496__$1);
var G__30509 = null;
var G__30510 = (0);
var G__30511 = (0);
seq__30431_30481 = G__30508;
chunk__30432_30482 = G__30509;
count__30433_30483 = G__30510;
i__30434_30484 = G__30511;
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

var seq__30455 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30456 = null;
var count__30457 = (0);
var i__30458 = (0);
while(true){
if((i__30458 < count__30457)){
var role = cljs.core._nth.call(null,chunk__30456,i__30458);
var temp__5720__auto___30512__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30512__$1)){
var spec_30513 = temp__5720__auto___30512__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30513));
} else {
}


var G__30514 = seq__30455;
var G__30515 = chunk__30456;
var G__30516 = count__30457;
var G__30517 = (i__30458 + (1));
seq__30455 = G__30514;
chunk__30456 = G__30515;
count__30457 = G__30516;
i__30458 = G__30517;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30455);
if(temp__5720__auto____$1){
var seq__30455__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30455__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30455__$1);
var G__30518 = cljs.core.chunk_rest.call(null,seq__30455__$1);
var G__30519 = c__4550__auto__;
var G__30520 = cljs.core.count.call(null,c__4550__auto__);
var G__30521 = (0);
seq__30455 = G__30518;
chunk__30456 = G__30519;
count__30457 = G__30520;
i__30458 = G__30521;
continue;
} else {
var role = cljs.core.first.call(null,seq__30455__$1);
var temp__5720__auto___30522__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30522__$2)){
var spec_30523 = temp__5720__auto___30522__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30523));
} else {
}


var G__30524 = cljs.core.next.call(null,seq__30455__$1);
var G__30525 = null;
var G__30526 = (0);
var G__30527 = (0);
seq__30455 = G__30524;
chunk__30456 = G__30525;
count__30457 = G__30526;
i__30458 = G__30527;
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
var G__30528 = cljs.core.conj.call(null,via,t);
var G__30529 = cljs.core.ex_cause.call(null,t);
via = G__30528;
t = G__30529;
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
var map__30532 = datafied_throwable;
var map__30532__$1 = (((((!((map__30532 == null))))?(((((map__30532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30532):map__30532);
var via = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30533 = cljs.core.last.call(null,via);
var map__30533__$1 = (((((!((map__30533 == null))))?(((((map__30533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30533):map__30533);
var type = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30534 = data;
var map__30534__$1 = (((((!((map__30534 == null))))?(((((map__30534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30534):map__30534);
var problems = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30535 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30535__$1 = (((((!((map__30535 == null))))?(((((map__30535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30535):map__30535);
var top_data = map__30535__$1;
var source = cljs.core.get.call(null,map__30535__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30540 = phase;
var G__30540__$1 = (((G__30540 instanceof cljs.core.Keyword))?G__30540.fqn:null);
switch (G__30540__$1) {
case "read-source":
var map__30541 = data;
var map__30541__$1 = (((((!((map__30541 == null))))?(((((map__30541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30541):map__30541);
var line = cljs.core.get.call(null,map__30541__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30541__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30543 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30543__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30543,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30543);
var G__30543__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30543__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30543__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30543__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30543__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30544 = top_data;
var G__30544__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30544,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30544);
var G__30544__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30544__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30544__$1);
var G__30544__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30544__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30544__$2);
var G__30544__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30544__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30544__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30544__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30544__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30545 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30545,(0),null);
var method = cljs.core.nth.call(null,vec__30545,(1),null);
var file = cljs.core.nth.call(null,vec__30545,(2),null);
var line = cljs.core.nth.call(null,vec__30545,(3),null);
var G__30548 = top_data;
var G__30548__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30548,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30548);
var G__30548__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30548__$1);
var G__30548__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__30548__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30548__$2);
var G__30548__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30548__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30548__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30548__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30548__$4;
}

break;
case "execution":
var vec__30549 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30549,(0),null);
var method = cljs.core.nth.call(null,vec__30549,(1),null);
var file = cljs.core.nth.call(null,vec__30549,(2),null);
var line = cljs.core.nth.call(null,vec__30549,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__30549,source__$1,method,file,line,G__30540,G__30540__$1,map__30532,map__30532__$1,via,trace,phase,map__30533,map__30533__$1,type,message,data,map__30534,map__30534__$1,problems,fn,caller,map__30535,map__30535__$1,top_data,source){
return (function (p1__30531_SHARP_){
var or__4131__auto__ = (p1__30531_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30531_SHARP_);
}
});})(vec__30549,source__$1,method,file,line,G__30540,G__30540__$1,map__30532,map__30532__$1,via,trace,phase,map__30533,map__30533__$1,type,message,data,map__30534,map__30534__$1,problems,fn,caller,map__30535,map__30535__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__30552 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30552__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30552,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30552);
var G__30552__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30552__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30552__$1);
var G__30552__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__30552__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30552__$2);
var G__30552__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30552__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30552__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30552__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30552__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30540__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30556){
var map__30557 = p__30556;
var map__30557__$1 = (((((!((map__30557 == null))))?(((((map__30557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30557):map__30557);
var triage_data = map__30557__$1;
var phase = cljs.core.get.call(null,map__30557__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30557__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30557__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30557__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30557__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30557__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30557__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__30559 = phase;
var G__30559__$1 = (((G__30559 instanceof cljs.core.Keyword))?G__30559.fqn:null);
switch (G__30559__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30560_30569 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30561_30570 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30562_30571 = true;
var _STAR_print_fn_STAR__temp_val__30563_30572 = ((function (_STAR_print_newline_STAR__orig_val__30560_30569,_STAR_print_fn_STAR__orig_val__30561_30570,_STAR_print_newline_STAR__temp_val__30562_30571,sb__4661__auto__,G__30559,G__30559__$1,loc,class_name,simple_class,cause_type,format,map__30557,map__30557__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30560_30569,_STAR_print_fn_STAR__orig_val__30561_30570,_STAR_print_newline_STAR__temp_val__30562_30571,sb__4661__auto__,G__30559,G__30559__$1,loc,class_name,simple_class,cause_type,format,map__30557,map__30557__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30562_30571;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30563_30572;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30560_30569,_STAR_print_fn_STAR__orig_val__30561_30570,_STAR_print_newline_STAR__temp_val__30562_30571,_STAR_print_fn_STAR__temp_val__30563_30572,sb__4661__auto__,G__30559,G__30559__$1,loc,class_name,simple_class,cause_type,format,map__30557,map__30557__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30560_30569,_STAR_print_fn_STAR__orig_val__30561_30570,_STAR_print_newline_STAR__temp_val__30562_30571,_STAR_print_fn_STAR__temp_val__30563_30572,sb__4661__auto__,G__30559,G__30559__$1,loc,class_name,simple_class,cause_type,format,map__30557,map__30557__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30554_SHARP_){
return cljs.core.dissoc.call(null,p1__30554_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30560_30569,_STAR_print_fn_STAR__orig_val__30561_30570,_STAR_print_newline_STAR__temp_val__30562_30571,_STAR_print_fn_STAR__temp_val__30563_30572,sb__4661__auto__,G__30559,G__30559__$1,loc,class_name,simple_class,cause_type,format,map__30557,map__30557__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30560_30569,_STAR_print_fn_STAR__orig_val__30561_30570,_STAR_print_newline_STAR__temp_val__30562_30571,_STAR_print_fn_STAR__temp_val__30563_30572,sb__4661__auto__,G__30559,G__30559__$1,loc,class_name,simple_class,cause_type,format,map__30557,map__30557__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30561_30570;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30560_30569;
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
var _STAR_print_newline_STAR__orig_val__30564_30573 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30565_30574 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30566_30575 = true;
var _STAR_print_fn_STAR__temp_val__30567_30576 = ((function (_STAR_print_newline_STAR__orig_val__30564_30573,_STAR_print_fn_STAR__orig_val__30565_30574,_STAR_print_newline_STAR__temp_val__30566_30575,sb__4661__auto__,G__30559,G__30559__$1,loc,class_name,simple_class,cause_type,format,map__30557,map__30557__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30564_30573,_STAR_print_fn_STAR__orig_val__30565_30574,_STAR_print_newline_STAR__temp_val__30566_30575,sb__4661__auto__,G__30559,G__30559__$1,loc,class_name,simple_class,cause_type,format,map__30557,map__30557__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30566_30575;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30567_30576;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30564_30573,_STAR_print_fn_STAR__orig_val__30565_30574,_STAR_print_newline_STAR__temp_val__30566_30575,_STAR_print_fn_STAR__temp_val__30567_30576,sb__4661__auto__,G__30559,G__30559__$1,loc,class_name,simple_class,cause_type,format,map__30557,map__30557__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30564_30573,_STAR_print_fn_STAR__orig_val__30565_30574,_STAR_print_newline_STAR__temp_val__30566_30575,_STAR_print_fn_STAR__temp_val__30567_30576,sb__4661__auto__,G__30559,G__30559__$1,loc,class_name,simple_class,cause_type,format,map__30557,map__30557__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30555_SHARP_){
return cljs.core.dissoc.call(null,p1__30555_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30564_30573,_STAR_print_fn_STAR__orig_val__30565_30574,_STAR_print_newline_STAR__temp_val__30566_30575,_STAR_print_fn_STAR__temp_val__30567_30576,sb__4661__auto__,G__30559,G__30559__$1,loc,class_name,simple_class,cause_type,format,map__30557,map__30557__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30564_30573,_STAR_print_fn_STAR__orig_val__30565_30574,_STAR_print_newline_STAR__temp_val__30566_30575,_STAR_print_fn_STAR__temp_val__30567_30576,sb__4661__auto__,G__30559,G__30559__$1,loc,class_name,simple_class,cause_type,format,map__30557,map__30557__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30565_30574;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30564_30573;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30559__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1568085257803
