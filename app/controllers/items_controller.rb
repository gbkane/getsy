class ItemsController < ApplicationController
  def index
    @items = Item.all
    render :index
  end

  def new
  end

  def show
    @item = Item.find(params[:item][:id])
  end

  def create
    @item = Shop.find(params[:id]).items.new(item_params)
    if @item.save
      redirect_to shop_url(params[:id])
    else
      render :new
    end
  end

  def edit
    @item = Item.find(params[:item][:id])
  end

  def update
    @item = Item.find(params[:item][:id])
    if @item.update(item_params)
      redirect_to shop_url(params[:id])
    else
      render :edit
    end
  end

  def destroy
    @item = Item.find(params[:item][:id])
    @item.destroy()
    redirect_to shop_url(params[:id])
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :qty, :description)
  end

end
