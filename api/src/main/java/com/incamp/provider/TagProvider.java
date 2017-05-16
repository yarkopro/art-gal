package com.incamp.provider;

import com.incamp.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagProvider extends JpaRepository<Tag, Integer>{

    @Query("select t from Tag t")
    List<Tag> getAllTags();
}
