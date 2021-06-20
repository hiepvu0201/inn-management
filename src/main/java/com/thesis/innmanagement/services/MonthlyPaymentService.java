package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.MonthlyPayments;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.repositories.BranchRepository;
import com.thesis.innmanagement.repositories.MonthlyPaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

    @Transactional
    public List<MonthlyPayments> findAllByBranchLocation(String branchLocation) {
        return monthlyPaymentRepository.findAllByBranchLocation(branchLocation).collect(Collectors.toList());
    }

    public MonthlyPayments findAllByBranchLocationAndMonth(String branchLocation, int month) {
        return monthlyPaymentRepository.findAllByBranchLocationAndMonth(branchLocation, month);
    }

    public MonthlyPayments createOrUpdate(Long id, MonthlyPayments monthlyPayment) throws ResourceNotFoundException {
        if (monthlyPayment.getBranchId() != null) {
            monthlyPayment.setBranch(branchRepository.findById(monthlyPayment.getBranchId())
                    .orElseThrow(() -> new ResourceNotFoundException("Branch not found on id: " + monthlyPayment.getBranchId())));
        }
        monthlyPayment.setMonth(monthlyPayment.getMonth());
        if(id == null) {
            monthlyPaymentRepository.save(monthlyPayment);
            return monthlyPayment;
        }
        else {
            MonthlyPayments monthlyPaymentUpdate = monthlyPaymentRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This monthly payment not found on:" + id));
            monthlyPaymentUpdate.setCost(monthlyPayment.getCost());
            monthlyPaymentUpdate.setBranchId(monthlyPayment.getBranchId());
            monthlyPaymentUpdate.setBranch(monthlyPayment.getBranch());
            monthlyPaymentUpdate.setMonth(monthlyPayment.getMonth());
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
