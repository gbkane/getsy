# json.total_count @search_results.total_count

json.results do
  json.array! @search_results do |search_result|
    if search_result.searchable_type == "Item"
      json.partial! "api/items/item", item: search_result.searchable
      json._type "Item"
    else
      json.partial! "api/shops/shop", shop: search_result.searchable
      json._type "Shop"
    end
  end
end
