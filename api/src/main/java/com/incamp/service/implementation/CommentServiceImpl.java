package com.incamp.service.implementation;

import com.incamp.entity.Comment;
import com.incamp.provider.ArtRepository;
import com.incamp.provider.CommentRepository;
import com.incamp.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private ArtRepository artRepository;

    @Override
    public List<Comment> getAllByArtId(int artId) {
        List<Comment> comments = commentRepository.findArtId(artId);
        comments.stream().forEach(comment->comment.setArt(null));
        return comments;
    }

    @Override
    public void addCommentForArt(int artId, Comment comment) {
        comment.setArt(artRepository.getOne(artId));
        commentRepository.save(comment);
    }
}
