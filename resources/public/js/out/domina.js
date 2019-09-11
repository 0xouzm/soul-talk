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
var opt_wrapper_25985 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_25986 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_25987 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_25987,opt_wrapper_25985,table_section_wrapper_25986,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_25985,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_25986,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_25986,cell_wrapper_25987,table_section_wrapper_25986,table_section_wrapper_25986]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__4120__auto__ = div.firstChild;
if(cljs.core.truth_(and__4120__auto__)){
return div.firstChild.childNodes;
} else {
return and__4120__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__25988 = cljs.core.seq.call(null,tbody);
var chunk__25989 = null;
var count__25990 = (0);
var i__25991 = (0);
while(true){
if((i__25991 < count__25990)){
var child = cljs.core._nth.call(null,chunk__25989,i__25991);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__25992 = seq__25988;
var G__25993 = chunk__25989;
var G__25994 = count__25990;
var G__25995 = (i__25991 + (1));
seq__25988 = G__25992;
chunk__25989 = G__25993;
count__25990 = G__25994;
i__25991 = G__25995;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25988);
if(temp__5720__auto__){
var seq__25988__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25988__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25988__$1);
var G__25996 = cljs.core.chunk_rest.call(null,seq__25988__$1);
var G__25997 = c__4550__auto__;
var G__25998 = cljs.core.count.call(null,c__4550__auto__);
var G__25999 = (0);
seq__25988 = G__25996;
chunk__25989 = G__25997;
count__25990 = G__25998;
i__25991 = G__25999;
continue;
} else {
var child = cljs.core.first.call(null,seq__25988__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__26000 = cljs.core.next.call(null,seq__25988__$1);
var G__26001 = null;
var G__26002 = (0);
var G__26003 = (0);
seq__25988 = G__26000;
chunk__25989 = G__26001;
count__25990 = G__26002;
i__25991 = G__26003;
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
var vec__26004 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__26004,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__26004,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__26004,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__26007 = wrapper.lastChild;
var G__26008 = (level - (1));
wrapper = G__26007;
level = G__26008;
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
var len__4730__auto___26010 = arguments.length;
var i__4731__auto___26011 = (0);
while(true){
if((i__4731__auto___26011 < len__4730__auto___26010)){
args__4736__auto__.push((arguments[i__4731__auto___26011]));

var G__26012 = (i__4731__auto___26011 + (1));
i__4731__auto___26011 = G__26012;
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
domina.log_debug.cljs$lang$applyTo = (function (seq26009){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26009));
});

domina.log = (function domina$log(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26014 = arguments.length;
var i__4731__auto___26015 = (0);
while(true){
if((i__4731__auto___26015 < len__4730__auto___26014)){
args__4736__auto__.push((arguments[i__4731__auto___26015]));

var G__26016 = (i__4731__auto___26015 + (1));
i__4731__auto___26015 = G__26016;
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
domina.log.cljs$lang$applyTo = (function (seq26013){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26013));
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
var len__4730__auto___26018 = arguments.length;
var i__4731__auto___26019 = (0);
while(true){
if((i__4731__auto___26019 < len__4730__auto___26018)){
args__4736__auto__.push((arguments[i__4731__auto___26019]));

var G__26020 = (i__4731__auto___26019 + (1));
i__4731__auto___26019 = G__26020;
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
domina.common_ancestor.cljs$lang$applyTo = (function (seq26017){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26017));
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
return cljs.core.map.call(null,(function (p1__26021_SHARP_){
return p1__26021_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__26022_SHARP_,p2__26023_SHARP_){
return goog.dom.insertChildAt(p1__26022_SHARP_,p2__26023_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__26025_SHARP_,p2__26024_SHARP_){
return goog.dom.insertSiblingBefore(p2__26024_SHARP_,p1__26025_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__26027_SHARP_,p2__26026_SHARP_){
return goog.dom.insertSiblingAfter(p2__26026_SHARP_,p1__26027_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__26029_SHARP_,p2__26028_SHARP_){
return goog.dom.replaceNode(p2__26028_SHARP_,p1__26029_SHARP_);
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
var len__4730__auto___26037 = arguments.length;
var i__4731__auto___26038 = (0);
while(true){
if((i__4731__auto___26038 < len__4730__auto___26037)){
args__4736__auto__.push((arguments[i__4731__auto___26038]));

var G__26039 = (i__4731__auto___26038 + (1));
i__4731__auto___26038 = G__26039;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__26033_26040 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__26034_26041 = null;
var count__26035_26042 = (0);
var i__26036_26043 = (0);
while(true){
if((i__26036_26043 < count__26035_26042)){
var n_26044 = cljs.core._nth.call(null,chunk__26034_26041,i__26036_26043);
goog.style.setStyle(n_26044,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__26045 = seq__26033_26040;
var G__26046 = chunk__26034_26041;
var G__26047 = count__26035_26042;
var G__26048 = (i__26036_26043 + (1));
seq__26033_26040 = G__26045;
chunk__26034_26041 = G__26046;
count__26035_26042 = G__26047;
i__26036_26043 = G__26048;
continue;
} else {
var temp__5720__auto___26049 = cljs.core.seq.call(null,seq__26033_26040);
if(temp__5720__auto___26049){
var seq__26033_26050__$1 = temp__5720__auto___26049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26033_26050__$1)){
var c__4550__auto___26051 = cljs.core.chunk_first.call(null,seq__26033_26050__$1);
var G__26052 = cljs.core.chunk_rest.call(null,seq__26033_26050__$1);
var G__26053 = c__4550__auto___26051;
var G__26054 = cljs.core.count.call(null,c__4550__auto___26051);
var G__26055 = (0);
seq__26033_26040 = G__26052;
chunk__26034_26041 = G__26053;
count__26035_26042 = G__26054;
i__26036_26043 = G__26055;
continue;
} else {
var n_26056 = cljs.core.first.call(null,seq__26033_26050__$1);
goog.style.setStyle(n_26056,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__26057 = cljs.core.next.call(null,seq__26033_26050__$1);
var G__26058 = null;
var G__26059 = (0);
var G__26060 = (0);
seq__26033_26040 = G__26057;
chunk__26034_26041 = G__26058;
count__26035_26042 = G__26059;
i__26036_26043 = G__26060;
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
domina.set_style_BANG_.cljs$lang$applyTo = (function (seq26030){
var G__26031 = cljs.core.first.call(null,seq26030);
var seq26030__$1 = cljs.core.next.call(null,seq26030);
var G__26032 = cljs.core.first.call(null,seq26030__$1);
var seq26030__$2 = cljs.core.next.call(null,seq26030__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26031,G__26032,seq26030__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26068 = arguments.length;
var i__4731__auto___26069 = (0);
while(true){
if((i__4731__auto___26069 < len__4730__auto___26068)){
args__4736__auto__.push((arguments[i__4731__auto___26069]));

var G__26070 = (i__4731__auto___26069 + (1));
i__4731__auto___26069 = G__26070;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__26064_26071 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__26065_26072 = null;
var count__26066_26073 = (0);
var i__26067_26074 = (0);
while(true){
if((i__26067_26074 < count__26066_26073)){
var n_26075 = cljs.core._nth.call(null,chunk__26065_26072,i__26067_26074);
n_26075.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__26076 = seq__26064_26071;
var G__26077 = chunk__26065_26072;
var G__26078 = count__26066_26073;
var G__26079 = (i__26067_26074 + (1));
seq__26064_26071 = G__26076;
chunk__26065_26072 = G__26077;
count__26066_26073 = G__26078;
i__26067_26074 = G__26079;
continue;
} else {
var temp__5720__auto___26080 = cljs.core.seq.call(null,seq__26064_26071);
if(temp__5720__auto___26080){
var seq__26064_26081__$1 = temp__5720__auto___26080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26064_26081__$1)){
var c__4550__auto___26082 = cljs.core.chunk_first.call(null,seq__26064_26081__$1);
var G__26083 = cljs.core.chunk_rest.call(null,seq__26064_26081__$1);
var G__26084 = c__4550__auto___26082;
var G__26085 = cljs.core.count.call(null,c__4550__auto___26082);
var G__26086 = (0);
seq__26064_26071 = G__26083;
chunk__26065_26072 = G__26084;
count__26066_26073 = G__26085;
i__26067_26074 = G__26086;
continue;
} else {
var n_26087 = cljs.core.first.call(null,seq__26064_26081__$1);
n_26087.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__26088 = cljs.core.next.call(null,seq__26064_26081__$1);
var G__26089 = null;
var G__26090 = (0);
var G__26091 = (0);
seq__26064_26071 = G__26088;
chunk__26065_26072 = G__26089;
count__26066_26073 = G__26090;
i__26067_26074 = G__26091;
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
domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq26061){
var G__26062 = cljs.core.first.call(null,seq26061);
var seq26061__$1 = cljs.core.next.call(null,seq26061);
var G__26063 = cljs.core.first.call(null,seq26061__$1);
var seq26061__$2 = cljs.core.next.call(null,seq26061__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26062,G__26063,seq26061__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__26092_26096 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__26093_26097 = null;
var count__26094_26098 = (0);
var i__26095_26099 = (0);
while(true){
if((i__26095_26099 < count__26094_26098)){
var n_26100 = cljs.core._nth.call(null,chunk__26093_26097,i__26095_26099);
n_26100.removeAttribute(cljs.core.name.call(null,name));


var G__26101 = seq__26092_26096;
var G__26102 = chunk__26093_26097;
var G__26103 = count__26094_26098;
var G__26104 = (i__26095_26099 + (1));
seq__26092_26096 = G__26101;
chunk__26093_26097 = G__26102;
count__26094_26098 = G__26103;
i__26095_26099 = G__26104;
continue;
} else {
var temp__5720__auto___26105 = cljs.core.seq.call(null,seq__26092_26096);
if(temp__5720__auto___26105){
var seq__26092_26106__$1 = temp__5720__auto___26105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26092_26106__$1)){
var c__4550__auto___26107 = cljs.core.chunk_first.call(null,seq__26092_26106__$1);
var G__26108 = cljs.core.chunk_rest.call(null,seq__26092_26106__$1);
var G__26109 = c__4550__auto___26107;
var G__26110 = cljs.core.count.call(null,c__4550__auto___26107);
var G__26111 = (0);
seq__26092_26096 = G__26108;
chunk__26093_26097 = G__26109;
count__26094_26098 = G__26110;
i__26095_26099 = G__26111;
continue;
} else {
var n_26112 = cljs.core.first.call(null,seq__26092_26106__$1);
n_26112.removeAttribute(cljs.core.name.call(null,name));


var G__26113 = cljs.core.next.call(null,seq__26092_26106__$1);
var G__26114 = null;
var G__26115 = (0);
var G__26116 = (0);
seq__26092_26096 = G__26113;
chunk__26093_26097 = G__26114;
count__26094_26098 = G__26115;
i__26095_26099 = G__26116;
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
var vec__26117 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__26117,(0),null);
var v = cljs.core.nth.call(null,vec__26117,(1),null);
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
return (function (p1__26120_SHARP_){
var attr = attrs.item(p1__26120_SHARP_);
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
var seq__26121_26137 = cljs.core.seq.call(null,styles);
var chunk__26122_26138 = null;
var count__26123_26139 = (0);
var i__26124_26140 = (0);
while(true){
if((i__26124_26140 < count__26123_26139)){
var vec__26131_26141 = cljs.core._nth.call(null,chunk__26122_26138,i__26124_26140);
var name_26142 = cljs.core.nth.call(null,vec__26131_26141,(0),null);
var value_26143 = cljs.core.nth.call(null,vec__26131_26141,(1),null);
domina.set_style_BANG_.call(null,content,name_26142,value_26143);


var G__26144 = seq__26121_26137;
var G__26145 = chunk__26122_26138;
var G__26146 = count__26123_26139;
var G__26147 = (i__26124_26140 + (1));
seq__26121_26137 = G__26144;
chunk__26122_26138 = G__26145;
count__26123_26139 = G__26146;
i__26124_26140 = G__26147;
continue;
} else {
var temp__5720__auto___26148 = cljs.core.seq.call(null,seq__26121_26137);
if(temp__5720__auto___26148){
var seq__26121_26149__$1 = temp__5720__auto___26148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26121_26149__$1)){
var c__4550__auto___26150 = cljs.core.chunk_first.call(null,seq__26121_26149__$1);
var G__26151 = cljs.core.chunk_rest.call(null,seq__26121_26149__$1);
var G__26152 = c__4550__auto___26150;
var G__26153 = cljs.core.count.call(null,c__4550__auto___26150);
var G__26154 = (0);
seq__26121_26137 = G__26151;
chunk__26122_26138 = G__26152;
count__26123_26139 = G__26153;
i__26124_26140 = G__26154;
continue;
} else {
var vec__26134_26155 = cljs.core.first.call(null,seq__26121_26149__$1);
var name_26156 = cljs.core.nth.call(null,vec__26134_26155,(0),null);
var value_26157 = cljs.core.nth.call(null,vec__26134_26155,(1),null);
domina.set_style_BANG_.call(null,content,name_26156,value_26157);


var G__26158 = cljs.core.next.call(null,seq__26121_26149__$1);
var G__26159 = null;
var G__26160 = (0);
var G__26161 = (0);
seq__26121_26137 = G__26158;
chunk__26122_26138 = G__26159;
count__26123_26139 = G__26160;
i__26124_26140 = G__26161;
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
var seq__26162_26178 = cljs.core.seq.call(null,attrs);
var chunk__26163_26179 = null;
var count__26164_26180 = (0);
var i__26165_26181 = (0);
while(true){
if((i__26165_26181 < count__26164_26180)){
var vec__26172_26182 = cljs.core._nth.call(null,chunk__26163_26179,i__26165_26181);
var name_26183 = cljs.core.nth.call(null,vec__26172_26182,(0),null);
var value_26184 = cljs.core.nth.call(null,vec__26172_26182,(1),null);
domina.set_attr_BANG_.call(null,content,name_26183,value_26184);


var G__26185 = seq__26162_26178;
var G__26186 = chunk__26163_26179;
var G__26187 = count__26164_26180;
var G__26188 = (i__26165_26181 + (1));
seq__26162_26178 = G__26185;
chunk__26163_26179 = G__26186;
count__26164_26180 = G__26187;
i__26165_26181 = G__26188;
continue;
} else {
var temp__5720__auto___26189 = cljs.core.seq.call(null,seq__26162_26178);
if(temp__5720__auto___26189){
var seq__26162_26190__$1 = temp__5720__auto___26189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26162_26190__$1)){
var c__4550__auto___26191 = cljs.core.chunk_first.call(null,seq__26162_26190__$1);
var G__26192 = cljs.core.chunk_rest.call(null,seq__26162_26190__$1);
var G__26193 = c__4550__auto___26191;
var G__26194 = cljs.core.count.call(null,c__4550__auto___26191);
var G__26195 = (0);
seq__26162_26178 = G__26192;
chunk__26163_26179 = G__26193;
count__26164_26180 = G__26194;
i__26165_26181 = G__26195;
continue;
} else {
var vec__26175_26196 = cljs.core.first.call(null,seq__26162_26190__$1);
var name_26197 = cljs.core.nth.call(null,vec__26175_26196,(0),null);
var value_26198 = cljs.core.nth.call(null,vec__26175_26196,(1),null);
domina.set_attr_BANG_.call(null,content,name_26197,value_26198);


var G__26199 = cljs.core.next.call(null,seq__26162_26190__$1);
var G__26200 = null;
var G__26201 = (0);
var G__26202 = (0);
seq__26162_26178 = G__26199;
chunk__26163_26179 = G__26200;
count__26164_26180 = G__26201;
i__26165_26181 = G__26202;
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
var seq__26203_26207 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__26204_26208 = null;
var count__26205_26209 = (0);
var i__26206_26210 = (0);
while(true){
if((i__26206_26210 < count__26205_26209)){
var node_26211 = cljs.core._nth.call(null,chunk__26204_26208,i__26206_26210);
goog.dom.classes.add(node_26211,class$);


var G__26212 = seq__26203_26207;
var G__26213 = chunk__26204_26208;
var G__26214 = count__26205_26209;
var G__26215 = (i__26206_26210 + (1));
seq__26203_26207 = G__26212;
chunk__26204_26208 = G__26213;
count__26205_26209 = G__26214;
i__26206_26210 = G__26215;
continue;
} else {
var temp__5720__auto___26216 = cljs.core.seq.call(null,seq__26203_26207);
if(temp__5720__auto___26216){
var seq__26203_26217__$1 = temp__5720__auto___26216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26203_26217__$1)){
var c__4550__auto___26218 = cljs.core.chunk_first.call(null,seq__26203_26217__$1);
var G__26219 = cljs.core.chunk_rest.call(null,seq__26203_26217__$1);
var G__26220 = c__4550__auto___26218;
var G__26221 = cljs.core.count.call(null,c__4550__auto___26218);
var G__26222 = (0);
seq__26203_26207 = G__26219;
chunk__26204_26208 = G__26220;
count__26205_26209 = G__26221;
i__26206_26210 = G__26222;
continue;
} else {
var node_26223 = cljs.core.first.call(null,seq__26203_26217__$1);
goog.dom.classes.add(node_26223,class$);


var G__26224 = cljs.core.next.call(null,seq__26203_26217__$1);
var G__26225 = null;
var G__26226 = (0);
var G__26227 = (0);
seq__26203_26207 = G__26224;
chunk__26204_26208 = G__26225;
count__26205_26209 = G__26226;
i__26206_26210 = G__26227;
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
var seq__26228_26232 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__26229_26233 = null;
var count__26230_26234 = (0);
var i__26231_26235 = (0);
while(true){
if((i__26231_26235 < count__26230_26234)){
var node_26236 = cljs.core._nth.call(null,chunk__26229_26233,i__26231_26235);
goog.dom.classes.remove(node_26236,class$);


var G__26237 = seq__26228_26232;
var G__26238 = chunk__26229_26233;
var G__26239 = count__26230_26234;
var G__26240 = (i__26231_26235 + (1));
seq__26228_26232 = G__26237;
chunk__26229_26233 = G__26238;
count__26230_26234 = G__26239;
i__26231_26235 = G__26240;
continue;
} else {
var temp__5720__auto___26241 = cljs.core.seq.call(null,seq__26228_26232);
if(temp__5720__auto___26241){
var seq__26228_26242__$1 = temp__5720__auto___26241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26228_26242__$1)){
var c__4550__auto___26243 = cljs.core.chunk_first.call(null,seq__26228_26242__$1);
var G__26244 = cljs.core.chunk_rest.call(null,seq__26228_26242__$1);
var G__26245 = c__4550__auto___26243;
var G__26246 = cljs.core.count.call(null,c__4550__auto___26243);
var G__26247 = (0);
seq__26228_26232 = G__26244;
chunk__26229_26233 = G__26245;
count__26230_26234 = G__26246;
i__26231_26235 = G__26247;
continue;
} else {
var node_26248 = cljs.core.first.call(null,seq__26228_26242__$1);
goog.dom.classes.remove(node_26248,class$);


var G__26249 = cljs.core.next.call(null,seq__26228_26242__$1);
var G__26250 = null;
var G__26251 = (0);
var G__26252 = (0);
seq__26228_26232 = G__26249;
chunk__26229_26233 = G__26250;
count__26230_26234 = G__26251;
i__26231_26235 = G__26252;
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
var seq__26253_26257 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__26254_26258 = null;
var count__26255_26259 = (0);
var i__26256_26260 = (0);
while(true){
if((i__26256_26260 < count__26255_26259)){
var node_26261 = cljs.core._nth.call(null,chunk__26254_26258,i__26256_26260);
goog.dom.classes.toggle(node_26261,class$);


var G__26262 = seq__26253_26257;
var G__26263 = chunk__26254_26258;
var G__26264 = count__26255_26259;
var G__26265 = (i__26256_26260 + (1));
seq__26253_26257 = G__26262;
chunk__26254_26258 = G__26263;
count__26255_26259 = G__26264;
i__26256_26260 = G__26265;
continue;
} else {
var temp__5720__auto___26266 = cljs.core.seq.call(null,seq__26253_26257);
if(temp__5720__auto___26266){
var seq__26253_26267__$1 = temp__5720__auto___26266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26253_26267__$1)){
var c__4550__auto___26268 = cljs.core.chunk_first.call(null,seq__26253_26267__$1);
var G__26269 = cljs.core.chunk_rest.call(null,seq__26253_26267__$1);
var G__26270 = c__4550__auto___26268;
var G__26271 = cljs.core.count.call(null,c__4550__auto___26268);
var G__26272 = (0);
seq__26253_26257 = G__26269;
chunk__26254_26258 = G__26270;
count__26255_26259 = G__26271;
i__26256_26260 = G__26272;
continue;
} else {
var node_26273 = cljs.core.first.call(null,seq__26253_26267__$1);
goog.dom.classes.toggle(node_26273,class$);


var G__26274 = cljs.core.next.call(null,seq__26253_26267__$1);
var G__26275 = null;
var G__26276 = (0);
var G__26277 = (0);
seq__26253_26257 = G__26274;
chunk__26254_26258 = G__26275;
count__26255_26259 = G__26276;
i__26256_26260 = G__26277;
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
var classes_26282__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__26278_26283 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__26279_26284 = null;
var count__26280_26285 = (0);
var i__26281_26286 = (0);
while(true){
if((i__26281_26286 < count__26280_26285)){
var node_26287 = cljs.core._nth.call(null,chunk__26279_26284,i__26281_26286);
goog.dom.classes.set(node_26287,classes_26282__$1);


var G__26288 = seq__26278_26283;
var G__26289 = chunk__26279_26284;
var G__26290 = count__26280_26285;
var G__26291 = (i__26281_26286 + (1));
seq__26278_26283 = G__26288;
chunk__26279_26284 = G__26289;
count__26280_26285 = G__26290;
i__26281_26286 = G__26291;
continue;
} else {
var temp__5720__auto___26292 = cljs.core.seq.call(null,seq__26278_26283);
if(temp__5720__auto___26292){
var seq__26278_26293__$1 = temp__5720__auto___26292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26278_26293__$1)){
var c__4550__auto___26294 = cljs.core.chunk_first.call(null,seq__26278_26293__$1);
var G__26295 = cljs.core.chunk_rest.call(null,seq__26278_26293__$1);
var G__26296 = c__4550__auto___26294;
var G__26297 = cljs.core.count.call(null,c__4550__auto___26294);
var G__26298 = (0);
seq__26278_26283 = G__26295;
chunk__26279_26284 = G__26296;
count__26280_26285 = G__26297;
i__26281_26286 = G__26298;
continue;
} else {
var node_26299 = cljs.core.first.call(null,seq__26278_26293__$1);
goog.dom.classes.set(node_26299,classes_26282__$1);


var G__26300 = cljs.core.next.call(null,seq__26278_26293__$1);
var G__26301 = null;
var G__26302 = (0);
var G__26303 = (0);
seq__26278_26283 = G__26300;
chunk__26279_26284 = G__26301;
count__26280_26285 = G__26302;
i__26281_26286 = G__26303;
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
var seq__26304_26308 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__26305_26309 = null;
var count__26306_26310 = (0);
var i__26307_26311 = (0);
while(true){
if((i__26307_26311 < count__26306_26310)){
var node_26312 = cljs.core._nth.call(null,chunk__26305_26309,i__26307_26311);
goog.dom.setTextContent(node_26312,value);


var G__26313 = seq__26304_26308;
var G__26314 = chunk__26305_26309;
var G__26315 = count__26306_26310;
var G__26316 = (i__26307_26311 + (1));
seq__26304_26308 = G__26313;
chunk__26305_26309 = G__26314;
count__26306_26310 = G__26315;
i__26307_26311 = G__26316;
continue;
} else {
var temp__5720__auto___26317 = cljs.core.seq.call(null,seq__26304_26308);
if(temp__5720__auto___26317){
var seq__26304_26318__$1 = temp__5720__auto___26317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26304_26318__$1)){
var c__4550__auto___26319 = cljs.core.chunk_first.call(null,seq__26304_26318__$1);
var G__26320 = cljs.core.chunk_rest.call(null,seq__26304_26318__$1);
var G__26321 = c__4550__auto___26319;
var G__26322 = cljs.core.count.call(null,c__4550__auto___26319);
var G__26323 = (0);
seq__26304_26308 = G__26320;
chunk__26305_26309 = G__26321;
count__26306_26310 = G__26322;
i__26307_26311 = G__26323;
continue;
} else {
var node_26324 = cljs.core.first.call(null,seq__26304_26318__$1);
goog.dom.setTextContent(node_26324,value);


var G__26325 = cljs.core.next.call(null,seq__26304_26318__$1);
var G__26326 = null;
var G__26327 = (0);
var G__26328 = (0);
seq__26304_26308 = G__26325;
chunk__26305_26309 = G__26326;
count__26306_26310 = G__26327;
i__26307_26311 = G__26328;
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
var seq__26329_26333 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__26330_26334 = null;
var count__26331_26335 = (0);
var i__26332_26336 = (0);
while(true){
if((i__26332_26336 < count__26331_26335)){
var node_26337 = cljs.core._nth.call(null,chunk__26330_26334,i__26332_26336);
goog.dom.forms.setValue(node_26337,value);


var G__26338 = seq__26329_26333;
var G__26339 = chunk__26330_26334;
var G__26340 = count__26331_26335;
var G__26341 = (i__26332_26336 + (1));
seq__26329_26333 = G__26338;
chunk__26330_26334 = G__26339;
count__26331_26335 = G__26340;
i__26332_26336 = G__26341;
continue;
} else {
var temp__5720__auto___26342 = cljs.core.seq.call(null,seq__26329_26333);
if(temp__5720__auto___26342){
var seq__26329_26343__$1 = temp__5720__auto___26342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26329_26343__$1)){
var c__4550__auto___26344 = cljs.core.chunk_first.call(null,seq__26329_26343__$1);
var G__26345 = cljs.core.chunk_rest.call(null,seq__26329_26343__$1);
var G__26346 = c__4550__auto___26344;
var G__26347 = cljs.core.count.call(null,c__4550__auto___26344);
var G__26348 = (0);
seq__26329_26333 = G__26345;
chunk__26330_26334 = G__26346;
count__26331_26335 = G__26347;
i__26332_26336 = G__26348;
continue;
} else {
var node_26349 = cljs.core.first.call(null,seq__26329_26343__$1);
goog.dom.forms.setValue(node_26349,value);


var G__26350 = cljs.core.next.call(null,seq__26329_26343__$1);
var G__26351 = null;
var G__26352 = (0);
var G__26353 = (0);
seq__26329_26333 = G__26350;
chunk__26330_26334 = G__26351;
count__26331_26335 = G__26352;
i__26332_26336 = G__26353;
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
var value_26359 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__26355_26360 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__26356_26361 = null;
var count__26357_26362 = (0);
var i__26358_26363 = (0);
while(true){
if((i__26358_26363 < count__26357_26362)){
var node_26364 = cljs.core._nth.call(null,chunk__26356_26361,i__26358_26363);
node_26364.innerHTML = value_26359;


var G__26365 = seq__26355_26360;
var G__26366 = chunk__26356_26361;
var G__26367 = count__26357_26362;
var G__26368 = (i__26358_26363 + (1));
seq__26355_26360 = G__26365;
chunk__26356_26361 = G__26366;
count__26357_26362 = G__26367;
i__26358_26363 = G__26368;
continue;
} else {
var temp__5720__auto___26369 = cljs.core.seq.call(null,seq__26355_26360);
if(temp__5720__auto___26369){
var seq__26355_26370__$1 = temp__5720__auto___26369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26355_26370__$1)){
var c__4550__auto___26371 = cljs.core.chunk_first.call(null,seq__26355_26370__$1);
var G__26372 = cljs.core.chunk_rest.call(null,seq__26355_26370__$1);
var G__26373 = c__4550__auto___26371;
var G__26374 = cljs.core.count.call(null,c__4550__auto___26371);
var G__26375 = (0);
seq__26355_26360 = G__26372;
chunk__26356_26361 = G__26373;
count__26357_26362 = G__26374;
i__26358_26363 = G__26375;
continue;
} else {
var node_26376 = cljs.core.first.call(null,seq__26355_26370__$1);
node_26376.innerHTML = value_26359;


var G__26377 = cljs.core.next.call(null,seq__26355_26370__$1);
var G__26378 = null;
var G__26379 = (0);
var G__26380 = (0);
seq__26355_26360 = G__26377;
chunk__26356_26361 = G__26378;
count__26357_26362 = G__26379;
i__26358_26363 = G__26380;
continue;
}
} else {
}
}
break;
}
}catch (e26354){if((e26354 instanceof Error)){
var e_26381 = e26354;
domina.replace_children_BANG_.call(null,content,value_26359);
} else {
throw e26354;

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
var G__26383 = arguments.length;
switch (G__26383) {
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
var seq__26387_26391 = cljs.core.seq.call(null,children);
var chunk__26388_26392 = null;
var count__26389_26393 = (0);
var i__26390_26394 = (0);
while(true){
if((i__26390_26394 < count__26389_26393)){
var child_26395 = cljs.core._nth.call(null,chunk__26388_26392,i__26390_26394);
frag.appendChild(child_26395);


var G__26396 = seq__26387_26391;
var G__26397 = chunk__26388_26392;
var G__26398 = count__26389_26393;
var G__26399 = (i__26390_26394 + (1));
seq__26387_26391 = G__26396;
chunk__26388_26392 = G__26397;
count__26389_26393 = G__26398;
i__26390_26394 = G__26399;
continue;
} else {
var temp__5720__auto___26400 = cljs.core.seq.call(null,seq__26387_26391);
if(temp__5720__auto___26400){
var seq__26387_26401__$1 = temp__5720__auto___26400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26387_26401__$1)){
var c__4550__auto___26402 = cljs.core.chunk_first.call(null,seq__26387_26401__$1);
var G__26403 = cljs.core.chunk_rest.call(null,seq__26387_26401__$1);
var G__26404 = c__4550__auto___26402;
var G__26405 = cljs.core.count.call(null,c__4550__auto___26402);
var G__26406 = (0);
seq__26387_26391 = G__26403;
chunk__26388_26392 = G__26404;
count__26389_26393 = G__26405;
i__26390_26394 = G__26406;
continue;
} else {
var child_26407 = cljs.core.first.call(null,seq__26387_26401__$1);
frag.appendChild(child_26407);


var G__26408 = cljs.core.next.call(null,seq__26387_26401__$1);
var G__26409 = null;
var G__26410 = (0);
var G__26411 = (0);
seq__26387_26391 = G__26408;
chunk__26388_26392 = G__26409;
count__26389_26393 = G__26410;
i__26390_26394 = G__26411;
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
return (function (p1__26385_SHARP_,p2__26386_SHARP_){
return f.call(null,p1__26385_SHARP_,p2__26386_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__26413 = arguments.length;
switch (G__26413) {
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
var G__26416 = arguments.length;
switch (G__26416) {
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

//# sourceMappingURL=domina.js.map?rel=1568179214474
