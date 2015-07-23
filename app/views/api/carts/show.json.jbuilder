json.extract! @cart, :id, :user_id

json.orders @cart.orders do |order|
  json.extract! order, :id, :total, :cart_id, :item_id


    json.extract! order.item, :name, :price, :qty, :main_image_url

end
