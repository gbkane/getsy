Rails.application.routes.draw do
  root to: 'static_pages#root'



  namespace :api, defaults: { format: :json} do
    resources :users, only: [:index, :create, :edit, :destroy, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :shops do
      resources :items
    end
    resources :carts, only: [:show, :edit]
    resources :orders, only: [:create, :edit, :destroy]
  end

  get "/auth/:provider/callback", to: "api/sessions#omniauth"
end
