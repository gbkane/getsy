class AddProviderColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :provider, :string;
    add_column :users, :uid, :string
    add_index "users", ["email"], name: "index_users_on_email", unique: true
    add_index "users", ["provider", "uid"], name: "index_users_on_provider_and_uid", unique: true
    add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true
  end
end
