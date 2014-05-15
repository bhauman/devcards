(ns devdemos.two-zero
  (:require
   [devcards.core :as dc]
   [clojure.string :as string]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :refer [defcard is are= are-not= format-code]]))

(defcard intro
  (dc/markdown-card
   "# 2048"
   "Let's build 2048 interactivly with devcards"))

(defcard intro-2
  (dc/markdown-card
   "### Board Style"
   "Let's start with the style for the board."))

(defn board-cell [{:keys [top left id v]}]
  [:div { :class (str "cell "
                      " cell-num-" v  
                      " pos-left-" left
                      " pos-top-" top)} v])

(defn game-board [data]
  [:div.board-area
     [:div.background
      (for [top (range 4) left (range 4)]
        [:div {:class (str
                       "cell"
                       " pos-left-" left
                       " pos-top-" top)}])]
   [:div.cells
    (map board-cell data)]])

(defcard board-style
  (dc/sab-card (game-board [])))

(defcard intro-3
  (dc/markdown-card
   "### Cell Style"
   "The we'll work on the style for the cells."))

(defcard board-with-cells
  (dc/sab-card
   (game-board [{ :top 0 :left 0 :v 2}
                { :top 0 :left 1 :v 4}
                { :top 0 :left 2 :v 8}
                { :top 0 :left 3 :v 16}
                { :top 1 :left 0 :v 32}
                { :top 1 :left 1 :v 64}
                { :top 1 :left 2 :v 128}
                { :top 1 :left 3 :v 256}
                { :top 2 :left 0 :v 512}
                { :top 2 :left 1 :v 1024}
                { :top 2 :left 2 :v 2048}])))

(defcard basic-data-transformations
  (dc/markdown-card
   "### Basic Data Transforms"
   "We'll start to explore events and data transfomrations for our version of 2048"
   "#### One row"
   "We need to get a transformation for one row. Time to do TDD since it's all the **RAGE** these days. "
   "Let's try to get one row to move to the left."))

(defn last-available-pos [row]
  (let [p (dec (count (take-while #(not= % :_) row)))]
    (if (neg? p) 0 p)))

(defcard last-available-tests
  (dc/test-card
   (are= (last-available-pos [{:v 4} {:v 8 :double true} :_ :_] ) 1)
   (are= (last-available-pos [{:v 4} {:v 8 :double true} {:v 4} :_] ) 2)
   (are= (last-available-pos [{:v 4} {:v 8 :double true} {:v 4} {:v 4}] ) 3)
   (are= (last-available-pos [] ) 0)
   (are= (last-available-pos [:_ :_ :_ :_] ) 0)))

(defn first-available [row current-val]
  (let [last-avail-pos (last-available-pos row)]
    (some identity
          (map-indexed (fn [_index v]
                         (if (or (= v :_)
                                 (and (map? v)
                                      (not (:double v))
                                      (= (:v v)
                                         current-val)
                                      (<= last-avail-pos _index)))
                           _index
                           false))
                       row))))


(defcard first-available-tests
  (dc/test-card
   
   (are= (first-available [:_ :_ :_ :_] 2) 0)
   (are= (first-available [{} :_ :_ :_] 4) 1)
   (are= (first-available [{} {} :_ :_] 8) 2)
   (are-not= (first-available [{} {} :_ :_] 8) 3)
   (are-not= (first-available [{} {} :_ :_] 8) 1)
   
   (are= (first-available [{} {:v 8} :_ :_] 8) 1)
   (are= (first-available [{} {:v 8 :double true} :_ :_] 8) 2)
   
   (are= (first-available [{:v 4} {:v 8 :double true} :_ :_] 4) 2)   

   (are= (first-available [{} {}] 8) nil)))

(defn row-reduce [accum cval]
  (if (or (= cval :_) (:double cval))
    (conj (vec accum) cval)
    (if-let [slot (first-available accum (:v cval))]
      (conj (assoc accum slot (if (= (:v cval)
                                     (:v (get accum slot)))
                                (assoc cval :double true)
                                cval)) :_)
      (conj (vec accum) cval))))

(defcard row-reduce-tests
  (dc/test-card
   (are= (reduce row-reduce [] [:_ :_ :_ :_]) [:_ :_ :_ :_])
   (are-not= (reduce row-reduce [] [:_ :_ :_]) [:_ :_ :_ :_])
   (are= (reduce row-reduce [] [{:v 8} :_ :_ :_]) [{:v 8} :_ :_ :_])
   (are= (reduce row-reduce [] [ :_ {:v 8} :_ :_]) [{:v 8} :_ :_ :_])
   (are= (reduce row-reduce [] [ :_ :_ {:v 8} :_]) [{:v 8} :_ :_ :_])
   (are= (reduce row-reduce [] [ :_ :_ :_ {:v 8}]) [{:v 8} :_ :_ :_])
   (are= (reduce row-reduce [] [ {:v 4} {:v 4} :_ :_])
         [{:v 4 :double true} :_ :_ :_])
   (are= (reduce row-reduce [] [ {:v 4} :_ :_ {:v 4}])
         [{:v 4 :double true} :_ :_ :_])
   (are= (reduce row-reduce [] [ :_ {:v 4} :_ {:v 4}])
         [{:v 4 :double true} :_ :_ :_])
   (are= (reduce row-reduce [] [ :_ :_ {:v 4} {:v 4}])
         [{:v 4 :double true} :_ :_ :_])
   (are= (reduce row-reduce [] [ :_ {:v 4} {:v 4} {:v 4}])
         [{:v 4 :double true} {:v 4} :_ :_])
   (are= (reduce row-reduce [] [ {:v 4} {:v 4} {:v 4} {:v 4}])
         [{:v 4 :double true} {:v 4 :double true} :_ :_])
   (are= (reduce row-reduce [] [ {:v 4} {:v 8} {:v 8} {:v 4}])
         [{:v 4} {:v 8 :double true} {:v 4} :_])
   (are= (reduce row-reduce [] [ {:id :a :v 4} { :id :b :v 4}
                                 {:id :c :v 8} { :id :d :v 8}])
         [{:id :b :v 4 :double true }
          {:id :d :v 8 :double true} :_ :_])))





