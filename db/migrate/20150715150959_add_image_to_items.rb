class AddImageToItems < ActiveRecord::Migration
  def change
    add_column :items, :main_image_url, :string
  end
end
