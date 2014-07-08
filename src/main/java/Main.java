import com.objectdb.tutorial.Point;
import com.sun.jersey.spi.container.servlet.ServletContainer;
import org.atmosphere.cpr.AtmosphereHandler;
import org.atmosphere.cpr.AtmosphereServlet;
import org.atmosphere.nettosphere.Config;
import org.atmosphere.nettosphere.Nettosphere;
import org.eclipse.jetty.rewrite.handler.RedirectPatternRule;
import org.eclipse.jetty.rewrite.handler.RewriteHandler;
import org.eclipse.jetty.rewrite.handler.RewriteRegexRule;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.server.nio.NetworkTrafficSelectChannelConnector;
import org.eclipse.jetty.servlet.*;
import org.eclipse.jetty.util.ssl.SslContextFactory;
import org.eclipse.jetty.webapp.WebAppContext;
import org.tuckey.web.filters.urlrewrite.UrlRewriteFilter;

import javax.persistence.*;
import javax.servlet.DispatcherType;
import java.util.EnumSet;
import java.util.List;
import java.util.concurrent.CountDownLatch;

/**
 * Created with IntelliJ IDEA.
 * User: macintoshhd
 * Date: 4/12/14
 * Time: 2:06 PM
 * To change this template use File | Settings | File Templates.
 */
public class Main {

    public static void testObjectDB() throws InterruptedException {
        final EntityManagerFactory emf = Persistence.createEntityManagerFactory("test.odb");
        EntityManager em = emf.createEntityManager();
        final Point p = new Point(0, 0);
        em.getTransaction().begin();
        em.persist(p);
        em.getTransaction().commit();
        boolean contains = em.contains(p);
        em.close();
        final CountDownLatch l = new CountDownLatch(100);

        for (int i = 0; i < 100; i++) {
            Thread t = new Thread(new Runnable() {
                @Override
                public void run() {
                    EntityManager em = emf.createEntityManager();
                    em.getTransaction().begin();
                    //Query q = em.createQuery("UPDATE Point SET x = x + 1");
                    Query query = em.createQuery("UPDATE Point SET x = x + 1");
                    query.executeUpdate();
//                    Point p = new Point(1, 1);
//                    em.persist(p);
                    boolean contains = em.contains(p);
                    em.getTransaction().commit();
                    em.close();
                    l.countDown();
                    //To change body of implemented methods use File | Settings | File Templates.
                }
            });
            t.start();
        }
        l.await();
        em = emf.createEntityManager();
        TypedQuery<Point> myquery = em.createQuery("SELECT p from Point p", Point.class);
        List<Point> results = myquery.getResultList();
        System.out.println("X coordiate is: " + results.get(0).getX());
        em.close();
//        EntityManagerFactory emf = Persistence.createEntityManagerFactory("test.odb");
//        EntityManager em = emf.createEntityManager();
//        em.getTransaction().begin();
//        Point p = new Point(0, 0);
//        em.persist(p);
//        em.getTransaction().commit();
//        em.getTransaction().begin();
//        Query query = em.createQuery("UPDATE Point SET x = 1001 where x = 0");
//        int updateCount = query.executeUpdate();
//        em.getTransaction().commit();
//        em = emf.createEntityManager();
//        TypedQuery<Point> myquery = em.createQuery("SELECT p from Point p", Point.class);
//        List<Point> results = myquery.getResultList();
//        System.out.println("X coordiate is: " + results.get(0).getX());
//        em.close();
    }

    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);
        HandlerList handlers = new HandlerList();
        ServletContextHandler contextHandler = new ServletContextHandler(ServletContextHandler.SESSIONS);
        FilterHolder holder = contextHandler.getServletHandler().addFilterWithMapping(UrlRewriteFilter.class, "/*",
                EnumSet.of(DispatcherType.REQUEST));
        holder.setInitParameter("modRewriteConf", "true");
        holder.setInitParameter("confPath", "/WEB-INF/htaccess");
        contextHandler.setContextPath("/");
        contextHandler.setResourceBase("./client/dist");
        //contextHandler.addServlet(new ServletHolder(new MeteorChat()), "/meteor");
        contextHandler.addServlet(new ServletHolder(new DefaultServlet()), "/");
//        ServletHolder atmosphereServletHolder = new ServletHolder(AtmosphereServlet.class);
//        atmosphereServletHolder.setInitParameter("org.atmosphere.cpr.sessionSupport", "true");
//        contextHandler.addServlet(atmosphereServletHolder, "/chat/*");

        ServletHolder jerseyServletHolder = new ServletHolder(ServletContainer.class);
        jerseyServletHolder.setInitParameter("com.sun.jersey.config.property.packages", "com.seattacker.rest");
        contextHandler.addServlet(jerseyServletHolder, "/rest/*");


        ResourceHandler resource_handler = new ResourceHandler();
        resource_handler.setResourceBase("./client/dist");
        resource_handler.setDirectoriesListed(false);

        ResourceHandler final_resource_handler = new ResourceHandler();
        final_resource_handler.setResourceBase("./client/dist");
        final_resource_handler.setDirectoriesListed(false);


        RewriteHandler rewrite = new RewriteHandler();
        rewrite.setRewriteRequestURI(true);
        rewrite.setRewritePathInfo(true);
        rewrite.setOriginalPathAttribute("requestedPath");


        RewriteRegexRule reverse = new RewriteRegexRule();
        reverse.setRegex("(.*)");
        reverse.setReplacement("/index.html");
        rewrite.addRule(reverse);

        //resource_handler.setHandler(rewrite);
        rewrite.setHandler(final_resource_handler);

        //final_resource_handler.setHandler(contextHandler);

        handlers.setHandlers(new Handler[]{contextHandler});
        server.setHandler(handlers);
        server.start();
        server.join();
    }
//public static void main(String[] args) throws Exception
//{
//    String webappDirLocation = "src/mywebapp/";
//
//    Server server = new Server(8080);
//    WebAppContext root = new WebAppContext();
//
//    root.setContextPath("/");
//    root.setDescriptor(webappDirLocation + "/WEB-INF/web.xml");
//    root.setResourceBase(webappDirLocation);
//
//    root.setParentLoaderPriority(true);
//
//    server.setHandler(root);
//
//    server.start();
//    server.join();
//}
}
