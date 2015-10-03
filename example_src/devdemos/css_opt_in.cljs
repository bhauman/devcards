(ns ^:figwheel-load devdemos.css-opt-in
  (:require
   [sablono.core :as sab :include-macros true]
   [devcards.core :as dc]
   [clojure.string :as string])
  (:require-macros
   [devcards.core :refer [defcard]]))

(defcard
  "# Devcards CSS

Devcards includes its own CSS into the HTML document that hosts your
cards. This is done because it is a bit awkward to get and include CSS
and other assets from a jar file into an HTML file.

Inlining CSS into the document allows makes it much easier to initially setup Devcards.

Right now there are four CSS files that are included.

* Devcards main CSS (for card headings, ui and navigation)
* Devcards addons CSS (adding default typography styles to the card body, etc)
* EDN highlighting CSS (for the built in EDN renderer)
* Code highlighting CSS (for highlight.js)

If you inspect HEAD tag of this document or of your Devcards ui you
will see three STYLE tags with these ids: 

* `com-rigsomelight-devcards-css` 
* `com-rigsomelight-devcards-addons-css` 
* `com-rigsomelight-code-highlight-css` 
* `com-rigsomelight-edn-css` 

## CSS override

It is easy to opt out of devcards default CSS styling by adding
elements with the above ids to your document.

For example, you can override the Devcards CSS by putting a link
to your own stylesheet into the head of your document and giving it the id
of the inlined CSS that you are wanting to exclude:

```html
<link id=\"com-rigsomelight-devcards-css\" href=\"my_style.css\" rel=\"stylesheet\" type=\"text/css\">
```

The above will cause the original inlined addons CSS to be excluded
and your custom CSS to be included.

You can also simply exclude CSS by placing an empty tag with the
correct id into your document. The following tag will exclude the
Devcards addons CSS:

```html
<style id=\"com-rigsomelight-devcards-addons-css\"></style>
```

You can find all the orginal CSS files here:
[https://github.com/bhauman/devcards/blob/master/resources/public/devcards/css](https://github.com/bhauman/devcards/blob/master/resources/public/devcards/css)

It's probably best to copy and edit the original CSS if you have any
tricky CSS issues.


## Highlight.js

Currently Devcards inlines a custom highlight.js library into the head
of the your Devcards UI document. If you inspect the head of your
document you will see the element with the id
`com-rigsomelight-code-highlighting`. If you would like to prevent
this or use another custom Highlight.js pack you can use a similar
strategy to the above.

You just need to include an HTML tag with the id `com-rigsomelight-code-highlighting` 

For example if you don't want the highlight.js code in your document
at all you can add a TAG like the following to the head of
your document.

```html
<script id=\"com-rigsomelight-code-highlighting\"></script>
```
"
  )

