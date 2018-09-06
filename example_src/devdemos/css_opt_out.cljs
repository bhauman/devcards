(ns devdemos.css-opt-out
  (:require
   [sablono.core :as sab :include-macros true]
   [devcards.core :as dc]
   [clojure.string :as string])
  (:require-macros
   [devcards.core :refer [defcard]]))

(defcard
  "# Devcards CSS

Devcards inlines its own CSS into the `<head>` of the HTML document that
hosts your cards. This is done because it is awkward to get and
include CSS and other assets from a CLJS library (in a jar file) into an HTML file.

Inlining CSS into the document makes the initial setup of Devcards much easier.

There are four CSS files that are included:

* Devcards main CSS (for card headings, ui and navigation)
* Devcards addons CSS (adding default typography styles to the card body, etc)
* EDN highlighting CSS (for the built in EDN renderer)
* Code highlighting CSS (for highlight.js)

If you inspect `<head>` tag of this document or of your Devcards UI you
will see four `<style>`  tags with these ids: 

* `com-rigsomelight-devcards-css` 
* `com-rigsomelight-devcards-addons-css` 
* `com-rigsomelight-code-highlight-css` 
* `com-rigsomelight-edn-css` 

## CSS override

The way to override styles in Devcards may seem strange at first, but
it allows you to kill two birds with one stone. You can add a `<link>`
tag to the style you want **and** at the same time, you can **exclude**
inlined system CSS by adding one of the above `id`s to the same `<link>` tag.

For example, you can override the standard Devcards CSS by putting a link
to your own stylesheet into the head of your document and giving it the `id`
of the inlined CSS that you are wanting to exclude:

```html
<link id=\"com-rigsomelight-devcards-css\" href=\"my_style.css\" rel=\"stylesheet\" type=\"text/css\">
```

You can also easily exclude CSS by placing an empty tag with the
correct `id` into the `<head>` of your document. The following tag will exclude the
Devcards addons CSS:

```html
<style id=\"com-rigsomelight-devcards-addons-css\"></style>
```

_I'm trying to keep extraneous CSS in the addons_


You can find all the orginal CSS files here:
[https://github.com/bhauman/devcards/blob/master/resources/public/devcards/css](https://github.com/bhauman/devcards/blob/master/resources/public/devcards/css)

It's probably best to copy and edit the original CSS if you have any
tricky CSS issues."
  )

