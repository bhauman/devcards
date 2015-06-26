(ns devcards.util.markdown
  (:require
   [clojure.string :as string]
   [cljsjs.showdown]))
;; I am abridging regular markdown here so that we can
;; handle big long indented strings.

(defn leading-space-count [s]
  (when-let [ws (second (re-matches #"^([\s]*).*"  s))]
    (.-length ws)))

(defn code-delim? [s]
  (and (not (nil? s))
       (re-matches #"^\s*```.*" s)))

(defn group-and-trim-code-block [xs]
  (let [opener (first xs)
        leading-spaces (leading-space-count opener)
        code-block (take-while (complement code-delim?) (rest xs))
        after-code-block (rest (drop-while (complement code-delim?) (rest xs)))]
    (cons (string/join "\n"
                 (concat [(string/trim opener)]
                         (map #(subs % leading-spaces) code-block)
                         ["```"]))
          after-code-block)))

(defn group-and-trim-code-blocks [xs]
  (cond
   (nil? xs) []
   (empty? xs) []
   (code-delim? (first xs))
   (-> (group-and-trim-code-block xs)
       group-and-trim-code-blocks)
   :else (cons (first xs) (group-and-trim-code-blocks (rest xs)))))

(defn trim-markdown-string [s]
  (if (not-empty (re-matches #"^```[\s\S]*" s))
    s
    (->> (string/split s "\n")
         group-and-trim-code-blocks
         (map string/trim)
         (string/join "\n"))))

(defn preformat-markdown [mkdn-strs]
  (string/join "\n" (map trim-markdown-string mkdn-strs)))

(let [conv-class (.-converter js/Showdown)
      converter (conv-class.)]
  (defn markdown-to-html
    "render markdown"
    [markdown-txt]
    (.makeHtml converter markdown-txt)))

(defn less-sensitive-markdown [m]
  (str "<div class=\"com-rigsomelight-devcards-markdown\">" ((comp markdown-to-html preformat-markdown) m) "</div>"))

