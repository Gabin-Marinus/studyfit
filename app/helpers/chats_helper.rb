module ChatsHelper
  # The coach is told to write plain text, but models slip into Markdown now and
  # then (and older replies predate that rule). Strip the common marks so they
  # never show up as stray asterisks or hashes.
  def plain_coach_text(content)
    content.to_s
      .gsub(/\*\*(.+?)\*\*/m, '\1')
      .gsub(/__(.+?)__/m, '\1')
      .gsub(/(?<![\w*])\*(?!\s)([^*\n]+?)(?<!\s)\*(?![\w*])/, '\1')
      .gsub(/^\s{0,3}#+\s+/, "")
      .gsub(/^(\s*)[*-]\s+/, '\1• ')
  end
end
