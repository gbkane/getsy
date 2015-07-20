class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :cart_id, null: false
      t.integer :item_id, null: false
      t.float :total, null: false, default: 0
    end

    add_index(:orders, :cart_id)
    add_index(:orders, :item_id)
  end
end
