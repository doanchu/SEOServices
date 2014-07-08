package com.seattacker.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

/**
 * Created by TienNguyen on 7/3/2014.
 */
@Path("/project/{id}")
public class ProjectResource {

    @GET
    @Produces("application/json")
    public String doGet(@PathParam("id") String id) {
        return "{\n" +
                "    \"id\": \"1\",\n" +
                "    \"name\": \"Social Network Test 1\",\n" +
                "    \"isRunning\": \"false\",\n" +
                "    \"title\": \"This is a test title\",\n" +
                "    \"tags\": \"social\",    \n" +
                "    \"content\": \"This is the test content\",\n" +
                "    \"module\": \"SN\"    \n" +
                "  }";
    }
}
