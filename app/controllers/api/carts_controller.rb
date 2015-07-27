module Api
  class CartsController < ApplicationController
    def index
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
      if @cart.update(cart_params)
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

    private

    def cart_params
      params.require(:cart).permit(:total)
    end
  end
end
