import com.sun.jersey.spi.container.servlet.ServletContainer;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;

/**
 * Created by macintoshhd on 6/30/14.
 */
public class TestJersey {
    public static void main(String[] args) throws Exception {
        Server webServer = new Server(8080);
        ServletHolder jerseyServletHolder = new ServletHolder(ServletContainer.class);
        jerseyServletHolder.setInitParameter("com.sun.jersey.config.property.packages", "com.jersey");
        ServletContextHandler servletContextHandler;
        servletContextHandler = new ServletContextHandler(webServer, "/", ServletContextHandler.SESSIONS);
        servletContextHandler.addServlet(jerseyServletHolder, "/jersey/*");
        webServer.start();
        webServer.join();
    }
}
