package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.entities.Branches;
import com.thesis.innmanagement.services.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/branches")
public class BranchController {

    @Autowired
    private BranchService branchService;

    @GetMapping("/")
    public List<Branches> getAll(){
        return branchService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Branches> getBranchesById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok().body(branchService.findById(id));
    }

    @PostMapping("/")
    public Branches create(@Validated @RequestBody Branches branch) throws Exception{
        return branchService.createOrUpdate(null, branch);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Branches> update(@PathVariable(value = "id") Long id, @Validated @RequestBody Branches branchDetails) throws Exception{
        Branches branch = branchService.createOrUpdate(id, branchDetails);
        return ResponseEntity.ok().body(branch);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        return branchService.delete(id);
    }
}
