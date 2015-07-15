class StaticPagesController < ApplicationController

  def root
    @shops = Shop.all
  end
end
