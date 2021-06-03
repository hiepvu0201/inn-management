package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Branches;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.stream.Stream;

@CrossOrigin(origins = "*")
@Repository
public interface BranchRepository extends JpaRepository<Branches, Long> {
    Stream<Branches> findAllByUserName(String userName);

    Branches findByLocation(String branchLocation);
}
