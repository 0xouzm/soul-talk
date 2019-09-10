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
if((typeof domina !== 'undefined') && (typeof domina.events !== 'undefined') && (typeof domina.events.t_domina$events23570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events23570 = (function (f,evt,meta23571){
this.f = f;
this.evt = evt;
this.meta23571 = meta23571;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
domina.events.t_domina$events23570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23572,meta23571__$1){
var self__ = this;
var _23572__$1 = this;
return (new domina.events.t_domina$events23570(self__.f,self__.evt,meta23571__$1));
});

domina.events.t_domina$events23570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23572){
var self__ = this;
var _23572__$1 = this;
return self__.meta23571;
});

domina.events.t_domina$events23570.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL;

domina.events.t_domina$events23570.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events23570.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events23570.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events23570.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events23570.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events23570.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events23570.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events23570.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4131__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events23570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta23571","meta23571",643199602,null)], null);
});

domina.events.t_domina$events23570.cljs$lang$type = true;

domina.events.t_domina$events23570.cljs$lang$ctorStr = "domina.events/t_domina$events23570";

domina.events.t_domina$events23570.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"domina.events/t_domina$events23570");
});

/**
 * Positional factory function for domina.events/t_domina$events23570.
 */
domina.events.__GT_t_domina$events23570 = (function domina$events$create_listener_function_$___GT_t_domina$events23570(f__$1,evt__$1,meta23571){
return (new domina.events.t_domina$events23570(f__$1,evt__$1,meta23571));
});

}

return (new domina.events.t_domina$events23570(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__23573(s__23574){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__23574__$1 = s__23574;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__23574__$1);
if(temp__5720__auto__){
var s__23574__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23574__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23574__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23576 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23575 = (0);
while(true){
if((i__23575 < size__4522__auto__)){
var node = cljs.core._nth.call(null,c__4521__auto__,i__23575);
cljs.core.chunk_append.call(null,b__23576,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__23577 = (i__23575 + (1));
i__23575 = G__23577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23576),domina$events$listen_internal_BANG__$_iter__23573.call(null,cljs.core.chunk_rest.call(null,s__23574__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23576),null);
}
} else {
var node = cljs.core.first.call(null,s__23574__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__23573.call(null,cljs.core.rest.call(null,s__23574__$2)));
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
var G__23579 = arguments.length;
switch (G__23579) {
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
var G__23582 = arguments.length;
switch (G__23582) {
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
var G__23585 = arguments.length;
switch (G__23585) {
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
var G__23588 = arguments.length;
switch (G__23588) {
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
var G__23591 = arguments.length;
switch (G__23591) {
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
var seq__23592 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23593 = null;
var count__23594 = (0);
var i__23595 = (0);
while(true){
if((i__23595 < count__23594)){
var node = cljs.core._nth.call(null,chunk__23593,i__23595);
goog.events.removeAll(node);


var G__23601 = seq__23592;
var G__23602 = chunk__23593;
var G__23603 = count__23594;
var G__23604 = (i__23595 + (1));
seq__23592 = G__23601;
chunk__23593 = G__23602;
count__23594 = G__23603;
i__23595 = G__23604;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23592);
if(temp__5720__auto__){
var seq__23592__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23592__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23592__$1);
var G__23605 = cljs.core.chunk_rest.call(null,seq__23592__$1);
var G__23606 = c__4550__auto__;
var G__23607 = cljs.core.count.call(null,c__4550__auto__);
var G__23608 = (0);
seq__23592 = G__23605;
chunk__23593 = G__23606;
count__23594 = G__23607;
i__23595 = G__23608;
continue;
} else {
var node = cljs.core.first.call(null,seq__23592__$1);
goog.events.removeAll(node);


var G__23609 = cljs.core.next.call(null,seq__23592__$1);
var G__23610 = null;
var G__23611 = (0);
var G__23612 = (0);
seq__23592 = G__23609;
chunk__23593 = G__23610;
count__23594 = G__23611;
i__23595 = G__23612;
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
var seq__23596 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23597 = null;
var count__23598 = (0);
var i__23599 = (0);
while(true){
if((i__23599 < count__23598)){
var node = cljs.core._nth.call(null,chunk__23597,i__23599);
goog.events.removeAll(node,type__$1);


var G__23613 = seq__23596;
var G__23614 = chunk__23597;
var G__23615 = count__23598;
var G__23616 = (i__23599 + (1));
seq__23596 = G__23613;
chunk__23597 = G__23614;
count__23598 = G__23615;
i__23599 = G__23616;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23596);
if(temp__5720__auto__){
var seq__23596__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23596__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23596__$1);
var G__23617 = cljs.core.chunk_rest.call(null,seq__23596__$1);
var G__23618 = c__4550__auto__;
var G__23619 = cljs.core.count.call(null,c__4550__auto__);
var G__23620 = (0);
seq__23596 = G__23617;
chunk__23597 = G__23618;
count__23598 = G__23619;
i__23599 = G__23620;
continue;
} else {
var node = cljs.core.first.call(null,seq__23596__$1);
goog.events.removeAll(node,type__$1);


var G__23621 = cljs.core.next.call(null,seq__23596__$1);
var G__23622 = null;
var G__23623 = (0);
var G__23624 = (0);
seq__23596 = G__23621;
chunk__23597 = G__23622;
count__23598 = G__23623;
i__23599 = G__23624;
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
var G__23626 = arguments.length;
switch (G__23626) {
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
var G__23628 = parent;
var G__23629 = cljs.core.cons.call(null,parent,so_far);
n = G__23628;
so_far = G__23629;
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
var seq__23630_23638 = cljs.core.seq.call(null,ancestors);
var chunk__23631_23639 = null;
var count__23632_23640 = (0);
var i__23633_23641 = (0);
while(true){
if((i__23633_23641 < count__23632_23640)){
var n_23642 = cljs.core._nth.call(null,chunk__23631_23639,i__23633_23641);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_23642;

goog.events.fireListeners(n_23642,evt.type,true,evt);
}


var G__23643 = seq__23630_23638;
var G__23644 = chunk__23631_23639;
var G__23645 = count__23632_23640;
var G__23646 = (i__23633_23641 + (1));
seq__23630_23638 = G__23643;
chunk__23631_23639 = G__23644;
count__23632_23640 = G__23645;
i__23633_23641 = G__23646;
continue;
} else {
var temp__5720__auto___23647 = cljs.core.seq.call(null,seq__23630_23638);
if(temp__5720__auto___23647){
var seq__23630_23648__$1 = temp__5720__auto___23647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23630_23648__$1)){
var c__4550__auto___23649 = cljs.core.chunk_first.call(null,seq__23630_23648__$1);
var G__23650 = cljs.core.chunk_rest.call(null,seq__23630_23648__$1);
var G__23651 = c__4550__auto___23649;
var G__23652 = cljs.core.count.call(null,c__4550__auto___23649);
var G__23653 = (0);
seq__23630_23638 = G__23650;
chunk__23631_23639 = G__23651;
count__23632_23640 = G__23652;
i__23633_23641 = G__23653;
continue;
} else {
var n_23654 = cljs.core.first.call(null,seq__23630_23648__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_23654;

goog.events.fireListeners(n_23654,evt.type,true,evt);
}


var G__23655 = cljs.core.next.call(null,seq__23630_23648__$1);
var G__23656 = null;
var G__23657 = (0);
var G__23658 = (0);
seq__23630_23638 = G__23655;
chunk__23631_23639 = G__23656;
count__23632_23640 = G__23657;
i__23633_23641 = G__23658;
continue;
}
} else {
}
}
break;
}

var seq__23634_23659 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__23635_23660 = null;
var count__23636_23661 = (0);
var i__23637_23662 = (0);
while(true){
if((i__23637_23662 < count__23636_23661)){
var n_23663 = cljs.core._nth.call(null,chunk__23635_23660,i__23637_23662);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_23663;

goog.events.fireListeners(n_23663,evt.type,false,evt);
}


var G__23664 = seq__23634_23659;
var G__23665 = chunk__23635_23660;
var G__23666 = count__23636_23661;
var G__23667 = (i__23637_23662 + (1));
seq__23634_23659 = G__23664;
chunk__23635_23660 = G__23665;
count__23636_23661 = G__23666;
i__23637_23662 = G__23667;
continue;
} else {
var temp__5720__auto___23668 = cljs.core.seq.call(null,seq__23634_23659);
if(temp__5720__auto___23668){
var seq__23634_23669__$1 = temp__5720__auto___23668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23634_23669__$1)){
var c__4550__auto___23670 = cljs.core.chunk_first.call(null,seq__23634_23669__$1);
var G__23671 = cljs.core.chunk_rest.call(null,seq__23634_23669__$1);
var G__23672 = c__4550__auto___23670;
var G__23673 = cljs.core.count.call(null,c__4550__auto___23670);
var G__23674 = (0);
seq__23634_23659 = G__23671;
chunk__23635_23660 = G__23672;
count__23636_23661 = G__23673;
i__23637_23662 = G__23674;
continue;
} else {
var n_23675 = cljs.core.first.call(null,seq__23634_23669__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_23675;

goog.events.fireListeners(n_23675,evt.type,false,evt);
}


var G__23676 = cljs.core.next.call(null,seq__23634_23669__$1);
var G__23677 = null;
var G__23678 = (0);
var G__23679 = (0);
seq__23634_23659 = G__23676;
chunk__23635_23660 = G__23677;
count__23636_23661 = G__23678;
i__23637_23662 = G__23679;
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
var G__23681 = arguments.length;
switch (G__23681) {
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
var seq__23682_23699 = cljs.core.seq.call(null,evt_map);
var chunk__23683_23700 = null;
var count__23684_23701 = (0);
var i__23685_23702 = (0);
while(true){
if((i__23685_23702 < count__23684_23701)){
var vec__23692_23703 = cljs.core._nth.call(null,chunk__23683_23700,i__23685_23702);
var k_23704 = cljs.core.nth.call(null,vec__23692_23703,(0),null);
var v_23705 = cljs.core.nth.call(null,vec__23692_23703,(1),null);
(evt[k_23704] = v_23705);


var G__23706 = seq__23682_23699;
var G__23707 = chunk__23683_23700;
var G__23708 = count__23684_23701;
var G__23709 = (i__23685_23702 + (1));
seq__23682_23699 = G__23706;
chunk__23683_23700 = G__23707;
count__23684_23701 = G__23708;
i__23685_23702 = G__23709;
continue;
} else {
var temp__5720__auto___23710 = cljs.core.seq.call(null,seq__23682_23699);
if(temp__5720__auto___23710){
var seq__23682_23711__$1 = temp__5720__auto___23710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23682_23711__$1)){
var c__4550__auto___23712 = cljs.core.chunk_first.call(null,seq__23682_23711__$1);
var G__23713 = cljs.core.chunk_rest.call(null,seq__23682_23711__$1);
var G__23714 = c__4550__auto___23712;
var G__23715 = cljs.core.count.call(null,c__4550__auto___23712);
var G__23716 = (0);
seq__23682_23699 = G__23713;
chunk__23683_23700 = G__23714;
count__23684_23701 = G__23715;
i__23685_23702 = G__23716;
continue;
} else {
var vec__23695_23717 = cljs.core.first.call(null,seq__23682_23711__$1);
var k_23718 = cljs.core.nth.call(null,vec__23695_23717,(0),null);
var v_23719 = cljs.core.nth.call(null,vec__23695_23717,(1),null);
(evt[k_23718] = v_23719);


var G__23720 = cljs.core.next.call(null,seq__23682_23711__$1);
var G__23721 = null;
var G__23722 = (0);
var G__23723 = (0);
seq__23682_23699 = G__23720;
chunk__23683_23700 = G__23721;
count__23684_23701 = G__23722;
i__23685_23702 = G__23723;
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
return (function (p1__23724_SHARP_){
return goog.events.getListeners(p1__23724_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map?rel=1568085253298
