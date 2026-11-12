class ChatsController < ApplicationController
  def create
    @chat = Chat.create(title: "My study interview")
    redirect_to chat_path(@chat)
  end

  def show
    @chat = Chat.find(params[:id])
    @message = Message.new
  end
end
