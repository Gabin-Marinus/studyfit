class MessagesController < ApplicationController
  INSTRUCTIONS = "You are StudyFit, a friendly study coach. Keep your replies short and clear."

  def create
    @chat = Chat.find(params[:chat_id])
    @message = @chat.messages.create(params.expect(message: [ :content ]).merge(role: "user"))

    llm = RubyLLM.chat.with_instructions(INSTRUCTIONS)
    @chat.messages.where.not(id: @message.id).order(:created_at).each do |old_message|
      llm.add_message(role: old_message.role.to_sym, content: old_message.content)
    end

    response = llm.ask(@message.content)
    @chat.messages.create(role: "assistant", content: response.content)
    redirect_to chat_path(@chat)
  rescue RubyLLM::Error
    redirect_to chat_path(@chat), alert: "StudyFit is busy right now. Please send your message again in a minute."
  end
end
