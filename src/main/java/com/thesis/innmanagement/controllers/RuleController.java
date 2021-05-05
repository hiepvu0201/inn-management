package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Rules;
import com.thesis.innmanagement.services.RuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/rules")
public class RuleController {

    @Autowired
    private RuleService ruleService;

    @GetMapping("/")
    public List<Rules> GetAll(){
        return ruleService.findAll();
    }

    public ResponseEntity<Rules> GetRuleById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
        return ResponseEntity.ok().body(ruleService.findById(id));
    }

    @PostMapping("/")
    public Rules Create(@Validated @RequestBody Rules rule) throws Exception{
        return ruleService.createOrUpdate(null, rule);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Rules> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody Rules ruleDetail) throws Exception{
        Rules rule = ruleService.createOrUpdate(id, ruleDetail);
        return ResponseEntity.ok().body(rule);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return ruleService.delete(id);
    }
}
