// Compiled by ClojureScript 1.10.520 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.support');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_23132 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_23133 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_23134 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_23134,opt_wrapper_23132,table_section_wrapper_23133,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_23132,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_23133,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_23133,cell_wrapper_23134,table_section_wrapper_23133,table_section_wrapper_23133]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__4120__auto__ = div.firstChild;
if(cljs.core.truth_(and__4120__auto__)){
return div.firstChild.childNodes;
} else {
return and__4120__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__23135 = cljs.core.seq.call(null,tbody);
var chunk__23136 = null;
var count__23137 = (0);
var i__23138 = (0);
while(true){
if((i__23138 < count__23137)){
var child = cljs.core._nth.call(null,chunk__23136,i__23138);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__23139 = seq__23135;
var G__23140 = chunk__23136;
var G__23141 = count__23137;
var G__23142 = (i__23138 + (1));
seq__23135 = G__23139;
chunk__23136 = G__23140;
count__23137 = G__23141;
i__23138 = G__23142;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23135);
if(temp__5720__auto__){
var seq__23135__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23135__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23135__$1);
var G__23143 = cljs.core.chunk_rest.call(null,seq__23135__$1);
var G__23144 = c__4550__auto__;
var G__23145 = cljs.core.count.call(null,c__4550__auto__);
var G__23146 = (0);
seq__23135 = G__23143;
chunk__23136 = G__23144;
count__23137 = G__23145;
i__23138 = G__23146;
continue;
} else {
var child = cljs.core.first.call(null,seq__23135__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__23147 = cljs.core.next.call(null,seq__23135__$1);
var G__23148 = null;
var G__23149 = (0);
var G__23150 = (0);
seq__23135 = G__23147;
chunk__23136 = G__23148;
count__23137 = G__23149;
i__23138 = G__23150;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1))).toLowerCase();
var vec__23151 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__23151,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__23151,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__23151,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__23154 = wrapper.lastChild;
var G__23155 = (level - (1));
wrapper = G__23154;
level = G__23155;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = (!(domina.support.leading_whitespace_QMARK_));
if(and__4120__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__4120__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((((!((content == null)))) && ((!((content.domina$DomContent$nodes$arity$1 == null)))))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4433__auto__ = (((content == null))?null:content);
var m__4434__auto__ = (domina.nodes[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,content);
} else {
var m__4431__auto__ = (domina.nodes["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((((!((nodeseq == null)))) && ((!((nodeseq.domina$DomContent$single_node$arity$1 == null)))))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4433__auto__ = (((nodeseq == null))?null:nodeseq);
var m__4434__auto__ = (domina.single_node[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,nodeseq);
} else {
var m__4431__auto__ = (domina.single_node["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23157 = arguments.length;
var i__4731__auto___23158 = (0);
while(true){
if((i__4731__auto___23158 < len__4730__auto___23157)){
args__4736__auto__.push((arguments[i__4731__auto___23158]));

var G__23159 = (i__4731__auto___23158 + (1));
i__4731__auto___23158 = G__23159;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(((domina._STAR_debug_STAR_) && ((!(cljs.core._EQ_.call(null,window.console,undefined)))))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
domina.log_debug.cljs$lang$applyTo = (function (seq23156){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23156));
});

domina.log = (function domina$log(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23161 = arguments.length;
var i__4731__auto___23162 = (0);
while(true){
if((i__4731__auto___23162 < len__4730__auto___23161)){
args__4736__auto__.push((arguments[i__4731__auto___23162]));

var G__23163 = (i__4731__auto___23162 + (1));
i__4731__auto___23162 = G__23163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
domina.log.cljs$lang$applyTo = (function (seq23160){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23160));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23165 = arguments.length;
var i__4731__auto___23166 = (0);
while(true){
if((i__4731__auto___23166 < len__4730__auto___23165)){
args__4736__auto__.push((arguments[i__4731__auto___23166]));

var G__23167 = (i__4731__auto___23166 + (1));
i__4731__auto___23166 = G__23167;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
domina.common_ancestor.cljs$lang$applyTo = (function (seq23164){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23164));
});

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__23168_SHARP_){
return p1__23168_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__23169_SHARP_,p2__23170_SHARP_){
return goog.dom.insertChildAt(p1__23169_SHARP_,p2__23170_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__23172_SHARP_,p2__23171_SHARP_){
return goog.dom.insertSiblingBefore(p2__23171_SHARP_,p1__23172_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__23174_SHARP_,p2__23173_SHARP_){
return goog.dom.insertSiblingAfter(p2__23173_SHARP_,p1__23174_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__23176_SHARP_,p2__23175_SHARP_){
return goog.dom.replaceNode(p2__23175_SHARP_,p1__23176_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23184 = arguments.length;
var i__4731__auto___23185 = (0);
while(true){
if((i__4731__auto___23185 < len__4730__auto___23184)){
args__4736__auto__.push((arguments[i__4731__auto___23185]));

var G__23186 = (i__4731__auto___23185 + (1));
i__4731__auto___23185 = G__23186;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__23180_23187 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23181_23188 = null;
var count__23182_23189 = (0);
var i__23183_23190 = (0);
while(true){
if((i__23183_23190 < count__23182_23189)){
var n_23191 = cljs.core._nth.call(null,chunk__23181_23188,i__23183_23190);
goog.style.setStyle(n_23191,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__23192 = seq__23180_23187;
var G__23193 = chunk__23181_23188;
var G__23194 = count__23182_23189;
var G__23195 = (i__23183_23190 + (1));
seq__23180_23187 = G__23192;
chunk__23181_23188 = G__23193;
count__23182_23189 = G__23194;
i__23183_23190 = G__23195;
continue;
} else {
var temp__5720__auto___23196 = cljs.core.seq.call(null,seq__23180_23187);
if(temp__5720__auto___23196){
var seq__23180_23197__$1 = temp__5720__auto___23196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23180_23197__$1)){
var c__4550__auto___23198 = cljs.core.chunk_first.call(null,seq__23180_23197__$1);
var G__23199 = cljs.core.chunk_rest.call(null,seq__23180_23197__$1);
var G__23200 = c__4550__auto___23198;
var G__23201 = cljs.core.count.call(null,c__4550__auto___23198);
var G__23202 = (0);
seq__23180_23187 = G__23199;
chunk__23181_23188 = G__23200;
count__23182_23189 = G__23201;
i__23183_23190 = G__23202;
continue;
} else {
var n_23203 = cljs.core.first.call(null,seq__23180_23197__$1);
goog.style.setStyle(n_23203,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__23204 = cljs.core.next.call(null,seq__23180_23197__$1);
var G__23205 = null;
var G__23206 = (0);
var G__23207 = (0);
seq__23180_23187 = G__23204;
chunk__23181_23188 = G__23205;
count__23182_23189 = G__23206;
i__23183_23190 = G__23207;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
domina.set_style_BANG_.cljs$lang$applyTo = (function (seq23177){
var G__23178 = cljs.core.first.call(null,seq23177);
var seq23177__$1 = cljs.core.next.call(null,seq23177);
var G__23179 = cljs.core.first.call(null,seq23177__$1);
var seq23177__$2 = cljs.core.next.call(null,seq23177__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23178,G__23179,seq23177__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23215 = arguments.length;
var i__4731__auto___23216 = (0);
while(true){
if((i__4731__auto___23216 < len__4730__auto___23215)){
args__4736__auto__.push((arguments[i__4731__auto___23216]));

var G__23217 = (i__4731__auto___23216 + (1));
i__4731__auto___23216 = G__23217;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__23211_23218 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23212_23219 = null;
var count__23213_23220 = (0);
var i__23214_23221 = (0);
while(true){
if((i__23214_23221 < count__23213_23220)){
var n_23222 = cljs.core._nth.call(null,chunk__23212_23219,i__23214_23221);
n_23222.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__23223 = seq__23211_23218;
var G__23224 = chunk__23212_23219;
var G__23225 = count__23213_23220;
var G__23226 = (i__23214_23221 + (1));
seq__23211_23218 = G__23223;
chunk__23212_23219 = G__23224;
count__23213_23220 = G__23225;
i__23214_23221 = G__23226;
continue;
} else {
var temp__5720__auto___23227 = cljs.core.seq.call(null,seq__23211_23218);
if(temp__5720__auto___23227){
var seq__23211_23228__$1 = temp__5720__auto___23227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23211_23228__$1)){
var c__4550__auto___23229 = cljs.core.chunk_first.call(null,seq__23211_23228__$1);
var G__23230 = cljs.core.chunk_rest.call(null,seq__23211_23228__$1);
var G__23231 = c__4550__auto___23229;
var G__23232 = cljs.core.count.call(null,c__4550__auto___23229);
var G__23233 = (0);
seq__23211_23218 = G__23230;
chunk__23212_23219 = G__23231;
count__23213_23220 = G__23232;
i__23214_23221 = G__23233;
continue;
} else {
var n_23234 = cljs.core.first.call(null,seq__23211_23228__$1);
n_23234.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__23235 = cljs.core.next.call(null,seq__23211_23228__$1);
var G__23236 = null;
var G__23237 = (0);
var G__23238 = (0);
seq__23211_23218 = G__23235;
chunk__23212_23219 = G__23236;
count__23213_23220 = G__23237;
i__23214_23221 = G__23238;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq23208){
var G__23209 = cljs.core.first.call(null,seq23208);
var seq23208__$1 = cljs.core.next.call(null,seq23208);
var G__23210 = cljs.core.first.call(null,seq23208__$1);
var seq23208__$2 = cljs.core.next.call(null,seq23208__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23209,G__23210,seq23208__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__23239_23243 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23240_23244 = null;
var count__23241_23245 = (0);
var i__23242_23246 = (0);
while(true){
if((i__23242_23246 < count__23241_23245)){
var n_23247 = cljs.core._nth.call(null,chunk__23240_23244,i__23242_23246);
n_23247.removeAttribute(cljs.core.name.call(null,name));


var G__23248 = seq__23239_23243;
var G__23249 = chunk__23240_23244;
var G__23250 = count__23241_23245;
var G__23251 = (i__23242_23246 + (1));
seq__23239_23243 = G__23248;
chunk__23240_23244 = G__23249;
count__23241_23245 = G__23250;
i__23242_23246 = G__23251;
continue;
} else {
var temp__5720__auto___23252 = cljs.core.seq.call(null,seq__23239_23243);
if(temp__5720__auto___23252){
var seq__23239_23253__$1 = temp__5720__auto___23252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23239_23253__$1)){
var c__4550__auto___23254 = cljs.core.chunk_first.call(null,seq__23239_23253__$1);
var G__23255 = cljs.core.chunk_rest.call(null,seq__23239_23253__$1);
var G__23256 = c__4550__auto___23254;
var G__23257 = cljs.core.count.call(null,c__4550__auto___23254);
var G__23258 = (0);
seq__23239_23243 = G__23255;
chunk__23240_23244 = G__23256;
count__23241_23245 = G__23257;
i__23242_23246 = G__23258;
continue;
} else {
var n_23259 = cljs.core.first.call(null,seq__23239_23253__$1);
n_23259.removeAttribute(cljs.core.name.call(null,name));


var G__23260 = cljs.core.next.call(null,seq__23239_23253__$1);
var G__23261 = null;
var G__23262 = (0);
var G__23263 = (0);
seq__23239_23243 = G__23260;
chunk__23240_23244 = G__23261;
count__23241_23245 = G__23262;
i__23242_23246 = G__23263;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__23264 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__23264,(0),null);
var v = cljs.core.nth.call(null,vec__23264,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = k;
if(cljs.core.truth_(and__4120__auto__)){
return v;
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs){
return (function (p1__23267_SHARP_){
var attr = attrs.item(p1__23267_SHARP_);
var value = attr.nodeValue;
if(((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
});})(node,attrs))
,cljs.core.range.call(null,attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__23268_23284 = cljs.core.seq.call(null,styles);
var chunk__23269_23285 = null;
var count__23270_23286 = (0);
var i__23271_23287 = (0);
while(true){
if((i__23271_23287 < count__23270_23286)){
var vec__23278_23288 = cljs.core._nth.call(null,chunk__23269_23285,i__23271_23287);
var name_23289 = cljs.core.nth.call(null,vec__23278_23288,(0),null);
var value_23290 = cljs.core.nth.call(null,vec__23278_23288,(1),null);
domina.set_style_BANG_.call(null,content,name_23289,value_23290);


var G__23291 = seq__23268_23284;
var G__23292 = chunk__23269_23285;
var G__23293 = count__23270_23286;
var G__23294 = (i__23271_23287 + (1));
seq__23268_23284 = G__23291;
chunk__23269_23285 = G__23292;
count__23270_23286 = G__23293;
i__23271_23287 = G__23294;
continue;
} else {
var temp__5720__auto___23295 = cljs.core.seq.call(null,seq__23268_23284);
if(temp__5720__auto___23295){
var seq__23268_23296__$1 = temp__5720__auto___23295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23268_23296__$1)){
var c__4550__auto___23297 = cljs.core.chunk_first.call(null,seq__23268_23296__$1);
var G__23298 = cljs.core.chunk_rest.call(null,seq__23268_23296__$1);
var G__23299 = c__4550__auto___23297;
var G__23300 = cljs.core.count.call(null,c__4550__auto___23297);
var G__23301 = (0);
seq__23268_23284 = G__23298;
chunk__23269_23285 = G__23299;
count__23270_23286 = G__23300;
i__23271_23287 = G__23301;
continue;
} else {
var vec__23281_23302 = cljs.core.first.call(null,seq__23268_23296__$1);
var name_23303 = cljs.core.nth.call(null,vec__23281_23302,(0),null);
var value_23304 = cljs.core.nth.call(null,vec__23281_23302,(1),null);
domina.set_style_BANG_.call(null,content,name_23303,value_23304);


var G__23305 = cljs.core.next.call(null,seq__23268_23296__$1);
var G__23306 = null;
var G__23307 = (0);
var G__23308 = (0);
seq__23268_23284 = G__23305;
chunk__23269_23285 = G__23306;
count__23270_23286 = G__23307;
i__23271_23287 = G__23308;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__23309_23325 = cljs.core.seq.call(null,attrs);
var chunk__23310_23326 = null;
var count__23311_23327 = (0);
var i__23312_23328 = (0);
while(true){
if((i__23312_23328 < count__23311_23327)){
var vec__23319_23329 = cljs.core._nth.call(null,chunk__23310_23326,i__23312_23328);
var name_23330 = cljs.core.nth.call(null,vec__23319_23329,(0),null);
var value_23331 = cljs.core.nth.call(null,vec__23319_23329,(1),null);
domina.set_attr_BANG_.call(null,content,name_23330,value_23331);


var G__23332 = seq__23309_23325;
var G__23333 = chunk__23310_23326;
var G__23334 = count__23311_23327;
var G__23335 = (i__23312_23328 + (1));
seq__23309_23325 = G__23332;
chunk__23310_23326 = G__23333;
count__23311_23327 = G__23334;
i__23312_23328 = G__23335;
continue;
} else {
var temp__5720__auto___23336 = cljs.core.seq.call(null,seq__23309_23325);
if(temp__5720__auto___23336){
var seq__23309_23337__$1 = temp__5720__auto___23336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23309_23337__$1)){
var c__4550__auto___23338 = cljs.core.chunk_first.call(null,seq__23309_23337__$1);
var G__23339 = cljs.core.chunk_rest.call(null,seq__23309_23337__$1);
var G__23340 = c__4550__auto___23338;
var G__23341 = cljs.core.count.call(null,c__4550__auto___23338);
var G__23342 = (0);
seq__23309_23325 = G__23339;
chunk__23310_23326 = G__23340;
count__23311_23327 = G__23341;
i__23312_23328 = G__23342;
continue;
} else {
var vec__23322_23343 = cljs.core.first.call(null,seq__23309_23337__$1);
var name_23344 = cljs.core.nth.call(null,vec__23322_23343,(0),null);
var value_23345 = cljs.core.nth.call(null,vec__23322_23343,(1),null);
domina.set_attr_BANG_.call(null,content,name_23344,value_23345);


var G__23346 = cljs.core.next.call(null,seq__23309_23337__$1);
var G__23347 = null;
var G__23348 = (0);
var G__23349 = (0);
seq__23309_23325 = G__23346;
chunk__23310_23326 = G__23347;
count__23311_23327 = G__23348;
i__23312_23328 = G__23349;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__23350_23354 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23351_23355 = null;
var count__23352_23356 = (0);
var i__23353_23357 = (0);
while(true){
if((i__23353_23357 < count__23352_23356)){
var node_23358 = cljs.core._nth.call(null,chunk__23351_23355,i__23353_23357);
goog.dom.classes.add(node_23358,class$);


var G__23359 = seq__23350_23354;
var G__23360 = chunk__23351_23355;
var G__23361 = count__23352_23356;
var G__23362 = (i__23353_23357 + (1));
seq__23350_23354 = G__23359;
chunk__23351_23355 = G__23360;
count__23352_23356 = G__23361;
i__23353_23357 = G__23362;
continue;
} else {
var temp__5720__auto___23363 = cljs.core.seq.call(null,seq__23350_23354);
if(temp__5720__auto___23363){
var seq__23350_23364__$1 = temp__5720__auto___23363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23350_23364__$1)){
var c__4550__auto___23365 = cljs.core.chunk_first.call(null,seq__23350_23364__$1);
var G__23366 = cljs.core.chunk_rest.call(null,seq__23350_23364__$1);
var G__23367 = c__4550__auto___23365;
var G__23368 = cljs.core.count.call(null,c__4550__auto___23365);
var G__23369 = (0);
seq__23350_23354 = G__23366;
chunk__23351_23355 = G__23367;
count__23352_23356 = G__23368;
i__23353_23357 = G__23369;
continue;
} else {
var node_23370 = cljs.core.first.call(null,seq__23350_23364__$1);
goog.dom.classes.add(node_23370,class$);


var G__23371 = cljs.core.next.call(null,seq__23350_23364__$1);
var G__23372 = null;
var G__23373 = (0);
var G__23374 = (0);
seq__23350_23354 = G__23371;
chunk__23351_23355 = G__23372;
count__23352_23356 = G__23373;
i__23353_23357 = G__23374;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__23375_23379 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23376_23380 = null;
var count__23377_23381 = (0);
var i__23378_23382 = (0);
while(true){
if((i__23378_23382 < count__23377_23381)){
var node_23383 = cljs.core._nth.call(null,chunk__23376_23380,i__23378_23382);
goog.dom.classes.remove(node_23383,class$);


var G__23384 = seq__23375_23379;
var G__23385 = chunk__23376_23380;
var G__23386 = count__23377_23381;
var G__23387 = (i__23378_23382 + (1));
seq__23375_23379 = G__23384;
chunk__23376_23380 = G__23385;
count__23377_23381 = G__23386;
i__23378_23382 = G__23387;
continue;
} else {
var temp__5720__auto___23388 = cljs.core.seq.call(null,seq__23375_23379);
if(temp__5720__auto___23388){
var seq__23375_23389__$1 = temp__5720__auto___23388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23375_23389__$1)){
var c__4550__auto___23390 = cljs.core.chunk_first.call(null,seq__23375_23389__$1);
var G__23391 = cljs.core.chunk_rest.call(null,seq__23375_23389__$1);
var G__23392 = c__4550__auto___23390;
var G__23393 = cljs.core.count.call(null,c__4550__auto___23390);
var G__23394 = (0);
seq__23375_23379 = G__23391;
chunk__23376_23380 = G__23392;
count__23377_23381 = G__23393;
i__23378_23382 = G__23394;
continue;
} else {
var node_23395 = cljs.core.first.call(null,seq__23375_23389__$1);
goog.dom.classes.remove(node_23395,class$);


var G__23396 = cljs.core.next.call(null,seq__23375_23389__$1);
var G__23397 = null;
var G__23398 = (0);
var G__23399 = (0);
seq__23375_23379 = G__23396;
chunk__23376_23380 = G__23397;
count__23377_23381 = G__23398;
i__23378_23382 = G__23399;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__23400_23404 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23401_23405 = null;
var count__23402_23406 = (0);
var i__23403_23407 = (0);
while(true){
if((i__23403_23407 < count__23402_23406)){
var node_23408 = cljs.core._nth.call(null,chunk__23401_23405,i__23403_23407);
goog.dom.classes.toggle(node_23408,class$);


var G__23409 = seq__23400_23404;
var G__23410 = chunk__23401_23405;
var G__23411 = count__23402_23406;
var G__23412 = (i__23403_23407 + (1));
seq__23400_23404 = G__23409;
chunk__23401_23405 = G__23410;
count__23402_23406 = G__23411;
i__23403_23407 = G__23412;
continue;
} else {
var temp__5720__auto___23413 = cljs.core.seq.call(null,seq__23400_23404);
if(temp__5720__auto___23413){
var seq__23400_23414__$1 = temp__5720__auto___23413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23400_23414__$1)){
var c__4550__auto___23415 = cljs.core.chunk_first.call(null,seq__23400_23414__$1);
var G__23416 = cljs.core.chunk_rest.call(null,seq__23400_23414__$1);
var G__23417 = c__4550__auto___23415;
var G__23418 = cljs.core.count.call(null,c__4550__auto___23415);
var G__23419 = (0);
seq__23400_23404 = G__23416;
chunk__23401_23405 = G__23417;
count__23402_23406 = G__23418;
i__23403_23407 = G__23419;
continue;
} else {
var node_23420 = cljs.core.first.call(null,seq__23400_23414__$1);
goog.dom.classes.toggle(node_23420,class$);


var G__23421 = cljs.core.next.call(null,seq__23400_23414__$1);
var G__23422 = null;
var G__23423 = (0);
var G__23424 = (0);
seq__23400_23404 = G__23421;
chunk__23401_23405 = G__23422;
count__23402_23406 = G__23423;
i__23403_23407 = G__23424;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_23429__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__23425_23430 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23426_23431 = null;
var count__23427_23432 = (0);
var i__23428_23433 = (0);
while(true){
if((i__23428_23433 < count__23427_23432)){
var node_23434 = cljs.core._nth.call(null,chunk__23426_23431,i__23428_23433);
goog.dom.classes.set(node_23434,classes_23429__$1);


var G__23435 = seq__23425_23430;
var G__23436 = chunk__23426_23431;
var G__23437 = count__23427_23432;
var G__23438 = (i__23428_23433 + (1));
seq__23425_23430 = G__23435;
chunk__23426_23431 = G__23436;
count__23427_23432 = G__23437;
i__23428_23433 = G__23438;
continue;
} else {
var temp__5720__auto___23439 = cljs.core.seq.call(null,seq__23425_23430);
if(temp__5720__auto___23439){
var seq__23425_23440__$1 = temp__5720__auto___23439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23425_23440__$1)){
var c__4550__auto___23441 = cljs.core.chunk_first.call(null,seq__23425_23440__$1);
var G__23442 = cljs.core.chunk_rest.call(null,seq__23425_23440__$1);
var G__23443 = c__4550__auto___23441;
var G__23444 = cljs.core.count.call(null,c__4550__auto___23441);
var G__23445 = (0);
seq__23425_23430 = G__23442;
chunk__23426_23431 = G__23443;
count__23427_23432 = G__23444;
i__23428_23433 = G__23445;
continue;
} else {
var node_23446 = cljs.core.first.call(null,seq__23425_23440__$1);
goog.dom.classes.set(node_23446,classes_23429__$1);


var G__23447 = cljs.core.next.call(null,seq__23425_23440__$1);
var G__23448 = null;
var G__23449 = (0);
var G__23450 = (0);
seq__23425_23430 = G__23447;
chunk__23426_23431 = G__23448;
count__23427_23432 = G__23449;
i__23428_23433 = G__23450;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__23451_23455 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23452_23456 = null;
var count__23453_23457 = (0);
var i__23454_23458 = (0);
while(true){
if((i__23454_23458 < count__23453_23457)){
var node_23459 = cljs.core._nth.call(null,chunk__23452_23456,i__23454_23458);
goog.dom.setTextContent(node_23459,value);


var G__23460 = seq__23451_23455;
var G__23461 = chunk__23452_23456;
var G__23462 = count__23453_23457;
var G__23463 = (i__23454_23458 + (1));
seq__23451_23455 = G__23460;
chunk__23452_23456 = G__23461;
count__23453_23457 = G__23462;
i__23454_23458 = G__23463;
continue;
} else {
var temp__5720__auto___23464 = cljs.core.seq.call(null,seq__23451_23455);
if(temp__5720__auto___23464){
var seq__23451_23465__$1 = temp__5720__auto___23464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23451_23465__$1)){
var c__4550__auto___23466 = cljs.core.chunk_first.call(null,seq__23451_23465__$1);
var G__23467 = cljs.core.chunk_rest.call(null,seq__23451_23465__$1);
var G__23468 = c__4550__auto___23466;
var G__23469 = cljs.core.count.call(null,c__4550__auto___23466);
var G__23470 = (0);
seq__23451_23455 = G__23467;
chunk__23452_23456 = G__23468;
count__23453_23457 = G__23469;
i__23454_23458 = G__23470;
continue;
} else {
var node_23471 = cljs.core.first.call(null,seq__23451_23465__$1);
goog.dom.setTextContent(node_23471,value);


var G__23472 = cljs.core.next.call(null,seq__23451_23465__$1);
var G__23473 = null;
var G__23474 = (0);
var G__23475 = (0);
seq__23451_23455 = G__23472;
chunk__23452_23456 = G__23473;
count__23453_23457 = G__23474;
i__23454_23458 = G__23475;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__23476_23480 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23477_23481 = null;
var count__23478_23482 = (0);
var i__23479_23483 = (0);
while(true){
if((i__23479_23483 < count__23478_23482)){
var node_23484 = cljs.core._nth.call(null,chunk__23477_23481,i__23479_23483);
goog.dom.forms.setValue(node_23484,value);


var G__23485 = seq__23476_23480;
var G__23486 = chunk__23477_23481;
var G__23487 = count__23478_23482;
var G__23488 = (i__23479_23483 + (1));
seq__23476_23480 = G__23485;
chunk__23477_23481 = G__23486;
count__23478_23482 = G__23487;
i__23479_23483 = G__23488;
continue;
} else {
var temp__5720__auto___23489 = cljs.core.seq.call(null,seq__23476_23480);
if(temp__5720__auto___23489){
var seq__23476_23490__$1 = temp__5720__auto___23489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23476_23490__$1)){
var c__4550__auto___23491 = cljs.core.chunk_first.call(null,seq__23476_23490__$1);
var G__23492 = cljs.core.chunk_rest.call(null,seq__23476_23490__$1);
var G__23493 = c__4550__auto___23491;
var G__23494 = cljs.core.count.call(null,c__4550__auto___23491);
var G__23495 = (0);
seq__23476_23480 = G__23492;
chunk__23477_23481 = G__23493;
count__23478_23482 = G__23494;
i__23479_23483 = G__23495;
continue;
} else {
var node_23496 = cljs.core.first.call(null,seq__23476_23490__$1);
goog.dom.forms.setValue(node_23496,value);


var G__23497 = cljs.core.next.call(null,seq__23476_23490__$1);
var G__23498 = null;
var G__23499 = (0);
var G__23500 = (0);
seq__23476_23480 = G__23497;
chunk__23477_23481 = G__23498;
count__23478_23482 = G__23499;
i__23479_23483 = G__23500;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(((allows_inner_html_QMARK_) && (((domina.support.leading_whitespace_QMARK_) || (cljs.core.not.call(null,leading_whitespace_QMARK_)))) && ((!(special_tag_QMARK_))))){
var value_23506 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__23502_23507 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23503_23508 = null;
var count__23504_23509 = (0);
var i__23505_23510 = (0);
while(true){
if((i__23505_23510 < count__23504_23509)){
var node_23511 = cljs.core._nth.call(null,chunk__23503_23508,i__23505_23510);
node_23511.innerHTML = value_23506;


var G__23512 = seq__23502_23507;
var G__23513 = chunk__23503_23508;
var G__23514 = count__23504_23509;
var G__23515 = (i__23505_23510 + (1));
seq__23502_23507 = G__23512;
chunk__23503_23508 = G__23513;
count__23504_23509 = G__23514;
i__23505_23510 = G__23515;
continue;
} else {
var temp__5720__auto___23516 = cljs.core.seq.call(null,seq__23502_23507);
if(temp__5720__auto___23516){
var seq__23502_23517__$1 = temp__5720__auto___23516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23502_23517__$1)){
var c__4550__auto___23518 = cljs.core.chunk_first.call(null,seq__23502_23517__$1);
var G__23519 = cljs.core.chunk_rest.call(null,seq__23502_23517__$1);
var G__23520 = c__4550__auto___23518;
var G__23521 = cljs.core.count.call(null,c__4550__auto___23518);
var G__23522 = (0);
seq__23502_23507 = G__23519;
chunk__23503_23508 = G__23520;
count__23504_23509 = G__23521;
i__23505_23510 = G__23522;
continue;
} else {
var node_23523 = cljs.core.first.call(null,seq__23502_23517__$1);
node_23523.innerHTML = value_23506;


var G__23524 = cljs.core.next.call(null,seq__23502_23517__$1);
var G__23525 = null;
var G__23526 = (0);
var G__23527 = (0);
seq__23502_23507 = G__23524;
chunk__23503_23508 = G__23525;
count__23504_23509 = G__23526;
i__23505_23510 = G__23527;
continue;
}
} else {
}
}
break;
}
}catch (e23501){if((e23501 instanceof Error)){
var e_23528 = e23501;
domina.replace_children_BANG_.call(null,content,value_23506);
} else {
throw e23501;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var G__23530 = arguments.length;
switch (G__23530) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__4120__auto__ = bubble;
if(cljs.core.truth_(and__4120__auto__)){
return (value == null);
} else {
return and__4120__auto__;
}
})())){
var temp__5720__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__4131__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__23534_23538 = cljs.core.seq.call(null,children);
var chunk__23535_23539 = null;
var count__23536_23540 = (0);
var i__23537_23541 = (0);
while(true){
if((i__23537_23541 < count__23536_23540)){
var child_23542 = cljs.core._nth.call(null,chunk__23535_23539,i__23537_23541);
frag.appendChild(child_23542);


var G__23543 = seq__23534_23538;
var G__23544 = chunk__23535_23539;
var G__23545 = count__23536_23540;
var G__23546 = (i__23537_23541 + (1));
seq__23534_23538 = G__23543;
chunk__23535_23539 = G__23544;
count__23536_23540 = G__23545;
i__23537_23541 = G__23546;
continue;
} else {
var temp__5720__auto___23547 = cljs.core.seq.call(null,seq__23534_23538);
if(temp__5720__auto___23547){
var seq__23534_23548__$1 = temp__5720__auto___23547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23534_23548__$1)){
var c__4550__auto___23549 = cljs.core.chunk_first.call(null,seq__23534_23548__$1);
var G__23550 = cljs.core.chunk_rest.call(null,seq__23534_23548__$1);
var G__23551 = c__4550__auto___23549;
var G__23552 = cljs.core.count.call(null,c__4550__auto___23549);
var G__23553 = (0);
seq__23534_23538 = G__23550;
chunk__23535_23539 = G__23551;
count__23536_23540 = G__23552;
i__23537_23541 = G__23553;
continue;
} else {
var child_23554 = cljs.core.first.call(null,seq__23534_23548__$1);
frag.appendChild(child_23554);


var G__23555 = cljs.core.next.call(null,seq__23534_23548__$1);
var G__23556 = null;
var G__23557 = (0);
var G__23558 = (0);
seq__23534_23538 = G__23555;
chunk__23535_23539 = G__23556;
count__23536_23540 = G__23557;
i__23537_23541 = G__23558;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__23532_SHARP_,p2__23533_SHARP_){
return f.call(null,p1__23532_SHARP_,p2__23533_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__23560 = arguments.length;
switch (G__23560) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;

domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var G__23563 = arguments.length;
switch (G__23563) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__4120__auto__ = obj;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__4120__auto____$1){
return obj.length;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((((!((list_thing == null))))?(((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$))))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
goog.object.set(domina.DomContent,"string",true);

goog.object.set(domina.nodes,"string",(function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

goog.object.set(domina.single_node,"string",(function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

goog.object.set(domina.DomContent,"_",true);

goog.object.set(domina.nodes,"_",(function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((((!((content == null))))?(((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$))))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

goog.object.set(domina.single_node,"_",(function (content){
if((content == null)){
return null;
} else {
if((((!((content == null))))?(((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$))))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=domina.js.map?rel=1568085253182
