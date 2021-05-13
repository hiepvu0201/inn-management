package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.MonthlyPayments;
import com.thesis.innmanagement.services.MonthlyPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/monthly-payments")
public class MonthlyPaymentController {

    @Autowired
    private MonthlyPaymentService monthlyPaymentService;

    @GetMapping("/")
    public List<MonthlyPayments> getAll() {
        return monthlyPaymentService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MonthlyPayments> getMonthlyPaymentById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(monthlyPaymentService.findById(id));
    }

    @PostMapping("/")
    public MonthlyPayments create(@Validated @RequestBody MonthlyPayments monthlyPayment) throws Exception {
        return monthlyPaymentService.createOrUpdate(null, monthlyPayment);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MonthlyPayments> update(@PathVariable(value = "id") Long id, @Validated @RequestBody MonthlyPayments monthlyPaymentDetails) throws Exception {
        MonthlyPayments monthlyPayment = monthlyPaymentService.createOrUpdate(id, monthlyPaymentDetails);
        return ResponseEntity.ok().body(monthlyPayment);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return monthlyPaymentService.delete(id);
    }
}
