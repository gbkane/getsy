class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :sex
      t.string :street
      t.string :state
      t.string :zip


      t.timestamps null: false
    end
  end
end
