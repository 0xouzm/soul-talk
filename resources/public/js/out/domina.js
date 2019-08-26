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
var opt_wrapper_22706 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_22707 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_22708 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_22708,opt_wrapper_22706,table_section_wrapper_22707,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_22706,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_22707,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_22707,cell_wrapper_22708,table_section_wrapper_22707,table_section_wrapper_22707]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__4120__auto__ = div.firstChild;
if(cljs.core.truth_(and__4120__auto__)){
return div.firstChild.childNodes;
} else {
return and__4120__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__22709 = cljs.core.seq.call(null,tbody);
var chunk__22710 = null;
var count__22711 = (0);
var i__22712 = (0);
while(true){
if((i__22712 < count__22711)){
var child = cljs.core._nth.call(null,chunk__22710,i__22712);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__22713 = seq__22709;
var G__22714 = chunk__22710;
var G__22715 = count__22711;
var G__22716 = (i__22712 + (1));
seq__22709 = G__22713;
chunk__22710 = G__22714;
count__22711 = G__22715;
i__22712 = G__22716;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22709);
if(temp__5720__auto__){
var seq__22709__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22709__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22709__$1);
var G__22717 = cljs.core.chunk_rest.call(null,seq__22709__$1);
var G__22718 = c__4550__auto__;
var G__22719 = cljs.core.count.call(null,c__4550__auto__);
var G__22720 = (0);
seq__22709 = G__22717;
chunk__22710 = G__22718;
count__22711 = G__22719;
i__22712 = G__22720;
continue;
} else {
var child = cljs.core.first.call(null,seq__22709__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__22721 = cljs.core.next.call(null,seq__22709__$1);
var G__22722 = null;
var G__22723 = (0);
var G__22724 = (0);
seq__22709 = G__22721;
chunk__22710 = G__22722;
count__22711 = G__22723;
i__22712 = G__22724;
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
var vec__22725 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__22725,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__22725,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__22725,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__22728 = wrapper.lastChild;
var G__22729 = (level - (1));
wrapper = G__22728;
level = G__22729;
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
var len__4730__auto___22731 = arguments.length;
var i__4731__auto___22732 = (0);
while(true){
if((i__4731__auto___22732 < len__4730__auto___22731)){
args__4736__auto__.push((arguments[i__4731__auto___22732]));

var G__22733 = (i__4731__auto___22732 + (1));
i__4731__auto___22732 = G__22733;
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
domina.log_debug.cljs$lang$applyTo = (function (seq22730){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22730));
});

domina.log = (function domina$log(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22735 = arguments.length;
var i__4731__auto___22736 = (0);
while(true){
if((i__4731__auto___22736 < len__4730__auto___22735)){
args__4736__auto__.push((arguments[i__4731__auto___22736]));

var G__22737 = (i__4731__auto___22736 + (1));
i__4731__auto___22736 = G__22737;
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
domina.log.cljs$lang$applyTo = (function (seq22734){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22734));
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
var len__4730__auto___22739 = arguments.length;
var i__4731__auto___22740 = (0);
while(true){
if((i__4731__auto___22740 < len__4730__auto___22739)){
args__4736__auto__.push((arguments[i__4731__auto___22740]));

var G__22741 = (i__4731__auto___22740 + (1));
i__4731__auto___22740 = G__22741;
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
domina.common_ancestor.cljs$lang$applyTo = (function (seq22738){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22738));
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
return cljs.core.map.call(null,(function (p1__22742_SHARP_){
return p1__22742_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__22743_SHARP_,p2__22744_SHARP_){
return goog.dom.insertChildAt(p1__22743_SHARP_,p2__22744_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__22746_SHARP_,p2__22745_SHARP_){
return goog.dom.insertSiblingBefore(p2__22745_SHARP_,p1__22746_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__22748_SHARP_,p2__22747_SHARP_){
return goog.dom.insertSiblingAfter(p2__22747_SHARP_,p1__22748_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__22750_SHARP_,p2__22749_SHARP_){
return goog.dom.replaceNode(p2__22749_SHARP_,p1__22750_SHARP_);
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
var len__4730__auto___22758 = arguments.length;
var i__4731__auto___22759 = (0);
while(true){
if((i__4731__auto___22759 < len__4730__auto___22758)){
args__4736__auto__.push((arguments[i__4731__auto___22759]));

var G__22760 = (i__4731__auto___22759 + (1));
i__4731__auto___22759 = G__22760;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__22754_22761 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22755_22762 = null;
var count__22756_22763 = (0);
var i__22757_22764 = (0);
while(true){
if((i__22757_22764 < count__22756_22763)){
var n_22765 = cljs.core._nth.call(null,chunk__22755_22762,i__22757_22764);
goog.style.setStyle(n_22765,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__22766 = seq__22754_22761;
var G__22767 = chunk__22755_22762;
var G__22768 = count__22756_22763;
var G__22769 = (i__22757_22764 + (1));
seq__22754_22761 = G__22766;
chunk__22755_22762 = G__22767;
count__22756_22763 = G__22768;
i__22757_22764 = G__22769;
continue;
} else {
var temp__5720__auto___22770 = cljs.core.seq.call(null,seq__22754_22761);
if(temp__5720__auto___22770){
var seq__22754_22771__$1 = temp__5720__auto___22770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22754_22771__$1)){
var c__4550__auto___22772 = cljs.core.chunk_first.call(null,seq__22754_22771__$1);
var G__22773 = cljs.core.chunk_rest.call(null,seq__22754_22771__$1);
var G__22774 = c__4550__auto___22772;
var G__22775 = cljs.core.count.call(null,c__4550__auto___22772);
var G__22776 = (0);
seq__22754_22761 = G__22773;
chunk__22755_22762 = G__22774;
count__22756_22763 = G__22775;
i__22757_22764 = G__22776;
continue;
} else {
var n_22777 = cljs.core.first.call(null,seq__22754_22771__$1);
goog.style.setStyle(n_22777,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__22778 = cljs.core.next.call(null,seq__22754_22771__$1);
var G__22779 = null;
var G__22780 = (0);
var G__22781 = (0);
seq__22754_22761 = G__22778;
chunk__22755_22762 = G__22779;
count__22756_22763 = G__22780;
i__22757_22764 = G__22781;
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
domina.set_style_BANG_.cljs$lang$applyTo = (function (seq22751){
var G__22752 = cljs.core.first.call(null,seq22751);
var seq22751__$1 = cljs.core.next.call(null,seq22751);
var G__22753 = cljs.core.first.call(null,seq22751__$1);
var seq22751__$2 = cljs.core.next.call(null,seq22751__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22752,G__22753,seq22751__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22789 = arguments.length;
var i__4731__auto___22790 = (0);
while(true){
if((i__4731__auto___22790 < len__4730__auto___22789)){
args__4736__auto__.push((arguments[i__4731__auto___22790]));

var G__22791 = (i__4731__auto___22790 + (1));
i__4731__auto___22790 = G__22791;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__22785_22792 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22786_22793 = null;
var count__22787_22794 = (0);
var i__22788_22795 = (0);
while(true){
if((i__22788_22795 < count__22787_22794)){
var n_22796 = cljs.core._nth.call(null,chunk__22786_22793,i__22788_22795);
n_22796.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__22797 = seq__22785_22792;
var G__22798 = chunk__22786_22793;
var G__22799 = count__22787_22794;
var G__22800 = (i__22788_22795 + (1));
seq__22785_22792 = G__22797;
chunk__22786_22793 = G__22798;
count__22787_22794 = G__22799;
i__22788_22795 = G__22800;
continue;
} else {
var temp__5720__auto___22801 = cljs.core.seq.call(null,seq__22785_22792);
if(temp__5720__auto___22801){
var seq__22785_22802__$1 = temp__5720__auto___22801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22785_22802__$1)){
var c__4550__auto___22803 = cljs.core.chunk_first.call(null,seq__22785_22802__$1);
var G__22804 = cljs.core.chunk_rest.call(null,seq__22785_22802__$1);
var G__22805 = c__4550__auto___22803;
var G__22806 = cljs.core.count.call(null,c__4550__auto___22803);
var G__22807 = (0);
seq__22785_22792 = G__22804;
chunk__22786_22793 = G__22805;
count__22787_22794 = G__22806;
i__22788_22795 = G__22807;
continue;
} else {
var n_22808 = cljs.core.first.call(null,seq__22785_22802__$1);
n_22808.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__22809 = cljs.core.next.call(null,seq__22785_22802__$1);
var G__22810 = null;
var G__22811 = (0);
var G__22812 = (0);
seq__22785_22792 = G__22809;
chunk__22786_22793 = G__22810;
count__22787_22794 = G__22811;
i__22788_22795 = G__22812;
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
domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq22782){
var G__22783 = cljs.core.first.call(null,seq22782);
var seq22782__$1 = cljs.core.next.call(null,seq22782);
var G__22784 = cljs.core.first.call(null,seq22782__$1);
var seq22782__$2 = cljs.core.next.call(null,seq22782__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22783,G__22784,seq22782__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__22813_22817 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22814_22818 = null;
var count__22815_22819 = (0);
var i__22816_22820 = (0);
while(true){
if((i__22816_22820 < count__22815_22819)){
var n_22821 = cljs.core._nth.call(null,chunk__22814_22818,i__22816_22820);
n_22821.removeAttribute(cljs.core.name.call(null,name));


var G__22822 = seq__22813_22817;
var G__22823 = chunk__22814_22818;
var G__22824 = count__22815_22819;
var G__22825 = (i__22816_22820 + (1));
seq__22813_22817 = G__22822;
chunk__22814_22818 = G__22823;
count__22815_22819 = G__22824;
i__22816_22820 = G__22825;
continue;
} else {
var temp__5720__auto___22826 = cljs.core.seq.call(null,seq__22813_22817);
if(temp__5720__auto___22826){
var seq__22813_22827__$1 = temp__5720__auto___22826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22813_22827__$1)){
var c__4550__auto___22828 = cljs.core.chunk_first.call(null,seq__22813_22827__$1);
var G__22829 = cljs.core.chunk_rest.call(null,seq__22813_22827__$1);
var G__22830 = c__4550__auto___22828;
var G__22831 = cljs.core.count.call(null,c__4550__auto___22828);
var G__22832 = (0);
seq__22813_22817 = G__22829;
chunk__22814_22818 = G__22830;
count__22815_22819 = G__22831;
i__22816_22820 = G__22832;
continue;
} else {
var n_22833 = cljs.core.first.call(null,seq__22813_22827__$1);
n_22833.removeAttribute(cljs.core.name.call(null,name));


var G__22834 = cljs.core.next.call(null,seq__22813_22827__$1);
var G__22835 = null;
var G__22836 = (0);
var G__22837 = (0);
seq__22813_22817 = G__22834;
chunk__22814_22818 = G__22835;
count__22815_22819 = G__22836;
i__22816_22820 = G__22837;
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
var vec__22838 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__22838,(0),null);
var v = cljs.core.nth.call(null,vec__22838,(1),null);
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
return (function (p1__22841_SHARP_){
var attr = attrs.item(p1__22841_SHARP_);
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
var seq__22842_22858 = cljs.core.seq.call(null,styles);
var chunk__22843_22859 = null;
var count__22844_22860 = (0);
var i__22845_22861 = (0);
while(true){
if((i__22845_22861 < count__22844_22860)){
var vec__22852_22862 = cljs.core._nth.call(null,chunk__22843_22859,i__22845_22861);
var name_22863 = cljs.core.nth.call(null,vec__22852_22862,(0),null);
var value_22864 = cljs.core.nth.call(null,vec__22852_22862,(1),null);
domina.set_style_BANG_.call(null,content,name_22863,value_22864);


var G__22865 = seq__22842_22858;
var G__22866 = chunk__22843_22859;
var G__22867 = count__22844_22860;
var G__22868 = (i__22845_22861 + (1));
seq__22842_22858 = G__22865;
chunk__22843_22859 = G__22866;
count__22844_22860 = G__22867;
i__22845_22861 = G__22868;
continue;
} else {
var temp__5720__auto___22869 = cljs.core.seq.call(null,seq__22842_22858);
if(temp__5720__auto___22869){
var seq__22842_22870__$1 = temp__5720__auto___22869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22842_22870__$1)){
var c__4550__auto___22871 = cljs.core.chunk_first.call(null,seq__22842_22870__$1);
var G__22872 = cljs.core.chunk_rest.call(null,seq__22842_22870__$1);
var G__22873 = c__4550__auto___22871;
var G__22874 = cljs.core.count.call(null,c__4550__auto___22871);
var G__22875 = (0);
seq__22842_22858 = G__22872;
chunk__22843_22859 = G__22873;
count__22844_22860 = G__22874;
i__22845_22861 = G__22875;
continue;
} else {
var vec__22855_22876 = cljs.core.first.call(null,seq__22842_22870__$1);
var name_22877 = cljs.core.nth.call(null,vec__22855_22876,(0),null);
var value_22878 = cljs.core.nth.call(null,vec__22855_22876,(1),null);
domina.set_style_BANG_.call(null,content,name_22877,value_22878);


var G__22879 = cljs.core.next.call(null,seq__22842_22870__$1);
var G__22880 = null;
var G__22881 = (0);
var G__22882 = (0);
seq__22842_22858 = G__22879;
chunk__22843_22859 = G__22880;
count__22844_22860 = G__22881;
i__22845_22861 = G__22882;
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
var seq__22883_22899 = cljs.core.seq.call(null,attrs);
var chunk__22884_22900 = null;
var count__22885_22901 = (0);
var i__22886_22902 = (0);
while(true){
if((i__22886_22902 < count__22885_22901)){
var vec__22893_22903 = cljs.core._nth.call(null,chunk__22884_22900,i__22886_22902);
var name_22904 = cljs.core.nth.call(null,vec__22893_22903,(0),null);
var value_22905 = cljs.core.nth.call(null,vec__22893_22903,(1),null);
domina.set_attr_BANG_.call(null,content,name_22904,value_22905);


var G__22906 = seq__22883_22899;
var G__22907 = chunk__22884_22900;
var G__22908 = count__22885_22901;
var G__22909 = (i__22886_22902 + (1));
seq__22883_22899 = G__22906;
chunk__22884_22900 = G__22907;
count__22885_22901 = G__22908;
i__22886_22902 = G__22909;
continue;
} else {
var temp__5720__auto___22910 = cljs.core.seq.call(null,seq__22883_22899);
if(temp__5720__auto___22910){
var seq__22883_22911__$1 = temp__5720__auto___22910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22883_22911__$1)){
var c__4550__auto___22912 = cljs.core.chunk_first.call(null,seq__22883_22911__$1);
var G__22913 = cljs.core.chunk_rest.call(null,seq__22883_22911__$1);
var G__22914 = c__4550__auto___22912;
var G__22915 = cljs.core.count.call(null,c__4550__auto___22912);
var G__22916 = (0);
seq__22883_22899 = G__22913;
chunk__22884_22900 = G__22914;
count__22885_22901 = G__22915;
i__22886_22902 = G__22916;
continue;
} else {
var vec__22896_22917 = cljs.core.first.call(null,seq__22883_22911__$1);
var name_22918 = cljs.core.nth.call(null,vec__22896_22917,(0),null);
var value_22919 = cljs.core.nth.call(null,vec__22896_22917,(1),null);
domina.set_attr_BANG_.call(null,content,name_22918,value_22919);


var G__22920 = cljs.core.next.call(null,seq__22883_22911__$1);
var G__22921 = null;
var G__22922 = (0);
var G__22923 = (0);
seq__22883_22899 = G__22920;
chunk__22884_22900 = G__22921;
count__22885_22901 = G__22922;
i__22886_22902 = G__22923;
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
var seq__22924_22928 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22925_22929 = null;
var count__22926_22930 = (0);
var i__22927_22931 = (0);
while(true){
if((i__22927_22931 < count__22926_22930)){
var node_22932 = cljs.core._nth.call(null,chunk__22925_22929,i__22927_22931);
goog.dom.classes.add(node_22932,class$);


var G__22933 = seq__22924_22928;
var G__22934 = chunk__22925_22929;
var G__22935 = count__22926_22930;
var G__22936 = (i__22927_22931 + (1));
seq__22924_22928 = G__22933;
chunk__22925_22929 = G__22934;
count__22926_22930 = G__22935;
i__22927_22931 = G__22936;
continue;
} else {
var temp__5720__auto___22937 = cljs.core.seq.call(null,seq__22924_22928);
if(temp__5720__auto___22937){
var seq__22924_22938__$1 = temp__5720__auto___22937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22924_22938__$1)){
var c__4550__auto___22939 = cljs.core.chunk_first.call(null,seq__22924_22938__$1);
var G__22940 = cljs.core.chunk_rest.call(null,seq__22924_22938__$1);
var G__22941 = c__4550__auto___22939;
var G__22942 = cljs.core.count.call(null,c__4550__auto___22939);
var G__22943 = (0);
seq__22924_22928 = G__22940;
chunk__22925_22929 = G__22941;
count__22926_22930 = G__22942;
i__22927_22931 = G__22943;
continue;
} else {
var node_22944 = cljs.core.first.call(null,seq__22924_22938__$1);
goog.dom.classes.add(node_22944,class$);


var G__22945 = cljs.core.next.call(null,seq__22924_22938__$1);
var G__22946 = null;
var G__22947 = (0);
var G__22948 = (0);
seq__22924_22928 = G__22945;
chunk__22925_22929 = G__22946;
count__22926_22930 = G__22947;
i__22927_22931 = G__22948;
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
var seq__22949_22953 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22950_22954 = null;
var count__22951_22955 = (0);
var i__22952_22956 = (0);
while(true){
if((i__22952_22956 < count__22951_22955)){
var node_22957 = cljs.core._nth.call(null,chunk__22950_22954,i__22952_22956);
goog.dom.classes.remove(node_22957,class$);


var G__22958 = seq__22949_22953;
var G__22959 = chunk__22950_22954;
var G__22960 = count__22951_22955;
var G__22961 = (i__22952_22956 + (1));
seq__22949_22953 = G__22958;
chunk__22950_22954 = G__22959;
count__22951_22955 = G__22960;
i__22952_22956 = G__22961;
continue;
} else {
var temp__5720__auto___22962 = cljs.core.seq.call(null,seq__22949_22953);
if(temp__5720__auto___22962){
var seq__22949_22963__$1 = temp__5720__auto___22962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22949_22963__$1)){
var c__4550__auto___22964 = cljs.core.chunk_first.call(null,seq__22949_22963__$1);
var G__22965 = cljs.core.chunk_rest.call(null,seq__22949_22963__$1);
var G__22966 = c__4550__auto___22964;
var G__22967 = cljs.core.count.call(null,c__4550__auto___22964);
var G__22968 = (0);
seq__22949_22953 = G__22965;
chunk__22950_22954 = G__22966;
count__22951_22955 = G__22967;
i__22952_22956 = G__22968;
continue;
} else {
var node_22969 = cljs.core.first.call(null,seq__22949_22963__$1);
goog.dom.classes.remove(node_22969,class$);


var G__22970 = cljs.core.next.call(null,seq__22949_22963__$1);
var G__22971 = null;
var G__22972 = (0);
var G__22973 = (0);
seq__22949_22953 = G__22970;
chunk__22950_22954 = G__22971;
count__22951_22955 = G__22972;
i__22952_22956 = G__22973;
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
var seq__22974_22978 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22975_22979 = null;
var count__22976_22980 = (0);
var i__22977_22981 = (0);
while(true){
if((i__22977_22981 < count__22976_22980)){
var node_22982 = cljs.core._nth.call(null,chunk__22975_22979,i__22977_22981);
goog.dom.classes.toggle(node_22982,class$);


var G__22983 = seq__22974_22978;
var G__22984 = chunk__22975_22979;
var G__22985 = count__22976_22980;
var G__22986 = (i__22977_22981 + (1));
seq__22974_22978 = G__22983;
chunk__22975_22979 = G__22984;
count__22976_22980 = G__22985;
i__22977_22981 = G__22986;
continue;
} else {
var temp__5720__auto___22987 = cljs.core.seq.call(null,seq__22974_22978);
if(temp__5720__auto___22987){
var seq__22974_22988__$1 = temp__5720__auto___22987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22974_22988__$1)){
var c__4550__auto___22989 = cljs.core.chunk_first.call(null,seq__22974_22988__$1);
var G__22990 = cljs.core.chunk_rest.call(null,seq__22974_22988__$1);
var G__22991 = c__4550__auto___22989;
var G__22992 = cljs.core.count.call(null,c__4550__auto___22989);
var G__22993 = (0);
seq__22974_22978 = G__22990;
chunk__22975_22979 = G__22991;
count__22976_22980 = G__22992;
i__22977_22981 = G__22993;
continue;
} else {
var node_22994 = cljs.core.first.call(null,seq__22974_22988__$1);
goog.dom.classes.toggle(node_22994,class$);


var G__22995 = cljs.core.next.call(null,seq__22974_22988__$1);
var G__22996 = null;
var G__22997 = (0);
var G__22998 = (0);
seq__22974_22978 = G__22995;
chunk__22975_22979 = G__22996;
count__22976_22980 = G__22997;
i__22977_22981 = G__22998;
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
var classes_23003__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__22999_23004 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23000_23005 = null;
var count__23001_23006 = (0);
var i__23002_23007 = (0);
while(true){
if((i__23002_23007 < count__23001_23006)){
var node_23008 = cljs.core._nth.call(null,chunk__23000_23005,i__23002_23007);
goog.dom.classes.set(node_23008,classes_23003__$1);


var G__23009 = seq__22999_23004;
var G__23010 = chunk__23000_23005;
var G__23011 = count__23001_23006;
var G__23012 = (i__23002_23007 + (1));
seq__22999_23004 = G__23009;
chunk__23000_23005 = G__23010;
count__23001_23006 = G__23011;
i__23002_23007 = G__23012;
continue;
} else {
var temp__5720__auto___23013 = cljs.core.seq.call(null,seq__22999_23004);
if(temp__5720__auto___23013){
var seq__22999_23014__$1 = temp__5720__auto___23013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22999_23014__$1)){
var c__4550__auto___23015 = cljs.core.chunk_first.call(null,seq__22999_23014__$1);
var G__23016 = cljs.core.chunk_rest.call(null,seq__22999_23014__$1);
var G__23017 = c__4550__auto___23015;
var G__23018 = cljs.core.count.call(null,c__4550__auto___23015);
var G__23019 = (0);
seq__22999_23004 = G__23016;
chunk__23000_23005 = G__23017;
count__23001_23006 = G__23018;
i__23002_23007 = G__23019;
continue;
} else {
var node_23020 = cljs.core.first.call(null,seq__22999_23014__$1);
goog.dom.classes.set(node_23020,classes_23003__$1);


var G__23021 = cljs.core.next.call(null,seq__22999_23014__$1);
var G__23022 = null;
var G__23023 = (0);
var G__23024 = (0);
seq__22999_23004 = G__23021;
chunk__23000_23005 = G__23022;
count__23001_23006 = G__23023;
i__23002_23007 = G__23024;
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
var seq__23025_23029 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23026_23030 = null;
var count__23027_23031 = (0);
var i__23028_23032 = (0);
while(true){
if((i__23028_23032 < count__23027_23031)){
var node_23033 = cljs.core._nth.call(null,chunk__23026_23030,i__23028_23032);
goog.dom.setTextContent(node_23033,value);


var G__23034 = seq__23025_23029;
var G__23035 = chunk__23026_23030;
var G__23036 = count__23027_23031;
var G__23037 = (i__23028_23032 + (1));
seq__23025_23029 = G__23034;
chunk__23026_23030 = G__23035;
count__23027_23031 = G__23036;
i__23028_23032 = G__23037;
continue;
} else {
var temp__5720__auto___23038 = cljs.core.seq.call(null,seq__23025_23029);
if(temp__5720__auto___23038){
var seq__23025_23039__$1 = temp__5720__auto___23038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23025_23039__$1)){
var c__4550__auto___23040 = cljs.core.chunk_first.call(null,seq__23025_23039__$1);
var G__23041 = cljs.core.chunk_rest.call(null,seq__23025_23039__$1);
var G__23042 = c__4550__auto___23040;
var G__23043 = cljs.core.count.call(null,c__4550__auto___23040);
var G__23044 = (0);
seq__23025_23029 = G__23041;
chunk__23026_23030 = G__23042;
count__23027_23031 = G__23043;
i__23028_23032 = G__23044;
continue;
} else {
var node_23045 = cljs.core.first.call(null,seq__23025_23039__$1);
goog.dom.setTextContent(node_23045,value);


var G__23046 = cljs.core.next.call(null,seq__23025_23039__$1);
var G__23047 = null;
var G__23048 = (0);
var G__23049 = (0);
seq__23025_23029 = G__23046;
chunk__23026_23030 = G__23047;
count__23027_23031 = G__23048;
i__23028_23032 = G__23049;
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
var seq__23050_23054 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23051_23055 = null;
var count__23052_23056 = (0);
var i__23053_23057 = (0);
while(true){
if((i__23053_23057 < count__23052_23056)){
var node_23058 = cljs.core._nth.call(null,chunk__23051_23055,i__23053_23057);
goog.dom.forms.setValue(node_23058,value);


var G__23059 = seq__23050_23054;
var G__23060 = chunk__23051_23055;
var G__23061 = count__23052_23056;
var G__23062 = (i__23053_23057 + (1));
seq__23050_23054 = G__23059;
chunk__23051_23055 = G__23060;
count__23052_23056 = G__23061;
i__23053_23057 = G__23062;
continue;
} else {
var temp__5720__auto___23063 = cljs.core.seq.call(null,seq__23050_23054);
if(temp__5720__auto___23063){
var seq__23050_23064__$1 = temp__5720__auto___23063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23050_23064__$1)){
var c__4550__auto___23065 = cljs.core.chunk_first.call(null,seq__23050_23064__$1);
var G__23066 = cljs.core.chunk_rest.call(null,seq__23050_23064__$1);
var G__23067 = c__4550__auto___23065;
var G__23068 = cljs.core.count.call(null,c__4550__auto___23065);
var G__23069 = (0);
seq__23050_23054 = G__23066;
chunk__23051_23055 = G__23067;
count__23052_23056 = G__23068;
i__23053_23057 = G__23069;
continue;
} else {
var node_23070 = cljs.core.first.call(null,seq__23050_23064__$1);
goog.dom.forms.setValue(node_23070,value);


var G__23071 = cljs.core.next.call(null,seq__23050_23064__$1);
var G__23072 = null;
var G__23073 = (0);
var G__23074 = (0);
seq__23050_23054 = G__23071;
chunk__23051_23055 = G__23072;
count__23052_23056 = G__23073;
i__23053_23057 = G__23074;
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
var value_23080 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__23076_23081 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23077_23082 = null;
var count__23078_23083 = (0);
var i__23079_23084 = (0);
while(true){
if((i__23079_23084 < count__23078_23083)){
var node_23085 = cljs.core._nth.call(null,chunk__23077_23082,i__23079_23084);
node_23085.innerHTML = value_23080;


var G__23086 = seq__23076_23081;
var G__23087 = chunk__23077_23082;
var G__23088 = count__23078_23083;
var G__23089 = (i__23079_23084 + (1));
seq__23076_23081 = G__23086;
chunk__23077_23082 = G__23087;
count__23078_23083 = G__23088;
i__23079_23084 = G__23089;
continue;
} else {
var temp__5720__auto___23090 = cljs.core.seq.call(null,seq__23076_23081);
if(temp__5720__auto___23090){
var seq__23076_23091__$1 = temp__5720__auto___23090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23076_23091__$1)){
var c__4550__auto___23092 = cljs.core.chunk_first.call(null,seq__23076_23091__$1);
var G__23093 = cljs.core.chunk_rest.call(null,seq__23076_23091__$1);
var G__23094 = c__4550__auto___23092;
var G__23095 = cljs.core.count.call(null,c__4550__auto___23092);
var G__23096 = (0);
seq__23076_23081 = G__23093;
chunk__23077_23082 = G__23094;
count__23078_23083 = G__23095;
i__23079_23084 = G__23096;
continue;
} else {
var node_23097 = cljs.core.first.call(null,seq__23076_23091__$1);
node_23097.innerHTML = value_23080;


var G__23098 = cljs.core.next.call(null,seq__23076_23091__$1);
var G__23099 = null;
var G__23100 = (0);
var G__23101 = (0);
seq__23076_23081 = G__23098;
chunk__23077_23082 = G__23099;
count__23078_23083 = G__23100;
i__23079_23084 = G__23101;
continue;
}
} else {
}
}
break;
}
}catch (e23075){if((e23075 instanceof Error)){
var e_23102 = e23075;
domina.replace_children_BANG_.call(null,content,value_23080);
} else {
throw e23075;

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
var G__23104 = arguments.length;
switch (G__23104) {
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
var seq__23108_23112 = cljs.core.seq.call(null,children);
var chunk__23109_23113 = null;
var count__23110_23114 = (0);
var i__23111_23115 = (0);
while(true){
if((i__23111_23115 < count__23110_23114)){
var child_23116 = cljs.core._nth.call(null,chunk__23109_23113,i__23111_23115);
frag.appendChild(child_23116);


var G__23117 = seq__23108_23112;
var G__23118 = chunk__23109_23113;
var G__23119 = count__23110_23114;
var G__23120 = (i__23111_23115 + (1));
seq__23108_23112 = G__23117;
chunk__23109_23113 = G__23118;
count__23110_23114 = G__23119;
i__23111_23115 = G__23120;
continue;
} else {
var temp__5720__auto___23121 = cljs.core.seq.call(null,seq__23108_23112);
if(temp__5720__auto___23121){
var seq__23108_23122__$1 = temp__5720__auto___23121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23108_23122__$1)){
var c__4550__auto___23123 = cljs.core.chunk_first.call(null,seq__23108_23122__$1);
var G__23124 = cljs.core.chunk_rest.call(null,seq__23108_23122__$1);
var G__23125 = c__4550__auto___23123;
var G__23126 = cljs.core.count.call(null,c__4550__auto___23123);
var G__23127 = (0);
seq__23108_23112 = G__23124;
chunk__23109_23113 = G__23125;
count__23110_23114 = G__23126;
i__23111_23115 = G__23127;
continue;
} else {
var child_23128 = cljs.core.first.call(null,seq__23108_23122__$1);
frag.appendChild(child_23128);


var G__23129 = cljs.core.next.call(null,seq__23108_23122__$1);
var G__23130 = null;
var G__23131 = (0);
var G__23132 = (0);
seq__23108_23112 = G__23129;
chunk__23109_23113 = G__23130;
count__23110_23114 = G__23131;
i__23111_23115 = G__23132;
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
return (function (p1__23106_SHARP_,p2__23107_SHARP_){
return f.call(null,p1__23106_SHARP_,p2__23107_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__23134 = arguments.length;
switch (G__23134) {
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
var G__23137 = arguments.length;
switch (G__23137) {
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

//# sourceMappingURL=domina.js.map?rel=1566805866998
