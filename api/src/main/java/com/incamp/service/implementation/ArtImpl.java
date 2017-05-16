package com.incamp.service.implementation;

import com.incamp.entity.Art;
import com.incamp.provider.ArtProvider;
import com.incamp.service.ArtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtImpl implements ArtService {

    @Autowired
    private ArtProvider artProvider ;

    @Override
    public List<Art> findForHomePage() {
        return artProvider.findForHomePage();
    }

    @Override
    public List<Art> findByOwner(String search) {
        return artProvider.findByOwner(search);
    }

    @Override
    public List<Art> findByName(String artName) {
        return artProvider.findByName(artName);
    }

    @Override
    public List<Art> findByTag(String tagName) {
        return artProvider.findByTag(tagName);
    }
}

