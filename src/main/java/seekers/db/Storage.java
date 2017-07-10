package seekers.db;

import seekers.chat.ChatMessage;

import java.util.List;

public interface Storage {
    List<ChatMessage> getAllMessages();

    ChatMessage getQueueMessage() throws InterruptedException;

    void insertMessage(ChatMessage chatMessage);
}
