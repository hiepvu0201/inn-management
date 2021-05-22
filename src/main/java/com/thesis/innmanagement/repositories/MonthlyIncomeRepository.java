package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.MonthlyIncomes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.stream.Stream;

@Repository
@CrossOrigin(origins = "*")
public interface MonthlyIncomeRepository extends JpaRepository<MonthlyIncomes, Long> {
    @Query("select distinct mi from MonthlyIncomes mi inner join mi.branch b on b.location = :branchLocation")
    Stream<MonthlyIncomes> findAllByBranchLocation(String branchLocation);
}
