class Cart < ActiveRecord::Base
  has_many :orders
  belongs_to :user
  has_many :items, through: :orders
end
