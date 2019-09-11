// Compiled by ClojureScript 1.10.520 {}
goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
var div_25966 = document.createElement("div");
var test_html_25967 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div_25966.innerHTML = test_html_25967;

domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div_25966.firstChild.nodeType,(3));

domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div_25966.getElementsByTagName("tbody").length,(0));

domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div_25966.getElementsByTagName("link").length,(0));

//# sourceMappingURL=support.js.map?rel=1568179214253
