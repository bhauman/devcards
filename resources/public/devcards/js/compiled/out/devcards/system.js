// Compiled by ClojureScript 0.0-2202
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('jayq.core');
goog.require('clojure.set');
goog.require('frontier.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('crate.core');
goog.require('crate.core');
goog.require('jayq.core');
goog.require('frontier.core');
devcards.system.devcards_app_element_id = "devcards-main";
devcards.system.devcards_controls_element_id = "devcards-controls";
devcards.system.devcards_cards_element_id = "devcards-cards";
devcards.system.get_element_by_id = (function get_element_by_id(id){return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards_app_node(){return devcards.system.get_element_by_id.call(null,devcards.system.devcards_app_element_id);
});
devcards.system.devcards_controls_node = (function devcards_controls_node(){return devcards.system.get_element_by_id.call(null,devcards.system.devcards_controls_element_id);
});
devcards.system.devcards_cards_node = (function devcards_cards_node(){return devcards.system.get_element_by_id.call(null,devcards.system.devcards_cards_element_id);
});
devcards.system.unique_card_id = (function unique_card_id(path){return clojure.string.join.call(null,".",cljs.core.map.call(null,(function (x){return [cljs.core.str("["),cljs.core.str(x),cljs.core.str("]")].join('');
}),cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cardpath","cardpath",1006488231),path))));
});
devcards.system.unique_card_id__GT_path = (function unique_card_id__GT_path(card_id){return cljs.core.mapv.call(null,cljs.core.keyword,cljs.core.rest.call(null,clojure.string.split.call(null,cljs.core.subs.call(null,card_id,1,(cljs.core.count.call(null,card_id) - 1)),/\].\[/)));
});
devcards.system.current_page = (function current_page(data){var and__3594__auto__ = new cljs.core.Keyword(null,"current-path","current-path",2436513643).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__3594__auto__))
{var and__3594__auto____$1 = new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__3594__auto____$1))
{return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",2436513643).cljs$core$IFn$_invoke$arity$1(data));
} else
{return and__3594__auto____$1;
}
} else
{return and__3594__auto__;
}
});
devcards.system.IMount = (function (){var obj11258 = {};return obj11258;
})();
devcards.system.mount = (function mount(o,data){if((function (){var and__3594__auto__ = o;if(and__3594__auto__)
{return o.devcards$system$IMount$mount$arity$2;
} else
{return and__3594__auto__;
}
})())
{return o.devcards$system$IMount$mount$arity$2(o,data);
} else
{var x__4233__auto__ = (((o == null))?null:o);return (function (){var or__3606__auto__ = (devcards.system.mount[goog.typeOf(x__4233__auto__)]);if(or__3606__auto__)
{return or__3606__auto__;
} else
{var or__3606__auto____$1 = (devcards.system.mount["_"]);if(or__3606__auto____$1)
{return or__3606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMount.mount",o);
}
}
})().call(null,o,data);
}
});
devcards.system.IUnMount = (function (){var obj11260 = {};return obj11260;
})();
devcards.system.unmount = (function unmount(o,data){if((function (){var and__3594__auto__ = o;if(and__3594__auto__)
{return o.devcards$system$IUnMount$unmount$arity$2;
} else
{return and__3594__auto__;
}
})())
{return o.devcards$system$IUnMount$unmount$arity$2(o,data);
} else
{var x__4233__auto__ = (((o == null))?null:o);return (function (){var or__3606__auto__ = (devcards.system.unmount[goog.typeOf(x__4233__auto__)]);if(or__3606__auto__)
{return or__3606__auto__;
} else
{var or__3606__auto____$1 = (devcards.system.unmount["_"]);if(or__3606__auto____$1)
{return or__3606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnMount.unmount",o);
}
}
})().call(null,o,data);
}
});
devcards.system.IConfig = (function (){var obj11262 = {};return obj11262;
})();
devcards.system._options = (function _options(o){if((function (){var and__3594__auto__ = o;if(and__3594__auto__)
{return o.devcards$system$IConfig$_options$arity$1;
} else
{return and__3594__auto__;
}
})())
{return o.devcards$system$IConfig$_options$arity$1(o);
} else
{var x__4233__auto__ = (((o == null))?null:o);return (function (){var or__3606__auto__ = (devcards.system._options[goog.typeOf(x__4233__auto__)]);if(or__3606__auto__)
{return or__3606__auto__;
} else
{var or__3606__auto____$1 = (devcards.system._options["_"]);if(or__3606__auto____$1)
{return or__3606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConfig.-options",o);
}
}
})().call(null,o);
}
});
devcards.system.default_card_options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"heading","heading",1809215860),true,new cljs.core.Keyword(null,"padding","padding",4502531971),true,new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876),true,new cljs.core.Keyword(null,"hidden","hidden",4091384092),false], null);
devcards.system.get_options = (function get_options(card){return cljs.core.merge.call(null,devcards.system.default_card_options,(function (){var or__3606__auto__ = (function (){var and__3594__auto__ = (function (){var G__11270 = card;if(G__11270)
{var bit__4256__auto__ = null;if(cljs.core.truth_((function (){var or__3606__auto__ = bit__4256__auto__;if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return G__11270.devcards$system$IConfig$;
}
})()))
{return true;
} else
{if((!G__11270.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IConfig,G__11270);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IConfig,G__11270);
}
})();if(and__3594__auto__)
{return devcards.system._options.call(null,card);
} else
{return and__3594__auto__;
}
})();if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});

/**
* @constructor
* @param {*} path
* @param {*} options
* @param {*} func
* @param {*} position
* @param {*} data_atom
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.system.DevCard = (function (path,options,func,position,data_atom,__meta,__extmap){
this.path = path;
this.options = options;
this.func = func;
this.position = position;
this.data_atom = data_atom;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.system.DevCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4192__auto__,k__4193__auto__){var self__ = this;
var this__4192__auto____$1 = this;return cljs.core._lookup.call(null,this__4192__auto____$1,k__4193__auto__,null);
});
devcards.system.DevCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4194__auto__,k11272,else__4195__auto__){var self__ = this;
var this__4194__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11272,new cljs.core.Keyword(null,"path","path",1017337751)))
{return self__.path;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11272,new cljs.core.Keyword(null,"options","options",4059396624)))
{return self__.options;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11272,new cljs.core.Keyword(null,"func","func",1017058870)))
{return self__.func;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11272,new cljs.core.Keyword(null,"position","position",1761709211)))
{return self__.position;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11272,new cljs.core.Keyword(null,"data-atom","data-atom",603797766)))
{return self__.data_atom;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11272,else__4195__auto__);
} else
{return null;
}
}
}
}
}
}
});
devcards.system.DevCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4206__auto__,writer__4207__auto__,opts__4208__auto__){var self__ = this;
var this__4206__auto____$1 = this;var pr_pair__4209__auto__ = ((function (this__4206__auto____$1){
return (function (keyval__4210__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4207__auto__,cljs.core.pr_writer,""," ","",opts__4208__auto__,keyval__4210__auto__);
});})(this__4206__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4207__auto__,pr_pair__4209__auto__,"#devcards.system.DevCard{",", ","}",opts__4208__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",1017337751),self__.path],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",4059396624),self__.options],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",1017058870),self__.func],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"position","position",1761709211),self__.position],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-atom","data-atom",603797766),self__.data_atom],null))], null),self__.__extmap));
});
devcards.system.DevCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4190__auto__){var self__ = this;
var this__4190__auto____$1 = this;return self__.__meta;
});
devcards.system.DevCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4186__auto__){var self__ = this;
var this__4186__auto____$1 = this;return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,self__.__hash));
});
devcards.system.DevCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4196__auto__){var self__ = this;
var this__4196__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
devcards.system.DevCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4187__auto__){var self__ = this;
var this__4187__auto____$1 = this;var h__4017__auto__ = self__.__hash;if(!((h__4017__auto__ == null)))
{return h__4017__auto__;
} else
{var h__4017__auto____$1 = cljs.core.hash_imap.call(null,this__4187__auto____$1);self__.__hash = h__4017__auto____$1;
return h__4017__auto____$1;
}
});
devcards.system.DevCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4188__auto__,other__4189__auto__){var self__ = this;
var this__4188__auto____$1 = this;if(cljs.core.truth_((function (){var and__3594__auto__ = other__4189__auto__;if(cljs.core.truth_(and__3594__auto__))
{return ((this__4188__auto____$1.constructor === other__4189__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4188__auto____$1,other__4189__auto__));
} else
{return and__3594__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.system.DevCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4201__auto__,k__4202__auto__){var self__ = this;
var this__4201__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",1017337751),null,new cljs.core.Keyword(null,"func","func",1017058870),null,new cljs.core.Keyword(null,"position","position",1761709211),null,new cljs.core.Keyword(null,"options","options",4059396624),null,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),null], null), null),k__4202__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4201__auto____$1),self__.__meta),k__4202__auto__);
} else
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4202__auto__)),null));
}
});
devcards.system.DevCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4199__auto__,k__4200__auto__,G__11271){var self__ = this;
var this__4199__auto____$1 = this;var pred__11274 = cljs.core.keyword_identical_QMARK_;var expr__11275 = k__4200__auto__;if(cljs.core.truth_(pred__11274.call(null,new cljs.core.Keyword(null,"path","path",1017337751),expr__11275)))
{return (new devcards.system.DevCard(G__11271,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11274.call(null,new cljs.core.Keyword(null,"options","options",4059396624),expr__11275)))
{return (new devcards.system.DevCard(self__.path,G__11271,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11274.call(null,new cljs.core.Keyword(null,"func","func",1017058870),expr__11275)))
{return (new devcards.system.DevCard(self__.path,self__.options,G__11271,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11274.call(null,new cljs.core.Keyword(null,"position","position",1761709211),expr__11275)))
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,G__11271,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11274.call(null,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),expr__11275)))
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,G__11271,self__.__meta,self__.__extmap,null));
} else
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4200__auto__,G__11271),null));
}
}
}
}
}
});
devcards.system.DevCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4204__auto__){var self__ = this;
var this__4204__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",1017337751),self__.path],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",4059396624),self__.options],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",1017058870),self__.func],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"position","position",1761709211),self__.position],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-atom","data-atom",603797766),self__.data_atom],null))], null),self__.__extmap));
});
devcards.system.DevCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4191__auto__,G__11271){var self__ = this;
var this__4191__auto____$1 = this;return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,G__11271,self__.__extmap,self__.__hash));
});
devcards.system.DevCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4197__auto__,entry__4198__auto__){var self__ = this;
var this__4197__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4198__auto__))
{return cljs.core._assoc.call(null,this__4197__auto____$1,cljs.core._nth.call(null,entry__4198__auto__,0),cljs.core._nth.call(null,entry__4198__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4197__auto____$1,entry__4198__auto__);
}
});
devcards.system.DevCard.cljs$lang$type = true;
devcards.system.DevCard.cljs$lang$ctorPrSeq = (function (this__4226__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/DevCard");
});
devcards.system.DevCard.cljs$lang$ctorPrWriter = (function (this__4226__auto__,writer__4227__auto__){return cljs.core._write.call(null,writer__4227__auto__,"devcards.system/DevCard");
});
devcards.system.__GT_DevCard = (function __GT_DevCard(path,options,func,position,data_atom){return (new devcards.system.DevCard(path,options,func,position,data_atom));
});
devcards.system.map__GT_DevCard = (function map__GT_DevCard(G__11273){return (new devcards.system.DevCard(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(G__11273),new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(G__11273),new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(G__11273),new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(G__11273),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(G__11273),null,cljs.core.dissoc.call(null,G__11273,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"func","func",1017058870),new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.Keyword(null,"data-atom","data-atom",603797766))));
});
devcards.system.devcard_QMARK_ = (function devcard_QMARK_(d){var and__3594__auto__ = cljs.core.map_QMARK_.call(null,d);if(and__3594__auto__)
{var and__3594__auto____$1 = new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__3594__auto____$1))
{var and__3594__auto____$2 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__3594__auto____$2))
{var and__3594__auto____$3 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__3594__auto____$3))
{var and__3594__auto____$4 = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__3594__auto____$4))
{return d;
} else
{return and__3594__auto____$4;
}
} else
{return and__3594__auto____$3;
}
} else
{return and__3594__auto____$2;
}
} else
{return and__3594__auto____$1;
}
} else
{return and__3594__auto__;
}
});
devcards.system.ifilter = (function (){var method_table__4464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4466__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4467__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4468__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("ifilter",cljs.core.first,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4468__auto__,method_table__4464__auto__,prefer_table__4465__auto__,method_cache__4466__auto__,cached_hierarchy__4467__auto__));
})();
cljs.core._add_method.call(null,devcards.system.ifilter,new cljs.core.Keyword(null,"default","default",2558708147),(function (msg,state){return msg;
}));
cljs.core._add_method.call(null,devcards.system.ifilter,new cljs.core.Keyword(null,"set-current-path","set-current-path",2665043702),(function (p__11277,state){var vec__11278 = p__11277;var _ = cljs.core.nth.call(null,vec__11278,0,null);var map__11279 = cljs.core.nth.call(null,vec__11278,1,null);var map__11279__$1 = ((cljs.core.seq_QMARK_.call(null,map__11279))?cljs.core.apply.call(null,cljs.core.hash_map,map__11279):map__11279);var path = cljs.core.get.call(null,map__11279__$1,new cljs.core.Keyword(null,"path","path",1017337751));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",2436513643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,path,":::")))], null)], null);
}));
devcards.system.dev_trans = (function (){var method_table__4464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4466__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4467__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4468__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dev-trans",cljs.core.first,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4468__auto__,method_table__4464__auto__,prefer_table__4465__auto__,method_cache__4466__auto__,cached_hierarchy__4467__auto__));
})();
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"default","default",2558708147),(function (msg,state){return state;
}));
devcards.system.map_vals = (function map_vals(f,h_map){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11282){var vec__11283 = p__11282;var k = cljs.core.nth.call(null,vec__11283,0,null);var v = cljs.core.nth.call(null,vec__11283,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
}),h_map));
});
devcards.system.map_all_cards_in_ns = (function map_all_cards_in_ns(f,state,ns){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",1108335317),ns], null),(function (p1__11284_SHARP_){return devcards.system.map_vals.call(null,f,p1__11284_SHARP_);
}));
});
devcards.system.mark_card = (function mark_card(card){return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093),true);
});
devcards.system.remove_mark_from_card = (function remove_mark_from_card(card){return cljs.core.dissoc.call(null,card,new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093));
});
devcards.system.set_card_to_be_deleted = (function set_card_to_be_deleted(card){if(cljs.core.truth_(new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093).cljs$core$IFn$_invoke$arity$1(card)))
{return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"delete-card","delete-card",4140359012),true);
} else
{return card;
}
});
devcards.system.set_deleted_and_remove_marks_in_ns = (function set_deleted_and_remove_marks_in_ns(state,ns){return devcards.system.map_all_cards_in_ns.call(null,cljs.core.comp.call(null,devcards.system.remove_mark_from_card,devcards.system.set_card_to_be_deleted),state,ns);
});
devcards.system.card_namespaces_being_reloaded = (function card_namespaces_being_reloaded(state,files){return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,new cljs.core.Keyword(null,"namespace","namespace",2266122445)),files)),cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(state))));
});
devcards.system.mark_all_cards = (function mark_all_cards(state,files){return cljs.core.reduce.call(null,cljs.core.partial.call(null,devcards.system.map_all_cards_in_ns,devcards.system.mark_card),state,devcards.system.card_namespaces_being_reloaded.call(null,state,files));
});
devcards.system.remove_deleted_cards = (function remove_deleted_cards(card_map){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__11287){var vec__11288 = p__11287;var k = cljs.core.nth.call(null,vec__11288,0,null);var v = cljs.core.nth.call(null,vec__11288,1,null);return cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(v));
}),card_map));
});
devcards.system.remove_deleted_cards_in_ns = (function remove_deleted_cards_in_ns(state,ns){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",1108335317),ns], null),devcards.system.remove_deleted_cards);
});
devcards.system.sweep_ns = (function sweep_ns(state,ns){return devcards.system.set_deleted_and_remove_marks_in_ns.call(null,devcards.system.remove_deleted_cards_in_ns.call(null,state,ns),ns);
});
devcards.system.sweep = (function sweep(state,files){return cljs.core.reduce.call(null,devcards.system.sweep_ns,state,cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(state))));
});
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),(function (p__11289,state){var vec__11290 = p__11289;var _ = cljs.core.nth.call(null,vec__11290,0,null);var files = cljs.core.nth.call(null,vec__11290,1,null);return devcards.system.mark_all_cards.call(null,state,files);
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"jsreload","jsreload",3412240276),(function (p__11291,state){var vec__11292 = p__11291;var _ = cljs.core.nth.call(null,vec__11292,0,null);var files = cljs.core.nth.call(null,vec__11292,1,null);return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,devcards.system.sweep.call(null,state,files),new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271),new cljs.core.Keyword(null,"js","js",1013907643)),new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"cssload","cssload",2084339931),(function (msg,state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271),new cljs.core.Keyword(null,"css","css",1014003061));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"remove-code-loaded-effect","remove-code-loaded-effect",3939124180),(function (msg,state){return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"compile-fail","compile-fail",1107360234),(function (msg,state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),cljs.core.last.call(null,msg));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",3872264044),(function (p__11293,state){var vec__11294 = p__11293;var _ = cljs.core.nth.call(null,vec__11294,0,null);var map__11295 = cljs.core.nth.call(null,vec__11294,1,null);var map__11295__$1 = ((cljs.core.seq_QMARK_.call(null,map__11295))?cljs.core.apply.call(null,cljs.core.hash_map,map__11295):map__11295);var func = cljs.core.get.call(null,map__11295__$1,new cljs.core.Keyword(null,"func","func",1017058870));var options = cljs.core.get.call(null,map__11295__$1,new cljs.core.Keyword(null,"options","options",4059396624));var path = cljs.core.get.call(null,map__11295__$1,new cljs.core.Keyword(null,"path","path",1017337751));var position = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(state);return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),path),((function (position,vec__11294,_,map__11295,map__11295__$1,func,options,path){
return (function (dc){if(cljs.core.truth_(dc))
{return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,dc,new cljs.core.Keyword(null,"options","options",4059396624),cljs.core.merge.call(null,devcards.system.default_card_options,options),new cljs.core.Keyword(null,"position","position",1761709211),position,new cljs.core.Keyword(null,"func","func",1017058870),func),new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093)),new cljs.core.Keyword(null,"delete-card","delete-card",4140359012));
} else
{return (new devcards.system.DevCard(path,cljs.core.merge.call(null,devcards.system.default_card_options,options),func,position,cljs.core.atom.call(null,(function (){var or__3606__auto__ = new cljs.core.Keyword(null,"initial-state","initial-state",4067401786).cljs$core$IFn$_invoke$arity$1(options);if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})())));
}
});})(position,vec__11294,_,map__11295,map__11295__$1,func,options,path))
);
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"add-to-current-path","add-to-current-path",4368567377),(function (p__11296,state){var vec__11297 = p__11296;var _ = cljs.core.nth.call(null,vec__11297,0,null);var map__11298 = cljs.core.nth.call(null,vec__11297,1,null);var map__11298__$1 = ((cljs.core.seq_QMARK_.call(null,map__11298))?cljs.core.apply.call(null,cljs.core.hash_map,map__11298):map__11298);var path = cljs.core.get.call(null,map__11298__$1,new cljs.core.Keyword(null,"path","path",1017337751));return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",2436513643)], null),((function (vec__11297,_,map__11298,map__11298__$1,path){
return (function (x){return cljs.core.conj.call(null,x,cljs.core.keyword.call(null,path));
});})(vec__11297,_,map__11298,map__11298__$1,path))
);
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"current-path","current-path",2436513643),(function (p__11299,state){var vec__11300 = p__11299;var _ = cljs.core.nth.call(null,vec__11300,0,null);var map__11301 = cljs.core.nth.call(null,vec__11300,1,null);var map__11301__$1 = ((cljs.core.seq_QMARK_.call(null,map__11301))?cljs.core.apply.call(null,cljs.core.hash_map,map__11301):map__11301);var path = cljs.core.get.call(null,map__11301__$1,new cljs.core.Keyword(null,"path","path",1017337751));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",2436513643),cljs.core.vec.call(null,path));
}));
devcards.system.visible_cards = (function visible_cards(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721),devcards.system.visible_card_nodes.call(null,state));
});
devcards.system.display_current_cards = (function display_current_cards(state){var cur = devcards.system.current_page.call(null,state);if(cljs.core.truth_(devcards.system.devcard_QMARK_.call(null,cur)))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988),cur);
} else
{return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"display-dir-paths","display-dir-paths",3029188565),cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,devcards.system.devcard_QMARK_,cljs.core.second)),cur)),new cljs.core.Keyword(null,"display-cards","display-cards",2395336202),cljs.core.filter.call(null,cljs.core.comp.call(null,((function (cur){
return (function (p1__11302_SHARP_){var and__3594__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(p1__11302_SHARP_));if(and__3594__auto__)
{return devcards.system.devcard_QMARK_.call(null,p1__11302_SHARP_);
} else
{return and__3594__auto__;
}
});})(cur))
,cljs.core.second),cur));
}
});
devcards.system.render_cards_QMARK_ = (function render_cards_QMARK_(state){var visible_cards = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.first),new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721).cljs$core$IFn$_invoke$arity$1(state)));var intended_cards = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988).cljs$core$IFn$_invoke$arity$1(state)], null),cljs.core.vals.call(null,new cljs.core.Keyword(null,"display-cards","display-cards",2395336202).cljs$core$IFn$_invoke$arity$1(state)))));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"render-cards","render-cards",651634654),cljs.core.not_EQ_.call(null,visible_cards,intended_cards));
});
devcards.system.breadcrumbs = (function breadcrumbs(p__11303){var map__11305 = p__11303;var map__11305__$1 = ((cljs.core.seq_QMARK_.call(null,map__11305))?cljs.core.apply.call(null,cljs.core.hash_map,map__11305):map__11305);var state = map__11305__$1;var current_path = cljs.core.get.call(null,map__11305__$1,new cljs.core.Keyword(null,"current-path","current-path",2436513643));var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"home","home",1017112657),current_path));var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,((function (cpath,map__11305,map__11305__$1,state,current_path){
return (function (i,v){return cljs.core.subvec.call(null,v,0,i);
});})(cpath,map__11305,map__11305__$1,state,current_path))
,cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + 1),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"breadcrumbs","breadcrumbs",962446402),crumbs);
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.system.DevCards = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.system.DevCards.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4192__auto__,k__4193__auto__){var self__ = this;
var this__4192__auto____$1 = this;return cljs.core._lookup.call(null,this__4192__auto____$1,k__4193__auto__,null);
});
devcards.system.DevCards.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4194__auto__,k11307,else__4195__auto__){var self__ = this;
var this__4194__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11307,else__4195__auto__);
} else
{return null;
}
});
devcards.system.DevCards.prototype.frontier$core$IInputFilter$ = true;
devcards.system.DevCards.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = (function (o,msg,state){var self__ = this;
var o__$1 = this;return devcards.system.ifilter.call(null,msg,state);
});
devcards.system.DevCards.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4206__auto__,writer__4207__auto__,opts__4208__auto__){var self__ = this;
var this__4206__auto____$1 = this;var pr_pair__4209__auto__ = ((function (this__4206__auto____$1){
return (function (keyval__4210__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4207__auto__,cljs.core.pr_writer,""," ","",opts__4208__auto__,keyval__4210__auto__);
});})(this__4206__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4207__auto__,pr_pair__4209__auto__,"#devcards.system.DevCards{",", ","}",opts__4208__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.DevCards.prototype.frontier$core$IDerive$ = true;
devcards.system.DevCards.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){var self__ = this;
var o__$1 = this;return devcards.system.breadcrumbs.call(null,devcards.system.render_cards_QMARK_.call(null,devcards.system.display_current_cards.call(null,devcards.system.visible_cards.call(null,state))));
});
devcards.system.DevCards.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4190__auto__){var self__ = this;
var this__4190__auto____$1 = this;return self__.__meta;
});
devcards.system.DevCards.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4186__auto__){var self__ = this;
var this__4186__auto____$1 = this;return (new devcards.system.DevCards(self__.__meta,self__.__extmap,self__.__hash));
});
devcards.system.DevCards.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4196__auto__){var self__ = this;
var this__4196__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
devcards.system.DevCards.prototype.frontier$core$ITransform$ = true;
devcards.system.DevCards.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,msg,state){var self__ = this;
var o__$1 = this;return devcards.system.dev_trans.call(null,msg,state);
});
devcards.system.DevCards.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4187__auto__){var self__ = this;
var this__4187__auto____$1 = this;var h__4017__auto__ = self__.__hash;if(!((h__4017__auto__ == null)))
{return h__4017__auto__;
} else
{var h__4017__auto____$1 = cljs.core.hash_imap.call(null,this__4187__auto____$1);self__.__hash = h__4017__auto____$1;
return h__4017__auto____$1;
}
});
devcards.system.DevCards.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4188__auto__,other__4189__auto__){var self__ = this;
var this__4188__auto____$1 = this;if(cljs.core.truth_((function (){var and__3594__auto__ = other__4189__auto__;if(cljs.core.truth_(and__3594__auto__))
{return ((this__4188__auto____$1.constructor === other__4189__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4188__auto____$1,other__4189__auto__));
} else
{return and__3594__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.system.DevCards.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4201__auto__,k__4202__auto__){var self__ = this;
var this__4201__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4202__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4201__auto____$1),self__.__meta),k__4202__auto__);
} else
{return (new devcards.system.DevCards(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4202__auto__)),null));
}
});
devcards.system.DevCards.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4199__auto__,k__4200__auto__,G__11306){var self__ = this;
var this__4199__auto____$1 = this;var pred__11309 = cljs.core.keyword_identical_QMARK_;var expr__11310 = k__4200__auto__;return (new devcards.system.DevCards(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4200__auto__,G__11306),null));
});
devcards.system.DevCards.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4204__auto__){var self__ = this;
var this__4204__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.DevCards.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4191__auto__,G__11306){var self__ = this;
var this__4191__auto____$1 = this;return (new devcards.system.DevCards(G__11306,self__.__extmap,self__.__hash));
});
devcards.system.DevCards.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4197__auto__,entry__4198__auto__){var self__ = this;
var this__4197__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4198__auto__))
{return cljs.core._assoc.call(null,this__4197__auto____$1,cljs.core._nth.call(null,entry__4198__auto__,0),cljs.core._nth.call(null,entry__4198__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4197__auto____$1,entry__4198__auto__);
}
});
devcards.system.DevCards.cljs$lang$type = true;
devcards.system.DevCards.cljs$lang$ctorPrSeq = (function (this__4226__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/DevCards");
});
devcards.system.DevCards.cljs$lang$ctorPrWriter = (function (this__4226__auto__,writer__4227__auto__){return cljs.core._write.call(null,writer__4227__auto__,"devcards.system/DevCards");
});
devcards.system.__GT_DevCards = (function __GT_DevCards(){return (new devcards.system.DevCards());
});
devcards.system.map__GT_DevCards = (function map__GT_DevCards(G__11308){return (new devcards.system.DevCards(null,cljs.core.dissoc.call(null,G__11308)));
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.system.CurrentPathSessionStorage = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4192__auto__,k__4193__auto__){var self__ = this;
var this__4192__auto____$1 = this;return cljs.core._lookup.call(null,this__4192__auto____$1,k__4193__auto__,null);
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4194__auto__,k11313,else__4195__auto__){var self__ = this;
var this__4194__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11313,else__4195__auto__);
} else
{return null;
}
});
devcards.system.CurrentPathSessionStorage.prototype.frontier$core$IInit$ = true;
devcards.system.CurrentPathSessionStorage.prototype.frontier$core$IInit$_initialize$arity$3 = (function (_,state,event_chan){var self__ = this;
var ___$1 = this;var temp__4126__auto__ = sessionStorage.getItem("__devcards__current-path");if(cljs.core.truth_(temp__4126__auto__))
{var current_path = temp__4126__auto__;var temp__4126__auto____$1 = (function (){try{return cljs.reader.read_string.call(null,current_path);
}catch (e11315){if((e11315 instanceof Error))
{var e = e11315;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11315;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4126__auto____$1))
{var path = temp__4126__auto____$1;return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",2436513643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
} else
{return null;
}
} else
{return null;
}
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4206__auto__,writer__4207__auto__,opts__4208__auto__){var self__ = this;
var this__4206__auto____$1 = this;var pr_pair__4209__auto__ = ((function (this__4206__auto____$1){
return (function (keyval__4210__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4207__auto__,cljs.core.pr_writer,""," ","",opts__4208__auto__,keyval__4210__auto__);
});})(this__4206__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4207__auto__,pr_pair__4209__auto__,"#devcards.system.CurrentPathSessionStorage{",", ","}",opts__4208__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.CurrentPathSessionStorage.prototype.frontier$core$IDerive$ = true;
devcards.system.CurrentPathSessionStorage.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){var self__ = this;
var o__$1 = this;sessionStorage.setItem("__devcards__current-path",cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"current-path","current-path",2436513643).cljs$core$IFn$_invoke$arity$1(state)));
return state;
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4190__auto__){var self__ = this;
var this__4190__auto____$1 = this;return self__.__meta;
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4186__auto__){var self__ = this;
var this__4186__auto____$1 = this;return (new devcards.system.CurrentPathSessionStorage(self__.__meta,self__.__extmap,self__.__hash));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4196__auto__){var self__ = this;
var this__4196__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4187__auto__){var self__ = this;
var this__4187__auto____$1 = this;var h__4017__auto__ = self__.__hash;if(!((h__4017__auto__ == null)))
{return h__4017__auto__;
} else
{var h__4017__auto____$1 = cljs.core.hash_imap.call(null,this__4187__auto____$1);self__.__hash = h__4017__auto____$1;
return h__4017__auto____$1;
}
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4188__auto__,other__4189__auto__){var self__ = this;
var this__4188__auto____$1 = this;if(cljs.core.truth_((function (){var and__3594__auto__ = other__4189__auto__;if(cljs.core.truth_(and__3594__auto__))
{return ((this__4188__auto____$1.constructor === other__4189__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4188__auto____$1,other__4189__auto__));
} else
{return and__3594__auto__;
}
})()))
{return true;
} else
{return false;
}
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4201__auto__,k__4202__auto__){var self__ = this;
var this__4201__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4202__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4201__auto____$1),self__.__meta),k__4202__auto__);
} else
{return (new devcards.system.CurrentPathSessionStorage(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4202__auto__)),null));
}
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4199__auto__,k__4200__auto__,G__11312){var self__ = this;
var this__4199__auto____$1 = this;var pred__11316 = cljs.core.keyword_identical_QMARK_;var expr__11317 = k__4200__auto__;return (new devcards.system.CurrentPathSessionStorage(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4200__auto__,G__11312),null));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4204__auto__){var self__ = this;
var this__4204__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4191__auto__,G__11312){var self__ = this;
var this__4191__auto____$1 = this;return (new devcards.system.CurrentPathSessionStorage(G__11312,self__.__extmap,self__.__hash));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4197__auto__,entry__4198__auto__){var self__ = this;
var this__4197__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4198__auto__))
{return cljs.core._assoc.call(null,this__4197__auto____$1,cljs.core._nth.call(null,entry__4198__auto__,0),cljs.core._nth.call(null,entry__4198__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4197__auto____$1,entry__4198__auto__);
}
});
devcards.system.CurrentPathSessionStorage.cljs$lang$type = true;
devcards.system.CurrentPathSessionStorage.cljs$lang$ctorPrSeq = (function (this__4226__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/CurrentPathSessionStorage");
});
devcards.system.CurrentPathSessionStorage.cljs$lang$ctorPrWriter = (function (this__4226__auto__,writer__4227__auto__){return cljs.core._write.call(null,writer__4227__auto__,"devcards.system/CurrentPathSessionStorage");
});
devcards.system.__GT_CurrentPathSessionStorage = (function __GT_CurrentPathSessionStorage(){return (new devcards.system.CurrentPathSessionStorage());
});
devcards.system.map__GT_CurrentPathSessionStorage = (function map__GT_CurrentPathSessionStorage(G__11314){return (new devcards.system.CurrentPathSessionStorage(null,cljs.core.dissoc.call(null,G__11314)));
});
devcards.system.naked_card = (function naked_card(p__11319){var map__11321 = p__11319;var map__11321__$1 = ((cljs.core.seq_QMARK_.call(null,map__11321))?cljs.core.apply.call(null,cljs.core.hash_map,map__11321):map__11321);var options = cljs.core.get.call(null,map__11321__$1,new cljs.core.Keyword(null,"options","options",4059396624));var path = cljs.core.get.call(null,map__11321__$1,new cljs.core.Keyword(null,"path","path",1017337751));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),devcards.system.unique_card_id.call(null,path),new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("devcard-rendered-card"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"padding","padding",4502531971).cljs$core$IFn$_invoke$arity$1(options))?" devcard-padding":""))].join('')], null)], null);
});
devcards.system.card_template = (function card_template(p__11322){var map__11324 = p__11322;var map__11324__$1 = ((cljs.core.seq_QMARK_.call(null,map__11324))?cljs.core.apply.call(null,cljs.core.hash_map,map__11324):map__11324);var card = map__11324__$1;var options = cljs.core.get.call(null,map__11324__$1,new cljs.core.Keyword(null,"options","options",4059396624));var path = cljs.core.get.call(null,map__11324__$1,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092).cljs$core$IFn$_invoke$arity$1(options)))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"heading","heading",1809215860).cljs$core$IFn$_invoke$arity$1(options)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default.devcard-panel","div.panel.panel-default.devcard-panel",1439351633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading.devcards-set-current-path","div.panel-heading.devcards-set-current-path",3498842019),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-path","data-path",604226522),clojure.string.join.call(null,":::",cljs.core.map.call(null,cljs.core.name,path))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-title","span.panel-title",1574285341),cljs.core.name.call(null,cljs.core.last.call(null,path))," "], null)], null),devcards.system.naked_card.call(null,card)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default.devcard-panel","div.panel.panel-default.devcard-panel",1439351633),devcards.system.naked_card.call(null,card)], null);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956)], null);
}
});
devcards.system.display_cards = (function display_cards(cards){return cljs.core.map.call(null,cljs.core.comp.call(null,devcards.system.card_template,cljs.core.second),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"position","position",1761709211),cljs.core.second),cards));
});
devcards.system.dir_links = (function dir_links(dirs){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-group","div.list-group",1811678591),cljs.core.map.call(null,(function (p__11327){var vec__11328 = p__11327;var key = cljs.core.nth.call(null,vec__11328,0,null);var child_tree = cljs.core.nth.call(null,vec__11328,1,null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.devcards-add-to-current-path","a.list-group-item.devcards-add-to-current-path",2958249949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-path","data-path",604226522),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-folder-close","span.glyphicon.glyphicon-folder-close",1033290496)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",1118720881),cljs.core.count.call(null,child_tree)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956)," ",cljs.core.name.call(null,key)], null)], null);
}),cljs.core.reverse.call(null,dirs))], null);
});
devcards.system.breadcrumbs_templ = (function breadcrumbs_templ(crumbs){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.breadcrumb.devcards-breadcrumb","ol.breadcrumb.devcards-breadcrumb",4620418554),cljs.core.map.call(null,(function (p__11331){var vec__11332 = p__11331;var n = cljs.core.nth.call(null,vec__11332,0,null);var path = cljs.core.nth.call(null,vec__11332,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.devcards-set-current-path","a.devcards-set-current-path",2980456232),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"data-path","data-path",604226522),clojure.string.join.call(null,":::",path)], null),n], null)], null);
}),crumbs)], null);
});
devcards.system.main_template = (function main_template(data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-default.navbar-static-top.devards-main-navbar","div.navbar.navbar-default.navbar-static-top.devards-main-navbar",580178330),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",1151360959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",4283020137),"(:devcards ClojureScript)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",1688702431),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"breadcrumbs","breadcrumbs",962446402).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var crumbs = temp__4126__auto__;return devcards.system.breadcrumbs_templ.call(null,crumbs);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-dir-paths","display-dir-paths",3029188565).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var dir_paths = temp__4126__auto__;return devcards.system.dir_links.call(null,dir_paths);
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1688702425)], null)], null)], null)], null);
});
devcards.system.cards_templates = (function cards_templates(data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",1688702431),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-cards","display-cards",2395336202).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var cards = temp__4126__auto__;return devcards.system.display_cards.call(null,cards);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var card = temp__4126__auto__;return devcards.system.naked_card.call(null,card);
} else
{return null;
}
})()], null)], null)], null);
});
devcards.system.to_node = (function to_node(jq){return (jq.get()[0]);
});
devcards.system.sel_nodes = (function sel_nodes(sel){return cljs.core.mapv.call(null,devcards.system.to_node,jayq.core.$.call(null,sel));
});
devcards.system.visible_card_paths = (function visible_card_paths(){var card_nodes = devcards.system.sel_nodes.call(null,".devcard-rendered-card");return cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,((function (card_nodes){
return (function (p1__11333_SHARP_){return devcards.system.unique_card_id__GT_path.call(null,p1__11333_SHARP_.id);
});})(card_nodes))
,card_nodes));
});
devcards.system.visible_card_nodes = (function visible_card_nodes(data){var card_nodes = devcards.system.sel_nodes.call(null,".devcard-rendered-card");return cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.juxt.call(null,((function (card_nodes){
return (function (p1__11334_SHARP_){return cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),devcards.system.unique_card_id__GT_path.call(null,p1__11334_SHARP_.id)));
});})(card_nodes))
,cljs.core.identity),card_nodes));
});
devcards.system.toggle_background_to_white = (function toggle_background_to_white(data){if(cljs.core.truth_(new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988).cljs$core$IFn$_invoke$arity$1(data)))
{return $("body").addClass("devcards-white-background");
} else
{return $("body").removeClass("devcards-white-background");
}
});
devcards.system.compile_failure = (function compile_failure(state){if(cljs.core.truth_(new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569).cljs$core$IFn$_invoke$arity$1(state)))
{return $(devcards.system.devcards_app_node.call(null)).addClass("devcards-compile-failed");
} else
{return $(devcards.system.devcards_app_node.call(null)).removeClass("devcards-compile-failed");
}
});
devcards.system.code_loaded_class = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js","js",1013907643),"devcards-load-highlight",new cljs.core.Keyword(null,"css","css",1014003061),"devcards-cssload-highlight"], null);
devcards.system.code_loaded = (function code_loaded(state,event_chan){var temp__4126__auto__ = devcards.system.code_loaded_class.call(null,new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271).cljs$core$IFn$_invoke$arity$1(state));if(cljs.core.truth_(temp__4126__auto__))
{var class$ = temp__4126__auto__;$(devcards.system.devcards_app_node.call(null)).addClass(class$);
var c__7703__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto__,class$,temp__4126__auto__){
return (function (){var f__7704__auto__ = (function (){var switch__7639__auto__ = ((function (c__7703__auto__,class$,temp__4126__auto__){
return (function (state_11365){var state_val_11366 = (state_11365[1]);if((state_val_11366 === 2))
{var inst_11357 = (state_11365[2]);var inst_11358 = devcards.system.devcards_app_node.call(null);var inst_11359 = $(inst_11358);var inst_11360 = inst_11359.removeClass(class$);var inst_11361 = [new cljs.core.Keyword(null,"remove-code-loaded-effect","remove-code-loaded-effect",3939124180)];var inst_11362 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11361,null));var inst_11363 = cljs.core.async.put_BANG_.call(null,event_chan,inst_11362);var state_11365__$1 = (function (){var statearr_11367 = state_11365;(statearr_11367[7] = inst_11357);
(statearr_11367[8] = inst_11360);
return statearr_11367;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11365__$1,inst_11363);
} else
{if((state_val_11366 === 1))
{var inst_11355 = cljs.core.async.timeout.call(null,1400);var state_11365__$1 = state_11365;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11365__$1,2,inst_11355);
} else
{return null;
}
}
});})(c__7703__auto__,class$,temp__4126__auto__))
;return ((function (switch__7639__auto__,c__7703__auto__,class$,temp__4126__auto__){
return (function() {
var state_machine__7640__auto__ = null;
var state_machine__7640__auto____0 = (function (){var statearr_11371 = [null,null,null,null,null,null,null,null,null];(statearr_11371[0] = state_machine__7640__auto__);
(statearr_11371[1] = 1);
return statearr_11371;
});
var state_machine__7640__auto____1 = (function (state_11365){while(true){
var ret_value__7641__auto__ = (function (){try{while(true){
var result__7642__auto__ = switch__7639__auto__.call(null,state_11365);if(cljs.core.keyword_identical_QMARK_.call(null,result__7642__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7642__auto__;
}
break;
}
}catch (e11372){if((e11372 instanceof Object))
{var ex__7643__auto__ = e11372;var statearr_11373_11375 = state_11365;(statearr_11373_11375[5] = ex__7643__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11365);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7641__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11376 = state_11365;
state_11365 = G__11376;
continue;
}
} else
{return ret_value__7641__auto__;
}
break;
}
});
state_machine__7640__auto__ = function(state_11365){
switch(arguments.length){
case 0:
return state_machine__7640__auto____0.call(this);
case 1:
return state_machine__7640__auto____1.call(this,state_11365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7640__auto____0;
state_machine__7640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7640__auto____1;
return state_machine__7640__auto__;
})()
;})(switch__7639__auto__,c__7703__auto__,class$,temp__4126__auto__))
})();var state__7705__auto__ = (function (){var statearr_11374 = f__7704__auto__.call(null);(statearr_11374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto__);
return statearr_11374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto__,class$,temp__4126__auto__))
);
return c__7703__auto__;
} else
{return null;
}
});
devcards.system.create_needed_card_nodes = (function create_needed_card_nodes(data){if(cljs.core.truth_(new cljs.core.Keyword(null,"render-cards","render-cards",651634654).cljs$core$IFn$_invoke$arity$1(data)))
{return jayq.core.$.call(null,devcards.system.devcards_cards_node.call(null)).html(crate.core.html.call(null,devcards.system.cards_templates.call(null,data)));
} else
{return null;
}
});
devcards.system.unmount_card_nodes = (function unmount_card_nodes(data){var seq__11387 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721).cljs$core$IFn$_invoke$arity$1(data));var chunk__11388 = null;var count__11389 = 0;var i__11390 = 0;while(true){
if((i__11390 < count__11389))
{var vec__11391 = cljs.core._nth.call(null,chunk__11388,i__11390);var card = cljs.core.nth.call(null,vec__11391,0,null);var node = cljs.core.nth.call(null,vec__11391,1,null);var temp__4126__auto___11397 = cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),devcards.system.unique_card_id__GT_path.call(null,node.id)));if(cljs.core.truth_(temp__4126__auto___11397))
{var card_11398__$1 = temp__4126__auto___11397;var functionality_11399 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card_11398__$1).call(null);if(cljs.core.truth_((function (){var and__3594__auto__ = (function (){var G__11393 = functionality_11399;if(G__11393)
{var bit__4256__auto__ = null;if(cljs.core.truth_((function (){var or__3606__auto__ = bit__4256__auto__;if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return G__11393.devcards$system$IUnMount$;
}
})()))
{return true;
} else
{if((!G__11393.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__11393);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__11393);
}
})();if(and__3594__auto__)
{var or__3606__auto__ = new cljs.core.Keyword(null,"render-cards","render-cards",651634654).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{var or__3606__auto____$1 = new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(card_11398__$1));if(cljs.core.truth_(or__3606__auto____$1))
{return or__3606__auto____$1;
} else
{return new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card_11398__$1);
}
}
} else
{return and__3594__auto__;
}
})()))
{devcards.system.unmount.call(null,functionality_11399,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card_11398__$1)], null));
} else
{}
} else
{}
{
var G__11400 = seq__11387;
var G__11401 = chunk__11388;
var G__11402 = count__11389;
var G__11403 = (i__11390 + 1);
seq__11387 = G__11400;
chunk__11388 = G__11401;
count__11389 = G__11402;
i__11390 = G__11403;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11387);if(temp__4126__auto__)
{var seq__11387__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11387__$1))
{var c__4354__auto__ = cljs.core.chunk_first.call(null,seq__11387__$1);{
var G__11404 = cljs.core.chunk_rest.call(null,seq__11387__$1);
var G__11405 = c__4354__auto__;
var G__11406 = cljs.core.count.call(null,c__4354__auto__);
var G__11407 = 0;
seq__11387 = G__11404;
chunk__11388 = G__11405;
count__11389 = G__11406;
i__11390 = G__11407;
continue;
}
} else
{var vec__11394 = cljs.core.first.call(null,seq__11387__$1);var card = cljs.core.nth.call(null,vec__11394,0,null);var node = cljs.core.nth.call(null,vec__11394,1,null);var temp__4126__auto___11408__$1 = cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),devcards.system.unique_card_id__GT_path.call(null,node.id)));if(cljs.core.truth_(temp__4126__auto___11408__$1))
{var card_11409__$1 = temp__4126__auto___11408__$1;var functionality_11410 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card_11409__$1).call(null);if(cljs.core.truth_((function (){var and__3594__auto__ = (function (){var G__11396 = functionality_11410;if(G__11396)
{var bit__4256__auto__ = null;if(cljs.core.truth_((function (){var or__3606__auto__ = bit__4256__auto__;if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return G__11396.devcards$system$IUnMount$;
}
})()))
{return true;
} else
{if((!G__11396.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__11396);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__11396);
}
})();if(and__3594__auto__)
{var or__3606__auto__ = new cljs.core.Keyword(null,"render-cards","render-cards",651634654).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{var or__3606__auto____$1 = new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(card_11409__$1));if(cljs.core.truth_(or__3606__auto____$1))
{return or__3606__auto____$1;
} else
{return new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card_11409__$1);
}
}
} else
{return and__3594__auto__;
}
})()))
{devcards.system.unmount.call(null,functionality_11410,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card_11409__$1)], null));
} else
{}
} else
{}
{
var G__11411 = cljs.core.next.call(null,seq__11387__$1);
var G__11412 = null;
var G__11413 = 0;
var G__11414 = 0;
seq__11387 = G__11411;
chunk__11388 = G__11412;
count__11389 = G__11413;
i__11390 = G__11414;
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
devcards.system.mount_card_nodes = (function mount_card_nodes(data){var seq__11423 = cljs.core.seq.call(null,devcards.system.visible_card_nodes.call(null,data));var chunk__11424 = null;var count__11425 = 0;var i__11426 = 0;while(true){
if((i__11426 < count__11425))
{var vec__11427 = cljs.core._nth.call(null,chunk__11424,i__11426);var card = cljs.core.nth.call(null,vec__11427,0,null);var node = cljs.core.nth.call(null,vec__11427,1,null);var functionality_11431 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card).call(null);var arg_11432 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{} else
{if((function (){var G__11428 = functionality_11431;if(G__11428)
{var bit__4256__auto__ = null;if(cljs.core.truth_((function (){var or__3606__auto__ = bit__4256__auto__;if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return G__11428.devcards$system$IMount$;
}
})()))
{return true;
} else
{if((!G__11428.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__11428);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__11428);
}
})())
{devcards.system.mount.call(null,functionality_11431,arg_11432);
} else
{cljs.core.apply.call(null,functionality_11431,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_11432], null));
}
}
{
var G__11433 = seq__11423;
var G__11434 = chunk__11424;
var G__11435 = count__11425;
var G__11436 = (i__11426 + 1);
seq__11423 = G__11433;
chunk__11424 = G__11434;
count__11425 = G__11435;
i__11426 = G__11436;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11423);if(temp__4126__auto__)
{var seq__11423__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11423__$1))
{var c__4354__auto__ = cljs.core.chunk_first.call(null,seq__11423__$1);{
var G__11437 = cljs.core.chunk_rest.call(null,seq__11423__$1);
var G__11438 = c__4354__auto__;
var G__11439 = cljs.core.count.call(null,c__4354__auto__);
var G__11440 = 0;
seq__11423 = G__11437;
chunk__11424 = G__11438;
count__11425 = G__11439;
i__11426 = G__11440;
continue;
}
} else
{var vec__11429 = cljs.core.first.call(null,seq__11423__$1);var card = cljs.core.nth.call(null,vec__11429,0,null);var node = cljs.core.nth.call(null,vec__11429,1,null);var functionality_11441 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card).call(null);var arg_11442 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{} else
{if((function (){var G__11430 = functionality_11441;if(G__11430)
{var bit__4256__auto__ = null;if(cljs.core.truth_((function (){var or__3606__auto__ = bit__4256__auto__;if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return G__11430.devcards$system$IMount$;
}
})()))
{return true;
} else
{if((!G__11430.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__11430);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__11430);
}
})())
{devcards.system.mount.call(null,functionality_11441,arg_11442);
} else
{cljs.core.apply.call(null,functionality_11441,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_11442], null));
}
}
{
var G__11443 = cljs.core.next.call(null,seq__11423__$1);
var G__11444 = null;
var G__11445 = 0;
var G__11446 = 0;
seq__11423 = G__11443;
chunk__11424 = G__11444;
count__11425 = G__11445;
i__11426 = G__11446;
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
devcards.system.remove_node = (function remove_node(node){if(cljs.core.truth_(node))
{return node.parentNode.removeChild(node);
} else
{return null;
}
});
devcards.system.remove_card = (function remove_card(card){var temp__4126__auto__ = document.getElementById(devcards.system.unique_card_id.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(card)));if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return devcards.system.remove_node.call(null,node.parentNode);
} else
{return null;
}
});
devcards.system.delete_deleted_card_nodes = (function delete_deleted_card_nodes(data){var seq__11453 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721).cljs$core$IFn$_invoke$arity$1(data));var chunk__11454 = null;var count__11455 = 0;var i__11456 = 0;while(true){
if((i__11456 < count__11455))
{var vec__11457 = cljs.core._nth.call(null,chunk__11454,i__11456);var card = cljs.core.nth.call(null,vec__11457,0,null);var node = cljs.core.nth.call(null,vec__11457,1,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{devcards.system.remove_card.call(null,card);
} else
{}
{
var G__11459 = seq__11453;
var G__11460 = chunk__11454;
var G__11461 = count__11455;
var G__11462 = (i__11456 + 1);
seq__11453 = G__11459;
chunk__11454 = G__11460;
count__11455 = G__11461;
i__11456 = G__11462;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11453);if(temp__4126__auto__)
{var seq__11453__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11453__$1))
{var c__4354__auto__ = cljs.core.chunk_first.call(null,seq__11453__$1);{
var G__11463 = cljs.core.chunk_rest.call(null,seq__11453__$1);
var G__11464 = c__4354__auto__;
var G__11465 = cljs.core.count.call(null,c__4354__auto__);
var G__11466 = 0;
seq__11453 = G__11463;
chunk__11454 = G__11464;
count__11455 = G__11465;
i__11456 = G__11466;
continue;
}
} else
{var vec__11458 = cljs.core.first.call(null,seq__11453__$1);var card = cljs.core.nth.call(null,vec__11458,0,null);var node = cljs.core.nth.call(null,vec__11458,1,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{devcards.system.remove_card.call(null,card);
} else
{}
{
var G__11467 = cljs.core.next.call(null,seq__11453__$1);
var G__11468 = null;
var G__11469 = 0;
var G__11470 = 0;
seq__11453 = G__11467;
chunk__11454 = G__11468;
count__11455 = G__11469;
i__11456 = G__11470;
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
devcards.system.render_base_if_necessary_BANG_ = (function render_base_if_necessary_BANG_(){var temp__4124__auto__ = devcards.system.devcards_app_node.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var devcards_node = temp__4124__auto__;if(cljs.core.truth_(devcards.system.devcards_controls_node.call(null)))
{} else
{devcards_node.appendChild(crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),devcards.system.devcards_controls_element_id], null)], null)));
}
if(cljs.core.truth_(devcards.system.devcards_cards_node.call(null)))
{return null;
} else
{return devcards_node.appendChild(crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),devcards.system.devcards_cards_element_id], null)], null)));
}
} else
{throw (new Error([cljs.core.str("The devcards interface needs an element with an id of \""),cljs.core.str(devcards.system.devcards_app_element_id),cljs.core.str("\"")].join('')));
}
});
devcards.system.devcard_renderer = (function devcard_renderer(p__11471){var map__11473 = p__11471;var map__11473__$1 = ((cljs.core.seq_QMARK_.call(null,map__11473))?cljs.core.apply.call(null,cljs.core.hash_map,map__11473):map__11473);var event_chan = cljs.core.get.call(null,map__11473__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var state = cljs.core.get.call(null,map__11473__$1,new cljs.core.Keyword(null,"state","state",1123661827));devcards.system.unmount_card_nodes.call(null,state);
devcards.system.delete_deleted_card_nodes.call(null,state);
jayq.core.$.call(null,devcards.system.devcards_controls_node.call(null)).html(crate.core.html.call(null,devcards.system.main_template.call(null,state)));
devcards.system.create_needed_card_nodes.call(null,state);
devcards.system.toggle_background_to_white.call(null,state);
devcards.system.compile_failure.call(null,state);
devcards.system.code_loaded.call(null,state,event_chan);
return devcards.system.mount_card_nodes.call(null,state);
});
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-path","current-path",2436513643),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",1761709211),0,new cljs.core.Keyword(null,"cards","cards",1108335317),cljs.core.PersistentArrayMap.EMPTY], null);
devcards.system.devcard_comp = frontier.core.compose.call(null,(new devcards.system.DevCards()),(new devcards.system.CurrentPathSessionStorage()));
devcards.system.data_to_message = (function data_to_message(msg_name,event_chan){return (function (e){var t = e.currentTarget;var temp__4126__auto__ = jayq.core.$.call(null,t).data();if(cljs.core.truth_(temp__4126__auto__))
{var data = temp__4126__auto__;return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_name,cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)], null));
} else
{return null;
}
});
});
devcards.system.register_listeners = (function register_listeners(event_chan){jayq.core.$.call(null,devcards.system.devcards_app_node.call(null)).on("click","a.devcards-add-to-current-path",devcards.system.data_to_message.call(null,new cljs.core.Keyword(null,"add-to-current-path","add-to-current-path",4368567377),event_chan));
return jayq.core.$.call(null,devcards.system.devcards_app_node.call(null)).on("click",".devcards-set-current-path",devcards.system.data_to_message.call(null,new cljs.core.Keyword(null,"set-current-path","set-current-path",2665043702),event_chan));
});
devcards.system.devcard_system_start = (function devcard_system_start(event_chan,render_callback){return frontier.core.runner_start.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,frontier.core.make_runnable.call(null,devcards.system.devcard_comp,devcards.system.devcard_initial_data),new cljs.core.Keyword(null,"state-callback","state-callback",2401068403),render_callback),new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),event_chan));
});
devcards.system.throttle_chan = (function throttle_chan(in$,ms){var out = cljs.core.async.chan.call(null);var c__7703__auto___11568 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___11568,out){
return (function (){var f__7704__auto__ = (function (){var switch__7639__auto__ = ((function (c__7703__auto___11568,out){
return (function (state_11547){var state_val_11548 = (state_11547[1]);if((state_val_11548 === 7))
{var inst_11524 = (state_11547[7]);var inst_11531 = (state_11547[2]);var inst_11532 = cljs.core.nth.call(null,inst_11531,0,null);var inst_11533 = cljs.core.nth.call(null,inst_11531,1,null);var inst_11534 = cljs.core._EQ_.call(null,inst_11533,inst_11524);var state_11547__$1 = (function (){var statearr_11549 = state_11547;(statearr_11549[8] = inst_11532);
return statearr_11549;
})();if(inst_11534)
{var statearr_11550_11569 = state_11547__$1;(statearr_11550_11569[1] = 8);
} else
{var statearr_11551_11570 = state_11547__$1;(statearr_11551_11570[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11548 === 1))
{var state_11547__$1 = state_11547;var statearr_11552_11571 = state_11547__$1;(statearr_11552_11571[2] = null);
(statearr_11552_11571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11548 === 4))
{var inst_11523 = (state_11547[2]);var inst_11524 = cljs.core.async.timeout.call(null,ms);var inst_11525 = inst_11523;var state_11547__$1 = (function (){var statearr_11553 = state_11547;(statearr_11553[9] = inst_11525);
(statearr_11553[7] = inst_11524);
return statearr_11553;
})();var statearr_11554_11572 = state_11547__$1;(statearr_11554_11572[2] = null);
(statearr_11554_11572[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11548 === 6))
{var inst_11541 = (state_11547[2]);var inst_11542 = cljs.core.async.put_BANG_.call(null,out,inst_11541);var state_11547__$1 = (function (){var statearr_11555 = state_11547;(statearr_11555[10] = inst_11542);
return statearr_11555;
})();var statearr_11556_11573 = state_11547__$1;(statearr_11556_11573[2] = null);
(statearr_11556_11573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11548 === 3))
{var inst_11545 = (state_11547[2]);var state_11547__$1 = state_11547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11547__$1,inst_11545);
} else
{if((state_val_11548 === 2))
{var state_11547__$1 = state_11547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11547__$1,4,in$);
} else
{if((state_val_11548 === 9))
{var inst_11532 = (state_11547[8]);var inst_11525 = inst_11532;var state_11547__$1 = (function (){var statearr_11557 = state_11547;(statearr_11557[9] = inst_11525);
return statearr_11557;
})();var statearr_11558_11574 = state_11547__$1;(statearr_11558_11574[2] = null);
(statearr_11558_11574[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11548 === 5))
{var inst_11524 = (state_11547[7]);var inst_11528 = [in$,inst_11524];var inst_11529 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11528,null));var state_11547__$1 = state_11547;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11547__$1,7,inst_11529);
} else
{if((state_val_11548 === 10))
{var inst_11539 = (state_11547[2]);var state_11547__$1 = state_11547;var statearr_11559_11575 = state_11547__$1;(statearr_11559_11575[2] = inst_11539);
(statearr_11559_11575[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11548 === 8))
{var inst_11525 = (state_11547[9]);var state_11547__$1 = state_11547;var statearr_11560_11576 = state_11547__$1;(statearr_11560_11576[2] = inst_11525);
(statearr_11560_11576[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7703__auto___11568,out))
;return ((function (switch__7639__auto__,c__7703__auto___11568,out){
return (function() {
var state_machine__7640__auto__ = null;
var state_machine__7640__auto____0 = (function (){var statearr_11564 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11564[0] = state_machine__7640__auto__);
(statearr_11564[1] = 1);
return statearr_11564;
});
var state_machine__7640__auto____1 = (function (state_11547){while(true){
var ret_value__7641__auto__ = (function (){try{while(true){
var result__7642__auto__ = switch__7639__auto__.call(null,state_11547);if(cljs.core.keyword_identical_QMARK_.call(null,result__7642__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7642__auto__;
}
break;
}
}catch (e11565){if((e11565 instanceof Object))
{var ex__7643__auto__ = e11565;var statearr_11566_11577 = state_11547;(statearr_11566_11577[5] = ex__7643__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7641__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11578 = state_11547;
state_11547 = G__11578;
continue;
}
} else
{return ret_value__7641__auto__;
}
break;
}
});
state_machine__7640__auto__ = function(state_11547){
switch(arguments.length){
case 0:
return state_machine__7640__auto____0.call(this);
case 1:
return state_machine__7640__auto____1.call(this,state_11547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7640__auto____0;
state_machine__7640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7640__auto____1;
return state_machine__7640__auto__;
})()
;})(switch__7639__auto__,c__7703__auto___11568,out))
})();var state__7705__auto__ = (function (){var statearr_11567 = f__7704__auto__.call(null);(statearr_11567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___11568);
return statearr_11567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___11568,out))
);
return out;
});
devcards.system.throttle_function = (function throttle_function(f,ms){var q = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var tq = devcards.system.throttle_chan.call(null,q,ms);var c__7703__auto___11637 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___11637,q,tq){
return (function (){var f__7704__auto__ = (function (){var switch__7639__auto__ = ((function (c__7703__auto___11637,q,tq){
return (function (state_11620){var state_val_11621 = (state_11620[1]);if((state_val_11621 === 7))
{var inst_11616 = (state_11620[2]);var state_11620__$1 = state_11620;var statearr_11622_11638 = state_11620__$1;(statearr_11622_11638[2] = inst_11616);
(statearr_11622_11638[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 6))
{var state_11620__$1 = state_11620;var statearr_11623_11639 = state_11620__$1;(statearr_11623_11639[2] = null);
(statearr_11623_11639[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 5))
{var inst_11610 = (state_11620[7]);var inst_11612 = f.call(null,inst_11610);var state_11620__$1 = (function (){var statearr_11624 = state_11620;(statearr_11624[8] = inst_11612);
return statearr_11624;
})();var statearr_11625_11640 = state_11620__$1;(statearr_11625_11640[2] = null);
(statearr_11625_11640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 4))
{var inst_11610 = (state_11620[7]);var inst_11610__$1 = (state_11620[2]);var state_11620__$1 = (function (){var statearr_11626 = state_11620;(statearr_11626[7] = inst_11610__$1);
return statearr_11626;
})();if(cljs.core.truth_(inst_11610__$1))
{var statearr_11627_11641 = state_11620__$1;(statearr_11627_11641[1] = 5);
} else
{var statearr_11628_11642 = state_11620__$1;(statearr_11628_11642[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11621 === 3))
{var inst_11618 = (state_11620[2]);var state_11620__$1 = state_11620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11620__$1,inst_11618);
} else
{if((state_val_11621 === 2))
{var state_11620__$1 = state_11620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11620__$1,4,tq);
} else
{if((state_val_11621 === 1))
{var state_11620__$1 = state_11620;var statearr_11629_11643 = state_11620__$1;(statearr_11629_11643[2] = null);
(statearr_11629_11643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7703__auto___11637,q,tq))
;return ((function (switch__7639__auto__,c__7703__auto___11637,q,tq){
return (function() {
var state_machine__7640__auto__ = null;
var state_machine__7640__auto____0 = (function (){var statearr_11633 = [null,null,null,null,null,null,null,null,null];(statearr_11633[0] = state_machine__7640__auto__);
(statearr_11633[1] = 1);
return statearr_11633;
});
var state_machine__7640__auto____1 = (function (state_11620){while(true){
var ret_value__7641__auto__ = (function (){try{while(true){
var result__7642__auto__ = switch__7639__auto__.call(null,state_11620);if(cljs.core.keyword_identical_QMARK_.call(null,result__7642__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7642__auto__;
}
break;
}
}catch (e11634){if((e11634 instanceof Object))
{var ex__7643__auto__ = e11634;var statearr_11635_11644 = state_11620;(statearr_11635_11644[5] = ex__7643__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11620);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7641__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11645 = state_11620;
state_11620 = G__11645;
continue;
}
} else
{return ret_value__7641__auto__;
}
break;
}
});
state_machine__7640__auto__ = function(state_11620){
switch(arguments.length){
case 0:
return state_machine__7640__auto____0.call(this);
case 1:
return state_machine__7640__auto____1.call(this,state_11620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7640__auto____0;
state_machine__7640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7640__auto____1;
return state_machine__7640__auto__;
})()
;})(switch__7639__auto__,c__7703__auto___11637,q,tq))
})();var state__7705__auto__ = (function (){var statearr_11636 = f__7704__auto__.call(null);(statearr_11636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___11637);
return statearr_11636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___11637,q,tq))
);
return ((function (q,tq){
return (function (x){return cljs.core.async.put_BANG_.call(null,q,x);
});
;})(q,tq))
});

//# sourceMappingURL=system.js.map