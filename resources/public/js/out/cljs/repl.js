// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28504){
var map__28505 = p__28504;
var map__28505__$1 = (((((!((map__28505 == null))))?(((((map__28505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28505):map__28505);
var m = map__28505__$1;
var n = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28507_28539 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28508_28540 = null;
var count__28509_28541 = (0);
var i__28510_28542 = (0);
while(true){
if((i__28510_28542 < count__28509_28541)){
var f_28543 = cljs.core._nth.call(null,chunk__28508_28540,i__28510_28542);
cljs.core.println.call(null,"  ",f_28543);


var G__28544 = seq__28507_28539;
var G__28545 = chunk__28508_28540;
var G__28546 = count__28509_28541;
var G__28547 = (i__28510_28542 + (1));
seq__28507_28539 = G__28544;
chunk__28508_28540 = G__28545;
count__28509_28541 = G__28546;
i__28510_28542 = G__28547;
continue;
} else {
var temp__5720__auto___28548 = cljs.core.seq.call(null,seq__28507_28539);
if(temp__5720__auto___28548){
var seq__28507_28549__$1 = temp__5720__auto___28548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28507_28549__$1)){
var c__4550__auto___28550 = cljs.core.chunk_first.call(null,seq__28507_28549__$1);
var G__28551 = cljs.core.chunk_rest.call(null,seq__28507_28549__$1);
var G__28552 = c__4550__auto___28550;
var G__28553 = cljs.core.count.call(null,c__4550__auto___28550);
var G__28554 = (0);
seq__28507_28539 = G__28551;
chunk__28508_28540 = G__28552;
count__28509_28541 = G__28553;
i__28510_28542 = G__28554;
continue;
} else {
var f_28555 = cljs.core.first.call(null,seq__28507_28549__$1);
cljs.core.println.call(null,"  ",f_28555);


var G__28556 = cljs.core.next.call(null,seq__28507_28549__$1);
var G__28557 = null;
var G__28558 = (0);
var G__28559 = (0);
seq__28507_28539 = G__28556;
chunk__28508_28540 = G__28557;
count__28509_28541 = G__28558;
i__28510_28542 = G__28559;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28560 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28560);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28560)))?cljs.core.second.call(null,arglists_28560):arglists_28560));
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
var seq__28511_28561 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28512_28562 = null;
var count__28513_28563 = (0);
var i__28514_28564 = (0);
while(true){
if((i__28514_28564 < count__28513_28563)){
var vec__28525_28565 = cljs.core._nth.call(null,chunk__28512_28562,i__28514_28564);
var name_28566 = cljs.core.nth.call(null,vec__28525_28565,(0),null);
var map__28528_28567 = cljs.core.nth.call(null,vec__28525_28565,(1),null);
var map__28528_28568__$1 = (((((!((map__28528_28567 == null))))?(((((map__28528_28567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28528_28567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28528_28567):map__28528_28567);
var doc_28569 = cljs.core.get.call(null,map__28528_28568__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28570 = cljs.core.get.call(null,map__28528_28568__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28566);

cljs.core.println.call(null," ",arglists_28570);

if(cljs.core.truth_(doc_28569)){
cljs.core.println.call(null," ",doc_28569);
} else {
}


var G__28571 = seq__28511_28561;
var G__28572 = chunk__28512_28562;
var G__28573 = count__28513_28563;
var G__28574 = (i__28514_28564 + (1));
seq__28511_28561 = G__28571;
chunk__28512_28562 = G__28572;
count__28513_28563 = G__28573;
i__28514_28564 = G__28574;
continue;
} else {
var temp__5720__auto___28575 = cljs.core.seq.call(null,seq__28511_28561);
if(temp__5720__auto___28575){
var seq__28511_28576__$1 = temp__5720__auto___28575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28511_28576__$1)){
var c__4550__auto___28577 = cljs.core.chunk_first.call(null,seq__28511_28576__$1);
var G__28578 = cljs.core.chunk_rest.call(null,seq__28511_28576__$1);
var G__28579 = c__4550__auto___28577;
var G__28580 = cljs.core.count.call(null,c__4550__auto___28577);
var G__28581 = (0);
seq__28511_28561 = G__28578;
chunk__28512_28562 = G__28579;
count__28513_28563 = G__28580;
i__28514_28564 = G__28581;
continue;
} else {
var vec__28530_28582 = cljs.core.first.call(null,seq__28511_28576__$1);
var name_28583 = cljs.core.nth.call(null,vec__28530_28582,(0),null);
var map__28533_28584 = cljs.core.nth.call(null,vec__28530_28582,(1),null);
var map__28533_28585__$1 = (((((!((map__28533_28584 == null))))?(((((map__28533_28584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28533_28584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28533_28584):map__28533_28584);
var doc_28586 = cljs.core.get.call(null,map__28533_28585__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28587 = cljs.core.get.call(null,map__28533_28585__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28583);

cljs.core.println.call(null," ",arglists_28587);

if(cljs.core.truth_(doc_28586)){
cljs.core.println.call(null," ",doc_28586);
} else {
}


var G__28588 = cljs.core.next.call(null,seq__28511_28576__$1);
var G__28589 = null;
var G__28590 = (0);
var G__28591 = (0);
seq__28511_28561 = G__28588;
chunk__28512_28562 = G__28589;
count__28513_28563 = G__28590;
i__28514_28564 = G__28591;
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

var seq__28535 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28536 = null;
var count__28537 = (0);
var i__28538 = (0);
while(true){
if((i__28538 < count__28537)){
var role = cljs.core._nth.call(null,chunk__28536,i__28538);
var temp__5720__auto___28592__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28592__$1)){
var spec_28593 = temp__5720__auto___28592__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28593));
} else {
}


var G__28594 = seq__28535;
var G__28595 = chunk__28536;
var G__28596 = count__28537;
var G__28597 = (i__28538 + (1));
seq__28535 = G__28594;
chunk__28536 = G__28595;
count__28537 = G__28596;
i__28538 = G__28597;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__28535);
if(temp__5720__auto____$1){
var seq__28535__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28535__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28535__$1);
var G__28598 = cljs.core.chunk_rest.call(null,seq__28535__$1);
var G__28599 = c__4550__auto__;
var G__28600 = cljs.core.count.call(null,c__4550__auto__);
var G__28601 = (0);
seq__28535 = G__28598;
chunk__28536 = G__28599;
count__28537 = G__28600;
i__28538 = G__28601;
continue;
} else {
var role = cljs.core.first.call(null,seq__28535__$1);
var temp__5720__auto___28602__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28602__$2)){
var spec_28603 = temp__5720__auto___28602__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28603));
} else {
}


var G__28604 = cljs.core.next.call(null,seq__28535__$1);
var G__28605 = null;
var G__28606 = (0);
var G__28607 = (0);
seq__28535 = G__28604;
chunk__28536 = G__28605;
count__28537 = G__28606;
i__28538 = G__28607;
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
var G__28608 = cljs.core.conj.call(null,via,t);
var G__28609 = cljs.core.ex_cause.call(null,t);
via = G__28608;
t = G__28609;
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
var map__28612 = datafied_throwable;
var map__28612__$1 = (((((!((map__28612 == null))))?(((((map__28612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28612):map__28612);
var via = cljs.core.get.call(null,map__28612__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28612__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28612__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28613 = cljs.core.last.call(null,via);
var map__28613__$1 = (((((!((map__28613 == null))))?(((((map__28613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28613):map__28613);
var type = cljs.core.get.call(null,map__28613__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28613__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28613__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28614 = data;
var map__28614__$1 = (((((!((map__28614 == null))))?(((((map__28614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28614):map__28614);
var problems = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28615 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28615__$1 = (((((!((map__28615 == null))))?(((((map__28615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28615):map__28615);
var top_data = map__28615__$1;
var source = cljs.core.get.call(null,map__28615__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28620 = phase;
var G__28620__$1 = (((G__28620 instanceof cljs.core.Keyword))?G__28620.fqn:null);
switch (G__28620__$1) {
case "read-source":
var map__28621 = data;
var map__28621__$1 = (((((!((map__28621 == null))))?(((((map__28621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28621):map__28621);
var line = cljs.core.get.call(null,map__28621__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28621__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28623 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28623__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28623,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28623);
var G__28623__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28623__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28623__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28623__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28623__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28624 = top_data;
var G__28624__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28624,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28624);
var G__28624__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28624__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28624__$1);
var G__28624__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28624__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28624__$2);
var G__28624__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28624__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28624__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28624__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28624__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28625 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28625,(0),null);
var method = cljs.core.nth.call(null,vec__28625,(1),null);
var file = cljs.core.nth.call(null,vec__28625,(2),null);
var line = cljs.core.nth.call(null,vec__28625,(3),null);
var G__28628 = top_data;
var G__28628__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28628,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28628);
var G__28628__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28628__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28628__$1);
var G__28628__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__28628__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28628__$2);
var G__28628__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28628__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28628__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28628__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28628__$4;
}

break;
case "execution":
var vec__28629 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28629,(0),null);
var method = cljs.core.nth.call(null,vec__28629,(1),null);
var file = cljs.core.nth.call(null,vec__28629,(2),null);
var line = cljs.core.nth.call(null,vec__28629,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__28629,source__$1,method,file,line,G__28620,G__28620__$1,map__28612,map__28612__$1,via,trace,phase,map__28613,map__28613__$1,type,message,data,map__28614,map__28614__$1,problems,fn,caller,map__28615,map__28615__$1,top_data,source){
return (function (p1__28611_SHARP_){
var or__4131__auto__ = (p1__28611_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28611_SHARP_);
}
});})(vec__28629,source__$1,method,file,line,G__28620,G__28620__$1,map__28612,map__28612__$1,via,trace,phase,map__28613,map__28613__$1,type,message,data,map__28614,map__28614__$1,problems,fn,caller,map__28615,map__28615__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28632 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28632__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28632,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28632);
var G__28632__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28632__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28632__$1);
var G__28632__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__28632__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28632__$2);
var G__28632__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28632__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28632__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28632__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28632__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28620__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28636){
var map__28637 = p__28636;
var map__28637__$1 = (((((!((map__28637 == null))))?(((((map__28637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28637):map__28637);
var triage_data = map__28637__$1;
var phase = cljs.core.get.call(null,map__28637__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28637__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28637__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28637__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28637__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28637__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28637__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28637__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__28639 = phase;
var G__28639__$1 = (((G__28639 instanceof cljs.core.Keyword))?G__28639.fqn:null);
switch (G__28639__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28640_28649 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28641_28650 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28642_28651 = true;
var _STAR_print_fn_STAR__temp_val__28643_28652 = ((function (_STAR_print_newline_STAR__orig_val__28640_28649,_STAR_print_fn_STAR__orig_val__28641_28650,_STAR_print_newline_STAR__temp_val__28642_28651,sb__4661__auto__,G__28639,G__28639__$1,loc,class_name,simple_class,cause_type,format,map__28637,map__28637__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28640_28649,_STAR_print_fn_STAR__orig_val__28641_28650,_STAR_print_newline_STAR__temp_val__28642_28651,sb__4661__auto__,G__28639,G__28639__$1,loc,class_name,simple_class,cause_type,format,map__28637,map__28637__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28642_28651;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28643_28652;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28640_28649,_STAR_print_fn_STAR__orig_val__28641_28650,_STAR_print_newline_STAR__temp_val__28642_28651,_STAR_print_fn_STAR__temp_val__28643_28652,sb__4661__auto__,G__28639,G__28639__$1,loc,class_name,simple_class,cause_type,format,map__28637,map__28637__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28640_28649,_STAR_print_fn_STAR__orig_val__28641_28650,_STAR_print_newline_STAR__temp_val__28642_28651,_STAR_print_fn_STAR__temp_val__28643_28652,sb__4661__auto__,G__28639,G__28639__$1,loc,class_name,simple_class,cause_type,format,map__28637,map__28637__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28634_SHARP_){
return cljs.core.dissoc.call(null,p1__28634_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28640_28649,_STAR_print_fn_STAR__orig_val__28641_28650,_STAR_print_newline_STAR__temp_val__28642_28651,_STAR_print_fn_STAR__temp_val__28643_28652,sb__4661__auto__,G__28639,G__28639__$1,loc,class_name,simple_class,cause_type,format,map__28637,map__28637__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28640_28649,_STAR_print_fn_STAR__orig_val__28641_28650,_STAR_print_newline_STAR__temp_val__28642_28651,_STAR_print_fn_STAR__temp_val__28643_28652,sb__4661__auto__,G__28639,G__28639__$1,loc,class_name,simple_class,cause_type,format,map__28637,map__28637__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28641_28650;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28640_28649;
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
var _STAR_print_newline_STAR__orig_val__28644_28653 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28645_28654 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28646_28655 = true;
var _STAR_print_fn_STAR__temp_val__28647_28656 = ((function (_STAR_print_newline_STAR__orig_val__28644_28653,_STAR_print_fn_STAR__orig_val__28645_28654,_STAR_print_newline_STAR__temp_val__28646_28655,sb__4661__auto__,G__28639,G__28639__$1,loc,class_name,simple_class,cause_type,format,map__28637,map__28637__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28644_28653,_STAR_print_fn_STAR__orig_val__28645_28654,_STAR_print_newline_STAR__temp_val__28646_28655,sb__4661__auto__,G__28639,G__28639__$1,loc,class_name,simple_class,cause_type,format,map__28637,map__28637__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28646_28655;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28647_28656;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28644_28653,_STAR_print_fn_STAR__orig_val__28645_28654,_STAR_print_newline_STAR__temp_val__28646_28655,_STAR_print_fn_STAR__temp_val__28647_28656,sb__4661__auto__,G__28639,G__28639__$1,loc,class_name,simple_class,cause_type,format,map__28637,map__28637__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28644_28653,_STAR_print_fn_STAR__orig_val__28645_28654,_STAR_print_newline_STAR__temp_val__28646_28655,_STAR_print_fn_STAR__temp_val__28647_28656,sb__4661__auto__,G__28639,G__28639__$1,loc,class_name,simple_class,cause_type,format,map__28637,map__28637__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28635_SHARP_){
return cljs.core.dissoc.call(null,p1__28635_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28644_28653,_STAR_print_fn_STAR__orig_val__28645_28654,_STAR_print_newline_STAR__temp_val__28646_28655,_STAR_print_fn_STAR__temp_val__28647_28656,sb__4661__auto__,G__28639,G__28639__$1,loc,class_name,simple_class,cause_type,format,map__28637,map__28637__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28644_28653,_STAR_print_fn_STAR__orig_val__28645_28654,_STAR_print_newline_STAR__temp_val__28646_28655,_STAR_print_fn_STAR__temp_val__28647_28656,sb__4661__auto__,G__28639,G__28639__$1,loc,class_name,simple_class,cause_type,format,map__28637,map__28637__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28645_28654;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28644_28653;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28639__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1565953421545
