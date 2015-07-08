(ns figwheel.connect (:require [devcards.core :include-macros true] [devdemos.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "website", :devcards true, :websocket-url "ws://localhost:3449/figwheel-ws"})
(devcards.core/start-devcard-ui!)

