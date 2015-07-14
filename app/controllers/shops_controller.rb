class ShopsController < ApplicationController
  before_action :require_signed_in!,
    only: [:new, :create, :edit, :update]

  def index
    @shops = Shop.all
  end

  def new
    @shop = Shop.new
  end

  def create
    @shop = Shop.new(shop_params)
    @shop.owner_id = current_user.id
    if @shop.save
      render :show
    else
      flash.now[:errors] = @shop.errors.full_messages
      render :new
    end
  end

  def edit
    @shop = Shop.find(params[:id])
    render :edit
  end

  def update
    @shop = Shop.find(params[:id])
    if @shop.update(shop_params)
      redirect_to :show
    else
      render :edit
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

end
