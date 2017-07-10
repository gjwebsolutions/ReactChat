package seekers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class BootChatApplication {

    public static void main(String[] args) {
        SpringApplication.run(BootChatApplication.class, args);
    }
}
