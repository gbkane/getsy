json.extract! @shop, :id, :name

json.items @shop.items do |item|
  json.extract! item, :id, :name, :price, :qty
end
