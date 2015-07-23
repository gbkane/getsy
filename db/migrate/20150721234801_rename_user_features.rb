class RenameUserFeatures < ActiveRecord::Migration
  def change
    remove_column :users, :fname, :string
    remove_column :users, :lname, :string
    add_column    :users, :first_name, :string
    add_column    :users, :last_name, :string
  end
end
