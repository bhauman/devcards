// Compiled by ClojureScript 0.0-2202
goog.provide('devcards.util.edn_renderer');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('devcards.util.reactor');
goog.require('devcards.util.reactor');
devcards.util.edn_renderer.literal_QMARK_ = (function literal_QMARK_(x){return (!(cljs.core.seq_QMARK_.call(null,x))) && (!(cljs.core.coll_QMARK_.call(null,x)));
});
devcards.util.edn_renderer.separator_STAR_ = (function separator_STAR_(s){return React.DOM.span({"className": "separator"},s);
});
devcards.util.edn_renderer.clearfix_separator_STAR_ = (function clearfix_separator_STAR_(s){return React.DOM.span({},devcards.util.edn_renderer.separator_STAR_.call(null,s),React.DOM.span({"className": "clearfix"},""));
});
devcards.util.edn_renderer.separate_fn = (function separate_fn(coll){if(!(cljs.core.every_QMARK_.call(null,devcards.util.edn_renderer.literal_QMARK_,coll)))
{return devcards.util.edn_renderer.clearfix_separator_STAR_;
} else
{return devcards.util.edn_renderer.separator_STAR_;
}
});
devcards.util.edn_renderer.interpose_separator = (function interpose_separator(rct_coll,s,sep_fn){return cljs.core.to_array.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,rct_coll),cljs.core.interleave.call(null,cljs.core.repeatedly.call(null,(function (){return sep_fn.call(null,s);
})),cljs.core.rest.call(null,rct_coll))));
});
devcards.util.edn_renderer.literal = (function literal(class$,x){return React.DOM.span({"className": class$},cljs.core.prn_str.call(null,x));
});
devcards.util.edn_renderer.join_html = (function join_html(separator,coll){return devcards.util.edn_renderer.interpose_separator.call(null,cljs.core.mapv.call(null,devcards.util.edn_renderer.html,coll),separator,devcards.util.edn_renderer.separate_fn.call(null,coll));
});
devcards.util.edn_renderer.html_keyval = (function html_keyval(p__11646){var vec__11648 = p__11646;var k = cljs.core.nth.call(null,vec__11648,0,null);var v = cljs.core.nth.call(null,vec__11648,1,null);return React.DOM.span({"key": cljs.core.prn_str.call(null,k), "className": "keyval"},devcards.util.edn_renderer.html.call(null,k),devcards.util.edn_renderer.html.call(null,v));
});
devcards.util.edn_renderer.html_keyvals = (function html_keyvals(coll){return devcards.util.edn_renderer.interpose_separator.call(null,cljs.core.mapv.call(null,devcards.util.edn_renderer.html_keyval,coll)," ",devcards.util.edn_renderer.separate_fn.call(null,cljs.core.vals.call(null,coll)));
});
devcards.util.edn_renderer.open_close = (function open_close(class_str,opener,closer,rct_coll){return React.DOM.span({"className": class_str},React.DOM.span({"className": "opener"},opener),React.DOM.span({"className": "contents"},rct_coll),React.DOM.span({"className": "closer"},closer));
});
devcards.util.edn_renderer.html_collection = (function html_collection(class$,opener,closer,coll){return devcards.util.edn_renderer.open_close.call(null,[cljs.core.str("collection "),cljs.core.str(class$)].join(''),opener,closer,devcards.util.edn_renderer.join_html.call(null," ",coll));
});
devcards.util.edn_renderer.html_map = (function html_map(coll){return devcards.util.edn_renderer.open_close.call(null,"collection map","{","}",devcards.util.edn_renderer.html_keyvals.call(null,coll));
});
devcards.util.edn_renderer.html_string = (function html_string(s){return devcards.util.edn_renderer.open_close.call(null,"string","\"","\"",s);
});
devcards.util.edn_renderer.html = (function html(x){if(typeof x === 'number')
{return devcards.util.edn_renderer.literal.call(null,"number",x);
} else
{if((x instanceof cljs.core.Keyword))
{return devcards.util.edn_renderer.literal.call(null,"keyword",x);
} else
{if((x instanceof cljs.core.Symbol))
{return devcards.util.edn_renderer.literal.call(null,"symbol",x);
} else
{if(typeof x === 'string')
{return devcards.util.edn_renderer.html_string.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return devcards.util.edn_renderer.html_map.call(null,x);
} else
{if(cljs.core.set_QMARK_.call(null,x))
{return devcards.util.edn_renderer.html_collection.call(null,"set","#{","}",x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return devcards.util.edn_renderer.html_collection.call(null,"vector","[","]",x);
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return devcards.util.edn_renderer.html_collection.call(null,"seq","(",")",x);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return devcards.util.edn_renderer.literal.call(null,"literal",x);
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
});
devcards.util.edn_renderer.html_edn = (function html_edn(e){return React.DOM.div({"className": "rendered-edn"},devcards.util.edn_renderer.html.call(null,e));
});

//# sourceMappingURL=edn_renderer.js.map