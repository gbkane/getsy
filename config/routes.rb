Rails.application.routes.draw do
  root to: 'static_pages#root'



  namespace :api, defaults: { format: :json} do
    resources :users, only: [:index, :create, :edit, :destroy, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :shops do
      resources :items
    end
    resources :carts, only: [:create, :show, :edit, :index] do
      resources :orders, only: [:create, :edit, :destroy]
    end
  end

  get "/auth/:provider/callback", to: "api/sessions#omniauth"
end
