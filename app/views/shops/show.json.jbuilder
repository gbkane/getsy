json.extract! @shop

json.items @shop.items do |item|
  json.extract! item
end
