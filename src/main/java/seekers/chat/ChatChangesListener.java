package seekers.chat;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import seekers.db.Storage;

import javax.annotation.PostConstruct;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Service
public class ChatChangesListener implements Runnable {
    protected final Logger log = LoggerFactory.getLogger(ChatChangesListener.class);

    @Autowired
    private Storage storage;

    @Autowired
    private SimpMessagingTemplate webSocket;

    @PostConstruct
     public void init() {
//        new Thread(this).start();
        ExecutorService executorService = Executors.newSingleThreadExecutor();
        executorService.submit(this);
    }

    @Override
    public void run() {
        try {
            while (true) {
                ChatMessage chatMessage = storage.getQueueMessage();
                if (chatMessage != null) {
                    log.info("New message: {}", chatMessage.message);
                    webSocket.convertAndSend("/topic/messages", chatMessage);
                }
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
