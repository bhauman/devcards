// Compiled by ClojureScript 0.0-2202
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.Uri');
sablono.util._STAR_base_url_STAR_ = null;
sablono.util.ToString = (function (){var obj16279 = {};return obj16279;
})();
sablono.util.to_str = (function to_str(x){if((function (){var and__3594__auto__ = x;if(and__3594__auto__)
{return x.sablono$util$ToString$to_str$arity$1;
} else
{return and__3594__auto__;
}
})())
{return x.sablono$util$ToString$to_str$arity$1(x);
} else
{var x__4233__auto__ = (((x == null))?null:x);return (function (){var or__3606__auto__ = (sablono.util.to_str[goog.typeOf(x__4233__auto__)]);if(or__3606__auto__)
{return or__3606__auto__;
} else
{var or__3606__auto____$1 = (sablono.util.to_str["_"]);if(or__3606__auto____$1)
{return or__3606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ToString.to-str",x);
}
}
})().call(null,x);
}
});
sablono.util.ToURI = (function (){var obj16281 = {};return obj16281;
})();
sablono.util.to_uri = (function to_uri(x){if((function (){var and__3594__auto__ = x;if(and__3594__auto__)
{return x.sablono$util$ToURI$to_uri$arity$1;
} else
{return and__3594__auto__;
}
})())
{return x.sablono$util$ToURI$to_uri$arity$1(x);
} else
{var x__4233__auto__ = (((x == null))?null:x);return (function (){var or__3606__auto__ = (sablono.util.to_uri[goog.typeOf(x__4233__auto__)]);if(or__3606__auto__)
{return or__3606__auto__;
} else
{var or__3606__auto____$1 = (sablono.util.to_uri["_"]);if(or__3606__auto____$1)
{return or__3606__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ToURI.to-uri",x);
}
}
})().call(null,x);
}
});
/**
* Converts its arguments into a string using to-str.
* @param {...*} var_args
*/
sablono.util.as_str = (function() { 
var as_str__delegate = function (xs){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,sablono.util.to_str,xs));
};
var as_str = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return as_str__delegate.call(this,xs);};
as_str.cljs$lang$maxFixedArity = 0;
as_str.cljs$lang$applyTo = (function (arglist__16282){
var xs = cljs.core.seq(arglist__16282);
return as_str__delegate(xs);
});
as_str.cljs$core$IFn$_invoke$arity$variadic = as_str__delegate;
return as_str;
})()
;
/**
* Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
*/
sablono.util.camel_case = (function camel_case(k){if(cljs.core.truth_(k))
{var vec__16284 = clojure.string.split.call(null,cljs.core.name.call(null,k),/-/);var first_word = cljs.core.nth.call(null,vec__16284,0,null);var words = cljs.core.nthnext.call(null,vec__16284,1);if((cljs.core.empty_QMARK_.call(null,words)) || (cljs.core._EQ_.call(null,"aria",first_word)) || (cljs.core._EQ_.call(null,"data",first_word)))
{return k;
} else
{return cljs.core.keyword.call(null,clojure.string.join.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,clojure.string.capitalize,words),first_word)));
}
} else
{return null;
}
});
/**
* Converts all HTML attributes to their DOM equivalents.
*/
sablono.util.html_to_dom_attrs = (function html_to_dom_attrs(attrs){var dom_attrs = cljs.core.merge.call(null,cljs.core.zipmap.call(null,cljs.core.keys.call(null,attrs),cljs.core.map.call(null,sablono.util.camel_case,cljs.core.keys.call(null,attrs))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"className","className",1004015509),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112)], null));return clojure.set.rename_keys.call(null,attrs,dom_attrs);
});
/**
* Removes all map entries where the value of the entry is empty.
*/
sablono.util.compact_map = (function compact_map(m){return cljs.core.reduce.call(null,(function (m__$1,k){var v = cljs.core.get.call(null,m__$1,k);if(cljs.core.empty_QMARK_.call(null,v))
{return cljs.core.dissoc.call(null,m__$1,k);
} else
{return m__$1;
}
}),m,cljs.core.keys.call(null,m));
});
/**
* Like clojure.core/merge but concatenate :class entries.
* @param {...*} var_args
*/
sablono.util.merge_with_class = (function() { 
var merge_with_class__delegate = function (maps){var classes = cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (p1__16285_SHARP_){if(cljs.core.list_QMARK_.call(null,p1__16285_SHARP_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16285_SHARP_], null);
} else
{if(cljs.core.sequential_QMARK_.call(null,p1__16285_SHARP_))
{return p1__16285_SHARP_;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16285_SHARP_], null);
} else
{return null;
}
}
}
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"class","class",1108647146),maps))));var maps__$1 = cljs.core.apply.call(null,cljs.core.merge,maps);if(cljs.core.empty_QMARK_.call(null,classes))
{return maps__$1;
} else
{return cljs.core.assoc.call(null,maps__$1,new cljs.core.Keyword(null,"class","class",1108647146),classes);
}
};
var merge_with_class = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge_with_class__delegate.call(this,maps);};
merge_with_class.cljs$lang$maxFixedArity = 0;
merge_with_class.cljs$lang$applyTo = (function (arglist__16286){
var maps = cljs.core.seq(arglist__16286);
return merge_with_class__delegate(maps);
});
merge_with_class.cljs$core$IFn$_invoke$arity$variadic = merge_with_class__delegate;
return merge_with_class;
})()
;
/**
* Strip the # and . characters from the beginning of `s`.
*/
sablono.util.strip_css = (function strip_css(s){if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,s,/^[.#]/,"");
} else
{return null;
}
});
/**
* Match `s` as a CSS tag and return a vector of tag name, CSS id and
* CSS classes.
*/
sablono.util.match_tag = (function match_tag(s){var matches = cljs.core.re_seq.call(null,/[#.]?[^#.]+/,cljs.core.name.call(null,s));var vec__16290 = ((cljs.core.empty_QMARK_.call(null,matches))?(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Can't match CSS tag: "),cljs.core.str(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst.call(null,matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):((new cljs.core.Keyword(null,"default","default",2558708147))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,matches),cljs.core.rest.call(null,matches)], null):null)));var tag_name = cljs.core.nth.call(null,vec__16290,0,null);var names = cljs.core.nth.call(null,vec__16290,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,cljs.core.first.call(null,cljs.core.map.call(null,sablono.util.strip_css,cljs.core.filter.call(null,((function (matches,vec__16290,tag_name,names){
return (function (p1__16287_SHARP_){return cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,p1__16287_SHARP_));
});})(matches,vec__16290,tag_name,names))
,names))),cljs.core.vec.call(null,cljs.core.map.call(null,sablono.util.strip_css,cljs.core.filter.call(null,((function (matches,vec__16290,tag_name,names){
return (function (p1__16288_SHARP_){return cljs.core._EQ_.call(null,".",cljs.core.first.call(null,p1__16288_SHARP_));
});})(matches,vec__16290,tag_name,names))
,names)))], null);
});
/**
* Ensure an element vector is of the form [tag-name attrs content].
*/
sablono.util.normalize_element = (function normalize_element(p__16291){var vec__16294 = p__16291;var tag = cljs.core.nth.call(null,vec__16294,0,null);var content = cljs.core.nthnext.call(null,vec__16294,1);if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw cljs.core.ex_info.call(null,[cljs.core.str(tag),cljs.core.str(" is not a valid element name.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",1014018828),tag,new cljs.core.Keyword(null,"content","content",1965434859),content], null));
} else
{}
var vec__16295 = sablono.util.match_tag.call(null,tag);var tag__$1 = cljs.core.nth.call(null,vec__16295,0,null);var id = cljs.core.nth.call(null,vec__16295,1,null);var class$ = cljs.core.nth.call(null,vec__16295,2,null);var tag_attrs = sablono.util.compact_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"class","class",1108647146),class$], null));var map_attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,map_attrs))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.util.merge_with_class.call(null,tag_attrs,map_attrs),cljs.core.next.call(null,content)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
* Join the `classes` with a whitespace.
*/
sablono.util.join_classes = (function join_classes(classes){return clojure.string.join.call(null," ",cljs.core.flatten.call(null,classes));
});
/**
* Returns the React function to render `tag` as a symbol.
*/
sablono.util.react_symbol = (function react_symbol(tag){return cljs.core.symbol.call(null,"js",[cljs.core.str("React.DOM."),cljs.core.str(cljs.core.name.call(null,tag))].join(''));
});
/**
* Same as `react-symbol` but wrap input and text elements.
*/
sablono.util.react_fn = (function react_fn(tag){var dom_fn = sablono.util.react_symbol.call(null,tag);if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),null,new cljs.core.Keyword(null,"input","input",1114262332),null], null), null),cljs.core.keyword.call(null,tag)))
{return cljs.core.symbol.call(null,"sablono.interpreter",cljs.core.name.call(null,tag));
} else
{return dom_fn;
}
});
/**
* Returns a regular expression that matches the HTML attribute `attr`
* and it's value.
*/
sablono.util.attr_pattern = (function attr_pattern(attr){return cljs.core.re_pattern.call(null,[cljs.core.str("\\s+"),cljs.core.str(cljs.core.name.call(null,attr)),cljs.core.str("\\s*=\\s*['\"][^\"']+['\"]")].join(''));
});
/**
* Strip the HTML attribute `attr` and it's value from the string `s`.
*/
sablono.util.strip_attr = (function strip_attr(s,attr){if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,s,sablono.util.attr_pattern.call(null,attr),"");
} else
{return null;
}
});
/**
* Strip the outer HTML tag from the string `s`.
*/
sablono.util.strip_outer = (function strip_outer(s){if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,clojure.string.replace.call(null,s,/^\s*<[^>]+>\s*/,""),/\s*<\/[^>]+>\s*$/,"");
} else
{return null;
}
});
(sablono.util.ToString["_"] = true);
(sablono.util.to_str["_"] = (function (x){return [cljs.core.str(x)].join('');
}));
(sablono.util.ToString["number"] = true);
(sablono.util.to_str["number"] = (function (x){return [cljs.core.str(x)].join('');
}));
(sablono.util.ToString["null"] = true);
(sablono.util.to_str["null"] = (function (_){return "";
}));
goog.Uri.prototype.sablono$util$ToString$ = true;
goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){var x__$1 = this;if(cljs.core.truth_((function (){var or__3606__auto__ = x__$1.hasDomain();if(cljs.core.truth_(or__3606__auto__))
{return or__3606__auto__;
} else
{return ((x__$1.getPath() == null)) || (cljs.core.not.call(null,cljs.core.re_matches.call(null,/^\/.*/,x__$1.getPath())));
}
})()))
{return [cljs.core.str(x__$1)].join('');
} else
{var base = [cljs.core.str(sablono.util._STAR_base_url_STAR_)].join('');if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\/$/,base)))
{return [cljs.core.str(cljs.core.subs.call(null,base,0,(cljs.core.count.call(null,base) - 1))),cljs.core.str(x__$1)].join('');
} else
{return [cljs.core.str(base),cljs.core.str(x__$1)].join('');
}
}
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = true;
cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){var x__$1 = this;return cljs.core.name.call(null,x__$1);
});
(sablono.util.ToURI["_"] = true);
(sablono.util.to_uri["_"] = (function (x){return (new goog.Uri([cljs.core.str(x)].join('')));
}));
goog.Uri.prototype.sablono$util$ToURI$ = true;
goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){var x__$1 = this;return x__$1;
});

//# sourceMappingURL=util.js.map