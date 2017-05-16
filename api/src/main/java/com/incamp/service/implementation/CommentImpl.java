package com.incamp.service.implementation;

import com.incamp.entity.Comment;
import com.incamp.provider.CommentProvider;
import com.incamp.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentImpl implements CommentService {

    @Autowired
    private CommentProvider provider;

    @Override
    public List<Comment> getAllByArtId(int artId) {
        List<Comment> comments = provider.findArtId(artId);
        comments.stream().forEach(comment->comment.setArt(null));
        return comments;
    }

}
