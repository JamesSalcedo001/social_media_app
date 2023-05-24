Rails.application.routes.draw do
  
  resources :messages
  resources :chats, only: [:index, :create, :destroy, :update]
  resources :profile_users, only: [:show, :create]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authenticate_user", to: "profile_users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
