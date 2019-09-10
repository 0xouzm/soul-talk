(ns soul-talk.login
  (:require [domina :as dom]
            [domina.events :as ev]
            [reagent.core :as reagent :refer [atom]]
            [soul-talk.auth-validate :as validate]
            [ajax.core :as ajax]))

(def login-data (atom {:email "" :password ""}))

(defn validate-invalid [input vali-fun]
  (if-not (vali-fun (.-value input))
    (dom/add-class! input "is-invalid")
    (dom/remove-class! input "is-invalid")))

(defn handler-ok [response]
  (js/alert @login-data))

(defn handler-error [{:keys [status status-text]}]
  (js/alert (str status status-text)))

(defn login! []
  (ajax/POST
    "/login"
    {:format        :json
     :headers       {"Accept" "application/transit+json"}
     :params        @login-data
     :handler       handler-ok
     :error-handler handler-error}))

(defn validate-form []
  (if (and (validate/validate-email (:email @login-data))
           (validate/validate-passoword (:password @login-data)))
    (login!)
    (do
      (js/alert "email和密码不合法")
      false)))

(defn login-component []
  [:div.container
   [:form#loginForm.form-signin
    [:h1.h3.mb-3.font-weight-normal.text-center "Please sign in"]
    [:div.form-group
     [:label "Email address"]
     [:input#email.form-control
      {:type        "text"
       :name        "email"
       :auto-focus  true
       :placeholder "Email Address"
       :on-blur   (fn [e]
                    (let [d (.. e -target)]
                      (swap! login-data assoc :email (.-value d))
                      (validate-invalid d validate/validate-email)))}]
     [:div.invalid-feedback "无效的 Email"]]
    [:div.form-group
     [:label "Password"]
     [:input#password.form-control
      {:type        "password"
       :name        "password"
       :placeholder "password"
       :on-blur     (fn [e]
                      (let [d (.-target e)]
                        (swap! login-data assoc :password (.-value d))
                        (validate-invalid d validate/validate-passoword)))}]
     [:div.invalid-feedback "无效的密码"]]
    [:div.form-group.form-check
     [:input#rememeber.form-check-input {:type "checkbox"}]
     [:label "记住我"]]
    [:div#error.invalid-feedback]
    [:input#submit.btn.btn-lg.btn-primary.btn-block
     {:type  "button"
      :value "登录"
      :on-click #(validate-form)}]
    [:p.mt-5.mb-3.text-muted "&copy @2018"]]])


(defn load-page []
  (reagent/render
    [login-component]
    (dom/by-id "app")))

(defn ^:export init []
  (if (and js/document
           (.-getElementById js/document))
    (load-page)))