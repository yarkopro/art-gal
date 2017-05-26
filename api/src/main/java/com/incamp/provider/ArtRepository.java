package com.incamp.provider;

import com.incamp.entity.Art;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtRepository extends JpaRepository<Art, Integer> {

    @Query("Select c from Art c join fetch c.owner u  where u.userName = ?1 or u.lastName = ?1 or u.firstName = ?1 ")
    List<Art> findByOwner(String search);

    List<Art> findByName(String artName);

    @Modifying
    @Query("update Art art set art.views = art.views + 1 where art.id = ?1")
    void addView(int artId);

    @Modifying
    @Query("update Art art set art.likes = art.likes + 1 where art.id = ?1")
    void addLike(int artId);

    @Query("select art.likes from Art art where art.id = ?1")
    int getLikesQuantityByArtId(int artId);

    @Query("select art.views from Art art where art.id = ?1")
    int getViewsQuantityByArtId(int artId);

    @Query("select a from Art a join fetch a.tags t1 where (select t2 from Tag t2 where t2.name = ?1) member of t1")
    List<Art> findByTag(String tagName);
}
