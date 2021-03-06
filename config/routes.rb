Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json} do
    get "/search", to: "static_pages#search"
    resources :users, only: [:index, :create, :edit, :destroy, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :shops do
      resources :items
    end
    resources :carts, only: [:index, :create, :show, :update]
    resources :orders, only: [:create, :edit, :destroy, :index, :show]

  end


  get "/auth/:provider/callback", to: "api/sessions#omniauth"
end
