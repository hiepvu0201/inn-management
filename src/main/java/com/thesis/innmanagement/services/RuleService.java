package com.thesis.innmanagement.services;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Rules;
import com.thesis.innmanagement.repositories.RuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RuleService {

    @Autowired
    private RuleRepository ruleRepository;

    public List<Rules> findAll() {
        return ruleRepository.findAll();
    }

    public Rules findById(Long id) throws ResourceNotFoundException {
        return ruleRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Rule not found on id: "+id));
    }

    public Rules createOrUpdate(Long id, Rules rule) throws ResourceNotFoundException {
        if(id == null) {
            ruleRepository.save(rule);
            return rule;
        }
        else {
            Rules ruleUpdate = ruleRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("This rule not found on:" + id));
            ruleUpdate.setName(rule.getName());
            ruleUpdate.setDescription(rule.getDescription());
            ruleRepository.save(ruleUpdate);
            return ruleUpdate;
        }
    }

    public Map<String, Boolean> delete(Long id) throws ResourceNotFoundException {
        Rules rule = ruleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rule not found on: " + id));
        ruleRepository.delete(rule);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
