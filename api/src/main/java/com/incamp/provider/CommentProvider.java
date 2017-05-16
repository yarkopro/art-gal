package com.incamp.provider;

import com.incamp.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentProvider extends JpaRepository<Comment,Integer> {

    @Query("Select c from Comment c join fetch c.art a where a.id= ?1")
    List<Comment> findArtId(int artId);
}
