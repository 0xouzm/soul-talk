(ns soul-talk.core
  (:require
    ;[ring.adapter.jetty :as jetty]
    ;[ring.util.response :as response]
    [ring.middleware.reload :refer [wrap-reload]]
    [compojure.core :refer [routes GET defroutes]]
    ;[clojure.java.io :as io]
    [compojure.route :as route]
    [selmer.parser :as parser]
    [ring.middleware.webjars :refer [wrap-webjars]]
    [ring.middleware.defaults :refer :all]
    ))



(defn home-handle [request]
  (parser/render-file "index.html"
                      {:ip (:remote-addr request)}))

(defn error-page [error-details]
  {:status  (:status error-details)
   :headers {"Content-Type" "text/html; charset=utf-8"}
   :body    (parser/render-file "error.html" error-details)})

(defroutes
  app-routes
  (GET "/" request home-handle)
  (GET "/about" [] (str "这是关于我的页面"))
  (route/not-found error-page))

;; 自定义中间件：加入不缓存头信息
(defn wrap-nocache [handler]
  (fn [request]
    (-> request
        handler
        (assoc-in [:headers "Pragma"] "no-cache"))))

(def app
  (-> app-routes
      (wrap-nocache)
      (wrap-reload)
      (wrap-webjars)  ;; 这行添加的
      (wrap-defaults site-defaults)
      )
  )

