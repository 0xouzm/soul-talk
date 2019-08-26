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
}catch (e30311){if((e30311 instanceof Error)){
var e = e30311;
return "Error: Unable to stringify";
} else {
throw e30311;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30314 = arguments.length;
switch (G__30314) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30312_SHARP_){
if(typeof p1__30312_SHARP_ === 'string'){
return p1__30312_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30312_SHARP_);
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
var len__4730__auto___30317 = arguments.length;
var i__4731__auto___30318 = (0);
while(true){
if((i__4731__auto___30318 < len__4730__auto___30317)){
args__4736__auto__.push((arguments[i__4731__auto___30318]));

var G__30319 = (i__4731__auto___30318 + (1));
i__4731__auto___30318 = G__30319;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30316){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30316));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30321 = arguments.length;
var i__4731__auto___30322 = (0);
while(true){
if((i__4731__auto___30322 < len__4730__auto___30321)){
args__4736__auto__.push((arguments[i__4731__auto___30322]));

var G__30323 = (i__4731__auto___30322 + (1));
i__4731__auto___30322 = G__30323;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30320){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30320));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30324){
var map__30325 = p__30324;
var map__30325__$1 = (((((!((map__30325 == null))))?(((((map__30325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30325):map__30325);
var message = cljs.core.get.call(null,map__30325__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30325__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__25051__auto___30404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___30404,ch){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___30404,ch){
return (function (state_30376){
var state_val_30377 = (state_30376[(1)]);
if((state_val_30377 === (7))){
var inst_30372 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30378_30405 = state_30376__$1;
(statearr_30378_30405[(2)] = inst_30372);

(statearr_30378_30405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (1))){
var state_30376__$1 = state_30376;
var statearr_30379_30406 = state_30376__$1;
(statearr_30379_30406[(2)] = null);

(statearr_30379_30406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (4))){
var inst_30329 = (state_30376[(7)]);
var inst_30329__$1 = (state_30376[(2)]);
var state_30376__$1 = (function (){var statearr_30380 = state_30376;
(statearr_30380[(7)] = inst_30329__$1);

return statearr_30380;
})();
if(cljs.core.truth_(inst_30329__$1)){
var statearr_30381_30407 = state_30376__$1;
(statearr_30381_30407[(1)] = (5));

} else {
var statearr_30382_30408 = state_30376__$1;
(statearr_30382_30408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (15))){
var inst_30336 = (state_30376[(8)]);
var inst_30351 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30336);
var inst_30352 = cljs.core.first.call(null,inst_30351);
var inst_30353 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30352);
var inst_30354 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30353)].join('');
var inst_30355 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30354);
var state_30376__$1 = state_30376;
var statearr_30383_30409 = state_30376__$1;
(statearr_30383_30409[(2)] = inst_30355);

(statearr_30383_30409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (13))){
var inst_30360 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30384_30410 = state_30376__$1;
(statearr_30384_30410[(2)] = inst_30360);

(statearr_30384_30410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (6))){
var state_30376__$1 = state_30376;
var statearr_30385_30411 = state_30376__$1;
(statearr_30385_30411[(2)] = null);

(statearr_30385_30411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (17))){
var inst_30358 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30386_30412 = state_30376__$1;
(statearr_30386_30412[(2)] = inst_30358);

(statearr_30386_30412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (3))){
var inst_30374 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30376__$1,inst_30374);
} else {
if((state_val_30377 === (12))){
var inst_30335 = (state_30376[(9)]);
var inst_30349 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30335,opts);
var state_30376__$1 = state_30376;
if(inst_30349){
var statearr_30387_30413 = state_30376__$1;
(statearr_30387_30413[(1)] = (15));

} else {
var statearr_30388_30414 = state_30376__$1;
(statearr_30388_30414[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (2))){
var state_30376__$1 = state_30376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30376__$1,(4),ch);
} else {
if((state_val_30377 === (11))){
var inst_30336 = (state_30376[(8)]);
var inst_30341 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30342 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30336);
var inst_30343 = cljs.core.async.timeout.call(null,(1000));
var inst_30344 = [inst_30342,inst_30343];
var inst_30345 = (new cljs.core.PersistentVector(null,2,(5),inst_30341,inst_30344,null));
var state_30376__$1 = state_30376;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30376__$1,(14),inst_30345);
} else {
if((state_val_30377 === (9))){
var inst_30336 = (state_30376[(8)]);
var inst_30362 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30363 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30336);
var inst_30364 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30363);
var inst_30365 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30364)].join('');
var inst_30366 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30365);
var state_30376__$1 = (function (){var statearr_30389 = state_30376;
(statearr_30389[(10)] = inst_30362);

return statearr_30389;
})();
var statearr_30390_30415 = state_30376__$1;
(statearr_30390_30415[(2)] = inst_30366);

(statearr_30390_30415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (5))){
var inst_30329 = (state_30376[(7)]);
var inst_30331 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30332 = (new cljs.core.PersistentArrayMap(null,2,inst_30331,null));
var inst_30333 = (new cljs.core.PersistentHashSet(null,inst_30332,null));
var inst_30334 = figwheel.client.focus_msgs.call(null,inst_30333,inst_30329);
var inst_30335 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30334);
var inst_30336 = cljs.core.first.call(null,inst_30334);
var inst_30337 = figwheel.client.autoload_QMARK_.call(null);
var state_30376__$1 = (function (){var statearr_30391 = state_30376;
(statearr_30391[(9)] = inst_30335);

(statearr_30391[(8)] = inst_30336);

return statearr_30391;
})();
if(cljs.core.truth_(inst_30337)){
var statearr_30392_30416 = state_30376__$1;
(statearr_30392_30416[(1)] = (8));

} else {
var statearr_30393_30417 = state_30376__$1;
(statearr_30393_30417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (14))){
var inst_30347 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30394_30418 = state_30376__$1;
(statearr_30394_30418[(2)] = inst_30347);

(statearr_30394_30418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (16))){
var state_30376__$1 = state_30376;
var statearr_30395_30419 = state_30376__$1;
(statearr_30395_30419[(2)] = null);

(statearr_30395_30419[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (10))){
var inst_30368 = (state_30376[(2)]);
var state_30376__$1 = (function (){var statearr_30396 = state_30376;
(statearr_30396[(11)] = inst_30368);

return statearr_30396;
})();
var statearr_30397_30420 = state_30376__$1;
(statearr_30397_30420[(2)] = null);

(statearr_30397_30420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (8))){
var inst_30335 = (state_30376[(9)]);
var inst_30339 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30335,opts);
var state_30376__$1 = state_30376;
if(cljs.core.truth_(inst_30339)){
var statearr_30398_30421 = state_30376__$1;
(statearr_30398_30421[(1)] = (11));

} else {
var statearr_30399_30422 = state_30376__$1;
(statearr_30399_30422[(1)] = (12));

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
});})(c__25051__auto___30404,ch))
;
return ((function (switch__24956__auto__,c__25051__auto___30404,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24957__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24957__auto____0 = (function (){
var statearr_30400 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30400[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24957__auto__);

(statearr_30400[(1)] = (1));

return statearr_30400;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24957__auto____1 = (function (state_30376){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_30376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e30401){if((e30401 instanceof Object)){
var ex__24960__auto__ = e30401;
var statearr_30402_30423 = state_30376;
(statearr_30402_30423[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30424 = state_30376;
state_30376 = G__30424;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24957__auto__ = function(state_30376){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24957__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24957__auto____1.call(this,state_30376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24957__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24957__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___30404,ch))
})();
var state__25053__auto__ = (function (){var statearr_30403 = f__25052__auto__.call(null);
(statearr_30403[(6)] = c__25051__auto___30404);

return statearr_30403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___30404,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30425_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30425_SHARP_));
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
var base_path_30431 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30431){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30427 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30428 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30429 = true;
var _STAR_print_fn_STAR__temp_val__30430 = ((function (_STAR_print_newline_STAR__orig_val__30427,_STAR_print_fn_STAR__orig_val__30428,_STAR_print_newline_STAR__temp_val__30429,sb,base_path_30431){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30427,_STAR_print_fn_STAR__orig_val__30428,_STAR_print_newline_STAR__temp_val__30429,sb,base_path_30431))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30429;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30430;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30428;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30427;
}}catch (e30426){if((e30426 instanceof Error)){
var e = e30426;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30431], null));
} else {
var e = e30426;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30431))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30432){
var map__30433 = p__30432;
var map__30433__$1 = (((((!((map__30433 == null))))?(((((map__30433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30433):map__30433);
var opts = map__30433__$1;
var build_id = cljs.core.get.call(null,map__30433__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30433,map__30433__$1,opts,build_id){
return (function (p__30435){
var vec__30436 = p__30435;
var seq__30437 = cljs.core.seq.call(null,vec__30436);
var first__30438 = cljs.core.first.call(null,seq__30437);
var seq__30437__$1 = cljs.core.next.call(null,seq__30437);
var map__30439 = first__30438;
var map__30439__$1 = (((((!((map__30439 == null))))?(((((map__30439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30439):map__30439);
var msg = map__30439__$1;
var msg_name = cljs.core.get.call(null,map__30439__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30437__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30436,seq__30437,first__30438,seq__30437__$1,map__30439,map__30439__$1,msg,msg_name,_,map__30433,map__30433__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30436,seq__30437,first__30438,seq__30437__$1,map__30439,map__30439__$1,msg,msg_name,_,map__30433,map__30433__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30433,map__30433__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30441){
var vec__30442 = p__30441;
var seq__30443 = cljs.core.seq.call(null,vec__30442);
var first__30444 = cljs.core.first.call(null,seq__30443);
var seq__30443__$1 = cljs.core.next.call(null,seq__30443);
var map__30445 = first__30444;
var map__30445__$1 = (((((!((map__30445 == null))))?(((((map__30445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30445):map__30445);
var msg = map__30445__$1;
var msg_name = cljs.core.get.call(null,map__30445__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30443__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30447){
var map__30448 = p__30447;
var map__30448__$1 = (((((!((map__30448 == null))))?(((((map__30448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30448):map__30448);
var on_compile_warning = cljs.core.get.call(null,map__30448__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30448__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30448,map__30448__$1,on_compile_warning,on_compile_fail){
return (function (p__30450){
var vec__30451 = p__30450;
var seq__30452 = cljs.core.seq.call(null,vec__30451);
var first__30453 = cljs.core.first.call(null,seq__30452);
var seq__30452__$1 = cljs.core.next.call(null,seq__30452);
var map__30454 = first__30453;
var map__30454__$1 = (((((!((map__30454 == null))))?(((((map__30454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30454):map__30454);
var msg = map__30454__$1;
var msg_name = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30452__$1;
var pred__30456 = cljs.core._EQ_;
var expr__30457 = msg_name;
if(cljs.core.truth_(pred__30456.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30457))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30456.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30457))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30448,map__30448__$1,on_compile_warning,on_compile_fail))
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
var c__25051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto__,msg_hist,msg_names,msg){
return (function (state_30546){
var state_val_30547 = (state_30546[(1)]);
if((state_val_30547 === (7))){
var inst_30466 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
if(cljs.core.truth_(inst_30466)){
var statearr_30548_30595 = state_30546__$1;
(statearr_30548_30595[(1)] = (8));

} else {
var statearr_30549_30596 = state_30546__$1;
(statearr_30549_30596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (20))){
var inst_30540 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30550_30597 = state_30546__$1;
(statearr_30550_30597[(2)] = inst_30540);

(statearr_30550_30597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (27))){
var inst_30536 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30551_30598 = state_30546__$1;
(statearr_30551_30598[(2)] = inst_30536);

(statearr_30551_30598[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (1))){
var inst_30459 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30546__$1 = state_30546;
if(cljs.core.truth_(inst_30459)){
var statearr_30552_30599 = state_30546__$1;
(statearr_30552_30599[(1)] = (2));

} else {
var statearr_30553_30600 = state_30546__$1;
(statearr_30553_30600[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (24))){
var inst_30538 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30554_30601 = state_30546__$1;
(statearr_30554_30601[(2)] = inst_30538);

(statearr_30554_30601[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (4))){
var inst_30544 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30546__$1,inst_30544);
} else {
if((state_val_30547 === (15))){
var inst_30542 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30555_30602 = state_30546__$1;
(statearr_30555_30602[(2)] = inst_30542);

(statearr_30555_30602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (21))){
var inst_30495 = (state_30546[(2)]);
var inst_30496 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30497 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30496);
var state_30546__$1 = (function (){var statearr_30556 = state_30546;
(statearr_30556[(7)] = inst_30495);

return statearr_30556;
})();
var statearr_30557_30603 = state_30546__$1;
(statearr_30557_30603[(2)] = inst_30497);

(statearr_30557_30603[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (31))){
var inst_30525 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30546__$1 = state_30546;
if(inst_30525){
var statearr_30558_30604 = state_30546__$1;
(statearr_30558_30604[(1)] = (34));

} else {
var statearr_30559_30605 = state_30546__$1;
(statearr_30559_30605[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (32))){
var inst_30534 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30560_30606 = state_30546__$1;
(statearr_30560_30606[(2)] = inst_30534);

(statearr_30560_30606[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (33))){
var inst_30521 = (state_30546[(2)]);
var inst_30522 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30523 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30522);
var state_30546__$1 = (function (){var statearr_30561 = state_30546;
(statearr_30561[(8)] = inst_30521);

return statearr_30561;
})();
var statearr_30562_30607 = state_30546__$1;
(statearr_30562_30607[(2)] = inst_30523);

(statearr_30562_30607[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (13))){
var inst_30480 = figwheel.client.heads_up.clear.call(null);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(16),inst_30480);
} else {
if((state_val_30547 === (22))){
var inst_30501 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30502 = figwheel.client.heads_up.append_warning_message.call(null,inst_30501);
var state_30546__$1 = state_30546;
var statearr_30563_30608 = state_30546__$1;
(statearr_30563_30608[(2)] = inst_30502);

(statearr_30563_30608[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (36))){
var inst_30532 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30564_30609 = state_30546__$1;
(statearr_30564_30609[(2)] = inst_30532);

(statearr_30564_30609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (29))){
var inst_30512 = (state_30546[(2)]);
var inst_30513 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30514 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30513);
var state_30546__$1 = (function (){var statearr_30565 = state_30546;
(statearr_30565[(9)] = inst_30512);

return statearr_30565;
})();
var statearr_30566_30610 = state_30546__$1;
(statearr_30566_30610[(2)] = inst_30514);

(statearr_30566_30610[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (6))){
var inst_30461 = (state_30546[(10)]);
var state_30546__$1 = state_30546;
var statearr_30567_30611 = state_30546__$1;
(statearr_30567_30611[(2)] = inst_30461);

(statearr_30567_30611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (28))){
var inst_30508 = (state_30546[(2)]);
var inst_30509 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30510 = figwheel.client.heads_up.display_warning.call(null,inst_30509);
var state_30546__$1 = (function (){var statearr_30568 = state_30546;
(statearr_30568[(11)] = inst_30508);

return statearr_30568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(29),inst_30510);
} else {
if((state_val_30547 === (25))){
var inst_30506 = figwheel.client.heads_up.clear.call(null);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(28),inst_30506);
} else {
if((state_val_30547 === (34))){
var inst_30527 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(37),inst_30527);
} else {
if((state_val_30547 === (17))){
var inst_30486 = (state_30546[(2)]);
var inst_30487 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30488 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30487);
var state_30546__$1 = (function (){var statearr_30569 = state_30546;
(statearr_30569[(12)] = inst_30486);

return statearr_30569;
})();
var statearr_30570_30612 = state_30546__$1;
(statearr_30570_30612[(2)] = inst_30488);

(statearr_30570_30612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (3))){
var inst_30478 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30546__$1 = state_30546;
if(inst_30478){
var statearr_30571_30613 = state_30546__$1;
(statearr_30571_30613[(1)] = (13));

} else {
var statearr_30572_30614 = state_30546__$1;
(statearr_30572_30614[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (12))){
var inst_30474 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30573_30615 = state_30546__$1;
(statearr_30573_30615[(2)] = inst_30474);

(statearr_30573_30615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (2))){
var inst_30461 = (state_30546[(10)]);
var inst_30461__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30546__$1 = (function (){var statearr_30574 = state_30546;
(statearr_30574[(10)] = inst_30461__$1);

return statearr_30574;
})();
if(cljs.core.truth_(inst_30461__$1)){
var statearr_30575_30616 = state_30546__$1;
(statearr_30575_30616[(1)] = (5));

} else {
var statearr_30576_30617 = state_30546__$1;
(statearr_30576_30617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (23))){
var inst_30504 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30546__$1 = state_30546;
if(inst_30504){
var statearr_30577_30618 = state_30546__$1;
(statearr_30577_30618[(1)] = (25));

} else {
var statearr_30578_30619 = state_30546__$1;
(statearr_30578_30619[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (35))){
var state_30546__$1 = state_30546;
var statearr_30579_30620 = state_30546__$1;
(statearr_30579_30620[(2)] = null);

(statearr_30579_30620[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (19))){
var inst_30499 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30546__$1 = state_30546;
if(inst_30499){
var statearr_30580_30621 = state_30546__$1;
(statearr_30580_30621[(1)] = (22));

} else {
var statearr_30581_30622 = state_30546__$1;
(statearr_30581_30622[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (11))){
var inst_30470 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30582_30623 = state_30546__$1;
(statearr_30582_30623[(2)] = inst_30470);

(statearr_30582_30623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (9))){
var inst_30472 = figwheel.client.heads_up.clear.call(null);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(12),inst_30472);
} else {
if((state_val_30547 === (5))){
var inst_30463 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30546__$1 = state_30546;
var statearr_30583_30624 = state_30546__$1;
(statearr_30583_30624[(2)] = inst_30463);

(statearr_30583_30624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (14))){
var inst_30490 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30546__$1 = state_30546;
if(inst_30490){
var statearr_30584_30625 = state_30546__$1;
(statearr_30584_30625[(1)] = (18));

} else {
var statearr_30585_30626 = state_30546__$1;
(statearr_30585_30626[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (26))){
var inst_30516 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30546__$1 = state_30546;
if(inst_30516){
var statearr_30586_30627 = state_30546__$1;
(statearr_30586_30627[(1)] = (30));

} else {
var statearr_30587_30628 = state_30546__$1;
(statearr_30587_30628[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (16))){
var inst_30482 = (state_30546[(2)]);
var inst_30483 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30484 = figwheel.client.heads_up.display_exception.call(null,inst_30483);
var state_30546__$1 = (function (){var statearr_30588 = state_30546;
(statearr_30588[(13)] = inst_30482);

return statearr_30588;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(17),inst_30484);
} else {
if((state_val_30547 === (30))){
var inst_30518 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30519 = figwheel.client.heads_up.display_warning.call(null,inst_30518);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(33),inst_30519);
} else {
if((state_val_30547 === (10))){
var inst_30476 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30589_30629 = state_30546__$1;
(statearr_30589_30629[(2)] = inst_30476);

(statearr_30589_30629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (18))){
var inst_30492 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30493 = figwheel.client.heads_up.display_exception.call(null,inst_30492);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(21),inst_30493);
} else {
if((state_val_30547 === (37))){
var inst_30529 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30590_30630 = state_30546__$1;
(statearr_30590_30630[(2)] = inst_30529);

(statearr_30590_30630[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (8))){
var inst_30468 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(11),inst_30468);
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
});})(c__25051__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24956__auto__,c__25051__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24957__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24957__auto____0 = (function (){
var statearr_30591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30591[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24957__auto__);

(statearr_30591[(1)] = (1));

return statearr_30591;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24957__auto____1 = (function (state_30546){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_30546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e30592){if((e30592 instanceof Object)){
var ex__24960__auto__ = e30592;
var statearr_30593_30631 = state_30546;
(statearr_30593_30631[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30632 = state_30546;
state_30546 = G__30632;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24957__auto__ = function(state_30546){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24957__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24957__auto____1.call(this,state_30546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24957__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24957__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto__,msg_hist,msg_names,msg))
})();
var state__25053__auto__ = (function (){var statearr_30594 = f__25052__auto__.call(null);
(statearr_30594[(6)] = c__25051__auto__);

return statearr_30594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto__,msg_hist,msg_names,msg))
);

return c__25051__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25051__auto___30661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto___30661,ch){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto___30661,ch){
return (function (state_30647){
var state_val_30648 = (state_30647[(1)]);
if((state_val_30648 === (1))){
var state_30647__$1 = state_30647;
var statearr_30649_30662 = state_30647__$1;
(statearr_30649_30662[(2)] = null);

(statearr_30649_30662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (2))){
var state_30647__$1 = state_30647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30647__$1,(4),ch);
} else {
if((state_val_30648 === (3))){
var inst_30645 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30647__$1,inst_30645);
} else {
if((state_val_30648 === (4))){
var inst_30635 = (state_30647[(7)]);
var inst_30635__$1 = (state_30647[(2)]);
var state_30647__$1 = (function (){var statearr_30650 = state_30647;
(statearr_30650[(7)] = inst_30635__$1);

return statearr_30650;
})();
if(cljs.core.truth_(inst_30635__$1)){
var statearr_30651_30663 = state_30647__$1;
(statearr_30651_30663[(1)] = (5));

} else {
var statearr_30652_30664 = state_30647__$1;
(statearr_30652_30664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (5))){
var inst_30635 = (state_30647[(7)]);
var inst_30637 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30635);
var state_30647__$1 = state_30647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30647__$1,(8),inst_30637);
} else {
if((state_val_30648 === (6))){
var state_30647__$1 = state_30647;
var statearr_30653_30665 = state_30647__$1;
(statearr_30653_30665[(2)] = null);

(statearr_30653_30665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (7))){
var inst_30643 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
var statearr_30654_30666 = state_30647__$1;
(statearr_30654_30666[(2)] = inst_30643);

(statearr_30654_30666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (8))){
var inst_30639 = (state_30647[(2)]);
var state_30647__$1 = (function (){var statearr_30655 = state_30647;
(statearr_30655[(8)] = inst_30639);

return statearr_30655;
})();
var statearr_30656_30667 = state_30647__$1;
(statearr_30656_30667[(2)] = null);

(statearr_30656_30667[(1)] = (2));


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
});})(c__25051__auto___30661,ch))
;
return ((function (switch__24956__auto__,c__25051__auto___30661,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24957__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24957__auto____0 = (function (){
var statearr_30657 = [null,null,null,null,null,null,null,null,null];
(statearr_30657[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24957__auto__);

(statearr_30657[(1)] = (1));

return statearr_30657;
});
var figwheel$client$heads_up_plugin_$_state_machine__24957__auto____1 = (function (state_30647){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_30647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e30658){if((e30658 instanceof Object)){
var ex__24960__auto__ = e30658;
var statearr_30659_30668 = state_30647;
(statearr_30659_30668[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30669 = state_30647;
state_30647 = G__30669;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24957__auto__ = function(state_30647){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24957__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24957__auto____1.call(this,state_30647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24957__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24957__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto___30661,ch))
})();
var state__25053__auto__ = (function (){var statearr_30660 = f__25052__auto__.call(null);
(statearr_30660[(6)] = c__25051__auto___30661);

return statearr_30660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto___30661,ch))
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
var c__25051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto__){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto__){
return (function (state_30675){
var state_val_30676 = (state_30675[(1)]);
if((state_val_30676 === (1))){
var inst_30670 = cljs.core.async.timeout.call(null,(3000));
var state_30675__$1 = state_30675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30675__$1,(2),inst_30670);
} else {
if((state_val_30676 === (2))){
var inst_30672 = (state_30675[(2)]);
var inst_30673 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30675__$1 = (function (){var statearr_30677 = state_30675;
(statearr_30677[(7)] = inst_30672);

return statearr_30677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30675__$1,inst_30673);
} else {
return null;
}
}
});})(c__25051__auto__))
;
return ((function (switch__24956__auto__,c__25051__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24957__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24957__auto____0 = (function (){
var statearr_30678 = [null,null,null,null,null,null,null,null];
(statearr_30678[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24957__auto__);

(statearr_30678[(1)] = (1));

return statearr_30678;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24957__auto____1 = (function (state_30675){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_30675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e30679){if((e30679 instanceof Object)){
var ex__24960__auto__ = e30679;
var statearr_30680_30682 = state_30675;
(statearr_30680_30682[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30683 = state_30675;
state_30675 = G__30683;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24957__auto__ = function(state_30675){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24957__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24957__auto____1.call(this,state_30675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24957__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24957__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto__))
})();
var state__25053__auto__ = (function (){var statearr_30681 = f__25052__auto__.call(null);
(statearr_30681[(6)] = c__25051__auto__);

return statearr_30681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto__))
);

return c__25051__auto__;
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
var c__25051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25051__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__25052__auto__ = (function (){var switch__24956__auto__ = ((function (c__25051__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30690){
var state_val_30691 = (state_30690[(1)]);
if((state_val_30691 === (1))){
var inst_30684 = cljs.core.async.timeout.call(null,(2000));
var state_30690__$1 = state_30690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30690__$1,(2),inst_30684);
} else {
if((state_val_30691 === (2))){
var inst_30686 = (state_30690[(2)]);
var inst_30687 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30688 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30687);
var state_30690__$1 = (function (){var statearr_30692 = state_30690;
(statearr_30692[(7)] = inst_30686);

return statearr_30692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30690__$1,inst_30688);
} else {
return null;
}
}
});})(c__25051__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__24956__auto__,c__25051__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24957__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24957__auto____0 = (function (){
var statearr_30693 = [null,null,null,null,null,null,null,null];
(statearr_30693[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24957__auto__);

(statearr_30693[(1)] = (1));

return statearr_30693;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24957__auto____1 = (function (state_30690){
while(true){
var ret_value__24958__auto__ = (function (){try{while(true){
var result__24959__auto__ = switch__24956__auto__.call(null,state_30690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24959__auto__;
}
break;
}
}catch (e30694){if((e30694 instanceof Object)){
var ex__24960__auto__ = e30694;
var statearr_30695_30697 = state_30690;
(statearr_30695_30697[(5)] = ex__24960__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24958__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30698 = state_30690;
state_30690 = G__30698;
continue;
} else {
return ret_value__24958__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24957__auto__ = function(state_30690){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24957__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24957__auto____1.call(this,state_30690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24957__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24957__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24957__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24957__auto__;
})()
;})(switch__24956__auto__,c__25051__auto__,figwheel_version,temp__5720__auto__))
})();
var state__25053__auto__ = (function (){var statearr_30696 = f__25052__auto__.call(null);
(statearr_30696[(6)] = c__25051__auto__);

return statearr_30696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25053__auto__);
});})(c__25051__auto__,figwheel_version,temp__5720__auto__))
);

return c__25051__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30699){
var map__30700 = p__30699;
var map__30700__$1 = (((((!((map__30700 == null))))?(((((map__30700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30700):map__30700);
var file = cljs.core.get.call(null,map__30700__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30700__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30700__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30702 = "";
var G__30702__$1 = (cljs.core.truth_(file)?[G__30702,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30702);
var G__30702__$2 = (cljs.core.truth_(line)?[G__30702__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30702__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__30702__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30702__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30703){
var map__30704 = p__30703;
var map__30704__$1 = (((((!((map__30704 == null))))?(((((map__30704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30704):map__30704);
var ed = map__30704__$1;
var formatted_exception = cljs.core.get.call(null,map__30704__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30704__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30704__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30706_30710 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30707_30711 = null;
var count__30708_30712 = (0);
var i__30709_30713 = (0);
while(true){
if((i__30709_30713 < count__30708_30712)){
var msg_30714 = cljs.core._nth.call(null,chunk__30707_30711,i__30709_30713);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30714);


var G__30715 = seq__30706_30710;
var G__30716 = chunk__30707_30711;
var G__30717 = count__30708_30712;
var G__30718 = (i__30709_30713 + (1));
seq__30706_30710 = G__30715;
chunk__30707_30711 = G__30716;
count__30708_30712 = G__30717;
i__30709_30713 = G__30718;
continue;
} else {
var temp__5720__auto___30719 = cljs.core.seq.call(null,seq__30706_30710);
if(temp__5720__auto___30719){
var seq__30706_30720__$1 = temp__5720__auto___30719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30706_30720__$1)){
var c__4550__auto___30721 = cljs.core.chunk_first.call(null,seq__30706_30720__$1);
var G__30722 = cljs.core.chunk_rest.call(null,seq__30706_30720__$1);
var G__30723 = c__4550__auto___30721;
var G__30724 = cljs.core.count.call(null,c__4550__auto___30721);
var G__30725 = (0);
seq__30706_30710 = G__30722;
chunk__30707_30711 = G__30723;
count__30708_30712 = G__30724;
i__30709_30713 = G__30725;
continue;
} else {
var msg_30726 = cljs.core.first.call(null,seq__30706_30720__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30726);


var G__30727 = cljs.core.next.call(null,seq__30706_30720__$1);
var G__30728 = null;
var G__30729 = (0);
var G__30730 = (0);
seq__30706_30710 = G__30727;
chunk__30707_30711 = G__30728;
count__30708_30712 = G__30729;
i__30709_30713 = G__30730;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30731){
var map__30732 = p__30731;
var map__30732__$1 = (((((!((map__30732 == null))))?(((((map__30732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30732):map__30732);
var w = map__30732__$1;
var message = cljs.core.get.call(null,map__30732__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30734 = cljs.core.seq.call(null,plugins);
var chunk__30735 = null;
var count__30736 = (0);
var i__30737 = (0);
while(true){
if((i__30737 < count__30736)){
var vec__30744 = cljs.core._nth.call(null,chunk__30735,i__30737);
var k = cljs.core.nth.call(null,vec__30744,(0),null);
var plugin = cljs.core.nth.call(null,vec__30744,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30750 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30734,chunk__30735,count__30736,i__30737,pl_30750,vec__30744,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30750.call(null,msg_hist);
});})(seq__30734,chunk__30735,count__30736,i__30737,pl_30750,vec__30744,k,plugin))
);
} else {
}


var G__30751 = seq__30734;
var G__30752 = chunk__30735;
var G__30753 = count__30736;
var G__30754 = (i__30737 + (1));
seq__30734 = G__30751;
chunk__30735 = G__30752;
count__30736 = G__30753;
i__30737 = G__30754;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30734);
if(temp__5720__auto__){
var seq__30734__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30734__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30734__$1);
var G__30755 = cljs.core.chunk_rest.call(null,seq__30734__$1);
var G__30756 = c__4550__auto__;
var G__30757 = cljs.core.count.call(null,c__4550__auto__);
var G__30758 = (0);
seq__30734 = G__30755;
chunk__30735 = G__30756;
count__30736 = G__30757;
i__30737 = G__30758;
continue;
} else {
var vec__30747 = cljs.core.first.call(null,seq__30734__$1);
var k = cljs.core.nth.call(null,vec__30747,(0),null);
var plugin = cljs.core.nth.call(null,vec__30747,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30759 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30734,chunk__30735,count__30736,i__30737,pl_30759,vec__30747,k,plugin,seq__30734__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30759.call(null,msg_hist);
});})(seq__30734,chunk__30735,count__30736,i__30737,pl_30759,vec__30747,k,plugin,seq__30734__$1,temp__5720__auto__))
);
} else {
}


var G__30760 = cljs.core.next.call(null,seq__30734__$1);
var G__30761 = null;
var G__30762 = (0);
var G__30763 = (0);
seq__30734 = G__30760;
chunk__30735 = G__30761;
count__30736 = G__30762;
i__30737 = G__30763;
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
var G__30765 = arguments.length;
switch (G__30765) {
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

var seq__30766_30771 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30767_30772 = null;
var count__30768_30773 = (0);
var i__30769_30774 = (0);
while(true){
if((i__30769_30774 < count__30768_30773)){
var msg_30775 = cljs.core._nth.call(null,chunk__30767_30772,i__30769_30774);
figwheel.client.socket.handle_incoming_message.call(null,msg_30775);


var G__30776 = seq__30766_30771;
var G__30777 = chunk__30767_30772;
var G__30778 = count__30768_30773;
var G__30779 = (i__30769_30774 + (1));
seq__30766_30771 = G__30776;
chunk__30767_30772 = G__30777;
count__30768_30773 = G__30778;
i__30769_30774 = G__30779;
continue;
} else {
var temp__5720__auto___30780 = cljs.core.seq.call(null,seq__30766_30771);
if(temp__5720__auto___30780){
var seq__30766_30781__$1 = temp__5720__auto___30780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30766_30781__$1)){
var c__4550__auto___30782 = cljs.core.chunk_first.call(null,seq__30766_30781__$1);
var G__30783 = cljs.core.chunk_rest.call(null,seq__30766_30781__$1);
var G__30784 = c__4550__auto___30782;
var G__30785 = cljs.core.count.call(null,c__4550__auto___30782);
var G__30786 = (0);
seq__30766_30771 = G__30783;
chunk__30767_30772 = G__30784;
count__30768_30773 = G__30785;
i__30769_30774 = G__30786;
continue;
} else {
var msg_30787 = cljs.core.first.call(null,seq__30766_30781__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30787);


var G__30788 = cljs.core.next.call(null,seq__30766_30781__$1);
var G__30789 = null;
var G__30790 = (0);
var G__30791 = (0);
seq__30766_30771 = G__30788;
chunk__30767_30772 = G__30789;
count__30768_30773 = G__30790;
i__30769_30774 = G__30791;
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
var len__4730__auto___30796 = arguments.length;
var i__4731__auto___30797 = (0);
while(true){
if((i__4731__auto___30797 < len__4730__auto___30796)){
args__4736__auto__.push((arguments[i__4731__auto___30797]));

var G__30798 = (i__4731__auto___30797 + (1));
i__4731__auto___30797 = G__30798;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30793){
var map__30794 = p__30793;
var map__30794__$1 = (((((!((map__30794 == null))))?(((((map__30794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30794):map__30794);
var opts = map__30794__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30792){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30792));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30799){if((e30799 instanceof Error)){
var e = e30799;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30799;

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
return (function (p__30800){
var map__30801 = p__30800;
var map__30801__$1 = (((((!((map__30801 == null))))?(((((map__30801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30801):map__30801);
var msg_name = cljs.core.get.call(null,map__30801__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1566805872103
