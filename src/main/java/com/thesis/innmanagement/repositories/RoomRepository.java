package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.models.Rooms;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "*")
public interface RoomRepository extends JpaRepository<Rooms, Long> {
}
