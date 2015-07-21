class Order < ActiveRecord::Base
  belongs_to :item
  belongs_to :cart
  has_many :shops, through: :item
end
