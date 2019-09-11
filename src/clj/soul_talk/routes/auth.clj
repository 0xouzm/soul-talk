(ns soul-talk.routes.auth
  (:require [soul-talk.models.db :as db]
            [ring.util.http-response :as resp]
            [ring.util.response :refer [redirect]]
            [buddy.hashers :as hashers]
            [taoensso.timbre :as log]
            [soul-talk.auth-validate :refer [reg-errors login-errors]]
            [compojure.core :refer [routes POST GET]]
            [selmer.parser :as parser]
            [clj-time.core :as t]
            ))

(defn register! [{:keys [session]} user]
  ;(println "user: ")
  ;(clojure.pprint/pprint user)
  (if (reg-errors user)
    (resp/precondition-failed {:result  :error
                               :message "user data error"})
    (try
      (if-not (= '() (db/select-user (:email user)))
        (do
          (resp/precondition-failed {:result  :error
                                     :message "email 已被注册"})
          )
        (do
          (db/save-user!
            (-> user
                (dissoc :pass-confirm)
                (update :password hashers/encrypt)))
          (-> {:result :ok}
              (resp/ok))))
      (catch Exception e
        (do
          (log/error e)
          (resp/internal-server-error
            {:result  :error
             :message "发生内部错误，请联系管理员"}))))))



(defn login! [{:keys [session]} user]
  (if (login-errors user)
    (resp/precondition-failed {:result :error})
    (try
      (let [db-user (first (db/select-user (:email user)))]
        (if (or
              (nil? db-user)
              (hashers/check (:password user) (:password db-user)))
          (resp/precondition-failed
            {:result  :error
             :message "email or password error"})
          (do
            (assoc user :last-time (t/now))
            (-> {:result :ok}
                (resp/ok)
                (assoc :session (assoc session :identity (:email user)))))
          ))

      (catch Exception e
        (do
          (log/error e)
          (resp/internal-server-error
            {:result  :error
             :message "internal error"}))
        ))))

(defn logout! [request]
  (-> "/"
      resp/found
      (assoc :session nil)))

;(defn logout! [request]
;  (do
;    (assoc request :session {})
;    (clojure.pprint/pprint request)
;    (resp/file-response "/")
;    ))
;

(def auth-routes
  (routes
    (GET "/register" req (parser/render-file "register.html" req))
    (POST "/register" req (register! req (:params req)))
    (GET "/login" req (parser/render-file "login.html" req))
    (POST "/login" req (login! req (:params req)))
    (GET "/logout" req (logout! req))
    ))
