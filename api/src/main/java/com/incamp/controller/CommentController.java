package com.incamp.controller;

import com.incamp.entity.Comment;
import com.incamp.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class CommentController {

    @Autowired
    private CommentService service;

    @RequestMapping(value = "/comments/{artId}")
    public List<Comment> getCommentsByArts(HttpServletResponse resp,@PathVariable int artId) {
        return service.getAllByArtId(artId);
    }

}
