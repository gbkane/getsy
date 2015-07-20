module Api
  class CartsController < ApplicationController
    def index
      @carts = Cart.all
      render json: @carts
    end

    def create
      @cart = current_user.carts.new()
      if @cart.save
        render json: @cart
      end
    end

    def show
      @cart = Cart.find(params[:id]);
      render json: @cart
    end

    def destroy
    end

  end
end
