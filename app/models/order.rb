# == Schema Information
#
# Table name: orders
#
#  id        :integer          not null, primary key
#  cart_id   :integer          not null
#  item_id   :integer          not null
#  total     :float            default(0.0), not null
#  num_units :integer          default(1)
#

class Order < ActiveRecord::Base
  belongs_to :item
  belongs_to :cart
  has_many :shops, through: :item
end
