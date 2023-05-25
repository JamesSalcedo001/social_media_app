class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :body
      t.belongs_to :profile_user, null: false, foreign_key: true
      t.belongs_to :chat, null: false, foreign_key: true
      t.string :sent_to
      t.timestamps
    end
  end
end
