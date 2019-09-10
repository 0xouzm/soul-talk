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
}catch (e37892){if((e37892 instanceof Error)){
var e = e37892;
return "Error: Unable to stringify";
} else {
throw e37892;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37895 = arguments.length;
switch (G__37895) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37893_SHARP_){
if(typeof p1__37893_SHARP_ === 'string'){
return p1__37893_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37893_SHARP_);
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
var len__4730__auto___37898 = arguments.length;
var i__4731__auto___37899 = (0);
while(true){
if((i__4731__auto___37899 < len__4730__auto___37898)){
args__4736__auto__.push((arguments[i__4731__auto___37899]));

var G__37900 = (i__4731__auto___37899 + (1));
i__4731__auto___37899 = G__37900;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37897){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37897));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37902 = arguments.length;
var i__4731__auto___37903 = (0);
while(true){
if((i__4731__auto___37903 < len__4730__auto___37902)){
args__4736__auto__.push((arguments[i__4731__auto___37903]));

var G__37904 = (i__4731__auto___37903 + (1));
i__4731__auto___37903 = G__37904;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37901){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37901));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37905){
var map__37906 = p__37905;
var map__37906__$1 = (((((!((map__37906 == null))))?(((((map__37906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37906):map__37906);
var message = cljs.core.get.call(null,map__37906__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37906__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27336__auto___37985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___37985,ch){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___37985,ch){
return (function (state_37957){
var state_val_37958 = (state_37957[(1)]);
if((state_val_37958 === (7))){
var inst_37953 = (state_37957[(2)]);
var state_37957__$1 = state_37957;
var statearr_37959_37986 = state_37957__$1;
(statearr_37959_37986[(2)] = inst_37953);

(statearr_37959_37986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (1))){
var state_37957__$1 = state_37957;
var statearr_37960_37987 = state_37957__$1;
(statearr_37960_37987[(2)] = null);

(statearr_37960_37987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (4))){
var inst_37910 = (state_37957[(7)]);
var inst_37910__$1 = (state_37957[(2)]);
var state_37957__$1 = (function (){var statearr_37961 = state_37957;
(statearr_37961[(7)] = inst_37910__$1);

return statearr_37961;
})();
if(cljs.core.truth_(inst_37910__$1)){
var statearr_37962_37988 = state_37957__$1;
(statearr_37962_37988[(1)] = (5));

} else {
var statearr_37963_37989 = state_37957__$1;
(statearr_37963_37989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (15))){
var inst_37917 = (state_37957[(8)]);
var inst_37932 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37917);
var inst_37933 = cljs.core.first.call(null,inst_37932);
var inst_37934 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37933);
var inst_37935 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37934)].join('');
var inst_37936 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37935);
var state_37957__$1 = state_37957;
var statearr_37964_37990 = state_37957__$1;
(statearr_37964_37990[(2)] = inst_37936);

(statearr_37964_37990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (13))){
var inst_37941 = (state_37957[(2)]);
var state_37957__$1 = state_37957;
var statearr_37965_37991 = state_37957__$1;
(statearr_37965_37991[(2)] = inst_37941);

(statearr_37965_37991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (6))){
var state_37957__$1 = state_37957;
var statearr_37966_37992 = state_37957__$1;
(statearr_37966_37992[(2)] = null);

(statearr_37966_37992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (17))){
var inst_37939 = (state_37957[(2)]);
var state_37957__$1 = state_37957;
var statearr_37967_37993 = state_37957__$1;
(statearr_37967_37993[(2)] = inst_37939);

(statearr_37967_37993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (3))){
var inst_37955 = (state_37957[(2)]);
var state_37957__$1 = state_37957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37957__$1,inst_37955);
} else {
if((state_val_37958 === (12))){
var inst_37916 = (state_37957[(9)]);
var inst_37930 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37916,opts);
var state_37957__$1 = state_37957;
if(inst_37930){
var statearr_37968_37994 = state_37957__$1;
(statearr_37968_37994[(1)] = (15));

} else {
var statearr_37969_37995 = state_37957__$1;
(statearr_37969_37995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (2))){
var state_37957__$1 = state_37957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37957__$1,(4),ch);
} else {
if((state_val_37958 === (11))){
var inst_37917 = (state_37957[(8)]);
var inst_37922 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37923 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37917);
var inst_37924 = cljs.core.async.timeout.call(null,(1000));
var inst_37925 = [inst_37923,inst_37924];
var inst_37926 = (new cljs.core.PersistentVector(null,2,(5),inst_37922,inst_37925,null));
var state_37957__$1 = state_37957;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37957__$1,(14),inst_37926);
} else {
if((state_val_37958 === (9))){
var inst_37917 = (state_37957[(8)]);
var inst_37943 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37944 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37917);
var inst_37945 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37944);
var inst_37946 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37945)].join('');
var inst_37947 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37946);
var state_37957__$1 = (function (){var statearr_37970 = state_37957;
(statearr_37970[(10)] = inst_37943);

return statearr_37970;
})();
var statearr_37971_37996 = state_37957__$1;
(statearr_37971_37996[(2)] = inst_37947);

(statearr_37971_37996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (5))){
var inst_37910 = (state_37957[(7)]);
var inst_37912 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37913 = (new cljs.core.PersistentArrayMap(null,2,inst_37912,null));
var inst_37914 = (new cljs.core.PersistentHashSet(null,inst_37913,null));
var inst_37915 = figwheel.client.focus_msgs.call(null,inst_37914,inst_37910);
var inst_37916 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37915);
var inst_37917 = cljs.core.first.call(null,inst_37915);
var inst_37918 = figwheel.client.autoload_QMARK_.call(null);
var state_37957__$1 = (function (){var statearr_37972 = state_37957;
(statearr_37972[(9)] = inst_37916);

(statearr_37972[(8)] = inst_37917);

return statearr_37972;
})();
if(cljs.core.truth_(inst_37918)){
var statearr_37973_37997 = state_37957__$1;
(statearr_37973_37997[(1)] = (8));

} else {
var statearr_37974_37998 = state_37957__$1;
(statearr_37974_37998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (14))){
var inst_37928 = (state_37957[(2)]);
var state_37957__$1 = state_37957;
var statearr_37975_37999 = state_37957__$1;
(statearr_37975_37999[(2)] = inst_37928);

(statearr_37975_37999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (16))){
var state_37957__$1 = state_37957;
var statearr_37976_38000 = state_37957__$1;
(statearr_37976_38000[(2)] = null);

(statearr_37976_38000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (10))){
var inst_37949 = (state_37957[(2)]);
var state_37957__$1 = (function (){var statearr_37977 = state_37957;
(statearr_37977[(11)] = inst_37949);

return statearr_37977;
})();
var statearr_37978_38001 = state_37957__$1;
(statearr_37978_38001[(2)] = null);

(statearr_37978_38001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (8))){
var inst_37916 = (state_37957[(9)]);
var inst_37920 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37916,opts);
var state_37957__$1 = state_37957;
if(cljs.core.truth_(inst_37920)){
var statearr_37979_38002 = state_37957__$1;
(statearr_37979_38002[(1)] = (11));

} else {
var statearr_37980_38003 = state_37957__$1;
(statearr_37980_38003[(1)] = (12));

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
});})(c__27336__auto___37985,ch))
;
return ((function (switch__27169__auto__,c__27336__auto___37985,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27170__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27170__auto____0 = (function (){
var statearr_37981 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37981[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27170__auto__);

(statearr_37981[(1)] = (1));

return statearr_37981;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27170__auto____1 = (function (state_37957){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_37957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e37982){if((e37982 instanceof Object)){
var ex__27173__auto__ = e37982;
var statearr_37983_38004 = state_37957;
(statearr_37983_38004[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38005 = state_37957;
state_37957 = G__38005;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27170__auto__ = function(state_37957){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27170__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27170__auto____1.call(this,state_37957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27170__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27170__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___37985,ch))
})();
var state__27338__auto__ = (function (){var statearr_37984 = f__27337__auto__.call(null);
(statearr_37984[(6)] = c__27336__auto___37985);

return statearr_37984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___37985,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38006_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38006_SHARP_));
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
var base_path_38012 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38012){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38008 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38009 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38010 = true;
var _STAR_print_fn_STAR__temp_val__38011 = ((function (_STAR_print_newline_STAR__orig_val__38008,_STAR_print_fn_STAR__orig_val__38009,_STAR_print_newline_STAR__temp_val__38010,sb,base_path_38012){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__38008,_STAR_print_fn_STAR__orig_val__38009,_STAR_print_newline_STAR__temp_val__38010,sb,base_path_38012))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38010;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38011;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38009;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38008;
}}catch (e38007){if((e38007 instanceof Error)){
var e = e38007;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38012], null));
} else {
var e = e38007;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_38012))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38013){
var map__38014 = p__38013;
var map__38014__$1 = (((((!((map__38014 == null))))?(((((map__38014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38014):map__38014);
var opts = map__38014__$1;
var build_id = cljs.core.get.call(null,map__38014__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38014,map__38014__$1,opts,build_id){
return (function (p__38016){
var vec__38017 = p__38016;
var seq__38018 = cljs.core.seq.call(null,vec__38017);
var first__38019 = cljs.core.first.call(null,seq__38018);
var seq__38018__$1 = cljs.core.next.call(null,seq__38018);
var map__38020 = first__38019;
var map__38020__$1 = (((((!((map__38020 == null))))?(((((map__38020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38020):map__38020);
var msg = map__38020__$1;
var msg_name = cljs.core.get.call(null,map__38020__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38018__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38017,seq__38018,first__38019,seq__38018__$1,map__38020,map__38020__$1,msg,msg_name,_,map__38014,map__38014__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38017,seq__38018,first__38019,seq__38018__$1,map__38020,map__38020__$1,msg,msg_name,_,map__38014,map__38014__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38014,map__38014__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38022){
var vec__38023 = p__38022;
var seq__38024 = cljs.core.seq.call(null,vec__38023);
var first__38025 = cljs.core.first.call(null,seq__38024);
var seq__38024__$1 = cljs.core.next.call(null,seq__38024);
var map__38026 = first__38025;
var map__38026__$1 = (((((!((map__38026 == null))))?(((((map__38026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38026):map__38026);
var msg = map__38026__$1;
var msg_name = cljs.core.get.call(null,map__38026__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38024__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38028){
var map__38029 = p__38028;
var map__38029__$1 = (((((!((map__38029 == null))))?(((((map__38029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38029):map__38029);
var on_compile_warning = cljs.core.get.call(null,map__38029__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38029__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38029,map__38029__$1,on_compile_warning,on_compile_fail){
return (function (p__38031){
var vec__38032 = p__38031;
var seq__38033 = cljs.core.seq.call(null,vec__38032);
var first__38034 = cljs.core.first.call(null,seq__38033);
var seq__38033__$1 = cljs.core.next.call(null,seq__38033);
var map__38035 = first__38034;
var map__38035__$1 = (((((!((map__38035 == null))))?(((((map__38035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38035):map__38035);
var msg = map__38035__$1;
var msg_name = cljs.core.get.call(null,map__38035__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38033__$1;
var pred__38037 = cljs.core._EQ_;
var expr__38038 = msg_name;
if(cljs.core.truth_(pred__38037.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38038))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38037.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38038))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38029,map__38029__$1,on_compile_warning,on_compile_fail))
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
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto__,msg_hist,msg_names,msg){
return (function (state_38127){
var state_val_38128 = (state_38127[(1)]);
if((state_val_38128 === (7))){
var inst_38047 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
if(cljs.core.truth_(inst_38047)){
var statearr_38129_38176 = state_38127__$1;
(statearr_38129_38176[(1)] = (8));

} else {
var statearr_38130_38177 = state_38127__$1;
(statearr_38130_38177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (20))){
var inst_38121 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38131_38178 = state_38127__$1;
(statearr_38131_38178[(2)] = inst_38121);

(statearr_38131_38178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (27))){
var inst_38117 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38132_38179 = state_38127__$1;
(statearr_38132_38179[(2)] = inst_38117);

(statearr_38132_38179[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (1))){
var inst_38040 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38127__$1 = state_38127;
if(cljs.core.truth_(inst_38040)){
var statearr_38133_38180 = state_38127__$1;
(statearr_38133_38180[(1)] = (2));

} else {
var statearr_38134_38181 = state_38127__$1;
(statearr_38134_38181[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (24))){
var inst_38119 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38135_38182 = state_38127__$1;
(statearr_38135_38182[(2)] = inst_38119);

(statearr_38135_38182[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (4))){
var inst_38125 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38127__$1,inst_38125);
} else {
if((state_val_38128 === (15))){
var inst_38123 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38136_38183 = state_38127__$1;
(statearr_38136_38183[(2)] = inst_38123);

(statearr_38136_38183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (21))){
var inst_38076 = (state_38127[(2)]);
var inst_38077 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38078 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38077);
var state_38127__$1 = (function (){var statearr_38137 = state_38127;
(statearr_38137[(7)] = inst_38076);

return statearr_38137;
})();
var statearr_38138_38184 = state_38127__$1;
(statearr_38138_38184[(2)] = inst_38078);

(statearr_38138_38184[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (31))){
var inst_38106 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38127__$1 = state_38127;
if(inst_38106){
var statearr_38139_38185 = state_38127__$1;
(statearr_38139_38185[(1)] = (34));

} else {
var statearr_38140_38186 = state_38127__$1;
(statearr_38140_38186[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (32))){
var inst_38115 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38141_38187 = state_38127__$1;
(statearr_38141_38187[(2)] = inst_38115);

(statearr_38141_38187[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (33))){
var inst_38102 = (state_38127[(2)]);
var inst_38103 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38104 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38103);
var state_38127__$1 = (function (){var statearr_38142 = state_38127;
(statearr_38142[(8)] = inst_38102);

return statearr_38142;
})();
var statearr_38143_38188 = state_38127__$1;
(statearr_38143_38188[(2)] = inst_38104);

(statearr_38143_38188[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (13))){
var inst_38061 = figwheel.client.heads_up.clear.call(null);
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38127__$1,(16),inst_38061);
} else {
if((state_val_38128 === (22))){
var inst_38082 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38083 = figwheel.client.heads_up.append_warning_message.call(null,inst_38082);
var state_38127__$1 = state_38127;
var statearr_38144_38189 = state_38127__$1;
(statearr_38144_38189[(2)] = inst_38083);

(statearr_38144_38189[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (36))){
var inst_38113 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38145_38190 = state_38127__$1;
(statearr_38145_38190[(2)] = inst_38113);

(statearr_38145_38190[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (29))){
var inst_38093 = (state_38127[(2)]);
var inst_38094 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38095 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38094);
var state_38127__$1 = (function (){var statearr_38146 = state_38127;
(statearr_38146[(9)] = inst_38093);

return statearr_38146;
})();
var statearr_38147_38191 = state_38127__$1;
(statearr_38147_38191[(2)] = inst_38095);

(statearr_38147_38191[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (6))){
var inst_38042 = (state_38127[(10)]);
var state_38127__$1 = state_38127;
var statearr_38148_38192 = state_38127__$1;
(statearr_38148_38192[(2)] = inst_38042);

(statearr_38148_38192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (28))){
var inst_38089 = (state_38127[(2)]);
var inst_38090 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38091 = figwheel.client.heads_up.display_warning.call(null,inst_38090);
var state_38127__$1 = (function (){var statearr_38149 = state_38127;
(statearr_38149[(11)] = inst_38089);

return statearr_38149;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38127__$1,(29),inst_38091);
} else {
if((state_val_38128 === (25))){
var inst_38087 = figwheel.client.heads_up.clear.call(null);
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38127__$1,(28),inst_38087);
} else {
if((state_val_38128 === (34))){
var inst_38108 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38127__$1,(37),inst_38108);
} else {
if((state_val_38128 === (17))){
var inst_38067 = (state_38127[(2)]);
var inst_38068 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38069 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38068);
var state_38127__$1 = (function (){var statearr_38150 = state_38127;
(statearr_38150[(12)] = inst_38067);

return statearr_38150;
})();
var statearr_38151_38193 = state_38127__$1;
(statearr_38151_38193[(2)] = inst_38069);

(statearr_38151_38193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (3))){
var inst_38059 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38127__$1 = state_38127;
if(inst_38059){
var statearr_38152_38194 = state_38127__$1;
(statearr_38152_38194[(1)] = (13));

} else {
var statearr_38153_38195 = state_38127__$1;
(statearr_38153_38195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (12))){
var inst_38055 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38154_38196 = state_38127__$1;
(statearr_38154_38196[(2)] = inst_38055);

(statearr_38154_38196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (2))){
var inst_38042 = (state_38127[(10)]);
var inst_38042__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38127__$1 = (function (){var statearr_38155 = state_38127;
(statearr_38155[(10)] = inst_38042__$1);

return statearr_38155;
})();
if(cljs.core.truth_(inst_38042__$1)){
var statearr_38156_38197 = state_38127__$1;
(statearr_38156_38197[(1)] = (5));

} else {
var statearr_38157_38198 = state_38127__$1;
(statearr_38157_38198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (23))){
var inst_38085 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38127__$1 = state_38127;
if(inst_38085){
var statearr_38158_38199 = state_38127__$1;
(statearr_38158_38199[(1)] = (25));

} else {
var statearr_38159_38200 = state_38127__$1;
(statearr_38159_38200[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (35))){
var state_38127__$1 = state_38127;
var statearr_38160_38201 = state_38127__$1;
(statearr_38160_38201[(2)] = null);

(statearr_38160_38201[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (19))){
var inst_38080 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38127__$1 = state_38127;
if(inst_38080){
var statearr_38161_38202 = state_38127__$1;
(statearr_38161_38202[(1)] = (22));

} else {
var statearr_38162_38203 = state_38127__$1;
(statearr_38162_38203[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (11))){
var inst_38051 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38163_38204 = state_38127__$1;
(statearr_38163_38204[(2)] = inst_38051);

(statearr_38163_38204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (9))){
var inst_38053 = figwheel.client.heads_up.clear.call(null);
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38127__$1,(12),inst_38053);
} else {
if((state_val_38128 === (5))){
var inst_38044 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38127__$1 = state_38127;
var statearr_38164_38205 = state_38127__$1;
(statearr_38164_38205[(2)] = inst_38044);

(statearr_38164_38205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (14))){
var inst_38071 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38127__$1 = state_38127;
if(inst_38071){
var statearr_38165_38206 = state_38127__$1;
(statearr_38165_38206[(1)] = (18));

} else {
var statearr_38166_38207 = state_38127__$1;
(statearr_38166_38207[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (26))){
var inst_38097 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38127__$1 = state_38127;
if(inst_38097){
var statearr_38167_38208 = state_38127__$1;
(statearr_38167_38208[(1)] = (30));

} else {
var statearr_38168_38209 = state_38127__$1;
(statearr_38168_38209[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (16))){
var inst_38063 = (state_38127[(2)]);
var inst_38064 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38065 = figwheel.client.heads_up.display_exception.call(null,inst_38064);
var state_38127__$1 = (function (){var statearr_38169 = state_38127;
(statearr_38169[(13)] = inst_38063);

return statearr_38169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38127__$1,(17),inst_38065);
} else {
if((state_val_38128 === (30))){
var inst_38099 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38100 = figwheel.client.heads_up.display_warning.call(null,inst_38099);
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38127__$1,(33),inst_38100);
} else {
if((state_val_38128 === (10))){
var inst_38057 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38170_38210 = state_38127__$1;
(statearr_38170_38210[(2)] = inst_38057);

(statearr_38170_38210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (18))){
var inst_38073 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38074 = figwheel.client.heads_up.display_exception.call(null,inst_38073);
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38127__$1,(21),inst_38074);
} else {
if((state_val_38128 === (37))){
var inst_38110 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38171_38211 = state_38127__$1;
(statearr_38171_38211[(2)] = inst_38110);

(statearr_38171_38211[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (8))){
var inst_38049 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38127__$1,(11),inst_38049);
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
});})(c__27336__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27169__auto__,c__27336__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27170__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27170__auto____0 = (function (){
var statearr_38172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38172[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27170__auto__);

(statearr_38172[(1)] = (1));

return statearr_38172;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27170__auto____1 = (function (state_38127){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_38127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e38173){if((e38173 instanceof Object)){
var ex__27173__auto__ = e38173;
var statearr_38174_38212 = state_38127;
(statearr_38174_38212[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38213 = state_38127;
state_38127 = G__38213;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27170__auto__ = function(state_38127){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27170__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27170__auto____1.call(this,state_38127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27170__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27170__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto__,msg_hist,msg_names,msg))
})();
var state__27338__auto__ = (function (){var statearr_38175 = f__27337__auto__.call(null);
(statearr_38175[(6)] = c__27336__auto__);

return statearr_38175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__,msg_hist,msg_names,msg))
);

return c__27336__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27336__auto___38242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___38242,ch){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto___38242,ch){
return (function (state_38228){
var state_val_38229 = (state_38228[(1)]);
if((state_val_38229 === (1))){
var state_38228__$1 = state_38228;
var statearr_38230_38243 = state_38228__$1;
(statearr_38230_38243[(2)] = null);

(statearr_38230_38243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38229 === (2))){
var state_38228__$1 = state_38228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38228__$1,(4),ch);
} else {
if((state_val_38229 === (3))){
var inst_38226 = (state_38228[(2)]);
var state_38228__$1 = state_38228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38228__$1,inst_38226);
} else {
if((state_val_38229 === (4))){
var inst_38216 = (state_38228[(7)]);
var inst_38216__$1 = (state_38228[(2)]);
var state_38228__$1 = (function (){var statearr_38231 = state_38228;
(statearr_38231[(7)] = inst_38216__$1);

return statearr_38231;
})();
if(cljs.core.truth_(inst_38216__$1)){
var statearr_38232_38244 = state_38228__$1;
(statearr_38232_38244[(1)] = (5));

} else {
var statearr_38233_38245 = state_38228__$1;
(statearr_38233_38245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38229 === (5))){
var inst_38216 = (state_38228[(7)]);
var inst_38218 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38216);
var state_38228__$1 = state_38228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38228__$1,(8),inst_38218);
} else {
if((state_val_38229 === (6))){
var state_38228__$1 = state_38228;
var statearr_38234_38246 = state_38228__$1;
(statearr_38234_38246[(2)] = null);

(statearr_38234_38246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38229 === (7))){
var inst_38224 = (state_38228[(2)]);
var state_38228__$1 = state_38228;
var statearr_38235_38247 = state_38228__$1;
(statearr_38235_38247[(2)] = inst_38224);

(statearr_38235_38247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38229 === (8))){
var inst_38220 = (state_38228[(2)]);
var state_38228__$1 = (function (){var statearr_38236 = state_38228;
(statearr_38236[(8)] = inst_38220);

return statearr_38236;
})();
var statearr_38237_38248 = state_38228__$1;
(statearr_38237_38248[(2)] = null);

(statearr_38237_38248[(1)] = (2));


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
});})(c__27336__auto___38242,ch))
;
return ((function (switch__27169__auto__,c__27336__auto___38242,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27170__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27170__auto____0 = (function (){
var statearr_38238 = [null,null,null,null,null,null,null,null,null];
(statearr_38238[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27170__auto__);

(statearr_38238[(1)] = (1));

return statearr_38238;
});
var figwheel$client$heads_up_plugin_$_state_machine__27170__auto____1 = (function (state_38228){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_38228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e38239){if((e38239 instanceof Object)){
var ex__27173__auto__ = e38239;
var statearr_38240_38249 = state_38228;
(statearr_38240_38249[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38250 = state_38228;
state_38228 = G__38250;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27170__auto__ = function(state_38228){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27170__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27170__auto____1.call(this,state_38228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27170__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27170__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto___38242,ch))
})();
var state__27338__auto__ = (function (){var statearr_38241 = f__27337__auto__.call(null);
(statearr_38241[(6)] = c__27336__auto___38242);

return statearr_38241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___38242,ch))
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
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto__){
return (function (state_38256){
var state_val_38257 = (state_38256[(1)]);
if((state_val_38257 === (1))){
var inst_38251 = cljs.core.async.timeout.call(null,(3000));
var state_38256__$1 = state_38256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38256__$1,(2),inst_38251);
} else {
if((state_val_38257 === (2))){
var inst_38253 = (state_38256[(2)]);
var inst_38254 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38256__$1 = (function (){var statearr_38258 = state_38256;
(statearr_38258[(7)] = inst_38253);

return statearr_38258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38256__$1,inst_38254);
} else {
return null;
}
}
});})(c__27336__auto__))
;
return ((function (switch__27169__auto__,c__27336__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27170__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27170__auto____0 = (function (){
var statearr_38259 = [null,null,null,null,null,null,null,null];
(statearr_38259[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27170__auto__);

(statearr_38259[(1)] = (1));

return statearr_38259;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27170__auto____1 = (function (state_38256){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_38256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e38260){if((e38260 instanceof Object)){
var ex__27173__auto__ = e38260;
var statearr_38261_38263 = state_38256;
(statearr_38261_38263[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38264 = state_38256;
state_38256 = G__38264;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27170__auto__ = function(state_38256){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27170__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27170__auto____1.call(this,state_38256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27170__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27170__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto__))
})();
var state__27338__auto__ = (function (){var statearr_38262 = f__27337__auto__.call(null);
(statearr_38262[(6)] = c__27336__auto__);

return statearr_38262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__))
);

return c__27336__auto__;
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
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__27337__auto__ = (function (){var switch__27169__auto__ = ((function (c__27336__auto__,figwheel_version,temp__5720__auto__){
return (function (state_38271){
var state_val_38272 = (state_38271[(1)]);
if((state_val_38272 === (1))){
var inst_38265 = cljs.core.async.timeout.call(null,(2000));
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38271__$1,(2),inst_38265);
} else {
if((state_val_38272 === (2))){
var inst_38267 = (state_38271[(2)]);
var inst_38268 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38269 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38268);
var state_38271__$1 = (function (){var statearr_38273 = state_38271;
(statearr_38273[(7)] = inst_38267);

return statearr_38273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38271__$1,inst_38269);
} else {
return null;
}
}
});})(c__27336__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__27169__auto__,c__27336__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27170__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27170__auto____0 = (function (){
var statearr_38274 = [null,null,null,null,null,null,null,null];
(statearr_38274[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27170__auto__);

(statearr_38274[(1)] = (1));

return statearr_38274;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27170__auto____1 = (function (state_38271){
while(true){
var ret_value__27171__auto__ = (function (){try{while(true){
var result__27172__auto__ = switch__27169__auto__.call(null,state_38271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27172__auto__;
}
break;
}
}catch (e38275){if((e38275 instanceof Object)){
var ex__27173__auto__ = e38275;
var statearr_38276_38278 = state_38271;
(statearr_38276_38278[(5)] = ex__27173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38279 = state_38271;
state_38271 = G__38279;
continue;
} else {
return ret_value__27171__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27170__auto__ = function(state_38271){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27170__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27170__auto____1.call(this,state_38271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27170__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27170__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27170__auto__;
})()
;})(switch__27169__auto__,c__27336__auto__,figwheel_version,temp__5720__auto__))
})();
var state__27338__auto__ = (function (){var statearr_38277 = f__27337__auto__.call(null);
(statearr_38277[(6)] = c__27336__auto__);

return statearr_38277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__,figwheel_version,temp__5720__auto__))
);

return c__27336__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38280){
var map__38281 = p__38280;
var map__38281__$1 = (((((!((map__38281 == null))))?(((((map__38281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38281):map__38281);
var file = cljs.core.get.call(null,map__38281__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38281__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38281__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38283 = "";
var G__38283__$1 = (cljs.core.truth_(file)?[G__38283,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38283);
var G__38283__$2 = (cljs.core.truth_(line)?[G__38283__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38283__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__38283__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38283__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38284){
var map__38285 = p__38284;
var map__38285__$1 = (((((!((map__38285 == null))))?(((((map__38285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38285):map__38285);
var ed = map__38285__$1;
var formatted_exception = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38287_38291 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38288_38292 = null;
var count__38289_38293 = (0);
var i__38290_38294 = (0);
while(true){
if((i__38290_38294 < count__38289_38293)){
var msg_38295 = cljs.core._nth.call(null,chunk__38288_38292,i__38290_38294);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38295);


var G__38296 = seq__38287_38291;
var G__38297 = chunk__38288_38292;
var G__38298 = count__38289_38293;
var G__38299 = (i__38290_38294 + (1));
seq__38287_38291 = G__38296;
chunk__38288_38292 = G__38297;
count__38289_38293 = G__38298;
i__38290_38294 = G__38299;
continue;
} else {
var temp__5720__auto___38300 = cljs.core.seq.call(null,seq__38287_38291);
if(temp__5720__auto___38300){
var seq__38287_38301__$1 = temp__5720__auto___38300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38287_38301__$1)){
var c__4550__auto___38302 = cljs.core.chunk_first.call(null,seq__38287_38301__$1);
var G__38303 = cljs.core.chunk_rest.call(null,seq__38287_38301__$1);
var G__38304 = c__4550__auto___38302;
var G__38305 = cljs.core.count.call(null,c__4550__auto___38302);
var G__38306 = (0);
seq__38287_38291 = G__38303;
chunk__38288_38292 = G__38304;
count__38289_38293 = G__38305;
i__38290_38294 = G__38306;
continue;
} else {
var msg_38307 = cljs.core.first.call(null,seq__38287_38301__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38307);


var G__38308 = cljs.core.next.call(null,seq__38287_38301__$1);
var G__38309 = null;
var G__38310 = (0);
var G__38311 = (0);
seq__38287_38291 = G__38308;
chunk__38288_38292 = G__38309;
count__38289_38293 = G__38310;
i__38290_38294 = G__38311;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38312){
var map__38313 = p__38312;
var map__38313__$1 = (((((!((map__38313 == null))))?(((((map__38313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38313):map__38313);
var w = map__38313__$1;
var message = cljs.core.get.call(null,map__38313__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38315 = cljs.core.seq.call(null,plugins);
var chunk__38316 = null;
var count__38317 = (0);
var i__38318 = (0);
while(true){
if((i__38318 < count__38317)){
var vec__38325 = cljs.core._nth.call(null,chunk__38316,i__38318);
var k = cljs.core.nth.call(null,vec__38325,(0),null);
var plugin = cljs.core.nth.call(null,vec__38325,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38331 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38315,chunk__38316,count__38317,i__38318,pl_38331,vec__38325,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38331.call(null,msg_hist);
});})(seq__38315,chunk__38316,count__38317,i__38318,pl_38331,vec__38325,k,plugin))
);
} else {
}


var G__38332 = seq__38315;
var G__38333 = chunk__38316;
var G__38334 = count__38317;
var G__38335 = (i__38318 + (1));
seq__38315 = G__38332;
chunk__38316 = G__38333;
count__38317 = G__38334;
i__38318 = G__38335;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38315);
if(temp__5720__auto__){
var seq__38315__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38315__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__38315__$1);
var G__38336 = cljs.core.chunk_rest.call(null,seq__38315__$1);
var G__38337 = c__4550__auto__;
var G__38338 = cljs.core.count.call(null,c__4550__auto__);
var G__38339 = (0);
seq__38315 = G__38336;
chunk__38316 = G__38337;
count__38317 = G__38338;
i__38318 = G__38339;
continue;
} else {
var vec__38328 = cljs.core.first.call(null,seq__38315__$1);
var k = cljs.core.nth.call(null,vec__38328,(0),null);
var plugin = cljs.core.nth.call(null,vec__38328,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38340 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38315,chunk__38316,count__38317,i__38318,pl_38340,vec__38328,k,plugin,seq__38315__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38340.call(null,msg_hist);
});})(seq__38315,chunk__38316,count__38317,i__38318,pl_38340,vec__38328,k,plugin,seq__38315__$1,temp__5720__auto__))
);
} else {
}


var G__38341 = cljs.core.next.call(null,seq__38315__$1);
var G__38342 = null;
var G__38343 = (0);
var G__38344 = (0);
seq__38315 = G__38341;
chunk__38316 = G__38342;
count__38317 = G__38343;
i__38318 = G__38344;
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
var G__38346 = arguments.length;
switch (G__38346) {
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

var seq__38347_38352 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38348_38353 = null;
var count__38349_38354 = (0);
var i__38350_38355 = (0);
while(true){
if((i__38350_38355 < count__38349_38354)){
var msg_38356 = cljs.core._nth.call(null,chunk__38348_38353,i__38350_38355);
figwheel.client.socket.handle_incoming_message.call(null,msg_38356);


var G__38357 = seq__38347_38352;
var G__38358 = chunk__38348_38353;
var G__38359 = count__38349_38354;
var G__38360 = (i__38350_38355 + (1));
seq__38347_38352 = G__38357;
chunk__38348_38353 = G__38358;
count__38349_38354 = G__38359;
i__38350_38355 = G__38360;
continue;
} else {
var temp__5720__auto___38361 = cljs.core.seq.call(null,seq__38347_38352);
if(temp__5720__auto___38361){
var seq__38347_38362__$1 = temp__5720__auto___38361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38347_38362__$1)){
var c__4550__auto___38363 = cljs.core.chunk_first.call(null,seq__38347_38362__$1);
var G__38364 = cljs.core.chunk_rest.call(null,seq__38347_38362__$1);
var G__38365 = c__4550__auto___38363;
var G__38366 = cljs.core.count.call(null,c__4550__auto___38363);
var G__38367 = (0);
seq__38347_38352 = G__38364;
chunk__38348_38353 = G__38365;
count__38349_38354 = G__38366;
i__38350_38355 = G__38367;
continue;
} else {
var msg_38368 = cljs.core.first.call(null,seq__38347_38362__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38368);


var G__38369 = cljs.core.next.call(null,seq__38347_38362__$1);
var G__38370 = null;
var G__38371 = (0);
var G__38372 = (0);
seq__38347_38352 = G__38369;
chunk__38348_38353 = G__38370;
count__38349_38354 = G__38371;
i__38350_38355 = G__38372;
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
var len__4730__auto___38377 = arguments.length;
var i__4731__auto___38378 = (0);
while(true){
if((i__4731__auto___38378 < len__4730__auto___38377)){
args__4736__auto__.push((arguments[i__4731__auto___38378]));

var G__38379 = (i__4731__auto___38378 + (1));
i__4731__auto___38378 = G__38379;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38374){
var map__38375 = p__38374;
var map__38375__$1 = (((((!((map__38375 == null))))?(((((map__38375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38375):map__38375);
var opts = map__38375__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38373){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38373));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38380){if((e38380 instanceof Error)){
var e = e38380;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38380;

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
return (function (p__38381){
var map__38382 = p__38381;
var map__38382__$1 = (((((!((map__38382 == null))))?(((((map__38382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38382):map__38382);
var msg_name = cljs.core.get.call(null,map__38382__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1568097131417
