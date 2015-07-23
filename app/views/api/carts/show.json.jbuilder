json.extract! @cart, :id, :user_id, :total

json.orders @cart.orders do |order|
  json.extract! order, :id, :cart_id, :item_id, :num_units

    json.extract! order.item, :name, :price, :qty, :main_image_url

end
