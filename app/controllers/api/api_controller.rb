module Api
  class ApiController < ApplicationController

    def require_signed_in!
      unless signed_in?
        redirect_to new_session_url
        
      end
    end
  end
end
