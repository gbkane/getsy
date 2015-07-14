Rails.application.routes.draw do
  resources :users, only: [:new, :create, :edit]
  resource :session, only: [:new, :create, :destroy]
end
