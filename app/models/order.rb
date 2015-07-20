class Orders < ActiveRecord::Base
  belongs_to :item
  belongs_to :cart
end
