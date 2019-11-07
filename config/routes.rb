Rails.application.routes.draw do
  root 'splash#index'

  resources :locations
  resources :technicians
  resources :orders

  get 'splash/index'
  get 'orders/index'
  get 'splash/other_index'

end
