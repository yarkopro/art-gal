package com.incamp.service.implementation;

import com.incamp.entity.Art;
import com.incamp.provider.ArtRepository;
import com.incamp.service.ArtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ArtServiceImpl implements ArtService {

    @Autowired
    private ArtRepository artRepository;

    @Override
    public List<Art> findForHomePage() {
        return artRepository.findAll();
    }

    @Override
    public Art findArtById(int artId) {
        return artRepository.findOne(artId);
    }

    @Override
    public List<Art> findByOwner(String search) {
        return artRepository.findByOwner(search);
    }

    @Override
    public List<Art> findByName(String artName) {
        return artRepository.findByName(artName);
    }

    @Override
    public List<Art> findByTag(String tagName) {
        return artRepository.findByTag(tagName);
    }

    @Override
    public void addView(int artId) {
        this.artRepository.addView(artId);
    }

    @Override
    public int addLike(int artId) {
        artRepository.addLike(artId);
        return artRepository.getLikesQuantityByArtId(artId);
    }

    @Override
    public void addArt(Art art) {
        artRepository.save(art);
    }
}

