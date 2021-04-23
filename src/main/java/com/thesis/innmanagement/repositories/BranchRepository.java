package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.models.Branches;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@Repository
public interface BranchRepository extends JpaRepository<Branches, Long> {
}
