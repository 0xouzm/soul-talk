(ns soul-talk.core
  (:require
    [ring.adapter.jetty :as jetty]
    [ring.util.http-response :as resp]
    [ring.util.response :refer [redirect]]
    [ring.middleware.reload :refer [wrap-reload]]
    [compojure.core :refer [routes GET POST defroutes]]
    [compojure.route :as route]
    [selmer.parser :as parser]
    [ring.middleware.webjars :refer [wrap-webjars]]
    [ring.middleware.defaults :refer :all]
    [soul-talk.auth-validate :as auth-validate]
    [ring.util.response :as res]
    [ring.middleware.format :as wrap-format]
    [soul-talk.routes.auth :refer [auth-routes]]
    [ring.middleware.session :refer [wrap-session]]
    ))



(defn home-handle [request]
  (parser/render-file "index.html" request))

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
  (-> (routes auth-routes app-routes)
      (wrap-nocache)
      (wrap-reload)
      (wrap-webjars)
      (wrap-format/wrap-restful-format :formats [:json-kw])
      (wrap-session)
      (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false))
      )
  )

