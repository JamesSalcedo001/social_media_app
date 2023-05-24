class ProfileUser < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    has_many :messages
    has_many :chats, through: :messages
    has_secure_password
end
