package com.thesis.innmanagement.services;

import com.thesis.innmanagement.entities.Branches;
import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.MonthlyIncomes;
import com.thesis.innmanagement.repositories.BranchRepository;
import com.thesis.innmanagement.repositories.MonthlyIncomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class MonthlyIncomeService {

    @Autowired
    private MonthlyIncomeRepository monthlyIncomeRepository;

    @Autowired
    private BranchRepository branchRepository;

    public List<MonthlyIncomes> findAll() {
        return monthlyIncomeRepository.findAll();
    }

    public MonthlyIncomes findById(Long id) throws ResourceNotFoundException {
        return monthlyIncomeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Monthly income not found on id: "+id));
    }

    public MonthlyIncomes createOrUpdate(Long id, MonthlyIncomes monthlyIncomes) throws ResourceNotFoundException {
        if(id == null) {
            monthlyIncomeRepository.save(monthlyIncomes);
            return monthlyIncomes;
        }
        else {
            MonthlyIncomes monthlyIncomeUpdate = monthlyIncomeRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This monthly income not found on:" + id));
            monthlyIncomeUpdate.setItemName(monthlyIncomes.getItemName());
            monthlyIncomeUpdate.setEarn(monthlyIncomes.getEarn());
            monthlyIncomeRepository.save(monthlyIncomeUpdate);
            return monthlyIncomeUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        MonthlyIncomes monthlyIncomes = monthlyIncomeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Monthly income not found on: " + id));
        monthlyIncomeRepository.delete(monthlyIncomes);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
