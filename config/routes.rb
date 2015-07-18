Rails.application.routes.draw do
  root to: 'static_pages#root'



  namespace :api, defaults: { format: :json} do
    resources :users, only: [:index, :create, :edit, :destroy, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :shops do
      resources :items
    end
  end

  get "/auth/:provider/callback", to: "api/sessions#omniauth"
end
