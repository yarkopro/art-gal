package com.incamp.controller;


import com.incamp.entity.Art;
import com.incamp.service.ArtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/arts")
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

    @RequestMapping(path = "/findById", method = RequestMethod.GET)
    public Art findArtById(@RequestParam("artId") int artId) {
        return artService.findArtById(artId);
    }

    @RequestMapping(path = "/findByTagName", method = RequestMethod.GET)
    public List<Art> findByTag(@RequestParam("tagName") String tagName) {
        return artService.findByTag(tagName);
    }

    @RequestMapping(path = "/addLike", method = RequestMethod.GET)
    public int addLikeForArt(@RequestParam("artId") int artId) {return artService.addLike(artId);}

    @RequestMapping(path = "/addView", method = RequestMethod.GET)
    public int addViewForArt(@RequestParam("artId") int artId) {return artService.addView(artId);}

    @RequestMapping(path = "/add", method = RequestMethod.POST)
    public void addArt(@RequestBody Art art){
        artService.addArt(art);
    }
}