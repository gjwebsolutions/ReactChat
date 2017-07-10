package seekers.chat;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import seekers.db.Storage;

import java.time.OffsetDateTime;
import java.util.List;

@RestController
@RequestMapping("/chat")
public class ChatController {

    protected final Logger log = LoggerFactory.getLogger(ChatController.class);

    @Autowired
    private Storage storage;

    @RequestMapping(method = RequestMethod.POST)
    public ChatMessage postMessage(@RequestBody ChatMessage chatMessage) {
        chatMessage.setTime(OffsetDateTime.now());
        log.info("Insert {}", chatMessage);
        storage.insertMessage(chatMessage);
        return chatMessage;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<ChatMessage> getMessages() {
        return storage.getAllMessages();
    }
}
