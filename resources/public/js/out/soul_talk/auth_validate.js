// Compiled by ClojureScript 1.10.520 {}
goog.provide('soul_talk.auth_validate');
goog.require('cljs.core');
goog.require('bouncer.core');
goog.require('bouncer.validators');
soul_talk.auth_validate._STAR_password_re_STAR_ = /^(?=.*\d).{4,128}$/;
soul_talk.auth_validate._STAR_email_re_STAR_ = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
soul_talk.auth_validate.validate_email = (function soul_talk$auth_validate$validate_email(email){
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((email == null)));
if(and__4120__auto__){
var and__4120__auto____$1 = typeof email === 'string';
if(and__4120__auto____$1){
return cljs.core.re_matches.call(null,soul_talk.auth_validate._STAR_email_re_STAR_,email);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return true;
} else {
return false;
}
});
soul_talk.auth_validate.validate_passoword = (function soul_talk$auth_validate$validate_passoword(password){
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((password == null)));
if(and__4120__auto__){
var and__4120__auto____$1 = typeof password === 'string';
if(and__4120__auto____$1){
return cljs.core.re_matches.call(null,soul_talk.auth_validate._STAR_password_re_STAR_,password);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return true;
} else {
return false;
}
});
soul_talk.auth_validate.reg_errors = (function soul_talk$auth_validate$reg_errors(p__33010){
var map__33011 = p__33010;
var map__33011__$1 = (((((!((map__33011 == null))))?(((((map__33011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33011):map__33011);
var params = map__33011__$1;
var pass_confirm = cljs.core.get.call(null,map__33011__$1,new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590));
return cljs.core.first.call(null,bouncer.core.validate.call(null,params,new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"email \u4E0D\u80FD\u4E3A\u7A7A"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.email,new cljs.core.Keyword(null,"message","message",-406056002),"email \u4E0D\u5408\u6CD5"], null)], null),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.min_count,(7),new cljs.core.Keyword(null,"message","message",-406056002),"\u5BC6\u7801\u6700\u5C118\u4F4D"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_,pass_confirm,new cljs.core.Keyword(null,"message","message",-406056002),"\u4E24\u6B21\u5BC6\u7801\u5FC5\u987B\u4E00\u6837"], null)], null)));
});

//# sourceMappingURL=auth_validate.js.map?rel=1568179834248
