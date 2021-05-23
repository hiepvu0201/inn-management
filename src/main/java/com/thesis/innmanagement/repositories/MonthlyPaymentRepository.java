package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.MonthlyPayments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.stream.Stream;

@Repository
@CrossOrigin(origins = "*")
public interface MonthlyPaymentRepository extends JpaRepository<MonthlyPayments, Long> {
    @Query("select distinct mp from MonthlyPayments mp inner join mp.branch b on b.location = :branchLocation")
    Stream<MonthlyPayments> findAllByBranchLocation(String branchLocation);
}
