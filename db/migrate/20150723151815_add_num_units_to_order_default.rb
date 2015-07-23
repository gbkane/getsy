class AddNumUnitsToOrderDefault < ActiveRecord::Migration
  def change
    change_column_default :orders, :num_units, 1
  end
end
