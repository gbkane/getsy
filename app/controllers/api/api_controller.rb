module Api
  class ApiController < ApplicationController

    def require_signed_in!
      unless signed_in?
        redirect_to new_session_url
        # render json: ["You must be signed in to proceed!"], status: :unauthorized
      end
    end
  end
end
