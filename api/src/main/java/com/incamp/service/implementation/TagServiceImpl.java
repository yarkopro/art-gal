package com.incamp.service.implementation;

import com.incamp.entity.Tag;
import com.incamp.provider.TagProvider;
import com.incamp.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagServiceImpl implements TagService {

    @Autowired
    private TagProvider tagProvider;

    @Override
    public List<Tag> getAllTags() {
        return tagProvider.getAllTags();
    }
}
