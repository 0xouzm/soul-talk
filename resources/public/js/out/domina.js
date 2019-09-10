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
var opt_wrapper_24339 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_24340 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_24341 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_24341,opt_wrapper_24339,table_section_wrapper_24340,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_24339,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_24340,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_24340,cell_wrapper_24341,table_section_wrapper_24340,table_section_wrapper_24340]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__4120__auto__ = div.firstChild;
if(cljs.core.truth_(and__4120__auto__)){
return div.firstChild.childNodes;
} else {
return and__4120__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__24342 = cljs.core.seq.call(null,tbody);
var chunk__24343 = null;
var count__24344 = (0);
var i__24345 = (0);
while(true){
if((i__24345 < count__24344)){
var child = cljs.core._nth.call(null,chunk__24343,i__24345);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__24346 = seq__24342;
var G__24347 = chunk__24343;
var G__24348 = count__24344;
var G__24349 = (i__24345 + (1));
seq__24342 = G__24346;
chunk__24343 = G__24347;
count__24344 = G__24348;
i__24345 = G__24349;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24342);
if(temp__5720__auto__){
var seq__24342__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24342__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24342__$1);
var G__24350 = cljs.core.chunk_rest.call(null,seq__24342__$1);
var G__24351 = c__4550__auto__;
var G__24352 = cljs.core.count.call(null,c__4550__auto__);
var G__24353 = (0);
seq__24342 = G__24350;
chunk__24343 = G__24351;
count__24344 = G__24352;
i__24345 = G__24353;
continue;
} else {
var child = cljs.core.first.call(null,seq__24342__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__24354 = cljs.core.next.call(null,seq__24342__$1);
var G__24355 = null;
var G__24356 = (0);
var G__24357 = (0);
seq__24342 = G__24354;
chunk__24343 = G__24355;
count__24344 = G__24356;
i__24345 = G__24357;
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
var vec__24358 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__24358,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__24358,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__24358,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__24361 = wrapper.lastChild;
var G__24362 = (level - (1));
wrapper = G__24361;
level = G__24362;
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
var len__4730__auto___24364 = arguments.length;
var i__4731__auto___24365 = (0);
while(true){
if((i__4731__auto___24365 < len__4730__auto___24364)){
args__4736__auto__.push((arguments[i__4731__auto___24365]));

var G__24366 = (i__4731__auto___24365 + (1));
i__4731__auto___24365 = G__24366;
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
domina.log_debug.cljs$lang$applyTo = (function (seq24363){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24363));
});

domina.log = (function domina$log(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24368 = arguments.length;
var i__4731__auto___24369 = (0);
while(true){
if((i__4731__auto___24369 < len__4730__auto___24368)){
args__4736__auto__.push((arguments[i__4731__auto___24369]));

var G__24370 = (i__4731__auto___24369 + (1));
i__4731__auto___24369 = G__24370;
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
domina.log.cljs$lang$applyTo = (function (seq24367){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24367));
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
var len__4730__auto___24372 = arguments.length;
var i__4731__auto___24373 = (0);
while(true){
if((i__4731__auto___24373 < len__4730__auto___24372)){
args__4736__auto__.push((arguments[i__4731__auto___24373]));

var G__24374 = (i__4731__auto___24373 + (1));
i__4731__auto___24373 = G__24374;
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
domina.common_ancestor.cljs$lang$applyTo = (function (seq24371){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24371));
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
return cljs.core.map.call(null,(function (p1__24375_SHARP_){
return p1__24375_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__24376_SHARP_,p2__24377_SHARP_){
return goog.dom.insertChildAt(p1__24376_SHARP_,p2__24377_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__24379_SHARP_,p2__24378_SHARP_){
return goog.dom.insertSiblingBefore(p2__24378_SHARP_,p1__24379_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__24381_SHARP_,p2__24380_SHARP_){
return goog.dom.insertSiblingAfter(p2__24380_SHARP_,p1__24381_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__24383_SHARP_,p2__24382_SHARP_){
return goog.dom.replaceNode(p2__24382_SHARP_,p1__24383_SHARP_);
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
var len__4730__auto___24391 = arguments.length;
var i__4731__auto___24392 = (0);
while(true){
if((i__4731__auto___24392 < len__4730__auto___24391)){
args__4736__auto__.push((arguments[i__4731__auto___24392]));

var G__24393 = (i__4731__auto___24392 + (1));
i__4731__auto___24392 = G__24393;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__24387_24394 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24388_24395 = null;
var count__24389_24396 = (0);
var i__24390_24397 = (0);
while(true){
if((i__24390_24397 < count__24389_24396)){
var n_24398 = cljs.core._nth.call(null,chunk__24388_24395,i__24390_24397);
goog.style.setStyle(n_24398,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__24399 = seq__24387_24394;
var G__24400 = chunk__24388_24395;
var G__24401 = count__24389_24396;
var G__24402 = (i__24390_24397 + (1));
seq__24387_24394 = G__24399;
chunk__24388_24395 = G__24400;
count__24389_24396 = G__24401;
i__24390_24397 = G__24402;
continue;
} else {
var temp__5720__auto___24403 = cljs.core.seq.call(null,seq__24387_24394);
if(temp__5720__auto___24403){
var seq__24387_24404__$1 = temp__5720__auto___24403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24387_24404__$1)){
var c__4550__auto___24405 = cljs.core.chunk_first.call(null,seq__24387_24404__$1);
var G__24406 = cljs.core.chunk_rest.call(null,seq__24387_24404__$1);
var G__24407 = c__4550__auto___24405;
var G__24408 = cljs.core.count.call(null,c__4550__auto___24405);
var G__24409 = (0);
seq__24387_24394 = G__24406;
chunk__24388_24395 = G__24407;
count__24389_24396 = G__24408;
i__24390_24397 = G__24409;
continue;
} else {
var n_24410 = cljs.core.first.call(null,seq__24387_24404__$1);
goog.style.setStyle(n_24410,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__24411 = cljs.core.next.call(null,seq__24387_24404__$1);
var G__24412 = null;
var G__24413 = (0);
var G__24414 = (0);
seq__24387_24394 = G__24411;
chunk__24388_24395 = G__24412;
count__24389_24396 = G__24413;
i__24390_24397 = G__24414;
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
domina.set_style_BANG_.cljs$lang$applyTo = (function (seq24384){
var G__24385 = cljs.core.first.call(null,seq24384);
var seq24384__$1 = cljs.core.next.call(null,seq24384);
var G__24386 = cljs.core.first.call(null,seq24384__$1);
var seq24384__$2 = cljs.core.next.call(null,seq24384__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24385,G__24386,seq24384__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24422 = arguments.length;
var i__4731__auto___24423 = (0);
while(true){
if((i__4731__auto___24423 < len__4730__auto___24422)){
args__4736__auto__.push((arguments[i__4731__auto___24423]));

var G__24424 = (i__4731__auto___24423 + (1));
i__4731__auto___24423 = G__24424;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__24418_24425 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24419_24426 = null;
var count__24420_24427 = (0);
var i__24421_24428 = (0);
while(true){
if((i__24421_24428 < count__24420_24427)){
var n_24429 = cljs.core._nth.call(null,chunk__24419_24426,i__24421_24428);
n_24429.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__24430 = seq__24418_24425;
var G__24431 = chunk__24419_24426;
var G__24432 = count__24420_24427;
var G__24433 = (i__24421_24428 + (1));
seq__24418_24425 = G__24430;
chunk__24419_24426 = G__24431;
count__24420_24427 = G__24432;
i__24421_24428 = G__24433;
continue;
} else {
var temp__5720__auto___24434 = cljs.core.seq.call(null,seq__24418_24425);
if(temp__5720__auto___24434){
var seq__24418_24435__$1 = temp__5720__auto___24434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24418_24435__$1)){
var c__4550__auto___24436 = cljs.core.chunk_first.call(null,seq__24418_24435__$1);
var G__24437 = cljs.core.chunk_rest.call(null,seq__24418_24435__$1);
var G__24438 = c__4550__auto___24436;
var G__24439 = cljs.core.count.call(null,c__4550__auto___24436);
var G__24440 = (0);
seq__24418_24425 = G__24437;
chunk__24419_24426 = G__24438;
count__24420_24427 = G__24439;
i__24421_24428 = G__24440;
continue;
} else {
var n_24441 = cljs.core.first.call(null,seq__24418_24435__$1);
n_24441.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__24442 = cljs.core.next.call(null,seq__24418_24435__$1);
var G__24443 = null;
var G__24444 = (0);
var G__24445 = (0);
seq__24418_24425 = G__24442;
chunk__24419_24426 = G__24443;
count__24420_24427 = G__24444;
i__24421_24428 = G__24445;
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
domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq24415){
var G__24416 = cljs.core.first.call(null,seq24415);
var seq24415__$1 = cljs.core.next.call(null,seq24415);
var G__24417 = cljs.core.first.call(null,seq24415__$1);
var seq24415__$2 = cljs.core.next.call(null,seq24415__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24416,G__24417,seq24415__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__24446_24450 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24447_24451 = null;
var count__24448_24452 = (0);
var i__24449_24453 = (0);
while(true){
if((i__24449_24453 < count__24448_24452)){
var n_24454 = cljs.core._nth.call(null,chunk__24447_24451,i__24449_24453);
n_24454.removeAttribute(cljs.core.name.call(null,name));


var G__24455 = seq__24446_24450;
var G__24456 = chunk__24447_24451;
var G__24457 = count__24448_24452;
var G__24458 = (i__24449_24453 + (1));
seq__24446_24450 = G__24455;
chunk__24447_24451 = G__24456;
count__24448_24452 = G__24457;
i__24449_24453 = G__24458;
continue;
} else {
var temp__5720__auto___24459 = cljs.core.seq.call(null,seq__24446_24450);
if(temp__5720__auto___24459){
var seq__24446_24460__$1 = temp__5720__auto___24459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24446_24460__$1)){
var c__4550__auto___24461 = cljs.core.chunk_first.call(null,seq__24446_24460__$1);
var G__24462 = cljs.core.chunk_rest.call(null,seq__24446_24460__$1);
var G__24463 = c__4550__auto___24461;
var G__24464 = cljs.core.count.call(null,c__4550__auto___24461);
var G__24465 = (0);
seq__24446_24450 = G__24462;
chunk__24447_24451 = G__24463;
count__24448_24452 = G__24464;
i__24449_24453 = G__24465;
continue;
} else {
var n_24466 = cljs.core.first.call(null,seq__24446_24460__$1);
n_24466.removeAttribute(cljs.core.name.call(null,name));


var G__24467 = cljs.core.next.call(null,seq__24446_24460__$1);
var G__24468 = null;
var G__24469 = (0);
var G__24470 = (0);
seq__24446_24450 = G__24467;
chunk__24447_24451 = G__24468;
count__24448_24452 = G__24469;
i__24449_24453 = G__24470;
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
var vec__24471 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__24471,(0),null);
var v = cljs.core.nth.call(null,vec__24471,(1),null);
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
return (function (p1__24474_SHARP_){
var attr = attrs.item(p1__24474_SHARP_);
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
var seq__24475_24491 = cljs.core.seq.call(null,styles);
var chunk__24476_24492 = null;
var count__24477_24493 = (0);
var i__24478_24494 = (0);
while(true){
if((i__24478_24494 < count__24477_24493)){
var vec__24485_24495 = cljs.core._nth.call(null,chunk__24476_24492,i__24478_24494);
var name_24496 = cljs.core.nth.call(null,vec__24485_24495,(0),null);
var value_24497 = cljs.core.nth.call(null,vec__24485_24495,(1),null);
domina.set_style_BANG_.call(null,content,name_24496,value_24497);


var G__24498 = seq__24475_24491;
var G__24499 = chunk__24476_24492;
var G__24500 = count__24477_24493;
var G__24501 = (i__24478_24494 + (1));
seq__24475_24491 = G__24498;
chunk__24476_24492 = G__24499;
count__24477_24493 = G__24500;
i__24478_24494 = G__24501;
continue;
} else {
var temp__5720__auto___24502 = cljs.core.seq.call(null,seq__24475_24491);
if(temp__5720__auto___24502){
var seq__24475_24503__$1 = temp__5720__auto___24502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24475_24503__$1)){
var c__4550__auto___24504 = cljs.core.chunk_first.call(null,seq__24475_24503__$1);
var G__24505 = cljs.core.chunk_rest.call(null,seq__24475_24503__$1);
var G__24506 = c__4550__auto___24504;
var G__24507 = cljs.core.count.call(null,c__4550__auto___24504);
var G__24508 = (0);
seq__24475_24491 = G__24505;
chunk__24476_24492 = G__24506;
count__24477_24493 = G__24507;
i__24478_24494 = G__24508;
continue;
} else {
var vec__24488_24509 = cljs.core.first.call(null,seq__24475_24503__$1);
var name_24510 = cljs.core.nth.call(null,vec__24488_24509,(0),null);
var value_24511 = cljs.core.nth.call(null,vec__24488_24509,(1),null);
domina.set_style_BANG_.call(null,content,name_24510,value_24511);


var G__24512 = cljs.core.next.call(null,seq__24475_24503__$1);
var G__24513 = null;
var G__24514 = (0);
var G__24515 = (0);
seq__24475_24491 = G__24512;
chunk__24476_24492 = G__24513;
count__24477_24493 = G__24514;
i__24478_24494 = G__24515;
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
var seq__24516_24532 = cljs.core.seq.call(null,attrs);
var chunk__24517_24533 = null;
var count__24518_24534 = (0);
var i__24519_24535 = (0);
while(true){
if((i__24519_24535 < count__24518_24534)){
var vec__24526_24536 = cljs.core._nth.call(null,chunk__24517_24533,i__24519_24535);
var name_24537 = cljs.core.nth.call(null,vec__24526_24536,(0),null);
var value_24538 = cljs.core.nth.call(null,vec__24526_24536,(1),null);
domina.set_attr_BANG_.call(null,content,name_24537,value_24538);


var G__24539 = seq__24516_24532;
var G__24540 = chunk__24517_24533;
var G__24541 = count__24518_24534;
var G__24542 = (i__24519_24535 + (1));
seq__24516_24532 = G__24539;
chunk__24517_24533 = G__24540;
count__24518_24534 = G__24541;
i__24519_24535 = G__24542;
continue;
} else {
var temp__5720__auto___24543 = cljs.core.seq.call(null,seq__24516_24532);
if(temp__5720__auto___24543){
var seq__24516_24544__$1 = temp__5720__auto___24543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24516_24544__$1)){
var c__4550__auto___24545 = cljs.core.chunk_first.call(null,seq__24516_24544__$1);
var G__24546 = cljs.core.chunk_rest.call(null,seq__24516_24544__$1);
var G__24547 = c__4550__auto___24545;
var G__24548 = cljs.core.count.call(null,c__4550__auto___24545);
var G__24549 = (0);
seq__24516_24532 = G__24546;
chunk__24517_24533 = G__24547;
count__24518_24534 = G__24548;
i__24519_24535 = G__24549;
continue;
} else {
var vec__24529_24550 = cljs.core.first.call(null,seq__24516_24544__$1);
var name_24551 = cljs.core.nth.call(null,vec__24529_24550,(0),null);
var value_24552 = cljs.core.nth.call(null,vec__24529_24550,(1),null);
domina.set_attr_BANG_.call(null,content,name_24551,value_24552);


var G__24553 = cljs.core.next.call(null,seq__24516_24544__$1);
var G__24554 = null;
var G__24555 = (0);
var G__24556 = (0);
seq__24516_24532 = G__24553;
chunk__24517_24533 = G__24554;
count__24518_24534 = G__24555;
i__24519_24535 = G__24556;
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
var seq__24557_24561 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24558_24562 = null;
var count__24559_24563 = (0);
var i__24560_24564 = (0);
while(true){
if((i__24560_24564 < count__24559_24563)){
var node_24565 = cljs.core._nth.call(null,chunk__24558_24562,i__24560_24564);
goog.dom.classes.add(node_24565,class$);


var G__24566 = seq__24557_24561;
var G__24567 = chunk__24558_24562;
var G__24568 = count__24559_24563;
var G__24569 = (i__24560_24564 + (1));
seq__24557_24561 = G__24566;
chunk__24558_24562 = G__24567;
count__24559_24563 = G__24568;
i__24560_24564 = G__24569;
continue;
} else {
var temp__5720__auto___24570 = cljs.core.seq.call(null,seq__24557_24561);
if(temp__5720__auto___24570){
var seq__24557_24571__$1 = temp__5720__auto___24570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24557_24571__$1)){
var c__4550__auto___24572 = cljs.core.chunk_first.call(null,seq__24557_24571__$1);
var G__24573 = cljs.core.chunk_rest.call(null,seq__24557_24571__$1);
var G__24574 = c__4550__auto___24572;
var G__24575 = cljs.core.count.call(null,c__4550__auto___24572);
var G__24576 = (0);
seq__24557_24561 = G__24573;
chunk__24558_24562 = G__24574;
count__24559_24563 = G__24575;
i__24560_24564 = G__24576;
continue;
} else {
var node_24577 = cljs.core.first.call(null,seq__24557_24571__$1);
goog.dom.classes.add(node_24577,class$);


var G__24578 = cljs.core.next.call(null,seq__24557_24571__$1);
var G__24579 = null;
var G__24580 = (0);
var G__24581 = (0);
seq__24557_24561 = G__24578;
chunk__24558_24562 = G__24579;
count__24559_24563 = G__24580;
i__24560_24564 = G__24581;
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
var seq__24582_24586 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24583_24587 = null;
var count__24584_24588 = (0);
var i__24585_24589 = (0);
while(true){
if((i__24585_24589 < count__24584_24588)){
var node_24590 = cljs.core._nth.call(null,chunk__24583_24587,i__24585_24589);
goog.dom.classes.remove(node_24590,class$);


var G__24591 = seq__24582_24586;
var G__24592 = chunk__24583_24587;
var G__24593 = count__24584_24588;
var G__24594 = (i__24585_24589 + (1));
seq__24582_24586 = G__24591;
chunk__24583_24587 = G__24592;
count__24584_24588 = G__24593;
i__24585_24589 = G__24594;
continue;
} else {
var temp__5720__auto___24595 = cljs.core.seq.call(null,seq__24582_24586);
if(temp__5720__auto___24595){
var seq__24582_24596__$1 = temp__5720__auto___24595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24582_24596__$1)){
var c__4550__auto___24597 = cljs.core.chunk_first.call(null,seq__24582_24596__$1);
var G__24598 = cljs.core.chunk_rest.call(null,seq__24582_24596__$1);
var G__24599 = c__4550__auto___24597;
var G__24600 = cljs.core.count.call(null,c__4550__auto___24597);
var G__24601 = (0);
seq__24582_24586 = G__24598;
chunk__24583_24587 = G__24599;
count__24584_24588 = G__24600;
i__24585_24589 = G__24601;
continue;
} else {
var node_24602 = cljs.core.first.call(null,seq__24582_24596__$1);
goog.dom.classes.remove(node_24602,class$);


var G__24603 = cljs.core.next.call(null,seq__24582_24596__$1);
var G__24604 = null;
var G__24605 = (0);
var G__24606 = (0);
seq__24582_24586 = G__24603;
chunk__24583_24587 = G__24604;
count__24584_24588 = G__24605;
i__24585_24589 = G__24606;
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
var seq__24607_24611 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24608_24612 = null;
var count__24609_24613 = (0);
var i__24610_24614 = (0);
while(true){
if((i__24610_24614 < count__24609_24613)){
var node_24615 = cljs.core._nth.call(null,chunk__24608_24612,i__24610_24614);
goog.dom.classes.toggle(node_24615,class$);


var G__24616 = seq__24607_24611;
var G__24617 = chunk__24608_24612;
var G__24618 = count__24609_24613;
var G__24619 = (i__24610_24614 + (1));
seq__24607_24611 = G__24616;
chunk__24608_24612 = G__24617;
count__24609_24613 = G__24618;
i__24610_24614 = G__24619;
continue;
} else {
var temp__5720__auto___24620 = cljs.core.seq.call(null,seq__24607_24611);
if(temp__5720__auto___24620){
var seq__24607_24621__$1 = temp__5720__auto___24620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24607_24621__$1)){
var c__4550__auto___24622 = cljs.core.chunk_first.call(null,seq__24607_24621__$1);
var G__24623 = cljs.core.chunk_rest.call(null,seq__24607_24621__$1);
var G__24624 = c__4550__auto___24622;
var G__24625 = cljs.core.count.call(null,c__4550__auto___24622);
var G__24626 = (0);
seq__24607_24611 = G__24623;
chunk__24608_24612 = G__24624;
count__24609_24613 = G__24625;
i__24610_24614 = G__24626;
continue;
} else {
var node_24627 = cljs.core.first.call(null,seq__24607_24621__$1);
goog.dom.classes.toggle(node_24627,class$);


var G__24628 = cljs.core.next.call(null,seq__24607_24621__$1);
var G__24629 = null;
var G__24630 = (0);
var G__24631 = (0);
seq__24607_24611 = G__24628;
chunk__24608_24612 = G__24629;
count__24609_24613 = G__24630;
i__24610_24614 = G__24631;
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
var classes_24636__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__24632_24637 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24633_24638 = null;
var count__24634_24639 = (0);
var i__24635_24640 = (0);
while(true){
if((i__24635_24640 < count__24634_24639)){
var node_24641 = cljs.core._nth.call(null,chunk__24633_24638,i__24635_24640);
goog.dom.classes.set(node_24641,classes_24636__$1);


var G__24642 = seq__24632_24637;
var G__24643 = chunk__24633_24638;
var G__24644 = count__24634_24639;
var G__24645 = (i__24635_24640 + (1));
seq__24632_24637 = G__24642;
chunk__24633_24638 = G__24643;
count__24634_24639 = G__24644;
i__24635_24640 = G__24645;
continue;
} else {
var temp__5720__auto___24646 = cljs.core.seq.call(null,seq__24632_24637);
if(temp__5720__auto___24646){
var seq__24632_24647__$1 = temp__5720__auto___24646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24632_24647__$1)){
var c__4550__auto___24648 = cljs.core.chunk_first.call(null,seq__24632_24647__$1);
var G__24649 = cljs.core.chunk_rest.call(null,seq__24632_24647__$1);
var G__24650 = c__4550__auto___24648;
var G__24651 = cljs.core.count.call(null,c__4550__auto___24648);
var G__24652 = (0);
seq__24632_24637 = G__24649;
chunk__24633_24638 = G__24650;
count__24634_24639 = G__24651;
i__24635_24640 = G__24652;
continue;
} else {
var node_24653 = cljs.core.first.call(null,seq__24632_24647__$1);
goog.dom.classes.set(node_24653,classes_24636__$1);


var G__24654 = cljs.core.next.call(null,seq__24632_24647__$1);
var G__24655 = null;
var G__24656 = (0);
var G__24657 = (0);
seq__24632_24637 = G__24654;
chunk__24633_24638 = G__24655;
count__24634_24639 = G__24656;
i__24635_24640 = G__24657;
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
var seq__24658_24662 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24659_24663 = null;
var count__24660_24664 = (0);
var i__24661_24665 = (0);
while(true){
if((i__24661_24665 < count__24660_24664)){
var node_24666 = cljs.core._nth.call(null,chunk__24659_24663,i__24661_24665);
goog.dom.setTextContent(node_24666,value);


var G__24667 = seq__24658_24662;
var G__24668 = chunk__24659_24663;
var G__24669 = count__24660_24664;
var G__24670 = (i__24661_24665 + (1));
seq__24658_24662 = G__24667;
chunk__24659_24663 = G__24668;
count__24660_24664 = G__24669;
i__24661_24665 = G__24670;
continue;
} else {
var temp__5720__auto___24671 = cljs.core.seq.call(null,seq__24658_24662);
if(temp__5720__auto___24671){
var seq__24658_24672__$1 = temp__5720__auto___24671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24658_24672__$1)){
var c__4550__auto___24673 = cljs.core.chunk_first.call(null,seq__24658_24672__$1);
var G__24674 = cljs.core.chunk_rest.call(null,seq__24658_24672__$1);
var G__24675 = c__4550__auto___24673;
var G__24676 = cljs.core.count.call(null,c__4550__auto___24673);
var G__24677 = (0);
seq__24658_24662 = G__24674;
chunk__24659_24663 = G__24675;
count__24660_24664 = G__24676;
i__24661_24665 = G__24677;
continue;
} else {
var node_24678 = cljs.core.first.call(null,seq__24658_24672__$1);
goog.dom.setTextContent(node_24678,value);


var G__24679 = cljs.core.next.call(null,seq__24658_24672__$1);
var G__24680 = null;
var G__24681 = (0);
var G__24682 = (0);
seq__24658_24662 = G__24679;
chunk__24659_24663 = G__24680;
count__24660_24664 = G__24681;
i__24661_24665 = G__24682;
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
var seq__24683_24687 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24684_24688 = null;
var count__24685_24689 = (0);
var i__24686_24690 = (0);
while(true){
if((i__24686_24690 < count__24685_24689)){
var node_24691 = cljs.core._nth.call(null,chunk__24684_24688,i__24686_24690);
goog.dom.forms.setValue(node_24691,value);


var G__24692 = seq__24683_24687;
var G__24693 = chunk__24684_24688;
var G__24694 = count__24685_24689;
var G__24695 = (i__24686_24690 + (1));
seq__24683_24687 = G__24692;
chunk__24684_24688 = G__24693;
count__24685_24689 = G__24694;
i__24686_24690 = G__24695;
continue;
} else {
var temp__5720__auto___24696 = cljs.core.seq.call(null,seq__24683_24687);
if(temp__5720__auto___24696){
var seq__24683_24697__$1 = temp__5720__auto___24696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24683_24697__$1)){
var c__4550__auto___24698 = cljs.core.chunk_first.call(null,seq__24683_24697__$1);
var G__24699 = cljs.core.chunk_rest.call(null,seq__24683_24697__$1);
var G__24700 = c__4550__auto___24698;
var G__24701 = cljs.core.count.call(null,c__4550__auto___24698);
var G__24702 = (0);
seq__24683_24687 = G__24699;
chunk__24684_24688 = G__24700;
count__24685_24689 = G__24701;
i__24686_24690 = G__24702;
continue;
} else {
var node_24703 = cljs.core.first.call(null,seq__24683_24697__$1);
goog.dom.forms.setValue(node_24703,value);


var G__24704 = cljs.core.next.call(null,seq__24683_24697__$1);
var G__24705 = null;
var G__24706 = (0);
var G__24707 = (0);
seq__24683_24687 = G__24704;
chunk__24684_24688 = G__24705;
count__24685_24689 = G__24706;
i__24686_24690 = G__24707;
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
var value_24713 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__24709_24714 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24710_24715 = null;
var count__24711_24716 = (0);
var i__24712_24717 = (0);
while(true){
if((i__24712_24717 < count__24711_24716)){
var node_24718 = cljs.core._nth.call(null,chunk__24710_24715,i__24712_24717);
node_24718.innerHTML = value_24713;


var G__24719 = seq__24709_24714;
var G__24720 = chunk__24710_24715;
var G__24721 = count__24711_24716;
var G__24722 = (i__24712_24717 + (1));
seq__24709_24714 = G__24719;
chunk__24710_24715 = G__24720;
count__24711_24716 = G__24721;
i__24712_24717 = G__24722;
continue;
} else {
var temp__5720__auto___24723 = cljs.core.seq.call(null,seq__24709_24714);
if(temp__5720__auto___24723){
var seq__24709_24724__$1 = temp__5720__auto___24723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24709_24724__$1)){
var c__4550__auto___24725 = cljs.core.chunk_first.call(null,seq__24709_24724__$1);
var G__24726 = cljs.core.chunk_rest.call(null,seq__24709_24724__$1);
var G__24727 = c__4550__auto___24725;
var G__24728 = cljs.core.count.call(null,c__4550__auto___24725);
var G__24729 = (0);
seq__24709_24714 = G__24726;
chunk__24710_24715 = G__24727;
count__24711_24716 = G__24728;
i__24712_24717 = G__24729;
continue;
} else {
var node_24730 = cljs.core.first.call(null,seq__24709_24724__$1);
node_24730.innerHTML = value_24713;


var G__24731 = cljs.core.next.call(null,seq__24709_24724__$1);
var G__24732 = null;
var G__24733 = (0);
var G__24734 = (0);
seq__24709_24714 = G__24731;
chunk__24710_24715 = G__24732;
count__24711_24716 = G__24733;
i__24712_24717 = G__24734;
continue;
}
} else {
}
}
break;
}
}catch (e24708){if((e24708 instanceof Error)){
var e_24735 = e24708;
domina.replace_children_BANG_.call(null,content,value_24713);
} else {
throw e24708;

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
var G__24737 = arguments.length;
switch (G__24737) {
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
var seq__24741_24745 = cljs.core.seq.call(null,children);
var chunk__24742_24746 = null;
var count__24743_24747 = (0);
var i__24744_24748 = (0);
while(true){
if((i__24744_24748 < count__24743_24747)){
var child_24749 = cljs.core._nth.call(null,chunk__24742_24746,i__24744_24748);
frag.appendChild(child_24749);


var G__24750 = seq__24741_24745;
var G__24751 = chunk__24742_24746;
var G__24752 = count__24743_24747;
var G__24753 = (i__24744_24748 + (1));
seq__24741_24745 = G__24750;
chunk__24742_24746 = G__24751;
count__24743_24747 = G__24752;
i__24744_24748 = G__24753;
continue;
} else {
var temp__5720__auto___24754 = cljs.core.seq.call(null,seq__24741_24745);
if(temp__5720__auto___24754){
var seq__24741_24755__$1 = temp__5720__auto___24754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24741_24755__$1)){
var c__4550__auto___24756 = cljs.core.chunk_first.call(null,seq__24741_24755__$1);
var G__24757 = cljs.core.chunk_rest.call(null,seq__24741_24755__$1);
var G__24758 = c__4550__auto___24756;
var G__24759 = cljs.core.count.call(null,c__4550__auto___24756);
var G__24760 = (0);
seq__24741_24745 = G__24757;
chunk__24742_24746 = G__24758;
count__24743_24747 = G__24759;
i__24744_24748 = G__24760;
continue;
} else {
var child_24761 = cljs.core.first.call(null,seq__24741_24755__$1);
frag.appendChild(child_24761);


var G__24762 = cljs.core.next.call(null,seq__24741_24755__$1);
var G__24763 = null;
var G__24764 = (0);
var G__24765 = (0);
seq__24741_24745 = G__24762;
chunk__24742_24746 = G__24763;
count__24743_24747 = G__24764;
i__24744_24748 = G__24765;
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
return (function (p1__24739_SHARP_,p2__24740_SHARP_){
return f.call(null,p1__24739_SHARP_,p2__24740_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__24767 = arguments.length;
switch (G__24767) {
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
var G__24770 = arguments.length;
switch (G__24770) {
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

//# sourceMappingURL=domina.js.map?rel=1568097122818
