(ns soul-talk.models.db
  (:require [clojure.java.jdbc :as sql]))

(def db-spec {:subprotocol "postgresql"
              :subname     "//localhost:5432/soul_talk"
              :user        "soultalk"
              :password    ""})

(defn save-user! [user]
  (sql/insert! db-spec :users user))

(defn select-user [id]
  ;(println (str "id: " id))
  (sql/query db-spec ["select * from users where email = ? " id]))

(defn select-all-users []
  (sql/query db-spec ["select * from users"]))

