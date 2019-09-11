// Compiled by ClojureScript 1.10.520 {}
goog.provide('soul_talk.register');
goog.require('cljs.core');
goog.require('domina');
goog.require('reagent.core');
goog.require('soul_talk.auth_validate');
goog.require('ajax.core');
goog.require('reagent.session');
goog.require('taoensso.timbre');
soul_talk.register.validate_invalid = (function soul_talk$register$validate_invalid(input,vali_fun){
if(cljs.core.not.call(null,vali_fun.call(null,input.value))){
return domina.add_class_BANG_.call(null,input,"is-invalid");
} else {
return domina.remove_class_BANG_.call(null,input,"is-invalid");
}
});
soul_talk.register.register_BANG_ = (function soul_talk$register$register_BANG_(reg_date,errors){
cljs.core.reset_BANG_.call(null,errors,soul_talk.auth_validate.reg_errors.call(null,cljs.core.deref.call(null,reg_date)));

if(cljs.core.not.call(null,cljs.core.deref.call(null,errors))){
return ajax.core.POST.call(null,"/register",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Accept","application/transit+json"], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,reg_date),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reg_date)));

cljs.core.reset_BANG_.call(null,reg_date,cljs.core.PersistentArrayMap.EMPTY);

alert("\u6CE8\u518C\u6210\u529F");

return window.location.href = "/login";
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__33020_SHARP_){
return cljs.core.reset_BANG_.call(null,errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"server-error","server-error",-426815993),cljs.core.get_in.call(null,p1__33020_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),"message"], null))], null));
})], null));
} else {
var error = cljs.core.vals.call(null,cljs.core.deref.call(null,errors));
var msg = cljs.core.ffirst.call(null,error);
return alert(msg);
}
});
soul_talk.register.register_component = (function soul_talk$register$register_component(){
var reg_data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var error = reagent.core.atom.call(null,null);
return ((function (reg_data,error){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#loginForm.form-signin","div#loginForm.form-signin",1054339363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h3.mb-3.font-weight-normal.text-center","h1.h3.mb-3.font-weight-normal.text-center",1756226996),"\u6CE8\u518C"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"\u90AE\u7BB1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#email.form-control","input#email.form-control",-996532042),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"xx@xx.xx",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (reg_data,error){
return (function (e){
var d = e.target;
cljs.core.swap_BANG_.call(null,reg_data,cljs.core.assoc,new cljs.core.Keyword(null,"email","email",1415816706),d.value);

return soul_talk.register.validate_invalid.call(null,d,soul_talk.auth_validate.validate_email);
});})(reg_data,error))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reg_data))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.invalid-feedback","div.invalid-feedback",-266429608),"\u65E0\u6548\u7684 Email"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"\u5BC6\u7801"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#password.form-control","input#password.form-control",721190716),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"\u5BC6\u7801",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (reg_data,error){
return (function (e){
var d = e.target;
cljs.core.swap_BANG_.call(null,reg_data,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),d.value);

return soul_talk.register.validate_invalid.call(null,d,soul_talk.auth_validate.validate_passoword);
});})(reg_data,error))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reg_data))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.invalid-feedback","div.invalid-feedback",-266429608),"\u65E0\u6548\u7684\u5BC6\u7801"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"\u91CD\u590D\u5BC6\u7801"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#pass-confirm.form-control","input#pass-confirm.form-control",-1554266778),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"pass-confirm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"\u91CD\u590D\u5BC6\u7801",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (reg_data,error){
return (function (e){
var d = e.target;
cljs.core.swap_BANG_.call(null,reg_data,cljs.core.assoc,new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590),d.value);

return soul_talk.register.validate_invalid.call(null,d,soul_talk.auth_validate.validate_passoword);
});})(reg_data,error))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reg_data))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.invalid-feedback","div.invalid-feedback",-266429608),"\u65E0\u6548\u7684\u5BC6\u7801"], null)], null),(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [error,new cljs.core.Keyword(null,"client-error","client-error",1482519602).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,error))], null))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#error.alert.alert-danger","div#error.alert.alert-danger",454936384),error], null)),(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [error,new cljs.core.Keyword(null,"server-error","server-error",-426815993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,error))], null))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#error.alert.alert-danger","div#error.alert.alert-danger",454936384),error], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#submit.btn.btn-primary.btn-lg.btn-block","input#submit.btn.btn-primary.btn-lg.btn-block",-933847463),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"value","value",305978217),"\u4FDD\u5B58",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (reg_data,error){
return (function (){
return soul_talk.register.register_BANG_.call(null,reg_data,error);
});})(reg_data,error))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-5.mb-3.text-muted","p.mt-5.mb-3.text-muted",-564629912),"&copy @2018"], null)], null)], null);
});
;})(reg_data,error))
});
soul_talk.register.load_page = (function soul_talk$register$load_page(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.register.register_component], null),domina.by_id.call(null,"app"));
});
soul_talk.register.init = (function soul_talk$register$init(){
if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return document.getElementById;
} else {
return and__4120__auto__;
}
})())){
return soul_talk.register.load_page.call(null);
} else {
return null;
}
});
goog.exportSymbol('soul_talk.register.init', soul_talk.register.init);

//# sourceMappingURL=register.js.map?rel=1568179834519
