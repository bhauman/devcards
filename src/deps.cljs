{:foreign-libs
 [{:file "devcards/js_libs/highlight.pack.js"
   :provides ["devcards-syntax-highlighter"]
   :global-exports {devcards-syntax-highlighter DevcardsSyntaxHighlighter}}
  {:file "devcards/js_libs/marked.min.js"
   :provides ["devcards-marked"]
   :global-exports {devcards-marked DevcardsMarked}}]
 :externs ["devcards/js_libs/highlight.ext.js"
           "devcards/js_libs/marked.ext.js"]}
