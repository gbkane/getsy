module Api
  class OrdersController < ApplicationController

    def index
      @orders = current_cart.orders
      render json: @orders
    end

    def create
      current_cart.add(params[:data][:item_id].to_i)
      render json: ['success']
    end

    def update
      current_cart.add(params[:data][:item_id].to_i)
      render json: ['success']
    end

    def show
      @order = Order.find(params[:id])
      render json: @order
    end

    def destroy
      @order = Order.find(params[:id])
      @order.destroy
      render json: ['success']
    end

    private
    def order_params
      params.require(:order).permit(:num_units)
    end

  end
end
