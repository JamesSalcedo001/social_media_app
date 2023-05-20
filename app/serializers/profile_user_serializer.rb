class ProfileUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :avatar, :admin
end
