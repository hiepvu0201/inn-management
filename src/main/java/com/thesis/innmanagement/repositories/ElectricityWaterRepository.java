package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.ElectricityWater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@Repository
public interface ElectricityWaterRepository extends JpaRepository<ElectricityWater, Long> {
}
