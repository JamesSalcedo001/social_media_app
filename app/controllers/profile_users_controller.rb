class ProfileUsersController < ApplicationController

    def show
        user = ProfileUser.find_by(id: params[:id])
        render json: user, status: :ok
    end

    def create
        user = ProfileUser.create!(profile_user_params)
        session[:user_id] = user.id
        render json: user, status: :ok
    end

    private

    def profile_user_params
        params.permit(:username, :password, :avatar)
    end
end
