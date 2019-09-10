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
    ))



(defn home-handle [request]
  (parser/render-file "index.html" request))

(defn handle-logout [request]
  (do
    (assoc request :session {})
    (redirect "/")))

(defn login-page [request]
  "this is login page"
  (parser/render-file "login.html" request)
  )

(defn handle-login [{:keys [params] :as request}]
  (println request)
  (let [email (:email params)
        password (:password params)]
    (cond
      (not (auth-validate/validate-email email)) (res/response {:status 400 :errors "Email不合法"})
      (not (auth-validate/validate-passoword password)) (res/response {:status 400 :errors "密码不合法"})
      (and (= email "wujj@gmail.com")
           (= password "12345678"))
      (do
        (assoc-in request [:session :identity] email)
        (res/response {:status :ok}))
      :else (res/response {:status 400 :errors "用户名密码不对"}))))


(defn error-page [error-details]
  {:status  (:status error-details)
   :headers {"Content-Type" "text/html; charset=utf-8"}
   :body    (parser/render-file "error.html" error-details)})

(defroutes
  app-routes
  (GET "/" request home-handle)
  (GET "/login" request (login-page request))
  (POST "/login" req (handle-login req))
  (GET "/logout" request (handle-logout request))
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
      (wrap-webjars)
      (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false))
      (wrap-format/wrap-restful-format)
      )
  )

