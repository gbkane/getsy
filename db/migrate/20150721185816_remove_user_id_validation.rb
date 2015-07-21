class RemoveUserIdValidation < ActiveRecord::Migration
  def change
    change_column_null :carts, :user_id, true
  end
end
