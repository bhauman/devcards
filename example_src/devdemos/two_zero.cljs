(ns devdemos.two-zero
  (:require
   [devcards.core :as dc]
   [devcards.util.edn-renderer :refer [html-edn]]
   [clojure.string :as string]
   [clojure.set :refer [difference union]]
   [sablono.core :as sab :include-macros true]
   [cljs.core.async :refer [timeout]]
   [goog.labs.userAgent.device :as device])
  (:require-macros
   [cljs.core.async.macros :refer [go]]
   [devcards.core :refer [defcard is are= are-not= format-code format-data]]))

(defn lh [x] (print (prn-str x)) x)

(def is-mobile? (or (device/isMobile)
                    ;; we could hook into a callback to set this on resize
                    (< (.-offsetWidth
                        (aget (.getElementsByTagName js/document "body") 0))
                       490)))

(defcard intro
  (dc/markdown-card
   "# 2048"
   "Let's build 2048 interactively with devcards"))

(defcard intro-2
  (dc/markdown-card
   "### Board Style"
   "Let's start by creating the style for the board."))

(def to-pixel-pos
  (if is-mobile?
    (fn [x] (+ 8 (* x (+ 60 8))))
    (fn [x] (+ 15 (* x (+ 106 15))))))

(defn board-cell [{:keys [top left id v highlight reveal]}]
  (let [opts { :style { "-webkit-transform"
                        (str "translate3d("
                             (to-pixel-pos left) "px,"
                             (to-pixel-pos top) "px, 0px)")}}
        opts' (if id (assoc opts :key (str (name id))) opts)]
    [:div.cell-pos opts'
     [:div {:class (str "cell cell-num-" v
                        (when highlight " highlight")
                        (when reveal " reveal"))} v]]))

(defn one-row-board [data]
  [:div.board-area.board-area-one-row
   [:div.background
    (for [top (range 1) left (range 4)]
      [:div {:class (str
                     "cell-pos cell-empty"
                     " pos-left-" left
                     " pos-top-" top)}])]
   [:div.cells
    (map board-cell data)]])

(defn game-board [data]
  [:div.board-area
     [:div.background
      (for [top (range 4) left (range 4)]
        [:div {:class (str
                       "cell-pos cell-empty"
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
                                (assoc cval
                                  :double true
                                  :replaces (:id (get accum slot)))
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
   (are= (reduce row-reduce [] [ {:v 4 :id 1} {:v 4 :id 2} :_ :_])
         [{:v 4 :id 2 :double true :replaces 1} :_ :_ :_])
   (are= (reduce row-reduce [] [ {:v 4 :id 1} :_ :_ {:v 4 :id 2}])
         [{:v 4 :id 2 :double true :replaces 1} :_ :_ :_])
   (are= (reduce row-reduce [] [ :_ {:v 4 :id 1} :_ {:v 4 :id 2}])
         [{:v 4 :id 2 :double true :replaces 1} :_ :_ :_])
   (are= (reduce row-reduce [] [ :_ :_ {:v 4 :id 1} {:v 4 :id 2}])
         [{:id 2 :v 4 :double true :replaces 1} :_ :_ :_])
   (are= (reduce row-reduce [] [ :_ {:id 1 :v 4} {:id 2 :v 4} {:id 3 :v 4}])
         [{:id 2 :v 4 :double true :replaces 1} {:id 3 :v 4} :_ :_])
   (are= (reduce row-reduce [] [ {:id 1 :v 4} {:id 2 :v 4} {:id 3 :v 4} {:id 4 :v 4}])
         [{:id 2 :v 4 :double true :replaces 1} {:id 4 :v 4 :double true :replaces 3} :_ :_])
   (are= (reduce row-reduce [] [ {:id 1 :v 4} {:id 2 :v 8} {:id 3 :v 8} {:id 4 :v 4}])
         [{:id 1 :v 4} {:id 3 :v 8 :double true :replaces 2 } {:id 4 :v 4} :_])
   (are= (reduce row-reduce [] [ {:id :a :v 4} { :id :b :v 4}
                                 {:id :c :v 8} { :id :d :v 8}])
         [{:id :b :v 4 :double true :replaces :a }
          {:id :d :v 8 :double true :replaces :c } :_ :_])))

(defcard animation-work
  (dc/slider-card
   identity
   { :left (range 4) }
   :value-render-func
   (fn [{:keys [left]}]
     (one-row-board [{:left left :top 0 :v 2}]))))

(defcard stored-board-data-structure
  (dc/markdown-card
   "#### The main board will be stored like this"
   "```"
   (format-data
    [[:_ :_ :_ {:v 2 :id "t1"}]
     [:_ :_ :_ {:v 4 :id "t2"}]
     [:_ :_ :_ {:v 8 :id "t3"}]
     [:_ :_ :_ {:v 16 :id "t4"}]])
   "```"))

(defn convert-to-visible-tiles [board]
  (vec (keep identity
             (for [row (range 4)
                   col (range 4)]
               (let [t (get-in board [row col])]
                 (when (not= :_ t) (assoc t :top row :left col)))))))

(defcard convert-to-visible-tiles-card
  (dc/test-card
   (are= (convert-to-visible-tiles
          [[:_ :_ :_ {:v 2 :id "t1"}]
           [:_ :_ :_ {:v 4 :id "t2"}]
           [:_ :_ :_ {:v 8 :id "t3"}]
           [:_ :_ :_ {:v 16 :id "t4"}]])
         [{:v 2, :id "t1", :top 0, :left 3}
          {:v 4, :id "t2", :top 1, :left 3}
          {:v 8, :id "t3", :top 2, :left 3}
          {:v 16, :id "t4", :top 3, :left 3}])
   (are= (convert-to-visible-tiles
          [[:_ :_ :_ :_]
           [:_ :_ :_ :_]
           [:_ :_ :_ :_]
           [:_ :_ :_ :_]])
         [])))

(defn select-row-key [row key]
  (keep (fn [x] (when (not= x :_) (key x))) row))

(defn transform-row-left [row]
  (reduce row-reduce [] row))

(defmulti transform-rows identity)

(defmethod transform-rows :left [_ board-rows]
  (map transform-row-left board-rows))

(defmethod transform-rows :right [_ board-rows]
  (->> board-rows
       (map (comp vec reverse))
       vec
       (map transform-row-left)
       (map (comp vec reverse))
       vec))


(defn transpose [matrix]
  (vec (apply map vector matrix)))

(defmethod transform-rows :up [_ board-rows]
  (->> board-rows
       transpose
       (map transform-row-left)
       transpose))

(defmethod transform-rows :down [_ board-rows]
  (->> board-rows
       transpose
       (map (comp vec reverse))
       vec
       (map transform-row-left)
       (map (comp vec reverse))
       vec
       transpose))



(def base-board [[:_ :_ :_ :_]
                 [:_ :_ :_ :_]
                 [:_ :_ :_ :_]
                 [:_ :_ :_ :_]])

(defn tiles->board [tiles]
  (reduce (fn [accum {:keys [top left] :as x}]
            (assoc-in accum [top left]
                      (dissoc x :top :left)))
          base-board (vals tiles)))

(defn get-replaced-tiles [new-tiles]
  (keep (fn [x]
          (when (:replaces x)
            (-> x
                (dissoc :replaces)
                (dissoc :double)                
                (assoc :id (:replaces x))
                (assoc :remove true))))
        new-tiles))

(defn transform-board [direction tiles]
  (let [new-tiles (->> tiles
                       tiles->board
                       (transform-rows direction)
                       vec
                       convert-to-visible-tiles)]
    (merge tiles
           (into {} (map (juxt :id #(dissoc % :replaces)) new-tiles))
           (into {} (map (juxt :id identity) (get-replaced-tiles new-tiles))))))

(defn double-tiles [tiles]
  (let [tiles' (filter (fn [[_ v]] (not (:remove v))) tiles)]
    (into {}
          (map (fn [[k x]]
                 [k (if (:double x)
                      (-> x
                          (assoc :v (* 2 (:v x)))
                          (assoc :highlight true)
                          (dissoc :double))
                      x)])
               tiles'))))

(defn remove-highlight [tiles]
  (into {}
        (map (fn [[k v]] [k (dissoc v :highlight :reveal)]) tiles)))

(defn create-tile [opts]
  (merge
   { :v (if (< (rand) 0.9) 2 4)
     :top (rand-int 4)
     :left (rand-int 4)
     :id (keyword (gensym "tile"))
     :reveal true}
   opts))

(defn empty-slots [tiles]
  (let [board' (tiles->board tiles)]
    (lh board')
    (vec (keep
          identity
          (for [top (range 4)
                left (range 4)]
            (when (= :_ (lh (get-in board' [top left])) )
              {:top top :left left}))))))

(defn add-random-tile [tiles]
  (let [empties (empty-slots tiles)
        rand-tile (create-tile (rand-nth (lh empties)))]
    (println empties)
    (println rand-tile)
    (assoc tiles (:id rand-tile) rand-tile)))

(defcard transform-row-left-test
  (dc/test-card
   (are= (transform-row-left [{:v 2 :id "t1"} :_ :_ {:v 2 :id "t2"}])
         [{:v 2 :double true :id "t2" :replaces "t1"} :_ :_ :_])
   
   (are= (transform-rows :left [[{:v 2 :id "t6"} :_ :_ {:v 2 :id "t1"}]
                                [:_ :_ :_ {:v 4 :id "t2"}]
                                [:_ :_ :_ {:v 8 :id "t3"}]
                                [{:v 16 :id "t7"} :_ :_ {:v 16 :id "t4"}]])
         [[{:v 2 :id "t1" :double true :replaces "t6"} :_ :_ :_]
           [{:v 4 :id "t2"} :_ :_ :_]
           [{:v 8 :id "t3"} :_ :_ :_]
           [{:v 16 :id "t4" :double true :replaces "t7"} :_ :_ :_]])
   (are= (transform-board :left {:t1 {:id :t1 :top 0 :left 0 :v 2}
                                 :t2 {:id :t2 :top 0 :left 3 :v 2}})
         {:t1 {:id :t1, :v 2, :top 0, :left 0, :remove true}
          :t2 {:id :t2, :v 2, :double true, :top 0, :left 0}}
         )))

(defn move [dir data]
  (let [prev @data]
    (swap! data update-in [:tiles] (partial transform-board dir))
    (when (not= prev @data)
      (go
       (<! (timeout 100))
       (swap! data update-in [:tiles] (comp add-random-tile double-tiles))
       (<! (timeout 400))
       (swap! data update-in [:tiles] remove-highlight)))))

(def start-data { :tiles {:tile1 { :v 2 :top 0 :left 0 :id :tile1}
                          :tile2 { :v 2 :top 0 :left 3 :id :tile2}}})

(defcard try-game-card
  (dc/react-runner-card
   (fn [data]
     (when (= @data {})
       (reset! data start-data))
     (sab/html
      [:div
       (game-board (vals (:tiles @data)))
       [:div [:a {:onClick (fn [] (move :left data))} "left"]]
       [:div
        [:a {:onClick (fn [] (move :right data))} "right"]]
       [:div [:a {:onClick (fn [] (move :up data))} "up"]]
       [:div [:a {:onClick (fn [] (move :down data))} "down"]]       
       [:div
        [:a {:onClick (fn [] (reset! data start-data))} "reset"]]
       #_(html-edn @data)]))))
