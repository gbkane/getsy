class ItemsController < ApplicationController
  def index
    @items = Item.all
    render :index
  end

  def new
  end

  def show
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :qty, :description)
  end

end
