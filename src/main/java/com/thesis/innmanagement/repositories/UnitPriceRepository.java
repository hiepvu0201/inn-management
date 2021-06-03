package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.UnitPrice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@Repository
public interface UnitPriceRepository extends JpaRepository<UnitPrice, Long> {
    UnitPrice findByBranchLocation(String branchLocation);
}
