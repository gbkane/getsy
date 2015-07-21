class Cart < ActiveRecord::Base
  has_many :orders
  belongs_to :user
  has_many :items, through: :orders

  def add(id)
    order = self.orders.find_by({item_id: id})
    if order
      order.total += 1
      order.save!
    else
      orders.create!({ item_id: id})
    end
  end

  def total
    num = 0
    self.orders.map { |order| num += order.total }
    num
  end
end
