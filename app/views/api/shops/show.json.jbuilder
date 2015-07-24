json.extract! @shop, :id, :name, :owner_id, :description

json.items @shop.items do |item|
  json.extract! item, :id, :name, :price, :qty, :shop_id, :main_image_url, :description
end
