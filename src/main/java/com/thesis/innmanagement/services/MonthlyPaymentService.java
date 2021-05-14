package com.thesis.innmanagement.services;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.MonthlyPayments;
import com.thesis.innmanagement.repositories.BranchRepository;
import com.thesis.innmanagement.repositories.MonthlyPaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.module.ResolutionException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
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
        monthlyPayment.setBranch(branchRepository.findById(monthlyPayment.getBranchId()).orElseThrow(() -> new ResolutionException("Branch not found on id: " + monthlyPayment.getBranchId())));
        if(id == null) {
            monthlyPaymentRepository.save(monthlyPayment);
            return monthlyPayment;
        }
        else {
            MonthlyPayments monthlyPaymentUpdate = monthlyPaymentRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This monthly payment not found on:" + id));
            monthlyPaymentUpdate.setItemName(monthlyPayment.getItemName());
            monthlyPaymentUpdate.setCost(monthlyPayment.getCost());
            monthlyPaymentUpdate.setBranchId(monthlyPayment.getBranchId());
            monthlyPaymentUpdate.setBranch(monthlyPayment.getBranch());
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
