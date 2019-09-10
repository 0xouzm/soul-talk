// Compiled by ClojureScript 1.10.520 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.object');
goog.require('goog.events');

/**
 * @interface
 */
domina.events.Event = function(){};

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$prevent_default$arity$1 == null)))))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__4433__auto__ = (((evt == null))?null:evt);
var m__4434__auto__ = (domina.events.prevent_default[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,evt);
} else {
var m__4431__auto__ = (domina.events.prevent_default["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$stop_propagation$arity$1 == null)))))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__4433__auto__ = (((evt == null))?null:evt);
var m__4434__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,evt);
} else {
var m__4431__auto__ = (domina.events.stop_propagation["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$target$arity$1 == null)))))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__4433__auto__ = (((evt == null))?null:evt);
var m__4434__auto__ = (domina.events.target[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,evt);
} else {
var m__4431__auto__ = (domina.events.target["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$current_target$arity$1 == null)))))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__4433__auto__ = (((evt == null))?null:evt);
var m__4434__auto__ = (domina.events.current_target[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,evt);
} else {
var m__4431__auto__ = (domina.events.current_target["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$event_type$arity$1 == null)))))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__4433__auto__ = (((evt == null))?null:evt);
var m__4434__auto__ = (domina.events.event_type[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,evt);
} else {
var m__4431__auto__ = (domina.events.event_type["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$raw_event$arity$1 == null)))))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__4433__auto__ = (((evt == null))?null:evt);
var m__4434__auto__ = (domina.events.raw_event[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,evt);
} else {
var m__4431__auto__ = (domina.events.raw_event["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if((typeof domina !== 'undefined') && (typeof domina.events !== 'undefined') && (typeof domina.events.t_domina$events24934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events24934 = (function (f,evt,meta24935){
this.f = f;
this.evt = evt;
this.meta24935 = meta24935;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
domina.events.t_domina$events24934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24936,meta24935__$1){
var self__ = this;
var _24936__$1 = this;
return (new domina.events.t_domina$events24934(self__.f,self__.evt,meta24935__$1));
});

domina.events.t_domina$events24934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24936){
var self__ = this;
var _24936__$1 = this;
return self__.meta24935;
});

domina.events.t_domina$events24934.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL;

domina.events.t_domina$events24934.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events24934.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events24934.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events24934.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events24934.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events24934.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events24934.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__5718__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__5718__auto__)){
var val = temp__5718__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t_domina$events24934.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4131__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events24934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta24935","meta24935",1308297005,null)], null);
});

domina.events.t_domina$events24934.cljs$lang$type = true;

domina.events.t_domina$events24934.cljs$lang$ctorStr = "domina.events/t_domina$events24934";

domina.events.t_domina$events24934.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"domina.events/t_domina$events24934");
});

/**
 * Positional factory function for domina.events/t_domina$events24934.
 */
domina.events.__GT_t_domina$events24934 = (function domina$events$create_listener_function_$___GT_t_domina$events24934(f__$1,evt__$1,meta24935){
return (new domina.events.t_domina$events24934(f__$1,evt__$1,meta24935));
});

}

return (new domina.events.t_domina$events24934(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__24937(s__24938){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__24938__$1 = s__24938;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__24938__$1);
if(temp__5720__auto__){
var s__24938__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24938__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__24938__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__24940 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__24939 = (0);
while(true){
if((i__24939 < size__4522__auto__)){
var node = cljs.core._nth.call(null,c__4521__auto__,i__24939);
cljs.core.chunk_append.call(null,b__24940,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__24941 = (i__24939 + (1));
i__24939 = G__24941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24940),domina$events$listen_internal_BANG__$_iter__24937.call(null,cljs.core.chunk_rest.call(null,s__24938__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24940),null);
}
} else {
var node = cljs.core.first.call(null,s__24938__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__24937.call(null,cljs.core.rest.call(null,s__24938__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__4523__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var G__24943 = arguments.length;
switch (G__24943) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});

domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(var_args){
var G__24946 = arguments.length;
switch (G__24946) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});

domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(var_args){
var G__24949 = arguments.length;
switch (G__24949) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});

domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(var_args){
var G__24952 = arguments.length;
switch (G__24952) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});

domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(var_args){
var G__24955 = arguments.length;
switch (G__24955) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__24956 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24957 = null;
var count__24958 = (0);
var i__24959 = (0);
while(true){
if((i__24959 < count__24958)){
var node = cljs.core._nth.call(null,chunk__24957,i__24959);
goog.events.removeAll(node);


var G__24965 = seq__24956;
var G__24966 = chunk__24957;
var G__24967 = count__24958;
var G__24968 = (i__24959 + (1));
seq__24956 = G__24965;
chunk__24957 = G__24966;
count__24958 = G__24967;
i__24959 = G__24968;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24956);
if(temp__5720__auto__){
var seq__24956__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24956__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24956__$1);
var G__24969 = cljs.core.chunk_rest.call(null,seq__24956__$1);
var G__24970 = c__4550__auto__;
var G__24971 = cljs.core.count.call(null,c__4550__auto__);
var G__24972 = (0);
seq__24956 = G__24969;
chunk__24957 = G__24970;
count__24958 = G__24971;
i__24959 = G__24972;
continue;
} else {
var node = cljs.core.first.call(null,seq__24956__$1);
goog.events.removeAll(node);


var G__24973 = cljs.core.next.call(null,seq__24956__$1);
var G__24974 = null;
var G__24975 = (0);
var G__24976 = (0);
seq__24956 = G__24973;
chunk__24957 = G__24974;
count__24958 = G__24975;
i__24959 = G__24976;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__24960 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24961 = null;
var count__24962 = (0);
var i__24963 = (0);
while(true){
if((i__24963 < count__24962)){
var node = cljs.core._nth.call(null,chunk__24961,i__24963);
goog.events.removeAll(node,type__$1);


var G__24977 = seq__24960;
var G__24978 = chunk__24961;
var G__24979 = count__24962;
var G__24980 = (i__24963 + (1));
seq__24960 = G__24977;
chunk__24961 = G__24978;
count__24962 = G__24979;
i__24963 = G__24980;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24960);
if(temp__5720__auto__){
var seq__24960__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24960__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24960__$1);
var G__24981 = cljs.core.chunk_rest.call(null,seq__24960__$1);
var G__24982 = c__4550__auto__;
var G__24983 = cljs.core.count.call(null,c__4550__auto__);
var G__24984 = (0);
seq__24960 = G__24981;
chunk__24961 = G__24982;
count__24962 = G__24983;
i__24963 = G__24984;
continue;
} else {
var node = cljs.core.first.call(null,seq__24960__$1);
goog.events.removeAll(node,type__$1);


var G__24985 = cljs.core.next.call(null,seq__24960__$1);
var G__24986 = null;
var G__24987 = (0);
var G__24988 = (0);
seq__24960 = G__24985;
chunk__24961 = G__24986;
count__24962 = G__24987;
i__24963 = G__24988;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(var_args){
var G__24990 = arguments.length;
switch (G__24990) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__5718__auto__ = n.parentNode;
if(cljs.core.truth_(temp__5718__auto__)){
var parent = temp__5718__auto__;
var G__24992 = parent;
var G__24993 = cljs.core.cons.call(null,parent,so_far);
n = G__24992;
so_far = G__24993;
continue;
} else {
return so_far;
}
break;
}
});

domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2;

/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
evt.target = domina.single_node.call(null,source);

var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__24994_25002 = cljs.core.seq.call(null,ancestors);
var chunk__24995_25003 = null;
var count__24996_25004 = (0);
var i__24997_25005 = (0);
while(true){
if((i__24997_25005 < count__24996_25004)){
var n_25006 = cljs.core._nth.call(null,chunk__24995_25003,i__24997_25005);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_25006;

goog.events.fireListeners(n_25006,evt.type,true,evt);
}


var G__25007 = seq__24994_25002;
var G__25008 = chunk__24995_25003;
var G__25009 = count__24996_25004;
var G__25010 = (i__24997_25005 + (1));
seq__24994_25002 = G__25007;
chunk__24995_25003 = G__25008;
count__24996_25004 = G__25009;
i__24997_25005 = G__25010;
continue;
} else {
var temp__5720__auto___25011 = cljs.core.seq.call(null,seq__24994_25002);
if(temp__5720__auto___25011){
var seq__24994_25012__$1 = temp__5720__auto___25011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24994_25012__$1)){
var c__4550__auto___25013 = cljs.core.chunk_first.call(null,seq__24994_25012__$1);
var G__25014 = cljs.core.chunk_rest.call(null,seq__24994_25012__$1);
var G__25015 = c__4550__auto___25013;
var G__25016 = cljs.core.count.call(null,c__4550__auto___25013);
var G__25017 = (0);
seq__24994_25002 = G__25014;
chunk__24995_25003 = G__25015;
count__24996_25004 = G__25016;
i__24997_25005 = G__25017;
continue;
} else {
var n_25018 = cljs.core.first.call(null,seq__24994_25012__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_25018;

goog.events.fireListeners(n_25018,evt.type,true,evt);
}


var G__25019 = cljs.core.next.call(null,seq__24994_25012__$1);
var G__25020 = null;
var G__25021 = (0);
var G__25022 = (0);
seq__24994_25002 = G__25019;
chunk__24995_25003 = G__25020;
count__24996_25004 = G__25021;
i__24997_25005 = G__25022;
continue;
}
} else {
}
}
break;
}

var seq__24998_25023 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__24999_25024 = null;
var count__25000_25025 = (0);
var i__25001_25026 = (0);
while(true){
if((i__25001_25026 < count__25000_25025)){
var n_25027 = cljs.core._nth.call(null,chunk__24999_25024,i__25001_25026);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_25027;

goog.events.fireListeners(n_25027,evt.type,false,evt);
}


var G__25028 = seq__24998_25023;
var G__25029 = chunk__24999_25024;
var G__25030 = count__25000_25025;
var G__25031 = (i__25001_25026 + (1));
seq__24998_25023 = G__25028;
chunk__24999_25024 = G__25029;
count__25000_25025 = G__25030;
i__25001_25026 = G__25031;
continue;
} else {
var temp__5720__auto___25032 = cljs.core.seq.call(null,seq__24998_25023);
if(temp__5720__auto___25032){
var seq__24998_25033__$1 = temp__5720__auto___25032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24998_25033__$1)){
var c__4550__auto___25034 = cljs.core.chunk_first.call(null,seq__24998_25033__$1);
var G__25035 = cljs.core.chunk_rest.call(null,seq__24998_25033__$1);
var G__25036 = c__4550__auto___25034;
var G__25037 = cljs.core.count.call(null,c__4550__auto___25034);
var G__25038 = (0);
seq__24998_25023 = G__25035;
chunk__24999_25024 = G__25036;
count__25000_25025 = G__25037;
i__25001_25026 = G__25038;
continue;
} else {
var n_25039 = cljs.core.first.call(null,seq__24998_25033__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_25039;

goog.events.fireListeners(n_25039,evt.type,false,evt);
}


var G__25040 = cljs.core.next.call(null,seq__24998_25033__$1);
var G__25041 = null;
var G__25042 = (0);
var G__25043 = (0);
seq__24998_25023 = G__25040;
chunk__24999_25024 = G__25041;
count__25000_25025 = G__25042;
i__25001_25026 = G__25043;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__4120__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__4120__auto__)){
return o.dispatchEvent;
} else {
return and__4120__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var G__25045 = arguments.length;
switch (G__25045) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__25046_25063 = cljs.core.seq.call(null,evt_map);
var chunk__25047_25064 = null;
var count__25048_25065 = (0);
var i__25049_25066 = (0);
while(true){
if((i__25049_25066 < count__25048_25065)){
var vec__25056_25067 = cljs.core._nth.call(null,chunk__25047_25064,i__25049_25066);
var k_25068 = cljs.core.nth.call(null,vec__25056_25067,(0),null);
var v_25069 = cljs.core.nth.call(null,vec__25056_25067,(1),null);
(evt[k_25068] = v_25069);


var G__25070 = seq__25046_25063;
var G__25071 = chunk__25047_25064;
var G__25072 = count__25048_25065;
var G__25073 = (i__25049_25066 + (1));
seq__25046_25063 = G__25070;
chunk__25047_25064 = G__25071;
count__25048_25065 = G__25072;
i__25049_25066 = G__25073;
continue;
} else {
var temp__5720__auto___25074 = cljs.core.seq.call(null,seq__25046_25063);
if(temp__5720__auto___25074){
var seq__25046_25075__$1 = temp__5720__auto___25074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25046_25075__$1)){
var c__4550__auto___25076 = cljs.core.chunk_first.call(null,seq__25046_25075__$1);
var G__25077 = cljs.core.chunk_rest.call(null,seq__25046_25075__$1);
var G__25078 = c__4550__auto___25076;
var G__25079 = cljs.core.count.call(null,c__4550__auto___25076);
var G__25080 = (0);
seq__25046_25063 = G__25077;
chunk__25047_25064 = G__25078;
count__25048_25065 = G__25079;
i__25049_25066 = G__25080;
continue;
} else {
var vec__25059_25081 = cljs.core.first.call(null,seq__25046_25075__$1);
var k_25082 = cljs.core.nth.call(null,vec__25059_25081,(0),null);
var v_25083 = cljs.core.nth.call(null,vec__25059_25081,(1),null);
(evt[k_25082] = v_25083);


var G__25084 = cljs.core.next.call(null,seq__25046_25075__$1);
var G__25085 = null;
var G__25086 = (0);
var G__25087 = (0);
seq__25046_25063 = G__25084;
chunk__25047_25064 = G__25085;
count__25048_25065 = G__25086;
i__25049_25066 = G__25087;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});

domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__25088_SHARP_){
return goog.events.getListeners(p1__25088_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map?rel=1568097123023
