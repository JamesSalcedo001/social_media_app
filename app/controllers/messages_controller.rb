class MessagesController < ApplicationController
    skip_before_action :authenticate_user

    def create
        message = Message.create!(message_params)
        render json: message, status: :ok
    end

    def index
        message = Message.all
        render json: message
    end

    private

    def message_params
        params.permit(:body, :image, :to)
    end
end
