class ChatsController < ApplicationController
  def create
    @chat = Chat.create(title: "My study interview")
    @chat.messages.create(role: "assistant", content: "Hi, I'm StudyFit! I'll ask you 10 quick questions so I can build a study plan that fits you. You can skip any of them. First one: what are you studying for, and when is it?")
    redirect_to chat_path(@chat)
  end

  def show
    @chat = Chat.find(params[:id])
    @message = Message.new
  end
end
