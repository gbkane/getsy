module Api
  class OrdersController < ApplicationController
    def create
      current_cart.add(params[:data][:item_id].to_i)
      render json: ['success']
    end

    def update
      current_cart.add(params[:data][:item_id].to_i)
      render json: ['success']
    end

    def destroy
      @order = Order.find(params[:id])
      @order.destroy
      render json: ['success']
    end
  end
end
