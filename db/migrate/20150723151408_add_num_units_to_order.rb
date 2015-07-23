class AddNumUnitsToOrder < ActiveRecord::Migration
  def change
    add_column :orders, :num_units, :integer
  end
end
