class ChatsController < ApplicationController
    before_action :find_chat, only: [:update, :destroy]
    
    def index
        render json: Chat.all, status: :ok
    end

    def create
        chat = Chat.create!(chat_params)
        render json: chat, status: :ok
    end

    def destroy 
        @chat.destroy
        head :no_content
    end

    def find_chat
        @chat = Chat.find(params[:id])
    end

    def update
        @chat.update!(chat_params)
        render json: @chat, status: :ok
    end

    private

    def chat_params
        params.permit(:title, :image)
    end

end
