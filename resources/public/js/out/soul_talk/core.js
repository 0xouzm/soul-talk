// Compiled by ClojureScript 1.10.520 {}
goog.provide('soul_talk.core');
goog.require('cljs.core');
goog.require('soul_talk.login');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('domina');
if((typeof soul_talk !== 'undefined') && (typeof soul_talk.core !== 'undefined') && (typeof soul_talk.core.posts !== 'undefined')){
} else {
soul_talk.core.posts = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof soul_talk !== 'undefined') && (typeof soul_talk.core !== 'undefined') && (typeof soul_talk.core.navs !== 'undefined')){
} else {
soul_talk.core.navs = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof soul_talk !== 'undefined') && (typeof soul_talk.core !== 'undefined') && (typeof soul_talk.core.archives !== 'undefined')){
} else {
soul_talk.core.archives = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
soul_talk.core.blog_header_component = (function soul_talk$core$blog_header_component(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.blog-header.py-3","div.blog-header.py-3",-1206599610),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.flex-nowrap.justify-content-between.align-items-center","div.row.flex-nowrap.justify-content-between.align-items-center",-653524072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4.pt-1","div.col-4.pt-1",1354912752),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-muted","a.text-muted",-963416666),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Rss"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4.text-center","div.col-4.text-center",663481602),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.blog-header-logo.text-dark","a.blog-header-logo.text-dark",1155426009),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Soul Talk"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4.d-flex.justify-content-end.align-items-center","div.col-4.d-flex.justify-content-end.align-items-center",1657347559),(cljs.core.truth_(reagent.session.get.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035)))?(function (){var name = reagent.session.get.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.navbar-text","span.navbar-text",627088553),["\u6B22\u8FCE\u4F60 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-secondary","a.btn.btn-sm.btn-outline-secondary",-649071213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/logout"], null),"\u9000\u51FA"], null);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-secondary","a.btn.btn-sm.btn-outline-secondary",-649071213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/login"], null),"\u767B\u5F55"], null))], null)], null)], null);
});
});
soul_talk.core.nav_scroller_header_component = (function soul_talk$core$nav_scroller_header_component(navs){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-scroller.py-1.mb-2","div.nav-scroller.py-1.mb-2",-274122418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.nav.d-flex.justify-content-between","nav.nav.d-flex.justify-content-between",-620600762),(function (){var iter__4523__auto__ = (function soul_talk$core$nav_scroller_header_component_$_iter__27824(s__27825){
return (new cljs.core.LazySeq(null,(function (){
var s__27825__$1 = s__27825;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27825__$1);
if(temp__5720__auto__){
var s__27825__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27825__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__27825__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__27827 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__27826 = (0);
while(true){
if((i__27826 < size__4522__auto__)){
var map__27828 = cljs.core._nth.call(null,c__4521__auto__,i__27826);
var map__27828__$1 = (((((!((map__27828 == null))))?(((((map__27828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27828):map__27828);
var nav = map__27828__$1;
var href = cljs.core.get.call(null,map__27828__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var value = cljs.core.get.call(null,map__27828__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.chunk_append.call(null,b__27827,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.p-2.text-muted","a.p-2.text-muted",-1878653044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"id","id",-1388402092),value], null),value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nav], null)));

var G__27832 = (i__27826 + (1));
i__27826 = G__27832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27827),soul_talk$core$nav_scroller_header_component_$_iter__27824.call(null,cljs.core.chunk_rest.call(null,s__27825__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27827),null);
}
} else {
var map__27830 = cljs.core.first.call(null,s__27825__$2);
var map__27830__$1 = (((((!((map__27830 == null))))?(((((map__27830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27830):map__27830);
var nav = map__27830__$1;
var href = cljs.core.get.call(null,map__27830__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var value = cljs.core.get.call(null,map__27830__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.p-2.text-muted","a.p-2.text-muted",-1878653044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"id","id",-1388402092),value], null),value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nav], null)),soul_talk$core$nav_scroller_header_component_$_iter__27824.call(null,cljs.core.rest.call(null,s__27825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,navs);
})()], null)], null);
});
});
soul_talk.core.jumbotron_header_component = (function soul_talk$core$jumbotron_header_component(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron.p-3.p-md-5.text-white.rounded.bg-dark","div.jumbotron.p-3.p-md-5.text-white.rounded.bg-dark",-890693464),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.px-0","div.col-md-6.px-0",-753007878),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.display-4.font-italic","h1.display-4.font-italic",-948102972),"Title of a longer featured blog post"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lead.mb-0","p.lead.mb-0",687432348),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-white.font-weight-bold","a.text-white.font-weight-bold",1854903855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Continue reading..."], null)], null)], null)], null);
});
});
soul_talk.core.header_component = (function soul_talk$core$header_component(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.core.blog_header_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.core.nav_scroller_header_component,cljs.core.deref.call(null,soul_talk.core.navs)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.core.jumbotron_header_component], null)], null);
});
});
soul_talk.core.footer_component = (function soul_talk$core$footer_component(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.blog-footer","div.container.blog-footer",-1270971632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Blog template built for",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://getbootstrap.com/"], null),"Bootstrap"], null)," by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://twitter.com/mdo"], null),"@mdo"], null),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Back to top"], null)], null)], null);
});
});
soul_talk.core.blog_post_component = (function soul_talk$core$blog_post_component(posts){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.blog-main","div.col-md-8.blog-main",2118918600),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.pb-3.mb-4.font-italic.border-bottom","h3.pb-3.mb-4.font-italic.border-bottom",1426978819),"From the Firehose"], null),(function (){var iter__4523__auto__ = (function soul_talk$core$blog_post_component_$_iter__27833(s__27834){
return (new cljs.core.LazySeq(null,(function (){
var s__27834__$1 = s__27834;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27834__$1);
if(temp__5720__auto__){
var s__27834__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27834__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__27834__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__27836 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__27835 = (0);
while(true){
if((i__27835 < size__4522__auto__)){
var map__27837 = cljs.core._nth.call(null,c__4521__auto__,i__27835);
var map__27837__$1 = (((((!((map__27837 == null))))?(((((map__27837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27837):map__27837);
var post = map__27837__$1;
var id = cljs.core.get.call(null,map__27837__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__27837__$1,new cljs.core.Keyword(null,"title","title",636505583));
var meta = cljs.core.get.call(null,map__27837__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var author = cljs.core.get.call(null,map__27837__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var content = cljs.core.get.call(null,map__27837__$1,new cljs.core.Keyword(null,"content","content",15833224));
cljs.core.chunk_append.call(null,b__27836,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.blog-post","div.blog-post",-1412588191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.blog-post-title","h2.blog-post-title",-141271891),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.blog-post-meta","p.blog-post-meta",2092654083),meta,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"id","id",-1388402092),id], null),author], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),content], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),post], null)));

var G__27841 = (i__27835 + (1));
i__27835 = G__27841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27836),soul_talk$core$blog_post_component_$_iter__27833.call(null,cljs.core.chunk_rest.call(null,s__27834__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27836),null);
}
} else {
var map__27839 = cljs.core.first.call(null,s__27834__$2);
var map__27839__$1 = (((((!((map__27839 == null))))?(((((map__27839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27839):map__27839);
var post = map__27839__$1;
var id = cljs.core.get.call(null,map__27839__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__27839__$1,new cljs.core.Keyword(null,"title","title",636505583));
var meta = cljs.core.get.call(null,map__27839__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var author = cljs.core.get.call(null,map__27839__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var content = cljs.core.get.call(null,map__27839__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.blog-post","div.blog-post",-1412588191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.blog-post-title","h2.blog-post-title",-141271891),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.blog-post-meta","p.blog-post-meta",2092654083),meta,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"id","id",-1388402092),id], null),author], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),content], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),post], null)),soul_talk$core$blog_post_component_$_iter__27833.call(null,cljs.core.rest.call(null,s__27834__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,posts);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.blog-pagination","nav.blog-pagination",-656117861),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-outline-primary","a.btn.btn-outline-primary",1561086466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Older"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-outline-secondary.disabled","a.btn.btn-outline-secondary.disabled",-1858584952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Newer"], null)], null)], null);
});
});
soul_talk.core.main_component = (function soul_talk$core$main_component(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"main"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.core.blog_post_component,cljs.core.deref.call(null,soul_talk.core.posts)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.col-md-4.blog-sidebar","aside.col-md-4.blog-sidebar",2145456167),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-3.mb-3.bg-light.rounded","div.p-3.mb-3.bg-light.rounded",-951158324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.font-italic","h4.font-italic",-1028413378),"About"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-0","p.mb-0",-1125670798),"Etiam porta sem malesuada magna mollis euismod."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-3","div.p-3",1396618718),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.font-italic","h4.font-italic",-1028413378),"Archives"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.list-unstyled.mb-0","ol.list-unstyled.mb-0",870709850),(function (){var iter__4523__auto__ = (function soul_talk$core$main_component_$_iter__27842(s__27843){
return (new cljs.core.LazySeq(null,(function (){
var s__27843__$1 = s__27843;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27843__$1);
if(temp__5720__auto__){
var s__27843__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27843__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__27843__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__27845 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__27844 = (0);
while(true){
if((i__27844 < size__4522__auto__)){
var map__27846 = cljs.core._nth.call(null,c__4521__auto__,i__27844);
var map__27846__$1 = (((((!((map__27846 == null))))?(((((map__27846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27846):map__27846);
var archive = map__27846__$1;
var time = cljs.core.get.call(null,map__27846__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var href = cljs.core.get.call(null,map__27846__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__27845,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),time], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),archive], null)));

var G__27850 = (i__27844 + (1));
i__27844 = G__27850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27845),soul_talk$core$main_component_$_iter__27842.call(null,cljs.core.chunk_rest.call(null,s__27843__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27845),null);
}
} else {
var map__27848 = cljs.core.first.call(null,s__27843__$2);
var map__27848__$1 = (((((!((map__27848 == null))))?(((((map__27848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27848):map__27848);
var archive = map__27848__$1;
var time = cljs.core.get.call(null,map__27848__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var href = cljs.core.get.call(null,map__27848__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),time], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),archive], null)),soul_talk$core$main_component_$_iter__27842.call(null,cljs.core.rest.call(null,s__27843__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,soul_talk.core.archives));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-3","div.p-3",1396618718),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.font-italic","h4.font-italic",-1028413378),"Elsewhere"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.list-unsty","ol.list-unsty",-1976766103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"GitHub"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Weibo"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Twitter"], null)], null)], null)], null)], null)], null)], null);
});
});
soul_talk.core.home_component = (function soul_talk$core$home_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.core.header_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.core.main_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.core.footer_component], null)], null);
});
cljs.core.reset_BANG_.call(null,soul_talk.core.navs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"value","value",305978217),"World"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"value","value",305978217),"China"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"value","value",305978217),"China1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"value","value",305978217),"China2"], null)], null));
cljs.core.reset_BANG_.call(null,soul_talk.core.posts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"post1",new cljs.core.Keyword(null,"title","title",636505583),"Sample blog post",new cljs.core.Keyword(null,"meta","meta",1499536964),"January 1, 2014 by",new cljs.core.Keyword(null,"author","author",2111686192),"soul",new cljs.core.Keyword(null,"content","content",15833224),"asasfasfasffsd"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"post2",new cljs.core.Keyword(null,"title","title",636505583),"Another blog post",new cljs.core.Keyword(null,"meta","meta",1499536964),"December 23, 2013 by ",new cljs.core.Keyword(null,"author","author",2111686192),"jiesoul",new cljs.core.Keyword(null,"content","content",15833224),"Cum sociis natoque penatibus et magnis"], null)], null));
cljs.core.reset_BANG_.call(null,soul_talk.core.archives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"time","time",1385887882),"March 2018"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"time","time",1385887882),"May 2018"], null)], null));
soul_talk.core.init = (function soul_talk$core$init(){
if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return document.getElementById;
} else {
return and__4120__auto__;
}
})())){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [soul_talk.core.home_component], null),domina.by_id.call(null,"app"));
} else {
return null;
}
});
goog.exportSymbol('soul_talk.core.init', soul_talk.core.init);

//# sourceMappingURL=core.js.map?rel=1568098365581
