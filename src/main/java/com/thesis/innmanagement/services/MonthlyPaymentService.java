package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.Branches;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.MonthlyPayments;
import com.thesis.innmanagement.repositories.BranchRepository;
import com.thesis.innmanagement.repositories.MonthlyPaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class MonthlyPaymentService {

    @Autowired
    private MonthlyPaymentRepository monthlyPaymentRepository;

    @Autowired
    private BranchRepository branchRepository;

    public List<MonthlyPayments> findAll() {
        return monthlyPaymentRepository.findAll();
    }

    public MonthlyPayments findById(Long id) throws ResourceNotFoundException {
        return monthlyPaymentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Monthly payment not found on id: "+id));
    }

    public MonthlyPayments createOrUpdate(Long id, MonthlyPayments monthlyPayment) throws ResourceNotFoundException {
        if(id == null) {
            monthlyPaymentRepository.save(monthlyPayment);
            return monthlyPayment;
        }
        else {
            MonthlyPayments monthlyPaymentUpdate = monthlyPaymentRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This monthly payment not found on:" + id));
            monthlyPaymentUpdate.setItemName(monthlyPayment.getItemName());
            monthlyPaymentUpdate.setCost(monthlyPayment.getCost());
            monthlyPaymentRepository.save(monthlyPaymentUpdate);
            return monthlyPaymentUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        MonthlyPayments monthlyPayment = monthlyPaymentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Monthly payment not found on: " + id));
        monthlyPaymentRepository.delete(monthlyPayment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
