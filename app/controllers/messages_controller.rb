class MessagesController < ApplicationController
    skip_before_action :authenticate_user
    
    def create
        message = Message.create!(message_params)
        render json: message, status: :ok
    end

    def index
        messages = Message.all
        render json: messages, status: :ok
    end

    private 

    def message_params
        params.permit(:sent_to, :body, :profile_user_id, :chat_id)
    end
end
