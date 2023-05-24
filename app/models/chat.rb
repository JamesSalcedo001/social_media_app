class Chat < ApplicationRecord
    has_many :messages
    has_many :profile_users, through: :messages
end
