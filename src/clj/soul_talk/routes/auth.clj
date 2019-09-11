(ns soul-talk.routes.auth
  (:require [soul-talk.models.db :as db]
            [ring.util.http-response :as resp]
            [buddy.hashers :as hashers]
            [taoensso.timbre :as log]
            [soul-talk.auth-validate :refer [reg-errors]]
            [compojure.core :refer [routes POST GET]]
            [selmer.parser :as parser]
            ))

;(defn register! [{:keys [session]} user]
(defn register! [req user]
  (println "user: ")
  (clojure.pprint/pprint user)
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

(def auth-routes
  (routes
    (GET "/register" req (parser/render-file "register.html" req))
    (POST "/register" req (register! req (:params req)))
    ))

