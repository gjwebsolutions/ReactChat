package seekers.db;

import org.springframework.stereotype.Component;
import seekers.chat.ChatMessage;

import java.util.ArrayList;
import java.util.concurrent.ArrayBlockingQueue;

@Component("storage")
public class InMemStorage implements Storage {
    private String host;
    private ArrayBlockingQueue<ChatMessage> queue;
    private ArrayList<ChatMessage> allMessages;

    @Override
    public ArrayList<ChatMessage> getAllMessages(){
        return allMessages;
    }

    @Override
    public ChatMessage getQueueMessage() throws InterruptedException{
        return queue.take();
    }

    @Override
    public void insertMessage(ChatMessage chatMessage){
        queue.add(chatMessage);
        allMessages.add(chatMessage);
    }

    public InMemStorage(){
        queue = new ArrayBlockingQueue<>(10);
        allMessages = new ArrayList<>(100);
    }

    public InMemStorage(String host) {
        this.host = host;
    }
}
