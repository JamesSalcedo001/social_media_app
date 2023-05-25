class MessageSerializer < ActiveModel::Serializer
  attributes :body, :profile_user_id, :chat_id, :sent_to
  has_one :profile_user
  has_one :chat
end
