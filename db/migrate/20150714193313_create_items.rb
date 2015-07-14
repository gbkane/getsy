class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.text :description
      t.integer :qty, null: false, default: 1
      t.float :price, null: false
      t.integer :shop_id, null: false
      t.timestamps null: false
    end

    add_index(:items, :shop_id)
  end
end
