package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.Facilities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@Repository
public interface FacilityRepository extends JpaRepository<Facilities, Long> {
}
