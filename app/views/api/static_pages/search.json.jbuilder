# json.total_count @search_results.total_count

json.results do
  json.array! @search_results do |search_result|
    if search_result.searchable_type == "Item"
      json.partial! "api/items/item", item: search_result.searchable
      json.id "item-#{search_result.searchable.id}"
      json._type "Item"
      json.item_id "#{search_result.searchable.id}"
    else
      json.partial! "api/shops/shop", shop: search_result.searchable
      json._type "Shop"
      json.id "shop-#{search_result.searchable.id}"
      json.shop_id "#{search_result.searchable.id}"
    end
  end
end
