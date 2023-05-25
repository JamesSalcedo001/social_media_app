class ChatSerializer < ActiveModel::Serializer
  attributes :title, :image, :id
  has_many :messages
  has_many :profile_users, through: :messages
end
