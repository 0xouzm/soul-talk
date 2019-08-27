(ns soul-talk.login
  (:require [domina :as dom]
            [domina.events :as ev]
            [reagent.core :as reagent :refer [atom]]
            [soul-talk.auth_validate :refer [validate-email validate-passoword]]))



(defn validate-invalid [input-id vali-fun]
  (if-not (vali-fun (dom/value input-id))                   ;;修改
    (dom/add-class! input-id "is-invalid")
    (dom/remove-class! input-id "is-invalid")))

(defn login-component []
  [:form#loginForm.form-signin
   {:action "/login" :method "post"}
   [:h1.h3.mb-3.font-weight-normal.text-center "Please sign in"]
   [:div.form-group
    [:label "Email address"]
    [:input#email.form-control
     {:type        "text"
      :name        "email"
      :auto-focus  true
      :placeholder "Email Address"
      :on-blur     #(validate-invalid (dom/by-id "email") validate-email)}] ;;修改
    [:div.invalid-feedback "无效的 Email"]]
   [:div.form-group
    [:label "Password"]
    [:input#password.form-control
     {:type        "password"
      :name        "password"
      :placeholder "password"
      :on-blur     #(validate-invalid (dom/by-id "password") validate-passoword)}] ;;修改
    [:div.invalid-feedback "无效的密码"]]
   [:div.form-group.form-check
    [:input#rememeber.form-check-input {:type "checkbox"}]
    [:label "记住我"]]
   [:div#error]
   [:input#submit.btn.btn-lg.btn-primary.btn-block {:type "submit" :value "登录"}]
   [:p.mt-5.mb-3.text-muted
    "&copy @2018"]])

(reagent/render
  [login-component]
  (dom/by-id "content"))

(defn validate-form []
  (let [email (dom/by-id "email")
        password (dom/by-id "password")]
    (if (and (validate-email email)
             (validate-passoword password))
      true
      (do
        (js/alert "email和密码不能为空")
        false))))

(defn ^:export init []
  (if (and js/document
           (.-getElementById js/document))
    (let [login-form (dom/by-id "loginForm")]
      (set! (.-onsubmit login-form) validate-form))))