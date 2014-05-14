# Devcards

Devcards helps ClojureScript developers surface graphical artifacts
quickly so that they can experience a graphical interactive workflow.
Devcards are somewhat like iPython Notebook or Gorilla REPL in that they provide an
interactive way to quickly surface graphic representations. Devcards
however, are interactively produced from code that is **in** your
development files using your favorite editor.

For example this code will surface an html template that you might be
mocking up:

```clojure
(defcard two-zero-48-view 
  (sab-card [:div.board 
              [:div.cells
                 [:div {:class "cell xpos-1 ypos-1"} 4]
                 [:div {:class "cell xpos-1 ypos-2"} 2]
                 [:div {:class "cell xpos-1 ypos-3"} 8]]]))
```

When used with lein figwheel, saving the file that contains this
definition  will see this sablono template rendered in the devcards
interface.  


