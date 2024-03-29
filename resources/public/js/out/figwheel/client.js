// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.17-SNAPSHOT";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e37405){if((e37405 instanceof Error)){
var e = e37405;
return "Error: Unable to stringify";
} else {
throw e37405;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37408 = arguments.length;
switch (G__37408) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37406_SHARP_){
if(typeof p1__37406_SHARP_ === 'string'){
return p1__37406_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37406_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37411 = arguments.length;
var i__4731__auto___37412 = (0);
while(true){
if((i__4731__auto___37412 < len__4730__auto___37411)){
args__4736__auto__.push((arguments[i__4731__auto___37412]));

var G__37413 = (i__4731__auto___37412 + (1));
i__4731__auto___37412 = G__37413;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37410){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37410));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37415 = arguments.length;
var i__4731__auto___37416 = (0);
while(true){
if((i__4731__auto___37416 < len__4730__auto___37415)){
args__4736__auto__.push((arguments[i__4731__auto___37416]));

var G__37417 = (i__4731__auto___37416 + (1));
i__4731__auto___37416 = G__37417;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37414){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37414));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37418){
var map__37419 = p__37418;
var map__37419__$1 = (((((!((map__37419 == null))))?(((((map__37419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37419):map__37419);
var message = cljs.core.get.call(null,map__37419__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37419__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33521__auto___37498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___37498,ch){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___37498,ch){
return (function (state_37470){
var state_val_37471 = (state_37470[(1)]);
if((state_val_37471 === (7))){
var inst_37466 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
var statearr_37472_37499 = state_37470__$1;
(statearr_37472_37499[(2)] = inst_37466);

(statearr_37472_37499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (1))){
var state_37470__$1 = state_37470;
var statearr_37473_37500 = state_37470__$1;
(statearr_37473_37500[(2)] = null);

(statearr_37473_37500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (4))){
var inst_37423 = (state_37470[(7)]);
var inst_37423__$1 = (state_37470[(2)]);
var state_37470__$1 = (function (){var statearr_37474 = state_37470;
(statearr_37474[(7)] = inst_37423__$1);

return statearr_37474;
})();
if(cljs.core.truth_(inst_37423__$1)){
var statearr_37475_37501 = state_37470__$1;
(statearr_37475_37501[(1)] = (5));

} else {
var statearr_37476_37502 = state_37470__$1;
(statearr_37476_37502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (15))){
var inst_37430 = (state_37470[(8)]);
var inst_37445 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37430);
var inst_37446 = cljs.core.first.call(null,inst_37445);
var inst_37447 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37446);
var inst_37448 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37447)].join('');
var inst_37449 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37448);
var state_37470__$1 = state_37470;
var statearr_37477_37503 = state_37470__$1;
(statearr_37477_37503[(2)] = inst_37449);

(statearr_37477_37503[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (13))){
var inst_37454 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
var statearr_37478_37504 = state_37470__$1;
(statearr_37478_37504[(2)] = inst_37454);

(statearr_37478_37504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (6))){
var state_37470__$1 = state_37470;
var statearr_37479_37505 = state_37470__$1;
(statearr_37479_37505[(2)] = null);

(statearr_37479_37505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (17))){
var inst_37452 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
var statearr_37480_37506 = state_37470__$1;
(statearr_37480_37506[(2)] = inst_37452);

(statearr_37480_37506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (3))){
var inst_37468 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37470__$1,inst_37468);
} else {
if((state_val_37471 === (12))){
var inst_37429 = (state_37470[(9)]);
var inst_37443 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37429,opts);
var state_37470__$1 = state_37470;
if(inst_37443){
var statearr_37481_37507 = state_37470__$1;
(statearr_37481_37507[(1)] = (15));

} else {
var statearr_37482_37508 = state_37470__$1;
(statearr_37482_37508[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (2))){
var state_37470__$1 = state_37470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37470__$1,(4),ch);
} else {
if((state_val_37471 === (11))){
var inst_37430 = (state_37470[(8)]);
var inst_37435 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37436 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37430);
var inst_37437 = cljs.core.async.timeout.call(null,(1000));
var inst_37438 = [inst_37436,inst_37437];
var inst_37439 = (new cljs.core.PersistentVector(null,2,(5),inst_37435,inst_37438,null));
var state_37470__$1 = state_37470;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37470__$1,(14),inst_37439);
} else {
if((state_val_37471 === (9))){
var inst_37430 = (state_37470[(8)]);
var inst_37456 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37457 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37430);
var inst_37458 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37457);
var inst_37459 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37458)].join('');
var inst_37460 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37459);
var state_37470__$1 = (function (){var statearr_37483 = state_37470;
(statearr_37483[(10)] = inst_37456);

return statearr_37483;
})();
var statearr_37484_37509 = state_37470__$1;
(statearr_37484_37509[(2)] = inst_37460);

(statearr_37484_37509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (5))){
var inst_37423 = (state_37470[(7)]);
var inst_37425 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37426 = (new cljs.core.PersistentArrayMap(null,2,inst_37425,null));
var inst_37427 = (new cljs.core.PersistentHashSet(null,inst_37426,null));
var inst_37428 = figwheel.client.focus_msgs.call(null,inst_37427,inst_37423);
var inst_37429 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37428);
var inst_37430 = cljs.core.first.call(null,inst_37428);
var inst_37431 = figwheel.client.autoload_QMARK_.call(null);
var state_37470__$1 = (function (){var statearr_37485 = state_37470;
(statearr_37485[(8)] = inst_37430);

(statearr_37485[(9)] = inst_37429);

return statearr_37485;
})();
if(cljs.core.truth_(inst_37431)){
var statearr_37486_37510 = state_37470__$1;
(statearr_37486_37510[(1)] = (8));

} else {
var statearr_37487_37511 = state_37470__$1;
(statearr_37487_37511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (14))){
var inst_37441 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
var statearr_37488_37512 = state_37470__$1;
(statearr_37488_37512[(2)] = inst_37441);

(statearr_37488_37512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (16))){
var state_37470__$1 = state_37470;
var statearr_37489_37513 = state_37470__$1;
(statearr_37489_37513[(2)] = null);

(statearr_37489_37513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (10))){
var inst_37462 = (state_37470[(2)]);
var state_37470__$1 = (function (){var statearr_37490 = state_37470;
(statearr_37490[(11)] = inst_37462);

return statearr_37490;
})();
var statearr_37491_37514 = state_37470__$1;
(statearr_37491_37514[(2)] = null);

(statearr_37491_37514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (8))){
var inst_37429 = (state_37470[(9)]);
var inst_37433 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37429,opts);
var state_37470__$1 = state_37470;
if(cljs.core.truth_(inst_37433)){
var statearr_37492_37515 = state_37470__$1;
(statearr_37492_37515[(1)] = (11));

} else {
var statearr_37493_37516 = state_37470__$1;
(statearr_37493_37516[(1)] = (12));

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
});})(c__33521__auto___37498,ch))
;
return ((function (switch__33426__auto__,c__33521__auto___37498,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33427__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33427__auto____0 = (function (){
var statearr_37494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37494[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33427__auto__);

(statearr_37494[(1)] = (1));

return statearr_37494;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33427__auto____1 = (function (state_37470){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_37470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e37495){if((e37495 instanceof Object)){
var ex__33430__auto__ = e37495;
var statearr_37496_37517 = state_37470;
(statearr_37496_37517[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37518 = state_37470;
state_37470 = G__37518;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33427__auto__ = function(state_37470){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33427__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33427__auto____1.call(this,state_37470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33427__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33427__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___37498,ch))
})();
var state__33523__auto__ = (function (){var statearr_37497 = f__33522__auto__.call(null);
(statearr_37497[(6)] = c__33521__auto___37498);

return statearr_37497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___37498,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37519_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37519_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37525 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37525){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37521 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37522 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37523 = true;
var _STAR_print_fn_STAR__temp_val__37524 = ((function (_STAR_print_newline_STAR__orig_val__37521,_STAR_print_fn_STAR__orig_val__37522,_STAR_print_newline_STAR__temp_val__37523,sb,base_path_37525){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__37521,_STAR_print_fn_STAR__orig_val__37522,_STAR_print_newline_STAR__temp_val__37523,sb,base_path_37525))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37523;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37524;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37522;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37521;
}}catch (e37520){if((e37520 instanceof Error)){
var e = e37520;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37525], null));
} else {
var e = e37520;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37525))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37526){
var map__37527 = p__37526;
var map__37527__$1 = (((((!((map__37527 == null))))?(((((map__37527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37527):map__37527);
var opts = map__37527__$1;
var build_id = cljs.core.get.call(null,map__37527__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37527,map__37527__$1,opts,build_id){
return (function (p__37529){
var vec__37530 = p__37529;
var seq__37531 = cljs.core.seq.call(null,vec__37530);
var first__37532 = cljs.core.first.call(null,seq__37531);
var seq__37531__$1 = cljs.core.next.call(null,seq__37531);
var map__37533 = first__37532;
var map__37533__$1 = (((((!((map__37533 == null))))?(((((map__37533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37533):map__37533);
var msg = map__37533__$1;
var msg_name = cljs.core.get.call(null,map__37533__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37531__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37530,seq__37531,first__37532,seq__37531__$1,map__37533,map__37533__$1,msg,msg_name,_,map__37527,map__37527__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37530,seq__37531,first__37532,seq__37531__$1,map__37533,map__37533__$1,msg,msg_name,_,map__37527,map__37527__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37527,map__37527__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37535){
var vec__37536 = p__37535;
var seq__37537 = cljs.core.seq.call(null,vec__37536);
var first__37538 = cljs.core.first.call(null,seq__37537);
var seq__37537__$1 = cljs.core.next.call(null,seq__37537);
var map__37539 = first__37538;
var map__37539__$1 = (((((!((map__37539 == null))))?(((((map__37539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37539):map__37539);
var msg = map__37539__$1;
var msg_name = cljs.core.get.call(null,map__37539__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37537__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37541){
var map__37542 = p__37541;
var map__37542__$1 = (((((!((map__37542 == null))))?(((((map__37542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37542):map__37542);
var on_compile_warning = cljs.core.get.call(null,map__37542__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37542__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37542,map__37542__$1,on_compile_warning,on_compile_fail){
return (function (p__37544){
var vec__37545 = p__37544;
var seq__37546 = cljs.core.seq.call(null,vec__37545);
var first__37547 = cljs.core.first.call(null,seq__37546);
var seq__37546__$1 = cljs.core.next.call(null,seq__37546);
var map__37548 = first__37547;
var map__37548__$1 = (((((!((map__37548 == null))))?(((((map__37548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37548):map__37548);
var msg = map__37548__$1;
var msg_name = cljs.core.get.call(null,map__37548__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37546__$1;
var pred__37550 = cljs.core._EQ_;
var expr__37551 = msg_name;
if(cljs.core.truth_(pred__37550.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37551))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37550.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37551))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37542,map__37542__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto__,msg_hist,msg_names,msg){
return (function (state_37640){
var state_val_37641 = (state_37640[(1)]);
if((state_val_37641 === (7))){
var inst_37560 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
if(cljs.core.truth_(inst_37560)){
var statearr_37642_37689 = state_37640__$1;
(statearr_37642_37689[(1)] = (8));

} else {
var statearr_37643_37690 = state_37640__$1;
(statearr_37643_37690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (20))){
var inst_37634 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
var statearr_37644_37691 = state_37640__$1;
(statearr_37644_37691[(2)] = inst_37634);

(statearr_37644_37691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (27))){
var inst_37630 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
var statearr_37645_37692 = state_37640__$1;
(statearr_37645_37692[(2)] = inst_37630);

(statearr_37645_37692[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (1))){
var inst_37553 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37640__$1 = state_37640;
if(cljs.core.truth_(inst_37553)){
var statearr_37646_37693 = state_37640__$1;
(statearr_37646_37693[(1)] = (2));

} else {
var statearr_37647_37694 = state_37640__$1;
(statearr_37647_37694[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (24))){
var inst_37632 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
var statearr_37648_37695 = state_37640__$1;
(statearr_37648_37695[(2)] = inst_37632);

(statearr_37648_37695[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (4))){
var inst_37638 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37640__$1,inst_37638);
} else {
if((state_val_37641 === (15))){
var inst_37636 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
var statearr_37649_37696 = state_37640__$1;
(statearr_37649_37696[(2)] = inst_37636);

(statearr_37649_37696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (21))){
var inst_37589 = (state_37640[(2)]);
var inst_37590 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37591 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37590);
var state_37640__$1 = (function (){var statearr_37650 = state_37640;
(statearr_37650[(7)] = inst_37589);

return statearr_37650;
})();
var statearr_37651_37697 = state_37640__$1;
(statearr_37651_37697[(2)] = inst_37591);

(statearr_37651_37697[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (31))){
var inst_37619 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37640__$1 = state_37640;
if(inst_37619){
var statearr_37652_37698 = state_37640__$1;
(statearr_37652_37698[(1)] = (34));

} else {
var statearr_37653_37699 = state_37640__$1;
(statearr_37653_37699[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (32))){
var inst_37628 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
var statearr_37654_37700 = state_37640__$1;
(statearr_37654_37700[(2)] = inst_37628);

(statearr_37654_37700[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (33))){
var inst_37615 = (state_37640[(2)]);
var inst_37616 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37617 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37616);
var state_37640__$1 = (function (){var statearr_37655 = state_37640;
(statearr_37655[(8)] = inst_37615);

return statearr_37655;
})();
var statearr_37656_37701 = state_37640__$1;
(statearr_37656_37701[(2)] = inst_37617);

(statearr_37656_37701[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (13))){
var inst_37574 = figwheel.client.heads_up.clear.call(null);
var state_37640__$1 = state_37640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37640__$1,(16),inst_37574);
} else {
if((state_val_37641 === (22))){
var inst_37595 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37596 = figwheel.client.heads_up.append_warning_message.call(null,inst_37595);
var state_37640__$1 = state_37640;
var statearr_37657_37702 = state_37640__$1;
(statearr_37657_37702[(2)] = inst_37596);

(statearr_37657_37702[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (36))){
var inst_37626 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
var statearr_37658_37703 = state_37640__$1;
(statearr_37658_37703[(2)] = inst_37626);

(statearr_37658_37703[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (29))){
var inst_37606 = (state_37640[(2)]);
var inst_37607 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37608 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37607);
var state_37640__$1 = (function (){var statearr_37659 = state_37640;
(statearr_37659[(9)] = inst_37606);

return statearr_37659;
})();
var statearr_37660_37704 = state_37640__$1;
(statearr_37660_37704[(2)] = inst_37608);

(statearr_37660_37704[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (6))){
var inst_37555 = (state_37640[(10)]);
var state_37640__$1 = state_37640;
var statearr_37661_37705 = state_37640__$1;
(statearr_37661_37705[(2)] = inst_37555);

(statearr_37661_37705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (28))){
var inst_37602 = (state_37640[(2)]);
var inst_37603 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37604 = figwheel.client.heads_up.display_warning.call(null,inst_37603);
var state_37640__$1 = (function (){var statearr_37662 = state_37640;
(statearr_37662[(11)] = inst_37602);

return statearr_37662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37640__$1,(29),inst_37604);
} else {
if((state_val_37641 === (25))){
var inst_37600 = figwheel.client.heads_up.clear.call(null);
var state_37640__$1 = state_37640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37640__$1,(28),inst_37600);
} else {
if((state_val_37641 === (34))){
var inst_37621 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37640__$1 = state_37640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37640__$1,(37),inst_37621);
} else {
if((state_val_37641 === (17))){
var inst_37580 = (state_37640[(2)]);
var inst_37581 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37582 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37581);
var state_37640__$1 = (function (){var statearr_37663 = state_37640;
(statearr_37663[(12)] = inst_37580);

return statearr_37663;
})();
var statearr_37664_37706 = state_37640__$1;
(statearr_37664_37706[(2)] = inst_37582);

(statearr_37664_37706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (3))){
var inst_37572 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37640__$1 = state_37640;
if(inst_37572){
var statearr_37665_37707 = state_37640__$1;
(statearr_37665_37707[(1)] = (13));

} else {
var statearr_37666_37708 = state_37640__$1;
(statearr_37666_37708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (12))){
var inst_37568 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
var statearr_37667_37709 = state_37640__$1;
(statearr_37667_37709[(2)] = inst_37568);

(statearr_37667_37709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (2))){
var inst_37555 = (state_37640[(10)]);
var inst_37555__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37640__$1 = (function (){var statearr_37668 = state_37640;
(statearr_37668[(10)] = inst_37555__$1);

return statearr_37668;
})();
if(cljs.core.truth_(inst_37555__$1)){
var statearr_37669_37710 = state_37640__$1;
(statearr_37669_37710[(1)] = (5));

} else {
var statearr_37670_37711 = state_37640__$1;
(statearr_37670_37711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (23))){
var inst_37598 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37640__$1 = state_37640;
if(inst_37598){
var statearr_37671_37712 = state_37640__$1;
(statearr_37671_37712[(1)] = (25));

} else {
var statearr_37672_37713 = state_37640__$1;
(statearr_37672_37713[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (35))){
var state_37640__$1 = state_37640;
var statearr_37673_37714 = state_37640__$1;
(statearr_37673_37714[(2)] = null);

(statearr_37673_37714[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (19))){
var inst_37593 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37640__$1 = state_37640;
if(inst_37593){
var statearr_37674_37715 = state_37640__$1;
(statearr_37674_37715[(1)] = (22));

} else {
var statearr_37675_37716 = state_37640__$1;
(statearr_37675_37716[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (11))){
var inst_37564 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
var statearr_37676_37717 = state_37640__$1;
(statearr_37676_37717[(2)] = inst_37564);

(statearr_37676_37717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (9))){
var inst_37566 = figwheel.client.heads_up.clear.call(null);
var state_37640__$1 = state_37640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37640__$1,(12),inst_37566);
} else {
if((state_val_37641 === (5))){
var inst_37557 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37640__$1 = state_37640;
var statearr_37677_37718 = state_37640__$1;
(statearr_37677_37718[(2)] = inst_37557);

(statearr_37677_37718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (14))){
var inst_37584 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37640__$1 = state_37640;
if(inst_37584){
var statearr_37678_37719 = state_37640__$1;
(statearr_37678_37719[(1)] = (18));

} else {
var statearr_37679_37720 = state_37640__$1;
(statearr_37679_37720[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (26))){
var inst_37610 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37640__$1 = state_37640;
if(inst_37610){
var statearr_37680_37721 = state_37640__$1;
(statearr_37680_37721[(1)] = (30));

} else {
var statearr_37681_37722 = state_37640__$1;
(statearr_37681_37722[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (16))){
var inst_37576 = (state_37640[(2)]);
var inst_37577 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37578 = figwheel.client.heads_up.display_exception.call(null,inst_37577);
var state_37640__$1 = (function (){var statearr_37682 = state_37640;
(statearr_37682[(13)] = inst_37576);

return statearr_37682;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37640__$1,(17),inst_37578);
} else {
if((state_val_37641 === (30))){
var inst_37612 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37613 = figwheel.client.heads_up.display_warning.call(null,inst_37612);
var state_37640__$1 = state_37640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37640__$1,(33),inst_37613);
} else {
if((state_val_37641 === (10))){
var inst_37570 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
var statearr_37683_37723 = state_37640__$1;
(statearr_37683_37723[(2)] = inst_37570);

(statearr_37683_37723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (18))){
var inst_37586 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37587 = figwheel.client.heads_up.display_exception.call(null,inst_37586);
var state_37640__$1 = state_37640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37640__$1,(21),inst_37587);
} else {
if((state_val_37641 === (37))){
var inst_37623 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
var statearr_37684_37724 = state_37640__$1;
(statearr_37684_37724[(2)] = inst_37623);

(statearr_37684_37724[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (8))){
var inst_37562 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37640__$1 = state_37640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37640__$1,(11),inst_37562);
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
});})(c__33521__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33426__auto__,c__33521__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33427__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33427__auto____0 = (function (){
var statearr_37685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37685[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33427__auto__);

(statearr_37685[(1)] = (1));

return statearr_37685;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33427__auto____1 = (function (state_37640){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_37640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e37686){if((e37686 instanceof Object)){
var ex__33430__auto__ = e37686;
var statearr_37687_37725 = state_37640;
(statearr_37687_37725[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37726 = state_37640;
state_37640 = G__37726;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33427__auto__ = function(state_37640){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33427__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33427__auto____1.call(this,state_37640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33427__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33427__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto__,msg_hist,msg_names,msg))
})();
var state__33523__auto__ = (function (){var statearr_37688 = f__33522__auto__.call(null);
(statearr_37688[(6)] = c__33521__auto__);

return statearr_37688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto__,msg_hist,msg_names,msg))
);

return c__33521__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33521__auto___37755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto___37755,ch){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto___37755,ch){
return (function (state_37741){
var state_val_37742 = (state_37741[(1)]);
if((state_val_37742 === (1))){
var state_37741__$1 = state_37741;
var statearr_37743_37756 = state_37741__$1;
(statearr_37743_37756[(2)] = null);

(statearr_37743_37756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (2))){
var state_37741__$1 = state_37741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37741__$1,(4),ch);
} else {
if((state_val_37742 === (3))){
var inst_37739 = (state_37741[(2)]);
var state_37741__$1 = state_37741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37741__$1,inst_37739);
} else {
if((state_val_37742 === (4))){
var inst_37729 = (state_37741[(7)]);
var inst_37729__$1 = (state_37741[(2)]);
var state_37741__$1 = (function (){var statearr_37744 = state_37741;
(statearr_37744[(7)] = inst_37729__$1);

return statearr_37744;
})();
if(cljs.core.truth_(inst_37729__$1)){
var statearr_37745_37757 = state_37741__$1;
(statearr_37745_37757[(1)] = (5));

} else {
var statearr_37746_37758 = state_37741__$1;
(statearr_37746_37758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (5))){
var inst_37729 = (state_37741[(7)]);
var inst_37731 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37729);
var state_37741__$1 = state_37741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37741__$1,(8),inst_37731);
} else {
if((state_val_37742 === (6))){
var state_37741__$1 = state_37741;
var statearr_37747_37759 = state_37741__$1;
(statearr_37747_37759[(2)] = null);

(statearr_37747_37759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (7))){
var inst_37737 = (state_37741[(2)]);
var state_37741__$1 = state_37741;
var statearr_37748_37760 = state_37741__$1;
(statearr_37748_37760[(2)] = inst_37737);

(statearr_37748_37760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37742 === (8))){
var inst_37733 = (state_37741[(2)]);
var state_37741__$1 = (function (){var statearr_37749 = state_37741;
(statearr_37749[(8)] = inst_37733);

return statearr_37749;
})();
var statearr_37750_37761 = state_37741__$1;
(statearr_37750_37761[(2)] = null);

(statearr_37750_37761[(1)] = (2));


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
});})(c__33521__auto___37755,ch))
;
return ((function (switch__33426__auto__,c__33521__auto___37755,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33427__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33427__auto____0 = (function (){
var statearr_37751 = [null,null,null,null,null,null,null,null,null];
(statearr_37751[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33427__auto__);

(statearr_37751[(1)] = (1));

return statearr_37751;
});
var figwheel$client$heads_up_plugin_$_state_machine__33427__auto____1 = (function (state_37741){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_37741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e37752){if((e37752 instanceof Object)){
var ex__33430__auto__ = e37752;
var statearr_37753_37762 = state_37741;
(statearr_37753_37762[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37763 = state_37741;
state_37741 = G__37763;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33427__auto__ = function(state_37741){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33427__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33427__auto____1.call(this,state_37741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33427__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33427__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto___37755,ch))
})();
var state__33523__auto__ = (function (){var statearr_37754 = f__33522__auto__.call(null);
(statearr_37754[(6)] = c__33521__auto___37755);

return statearr_37754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto___37755,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto__){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto__){
return (function (state_37769){
var state_val_37770 = (state_37769[(1)]);
if((state_val_37770 === (1))){
var inst_37764 = cljs.core.async.timeout.call(null,(3000));
var state_37769__$1 = state_37769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37769__$1,(2),inst_37764);
} else {
if((state_val_37770 === (2))){
var inst_37766 = (state_37769[(2)]);
var inst_37767 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37769__$1 = (function (){var statearr_37771 = state_37769;
(statearr_37771[(7)] = inst_37766);

return statearr_37771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37769__$1,inst_37767);
} else {
return null;
}
}
});})(c__33521__auto__))
;
return ((function (switch__33426__auto__,c__33521__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33427__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33427__auto____0 = (function (){
var statearr_37772 = [null,null,null,null,null,null,null,null];
(statearr_37772[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33427__auto__);

(statearr_37772[(1)] = (1));

return statearr_37772;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33427__auto____1 = (function (state_37769){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_37769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e37773){if((e37773 instanceof Object)){
var ex__33430__auto__ = e37773;
var statearr_37774_37776 = state_37769;
(statearr_37774_37776[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37777 = state_37769;
state_37769 = G__37777;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33427__auto__ = function(state_37769){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33427__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33427__auto____1.call(this,state_37769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33427__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33427__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto__))
})();
var state__33523__auto__ = (function (){var statearr_37775 = f__33522__auto__.call(null);
(statearr_37775[(6)] = c__33521__auto__);

return statearr_37775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto__))
);

return c__33521__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33521__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33521__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__33522__auto__ = (function (){var switch__33426__auto__ = ((function (c__33521__auto__,figwheel_version,temp__5720__auto__){
return (function (state_37784){
var state_val_37785 = (state_37784[(1)]);
if((state_val_37785 === (1))){
var inst_37778 = cljs.core.async.timeout.call(null,(2000));
var state_37784__$1 = state_37784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37784__$1,(2),inst_37778);
} else {
if((state_val_37785 === (2))){
var inst_37780 = (state_37784[(2)]);
var inst_37781 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37782 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37781);
var state_37784__$1 = (function (){var statearr_37786 = state_37784;
(statearr_37786[(7)] = inst_37780);

return statearr_37786;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37784__$1,inst_37782);
} else {
return null;
}
}
});})(c__33521__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__33426__auto__,c__33521__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33427__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33427__auto____0 = (function (){
var statearr_37787 = [null,null,null,null,null,null,null,null];
(statearr_37787[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33427__auto__);

(statearr_37787[(1)] = (1));

return statearr_37787;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33427__auto____1 = (function (state_37784){
while(true){
var ret_value__33428__auto__ = (function (){try{while(true){
var result__33429__auto__ = switch__33426__auto__.call(null,state_37784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33429__auto__;
}
break;
}
}catch (e37788){if((e37788 instanceof Object)){
var ex__33430__auto__ = e37788;
var statearr_37789_37791 = state_37784;
(statearr_37789_37791[(5)] = ex__33430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37792 = state_37784;
state_37784 = G__37792;
continue;
} else {
return ret_value__33428__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33427__auto__ = function(state_37784){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33427__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33427__auto____1.call(this,state_37784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33427__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33427__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33427__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33427__auto__;
})()
;})(switch__33426__auto__,c__33521__auto__,figwheel_version,temp__5720__auto__))
})();
var state__33523__auto__ = (function (){var statearr_37790 = f__33522__auto__.call(null);
(statearr_37790[(6)] = c__33521__auto__);

return statearr_37790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33523__auto__);
});})(c__33521__auto__,figwheel_version,temp__5720__auto__))
);

return c__33521__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37793){
var map__37794 = p__37793;
var map__37794__$1 = (((((!((map__37794 == null))))?(((((map__37794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37794):map__37794);
var file = cljs.core.get.call(null,map__37794__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37794__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37794__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37796 = "";
var G__37796__$1 = (cljs.core.truth_(file)?[G__37796,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37796);
var G__37796__$2 = (cljs.core.truth_(line)?[G__37796__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37796__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__37796__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37796__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37797){
var map__37798 = p__37797;
var map__37798__$1 = (((((!((map__37798 == null))))?(((((map__37798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37798):map__37798);
var ed = map__37798__$1;
var formatted_exception = cljs.core.get.call(null,map__37798__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37798__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37798__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37800_37804 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37801_37805 = null;
var count__37802_37806 = (0);
var i__37803_37807 = (0);
while(true){
if((i__37803_37807 < count__37802_37806)){
var msg_37808 = cljs.core._nth.call(null,chunk__37801_37805,i__37803_37807);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37808);


var G__37809 = seq__37800_37804;
var G__37810 = chunk__37801_37805;
var G__37811 = count__37802_37806;
var G__37812 = (i__37803_37807 + (1));
seq__37800_37804 = G__37809;
chunk__37801_37805 = G__37810;
count__37802_37806 = G__37811;
i__37803_37807 = G__37812;
continue;
} else {
var temp__5720__auto___37813 = cljs.core.seq.call(null,seq__37800_37804);
if(temp__5720__auto___37813){
var seq__37800_37814__$1 = temp__5720__auto___37813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37800_37814__$1)){
var c__4550__auto___37815 = cljs.core.chunk_first.call(null,seq__37800_37814__$1);
var G__37816 = cljs.core.chunk_rest.call(null,seq__37800_37814__$1);
var G__37817 = c__4550__auto___37815;
var G__37818 = cljs.core.count.call(null,c__4550__auto___37815);
var G__37819 = (0);
seq__37800_37804 = G__37816;
chunk__37801_37805 = G__37817;
count__37802_37806 = G__37818;
i__37803_37807 = G__37819;
continue;
} else {
var msg_37820 = cljs.core.first.call(null,seq__37800_37814__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37820);


var G__37821 = cljs.core.next.call(null,seq__37800_37814__$1);
var G__37822 = null;
var G__37823 = (0);
var G__37824 = (0);
seq__37800_37804 = G__37821;
chunk__37801_37805 = G__37822;
count__37802_37806 = G__37823;
i__37803_37807 = G__37824;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",figwheel.client.file_line_column.call(null,ed)].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37825){
var map__37826 = p__37825;
var map__37826__$1 = (((((!((map__37826 == null))))?(((((map__37826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37826):map__37826);
var w = map__37826__$1;
var message = cljs.core.get.call(null,map__37826__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,364,364,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,356,356,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37828 = cljs.core.seq.call(null,plugins);
var chunk__37829 = null;
var count__37830 = (0);
var i__37831 = (0);
while(true){
if((i__37831 < count__37830)){
var vec__37838 = cljs.core._nth.call(null,chunk__37829,i__37831);
var k = cljs.core.nth.call(null,vec__37838,(0),null);
var plugin = cljs.core.nth.call(null,vec__37838,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37844 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37828,chunk__37829,count__37830,i__37831,pl_37844,vec__37838,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37844.call(null,msg_hist);
});})(seq__37828,chunk__37829,count__37830,i__37831,pl_37844,vec__37838,k,plugin))
);
} else {
}


var G__37845 = seq__37828;
var G__37846 = chunk__37829;
var G__37847 = count__37830;
var G__37848 = (i__37831 + (1));
seq__37828 = G__37845;
chunk__37829 = G__37846;
count__37830 = G__37847;
i__37831 = G__37848;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37828);
if(temp__5720__auto__){
var seq__37828__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37828__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__37828__$1);
var G__37849 = cljs.core.chunk_rest.call(null,seq__37828__$1);
var G__37850 = c__4550__auto__;
var G__37851 = cljs.core.count.call(null,c__4550__auto__);
var G__37852 = (0);
seq__37828 = G__37849;
chunk__37829 = G__37850;
count__37830 = G__37851;
i__37831 = G__37852;
continue;
} else {
var vec__37841 = cljs.core.first.call(null,seq__37828__$1);
var k = cljs.core.nth.call(null,vec__37841,(0),null);
var plugin = cljs.core.nth.call(null,vec__37841,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37853 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37828,chunk__37829,count__37830,i__37831,pl_37853,vec__37841,k,plugin,seq__37828__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37853.call(null,msg_hist);
});})(seq__37828,chunk__37829,count__37830,i__37831,pl_37853,vec__37841,k,plugin,seq__37828__$1,temp__5720__auto__))
);
} else {
}


var G__37854 = cljs.core.next.call(null,seq__37828__$1);
var G__37855 = null;
var G__37856 = (0);
var G__37857 = (0);
seq__37828 = G__37854;
chunk__37829 = G__37855;
count__37830 = G__37856;
i__37831 = G__37857;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37859 = arguments.length;
switch (G__37859) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37860_37865 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37861_37866 = null;
var count__37862_37867 = (0);
var i__37863_37868 = (0);
while(true){
if((i__37863_37868 < count__37862_37867)){
var msg_37869 = cljs.core._nth.call(null,chunk__37861_37866,i__37863_37868);
figwheel.client.socket.handle_incoming_message.call(null,msg_37869);


var G__37870 = seq__37860_37865;
var G__37871 = chunk__37861_37866;
var G__37872 = count__37862_37867;
var G__37873 = (i__37863_37868 + (1));
seq__37860_37865 = G__37870;
chunk__37861_37866 = G__37871;
count__37862_37867 = G__37872;
i__37863_37868 = G__37873;
continue;
} else {
var temp__5720__auto___37874 = cljs.core.seq.call(null,seq__37860_37865);
if(temp__5720__auto___37874){
var seq__37860_37875__$1 = temp__5720__auto___37874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37860_37875__$1)){
var c__4550__auto___37876 = cljs.core.chunk_first.call(null,seq__37860_37875__$1);
var G__37877 = cljs.core.chunk_rest.call(null,seq__37860_37875__$1);
var G__37878 = c__4550__auto___37876;
var G__37879 = cljs.core.count.call(null,c__4550__auto___37876);
var G__37880 = (0);
seq__37860_37865 = G__37877;
chunk__37861_37866 = G__37878;
count__37862_37867 = G__37879;
i__37863_37868 = G__37880;
continue;
} else {
var msg_37881 = cljs.core.first.call(null,seq__37860_37875__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37881);


var G__37882 = cljs.core.next.call(null,seq__37860_37875__$1);
var G__37883 = null;
var G__37884 = (0);
var G__37885 = (0);
seq__37860_37865 = G__37882;
chunk__37861_37866 = G__37883;
count__37862_37867 = G__37884;
i__37863_37868 = G__37885;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37890 = arguments.length;
var i__4731__auto___37891 = (0);
while(true){
if((i__4731__auto___37891 < len__4730__auto___37890)){
args__4736__auto__.push((arguments[i__4731__auto___37891]));

var G__37892 = (i__4731__auto___37891 + (1));
i__4731__auto___37891 = G__37892;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37887){
var map__37888 = p__37887;
var map__37888__$1 = (((((!((map__37888 == null))))?(((((map__37888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37888):map__37888);
var opts = map__37888__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37886){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37886));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37893){if((e37893 instanceof Error)){
var e = e37893;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37893;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37894){
var map__37895 = p__37894;
var map__37895__$1 = (((((!((map__37895 == null))))?(((((map__37895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37895):map__37895);
var msg_name = cljs.core.get.call(null,map__37895__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1568179222836
