package com.incamp.controller;

import com.incamp.entity.Tag;
import com.incamp.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/tags")
public class TagController {

    @Autowired
    private TagService tagServiceImpl;

    @RequestMapping(method = RequestMethod.GET)
    public List<Tag> getAllTags() {
        return tagServiceImpl.getAllTags();
    }
}
