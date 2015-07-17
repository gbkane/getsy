# json.shops @shops do |shop|
#   json.extract! shop, :id, :name, :description
json.array! @shops do |shop|
  json.extract! shop, :id, :name, :description

  json.items shop.items do |item|
    json.extract! item, :id, :name, :price, :main_image_url
  end
end
