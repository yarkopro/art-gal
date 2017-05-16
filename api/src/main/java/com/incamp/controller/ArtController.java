package com.incamp.controller;


import com.incamp.entity.Art;
import com.incamp.service.ArtService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@CrossOrigin
public class ArtController {

    @Autowired
    private ArtService artService;

    @RequestMapping(value = "/")
    public List<Art> findForHomePage(HttpServletResponse resp) {
        return artService.findForHomePage();
    }

    @RequestMapping(value = "/findByOwner", method = RequestMethod.GET)
    public List<Art> findByOwner(HttpServletResponse resp, @RequestParam String search) {
        return artService.findByOwner(search);
    }

    @RequestMapping(path = "/findByName", method = RequestMethod.GET)
    public List<Art> findArtByName(@RequestParam("artName") String artName) {
        return artService.findByName(artName);
    }

    @RequestMapping(path = "/findByTagName", method = RequestMethod.GET)
    public List<Art> findByTag(@RequestParam("tagName") String tagName) {
        return artService.findByTag(tagName);
    }
}