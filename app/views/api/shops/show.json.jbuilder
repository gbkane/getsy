json.extract! @shop, :id, :name

json.items @shop.items do |item|
  json.extract! item, :id, :name, :description, :price, :qty,  :created_at, :updated_at
end
