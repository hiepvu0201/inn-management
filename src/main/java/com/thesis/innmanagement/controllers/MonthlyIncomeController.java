package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.models.Contracts;
import com.thesis.innmanagement.models.MonthlyIncomes;
import com.thesis.innmanagement.models.MonthlyPayments;
import com.thesis.innmanagement.repositories.MonthlyIncomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/monthlyincomes")
public class MonthlyIncomeController {

    @Autowired
    private MonthlyIncomeRepository monthlyIncomeRepository;

    @GetMapping("/")
    public List<MonthlyIncomes> GetAll(){
        return monthlyIncomeRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MonthlyIncomes> GetMonthlyIncomeById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
        MonthlyIncomes monthlyIncome = monthlyIncomeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Monthly income found on id: "+ id));
        return ResponseEntity.ok().body(monthlyIncome);
    }

    @PostMapping("/")
    public MonthlyIncomes Create(@Validated @RequestBody MonthlyIncomes monthlyIncome) throws Exception{
        return monthlyIncomeRepository.save(monthlyIncome);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MonthlyIncomes> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody MonthlyPayments monthlyIncomeDetails) throws Exception{

        MonthlyIncomes monthlyIncome = monthlyIncomeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Monthly income not found on id: "+ id));

        final MonthlyIncomes monthlyIncomeInfo = monthlyIncomeRepository.save(monthlyIncome);

        return ResponseEntity.ok().body(monthlyIncomeInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        MonthlyIncomes monthlyIncome = monthlyIncomeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Monthly income not found on: " + id));
        monthlyIncomeRepository.delete(monthlyIncome);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
