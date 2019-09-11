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
if((typeof domina !== 'undefined') && (typeof domina.events !== 'undefined') && (typeof domina.events.t_domina$events26423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events26423 = (function (f,evt,meta26424){
this.f = f;
this.evt = evt;
this.meta26424 = meta26424;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
domina.events.t_domina$events26423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26425,meta26424__$1){
var self__ = this;
var _26425__$1 = this;
return (new domina.events.t_domina$events26423(self__.f,self__.evt,meta26424__$1));
});

domina.events.t_domina$events26423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26425){
var self__ = this;
var _26425__$1 = this;
return self__.meta26424;
});

domina.events.t_domina$events26423.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL;

domina.events.t_domina$events26423.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events26423.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events26423.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events26423.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events26423.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events26423.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events26423.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events26423.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4131__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events26423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta26424","meta26424",1956386191,null)], null);
});

domina.events.t_domina$events26423.cljs$lang$type = true;

domina.events.t_domina$events26423.cljs$lang$ctorStr = "domina.events/t_domina$events26423";

domina.events.t_domina$events26423.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"domina.events/t_domina$events26423");
});

/**
 * Positional factory function for domina.events/t_domina$events26423.
 */
domina.events.__GT_t_domina$events26423 = (function domina$events$create_listener_function_$___GT_t_domina$events26423(f__$1,evt__$1,meta26424){
return (new domina.events.t_domina$events26423(f__$1,evt__$1,meta26424));
});

}

return (new domina.events.t_domina$events26423(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__26426(s__26427){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__26427__$1 = s__26427;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26427__$1);
if(temp__5720__auto__){
var s__26427__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26427__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26427__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26429 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26428 = (0);
while(true){
if((i__26428 < size__4522__auto__)){
var node = cljs.core._nth.call(null,c__4521__auto__,i__26428);
cljs.core.chunk_append.call(null,b__26429,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__26430 = (i__26428 + (1));
i__26428 = G__26430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26429),domina$events$listen_internal_BANG__$_iter__26426.call(null,cljs.core.chunk_rest.call(null,s__26427__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26429),null);
}
} else {
var node = cljs.core.first.call(null,s__26427__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__26426.call(null,cljs.core.rest.call(null,s__26427__$2)));
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
var G__26432 = arguments.length;
switch (G__26432) {
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
var G__26435 = arguments.length;
switch (G__26435) {
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
var G__26438 = arguments.length;
switch (G__26438) {
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
var G__26441 = arguments.length;
switch (G__26441) {
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
var G__26444 = arguments.length;
switch (G__26444) {
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
var seq__26445 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__26446 = null;
var count__26447 = (0);
var i__26448 = (0);
while(true){
if((i__26448 < count__26447)){
var node = cljs.core._nth.call(null,chunk__26446,i__26448);
goog.events.removeAll(node);


var G__26454 = seq__26445;
var G__26455 = chunk__26446;
var G__26456 = count__26447;
var G__26457 = (i__26448 + (1));
seq__26445 = G__26454;
chunk__26446 = G__26455;
count__26447 = G__26456;
i__26448 = G__26457;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26445);
if(temp__5720__auto__){
var seq__26445__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26445__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26445__$1);
var G__26458 = cljs.core.chunk_rest.call(null,seq__26445__$1);
var G__26459 = c__4550__auto__;
var G__26460 = cljs.core.count.call(null,c__4550__auto__);
var G__26461 = (0);
seq__26445 = G__26458;
chunk__26446 = G__26459;
count__26447 = G__26460;
i__26448 = G__26461;
continue;
} else {
var node = cljs.core.first.call(null,seq__26445__$1);
goog.events.removeAll(node);


var G__26462 = cljs.core.next.call(null,seq__26445__$1);
var G__26463 = null;
var G__26464 = (0);
var G__26465 = (0);
seq__26445 = G__26462;
chunk__26446 = G__26463;
count__26447 = G__26464;
i__26448 = G__26465;
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
var seq__26449 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__26450 = null;
var count__26451 = (0);
var i__26452 = (0);
while(true){
if((i__26452 < count__26451)){
var node = cljs.core._nth.call(null,chunk__26450,i__26452);
goog.events.removeAll(node,type__$1);


var G__26466 = seq__26449;
var G__26467 = chunk__26450;
var G__26468 = count__26451;
var G__26469 = (i__26452 + (1));
seq__26449 = G__26466;
chunk__26450 = G__26467;
count__26451 = G__26468;
i__26452 = G__26469;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26449);
if(temp__5720__auto__){
var seq__26449__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26449__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26449__$1);
var G__26470 = cljs.core.chunk_rest.call(null,seq__26449__$1);
var G__26471 = c__4550__auto__;
var G__26472 = cljs.core.count.call(null,c__4550__auto__);
var G__26473 = (0);
seq__26449 = G__26470;
chunk__26450 = G__26471;
count__26451 = G__26472;
i__26452 = G__26473;
continue;
} else {
var node = cljs.core.first.call(null,seq__26449__$1);
goog.events.removeAll(node,type__$1);


var G__26474 = cljs.core.next.call(null,seq__26449__$1);
var G__26475 = null;
var G__26476 = (0);
var G__26477 = (0);
seq__26449 = G__26474;
chunk__26450 = G__26475;
count__26451 = G__26476;
i__26452 = G__26477;
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
var G__26479 = arguments.length;
switch (G__26479) {
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
var G__26481 = parent;
var G__26482 = cljs.core.cons.call(null,parent,so_far);
n = G__26481;
so_far = G__26482;
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
var seq__26483_26491 = cljs.core.seq.call(null,ancestors);
var chunk__26484_26492 = null;
var count__26485_26493 = (0);
var i__26486_26494 = (0);
while(true){
if((i__26486_26494 < count__26485_26493)){
var n_26495 = cljs.core._nth.call(null,chunk__26484_26492,i__26486_26494);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_26495;

goog.events.fireListeners(n_26495,evt.type,true,evt);
}


var G__26496 = seq__26483_26491;
var G__26497 = chunk__26484_26492;
var G__26498 = count__26485_26493;
var G__26499 = (i__26486_26494 + (1));
seq__26483_26491 = G__26496;
chunk__26484_26492 = G__26497;
count__26485_26493 = G__26498;
i__26486_26494 = G__26499;
continue;
} else {
var temp__5720__auto___26500 = cljs.core.seq.call(null,seq__26483_26491);
if(temp__5720__auto___26500){
var seq__26483_26501__$1 = temp__5720__auto___26500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26483_26501__$1)){
var c__4550__auto___26502 = cljs.core.chunk_first.call(null,seq__26483_26501__$1);
var G__26503 = cljs.core.chunk_rest.call(null,seq__26483_26501__$1);
var G__26504 = c__4550__auto___26502;
var G__26505 = cljs.core.count.call(null,c__4550__auto___26502);
var G__26506 = (0);
seq__26483_26491 = G__26503;
chunk__26484_26492 = G__26504;
count__26485_26493 = G__26505;
i__26486_26494 = G__26506;
continue;
} else {
var n_26507 = cljs.core.first.call(null,seq__26483_26501__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_26507;

goog.events.fireListeners(n_26507,evt.type,true,evt);
}


var G__26508 = cljs.core.next.call(null,seq__26483_26501__$1);
var G__26509 = null;
var G__26510 = (0);
var G__26511 = (0);
seq__26483_26491 = G__26508;
chunk__26484_26492 = G__26509;
count__26485_26493 = G__26510;
i__26486_26494 = G__26511;
continue;
}
} else {
}
}
break;
}

var seq__26487_26512 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__26488_26513 = null;
var count__26489_26514 = (0);
var i__26490_26515 = (0);
while(true){
if((i__26490_26515 < count__26489_26514)){
var n_26516 = cljs.core._nth.call(null,chunk__26488_26513,i__26490_26515);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_26516;

goog.events.fireListeners(n_26516,evt.type,false,evt);
}


var G__26517 = seq__26487_26512;
var G__26518 = chunk__26488_26513;
var G__26519 = count__26489_26514;
var G__26520 = (i__26490_26515 + (1));
seq__26487_26512 = G__26517;
chunk__26488_26513 = G__26518;
count__26489_26514 = G__26519;
i__26490_26515 = G__26520;
continue;
} else {
var temp__5720__auto___26521 = cljs.core.seq.call(null,seq__26487_26512);
if(temp__5720__auto___26521){
var seq__26487_26522__$1 = temp__5720__auto___26521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26487_26522__$1)){
var c__4550__auto___26523 = cljs.core.chunk_first.call(null,seq__26487_26522__$1);
var G__26524 = cljs.core.chunk_rest.call(null,seq__26487_26522__$1);
var G__26525 = c__4550__auto___26523;
var G__26526 = cljs.core.count.call(null,c__4550__auto___26523);
var G__26527 = (0);
seq__26487_26512 = G__26524;
chunk__26488_26513 = G__26525;
count__26489_26514 = G__26526;
i__26490_26515 = G__26527;
continue;
} else {
var n_26528 = cljs.core.first.call(null,seq__26487_26522__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_26528;

goog.events.fireListeners(n_26528,evt.type,false,evt);
}


var G__26529 = cljs.core.next.call(null,seq__26487_26522__$1);
var G__26530 = null;
var G__26531 = (0);
var G__26532 = (0);
seq__26487_26512 = G__26529;
chunk__26488_26513 = G__26530;
count__26489_26514 = G__26531;
i__26490_26515 = G__26532;
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
var G__26534 = arguments.length;
switch (G__26534) {
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
var seq__26535_26552 = cljs.core.seq.call(null,evt_map);
var chunk__26536_26553 = null;
var count__26537_26554 = (0);
var i__26538_26555 = (0);
while(true){
if((i__26538_26555 < count__26537_26554)){
var vec__26545_26556 = cljs.core._nth.call(null,chunk__26536_26553,i__26538_26555);
var k_26557 = cljs.core.nth.call(null,vec__26545_26556,(0),null);
var v_26558 = cljs.core.nth.call(null,vec__26545_26556,(1),null);
(evt[k_26557] = v_26558);


var G__26559 = seq__26535_26552;
var G__26560 = chunk__26536_26553;
var G__26561 = count__26537_26554;
var G__26562 = (i__26538_26555 + (1));
seq__26535_26552 = G__26559;
chunk__26536_26553 = G__26560;
count__26537_26554 = G__26561;
i__26538_26555 = G__26562;
continue;
} else {
var temp__5720__auto___26563 = cljs.core.seq.call(null,seq__26535_26552);
if(temp__5720__auto___26563){
var seq__26535_26564__$1 = temp__5720__auto___26563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26535_26564__$1)){
var c__4550__auto___26565 = cljs.core.chunk_first.call(null,seq__26535_26564__$1);
var G__26566 = cljs.core.chunk_rest.call(null,seq__26535_26564__$1);
var G__26567 = c__4550__auto___26565;
var G__26568 = cljs.core.count.call(null,c__4550__auto___26565);
var G__26569 = (0);
seq__26535_26552 = G__26566;
chunk__26536_26553 = G__26567;
count__26537_26554 = G__26568;
i__26538_26555 = G__26569;
continue;
} else {
var vec__26548_26570 = cljs.core.first.call(null,seq__26535_26564__$1);
var k_26571 = cljs.core.nth.call(null,vec__26548_26570,(0),null);
var v_26572 = cljs.core.nth.call(null,vec__26548_26570,(1),null);
(evt[k_26571] = v_26572);


var G__26573 = cljs.core.next.call(null,seq__26535_26564__$1);
var G__26574 = null;
var G__26575 = (0);
var G__26576 = (0);
seq__26535_26552 = G__26573;
chunk__26536_26553 = G__26574;
count__26537_26554 = G__26575;
i__26538_26555 = G__26576;
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
return (function (p1__26577_SHARP_){
return goog.events.getListeners(p1__26577_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map?rel=1568179214595
