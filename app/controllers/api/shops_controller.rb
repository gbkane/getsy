module Api
  class ShopsController < ApiController

    before_action :require_signed_in!,
      only: [:new, :create, :edit, :update]
    before_action :require_owner, only: [:edit, :update]

    def index
      @shops = Shop.all
      render json: @shops
    end

    def new
      @shop = current_user.shops.new
      render json: @shop
    end

    def create
      @shop = current_user.shops.new(shop_params)

      if @shop.save
        render json: @shop
      else
        render json: @shop.errors.full_messages, status: :unprocessable_entity
      end
    end

    def edit

      @shop = Shop.find(params[:id])
      render json: @shop
    end

    def update
      @shop = Shop.find(params[:id])

      if @shop.update(shop_params)
        render json: @shop
      else
        render json: @shop.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @shop = Shop.find(params[:id])
      render :show
    end

    private

    def shop_params
      params.require(:shop).permit(:name, :description)
    end

    def require_owner
      @shop = Shop.find(params[:id])
      
      unless @shop.owner_id == current_user.id
        redirect_to shop_url(@shop.id)
      end
    end

  end
end
