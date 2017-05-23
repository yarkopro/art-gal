package com.incamp.controller;

import com.incamp.entity.Comment;
import com.incamp.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @RequestMapping(value = "/art/{artId}")
    public List<Comment> getCommentsByArts(@PathVariable int artId) {
        return commentService.getAllByArtId(artId);
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public void addCommentForArt(@RequestParam("artId") int artId, @RequestBody Comment comment) {
        commentService.addCommentForArt(artId, comment);
    }
}
