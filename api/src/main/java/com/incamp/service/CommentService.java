package com.incamp.service;

import com.incamp.entity.Comment;

import java.util.List;

public interface CommentService {

    List<Comment> getAllByArtId(int artId);

}
