Rails.application.routes.draw do
  resources :locations
  resources :technicians
  resources :orders
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
