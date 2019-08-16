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
}catch (e28851){if((e28851 instanceof Error)){
var e = e28851;
return "Error: Unable to stringify";
} else {
throw e28851;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__28854 = arguments.length;
switch (G__28854) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__28852_SHARP_){
if(typeof p1__28852_SHARP_ === 'string'){
return p1__28852_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__28852_SHARP_);
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
var len__4730__auto___28857 = arguments.length;
var i__4731__auto___28858 = (0);
while(true){
if((i__4731__auto___28858 < len__4730__auto___28857)){
args__4736__auto__.push((arguments[i__4731__auto___28858]));

var G__28859 = (i__4731__auto___28858 + (1));
i__4731__auto___28858 = G__28859;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq28856){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28856));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28861 = arguments.length;
var i__4731__auto___28862 = (0);
while(true){
if((i__4731__auto___28862 < len__4730__auto___28861)){
args__4736__auto__.push((arguments[i__4731__auto___28862]));

var G__28863 = (i__4731__auto___28862 + (1));
i__4731__auto___28862 = G__28863;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq28860){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28860));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28864){
var map__28865 = p__28864;
var map__28865__$1 = (((((!((map__28865 == null))))?(((((map__28865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28865):map__28865);
var message = cljs.core.get.call(null,map__28865__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28865__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__23523__auto___28944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___28944,ch){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___28944,ch){
return (function (state_28916){
var state_val_28917 = (state_28916[(1)]);
if((state_val_28917 === (7))){
var inst_28912 = (state_28916[(2)]);
var state_28916__$1 = state_28916;
var statearr_28918_28945 = state_28916__$1;
(statearr_28918_28945[(2)] = inst_28912);

(statearr_28918_28945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (1))){
var state_28916__$1 = state_28916;
var statearr_28919_28946 = state_28916__$1;
(statearr_28919_28946[(2)] = null);

(statearr_28919_28946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (4))){
var inst_28869 = (state_28916[(7)]);
var inst_28869__$1 = (state_28916[(2)]);
var state_28916__$1 = (function (){var statearr_28920 = state_28916;
(statearr_28920[(7)] = inst_28869__$1);

return statearr_28920;
})();
if(cljs.core.truth_(inst_28869__$1)){
var statearr_28921_28947 = state_28916__$1;
(statearr_28921_28947[(1)] = (5));

} else {
var statearr_28922_28948 = state_28916__$1;
(statearr_28922_28948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (15))){
var inst_28876 = (state_28916[(8)]);
var inst_28891 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28876);
var inst_28892 = cljs.core.first.call(null,inst_28891);
var inst_28893 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28892);
var inst_28894 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28893)].join('');
var inst_28895 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28894);
var state_28916__$1 = state_28916;
var statearr_28923_28949 = state_28916__$1;
(statearr_28923_28949[(2)] = inst_28895);

(statearr_28923_28949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (13))){
var inst_28900 = (state_28916[(2)]);
var state_28916__$1 = state_28916;
var statearr_28924_28950 = state_28916__$1;
(statearr_28924_28950[(2)] = inst_28900);

(statearr_28924_28950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (6))){
var state_28916__$1 = state_28916;
var statearr_28925_28951 = state_28916__$1;
(statearr_28925_28951[(2)] = null);

(statearr_28925_28951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (17))){
var inst_28898 = (state_28916[(2)]);
var state_28916__$1 = state_28916;
var statearr_28926_28952 = state_28916__$1;
(statearr_28926_28952[(2)] = inst_28898);

(statearr_28926_28952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (3))){
var inst_28914 = (state_28916[(2)]);
var state_28916__$1 = state_28916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28916__$1,inst_28914);
} else {
if((state_val_28917 === (12))){
var inst_28875 = (state_28916[(9)]);
var inst_28889 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28875,opts);
var state_28916__$1 = state_28916;
if(inst_28889){
var statearr_28927_28953 = state_28916__$1;
(statearr_28927_28953[(1)] = (15));

} else {
var statearr_28928_28954 = state_28916__$1;
(statearr_28928_28954[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (2))){
var state_28916__$1 = state_28916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28916__$1,(4),ch);
} else {
if((state_val_28917 === (11))){
var inst_28876 = (state_28916[(8)]);
var inst_28881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28882 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28876);
var inst_28883 = cljs.core.async.timeout.call(null,(1000));
var inst_28884 = [inst_28882,inst_28883];
var inst_28885 = (new cljs.core.PersistentVector(null,2,(5),inst_28881,inst_28884,null));
var state_28916__$1 = state_28916;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28916__$1,(14),inst_28885);
} else {
if((state_val_28917 === (9))){
var inst_28876 = (state_28916[(8)]);
var inst_28902 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28903 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28876);
var inst_28904 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28903);
var inst_28905 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28904)].join('');
var inst_28906 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28905);
var state_28916__$1 = (function (){var statearr_28929 = state_28916;
(statearr_28929[(10)] = inst_28902);

return statearr_28929;
})();
var statearr_28930_28955 = state_28916__$1;
(statearr_28930_28955[(2)] = inst_28906);

(statearr_28930_28955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (5))){
var inst_28869 = (state_28916[(7)]);
var inst_28871 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28872 = (new cljs.core.PersistentArrayMap(null,2,inst_28871,null));
var inst_28873 = (new cljs.core.PersistentHashSet(null,inst_28872,null));
var inst_28874 = figwheel.client.focus_msgs.call(null,inst_28873,inst_28869);
var inst_28875 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28874);
var inst_28876 = cljs.core.first.call(null,inst_28874);
var inst_28877 = figwheel.client.autoload_QMARK_.call(null);
var state_28916__$1 = (function (){var statearr_28931 = state_28916;
(statearr_28931[(8)] = inst_28876);

(statearr_28931[(9)] = inst_28875);

return statearr_28931;
})();
if(cljs.core.truth_(inst_28877)){
var statearr_28932_28956 = state_28916__$1;
(statearr_28932_28956[(1)] = (8));

} else {
var statearr_28933_28957 = state_28916__$1;
(statearr_28933_28957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (14))){
var inst_28887 = (state_28916[(2)]);
var state_28916__$1 = state_28916;
var statearr_28934_28958 = state_28916__$1;
(statearr_28934_28958[(2)] = inst_28887);

(statearr_28934_28958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (16))){
var state_28916__$1 = state_28916;
var statearr_28935_28959 = state_28916__$1;
(statearr_28935_28959[(2)] = null);

(statearr_28935_28959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (10))){
var inst_28908 = (state_28916[(2)]);
var state_28916__$1 = (function (){var statearr_28936 = state_28916;
(statearr_28936[(11)] = inst_28908);

return statearr_28936;
})();
var statearr_28937_28960 = state_28916__$1;
(statearr_28937_28960[(2)] = null);

(statearr_28937_28960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28917 === (8))){
var inst_28875 = (state_28916[(9)]);
var inst_28879 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28875,opts);
var state_28916__$1 = state_28916;
if(cljs.core.truth_(inst_28879)){
var statearr_28938_28961 = state_28916__$1;
(statearr_28938_28961[(1)] = (11));

} else {
var statearr_28939_28962 = state_28916__$1;
(statearr_28939_28962[(1)] = (12));

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
});})(c__23523__auto___28944,ch))
;
return ((function (switch__23428__auto__,c__23523__auto___28944,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23429__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23429__auto____0 = (function (){
var statearr_28940 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28940[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23429__auto__);

(statearr_28940[(1)] = (1));

return statearr_28940;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23429__auto____1 = (function (state_28916){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_28916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e28941){if((e28941 instanceof Object)){
var ex__23432__auto__ = e28941;
var statearr_28942_28963 = state_28916;
(statearr_28942_28963[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28964 = state_28916;
state_28916 = G__28964;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23429__auto__ = function(state_28916){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23429__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23429__auto____1.call(this,state_28916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23429__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23429__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___28944,ch))
})();
var state__23525__auto__ = (function (){var statearr_28943 = f__23524__auto__.call(null);
(statearr_28943[(6)] = c__23523__auto___28944);

return statearr_28943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___28944,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28965_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28965_SHARP_));
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
var base_path_28971 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28971){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28967 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28968 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28969 = true;
var _STAR_print_fn_STAR__temp_val__28970 = ((function (_STAR_print_newline_STAR__orig_val__28967,_STAR_print_fn_STAR__orig_val__28968,_STAR_print_newline_STAR__temp_val__28969,sb,base_path_28971){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__28967,_STAR_print_fn_STAR__orig_val__28968,_STAR_print_newline_STAR__temp_val__28969,sb,base_path_28971))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28969;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28970;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28968;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28967;
}}catch (e28966){if((e28966 instanceof Error)){
var e = e28966;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28971], null));
} else {
var e = e28966;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28971))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28972){
var map__28973 = p__28972;
var map__28973__$1 = (((((!((map__28973 == null))))?(((((map__28973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28973):map__28973);
var opts = map__28973__$1;
var build_id = cljs.core.get.call(null,map__28973__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28973,map__28973__$1,opts,build_id){
return (function (p__28975){
var vec__28976 = p__28975;
var seq__28977 = cljs.core.seq.call(null,vec__28976);
var first__28978 = cljs.core.first.call(null,seq__28977);
var seq__28977__$1 = cljs.core.next.call(null,seq__28977);
var map__28979 = first__28978;
var map__28979__$1 = (((((!((map__28979 == null))))?(((((map__28979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28979):map__28979);
var msg = map__28979__$1;
var msg_name = cljs.core.get.call(null,map__28979__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28977__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28976,seq__28977,first__28978,seq__28977__$1,map__28979,map__28979__$1,msg,msg_name,_,map__28973,map__28973__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28976,seq__28977,first__28978,seq__28977__$1,map__28979,map__28979__$1,msg,msg_name,_,map__28973,map__28973__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28973,map__28973__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28981){
var vec__28982 = p__28981;
var seq__28983 = cljs.core.seq.call(null,vec__28982);
var first__28984 = cljs.core.first.call(null,seq__28983);
var seq__28983__$1 = cljs.core.next.call(null,seq__28983);
var map__28985 = first__28984;
var map__28985__$1 = (((((!((map__28985 == null))))?(((((map__28985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28985):map__28985);
var msg = map__28985__$1;
var msg_name = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28983__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28987){
var map__28988 = p__28987;
var map__28988__$1 = (((((!((map__28988 == null))))?(((((map__28988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28988):map__28988);
var on_compile_warning = cljs.core.get.call(null,map__28988__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28988__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28988,map__28988__$1,on_compile_warning,on_compile_fail){
return (function (p__28990){
var vec__28991 = p__28990;
var seq__28992 = cljs.core.seq.call(null,vec__28991);
var first__28993 = cljs.core.first.call(null,seq__28992);
var seq__28992__$1 = cljs.core.next.call(null,seq__28992);
var map__28994 = first__28993;
var map__28994__$1 = (((((!((map__28994 == null))))?(((((map__28994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);
var msg = map__28994__$1;
var msg_name = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28992__$1;
var pred__28996 = cljs.core._EQ_;
var expr__28997 = msg_name;
if(cljs.core.truth_(pred__28996.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28997))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28996.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28997))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28988,map__28988__$1,on_compile_warning,on_compile_fail))
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
var c__23523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto__,msg_hist,msg_names,msg){
return (function (state_29086){
var state_val_29087 = (state_29086[(1)]);
if((state_val_29087 === (7))){
var inst_29006 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
if(cljs.core.truth_(inst_29006)){
var statearr_29088_29135 = state_29086__$1;
(statearr_29088_29135[(1)] = (8));

} else {
var statearr_29089_29136 = state_29086__$1;
(statearr_29089_29136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (20))){
var inst_29080 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29090_29137 = state_29086__$1;
(statearr_29090_29137[(2)] = inst_29080);

(statearr_29090_29137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (27))){
var inst_29076 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29091_29138 = state_29086__$1;
(statearr_29091_29138[(2)] = inst_29076);

(statearr_29091_29138[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (1))){
var inst_28999 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29086__$1 = state_29086;
if(cljs.core.truth_(inst_28999)){
var statearr_29092_29139 = state_29086__$1;
(statearr_29092_29139[(1)] = (2));

} else {
var statearr_29093_29140 = state_29086__$1;
(statearr_29093_29140[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (24))){
var inst_29078 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29094_29141 = state_29086__$1;
(statearr_29094_29141[(2)] = inst_29078);

(statearr_29094_29141[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (4))){
var inst_29084 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29086__$1,inst_29084);
} else {
if((state_val_29087 === (15))){
var inst_29082 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29095_29142 = state_29086__$1;
(statearr_29095_29142[(2)] = inst_29082);

(statearr_29095_29142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (21))){
var inst_29035 = (state_29086[(2)]);
var inst_29036 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29037 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29036);
var state_29086__$1 = (function (){var statearr_29096 = state_29086;
(statearr_29096[(7)] = inst_29035);

return statearr_29096;
})();
var statearr_29097_29143 = state_29086__$1;
(statearr_29097_29143[(2)] = inst_29037);

(statearr_29097_29143[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (31))){
var inst_29065 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29086__$1 = state_29086;
if(inst_29065){
var statearr_29098_29144 = state_29086__$1;
(statearr_29098_29144[(1)] = (34));

} else {
var statearr_29099_29145 = state_29086__$1;
(statearr_29099_29145[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (32))){
var inst_29074 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29100_29146 = state_29086__$1;
(statearr_29100_29146[(2)] = inst_29074);

(statearr_29100_29146[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (33))){
var inst_29061 = (state_29086[(2)]);
var inst_29062 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29063 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29062);
var state_29086__$1 = (function (){var statearr_29101 = state_29086;
(statearr_29101[(8)] = inst_29061);

return statearr_29101;
})();
var statearr_29102_29147 = state_29086__$1;
(statearr_29102_29147[(2)] = inst_29063);

(statearr_29102_29147[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (13))){
var inst_29020 = figwheel.client.heads_up.clear.call(null);
var state_29086__$1 = state_29086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29086__$1,(16),inst_29020);
} else {
if((state_val_29087 === (22))){
var inst_29041 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29042 = figwheel.client.heads_up.append_warning_message.call(null,inst_29041);
var state_29086__$1 = state_29086;
var statearr_29103_29148 = state_29086__$1;
(statearr_29103_29148[(2)] = inst_29042);

(statearr_29103_29148[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (36))){
var inst_29072 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29104_29149 = state_29086__$1;
(statearr_29104_29149[(2)] = inst_29072);

(statearr_29104_29149[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (29))){
var inst_29052 = (state_29086[(2)]);
var inst_29053 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29054 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29053);
var state_29086__$1 = (function (){var statearr_29105 = state_29086;
(statearr_29105[(9)] = inst_29052);

return statearr_29105;
})();
var statearr_29106_29150 = state_29086__$1;
(statearr_29106_29150[(2)] = inst_29054);

(statearr_29106_29150[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (6))){
var inst_29001 = (state_29086[(10)]);
var state_29086__$1 = state_29086;
var statearr_29107_29151 = state_29086__$1;
(statearr_29107_29151[(2)] = inst_29001);

(statearr_29107_29151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (28))){
var inst_29048 = (state_29086[(2)]);
var inst_29049 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29050 = figwheel.client.heads_up.display_warning.call(null,inst_29049);
var state_29086__$1 = (function (){var statearr_29108 = state_29086;
(statearr_29108[(11)] = inst_29048);

return statearr_29108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29086__$1,(29),inst_29050);
} else {
if((state_val_29087 === (25))){
var inst_29046 = figwheel.client.heads_up.clear.call(null);
var state_29086__$1 = state_29086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29086__$1,(28),inst_29046);
} else {
if((state_val_29087 === (34))){
var inst_29067 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29086__$1 = state_29086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29086__$1,(37),inst_29067);
} else {
if((state_val_29087 === (17))){
var inst_29026 = (state_29086[(2)]);
var inst_29027 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29028 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29027);
var state_29086__$1 = (function (){var statearr_29109 = state_29086;
(statearr_29109[(12)] = inst_29026);

return statearr_29109;
})();
var statearr_29110_29152 = state_29086__$1;
(statearr_29110_29152[(2)] = inst_29028);

(statearr_29110_29152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (3))){
var inst_29018 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29086__$1 = state_29086;
if(inst_29018){
var statearr_29111_29153 = state_29086__$1;
(statearr_29111_29153[(1)] = (13));

} else {
var statearr_29112_29154 = state_29086__$1;
(statearr_29112_29154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (12))){
var inst_29014 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29113_29155 = state_29086__$1;
(statearr_29113_29155[(2)] = inst_29014);

(statearr_29113_29155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (2))){
var inst_29001 = (state_29086[(10)]);
var inst_29001__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29086__$1 = (function (){var statearr_29114 = state_29086;
(statearr_29114[(10)] = inst_29001__$1);

return statearr_29114;
})();
if(cljs.core.truth_(inst_29001__$1)){
var statearr_29115_29156 = state_29086__$1;
(statearr_29115_29156[(1)] = (5));

} else {
var statearr_29116_29157 = state_29086__$1;
(statearr_29116_29157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (23))){
var inst_29044 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29086__$1 = state_29086;
if(inst_29044){
var statearr_29117_29158 = state_29086__$1;
(statearr_29117_29158[(1)] = (25));

} else {
var statearr_29118_29159 = state_29086__$1;
(statearr_29118_29159[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (35))){
var state_29086__$1 = state_29086;
var statearr_29119_29160 = state_29086__$1;
(statearr_29119_29160[(2)] = null);

(statearr_29119_29160[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (19))){
var inst_29039 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29086__$1 = state_29086;
if(inst_29039){
var statearr_29120_29161 = state_29086__$1;
(statearr_29120_29161[(1)] = (22));

} else {
var statearr_29121_29162 = state_29086__$1;
(statearr_29121_29162[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (11))){
var inst_29010 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29122_29163 = state_29086__$1;
(statearr_29122_29163[(2)] = inst_29010);

(statearr_29122_29163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (9))){
var inst_29012 = figwheel.client.heads_up.clear.call(null);
var state_29086__$1 = state_29086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29086__$1,(12),inst_29012);
} else {
if((state_val_29087 === (5))){
var inst_29003 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29086__$1 = state_29086;
var statearr_29123_29164 = state_29086__$1;
(statearr_29123_29164[(2)] = inst_29003);

(statearr_29123_29164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (14))){
var inst_29030 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29086__$1 = state_29086;
if(inst_29030){
var statearr_29124_29165 = state_29086__$1;
(statearr_29124_29165[(1)] = (18));

} else {
var statearr_29125_29166 = state_29086__$1;
(statearr_29125_29166[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (26))){
var inst_29056 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29086__$1 = state_29086;
if(inst_29056){
var statearr_29126_29167 = state_29086__$1;
(statearr_29126_29167[(1)] = (30));

} else {
var statearr_29127_29168 = state_29086__$1;
(statearr_29127_29168[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (16))){
var inst_29022 = (state_29086[(2)]);
var inst_29023 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29024 = figwheel.client.heads_up.display_exception.call(null,inst_29023);
var state_29086__$1 = (function (){var statearr_29128 = state_29086;
(statearr_29128[(13)] = inst_29022);

return statearr_29128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29086__$1,(17),inst_29024);
} else {
if((state_val_29087 === (30))){
var inst_29058 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29059 = figwheel.client.heads_up.display_warning.call(null,inst_29058);
var state_29086__$1 = state_29086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29086__$1,(33),inst_29059);
} else {
if((state_val_29087 === (10))){
var inst_29016 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29129_29169 = state_29086__$1;
(statearr_29129_29169[(2)] = inst_29016);

(statearr_29129_29169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (18))){
var inst_29032 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29033 = figwheel.client.heads_up.display_exception.call(null,inst_29032);
var state_29086__$1 = state_29086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29086__$1,(21),inst_29033);
} else {
if((state_val_29087 === (37))){
var inst_29069 = (state_29086[(2)]);
var state_29086__$1 = state_29086;
var statearr_29130_29170 = state_29086__$1;
(statearr_29130_29170[(2)] = inst_29069);

(statearr_29130_29170[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29087 === (8))){
var inst_29008 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29086__$1 = state_29086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29086__$1,(11),inst_29008);
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
});})(c__23523__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23428__auto__,c__23523__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23429__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23429__auto____0 = (function (){
var statearr_29131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29131[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23429__auto__);

(statearr_29131[(1)] = (1));

return statearr_29131;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23429__auto____1 = (function (state_29086){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_29086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e29132){if((e29132 instanceof Object)){
var ex__23432__auto__ = e29132;
var statearr_29133_29171 = state_29086;
(statearr_29133_29171[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29172 = state_29086;
state_29086 = G__29172;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23429__auto__ = function(state_29086){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23429__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23429__auto____1.call(this,state_29086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23429__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23429__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto__,msg_hist,msg_names,msg))
})();
var state__23525__auto__ = (function (){var statearr_29134 = f__23524__auto__.call(null);
(statearr_29134[(6)] = c__23523__auto__);

return statearr_29134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto__,msg_hist,msg_names,msg))
);

return c__23523__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23523__auto___29201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto___29201,ch){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto___29201,ch){
return (function (state_29187){
var state_val_29188 = (state_29187[(1)]);
if((state_val_29188 === (1))){
var state_29187__$1 = state_29187;
var statearr_29189_29202 = state_29187__$1;
(statearr_29189_29202[(2)] = null);

(statearr_29189_29202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29188 === (2))){
var state_29187__$1 = state_29187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29187__$1,(4),ch);
} else {
if((state_val_29188 === (3))){
var inst_29185 = (state_29187[(2)]);
var state_29187__$1 = state_29187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29187__$1,inst_29185);
} else {
if((state_val_29188 === (4))){
var inst_29175 = (state_29187[(7)]);
var inst_29175__$1 = (state_29187[(2)]);
var state_29187__$1 = (function (){var statearr_29190 = state_29187;
(statearr_29190[(7)] = inst_29175__$1);

return statearr_29190;
})();
if(cljs.core.truth_(inst_29175__$1)){
var statearr_29191_29203 = state_29187__$1;
(statearr_29191_29203[(1)] = (5));

} else {
var statearr_29192_29204 = state_29187__$1;
(statearr_29192_29204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29188 === (5))){
var inst_29175 = (state_29187[(7)]);
var inst_29177 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29175);
var state_29187__$1 = state_29187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29187__$1,(8),inst_29177);
} else {
if((state_val_29188 === (6))){
var state_29187__$1 = state_29187;
var statearr_29193_29205 = state_29187__$1;
(statearr_29193_29205[(2)] = null);

(statearr_29193_29205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29188 === (7))){
var inst_29183 = (state_29187[(2)]);
var state_29187__$1 = state_29187;
var statearr_29194_29206 = state_29187__$1;
(statearr_29194_29206[(2)] = inst_29183);

(statearr_29194_29206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29188 === (8))){
var inst_29179 = (state_29187[(2)]);
var state_29187__$1 = (function (){var statearr_29195 = state_29187;
(statearr_29195[(8)] = inst_29179);

return statearr_29195;
})();
var statearr_29196_29207 = state_29187__$1;
(statearr_29196_29207[(2)] = null);

(statearr_29196_29207[(1)] = (2));


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
});})(c__23523__auto___29201,ch))
;
return ((function (switch__23428__auto__,c__23523__auto___29201,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23429__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23429__auto____0 = (function (){
var statearr_29197 = [null,null,null,null,null,null,null,null,null];
(statearr_29197[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23429__auto__);

(statearr_29197[(1)] = (1));

return statearr_29197;
});
var figwheel$client$heads_up_plugin_$_state_machine__23429__auto____1 = (function (state_29187){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_29187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e29198){if((e29198 instanceof Object)){
var ex__23432__auto__ = e29198;
var statearr_29199_29208 = state_29187;
(statearr_29199_29208[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29209 = state_29187;
state_29187 = G__29209;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23429__auto__ = function(state_29187){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23429__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23429__auto____1.call(this,state_29187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23429__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23429__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto___29201,ch))
})();
var state__23525__auto__ = (function (){var statearr_29200 = f__23524__auto__.call(null);
(statearr_29200[(6)] = c__23523__auto___29201);

return statearr_29200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto___29201,ch))
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
var c__23523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto__){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto__){
return (function (state_29215){
var state_val_29216 = (state_29215[(1)]);
if((state_val_29216 === (1))){
var inst_29210 = cljs.core.async.timeout.call(null,(3000));
var state_29215__$1 = state_29215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29215__$1,(2),inst_29210);
} else {
if((state_val_29216 === (2))){
var inst_29212 = (state_29215[(2)]);
var inst_29213 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29215__$1 = (function (){var statearr_29217 = state_29215;
(statearr_29217[(7)] = inst_29212);

return statearr_29217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29215__$1,inst_29213);
} else {
return null;
}
}
});})(c__23523__auto__))
;
return ((function (switch__23428__auto__,c__23523__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23429__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23429__auto____0 = (function (){
var statearr_29218 = [null,null,null,null,null,null,null,null];
(statearr_29218[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23429__auto__);

(statearr_29218[(1)] = (1));

return statearr_29218;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23429__auto____1 = (function (state_29215){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_29215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e29219){if((e29219 instanceof Object)){
var ex__23432__auto__ = e29219;
var statearr_29220_29222 = state_29215;
(statearr_29220_29222[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29223 = state_29215;
state_29215 = G__29223;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23429__auto__ = function(state_29215){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23429__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23429__auto____1.call(this,state_29215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23429__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23429__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto__))
})();
var state__23525__auto__ = (function (){var statearr_29221 = f__23524__auto__.call(null);
(statearr_29221[(6)] = c__23523__auto__);

return statearr_29221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto__))
);

return c__23523__auto__;
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
var c__23523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23523__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__23524__auto__ = (function (){var switch__23428__auto__ = ((function (c__23523__auto__,figwheel_version,temp__5720__auto__){
return (function (state_29230){
var state_val_29231 = (state_29230[(1)]);
if((state_val_29231 === (1))){
var inst_29224 = cljs.core.async.timeout.call(null,(2000));
var state_29230__$1 = state_29230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29230__$1,(2),inst_29224);
} else {
if((state_val_29231 === (2))){
var inst_29226 = (state_29230[(2)]);
var inst_29227 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29228 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29227);
var state_29230__$1 = (function (){var statearr_29232 = state_29230;
(statearr_29232[(7)] = inst_29226);

return statearr_29232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29230__$1,inst_29228);
} else {
return null;
}
}
});})(c__23523__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__23428__auto__,c__23523__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23429__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23429__auto____0 = (function (){
var statearr_29233 = [null,null,null,null,null,null,null,null];
(statearr_29233[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23429__auto__);

(statearr_29233[(1)] = (1));

return statearr_29233;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23429__auto____1 = (function (state_29230){
while(true){
var ret_value__23430__auto__ = (function (){try{while(true){
var result__23431__auto__ = switch__23428__auto__.call(null,state_29230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23431__auto__;
}
break;
}
}catch (e29234){if((e29234 instanceof Object)){
var ex__23432__auto__ = e29234;
var statearr_29235_29237 = state_29230;
(statearr_29235_29237[(5)] = ex__23432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29238 = state_29230;
state_29230 = G__29238;
continue;
} else {
return ret_value__23430__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23429__auto__ = function(state_29230){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23429__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23429__auto____1.call(this,state_29230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23429__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23429__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23429__auto__;
})()
;})(switch__23428__auto__,c__23523__auto__,figwheel_version,temp__5720__auto__))
})();
var state__23525__auto__ = (function (){var statearr_29236 = f__23524__auto__.call(null);
(statearr_29236[(6)] = c__23523__auto__);

return statearr_29236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23525__auto__);
});})(c__23523__auto__,figwheel_version,temp__5720__auto__))
);

return c__23523__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29239){
var map__29240 = p__29239;
var map__29240__$1 = (((((!((map__29240 == null))))?(((((map__29240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29240):map__29240);
var file = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29242 = "";
var G__29242__$1 = (cljs.core.truth_(file)?[G__29242,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29242);
var G__29242__$2 = (cljs.core.truth_(line)?[G__29242__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29242__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29242__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29242__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29243){
var map__29244 = p__29243;
var map__29244__$1 = (((((!((map__29244 == null))))?(((((map__29244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29244):map__29244);
var ed = map__29244__$1;
var formatted_exception = cljs.core.get.call(null,map__29244__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29244__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29244__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29246_29250 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29247_29251 = null;
var count__29248_29252 = (0);
var i__29249_29253 = (0);
while(true){
if((i__29249_29253 < count__29248_29252)){
var msg_29254 = cljs.core._nth.call(null,chunk__29247_29251,i__29249_29253);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29254);


var G__29255 = seq__29246_29250;
var G__29256 = chunk__29247_29251;
var G__29257 = count__29248_29252;
var G__29258 = (i__29249_29253 + (1));
seq__29246_29250 = G__29255;
chunk__29247_29251 = G__29256;
count__29248_29252 = G__29257;
i__29249_29253 = G__29258;
continue;
} else {
var temp__5720__auto___29259 = cljs.core.seq.call(null,seq__29246_29250);
if(temp__5720__auto___29259){
var seq__29246_29260__$1 = temp__5720__auto___29259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29246_29260__$1)){
var c__4550__auto___29261 = cljs.core.chunk_first.call(null,seq__29246_29260__$1);
var G__29262 = cljs.core.chunk_rest.call(null,seq__29246_29260__$1);
var G__29263 = c__4550__auto___29261;
var G__29264 = cljs.core.count.call(null,c__4550__auto___29261);
var G__29265 = (0);
seq__29246_29250 = G__29262;
chunk__29247_29251 = G__29263;
count__29248_29252 = G__29264;
i__29249_29253 = G__29265;
continue;
} else {
var msg_29266 = cljs.core.first.call(null,seq__29246_29260__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29266);


var G__29267 = cljs.core.next.call(null,seq__29246_29260__$1);
var G__29268 = null;
var G__29269 = (0);
var G__29270 = (0);
seq__29246_29250 = G__29267;
chunk__29247_29251 = G__29268;
count__29248_29252 = G__29269;
i__29249_29253 = G__29270;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29271){
var map__29272 = p__29271;
var map__29272__$1 = (((((!((map__29272 == null))))?(((((map__29272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29272):map__29272);
var w = map__29272__$1;
var message = cljs.core.get.call(null,map__29272__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29274 = cljs.core.seq.call(null,plugins);
var chunk__29275 = null;
var count__29276 = (0);
var i__29277 = (0);
while(true){
if((i__29277 < count__29276)){
var vec__29284 = cljs.core._nth.call(null,chunk__29275,i__29277);
var k = cljs.core.nth.call(null,vec__29284,(0),null);
var plugin = cljs.core.nth.call(null,vec__29284,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29290 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29274,chunk__29275,count__29276,i__29277,pl_29290,vec__29284,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29290.call(null,msg_hist);
});})(seq__29274,chunk__29275,count__29276,i__29277,pl_29290,vec__29284,k,plugin))
);
} else {
}


var G__29291 = seq__29274;
var G__29292 = chunk__29275;
var G__29293 = count__29276;
var G__29294 = (i__29277 + (1));
seq__29274 = G__29291;
chunk__29275 = G__29292;
count__29276 = G__29293;
i__29277 = G__29294;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29274);
if(temp__5720__auto__){
var seq__29274__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29274__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29274__$1);
var G__29295 = cljs.core.chunk_rest.call(null,seq__29274__$1);
var G__29296 = c__4550__auto__;
var G__29297 = cljs.core.count.call(null,c__4550__auto__);
var G__29298 = (0);
seq__29274 = G__29295;
chunk__29275 = G__29296;
count__29276 = G__29297;
i__29277 = G__29298;
continue;
} else {
var vec__29287 = cljs.core.first.call(null,seq__29274__$1);
var k = cljs.core.nth.call(null,vec__29287,(0),null);
var plugin = cljs.core.nth.call(null,vec__29287,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29299 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29274,chunk__29275,count__29276,i__29277,pl_29299,vec__29287,k,plugin,seq__29274__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29299.call(null,msg_hist);
});})(seq__29274,chunk__29275,count__29276,i__29277,pl_29299,vec__29287,k,plugin,seq__29274__$1,temp__5720__auto__))
);
} else {
}


var G__29300 = cljs.core.next.call(null,seq__29274__$1);
var G__29301 = null;
var G__29302 = (0);
var G__29303 = (0);
seq__29274 = G__29300;
chunk__29275 = G__29301;
count__29276 = G__29302;
i__29277 = G__29303;
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
var G__29305 = arguments.length;
switch (G__29305) {
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

var seq__29306_29311 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29307_29312 = null;
var count__29308_29313 = (0);
var i__29309_29314 = (0);
while(true){
if((i__29309_29314 < count__29308_29313)){
var msg_29315 = cljs.core._nth.call(null,chunk__29307_29312,i__29309_29314);
figwheel.client.socket.handle_incoming_message.call(null,msg_29315);


var G__29316 = seq__29306_29311;
var G__29317 = chunk__29307_29312;
var G__29318 = count__29308_29313;
var G__29319 = (i__29309_29314 + (1));
seq__29306_29311 = G__29316;
chunk__29307_29312 = G__29317;
count__29308_29313 = G__29318;
i__29309_29314 = G__29319;
continue;
} else {
var temp__5720__auto___29320 = cljs.core.seq.call(null,seq__29306_29311);
if(temp__5720__auto___29320){
var seq__29306_29321__$1 = temp__5720__auto___29320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29306_29321__$1)){
var c__4550__auto___29322 = cljs.core.chunk_first.call(null,seq__29306_29321__$1);
var G__29323 = cljs.core.chunk_rest.call(null,seq__29306_29321__$1);
var G__29324 = c__4550__auto___29322;
var G__29325 = cljs.core.count.call(null,c__4550__auto___29322);
var G__29326 = (0);
seq__29306_29311 = G__29323;
chunk__29307_29312 = G__29324;
count__29308_29313 = G__29325;
i__29309_29314 = G__29326;
continue;
} else {
var msg_29327 = cljs.core.first.call(null,seq__29306_29321__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29327);


var G__29328 = cljs.core.next.call(null,seq__29306_29321__$1);
var G__29329 = null;
var G__29330 = (0);
var G__29331 = (0);
seq__29306_29311 = G__29328;
chunk__29307_29312 = G__29329;
count__29308_29313 = G__29330;
i__29309_29314 = G__29331;
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
var len__4730__auto___29336 = arguments.length;
var i__4731__auto___29337 = (0);
while(true){
if((i__4731__auto___29337 < len__4730__auto___29336)){
args__4736__auto__.push((arguments[i__4731__auto___29337]));

var G__29338 = (i__4731__auto___29337 + (1));
i__4731__auto___29337 = G__29338;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29333){
var map__29334 = p__29333;
var map__29334__$1 = (((((!((map__29334 == null))))?(((((map__29334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29334):map__29334);
var opts = map__29334__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29332){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29332));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29339){if((e29339 instanceof Error)){
var e = e29339;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29339;

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
return (function (p__29340){
var map__29341 = p__29340;
var map__29341__$1 = (((((!((map__29341 == null))))?(((((map__29341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29341):map__29341);
var msg_name = cljs.core.get.call(null,map__29341__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1565953421961
