// Compiled by ClojureScript 0.0-2202
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1127939989),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",1014018518),"http://www.w3.org/2000/svg"], null);
crate.compiler.group_id = cljs.core.atom.call(null,0);
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.as_content = (function as_content(parent,content){var seq__16787 = cljs.core.seq.call(null,content);var chunk__16788 = null;var count__16789 = 0;var i__16790 = 0;while(true){
if((i__16790 < count__16789))
{var c = cljs.core._nth.call(null,chunk__16788,i__16790);var child_16791 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_16791))
{goog.dom.appendChild(parent,child_16791);
} else
{}
{
var G__16792 = seq__16787;
var G__16793 = chunk__16788;
var G__16794 = count__16789;
var G__16795 = (i__16790 + 1);
seq__16787 = G__16792;
chunk__16788 = G__16793;
count__16789 = G__16794;
i__16790 = G__16795;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16787);if(temp__4126__auto__)
{var seq__16787__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16787__$1))
{var c__4354__auto__ = cljs.core.chunk_first.call(null,seq__16787__$1);{
var G__16796 = cljs.core.chunk_rest.call(null,seq__16787__$1);
var G__16797 = c__4354__auto__;
var G__16798 = cljs.core.count.call(null,c__4354__auto__);
var G__16799 = 0;
seq__16787 = G__16796;
chunk__16788 = G__16797;
count__16789 = G__16798;
i__16790 = G__16799;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__16787__$1);var child_16800 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_16800))
{goog.dom.appendChild(parent,child_16800);
} else
{}
{
var G__16801 = cljs.core.next.call(null,seq__16787__$1);
var G__16802 = null;
var G__16803 = 0;
var G__16804 = 0;
seq__16787 = G__16801;
chunk__16788 = G__16802;
count__16789 = G__16803;
i__16790 = G__16804;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.compiler.dom_binding = (function (){var method_table__4464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4466__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4467__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4468__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dom-binding",((function (method_table__4464__auto__,prefer_table__4465__auto__,method_cache__4466__auto__,cached_hierarchy__4467__auto__,hierarchy__4468__auto__){
return (function (type,_,___$1){return type;
});})(method_table__4464__auto__,prefer_table__4465__auto__,method_cache__4466__auto__,cached_hierarchy__4467__auto__,hierarchy__4468__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4468__auto__,method_table__4464__auto__,prefer_table__4465__auto__,method_cache__4466__auto__,cached_hierarchy__4467__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",1017460895),(function (_,b,elem){return crate.binding.on_change.call(null,b,(function (v){goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (_,p__16805,elem){var vec__16806 = p__16805;var k = cljs.core.nth.call(null,vec__16806,0,null);var b = cljs.core.nth.call(null,vec__16806,1,null);return crate.binding.on_change.call(null,b,((function (vec__16806,k,b){
return (function (v){return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__16806,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",1123684643),(function (_,p__16807,elem){var vec__16808 = p__16807;var k = cljs.core.nth.call(null,vec__16808,0,null);var b = cljs.core.nth.call(null,vec__16808,1,null);return crate.binding.on_change.call(null,b,((function (vec__16808,k,b){
return (function (v){if(cljs.core.truth_(k))
{return crate.compiler.dom_style.call(null,elem,k,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__16808,k,b))
);
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",1014000659));if(cljs.core.truth_(temp__4124__auto__))
{var adder = temp__4124__auto__;return adder.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",4374260726));if(cljs.core.truth_(temp__4124__auto__))
{var remover = temp__4124__auto__;return remover.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1016963678),(function (_,bc,parent){return crate.binding.on_change.call(null,bc,(function (type,elem,v){var pred__16809 = cljs.core._EQ_;var expr__16810 = type;if(cljs.core.truth_(pred__16809.call(null,new cljs.core.Keyword(null,"add","add",1014000659),expr__16810)))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(cljs.core.truth_(pred__16809.call(null,new cljs.core.Keyword(null,"remove","remove",4374260726),expr__16810)))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16810)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){var seq__16818 = cljs.core.seq.call(null,bs);var chunk__16819 = null;var count__16820 = 0;var i__16821 = 0;while(true){
if((i__16821 < count__16820))
{var vec__16822 = cljs.core._nth.call(null,chunk__16819,i__16821);var type = cljs.core.nth.call(null,vec__16822,0,null);var b = cljs.core.nth.call(null,vec__16822,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__16824 = seq__16818;
var G__16825 = chunk__16819;
var G__16826 = count__16820;
var G__16827 = (i__16821 + 1);
seq__16818 = G__16824;
chunk__16819 = G__16825;
count__16820 = G__16826;
i__16821 = G__16827;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16818);if(temp__4126__auto__)
{var seq__16818__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16818__$1))
{var c__4354__auto__ = cljs.core.chunk_first.call(null,seq__16818__$1);{
var G__16828 = cljs.core.chunk_rest.call(null,seq__16818__$1);
var G__16829 = c__4354__auto__;
var G__16830 = cljs.core.count.call(null,c__4354__auto__);
var G__16831 = 0;
seq__16818 = G__16828;
chunk__16819 = G__16829;
count__16820 = G__16830;
i__16821 = G__16831;
continue;
}
} else
{var vec__16823 = cljs.core.first.call(null,seq__16818__$1);var type = cljs.core.nth.call(null,vec__16823,0,null);var b = cljs.core.nth.call(null,vec__16823,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__16832 = cljs.core.next.call(null,seq__16818__$1);
var G__16833 = null;
var G__16834 = 0;
var G__16835 = 0;
seq__16818 = G__16832;
chunk__16819 = G__16833;
count__16820 = G__16834;
i__16821 = G__16835;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){if(typeof v === 'string')
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var seq__16842_16848 = cljs.core.seq.call(null,v);var chunk__16843_16849 = null;var count__16844_16850 = 0;var i__16845_16851 = 0;while(true){
if((i__16845_16851 < count__16844_16850))
{var vec__16846_16852 = cljs.core._nth.call(null,chunk__16843_16849,i__16845_16851);var k_16853 = cljs.core.nth.call(null,vec__16846_16852,0,null);var v_16854__$1 = cljs.core.nth.call(null,vec__16846_16852,1,null);dom_style.call(null,elem,k_16853,v_16854__$1);
{
var G__16855 = seq__16842_16848;
var G__16856 = chunk__16843_16849;
var G__16857 = count__16844_16850;
var G__16858 = (i__16845_16851 + 1);
seq__16842_16848 = G__16855;
chunk__16843_16849 = G__16856;
count__16844_16850 = G__16857;
i__16845_16851 = G__16858;
continue;
}
} else
{var temp__4126__auto___16859 = cljs.core.seq.call(null,seq__16842_16848);if(temp__4126__auto___16859)
{var seq__16842_16860__$1 = temp__4126__auto___16859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16842_16860__$1))
{var c__4354__auto___16861 = cljs.core.chunk_first.call(null,seq__16842_16860__$1);{
var G__16862 = cljs.core.chunk_rest.call(null,seq__16842_16860__$1);
var G__16863 = c__4354__auto___16861;
var G__16864 = cljs.core.count.call(null,c__4354__auto___16861);
var G__16865 = 0;
seq__16842_16848 = G__16862;
chunk__16843_16849 = G__16863;
count__16844_16850 = G__16864;
i__16845_16851 = G__16865;
continue;
}
} else
{var vec__16847_16866 = cljs.core.first.call(null,seq__16842_16860__$1);var k_16867 = cljs.core.nth.call(null,vec__16847_16866,0,null);var v_16868__$1 = cljs.core.nth.call(null,vec__16847_16866,1,null);dom_style.call(null,elem,k_16867,v_16868__$1);
{
var G__16869 = cljs.core.next.call(null,seq__16842_16860__$1);
var G__16870 = null;
var G__16871 = 0;
var G__16872 = 0;
seq__16842_16848 = G__16869;
chunk__16843_16849 = G__16870;
count__16844_16850 = G__16871;
i__16845_16851 = G__16872;
continue;
}
}
} else
{}
}
break;
}
} else
{if(crate.binding.binding_QMARK_.call(null,v))
{crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){var v__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var seq__16879_16885 = cljs.core.seq.call(null,attrs);var chunk__16880_16886 = null;var count__16881_16887 = 0;var i__16882_16888 = 0;while(true){
if((i__16882_16888 < count__16881_16887))
{var vec__16883_16889 = cljs.core._nth.call(null,chunk__16880_16886,i__16882_16888);var k_16890 = cljs.core.nth.call(null,vec__16883_16889,0,null);var v_16891 = cljs.core.nth.call(null,vec__16883_16889,1,null);dom_attr.call(null,elem,k_16890,v_16891);
{
var G__16892 = seq__16879_16885;
var G__16893 = chunk__16880_16886;
var G__16894 = count__16881_16887;
var G__16895 = (i__16882_16888 + 1);
seq__16879_16885 = G__16892;
chunk__16880_16886 = G__16893;
count__16881_16887 = G__16894;
i__16882_16888 = G__16895;
continue;
}
} else
{var temp__4126__auto___16896 = cljs.core.seq.call(null,seq__16879_16885);if(temp__4126__auto___16896)
{var seq__16879_16897__$1 = temp__4126__auto___16896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16879_16897__$1))
{var c__4354__auto___16898 = cljs.core.chunk_first.call(null,seq__16879_16897__$1);{
var G__16899 = cljs.core.chunk_rest.call(null,seq__16879_16897__$1);
var G__16900 = c__4354__auto___16898;
var G__16901 = cljs.core.count.call(null,c__4354__auto___16898);
var G__16902 = 0;
seq__16879_16885 = G__16899;
chunk__16880_16886 = G__16900;
count__16881_16887 = G__16901;
i__16882_16888 = G__16902;
continue;
}
} else
{var vec__16884_16903 = cljs.core.first.call(null,seq__16879_16897__$1);var k_16904 = cljs.core.nth.call(null,vec__16884_16903,0,null);var v_16905 = cljs.core.nth.call(null,vec__16884_16903,1,null);dom_attr.call(null,elem,k_16904,v_16905);
{
var G__16906 = cljs.core.next.call(null,seq__16879_16897__$1);
var G__16907 = null;
var G__16908 = 0;
var G__16909 = 0;
seq__16879_16885 = G__16906;
chunk__16880_16886 = G__16907;
count__16881_16887 = G__16908;
i__16882_16888 = G__16909;
continue;
}
}
} else
{}
}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643)))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v_16910__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);elem.setAttribute(cljs.core.name.call(null,k),v_16910__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16913){var vec__16914 = p__16913;var n = cljs.core.nth.call(null,vec__16914,0,null);var v = cljs.core.nth.call(null,vec__16914,1,null);if(v === true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name.call(null,n)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__16916){var vec__16921 = p__16916;var tag = cljs.core.nth.call(null,vec__16921,0,null);var content = cljs.core.nthnext.call(null,vec__16921,1);if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__16922 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));var _ = cljs.core.nth.call(null,vec__16922,0,null);var tag__$1 = cljs.core.nth.call(null,vec__16922,1,null);var id = cljs.core.nth.call(null,vec__16922,2,null);var class$ = cljs.core.nth.call(null,vec__16922,3,null);var vec__16923 = (function (){var vec__16924 = clojure.string.split.call(null,tag__$1,/:/);var nsp = cljs.core.nth.call(null,vec__16924,0,null);var t = cljs.core.nth.call(null,vec__16924,1,null);var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));if(cljs.core.truth_(t))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3606__auto__ = ns_xmlns;if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return nsp;
}
})(),t], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1127939989).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();var nsp = cljs.core.nth.call(null,vec__16923,0,null);var tag__$2 = cljs.core.nth.call(null,vec__16923,1,null);var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__16922,_,tag__$1,id,class$,vec__16923,nsp,tag__$2,vec__16921,tag,content){
return (function (p1__16915_SHARP_){return !((cljs.core.second.call(null,p1__16915_SHARP_) == null));
});})(vec__16922,_,tag__$1,id,class$,vec__16923,nsp,tag__$2,vec__16921,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(function (){var or__3606__auto__ = id;if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return null;
}
})(),new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));var map_attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,map_attrs))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){var attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,attrs))
{crate.compiler.dom_attr.call(null,elem,attrs);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){return document.createElementNS(nsp,tag);
}):(function (_,tag){return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){var bindings16927 = crate.compiler.bindings;try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__16928 = crate.compiler.normalize_element.call(null,tag_def);var nsp = cljs.core.nth.call(null,vec__16928,0,null);var tag = cljs.core.nth.call(null,vec__16928,1,null);var attrs = cljs.core.nth.call(null,vec__16928,2,null);var content = cljs.core.nth.call(null,vec__16928,3,null);var elem = crate.compiler.create_elem.call(null,nsp,tag);crate.compiler.dom_attr.call(null,elem,attrs);
crate.compiler.as_content.call(null,elem,content);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings16927;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){return (function() { 
var G__16931__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16930 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16930,0,null);var body = cljs.core.nthnext.call(null,vec__16930,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16931 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16931__delegate.call(this,args);};
G__16931.cljs$lang$maxFixedArity = 0;
G__16931.cljs$lang$applyTo = (function (arglist__16932){
var args = cljs.core.seq(arglist__16932);
return G__16931__delegate(args);
});
G__16931.cljs$core$IFn$_invoke$arity$variadic = G__16931__delegate;
return G__16931;
})()
;
});

//# sourceMappingURL=compiler.js.map