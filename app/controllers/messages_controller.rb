class MessagesController < ApplicationController
  def create
    @chat = Chat.find(params[:chat_id])
    @chat.messages.create(params.expect(message: [ :content ]).merge(role: "user"))
    redirect_to chat_path(@chat)
  end
end
