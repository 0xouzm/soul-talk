// Compiled by ClojureScript 1.10.520 {}
goog.provide('soul_talk.auth_validate');
goog.require('cljs.core');
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

//# sourceMappingURL=auth_validate.js.map?rel=1568097408694
