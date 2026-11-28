class MessagesController < ApplicationController
  def create
    @chat = Chat.find(params[:chat_id])
    @message = @chat.messages.create(params.expect(message: [ :content ]).merge(role: "user"))

    llm = RubyLLM.chat.with_instructions(File.read(Rails.root.join("app/prompts/interview.md")))
    history = @chat.messages.where.not(id: @message.id).order(:created_at).drop_while { |m| m.role == "assistant" }
    history.each do |old_message|
      llm.add_message(role: old_message.role.to_sym, content: old_message.content)
    end

    response = llm.ask(@message.content)
    @chat.messages.create(role: "assistant", content: response.content)
    redirect_to chat_path(@chat)
  rescue RubyLLM::Error => e
    redirect_to chat_path(@chat), alert: "AI error: #{e.message}"
  end
end
