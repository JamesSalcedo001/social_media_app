class ProfileUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar
  has_many :messages
  has_many :chats, through: :messages
end
