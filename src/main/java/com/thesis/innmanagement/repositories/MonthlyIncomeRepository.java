package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.MonthlyIncomes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.stream.Stream;

@Repository
@CrossOrigin(origins = "*")
public interface MonthlyIncomeRepository extends JpaRepository<MonthlyIncomes, Long> {
    @Query("select distinct mi from MonthlyIncomes mi inner join mi.branch b on b.location = :branchLocation order by mi.month ASC")
    Stream<MonthlyIncomes> findAllByBranchLocation(@Param("branchLocation") String branchLocation);

    @Query("select distinct mi from MonthlyIncomes mi inner join mi.branch b on b.location = :branchLocation and mi.month = :month")
    MonthlyIncomes findAllByBranchLocationAndMonth(@Param("branchLocation") String branchLocation,@Param("month") int month);
}
