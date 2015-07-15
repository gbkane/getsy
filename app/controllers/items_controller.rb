class ItemsController < ApplicationController
  before_action :require_signed_in!,
    only: [:new, :create, :edit, :update]

  def index
    @items = Item.all
    render :index
  end

  def new
    @item = Item.new
  end

  def show
    @item = Item.find(params[:id])
    render :show
  end

  def create
    @item = Shop.find(params[:shop_id]).items.new(item_params)

    if @item.save
      redirect_to shop_item_url(params[:shop_id],@item.id)
    else
      render :new
    end
  end

  def edit
    @item = Item.find(params[:id])
    render :edit
  end

  def update
    @item = Item.find(params[:id])

    if @item.update(item_params)

      redirect_to shop_item_url(params[:shop_id],params[:id])
    else
      render :edit
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy()
    redirect_to shop_url(params[:shop_id])
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :qty, :description, :main_image_url)
  end

end
