// Compiled by ClojureScript 1.10.520 {}
goog.provide('soul_talk.login');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina.events');
goog.require('reagent.core');
goog.require('soul_talk.auth_validate');
goog.require('ajax.core');
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
soul_talk.login.handler_error = (function soul_talk$login$handler_error(p__27819){
var map__27820 = p__27819;
var map__27820__$1 = (((((!((map__27820 == null))))?(((((map__27820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27820):map__27820);
var resp = map__27820__$1;
var status = cljs.core.get.call(null,map__27820__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var message = cljs.core.get.call(null,map__27820__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return alert("error: ",message);
});
soul_talk.login.login_BANG_ = (function soul_talk$login$login_BANG_(login_data){
return ajax.core.POST.call(null,"/login",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Accept","application/transit+json"], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,login_data),new cljs.core.Keyword(null,"handler","handler",-195596612),soul_talk.login.handler_ok,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),soul_talk.login.handler_error], null));
});
soul_talk.login.validate_form = (function soul_talk$login$validate_form(login_data){
if(((soul_talk.auth_validate.validate_email.call(null,new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,login_data)))) && (soul_talk.auth_validate.validate_passoword.call(null,new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,login_data)))))){
return soul_talk.login.login_BANG_.call(null,login_data);
} else {
alert("email\u6216\u5BC6\u7801\u4E0D\u5408\u6CD5");

return false;
}
});
soul_talk.login.login_component = (function soul_talk$login$login_component(){
var login_data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var error = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (login_data,error){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#loginForm.form-signin","div#loginForm.form-signin",1054339363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h3.mb-3.font-weight-normal.text-center","h1.h3.mb-3.font-weight-normal.text-center",1756226996),"Please sign in"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Email address"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#email.form-control","input#email.form-control",-996532042),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email Address",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (login_data,error){
return (function (e){
var d = e.target;
cljs.core.swap_BANG_.call(null,login_data,cljs.core.assoc,new cljs.core.Keyword(null,"email","email",1415816706),d.value);

return soul_talk.login.validate_invalid.call(null,d,soul_talk.auth_validate.validate_email);
});})(login_data,error))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,login_data))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.invalid-feedback","div.invalid-feedback",-266429608),"\u65E0\u6548\u7684 Email"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#password.form-control","input#password.form-control",721190716),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"password",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (login_data,error){
return (function (e){
var d = e.target;
cljs.core.swap_BANG_.call(null,login_data,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),d.value);

return soul_talk.login.validate_invalid.call(null,d,soul_talk.auth_validate.validate_passoword);
});})(login_data,error))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,login_data))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.invalid-feedback","div.invalid-feedback",-266429608),"\u65E0\u6548\u7684\u5BC6\u7801"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.form-check","div.form-group.form-check",384067130),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#remameber.form-check-input","input#remameber.form-check-input",1369387533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"\u8BB0\u4F4F\u6211"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#error","div#error",1991548044),cljs.core.deref.call(null,error)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#submit.btn.btn-primary","input#submit.btn.btn-primary",1844793540),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"value","value",305978217),"\u767B\u5F55",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (login_data,error){
return (function (){
return soul_talk.login.validate_form.call(null,login_data);
});})(login_data,error))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-5.mb-3.text-muted","p.mt-5.mb-3.text-muted",-564629912),"&copy @2018"], null)], null)], null);
});
;})(login_data,error))
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

//# sourceMappingURL=login.js.map?rel=1568098365527
