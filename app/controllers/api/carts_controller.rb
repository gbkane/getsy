module Api
  class CartsController < ApplicationController
    def index
      # @carts = Cart.all
      @cart = current_cart || Cart.new
      render json: @cart
    end

    def create
      @cart = Cart.new
      if @cart.save
        render json: @cart
      else
        render json: @cart.errors.full_messages
      end
    end

    def update

      @cart = Cart.find(params[:id])
      if @cart.save
        render json: @cart
      else
        render json: @cart.errors.full_messages
      end
    end

    def show

      @cart = current_cart
      render :show
    end

    def destroy
    end

  end
end
