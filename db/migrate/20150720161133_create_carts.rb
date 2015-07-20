class CreateCarts < ActiveRecord::Migration
  def change
    create_table :carts do |t|
      t.integer :user_id, null: false
      t.float :total, null: false, default: 0
    end
    add_index(:carts, :user_id)
  end
end
