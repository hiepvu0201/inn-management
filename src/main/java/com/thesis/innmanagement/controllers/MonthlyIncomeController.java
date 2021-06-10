package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.MonthlyIncomes;
import com.thesis.innmanagement.services.MonthlyIncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/monthly-incomes")
public class MonthlyIncomeController {

    @Autowired
    private MonthlyIncomeService monthlyIncomeService;

    @GetMapping("/")
    public List<MonthlyIncomes> getAll() {
        return monthlyIncomeService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MonthlyIncomes> getMonthlyIncomeById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(monthlyIncomeService.findById(id));
    }

    @GetMapping("/search-by-branch")
    public ResponseEntity<List<MonthlyIncomes>> getIncomeByBranch(@Param(value = "branchLocation") String branchLocation) {
        return ResponseEntity.ok().body(monthlyIncomeService.findAllByBranchLocation(branchLocation));
    }

    @PostMapping("/")
    public MonthlyIncomes create(@Validated @RequestBody MonthlyIncomes monthlyIncome) throws Exception {
        return monthlyIncomeService.createOrUpdate(null, monthlyIncome);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MonthlyIncomes> update(@PathVariable(value = "id") Long id, @Validated @RequestBody MonthlyIncomes monthlyIncomeDetails) throws Exception {
        MonthlyIncomes monthlyIncome = monthlyIncomeService.createOrUpdate(id, monthlyIncomeDetails);
        return ResponseEntity.ok().body(monthlyIncome);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return monthlyIncomeService.delete(id);
    }
}
