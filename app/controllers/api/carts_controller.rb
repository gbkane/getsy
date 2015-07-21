module Api
  class CartsController < ApplicationController
    def index
      @carts = Cart.all
      render json: @carts
    end

    def create
      # @cart = Cart.new()
      # if @cart.save
      #   render json: @cart
      # else
      #   render json: "Oops, Your cart tipped over!"
      # end
      current_cart.add(params[:data][:item_id].to_i)
      render json: ['success']
    end

    def show
      # @cart = Cart.find(params[:id]);
      @cart = current_cart
      render :show
    end

    def destroy
    end

  end
end
