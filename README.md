# README


## used scaffold to create 'technician', 'order' and 'location'. Probably wouldn't use this in a production build. Just used to save some time.

## created a splash#index controller/action for home page

## installing bootstrap and jquery gems

## ruby 2.6.0p0 (2018-12-25 revision 66547) [x86_64-darwin17]
## Rails 5.2.3
## mysql  Ver 8.0.18 for osx10.14 on x86_64 (Homebrew)

## to populate databases use the following migrations and rakes

- rails db:migrate
- bundle exec rake import:technicians
- bundle exec rake import:locations
- bundle exec rake import:orders


## Things I struggled within

- MVC I didn't set it up with best practice. I kind of threw most of it into the view and controlled with ruby in the erb as well as javascript.

- Would've liked to populate a matrix and pull information out much easier.

- A modal would've been nice, Seemed to run into some bootstrap issues while trying to get the modal working.. spent too much time and then ditched it

- should've called my landing page a landing page and not a splash page.

- Had issues with link_to untill I disabled turbolinks. I could've kept it by adding a tiny bit of code to my javascript.

- javascript was a bit messy. I would've liked to refactor it.

- I didn't have too much css, but I could've used more of the SASS features.

- wish I finished sooner. I just have school and work and been on the font-end kick for while. Nice to get back to ruby

## Overall I had fun with this. I'd love to add to it. Would love to learn from some Senior devs and get really good at coding rails.

- Thanks for taking a look at my code.

- Any feedback would be more then welcome!!!
