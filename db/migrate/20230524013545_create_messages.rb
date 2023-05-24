class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :body
      t.string :image
      t.string :to
      t.belongs_to :profile_users
      t.belongs_to :chats
      t.timestamps
    end
  end
end
