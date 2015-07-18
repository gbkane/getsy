Rails.application.routes.draw do
  root to: 'static_pages#root'



  namespace :api, defaults: { format: :json} do
    resources :users, only: [:index, :create, :edit, :destroy]
    resource :session, only: [:show, :create, :destroy]
    resources :shops do
      resources :items
    end
  end
end
