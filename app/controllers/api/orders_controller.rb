module Api
  class OrdersController < ApplicationController
    def create
      current_cart.add(params[:data][:item_id].to_i)
      render json: ['success']
    end

    def update
      @order = Order.find(params[:id])
      @order.update(order_params)
      # current_cart.add(params[:data][:item_id].to_i)
      render json: ['success']
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
