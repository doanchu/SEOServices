package org.atmosphere.samples.chat;

import org.atmosphere.config.service.WebSocketHandlerService;
import org.atmosphere.cpr.AtmosphereResourceEvent;
import org.atmosphere.util.SimpleBroadcaster;
import org.atmosphere.websocket.WebSocket;
import org.atmosphere.websocket.WebSocketEventListenerAdapter;
import org.atmosphere.websocket.WebSocketHandler;
import org.atmosphere.websocket.WebSocketStreamingHandlerAdapter;
import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.Reader;
import java.util.Date;
/**
 * Simple {@link WebSocketHandler} that implement the logic to build a Chat application.
 *
 * @author Jeanfrancois Arcand
 */
@WebSocketHandlerService(path = "/chat", broadcaster = SimpleBroadcaster.class,
        atmosphereConfig = {"org.atmosphere.websocket.WebSocketProtocol=org.atmosphere.websocket.protocol.StreamingHttpProtocol"})
public class WebSocketChat extends WebSocketStreamingHandlerAdapter {

    private final Logger logger = LoggerFactory.getLogger(WebSocketChat.class);
    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public void onOpen(WebSocket webSocket) throws IOException {
//        webSocket.resource().addEventListener(new WebSocketEventListenerAdapter() {
//            @Override
//            public void onDisconnect(AtmosphereResourceEvent event) {
//                if (event.isCancelled()) {
//                    logger.info("Browser {} unexpectedly disconnected", event.getResource().uuid());
//                } else if (event.isClosedByClient()) {
//                    logger.info("Browser {} closed the connection", event.getResource().uuid());
//                }
//            }
//        });
    }

    public void onTextStream(WebSocket webSocket, Reader reader) throws IOException {
        Data author = mapper.readValue(new BufferedReader(reader).readLine(), Data.class);
        webSocket.broadcast(mapper.writeValueAsString(author));
    }

    public final static class Data {

        private String message;
        private String author;
        private long time;

        public Data() {
            this("", "");
        }

        public Data(String author, String message) {
            this.author = author;
            this.message = message;
            this.time = new Date().getTime();
        }

        public String getMessage() {
            return message;
        }

        public String getAuthor() {
            return author;
        }

        public void setAuthor(String author) {
            this.author = author;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public long getTime() {
            return time;
        }

        public void setTime(long time) {
            this.time = time;
        }

    }
}