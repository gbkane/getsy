module Api
  class ItemsController < ApiController

    before_action :require_signed_in!,
      only: [:new, :create, :edit, :update]
    before_action :require_owner, only: [:edit, :update]

    def index
      @items = Item.all
      render :index
    end

    def new
      @item = Shop.find(params[:shop_id]).items.new()
      render json: @item
    end

    def show
      @item = Item.find(params[:id])
      render json: @item
    end

    def create

      @item = Shop.find(params[:shop_id]).items.new(item_params)

      if @item.save
        render json: @item
      else
        render json: @item.errors.full_messages, status: :unprocessable_entity
      end
    end

    def edit
      @item = Item.find(params[:id])
      render json: @item
    end

    def update
      @item = Item.find(params[:id])

      if @item.update(item_params)
        render json: @item
      else
        render json: @item.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @item = Item.find(params[:id])
      @item.destroy()
      redirect_to shop_url(params[:shop_id])
    end

    private

    def require_owner
      @item = Item.find(params[:id])
      unless @item.shop.owner_id == current_user.id
        redirect_to shop_item_url(@item.shop_id, @item.id)
      end
    end

    def item_params
      params.require(:item).permit(:name, :price, :qty, :description, :main_image_url)
    end
  end
end
