Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :edit]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json} do
    resources :shops do
      resources :items, except: :index
    end

    resources :items, only: :index, defaults: {format: :html}
  end
end
