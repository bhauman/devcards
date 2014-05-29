(ns devdemos.two-zero
  (:require
   [devcards.core :as dc]
   [clojure.string :as string]
   [clojure.set :refer [difference union]]
   [sablono.core :as sab :include-macros true]

   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [cljs.core.async :refer [timeout]]
   [goog.labs.userAgent.device :as device])
  (:require-macros
   [cljs.core.async.macros :refer [go]]
   [devcards.core :refer [defcard is are= are-not= format-code format-data mkdn-data mkdn-code]]))

(defn lh [x] (prn-str x) x)

(defn lc [x] (.log js/console x) x)

(def is-mobile? (or (device/isMobile)
                    ;; we could hook into a callback to set this on resize
                    (< (.-offsetWidth
                        (aget (.getElementsByTagName js/document "body") 0))
                       490)))

(defcard intro
  (dc/markdown-card
   "# 2048
    Let's build 2048 interactively with devcards"))

(defcard intro-2
  (dc/markdown-card
   "### Board Style

   Let's start by creating the style for the board.

   The board is a 4x4 board. It will have one container with 16
   absolutely positioned cells in it. These cells will mark where the
   potential locations for the game tiles."))

(def to-pixel-pos
  (if is-mobile?
    (fn [x] (+ 8 (* x (+ 60 8))))
    (fn [x] (+ 15 (* x (+ 106 15))))))

(defn pixel-pos [pos]
  (str (to-pixel-pos pos) "px"))

(defn board-cell [{:keys [top left id v highlight reveal]}]
  (let [translate (str "translate3d("
                       (pixel-pos left) ","
                       (pixel-pos top) ", 0px)")]
    (sab/html
     [:div.cell-pos { :style { "-webkit-transform" translate
                               "-moz-transform" translate
                               "transform" translate }
                      :key (str (name id)) }
      [:div { :class (str "cell cell-num-" v
                          (when highlight " highlight")
                          (when reveal " reveal")) } v]])))

;; These are the background cells of the board, they never change.
(defn background-cells []
  (for [top (range 4) left (range 4)]
    (sab/html
     [:div.cell-pos.cell-empty
      { :style { :top (pixel-pos top)
                :left (pixel-pos left)}}])))

(defn one-row-board-static
  "Only used for the demo process"
  [data]
  (sab/html
   [:div.board-area.board-area-one-row
    [:div.background (take 4 (background-cells))]
    [:div.cells (map board-cell data)]]))

(defn game-board [data]
  (sab/html
   [:div.board-area
    [:div.background (background-cells)]
    [:div.cells (map board-cell data)]]))

(defcard board-style
  (dc/sab-card (game-board [])))

(defcard intro-3
  (dc/markdown-card
   "### Cell Style
   Then we'll work on the style for the cells. The hard part is
   getting the colors and the font sizes correct."))

(defcard board-with-cells
  (dc/sab-card
   (game-board [{ :top 0 :left 0 :v 2 :id :t1}
                { :top 0 :left 1 :v 4 :id :t2}
                { :top 0 :left 2 :v 8 :id :t3}
                { :top 0 :left 3 :v 16 :id :t4}
                { :top 1 :left 0 :v 32 :id :t5}
                { :top 1 :left 1 :v 64 :id :t6}
                { :top 1 :left 2 :v 128 :id :t7}
                { :top 1 :left 3 :v 256 :id :t8}
                { :top 2 :left 0 :v 512 :id :t9}
                { :top 2 :left 1 :v 1024 :id :t10}
                { :top 2 :left 2 :v 2048 :id :t11}])))

(defcard checking-tile-move-animation
  (dc/markdown-card
   "## Checking basic tile movement animation"))

(defcard animation-work
  (dc/slider-card
   identity
   { :left (range 4) }
   :value-render-func
   (fn [{:keys [left]}]
     (one-row-board-static [{:left left :top 0 :v 2 :id :t1}]))))

(defcard stored-board-data-structure
  (dc/markdown-card
   "## Main data structures
    #### Tile Map

    The only data structure we are going to hold in our atom is a map
    of the tiles on the page. The list will look like this:"

   (mkdn-data
    {:t1 { :top 0 :left 0 :v 2 :id :t1}
     :t2 { :top 1 :left 0 :v 4 :id :t2}
     :t3 { :top 2 :left 0 :v 8 :id :t3}
     :t4 { :top 3 :left 0 :v 4 :id :t4}})   

   "Each tile will have an `:id`, a value `:v` and a position on the board.

   Data handling is complicated because we will have to manage the
   state in phases to support animation. Tiles will be marked with the
   following flags:

   * `:double` - this flag marks the tiles value to be doubled
   * `:remove` - this flag marks the tile to be removed
   * `:reveal` - this flag marks the tile to be rendered with the **reveal** class
   * `:highlight` - this flag marks the tile to be rendered with the **highlight** class

   All of these flags are temporary markings that will be removed in
   a couple of phases of animation right after a move is made.

   #### Board view

   The tile map will be converted to a board view that will look like this:"

   (mkdn-data
    [[{:v 2, :id :t1} :_ :_ :_]
     [{:v 8, :id :t2} :_ :_ :_]
     [{:v 4, :id :t3} :_ :_ :_]
     [{:v 4, :id :t4} :_ :_ :_]])

   "The board view removes the position data as it is implicit.

   The board view is used to compute the board transformation given a
   `:left`, `:right`, `:up`, or `:down` move. For instance if we move
   the above board to the `:right` it will end up looking like this:"

   (mkdn-data
    [[:_ :_ :_ {:v 2, :id :t1}]
     [:_ :_ :_ {:v 8, :id :t2}]
     [:_ :_ :_ {:v 4, :id :t3}]
     [:_ :_ :_ {:v 4, :id :t4}]])
   
   "And then if we move it `:down` it will look like this."

   (mkdn-data
    [[:_ :_ :_ :_]
     [:_ :_ :_ {:v 2, :id :t1}]
     [:_ :_ :_ {:v 8, :id :t2}]
     [:_ :_ :_ {:v 4, :id :t3 :double true :replaces :t4}]])
   
   "Once we have transformed the board we will turn it back into the tile map."

   (mkdn-data
    {:t1 { :top 1 :left 3 :v 2 :id :t1}
     :t2 { :top 0 :left 3 :v 8 :id :t2}
     :t3 { :top 0 :left 3 :v 4 :id :t3 :double true }
     :t4 { :top 0 :left 3 :v 4 :id :t4 :remove true }})))

(defcard basic-data-transformations
  (dc/markdown-card
   "### Transforming one row

   We need to get a transformation for one row. From there we can get
   all the other transformations.

   We will be transforming one row for a move `:left`."))

(def remove-blanks (partial filterv #(not= % :_)))

(defn pad-with [length item xs]
  (vec (concat xs (take (- length (count xs)) (repeat item)))))

(def pad-blanks  (partial pad-with 4 :_))

(defn combine? [tile-1 tile-2]
  (cond
   (nil? tile-1) false
   (nil? tile-2) false   
   (:double tile-1) false
   (:double tile-2) false   
   (= (:v tile-1) (:v tile-2)) true
   :else false))

(defn combine [tile-1 tile-2]
  (assoc tile-2 :double true :replaces (:id tile-1)))

(defn tile-reducer [accum tile]
  (if (combine? (last accum) tile)
    (conj (vec (butlast accum)) (combine (last accum) tile))
    (conj accum tile))) 

;; this function reduces one row or the board to the left
(def transform-row
  (comp pad-blanks
        (partial reduce tile-reducer [])
        remove-blanks))

(defcard transform-row-tests
  (dc/test-card
   
   "In a move `:left` all the blanks will end up on the right.
   So let's `remove-blanks` first"
   
   (are= (remove-blanks [:_ :_ :_ :_]) [])
   (are= (remove-blanks [:_ :_ :_ {:v 8}]) [{:v 8}])
   "We should also be able to `pad-blanks` back to finish the move."
   (are= (pad-blanks [{:v 8}]) [{:v 8} :_ :_ :_])
   "Next we are going to create a function to reduce the row. And to
   help us we are going to create a predicate `combine?` to tell us if we
   can combine two tiles."
   
   (is (combine? {:v 2} {:v 2}))
   (is (not (combine? {:v 2 :double true} {:v 2})))
   (is (not (combine? {:v 2} {:v 2 :double true})))      
   (is (not (combine? {:v 2} {:v 4})))
   "Then we need a function to help us `combine` the two tiles."
   (are= (combine {:id :t1 :v 2} {:id :t2 :v 2})
         {:id :t2, :v 2, :double true, :replaces :t1})
   "We can then assemble the above functions into `transform-row`
   which will take a row and do a 2048 move to the left."
   
   (are= (transform-row [:_ :_ :_ :_]) [:_ :_ :_ :_])
   (are= (transform-row [{:v 8} :_ :_ :_]) [{:v 8} :_ :_ :_])
   (are= (transform-row [ :_ {:v 8} :_ :_]) [{:v 8} :_ :_ :_])
   (are= (transform-row [ :_ :_ {:v 8} :_]) [{:v 8} :_ :_ :_])
   (are= (transform-row [ :_ :_ :_ {:v 8}]) [{:v 8} :_ :_ :_])
   (are= (transform-row [ {:v 4 :id 1} {:v 4 :id 2} :_ :_])
         [{:v 4 :id 2 :double true :replaces 1} :_ :_ :_])
   (are= (transform-row [ {:v 4 :id 1} :_ :_ {:v 4 :id 2}])
         [{:v 4 :id 2 :double true :replaces 1} :_ :_ :_])
   (are= (transform-row [ :_ {:v 4 :id 1} :_ {:v 4 :id 2}])
         [{:v 4 :id 2 :double true :replaces 1} :_ :_ :_])
   (are= (transform-row [ :_ :_ {:v 4 :id 1} {:v 4 :id 2}])
         [{:id 2 :v 4 :double true :replaces 1} :_ :_ :_])
   (are= (transform-row [ :_ {:id 1 :v 4} {:id 2 :v 4} {:id 3 :v 4}])
         [{:id 2 :v 4 :double true :replaces 1} {:id 3 :v 4} :_ :_])
   (are= (transform-row [ {:id 1 :v 4} {:id 2 :v 4} {:id 3 :v 4} {:id 4 :v 4}])
         [{:id 2 :v 4 :double true :replaces 1} {:id 4 :v 4 :double true :replaces 3} :_ :_])
   (are= (transform-row [ {:id 1 :v 4} {:id 2 :v 8} {:id 3 :v 8} {:id 4 :v 4}])
         [{:id 1 :v 4} {:id 3 :v 8 :double true :replaces 2 } {:id 4 :v 4} :_])
   (are= (transform-row [ {:id :a :v 4} { :id :b :v 4}
                                 {:id :c :v 8} { :id :d :v 8}])
         [{:id :b :v 4 :double true :replaces :a }
          {:id :d :v 8 :double true :replaces :c } :_ :_])))

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

(def reverse-rows (partial mapv (comp vec reverse)))

(defn reversed [f] (comp reverse-rows f reverse-rows))

(defn transpose [matrix]
  (vec (apply map vector matrix)))

(defn transposed [f] (comp transpose f transpose))

(def transform-rows*       (partial mapv transform-row))
(def transform-rows-right* (reversed transform-rows*))
(def transform-rows-up*    (transposed transform-rows*))
(def transform-rows-down*  (transposed transform-rows-right*)) 

(defmulti transform-rows identity)
(defmethod transform-rows :left  [_ rows] (transform-rows* rows))
(defmethod transform-rows :right [_ rows] (transform-rows-right* rows))
(defmethod transform-rows :up    [_ rows] (transform-rows-up* rows))
(defmethod transform-rows :down  [_ rows] (transform-rows-down* rows))

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
                (dissoc :replaces :double)
                (assoc :id (:replaces x))
                (assoc :remove true))))
        new-tiles))

(defn transform-board [direction tiles]
  (let [new-tiles (->> tiles
                       tiles->board
                       (transform-rows direction)
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
                          (assoc :v (* 2 (:v x))
                                 :highlight true)
                          (dissoc :double))
                      x)])
               tiles'))))

(defn remove-highlight-and-reveal [tiles]
  (into {}
        (map (fn [[k v]] [k (dissoc v :highlight :reveal)]) tiles)))

(defn create-tile [opts]
  (merge
   { :v (if (< (rand) 0.9) 2 4)
     :top (rand-int 4)
     :left (rand-int 4)
     :id (keyword (gensym "t"))
     :reveal true}
   opts))

(defn empty-slots [board]
  (vec (keep
        identity
        (for [top (range 4)
              left (range 4)]
          (when (= :_ (get-in board [top left]))
            {:top top :left left})))))

(defn add-random-tile [tiles]
  (->> tiles
       tiles->board
       empty-slots
       rand-nth
       create-tile
       ((juxt :id identity)) 
       (apply assoc tiles)))

(defcard transform-row-left-test
  (dc/test-card
   (are= (transform-row [{:v 2 :id "t1"} :_ :_ {:v 2 :id "t2"}])
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
         )
   (are= (transform-board :right {:t1 {:id :t1 :top 0 :left 0 :v 2}
                                 :t2 {:id :t2 :top 0 :left 3 :v 2}})
         {:t1 {:id :t1, :v 2, :double true, :top 0, :left 3}
          :t2 {:id :t2, :v 2, :top 0, :left 3, :remove true}}
         )
   (are= (transform-board :up {:t1 {:id :t1 :top 0 :left 0 :v 2}
                               :t2 {:id :t2 :top 3 :left 0 :v 2}})
         {:t2 {:id :t2, :v 2, :double true, :top 0, :left 0}
          :t1 {:id :t1, :v 2, :top 0, :left 0, :remove true}}
         )
   (are= (transform-board :down {:t1 {:id :t1 :top 0 :left 0 :v 2}
                                 :t2 {:id :t2 :top 3 :left 0 :v 2}})
         {:t1 {:id :t1, :v 2, :double true, :top 3, :left 0}
          :t2 {:id :t2, :v 2, :top 3, :left 0, :remove true}}
         )))

(defn move [dir data]
  (let [prev @data]
    (swap! data (partial transform-board dir))
    (when (not= prev @data)
      (go
       (<! (timeout 100))
       (swap! data (comp add-random-tile double-tiles))
       (<! (timeout 400))
       (swap! data remove-highlight-and-reveal)))))

(defn one-row-move [dir data]
  (let [prev @data]
    (swap! data (partial transform-board dir))
    (when (not= prev @data)
      (go
       (<! (timeout 100))
       (swap! data double-tiles)
       (<! (timeout 400))
       (swap! data remove-highlight-and-reveal)))))

(def start-data {:tile1 { :v 2 :top 0 :left 0 :id :tile1}
                 :tile2 { :v 2 :top 0 :left 3 :id :tile2}})

(defcard try-game-card
  (dc/react-runner-card
   (fn [data]
     (when (= @data {})
       (reset! data start-data))
     (sab/html
      [:div
       (game-board (vals @data))
       [:div [:a {:onClick (fn [] (move :left data))} "left"]]
       [:div
        [:a {:onClick (fn [] (move :right data))} "right"]]
       [:div [:a {:onClick (fn [] (move :up data))} "up"]]
       [:div [:a {:onClick (fn [] (move :down data))} "down"]]       
       [:div
        [:a {:onClick (fn [] (reset! data start-data))} "reset"]]
       (dc/edn->html @data)]))))

