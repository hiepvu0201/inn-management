package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Floors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.stream.Stream;

@Repository
@CrossOrigin(origins = "*")
public interface FloorRepository  extends JpaRepository<Floors, Long> {
    @Query("select distinct f from Floors f inner join f.branch b on b.location = :branchLocation")
    Stream<Floors> findAllByBranchLocation(String branchLocation);
}
