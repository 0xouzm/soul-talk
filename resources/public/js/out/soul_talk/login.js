// Compiled by ClojureScript 1.10.520 {}
goog.provide('soul_talk.login');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina.events');
goog.require('reagent.core');
goog.require('soul_talk.auth_validate');
goog.require('ajax.core');
goog.require('taoensso.timbre');
goog.require('soul_talk.components.common');
soul_talk.login.validate_invalid = (function soul_talk$login$validate_invalid(input,vali_fun){
if(cljs.core.not.call(null,vali_fun.call(null,input.value))){
return domina.add_class_BANG_.call(null,input,"is-invalid");
} else {
return domina.remove_class_BANG_.call(null,input,"is-invalid");
}
});
soul_talk.login.handler_ok = (function soul_talk$login$handler_ok(response){
return console.log(["response: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
soul_talk.login.handler_error = (function soul_talk$login$handler_error(p__32854){
var map__32855 = p__32854;
var map__32855__$1 = (((((!((map__32855 == null))))?(((((map__32855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32855):map__32855);
var resp = map__32855__$1;
var status = cljs.core.get.call(null,map__32855__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var message = cljs.core.get.call(null,map__32855__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return alert("error: ",message);
});
soul_talk.login.login_BANG_ = (function soul_talk$login$login_BANG_(login_data,errors){
cljs.core.reset_BANG_.call(null,errors,soul_talk.auth_validate.login_errors.call(null,cljs.core.deref.call(null,login_data)));

if(cljs.core.not.call(null,cljs.core.deref.call(null,errors))){
return ajax.core.POST.call(null,"/login",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Accept","application/transit+json"], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,login_data),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return window.location.href = "/";
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__32857_SHARP_){
var msg = cljs.core.get_in.call(null,p1__32857_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),"message"], null));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"soul-talk.login","/private/var/folders/t_/kjt6wyg16857j3vs_lx023_r0000gp/T/form-init1190696844067099961.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (msg){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
});})(msg))
,null)),null,2043235073);

return alert(msg);
})], null));
} else {
var error = cljs.core.vals.call(null,cljs.core.deref.call(null,errors));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"soul-talk.login","/private/var/folders/t_/kjt6wyg16857j3vs_lx023_r0000gp/T/form-init1190696844067099961.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (error){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [error], null);
});})(error))
,null)),null,-1771337105);

return alert(error);
}
});
soul_talk.login.login_component = (function soul_talk$login$login_component(){
var login_data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var errors = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (login_data,errors){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#loginForm.form-signin","div#loginForm.form-signin",1054339363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h3.mb-3.font-weight-normal.text-center","h1.h3.mb-3.font-weight-normal.text-center",1756226996),"Please sign in"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.components.common.text_input,"Email",new cljs.core.Keyword(null,"email","email",1415816706),"Email Address",login_data], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.components.common.password_input,"\u5BC6\u7801",new cljs.core.Keyword(null,"password","password",417022471),"\u8F93\u5165\u5BC6\u7801",login_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#submit.btn.btn-primary.btn-lg.btn-block","input#submit.btn.btn-primary.btn-lg.btn-block",-933847463),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"value","value",305978217),"\u767B\u5F55",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (login_data,errors){
return (function (){
return soul_talk.login.login_BANG_.call(null,login_data,errors);
});})(login_data,errors))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#submit.btn.btn-primary.btn-lg.btn-block","input#submit.btn.btn-primary.btn-lg.btn-block",-933847463),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"value","value",305978217),"\u6CE8\u518C",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (login_data,errors){
return (function (){
return window.location.href = "/register";
});})(login_data,errors))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-5.mb-3.text-muted","p.mt-5.mb-3.text-muted",-564629912),"&copy @2018"], null)], null)], null);
});
;})(login_data,errors))
});
soul_talk.login.load_page = (function soul_talk$login$load_page(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.login.login_component], null),domina.by_id.call(null,"app"));
});
soul_talk.login.init = (function soul_talk$login$init(){
if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return document.getElementById;
} else {
return and__4120__auto__;
}
})())){
return soul_talk.login.load_page.call(null);
} else {
return null;
}
});
goog.exportSymbol('soul_talk.login.init', soul_talk.login.init);

//# sourceMappingURL=login.js.map?rel=1568200141032
