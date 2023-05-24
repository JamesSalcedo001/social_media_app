class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :body
      t.string :to
      t.string :image
      t.belongs_to :profile_user, null: false, foreign_key: true
      t.belongs_to :chat, null: false, foreign_key: true
      t.timestamps
    end
  end
end
