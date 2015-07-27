
json.orders @orders do |order|
  json.extract! order, :id, :cart_id, :item_id, :num_units

    json.extract! order.item, :name, :price, :qty, :main_image_url

end
