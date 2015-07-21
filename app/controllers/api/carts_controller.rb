module Api
  class CartsController < ApplicationController
    def index
      @carts = Cart.all
      render json: @carts
    end

    def create
      @cart = Cart.new()
      if @cart.save
        render json: @cart
      else
        render json: "Oops, Your cart tipped over!"
      end
    end

    def show
      @cart = Cart.find(params[:id]);
      render :show
    end

    def destroy
    end

  end
end
