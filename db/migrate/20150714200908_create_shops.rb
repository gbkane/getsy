class CreateShops < ActiveRecord::Migration
  def change
    create_table :shops do |t|
      t.string :name, null: false
      t.text :description
      t.integer :owner_id, null: false
      t.float :rating

      t.timestamps null: false
    end
    add_index(:shops, :owner_id)
  end
end
