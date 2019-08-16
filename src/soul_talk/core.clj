(ns soul-talk.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.response :as response]
            [ring.middleware.reload :refer [wrap-reload]]
            [compojure.core :refer [routes GET defroutes]]
            [clojure.java.io :as io]
            [compojure.route :as route]
            ))



(defn home-handle [request]
  (io/resource "index.html"))

(defroutes
  app-routes
  (GET "/" request home-handle)
  (GET "/about" [] (str "这是关于我的页面"))
  (route/not-found "<h1>Page not found</h1>"))

;; 自定义中间件：加入不缓存头信息
(defn wrap-nocache [handler]
  (fn [request]
    (-> request
        handler
        (assoc-in [:headers "Pragma"] "no-cache"))))

(def app
  (-> app-routes
      (wrap-nocache)
      (wrap-reload))
  )


