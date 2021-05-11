package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Rooms;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "*")
public interface RoomRepository extends JpaRepository<Rooms, Long> {
    @Query("select distinct r from Rooms r inner join Users u on u.username = :userName")
    List<Rooms> findAllByUserName(String userName);
}
