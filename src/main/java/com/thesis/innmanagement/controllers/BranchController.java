package com.thesis.innmanagement.controllers;

import com.thesis.innmanagement.exceptions.ResourceNotFoundException;
import com.thesis.innmanagement.models.Branches;
import com.thesis.innmanagement.repositories.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/branches")
public class BranchController {

    @Autowired
    private BranchRepository branchRepository;

    @GetMapping("/")
    public List<Branches> GetAll(){
        return branchRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Branches> GetBranchesById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException {
        Branches branch = branchRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Branch not found on id: " + id));
        return ResponseEntity.ok().body(branch);
    }

    @PostMapping("/")
    public Branches Create(@Validated @RequestBody Branches branch) throws Exception{
        return branchRepository.save(branch);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Branches> Update(@PathVariable(value = "id") Long id, @Validated @RequestBody Branches branchDetails) throws Exception{
        Branches branch = branchRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Branch not found on id: "+ id));
        final Branches branchInfo = branchRepository.save(branch);
        return ResponseEntity.ok().body(branchInfo);
    }

    @DeleteMapping("/{id}/delete")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws
            Exception {
        Branches branch = branchRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Branch not found on: " + id));
        branchRepository.delete(branch);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
