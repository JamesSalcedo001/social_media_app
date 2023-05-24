class MessageSerializer < ActiveModel::Serializer
  attributes :body, :profile_user, :image, :chat
  has_one :profile_user
  has_one :chat

  # def chat
  #   {title:self.chat.title}
  # end
end
