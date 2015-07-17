json.shops @shops do |shop|
  json.extract! shop, :id, :name, :description
end
