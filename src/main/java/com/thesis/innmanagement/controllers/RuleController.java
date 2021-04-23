package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.models.Rules;
import com.thesis.innmanagement.repositories.RuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/rules")
public class RuleController {

    @Autowired
    private RuleRepository ruleRepository;

    @GetMapping("/")
    public List<Rules> GetAll(){
        return ruleRepository.findAll();
    }

    public ResponseEntity<Rules> GetRoleById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
        Rules rule = ruleRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Rule not found on id: "+id));
        return ResponseEntity.ok().body(rule);
    }

    @PostMapping("/")
    public Rules Create(@Validated @RequestBody Rules rule) throws Exception{
        return ruleRepository.save(rule);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Rules> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody Rules ruleDetail) throws Exception{

        Rules rule = ruleRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Rule not found on id: "+ id));

        final Rules ruleInfo = ruleRepository.save(rule);

        return ResponseEntity.ok().body(ruleInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        Rules rule = ruleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rule not found on: " + id));
        ruleRepository.delete(rule);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
