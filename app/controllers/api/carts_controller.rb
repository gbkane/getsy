module Api
  class CartsController < ApplicationController
    def create
      @cart = current_user.carts.new()
      if @cart.save
        render json: @cart
      end
    end

    def show
    end

    def destroy
    end

  end
end
