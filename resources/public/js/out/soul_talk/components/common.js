// Compiled by ClojureScript 1.10.520 {}
goog.provide('soul_talk.components.common');
goog.require('cljs.core');
soul_talk.components.common.input = (function soul_talk$components$common$input(type,id,placeholder,fields){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.input-lg","input.form-control.input-lg",721276087),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"value","value",305978217),id.call(null,cljs.core.deref.call(null,fields)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32827_SHARP_){
return cljs.core.swap_BANG_.call(null,fields,cljs.core.assoc,id,p1__32827_SHARP_.target.value);
})], null)], null);
});
soul_talk.components.common.form_input = (function soul_talk$components$common$form_input(type,label,id,placeholder,fields,optional_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),(cljs.core.truth_(optional_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.components.common.input,type,id,placeholder,fields], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.components.common.input,type,id,placeholder,fields], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),"*"], null)], null))], null);
});
soul_talk.components.common.text_input = (function soul_talk$components$common$text_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32837 = arguments.length;
var i__4731__auto___32838 = (0);
while(true){
if((i__4731__auto___32838 < len__4730__auto___32837)){
args__4736__auto__.push((arguments[i__4731__auto___32838]));

var G__32839 = (i__4731__auto___32838 + (1));
i__4731__auto___32838 = G__32839;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return soul_talk.components.common.text_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

soul_talk.components.common.text_input.cljs$core$IFn$_invoke$arity$variadic = (function (label,id,placeholder,fields,p__32833){
var vec__32834 = p__32833;
var optional_QMARK_ = cljs.core.nth.call(null,vec__32834,(0),null);
return soul_talk.components.common.form_input.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),label,id,placeholder,fields,optional_QMARK_);
});

soul_talk.components.common.text_input.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
soul_talk.components.common.text_input.cljs$lang$applyTo = (function (seq32828){
var G__32829 = cljs.core.first.call(null,seq32828);
var seq32828__$1 = cljs.core.next.call(null,seq32828);
var G__32830 = cljs.core.first.call(null,seq32828__$1);
var seq32828__$2 = cljs.core.next.call(null,seq32828__$1);
var G__32831 = cljs.core.first.call(null,seq32828__$2);
var seq32828__$3 = cljs.core.next.call(null,seq32828__$2);
var G__32832 = cljs.core.first.call(null,seq32828__$3);
var seq32828__$4 = cljs.core.next.call(null,seq32828__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32829,G__32830,G__32831,G__32832,seq32828__$4);
});

soul_talk.components.common.password_input = (function soul_talk$components$common$password_input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32849 = arguments.length;
var i__4731__auto___32850 = (0);
while(true){
if((i__4731__auto___32850 < len__4730__auto___32849)){
args__4736__auto__.push((arguments[i__4731__auto___32850]));

var G__32851 = (i__4731__auto___32850 + (1));
i__4731__auto___32850 = G__32851;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return soul_talk.components.common.password_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

soul_talk.components.common.password_input.cljs$core$IFn$_invoke$arity$variadic = (function (label,id,placeholder,fields,p__32845){
var vec__32846 = p__32845;
var optional_QMARK_ = cljs.core.nth.call(null,vec__32846,(0),null);
return soul_talk.components.common.form_input.call(null,new cljs.core.Keyword(null,"password","password",417022471),label,id,placeholder,fields,optional_QMARK_);
});

soul_talk.components.common.password_input.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
soul_talk.components.common.password_input.cljs$lang$applyTo = (function (seq32840){
var G__32841 = cljs.core.first.call(null,seq32840);
var seq32840__$1 = cljs.core.next.call(null,seq32840);
var G__32842 = cljs.core.first.call(null,seq32840__$1);
var seq32840__$2 = cljs.core.next.call(null,seq32840__$1);
var G__32843 = cljs.core.first.call(null,seq32840__$2);
var seq32840__$3 = cljs.core.next.call(null,seq32840__$2);
var G__32844 = cljs.core.first.call(null,seq32840__$3);
var seq32840__$4 = cljs.core.next.call(null,seq32840__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32841,G__32842,G__32843,G__32844,seq32840__$4);
});


//# sourceMappingURL=common.js.map?rel=1568200140948
