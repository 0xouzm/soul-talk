(ns soul-talk.login
  (:require [domina :as dom]
            [domina.events :as ev]
            [reagent.core :as reagent :refer [atom]]
            [soul-talk.auth-validate :refer [login-errors] :as validate]
            [ajax.core :as ajax :refer [POST]]
            [taoensso.timbre :as log]
            [soul-talk.components.common :as c]
            ))

(defn validate-invalid [input vali-fun]
  (if-not (vali-fun (.-value input))
    (dom/add-class! input "is-invalid")
    (dom/remove-class! input "is-invalid")))

(defn handler-ok [response]
  (.log js/console (str "response: " response)))

(defn handler-error [{:keys [status message] :as resp}]
  (js/alert "error: " message))

(defn login! [login-data errors]
  (reset! errors (login-errors @login-data))
  (if-not @errors
    (ajax/POST "/login"
               {:format        :json
                :headers       {"Accept" "application/transit+json"}
                :params        @login-data
                :handler       #(set! (.. js/window -location -href) "/")
                :error-handler #(let [msg (get-in % [:response "message"])]
                                  (log/error msg)
                                  (js/alert msg))})
    (let [error (vals @errors)]
      (log/error error)
      (js/alert error))))

;(defn validate-form [login-data]
;  (if (and (validate/validate-email (:email @login-data))
;           (validate/validate-passoword (:password @login-data)))
;    (login! login-data)
;    (do
;      (js/alert "email或密码不合法")
;      false)))

(defn login-component []
  (let [login-data (atom {})
        errors (atom {})]
    (fn []
      [:div.container
       [:div#loginForm.form-signin
        [:h1.h3.mb-3.font-weight-normal.text-center "Please sign in"]
        [c/text-input "Email" :email "Email Address" login-data]
        [c/password-input "密码" :password "输入密码" login-data]
        [:input#submit.btn.btn-primary.btn-lg.btn-block
         {:type     :submit
          :value    "登录"
          :on-click #(login! login-data errors)}]
        [:input#submit.btn.btn-primary.btn-lg.btn-block
         {:type     :button
          :value    "注册"
          :on-click #(set! (.. js/window -location -href) "/register")}]
        [:p.mt-5.mb-3.text-muted "&copy @2018"]]])))

(defn load-page []
  (reagent/render
    [login-component]
    (dom/by-id "app")))

(defn ^:export init []
  (if (and js/document
           (.-getElementById js/document))
    (load-page)))