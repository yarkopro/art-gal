package com.incamp.service;

import com.incamp.entity.Art;

import java.util.List;

public interface ArtService {

    List<Art> findForHomePage();

    Art findArtById(int artId);

    List<Art> findByOwner(String search);

    List<Art> findByName(String artName);

    List<Art> findByTag(String tagName);

    void addView(int artId);

    void addLike(int artId);
}
