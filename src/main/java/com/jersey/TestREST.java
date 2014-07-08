package com.jersey;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

/**
 * Created by macintoshhd on 6/30/14.
 */
@Path("/hello/{username}")
public class TestREST {
    @GET
    public String doGet(@PathParam("username") String name) {
        return "123" + name;
    }
}
