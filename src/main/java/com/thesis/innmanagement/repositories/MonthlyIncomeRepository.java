package com.thesis.innmanagement.repositories;

import com.thesis.innmanagement.entities.MonthlyIncomes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "*")
public interface MonthlyIncomeRepository extends JpaRepository<MonthlyIncomes, Long> {
}
