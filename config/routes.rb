Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :edit]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json} do
    resources :shops do
      resources :items
    end
  end
end
