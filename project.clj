(defproject devcards "0.2.0-8"
  :description "Devcards is a ClojureScript library that provides a lab space to you develop your UI components independently and interactively."
  :url "http://github.com/bhauman/devcards"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [sablono "0.3.6"]
                 [cljsjs/react "0.13.3-1"]
                 [cljs-react-reload "0.1.1"]
                 [cljsjs/showdown "0.4.0-1"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["example-resources/public/devcards/js/compiled"
                                    :target-path]

  :scm { :name "git"
         :url "https://github.com/bhauman/devcards" }

  :profiles {
   :dev {
      :dependencies [[org.omcljs/om "0.9.0"]
                     [reagent "0.5.1"]]                   
      :plugins [#_[lein-cljsbuild "1.0.5"]
                [lein-figwheel "0.5.0-SNAPSHOT"]]
      :resource-paths ["resources" "example-resources"]   
      :cljsbuild {
        :builds [{:id "devcards-demos"
                  :source-paths ["example_src" "src"]
                  :figwheel { :devcards true
                              #_:websocket-host #_:js-client-host }
                  :compiler {
                             :main "devdemos.start-ui"
                             :asset-path "js/compiled/out"
                             :output-to "example-resources/public/devcards/js/compiled/devdemos.js"
                             :output-dir "example-resources/public/devcards/js/compiled/out"
                             ;:recompile-dependents true                             
                             :optimizations :none
                             :source-map-timestamp true}}
                 {:id "website"
                  :source-paths ["example_src" "src"]
                  ;; :figwheel { :devcards true }
                  :compiler {
                             :main "devdemos.start-ui"
                             :asset-path "site/out"
                             :output-to "site/devdemos.js"
                             :output-dir "site/out"
                             :devcards true
                             ;; :pseudo-names true                             
                             :recompile-dependents true                             
                             ;; :optimizations :simple
                             :optimizations :advanced
                             }}
                 ]}
         
         :figwheel { :css-dirs ["resources/public/devcards/css"]
                     :open-file-command "emacsclient"
                    ;;:nrepl-port 7888
                    }
     }})

