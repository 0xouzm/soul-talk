(ns soul-talk.auth_validate)

(def ^:dynamic *password-re* #"^(?=.*\d).{4,128}$") ;; 从 login.cljs 移过来

(def ^:dynamic *email-re* #"^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$") ;; 从 login.cljs 移过来

;; 从 login.cljs 移过来并修改
(defn validate-email [email]
  (if (re-matches *email-re* email)
    true
    false))

;; 从 login.cljs 移过来并修改
(defn validate-passoword [password]
  (if (re-matches *password-re* password)
    true
    false))