(defproject soul-talk "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [ring "1.7.1"]
                 [metosin/ring-http-response "0.9.0"]]
  :repl-options {:init-ns soul-talk.core}
  ;:plugins [[lein-ring "0.12.4"]]
  ;:ring {:handler soul-talk.core/app}
  :main soul-talk.core)
