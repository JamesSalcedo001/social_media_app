class ProfileUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :profile_users do |t|
      t.string :username
      t.string :password_digest
      t.string :avatar
      t.boolean :admin
    end
  end
end
