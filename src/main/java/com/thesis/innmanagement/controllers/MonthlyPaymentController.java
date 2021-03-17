package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.models.Contracts;
import com.thesis.innmanagement.models.MonthlyPayments;
import com.thesis.innmanagement.repositories.MonthlyPaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/monthlypayments")
public class MonthlyPaymentController {

    @Autowired
    private MonthlyPaymentRepository monthlyPaymentRepository;

    @GetMapping("/")
    public List<MonthlyPayments> GetAll(){
        return monthlyPaymentRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MonthlyPayments> GetMonthlyPaymentById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
        MonthlyPayments monthlyPayment = monthlyPaymentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Monthly payment not found on id: "+id));
        return ResponseEntity.ok().body(monthlyPayment);
    }

    @PostMapping("/")
    public MonthlyPayments Create(@Validated @RequestBody MonthlyPayments monthlyPayment) throws Exception{
        return monthlyPaymentRepository.save(monthlyPayment);
    }


    @PutMapping("/{id}")
    public ResponseEntity<MonthlyPayments> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody MonthlyPayments monthlyPaymentDetails) throws Exception{

        MonthlyPayments monthlyPayment = monthlyPaymentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Monthly payment not found on id: "+ id));

        final MonthlyPayments monthlyPaymentInfo = monthlyPaymentRepository.save(monthlyPayment);

        return ResponseEntity.ok().body(monthlyPaymentInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        MonthlyPayments monthlyPayment = monthlyPaymentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Monthly payment not found on: " + id));
        monthlyPaymentRepository.delete(monthlyPayment);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
