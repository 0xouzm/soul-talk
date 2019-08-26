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
if((typeof domina !== 'undefined') && (typeof domina.events !== 'undefined') && (typeof domina.events.t_domina$events23144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events23144 = (function (f,evt,meta23145){
this.f = f;
this.evt = evt;
this.meta23145 = meta23145;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
domina.events.t_domina$events23144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23146,meta23145__$1){
var self__ = this;
var _23146__$1 = this;
return (new domina.events.t_domina$events23144(self__.f,self__.evt,meta23145__$1));
});

domina.events.t_domina$events23144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23146){
var self__ = this;
var _23146__$1 = this;
return self__.meta23145;
});

domina.events.t_domina$events23144.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL;

domina.events.t_domina$events23144.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events23144.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events23144.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events23144.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events23144.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events23144.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events23144.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events23144.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4131__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events23144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta23145","meta23145",1447475350,null)], null);
});

domina.events.t_domina$events23144.cljs$lang$type = true;

domina.events.t_domina$events23144.cljs$lang$ctorStr = "domina.events/t_domina$events23144";

domina.events.t_domina$events23144.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"domina.events/t_domina$events23144");
});

/**
 * Positional factory function for domina.events/t_domina$events23144.
 */
domina.events.__GT_t_domina$events23144 = (function domina$events$create_listener_function_$___GT_t_domina$events23144(f__$1,evt__$1,meta23145){
return (new domina.events.t_domina$events23144(f__$1,evt__$1,meta23145));
});

}

return (new domina.events.t_domina$events23144(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__23147(s__23148){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__23148__$1 = s__23148;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__23148__$1);
if(temp__5720__auto__){
var s__23148__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23148__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23148__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23150 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23149 = (0);
while(true){
if((i__23149 < size__4522__auto__)){
var node = cljs.core._nth.call(null,c__4521__auto__,i__23149);
cljs.core.chunk_append.call(null,b__23150,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__23151 = (i__23149 + (1));
i__23149 = G__23151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23150),domina$events$listen_internal_BANG__$_iter__23147.call(null,cljs.core.chunk_rest.call(null,s__23148__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23150),null);
}
} else {
var node = cljs.core.first.call(null,s__23148__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__23147.call(null,cljs.core.rest.call(null,s__23148__$2)));
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
var G__23153 = arguments.length;
switch (G__23153) {
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
var G__23156 = arguments.length;
switch (G__23156) {
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
var G__23159 = arguments.length;
switch (G__23159) {
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
var G__23162 = arguments.length;
switch (G__23162) {
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
var G__23165 = arguments.length;
switch (G__23165) {
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
var seq__23166 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23167 = null;
var count__23168 = (0);
var i__23169 = (0);
while(true){
if((i__23169 < count__23168)){
var node = cljs.core._nth.call(null,chunk__23167,i__23169);
goog.events.removeAll(node);


var G__23175 = seq__23166;
var G__23176 = chunk__23167;
var G__23177 = count__23168;
var G__23178 = (i__23169 + (1));
seq__23166 = G__23175;
chunk__23167 = G__23176;
count__23168 = G__23177;
i__23169 = G__23178;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23166);
if(temp__5720__auto__){
var seq__23166__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23166__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23166__$1);
var G__23179 = cljs.core.chunk_rest.call(null,seq__23166__$1);
var G__23180 = c__4550__auto__;
var G__23181 = cljs.core.count.call(null,c__4550__auto__);
var G__23182 = (0);
seq__23166 = G__23179;
chunk__23167 = G__23180;
count__23168 = G__23181;
i__23169 = G__23182;
continue;
} else {
var node = cljs.core.first.call(null,seq__23166__$1);
goog.events.removeAll(node);


var G__23183 = cljs.core.next.call(null,seq__23166__$1);
var G__23184 = null;
var G__23185 = (0);
var G__23186 = (0);
seq__23166 = G__23183;
chunk__23167 = G__23184;
count__23168 = G__23185;
i__23169 = G__23186;
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
var seq__23170 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23171 = null;
var count__23172 = (0);
var i__23173 = (0);
while(true){
if((i__23173 < count__23172)){
var node = cljs.core._nth.call(null,chunk__23171,i__23173);
goog.events.removeAll(node,type__$1);


var G__23187 = seq__23170;
var G__23188 = chunk__23171;
var G__23189 = count__23172;
var G__23190 = (i__23173 + (1));
seq__23170 = G__23187;
chunk__23171 = G__23188;
count__23172 = G__23189;
i__23173 = G__23190;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23170);
if(temp__5720__auto__){
var seq__23170__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23170__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23170__$1);
var G__23191 = cljs.core.chunk_rest.call(null,seq__23170__$1);
var G__23192 = c__4550__auto__;
var G__23193 = cljs.core.count.call(null,c__4550__auto__);
var G__23194 = (0);
seq__23170 = G__23191;
chunk__23171 = G__23192;
count__23172 = G__23193;
i__23173 = G__23194;
continue;
} else {
var node = cljs.core.first.call(null,seq__23170__$1);
goog.events.removeAll(node,type__$1);


var G__23195 = cljs.core.next.call(null,seq__23170__$1);
var G__23196 = null;
var G__23197 = (0);
var G__23198 = (0);
seq__23170 = G__23195;
chunk__23171 = G__23196;
count__23172 = G__23197;
i__23173 = G__23198;
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
var G__23200 = arguments.length;
switch (G__23200) {
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
var G__23202 = parent;
var G__23203 = cljs.core.cons.call(null,parent,so_far);
n = G__23202;
so_far = G__23203;
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
var seq__23204_23212 = cljs.core.seq.call(null,ancestors);
var chunk__23205_23213 = null;
var count__23206_23214 = (0);
var i__23207_23215 = (0);
while(true){
if((i__23207_23215 < count__23206_23214)){
var n_23216 = cljs.core._nth.call(null,chunk__23205_23213,i__23207_23215);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_23216;

goog.events.fireListeners(n_23216,evt.type,true,evt);
}


var G__23217 = seq__23204_23212;
var G__23218 = chunk__23205_23213;
var G__23219 = count__23206_23214;
var G__23220 = (i__23207_23215 + (1));
seq__23204_23212 = G__23217;
chunk__23205_23213 = G__23218;
count__23206_23214 = G__23219;
i__23207_23215 = G__23220;
continue;
} else {
var temp__5720__auto___23221 = cljs.core.seq.call(null,seq__23204_23212);
if(temp__5720__auto___23221){
var seq__23204_23222__$1 = temp__5720__auto___23221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23204_23222__$1)){
var c__4550__auto___23223 = cljs.core.chunk_first.call(null,seq__23204_23222__$1);
var G__23224 = cljs.core.chunk_rest.call(null,seq__23204_23222__$1);
var G__23225 = c__4550__auto___23223;
var G__23226 = cljs.core.count.call(null,c__4550__auto___23223);
var G__23227 = (0);
seq__23204_23212 = G__23224;
chunk__23205_23213 = G__23225;
count__23206_23214 = G__23226;
i__23207_23215 = G__23227;
continue;
} else {
var n_23228 = cljs.core.first.call(null,seq__23204_23222__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_23228;

goog.events.fireListeners(n_23228,evt.type,true,evt);
}


var G__23229 = cljs.core.next.call(null,seq__23204_23222__$1);
var G__23230 = null;
var G__23231 = (0);
var G__23232 = (0);
seq__23204_23212 = G__23229;
chunk__23205_23213 = G__23230;
count__23206_23214 = G__23231;
i__23207_23215 = G__23232;
continue;
}
} else {
}
}
break;
}

var seq__23208_23233 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__23209_23234 = null;
var count__23210_23235 = (0);
var i__23211_23236 = (0);
while(true){
if((i__23211_23236 < count__23210_23235)){
var n_23237 = cljs.core._nth.call(null,chunk__23209_23234,i__23211_23236);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_23237;

goog.events.fireListeners(n_23237,evt.type,false,evt);
}


var G__23238 = seq__23208_23233;
var G__23239 = chunk__23209_23234;
var G__23240 = count__23210_23235;
var G__23241 = (i__23211_23236 + (1));
seq__23208_23233 = G__23238;
chunk__23209_23234 = G__23239;
count__23210_23235 = G__23240;
i__23211_23236 = G__23241;
continue;
} else {
var temp__5720__auto___23242 = cljs.core.seq.call(null,seq__23208_23233);
if(temp__5720__auto___23242){
var seq__23208_23243__$1 = temp__5720__auto___23242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23208_23243__$1)){
var c__4550__auto___23244 = cljs.core.chunk_first.call(null,seq__23208_23243__$1);
var G__23245 = cljs.core.chunk_rest.call(null,seq__23208_23243__$1);
var G__23246 = c__4550__auto___23244;
var G__23247 = cljs.core.count.call(null,c__4550__auto___23244);
var G__23248 = (0);
seq__23208_23233 = G__23245;
chunk__23209_23234 = G__23246;
count__23210_23235 = G__23247;
i__23211_23236 = G__23248;
continue;
} else {
var n_23249 = cljs.core.first.call(null,seq__23208_23243__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_23249;

goog.events.fireListeners(n_23249,evt.type,false,evt);
}


var G__23250 = cljs.core.next.call(null,seq__23208_23243__$1);
var G__23251 = null;
var G__23252 = (0);
var G__23253 = (0);
seq__23208_23233 = G__23250;
chunk__23209_23234 = G__23251;
count__23210_23235 = G__23252;
i__23211_23236 = G__23253;
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
var G__23255 = arguments.length;
switch (G__23255) {
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
var seq__23256_23273 = cljs.core.seq.call(null,evt_map);
var chunk__23257_23274 = null;
var count__23258_23275 = (0);
var i__23259_23276 = (0);
while(true){
if((i__23259_23276 < count__23258_23275)){
var vec__23266_23277 = cljs.core._nth.call(null,chunk__23257_23274,i__23259_23276);
var k_23278 = cljs.core.nth.call(null,vec__23266_23277,(0),null);
var v_23279 = cljs.core.nth.call(null,vec__23266_23277,(1),null);
(evt[k_23278] = v_23279);


var G__23280 = seq__23256_23273;
var G__23281 = chunk__23257_23274;
var G__23282 = count__23258_23275;
var G__23283 = (i__23259_23276 + (1));
seq__23256_23273 = G__23280;
chunk__23257_23274 = G__23281;
count__23258_23275 = G__23282;
i__23259_23276 = G__23283;
continue;
} else {
var temp__5720__auto___23284 = cljs.core.seq.call(null,seq__23256_23273);
if(temp__5720__auto___23284){
var seq__23256_23285__$1 = temp__5720__auto___23284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23256_23285__$1)){
var c__4550__auto___23286 = cljs.core.chunk_first.call(null,seq__23256_23285__$1);
var G__23287 = cljs.core.chunk_rest.call(null,seq__23256_23285__$1);
var G__23288 = c__4550__auto___23286;
var G__23289 = cljs.core.count.call(null,c__4550__auto___23286);
var G__23290 = (0);
seq__23256_23273 = G__23287;
chunk__23257_23274 = G__23288;
count__23258_23275 = G__23289;
i__23259_23276 = G__23290;
continue;
} else {
var vec__23269_23291 = cljs.core.first.call(null,seq__23256_23285__$1);
var k_23292 = cljs.core.nth.call(null,vec__23269_23291,(0),null);
var v_23293 = cljs.core.nth.call(null,vec__23269_23291,(1),null);
(evt[k_23292] = v_23293);


var G__23294 = cljs.core.next.call(null,seq__23256_23285__$1);
var G__23295 = null;
var G__23296 = (0);
var G__23297 = (0);
seq__23256_23273 = G__23294;
chunk__23257_23274 = G__23295;
count__23258_23275 = G__23296;
i__23259_23276 = G__23297;
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
return (function (p1__23298_SHARP_){
return goog.events.getListeners(p1__23298_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map?rel=1566805867119
