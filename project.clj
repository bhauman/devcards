(defproject devcards "0.2.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://github.com/bhauman/devcards"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3269"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [sablono "0.3.4"]
                 [cljsjs/react "0.13.1-0"]                 
                 [cljsjs/showdown "0.4.0-1"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/devcards/js/compiled/devdemos.js"
                                    "resources/public/devcards/js/compiled/out"
                                    :target-path]

  :scm { :name "git"
         :url "https://github.com/bhauman/devcards" }
  
  :profiles {
   :dev {
      :dependencies [[org.omcljs/om "0.8.8"]
                     [reagent "0.5.0"]]                   
      :plugins [[lein-cljsbuild "1.0.5"]
                [lein-figwheel "0.3.7"]]
      :cljsbuild {
        :builds [{:id "devcards-demos"
                  :source-paths ["example_src" "src"]
                  :figwheel { :devcards true }
                  :compiler {
                             :main "devdemos.core"
                             :asset-path "js/compiled/out"
                             :output-to "resources/public/devcards/js/compiled/devdemos.js"
                             :output-dir "resources/public/devcards/js/compiled/out"
                             ;:recompile-dependents true                             
                             :optimizations :none
                             :source-map-timestamp true}}
                 {:id "website"
                  :source-paths ["example_src" "src"]
                  :compiler {
                             :main "devdemos.core"
                             :asset-path "site/out"
                             :output-to "site/devdemos.js"
                             :output-dir "site/out"
                             :devcards true
                             ;:recompile-dependents true                             
                             :optimizations :advanced }}]}
                   
         :figwheel { :css-dirs ["resources/public/devcards/css"]
                     :open-file-command "emacsclient" }
     }})
