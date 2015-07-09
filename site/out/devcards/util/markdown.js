// Compiled by ClojureScript 0.0-3269 {}
goog.provide('devcards.util.markdown');
goog.require('cljs.core');
goog.require('clojure.string');
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__4425__auto__ = cljs.core.second.call(null,cljs.core.re_matches.call(null,/^([\s]*).*/,s));
if(cljs.core.truth_(temp__4425__auto__)){
var ws = temp__4425__auto__;
return ws.length;
} else {
return null;
}
});
devcards.util.markdown.code_delim_QMARK_ = (function devcards$util$markdown$code_delim_QMARK_(s){
var and__16050__auto__ = !((s == null));
if(and__16050__auto__){
return cljs.core.re_matches.call(null,/^\s*```.*/,s);
} else {
return and__16050__auto__;
}
});
devcards.util.markdown.group_and_trim_code_block = (function devcards$util$markdown$group_and_trim_code_block(xs){
var opener = cljs.core.first.call(null,xs);
var leading_spaces = devcards.util.markdown.leading_space_count.call(null,opener);
var code_block = cljs.core.take_while.call(null,cljs.core.complement.call(null,devcards.util.markdown.code_delim_QMARK_),cljs.core.rest.call(null,xs));
var after_code_block = cljs.core.rest.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,devcards.util.markdown.code_delim_QMARK_),cljs.core.rest.call(null,xs)));
return cljs.core.cons.call(null,clojure.string.join.call(null,"\n",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim.call(null,opener)], null),cljs.core.map.call(null,((function (opener,leading_spaces,code_block,after_code_block){
return (function (p1__44144_SHARP_){
return cljs.core.subs.call(null,p1__44144_SHARP_,leading_spaces);
});})(opener,leading_spaces,code_block,after_code_block))
,code_block),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["```"], null))),after_code_block);
});
devcards.util.markdown.group_and_trim_code_blocks = (function devcards$util$markdown$group_and_trim_code_blocks(xs){
if((xs == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.empty_QMARK_.call(null,xs)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(devcards.util.markdown.code_delim_QMARK_.call(null,cljs.core.first.call(null,xs)))){
return devcards$util$markdown$group_and_trim_code_blocks.call(null,devcards.util.markdown.group_and_trim_code_block.call(null,xs));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,xs),devcards$util$markdown$group_and_trim_code_blocks.call(null,cljs.core.rest.call(null,xs)));

}
}
}
});
devcards.util.markdown.trim_markdown_string = (function devcards$util$markdown$trim_markdown_string(s){
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.re_matches.call(null,/^```[\s\S]*/,s)))){
return s;
} else {
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,clojure.string.trim,devcards.util.markdown.group_and_trim_code_blocks.call(null,clojure.string.split.call(null,s,"\n"))));
}
});
devcards.util.markdown.preformat_markdown = (function devcards$util$markdown$preformat_markdown(mkdn_strs){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,devcards.util.markdown.trim_markdown_string,mkdn_strs));
});
var conv_class_44145 = Showdown.converter;
var converter_44146 = (new conv_class_44145());
/**
 * render markdown
 */
devcards.util.markdown.markdown_to_html = ((function (conv_class_44145,converter_44146){
return (function devcards$util$markdown$markdown_to_html(markdown_txt){
return converter_44146.makeHtml(markdown_txt);
});})(conv_class_44145,converter_44146))
;
devcards.util.markdown.less_sensitive_markdown = (function devcards$util$markdown$less_sensitive_markdown(m){
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,m)){
return [cljs.core.str("<div class=\"com-rigsomelight-devcards-markdown\">"),cljs.core.str(cljs.core.comp.call(null,devcards.util.markdown.markdown_to_html,devcards.util.markdown.preformat_markdown).call(null,m)),cljs.core.str("</div>")].join('');
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown. \n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return [cljs.core.str("<div style=\"color: #a94442\">"),cljs.core.str(message),cljs.core.str("</div>")].join('');
}
});
