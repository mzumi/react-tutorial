Rails.application.routes.draw do
  root to: 'top#index'
  
  resources :comments, only: %w(index create)
end
