class ShopsController < ApplicationController
  def index
    @shops = Shop.all
  end

  def new
  end

  def create

  end

  def edit
  end

  def update
  end

  private

  def shop_params
    params.require(:shop).permit(:name, :description)
  end

end
