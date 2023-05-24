class Message < ApplicationRecord
    belongs_to :profile_user
    belongs_to :chat
end
