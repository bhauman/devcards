(ns devcards.util.markdown
  (:require
   [clojure.string :as string]
   [cljsjs.showdown]))
;; I am abridging regular markdown here so that we can
;; handle big long indented strings.

(defn leading-space-count [s]
  (when-let [ws (second (re-matches #"^([\s]*).*"  s))]
    (.-length ws)))

(let [conv-class (.-converter js/Showdown)
      converter (conv-class.)]
  (defn markdown-to-html
    "render markdown"
    [markdown-txt]
    (.makeHtml converter markdown-txt)))

; better than a for loop how?
(defn parse-out-code-blocks* [m]
  (reduce
   (fn [{:keys [in-block in-string leading-spaces code-lang] :as st} line]
     (if-let [[_ lang] (re-matches #"^[\s]*```(\w*).*" line)]
       (if in-block
         (-> st ;; the end
           (update-in [:accum] conj {:type :code-block
                                     :lang code-lang
                                     :content (string/join "\n" in-block)})
           (assoc-in [:in-block] false)
           (assoc-in [:code-lang] nil)
           (assoc-in [:leading-spaces] nil))
         (-> st ;; the beginning
           (update-in [:accum] conj {:type :markdown
                                     :content (string/join "\n" in-string)})
           (assoc-in [:in-string] [])                  
           (assoc-in [:in-block] [])
           (assoc-in [:code-lang] (when-not (string/blank? lang) lang))
           (assoc-in [:leading-spaces] (leading-space-count line))))
       (if in-block
         (update-in st [:in-block]  conj (subs line leading-spaces))
         (update-in st [:in-string] conj (string/trim line)))))
   {:in-block false :in-string [] :accum []}
   (string/split m "\n")))

(defn parse-out-code-blocks [m]
  (let [{:keys [in-block in-string] :as res} (parse-out-code-blocks* m)]
    (keep
     identity
     (conj (:accum res)
           (if in-block
             {:type :code-block
              :content (string/join "\n" in-block)}
             (if (and in-string (not-empty in-string))
               {:type :markdown
                :content (string/join "\n" in-string)})
               nil)))))

#_(devcards.core/defcard parse-out-code-blocks3
  (parse-out-code-blocks
   "# [Devcards](https://github.com/bhauman/devcards): the hard sell
    
   The Devcards library is intended to make ClojureScript development
   a pure joy.
 
   Devcards are intended to facilitate **interactive live
   development**. Devcards can be used in conjunction with figwheel but
   will also work with any form of live code reloading (repl, boot-reload, ...)

   Devcards revolves around a multi-purpose macro called `defcard`.
   You can think of `defcard` as a powerful form of **pprint** that helps you
   interactively lift code examples out of your source files into the
   Devcards interface (you are currently looking at the Devcards
   interface).

   The Devcards that you create are intended to have no impact on the
   size of your production code. You can use Devcards just as you
   would use exectuable comments inline with your source code. You
   can also keep them separate like a test suite.

   With [figwheel](https://github.com/bhauman/lein-figwheel), Devcards
   configuration couldn't be simpler. Just add `[devcards
   \"0.2.0-SNAPSHOT\"]` and create a new build config with `:figwheel
   {:devcards true}`. See the Quick Start instructions at the end of
   this document.

   Let's look at an advanced Devcard:
   
   ```
   (defcard bmi-calculator                        ;; optional symbol name
     \"*Code taken from Reagent readme.*\"          ;; optional markdown doc
     (fn [data-atom _] (bmi-component data-atom)) ;; object of focus
     {:height 180 :weight 80}                     ;; optional initial data
     {:inspect-data true :history true})          ;; optional devcard config options
      
   ```

   The [defcard api](#!/devdemos.defcard_api)
   is intended to be small and intuitive.

   And you can see this devcard rendered below:"))
