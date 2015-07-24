json.extract! shop, :id, :name, :description

json.items shop.items, partial: "api/items/item", as: :item
