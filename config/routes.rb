Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :edit]
  resource :session, only: [:new, :create, :destroy]
  resources :shops do
    resources :items 
  end

end
