// Compiled by ClojureScript 1.10.520 {}
goog.provide('soul_talk.login');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina.events');
goog.require('reagent.core');
soul_talk.login._STAR_password_re_STAR_ = /^(?=.*\d).{4,128}$/;
soul_talk.login._STAR_email_re_STAR_ = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
soul_talk.login.validate_email = (function soul_talk$login$validate_email(email){
if(cljs.core.truth_(cljs.core.re_matches.call(null,soul_talk.login._STAR_email_re_STAR_,domina.value.call(null,email)))){
return true;
} else {
return false;
}
});
soul_talk.login.validate_passoword = (function soul_talk$login$validate_passoword(password){
if(cljs.core.truth_(cljs.core.re_matches.call(null,soul_talk.login._STAR_password_re_STAR_,domina.value.call(null,password)))){
return true;
} else {
return false;
}
});
soul_talk.login.validate_invalid = (function soul_talk$login$validate_invalid(input_id,vali_fun){
if(cljs.core.not.call(null,vali_fun.call(null,input_id))){
return domina.add_class_BANG_.call(null,input_id,"is-invalid");
} else {
return domina.remove_class_BANG_.call(null,input_id,"is-invalid");
}
});
soul_talk.login.validate_form = (function soul_talk$login$validate_form(){
var email = domina.by_id.call(null,"email");
var password = domina.by_id.call(null,"password");
if(((soul_talk.login.validate_email.call(null,email)) && (soul_talk.login.validate_passoword.call(null,password)))){
return true;
} else {
alert("email\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");

return false;
}
});
soul_talk.login.login_component = (function soul_talk$login$login_component(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form#loginForm.form-signin","form#loginForm.form-signin",-573538033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),"/login",new cljs.core.Keyword(null,"method","method",55703592),"post"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h3.mb-3.font-weight-normal.text-center","h1.h3.mb-3.font-weight-normal.text-center",1756226996),"Please sign in"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Email address"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#email.form-control","input#email.form-control",-996532042),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email Address",new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return soul_talk.login.validate_invalid.call(null,domina.by_id.call(null,"email"),soul_talk.login.validate_email);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.invalid-feedback","div.invalid-feedback",-266429608),"\u65E0\u6548\u7684 Email"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#password.form-control","input#password.form-control",721190716),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"password",new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return soul_talk.login.validate_invalid.call(null,domina.by_id.call(null,"password"),soul_talk.login.validate_passoword);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.invalid-feedback","div.invalid-feedback",-266429608),"\u65E0\u6548\u7684\u5BC6\u7801"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.form-check","div.form-group.form-check",384067130),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#rememeber.form-check-input","input#rememeber.form-check-input",-1132889637),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"\u8BB0\u4F4F\u6211"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#error","div#error",1991548044)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#submit.btn.btn-lg.btn-primary.btn-block","input#submit.btn.btn-lg.btn-primary.btn-block",-1217506073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"\u767B\u5F55"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-5.mb-3.text-muted","p.mt-5.mb-3.text-muted",-564629912),"&copy @2018"], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.login.login_component], null),domina.by_id.call(null,"content"));
soul_talk.login.init = (function soul_talk$login$init(){
if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return document.getElementById;
} else {
return and__4120__auto__;
}
})())){
var login_form = domina.by_id.call(null,"loginForm");
return login_form.onsubmit = soul_talk.login.validate_form;
} else {
return null;
}
});
goog.exportSymbol('soul_talk.login.init', soul_talk.login.init);

//# sourceMappingURL=login.js.map?rel=1566810247912
