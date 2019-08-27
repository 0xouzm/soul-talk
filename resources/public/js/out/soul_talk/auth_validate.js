// Compiled by ClojureScript 1.10.520 {}
goog.provide('soul_talk.auth_validate');
goog.require('cljs.core');
soul_talk.auth_validate._STAR_password_re_STAR_ = /^(?=.*\d).{4,128}$/;
soul_talk.auth_validate._STAR_email_re_STAR_ = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
soul_talk.auth_validate.validate_email = (function soul_talk$auth_validate$validate_email(email){
if(cljs.core.truth_(cljs.core.re_matches.call(null,soul_talk.auth_validate._STAR_email_re_STAR_,email))){
return true;
} else {
return false;
}
});
soul_talk.auth_validate.validate_passoword = (function soul_talk$auth_validate$validate_passoword(password){
if(cljs.core.truth_(cljs.core.re_matches.call(null,soul_talk.auth_validate._STAR_password_re_STAR_,password))){
return true;
} else {
return false;
}
});

//# sourceMappingURL=auth_validate.js.map?rel=1566884698826
