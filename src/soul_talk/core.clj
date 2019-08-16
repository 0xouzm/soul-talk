(ns soul-talk.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.http-response :as resp]
            [ring.middleware.reload :refer [wrap-reload]]))

(defn home-handle [request]
  (resp/ok
    (str "<html><body>your IP . is "
         (:remote-addr request)
         "</body></html>")
  ))


(defn wrap-nocache [handler]
  (fn [request]
    (-> request
        handler
        (assoc-in [:headers "Pragma"]
                  "no-cache"))))

(def app
  (-> home-handle
      wrap-nocache
      wrap-reload))

(defn -main []
  (jetty/run-jetty
    app
    {:port 3000
     :join? false}))
