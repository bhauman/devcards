(defproject devcards "0.2.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0-beta3"]
                 [org.clojure/clojurescript "0.0-3269"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [sablono "0.3.4"]
                 [cljsjs/react "0.13.1-0"]                 
                 [cljsjs/showdown "0.4.0-1"]
                 [org.omcljs/om "0.8.8"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/devcards/js/compiled/devdemos.js"
                                    "resources/public/devcards/js/compiled/out"
                                    :target-path]
  
  :profiles {
    :dev {
      :plugins [[lein-cljsbuild "1.0.5"]
                [lein-figwheel "0.3.3"]]
      :cljsbuild {
        :builds [{:id "devcards-demos"
                  :source-paths ["example_src" "src"]
                  :figwheel true
                  :compiler {
                             :main "devdemos.core"
                             :asset-path "js/compiled/out"
                             :output-to "resources/public/devcards/js/compiled/devdemos.js"
                             :output-dir "resources/public/devcards/js/compiled/out"
                             ;:recompile-dependents true                             
                             :optimizations :none
                             :devcards   true
                             :source-map-timestamp true}}]}
                   
          :figwheel { :css-dirs ["resources/public/devcards/css"]
                      :open-file-command "emacsclient" }
     }})
