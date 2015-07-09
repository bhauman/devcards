// Compiled by ClojureScript 0.0-3269 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('goog.string.StringBuffer');
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
var sb = (new goog.string.StringBuffer());
cljs.pprint.pprint.call(null,obj,(new cljs.core.StringBufferWriter(sb)));

return [cljs.core.str(sb)].join('');
});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_69242 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_69242;
}});

//# sourceMappingURL=utils.js.map