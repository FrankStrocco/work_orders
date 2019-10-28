# README


* used scaffold to create 'technician', 'order' and 'location'. Probably wouldn't use this in a production build. Just used to save some time.

* created a splash#index controller/action for home page

* installing bootstrap and jquery gems

* ruby 2.6.0p0 (2018-12-25 revision 66547) [x86_64-darwin17]
* Rails 5.2.3
* mysql  Ver 8.0.18 for osx10.14 on x86_64 (Homebrew)

* to populate databases

** rails db:migrate
** bundle exec rake import:technicians
** bundle exec rake import:locations
** bundle exec rake import:orders
